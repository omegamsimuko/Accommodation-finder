import { Injectable } from '@nestjs/common';
import { CreateAccomodationListingDto } from './dto/create-accomodation-listing.dto';
import { UpdateAccomodationListingDto } from './dto/update-accomodation-listing.dto';

@Injectable()
export class AccomodationListingService {
  create(createAccomodationListingDto: CreateAccomodationListingDto) {
    return 'This action adds a new accomodationListing';
  }

  findAll() {
    return `This action returns all accomodationListing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accomodationListing`;
  }

  update(id: number, updateAccomodationListingDto: UpdateAccomodationListingDto) {
    return `This action updates a #${id} accomodationListing`;
  }

  remove(id: number) {
    return `This action removes a #${id} accomodationListing`;
  }
}
