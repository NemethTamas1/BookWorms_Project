import { Controller, Post, Body, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.interface';

@Controller('user')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}

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
      const token = await this.userService.login(email, password);
      if (token) {
        //console.log(`User ${email} successfully logged in.`);
        return {
          access_token: token,
          expires_in: 3600,
          token_type: 'Bearer',
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
}
