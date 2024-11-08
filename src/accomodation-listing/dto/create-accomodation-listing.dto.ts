import { IsArray, IsNotEmpty, IsNumber, IsString, IsEnum, IsOptional, IsPositive, IsUrl, MinLength  } from "class-validator";

export class CreateAccomodationListingDto {

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  title: string; // Title of the accommodation

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  description: string; // Description of the accommodation
  
  @IsNotEmpty()
  @IsEnum(['urban', 'rural'])
  locationType: 'urban' | 'rural'; // Location type (urban or rural)

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  detailedLocation: string; // Detailed location (street, neighborhood, etc.)

  @IsNotEmpty()
  @IsEnum(['male', 'female', 'unisex'])
  gender: 'male' | 'female' | 'unisex'; // Gender-specific or unisex accommodation

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  roomType: string[]; // Array of room types (e.g., 'single', 'double')

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  spaceAvailable: number; // Total number of available rooms or bed spaces

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  rentalFee: number; // Monthly rental fee

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  additionalFees: string[]; // Additional fees (e.g., 'electricity: $100/month')

  @IsArray()
  @IsUrl({}, { each: true })
  @IsOptional()
  image: string[]; // Array of image URLs for the accommodation


  @IsNotEmpty()
  @IsString()
  @IsArray()
  thumbnail_image: string;

    
    
}
