import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';
import { ApplicationsModule } from './applications/applications.module';
import { UsersModule } from './users/users.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { NodeMailerModule } from './nodemailer/nodemailer.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    BooksModule,
    ApplicationsModule,
    UsersModule,
    NodeMailerModule,
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
        }
      }
    })
  ],
})
export class AppModule {}
