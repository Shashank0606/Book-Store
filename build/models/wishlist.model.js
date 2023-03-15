"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
/* eslint-disable prettier/prettier */

var wishlistSchema = new _mongoose.Schema({
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
    price: {
      type: Number
    }
  }]
});
var _default = (0, _mongoose.model)('Wishlist', wishlistSchema);
exports["default"] = _default;