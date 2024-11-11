import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Booking } from './entities/booking.entity';
import { User } from 'src/user/entities/user.entity';  // Import User entity
import { AccomodationListing } from 'src/accomodation-listing/entities/accomodation-listing.entity';
import { UserModule } from 'src/user/user.module';  // Import UsersModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Booking, User, AccomodationListing]),  // Add User and Accommodation entities here
    UserModule,  // Make sure UsersModule is imported here
  ],
  providers: [BookingService],
  controllers: [BookingController],
})
export class BookingModule {}
