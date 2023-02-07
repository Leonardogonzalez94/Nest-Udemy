import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
       whitelist: true,  //remueve todo lo que no esta incluido en los DTO´s
       forbidNonWhitelisted: true, //Retorna bad request si hay propiedades en el obejto no requerido
    })
  )

  await app.listen(3000);
}
bootstrap();
