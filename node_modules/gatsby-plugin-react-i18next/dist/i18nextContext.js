"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.I18nextContext = void 0;

var _react = _interopRequireDefault(require("react"));

var I18nextContext = /*#__PURE__*/_react.default.createContext({
  language: 'en',
  languages: ['en'],
  routed: false,
  defaultLanguage: 'en',
  generateDefaultLanguagePage: false,
  originalPath: '/',
  path: '/'
});

exports.I18nextContext = I18nextContext;