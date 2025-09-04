import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {HttpModule} from "@nestjs/axios";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entites/user.entity';


TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'CyberTech_db',
  entities: [User],
  synchronize: true,
  
})

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
