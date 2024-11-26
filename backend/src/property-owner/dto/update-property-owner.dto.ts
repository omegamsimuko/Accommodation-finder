// src/property-owner/dto/update-property-owner.dto.ts
import { IsOptional, IsString, IsEmail } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreatePropertyOwnerDto } from './create-property-owner.dto';  // Assuming you have a Create DTO

export class UpdatePropertyOwnerDto extends PartialType(CreatePropertyOwnerDto) {
  @IsOptional() // Make this field optional for update operations
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;
}
