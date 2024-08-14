import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { NodeMailerService } from 'src/nodemailer/nodemailer.service';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ApplicationsController],
  providers: [
    ApplicationsService,
    NodeMailerService,
    UsersService
  ],
})
export class ApplicationsModule {}