import { propertyowner } from 'src/propertyowner/entities/propertyowner.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { EstateAgent } from 'src/estate-agent/entities/estate-agent.entity';
import { AccomodationListing } from 'src/accomodation-listing/entities/accomodation-listing.entity';
import { Booking } from 'src/booking/entities/booking.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
  
  @OneToMany(() => propertyowner, propertyowner => propertyowner.user)
  propertyowner: propertyowner; 


  @OneToMany(() => EstateAgent, estateAgent => estateAgent.user)
  estateAgents: EstateAgent[]; 

  @OneToMany(()=> AccomodationListing, accomodationListing => accomodationListing.user)
  accomodationListings: AccomodationListing[];

  @OneToMany(() => Booking, booking => booking.user)
  bookings: Booking[];
}



  
