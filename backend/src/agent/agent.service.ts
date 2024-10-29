import { Injectable } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agent } from './entities/agent.entity';
import { SignUpDto } from 'src/auth/dto/SignUp.dto';

@Injectable()
export class AgentService {

  constructor(
    @InjectRepository(Agent)
    private agentRepository: Repository<Agent>,
  
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

  async validate(validateUser: LogInDto){

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
