import { Injectable } from '@nestjs/common';
import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend';
import { User } from 'src/users/user.interface';

@Injectable()
export class MailsenderService {
    mailerSend: MailerSend = new MailerSend({ apiKey: process.env.MAILERSEND_TOKEN })

    async sendVerificationEmailToGuest(user: User) {
        const sentFrom = new Sender("MS_5UXyrv@trial-z3m5jgr5zedldpyo.mlsender.net", "BookWorms")
        const recipient = [new Recipient(user.email, user.first_name)]
        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipient)
            .setReplyTo(sentFrom)
            .setSubject("Visszaigazoló email jelentkezéshez")
            .setText(`http://localhost:5173/changeGuestStatus/?id=${user.id}`)

        await this.mailerSend.email.send(emailParams)
    }
}
