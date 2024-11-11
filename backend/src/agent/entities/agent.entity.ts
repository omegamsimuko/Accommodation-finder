import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";


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

    @OneToMany(() => AccomodationListing, (listing) => listing.propertyOwner)
    listings: AccomodationListing[];
}
