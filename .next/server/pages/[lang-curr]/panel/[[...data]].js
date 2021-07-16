module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		18: 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"26":"786cabc24b0f3cc00edc","27":"9775028481c6f97c5595"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "/CuA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return searchPageFiltersDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return searchPageQueriesDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return providerPageFiltersDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderPageQueriesDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SEARCH_TYPE_SLIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SEARCH_TYPE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SEARCH_TYPE_MODULE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SEARCH_TYPE_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SEARCH_TYPE_DEAL; });
const searchPageFiltersDefaults = {
  type: 4,
  id: 0,
  search: "",
  goodsCreatedDay: 0,
  brandId: [],
  fromPrice: 0,
  toPrice: 0,
  justExist: false,
  pageNumber: 1,
  pageSize: 50,
  orderByType: 1,
  optionIds: [],
  getBrand: true,
  getSpecs: true,
  getChild: true,
  getParent: true,
  getAllCount: true,
  getMaxPrice: true
};
const searchPageQueriesDefaults = {
  type: 4,
  id: 0,
  search: "",
  goodsCreatedDay: 0,
  brandId: [],
  fromPrice: 0,
  toPrice: 0,
  justExist: false,
  pageNumber: 1,
  pageSize: 50,
  orderByType: 1,
  optionIds: []
}; ////// provider

const providerPageFiltersDefaults = {
  type: 2,
  //// Category
  id: 0,
  search: "",
  goodsCreatedDay: 0,
  brandId: [],
  fromPrice: 0,
  toPrice: 0,
  justExist: false,
  pageNumber: 1,
  pageSize: 50,
  orderByType: 1,
  optionIds: [],
  getBrand: true,
  getSpecs: true,
  getChild: true,
  getParent: true,
  getAllCount: true,
  getMaxPrice: true,
  shopId: 0
};
const ProviderPageQueriesDefaults = {
  type: providerPageFiltersDefaults.type,
  //// Category
  id: providerPageFiltersDefaults.id,
  search: providerPageFiltersDefaults.search,
  goodsCreatedDay: providerPageFiltersDefaults.goodsCreatedDay,
  brandId: providerPageFiltersDefaults.brandId,
  fromPrice: providerPageFiltersDefaults.fromPrice,
  toPrice: providerPageFiltersDefaults.toPrice,
  justExist: providerPageFiltersDefaults.justExist,
  pageNumber: providerPageFiltersDefaults.pageNumber,
  pageSize: providerPageFiltersDefaults.pageSize,
  orderByType: providerPageFiltersDefaults.orderByType,
  optionIds: providerPageFiltersDefaults.optionIds
};
const SEARCH_TYPE_SLIDER = 1;
const SEARCH_TYPE_CATEGORY = 2;
const SEARCH_TYPE_MODULE = 3;
const SEARCH_TYPE_SEARCH = 4;
const SEARCH_TYPE_DEAL = 5;

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/d77":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return client_fetchHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return client_getHomeSerachAutoComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return client_getMobileCategory; });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BfmP");

