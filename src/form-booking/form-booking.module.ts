import { BookingController } from './form-booking.controller';
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FormBookingService } from './form-booking.service';

@Module({
  controllers: [BookingController],
  providers: [FormBookingService, PrismaService],
  exports: [FormBookingService],
})
export class FormBookingModule {}