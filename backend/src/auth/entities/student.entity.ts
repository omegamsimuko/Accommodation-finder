import { Column,PrimaryGeneratedColumn,Entity } from "typeorm";


@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id : string;
    
    @Column()
    name: string;


    @Column()
    email: string;

    @Column()
    password: string;

}
