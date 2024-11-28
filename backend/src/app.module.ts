import { Module } from '@nestjs/common';
import { typeOrmConfig } from './typeOrmConfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { AgentModule } from './agent/agent.module';
import { PropertyOwnerModule } from './property-owner/property-owner.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { AccomodationListingModule } from './accomodation-listing/accomodation-listing.module';
import { BookingModule } from './booking/booking.module';
import { SearchfilteringModule } from './searchfiltering/searchfiltering.module';
import { Booking } from './booking/entities/booking.entity';
import { Student } from './student/entities/student.entity';
import { PropertyOwner } from './property-owner/entities/property-owner.entity';
import { BookingService } from './booking/booking.service';
import { StudentService } from './student/student.service';
import { PropertyOwnerService } from './property-owner/property-owner.service';
import { AccomodationListing } from './accomodation-listing/entities/accomodation-listing.entity';
import { BookingController } from './booking/booking.controller';
import { StudentController } from './student/student.controller';
import { PropertyOwnerController } from './property-owner/property-owner.controller';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),AccomodationListingModule, BookingModule, 
    SearchfilteringModule, StudentModule, AgentModule, PropertyOwnerModule, AuthModule,
    TypeOrmModule.forFeature([Booking, Student, PropertyOwner, AccomodationListing]),
    JwtModule.register({
      secret: 'ifindSecret',
      signOptions: {expiresIn: '1hr'},
      global: true
    })
  ],
  controllers: [BookingController, StudentController, PropertyOwnerController],
  providers: [BookingService, StudentService, PropertyOwnerService]
  //controllers: [AppController],
  //providers: [AppService],
})

export class AppModule {}
