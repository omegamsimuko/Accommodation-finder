
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AccomodationListingService } from './accomodation-listing.service';
import { CreateAccomodationListingDto } from './dto/create-accomodation-listing.dto';
import { UpdateAccomodationListingDto } from './dto/update-accomodation-listing.dto';
import { ApiTags } from '@nestjs/swagger';
import { Searchfiltering } from 'src/searchfiltering/entities/searchfiltering.entity';

@ApiTags('AccomodationListings')
@Controller('accomodation-listing')
export class AccomodationListingController {
  constructor(private readonly accomodationListingService: AccomodationListingService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.accomodationListingService.findById(id);
  }

  @Get()
  async findAll(@Query() SearchfilteringDto: Searchfiltering) {
    // Here, you might want to implement filtering logic based on searchDto
    return this.accomodationListingService.findAll(SearchfilteringDto); // Modify if filtering is implemented
  }

  @Post()
  async create(@Body() createAccomodationListingDto: CreateAccomodationListingDto) {
    return this.accomodationListingService.create(createAccomodationListingDto);
  }


  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAccomodationListingDto: UpdateAccomodationListingDto) {
    return this.accomodationListingService.update(id, updateAccomodationListingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.accomodationListingService.remove(id);
  }
}
