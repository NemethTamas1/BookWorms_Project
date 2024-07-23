import { Injectable } from '@nestjs/common';
import { Book } from './book.interface';
import { DatabaseService } from 'src/database/db.service';

@Injectable()
export class BooksService {
  dbConnect = new DatabaseService()

  async getBooks() {
    const books: Book[] = [];
    const bookFromDatabase = await this.dbConnect.turso.execute("SELECT * FROM Book")
    console.log(bookFromDatabase["rows"])
    for (let i = 0; i < bookFromDatabase["rows"].length; i++) {
      const book: Book = {
        id: bookFromDatabase["rows"][i]["id"] as number,
        title: bookFromDatabase["rows"][i]["title"] as string,
        description: bookFromDatabase["rows"][i]["description"] as string
      }
      books.push(book)
    }
    return books
  }
}
