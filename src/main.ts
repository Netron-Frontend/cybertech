import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle('CyberTech docs')
    .setDescription('Documentation for CyberTech')
    .setVersion('beta')
    .build();
  
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory())
  
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
  app.useGlobalPipes(new ValidationPipe())
  
  await app.listen(process.env.PORT ?? 3001);
  console.log('Nest server started on port http://localhost:3001')
  console.log('Swagger docs started on http://localhost:3001/docs')
}
bootstrap();
