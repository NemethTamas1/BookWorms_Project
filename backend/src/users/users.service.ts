import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { DatabaseService } from 'src/database/db.service';

@Injectable()
export class UsersService {
    constructor(private readonly dbService: DatabaseService) {}

    async createUser(user: User) {
        await this.dbService.turso.execute("INSERT INTO User (first_name, family_name, email, password) VALUES (${user.id}, ${user.first_name}, ${user.family_name}, ${user.email}, ${user.password})");
        return user;
    }
}