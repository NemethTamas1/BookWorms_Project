import { CanActivate, ExecutionContext, Injectable, SetMetadata, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Role } from 'src/enums/role.enum';

export let idFromToken:number = 0

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,
        private reflector: Reflector
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        let payload: object;
        let requiredRoles = []
        console.log(token)
        if (!token) {
            throw new UnauthorizedException();
        }
        try {
            payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: process.env.JWT_SECRET
                }
            );
            request['user'] = payload;
            requiredRoles = this.reflector.getAllAndOverride<Role[]>('status', [
                context.getHandler(),
                context.getClass(),
            ]);
            if (!requiredRoles) {
                return true;
            }
            console.log(requiredRoles)
            console.log(payload)
        } catch {
            throw new UnauthorizedException();
        }
        idFromToken = payload['sub']
        return requiredRoles.some((role) => payload['status'] == role);
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        console.log(request.headers.authorization)
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'User' ? token : type === 'Admin' ? token : undefined;
    }
}