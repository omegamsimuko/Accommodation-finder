import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {

  @ApiProperty({
    description: 'User\'s email address',
    type: String,
   
  })
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter a valid email' })
  email: string;

  @ApiProperty({
    description: 'User\'s password (min 6 characters)',
    type: String,
    minLength: 6,
  
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}
