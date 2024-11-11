import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class CreatePropertyownerDto {
 
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    phoneNumber: string;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    address: string;

}
