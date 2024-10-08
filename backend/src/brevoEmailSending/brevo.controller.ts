import { Body, Controller, HttpCode, HttpException, HttpStatus, Post, Put } from '@nestjs/common';
import { BrevoService } from './brevo.service';
import { UsersService } from 'src/users/users.service';
import { ApplicationsService } from 'src/applications/applications.service';
import { AuthService } from 'src/authentication/auth.service';

@Controller('api/mail')
export class BrevoController {
    constructor(
        private readonly brevoService: BrevoService, 
        private readonly applicationService: ApplicationsService,
        private readonly userService: UsersService,
        private readonly authService: AuthService
    ) { }

    @Post()
    async sendVerificationEmailToGuest(@Body() body: object): Promise<MethodDecorator> {
        try {
            const applicationFromDatabase = await this.applicationService.getApplicationById(body['id'])
            const userFromDatabase = await this.userService.getUserById(applicationFromDatabase.user_id)
            const guestToken = await this.authService.generateToken(userFromDatabase)
            if(applicationFromDatabase.id != 0 && userFromDatabase.id != 0){
                await this.brevoService.sendVerificationEmailToGuest(userFromDatabase, applicationFromDatabase.id, guestToken);
                return HttpCode(201)
            }
            else{
                // ???? Mikor tud ez bekovetkezni ????
                console.log("Felhasználó vagy jelentkezés nem található!", HttpStatus.NOT_FOUND)
                throw new HttpException("Felhasználó vagy jelentkezés nem található!", HttpStatus.NOT_FOUND)
            }
        } catch (error) {
            console.log("Szerver hiba!", HttpStatus.INTERNAL_SERVER_ERROR)
            throw new HttpException("Szerver hiba!", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Put('register')
    async sendRegistrationEmailToGuest(@Body() body: object): Promise<MethodDecorator>{
        try {
            const userFromDatabase = await this.userService.getUserById(body['id'])
            const guestToken = await this.authService.generateToken(userFromDatabase)
            if(userFromDatabase.id != 0){
                await this.brevoService.sendRegistrationEmailToGuest(userFromDatabase, guestToken);
                return HttpCode(200)
            }
            else{
                throw new HttpException("Felhasználó nem található!", HttpStatus.NOT_FOUND)
            }
        } catch (error) {
            console.log("Szerver hiba!", HttpStatus.INTERNAL_SERVER_ERROR)
            throw new HttpException("Szerver hiba!", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}