import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import {  SignUpDto } from './dto/SignUp.dto';
import { LogInDto} from './dto/LogIn.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  create(@Body() signUpDto: SignUpDto) {
    return this.authService.create(signUpDto);
  }

  @Post('/login')
  login(@Body()logInDto: LogInDto){
    return this.authService.login(logInDto);
  }

}
