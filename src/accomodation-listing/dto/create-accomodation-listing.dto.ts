import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAccomodationListingDto {

    @IsNotEmpty()
    @IsString()
    title: string;
  
    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    price_per_month: number;
  
    @IsNotEmpty()
    @IsString()
    property_type: string;
  
    @IsNotEmpty()
    @IsString()
    availability_status: string;
  
    @IsNotEmpty()
    @IsString()
    date_posted: string;
  
    @IsNotEmpty()
    @IsString()
    utilities_included: string[];

    @IsNotEmpty()
    @IsString()
    @IsArray()
    images: string[];

    
    
}
