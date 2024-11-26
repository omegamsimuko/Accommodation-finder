import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { AccomodationListing } from "src/accomodation-listing/entities/accomodation-listing.entity";
import { Booking } from "src/booking/entities/booking.entity";

@Entity()
export class Agent {
    
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    password: string;

    @Column({ default: 'agent' })
    role: string; // Default role for agent

    @OneToMany(() => AccomodationListing, (listing) => listing.agent)
    listings: AccomodationListing[];

    @OneToMany(() => Booking, (booking) => booking.agent)
    bookings: Booking[];
    

}
