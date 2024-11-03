import { Module } from '@nestjs/common';

import { AccomodationListingModule } from './accomodation-listing/accomodation-listing.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { TypedConfigModule } from 'nest-typed-config';
import { typeOrmConfig } from 'src/typeOrmConfig';
import { PropertyownerModule } from './propertyowner/propertyowner.module';
import { EstateAgentModule } from './estate-agent/estate-agent.module';
import { BookingModule } from './booking/booking.module';
import { SearchfilteringModule } from './searchfiltering/searchfiltering.module';



@Module({
  imports: [AccomodationListingModule,TypeOrmModule.forRoot(typeOrmConfig), UserModule,
     PropertyownerModule, EstateAgentModule, BookingModule, SearchfilteringModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
