import { Controller, Get } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { Application } from './applications.interface';

@Controller('applications')
export class ApplicationsController {
    constructor(private readonly booksService: ApplicationsService){}
    @Get()
    async getAllApplications(): Promise<Application[]>{
        return await this.booksService.getApplications();
    }
}