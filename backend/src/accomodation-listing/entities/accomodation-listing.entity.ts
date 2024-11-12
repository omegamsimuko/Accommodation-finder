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
import { PropertyOwner } from 'src/property-owner/entities/property-owner.entity';

 
  
  @Entity()
  export class AccomodationListing {
    @PrimaryGeneratedColumn()
    id: string;
  

  @Column({ type: 'varchar', length: 255 })
  title: string; // Title of the accommodation

  @Column({ type: 'text' })
  description: string; // Detailed description of the accommodation

  @Column({ type: 'enum', enum: ['urban', 'rural'] })
  locationType: 'urban' | 'rural'; // Location type (urban/rural)

  @Column({ type: 'varchar', length: 255 })
  detailedLocation: string; // Detailed location (street, neighborhood, etc.)

  @Column({ type: 'enum', enum: ['male', 'female', 'unisex'] })
  gender: 'male' | 'female' | 'unisex'; // Gender-specific or unisex accommodation

  @Column('simple-array')
  roomType: string[]; // Array of room types (single, double, etc.)

  @Column({ type: 'int' })
  spaceAvailable: number; // Total number of available rooms or bed spaces

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  rentalFee: number; // Monthly rental fee

  @Column('simple-array')
  additionalFees: string[]; // Additional fees (electricity, water, maintenance, etc.)

  @Column('simple-array')
  image: string[]; // Array of image URLs for the accommodation

  
  @Column({ nullable: true })
  thumbnail_image: string;
    
  
  

  }
  
  
  
  
  
