import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
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

}