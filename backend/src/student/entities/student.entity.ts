import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Booking } from 'src/booking/entities/booking.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string
  // One-to-many relationship with Booking (a student can have multiple bookings)
  @OneToMany(() => Booking, (booking) => booking.student)
  bookings: Booking[];
}
