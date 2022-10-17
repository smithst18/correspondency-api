import { 
    Entity, 
    PrimaryGeneratedColumn,
    BaseEntity,
    Column,
    BeforeInsert
} from 'typeorm';

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    fullName:string;
    
    @Column()
    lastName:string;
    
    @Column()
    password:string;
    
    @Column()
    email:string;
    
    //crear asociacion para departamento
    
    //crear un soft delete para el usuario con campo status
    
    @BeforeInsert()
    updateDates() {
        this.fullName = this.name + this.lastName;
    }
}