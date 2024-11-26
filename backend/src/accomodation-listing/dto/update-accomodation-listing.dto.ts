import { PartialType } from '@nestjs/mapped-types';
import { CreateAccomodationListingDto } from './create-accomodation-listing.dto';
import { IsString, IsArray, IsEnum, IsNumber, IsOptional, IsPositive, IsUrl, MinLength} from 'class-validator';

export class UpdateAccomodationListingDto extends PartialType(CreateAccomodationListingDto) {

    @IsOptional() 
    @IsString()
    @MinLength(1)
    title?: string; // Title of the accommodation
  
    @IsOptional() 
    @IsString()
    @MinLength(1)
    description?: string; // Description of the accommodation
  
    @IsOptional()
    @IsEnum(['urban', 'rural'])
    locationType?: 'urban' | 'rural'; // Location type (urban or rural)
  
    @IsOptional() 
    @IsString()
    @MinLength(1)
    detailedLocation?: string; // Detailed location (street, neighborhood, etc.)
  
    @IsOptional() 
    @IsEnum(['male', 'female', 'unisex'])
    gender?: 'male' | 'female' | 'unisex'; // Gender-specific or unisex accommodation
  
    @IsOptional() 
    @IsArray()
    @IsString({ each: true })
    roomType?: string[]; // Array of room types (e.g., 'single', 'double')
  
    @IsOptional() 
    @IsNumber()
    @IsPositive()
    spaceAvailable?: number; // Total number of available rooms or bed spaces
  
    @IsOptional() 
    @IsNumber()
    @IsPositive()
    rentalFee?: number; // Monthly rental fee

    @IsOptional() 
    @IsNumber()
    @IsPositive()
    bookingFee?: number;
  
    @IsOptional() 
    @IsArray()
    @IsString({ each: true })
    additionalFees?: string[]; // Additional fees (e.g., 'electricity: $100/month')
  
    @IsOptional() 
    @IsUrl({}, { each: true })
    image?: string[]; // Array of image URLs for the accommodation

 
  }


