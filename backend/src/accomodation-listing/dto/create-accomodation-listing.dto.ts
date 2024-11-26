import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsString, IsEnum, IsOptional, IsPositive, IsUrl, MinLength  } from "class-validator";

export class CreateAccomodationListingDto {
 
 
  @ApiProperty({
    description: 'Title of the accommodation',

  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty({
    description: 'Description of the accommodation',

  })
  @IsNotEmpty()
  @IsString()  @MinLength(1)
  description: string;

  @ApiProperty({
    description: 'Location type (urban or rural)',
  
    enum: ['urban', 'rural'],
  })
  @IsNotEmpty()
  @IsEnum(['urban', 'rural'])
  locationType: 'urban' | 'rural';

  @ApiProperty({
    description: 'Detailed location (street, neighborhood, etc.)',

  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  detailedLocation: string;

  @ApiProperty({
    description: 'Gender-specific or unisex accommodation',
 
    enum: ['male', 'female', 'unisex'],
  })
  @IsNotEmpty()
  @IsEnum(['male', 'female', 'unisex'])
  gender: 'male' | 'female' | 'unisex';

  @ApiProperty({
    description: 'Array of room types (e.g., single, double)',

    type: [String],
  })
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  roomType: string[];

  @ApiProperty({
    description: 'Total number of available rooms or bed spaces',
  
  })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  spaceAvailable: number;

  @ApiProperty({
    description: 'Monthly rental fee',
  })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  rentalFee: number;

  @ApiProperty({
    description: 'Additional fees (e.g., electricity: $100/month)',
    type: [String],
    required: false,
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  additionalFees: string[];

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  bookingFee: number;

  @ApiProperty({
    description: 'Array of image URLs for the accommodation',
    type: [String],
    required: false,
  })
  @IsArray()
  @IsUrl({}, { each: true })
  @IsOptional()
  image: string[];

  @IsString()
  @IsNotEmpty()
  ownerId: string;
  
}