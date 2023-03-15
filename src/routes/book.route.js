import express from 'express';
import * as bookController from '../controllers/book.controller';
import { newBookValidator } from '../validators/book.validator';
import { userAuth } from '../middlewares/auth.middleware';
// import { allNote, singlenote } from '../middlewares/redis.middleware';

const router = express.Router();

// get all notes
router.get('', userAuth, bookController.getAll);

// sort book High to low
router.get('/highToLow', userAuth, bookController.sortHighToLow);

// sort book low to high
router.get('/lowToHigh', userAuth, bookController.sortLowToHigh);

// get a book by id
router.get('/:_id', userAuth, bookController.getById);

// get a book by search
router.get('/search/:searchText', userAuth, bookController.searchByText);

export default router;
