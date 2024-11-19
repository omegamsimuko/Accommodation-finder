import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Booking } from 'src/booking/entities/booking.entity';
import { PropertyOwner } from 'src/property-owner/entities/property-owner.entity';

@Entity()
export class AccomodationListing {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  locationType: 'urban' | 'rural';

  @Column()
  detailedLocation: string;

  @Column()
  gender: 'male' | 'female' | 'unisex';

  @Column()
  spaceAvailable: number;

  @Column()
  rentalFee: number;

  @Column('simple-array', { nullable: true })
  additionalFees: string[];

  @Column('simple-array', { nullable: true })
  image: string[];

  // Define the one-to-many relationship with bookings
  @OneToMany(() => Booking, (booking) => booking.accommodation)
  bookings: Booking[];

  @ManyToOne(() => PropertyOwner, (propertyOwner) => propertyOwner.bookings)
  propertyOwner: PropertyOwner;
}
