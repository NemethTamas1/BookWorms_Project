import { Controller, Post, Body, HttpException, HttpStatus, Get, Query, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.interface';
import { ResultSet } from '@libsql/client/.';
import { Role } from 'src/enums/role.enum';
import { Roles } from 'src/authentication/roles.decorator';
import { AuthGuard } from 'src/authentication/auth.guard';
import { statusFromToken, idFromToken } from 'src/authentication/auth.guard';

@Controller('api/user')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Roles(Role.Admin, Role.User)
  @UseGuards(AuthGuard)
  @Get()
  async getUser(@Query('id') id: number): Promise<User> {
    if (statusFromToken == 3) {
      try {
        const userFromDatabase = await this.userService.getUserById(id)
        if (userFromDatabase.id != 0) {
          return userFromDatabase
        }
        else {
          throw new HttpException('Nem található user a megadott id-val!', HttpStatus.NOT_FOUND);
        }
      } catch (error) {
        console.log(error)
        throw new HttpException('Szerver hiba!', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
    else if (statusFromToken == 2) {
      if (idFromToken == id) {
        try {
          const userFromDatabase = await this.userService.getUserById(id)
          if (userFromDatabase.id != 0) {
            return userFromDatabase
          }
          else {
            throw new HttpException('Nem található user a megadott id-val!', HttpStatus.NOT_FOUND);
          }
        } catch (error) {
          console.log('Szerver hiba!', HttpStatus.INTERNAL_SERVER_ERROR)
          throw new HttpException('Szerver hiba!', HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
      else {
        console.log("Unathorized request!", HttpStatus.UNAUTHORIZED)
        throw new HttpException("Unathorized request!", HttpStatus.UNAUTHORIZED)
      }
    }

  }

  @Post()
  async createUser(@Body() user: User): Promise<number> {
    try {
      const userFromDatabase = await this.userService.getUserByEmail(user.email);
      if (userFromDatabase.id !== 0) {
        return userFromDatabase.id;
      } else {
        const createdUserId = await this.userService.createUser(user);
        return createdUserId;
      }
    } catch (error) {
      console.log('Error creating user', error.stack);
      throw new HttpException('Hiba a felhasználó létrehozása közben', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    const { email, password } = loginDto;
    console.log(`Login attempt for email: ${email}`);
    try {
      const tokenAndUser = await this.userService.getTokenForUserOrAdmin(email, password);
      if (tokenAndUser) {
        return {
          access_token: tokenAndUser['token'],
          user: tokenAndUser['user']
        };
      } else {
        console.log(`Failed login attempt for email: ${email}`);
        console.log('Invalid credentials', HttpStatus.UNAUTHORIZED);
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }
    } catch (error) {
      console.log('Error during login', error.stack);
      console.log('Login failed', HttpStatus.INTERNAL_SERVER_ERROR, error.message)
      throw new HttpException('Login failed', HttpStatus.INTERNAL_SERVER_ERROR, error.message);
    }
  }

  @Roles(Role.Admin, Role.User)
  @UseGuards(AuthGuard)
  @Put()
  async changeUserOrAdminData(@Body() user: User): Promise<ResultSet[]> {
    if (user.id == idFromToken) {
      try {
        const changedUserOrAdminData = await this.userService.changeUserOrAdminData(user);
        return changedUserOrAdminData
      } catch (error) {
        console.log('Error during data change!', error.stack);
        console.log('Data change failed!', HttpStatus.INTERNAL_SERVER_ERROR, error.message);
        throw new HttpException('Data change failed!', HttpStatus.INTERNAL_SERVER_ERROR, error.message);
      }
    }
    else {
      console.log("Unathorized request!", HttpStatus.UNAUTHORIZED)
      throw new HttpException("Unathorized request!", HttpStatus.UNAUTHORIZED)
    }
  }

  @Roles(Role.Guest)
  @UseGuards(AuthGuard)
  @Put('registration')
  async addUserPasswordAndUpdateStatus(@Query('id') id: number, @Body() password: object): Promise<ResultSet[]> {
    try {
      const updatedUserResult = await this.userService.changeUserStatusAndAddPasswordById(id, await this.userService.hashPassword(password['password']))
      return updatedUserResult
    } catch (error) {
      console.log('Error during registration!', error.stack);
      console.log('Registration failed!', HttpStatus.INTERNAL_SERVER_ERROR, error.message);
      throw new HttpException('Registration failed!', HttpStatus.INTERNAL_SERVER_ERROR, error.message);
    }
  }
}
