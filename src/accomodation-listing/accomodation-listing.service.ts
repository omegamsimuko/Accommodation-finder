import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccomodationListing } from 'src/accomodation-listing/entities/accomodation-listing.entity';
import { CreateAccomodationListingDto } from './dto/create-accomodation-listing.dto';
import { UpdateAccomodationListingDto } from './dto/update-accomodation-listing.dto';
import { Searchfiltering } from 'src/searchfiltering/entities/searchfiltering.entity';

@Injectable()
export class AccomodationListingService {
  constructor(
    @InjectRepository(AccomodationListing)
    private readonly accommodationRepository: Repository<AccomodationListing>,
  ) {}

  async findById(id: string): Promise<AccomodationListing | null> {
    return this.accommodationRepository.findOne({ where: { id } });
  }

  async findAll(searchDto: Searchfiltering): Promise<AccomodationListing[]> {
    const queryBuilder = this.accommodationRepository.createQueryBuilder('accommodation');

    // You can add filtering based on the searchDto here
    if (searchDto.location) {
      queryBuilder.andWhere('accommodation.location = :location', { location: searchDto.location });
    }

    return queryBuilder.getMany(); // Ensure it returns the query results
  }

  async findByUserId(accommodation_id: string): Promise<AccomodationListing | null> {
    return this.accommodationRepository.findOneBy({ id: accommodation_id }); // Use the correct property name
  }

  async create(createAccomodationListingDto: CreateAccomodationListingDto): Promise<AccomodationListing> {
    return this.accommodationRepository.save(createAccomodationListingDto);
  }

  async update(id: string, updateAccomodationListingDto: UpdateAccomodationListingDto): Promise<void> {
    await this.accommodationRepository.update(id, updateAccomodationListingDto);
  }

  async remove(id: string): Promise<void> {
    await this.accommodationRepository.delete(id);
  }
}
