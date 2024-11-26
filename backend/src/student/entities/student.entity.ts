<<<<<<< HEAD
import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { AccomodationListing } from "src/accomodation-listing/entities/accomodation-listing.entity";
import { Booking } from "src/booking/entities/booking.entity";
=======
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Booking } from 'src/booking/entities/booking.entity';
>>>>>>> 924b6f9ba3135f41badcbad9d172f9ca303ba601

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

<<<<<<< HEAD
    @Column({ default: 'student' })
    role: string; // Default role for Student

    @OneToMany(() => Booking, (booking) => booking.student)
    bookings: Booking[];
    
=======
  @Column()
  password: string
  // One-to-many relationship with Booking (a student can have multiple bookings)
  @OneToMany(() => Booking, (booking) => booking.student)
  bookings: Booking[];
>>>>>>> 924b6f9ba3135f41badcbad9d172f9ca303ba601
}
