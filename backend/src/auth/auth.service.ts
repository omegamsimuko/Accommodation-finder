import { Injectable,UnauthorizedException,ConflictException } from '@nestjs/common';
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

    const check = await this.agentService.findOneByEmail(createAuthDto);
    const check2 = await this.onwerService.findOneByEmail(createAuthDto);
    const check3 = await this.studentService.findOneByEmail(createAuthDto);
    
    if (check || check2 || check3)
      throw new ConflictException('email address already in use');


    if (createAuthDto.isOwner)
      return this.onwerService.create(createAuthDto);
    
    else if(createAuthDto.isAgent)
      return this.agentService.create(createAuthDto);
    
    else
      return this.studentService.create(createAuthDto);
  
  }


  async validate(validateUser: LoginDto):Promise<{token: string}>{
      
    const token = await this.agentService.validate(validateUser);
    if (token !== null )
      return  token;

    const token1 = await this.studentService.validate(validateUser);
    if (token1 !== null)
      return token1;

    const token2 = await this.onwerService.validate(validateUser);
    if (token2 !== null)
      return token2;

    throw new UnauthorizedException('Invalid email or password');
    
  }


}
