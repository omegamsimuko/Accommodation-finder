import { Module } from '@nestjs/common';
import { AccomodationListingService } from './accomodation-listing.service';
import { AccomodationListingController } from './accomodation-listing.controller';
import { AccomodationListing } from './entities/accomodation-listing.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({

  imports: [ TypeOrmModule.forFeature([AccomodationListing])],
  controllers: [AccomodationListingController],
  providers: [AccomodationListingService],
  exports: [ AccomodationListingService],
})
export class AccomodationListingModule {}
