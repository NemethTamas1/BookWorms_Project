import { Injectable } from '@nestjs/common';
import { Application } from './applications.interface';
import { DatabaseService } from 'src/database/db.service';
import { ResultSet } from '@libsql/client/.';

@Injectable()
export class ApplicationsService {
  dbConnect = new DatabaseService()

  async getApplications() {
    const applications: Application[] = [];
    const applicationFromDatabase = await this.dbConnect.turso.execute("SELECT * FROM Application")
    console.log(applicationFromDatabase["rows"])
    for (let i = 0; i < applicationFromDatabase["rows"].length; i++) {
      const application: Application = {
        id: applicationFromDatabase["rows"][i]["id"] as number,
        book_id: applicationFromDatabase["rows"][i]["book_id"] as number,
        user_id: applicationFromDatabase["rows"][i]["user_id"] as number,
        application_status: applicationFromDatabase["rows"][i]["application_status"] as number,
        price: applicationFromDatabase["rows"][i]["price"] as number | null,
        motivational_letter: applicationFromDatabase["rows"][i]["motivational_letter"] as string
      }
      applications.push(application)
    }
    return applications
  }

  async getApplicationWithUserIDAndBookID(userID: number, bookID: number) {
    let application: Application = {
      id: 0,
      book_id: 0,
      user_id: 0,
      application_status: 1,
      price: 0,
      motivational_letter: 'string'
    }

    const applicationFromDatabase = await this.dbConnect.turso.execute({
      sql: "SELECT * FROM Application WHERE user_id = $userID AND book_id = $bookID",
      args: { userID, bookID }
    })

    if (applicationFromDatabase.rows.length > 0) {
      application.id = applicationFromDatabase["rows"][0]["id"] as number
      application.book_id = applicationFromDatabase["rows"][0]["book_id"] as number
      application.user_id = applicationFromDatabase["rows"][0]["user_id"] as number
      application.application_status = applicationFromDatabase["rows"][0]["application_status"] as number
      application.motivational_letter = applicationFromDatabase["rows"][0]["motivational_letter"] as string
    }

    return application
  }

  async createApplication(application: Application): Promise<Array<ResultSet>> {
    const createdApplication = await this.dbConnect.turso.batch([{
      sql: "INSERT INTO Application (book_id, user_id, application_status, price, motivational_letter) VALUES (:book_id, :user_id, :application_status, :price, :motivational_letter)",
      args: {
        book_id: application.book_id,
        user_id: application.user_id,
        application_status: application.application_status,
        price: application.price,
        motivational_letter: application.motivational_letter
      }
    }],
      "write"
    )
    return createdApplication
  }

  async updateApplication(application: Application): Promise<Array<ResultSet>> {
    const updatedApplication = await this.dbConnect.turso.batch([{
      sql: "UPDATE Application SET id = :id, book_id = :book_id, user_id = :user_id, application_status = :application_status, price = :price, motivational_letter = :motivational_letter WHERE id = :id",
      args: {
        id: application.id as number,
        book_id: application.book_id as number,
        user_id: application.user_id as number,
        application_status: application.application_status as number,
        price: application.price as number | null,
        motivational_letter: application.motivational_letter as string,
      }
    }],
      "write"
    );
    return updatedApplication

  }

  async changeApplicationStatusById(id: number, application_status: number) {
    const updatedUserStatus = await this.dbConnect.turso.batch([{
      sql: "UPDATE Application SET application_status = :application_status WHERE id = :id",
      args: {
        id: id as number,
        application_status: application_status as number
      }
    }],
      "write"
    );
    return updatedUserStatus
  }

  async getApplicationById(applicationId: number): Promise<Application> {
    let application: Application = {
      id: 0,
      book_id: 0,
      user_id: 0,
      application_status: 1,
      price: 0,
      motivational_letter: 'string'
    }
    const applicationFromDatabase = await this.dbConnect.turso.execute({
      sql: "SELECT * FROM Application WHERE id = $applicationId",
      args: { applicationId: applicationId }
    })
    if (applicationFromDatabase.rows.length > 0) {
      application.id = applicationFromDatabase["rows"][0]["id"] as number
      application.book_id = applicationFromDatabase["rows"][0]["book_id"] as number
      application.user_id = applicationFromDatabase["rows"][0]["user_id"] as number
      application.application_status = applicationFromDatabase["rows"][0]["application_status"] as number
      application.motivational_letter = applicationFromDatabase["rows"][0]["motivational_letter"] as string
    }
    return application
  }

  async getApplicationsByUserId(userId: number): Promise<Application[]> {
    const applications: Application[] = []
    const applicationFromDatabase = await this.dbConnect.turso.execute({
      sql: "SELECT * FROM Application WHERE user_id = $userId",
      args: { userId: userId }
    });

    if (applicationFromDatabase.rows.length > 0) {
      for (let i = 0; i < applicationFromDatabase["rows"].length; i++) {
        const application: Application = {
          id: applicationFromDatabase["rows"][i]["id"] as number,
          book_id: applicationFromDatabase["rows"][i]["book_id"] as number,
          user_id: applicationFromDatabase["rows"][i]["user_id"] as number,
          application_status: applicationFromDatabase["rows"][i]["application_status"] as number,
          price: applicationFromDatabase["rows"][i]["price"] as number | null,
          motivational_letter: applicationFromDatabase["rows"][i]["motivational_letter"] as string
        }
        applications.push(application)
      }
      return applications
    }
  }

  async getBiggestBid(bookId: number): Promise<number | null> {
    const biggestBidFromDatabase = await this.dbConnect.turso.execute({
      sql: "SELECT MAX(price) AS maxPrice FROM Application WHERE book_id = $bookId",
      args: { bookId: bookId }
    });
    if (biggestBidFromDatabase.rows.length > 0) {
      return biggestBidFromDatabase.rows[0]["maxPrice"] as number
    }
    return null
  }
}

