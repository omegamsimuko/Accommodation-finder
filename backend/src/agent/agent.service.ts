import { Injectable,ConflictException } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agent } from './entities/agent.entity';
import { SignUpDto } from 'src/auth/dto/SignUp.dto';
import { LoginDto } from 'src/auth/dto/LogIn.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AgentService {

  constructor(
    @InjectRepository(Agent)
    private agentRepository: Repository<Agent>,
    private jwtService: JwtService
  ){}
  

 async create(createAgentDto: SignUpDto): Promise<{token: string}> {
    const name = (createAgentDto.firstName + " "+ createAgentDto.lastName);
    const {email,password,phoneNumber} = createAgentDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newAgent = await this.agentRepository.create({
      name: name,
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber

    })

    await this.agentRepository.save(newAgent);

    const token = this.jwtService.sign({id: newAgent.id});
    return {token};
  }

  async validate(validateUser: LoginDto):Promise<{token: string}>{

    const {email,password} = validateUser;
    
    const user = await this.agentRepository.findOne({where: {email}});
    
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
    const check = await this.agentRepository.findOne({where:{email}})

    if (!check)
      return false;
    else
      return true;
    
  }

  
  async findOneById(id: string) {
    
    const user = await this.agentRepository.findOne({where:{id: id}});

    if (!user)
      return null;

    return user;

  }

  update(id: number, updateAgentDto: UpdateAgentDto) {
    return `This action updates a #${id} agent`;
  }

  remove(id: number) {
    return `This action removes a #${id} agent`;
  }
}
