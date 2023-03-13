import books from '../models/book.model';
import cart from '../models/cart.model';

export const addedToCart = async (EmailId, params_book_id) => {
    try {
        const book = await books.findOne({ _id: params_book_id });
        if (!book) throw new Error('Book not found');

        console.log('Book:', book);

        const userCart = await cart.findOne({ userId: EmailId }) || { userId: EmailId, books: [], cart_total: 0 };
        let totalPrice = userCart.cart_total;

        const existingBook = userCart.books.find(book => book.productId === params_book_id);
        if (existingBook) {
            existingBook.quantity++;
            totalPrice += existingBook.price;
            console.log('Existing book quantity:', existingBook.quantity);
        } else {
            const newBook = {
                productId: book._id,
                description: book.description,
                bookName: book.bookName,
                bookImage: book.bookImage,
                author: book.author,
                price: parseInt(book.price),
                quantity: 1
            };
            userCart.books.push(newBook);
            totalPrice += newBook.price;
            console.log('Added new book:', newBook);
        }

        console.log(`Cart total after adding book(s): ${totalPrice}`);

        const updatedCart = await cart.findOneAndUpdate({ userId: EmailId }, { books: userCart.books, cart_total: totalPrice }, { new: true, upsert: true });
        return updatedCart;
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
};

