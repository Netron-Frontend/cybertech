import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Matches,
  Max,
  Min,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string; // "Имя"
  
  @IsDateString() // Формат: YYYY-MM-DD
  date: string; // "Дата"
  
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: 'Time must be in HH:MM format (24-hour)'
  })
  time: string; // "Время" - "14:30"
  
  @IsNumber()
  @Min(1)
  @Max(20)
  guestsCount: number; // "Количество гостей"
  
  @IsPhoneNumber() // Валидация российского номера
  phone: string; // "Номер телефона"
  
  @IsOptional()
  @IsString()
  wishes?: string; // "Ваши пожелания" (необязательное поле)
}