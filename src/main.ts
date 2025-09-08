// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle('CyberTech')
    .setDescription('Docs for the my pet-project')
    .setVersion('beta')
    .addTag('CyberTech docs for developers')
    .build();
  
  const documentFactory = () =>
    SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, documentFactory)
  
  await app.listen(process.env.PORT ?? 3001);
  console.log('NestJS server running on http://localhost:3001');
}
bootstrap();