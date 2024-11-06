import { Injectable,ConflictException } from '@nestjs/common';
import { CreatePropertyOwnerDto } from './dto/create-property-owner.dto';
import { UpdatePropertyOwnerDto } from './dto/update-property-owner.dto';
import { SignUpDto } from 'src/auth/dto/SignUp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PropertyOwner } from './entities/property-owner.entity';
import { Repository } from 'typeorm';
import { LoginDto } from 'src/auth/dto/LogIn.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class PropertyOwnerService {

  constructor(
    @InjectRepository(PropertyOwner)
    private propertyOwnerRepository: Repository<PropertyOwner>,
    private jwtService: JwtService

  ){}

  async create(createPropertyOwnerDto: SignUpDto):Promise<{token : string}> {
    const name = (createPropertyOwnerDto.firstName + " " +createPropertyOwnerDto.lastName);
    const {email,password,phoneNumber} = createPropertyOwnerDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newOwner = await this.propertyOwnerRepository.create({
      name: name,
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber

    })

    await this.propertyOwnerRepository.save(newOwner);

    const token = this.jwtService.sign({id: newOwner.id});

    return {token};
  
  }

  async validate(validateUser : LoginDto): Promise<{token: string}>{

    const {email,password} = validateUser;

    const user = await this.propertyOwnerRepository.findOne({where: {email}});

    if (!user)
      return null;

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch)
      return null;
    
    const token = this.jwtService.sign({id: user.id});

    return {token};

  }

  async findOneByEmail(user : SignUpDto): Promise<boolean> {
    const {email} = user;
    const check = await this.propertyOwnerRepository.findOne({where:{email}})

    if (!check)
      return false;
    else
      return true;
    
  }

  async findOneById(id: string) {
    
    const user = await this.propertyOwnerRepository.findOne({where:{id: id}});

    if (!user)
      return null;

    return user;

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
