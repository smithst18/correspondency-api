import { check } from "express-validator";
import { validateResult } from '../helpers/handleValidator';
import { confirmPass } from "../helpers/handlePassMatch";

/**
 * Validar si la data es valida para guardar un new user 
 * @param {*} next
*/
export const validUser = [
  
  check("name")
    .exists()
    .withMessage('debe existir')
    .trim()
    .notEmpty()
    .withMessage('No debe estar vacio')
    .isString()
    .withMessage('debe ser un string')
    .isLength({ min:1, max:30 })
    .withMessage('minimo 1 caracter max 30'),
  check("lastName")
    .exists()
    .withMessage('debe existir')
    .trim()
    .notEmpty()
    .withMessage('No debe estar vacio')
    .isString()
    .withMessage('debe ser un string')
    .isLength({ min:1, max:30 })
    .withMessage('minimo 1 caracter max 30'),
  check("password")
    .exists()
    .withMessage('debe existir')
    .trim()
    .notEmpty()
    .withMessage('No debe estar vacio')
    .isString()
    .withMessage('debe ser un string')
    .isLength({ min:1, max:30 })
    .withMessage('minimo 1 caracteres max 30'),
  check("rePassword")
    .exists()
    .withMessage('debe existir')
    .trim()
    .notEmpty()
    .withMessage('No debe estar vacio')
    .isString()
    .withMessage('debe ser un string')
    .isLength({ min:1, max:30 })
    .withMessage('minimo 1 caracteres max 30')
    .custom( ( value:any, { req }:any ) => confirmPass(value, req)),
  check("email")
    .exists()
    .withMessage('debe existir')
    .trim()
    .notEmpty()
    .withMessage('No debe estar vacio')
    .isEmail()
    .withMessage('debe ser un Email')
    .isLength({ min:1, max:30 })
    .withMessage('minimo 1 caracteres max 30'),
  check("department")
    .exists()
    .withMessage('debe existir')
    .trim()
    .notEmpty()
    .withMessage('No debe estar vacio')
    .isNumeric()
    .withMessage('debe ser un id number')
    .isLength({ min:1, max:30 })
    .withMessage('minimo 1 caracteres max 30'),
  (req:any, res:any, next:any) => validateResult(req, res, next),
];