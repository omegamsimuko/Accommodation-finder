import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchfilteringService } from './searchfiltering.service';
import { SearchfilteringController } from './searchfiltering.controller';
import { Searchfiltering } from './entities/searchfiltering.entity';
import { AccomodationListing } from 'src/accomodation-listing/entities/accomodation-listing.entity';
import { AccomodationListingModule } from 'src/accomodation-listing/accomodation-listing.module';

@Module({
    imports: [AccomodationListingModule, TypeOrmModule.forFeature([Searchfiltering])], // Make sure to import the entity here
    providers: [SearchfilteringService],
    controllers: [SearchfilteringController],
    //exports: [SearchfilteringService], // Export if needed in other modules
})
export class SearchfilteringModule {}
