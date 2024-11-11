
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AccomodationListingService } from './accomodation-listing.service';
import { CreateAccomodationListingDto } from './dto/create-accomodation-listing.dto';
import { UpdateAccomodationListingDto } from './dto/update-accomodation-listing.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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
  async findAll(@Query() searchfilteringDto: Searchfiltering) {
    return this.accomodationListingService.findAll(searchfilteringDto); // Modify if filtering is implemented
  }

  @Post()
  @ApiOperation({ summary: 'Create a new accommodation listing' })
  @ApiBody({
    description: 'Details of the accommodation to be created',
    type: CreateAccomodationListingDto, 
  })
  @ApiResponse({
    status: 201,
    description: 'Accommodation listing has been successfully created.',
    type: CreateAccomodationListingDto,
  })
  async create(@Body() createAccommodationListingDto: CreateAccomodationListingDto) {
    return this.accomodationListingService.create(createAccommodationListingDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAccommodationListingDto: UpdateAccomodationListingDto) {
    return this.accomodationListingService.update(id, updateAccommodationListingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.accomodationListingService.remove(id);
  }
}