"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _user = _interopRequireDefault(require("./user.route"));
var _book = _interopRequireDefault(require("../routes/book.route"));
var _cart = _interopRequireDefault(require("./cart.route"));
var _wishlist = _interopRequireDefault(require("./wishlist.route"));
var router = _express["default"].Router();
/**
 * Function contains Application routes
 *
 * @returns router
 */
var routes = function routes() {
  router.get('/', function (req, res) {
    res.json('Welcome');
  });
  router.use('/users', _user["default"]);
  router.use('/books', _book["default"]);
  router.use('/carts', _cart["default"]);
  router.use('/wishllist', _wishlist["default"]);
  return router;
};
var _default = routes;
exports["default"] = _default;