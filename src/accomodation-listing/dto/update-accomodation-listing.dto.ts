import { PartialType } from '@nestjs/mapped-types';
import { CreateAccomodationListingDto } from './create-accomodation-listing.dto';

export class UpdateAccomodationListingDto extends PartialType(CreateAccomodationListingDto) {}
