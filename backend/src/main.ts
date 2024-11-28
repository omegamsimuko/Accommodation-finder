import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  const server = express(); // Create an express instance

  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.enableCors();

  // Swagger setup
  const options = new DocumentBuilder()
    .setTitle('Accommodation API')
    .setDescription('The accommodation API description')
    .setVersion('1.0')
    .addTag('accommodations') // Tag for organizing endpoints
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document); // Swagger UI at /swagger

  // Instead of app.listen, use serverless handler for Vercel
  app.init(); // Initializes the NestJS app

  // Vercel serverless handler
  return (req: VercelRequest, res: VercelResponse) => {
    return server(req, res); // Forward request to express server
  };
}

bootstrap().then(() => {
  console.log('NestJS app is ready to handle requests!');
});
