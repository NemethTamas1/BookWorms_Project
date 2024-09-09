import { Injectable } from '@nestjs/common';
import { Book } from './book.interface';
import { DatabaseService } from 'src/database/db.service';
import { ResultSet } from '@libsql/client/.';

@Injectable()
export class BooksService {
  dbConnect = new DatabaseService()

  async getBooks() {
    const books: Book[] = [];
    const bookFromDatabase = await this.dbConnect.turso.execute("SELECT * FROM Book")
    for (let i = 0; i < bookFromDatabase["rows"].length; i++) {
      const book: Book = {
        id: bookFromDatabase["rows"][i]["id"] as number,
        title: bookFromDatabase["rows"][i]["title"] as string,
        description: bookFromDatabase["rows"][i]["description"] as string,
        bid_end_date: bookFromDatabase["rows"][i]["bid_end_date"] as unknown as Date,
      }
      books.push(book)
    }
    return books
  }

  async modifyBookById(book: Book): Promise<Array<ResultSet>> {
    const updatedBook = await this.dbConnect.turso.batch([{
      sql: "UPDATE Book SET id = :id, title = :title, description = :description, bid_end_date = :bid_end_date WHERE id = :id",
      args: {
        id: book.id as number,
        title: book.title as string,
        description: book.description as string,
        bid_end_date: book.bid_end_date as Date,
      }
    }],
      "write",
    );
    return updatedBook
  }
}
