import _id from '@hapi/joi/lib/base';
import books from '../models/book.model';

// Get all Book
export const getAll = async () => {
  const data = await books.find();
  if (data.length !== 0) {
    return data;
  } else {
    throw new Error('books are not available');
  }
};


// get Book by id
export const getById = async (_id, userId) => {
  try {
    const data = await books.findById({ _id, userId: userId });
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

// sort Book high to low
export const highToLow = async () => {
  try {
    const data = await books.find().sort({ price: -1 });
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

// sort Book low to high
export const lowToHigh = async () => {
  try {
    const data = await books.find().sort({ price: 1 });
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

// Search Book by text
export const searchByText = async (searchText) => {
  try {
    const data = await books.find({
      $or: [
        {
          bookName: { $regex: searchText, $options: 'i' }
        },
        {
          author: { $regex: searchText, $options: 'i' }
        },
        {
          description: { $regex: searchText, $options: 'i' }
        }
      ]
    });
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
