import { PartialType } from '@nestjs/swagger';
import { CreateEstateAgentDto } from './create-estate-agent.dto';
import { IsString, IsOptional, } from 'class-validator';

export class UpdateEstateAgentDto extends PartialType(CreateEstateAgentDto) {


    @IsOptional()
    @IsString()
    agency_name?: string;
  
    @IsOptional()
    @IsString()
    phone_number?: string;
}
