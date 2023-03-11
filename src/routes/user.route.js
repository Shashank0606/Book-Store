import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// Create a new user
router.post('', newUserValidator, userController.newUser);

// login
router.post('/login', userController.login);

// forget password
router.post("/forgetPass", userController.forgetPassword)

// Reset password
router.post("/:token/reset", userAuth, userController.resetPassword)

export default router;
