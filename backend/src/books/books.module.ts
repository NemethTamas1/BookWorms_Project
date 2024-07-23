import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}