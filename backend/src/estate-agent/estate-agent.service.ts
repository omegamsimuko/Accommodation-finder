import { Injectable } from '@nestjs/common';
import { CreateEstateAgentDto } from './dto/create-estate-agent.dto';
import { UpdateEstateAgentDto } from './dto/update-estate-agent.dto';

@Injectable()
export class EstateAgentService {
  create(createEstateAgentDto: CreateEstateAgentDto) {
    return 'This action adds a new estateAgent';
  }

  findAll() {
    return `This action returns all estateAgent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estateAgent`;
  }

  update(id: number, updateEstateAgentDto: UpdateEstateAgentDto) {
    return `This action updates a #${id} estateAgent`;
  }

  remove(id: number) {
    return `This action removes a #${id} estateAgent`;
  }
}
