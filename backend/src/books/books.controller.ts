import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.interface';
import { MetricsService } from 'src/metrics/metrics.service';

@Controller('api/books')
export class BooksController {
    constructor(private readonly booksService: BooksService, private readonly metricsService: MetricsService){}
    @Get()
    async getAllBooks(): Promise<Book[]>{
        this.metricsService.incrementBooksAccessed();
        return await this.booksService.getBooks();
    }
}