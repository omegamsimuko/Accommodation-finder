import { Entity, PrimaryGeneratedColumn, Column,OneToMany} from "typeorm";

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

    @Column({ default: 'propertyOwner' })
    role: string; // Default role for PropertyOwner

    // @OneToMany(() => AccommodationListing, (listing) => listing.propertyOwner)
    // listings: AccommodationListing[];
}
