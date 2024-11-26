import { Entity, PrimaryGeneratedColumn, Column,OneToMany} from "typeorm";
import { AccomodationListing } from "src/accomodation-listing/entities/accomodation-listing.entity";
import { Booking } from "src/booking/entities/booking.entity";

@Entity('property_owners')
export class PropertyOwner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: 'property-onwer'

  // One-to-many relationship with Booking (a property owner can have multiple bookings)
  @OneToMany(() => Booking, (booking) => booking.owner)
  bookings: Booking[];

  // One-to-many relationship with AccommodationListing (a property owner can have multiple listings)
  @OneToMany(() => AccomodationListing, (listing) => listing.owner)  // Add this line
  listings: AccomodationListing[];  // Add this property
}
