// src/property-owner/dto/create-property-owner.dto.ts

import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreatePropertyOwnerDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)  // You can adjust the length based on your validation requirements
  password: string;
}
