import { Entity, PrimaryGeneratedColumn,Column } from "typeorm";

@Entity({name:'user_profile'})
export class Profile{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column()
    age: number;
  
    @Column()
    dob: string;


}