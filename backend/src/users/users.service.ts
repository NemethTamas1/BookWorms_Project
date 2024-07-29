import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { DatabaseService } from 'src/database/db.service';
import { promises } from 'dns';

@Injectable()
export class UsersService {
    constructor(private readonly dbService: DatabaseService) {}

    async createUser(user: User): Promise<User> {
        const createdUser = await this.dbService.createUser(user); //?
        return createdUser;
    }
}