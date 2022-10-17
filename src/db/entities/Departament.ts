import { 
    Entity, 
    PrimaryGeneratedColumn,
    BaseEntity,
    Column
} from 'typeorm';

@Entity()
export class Departament extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;
    
    //crear asociacion para user


}