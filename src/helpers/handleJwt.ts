// import 'dotenv/config';
import jwt from 'jsonwebtoken';

const privateKey = /*process.env.PRIVATE_KEY ||*/ 'SgH78/?+_01As';

/**
 * // Firma del token
 * @param {*} data 
 * @returns 
 */
export const signToken = (data:any) => {
  const payLoad = {
    id: data,
    nickName: data,
    name: data,
    rol: data,
    position: data.data,
    entity: data.data,
  }
  const token = jwt.sign(
    payLoad,
    privateKey,
    { 
        expiresIn: '1d',
    }
  );
  return token
}
/**
 * // validar token
 * @param {*} token 
 * @returns 
 */
export const verifyToken = (token:string) =>{
  try{
    return jwt.verify(token,privateKey);
  }catch(e){
    return null;
  }
}