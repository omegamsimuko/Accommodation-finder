import { PartialType } from '@nestjs/mapped-types';
import { CreateAccomodationListingDto } from './create-accomodation-listing.dto';
import { IsString, IsOptional, IsNumber} from 'class-validator';

export class UpdateAccomodationListingDto extends PartialType(CreateAccomodationListingDto) {

    @IsOptional()
    @IsString()
    title: string;
  
    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsNumber()
    rental_fee: number;
  
    @IsOptional()
    @IsString()
    property_type: string;
  
    @IsOptional()
    @IsString()
    availability_status: string;
  
    @IsOptional()
    @IsString()
    utilities_included: string[];

    @IsOptional()
    @IsString()
    images: string[];

    @IsOptional()
    @IsString()
    thumbnail_image: string;

}
