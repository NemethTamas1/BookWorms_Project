import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
import { ApplicationsModule } from 'src/applications/applications.module';
import { AuthService } from 'src/authentication/auth.service';
import { BrevoController } from './brevo.controller';
import { BrevoService } from './brevo.service';

@Module({
  imports: [ConfigModule.forRoot(), ApplicationsModule, UsersModule],
  controllers: [BrevoController],
  providers: [BrevoService, AuthService],
})
export class BrevoModule {}