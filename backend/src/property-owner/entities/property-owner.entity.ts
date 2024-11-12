import { Entity, PrimaryGeneratedColumn, Column,OneToMany} from "typeorm";
import { AccomodationListing } from "src/accomodation-listing/entities/accomodation-listing.entity";

@Entity()
export class PropertyOwner {
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

    @Column({ default: 'propertyOwner' })
    role: string; // Default role for PropertyOwner

}