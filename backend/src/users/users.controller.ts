import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.interface';


@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    try {
      const createdUser = await this.userService.createUser(user);
      return createdUser;
    } catch (error) {
      console.log(error);
      throw new HttpException("Hiba a felhasználó létrehozása közben", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
