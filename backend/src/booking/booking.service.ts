import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Repository } from 'typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { StudentService } from 'src/student/student.service';
import { PropertyOwnerService } from 'src/property-owner/property-owner.service';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    private studentService: StudentService,
    private propertyOwnerService: PropertyOwnerService
  ) {}

  // Create a new booking
  async create(createBookingDto: CreateBookingDto, studentId: string): Promise<Booking> {
    const student = await this.studentService.findOneById(studentId);
    if (!student) {
      throw new NotFoundException('Student not found');
    }

    const booking = this.bookingRepository.create({
      ...createBookingDto,
      student: student, // Set the student who created the booking
    });

    return this.bookingRepository.save(booking);
  }

  // Get all bookings (can be filtered by student or owner)
  async findAll() {
    return this.bookingRepository.find({
      relations: ['student', 'owner'],
    });
  }

  // Get a specific booking by ID
  async findOne(id: number): Promise<Booking> {
    const booking = await this.bookingRepository.findOne({
      where: { id },
      relations: ['student', 'owner'],
    });
    if (!booking) {
      throw new NotFoundException('Booking not found');
    }
    return booking;
  }

  // Update booking status (for owner to confirm or reject)
  async updateStatus(id: number, updateBookingDto: UpdateBookingDto): Promise<Booking> {
    const booking = await this.bookingRepository.findOne({ where: { id } });
    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    // You can add logic here for property owner authentication to ensure they can change the status
    booking.status = updateBookingDto.status;
    return this.bookingRepository.save(booking);
  }

  // Confirm the booking
  async confirm(id: number): Promise<Booking> {
    const booking = await this.bookingRepository.findOne({
      where: { id },
      relations: ['student', 'owner'],
    });
    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    // Prevent confirming a booking that has already been confirmed or rejected
    if (booking.status === 'confirmed') {
      throw new BadRequestException('Booking is already confirmed');
    }

    if (booking.status === 'rejected') {
      throw new BadRequestException('Booking is rejected and cannot be confirmed');
    }

    // Update the status to confirmed
    booking.status = 'confirmed';
    return this.bookingRepository.save(booking);
  }
}
