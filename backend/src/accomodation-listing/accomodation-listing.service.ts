import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccomodationListing } from 'src/accomodation-listing/entities/accomodation-listing.entity';
import { CreateAccomodationListingDto } from './dto/create-accomodation-listing.dto';
import { UpdateAccomodationListingDto } from './dto/update-accomodation-listing.dto';
import { Searchfiltering } from 'src/searchfiltering/entities/searchfiltering.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AccomodationListingService {
  constructor(
    @InjectRepository(AccomodationListing)
    private readonly accommodationRepository: Repository<AccomodationListing>,
  ) {}

  // Find by ID
  async findById(id: string): Promise<AccomodationListing> {
    const accommodation = await this.accommodationRepository.findOne({ where: { id } });
    if (!accommodation) {
      throw new HttpException('Accommodation not found', HttpStatus.NOT_FOUND);
    }
    console.log("reached")
    return accommodation;
  }

  // Find all with dynamic search filters
  async findAll(searchDto: Searchfiltering): Promise<AccomodationListing[]> {
    const queryBuilder = this.accommodationRepository.createQueryBuilder('accommodation');

    // Dynamically add filters based on the provided searchDto
    Object.keys(searchDto).forEach((key) => {
      if (searchDto[key] !== undefined && searchDto[key] !== null) {
        queryBuilder.andWhere(`accommodation.${key} = :${key}`, {
          [key]: searchDto[key],
        });
      }
    });

    // Example of using range filters for rental fee (if rentalfee_Min and rentalfee_Max are provided)
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

    return queryBuilder.getMany();
  }

  // Find by Accommodation ID (assuming this should not be by user)
  async findByAccomodationId(accomodation_id: string): Promise<AccomodationListing | null> {
    const accommodation = await this.accommodationRepository.findOne({ where: { id: accomodation_id } });
    if (!accommodation) {
      throw new HttpException('Accommodation not found', HttpStatus.NOT_FOUND);
    }
    return accommodation;
  }

  // Create a new Accommodation Listing
  async create(createAccomodationListingDto: CreateAccomodationListingDto): Promise<AccomodationListing> {
    const newAccommodation = this.accommodationRepository.create(createAccomodationListingDto);
    return this.accommodationRepository.save(newAccommodation);
  }

  // Update an existing Accommodation Listing by ID
  async update(id: string, updateAccomodationListingDto: UpdateAccomodationListingDto): Promise<AccomodationListing> {
    const accommodation = await this.accommodationRepository.preload({
      id,
      ...updateAccomodationListingDto,
    });

    if (!accommodation) {
      throw new HttpException('Accommodation not found', HttpStatus.NOT_FOUND);
    }

    return this.accommodationRepository.save(accommodation);
  }

  // Remove an Accommodation Listing by ID
  async remove(id: string): Promise<void> {
    const accommodation = await this.accommodationRepository.findOne({ where: { id } });
    if (!accommodation) {
      throw new HttpException('Accommodation not found', HttpStatus.NOT_FOUND);
    }

    await this.accommodationRepository.remove(accommodation);
  }
}
