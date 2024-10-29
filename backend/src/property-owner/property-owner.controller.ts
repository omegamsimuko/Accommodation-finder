import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertyOwnerService } from './property-owner.service';
import { CreatePropertyOwnerDto } from './dto/create-property-owner.dto';
import { UpdatePropertyOwnerDto } from './dto/update-property-owner.dto';
import { SignUpDto } from 'src/auth/dto/SignUp.dto';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyOwnerService.findOne(+id);
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
