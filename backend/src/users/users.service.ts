import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { DatabaseService } from 'src/database/db.service';
import { AuthService } from 'src/authentication/auth.service';


@Injectable()
export class UsersService {
    dbConnect = new DatabaseService()

    constructor(private readonly authService: AuthService){}

    async createUser(user: User): Promise<number> {
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
        return Number(createdUser[0]["lastInsertRowid"])
    }

    async getUserByEmail(email:string):Promise<User>{
        let user: User = {
            id: 0,
            first_name: '',
            family_name: '',
            email: '',
            password: '',
            status: 1
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
            user.status = userFromDatabase["rows"][0]["status"] as number
        }
        return user
    }

    async getUserById(userId:number):Promise<User>{
        let user: User = {
            id: 0,
            first_name: '',
            family_name: '',
            email: '',
            password: '',
            status: 1
        }
        const userFromDatabase = await this.dbConnect.turso.execute({
            sql: "SELECT * FROM User WHERE id = $userId",
            args: {userId : userId}
        })
        if(userFromDatabase.rows.length > 0){
            user.id = userFromDatabase["rows"][0]["id"] as number
            user.first_name = userFromDatabase["rows"][0]["first_name"] as string
            user.family_name = userFromDatabase["rows"][0]["family_name"] as string
            user.email = userFromDatabase["rows"][0]["email"] as string
            user.password = userFromDatabase["rows"][0]["password"] as string
            user.status = userFromDatabase["rows"][0]["status"] as number
        }
        return user
    }


    async validateUserOrAdmin(email: string, password: string): Promise<User | null> {
        const user = await this.getUserByEmail(email);
        if ( user && user.password === password && (user.status == 3 || user.status == 4) ) {
            return user;
        }
        return null;
    }

    async getTokenForUserOrAdmin(email: string, password: string): Promise<object | null> {
        const user = await this.validateUserOrAdmin(email, password);
        if (user) {
            const token = await this.authService.generateTokenForUserOrAdmin(user)
            return {token: token, user: user}
        }
        console.log(`Failed login attempt with email: ${email}`);
        return null;
    }
}