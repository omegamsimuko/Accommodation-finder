import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    JoinColumn,
    CreateDateColumn,
  } from 'typeorm';
  import { Booking } from 'src/booking/entities/booking.entity';
  import { User } from 'src/user/entities/user.entity';
  
  
  @Entity()
  export class AccomodationListing {
    @PrimaryGeneratedColumn('uuid')
    accommodation_id: string;
  
    @Column()
    title: string;
  
    @Column()
    description: string;
  
    @Column('decimal')
    rental_fee: number;
  
    @Column({ length: 50 })
    property_type: string;

    @Column( 'urban, rural')
    location: string
  
   
    @Column('simple-array', { nullable: true })
    utilities_included: string[];


    @Column()
    space_available: string

    // Images (URL Array)
    @Column('simple-array', { nullable: true })
    images: string[];
  
    @Column({ nullable: true })
    thumbnail_image: string;
    
  
    // Landlord/Estate Agent Information
    @ManyToOne(() => User, (user) => user.accomodationListings)
    user:User;
    @JoinColumn({ name: 'propertyowner_id' })
    propertyowner: User;

    @OneToMany(() => Booking, booking => booking.accommodation)
    bookings: Booking[];
  
    
  
  
  
  }
  
