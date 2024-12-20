import { Entity, PrimaryGeneratedColumn, Column,OneToMany} from "typeorm";
import { AccomodationListing } from "src/accomodation-listing/entities/accomodation-listing.entity";
import { Booking } from "src/booking/entities/booking.entity";

@Entity('property_owner')
export class PropertyOwner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: 'property-owner' })
  role: string;

  // One-to-many relationship with Booking (a property owner can have multiple bookings)
  @OneToMany(() => Booking, (booking) => booking.propertyOwner)
  bookings: Booking[];

  // One-to-many relationship with AccommodationListing (a property owner can have multiple listings)
  @OneToMany(() => AccomodationListing, (listing) => listing.owner)  // Add this line
  listings: AccomodationListing[];  // Add this property
}
