/**
 * permite verificar si 2 contrase;as coinciden
 * @param {*} value 
 * @param {*} req 
 * @returns 
 */
 export const confirmPass = async (value:string , req:any ) =>{

  if(value != req.body.password)  throw new Error('Las contraseñas no coinciden');
  else return true;
}