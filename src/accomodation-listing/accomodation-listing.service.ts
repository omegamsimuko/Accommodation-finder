import { Injectable } from '@nestjs/common';
import { CreateAccomodationListingDto } from './dto/create-accomodation-listing.dto';
import { UpdateAccomodationListingDto } from './dto/update-accomodation-listing.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccomodationListing } from './entities/accomodation-listing.entity';


@Injectable()
export class AccomodationListingService {

  constructor ( 
    @InjectRepository(AccomodationListing)
 private readonly AccomodationRepository: Repository <AccomodationListing> ){} 

  async findByUserId(userId: string): Promise<AccomodationListing| null> {
    return this.AccomodationRepository.findOne({ where: { user_id: userId } });
  }


  create(CreateAccomodationListingDto: CreateAccomodationListingDto) {
    return this.AccomodationRepository.save(CreateAccomodationListingDto);
  }

  findAll() {
    return this.AccomodationRepository.find();
  }

  findOne(id: string) {
    return this.AccomodationRepository.findOneBy({});
  }

  update(id: string, UpdateAccomodationListingDto: UpdateAccomodationListingDto) {
    return this.AccomodationRepository.update(id,UpdateAccomodationListingDto);
  }

  remove(id: string) {
    return this.AccomodationRepository.delete(id);
  }
}
