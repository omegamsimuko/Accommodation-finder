import { PartialType } from '@nestjs/swagger';
import { CreatePropertyownerDto } from './create-propertyowner.dto';
import { IsString, IsEmail } from 'class-validator';

export class UpdatePropertyownerDto extends PartialType(CreatePropertyownerDto) {
@IsString()
name: string;

@IsEmail()
email: string;

@IsString()
password: string;

@IsString()
phoneNumber: string;

@IsString()
address: string;


}