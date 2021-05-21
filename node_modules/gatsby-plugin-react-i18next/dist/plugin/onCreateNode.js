"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.unstable_shouldOnCreateNode = unstable_shouldOnCreateNode;
exports.onCreateNode = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function unstable_shouldOnCreateNode(_ref) {
  var node = _ref.node;
  // We only care about JSON content.
  return node.internal.mediaType === "application/json";
}

var onCreateNode = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref2, _ref3) {
    var node, actions, loadNodeContent, createNodeId, createContentDigest, reporter, _ref3$localeJsonSourc, localeJsonSourceName, absolutePath, _node$internal, mediaType, type, sourceInstanceName, relativeDirectory, name, id, activity, language, content, data, hint, createNode, createParentChildLink, localeNode;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            node = _ref2.node, actions = _ref2.actions, loadNodeContent = _ref2.loadNodeContent, createNodeId = _ref2.createNodeId, createContentDigest = _ref2.createContentDigest, reporter = _ref2.reporter;
            _ref3$localeJsonSourc = _ref3.localeJsonSourceName, localeJsonSourceName = _ref3$localeJsonSourc === void 0 ? 'locale' : _ref3$localeJsonSourc;

            if (unstable_shouldOnCreateNode({
              node: node
            })) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return");

          case 4:
            absolutePath = node.absolutePath, _node$internal = node.internal, mediaType = _node$internal.mediaType, type = _node$internal.type, sourceInstanceName = node.sourceInstanceName, relativeDirectory = node.relativeDirectory, name = node.name, id = node.id; // Currently only support file resources

            if (!(type !== 'File')) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return");

          case 7:
            if (!(localeJsonSourceName == null)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return");

          case 9:
            if (!(sourceInstanceName !== localeJsonSourceName)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return");

          case 11:
            activity = reporter.activityTimer("gatsby-plugin-react-i18next: create node: " + relativeDirectory + "/" + name);
            activity.start(); // relativeDirectory name is language name.

            language = relativeDirectory;
            _context.next = 16;
            return loadNodeContent(node);

          case 16:
            content = _context.sent;
            _context.prev = 17;
            data = JSON.stringify(JSON.parse(content), undefined, '');
            _context.next = 25;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](17);
            hint = node.absolutePath ? "file " + node.absolutePath : "in node " + node.id;
            throw new Error("Unable to parse JSON: " + hint);

          case 25:
            createNode = actions.createNode, createParentChildLink = actions.createParentChildLink;
            localeNode = {
              id: createNodeId(id + " >>> Locale"),
              children: [],
              parent: id,
              internal: {
                content: data,
                contentDigest: createContentDigest(data),
                type: "Locale"
              },
              language: language,
              ns: name,
              data: data,
              fileAbsolutePath: absolutePath
            };
            createNode(localeNode); // @ts-ignore
            // staled issue: https://github.com/gatsbyjs/gatsby/issues/19993

            createParentChildLink({
              parent: node,
              child: localeNode
            });
            activity.end();

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[17, 21]]);
  }));

  return function onCreateNode(_x, _x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.onCreateNode = onCreateNode;