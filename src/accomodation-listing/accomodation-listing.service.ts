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

    // Dynamically add filtering conditions based on the searchDto
    if (searchDto.locationType) {
      queryBuilder.andWhere('accommodation.locationType = :locationType', {
        locationType: searchDto.locationType,
      });
    }

    // Correct the reference to 'searchDto'
    if (searchDto.spaceAvailable) {
      queryBuilder.andWhere('accommodation.spaceAvailable >= :spaceAvailable', {
        spaceAvailable: searchDto.spaceAvailable,
      });
    }

    if (searchDto.rentalfee) {
      queryBuilder.andWhere('accommodation.rentalFee <= :rentalFee', {
        rentalFee: searchDto.rentalfee,
      });
    }

    if (searchDto.roomType) {
      queryBuilder.andWhere('accommodation.roomType= :roomType', {
        roomType: searchDto.roomType,
      });
    }

    // Example of using ranges (if rental fee has a range filter)
    if (searchDto.rentalfee_Min) {
      queryBuilder.andWhere('accommodation.rentalFee >= :rentalfee_Min', {
        rentalfee_Min: searchDto.rentalfee_Min,
      });
    }

    if (searchDto.rentalfee_Max) {
      queryBuilder.andWhere('accommodation.rentalFee <= :rentalfee_Max', {
        rentalfee_Max: searchDto.rentalfee_Max,
      });
    }

    // Return filtered accommodations based on the search criteria
    return queryBuilder.getMany();
  }

  async findByUserId(accomodation_id: string): Promise<AccomodationListing | null> {
    return this.accommodationRepository.findOneBy({ id: accomodation_id }); // Use the correct property name
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

