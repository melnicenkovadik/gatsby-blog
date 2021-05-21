"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Link = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _i18nextContext = require("./i18nextContext");

var _gatsby = require("gatsby");

var _types = require("./types");

var Link = function Link(_ref) {
  var language = _ref.language,
      to = _ref.to,
      _onClick = _ref.onClick,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["language", "to", "onClick"]);
  var context = (0, _react.useContext)(_i18nextContext.I18nextContext);
  var urlLanguage = language || context.language;

  var getLanguagePath = function getLanguagePath(language) {
    return context.generateDefaultLanguagePage || language !== context.defaultLanguage ? "/" + language : '';
  };

  var link = "" + getLanguagePath(urlLanguage) + to;
  return (
    /*#__PURE__*/
    // @ts-ignore
    _react.default.createElement(_gatsby.Link, (0, _extends2.default)({}, rest, {
      to: link,
      hrefLang: urlLanguage,
      onClick: function onClick(e) {
        if (language) {
          localStorage.setItem(_types.LANGUAGE_KEY, language);
        }

        if (_onClick) {
          _onClick(e);
        }
      }
    }))
  );
};

exports.Link = Link;