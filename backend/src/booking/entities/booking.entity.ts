import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from 'src/student/entities/student.entity';
import { AccomodationListing } from 'src/accomodation-listing/entities/accomodation-listing.entity';
import { PropertyOwner } from 'src/property-owner/entities/property-owner.entity';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column('text', { nullable: true })
  specialRequest: string;

  @Column({ default: 'pending' })
  status: string;

  @ManyToOne(() => AccomodationListing, { eager: true })
  @JoinColumn({ name: 'accommodationListingId' })
  accommodationListing: AccomodationListing;

  @ManyToOne(() => Student, (student) => student.bookings)
  @JoinColumn({ name: 'studentId' })
  student: Student;

  @ManyToOne(() => PropertyOwner, (owner) => owner.bookings)
  @JoinColumn({ name: 'ownerId' })
  propertyOwner: PropertyOwner;


  @Column()
  accommodationListingId: number;

  @Column()
  studentId: number;

  @Column()
  ownerId: number;
  
}
