import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateEstateAgentDto { 
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    agencyname: string;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    phonenumber: string;
}
