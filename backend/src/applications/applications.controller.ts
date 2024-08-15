import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, Put, BadRequestException, HttpCode } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { Application } from './applications.interface';
import { ResultSet } from '@libsql/client/.';
import { Response } from 'express';

@Controller('applications')
export class ApplicationsController {
    constructor(
        private readonly applicationService: ApplicationsService,
    ){}

    @Post()
    async createApplication(@Body() application: Application): Promise<MethodDecorator | Response>{
        try {
            const applicationFromDatabase = await this.applicationService.getApplicationWithUserIDAndBookID(application.user_id, application.book_id)
            if(applicationFromDatabase.id != 0){
                throw new BadRequestException("Erre a könyvre már jelentkeztek ezzel az email címmel!")
            }
            else{
                await this.applicationService.createApplication(application);
                return HttpCode(201);
            }
          } catch (error: any) {
            if(error.status == 400){
                throw new HttpException("Erre a könyvre már jelentkeztek ezzel az email címmel!", HttpStatus.BAD_REQUEST)    
            }
            else{
                throw new HttpException("Hiba a jelentkezés létrehozása közben", HttpStatus.INTERNAL_SERVER_ERROR)
            }
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