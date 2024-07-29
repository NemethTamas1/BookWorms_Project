import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { DatabaseService } from 'src/database/db.service';
import { ResultSet } from '@libsql/client/.';

@Injectable()
export class UsersService {
    dbConnect = new DatabaseService()

    async createUser(user: User): Promise<Array<ResultSet>> {
        const createdUser = await this.dbConnect.turso.batch([{
            sql: "INSERT INTO User (first_name, family_name, email, password) VALUES (:first_name, :family_name, :email, :password)",
            args: {
                first_name: user.first_name,
                family_name: user.family_name,
                email: user.email,
                password: user.password
            }
        }],
            "write"
        )
        return createdUser
    }
}