import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Repository } from 'typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PropertyOwner } from 'src/property-owner/entities/property-owner.entity';
import { Student } from 'src/student/entities/student.entity';
import { AccomodationListing } from 'src/accomodation-listing/entities/accomodation-listing.entity';


@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    @InjectRepository(PropertyOwner)
    private propertyOwnerRepository: Repository<PropertyOwner>,
    @InjectRepository(AccomodationListing)
    private readonly accommodationRepository: Repository<AccomodationListing>
  ) {}

  // Create a new booking
  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const { accommodationListingId, studentId,fullName, email, specialRequest } = createBookingDto;
  
    // Check if the accommodation listing exists
    const accommodationListing = await this.accommodationRepository.findOne({ where: { id: accommodationListingId } });
    if (!accommodationListing) {
      throw new Error('Accommodation listing not found');
    }
  
    // Check if the student exists
    const student = await this.studentRepository.findOne({ where: { id: studentId } });
    if (!student) {
      throw new Error('Student not found');
    }
  
    const ownerId = accommodationListing.ownerId;
    // Create and save the booking
    const booking = this.bookingRepository.create({
      fullName,
      email,
      specialRequest,
      accommodationListing, // Pass full object
      student,
      ownerId : ownerId // Pass id
     // Pass full object
    });
  
    return await this.bookingRepository.save(booking);
  }

//Update
  async update(id: number, updateBookingDto: UpdateBookingDto): Promise<Booking> {
    const { fullName, email, specialRequest, accommodationListingId, studentId, ownerId } = updateBookingDto;
  
    // Find the booking by ID
    const booking = await this.bookingRepository.findOne({ where: { id: studentId } });
    if (!booking) {
      throw new NotFoundException('Booking not found');
    }
  
    // Update only the fields that are provided in the DTO
    if (fullName) booking.fullName = fullName;
    if (email) booking.email = email;
    if (specialRequest) booking.specialRequest = specialRequest;
  
    if (accommodationListingId) {
      const accommodationListing = await this.accommodationRepository.findOne({ where: { id: accommodationListingId } });
      if (!accommodationListing) {
        throw new NotFoundException('Accommodation listing not found');
      }
      booking.accommodationListing = accommodationListing;
    }
  
    if (studentId) {
      const student = await this.studentRepository.findOne({ where: { id: studentId } });
      if (!student) {
        throw new NotFoundException('Student not found');
      }
      booking.student = student;
    }
  
    if (ownerId) {
      const propertyOwner = await this.propertyOwnerRepository.findOne({ where: { id: ownerId } });
      if (!propertyOwner) {
        throw new NotFoundException('Property owner not found');
      }
      booking.propertyOwner = propertyOwner;
    }
  
    // Save the updated booking
    return await this.bookingRepository.save(booking);
  }
  

  // Get all bookings (can be filtered by student or owner)
  async findAll() {
    return this.bookingRepository.find({
      relations: ['student', 'propertyOwner'],
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


  async updateStatus(id: number, updateBookingDto: UpdateBookingDto): Promise<Booking> {
    const { status } = updateBookingDto;  // Only the status is considered for update
  
    // Find the booking by ID
    const booking = await this.bookingRepository.findOne({ where: { id: id } });
  
    if (!booking) {
      throw new Error('Booking not found');
    }
  
    // Update the status field of the booking
    if (status) {
      booking.status = status;
    } else {
      throw new Error('Status is required');
    }
  
    // Save the updated booking
    return await this.bookingRepository.save(booking);
  }
  
  async confirmBooking(id: number): Promise<Booking> {
    const booking = await this.bookingRepository.findOne({ where: { id } });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    if (booking.status !== 'pending') {
      throw new Error('Only pending bookings can be confirmed');
    }

    booking.status = 'confirmed';
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
