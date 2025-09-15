import { Body, Controller, Get, Post } from '@nestjs/common';
import { FormBookingService } from './form-booking.service';
import { CreateFormBookingDto } from './dto/create-form-booking.dto';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: FormBookingService) {}
  
  @Post()
  async create(@Body() createBookingDto: CreateFormBookingDto) {
    return this.bookingService.createBooking(createBookingDto);
  }
  
  @Get()
  async findAll() {
    return this.bookingService.getBookings();
  }
}