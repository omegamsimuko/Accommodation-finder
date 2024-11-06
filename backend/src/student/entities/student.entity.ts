import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Student {

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

    @Column({ default: 'student' })
    role: string; // Default role for Student
}
