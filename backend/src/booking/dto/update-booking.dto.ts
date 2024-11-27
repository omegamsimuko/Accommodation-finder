import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsNumber, IsDateString, IsIn,IsEmail } from 'class-validator';




export class UpdateBookingDto {
  @IsString()
  fullName?: string;

  @IsString()
  @IsEmail()
  email?: string;

  @IsString()
  specialRequest?: string;

  @IsNumber()
  accommodationListingId?: string;
  
  @IsNumber()
  studentId?: number;
  
  @IsNumber()
  ownerId?: number;

  @IsString()
  status?: string;
}
