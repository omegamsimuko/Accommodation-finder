import { Injectable,UnauthorizedException } from '@nestjs/common';
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


  async create(createAuthDto: SignUpDto): Promise<{token: string}> {

    if (createAuthDto.isOwner)
      return this.onwerService.create(createAuthDto);
    
    else if(createAuthDto.isAgent)
      return this.agentService.create(createAuthDto);
    
    else
      return this.studentService.create(createAuthDto);
  
  }


  async validate(validateUser: LoginDto):Promise<{token: string}>{
      
    const token = this.agentService.validate(validateUser);
    if (token != null)
      return token;

    const token1 = this.studentService.validate(validateUser);
    if (token1 != null)
      return token1;

    const token2 = this.onwerService.validate(validateUser);
    if (token2 != null)
      return token2;

    throw new UnauthorizedException('Invalid email or password');
    
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
