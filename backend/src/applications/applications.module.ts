import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { AuthGuard } from 'src/authentication/auth.guard';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ApplicationsController],
  providers: [
    ApplicationsService,
    AuthGuard
  ],
  exports: [ApplicationsService]
})
export class ApplicationsModule {}