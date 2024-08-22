import { Body, Controller, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { MailsenderService } from './mailsender.service';
import { UsersService } from 'src/users/users.service';

@Controller('mail')
export class MailsenderController {
    constructor(
        private readonly mailsenderService: MailsenderService, 
        private readonly userService: UsersService
    ) { }

    @Post()
    async sendVerificationEmailToGuest(@Body() body: object): Promise<MethodDecorator> {
        try {
            const userFromDatabase = await this.userService.getUserById(body['id'])
            if(userFromDatabase.id != 0){
                await this.mailsenderService.sendVerificationEmailToGuest(userFromDatabase);
                return HttpCode(201)
            }
            else{
                throw new HttpException("Felhasználó nem található!", HttpStatus.NOT_FOUND)
            }
        } catch (error) {
            console.log(error)
            throw new HttpException("Szerver hiba!", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}