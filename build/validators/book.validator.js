"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newBookValidator = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
var newBookValidator = function newBookValidator(req, res, next) {
  var schema = _joi["default"].object({
    bookName: _joi["default"].string().required(),
    description: _joi["default"].string().required(),
    discountPrice: _joi["default"].number().required(),
    bookImage: _joi["default"].string().required(),
    quantity: _joi["default"].number().required(),
    price: _joi["default"].number().required(),
    admin_user_id: _joi["default"].string().optional(),
    author: _joi["default"].string().optional()
  });
  var _schema$validate = schema.validate(req.body),
    error = _schema$validate.error,
    value = _schema$validate.value;
  if (error) {
    next(error);
  } else {
    // Client side error
    next();
  }
};
exports.newBookValidator = newBookValidator;