import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailsenderService } from './mailsender.service';
import { MailsenderController } from './mailsender.controller';


@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [MailsenderController],
  providers: [MailsenderService],
})
export class MailsenderModule {}