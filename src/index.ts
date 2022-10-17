import "reflect-metadata";
import { AppDataSource } from "./db/db";
import { httpServer as app } from "./io";

const port = 3000; 


( async () => {

    try{
        
        await AppDataSource.initialize();//db conection
        console.log('db Conexion succefully');
        app.listen( port , () => console.log('server listening in port 3000') );

    }catch(e){
        console.log(`Database Conection Error: ${e}`);
    }

})();