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
  create(@Body() createUser: SignUpDto) {

     const token = this.authService.create(createUser);

     return token;
  }

  @Post('/login')
  validate(@Body() validateUser: LoginDto ):Promise<{token: string}>{
    const token = this.authService.validate(validateUser);
    return token;
  }

 


}
