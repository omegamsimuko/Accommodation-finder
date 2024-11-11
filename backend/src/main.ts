import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const options = new DocumentBuilder()
    .setTitle('Accommodation API')
    .setDescription('The accommodation API description')
    .setVersion('1.0')
    .addTag('accommodations') // Tag for organizing endpoints
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document); // Swagger UI at /swagger

  await app.listen(3000);
}
bootstrap();
}