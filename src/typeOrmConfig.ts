import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { propertyowner } from './propertyowner/entities/propertyowner.entity';
import { EstateAgent } from './estate-agent/entities/estate-agent.entity';
import { AccomodationListing } from './accomodation-listing/entities/accomodation-listing.entity';
import { Booking } from './booking/entities/booking.entity';
import { Searchfiltering } from './searchfiltering/entities/searchfiltering.entity';



export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'accomodationfinder',
    entities: [User, propertyowner, EstateAgent, AccomodationListing, Booking, Searchfiltering], 
    synchronize: false,
    
  };
  