const client_fetchHome = async () => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Home/Home`);
  return result.data;
};
const client_getHomeSerachAutoComplete = async filter => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Home/SearchAutoComplete/${filter}`);
  return result.data;
};
const client_getMobileCategory = async () => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Home/MobileCategory`);
  return result.data;
};

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7Ogc");


/***/ }),

/***/ "1TxS":
/***/ (function(module, exports) {

module.exports = require("validator/lib/isLength");

/***/ }),

/***/ "1tXf":
/***/ (function(module, exports) {

module.exports = require("rc-progress");

/***/ }),

/***/ "2C5Q":
/***/ (function(module, exports) {

module.exports = require("google-libphonenumber");

/***/ }),

/***/ "4DCN":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4jN0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export langUsdParams */
/* unused harmony export langUsdParamsPanel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return possibleLangAndCur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkValidLand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkValidCurr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return normalizeLangForHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return normalizeCurrencyForHeader; });
const langUsdParams = [{
  params: {
    "lang-curr": "usd-en"
  }
}, {
  params: {
    "lang-curr": "usd-ar"
  }
}, {
  params: {
    "lang-curr": "bhd-en"
  }
}, {
  params: {
    "lang-curr": "bhd-ar"
  }
}];
const langUsdParamsPanel = [{
  params: {
    "lang-curr": "usd-en",
    data: []
  }
}, {
  params: {
    "lang-curr": "usd-ar",
    data: []
  }
}];
const possibleLangAndCur = {
  langs: {
    english: {
      code: "en",
      name: "En"
    },
    arabic: {
      code: "ar",
      name: "Ar"
    },
    persion: {
      code: "fa",
      name: "Fa"
    }
  },
  currencies: {
    dollar: {
      code: "usd",
      name: "USD"
    },
    arabic: {
      code: "bhd",
      name: "BHD"
    },
    toman: {
      code: "tmn",
      name: "TMN"
    }
  }
};
const checkValidLand = lang => {
  if (lang === possibleLangAndCur.langs.english.code || lang === possibleLangAndCur.langs.persion.code || lang === possibleLangAndCur.langs.arabic.code) return true;
  return false;
};
const checkValidCurr = curr => {
  if (curr === possibleLangAndCur.currencies.dollar.code || curr === possibleLangAndCur.currencies.arabic.code || curr === possibleLangAndCur.currencies.toman.code) return true;
  return false;
};
const normalizeLangForHeader = lang => {
  switch (lang.toLowerCase()) {
    case "en":
      return possibleLangAndCur.langs.english.name;

    case "ar":
      return possibleLangAndCur.langs.arabic.name;

    case "fa":
      return possibleLangAndCur.langs.persion.name;

    default:
      return possibleLangAndCur.langs.english.name;
  }
};
const normalizeCurrencyForHeader = curr => {
  switch (curr.toLowerCase()) {
    case "usd":
      return possibleLangAndCur.currencies.dollar.name;

    case "bhd":
      return possibleLangAndCur.currencies.arabic.name;

    case "tmn":
      return possibleLangAndCur.currencies.toman.name;

    default:
      return possibleLangAndCur.currencies.dollar.name;
  }
};

/***/ }),

/***/ "5U/F":
/***/ (function(module, exports) {

module.exports = require("react-input-range");

/***/ }),

/***/ "5w86":
/***/ (function(module, exports) {

module.exports = require("react-compound-timer/build");

/***/ }),

/***/ "65ip":
/***/ (function(module, exports) {

module.exports = require("react-tabs");

/***/ }),

/***/ "6CWK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IDLE; });
/* unused harmony export SUCCEEDED */
/* unused harmony export ERROR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return selectSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return selectStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return selectHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fetchHome; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api_client_clientHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/d77");


const LOADING = "loading";
const IDLE = "idle";
const SUCCEEDED = "succeeded";
const ERROR = "error"; //// selectors

const selectSlider = state => state.home.home.slider;
const selectStatus = state => state.home.status;
const selectHome = state => state.home.home;
const initialState = {
  status: IDLE,
  error: null,
  home: {}
};
const fetchHome = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])("home/fetchHome", async () => {
  const result = await Object(_lib_api_client_clientHome__WEBPACK_IMPORTED_MODULE_1__[/* client_fetchHome */ "a"])();
  return result.result;
});
const homeSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchHome.pending]: state => {
      state.status = LOADING;
    },
    [fetchHome.fulfilled]: (state, action) => {
      state.status = SUCCEEDED;
      state.home = action.payload;
    },
    [fetchHome.rejected]: state => {
      state.status = ERROR;
    }
  }
});
/* harmony default export */ __webpack_exports__["c"] = (homeSlice.reducer);

/***/ }),

/***/ "7+Mu":
/***/ (function(module, exports) {

module.exports = require("react-dropdown");

/***/ }),

/***/ "7ITC":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "7Ogc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_localize_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tepj");
/* harmony import */ var react_localize_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_localize_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("BXF7");
/* harmony import */ var _translations_payload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("x1Y1");
/* harmony import */ var _translations_user_panel_translations_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ymlI");
var _translations_user_panel_translations_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t("ymlI", 1);
/* harmony import */ var _translations_header_translations_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("wYP+");
var _translations_header_translations_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t("wYP+", 1);
/* harmony import */ var _lib_isServer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("zo9w");
/* harmony import */ var _lib_api_client_serverCommon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("YPTI");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_useragent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("W0sL");
/* harmony import */ var next_useragent__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_useragent__WEBPACK_IMPORTED_MODULE_13__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









 // import { StaticRouter, BrowserRouter } from "react-router-dom";
// import Footer from "../../../components/app/footer";
// import { Header } from "../../../components/app/header";






const PanelDesktop = next_dynamic__WEBPACK_IMPORTED_MODULE_12___default()(() => __webpack_require__.e(/* import() */ 27).then(__webpack_require__.bind(null, "Wsh4")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("Wsh4")],
    modules: ["./PanelDesktop"]
  }
});
const PanelMobile = next_dynamic__WEBPACK_IMPORTED_MODULE_12___default()(() => __webpack_require__.e(/* import() */ 26).then(__webpack_require__.bind(null, "B4nm")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("B4nm")],
    modules: ["./PanelMobile"]
  }
});

class Panel extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    if (!Object(_lib_isServer__WEBPACK_IMPORTED_MODULE_8__[/* isServer */ "a"])()) {
      this.redirect = false;
      this.isLogin = true;
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get("ajyal_crd"); // check user is login or not

      if (!token) {
        this.isLogin = false;
      }

      if (!this.isLogin) {
        if (this.props.ua.isDesktop) {
          this.props.router.push(`/${this.props.curr}-${this.props.lang}/Auth`);
          this.redirect = true;
        } else {
          if (this.props.router.asPath == `/${this.props.curr}-${this.props.lang}/panel` || this.props.router.asPath == `/${this.props.curr}-${this.props.lang}/panel/`) {
            return;
          }

          this.props.router.push(`/${this.props.curr}-${this.props.lang}/Auth`);
          this.redirect = true;
        }
      }
    }
  }

  render() {
    var _this$props$data$head, _this$props$data$head2;

    if (this.redirect) {
      return __jsx("p", null, "Redirecting...");
    }

    const loc = "/" + this.props.router.asPath.split("/")[1] + "/panel";
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_2__["LocalizeProvider"], {
      initialize: Object(_translations_payload__WEBPACK_IMPORTED_MODULE_5__[/* translationsPayload */ "b"])(Object(_translations_payload__WEBPACK_IMPORTED_MODULE_5__[/* mergeTranslations */ "a"])(_translations_user_panel_translations_json__WEBPACK_IMPORTED_MODULE_6__, _translations_header_translations_json__WEBPACK_IMPORTED_MODULE_7__), this.props.lang)
    }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_2__["Translate"], null, ({
      translate: t
    }) => {
      return __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, null, __jsx("title", null, t("@userpanelTitle")));
    }), !this.props.ua.isDesktop ? __jsx(PanelMobile, _extends({
      wishCount: (_this$props$data$head = this.props.data.header) === null || _this$props$data$head === void 0 ? void 0 : _this$props$data$head.wishListCount,
      customerFullName: (_this$props$data$head2 = this.props.data.header) === null || _this$props$data$head2 === void 0 ? void 0 : _this$props$data$head2.customerFullName
    }, this.props, {
      loc: loc
    })) : __jsx(PanelDesktop, _extends({}, this.props, {
      loc: loc
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])()(Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(next_useragent__WEBPACK_IMPORTED_MODULE_13__["withUserAgent"])(Panel))));
const getServerSideProps = _store__WEBPACK_IMPORTED_MODULE_4__[/* wrapper */ "a"].getServerSideProps(async context => {
  const ua = Object(next_useragent__WEBPACK_IMPORTED_MODULE_13__["useUserAgent"])(context.req.headers["user-agent"]);
  const Result = await Promise.all([Object(_lib_api_client_serverCommon__WEBPACK_IMPORTED_MODULE_9__[/* server_fetchHeader */ "c"])(ua.isDesktop), Object(_lib_api_client_serverCommon__WEBPACK_IMPORTED_MODULE_9__[/* server_fetchFooter */ "b"])()]);
  return {
    props: {
      ua,
      useragent: ua.source,
      data: {
        header: Result[0].result,
        footer: Result[1].result
      }
    }
  };
});

/***/ }),

/***/ "7koQ":
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "BXF7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ wrapper; });

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension/developmentOnly"
var developmentOnly_ = __webpack_require__("LEBW");

// EXTERNAL MODULE: ./appConfigSlice.js
var appConfigSlice = __webpack_require__("o2tl");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: ./components/app/pages/index/homeSlice.js
var homeSlice = __webpack_require__("6CWK");

// EXTERNAL MODULE: ./components/app/pages/Search/searchSlice.js + 1 modules
var searchSlice = __webpack_require__("n8U9");

// EXTERNAL MODULE: ./components/app/pages/GoodDetail/GoodDetailSlice.js
var GoodDetailSlice = __webpack_require__("QvjS");

// EXTERNAL MODULE: ./components/app/pages/Categories/categorySlice.js + 1 modules
var categorySlice = __webpack_require__("BXIE");

// EXTERNAL MODULE: ./components/app/pages/Provider/providerSlice.js + 1 modules
var providerSlice = __webpack_require__("SeNk");

// EXTERNAL MODULE: ./components/app/pages/CartAndWishlist/cartAndWishlistSlice.js
var cartAndWishlistSlice = __webpack_require__("QQGX");

// CONCATENATED MODULE: ./reducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import { connectRouter } from 'connected-react-router';









const combinedReducer = Object(external_redux_["combineReducers"])({
  appConfig: appConfigSlice["f" /* appConfigReducer */],
  home: homeSlice["c" /* default */],
  search: searchSlice["e" /* default */],
  goodDetail: GoodDetailSlice["c" /* default */],
  category: categorySlice["c" /* default */],
  provider: providerSlice["e" /* default */],
  cart_wishlist: cartAndWishlistSlice["g" /* default */]
});

const reducer = (state, action) => {
  if (action.type === external_next_redux_wrapper_["HYDRATE"]) {
    let nextState = _objectSpread(_objectSpread({}, state), action.payload);

    if (state.home) nextState.home = state.home;
    if (state.appConfig.login.isLogin) nextState.appConfig.login = state.appConfig.login;

    if (state.appConfig.login.prevLink) {
      nextState.appConfig.login.prevLink = state.appConfig.login.prevLink;
    }

    nextState.cart_wishlist.cartCount = state.cart_wishlist.cartCount;
    nextState.cart_wishlist.wishCount = state.cart_wishlist.wishCount;
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

/* harmony default export */ var reducer_0 = (reducer);
// EXTERNAL MODULE: external "redux-logger"
var external_redux_logger_ = __webpack_require__("4DCN");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./store.js







const getMiddleware = () => {
  if (true) {
    return Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a);
  } else {}
};

const initStore = () => {
  return Object(external_redux_["createStore"])(reducer_0, Object(developmentOnly_["composeWithDevTools"])(getMiddleware()));
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(initStore);

/***/ }),

/***/ "BXIE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ LOADING; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ IDLE; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ selectCatId; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* binding */ selectwebHomeModuleList; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* binding */ selectSlider; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ selectCategoryStatus; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ selectBrands; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ selectCats; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ selectCatTitle; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ fetchCategory; });

// UNUSED EXPORTS: SUCCEEDED, ERROR, setCatId

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__("+wlD");

// EXTERNAL MODULE: ./lib/api/axios.js
var api_axios = __webpack_require__("BfmP");

// CONCATENATED MODULE: ./lib/api/client/clientCategory.js

const client_fetchCategory = async CategoryId => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`/Home/Category/${CategoryId}`);
  return result.data;
};
// CONCATENATED MODULE: ./components/app/pages/Categories/categorySlice.js


const LOADING = "loading";
const IDLE = "idle";
const SUCCEEDED = "succeeded";
const ERROR = "error";
const initialState = {
  status: IDLE,
  error: null,
  catId: null,
  category: {}
}; //// categories selectors

const selectCatId = state => state.category.catId;
const selectwebHomeModuleList = state => state.category.category.webHomeModuleList;
const selectSlider = state => state.category.category.slider;
const selectCategoryStatus = state => state.category.status;
const selectBrands = state => {
  var _state$category$categ, _state$category$categ2;

  return (_state$category$categ = state.category.category) === null || _state$category$categ === void 0 ? void 0 : (_state$category$categ2 = _state$category$categ.category) === null || _state$category$categ2 === void 0 ? void 0 : _state$category$categ2.websiteBrand;
};
const selectCats = state => {
  var _state$category$categ3, _state$category$categ4;

  return (_state$category$categ3 = state.category.category) === null || _state$category$categ3 === void 0 ? void 0 : (_state$category$categ4 = _state$category$categ3.category) === null || _state$category$categ4 === void 0 ? void 0 : _state$category$categ4.childs;
};
const selectCatTitle = state => {
  var _state$category$categ5, _state$category$categ6;

  return (_state$category$categ5 = state.category.category) === null || _state$category$categ5 === void 0 ? void 0 : (_state$category$categ6 = _state$category$categ5.category) === null || _state$category$categ6 === void 0 ? void 0 : _state$category$categ6.categoryTitle;
};
const setCatId = Object(toolkit_["createAction"])("category/setCatId");
const fetchCategory = Object(toolkit_["createAsyncThunk"])("category/fetchCategory", async (catId, {
  dispatch
}) => {
  const result = await client_fetchCategory(catId);
  dispatch(setCatId(parseInt(catId)));
  return result.result;
});
const categorySlice = Object(toolkit_["createSlice"])({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategory.pending]: state => {
      state.status = LOADING;
    },
    [fetchCategory.fulfilled]: (state, action) => {
      state.status = SUCCEEDED;
      state.category = action.payload;
    },
    [fetchCategory.rejected]: state => {
      state.status = ERROR;
    },
    [setCatId]: (state, action) => {
      state.catId = action.payload;
    }
  }
});
/* harmony default export */ var Categories_categorySlice = __webpack_exports__["c"] = (categorySlice.reducer);

/***/ }),

/***/ "BfmP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _langRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4jN0");
var _class, _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const axiosClient = new (_temp = _class = class axiosClient {
  setLangAndCurrency(lang, curr) {
    axiosClient.lang = lang;
    axiosClient.curr = curr;
  }

  setToken(token) {
    axiosClient.token = token;
  }

  setCartId(id) {
    axiosClient.cartId = id;
  }

  getAxios() {
    const headers = axiosClient.token ? {
      Language: Object(_langRoutes__WEBPACK_IMPORTED_MODULE_1__[/* normalizeLangForHeader */ "d"])(axiosClient.lang),
      Currency: Object(_langRoutes__WEBPACK_IMPORTED_MODULE_1__[/* normalizeCurrencyForHeader */ "c"])(axiosClient.curr),
      Authorization: `Bearer ${axiosClient.token}`
    } : {
      Language: Object(_langRoutes__WEBPACK_IMPORTED_MODULE_1__[/* normalizeLangForHeader */ "d"])(axiosClient.lang),
      Currency: Object(_langRoutes__WEBPACK_IMPORTED_MODULE_1__[/* normalizeCurrencyForHeader */ "c"])(axiosClient.curr)
    };

    if (axiosClient.cartId) {
      headers.CookieId = axiosClient.cartId;
    }

    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      baseURL: "http://ajyal.webtreeonline.com/api",
      headers
    });
  }

}, _defineProperty(_class, "lang", "En"), _defineProperty(_class, "curr", "Dollar"), _defineProperty(_class, "token", null), _defineProperty(_class, "cartId", null), _temp)();
/* harmony default export */ __webpack_exports__["a"] = (axiosClient);

/***/ }),

/***/ "Bg3j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const winston = __webpack_require__("QQ+o");

const {
  combine,
  timestamp,
  printf
} = winston.format;

const path = __webpack_require__("oyvS");

const myFormat = printf(({
  level,
  message,
  timestamp
}) => {
  return `${timestamp} [${level}]: ${message}`;
});
const logger = winston.createLogger({
  level: "error",
  format: combine(timestamp(), myFormat),
  transports: [new winston.transports.File({
    filename: path.join(process.cwd(), "log", "info.log"),
    level: "info",
    maxsize: 5242880,
    maxFiles: 2
  }), new winston.transports.File({
    filename: path.join(process.cwd(), "log", "error.log"),
    level: "error",
    maxsize: 5242880,
    maxFiles: 2
  }), new winston.transports.File({
    filename: path.join(process.cwd(), "log", "http.log"),
    level: "http",
    maxsize: 5242880,
    maxFiles: 2
  })],
  exceptionHandlers: [new winston.transports.File({
    filename: path.join(process.cwd(), "log", "exceptions.log")
  })],
  exitOnError: false
});

if (false) {}

/* harmony default export */ __webpack_exports__["a"] = (logger);

/***/ }),

/***/ "CSOn":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "CbI7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return client_fetchCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return client_addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return client_fetchWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return client_likeGood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return client_removeFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return client_addItemCount; });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BfmP");

const client_fetchCart = async ({
  code,
  country,
  city,
  province
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/UserOrder/CartDetail`, {
    params: {
      code: code,
      cityId: city,
      countryId: country,
      provinceId: province
    }
  });
  return result.data;
};
const client_addToCart = async ({
  goodId,
  providerId,
  count,
  countryId,
  cityId,
  provinceId,
  oneClick = false
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.post("/UserOrder/Order", {
    goodsId: goodId,
    providerId: providerId,
    number: count,
    countryId: countryId,
    cityId: cityId,
    provinceId: provinceId,
    oneClick
  });
  return result.data;
};
const client_fetchWishlist = async () => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Home/CustomerLikes`);
  return result.data;
};
const client_likeGood = async goodsId => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.post(`/UserActivity/LikeGoods/${goodsId}`);
  return result.data;
};
const client_removeFromCart = async orderItemId => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.delete(`/UserOrder/OrderItem/${orderItemId}`);
  return result.data;
};
const client_addItemCount = async ({
  goodsId,
  providerId,
  number,
  countryId,
  cityId,
  provinceId
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.put(`/UserOrder/IncreaseOrderItem`, {
    goodsId,
    providerId,
    number,
    countryId,
    cityId,
    provinceId
  });
  return result.data;
};

/***/ }),

/***/ "DbpL":
/***/ (function(module, exports) {

module.exports = require("react-switch");

/***/ }),

/***/ "E/xK":
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),

/***/ "E4SY":
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "EGWi":
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "GNgB":
/***/ (function(module, exports) {

module.exports = require("react-geocode");

/***/ }),

/***/ "J46/":
/***/ (function(module, exports) {

module.exports = require("react-slidedown");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KGsa":
/***/ (function(module, exports) {

module.exports = require("react-verification-input");

/***/ }),

/***/ "LEBW":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension/developmentOnly");

/***/ }),

/***/ "MGin":
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "NNXn":
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "O5CA":
/***/ (function(module, exports) {

module.exports = require("validator/lib/isEmpty");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QQ+o":
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),

/***/ "QQGX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LOADING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IDLE; });
/* unused harmony export SUCCEEDED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return selectStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return selectCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return selectWishListStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return selectWishList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return selectCountryId; });
/* unused harmony export selectProvinceId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return selectCityId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return selectCityText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return selectCanCheckout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return selectCoupon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return selectErrorMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return selectCartCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return selectWishCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return fetchCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return fetchWishList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return cityChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return addCoupon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addCartCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return addWishCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return fetchCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return fetchProvinces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return fetchCities; });
/* harmony import */ var _lib_api_client_clientCommon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hK2O");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api_client_clientCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("CbI7");



const LOADING = "loading";
const IDLE = "idle";
const SUCCEEDED = "succeeded";
const ERROR = "error"; //// selectors

const selectStatus = state => state.cart_wishlist.status;
const selectCart = state => state.cart_wishlist.cart;
const selectWishListStatus = state => state.cart_wishlist.wishListStatus;
const selectWishList = state => state.cart_wishlist.wishList;
const selectCountryId = state => state.cart_wishlist.countryId;
const selectProvinceId = state => state.cart_wishlist.provinceId;
const selectCityId = state => state.cart_wishlist.cityId;
const selectCityText = state => state.cart_wishlist.cityText;
const selectCanCheckout = state => state.cart_wishlist.canCheckout;
const selectCoupon = state => state.cart_wishlist.coupon;
const selectErrorMsg = state => state.cart_wishlist.error;
const selectCartCount = state => state.cart_wishlist.cartCount;
const selectWishCount = state => state.cart_wishlist.wishCount;
const initialState = {
  status: IDLE,
  error: null,
  cartCount: 0,
  wishCount: 0,
  cart: {},
  countryId: null,
  provinceId: null,
  cityId: null,
  cityText: null,
  coupon: null,
  wishList: [],
  wishListStatus: IDLE,
  canCheckout: true
};
const fetchCart = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createAsyncThunk"])("cart_wishlist/fetchCart", async (data, {
  rejectWithValue,
  dispatch
}) => {
  try {
    const result = await Object(_lib_api_client_clientCart__WEBPACK_IMPORTED_MODULE_2__[/* client_fetchCart */ "c"])(data);
    dispatch(addCartCount(result.result ? result.result.items.length : 0));
    return result.result;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});
const fetchWishList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createAsyncThunk"])("cart_wishlist/fetchWhishlist", async (data, {
  dispatch
}) => {
  const result = await Object(_lib_api_client_clientCart__WEBPACK_IMPORTED_MODULE_2__[/* client_fetchWishlist */ "d"])();
  dispatch(addWishCount(result.result.length));
  return result.result;
});
const cartSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createSlice"])({
  name: "cart_wishlist",
  initialState,
  reducers: {
    cityChanged(state, action) {
      state.cityId = action.payload.cityId;
      state.countryId = action.payload.countryId;
      state.provinceId = action.payload.provinceId;
      state.cityText = action.payload.cityText;
    },

    addCoupon(state, action) {
      state.coupon = action.payload;
    },

    addCartCount(state, action) {
      state.cartCount = action.payload;
    },

    addWishCount(state, action) {
      state.wishCount = action.payload;
    }

  },
  extraReducers: {
    [fetchCart.pending]: state => {
      state.status = LOADING;
    },
    [fetchCart.fulfilled]: (state, action) => {
      if (!action.payload) {
        state.cart = {
          items: [],
          itemsCount: 0
        };
        state.status = SUCCEEDED;
        state.error = null;
        state.cityId = null;
        state.countryId = null;
        state.provinceId = null;
        state.cityText = null;
        state.canCheckout = false;
        return;
      }

      const cartItems = action.payload.items;
      let canCheckout = true;

      for (let item of cartItems) {
        if (!item.shippingAvailable) {
          canCheckout = false;
          break;
        }

        if (!item.exist) {
          canCheckout = false;
          break;
        }
      }

      state.status = SUCCEEDED;
      state.cart = action.payload;
      state.cityId = action.payload.cityId;
      state.countryId = action.payload.countryId;
      state.provinceId = action.payload.provinceId;
      state.cityText = action.payload.cityTitle;
      state.canCheckout = canCheckout;
      state.error = null;
    },
    [fetchCart.rejected]: (state, action) => {
      state.status = ERROR;
      state.error = action.payload.message;
      state.coupon = null;
    },
    [fetchWishList.pending]: state => {
      state.wishListStatus = LOADING;
    },
    [fetchWishList.fulfilled]: (state, action) => {
      state.wishListStatus = SUCCEEDED;
      state.wishList = action.payload;
    },
    [fetchWishList.rejected]: state => {
      state.wishListStatus = ERROR;
    }
  }
});
const {
  cityChanged,
  addCoupon,
  addCartCount,
  addWishCount
} = cartSlice.actions;
/* harmony default export */ __webpack_exports__["g"] = (cartSlice.reducer); //// cart deliverty api

const fetchCountry = async () => {
  const result = await Object(_lib_api_client_clientCommon__WEBPACK_IMPORTED_MODULE_0__[/* client__fetchCountries */ "b"])();
  return result.result;
};
const fetchProvinces = async countryId => {
  const result = await Object(_lib_api_client_clientCommon__WEBPACK_IMPORTED_MODULE_0__[/* client__fetchProvince */ "c"])(countryId);
  return result.result;
};
const fetchCities = async provinceId => {
  const result = await Object(_lib_api_client_clientCommon__WEBPACK_IMPORTED_MODULE_0__[/* client__fetchCities */ "a"])(provinceId);
  return result.result;
};

/***/ }),

/***/ "QvjS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOADING; });
/* unused harmony export IDLE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SUCCEEDED; });
/* unused harmony export ERROR */
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return selectCommnetStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return selectSpecifiStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fetchComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return fetchSpecifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return fetchCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fetchCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return fetchProvinces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getPostMethod; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api_client_clientCommon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("hK2O");
/* harmony import */ var _lib_api_client_clientGoodDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gVAJ");



const LOADING = "loading";
const IDLE = "idle";
const SUCCEEDED = "succeeded";
const ERROR = "error";
const initialState = {
  status: IDLE,
  error: null,
  comment: {
    status: IDLE,
    error: null
  },
  specifi: {
    status: IDLE,
    error: null
  }
}; //// selectors

const selectCommnetStatus = state => state.goodDetail.comment.status;
const selectSpecifiStatus = state => state.goodDetail.specifi.status; //// thunk actions

const fetchComment = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])("goodDetail/fetchComment", async params => {
  const result = await Object(_lib_api_client_clientGoodDetail__WEBPACK_IMPORTED_MODULE_2__[/* client_fetchComment */ "c"])(params.pageSize, params.pageNumber, params.id);
  return result;
});
const fetchSpecifi = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])("goodDetail/fetchSpecifi", async goodId => {
  const result = await Object(_lib_api_client_clientGoodDetail__WEBPACK_IMPORTED_MODULE_2__[/* client_fetchSpecefi */ "d"])(goodId);
  return result;
}); /// goodDetailSlice slice

const goodDetailSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "goodDetail",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchComment.pending]: state => {
      state.comment.status = LOADING;
    },
    [fetchComment.fulfilled]: state => {
      state.comment.status = SUCCEEDED;
    },
    [fetchComment.rejected]: (state, action) => {
      state.comment.status = ERROR;
      state.comment.error = action.payload;
    },
    /// specification thunk
    [fetchSpecifi.pending]: state => {
      state.specifi.status = LOADING;
    },
    [fetchSpecifi.fulfilled]: state => {
      state.specifi.status = SUCCEEDED;
    },
    [fetchSpecifi.rejected]: (state, action) => {
      state.specifi.status = ERROR;
      state.specifi.error = action.payload;
    }
  }
}); //// goodDetial aside api

const fetchCountry = async () => {
  const result = await Object(_lib_api_client_clientCommon__WEBPACK_IMPORTED_MODULE_1__[/* client__fetchCountries */ "b"])();
  return result.result;
};
const fetchCities = async provinceId => {
  const result = await Object(_lib_api_client_clientCommon__WEBPACK_IMPORTED_MODULE_1__[/* client__fetchCities */ "a"])(provinceId);
  return result.result;
};
const fetchProvinces = async countryId => {
  const result = await Object(_lib_api_client_clientCommon__WEBPACK_IMPORTED_MODULE_1__[/* client__fetchProvince */ "c"])(countryId);
  return result.result;
};
const getPostMethod = async ({
  shopId,
  countryId,
  cityId,
  provinceId
}) => {
  const result = await Object(_lib_api_client_clientGoodDetail__WEBPACK_IMPORTED_MODULE_2__[/* client__getPostMethod */ "a"])(shopId, countryId, cityId, provinceId);
  return result.result;
};
/* harmony default export */ __webpack_exports__["c"] = (goodDetailSlice.reducer);

/***/ }),

/***/ "R+uO":
/***/ (function(module, exports) {

module.exports = require("validator/lib/isEmail");

/***/ }),

/***/ "SeNk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ LOADING; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* binding */ selectFilters; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* binding */ selectGoods; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* binding */ selectProvider; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* binding */ selectSpecs; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* binding */ selectBrands; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* binding */ selectShop; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* binding */ selectChangeUrl; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* binding */ selectParentCategory; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* binding */ selectChildCategory; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* binding */ selectProviderName; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* binding */ selectProviderStatus; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* binding */ serverProviderUpdate; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ changeUrl; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ orderByTypeAddedAction; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* binding */ pageSizeAddedAction; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* binding */ priceAddedAction; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ goodsCreatedDayAddedAction; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ goodsOptionsAddedAction; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ BrandAddedAction; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ brandsRemovedAction; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* binding */ pageChangedAction; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ mobileFilterUpdateAction; });

// UNUSED EXPORTS: IDLE, SUCCEEDED, ERROR, initialState, selectShopSlider, fetchProvider, orderByTypeAdded, pageSizeAdded, priceAdded, goodsCreatedDayAdded, goodsOptionsAdded, brandAdded, mobileFilterUpdate, pageChanged

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__("+wlD");

// EXTERNAL MODULE: ./lib/api/axios.js
var api_axios = __webpack_require__("BfmP");

// CONCATENATED MODULE: ./lib/api/client/clientProvider.js

const client_fetchProvider = async (filters, providerName) => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.post(`/Home/ShopGoods/${providerName}`, filters);
  return result.data;
};
// EXTERNAL MODULE: ./lib/querys.js
var querys = __webpack_require__("/CuA");

// CONCATENATED MODULE: ./components/app/pages/Provider/providerSlice.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const LOADING = "loading";
const IDLE = "idle";
const SUCCEEDED = "succeeded";
const ERROR = "error";
const initialState = {
  status: IDLE,
  error: null,
  provider: {
    goods: {
      count: 0,
      data: []
    }
  },
  providerName: "",
  changeUrl: false,
  filters: querys["g" /* providerPageFiltersDefaults */]
}; //// selectors

const selectFilters = state => state.provider.filters;
const selectGoods = state => state.provider.provider.goods || {};
const selectProvider = state => state.provider.provider; // export const selectSearch = (state) => state.provider.provider;

const selectSpecs = state => state.provider.provider.specs;
const selectBrands = state => state.provider.provider.brands;
const selectShop = state => state.provider.provider.shop;
const selectShopSlider = state => state.provider.provider.shop.shopSlider;
const selectChangeUrl = state => state.provider.changeUrl;
const selectParentCategory = state => state.provider.provider.parentCategory;
const selectChildCategory = state => state.provider.provider.childCategory;
const selectProviderName = state => state.provider.providerName;
const selectProviderStatus = state => state.provider.status; /// server action creator

const serverProviderUpdate = Object(toolkit_["createAction"])("provider/serverUpdate"); //// thunk actions

const fetchProvider = Object(toolkit_["createAsyncThunk"])("provider/fetchProvider", async (data, {
  dispatch,
  getState
}) => {
  dispatch(changeUrl());
  const result = await client_fetchProvider(data, selectProviderName(getState()));
  return result;
}); /// search slice

const providerSlice = Object(toolkit_["createSlice"])({
  name: "provider",
  initialState,
  reducers: {
    changeUrl(state) {
      state.changeUrl = !state.changeUrl;
    },

    orderByTypeAdded(state, action) {
      state.filters.orderByType = action.payload;
    },

    pageSizeAdded(state, action) {
      state.filters.pageSize = action.payload;
    },

    priceAdded(state, action) {
      state.filters.fromPrice = action.payload.fromPrice;
      state.filters.toPrice = action.payload.toPrice;
    },

    goodsCreatedDayAdded(state, action) {
      state.filters.goodsCreatedDay = action.payload;
    },

    goodsOptionsAdded(state, action) {
      state.filters.optionIds = action.payload;
    },

    brandAdded(state, action) {
      state.filters.brandId = action.payload;
    },

    pageChanged(state, action) {
      state.filters.pageNumber = action.payload;
    },

    mobileFilterUpdate(state, action) {
      const brandsId = action.payload.brandsId;
      const specsId = action.payload.specsId;
      const arrival = action.payload.arrival;
      const priceFrom = action.payload.price.min || state.filters.fromPrice;
      const priceTo = action.payload.price.max || state.filters.toPrice;
      state.filters.brandId = brandsId;
      state.filters.optionIds = specsId;
      state.filters.goodsCreatedDay = parseInt(arrival);
      state.filters.fromPrice = parseInt(priceFrom);
      state.filters.toPrice = parseInt(priceTo);
    }

  },
  extraReducers: {
    [fetchProvider.pending]: (state, action) => {
      state.status = LOADING;
    },
    [fetchProvider.fulfilled]: (state, action) => {
      var _result$specs, _result$brands;

      state.status = SUCCEEDED;
      const result = action.payload.result; //// generate optimize specs

      const newSpecs = {};
      (_result$specs = result.specs) === null || _result$specs === void 0 ? void 0 : _result$specs.forEach(spec => {
        var _spec$options;

        const newOptions = {};
        (_spec$options = spec.options) === null || _spec$options === void 0 ? void 0 : _spec$options.forEach(option => {
          newOptions[option.optionId] = option;
        });
        newSpecs[spec.specId] = _objectSpread(_objectSpread({}, spec), {}, {
          options: newOptions
        });
      }); //// generate optimized brands

      const newBrands = {};
      (_result$brands = result.brands) === null || _result$brands === void 0 ? void 0 : _result$brands.forEach(brand => {
        newBrands[brand.brandId] = brand;
      });
      result.specs = newSpecs;
      result.brands = newBrands;
      state.provider = result;
    },
    [fetchProvider.rejected]: (state, action) => {
      state.status = ERROR;
    },
    [serverProviderUpdate]: (state, action) => {
      var _result$specs2, _result$brands2;

      const result = action.payload.provider;
      const newSpecs = {};
      (_result$specs2 = result.specs) === null || _result$specs2 === void 0 ? void 0 : _result$specs2.forEach(spec => {
        var _spec$options2;

        const newOptions = {};
        (_spec$options2 = spec.options) === null || _spec$options2 === void 0 ? void 0 : _spec$options2.forEach(option => {
          newOptions[option.optionId] = option;
        });
        newSpecs[spec.specId] = _objectSpread(_objectSpread({}, spec), {}, {
          options: newOptions
        });
      }); //// generate optimized brands

      const newBrands = {};
      (_result$brands2 = result.brands) === null || _result$brands2 === void 0 ? void 0 : _result$brands2.forEach(brand => {
        newBrands[brand.brandId] = brand;
      });
      result.brands = newBrands;
      result.specs = newSpecs;
      state.status = SUCCEEDED;
      state.provider = result;
      state.filters = action.payload.filters;
      state.providerName = action.payload.providerName;
    }
  }
});
const {
  orderByTypeAdded,
  pageSizeAdded,
  priceAdded,
  goodsCreatedDayAdded,
  changeUrl,
  goodsOptionsAdded,
  brandAdded,
  mobileFilterUpdate,
  pageChanged
} = providerSlice.actions;
const orderByTypeAddedAction = orderType => {
  return (dispatch, getState) => {
    dispatch(orderByTypeAdded(orderType));
    dispatch(fetchProvider(selectFilters(getState())));
  };
};
const pageSizeAddedAction = pageSize => {
  return (dispatch, getState) => {
    dispatch(pageSizeAdded(pageSize));
    dispatch(fetchProvider(selectFilters(getState())));
  };
};
const priceAddedAction = (from, to) => {
  return (dispatch, getState) => {
    dispatch(priceAdded({
      fromPrice: from,
      toPrice: to
    }));
    dispatch(fetchProvider(selectFilters(getState())));
  };
};
const goodsCreatedDayAddedAction = goodsCreatedDay => {
  return (dispatch, getState) => {
    if (!goodsCreatedDay) goodsCreatedDay = initialState.filters.goodsCreatedDay;
    dispatch(goodsCreatedDayAdded(parseInt(goodsCreatedDay)));
    dispatch(fetchProvider(selectFilters(getState())));
  };
};
const goodsOptionsAddedAction = options => {
  return (dispatch, getState) => {
    dispatch(goodsOptionsAdded(options));
    dispatch(fetchProvider(selectFilters(getState())));
  };
};
const BrandAddedAction = brands => {
  return (dispatch, getState) => {
    dispatch(brandAdded(brands));
    dispatch(fetchProvider(selectFilters(getState())));
  };
};
const brandsRemovedAction = id => {
  return (dispatch, getState) => {
    const curr_state = getState();
    const newBrands = selectFilters(curr_state).brandId.filter(brandId => {
      return brandId !== id;
    });
    dispatch(brandAdded(newBrands));
    dispatch(fetchProvider(selectFilters(getState())));
  };
};
const pageChangedAction = pageNumber => {
  return (dispatch, getState) => {
    dispatch(pageChanged(pageNumber));
    dispatch(fetchProvider(selectFilters(getState())));
  };
};
const mobileFilterUpdateAction = newFilters => {
  return (dispatch, getState) => {
    dispatch(mobileFilterUpdate(newFilters));
    dispatch(fetchProvider(selectFilters(getState())));
  };
};
/* harmony default export */ var Provider_providerSlice = __webpack_exports__["e"] = (providerSlice.reducer);

/***/ }),

/***/ "W0sL":
/***/ (function(module, exports) {

module.exports = require("next-useragent");

/***/ }),

/***/ "YPTI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return server_fetchHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return server_fetchFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return server_categoryBrands; });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BfmP");
/* harmony import */ var _serverlogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Bg3j");


const server_fetchHeader = async isDesktop => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();

  try {
    const result = await axios.get(`/Home/Header?isDesktop=${isDesktop}`);
    _serverlogger__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].http("successful result from /Home/Header");
    return result.data;
  } catch (err) {
    _serverlogger__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].error(JSON.stringify(err));
  }
};
const server_fetchFooter = async () => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();

  try {
    const result = await axios.get(`/Home/Footer`);
    _serverlogger__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].http("successful result from /Home/Footer");
    return result.data;
  } catch (err) {
    _serverlogger__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].error(JSON.stringify(err));
  }
};
const server_categoryBrands = async ({
  pageSize,
  pageNumber,
  catId,
  search,
  BrandIds = []
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();

  try {
    const result = await axios.post(`/Form/BrandForWebsiteWithFillter`, {
      PageSize: pageSize,
      PageNumber: pageNumber,
      Id: parseInt(catId),
      Filter: search,
      BrandIds
    });
    _serverlogger__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].http("successful result from Form/BrandForWebsiteWithFillter");
    return result.data;
  } catch (err) {
    _serverlogger__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].error(JSON.stringify(err));
  }
};

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "ZTWx":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "aNEW":
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dIt4":
/***/ (function(module, exports) {

module.exports = require("firebase/messaging");

/***/ }),

/***/ "gVAJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return client_fetchComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return client_fetchSpecefi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return client__getPostMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return client__getProviderInfo; });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BfmP");

const client_fetchComment = async (pageSize, pageNumber, id) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Home/CustomerComment`, {
    params: {
      PageSize: pageSize,
      PageNumber: pageNumber,
      Id: id
    }
  });
  return result.data;
};
const client_fetchSpecefi = async goodsId => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Home/Specifications/${goodsId}`);
  return result.data;
};
const client__getPostMethod = async (shopId, countryId, cityId, provinceId) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Home/PostMethod/${shopId}/${countryId}/${cityId}/${provinceId}`);
  return result.data;
};
const client__getProviderInfo = async (goodsId, providerId) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.post(`/UserActivity/CallRequestGoods/${goodsId}/${providerId}`);
  return result.data;
};

