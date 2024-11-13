// dto/create-booking.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateBookingDto {
  //@ApiProperty({
    //description: 'User ID of the person making the booking',
 // })
  //@IsUUID()
  //userId: string;  // Required: Identifies the user making the booking.

  @ApiProperty({
    description: 'Accommodation ID being booked',
  })
  @IsUUID()
  accomodationId: string;  // Required: Identifies the accommodation being booked.

  @ApiProperty({
    description: 'Check-in date for the booking',
  })
  @IsDateString()  // Ensure the date is in a valid ISO 8601 format
  checkInDate: string;  // Required: Start date of the booking.

  @ApiProperty({
    description: 'Check-out date for the booking',
  })
  @IsDateString()  // Ensure the date is in a valid ISO 8601 format
  checkOutDate: string;  // Required: End date of the booking.

 // @ApiProperty()
  //@IsString()
  //status: string;  // Status of the booking, e.g., "confirmed", "pending".

  //@ApiProperty()
  //@IsString()
 // paymentStatus: string;  // Status of the payment, e.g., "paid", "pending".

  @ApiProperty({
    description: 'Total price for the booking',
    required: false,
  })
  @IsOptional()  // Make totalPrice optional
  @IsNumber()  // Ensure the total price is a valid number if provided
  totalPrice?: number;
}
