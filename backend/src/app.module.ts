import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';
import { ApplicationsModule } from './applications/applications.module';
import { UsersModule } from './users/users.module';
import { MailsenderModule } from './mailsender/mailsender.module';
import { AuthModule } from './authentication/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MetricsModule } from './metrics/metrics.module'; // Import the MetricsModule from the appropriate module.
@Module({
  imports: [
    ConfigModule.forRoot(), 
    BooksModule,
    ApplicationsModule,
    UsersModule,
    MailsenderModule,
    AuthModule,
    MetricsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      //exclude: ['/api*'], //correct? idk
    }),
  ],
})
export class AppModule {}
