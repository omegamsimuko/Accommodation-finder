// property-owner.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Booking } from 'src/booking/entities/booking.entity'; // Ensure correct import path

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

  // One-to-many relationship with Booking (a property owner can have multiple bookings)
  @OneToMany(() => Booking, (booking) => booking.owner)
  bookings: Booking[];
}
