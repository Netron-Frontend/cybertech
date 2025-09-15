import { PartialType } from '@nestjs/swagger';
import { CreateFormBookingDto } from './create-form-booking.dto';

export class UpdateFormBookingDto extends PartialType(CreateFormBookingDto) {}
