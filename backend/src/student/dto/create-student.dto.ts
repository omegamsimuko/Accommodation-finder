// create-student.dto.ts
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
