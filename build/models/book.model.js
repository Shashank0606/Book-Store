"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
/* eslint-disable prettier/prettier */
//import { bool, boolean } from '@hapi/joi';

var booksSchema = new _mongoose.Schema({
  bookName: {
    type: String
  },
  description: {
    type: String
  },
  discountPrice: {
    type: Number,
    required: true
  },
  bookImage: {
    type: String
  },
  admin_user_id: {
    type: String,
    required: true
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
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('Books', booksSchema);
exports["default"] = _default;