import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailsenderService } from './mailsender.service';
import { MailsenderController } from './mailsender.controller';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';


@Module({
  imports: [ConfigModule.forRoot(), UsersModule],
  controllers: [MailsenderController],
  providers: [MailsenderService],
})
export class MailsenderModule {}