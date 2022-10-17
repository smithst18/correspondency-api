/**
 * Espera 3 valores
 * @param {*} req 
 * @param {*} res  
 * @param {*} next 
 */
import  { validationResult } from 'express-validator';

export const validateResult = (req:any, res:any, next:any) =>{
  try {
    validationResult(req).throw();

    return next();
  } catch (err:any) {
    
    res.status(400).send({ errors: err.array() });
  }
}