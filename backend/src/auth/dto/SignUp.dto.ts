import { IsEmail, IsNotEmpty, IsString, MinLength, IsPhoneNumber,IsBoolean } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  @IsPhoneNumber('MW')
  phoneNumber: string;

  @IsBoolean()
  isOwner: boolean;

  @IsBoolean()
  isAgent : boolean;
}
