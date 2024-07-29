import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.interface';
import { ResultSet } from '@libsql/client/.';


@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(@Body() user: User): Promise<ResultSet[]> {
    try {
      console.log(user)
      const createdUser = await this.userService.createUser(user);
      return createdUser;
    } catch (error) {
      console.log(error);
      throw new HttpException("Hiba a felhasználó létrehozása közben", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
