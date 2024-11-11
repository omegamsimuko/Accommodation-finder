import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { AccomodationListing } from 'src/accomodation-listing/entities/accomodation-listing.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  
  id: string; 

  @ManyToOne(() => User, user => user.bookings)
  @JoinColumn({ name: 'userId' })  // Ensure correct column mapping
  user: User;
  

  @ManyToOne(() => AccomodationListing, (accomodation) => accomodation.bookings, { eager: true })
  @JoinColumn({ name: 'accomodationId' })
  accomodation: AccomodationListing;

  @Column()
  userId: string;  // Foreign key to the User table

  @Column()
  accomodationId: string; // Foreign key to the Accommodation table

  @Column('timestamp')
  checkInDate: Date;  // Ensure this is of type 'Date'

  @Column('timestamp')
  checkOutDate: Date;  

  @Column()
  status: string;

  @Column()
  paymentStatus: string;

  @Column({ type: 'decimal', nullable: true })
  totalPrice?: number;
}

