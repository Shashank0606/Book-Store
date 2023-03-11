import _id from '@hapi/joi/lib/base';
import { resolveConfig } from 'prettier';
import books from '../models/book.model';


// Get all Book
export const getAll = async () => {
    const data = await books.find();
    if (data.length !== 0) {
        return data;
    } else {
        throw new Error('books are not available');
    }
}

// export const getAll = async () => {
//     try {
//         let data = data.lenght !== 0;
//         return data;
//     } catch (err) {
//         throw new Error(err);
//     }

// };


// get Book by id
export const getById = async (_id, userId) => {
    try {
        const data = await books.findById({ _id, userId: userId });
        return data;
    } catch (err) {
        throw new Error(err);
    }
};