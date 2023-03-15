import { Schema, model } from 'mongoose';

const cartSchema = new Schema({
  userId: {
    type: String
  },
  books: [
    {
      productId: {
        type: String
      },
      description: {
        type: String
      },
      bookName: {
        type: String
      },
      bookImage: {
        type: String
      },
      author: {
        type: String
      },
      quantity: {
        type: Number,
        default: 1
      },
      price: {
        type: Number
      }
    }
  ],
  cart_total: {
    type: Number
  },
  isPurchased: {
    type: Boolean,
    default: false
  },
  fullName: {
    type: String
  },
  mobile: {
    type: Number
  },
  address: {
    type: String
  },
  town: {
    type: String
  },
  state: {
    type: String
  }
});

export default model('cart', cartSchema);
