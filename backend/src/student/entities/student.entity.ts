import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { AccomodationListing } from "src/accomodation-listing/entities/accomodation-listing.entity";
import { Booking } from "src/booking/entities/booking.entity";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: 'student' })
  role: string; // Default role for Student

  @OneToMany(() => Booking, (booking) => booking.student)
  bookings: Booking[];
    
}
