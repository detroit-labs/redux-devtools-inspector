'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RightSlider = require('./RightSlider');

var _RightSlider2 = _interopRequireDefault(_RightSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getActiveButtons = function getActiveButtons(hasSkippedActions) {
  return [hasSkippedActions ? 'Sweep' : null, 'Commit'].filter(Boolean);
};

var ActionListHeader = function ActionListHeader(_ref) {
  var styling = _ref.styling,
      onSearch = _ref.onSearch,
      hasSkippedActions = _ref.hasSkippedActions,
      hasStagedActions = _ref.hasStagedActions,
      onCommit = _ref.onCommit,
      onSweep = _ref.onSweep;
  return _react2.default.createElement(
    'div',
    styling('actionListHeader'),
    _react2.default.createElement('input', (0, _extends3.default)({}, styling('actionListHeaderSearch'), {
      onChange: function onChange(e) {
        return onSearch(e.target.value);
      },
      placeholder: 'filter...'
    })),
    _react2.default.createElement(
      'div',
      styling('actionListHeaderWrapper'),
      _react2.default.createElement(
        _RightSlider2.default,
        { shown: hasStagedActions, styling: styling },
        _react2.default.createElement(
          'div',
          styling('actionListHeaderSelector'),
          getActiveButtons(hasSkippedActions).map(function (btn) {
            return _react2.default.createElement(
              'div',
              (0, _extends3.default)({
                key: btn,
                onClick: function onClick() {
                  return {
                    Commit: onCommit,
                    Sweep: onSweep
                  }[btn]();
                }
              }, styling(['selectorButton', 'selectorButtonSmall'], false, true)),
              btn
            );
          })
        )
      )
    )
  );
};

exports.default = ActionListHeader;