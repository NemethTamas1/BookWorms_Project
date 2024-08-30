import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.interface';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}
    
    async generateTokenForUserOrAdmin(user: User): Promise<string> {
        const payload = { email: user.email, sub: user.id, status: user.status };
        return this.jwtService.sign(payload);
    }
}

