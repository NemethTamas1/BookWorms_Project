import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailsenderService } from './mailsender.service';
import { MailsenderController } from './mailsender.controller';
import { UsersModule } from 'src/users/users.module';
import { ApplicationsModule } from 'src/applications/applications.module';
import { AuthService } from 'src/authentication/auth.service';

@Module({
  imports: [ConfigModule.forRoot(), ApplicationsModule, UsersModule],
  controllers: [MailsenderController],
  providers: [MailsenderService, AuthService],
})
export class MailsenderModule {}