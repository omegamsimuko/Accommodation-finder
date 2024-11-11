import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { AccomodationListing } from 'src/accomodation-listing/entities/accomodation-listing.entity';

@Entity()
export class propertyowner {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string

  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  @Column() 
  user_id:string
  
  @ManyToOne(() => User, user => user.propertyowner)
  user: User;




  @OneToMany(() => AccomodationListing, (listing) => listing.propertyowner)
  accomodationListings: AccomodationListing[];
}
