import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccomodationListingService } from './accomodation-listing.service';
import { CreateAccomodationListingDto } from './dto/create-accomodation-listing.dto';
import { UpdateAccomodationListingDto } from './dto/update-accomodation-listing.dto';

@Controller('accomodation-listing')
export class AccomodationListingController {
  constructor(private readonly accomodationListingService: AccomodationListingService) {}

  @Post()
  create(@Body() createAccomodationListingDto: CreateAccomodationListingDto) {
    return this.accomodationListingService.create(createAccomodationListingDto);
  }

  @Get()
  findAll() {
    return this.accomodationListingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accomodationListingService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccomodationListingDto: UpdateAccomodationListingDto) {
    return this.accomodationListingService.update(id, updateAccomodationListingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accomodationListingService.remove(id);
  }
}
