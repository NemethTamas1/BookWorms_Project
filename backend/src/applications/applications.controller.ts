import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, Put, BadRequestException, HttpCode, Query } from '@nestjs/common';
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
    async createApplication(@Body() application: Application): Promise<ResultSet[] | Response>{
        try {
            const applicationFromDatabase = await this.applicationService.getApplicationWithUserIDAndBookID(application.user_id, application.book_id)
            if(applicationFromDatabase.id != 0){
                throw new BadRequestException("Erre a könyvre már jelentkeztek ezzel az email címmel!")
            }
            else{
                return await this.applicationService.createApplication(application);
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

    @Put()
    async changeUserStatusById(@Query('id') id: number): Promise<ResultSet[]>{
      try {
        const changedApplicationStatus = await this.applicationService.changeApplicationStatusById(id, 2);
        return changedApplicationStatus
      } catch (error) {
        console.log('Error during status change!', error.stack);
        throw new HttpException('Status change failed!', HttpStatus.INTERNAL_SERVER_ERROR, error.message);
      }
    }

    @Get('search-by-userid')
    async getApplicationsByUserId(@Query('userId') userId: number): Promise<Application[]> {
        try {
            const applications = await this.applicationService.getApplicationsByUserId(userId);
            if (!applications) {
                throw new HttpException("Application not found", HttpStatus.NOT_FOUND);
            }
            return applications;
        } catch (error) {
            console.error("Error getting application by id:", error);
            throw new HttpException("Error getting application by id", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('search-by-bookid')
    async getBiggestBid(@Query('bookId') bookId: number): Promise<number | number> {
        try {
            const biggestBid = await this.applicationService.getBiggestBid(bookId);
            if (!biggestBid) {
                throw new HttpException("Application not found", HttpStatus.NOT_FOUND);
            }
            return biggestBid as number;
        } catch (error) {
            console.error("Error getting biggest bid:", error);
            throw new HttpException("Error getting biggest bid", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}