/***/ }),

/***/ "h/Og":
/***/ (function(module, exports) {

module.exports = require("validator/lib/isPostalCode");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hK2O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return client__fetchCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return client__fetchCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return client__fetchProvince; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return client_viewGood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return client_verifyAddressPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return client_changeMobileNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return client_setDefaultAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return client_categoryBrands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return client_updateUserNotificationKey; });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BfmP");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const client__fetchCountries = async () => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Form/ActiveCountry`);
  return result.data;
};
const client__fetchCities = async provinceId => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Form/ActiveCity/${provinceId}`);
  return result.data;
};
const client__fetchProvince = async countryId => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Form/ActiveProvince/${countryId}`);
  return result.data;
};
const client_viewGood = async goodId => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.post(`/UserActivity/ViewGoods/${goodId}`);
  return result.data;
};
const client_verifyAddressPhone = async ({
  addressId,
  code,
  requestId
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Profile/VerifyMobileNumberAddress`, {
    params: {
      addressId: addressId,
      code,
      requestId
    }
  });
  return result.data;
};
const client_changeMobileNumber = async ({
  addressId,
  mobileNumber
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Profile/ChangeMobileNumberAddress`, {
    params: {
      addressId: addressId,
      mobileNumber
    }
  });
  return result.data;
};
const client_setDefaultAddress = async ({
  addressId
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Profile/SetDefualtAddress`, {
    params: {
      addressId: addressId
    }
  });
  return result.data;
};
const client_categoryBrands = async ({
  pageSize,
  pageNumber,
  catId,
  search,
  BrandIds = []
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.post(`/Form/BrandForWebsiteWithFillter`, {
    PageSize: pageSize,
    PageNumber: pageNumber,
    Id: parseInt(catId),
    Filter: search,
    BrandIds
  });
  return result.data;
};
const client_updateUserNotificationKey = async (notificationKey, type = 1) => {
  // for web type is 1
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const model = {
    notificationKey: notificationKey,
    type: type
  };
  const result = await axios.put(`/Auth/UpdateUserNotificationKey`, model);
  return result.data;
};

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "n8U9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ LOADING; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* binding */ selectFilters; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* binding */ selectGoods; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* binding */ selectSearch; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* binding */ selectSpecs; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* binding */ selectSelectedBrands; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* binding */ serverSearchUpdate; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ fetchSearch; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ changeUrl; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* binding */ orderByTypeAddedAction; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* binding */ pageSizeAddedAction; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* binding */ priceAddedAction; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ goodsCreatedDayAddedAction; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ goodsOptionsAddedAction; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ brandsChangedAction; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* binding */ pageChangedAction; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* binding */ mobileFilterUpdateAction; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ categoryClickAction; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ justExistClickAction; });

// UNUSED EXPORTS: IDLE, SUCCEEDED, ERROR, initialState, selectBrands, orderByTypeAdded, pageSizeAdded, priceAdded, goodsCreatedDayAdded, goodsOptionsAdded, brandsChanged, pageChanged, mobileFilterUpdate, categoryClick, changeJustExist, brandsRemovedAction

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__("+wlD");

// EXTERNAL MODULE: ./lib/api/axios.js
var api_axios = __webpack_require__("BfmP");

// CONCATENATED MODULE: ./lib/api/client/clientSearch.js

const client_fetchSearch = async json => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.post(`/Home/FilterGoods`, json);
  return result.data;
};
// EXTERNAL MODULE: ./lib/querys.js
var querys = __webpack_require__("/CuA");

// CONCATENATED MODULE: ./components/app/pages/Search/searchSlice.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const LOADING = "loading";
const IDLE = "idle";
const SUCCEEDED = "succeeded";
const ERROR = "error";
const initialState = {
  status: IDLE,
  error: null,
  search: {
    goods: {
      count: 0,
      data: []
    }
  },
  changeUrl: false,
  filters: querys["h" /* searchPageFiltersDefaults */],
  brands: {
    items: [],
    selected: []
  }
}; //// selectors

const selectFilters = state => state.search.filters;
const selectGoods = state => state.search.search.goods;
const selectSearch = state => state.search.search;
const selectSpecs = state => state.search.search.specs;
const selectBrands = state => state.search.brands.items;
const selectSelectedBrands = state => state.search.brands.selected; /// server action creator

const serverSearchUpdate = Object(toolkit_["createAction"])("search/serverUpdate"); //// thunk actions

const fetchSearch = Object(toolkit_["createAsyncThunk"])("search/fetchSearch", async (data, {
  dispatch
}) => {
  dispatch(changeUrl());
  const result = await client_fetchSearch(data);
  return result;
}); /// search slice

const searchSlice = Object(toolkit_["createSlice"])({
  name: "search",
  initialState,
  reducers: {
    changeUrl(state) {
      state.changeUrl = !state.changeUrl;
    },

    orderByTypeAdded(state, action) {
      state.filters.orderByType = action.payload;
    },

    pageSizeAdded(state, action) {
      state.filters.pageSize = action.payload;
    },

    priceAdded(state, action) {
      state.filters.fromPrice = action.payload.fromPrice;
      state.filters.toPrice = action.payload.toPrice;
    },

    goodsCreatedDayAdded(state, action) {
      state.filters.goodsCreatedDay = action.payload;
    },

    goodsOptionsAdded(state, action) {
      state.filters.optionIds = action.payload;
    },

    brandsChanged(state, action) {
      const id = parseInt(action.payload.brand.id);

      if (action.payload.checked) {
        state.filters.brandId.push(id);
        state.brands.selected.push(action.payload.brand);
      } else {
        // if is remove
        const newSelected = state.brands.selected.filter(brand => {
          return brand.id != id;
        });
        const index = state.filters.brandId.indexOf(id);

        if (index > -1) {
          state.filters.brandId.splice(index, 1);
        }

        state.brands.selected = newSelected;
      }
    },

    pageChanged(state, action) {
      state.filters.pageNumber = action.payload;
    },

    mobileFilterUpdate(state, action) {
      const specsId = action.payload.specsId;
      const arrival = action.payload.arrival;
      const priceFrom = action.payload.price.min || state.filters.fromPrice;
      const priceTo = action.payload.price.max || state.filters.toPrice;
      state.filters.brandId = action.payload.brands.ids;
      state.brands.selected = action.payload.brands.selected;
      state.filters.optionIds = specsId;
      state.filters.goodsCreatedDay = parseInt(arrival);
      state.filters.fromPrice = parseInt(priceFrom);
      state.filters.toPrice = parseInt(priceTo);
      state.filters.justExist = action.payload.justExist;
    },

    categoryClick(state, action) {
      state.filters.id = action.payload;
      state.filters.type = querys["b" /* SEARCH_TYPE_CATEGORY */];
    },

    changeJustExist(state, action) {
      state.filters.justExist = action.payload;
    }

  },
  extraReducers: {
    [fetchSearch.pending]: (state, action) => {
      state.status = LOADING;
    },
    [fetchSearch.fulfilled]: (state, action) => {
      var _result$specs, _result$brands;

      state.status = SUCCEEDED;
      const result = action.payload.result; //// generate optimize specs

      const newSpecs = {};
      (_result$specs = result.specs) === null || _result$specs === void 0 ? void 0 : _result$specs.forEach(spec => {
        var _spec$options;

        const newOptions = {};
        (_spec$options = spec.options) === null || _spec$options === void 0 ? void 0 : _spec$options.forEach(option => {
          newOptions[option.optionId] = option;
        });
        newSpecs[spec.specId] = _objectSpread(_objectSpread({}, spec), {}, {
          options: newOptions
        });
      }); //// generate optimized brands

      const newBrands = {};
      (_result$brands = result.brands) === null || _result$brands === void 0 ? void 0 : _result$brands.forEach(brand => {
        newBrands[brand.brandId] = brand;
      });
      result.specs = newSpecs;
      result.brands = newBrands;
      state.search = result;
    },
    [fetchSearch.rejected]: (state, action) => {
      state.status = ERROR;
    },
    [serverSearchUpdate]: (state, action) => {
      var _result$specs2, _result$brands2, _action$payload$brand;

      const result = action.payload.search;
      const newSpecs = {};
      (_result$specs2 = result.specs) === null || _result$specs2 === void 0 ? void 0 : _result$specs2.forEach(spec => {
        var _spec$options2;

        const newOptions = {};
        (_spec$options2 = spec.options) === null || _spec$options2 === void 0 ? void 0 : _spec$options2.forEach(option => {
          newOptions[option.optionId] = option;
        });
        newSpecs[spec.specId] = _objectSpread(_objectSpread({}, spec), {}, {
          options: newOptions
        });
      }); //// generate optimized brands

      const newBrands = {};
      (_result$brands2 = result.brands) === null || _result$brands2 === void 0 ? void 0 : _result$brands2.forEach(brand => {
        newBrands[brand.brandId] = brand;
      }); // generate selected brands

      let selectedBrands = [];
      (_action$payload$brand = action.payload.brands) === null || _action$payload$brand === void 0 ? void 0 : _action$payload$brand.forEach(brand => {
        selectedBrands.push({
          value: brand.brandTitle,
          id: brand.brandId
        });
      });
      result.brands = newBrands;
      result.specs = newSpecs;
      state.status = SUCCEEDED;
      state.search = result;
      state.filters = action.payload.filters;
      state.brands.selected = selectedBrands;
    }
  }
});
const {
  orderByTypeAdded,
  pageSizeAdded,
  priceAdded,
  goodsCreatedDayAdded,
  changeUrl,
  goodsOptionsAdded,
  brandsChanged,
  pageChanged,
  mobileFilterUpdate,
  categoryClick,
  changeJustExist
} = searchSlice.actions;
const orderByTypeAddedAction = orderType => {
  return (dispatch, getState) => {
    dispatch(orderByTypeAdded(orderType));
    dispatch(fetchSearch(selectFilters(getState())));
  };
};
const pageSizeAddedAction = pageSize => {
  return (dispatch, getState) => {
    dispatch(pageSizeAdded(pageSize));
    dispatch(fetchSearch(selectFilters(getState())));
  };
};
const priceAddedAction = (from, to) => {
  return (dispatch, getState) => {
    dispatch(priceAdded({
      fromPrice: from,
      toPrice: to
    }));
    dispatch(fetchSearch(selectFilters(getState())));
  };
};
const goodsCreatedDayAddedAction = goodsCreatedDay => {
  return (dispatch, getState) => {
    if (!goodsCreatedDay) goodsCreatedDay = initialState.filters.goodsCreatedDay;
    dispatch(goodsCreatedDayAdded(parseInt(goodsCreatedDay)));
    dispatch(fetchSearch(selectFilters(getState())));
  };
};
const goodsOptionsAddedAction = options => {
  return (dispatch, getState) => {
    dispatch(goodsOptionsAdded(options));
    dispatch(fetchSearch(selectFilters(getState())));
  };
};
const brandsChangedAction = (brand, checked) => {
  return (dispatch, getState) => {
    dispatch(brandsChanged({
      brand,
      checked
    }));
    dispatch(fetchSearch(selectFilters(getState())));
  };
};
const brandsRemovedAction = id => {
  return (dispatch, getState) => {
    const curr_state = getState();
    const newBrands = selectFilters(curr_state).brandId.filter(brandId => {
      return brandId !== id;
    });
    dispatch(brandAdded(newBrands));
    dispatch(fetchSearch(selectFilters(getState())));
  };
};
const pageChangedAction = pageNumber => {
  return (dispatch, getState) => {
    dispatch(pageChanged(pageNumber));
    dispatch(fetchSearch(selectFilters(getState())));
  };
};
const mobileFilterUpdateAction = newFilters => {
  return (dispatch, getState) => {
    dispatch(mobileFilterUpdate(newFilters));
    dispatch(fetchSearch(selectFilters(getState())));
  };
};
const categoryClickAction = catId => {
  return (dispatch, getState) => {
    dispatch(categoryClick(catId)); // dispatch(fetchSearch(selectFilters(getState())));
  };
};
const justExistClickAction = exist => {
  return (dispatch, getState) => {
    dispatch(changeJustExist(exist));
    dispatch(fetchSearch(selectFilters(getState())));
  };
};
/* harmony default export */ var Search_searchSlice = __webpack_exports__["e"] = (searchSlice.reducer);

/***/ }),

/***/ "o2tl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_CURRENCY */
/* unused harmony export ADD_LANG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGIN_CUSTOMER_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SUCCE_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ERROR_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOADING; });
/* unused harmony export IDLE */
/* unused harmony export SUCCEEDED */
/* unused harmony export ERROR */
/* unused harmony export LOGOUT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PREVLINK_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return selectLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return selectCurr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return selectLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return selectPrevLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return appConfigReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return updateCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return updateLang; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ADD_CURRENCY = "ADD_CURRENCY";
const ADD_LANG = "ADD_LANG";
const LOGIN_CUSTOMER_LOADING = "LOGIN_CUSTOMER_LOADING";
const SUCCE_LOGIN = "SUCCE_LOGIN";
const ERROR_LOGIN = "ERROR_LOGIN";
const LOADING = "loading";
const IDLE = "idle";
const SUCCEEDED = "succeeded";
const ERROR = "error";
const LOGOUT = "logout";
const PREVLINK_CHANGE = "PEREVLINK_CHANGE";
const initalState = {
  currency: {},
  lang: {},
  login: {
    status: IDLE,
    isLogin: false,
    token: null,
    error: null,
    prevLink: null
  },
  register: {
    status: IDLE
  }
};
const selectLang = state => state.appConfig.lang.code;
const selectCurr = state => state.appConfig.currency.code;
const selectLogin = state => state.appConfig.login;
const selectPrevLink = state => state.appConfig.login.prevLink;
const appConfigReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_CURRENCY:
      return _objectSpread(_objectSpread({}, state), {}, {
        currency: _objectSpread(_objectSpread({}, state.currency), {}, {
          name: action.payload.currentCurrencyName,
          code: action.payload.currentCurrencyCode
        })
      });

    case ADD_LANG:
      return _objectSpread(_objectSpread({}, state), {}, {
        lang: _objectSpread(_objectSpread({}, state.lang), {}, {
          name: action.payload.languageName,
          code: action.payload.lang
        })
      });

    case LOGIN_CUSTOMER_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        login: _objectSpread(_objectSpread({}, state.login), {}, {
          status: LOADING
        })
      });

    case SUCCE_LOGIN:
      return _objectSpread(_objectSpread({}, state), {}, {
        login: _objectSpread(_objectSpread({}, state.login), {}, {
          status: SUCCEEDED,
          isLogin: true,
          token: action.payload.token
        })
      });

    case ERROR_LOGIN:
      return _objectSpread(_objectSpread({}, state), {}, {
        login: _objectSpread(_objectSpread({}, state.login), {}, {
          status: ERROR,
          isLogin: false,
          token: null,
          error: action.payload.error
        })
      });

    case LOGOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        login: _objectSpread(_objectSpread({}, state.login), {}, {
          status: IDLE,
          isLogin: false,
          token: null
        })
      });

    case PREVLINK_CHANGE:
      return _objectSpread(_objectSpread({}, state), {}, {
        login: _objectSpread(_objectSpread({}, state.login), {}, {
          prevLink: action.payload.link
        })
      });

    default:
      return state;
  }
};
const updateCurrency = code => {
  let name;

  switch (code) {
    case "usd":
      name = "USD";
      break;

    case "bhd":
      name = "BHD";
      break;

    case "tmn":
      name = "TMN";
      break;

    default:
      break;
  }

  return {
    type: ADD_CURRENCY,
    payload: {
      currentCurrencyName: name,
      currentCurrencyCode: code
    }
  };
};
const updateLang = code => {
  let name;

  switch (code) {
    case "en":
      name = "English";
      break;

    case "ar":
      name = "Arabic";
      break;

    case "fa":
      name = "Persion";
      break;

    default:
      break;
  }

  return {
    type: ADD_LANG,
    payload: {
      languageName: name,
      lang: code
    }
  };
};

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "qC9r":
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "tepj":
/***/ (function(module, exports) {

module.exports = require("react-localize-redux");

/***/ }),

/***/ "txVm":
/***/ (function(module, exports) {

module.exports = require("react-star-rating-component");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "wYP+":
/***/ (function(module) {

module.exports = JSON.parse("{\"@categoryTitle\":[\"ajyal.bh | category\",\"ajyal.bh | الفئة\",\"ajyal.bh | دسته بندی\"],\"@indexTitle\":[\"ajyal.bh - Online Shopping in Bahrain\",\"التسوق عبر الإنترنت في البحرين\",\"فروشگاه آنلاین اجیال\"],\"lang\":[\"English\",\"العربیة\",\"فارسی\"],\"usd\":[\"USD\",\"$\",\"تومان\"],\"bhd\":[\"BHD\",\"د.ب\",\"تومان\"],\"tmn\":[\"TMN\",\"تومان\",\"تومان\"],\"searchPlaceholder\":[\"What are you looking for?\",\"ما الذي تبحث عنه؟\",\"در جستجوی چه هستید؟\"],\"seemore\":[\"see more\",\"اظهار الكل\",\"بیشتر\"],\"all\":[\"All\",\"جميع\",\"همه\"],\"search\":[\"search\",\"بحث\",\"جستجو\"],\"singin\":[\"Sign in or Sign up\",\"تسجيل الدخول أو الاشتراك\",\"ورود / ایجاد حساب کاربری\"],\"account\":[\"Account\",\"الحساب\",\"حساب کاربری\"],\"my-account\":[\"My Account\",\"حسابي\",\"حساب کاربری من\"],\"signin2\":[\"Sign in\",\"تسجيل الدخول\",\"ورود\"],\"signup\":[\"Sign up\",\"الاشتراك\",\"ثبت نام\"],\"wishlist\":[\"Wishlist\",\"المفصلة\",\"علاقمندی ها\"],\"cart\":[\"cart\",\"عربة التسوق\",\"سبد خرید\"],\"mobileMenuDesc\":[\"We have everything you need\",\"لدينا كل ما تحتاجه\",\"هرچیزی که شما نیاز دارید ما داریم\"],\"language\":[\"Language\",\"اللغة\",\"زبان\"],\"currency\":[\"currency\",\"العملة\",\"واحد پول\"],\"category\":[\"All Categories\",\"كل التصنيفات\",\"تمام دسته بندی ها\"],\"homeItem\":[\"Home\",\"الصفحة الرئيسية\",\"خانه\"],\"dealsItem\":[\"Deals\",\"العروض\",\"معاملات\"],\"orderTrackingItem\":[\"Order Tracking\",\"تتبع الطلب\",\"پیگیری سفارش\"],\"helpCenterItem\":[\"Help Center\",\"مركز المساعدة\",\"مرکز راهنمایی\"],\"sellWithUsItem\":[\"Sell with us\",\"البيع معنا\",\"با ما بفروشید\"],\"back-to-main-menu\":[\"Back to main menu\",\"العودة إلى القائمة الرئيسية\",\"بازگشت به منوی اصلی\"],\"home\":[\"Home\",\"الصفحة الرئيسية\",\"خانه\"],\"brands\":[\"Brands\",\"الماركات\",\"برند ها\"],\"connect-provider\":[\"Connect provider\",\"الاتصال بالبائع\",\"ارتباط با تامین کننده\"],\"country\":[\"Country\",\"بلد\",\"کشور\"],\"city\":[\"City\",\"مدينة\",\"شهر\"],\"province\":[\"Province\",\"المحافظة\",\"استان\"],\"common\":{\"unavailable\":[\"Unavailable\",\"غير متوفر\",\"ناموجود\"],\"save\":[\"Save\",\"حفظ\",\"ذخیره\"],\"name\":[\"Name\",\"الاسم\",\"نام\"],\"phone\":[\"Phone\",\"رقم الهاتف\",\"شماره موبایل\"],\"delete-address\":[\"Delete address\",\"حذف العنوان\",\"حذف آدرس\"],\"delete\":[\"Delete\",\"حذف\",\"حذف\"],\"edit\":[\"Edit\",\"تعدیل\",\"ویرایش\"],\"primary-address\":[\"primary address\",\"العنوان الرئيسي\",\"آدرس منتخب\"],\"recommended\":[\"Customer Also Viewed\",\"قد يعجبك أيضاً\",\"پیشنهاد برای شما\"],\"show-p-info\":[\"go to detail\",\"انتقل إلى التفاصيل\",\"به جزئیات بروید\"],\"continue\":[\"Continue\",\"متابعة\",\"ادامه\"],\"not-verified\":[\"not verified\",\"لم يتم التحقق\",\"تایید نشد\"],\"cancel\":[\"Cancel\",\"إلغاء\",\"لغو\"],\"place-order\":[\"Place Order\",\"تاکید الطلبیة\",\"محل سفارش\"],\"item\":[\"item\",\"منتج\",\"گزینه\"],\"items\":[\"items\",\"منتجات\",\"گزینه ها\"],\"back\":[\"Back\",\"عودة\",\"بازگشت\"],\"order\":[\"Order\",\"الطلبیه\",\"سفارش\"],\"continue-shopping\":[\"Continue Shopping\",\"متابعة التسوق\",\"ادامه خرید\"],\"addressform\":{\"verify\":[\"Please verify your mobile number to continue\",\"يرجى التحقق من رقم هاتفك المحمول للمتابعة\",\"شماره موبایل خود را برای ادامه تایید کنید\"],\"verify-des\":[\"To proceed to checkout, use the OTP & verify your mobile number. We’ve sent the OTP to\",\"لمتابعة إتمام الشراء، استخدم كود OTP وقم بتأكيد رقم جوّالك. لقد قمنا بإرسال كود OTP إلى\",\"کد تایید به شماره موبایل شما ارسال شد، برای تکمیل ثبت نام کد تایید را وارد کنید\"],\"changephone\":[\"Change Phone Number\",\"تغيير الرقم\",\"شماره موبایل خود را تغییر دهید\"],\"changephone-btn\":[\"Submit & verify phone\",\"تحقق من رقم الهاتف\",\"تایید شماره موبایل\"],\"skip\":[\"Skip\",\"رد شدن\",\"تخطى\"],\"dontreceive\":[\"Didn't receive OTP?\",\"لم يصلك رمز OTP?\",\"کد تایید دریافت نشده است؟\"],\"resendnow\":[\"Resend now\",\"إعادة إرسال الآن\",\"ارسال مجدد\"],\"entermobile\":[\"Please enter your new mobile number and we’ll send you a new OTP.\",\"الرجاء إدخال رقم جوّالك وسنقوم بإرسال كود OTP جديد لك.\",\"لطفاً شماره موبایل جدید خود را وارد کنید تا کد تایید برای شما ارسال شود\"],\"send-new-code\":[\"Send new code\",\"عايز كود جديد\",\"ارسال کد جدید\"],\"mobile-number-placeholder\":[\"Enter mobile number\",\"أدخل رقم الجواّل\",\"شماره موبایل را وارد کنید\"]},\"addressAside\":{\"order-sum\":[\"Order Summary\",\"ملخص الطلبية\",\"خلاصه سفارش\"],\"subtotal\":[\"Subtotal\",\"المجموع الفرعي\",\"جمع کل\"],\"shipping\":[\"Shipping\",\"الشحن\",\"ارسال\"],\"total\":[\"Total\",\"المجموع\",\"جمع بندی\"],\"free\":[\"Free\",\"مجاناً\",\"رایگان\"],\"inciusive\":[\"(Inclusive of VAT)\",\"(شامل ضريبة القيمة المضافة VAT)\",\"شامل ارزش افزوده\"],\"vat\":[\"VAT\",\"VAT\",\"ارزش افزوده\"],\"apply\":[\"Apply\",\"تطبيق\",\"تایید\"],\"coupon\":[\"Coupon Code or Gift Card\",\"رمز القسيمة أو الكوبون\",\"کارت هدیه یا کوپن\"],\"con-shop\":[\"Continue Shopping\",\"متابعة التسوق\",\"ادامه خرید\"],\"checkout\":[\"Checkout Now\",\"إتمام الشراء الآن\",\"اکنون پرداخت کنید\"],\"item\":[\"items\",\"منتج\",\"گزینه ها\"],\"discount\":[\"Discount\",\"خصم\",\"تخفیف\"],\"coupon2\":[\"Coupon\",\"قسيمة\",\"کد تخفیف\"]},\"go-detail\":[\"go to detail\",\"انتقل إلى التفاصيل\",\"به جزئیات بروید\"],\"good-item\":{\"model-num\":[\"Model number:\",\"رقم الموديل:\",\"نمونه عدد\"],\"reviews\":[\"reviews\",\"المراجعات\",\"نظرات\"]},\"good-process\":{\"cancelled\":[\"Cancelled\",\"تم الإلغاء\",\"لغو شده\"],\"delivered\":[\"Delivered\",\"تم التوصيل\",\"ارسال شده\"],\"processing\":[\"Processing\",\"معالجة\",\"در حال پردازش\"]},\"view-all\":[\"VIEW ALL\",\"مشاهدة الكل\",\"مشاهده همه\"]},\"email-verify\":{\"check-email\":[\"check your email inbox\",\"تحقق من صندوق البريد الإلكتروني الخاص بك\",\"لطفا ایمیل خود را بررسی کنید\"],\"enter-code\":[\"Enter the code that was sent to you to Verify the email\",\"أدخل الرمز الذي تم إرساله إليك للتحقق من البريد الإلكتروني\",\"لطفا کد ارسال شده به ایمیل را وارد کنید\"],\"verification-code-placeholder\":[\"Verification Code\",\"شفرة التأكيد\",\"کد تایید\"],\"verify\":[\"Verify\",\"تحقق\",\"تایید\"],\"verify-email\":[\"Verify Your Email\",\"تأكيد بريدك الألكتروني\",\"ایمیل خود را تایید کنید\"]},\"nav\":{\"profile\":[\"Profile\",\"حسابك\",\"پروفایل\"],\"orders\":[\"Orders\",\"الطلبيات\",\"سفارش ها\"],\"address\":[\"Addresses\",\"العناوين\",\"آدرس ها\"],\"payment\":[\"Payment\",\"عمليات الدفع\",\"پرداخت\"],\"credit\":[\"Ajyal Credits\",\"رصید اجیال\",\"حساب اجیال\"],\"return\":[\"Returns\",\"الإرجاع\",\"مرجوعی ها\"],\"preference\":[\"Preference\",\"تفضيلات\",\"اولویت\"],\"claims\":[\"Claims\",\"طلبات الضمان\",\"درخواست ها\"],\"signout\":[\"Sign Out\",\"تسجيل الخروج\",\"خروج از سیستم\"],\"matching-brand\":[\"Matching Brands\",\"الماركات المتطابقة\",\"انتخاب برند\"],\"matching-category\":[\"Matching Categories\",\"الفئات المتطابقة\",\"انتخاب دسته بندی\"]},\"footer\":{\"topBrand\":[\"Top Brands\",\"افضل المارکات\",\"برندهای برتر\"],\"topCategories\":[\"Top Categories\",\"الأكثرة شهرة\",\"دسته بندی های برتر\"],\"viewAll\":[\"View All\",\"عرض الكل\",\"نمایش همه\"],\"footer-msg1\":[\"We’re Always Here To Help\",\"نحن دائماً جاهزون لمساعدتك\",\"ما همیشه برای کمک در کنار شما هستیم\"],\"footer-msg2\":[\"Reach out to us through any of these support channels\",\"تواصل معنا من خلال قنوات الدعم التالية\",\"برای پشتیبانی از طریق  کانال های ارتباطی با ما در ارتباط باشید\"],\"helpCenter\":[\"HELP CENTER\",\"مرکزالمساعدة\",\"مرکز راهنمایی\"],\"emailSupport\":[\"EMAIL SUPPORT\",\"الدعم عبر البريد الإلكتروني\",\"ایمیل پشتیبانی\"],\"phoneSupport\":[\"PHONE SUPPORT\",\"الدعم عبر الهاتف\",\"شماره پشتیبانی\"],\"whatsAppUs\":[\"WhatsApp Us\",\"راسلنا علی\",\"واتس آپ \"],\"ConnectWithUs\":[\"CONNECT WITH US\",\"تواصل معنا\",\"با ما در ارتباط باشید\"],\"ShopOnTheGo\":[\"SHOP ON THE MOBILE\",\"تسوق أينما كنت\",\"خرید در تلفن موبایل شما\"],\"btm-nav\":{\"Careers\":[\"Customer Rights\",\"فرص التوظيف\",\"حقوق مشتریان\"],\"warrantyPolicy\":[\"Warranty Policy\",\"سياسة الضمان\",\"شرایط گارانتی\"],\"sellWithUs\":[\"Sell with us\",\"البيع معنا\",\"با ما بفروشید\"],\"termOfUse\":[\"Terms of Use\",\"شروط الاستخدام\",\"شرایط استفاده\"],\"termsOfSale\":[\"Terms of Sale\",\"شروط البيع\",\"شرایط فروش\"],\"privacyPolicy\":[\"Privacy Policy\",\"سياسة الخصوصية\",\"خط و مشی های امنیتی\"],\"home\":[\"Home\",\"المنزل\",\"خانه\"],\"category\":[\"Categories\",\"الفئات\",\"دسته بندی ها\"],\"profile\":[\"My Account\",\"حسابي\",\"پروفایل کاربری\"],\"cart\":[\"Cart\",\"عربة التسوق\",\"سبد خرید\"],\"deals\":[\"Deals\",\"العروض\",\"معاملات\"]},\"chat\":[\"Chat\",\"دردشه\",\"گفتگو\"],\"copyRight\":[\"© 2021 Ajyal. All Rights Reserved.\",\"أجیال. جميع الحقوق محفوظة © 2021\",\"© 2021 Ajyal. All Rights Reserved.\"]},\"dontlogin\":{\"retu-custo\":[\"Returning Customer\",\"الزبون العائد\",\"حساب کاربری دارید \"],\"dont-acc\":[\"Don't have an account?\",\"ليس لديك حساب؟\",\"حساب کاربری ندارید؟\"]},\"main-nav\":{\"storeList\":[\"Stores List\",\"المتاجر\",\"لیست فروشگاه ها\"]},\"How-are-these-calculated\":[\"How are these calculated?\",\"كيف يتم حساب ذلك؟\",\"این چگونه محاسبه میشود؟\"],\"mobile-profile\":{\"hala\":[\"Hala! Nice to meet you\",\"هاله! سعيد بلقائك\",\"\"],\"hala-des\":[\"The region's favorite online marketplace\",\"السوق المفضل على الإنترنت في المنطقة\",\"\"]},\"Goods\":[\"goods\",\"بضائع\",\"کالاها\"]}");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "x1Y1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return translationsPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeTranslations; });
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7ITC");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const translationsPayload = (translations, lang) => {
  return {
    languages: [{
      name: "English",
      code: "en"
    }, {
      name: "Arabic",
      code: "ar"
    }, {
      name: "Persion",
      code: "fa"
    }],
    translation: translations,
    options: {
      renderToStaticMarkup: react_dom_server__WEBPACK_IMPORTED_MODULE_0__["renderToStaticMarkup"],
      defaultLanguage: lang
    }
  };
};
const mergeTranslations = (t1, t2) => {
  return _objectSpread(_objectSpread({}, t1), t2);
};

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yRgD":
/***/ (function(module, exports) {

module.exports = require("react-js-pagination");

/***/ }),

/***/ "ymlI":
/***/ (function(module) {

module.exports = JSON.parse("{\"@userpanelTitle\":[\"ajyal.bh | user profile\",\"ajyal.bh | ملف تعريفي للمستخدم\",\"ajyal.bh | پروفایل کاربری\"],\"nav\":{\"profile\":[\"Profile\",\"حسابك\",\"پروفایل\"],\"orders\":[\"Orders\",\"الطلبيات\",\"سفارش ها\"],\"address\":[\"Addresses\",\"العناوين\",\"آدرس ها\"],\"payment\":[\"Payment\",\"عمليات الدفع\",\"پرداخت\"],\"credit\":[\"Ajyal Credits\",\"محفظة أجيال\",\"حساب اجیال\"],\"return\":[\"Returns\",\"الإرجاع\",\"بازگشتی ها\"],\"preference\":[\"Preference\",\"تفضيلات\",\"اولویت ها\"],\"claims\":[\"Claims\",\"طلبات الضمان\",\"ضمانت ها\"],\"signout\":[\"Sign Out\",\"تسجيل الخروج\",\"خروج از سیستم\"]},\"profile\":{\"country-name\":[\"Country name\",\"اسم الدولة\",\"نام کشور\"],\"city-name\":[\"City name\",\"اسم المدينة\",\"نام شهر\"],\"birthdate\":[\"Birthday date\",\"تاريخ الولادة\",\"تاریخ تولد\"],\"national-code\":[\"National Code\",\"رمز دولي\",\"کد ملی\"],\"national-code-placeholder\":[\"Enter national code\",\"أدخل رقم الهوية الوطنية\",\"کد ملی خود را وارد کنید\"],\"birthday-date\":[\"Birthday date\",\"تاريخ الميلاد\",\"تاریخ تولد\"],\"send-new-email\":[\"resend email\",\"إعادة إرسال البريد الإلكتروني\",\"ارسال مجدد ایمیل\"],\"fullname\":[\"Full name\",\"اسم العائلة\",\"نام کامل\"],\"fullname-placeholder\":[\"Enter your full name\",\"أدخل اسم العائلة\",\"نام کامل خود را وارد کنید\"],\"password\":[\"Password\",\"كلمة المرور\",\"رمز عبور\"],\"prelang\":[\"Preferred language\",\"اللغة المفضلة\",\"زبان انتخابی\"],\"email1\":[\"Email address\",\"البريد الإلكتروني\",\"آدرس ایمیل\"],\"editprofile\":[\"Edit Profile\",\"تعديل الملف الشخصي\",\"ویرایش پروفایل\"],\"manageprofile\":[\"Manage your profile details\",\"إدارة ملفك الشخصي\",\"مدیریت پروفایل\"],\"email-placeholder\":[\"info@ajyal.bh\",\"info@ajyal.bh\",\"info@ajyal.bh\"],\"cantchange\":[\"You cannot change your email\",\"لا يمكنك تغيير بريدك الإلكتروني\",\"امکان تغییر ایمیل وجود ندارد\"],\"save\":[\"Save\",\"حفظ\",\"ذخیره\"],\"changepass\":[\"Change password\",\"تغيير كلمة المرور\",\"تغییر رمزعبور\"],\"des-changepass\":[\"Enter your current password and new password to change the password\",\"أدخل كلمة المرور الحالية وكلمة السر الجديدة لتغيير كلمة المرور\",\"برای تغییر رمز عبور،رمز عبور فعلی و جدید را وارد کنید\"],\"cur-pass\":[\"Current Password\",\"كلمة المرور الحالية\",\"رمز عبور فعلی\"],\"cur-pass-placeholder\":[\"Enter current password\",\"أدخل كلمة المرور الحالية\",\"رمز عبور فعلی را وارد کنید\"],\"new-pass\":[\"New Password\",\"كلمة المرور  الجديدة\",\"رمز عبور جدید\"],\"new-pass-placeholder\":[\"Enter new password\",\"أدخل كلمة المرور الجديدة\",\"رمز عبور جدبد را وارد کنید\"],\"con-pass\":[\"Confirm password\",\"تأكيد كلمة المرور \",\"تایید رمز عبور\"],\"con-pass-placeholder\":[\"Confirm your password\",\"أدخل كلمة المرور مرة أخرى\",\"رمز عبور خود را تایید کنید\"],\"save-pass\":[\"Save password\",\"حسناً\",\"ذخیره رمز عبور\"],\"cancel\":[\"Cancel\",\"إلغاء\",\"لغو\"],\"firstname\":[\"First name\",\"الاسم الأول\",\"نام\"],\"lastname\":[\"Last name\",\"اسم العائلة\",\"نام خانوادگی\"],\"mobile-number\":[\"Mobile number\",\"رقم الجواّل\",\"شماره موبایل\"]},\"addresses\":{\"addresses\":[\"Addresses\",\"العناوين\",\"آدرس ها\"],\"empty-des\":[\"Where are your saved addresses?\",\"العناوين المحفوظة\",\"آدرس منتخب شما کجاست؟\"],\"empty-des2\":[\"Add an address so we can get cracking on the delivery!\",\"!عنوانك بقى عشان نعرف نوصلك الطلب\",\"برای تحویل کالا یک آدرس اضافه کنید\"],\"addadress\":[\"Add an address\",\"إضافة عنوان جديد\",\"افزودن آدرس\"],\"setmap\":[\"Set from map:\",\"تعيين من الخريطة:\",\"انتخاب از نقشه\"],\"addnewadd\":[\"Add a new addresses\",\"إضافة عنوان جديد\",\"افزودن آدرس جدید\"],\"addi-address\":[\"Additional address details\",\"تفاصيل العنوان الإضافية\",\" افزودن جزییات آدرس اضافه شده\"],\"addi-address-placeholder\":[\"Enter address details\",\"أدخل تفاصيل العنوان الإضافية\",\"جزییات آدرس را وارد کنید\"],\"firstname\":[\"First name\",\"الاسم الأول\",\"نام\"],\"firstname-placeholder\":[\"Enter your first name\",\"أدخل الاسم الأول\",\"نام خود را وارد کنید\"],\"mobile-number\":[\"Mobile number\",\"رقم الجواّل\",\"شماره موبایل\"],\"mobile-number-placeholder\":[\"Enter mobile number\",\"أدخل رقم الجواّل\",\"شماره موبایل را وارد کنید\"],\"add-label\":[\"Address Label (Optional)\",\"تسمية العنوان (اختياري)\",\"برچسب آدرس(اختیاری)\"],\"lastname\":[\"Last name\",\"اسم العائلة\",\"نام خانوادگی\"],\"lastname-placeholder\":[\"Enter your last name\",\"أدخل الاسم العائلة\",\"نام خانوادگی خود را وارد کنید\"],\"save\":[\"Save address\",\"حفظ العنوان\",\"ذخیره آدرس\"],\"verify\":[\"Please verify your mobile number to continue\",\"يرجى تأكيد رقم هاتفك المحمول للمتابعة\",\"لطفاً شماره موبایل خود را برای ادامه ثبت کنید\"],\"verify-des\":[\"To proceed to checkout, use the OTP & verify your mobile number. We’ve sent the OTP to\",\"لمتابعة إتمام الشراء، استخدم كود OTP وقم بتأكيد رقم جوّالك. لقد قمنا بإرسال كود OTP إلى\",\"کد تایید برای شما ارسال شد برای ادامه ثبت نام کد ارسال شده به شماره موبایل خود را وارد کنید\"],\"changephone\":[\"Change Phone Number\",\"تغيير الرقم\",\"تغییر شماره موبایل\"],\"changephone-btn\":[\"Submit & verify phone\",\"إرسال الرمز\",\"ثبت و تایید شماره موبایل\"],\"skip\":[\"Skip\",\"تخطى\",\"رد شدن\"],\"dontreceive\":[\"Didn't receive OTP?\",\"لم يصلك رمز OTP?\",\"کد تایید دریافت نشد؟\"],\"resendnow\":[\"Resend now\",\"إعادة إرسال الآن\",\"ارسال مجدد\"],\"cancel\":[\"Cancel\",\"إلغاء\",\"لغو\"],\"entermobile\":[\"Please enter your new mobile number and we’ll send you a new OTP.\",\"الرجاء إدخال رقم جوّالك وسنقوم بإرسال كود OTP جديد لك.\",\"برای دریافت کد تایید ،شماره موبایل جدید خود را وارد کنید \"],\"send-new-code\":[\"Send new code\",\"عايز كود جديد\",\"ارسال کد جدید\"],\"name\":[\"Name\",\"الاسم\",\"نام\"],\"phone\":[\"Phone\",\"رقم التليفون\",\"شماره تماس\"],\"default\":[\"Set as default\",\"تعيين كافتراضي\",\"انتخاب پیش فرض\"],\"delete\":[\"Delete address\",\"حذف العنوان\",\"حذف آدرس \"],\"edit\":[\"Edit\",\"تعدیل\",\"ویرایش\"],\"notvery\":[\"not verified\",\"لم يتم التحقق\",\"ثبت نشد\"],\"pri-add\":[\"Primary address\",\"العنوان الرئيسي\",\"آدرس منتخب\"],\"confirm-loc\":[\"Confirm Location\",\"تأكيد الموقع\",\"تایید مکان\"],\"search-loc-placeholder\":[\"Search for your location\",\"بحث عن موقعك\",\"جستجوی مکان شما\"],\"set-default-add\":[\"Set as default address\",\"تعيين كعنوان افتراضي\",\"انتخاب به عنوان آدرس منتخب\"],\"postal-code\":[\"Postal code\",\"الرمز البريدي\",\"کد پستی\"],\"empty-address-error\":[\"The address should be selected\",\"ادرس باید انتخاب شود\"],\"postal-code-placeholder\":[\"Enter Postal code\",\"أدخل الرمز البريدي\",\"کد پستی را وارد کنید\"],\"country\":[\"Country\",\"الدولة\",\"کشور\"],\"country-placeholder\":[\"Please select the country\",\"الرجاء تحديد الدولة\",\"کشور را انتخاب کنید\"],\"city\":[\"City\",\"المدينة\",\"شهر\"],\"province\":[\"Province\",\"المحافظة\",\"استان\"],\"city-placeholder\":[\"Please select the city\",\"الرجاء تحديد المدينة\",\"شهر را انتخاب کنید\"],\"province-placeholder\":[\"Please select the province\",\"الرجاء تحديد المحافظة\",\"لطفا استان را انتخاب کنید\"]},\"orders\":{\"orders\":[\"Orders\",\"الطلبيات\",\"سفارش ها\"],\"Show orders from\":[\"Show orders from\",\"عرض الطلبات من\",\"نمایش سفارش ها\"],\"empty-msg1\":[\"You don't have any orders yet\",\"ليس لديك أي طلبات حتى الآن\",\"شما فعلاً هیچ سفارشی ندارید\"],\"empty-msg2\":[\"What are you waiting for? Start shopping!\",\"تحتاج إلى تقديم طلب؟ فقط اضغط على الزر أدناه\",\"منتظر چی هستی؟ خریدتو شروع کن\"],\"con-shopping\":[\"Continue Shopping\",\"متابعة التسوق\",\"ادامه خرید\"],\"placed-on\":[\"Places on\",\"تم الطلب في\",\"در محل\"],\"item\":[\"item\",\"منتج\",\"گزینه\"],\"detail-view\":[\"View Details\",\"عرض التفاصيل\",\"نمایش جزییات\"],\"orders-des1\":[\"See how your orders are managed and check the latest status on your order\",\"تعرف على كيفية إدارة طلبياتك وتحقق من حالة طلبك أولأ بأول\",\"آخرین وضعیت سفارش خود را مشاهده کنید\"],\"inSum\":[\"Invoice Summary\",\"ملخص الفاتورة\",\"خلاصه صورتحساب\"],\"taxInvo\":[\"Tax Invoices\",\"الفواتير الضريبية\",\"مالیات صورتحساب\"],\"model-num\":[\"Model number:\",\"رقم الموديل:\",\"شماره مدل\"],\"sold-by\":[\"Sold by:\",\"البائع:\",\"فروخته شد\"],\"msg1\":[\"This item cannot be exchanged or returned\",\"لا يمكن استبدال أو إرجاع هذا المنتج\",\"این گزینه امکان تغییر یا بازگشت ندارد\"],\"review\":[\"Review\",\"راجع هذا المنتج\",\"نظرات\"],\"download\":[\"Download\",\"Download\",\"Download\"],\"on\":[\"on\",\"علی\",\"بر\"],\"order-sum\":[\"Order Summary\",\"ملخص الطلبية\",\"مجموع صورتحساب\"],\"subtotal\":[\"Subtotal\",\"المجموع الفرعي\",\"جمع کل\"],\"shipping\":[\"Shipping\",\"الشحن\",\"ارسال\"],\"total\":[\"Total\",\"المجموع\",\"جمع\"],\"free\":[\"Free\",\"مجاناً\",\"رایگان\"],\"inciusive\":[\"(Inclusive of VAT)\",\"(شامل ضريبة القيمة المضافة VAT)\",\"شامل ارزش افزوده\"],\"apply\":[\"Apply\",\"تطبيق\",\"تایید\"],\"coupon\":[\"Coupon Code or Gift Card\",\"كوبون أو كود على كارت الهدية\",\"کارت هدیه یا کد تخفیف\"],\"con-shop\":[\"Continue Shopping\",\"متابعة التسوق\",\"ادامه خرید\"],\"checkout\":[\"Checkout Now\",\"إتمام الشراء دلوقتي\",\"اکنون پرداخت کنید\"],\"items\":[\"items\",\"منتج\",\"گزینه ها\"],\"discount\":[\"Discount\",\"خصم\",\"تخفیف\"],\"coupon2\":[\"Coupon\",\"قسيمة\",\"کد تخفیف\"],\"pay-method\":[\"Payment Method\",\"طريقة الدفع او السداد\",\"روش پرداخت\"],\"order-det\":[\"Order details\",\"تفاصيل الطلبية\",\"جزییات سفارش\"],\"rate-this\":[\"Please rate this product\",\"يرجى تقييم هذا المنتج\",\"به این محصول امتیاز دهید\"],\"comment-placeholder\":[\"Type your comment here...\",\"...اكتب تعليقك هنا\",\"نظر خود را در اینجا بنویسید\"],\"pros\":[\"Pros\",\"الايجابيات\",\"نقاط قوت\"],\"cons\":[\"Cons\",\"السلبيات\",\"نقاط ضعف\"],\"pros-placeholder\":[\"Enter product pros\",\"أدخل إيجابيات المنتج\",\"نقاط قوت کالا را وارد کنید\"],\"cons-placeholder\":[\"Enter product cons\",\"أدخل سلبيات المنتج\",\"نقاط ضعف را وارد کنید \"],\"submit-review\":[\"Submit Review\",\"إرسال المراجعة\",\"ثبت نظر\"],\"cancel-item-btn\":[\"Cancel items from this list\",\"الغاء منتجات من هذه الطلبیة\",\"لغو گزینه های لیست\"],\"select-for-cancel\":[\"Select Items for cancellation\",\"حدد المنتجات المراد الغائها\",\"موارد لغو را انتخاب کنید\"],\"card-refund\":[\"Card Refund\",\"ارجاع قیمة المنتجات الی البطاقة\",\"بازیابی سبد خرید\"],\"card-msg1\":[\"Only applies to prepaid amounts and take up to 7-14 business days to reflect on your card. Cash payments and Ajyal credits used to complement a card payment will be refunded to your wallet.\",\"تنطبق فقط على المبالغ المدفوعة مسبقًا وتستغرق ما يصل إلى 7-14 يوم عمل لتصل إلى بطاقتك. سيتم رد المدفوعات النقدية في محفظة أجيال الخاصة بك في الموقع\",\"مبالغ پرداخت شده پس از 7 الی 14 روز کاری به حساب شما واریز میگردد. بازگشت مبلغ سفارش مرجوعی به دو صورت شارژ کیف پول اجیال یا پرداخت نقدی میباشد\"],\"card-msg2\":[\"Why would you like to cancel this item?\",\"لماذا تريد إلغاء هذا المنتج؟\",\"چرا میخواهید این درخواست را لغو کنید؟\"],\"cancel\":[\"Cancel\",\"إلغاء\",\"لغو\"],\"select-reason\":[\"Select a reason\",\"اختر سببا\",\"انتخاب دلیل\"],\"de-re\":[\"Click here to change your default refund method\",\"اضغط هنا لتغییر طریقة ارجاع قیمة المشتریات\",\"برای تغییر روش بازپرداخت اینجا کلیک کنید\"],\"quantity\":[\"Quantity\",\"الكمية\",\"تعداد\"],\"cancel-msg1\":[\"Why would you like to cancel this item?\",\"لماذا ترید الغاء هذا المنتج؟\",\"چرا می خواهید این مورد را لغو کنید؟\"],\"cancel-confirm-btn\":[\"CONFIRM CANCELLATION\",\"تأکید الالغاء\",\"تایید نهایی لغو\"],\"cancel-msg2\":[\"This item was successfully removed from your order\",\"تمت إزالة هذا المنتج من الطلبية بنجاح\",\"این مورد با موفقیت از سبد خرید شما حذف شد\"],\"back-order\":[\"Back to order\",\"رجوع إلى الطلبية\",\"بازگشت به خرید\"]},\"credits\":{\"msg1\":[\"Redeem your Ajyal gift card\",\"استخدام بطاقة الهدية الخاصة بك من أجيال\",\"استفاده از کارت هدیه اجیال\"],\"redeem-placeholder\":[\"Redeem your Ajyal gift card\",\"رقم بطاقة الهدية\",\"استفاده مجدد از کارت هدیه اجیال\"],\"av-balance\":[\"Available Balance\",\"الرصيد المتوفر\",\"موجودی کافی می باشد\"],\"date\":[\"Date\",\"التاريخ\",\"تاریخ\"],\"type\":[\"Type\",\"النوع\",\"نوع\"],\"details\":[\"Details\",\"تفاصيل\",\"جزییات\"],\"amount\":[\"Amount\",\"الكمية\",\"میزان پرداختی\"],\"balance\":[\"Balance\",\"الكمية المتبقية\",\"موجود\"],\"msg2\":[\"You don't have any Ajyal credits yet!\",\"!ليس لديك أي رصيد من أجيال بعد\",\"شما تاکنون از اجیال اعتبار نگرفته اید!\"]},\"returns\":{\"returns\":[\"Returns\",\"الإرجاع\",\"بازگشتی ها\"],\"select-reason-place\":[\"Select a reason\",\"اختر سببا\",\"یک دلیل انتخاب کنید\"],\"return\":[\"return\",\"إرجاع\",\"بازگشتی\"],\"empty-msg1\":[\"We don't see any returns requested\",\".لا يوجد أي منتجات مطلوب إرجاعها\",\" هیج درخواست بازگشتی وجود ندارد\"],\"empty-msg2\":[\"Need to submit a request? Just click on the button below!\",\"!تحتاج إلى تقديم طلب؟ فقط اضغط على الزر أدناه\",\"برای ثبت درخواست خود کلیک کنید\"],\"empty-msg1-deliverd\":[\"We don't see any returns delivered\",\".لا توجد منتجات لتسليمها\",\" هیج درخواست بازگشتی وجود ندارد\"],\"return-request-tab1\":[\"Returns Requested\",\"طلبات الإرجاع المقدمة\",\"درخواست های بازگشتی \"],\"return-delivered-tab2\":[\"Returns Delivered\",\"طلبات الإرجاع المستلمة\",\"بازگشت سفارش ها\"],\"add-btn\":[\"File a new return request\",\"إنشاء طلب إرجاع جديد\",\"فایل جدید درخواست بازگشت \"],\"pickup\":[\"Pickup Address\",\"عنوان الاستلام\",\"انتخاب آدرس\"],\"refund-method\":[\"Refund Method\",\"طریقه الاسترداد\",\"روش بازپرداخت\"],\"reason\":[\"Reason:\",\"السبب:\",\"دلیل\"],\"select-item-for-return\":[\"Select Items for return\",\"حدد المنتح للارجاع\",\"گزینه های بازگشت را انتخاب کنید\"],\"select-item\":[\"Select Item\",\"راجع هذا المنتح\",\"انتخاب گزینه\"],\"return-msg1\":[\"Why would you like to return this item?\",\"للماذا ترغب في إرجاع هذا المنتج؟\",\"چرا می خواهید این مورد را بازگردانید؟\"],\"return-msg2\":[\"\"],\"return-des-placeholder\":[\"Type your description about this item...\",\"...اكتب تعليقك هنا\",\"توضیحات خود را برای این مورد بنویسیذ\"],\"req-type\":[\"Choose your request type\",\"هل السلعة كما وصفها البائع؟\",\"نوع درخواست خود را انتخاب کنید\"],\"refund-to-wallet\":[\"Refund to Wallet\",\"إرجاع قيمة المنتجات إلى المحفظة \",\"بازگرداندن به کیف پول\"],\"other-address\":[\"other Address\",\"عنوان آخر\",\"آدرس های دیگر\"],\"view-all\":[\"View all\",\"عرض الكل\",\"نمایش همه\"],\"less\":[\"less\",\"أقل\",\"حداقل\"],\"submit-req\":[\"Submit Request\",\"تقديم الطلب\",\"ثبت درخواست\"],\"reason-error\":[\"Select a reason is required\",\"تحديد السبب مطلوب\",\"یک دلیل انتخاب کنید\"],\"action-error\":[\"Choose your request type\",\"اختر نوع طلبك\",\"نوع درخواست خود را انتخاب کنید\"]},\"preference\":{\"preference\":[\"Preference\",\"التفضيلات\",\"تنظیمات\"],\"msg1\":[\"Select your default refund method for returns and cancellations\",\"اختر طريقة إسترداد المبالغ عند الإلغاء أو الإرجاع\",\"برای بازگشت محصولات یک روش انتخاب کنید\"],\"wallet\":[\"Wallet refund\",\"إرجاع قيمة المنتجات إلى المحفظة\",\"کیف پول\"],\"wallet-msg\":[\"The amount of returned or canceled purchases will be refunded to your wallet\",\"ستضاف قيمة المنتجات المسترجعة أو الملغاة لمحفظتك\",\"کل مبلغ سفارش لغو شده یا مرجوع شده به کیف پول شما افزوده خواهد شد\"],\"card\":[\"Card refund\",\"إرجاع قيمة المنتجات إلى البطاقة\",\"پرداخت به کارت\"],\"card-msg\":[\"If you paid with cash or used Credits to complement a card payment, the amount will be refunded to your wallet\",\"إذا كنت قد دفعت نقدًا أو استخدمت أرصدة لاستكمال الدفع بالبطاقة، فسيتم رد المبلغ إلى محفظتك\",\"اگر به صورت نقدی یا با استفاده از کیف پول پرداخت انجام داده اید، مبلغ به اعتبار شما افزوده خواهد شد\"]},\"payment\":{\"delete\":[\"Delete\",\"حذف\",\"حذف\"],\"expiry\":[\"Expiry\",\"Expiry\",\"تاریخ انتقضا\"],\"dont-have-payment-card\":[\"You don't have any payment card yet!\",\"You don't have any payment card yet!\",\"شما هنوز هیچ کارت بانکی ندارید\"]},\"usd\":[\"USD\",\"$\",\"تومان\"],\"bhd\":[\"BHD\",\"د.ب\",\"تومان\"],\"mobileProfile\":{\"settings\":[\"SETTINGS\",\"إعدادات\",\"تنظیمات\"],\"currency\":[\"Currency\",\"عملة\",\"واحد پول\"],\"language\":[\"Language\",\"لغة\",\"زبان\"],\"reach-out-us\":[\"REACH OUT TO US\",\"تواصل معنا\",\"به ما برسید\"],\"whatsup-us\":[\"WhatsApp Us\",\"WhatsApp Us\",\"واتساپ\"],\"help\":[\"Help\",\"مساعدة\",\"مستندات\"],\"contact-us\":[\"Contact Us\",\"اتصل بنا\",\"ارتباط با ما\"],\"my-account\":[\"MY ACCOUNT\",\"حسابي\",\"حساب من\"],\"stores\":[\"Stores\",\"المتاجر\",\"تامین کننده ها\"],\"hala2\":[\"Hala\",\"هاله\",\"سلام\"]}}");

/***/ }),

/***/ "yrcK":
/***/ (function(module, exports) {

module.exports = require("validator/lib/isCreditCard");

/***/ }),

/***/ "zo9w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isServer; });
const isServer = () => {
  if (true) return true;
  return false;
};

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });