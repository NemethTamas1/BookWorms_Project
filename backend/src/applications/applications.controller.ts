import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, Put } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { Application } from './applications.interface';
import { ResultSet } from '@libsql/client/.';

@Controller('applications')
export class ApplicationsController {
    constructor(private readonly applicationService: ApplicationsService){}
    @Post()
    async createApplication(@Body() application: Application): Promise<ResultSet[]>{
        try {
            const createdApplication = await this.applicationService.createApplication(application);
            return createdApplication;
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