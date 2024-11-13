import { ApiProperty } from '@nestjs/swagger';  // Import ApiProperty decorator
import { IsNotEmpty, IsEmail, IsString, MinLength, IsBoolean } from 'class-validator';

export class SignUpDto {

  @ApiProperty({
    description: 'User\'s first name',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'User\'s last name',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'User\'s email address',
    type: String,

  })
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter a correct email' })
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

  @ApiProperty({
    description: 'Indicates if the user is a property owner',
    type: Boolean,
 
  })
  @IsBoolean()
  isOwner: boolean;

  @ApiProperty({
    description: 'Indicates if the user is an agent',
    type: Boolean,
  
  })
  @IsBoolean()
  isAgent: boolean;
}
