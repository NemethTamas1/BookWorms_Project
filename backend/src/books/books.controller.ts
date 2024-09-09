import { Body, Controller, Get, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.interface';
import { ResultSet } from '@libsql/client/.';

@Controller('api/books')
export class BooksController {
    constructor(private readonly booksService: BooksService){}
    @Get()
    async getAllBooks(): Promise<Book[]>{
        return await this.booksService.getBooks();
    }

    @Put()
    async modifyBookById(@Body() book: Book): Promise<ResultSet[]>{
        return await this.booksService.modifyBookById(book);
    }
}