// create-booking.dto.ts
import { IsString, IsDateString, IsDecimal, IsOptional, IsEmail, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  fullName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  specialRequest: string;

  @IsNumber()
  accommodationListingId: string;
  
  @IsNumber()
  studentId: number;
  
}
