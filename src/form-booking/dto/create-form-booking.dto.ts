import { IsDate, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateFormBookingDto {
  @IsString()
  name: string;
  
  @IsDate()
  date: Date;
  
  @IsString()
  time: string;
  
  @IsNumber()
  @Min(1)
  guestsCount: number;
  
  @IsString()
  phoneNumber: string;
  
  @IsOptional()
  @IsString()
  notes?: string;
}
