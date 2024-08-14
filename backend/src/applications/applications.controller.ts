import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, Put, BadRequestException } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { Application } from './applications.interface';
import { ResultSet } from '@libsql/client/.';
import { Response } from 'express';
import { NodeMailerService } from 'src/nodemailer/nodemailer.service';
import { UsersService } from 'src/users/users.service';

@Controller('applications')
export class ApplicationsController {
    constructor(
        private readonly applicationService: ApplicationsService,
        private readonly nodeMailerService: NodeMailerService,
        private readonly userService: UsersService
    ){}

    @Post()
    async createApplication(@Body() application: Application): Promise<ResultSet[] | Response>{
        try {
            const applicationFromDatabase = await this.applicationService.getApplicationWithUserIDAndBookID(application.user_id, application.book_id)
            if(applicationFromDatabase.id != 0){
                throw new BadRequestException("Erre a könyvre már jelentkeztek ezzel az email címmel!")
            }
            else{
                const user = await this.userService.getUserById(application.user_id);
                const createdApplication = await this.applicationService.createApplication(application);
                await this.nodeMailerService.sendMail(user.email, "Tesz link", "Visszaigazoló email motivációs levél megerősítéséhez.");
                return createdApplication;
            }
          } catch (error) {
            console.log(error);
            throw new HttpException("Hiba a jelentkezés létrehozása közben", HttpStatus.INTERNAL_SERVER_ERROR)
          }
    }

    @Get()
    async getAllApplications(): Promise<Application[]>{
        return await this.applicationService.getApplications();
    }

    @Put('/:id')
    async updateApplication(
        @Param('id') id: number, 
        @Body() application: Application
    ): Promise<Application> {
        try {
            const updatedApplication = await this.applicationService.updateApplication(application);
            if (!updatedApplication) {
                throw new HttpException("Application not found", HttpStatus.NOT_FOUND);
            }
            return;
        } catch (error) {
            console.error("Error updating application:", error);
            throw new HttpException("Error updating application", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}