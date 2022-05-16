import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let dbName = process.env.DB_DATABASE;
    let ne = process.env.NODE_ENV;
    return 'Hello World!' + dbName + 'NODE_ENV = ' + ne;
  }
}
