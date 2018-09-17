/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/widjet/index.js":
/*!*****************************!*\
  !*** ./src/widjet/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _widjet = __webpack_require__(/*! ./widjet/widjet.js */ "./src/widjet/widjet/widjet.js");

var _widjet2 = _interopRequireDefault(_widjet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _widjet2.default();

/***/ }),

/***/ "./src/widjet/scss/index.scss":
/*!************************************!*\
  !*** ./src/widjet/scss/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/widjet/settings/settings.js":
/*!*****************************************!*\
  !*** ./src/widjet/settings/settings.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TOKENKEY = 'TOKENKEY';
var DOMEN = 'http://127.0.0.1:8080';
var PATH = '/dist/dev/widjet/index.html';
exports.default = { TOKENKEY: TOKENKEY, DOMEN: DOMEN, PATH: PATH };

/***/ }),

/***/ "./src/widjet/widjet/helpers/widget-position.js":
/*!******************************************************!*\
  !*** ./src/widjet/widjet/helpers/widget-position.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WidgetPosition = function () {
  function WidgetPosition() {
    _classCallCheck(this, WidgetPosition);

    var TopPosition = { x: "5", y: "40" };
    var LeftPosition = { x: "20", y: "5" };
    var RightPosition = { x: "20", y: "74" };
    var DownLeftPosition = { x: "40", y: "5" };
    var DownRightPosition = { x: "40", y: "74" };

    this.positionTypes = {
      'top': TopPosition,
      'left': LeftPosition,
      'right': RightPosition,
      'down-left': DownLeftPosition,
      'down-right': DownRightPosition
    };
  }

  _createClass(WidgetPosition, [{
    key: "returnPosByType",
    value: function returnPosByType(positionType) {
      console.log('positionType ' + positionType);
      if (this.positionTypes.hasOwnProperty(positionType)) {
        return this.positionTypes[positionType];
      }
      //  обработчик ошибки
      return DownRightPosition;
    }
  }]);

  return WidgetPosition;
}();

exports.default = WidgetPosition;

/***/ }),

/***/ "./src/widjet/widjet/local-storage/local-storage.js":
/*!**********************************************************!*\
  !*** ./src/widjet/widjet/local-storage/local-storage.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _settings = __webpack_require__(/*! ../../settings/settings.js */ "./src/widjet/settings/settings.js");

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// localStorage.setItem(TOKENKEY, 'myValue');
//localStorage.removeItem(TOKENKEY);
console.log('TOKENKEY = ' + JSON.stringify(_settings2.default.TOKENKEY));
var LocalStorage = localStorage.getItem(_settings2.default);
console.log('LocalStorage = ' + LocalStorage);

exports.default = LocalStorage;

/***/ }),

/***/ "./src/widjet/widjet/open-widjet/open-widjet.js":
/*!******************************************************!*\
  !*** ./src/widjet/widjet/open-widjet/open-widjet.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _view = __webpack_require__(/*! ../view/view */ "./src/widjet/widjet/view/view.js");

var _view2 = _interopRequireDefault(_view);

var _settings = __webpack_require__(/*! ../../settings/settings.js */ "./src/widjet/settings/settings.js");

var _settings2 = _interopRequireDefault(_settings);

var _widgetPosition = __webpack_require__(/*! ../helpers/widget-position */ "./src/widjet/widjet/helpers/widget-position.js");

var _widgetPosition2 = _interopRequireDefault(_widgetPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function openWidjet(config, token) {

	var options = {
		domain: JSON.stringify(_settings2.default.DOMEN),
		path: JSON.stringify(_settings2.default.PATH),
		bg_color: "FFFFFF",
		colorSchema: config.colorSchema,
		widgetPos: config.widgetPos,
		person: 'Фиталий Филиповский',
		personAtr: 'Консультант'
	};
	console.log('widgetPos ' + options.widgetPos);

	var pos = new _widgetPosition2.default();
	var posSchema = pos.returnPosByType(options.widgetPos);
	var x = posSchema.x;
	var y = posSchema.y;

	var Widget = {
		created: false,
		widgetElement: null,
		show: function show() {
			if (this.created) return;
			this.widgetElement = document.createElement('div');
			this.widgetElement.setAttribute('id', 'widget_container');
			this.widgetElement.innerHTML = '\n\t\t\t<div class="widget_container__body">\n\t\t\t<div class="widget_container__header">\n\t\t\t\t<div class="widget_container__header-img"><img src="https://secure.gravatar.com/avatar/0b1605b84a7bf445ce2af7348089c70c?s=60&d=mm&r=g" /></div>\n\t\t\t\t<div class="widget_container__header-desc"><h4>' + options.person + '</h4><h5>' + options.personAtr + '</h5></div>\n\t\t\t</div>\n\t\t\t<form class="widget_container__form">\n\t\t\t\t<div class="widget_container__messages"></div>\n\t\t\t\t<textarea rows="5" cols="30" name="text" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"></textarea>\n\t\t\t\t<button type="button" id="widget_container__clear" class="widget_container__button">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n\t\t\t\t<button type="button" id="widget_container__submit" class="widget_container__button">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n\t\t\t</form>\n\t\t</div>';
			document.body.insertBefore(this.widgetElement, document.body.nextSibling);
			this.widgetElement.style.top = x + '%';
			this.widgetElement.style.left = y + '%';

			this.created = true;
		}
	};

	Widget.show();
}

exports.default = openWidjet;

/***/ }),

/***/ "./src/widjet/widjet/view/view.js":
/*!****************************************!*\
  !*** ./src/widjet/widjet/view/view.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./src/widjet/widjet/widjet.js":
/*!*************************************!*\
  !*** ./src/widjet/widjet/widjet.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _localStorage = __webpack_require__(/*! ./local-storage/local-storage */ "./src/widjet/widjet/local-storage/local-storage.js");

var _localStorage2 = _interopRequireDefault(_localStorage);

var _openWidjet = __webpack_require__(/*! ./open-widjet/open-widjet */ "./src/widjet/widjet/open-widjet/open-widjet.js");

var _openWidjet2 = _interopRequireDefault(_openWidjet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Widget = function () {
    _createClass(Widget, [{
        key: 'getConfig',
        value: function getConfig() {
            // делаем вебсокер запрос о конфиге
            var config = {
                colorSchema: 'light',
                widgetPos: 'down-right'
            };
            return config;
        }
    }, {
        key: 'getToken',
        value: function getToken() {
            if (!_localStorage2.default) {
                // если в ЛС ничего не нашли то делаем запрос на токен
            }
            var TOKEN = '123456789';
            return TOKEN;
        }
    }]);

    function Widget() {
        _classCallCheck(this, Widget);

        var CONFIG = this.getConfig();
        var TOKEN = this.getToken();
        (0, _openWidjet2.default)(CONFIG, TOKEN);
    }

    return Widget;
}();

;

exports.default = Widget;

/***/ }),

/***/ 0:
/*!****************************************************************!*\
  !*** multi ./src/widjet/index.js ./src/widjet/scss/index.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/widjet/index.js */"./src/widjet/index.js");
module.exports = __webpack_require__(/*! ./src/widjet/scss/index.scss */"./src/widjet/scss/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=index.js.map