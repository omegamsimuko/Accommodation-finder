// booking.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PropertyOwner } from 'src/property-owner/entities/property-owner.entity'; // Ensure correct import path
import { AccomodationListing } from 'src/accomodation-listing/entities/accomodation-listing.entity';
import { Student } from 'src/student/entities/student.entity';  // Assuming you have a Student entity

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accomodationId: string;  // Reference to the accommodation

  @ManyToOne(() => AccomodationListing, (accommodationListing) => accommodationListing.bookings)
  @JoinColumn({ name: 'accommodationId' })
  accommodation: AccomodationListing;  // Link to the Accommodation entity

  @Column('date')
  checkInDate: string;

  @Column('date')
  checkOutDate: string;

  @Column('decimal')
  totalPrice: number;

  @Column({ default: 'pending' })
  status: string;

  // Many-to-one relation with Student (a booking belongs to one student)
  @ManyToOne(() => Student, (student) => student.bookings)
  @JoinColumn({ name: 'studentId' })
  student: Student;

  // Many-to-one relation with PropertyOwner (a booking belongs to one property owner)
  @ManyToOne(() => PropertyOwner, (owner) => owner.bookings)
  @JoinColumn({ name: 'ownerId' })
  owner: PropertyOwner;
}
