import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingService } from './booking.service';
import { Booking } from './entities/booking.entity';
import { AccomodationListing } from 'src/accomodation-listing/entities/accomodation-listing.entity';
import { Student } from 'src/student/entities/student.entity';  // Ensure Student is imported here
import { StudentModule } from 'src/student/student.module';  // Import the StudentModule
import { PropertyOwnerModule } from 'src/property-owner/property-owner.module';
import { BookingController } from './booking.controller';
import { StudentService } from 'src/student/student.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([Booking, AccomodationListing, Student]),  // Register Student here if using TypeOrmModule
    StudentModule,  PropertyOwnerModule// Ensure StudentModule is imported
  ],
  providers: [BookingService, StudentService],  // Inject providers like BookingService and StudentService
  controllers: [BookingController],  // Controller for handling routes
})
export class BookingModule {}
