/*import { Injectable } from '@nestjs/common';
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
*/
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccomodationListing } from './entities/accomodation-listing.entity';
import { CreateAccomodationListingDto } from './dto/create-accomodation-listing.dto';
import { UpdateAccomodationListingDto } from './dto/update-accomodation-listing.dto';
import { Searchfiltering } from 'src/searchfiltering/entities/searchfiltering.entity';
@Injectable()
export class AccomodationListingService {
  constructor(
    @InjectRepository(AccomodationListing)
    private readonly accommodationRepository: Repository<AccomodationListing>
  ) {}


  async findAll(searchDto: Searchfiltering): Promise<AccomodationListing[]> {
    const queryBuilder = this.accommodationRepository.createQueryBuilder('accommodation');
  
    // Example filtering based on potential search criteria
    if (searchDto.location) {
      queryBuilder.andWhere('accommodation.location = :location', { location: searchDto.location });
    }
  
    if (searchDto.priceMin) {
      queryBuilder.andWhere('accommodation.price >= :priceMin', { priceMin: searchDto.priceMin });
    }
  
    if (searchDto.priceMax) {
      queryBuilder.andWhere('accommodation.price <= :priceMax', { priceMax: searchDto.priceMax });
    }
  
    // Add more filters as needed based on your Searchfiltering entity
  
    return await queryBuilder.getMany();
  }
  
  async findByUserId(userId: string): Promise<AccomodationListing | null> {
    return this.accommodationRepository.findOne({ where: {  } });
  }

  async create(createAccomodationListingDto: CreateAccomodationListingDto): Promise<AccomodationListing> {
    return this.accommodationRepository.save(createAccomodationListingDto);
  }

 // async findAll(): Promise<AccomodationListing[]> {
  //  return this.accommodationRepository.find();
 // }

  async findOne(id: string): Promise<AccomodationListing | null> {
    return this.accommodationRepository.findOneBy({ });
  }

  async update(id: string, updateAccomodationListingDto: UpdateAccomodationListingDto): Promise<void> {
    await this.accommodationRepository.update(id, updateAccomodationListingDto);
  }

  async remove(id: string): Promise<void> {
    await this.accommodationRepository.delete(id);
  }
}
