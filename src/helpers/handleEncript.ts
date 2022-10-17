import bcrypt from 'bcrypt';

/**
 * 
 * @param {*} unHashedPass  contrase;a a codificar
 * @returns 
 */

export const encrypt = async (unHashedPass:string) =>{
  
  const saltRounds = 10;

  try{
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(unHashedPass, salt);
    return hash
  }catch(e){
    return console.log(e);
  }
}


/**
 * 
 * @param {*} unHashedPass  contras;ea a comparar 
 * @param {*} hashedPass  contrase;a codificada
 * @returns 
 */
export const compare =  async (unHashedPass:string, hashedPass:string) =>{
    
  try{
    const match = bcrypt.compare(unHashedPass, hashedPass);
    return match;
  }catch(e){
    return console.log(e);
  }
    
}