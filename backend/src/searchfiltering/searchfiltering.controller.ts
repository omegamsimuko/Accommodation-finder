import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SearchfilteringService } from './searchfiltering.service';
import { SearchfilteringDto } from './dto/create-searchfiltering.dto';
import { UpdateSearchfilteringDto } from './dto/update-searchfiltering.dto';
import { ApiTags } from '@nestjs/swagger';
import { AccomodationListingService } from 'src/accomodation-listing/accomodation-listing.service';
import { AccomodationListing } from 'src/accomodation-listing/entities/accomodation-listing.entity';
import { Searchfiltering } from 'src/searchfiltering/entities/searchfiltering.entity';

@ApiTags('Search & Filtering')
@Controller('searchfiltering')
export class SearchfilteringController {
  constructor(
    private readonly searchfilteringService: SearchfilteringService,
    private readonly accomodationListingService: AccomodationListingService,
  ) {}

  // Endpoint to get all filtered accommodation listings based on search criteria
  @Get()
  async findAll(@Query() searchDto: SearchfilteringDto): Promise<{ message: string; data: AccomodationListing[] }> {
    // Map the SearchfilteringDto to the Searchfiltering entity
    const searchFilter = new Searchfiltering();
    searchFilter.locationType = searchDto.locationType;
    searchFilter.spaceAvailable = searchDto.spaceAvailable;
    //searchFilter.rentalfee = searchDto.rentalFee;
    searchFilter.roomType = searchDto.roomType;
    searchFilter.rentalfee_Min = searchDto.rentalfee_Min;
    searchFilter.rentalfee_Max = searchDto.rentalfee_Max;

    // Fetch filtered accommodations from the service
    const accommodations = await this.accomodationListingService.findAll(searchFilter);

    if (accommodations.length === 0) {
      return { message: 'No accommodations found matching the search criteria', data: [] };
    }

    return { message: 'Accommodations found', data: accommodations };
  }

  // Endpoint to create a new search filter
  @Post()
  create(@Body() createSearchfilteringDto: SearchfilteringDto) {
    return this.searchfilteringService.create(createSearchfilteringDto);
  }

  // Endpoint to get a single search filter by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.searchfilteringService.findOne(id);
  }

  // Endpoint to update an existing search filter by ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSearchfilteringDto: UpdateSearchfilteringDto) {
    return this.searchfilteringService.update(id, updateSearchfilteringDto);
  }

  // Endpoint to remove a search filter by ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.searchfilteringService.remove(id);
  }
}
