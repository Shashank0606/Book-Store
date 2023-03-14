import books from '../models/book.model';
import cart from '../models/cart.model';

// Add book to cart
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



//Remove books from cart

export const removeBookFromCart = async (EmailId, params_book_id) => {
    const checkCart = await cart.findOne({ userId: EmailId });
    if (checkCart) {
        console.log("If User Exists");
        let bookFound = false
        let totalPrice = 0
        let bookquanitity = 0
        checkCart.books.forEach(element => {
            if (element.productId == params_book_id) {
                element.quantity = element.quantity -= 1
                bookquanitity = element.quantity
                totalPrice = totalPrice - (element.price * element.quantity);
                let indexofelement = checkCart.books.indexOf(element);
                console.log("If Book found");
                checkCart.books.splice(indexofelement, 1)
                bookFound = true
            }
        });
        console.log("After deleting the book", checkCart.books);
        if (bookFound == false) {
            console.log("If Book not found");
            throw new Error("Book not in the cart");
        }

        const updatedCart = await cart.findOneAndUpdate({ userId: EmailId }, { books: checkCart.books, cart_total: totalPrice }, { new: true })
        return updatedCart
    } else {
        throw new Error("User cart doesn't exist");
    }
};

