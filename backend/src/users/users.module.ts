import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseService } from 'src/database/db.service';
import { AuthService } from 'src/authentication/auth.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [UsersController],
  providers: [UsersService, DatabaseService, AuthService],
  exports: [UsersService],
})
export class UsersModule {}