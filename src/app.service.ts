import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const dbName = process.env.DB_DATABASE;
    const ne = process.env.NODE_ENV;
    return 'Hello World!' + dbName + 'NODE_ENV = ' + ne;
  }
}
