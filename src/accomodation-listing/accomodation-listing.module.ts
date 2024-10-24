import { Module } from '@nestjs/common';
import { AccomodationListingService } from './accomodation-listing.service';
import { AccomodationListingController } from './accomodation-listing.controller';

@Module({
  controllers: [AccomodationListingController],
  providers: [AccomodationListingService],
})
export class AccomodationListingModule {}
