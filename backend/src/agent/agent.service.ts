import { Injectable,UnauthorizedException } from '@nestjs/common';
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
  

 async create(createAgentDto: SignUpDto) {
    const name = (createAgentDto.firstName + createAgentDto.lastName);
    const {email,password,phoneNumber} = createAgentDto;

    const newAgent = await this.agentRepository.create({
      name: name,
      email: email,
      password: password,
      phoneNumber: phoneNumber

    })

    await this.agentRepository.save(newAgent);

    return 'This action adds a new agent';
  }

  async validate(validateUser: LoginDto):Promise<{token: string}>{

    const {email,password} = validateUser;

    const user = await this.agentRepository.findOne({where: {email}});
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!user || !passwordMatch)
      throw new UnauthorizedException('Invalid email or password'); 

    const token = this.jwtService.sign({id: user.id});


    return {token};

  }
  
  findAll() {
    return `This action returns all agent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agent`;
  }

  update(id: number, updateAgentDto: UpdateAgentDto) {
    return `This action updates a #${id} agent`;
  }

  remove(id: number) {
    return `This action removes a #${id} agent`;
  }
}
