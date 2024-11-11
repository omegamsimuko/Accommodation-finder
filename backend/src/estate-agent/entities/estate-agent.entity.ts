import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity'; 

@Entity()
export class EstateAgent {
  @PrimaryGeneratedColumn('uuid')
  agent_id: string;

  @Column()
  user_id: string; 
  
  @Column()
  agency_name: string;
  
  @Column()
  phone_number: string;


  @ManyToOne(() => User, user => user.estateAgents)
  user: User; 

  // Additional estate agent attributes can be added here
}
