import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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

    
}
