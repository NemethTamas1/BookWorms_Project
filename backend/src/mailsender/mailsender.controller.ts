import { Body, Controller, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { MailsenderService } from './mailsender.service';
import { UsersService } from 'src/users/users.service';
import { ApplicationsService } from 'src/applications/applications.service';

@Controller('mail')
export class MailsenderController {
    constructor(
        private readonly mailsenderService: MailsenderService, 
        private readonly applicationService: ApplicationsService,
        private readonly userService: UsersService
    ) { }

    @Post()
    async sendVerificationEmailToGuest(@Body() body: object): Promise<MethodDecorator> {
        try {
            const applicationFromDatabase = await this.applicationService.getApplicationById(body['id'])
            const userFromDatabase = await this.userService.getUserById(applicationFromDatabase.user_id)
            if(applicationFromDatabase.id != 0 && userFromDatabase.id != 0){
                await this.mailsenderService.sendVerificationEmailToGuest(userFromDatabase, applicationFromDatabase.id);
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