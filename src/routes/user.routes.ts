import { Router } from "express";

//controllers import
import { userControllers } from "../controllers";

//validators
import { validUser } from "../validators/user.validator"

//middlewares

//express router instance
const router = Router();

//routes definition
router.post('/save',validUser,userControllers.save);

export default router;