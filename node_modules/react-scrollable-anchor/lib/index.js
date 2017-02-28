'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.goToAnchor = exports.configureAnchors = exports.goToTop = undefined;

var _hash = require('./utils/hash');

Object.defineProperty(exports, 'goToAnchor', {
  enumerable: true,
  get: function get() {
    return _hash.updateHash;
  }
});

var _ScrollableAnchor = require('./ScrollableAnchor');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScrollableAnchor).default;
  }
});

var _Manager = require('./Manager');

var _Manager2 = _interopRequireDefault(_Manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var goToTop = exports.goToTop = _Manager2.default.goToTop;
var configureAnchors = exports.configureAnchors = _Manager2.default.configure;