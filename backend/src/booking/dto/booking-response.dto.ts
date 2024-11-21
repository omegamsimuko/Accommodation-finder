// src/booking/dto/booking-response.dto.ts

import { Booking } from '../entities/booking.entity';  // Ensure correct import path

export class BookingResponseDto {
  bookingId: number;
  accomodationId: string;
  checkInDate: string;
  checkOutDate: string;
  totalPrice: number;
  status: string;

  constructor(booking: Booking) {
    this.bookingId = booking.id;
    this.accomodationId = booking.accomodationId;
    this.checkInDate = booking.checkInDate;
    this.checkOutDate = booking.checkOutDate;
    this.totalPrice = booking.totalPrice;
    this.status = booking.status;
  }
}
