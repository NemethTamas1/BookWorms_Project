import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NodeMailerController } from './nodemailer.controller';
import { NodeMailerService } from './nodemailer.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [NodeMailerController],
  providers: [NodeMailerService],
})
export class NodeMailerModule {}