"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMail = sendMail;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var nodemailer = require('nodemailer');
var _require = require('googleapis'),
  google = _require.google;

// These id's and secrets should come from .env file.
var CLIENT_ID = '742488974530-pgn9qislnfn6g3665grfgrps08bmb9c5.apps.googleusercontent.com';
var CLEINT_SECRET = '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';
var REDIRECT_URI = 'https://developers.google.com/oauthplayground';
var REFRESH_TOKEN = '1//04x10GVPikPolCgYIARAAGAQSNwF-L9IrKhP8YVYhptyDdpqV_Fouc4JwlnnwRwkrdA7Km4C7Z48MLydfj_IXZyWER1UPjJI-So0';
var oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLEINT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN
});
function sendMail(_x, _x2) {
  return _sendMail.apply(this, arguments);
} // sendMail()
//     .then((result) => console.log('Email sent...', result))
//     .catch((error) => console.log(error.message));
function _sendMail() {
  _sendMail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(token, email) {
    var accessToken, transport, mailOptions, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return oAuth2Client.getAccessToken();
        case 3:
          accessToken = _context.sent;
          transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: 'shashankrathore606@gmail.com',
              clientId: CLIENT_ID,
              clientSecret: CLEINT_SECRET,
              refreshToken: REFRESH_TOKEN,
              accessToken: accessToken
            }
          });
          mailOptions = {
            from: 'shashank <shashankrathore606@gmail.com>',
            to: email,
            subject: 'Hello from gmail using API',
            text: 'Hello from gmail email using API',
            html: "<h1>Hello,<br><br>Click on given link to reset your password!</h1><br><h1>Link:><a href=\"http://localhost:".concat(process.env.APP_PORT, "/").concat(token, "\">click here</a></h1>")
          };
          _context.next = 8;
          return transport.sendMail(mailOptions);
        case 8:
          result = _context.sent;
          return _context.abrupt("return", result);
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _sendMail.apply(this, arguments);
}