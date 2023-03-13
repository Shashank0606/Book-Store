import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import bookRoute from '../routes/book.route';
import cartRoute from './cart.route'
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
  return router;
};

export default routes;
