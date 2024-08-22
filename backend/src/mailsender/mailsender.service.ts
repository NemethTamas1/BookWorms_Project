import { Injectable } from '@nestjs/common';
import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend';
import { User } from 'src/users/user.interface';

@Injectable()
export class MailsenderService {
    mailerSend: MailerSend = new MailerSend({ apiKey: process.env.MAILERSEND_TOKEN })

    async sendVerificationEmailToGuest(user: User, application_id: number) {
        const sentFrom = new Sender("MS_5UXyrv@trial-z3m5jgr5zedldpyo.mlsender.net", "BookWorms")
        const recipient = [new Recipient(user.email, user.first_name)]
        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipient)
            .setReplyTo(sentFrom)
            .setSubject("Visszaigazoló email jelentkezéshez")
            .setText(`Kattints a linkre a jelentkezés véglegesítéséhez: https://bookworms.fly.dev/changeGuestStatus/?id=${application_id}`)

        await this.mailerSend.email.send(emailParams)
    }

    async sendRegistrationEmailToGuest(user: User) {
        const sentFrom = new Sender("MS_5UXyrv@trial-z3m5jgr5zedldpyo.mlsender.net", "BookWorms")
        const recipient = [new Recipient(user.email, user.first_name)]
        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipient)
            .setReplyTo(sentFrom)
            .setSubject("Regisztrációs email")
            .setText(`Kattints a linkre a regisztrációhoz: https://bookworms.fly.dev/registration/?id=${user.id}`)

        await this.mailerSend.email.send(emailParams)
    }
}
