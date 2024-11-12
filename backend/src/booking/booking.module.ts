import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Booking } from './entities/booking.entity';
import { AccomodationListing } from 'src/accomodation-listing/entities/accomodation-listing.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Booking, AccomodationListing]),  // Add User and Accommodation entities here
    
  ],
  providers: [BookingService],
  controllers: [BookingController],
})
export class BookingModule {}
