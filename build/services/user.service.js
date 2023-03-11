"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRegistration = exports.resetPassword = exports.login = exports.forgetPassword = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _user = _interopRequireDefault(require("../models/user.model"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _user2 = require("../utils/user.util");
// import sendMail from '../utils/user.util'

// import * as mq from '../utils/rabbitmq'

// //get all users
// export const getAllUsers = async () => {
//   const data = await User.find();
//   return data;
// };

//create new user
var userRegistration = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var userexist, salt, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _user["default"].findOne({
            email: body.email
          });
        case 2:
          userexist = _context.sent;
          if (userexist) {
            _context.next = 16;
            break;
          }
          _context.next = 6;
          return _bcrypt["default"].genSalt(10);
        case 6:
          salt = _context.sent;
          _context.next = 9;
          return _bcrypt["default"].hash(body.password, salt);
        case 9:
          body.password = _context.sent;
          _context.next = 12;
          return _user["default"].create(body);
        case 12:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 16:
          throw new Error('User already exist');
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function userRegistration(_x) {
    return _ref.apply(this, arguments);
  };
}();

// login user
exports.userRegistration = userRegistration;
var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var user, validPassword, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _user["default"].findOne({
            email: body.email
          });
        case 3:
          user = _context2.sent;
          if (user) {
            _context2.next = 6;
            break;
          }
          throw new Error('Invalid Email');
        case 6:
          _context2.next = 8;
          return _bcrypt["default"].compare(body.password, user.password);
        case 8:
          validPassword = _context2.sent;
          if (validPassword) {
            _context2.next = 13;
            break;
          }
          throw new Error('Invalid Password');
        case 13:
          token = _jsonwebtoken["default"].sign({
            email: user.email,
            id: user._id
          }, process.env.SECRET_KEY);
        case 14:
          return _context2.abrupt("return", (user, token));
        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](0);
          throw new Error(_context2.t0);
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 17]]);
  }));
  return function login(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.login = login;
var forgetPassword = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(body) {
    var user, token, data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _user["default"].findOne({
            email: body.email
          });
        case 3:
          user = _context3.sent;
          if (user) {
            _context3.next = 8;
            break;
          }
          throw new Error('Invalid Email');
        case 8:
          _context3.next = 10;
          return _jsonwebtoken["default"].sign(user.email, process.env.EMAIL_SECRET_KEY);
        case 10:
          token = _context3.sent;
        case 11:
          _context3.next = 13;
          return (0, _user2.sendMail)(token, user.email);
        case 13:
          data = _context3.sent;
          return _context3.abrupt("return", {
            message: "Token send in mail",
            data: data
          });
        case 17:
          _context3.prev = 17;
          _context3.t0 = _context3["catch"](0);
          throw new Error(_context3.t0);
        case 20:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 17]]);
  }));
  return function forgetPassword(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
exports.forgetPassword = forgetPassword;
var resetPassword = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(body) {
    var userexist, salt, data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _user["default"].findOne({
            email: body.email
          });
        case 3:
          userexist = _context4.sent;
          if (!userexist) {
            _context4.next = 15;
            break;
          }
          _context4.next = 7;
          return _bcrypt["default"].genSalt(10);
        case 7:
          salt = _context4.sent;
          _context4.next = 10;
          return _bcrypt["default"].hash(body.password, salt);
        case 10:
          body.password = _context4.sent;
          _context4.next = 13;
          return _user["default"].findOneAndUpdate({
            email: body.email
          }, {
            "new": true
          });
        case 13:
          data = _context4.sent;
          return _context4.abrupt("return", data);
        case 15:
          _context4.next = 20;
          break;
        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](0);
          throw new Error(_context4.t0);
        case 20:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 17]]);
  }));
  return function resetPassword(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
exports.resetPassword = resetPassword;