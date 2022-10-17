import { 
    Entity, 
    PrimaryGeneratedColumn,
    BaseEntity,
    Column
} from 'typeorm';

@Entity()
export class Correspondency extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code:number;

    @Column()
    subject:string; //titulo
    
    @Column()
    resume:string; //cuerpo del mensaje

    @Column()
    url:string; // urrl del archivo



    @Column()
    state:string;

    // @Column()  //to y from son relaciones 
    // to:id_user; // asociacion del usuario que genero el documento

    // @Column()  //to y from son relaciones 
    // to:string; // departamento al que va enviado
    
    // @Column()
    // from:string; //departamento que envio el documento
    
    //crear asociacion para departamento

    //crear un soft delete para el usuario con campo status
}