import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { DatabaseService } from 'src/database/db.service';
import { JwtService } from '@nestjs/jwt';
import { ResultSet } from '@libsql/client/.';
import { Logger } from '@nestjs/common';


@Injectable()
export class UsersService {
    dbConnect = new DatabaseService()
    private readonly logger = new Logger(UsersService.name);

    constructor(private readonly jwtService: JwtService) {}

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


    async validateUser(email: string, password: string): Promise<User | null> {
        const user = await this.getUserByEmail(email);
        if ( user && user.password === password ) {
            return user;
        }
        return null;
    }

    async generateToken(user: User): Promise<string> {
        const payload = { email: user.email };
        return this.jwtService.sign(payload);//Itt jön létre a token. A jwtService.sign egy objektumot vár, ami alapján generál kódot.
    }

    async login(email: string, password: string): Promise<string | null> {
        const user = await this.validateUser(email, password);
        if (user) {
            const payload = { email: user.email, sub: user.id };
            const token = this.jwtService.sign(payload);
            console.log(`User ${email} successfully logged in.`);
            return token;
        }
        console.log(`Failed login attempt for user with email: ${email}`);
        return null;
    }
}