import { Module } from '@nestjs/common';
//to config env file
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    //env config
    ConfigModule.forRoot({
      envFilePath: 'config/dot-envs/.development.env',
      isGlobal: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
