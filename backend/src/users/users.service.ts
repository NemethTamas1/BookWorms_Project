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

    async getUserByEmail(email:string):Promise<User>{
        let user: User = {
            id: 0,
            first_name: '',
            family_name: '',
            email: '',
            password: ''
        }
        const userFromDatabase = await this.dbConnect.turso.execute({
            sql: "SELECT * FROM User WHERE email = $email",
            args: {email}
        })
        if(userFromDatabase.rows.length > 0){
            user.id = userFromDatabase["rows"][0]["id"] as number
            user.first_name = userFromDatabase["rows"][0]["first_name"] as string
            user.family_name = userFromDatabase["rows"][0]["family_name"] as string
            user.email = userFromDatabase["rows"][0]["email"] as string
            user.password = userFromDatabase["rows"][0]["password"] as string
        }
        return user
    }
}