import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { AccomodationListing } from "src/accomodation-listing/entities/accomodation-listing.entity";

@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id : string;

    @Column()
    name: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    password: string;

    @Column({ default: 'student' })
    role: string; // Default role for Student

    
}
