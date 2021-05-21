"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onCreatePage = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bluebird = _interopRequireDefault(require("bluebird"));

var _pathToRegexp = require("path-to-regexp");

var onCreatePage = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(_ref, pluginOptions) {
    var page, actions, createPage, deletePage, _pluginOptions$defaul, defaultLanguage, _pluginOptions$genera, generateDefaultLanguagePage, _pluginOptions$langua, languages, _pluginOptions$pages, pages, generatePage, pageOptions, newPage, alternativeLanguages, result, language, originalPath, routed;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            page = _ref.page, actions = _ref.actions;

            if (!(typeof page.context.i18n === 'object')) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return");

          case 3:
            createPage = actions.createPage, deletePage = actions.deletePage;
            _pluginOptions$defaul = pluginOptions.defaultLanguage, defaultLanguage = _pluginOptions$defaul === void 0 ? 'en' : _pluginOptions$defaul, _pluginOptions$genera = pluginOptions.generateDefaultLanguagePage, generateDefaultLanguagePage = _pluginOptions$genera === void 0 ? false : _pluginOptions$genera, _pluginOptions$langua = pluginOptions.languages, languages = _pluginOptions$langua === void 0 ? ['en'] : _pluginOptions$langua, _pluginOptions$pages = pluginOptions.pages, pages = _pluginOptions$pages === void 0 ? [] : _pluginOptions$pages;

            generatePage = /*#__PURE__*/function () {
              var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref3) {
                var language, _ref3$path, path, _ref3$originalPath, originalPath, _ref3$routed, routed, pageOptions;

                return _regenerator.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        language = _ref3.language, _ref3$path = _ref3.path, path = _ref3$path === void 0 ? page.path : _ref3$path, _ref3$originalPath = _ref3.originalPath, originalPath = _ref3$originalPath === void 0 ? page.path : _ref3$originalPath, _ref3$routed = _ref3.routed, routed = _ref3$routed === void 0 ? false : _ref3$routed, pageOptions = _ref3.pageOptions;
                        return _context.abrupt("return", (0, _extends2.default)({}, page, {
                          path: path,
                          context: (0, _extends2.default)({}, page.context, {
                            language: language,
                            i18n: {
                              language: language,
                              languages: (pageOptions === null || pageOptions === void 0 ? void 0 : pageOptions.languages) || languages,
                              defaultLanguage: defaultLanguage,
                              generateDefaultLanguagePage: generateDefaultLanguagePage,
                              routed: routed,
                              originalPath: originalPath,
                              path: path
                            }
                          })
                        }));

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function generatePage(_x3) {
                return _ref4.apply(this, arguments);
              };
            }();

            pageOptions = pages.find(function (opt) {
              return (0, _pathToRegexp.match)(opt.matchPath)(page.path);
            });
            alternativeLanguages = generateDefaultLanguagePage ? languages : languages.filter(function (lng) {
              return lng !== defaultLanguage;
            });

            if (pageOptions !== null && pageOptions !== void 0 && pageOptions.excludeLanguages) {
              alternativeLanguages = alternativeLanguages.filter(function (lng) {
                var _pageOptions$excludeL;

                return !(pageOptions !== null && pageOptions !== void 0 && (_pageOptions$excludeL = pageOptions.excludeLanguages) !== null && _pageOptions$excludeL !== void 0 && _pageOptions$excludeL.includes(lng));
              });
            }

            if (pageOptions !== null && pageOptions !== void 0 && pageOptions.languages) {
              alternativeLanguages = generateDefaultLanguagePage ? pageOptions.languages : pageOptions.languages.filter(function (lng) {
                return lng !== defaultLanguage;
              });
            }

            if (!(pageOptions !== null && pageOptions !== void 0 && pageOptions.getLanguageFromPath)) {
              _context3.next = 23;
              break;
            }

            result = (0, _pathToRegexp.match)(pageOptions.matchPath)(page.path);

            if (result) {
              _context3.next = 14;
              break;
            }

            return _context3.abrupt("return");

          case 14:
            language = languages.find(function (lng) {
              return lng === result.params.lang;
            }) || defaultLanguage;
            originalPath = page.path.replace("/" + language, '');
            routed = Boolean(result.params.lang);
            _context3.next = 19;
            return generatePage({
              language: language,
              originalPath: originalPath,
              routed: routed,
              pageOptions: pageOptions
            });

          case 19:
            newPage = _context3.sent;

            if (routed || !pageOptions.excludeLanguages) {
              alternativeLanguages = [];
            }

            _context3.next = 26;
            break;

          case 23:
            _context3.next = 25;
            return generatePage({
              language: defaultLanguage,
              pageOptions: pageOptions
            });

          case 25:
            newPage = _context3.sent;

          case 26:
            try {
              deletePage(page);
            } catch (_unused) {}

            createPage(newPage);
            _context3.next = 30;
            return _bluebird.default.map(alternativeLanguages, /*#__PURE__*/function () {
              var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(lng) {
                var localePage, regexp;
                return _regenerator.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return generatePage({
                          language: lng,
                          path: "" + lng + page.path,
                          routed: true
                        });

                      case 2:
                        localePage = _context2.sent;
                        regexp = new RegExp('/404/?$');

                        if (regexp.test(localePage.path)) {
                          localePage.matchPath = "/" + lng + "/*";
                        }

                        createPage(localePage);

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x4) {
                return _ref5.apply(this, arguments);
              };
            }());

          case 30:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function onCreatePage(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.onCreatePage = onCreatePage;