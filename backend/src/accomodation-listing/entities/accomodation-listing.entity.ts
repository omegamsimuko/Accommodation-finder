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

  @Column('simple-array', { nullable: true })
  image: string[];

  @Column()
  bookingFee: number;
  
  @ManyToOne(() => PropertyOwner, (owner) => owner.listings)
  @JoinColumn({ name: 'ownerId' }) // This will create a column 'ownerId' to store the foreign key
  owner: PropertyOwner;

  @ManyToOne(() => Agent, (agent) => agent.listings)
  @JoinColumn({ name: 'agentId' }) // Foreign key for Agent
  agent: Agent;


  // Define the one-to-many relationship with bookings
  @OneToMany(() => Booking, (booking) => booking.accommodation)
  bookings: Booking[];

  @ManyToOne(() => PropertyOwner, (propertyOwner) => propertyOwner.bookings)
  propertyOwner: PropertyOwner;

 
}
