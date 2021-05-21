"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.wrapPageElement = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _browserLang = _interopRequireDefault(require("browser-lang"));

var _types = require("../types");

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

var _i18nextContext = require("../i18nextContext");

var _outdent = _interopRequireDefault(require("outdent"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2.default)(["\n      No translations were found in \"", "\" key for \"", "\". \n      You need to add a graphql query to every page like this:\n      \n      export const query = graphql`\n        query($language: String!) {\n          ", ": allLocale(language: {eq: $language}}) {\n            edges {\n              node {\n                ns\n                data\n                language\n              }\n            }\n          }\n        }\n      `;\n      "], ["\n      No translations were found in \"", "\" key for \"", "\". \n      You need to add a graphql query to every page like this:\n      \n      export const query = graphql\\`\n        query($language: String!) {\n          ", ": allLocale(language: {eq: $language}}) {\n            edges {\n              node {\n                ns\n                data\n                language\n              }\n            }\n          }\n        }\n      \\`;\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var withI18next = function withI18next(i18n, context) {
  return function (children) {
    return /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
      i18n: i18n
    }, /*#__PURE__*/_react.default.createElement(_i18nextContext.I18nextContext.Provider, {
      value: context
    }, children));
  };
};

var removePathPrefix = function removePathPrefix(pathname) {
  var pathPrefix = (0, _gatsby.withPrefix)('/');

  if (pathname.startsWith(pathPrefix)) {
    return pathname.replace(pathPrefix, '/');
  }

  return pathname;
};

var wrapPageElement = function wrapPageElement(_ref, _ref2) {
  var _data$localeJsonNodeN;

  var element = _ref.element,
      props = _ref.props;
  var _ref2$i18nextOptions = _ref2.i18nextOptions,
      i18nextOptions = _ref2$i18nextOptions === void 0 ? {} : _ref2$i18nextOptions,
      _ref2$redirect = _ref2.redirect,
      redirect = _ref2$redirect === void 0 ? true : _ref2$redirect,
      _ref2$generateDefault = _ref2.generateDefaultLanguagePage,
      generateDefaultLanguagePage = _ref2$generateDefault === void 0 ? false : _ref2$generateDefault,
      siteUrl = _ref2.siteUrl,
      _ref2$localeJsonNodeN = _ref2.localeJsonNodeName,
      localeJsonNodeName = _ref2$localeJsonNodeN === void 0 ? 'locales' : _ref2$localeJsonNodeN;
  if (!props) return;
  var data = props.data,
      pageContext = props.pageContext,
      location = props.location;
  var _pageContext$i18n = pageContext.i18n,
      routed = _pageContext$i18n.routed,
      language = _pageContext$i18n.language,
      languages = _pageContext$i18n.languages,
      originalPath = _pageContext$i18n.originalPath,
      defaultLanguage = _pageContext$i18n.defaultLanguage,
      path = _pageContext$i18n.path;
  var isRedirect = redirect && !routed;

  if (isRedirect) {
    var search = location.search; // Skip build, Browsers only

    if (typeof window !== 'undefined') {
      var detected = window.localStorage.getItem(_types.LANGUAGE_KEY) || (0, _browserLang.default)({
        languages: languages,
        fallback: language
      });

      if (!languages.includes(detected)) {
        detected = language;
      }

      window.localStorage.setItem(_types.LANGUAGE_KEY, detected);

      if (detected !== defaultLanguage) {
        var queryParams = search || '';
        var newUrl = (0, _gatsby.withPrefix)("/" + detected + removePathPrefix(location.pathname) + queryParams + location.hash);
        window.location.replace(newUrl);
        return null;
      }
    }
  }

  var localeNodes = (data === null || data === void 0 ? void 0 : (_data$localeJsonNodeN = data[localeJsonNodeName]) === null || _data$localeJsonNodeN === void 0 ? void 0 : _data$localeJsonNodeN.edges) || [];

  if (languages.length > 1 && localeNodes.length === 0 && process.env.NODE_ENV === 'development') {
    console.error((0, _outdent.default)(_templateObject(), localeJsonNodeName, originalPath, localeJsonNodeName));
  }

  var namespaces = localeNodes.map(function (_ref3) {
    var node = _ref3.node;
    return node.ns;
  }); // We want to set default namespace to a page namespace if it exists
  // and use other namespaces as fallback
  // this way you dont need to specify namespaces in pages

  var defaultNS = i18nextOptions.defaultNS || 'translation';
  defaultNS = namespaces.find(function (ns) {
    return ns !== defaultNS;
  }) || defaultNS;
  var fallbackNS = namespaces.filter(function (ns) {
    return ns !== defaultNS;
  });

  var i18n = _i18next.default.createInstance();

  i18n.init((0, _extends2.default)({}, i18nextOptions, {
    lng: language,
    fallbackLng: defaultLanguage,
    defaultNS: defaultNS,
    fallbackNS: fallbackNS,
    react: {
      useSuspense: false
    }
  }));
  localeNodes.forEach(function (_ref4) {
    var node = _ref4.node;
    var parsedData = JSON.parse(node.data);
    i18n.addResourceBundle(node.language, node.ns, parsedData);
  });

  if (i18n.language !== language) {
    i18n.changeLanguage(language);
  }

  var context = {
    routed: routed,
    language: language,
    languages: languages,
    originalPath: originalPath,
    defaultLanguage: defaultLanguage,
    generateDefaultLanguagePage: generateDefaultLanguagePage,
    siteUrl: siteUrl,
    path: path
  };
  return withI18next(i18n, context)(element);
};

exports.wrapPageElement = wrapPageElement;