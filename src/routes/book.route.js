import express from 'express';
import * as bookController from '../controllers/book.controller';
import { newBookValidator } from '../validators/book.validator';
import { userAuth } from '../middlewares/auth.middleware';
// import { allNote, singlenote } from '../middlewares/redis.middleware';

const router = express.Router();

// get all notes
router.get('', userAuth, bookController.getAll);

// get a book by id
router.get('/:_id', userAuth, bookController.getById);


export default router;