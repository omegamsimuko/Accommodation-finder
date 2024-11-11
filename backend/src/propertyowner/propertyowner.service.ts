import { Injectable } from '@nestjs/common';
import { CreatePropertyownerDto } from './dto/create-propertyowner.dto';
import { UpdatePropertyownerDto } from './dto/update-propertyowner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { propertyowner } from './entities/propertyowner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyownerService {

  constructor ( 
    @InjectRepository(propertyowner)
    private readonly propertyownerRepository: Repository<propertyowner>
  ){}  
  async findByUserId(userId: string): Promise<propertyowner| null> {
    return this.propertyownerRepository.findOne({ where: { user_id: userId } });
  }


  create(createpropertyownerDto: CreatePropertyownerDto) {
    return this.propertyownerRepository.save(createpropertyownerDto);
  }

  findAll() {
    return this.propertyownerRepository.find();
  }

  findOne(id: string) {
    return this.propertyownerRepository.findOneBy({id});
  }

  update(id: string, updatepropertyownerDto: UpdatePropertyownerDto) {
    return this.propertyownerRepository.update(id,updatepropertyownerDto);
  }

  remove(id: string) {
    return this.propertyownerRepository.delete(id);
  }
}
