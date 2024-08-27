import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { MetricsService } from 'src/metrics/metrics.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [BooksController],
  providers: [BooksService, MetricsService],
})
export class BooksModule {}