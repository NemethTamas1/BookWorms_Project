import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailsenderService } from './mailsender.service';
import { MailsenderController } from './mailsender.controller';
import { UsersModule } from 'src/users/users.module';
import { ApplicationsModule } from 'src/applications/applications.module';


@Module({
  imports: [ConfigModule.forRoot(), ApplicationsModule, UsersModule],
  controllers: [MailsenderController],
  providers: [MailsenderService],
})
export class MailsenderModule {}