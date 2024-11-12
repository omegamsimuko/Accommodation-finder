import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { AccomodationListing } from "src/accomodation-listing/entities/accomodation-listing.entity";


@Entity()
export class Agent {
    
    @PrimaryGeneratedColumn()
    id : string;

    @Column()
    name: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    password: string;

    @Column()
    phoneNumber : string;

    @Column({ default: 'agent' })
    role: string; // Default role for agent
}
