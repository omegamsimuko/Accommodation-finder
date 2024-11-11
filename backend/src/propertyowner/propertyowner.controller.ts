import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertyownerService } from './propertyowner.service';
import { CreatePropertyownerDto } from './dto/create-propertyowner.dto';
import { UpdatePropertyownerDto } from './dto/update-propertyowner.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('propertyowner')
@Controller('propertyowner')
export class PropertyownerController {
  constructor(private readonly propertyownerService: PropertyownerService) {}
  
  
  @Post()
  create(@Body() createPropertyownerDto: CreatePropertyownerDto) {
    return this.propertyownerService.create(createPropertyownerDto);
  }

  @Get()
  findAll() {
    return this.propertyownerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyownerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropertyownerDto: UpdatePropertyownerDto) {
    return this.propertyownerService.update(id, updatePropertyownerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyownerService.remove(id);
  }
}
