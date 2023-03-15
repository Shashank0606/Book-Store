import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// pruchase book from cart
router.post('/updateAddress', userAuth, cartController.updateAddressDetails);

// add books to the cart
router.post('/:_id', userAuth, cartController.addedToCart);

//remove books from the cart
router.put('/:_id/', userAuth, cartController.removeBookFromCart);

// purchase book from cart
router.post('/purchase/:_id', userAuth, cartController.purchaseById);

export default router;
