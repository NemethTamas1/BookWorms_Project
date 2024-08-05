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

}

