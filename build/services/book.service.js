"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getById = exports.getAll = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _base = _interopRequireDefault(require("@hapi/joi/lib/base"));
var _prettier = require("prettier");
var _book = _interopRequireDefault(require("../models/book.model"));
// Get all Book
var getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _book["default"].find();
        case 2:
          data = _context.sent;
          if (!(data.length !== 0)) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", data);
        case 7:
          throw new Error('books are not available');
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAll() {
    return _ref.apply(this, arguments);
  };
}();

// export const getAll = async () => {
//     try {
//         let data = data.lenght !== 0;
//         return data;
//     } catch (err) {
//         throw new Error(err);
//     }

// };

// get Book by id
exports.getAll = getAll;
var getById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_id, userId) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _book["default"].findById({
            _id: _id,
            userId: userId
          });
        case 3:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          throw new Error(_context2.t0);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getById(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getById = getById;