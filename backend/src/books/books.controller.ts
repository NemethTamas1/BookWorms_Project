import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.interface';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService){}
    @Get()
    async getAllBooks(): Promise<Book[]>{
        return await this.booksService.getBooks();
    }
}