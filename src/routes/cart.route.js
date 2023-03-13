import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// add books to the cart
router.post('/:_id', userAuth, cartController.addedToCart);


export default router;
