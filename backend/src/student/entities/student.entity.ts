
import{Column,Entity,PrimaryGeneratedColumn} from  'typeorm'

@Entity()
export class Student{

    @PrimaryGeneratedColumn()
    id : string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;


    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phoneNumber: string;

}