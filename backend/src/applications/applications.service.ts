import { Injectable } from '@nestjs/common';
import { Application } from './applications.interface';
import { DatabaseService } from 'src/database/db.service';

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
        application_status: applicationFromDatabase["rows"][i]["application_status"] as string,
        price: applicationFromDatabase["rows"][i]["price"] as number,
        motivational_letter: applicationFromDatabase["rows"][i]["motivational_letter"] as string
      }
      applications.push(application)
    }
    return applications
  }
}
