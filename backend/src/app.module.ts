import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';
import { ApplicationsModule } from './applications/applications.module';
import { UsersModule } from './users/users.module';
import { MailsenderModule } from './mailsender/mailsender.module';
import { AuthModule } from './authentication/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { BidGateway } from './bid/bid.gateway';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    BooksModule,
    ApplicationsModule,
    UsersModule,
    MailsenderModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      //exclude: ['/api*'], //correct? idk
    }),
  ],
  providers: [BidGateway]
})
export class AppModule {}
