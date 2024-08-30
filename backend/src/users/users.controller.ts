import { Controller, Post, Body, HttpException, HttpStatus, Logger, Get, Query, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.interface';
import { ResultSet } from '@libsql/client/.';

@Controller('api/user')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(private readonly userService: UsersService) {}

  @Get()
  async getUser(@Query('id') id: number): Promise<User>{
    try {
      const userFromDatabase = await this.userService.getUserById(id)
      if(userFromDatabase.id != 0){
        return userFromDatabase
      }
      else{
        throw new HttpException('Nem található user a megadott id-val!', HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      console.log(error)
      throw new HttpException('Szerver hiba!', HttpStatus.INTERNAL_SERVER_ERROR);
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
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }
    } catch (error) {
      console.log('Error during login', error.stack);
      throw new HttpException('Login failed', HttpStatus.INTERNAL_SERVER_ERROR, error.message);
    }
  }

  @Put()
  async changeUserStatusById(@Query('id') id: number): Promise<ResultSet[]>{
    try {
      const changedUserStatus = await this.userService.changeUserStatusById(id, 2);
      return changedUserStatus
    } catch (error) {
      console.log('Error during status change!', error.stack);
      throw new HttpException('Status change failed!', HttpStatus.INTERNAL_SERVER_ERROR, error.message);
    }
  }

  @Put('registration')
  async addUserPasswordAndUpdateStatus(@Query('id') id: number, @Body() password: object) : Promise<ResultSet[]>{
    try {
      const updatedUserResult = await this.userService.changeUserStatusAndAddPasswordById(id, await this.userService.hashPassword(password['password']))
      return updatedUserResult
    } catch (error) {
      console.log('Error during registration!', error.stack);
      throw new HttpException('Registration failed!', HttpStatus.INTERNAL_SERVER_ERROR, error.message);
    }
  }
}
