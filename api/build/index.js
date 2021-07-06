"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = 3001;

_app["default"].listen(PORT, function () {
  console.log("Server listening on port", PORT);
});