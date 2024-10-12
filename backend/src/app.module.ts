import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';
import { ApplicationsModule } from './applications/applications.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './authentication/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { BrevoModule } from './brevoEmailSending/brevo.module';
import { BidGateway } from './bid/bid.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the config available globally
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
    }), 
    BooksModule,
    ApplicationsModule,
    UsersModule,
    AuthModule,
    BrevoModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      //exclude: ['/api*'], //correct? idk
    }),
  ],
  providers: [BidGateway]
})
export class AppModule {constructor() {
  // Log NODE_ENV to verify it's being passed correctly
  console.log('Current NODE_ENV:', process.env.NODE_ENV);

  // Optionally, log a value from the env file to check which file is being loaded
  console.log('Database URL:', process.env.DATABASE_URL); 
  }
}
