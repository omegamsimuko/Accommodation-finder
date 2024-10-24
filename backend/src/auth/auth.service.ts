import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from './dto/SignUp.dto';
import { LogInDto } from './dto/LogIn.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import {JwtService} from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { first } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Agent) 
    private agentRepository: Repository<Agent>,

    @InjectRepository(PropertyOwner)
    private propertyOwnerRepository: Repository<propertyOwner>,

    @InjectRepository(Student) 
    private studentRepository: Repository<Student>,

    private jwtService: JwtService;
    
  ){}
  
  async create(signUpDto: SignUpDto) { 

    if (signUpDto.isPropertyOwner){
      const newPropertyOwner = await this.propertyOwnerRepository.create(signUpDto);
      await this.studentRepository.save(newPropertyOwner);

      return 'property onwer created';
    }

    else if (signUpDto.isEstateAgent){
      
      const newAgent = await this.agentRepository.create(signUpDto);
      await this.studentRepository.save(newAgent);

      return 'estate agent created'; 
    }

    else{

      const newStudent = await this.studentRepository.create(signUpDto);
      await this.studentRepository.save(newStudent);
    
      return 'student created';

    }

  }

  async login(logInDto: LogInDto){

    const {email, password} =  logInDto;
    const user = await this.studentRepository.findOne({where: {email}});

    if (user && (await bcrypt.compare(password,user.password))){
        const token = this.jwtService.sign({id : user.id})
        return {token};
      }
    else
        throw new UnauthorizedException ('invalid email or password');

  }
}


