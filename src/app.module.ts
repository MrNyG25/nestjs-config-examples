import { Module } from '@nestjs/common';
//to config env file
import { ConfigModule } from '@nestjs/config';
//type orm
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './api/cat/cat.module';
//import { environments } from 'config/dot-envs/environments';

@Module({
  imports: [
    //env config
    ConfigModule.forRoot({
      envFilePath: 'config/dot-envs/.env',
        //environments[process.env.NODE_ENV] || `${environments.path}.dev.env`,
      isGlobal: true,
      validationSchema: Joi.object({
        APP_PORT: Joi.number().required(),
        DB_CONNECTION: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_DATABASE: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
      }),
    }),
    //type orm
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + './**/**/*entity{.ts,.js}'], //"dist/**/*.entity{.ts,.js}" or __dirname + './**/**/*entity{.ts,.js}'
      autoLoadEntities: true,
      synchronize: true,
    }),
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
