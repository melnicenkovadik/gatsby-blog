"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Helmet = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

var _useI18next2 = require("./useI18next");

var Helmet = function Helmet(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["children"]);

  var _useI18next = (0, _useI18next2.useI18next)(),
      languages = _useI18next.languages,
      language = _useI18next.language,
      originalPath = _useI18next.originalPath,
      defaultLanguage = _useI18next.defaultLanguage,
      _useI18next$siteUrl = _useI18next.siteUrl,
      siteUrl = _useI18next$siteUrl === void 0 ? '' : _useI18next$siteUrl;

  var createUrlWithLang = function createUrlWithLang(lng) {
    var url = "" + siteUrl + (lng === defaultLanguage ? '' : "/" + lng) + originalPath;
    return url.endsWith('/') ? url : url + "/";
  };

  return /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, props, /*#__PURE__*/_react.default.createElement("html", {
    lang: language
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "canonical",
    href: createUrlWithLang(language)
  }), languages.map(function (lng) {
    return /*#__PURE__*/_react.default.createElement("link", {
      rel: "alternate",
      key: lng,
      href: createUrlWithLang(lng),
      hrefLang: lng
    });
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "alternate",
    href: createUrlWithLang(defaultLanguage),
    hrefLang: "x-default"
  }), children);
};

exports.Helmet = Helmet;