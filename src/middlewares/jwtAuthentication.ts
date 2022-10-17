import { handleError } from "../helpers/handleError";
import { verifyToken } from "../helpers/handleJwt";

/**
 * middleware de verificacion de sesion activa
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const sesionAuth = (req:any ,res:any ,next:any ) =>{
  try{
    const headerAuth = req.headers.authorization;
    
    if(!headerAuth) return handleError(res,401,'header is missing');

    const authenticated = verifyToken(headerAuth.split(' ').pop().trim()) 
    
    if(authenticated){
        req.user = authenticated;
        next()
    }
    else handleError(res,403,'Invalidad token / expired');
  }catch(e){
    console.error(e);
    return handleError(res,500,'Server error');
  }
}