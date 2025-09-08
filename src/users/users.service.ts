// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: {
      id: number;
      name: string;
      date: string;
      time: string;
      guestsCount: number;
      phone: string;
      wishes?: string;
      createdAt: Date;
      status: string;
    }
  
  create(createUserDto: CreateUserDto) {
    return {
      id: Date.now(),
      ...createUserDto,
      wishes: createUserDto.wishes || '', // Значение по умолчанию
      createdAt: new Date(),
      status: 'active',
    };
  }
  
  findAll() {
    return this.users;
  }
}