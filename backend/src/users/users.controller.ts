import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.interface';
import { ResultSet } from '@libsql/client/.';


@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Post()
  async createUser(@Body() user: User): Promise<number> {
    try {
      const userFromDatabase = await this.userService.getUserByEmail(user.email);
      if (userFromDatabase.id != 0) {
        return userFromDatabase.id
      }
      else {
        const createdUserId = await this.userService.createUser(user);
        return createdUserId;
      }
    } catch (error) {
      console.log(error);
      throw new HttpException("Hiba a felhasználó létrehozása közben", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
