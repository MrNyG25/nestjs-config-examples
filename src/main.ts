import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { initSwagger } from './app.swagger';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //validation for models DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      /*to delete not desired properties from dtos (sended by the client)*/
      whitelist: true, 
      forbidNonWhitelisted: true, //example : property username should not exist
    }),
  );

  //swagger
  initSwagger(app);

  await app.listen(3000);

  //log host and port
  const logger = new Logger();
  logger.log(`Server on port: ${await app.getUrl()} `);
}
bootstrap();
