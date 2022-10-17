/**
 * pasar 3 parametros con las htt.response el codigo y el mensaje de error
 * @param {*} res objeto de express
 * @param {*} code  codigo de error a devoler por defecto 403
 * @param {*} message mensaje para el error
 */
 export const handleError = (res:any, code: number = 403, message: string = "an error has ocurred") =>{
  return res.status(code).send({
      code,
      message
  });
}