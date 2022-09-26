import "reflect-metadata";
import app  from "./app";
import { AppDataSource } from './db/db';

const port = 3000; 


( async () => {

    try{

        await AppDataSource.initialize();
        console.log('db Conexion succefully');
        app.listen( port , () => console.log('server listening in port 3000') );

    }catch(e){
        console.log(`Database Conexion Error: ${e}`);
    }

})();