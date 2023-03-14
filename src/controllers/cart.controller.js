import HttpStatus from 'http-status-codes';
import * as cartService from '../services/cart.service';

//new cart And add Book To card
export const addedToCart = async (req, res, next) => {
    try {
        const data = await cartService.addedToCart(req.body.EmailId, req.params._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Added to Cart successfully'
        });
    } catch (error) {
        next(error);
    }
};


// Remove book from cart
export const removeBookFromCart = async (req, res) => {
    try {
        const data = await cartService.removeBookFromCart(req.body.EmailId, req.params._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'book removed from cart successfully'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};