import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne,JoinColumn } from 'typeorm';
import { Booking } from 'src/booking/entities/booking.entity';
import { PropertyOwner } from 'src/property-owner/entities/property-owner.entity';
import { Agent } from 'src/agent/entities/agent.entity';

@Entity()
export class AccomodationListing {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  locationType: 'urban' | 'rural';

  @Column()
  detailedLocation: string;

  @Column()
  gender: 'male' | 'female' | 'unisex';

  @Column()
  spaceAvailable: number;

  @Column()
  rentalFee: number;

  @Column('simple-array', { nullable: true })
  additionalFees: string[];

  @Column()
  bookingFee: number;

  @Column('simple-array', { nullable: true })
  image: string[];
  
  @ManyToOne(() => PropertyOwner, (owner) => owner.listings) // Establish relationship with PropertyOwner
  @JoinColumn({ name: 'ownerId' }) // Link with 'ownerId' column
  owner: PropertyOwner; // Define property that refers to the owner

  @Column()
  ownerId: number; // Directly store the ownerId as a separate column for foreign key reference

  @ManyToOne(() => Agent, (agent) => agent.listings)
  @JoinColumn({ name: 'agentId' }) // Foreign key for Agent
  agent: Agent;


  // Define the one-to-many relationship with bookings
  @OneToMany(() => Booking, (booking) => booking.accommodationListing)
  bookings: Booking[];

  @ManyToOne(() => PropertyOwner, (propertyOwner) => propertyOwner.bookings)
  propertyOwner: PropertyOwner;

 
}
