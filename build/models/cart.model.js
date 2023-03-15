"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var cartSchema = new _mongoose.Schema({
  userId: {
    type: String
  },
  books: [{
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
      "default": 1
    },
    price: {
      type: Number
    }
  }],
  cart_total: {
    type: Number
  },
  isPurchased: {
    type: Boolean,
    "default": false
  }
});
var _default = (0, _mongoose.model)('cart', cartSchema);
exports["default"] = _default;