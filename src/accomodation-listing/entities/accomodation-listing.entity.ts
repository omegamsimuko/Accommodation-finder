import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    JoinColumn,
    CreateDateColumn,
  } from 'typeorm';
  
  import { User } from 'src/user/entities/user.entity';// Assuming User entity exists for landlords and agents
  //import { Review } from './review.entity'; // Assuming Review entity exists
  //import { Booking } from './booking.entity'; // Assuming Booking entity exists
  
  @Entity()
  export class AccomodationListing {
    @PrimaryGeneratedColumn('uuid')
    accommodation_id: string;
  
    @Column()
    title: string;
  
    @Column()
    description: string;
  
    @Column('decimal', { precision: 10, scale: 2 })
    price_per_month: number;
  
    @Column({ length: 50 })
    property_type: string;
  
    @Column({ default: 'Available' })
    availability_status: string;
  
    @CreateDateColumn()
    date_posted: Date;
  
    @Column('simple-array', { nullable: true })
    utilities_included: string[];

    @Column()
    user_id: string
    
    //@Column()
    //propertyowner_id: string
  
  
    // Amenities
    @Column({ default: false })
    wifi: boolean;
  
    @Column({ default: false })
    air_conditioning: boolean;
  
    @Column({ default: false })
    heating: boolean;
  
  
    // Landlord/Estate Agent Information
    @ManyToOne(() => User, (user) => user.accomodationListings)
    user:User;
    @JoinColumn({ name: 'propertyowner_id' })
    propertyowner: User;
  
    // Images (URL Array)
    @Column('simple-array', { nullable: true })
    images: string[];
  
    @Column({ nullable: true })
    thumbnail_image: string;
  
  
    // Additional Information
    @Column('decimal', { precision: 3, scale: 1, nullable: true })
    ratings: number;
  
    @Column({ type: 'int', default: 0 })
    reviews_count: number;
  
    @Column({ type: 'int', default: 0 })
    view_count: number;
  
    @Column({ type: 'int', default: 0 })
    favorite_count: number;
  
    /* Relations with Reviews and Bookings
    @OneToMany(() => Review, (review) => review.accommodation)
    reviews: Review[];
  
    @OneToMany(() => Booking, (booking) => booking.accommodation)
    bookings: Booking[];*/

    
  
    /* Location Information
    @Column({ length: 100 })
    address: string;
  
    @Column({ length: 50 })
    city: string;
  
    @Column({ length: 50 })
    state: string;
  
    @Column({ length: 10 })
    postal_code: string;
  
    @Column('decimal', { precision: 10, scale: 6, nullable: true })
    latitude: number;
  
    @Column('decimal', { precision: 10, scale: 6, nullable: true })
    longitude: number;
  
    @Column('simple-array', { nullable: true })
    nearby_landmarks: string[];*/
  
    // Property Details
  }
  
