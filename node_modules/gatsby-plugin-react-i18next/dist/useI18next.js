"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.useI18next = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _reactI18next = require("react-i18next");

var _react = require("react");

var _gatsby = require("gatsby");

var _i18nextContext = require("./i18nextContext");

var _types = require("./types");

var useI18next = function useI18next(ns, options) {
  var _useTranslation = (0, _reactI18next.useTranslation)(ns, options),
      i18n = _useTranslation.i18n,
      t = _useTranslation.t,
      ready = _useTranslation.ready;

  var context = (0, _react.useContext)(_i18nextContext.I18nextContext);
  var routed = context.routed,
      defaultLanguage = context.defaultLanguage,
      generateDefaultLanguagePage = context.generateDefaultLanguagePage;

  var getLanguagePath = function getLanguagePath(language) {
    return generateDefaultLanguagePage || language !== defaultLanguage ? "/" + language : '';
  };

  var removePrefix = function removePrefix(pathname) {
    var base = typeof __BASE_PATH__ !== "undefined" ? __BASE_PATH__ : __PATH_PREFIX__;

    if (base && pathname.indexOf(base) === 0) {
      pathname = pathname.slice(base.length);
    }

    return pathname;
  };

  var removeLocalePart = function removeLocalePart(pathname) {
    if (!routed) return pathname;
    var i = pathname.indexOf("/", 1);
    return pathname.substring(i);
  };

  var navigate = function navigate(to, options) {
    var languagePath = getLanguagePath(context.language);
    var link = routed ? "" + languagePath + to : "" + to;
    return (0, _gatsby.navigate)(link, options);
  };

  var changeLanguage = function changeLanguage(language, to, options) {
    var languagePath = getLanguagePath(language);
    var pathname = to || removeLocalePart(removePrefix(window.location.pathname));
    var link = "" + languagePath + pathname + window.location.search;
    localStorage.setItem(_types.LANGUAGE_KEY, language);
    return (0, _gatsby.navigate)(link, options);
  };

  return (0, _extends2.default)({}, context, {
    i18n: i18n,
    t: t,
    ready: ready,
    navigate: navigate,
    changeLanguage: changeLanguage
  });
};

exports.useI18next = useI18next;