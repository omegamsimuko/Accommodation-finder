import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { AccomodationListing } from 'src/accomodation-listing/entities/accomodation-listing.entity';
import { BookingResponseDto } from './dto/booking-response.dto';
import { LessThanOrEqual, MoreThanOrEqual } from 'typeorm';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    @InjectRepository(AccomodationListing)
    private accomodationRepository: Repository<AccomodationListing>,
  ) {}

  // Create a new booking
  async createBooking(createBookingDto: CreateBookingDto): Promise<BookingResponseDto> {
    const { userId, accomodationId, checkInDate, checkOutDate } = createBookingDto;

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    // 1. Find the accommodation being booked
    const accommodation = await this.accomodationRepository.findOne({
      where: { id: accomodationId },
    });

    if (!accommodation) {
      throw new NotFoundException('Accommodation not found');
    }

    // 2. Check if there are available spaces (rooms) in the accommodation
    if (accommodation.spaceAvailable <= 0) {
      throw new BadRequestException('No spaces available for this accommodation');
    }

    // 3. Check for overlapping bookings
    const existingBookings = await this.bookingRepository.find({
      where: {
        accomodationId: accommodation.id,
        checkInDate: LessThanOrEqual(checkOut), // LessThanOrEqual to check for overlap
        checkOutDate: MoreThanOrEqual(checkIn), // MoreThanOrEqual to check for overlap
      },
    });

    if (existingBookings.length > 0) {
      throw new BadRequestException('Accommodation is already booked for the selected dates');
    }

    // 4. Create the booking
    const booking = this.bookingRepository.create({
      userId,
      accomodationId,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      status: createBookingDto.status,
      paymentStatus: createBookingDto.paymentStatus,
      totalPrice: createBookingDto.totalPrice,
    });

    // 5. Save the booking
    await this.bookingRepository.save(booking);

    // 6. Decrease the available space by 1
    accommodation.spaceAvailable -= 1;
    await this.accomodationRepository.save(accommodation);

    // 7. Return the booking response DTO
    return this.mapToResponseDto(booking);
  }

  // Get all bookings
  async getAllBookings(): Promise<BookingResponseDto[]> {
    const bookings = await this.bookingRepository.find();
    return bookings.map((booking) => this.mapToResponseDto(booking));
  }

  // Get a booking by ID
  async getBookingById(id: string): Promise<BookingResponseDto> {
    const booking = await this.bookingRepository.findOne({
      where: { id },
    });
    if (!booking) {
      throw new NotFoundException('Booking not found');
    }
    return this.mapToResponseDto(booking);
  }

  // Update a booking
  async updateBooking(id: string, updateBookingDto: CreateBookingDto): Promise<BookingResponseDto> {
    const booking = await this.bookingRepository.findOne({
      where: { id },
    });
    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    // Update booking details here
    booking.status = updateBookingDto.status;
    booking.paymentStatus = updateBookingDto.paymentStatus;
    booking.totalPrice = updateBookingDto.totalPrice;
    booking.checkInDate = new Date(updateBookingDto.checkInDate);
    booking.checkOutDate = new Date(updateBookingDto.checkOutDate);

    // Save updated booking
    await this.bookingRepository.save(booking);

    return this.mapToResponseDto(booking);
  }

  // Delete a booking
  async deleteBooking(id: string): Promise<void> {
    const booking = await this.bookingRepository.findOne({
      where: { id },
    });
    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    // Decrease the available space in accommodation
    const accommodation = await this.accomodationRepository.findOne({
      where: { id: booking.accomodationId },
    });
    if (accommodation) {
      accommodation.spaceAvailable += 1;
      await this.accomodationRepository.save(accommodation);
    }

    // Delete the booking
    await this.bookingRepository.delete(id);
  }

  // Delete all bookings
  async deleteAllBookings(): Promise<string> {
    await this.bookingRepository.clear(); // Deletes all bookings
    return 'All bookings have been deleted';
  }

  // Map entity to response DTO
  mapToResponseDto(booking: Booking): BookingResponseDto {
    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    const checkInDate = new Date(booking.checkInDate);
    const checkOutDate = new Date(booking.checkOutDate);

    if (isNaN(checkInDate.getTime())) {
      throw new BadRequestException('Invalid check-in date');
    }

    if (isNaN(checkOutDate.getTime())) {
      throw new BadRequestException('Invalid check-out date');
    }

    return {
      userId: booking.userId,
      accomodationId: booking.accomodationId,
      checkInDate: checkInDate.toISOString(),
      checkOutDate: checkOutDate.toISOString(),
      status: booking.status,
      paymentStatus: booking.paymentStatus,
      totalPrice: booking.totalPrice,
    };
  }
}
