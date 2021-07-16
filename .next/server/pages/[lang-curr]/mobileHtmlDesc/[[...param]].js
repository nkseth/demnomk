module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R7Bt");


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

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "LEBW":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension/developmentOnly");

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

/***/ "R7Bt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-localize-redux"
var external_react_localize_redux_ = __webpack_require__("tepj");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./appConfigSlice.js
var appConfigSlice = __webpack_require__("o2tl");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./store.js + 1 modules
var store_0 = __webpack_require__("BXF7");

// CONCATENATED MODULE: ./components/app/pages/MobileHtmlDescComp/MobileHtmlDescComp.jsx
var __jsx = external_react_default.a.createElement;

/* harmony default export */ var MobileHtmlDescComp = (props => {
  // const lang = useSelector(selectLang);
  // const curr = useSelector(selectCurr);
  // const [htmlStr, setHtmlStr] = useState(null);
  return __jsx("div", {
    style: {
      padding: '0 10px'
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: props.htmlStr
    }
  }));
});
// EXTERNAL MODULE: ./lib/serverlogger/index.js
var serverlogger = __webpack_require__("Bg3j");

// EXTERNAL MODULE: ./lib/api/axios.js
var api_axios = __webpack_require__("BfmP");

// CONCATENATED MODULE: ./lib/api/client/serverHome.js


const server_fetchHome = async () => {
  const axios = api_axios["a" /* default */].getAxios();

  try {
    const result = await axios.get(`/Home/Home`);
    serverlogger["a" /* default */].http("successful result from /Home/Home");
    return result.data;
  } catch (err) {
    serverlogger["a" /* default */].error('errorrrrrrrrrrr', JSON.stringify(err));
  }
};
const server_fetchGetMobileDescriptionPageData = async model => {
  const axios = api_axios["a" /* default */].getAxios();

  try {
    const result = await axios.get(`/Home/GetMobileDescriptionPageData`, {
      params: model
    });
    serverlogger["a" /* default */].http("successful result from /Home/GoodsDescription/");
    return result.data;
  } catch (err) {
    serverlogger["a" /* default */].error(err);
  }
};
// CONCATENATED MODULE: ./pages/[lang-curr]/mobileHtmlDesc/[[...param]].jsx
var _param_jsx = external_react_default.a.createElement;










class _param_MobileHtmlDesc extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _param_jsx(external_react_default.a.Fragment, null, _param_jsx(external_react_localize_redux_["LocalizeProvider"], null, _param_jsx(external_react_localize_redux_["Translate"], null, ({
      translate: t
    }) => {
      return _param_jsx(head_default.a, null, _param_jsx("title", null, "desc"));
    }), _param_jsx(MobileHtmlDescComp, {
      htmlStr: this.props.data.htmlStr,
      lang: this.props.data.lang,
      curr: this.props.data.curr,
      type: this.props.data.type,
      goodsId: this.props.data.goodsId
    })));
  }

}

const mapStateToProps = state => {
  return {
    langs: state.appConfig.currency.name
  };
};

/* harmony default export */ var _param_ = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps, {
  updateCurrency: appConfigSlice["k" /* updateCurrency */]
})(Object(router_["withRouter"])(_param_MobileHtmlDesc)));
const getServerSideProps = store_0["a" /* wrapper */].getServerSideProps(async ({
  req,
  store,
  query
}) => {
  const goodsId = query['goodsId'];
  const articleId = query['articleId'];
  const type = query['type'];
  const lang = query['lang'];
  const curr = query['curr'];
  const storeName = query['storeName'];
  const contentType = query['contentType'];
  const model = {
    type: type,
    goodsId: goodsId,
    articleId: articleId,
    contentType: contentType,
    storeName: storeName,
    lang: lang,
    curr: curr
  };
  const result = await server_fetchGetMobileDescriptionPageData(model);
  return {
    props: {
      data: {
        goodsId: goodsId,
        type: type,
        lang: lang,
        curr: curr,
        htmlStr: result === undefined ? null : result === null || result === void 0 ? void 0 : result.result
      }
    }
  };
});

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

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "tepj":
/***/ (function(module, exports) {

module.exports = require("react-localize-redux");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });