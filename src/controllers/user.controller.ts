import { matchedData } from "express-validator";
import { handleError } from "../helpers/handleError"
//models
import {  Departament } from "../db/entities";
//helpers
import { encrypt } from "../helpers/handleEncript";
/**
 * controlador encargado de crear sesions POST
 * @param {*} req 
 * @param {*} res 
 */
export const save = async ( req:any, res: any ) =>{
    
  try{
    const cleanBody = matchedData(req);
    console.log(cleanBody)
    cleanBody.password = await encrypt(cleanBody.password);

    const departamentRepo = Departament.getRepository();

    const dep = await departamentRepo.findOneBy({ id: cleanBody.department});

    if(!dep) return handleError(res,404,"Departamento inexistente");

    

    return true;
    //valid data exist in db 
 
  }catch(e){
    return handleError(res,500,"error resolviendo la peticion");
  }
};