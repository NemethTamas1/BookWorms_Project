import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.interface';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}
    
    //Generate a token by the users email, id, and status
    async generateToken(user: User): Promise<string> {
        const payload = { email: user.email, sub: user.id, status: user.status };
        return this.jwtService.sign(payload);
    }
}

