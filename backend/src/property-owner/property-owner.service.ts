import { Injectable } from '@nestjs/common';
import { CreatePropertyOwnerDto } from './dto/create-property-owner.dto';
import { UpdatePropertyOwnerDto } from './dto/update-property-owner.dto';
import { SignUpDto } from 'src/auth/dto/SignUp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PropertyOwner } from './entities/property-owner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyOwnerService {

  constructor(
    @InjectRepository(PropertyOwner)
    private propertyOwnerRepository: Repository<PropertyOwner>

  ){}

  async create(createPropertyOwnerDto: SignUpDto) {
    const name = (createPropertyOwnerDto.firstName + createPropertyOwnerDto.lastName);
    const {email,password,phoneNumber} = createPropertyOwnerDto;

    const newOwner = await this.propertyOwnerRepository.create({
      name: name,
      email: email,
      password: password,
      phoneNumber: phoneNumber

    })

    await this.propertyOwnerRepository.save(newOwner);

    return 'This action adds a new propertyOwner';
  }

  findAll() {
    return `This action returns all propertyOwner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} propertyOwner`;
  }

  update(id: number, updatePropertyOwnerDto: UpdatePropertyOwnerDto) {
    return `This action updates a #${id} propertyOwner`;
  }

  remove(id: number) {
    return `This action removes a #${id} propertyOwner`;
  }
}
