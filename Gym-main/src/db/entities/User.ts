import { 
    Entity, 
    PrimaryGeneratedColumn,
    BaseEntity
} from 'typeorm';

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nickName:string;

    @Column()
    password:string;
    
    @Column()
    email:string;
    
    //crear asociacion para departamento

    //crear un soft delete para el usuario con campo status

}