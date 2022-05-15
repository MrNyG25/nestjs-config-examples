import { Module } from '@nestjs/common';
//to config env file
import { ConfigModule } from '@nestjs/config';
//type orm
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './api/cat/cat.module';

@Module({
  imports: [
    //env config
    ConfigModule.forRoot({
      envFilePath: 'config/dot-envs/.development.env',
      isGlobal: true
    }),
    //type orm
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + './**/**/*entity{.ts,.js}'],//"dist/**/*.entity{.ts,.js}" or __dirname + './**/**/*entity{.ts,.js}'
      autoLoadEntities: true,
      synchronize: true,
    }),
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
