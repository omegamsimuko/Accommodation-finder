import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {

    @IsString()
    @IsOptional()
    @MinLength(2)
    name?: string;
  
    @IsEmail()
    @IsOptional()
    email?: string;
  
    @IsString()
    @IsOptional()
    @MinLength(6)
    password?: string;
  
}
