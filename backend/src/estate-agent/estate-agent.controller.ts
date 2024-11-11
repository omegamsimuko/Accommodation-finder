import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstateAgentService } from './estate-agent.service';
import { CreateEstateAgentDto } from './dto/create-estate-agent.dto';
import { UpdateEstateAgentDto } from './dto/update-estate-agent.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('EstateAgent')
@Controller('estate-agent')
export class EstateAgentController {
  constructor(private readonly estateAgentService: EstateAgentService) {}
  
  
  @Post()
  create(@Body() createEstateAgentDto: CreateEstateAgentDto) {
    return this.estateAgentService.create(createEstateAgentDto);
  }

  @Get()
  findAll() {
    return this.estateAgentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estateAgentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstateAgentDto: UpdateEstateAgentDto) {
    return this.estateAgentService.update(+id, updateEstateAgentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estateAgentService.remove(+id);
  }
}
