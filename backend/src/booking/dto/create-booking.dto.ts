// create-booking.dto.ts
import { IsString, IsDateString, IsDecimal, IsOptional } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  accommodationId: string;

  @IsDateString()
  checkInDate: string;

  @IsDateString()
  checkOutDate: string;

  @IsDecimal()
  totalPrice: number;

  @IsString()
  @IsOptional()
  status: string; // 'pending' by default
}
