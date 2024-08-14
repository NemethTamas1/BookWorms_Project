import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NodeMailerService {
  constructor(private readonly mailService: MailerService) {}

  async sendMail(userEmail: string, message: string, subject: string) {
    this.mailService.sendMail({
      from: 'Vízionárius <vizionarius@licitaljkonyvre.com>',
      to: userEmail,
      subject: subject,
      text: message,
    });
  }
}