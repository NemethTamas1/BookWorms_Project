import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { MailsenderService } from './mailsender.service';
import { User } from 'src/users/user.interface';

@Controller('mail')
export class MailsenderController {
    constructor(private readonly mailsenderService: MailsenderService) { }
    @Post()
    async sendVerificationEmailToGuest(@Body() user: User): Promise<MethodDecorator> {
        try {
            await this.mailsenderService.sendVerificationEmailToGuest(user);
            return HttpCode(200)
        } catch (error) {
            console.log(error)
        }
    }
}