import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormBookingModule } from './form-booking/form-booking.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FormBookingModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
