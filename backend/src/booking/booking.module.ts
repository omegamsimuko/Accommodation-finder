import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { AccomodationListing } from 'src/accomodation-listing/entities/accomodation-listing.entity';
import { Student } from 'src/student/entities/student.entity';
import { PropertyOwner } from 'src/property-owner/entities/property-owner.entity'; // Import PropertyOwner entity
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { StudentModule } from '../student/student.module'; // Ensure StudentModule is imported
import { PropertyOwnerModule } from '../property-owner/property-owner.module'; // Ensure PropertyOwnerModule is imported

@Module({
  imports: [
    TypeOrmModule.forFeature([Booking, AccomodationListing, Student, PropertyOwner]), // Register PropertyOwner here
    StudentModule,
    PropertyOwnerModule,
  ],
  providers: [BookingService], // Ensure only necessary services are here
  controllers: [BookingController],
})
export class BookingModule {}
