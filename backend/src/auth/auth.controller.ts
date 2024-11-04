import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/SignUp.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AgentService } from 'src/agent/agent.service';
import { StudentService } from 'src/student/student.service';
import { PropertyOwnerService } from 'src/property-owner/property-owner.service';
import { LoginDto } from './dto/LogIn.dto';

@Controller('auth')
export class AuthController {

  constructor( private readonly authService: AuthService) {}

  @Post('/signup')
  create(@Body() createUser: SignUpDto):Promise<{token: string}> {
     return this.authService.create(createUser);

  }

  @Post('/login')
  validate(@Body() validateUser: LoginDto ):Promise<{token: string}>{
    return this.authService.validate(validateUser);
    
  }

 


}
