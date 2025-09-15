import { Injectable } from '@nestjs/common';
import { CreateFormBookingDto } from './dto/create-form-booking.dto';
import { PrismaService } from '../prisma/prisma.service';
import { FormBookingStatus } from '../../generated';


@Injectable()
export class FormBookingService {
  constructor(private prisma: PrismaService) {}
  
  async createBooking(data: CreateFormBookingDto) {
    return this.prisma.formBooking.create({
      data: {
        name: data.name,
        date: data.date,
        time: data.time,
        guestsCount: data.guestsCount,
        phoneNumber: data.phoneNumber,
        notes: data.notes,
        status: 'PENDING'  // явно указываем статус
      }
    });
  }
  async getBookings(){
    return this.prisma.formBooking.findMany();
  }
  
  async updateBookingStatus(id: string, status: FormBookingStatus){
    return this.prisma.formBooking.update({
      where: { id },
      data: {status}
    });
  }
}
