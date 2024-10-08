import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.interface';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}
    
    async generateTokenForUserOrAdmin(user: User): Promise<string> {
        const payload = { email: user.email, sub: user.id };
        return this.jwtService.sign(payload);//Itt jön létre a token. A jwtService.sign egy objektumot vár, ami alapján generál kódot.
    }
}

