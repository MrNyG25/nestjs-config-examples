import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  //validation for models
  app.useGlobalPipes(
    new ValidationPipe({
      /*to delete not desired properties from dtos (sended by the client)*/
      whitelist: true, 
      forbidNonWhitelisted: true,
    }),
  );

   //log host and port
   const logger = new Logger();
   logger.log(`Server on port: ${await app.getUrl()} `);
}
bootstrap();
