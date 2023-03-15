"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeBook = exports.addBook = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _book = _interopRequireDefault(require("../models/book.model"));
var _wishlist = _interopRequireDefault(require("../models/wishlist.model"));
//adding book to wishlist
var addBook = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(EmailId, params_book_id) {
    var book, userCart, existingBook, newBook, updatedCart;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _book["default"].findOne({
            _id: params_book_id
          });
        case 3:
          book = _context.sent;
          if (book) {
            _context.next = 6;
            break;
          }
          throw new Error('Book not found');
        case 6:
          console.log('Book:', book);
          _context.next = 9;
          return _wishlist["default"].findOne({
            userId: EmailId
          });
        case 9:
          _context.t0 = _context.sent;
          if (_context.t0) {
            _context.next = 12;
            break;
          }
          _context.t0 = {
            userId: EmailId,
            books: []
          };
        case 12:
          userCart = _context.t0;
          existingBook = userCart.books.find(function (book) {
            return book.productId === params_book_id;
          });
          if (existingBook) {
            existingBook.quantity++;
            console.log('Existing book quantity:', existingBook.quantity);
          } else {
            newBook = {
              productId: book._id,
              description: book.description,
              bookName: book.bookName,
              bookImage: book.bookImage,
              author: book.author,
              price: parseInt(book.price),
              quantity: 1
            };
            userCart.books.push(newBook);
            console.log('Added new book:', newBook);
          }
          _context.next = 17;
          return _wishlist["default"].findOneAndUpdate({
            userId: EmailId
          }, {
            books: userCart.books
          }, {
            "new": true,
            upsert: true
          });
        case 17:
          updatedCart = _context.sent;
          return _context.abrupt("return", updatedCart);
        case 21:
          _context.prev = 21;
          _context.t1 = _context["catch"](0);
          console.error(_context.t1);
          throw new Error(_context.t1.message);
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 21]]);
  }));
  return function addBook(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//Remove books from wishlist
exports.addBook = addBook;
var removeBook = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(EmailId, params_book_id) {
    var checkCart, bookFound, totalPrice, bookquanitity, updatedCart;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _wishlist["default"].findOne({
            userId: EmailId
          });
        case 2:
          checkCart = _context2.sent;
          if (!checkCart) {
            _context2.next = 19;
            break;
          }
          console.log("If User Exists");
          bookFound = false;
          totalPrice = 0;
          bookquanitity = 0;
          checkCart.books.forEach(function (element) {
            if (element.productId == params_book_id) {
              element.quantity = element.quantity -= 1;
              bookquanitity = element.quantity;
              totalPrice = totalPrice - element.price * element.quantity;
              var indexofelement = checkCart.books.indexOf(element);
              console.log("If Book found");
              checkCart.books.splice(indexofelement, 1);
              bookFound = true;
            }
          });
          console.log("After deleting the book", checkCart.books);
          if (!(bookFound == false)) {
            _context2.next = 13;
            break;
          }
          console.log("If Book not found");
          throw new Error("Book not in the cart");
        case 13:
          _context2.next = 15;
          return _wishlist["default"].findOneAndUpdate({
            userId: EmailId
          }, {
            books: checkCart.books,
            cart_total: totalPrice
          }, {
            "new": true
          });
        case 15:
          updatedCart = _context2.sent;
          return _context2.abrupt("return", updatedCart);
        case 19:
          throw new Error("User cart doesn't exist");
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function removeBook(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.removeBook = removeBook;