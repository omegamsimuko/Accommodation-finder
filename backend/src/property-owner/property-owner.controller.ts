import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertyOwnerService } from './property-owner.service';
import { CreatePropertyOwnerDto } from './dto/create-property-owner.dto';
import { UpdatePropertyOwnerDto } from './dto/update-property-owner.dto';
import { SignUpDto } from 'src/auth/dto/SignUp.dto';
import { ApiTags } from '@nestjs/swagger';
import { NotFoundException } from '@nestjs/common';
@ApiTags('Property-Owner')
@Controller('property-owner')
export class PropertyOwnerController {
  constructor(private readonly propertyOwnerService: PropertyOwnerService) {}

  @Post()
  create(@Body() createPropertyOwnerDto: SignUpDto) {
    return this.propertyOwnerService.create(createPropertyOwnerDto);
  }

  @Get()
  findAll() {
    return this.propertyOwnerService.findAll();
  }

  @Get('/:id/listings')
  async getListingsByOwner(@Param('id') id: string) {
    const propertyOwner = await this.propertyOwnerService.findOneById(id);
    if (!propertyOwner) {
      throw new NotFoundException('Property owner not found');
    }
    return propertyOwner;
  }
  
  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.propertyOwnerService.findOneById(id); // Returns property owner with listings
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropertyOwnerDto: UpdatePropertyOwnerDto) {
    return this.propertyOwnerService.update(+id, updatePropertyOwnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyOwnerService.remove(+id);
  }
}
