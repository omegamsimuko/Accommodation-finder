import { Controller, Post, Body, Param, Patch, Get,HttpException,HttpStatus } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { ApiTags } from '@nestjs/swagger';
import { Booking } from './entities/booking.entity';

@ApiTags('Booking')
@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  // Create a new booking (for student)
  @Post()
  async create(@Body() createBookingDto: CreateBookingDto): Promise<Booking> {
    return this.bookingService.create(createBookingDto);
  }

  // Get all bookings
  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  // Get a specific booking by ID
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bookingService.findOne(id);
  }

  // Update booking status (for property owner to confirm/reject)
  @Patch(':id/status')
  updateStatus(@Param('id') id: number, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.updateStatus(id, updateBookingDto);
  }

  // Confirm a booking (for property owner or admin)
  @Patch(':id/confirm')
  async confirmBooking(@Param('id') id: number) {
    try {
      return await this.bookingService.confirmBooking(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}