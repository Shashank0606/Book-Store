import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import bookRoute from '../routes/book.route';
import cartRoute from './cart.route';
import wishlistRoute from './wishlist.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);

  router.use('/books', bookRoute);

  router.use('/carts', cartRoute);

  router.use('/wishllist', wishlistRoute);
  return router;
};

export default routes;
