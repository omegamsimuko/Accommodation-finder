import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/SignUp.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AgentService } from 'src/agent/agent.service';
import { PropertyOwnerService } from 'src/property-owner/property-owner.service';
import { StudentService } from 'src/student/student.service';
import { LoginDto } from './dto/LogIn.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly agentService: AgentService,
    private readonly onwerService: PropertyOwnerService,
    private readonly studentService: StudentService
  ){}


  async create(createAuthDto: SignUpDto) {

    if (createAuthDto.isOwner)
        this.onwerService.create(createAuthDto);
    
    else if(createAuthDto.isAgent)
      this.agentService.create(createAuthDto);
    
    else
      this.studentService.create(createAuthDto);
  
      return 'This action adds a new auth';
  }


  async validate(validateUser: LoginDto):Promise<{token: string}>{
      
    let token = this.agentService.validate(validateUser);
    if (token != null)
      return token;

    token = this.studentService.validate(validateUser);
    if (token != null)
      return token;

    token = this.onwerService.validate(validateUser);
    if (token != null)
      return token;
  
  }


  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
