import { Entity, PrimaryGeneratedColumn, Column,OneToMany} from "typeorm";
import { AccomodationListing } from "src/accomodation-listing/entities/accomodation-listing.entity";
import { Booking } from "src/booking/entities/booking.entity";

@Entity()
export class PropertyOwner {
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column()
    name: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    password: string;

    @Column({ default: 'propertyOwner' })
    role: string; // Default role for PropertyOwner

    @OneToMany(() => AccomodationListing, (listing) => listing.owner)
    listings: AccomodationListing[];

    @OneToMany(() => Booking, (booking) => booking.owner)
    bookings: Booking[];
    

}