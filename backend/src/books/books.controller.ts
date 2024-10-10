import { Body, Controller, Get, HttpException, HttpStatus, Put, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.interface';
import { ResultSet } from '@libsql/client/.';
import { Roles } from 'src/authentication/roles.decorator';
import { AuthGuard } from 'src/authentication/auth.guard';
import { Role } from 'src/enums/role.enum';

@Controller('api/books')
export class BooksController {
    constructor(private readonly booksService: BooksService){}
    @Get()
    async getAllBooks(): Promise<Book[]>{
        try {
            return await this.booksService.getBooks();
        } catch (error) {
            console.error("Error getting books:", error);
            throw new HttpException("Error getting books:", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Roles(Role.Admin)
    @UseGuards(AuthGuard)
    @Put()
    async modifyBookById(@Body() book: Book): Promise<ResultSet[]>{
        try {
            return await this.booksService.modifyBookById(book);
        } catch (error) {
            console.error("Error during book modify:", error);
            throw new HttpException("Error during book modify:", HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }

    @Get('id')
    async getBookById(@Body() id: number): Promise<Book>{
        try {
            return await this.booksService.getBookById(id);
        } catch (error) {
            console.error("Error getting book by id:", error);
            throw new HttpException("Error getting book by id:", HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }
}