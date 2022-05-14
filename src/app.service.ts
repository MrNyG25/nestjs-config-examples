import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let holaVar = process.env.HOLAVAR
    return 'Hello World!'+holaVar;
  }
}
