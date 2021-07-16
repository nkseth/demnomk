module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "/FKe":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/delivered-04375fa4e133a431bf7f171229d64900.svg";

/***/ }),

/***/ "/L9k":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-heart-4ff2a335401835d52e2021e4ef7c663c.svg";

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

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "/zgD":
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1oxe");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0OiM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return client_getShopActiveDocumentById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return client_getActiveCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return client_getActiveCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return client_getActiveProvince; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return client_getParentCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return client_submitShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return client_addAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return client_editAddAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return client_checkShopEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return client_VerifyProviderMobileNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return client_getShopEndMsg; });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BfmP");

const client_getShopActiveDocumentById = async groupId => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Form/ActiveShopDocumentsType/${groupId}`);
  return result.data;
};
const client_getActiveCountries = async () => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Form/ActiveCountry`);
  return result.data;
};
const client_getActiveCities = async provinceId => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Form/ActiveCity/${provinceId}`);
  return result.data;
}; // export const client_getActiveProvinces = async (countryId) => {
//   const axios = axiosClient.getAxios();
//   const result = await axios.get(`/Form/Province/${countryId}`);
//   return result.data;
// };

const client_getActiveProvince = async countryId => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Form/ActiveProvince/${countryId}`);
  return result.data;
};
const client_getParentCategory = async () => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Form/ParentAcitveCategory`);
  return result.data;
};
const client_submitShop = async formData => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.post(`/UserActivity/RegisterProvider`, formData);
  return result.data;
};
const client_addAddress = async model => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.post(`/Profile/AddCustomerAddress`, model);
  return result.data;
};
const client_editAddAddress = async model => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.put(`/UserActivity/Address`, model);
  return result.data;
};
const client_checkShopEmail = async (mobileNumber, email, checkMobileNumber, captchaToken) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/UserActivity/CheckShopEmail`, {
    params: {
      MobileNumber: mobileNumber,
      Email: email,
      CheckMobileNumber: checkMobileNumber,
      captchaToken: captchaToken
    }
  });
  return result.data;
};
const client_VerifyProviderMobileNumber = async (mobileNumber, code, requestId) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/UserActivity/VerifyProviderMobileNumber`, {
    params: {
      MobileNumber: mobileNumber,
      Code: code,
      RequestId: requestId
    }
  });
  return result.data;
};
const client_getShopEndMsg = async () => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Form/RegistrationFinalMessage`);
  return result.data;
};

/***/ }),

/***/ "0VMs":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/menu - addresses-d6517b695e09278599ee41ed8dedcae7.svg";

/***/ }),

/***/ "11Tc":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS4xMzkiIGhlaWdodD0iMTEuMTM5IiB2aWV3Qm94PSIwIDAgMTEuMTM5IDExLjEzOSI+DQogICAgPHBhdGggaWQ9ImFkZCIgZmlsbD0iI2ZmZiIgZD0iTTEwLjE0NSA0LjU3NUg2Ljc2M2EuMi4yIDAgMCAxLS4yLS4yVi45OTVhLjk5NS45OTUgMCAwIDAtMS45ODkgMHYzLjM4MWEuMi4yIDAgMCAxLS4yLjJILjk5NWEuOTk1Ljk5NSAwIDAgMCAwIDEuOTg5aDMuMzgxYS4yLjIgMCAwIDEgLjIuMnYzLjM4MmEuOTk1Ljk5NSAwIDAgMCAxLjk4OSAwVjYuNzYzYS4yLjIgMCAwIDEgLjItLjJoMy4zODJhLjk5NS45OTUgMCAwIDAgMC0xLjk4OXptMCAwIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "1SXp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/common/index.js + 35 modules
var common = __webpack_require__("lCwK");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./assets/images/Adidas_Logo.svg
var Adidas_Logo = __webpack_require__("WsuK");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "react-localize-redux"
var external_react_localize_redux_ = __webpack_require__("tepj");

// EXTERNAL MODULE: ./appConfigSlice.js
var appConfigSlice = __webpack_require__("o2tl");

// EXTERNAL MODULE: ./lib/querys.js
var querys = __webpack_require__("/CuA");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/app/header/LayoutsHeader/Nav/Category/Tabs.jsx
var __jsx = external_react_default.a.createElement;








const TabItem = ({
  onMouseEnterEvent,
  children,
  haveWebPage,
  catId,
  iconUrl,
  closeHomeMenu
}) => {
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const curr = Object(external_react_redux_["useSelector"])(appConfigSlice["g" /* selectCurr */]);
  const Category_pre = "http://ajyal.webtreeonline.com/Uploads/Images/Category";
  return __jsx("li", {
    onMouseEnter: onMouseEnterEvent
  }, haveWebPage ? __jsx(link_default.a, {
    href: `/${curr}-${lang}/category/${catId}`
  }, __jsx("a", {
    onClick: closeHomeMenu
  }, iconUrl !== null ? __jsx("img", {
    src: `${Category_pre}/${catId}/${iconUrl}`,
    alt: children
  }) : null, __jsx("span", null, children))) : __jsx(link_default.a, {
    href: `/${curr}-${lang}/search?id=${catId}&type=${querys["b" /* SEARCH_TYPE_CATEGORY */]}`
  }, __jsx("a", {
    onClick: closeHomeMenu
  }, iconUrl !== null ? __jsx("img", {
    src: `${Category_pre}/${catId}/${iconUrl}`,
    alt: children
  }) : null, __jsx("span", null, children))));
};
const TabContent = ({
  isActive,
  children,
  categories,
  haveWebPage,
  catId,
  closeHomeMenu
}) => {
  const Brand_Pre = "http://ajyal.webtreeonline.com/Uploads/Images/Brand";
  const Category_pre = "http://ajyal.webtreeonline.com/Uploads/Images/Category";
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const curr = Object(external_react_redux_["useSelector"])(appConfigSlice["g" /* selectCurr */]);
  let allLink = "#";

  if (categories.haveWebPage) {
    allLink = `/${curr}-${lang}/category/${categories.categoryId}`;
  } else {
    allLink = `/${curr}-${lang}/search?id=${categories.categoryId}&type=${querys["b" /* SEARCH_TYPE_CATEGORY */]}`;
  }

  return __jsx("div", {
    className: external_classnames_default()("web-category__right-side", {
      active: isActive
    })
  }, __jsx("div", {
    className: "web-category__right-side--header"
  }, __jsx("span", null, categories.categoryTitle), __jsx(link_default.a, {
    href: allLink
  }, __jsx("a", {
    onClick: closeHomeMenu
  }, __jsx(external_react_localize_redux_["Translate"], {
    id: "footer.viewAll"
  })))), __jsx("div", {
    className: "web-category__right-side--body"
  }, __jsx("div", {
    className: "right-side-items"
  }, __jsx("h2", {
    className: "mb-4 right-side-title"
  }, __jsx(external_react_localize_redux_["Translate"], {
    id: "footer.topCategories"
  })), __jsx("ul", null, categories.childs && categories.childs.map(child => {
    return __jsx(external_react_default.a.Fragment, {
      key: child.categoryId
    }, child.haveWebPage ? __jsx(link_default.a, {
      key: child.categoryId,
      href: `/${curr}-${lang}/category/${child.categoryId}`
    }, __jsx("a", {
      onClick: closeHomeMenu
    }, __jsx("li", null, " ", child.categoryTitle))) : __jsx(link_default.a, {
      key: child.categoryId,
      href: `/${curr}-${lang}/search?id=${child.categoryId}&?type=${querys["b" /* SEARCH_TYPE_CATEGORY */]}`
    }, __jsx("a", {
      onClick: closeHomeMenu
    }, __jsx("li", null, child.categoryTitle))));
  }))), __jsx("div", {
    className: "right-side-brands"
  }, __jsx("h2", {
    className: "mb-0 right-side-title"
  }, __jsx(external_react_localize_redux_["Translate"], {
    id: "footer.topBrand"
  })), __jsx("div", {
    className: "right-side-brands--list"
  }, categories.websiteBrand && categories.websiteBrand.map(brand => {
    // { console.log(`${Brand_Pre}/${brand.brandId}/${brand.brandLogoImage}`)}
    return __jsx(link_default.a, {
      key: brand.brandId,
      href: `/${curr}-${lang}/search?id=${categories.categoryId}&?type=${querys["b" /* SEARCH_TYPE_CATEGORY */]}&brandId=${brand.brandId}`
    }, __jsx("a", {
      onClick: closeHomeMenu
    }, __jsx("img", {
      className: "header-brand-images",
      title: brand.brandTitle,
      src: `${Brand_Pre}/${brand.brandId}/${brand.brandLogoImage}`,
      alt: brand.brandTitle
    })));
  }))), __jsx("div", {
    className: "right-side-image"
  }, categories.imageUrl && __jsx("img", {
    src: `${Category_pre}/${categories.categoryId}/${categories.imageUrl}`,
    alt: categories.categoryTitle
  }))));
};
// CONCATENATED MODULE: ./components/app/header/LayoutsHeader/Nav/Category/category.jsx
var category_jsx = external_react_default.a.createElement;






 // import App2 from "./TabContent";

const Category = probs => {
  var _probs$data$, _probs$data;

  let {
    0: tabActiveIndex,
    1: setTabActiveIndex
  } = Object(external_react_["useState"])(probs.data && probs.data[0] && ((_probs$data$ = probs.data[0]) === null || _probs$data$ === void 0 ? void 0 : _probs$data$.categoryId));
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const curr = Object(external_react_redux_["useSelector"])(appConfigSlice["g" /* selectCurr */]);
  return category_jsx("div", null, probs.type === "web" ? category_jsx("div", {
    style: {
      position: "absolute",
      width: "100%"
    }
  }, category_jsx("div", {
    className: "web-category container siteWidthContainer p-0"
  }, category_jsx("div", {
    className: "web-category__left-side"
  }, category_jsx("ul", {
    className: "web-category__items"
  }, // data is results.categories
  probs.data && probs.data.map(cat => {
    return category_jsx(TabItem, {
      closeHomeMenu: probs.closeHomeMenu,
      catId: cat.categoryId,
      iconUrl: cat.iconUrl,
      haveWebPage: cat.haveWebPage,
      key: cat.categoryId,
      onMouseEnterEvent: () => {
        setTabActiveIndex(cat.categoryId);
      }
    }, cat.categoryTitle);
  }))), // data is results.categories
  probs.data && probs.data.map(cat => {
    return category_jsx(TabContent, {
      closeHomeMenu: probs.closeHomeMenu,
      key: cat.categoryId,
      isActive: tabActiveIndex === cat.categoryId,
      categories: cat
    });
  }))) : category_jsx("div", {
    className: "mobile-category"
  }, category_jsx(common["j" /* Dropdown */], {
    alwaysOpen: false,
    headerClass: "mobile-category__filter-header",
    containerClass: "mobile-category__list-container",
    text: probs.categoryTitle
  }, category_jsx("ul", {
    className: "mobile-category__filter-list"
  }, (_probs$data = probs.data) === null || _probs$data === void 0 ? void 0 : _probs$data.map((cat, index) => {
    var _cat$childs;

    let allLink = "#";

    if (cat.haveWebPage) {
      allLink = `/${curr}-${lang}/category/${cat.categoryId}`;
    } else {
      allLink = `/${curr}-${lang}/search?id=${cat.categoryId}&type=${querys["b" /* SEARCH_TYPE_CATEGORY */]}`;
    }

    return category_jsx("li", {
      className: "mobile-category__list-item",
      key: index
    }, category_jsx(common["j" /* Dropdown */], {
      alwaysOpen: false,
      headerClass: "mobile-category__drop-header",
      text: cat.categoryTitle,
      haveLink: true,
      link: allLink
    }, category_jsx("ul", {
      className: "mobile-category__drop-list"
    }, (_cat$childs = cat.childs) === null || _cat$childs === void 0 ? void 0 : _cat$childs.map((child, index) => {
      let allLink2 = "#";

      if (child.haveWebPage) {
        allLink2 = `/${curr}-${lang}/category/${child.categoryId}`;
      } else {
        allLink2 = `/${curr}-${lang}/search?id=${child.categoryId}&type=${querys["b" /* SEARCH_TYPE_CATEGORY */]}`;
      }

      return category_jsx("li", {
        className: "mobile-category__list-item-secound",
        key: index + 100
      }, category_jsx(link_default.a, {
        href: allLink2
      }, category_jsx("a", {
        className: "mobile-category__list-link"
      }, child.categoryTitle)));
    }))));
  })))));
};

/* harmony default export */ var category = __webpack_exports__["a"] = (Category);

/***/ }),

/***/ "1TxS":
/***/ (function(module, exports) {

module.exports = require("validator/lib/isLength");

/***/ }),

/***/ "1cau":
/***/ (function(module, exports) {

module.exports = require("react-google-recaptcha");

/***/ }),

/***/ "1oxe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-localize-redux"
var external_react_localize_redux_ = __webpack_require__("tepj");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./store.js + 1 modules
var store = __webpack_require__("BXF7");

// EXTERNAL MODULE: ./translations/payload.js
var payload = __webpack_require__("x1Y1");

// EXTERNAL MODULE: ./translations/auth-translations.json
var auth_translations = __webpack_require__("ajwg");

// EXTERNAL MODULE: ./lib/switch.js
var lib_switch = __webpack_require__("t8EK");

// EXTERNAL MODULE: ./components/common/index.js + 35 modules
var common = __webpack_require__("lCwK");

// EXTERNAL MODULE: ./lib/formValidator.js
var formValidator = __webpack_require__("s6mn");

// EXTERNAL MODULE: ./appConfigSlice.js
var appConfigSlice = __webpack_require__("o2tl");

// EXTERNAL MODULE: ./lib/api/client/clientCustomer.js
var clientCustomer = __webpack_require__("EsFC");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./lib/toast.js
var toast = __webpack_require__("C5tE");

// EXTERNAL MODULE: ./lib/helpers.js
var helpers = __webpack_require__("FWZJ");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./lib/api/axios.js
var axios = __webpack_require__("BfmP");

// EXTERNAL MODULE: external "react-google-recaptcha"
var external_react_google_recaptcha_ = __webpack_require__("1cau");
var external_react_google_recaptcha_default = /*#__PURE__*/__webpack_require__.n(external_react_google_recaptcha_);

// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__("vtRj");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// EXTERNAL MODULE: ./lib/api/client/clientShop.js
var clientShop = __webpack_require__("0OiM");

// EXTERNAL MODULE: ./components/app/verifyPhone/VerifyPhone.jsx
var VerifyPhone = __webpack_require__("zr7/");

// EXTERNAL MODULE: ./assets/images/logo-2.png
var logo_2 = __webpack_require__("nXN2");
var logo_2_default = /*#__PURE__*/__webpack_require__.n(logo_2);

// CONCATENATED MODULE: ./components/app/pages/Auth/SignUp/SignUp.jsx
var __jsx = external_react_default.a.createElement;




















/* harmony default export */ var SignUp = (props => {
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])("");
  let {
    0: mobileNumber,
    1: setMobileNumber
  } = Object(external_react_["useState"])("");
  let {
    0: phoneCode,
    1: setPhoneCode
  } = Object(external_react_["useState"])("");
  const {
    0: countryId,
    1: setCountryId
  } = Object(external_react_["useState"])(null);
  const {
    0: countryItems,
    1: setCountryItems
  } = Object(external_react_["useState"])([]);
  const {
    0: password,
    1: setPassword
  } = Object(external_react_["useState"])("");
  let {
    0: iso,
    1: setIso
  } = Object(external_react_["useState"])("");
  const {
    0: cpassword,
    1: setCpassword
  } = Object(external_react_["useState"])("");
  const {
    0: name,
    1: setName
  } = Object(external_react_["useState"])("");
  const {
    0: family,
    1: setFamily
  } = Object(external_react_["useState"])("");
  const {
    0: captchaRef,
    1: setcaptchaRef
  } = Object(external_react_["useState"])({});
  const {
    0: errors,
    1: setErrors
  } = Object(external_react_["useState"])({});
  const {
    0: captchaErrors,
    1: setcaptchaErrors
  } = Object(external_react_["useState"])(false);
  const {
    0: LoginStatus,
    1: setLoginStatus
  } = Object(external_react_["useState"])(false);
  const {
    0: captchaToken,
    1: setcaptchaToken
  } = Object(external_react_["useState"])("");
  const {
    0: currentSituation,
    1: setCurrentSituation
  } = Object(external_react_["useState"])(1);
  const {
    0: loaderFinalSubmitButton,
    1: setLoaderFinalSubmitButton
  } = Object(external_react_["useState"])(false);
  let {
    0: requestId,
    1: setrequestId
  } = Object(external_react_["useState"])("");
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const curr = Object(external_react_redux_["useSelector"])(appConfigSlice["g" /* selectCurr */]);
  const prevLink = Object(external_react_redux_["useSelector"])(appConfigSlice["j" /* selectPrevLink */]);
  const dis = Object(external_react_redux_["useDispatch"])();
  const router = Object(router_["useRouter"])();

  const handleSubmit = async e => {
    e.preventDefault();
    if (LoginStatus) return;

    if (captchaToken === "") {
      setcaptchaErrors(true);
      return;
    } else {
      setcaptchaErrors(false);
    }

    for (let key in errors) {
      if (errors[key]) {
        external_react_toastify_["toast"].error(Object(helpers["c" /* getErrorMsg */])(lang, "error-detected"), Object(toast["a" /* getToastConfig */])());
        return;
      }
    }

    dis(async (dispatch, getState) => {
      dispatch({
        type: appConfigSlice["c" /* LOGIN_CUSTOMER_LOADING */]
      });

      try {
        setLoginStatus(true);
        const result = await Object(clientCustomer["h" /* client_verifyCustomerMobileNumber */])({
          captchaToken,
          mobileNumber: "+" + phoneCode + mobileNumber,
          email
        });

        if (result.status === 200) {
          setrequestId(result.result.requestId);
          setCurrentSituation(2);
        }
      } catch (err) {
        var _err$response;

        if (captchaRef !== null) {
          captchaRef.reset();
        }

        external_react_toastify_["toast"].error((_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.data.message, Object(toast["a" /* getToastConfig */])());
        setPassword("");
        setCpassword("");
        setLoginStatus(false);
      }
    });
  };

  Object(external_react_["useEffect"])(() => {
    getCountris();
    return () => {};
  }, []);

  const getCountris = async () => {
    const result = await Object(clientShop["f" /* client_getActiveCountries */])();
    let countries = [];
    result.result.forEach(item => {
      countries.push({
        value: item.countryId,
        label: __jsx("div", null, __jsx("img", {
          src: `/assets/flags/${item.flagUrl}`,
          height: "15px",
          width: "15px"
        }), " ", "+ ", item.phoneCode),
        iso: item.iso,
        phoneCode: item.phoneCode
      });
    });
    setCountryItems(countries);
  };

  const submitRegister = (smsCode, requestSmsId) => {
    dis(async (dispatch, getState) => {
      dispatch({
        type: appConfigSlice["c" /* LOGIN_CUSTOMER_LOADING */]
      });

      try {
        setLoaderFinalSubmitButton(true);
        const result = await Object(clientCustomer["e" /* client_registerCustomer */])({
          email,
          pass: password,
          name,
          family,
          captchaToken,
          mobileNumber,
          countryId,
          phoneCode,
          smsCode,
          requestId: requestSmsId
        });

        if (result.status === 200) {
          dispatch({
            type: appConfigSlice["e" /* SUCCE_LOGIN */],
            payload: {
              token: result.result.token
            }
          });
          Object(helpers["k" /* setTokenCookie */])(result.result.token);
          axios["a" /* default */].setToken(result.result.token);
          external_react_toastify_["toast"].success(Object(helpers["c" /* getErrorMsg */])(lang, "succ-regitered"), Object(toast["a" /* getToastConfig */])());

          if (prevLink) {
            dispatch({
              type: appConfigSlice["d" /* PREVLINK_CHANGE */],
              payload: {
                link: null
              }
            });
            router.push(prevLink);
          } else {
            router.push(`/${curr}-${lang}`);
          }

          Object(helpers["e" /* removeCartCookie */])();
        }
      } catch (err) {
        var _err$response2, _err$response3;

        setLoaderFinalSubmitButton(false);
        external_react_toastify_["toast"].error((_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : _err$response2.data.message, Object(toast["a" /* getToastConfig */])());
        dispatch({
          type: appConfigSlice["a" /* ERROR_LOGIN */],
          payload: {
            error: (_err$response3 = err.response) === null || _err$response3 === void 0 ? void 0 : _err$response3.data.message
          }
        });
      }
    });
  };

  const handleBackclick = () => {
    setCurrentSituation(1);
    setPassword("");
    setCpassword("");
    setMobileNumber("");
    setLoginStatus(false);
  };

  return __jsx("div", {
    style: {
      height: "100%"
    }
  }, currentSituation === 1 ? __jsx("div", {
    className: "form sign-up"
  }, __jsx(external_react_localize_redux_["Translate"], null, ({
    translate
  }) => {
    return __jsx(external_react_default.a.Fragment, null, !props.isDesktop && __jsx("a", {
      href: "/",
      className: "auth-mobile-logo"
    }, __jsx("img", {
      src: logo_2_default.a
    })), __jsx("a", {
      onClick: e => {
        e.preventDefault();
        Object(lib_switch["d" /* switchLang */])(props.loc, true);
      },
      className: "auth__lang-slt",
      href: "#"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "lang"
    })), props.isDesktop ? __jsx(external_react_default.a.Fragment, null, __jsx("h4", {
      className: "auth__header auth__header--signup"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "hi"
    })), __jsx("h4", {
      className: "auth__header-sub"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "acc-create"
    }))) : __jsx("h4", {
      className: "auth__header-sub-mobile"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "acc-create"
    })), __jsx("form", {
      action: "",
      onSubmit: handleSubmit
    }, __jsx("div", {
      className: "auth__form auth__form--login"
    }, __jsx("label", {
      className: "auth__form-label auth__form-label--signup"
    }, __jsx("span", {
      className: "auth__input-label"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "mobileNumber"
    })), __jsx("div", {
      className: "auth__mobile-number"
    }, __jsx(external_react_select_default.a, {
      className: "react-select",
      options: countryItems,
      placeholder: "code",
      onChange: event => {
        setIso(event.iso);
        setCountryId(event.value);
        setPhoneCode(event.phoneCode);
      },
      onBlur: e => {
        Object(formValidator["g" /* validatePhoneNumber */])({
          name: "mobileNumber",
          value: mobileNumber,
          handler: setErrors,
          lang,
          iso: iso
        });
      }
    }), __jsx("input", {
      className: "auth__input auth__input-mobile",
      type: "text",
      onChange: event => {
        setMobileNumber(event.target.value);
      },
      value: mobileNumber,
      name: "mobileNumber",
      onBlur: e => {
        Object(formValidator["g" /* validatePhoneNumber */])({
          name: e.target.name,
          value: e.target.value,
          handler: setErrors,
          lang,
          iso: iso
        });
      },
      required: true,
      placeholder: translate("mobile-placeholder")
    })), __jsx(common["k" /* FormErrorMsg */], {
      show: errors["mobileNumber"],
      msg: errors["mobileNumber"]
    })), __jsx("label", {
      className: "auth__form-label auth__form-label--signup"
    }, __jsx("span", {
      className: "auth__input-label"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "email"
    })), __jsx("input", {
      className: "auth__input",
      type: "email",
      onChange: event => {
        setEmail(event.target.value);
      },
      value: email,
      name: "email",
      required: true,
      onBlur: e => {
        Object(formValidator["c" /* validateEmail */])({
          name: "email",
          value: e.target.value,
          handler: setErrors,
          lang
        });
      },
      placeholder: translate("email-placeholder"),
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
    }), __jsx(common["k" /* FormErrorMsg */], {
      show: errors["email"],
      msg: errors["email"]
    })), __jsx("label", {
      className: "auth__form-label auth__form-label--signup"
    }, __jsx("span", {
      className: "auth__input-label"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "Password"
    })), __jsx("input", {
      className: "auth__input",
      type: "password",
      placeholder: translate("pass-placeholder"),
      onBlur: e => {
        Object(formValidator["e" /* validatePassword */])({
          name: "password",
          value: e.target.value,
          handler: setErrors,
          lang
        });
      },
      onChange: event => {
        setPassword(event.target.value);
      },
      value: password,
      name: "password",
      required: true
    }), __jsx(common["k" /* FormErrorMsg */], {
      show: errors["password"],
      msg: errors["password"]
    })), __jsx("label", {
      className: "auth__form-label auth__form-label--signup"
    }, __jsx("span", {
      className: "auth__input-label"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "pas-confirm"
    })), __jsx("input", {
      required: true,
      className: "auth__input",
      type: "password",
      onBlur: e => {
        Object(formValidator["a" /* validateConfirmPassword */])({
          name: e.target.name,
          value1: password,
          value2: e.target.value,
          handler: setErrors,
          lang
        });
      },
      onChange: event => {
        setCpassword(event.target.value);
        Object(formValidator["a" /* validateConfirmPassword */])({
          name: event.target.name,
          value1: password,
          value2: event.target.value,
          handler: setErrors,
          lang
        });
      },
      value: cpassword,
      name: "cpassword",
      placeholder: translate("cpass-placeholder")
    }), __jsx(common["k" /* FormErrorMsg */], {
      show: errors["cpassword"],
      msg: errors["cpassword"]
    })), __jsx("label", {
      className: "auth__form-label auth__form-label--signup"
    }, __jsx("span", {
      className: "auth__input-label"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "name"
    })), __jsx("input", {
      required: true,
      className: "auth__input",
      type: "text",
      placeholder: translate("name-placeholder"),
      onBlur: e => {
        Object(formValidator["d" /* validateEmpty */])({
          name: e.target.name,
          value: e.target.value,
          handler: setErrors,
          lang
        });
      },
      onChange: event => {
        setName(event.target.value);
      },
      value: name,
      name: "name"
    }), __jsx(common["k" /* FormErrorMsg */], {
      show: errors["name"],
      msg: errors["name"]
    })), __jsx("label", {
      className: "auth__form-label auth__form-label--signup"
    }, __jsx("span", {
      className: "auth__input-label"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "family"
    })), __jsx("input", {
      required: true,
      className: "auth__input",
      type: "text",
      placeholder: translate("family-placeholder"),
      onBlur: e => {
        Object(formValidator["d" /* validateEmpty */])({
          name: e.target.name,
          value: e.target.value,
          handler: setErrors,
          lang
        });
      },
      onChange: event => {
        setFamily(event.target.value);
      },
      value: family,
      name: "family"
    }), __jsx(common["k" /* FormErrorMsg */], {
      show: errors["family"],
      msg: errors["family"]
    }))), __jsx("div", {
      className: "auth__captcha-cnt"
    }, __jsx(external_react_google_recaptcha_default.a // size="compact"
    , {
      sitekey: "6Lfh-usZAAAAAP3ZYWqEZ4hmjWOi_GA606Ho19aW",
      onChange: token => {
        setcaptchaToken(token);
      },
      ref: e => setcaptchaRef(e)
    }), captchaErrors ? __jsx(common["k" /* FormErrorMsg */], {
      show: true,
      msg: "please set captcha"
    }) : null), __jsx("div", {
      className: "auth__btn",
      style: {
        marginTop: "30px"
      }
    }, __jsx(common["f" /* Button */], {
      radius: "true",
      value: LoginStatus ? __jsx(common["s" /* Loading */], {
        type: "white",
        width: "20px",
        height: "20px"
      }) : __jsx(external_react_localize_redux_["Translate"], {
        id: "acc-create2"
      })
    }))), __jsx("div", {
      className: "auth__footer-mobile"
    }, __jsx("h4", {
      className: "auth__header-sub mt-5"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "acc-have"
    })), __jsx("a", {
      onClick: props.clickSignUp,
      className: "auth__forget mt-3"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "signIn3"
    }))));
  })) : __jsx("div", {
    className: "form "
  }, __jsx(VerifyPhone["a" /* default */], {
    Backclick: handleBackclick,
    loaderSubmitButton: loaderFinalSubmitButton,
    currdata: {
      phoneCode: phoneCode,
      mobileNumber: mobileNumber,
      iso: iso,
      requestId: requestId
    },
    submitRegister: submitRegister
  })));
});
// CONCATENATED MODULE: ./components/app/pages/Auth/SignUp/index.js

// EXTERNAL MODULE: external "react-google-login"
var external_react_google_login_ = __webpack_require__("rCsO");
var external_react_google_login_default = /*#__PURE__*/__webpack_require__.n(external_react_google_login_);

// EXTERNAL MODULE: external "react-facebook-login"
var external_react_facebook_login_ = __webpack_require__("42Y9");
var external_react_facebook_login_default = /*#__PURE__*/__webpack_require__.n(external_react_facebook_login_);

// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__("CSOn");

// CONCATENATED MODULE: ./components/app/pages/Auth/ForgetPassword/EnterEmail.jsx
var EnterEmail_jsx = external_react_default.a.createElement;












const EnterEmail = ({
  dis,
  setForgotEmail
}) => {
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])("");
  const {
    0: errors,
    1: setErrors
  } = Object(external_react_["useState"])({});
  const {
    0: submitStatus,
    1: setSubmitStatus
  } = Object(external_react_["useState"])(false);
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (submitStatus) return;

    for (let key in errors) {
      if (errors[key]) {
        external_react_toastify_["toast"].error(Object(helpers["c" /* getErrorMsg */])(lang, "error-detected"), Object(toast["a" /* getToastConfig */])());
        return;
      }
    }

    setSubmitStatus(true);

    try {
      const res = await Object(clientCustomer["g" /* client_sendForgetEmail */])({
        email
      });
      setForgotEmail(email);
      dis({
        type: VERIFY_EMAIL
      });
    } catch (err) {
      external_react_toastify_["toast"].error(err.response.data.message, Object(toast["a" /* getToastConfig */])());
      setSubmitStatus(false);
    }
  };

  return EnterEmail_jsx("div", {
    className: "forgetpass" // onClick={() => {
    //   dis({ type: VERIFY_EMAIL });
    // }}

  }, EnterEmail_jsx("section", {
    style: {
      width: "100%"
    }
  }, EnterEmail_jsx("h4", {
    className: "auth__header-sub text-align-center-ltr"
  }, EnterEmail_jsx(external_react_localize_redux_["Translate"], {
    id: "forget-pass"
  })), EnterEmail_jsx("h4", {
    className: "auth__header mt-0 text-align-center-ltr"
  }, EnterEmail_jsx(external_react_localize_redux_["Translate"], {
    id: "enter-email"
  })), EnterEmail_jsx("div", {
    className: "forgetpass__input-cnt"
  }, EnterEmail_jsx("form", {
    onSubmit: handleSubmit
  }, EnterEmail_jsx("label", {
    className: "auth__form-label"
  }, EnterEmail_jsx("span", {
    className: "auth__input-label"
  }, EnterEmail_jsx(external_react_localize_redux_["Translate"], {
    id: "email"
  })), EnterEmail_jsx(external_react_localize_redux_["Translate"], null, ({
    translate
  }) => {
    return EnterEmail_jsx("input", {
      className: "auth__input",
      type: "email",
      placeholder: translate("email-placeholder"),
      onChange: event => {
        setEmail(event.target.value);
      },
      value: email,
      name: "email",
      required: true,
      onBlur: e => {
        Object(formValidator["c" /* validateEmail */])({
          name: "email",
          value: e.target.value,
          handler: setErrors,
          lang
        });
      },
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
    });
  }), EnterEmail_jsx(common["k" /* FormErrorMsg */], {
    show: errors["email"],
    msg: errors["email"]
  })), EnterEmail_jsx("div", {
    className: "forgetpass__btn-cnt"
  }, EnterEmail_jsx(common["f" /* Button */], {
    radius: "true",
    value: submitStatus ? EnterEmail_jsx(common["s" /* Loading */], {
      type: "white",
      width: "20px",
      height: "20px"
    }) : EnterEmail_jsx(external_react_localize_redux_["Translate"], {
      id: "submit-email"
    })
  }))))));
};

/* harmony default export */ var ForgetPassword_EnterEmail = (EnterEmail);
// EXTERNAL MODULE: ./components/app/pages/Order/OrderLayouts/ShippingAddress/VerifyPhone.jsx
var ShippingAddress_VerifyPhone = __webpack_require__("50fw");

// EXTERNAL MODULE: external "react-compound-timer/build"
var build_ = __webpack_require__("5w86");
var build_default = /*#__PURE__*/__webpack_require__.n(build_);

// EXTERNAL MODULE: ./assets/images/email-veri.png
var email_veri = __webpack_require__("WrI8");
var email_veri_default = /*#__PURE__*/__webpack_require__.n(email_veri);

// CONCATENATED MODULE: ./components/app/pages/Auth/ForgetPassword/VerifyEmail.jsx
var VerifyEmail_jsx = external_react_default.a.createElement;












const VerifyEmail = ({
  dis,
  forgotEmail
}) => {
  const {
    0: code,
    1: setCode
  } = Object(external_react_["useState"])("");
  const {
    0: submitStatus,
    1: setSubmitStatus
  } = Object(external_react_["useState"])(false);
  const {
    0: errors,
    1: setErrors
  } = Object(external_react_["useState"])({});
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  let can_send_new_email = false;

  const handleSubmit = async e => {
    e.preventDefault();
    if (submitStatus) return;
    setSubmitStatus(true);

    try {
      const res = await Object(clientCustomer["i" /* client_verifyForgetEmail */])({
        email: forgotEmail,
        code
      });
      dis({
        type: ENTER_NEW_PASSWORD
      });
    } catch (err) {
      external_react_toastify_["toast"].error(err.response.data.message, Object(toast["a" /* getToastConfig */])());
      setSubmitStatus(false);
    }
  };

  const sendEmail = async () => {
    try {
      const res = await Object(clientCustomer["g" /* client_sendForgetEmail */])({
        email: forgotEmail
      });
    } catch (err) {
      external_react_toastify_["toast"].error(err.response.data.message, Object(toast["a" /* getToastConfig */])());
      can_send_new_email = true;
    }
  };

  const handleResendEmail = () => {
    sendEmail();
    can_send_new_email = false;
  };

  return VerifyEmail_jsx("section", {
    className: "forgetpass"
  }, VerifyEmail_jsx("div", {
    className: "verify-email"
  }, VerifyEmail_jsx("img", {
    alt: "verify your email",
    src: email_veri_default.a,
    className: "verify-email__img"
  }), VerifyEmail_jsx("p", {
    className: "verify-email__top-text"
  }, VerifyEmail_jsx(external_react_localize_redux_["Translate"], {
    id: "check-inbox"
  })), VerifyEmail_jsx("p", {
    className: "verify-email__btm-text text-align-left px-5"
  }, VerifyEmail_jsx(external_react_localize_redux_["Translate"], {
    id: "sent-email-msg1"
  }), VerifyEmail_jsx("span", {
    className: "timer__text"
  }, forgotEmail), VerifyEmail_jsx(external_react_localize_redux_["Translate"], {
    id: "sent-email-msg2"
  })), VerifyEmail_jsx("form", {
    onSubmit: handleSubmit,
    className: "verify-email__form" //   onSubmit={this.handleSubmit}

  }, VerifyEmail_jsx("label", {
    className: "auth__form-label"
  }, VerifyEmail_jsx(external_react_localize_redux_["Translate"], null, ({
    translate
  }) => {
    return VerifyEmail_jsx("input", {
      className: "auth__input",
      type: "text",
      placeholder: translate("verify-code-placeholder"),
      onChange: event => {
        setCode(event.target.value);
      },
      value: code,
      name: "code",
      required: true,
      onBlur: e => {// validateEmail({
        //   name: "email",
        //   value: e.target.value,
        //   handler: setErrors,
        //   lang,
        // });
      } // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"

    });
  })), VerifyEmail_jsx("div", {
    className: "forgetpass__btn-cnt"
  }, VerifyEmail_jsx(common["f" /* Button */], {
    radius: "true",
    value: submitStatus ? VerifyEmail_jsx(common["s" /* Loading */], {
      type: "white",
      width: "20px",
      height: "20px"
    }) : VerifyEmail_jsx(external_react_localize_redux_["Translate"], {
      id: "verify"
    })
  }))), VerifyEmail_jsx(build_default.a, {
    initialTime: 180000,
    direction: "backward"
  }, ({
    start,
    reset,
    getTime
  }) => {
    if (getTime() <= 0) {
      can_send_new_email = true;
    }

    return VerifyEmail_jsx("div", {
      className: "timer mt-5 d-flex align-items-center justify-content-center"
    }, VerifyEmail_jsx("span", {
      className: "timer__count"
    }, VerifyEmail_jsx(build_default.a.Minutes, null), " : ", VerifyEmail_jsx(build_default.a.Seconds, null)), VerifyEmail_jsx("a", {
      onClick: e => {
        e.preventDefault();
        if (!can_send_new_email) return;
        handleResendEmail();
        reset();
        start();
      },
      className: "timer__text"
    }, VerifyEmail_jsx(external_react_localize_redux_["Translate"], {
      id: "send-new-email"
    })));
  })));
};

/* harmony default export */ var ForgetPassword_VerifyEmail = (VerifyEmail);
// CONCATENATED MODULE: ./components/app/pages/Auth/ForgetPassword/EnterNewPassWord.jsx
var EnterNewPassWord_jsx = external_react_default.a.createElement;












const EnterNewPassWord = ({
  dis,
  forgotEmail
}) => {
  const {
    0: password,
    1: setPassword
  } = Object(external_react_["useState"])("");
  const {
    0: confirmPassword,
    1: setConfirmPassword
  } = Object(external_react_["useState"])("");
  const {
    0: errors,
    1: setErrors
  } = Object(external_react_["useState"])({});
  const {
    0: submitStatus,
    1: setSubmitStatus
  } = Object(external_react_["useState"])(false);
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (submitStatus) return;

    for (let key in errors) {
      if (errors[key]) {
        external_react_toastify_["toast"].error(Object(helpers["c" /* getErrorMsg */])(lang, "error-detected"), Object(toast["a" /* getToastConfig */])());
        return;
      }
    }

    setSubmitStatus(true);

    try {
      const res = await Object(clientCustomer["b" /* client_changeForgetPass */])({
        email: forgotEmail,
        pass: password
      });
      external_react_toastify_["toast"].success(res.message, Object(toast["a" /* getToastConfig */])());
      dis({
        type: SIGNIN
      });
    } catch (err) {
      external_react_toastify_["toast"].error(err.response.data.message, Object(toast["a" /* getToastConfig */])());
      setSubmitStatus(false);
    }
  };

  return EnterNewPassWord_jsx("div", {
    className: "forgetpass" // onClick={() => {
    //   dis({ type: VERIFY_EMAIL });
    // }}

  }, EnterNewPassWord_jsx("section", {
    style: {
      width: "100%"
    }
  }, EnterNewPassWord_jsx("h4", {
    className: "auth__header-sub text-align-center-ltr mb-5"
  }, EnterNewPassWord_jsx(external_react_localize_redux_["Translate"], {
    id: "change-pass"
  })), EnterNewPassWord_jsx("div", {
    className: "forgetpass__input-cnt"
  }, EnterNewPassWord_jsx("form", {
    onSubmit: handleSubmit
  }, EnterNewPassWord_jsx(external_react_localize_redux_["Translate"], null, ({
    translate
  }) => {
    return EnterNewPassWord_jsx(external_react_default.a.Fragment, null, EnterNewPassWord_jsx("label", {
      className: "auth__form-label auth__form-label--signup"
    }, EnterNewPassWord_jsx("span", {
      className: "auth__input-label"
    }, EnterNewPassWord_jsx(external_react_localize_redux_["Translate"], {
      id: "new-pass"
    })), EnterNewPassWord_jsx("input", {
      className: "auth__input",
      type: "password",
      placeholder: translate("new-pass-placeholder"),
      onBlur: e => {
        Object(formValidator["e" /* validatePassword */])({
          name: "password",
          value: e.target.value,
          handler: setErrors,
          lang
        });
      },
      onChange: event => {
        setPassword(event.target.value);
        Object(formValidator["a" /* validateConfirmPassword */])({
          name: "cpassword",
          value1: event.target.value,
          value2: confirmPassword,
          handler: setErrors,
          lang
        });
      },
      value: password,
      name: "password",
      required: true
    }), EnterNewPassWord_jsx(common["k" /* FormErrorMsg */], {
      show: errors["password"],
      msg: errors["password"]
    })), EnterNewPassWord_jsx("label", {
      className: "auth__form-label auth__form-label--signup mt-5"
    }, EnterNewPassWord_jsx("span", {
      className: "auth__input-label"
    }, EnterNewPassWord_jsx(external_react_localize_redux_["Translate"], {
      id: "pas-confirm"
    })), EnterNewPassWord_jsx("input", {
      required: true,
      className: "auth__input",
      type: "password",
      onBlur: e => {
        Object(formValidator["a" /* validateConfirmPassword */])({
          name: e.target.name,
          value1: password,
          value2: e.target.value,
          handler: setErrors,
          lang
        });
      },
      onChange: event => {
        setConfirmPassword(event.target.value);
        Object(formValidator["a" /* validateConfirmPassword */])({
          name: event.target.name,
          value1: password,
          value2: event.target.value,
          handler: setErrors,
          lang
        });
      },
      value: confirmPassword,
      name: "cpassword",
      placeholder: translate("cpass-placeholder")
    }), EnterNewPassWord_jsx(common["k" /* FormErrorMsg */], {
      show: errors["cpassword"],
      msg: errors["cpassword"]
    })));
  }), EnterNewPassWord_jsx("div", {
    className: "forgetpass__btn-cnt"
  }, EnterNewPassWord_jsx(common["f" /* Button */], {
    radius: "true",
    value: submitStatus ? EnterNewPassWord_jsx(common["s" /* Loading */], {
      type: "white",
      width: "20px",
      height: "20px"
    }) : EnterNewPassWord_jsx(external_react_localize_redux_["Translate"], {
      id: "submit"
    })
  }))))));
};

/* harmony default export */ var ForgetPassword_EnterNewPassWord = (EnterNewPassWord);
// CONCATENATED MODULE: ./components/app/pages/Auth/SignIn/SignIn.jsx
var SignIn_jsx = external_react_default.a.createElement;














 // import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";










const SIGNIN = 1;
const ENTER_EMAIL = 2;
const VERIFY_EMAIL = 3;
const ENTER_NEW_PASSWORD = 4;
/* harmony default export */ var SignIn = (props => {
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])("");
  const {
    0: forgotEmail,
    1: setForgotEmail
  } = Object(external_react_["useState"])(null);
  const {
    0: password,
    1: setPassword
  } = Object(external_react_["useState"])("");
  const {
    0: errors,
    1: setErrors
  } = Object(external_react_["useState"])({});
  const {
    0: captchaErrors,
    1: setcaptchaErrors
  } = Object(external_react_["useState"])(false);
  const {
    0: captchaToken,
    1: setcaptchaToken
  } = Object(external_react_["useState"])("");
  const {
    0: captchaRef,
    1: setcaptchaRef
  } = Object(external_react_["useState"])({});

  const reducer = (state, action) => {
    return action.type;
  };

  const {
    0: situ,
    1: dispatch
  } = Object(external_react_["useReducer"])(reducer, SIGNIN);
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const curr = Object(external_react_redux_["useSelector"])(appConfigSlice["g" /* selectCurr */]);
  const LoginStatus = Object(external_react_redux_["useSelector"])(appConfigSlice["i" /* selectLogin */]).status === appConfigSlice["b" /* LOADING */];
  const prevLink = Object(external_react_redux_["useSelector"])(appConfigSlice["j" /* selectPrevLink */]);
  const dis = Object(external_react_redux_["useDispatch"])();
  const router = Object(router_["useRouter"])();
  const FACEBOOK = 2;
  const GOOGLE = 1;

  const handleSubmit = e => {
    e.preventDefault();
    if (LoginStatus) return;

    if (captchaToken === "") {
      setcaptchaErrors(true);
      return;
    } else {
      setcaptchaErrors(false);
    }

    for (let key in errors) {
      if (errors[key]) {
        external_react_toastify_["toast"].error(Object(helpers["c" /* getErrorMsg */])(lang, "error-detected"), Object(toast["a" /* getToastConfig */])());
        return;
      }
    }

    let result;
    dis(async (dispatch, getState) => {
      dispatch({
        type: appConfigSlice["c" /* LOGIN_CUSTOMER_LOADING */]
      });

      try {
        //f
        result = await Object(clientCustomer["c" /* client_loginCustomer */])({
          email,
          pass: password,
          captchaToken
        });

        if (result.status === 200) {
          dispatch({
            type: appConfigSlice["e" /* SUCCE_LOGIN */],
            payload: {
              token: result.result.token
            }
          });
          Object(helpers["k" /* setTokenCookie */])(result.result.token);
          axios["a" /* default */].setToken(result.result.token);
          external_react_toastify_["toast"].success(Object(helpers["c" /* getErrorMsg */])(lang, "succ-login"), Object(toast["a" /* getToastConfig */])());

          if (prevLink) {
            dispatch({
              type: appConfigSlice["d" /* PREVLINK_CHANGE */],
              payload: {
                link: null
              }
            });
            router.push(prevLink);
          } else {
            router.push(`/${curr}-${lang}`);
          }

          Object(helpers["e" /* removeCartCookie */])();
        }
      } catch (err) {
        captchaRef.reset();
        external_react_toastify_["toast"].error(err.response.data.message, Object(toast["a" /* getToastConfig */])());
        dispatch({
          type: appConfigSlice["a" /* ERROR_LOGIN */],
          payload: {
            error: err.response.data.message
          }
        });
        setPassword("");
      }
    });
  };

  const onResponse = (response, type) => {
    let token;

    if (type === GOOGLE) {
      const {
        tokenId
      } = response;
      token = tokenId;
    }

    if (type === FACEBOOK) {
      token = response.accessToken;
    }

    if (LoginStatus) return;
    let result;
    dis(async dispatch => {
      dispatch({
        type: appConfigSlice["c" /* LOGIN_CUSTOMER_LOADING */]
      });

      try {
        //f
        result = await Object(clientCustomer["d" /* client_loginWithSocial */])({
          accessToken: token,
          socialType: type
        });

        if (result.status === 200) {
          dispatch({
            type: appConfigSlice["e" /* SUCCE_LOGIN */],
            payload: {
              token: result.result.token
            }
          });
          Object(helpers["k" /* setTokenCookie */])(result.result.token);
          axios["a" /* default */].setToken(result.result.token);
          external_react_toastify_["toast"].success(Object(helpers["c" /* getErrorMsg */])(lang, "succ-login"), Object(toast["a" /* getToastConfig */])());

          if (prevLink) {
            dispatch({
              type: appConfigSlice["d" /* PREVLINK_CHANGE */],
              payload: {
                link: null
              }
            });
            router.push(prevLink);
          } else {
            router.push(`/${curr}-${lang}`);
          }

          Object(helpers["e" /* removeCartCookie */])();
        }
      } catch (err) {
        external_react_toastify_["toast"].error(err.response.data.message, Object(toast["a" /* getToastConfig */])());
        dispatch({
          type: appConfigSlice["a" /* ERROR_LOGIN */],
          payload: {
            error: err.response.data.message
          }
        });
        setPassword("");
      }
    });
  };

  const renderSwitch = () => {
    switch (situ) {
      case ENTER_EMAIL:
        return SignIn_jsx(ForgetPassword_EnterEmail, {
          dis: dispatch,
          setForgotEmail: setForgotEmail
        });

      case VERIFY_EMAIL:
        return SignIn_jsx(ForgetPassword_VerifyEmail, {
          dis: dispatch,
          forgotEmail: forgotEmail
        });

      case ENTER_NEW_PASSWORD:
        return SignIn_jsx(ForgetPassword_EnterNewPassWord, {
          dis: dispatch,
          forgotEmail: forgotEmail
        });
    }
  };

  return SignIn_jsx("div", {
    className: "form sign-in"
  }, situ != SIGNIN ? SignIn_jsx(external_react_transition_group_["SwitchTransition"], {
    className: "user-panel__container"
  }, SignIn_jsx(external_react_transition_group_["CSSTransition"], {
    key: situ,
    classNames: "user-panel__routes",
    timeout: 200
  }, renderSwitch())) : SignIn_jsx(external_react_default.a.Fragment, null, SignIn_jsx(external_react_localize_redux_["Translate"], null, ({
    translate
  }) => {
    return SignIn_jsx(external_react_default.a.Fragment, null, !props.isDesktop && SignIn_jsx("a", {
      href: "/",
      className: "auth-mobile-logo"
    }, SignIn_jsx("img", {
      src: logo_2_default.a
    })), SignIn_jsx("a", {
      onClick: e => {
        e.preventDefault();
        Object(lib_switch["d" /* switchLang */])(props.loc, true);
      },
      className: "auth__lang-slt",
      href: "#"
    }, SignIn_jsx(external_react_localize_redux_["Translate"], {
      id: "lang"
    })), props.isDesktop ? SignIn_jsx(external_react_default.a.Fragment, null, SignIn_jsx("h4", {
      className: "auth__header"
    }, SignIn_jsx(external_react_localize_redux_["Translate"], {
      id: "welcome"
    })), SignIn_jsx("h4", {
      className: "auth__header-sub"
    }, SignIn_jsx(external_react_localize_redux_["Translate"], {
      id: "signIn"
    }))) : SignIn_jsx("h4", {
      className: "auth__header-sub-mobile"
    }, SignIn_jsx(external_react_localize_redux_["Translate"], {
      id: "signIn-mobile"
    })), SignIn_jsx("form", {
      onSubmit: handleSubmit
    }, SignIn_jsx("div", {
      className: "auth__form auth__form--login"
    }, SignIn_jsx("label", {
      className: "auth__form-label"
    }, SignIn_jsx("span", {
      className: "auth__input-label"
    }, SignIn_jsx(external_react_localize_redux_["Translate"], {
      id: "email"
    })), SignIn_jsx("input", {
      className: "auth__input",
      type: "email",
      placeholder: translate("email-placeholder"),
      onChange: event => {
        setEmail(event.target.value);
      },
      value: email,
      name: "email",
      required: true,
      onBlur: e => {
        Object(formValidator["c" /* validateEmail */])({
          name: "email",
          value: e.target.value,
          handler: setErrors,
          lang
        });
      },
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
    }), SignIn_jsx(common["k" /* FormErrorMsg */], {
      show: errors["email"],
      msg: errors["email"]
    })), SignIn_jsx("label", {
      className: "auth__form-label"
    }, SignIn_jsx("span", {
      className: "auth__input-label"
    }, SignIn_jsx(external_react_localize_redux_["Translate"], {
      id: "Password"
    })), SignIn_jsx("input", {
      className: "auth__input",
      type: "password",
      placeholder: translate("pass-placeholder"),
      onBlur: e => {
        Object(formValidator["e" /* validatePassword */])({
          name: "password",
          value: e.target.value,
          handler: setErrors,
          lang
        });
      },
      onChange: event => {
        setPassword(event.target.value);
      },
      value: password,
      name: "password",
      required: true
    }), SignIn_jsx(common["k" /* FormErrorMsg */], {
      show: errors["password"],
      msg: errors["password"]
    }))), SignIn_jsx("div", {
      className: "auth__captcha-cnt"
    }, SignIn_jsx(external_react_google_recaptcha_default.a // size="compact"
    , {
      sitekey: "6Lfh-usZAAAAAP3ZYWqEZ4hmjWOi_GA606Ho19aW",
      onChange: token => {
        setcaptchaToken(token);
      },
      ref: e => setcaptchaRef(e)
    }), captchaErrors ? SignIn_jsx(common["k" /* FormErrorMsg */], {
      show: true,
      msg: "please set captcha"
    }) : null), SignIn_jsx("div", {
      className: "auth__btn"
    }, SignIn_jsx(common["f" /* Button */], {
      radius: "true",
      value: LoginStatus ? SignIn_jsx(common["s" /* Loading */], {
        type: "white",
        width: "20px",
        height: "20px"
      }) : SignIn_jsx(external_react_localize_redux_["Translate"], {
        id: "login"
      })
    })), SignIn_jsx("a", {
      onClick: e => {
        e.preventDefault();
        dispatch({
          type: ENTER_EMAIL
        });
      },
      href: "#",
      className: "auth__forget"
    }, SignIn_jsx(external_react_localize_redux_["Translate"], {
      id: "forget"
    })), SignIn_jsx("div", {
      className: "auth__footer-mobile"
    }, SignIn_jsx("h4", {
      className: "auth__header-sub mt-5"
    }, SignIn_jsx(external_react_localize_redux_["Translate"], {
      id: "new"
    })), SignIn_jsx("h4", {
      className: "auth__header mt-3"
    }, SignIn_jsx(external_react_localize_redux_["Translate"], {
      id: "sign-dis"
    })), SignIn_jsx("a", {
      onClick: props.clickSignUp,
      className: "auth__forget"
    }, SignIn_jsx(external_react_localize_redux_["Translate"], {
      id: "signUp3"
    })))), SignIn_jsx("div", {
      className: "auth__google-btn"
    }, SignIn_jsx(external_react_google_login_default.a, {
      disabled: LoginStatus,
      clientId: "707073687324-c44nvrraumudkb2grhetq6plek6p3be3.apps.googleusercontent.com",
      onSuccess: res => {
        onResponse(res, GOOGLE);
      }
    })), SignIn_jsx("div", {
      className: "auth__facebook-btn"
    }, SignIn_jsx(external_react_facebook_login_default.a, {
      appId: "922251614848224",
      fields: "name,email,picture" // onClick={componentClicked}
      // cssClass="my-facebook-button-class"
      ,
      icon: "fa-facebook",
      size: "small",
      isDisabled: LoginStatus,
      callback: res => {
        onResponse(res, FACEBOOK);
      },
      textButton: "Sign in with Facebook"
    })));
  })));
});
// CONCATENATED MODULE: ./components/app/pages/Auth/SignIn/index.js

// EXTERNAL MODULE: ./lib/isRtl.js
var isRtl = __webpack_require__("gtw1");

// CONCATENATED MODULE: ./components/app/pages/Auth/Auth.jsx
var Auth_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import "./Auth.scss";
// import "./Auth-rtl.scss";











class Auth_Auth extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "clickHandler", () => {
      this.conRef.current.classList.toggle("s--signup");
    });

    this.is_signup = this.props.router.query.signup != undefined;
    this.is_rtl = Object(isRtl["a" /* isRtl */])(this.props.lang);
    this.conRef = /*#__PURE__*/external_react_default.a.createRef();
    this.leftForm = this.is_rtl ? Auth_jsx(SignIn, {
      loc: this.props.loc,
      isDesktop: this.props.isDesktop,
      clickSignUp: this.clickHandler
    }) : Auth_jsx(SignUp, {
      loc: this.props.loc,
      isDesktop: this.props.isDesktop,
      clickSignUp: this.clickHandler
    });
    this.righForm = this.is_rtl ? Auth_jsx(SignUp, {
      loc: this.props.loc,
      clickSignUp: this.clickHandler,
      isDesktop: this.props.isDesktop
    }) : Auth_jsx(SignIn, {
      loc: this.props.loc,
      clickSignUp: this.clickHandler,
      isDesktop: this.props.isDesktop
    });
  }

  render() {
    const backImage = this.props.data.backgroundImage ? `${"http://ajyal.webtreeonline.com/Uploads/Images/Logo"}/${this.props.data.backgroundImage}` : `/assets/imgs/login.jpg`;
    return Auth_jsx("section", {
      className: "auth"
    }, Auth_jsx(external_react_toastify_["ToastContainer"], _extends({
      rtl: this.is_rtl
    }, Object(toast["a" /* getToastConfig */])())), Auth_jsx("div", {
      className: `cont ${this.is_signup ? "s--signup" : ""}`,
      ref: this.conRef
    }, this.leftForm, Auth_jsx("div", {
      className: "sub-cont"
    }, Auth_jsx("style", null, `.img-auth-logo::before{
                    background-image: url("${backImage}")!important;
                `), Auth_jsx("div", {
      className: "img img-auth-logo"
    }, Auth_jsx("a", {
      href: "/",
      className: "auth__logo"
    }, Auth_jsx("img", {
      src: `${"http://ajyal.webtreeonline.com/Uploads/Images/Logo"}/${this.props.data.logo}`
    })), Auth_jsx("div", {
      className: "img__text m--up"
    }, Auth_jsx("h3", {
      className: "auth__up-header"
    }, Auth_jsx(external_react_localize_redux_["Translate"], {
      id: "new"
    })), Auth_jsx("p", {
      className: "auth__up-p"
    }, Auth_jsx(external_react_localize_redux_["Translate"], {
      id: "sign-dis"
    }))), Auth_jsx("div", {
      className: "img__text m--in"
    }, Auth_jsx("h3", {
      className: "auth__up-header"
    }, Auth_jsx(external_react_localize_redux_["Translate"], {
      id: "acc-have"
    })), Auth_jsx("p", {
      className: "auth__up-p"
    }, Auth_jsx(external_react_localize_redux_["Translate"], {
      id: "login2"
    }))), Auth_jsx("div", {
      onClick: this.clickHandler,
      className: "img__btn"
    }, Auth_jsx("span", {
      className: "m--up"
    }, Auth_jsx(external_react_localize_redux_["Translate"], {
      id: "signUp3"
    })), Auth_jsx("span", {
      className: "m--in"
    }, Auth_jsx(external_react_localize_redux_["Translate"], {
      id: "signIn3"
    })))), this.righForm)));
  }

}

const mapStateToProps = state => {
  return {
    isLogin: Object(appConfigSlice["i" /* selectLogin */])(state).isLogin,
    lang: Object(appConfigSlice["h" /* selectLang */])(state),
    cur: Object(appConfigSlice["g" /* selectCurr */])(state)
  };
};

/* harmony default export */ var pages_Auth_Auth = (Object(external_react_redux_["connect"])(mapStateToProps)(Object(router_["withRouter"])(Auth_Auth)));
// CONCATENATED MODULE: ./components/app/pages/Auth/index.js

/* harmony default export */ var pages_Auth = (pages_Auth_Auth);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: ./lib/isServer.js
var isServer = __webpack_require__("zo9w");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next-useragent"
var external_next_useragent_ = __webpack_require__("W0sL");

// CONCATENATED MODULE: ./pages/[lang-curr]/Auth/index.jsx
var _lang_curr_Auth_jsx = external_react_default.a.createElement;














class Auth_AuthPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    if (!Object(isServer["a" /* isServer */])()) {
      this.redirect = false;
      const token = external_js_cookie_default.a.get("ajyal_crd");

      if (token) {
        this.props.router.push(`/${this.props.curr}-${this.props.lang}/panel/profile`);
        this.redirect = true;
      }
    }
  }

  render() {
    if (this.redirect) {
      return _lang_curr_Auth_jsx("p", null, "Redirecting...");
    }

    return _lang_curr_Auth_jsx(external_react_default.a.Fragment, null, _lang_curr_Auth_jsx(external_react_localize_redux_["LocalizeProvider"], {
      initialize: Object(payload["b" /* translationsPayload */])(auth_translations, this.props.lang)
    }, _lang_curr_Auth_jsx(external_react_localize_redux_["Translate"], null, ({
      translate: t
    }) => {
      return _lang_curr_Auth_jsx(head_default.a, null, _lang_curr_Auth_jsx("title", null, t("@authtitle")));
    }), _lang_curr_Auth_jsx(pages_Auth, {
      lang: this.props.lang,
      loc: this.props.router.asPath,
      data: this.props.data,
      isDesktop: this.props.ua.isDesktop
    })));
  }

}

const Auth_mapStateToProps = state => {
  return {};
};

/* harmony default export */ var _lang_curr_Auth = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(Auth_mapStateToProps)(Object(router_["withRouter"])(Auth_AuthPage)));
const getServerSideProps = store["a" /* wrapper */].getServerSideProps(async context => {
  const Result = await Promise.all([Object(clientCustomer["a" /* client_authDetials */])()]);
  const ua = Object(external_next_useragent_["useUserAgent"])(context.req.headers["user-agent"]);
  return {
    props: {
      ua,
      data: Result[0].result
    }
  };
}); // export const getStaticProps = wrapper.getStaticProps(
//   async ({ params, store }) => {
//     const lang = detectLang(params["lang-curr"]);
//     const curr = detectCurrency(params["lang-curr"]);
//     store.dispatch(updateLang(lang));
//     store.dispatch(updateCurrency(curr));
//     axiosClient.setLangAndCurrency(lang, curr);
//     return {
//       props: { lang, curr },
//     };
//   }
// );
// export async function getStaticPaths() {
//   return {
//     paths: [...langUsdParams],
//     fallback: false, // See the "fallback" section below
//   };
// }

/***/ }),

/***/ "1tXf":
/***/ (function(module, exports) {

module.exports = require("rc-progress");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2A/y":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/header-help-7317c8eb32c63b2bc0dabf6a508c008a.svg";

/***/ }),

/***/ "2C5Q":
/***/ (function(module, exports) {

module.exports = require("google-libphonenumber");

/***/ }),

/***/ "2TGm":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-bst-c4545f7f6db078f5ba4a076519a416f3.svg";

/***/ }),

/***/ "3L5Z":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/correct-492fe2ba640f48b4723af332df3aad5d.svg";

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "42Y9":
/***/ (function(module, exports) {

module.exports = require("react-facebook-login");

/***/ }),

/***/ "4DCN":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4Tx6":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJyYWRpb19idXR0b25fb2ZmIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGRhdGEtbmFtZT0icmFkaW8gYnV0dG9uIG9mZiIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICA8cGF0aCBpZD0iU3VidHJhY3Rpb25fMSIgZmlsbD0iI2UyZTJlMiIgZD0iTTEyIDI0YTEyIDEyIDAgMSAxIDEyLTEyIDEyLjAxNCAxMi4wMTQgMCAwIDEtMTIgMTJ6bTAtMjAuMzUyQTguMzUyIDguMzUyIDAgMSAwIDIwLjM1MSAxMiA4LjM2MiA4LjM2MiAwIDAgMCAxMiAzLjY0OHoiIGRhdGEtbmFtZT0iU3VidHJhY3Rpb24gMSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "4XW2":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/confirmed-c72ff26cb835bf8207dda845aa8330e1.svg";

/***/ }),

/***/ "4dkq":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-open-menu-a31302132ffb1ad0d2b5cc87c55570c2.svg";

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

/***/ "4muE":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-loader-ora-01ac714fbb271b71733fb81f9cea6c8b.svg";

/***/ }),

/***/ "4oW3":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/menu - Preference-bfac52b8aa28692ada1a53dd635ee6bb.svg";

/***/ }),

/***/ "50fw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_localize_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tepj");
/* harmony import */ var react_localize_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_verification_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KGsa");
/* harmony import */ var react_verification_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_verification_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("lCwK");
/* harmony import */ var _ShippingAddressConstant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uaeF");
/* harmony import */ var _Responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("jxY/");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2C5Q");
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(google_libphonenumber__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("FWZJ");
/* harmony import */ var _lib_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("C5tE");
/* harmony import */ var _appConfigSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("o2tl");
/* harmony import */ var _lib_api_client_clientCommon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("hK2O");
/* harmony import */ var react_compound_timer_build__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("5w86");
/* harmony import */ var react_compound_timer_build__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_compound_timer_build__WEBPACK_IMPORTED_MODULE_13__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const COUNT = 4;

const VerifyPhone = ({
  handleSituation,
  currdata,
  setData
}) => {
  const lang = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(_appConfigSlice__WEBPACK_IMPORTED_MODULE_11__[/* selectLang */ "h"]);
  const curr = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(_appConfigSlice__WEBPACK_IMPORTED_MODULE_11__[/* selectCurr */ "g"]);
  const PNF = google_libphonenumber__WEBPACK_IMPORTED_MODULE_7__["PhoneNumberFormat"];
  const phoneUtil = google_libphonenumber__WEBPACK_IMPORTED_MODULE_7__["PhoneNumberUtil"].getInstance();
  const phone = currdata.phoneCode + currdata.mobileNumber;
  const number = phoneUtil.parseAndKeepRawInput(phone, currdata.iso);
  let can_send_new_email = false;

  const handleclick = () => {
    handleSituation(_ShippingAddressConstant__WEBPACK_IMPORTED_MODULE_4__[/* CHANGE_PHONE */ "a"]);
  };

  const {
    0: code,
    1: setCode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const handleCode = ref => {
    setCode(ref.target.value);
  };

  const {
    0: submitLoading,
    1: setSubmitLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleSubmit = async () => {
    if (submitLoading) return;

    if (code.length < COUNT) {
      react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"].error(Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_9__[/* getErrorMsg */ "c"])(lang, "code-is-not-valid"), Object(_lib_toast__WEBPACK_IMPORTED_MODULE_10__[/* getToastConfig */ "a"])());
      return;
    }

    setSubmitLoading(true);

    try {
      const result = await Object(_lib_api_client_clientCommon__WEBPACK_IMPORTED_MODULE_12__[/* client_verifyAddressPhone */ "h"])({
        addressId: currdata.addressId,
        code,
        requestId: currdata.requestId
      });

      if (result.status == 200) {
        // TODO
        handleSituation(_ShippingAddressConstant__WEBPACK_IMPORTED_MODULE_4__[/* COMPLETE */ "b"]);
      }
    } catch (err) {
      var _err$response$data, _err$response$data$re;

      const text = (_err$response$data = err.response.data) === null || _err$response$data === void 0 ? void 0 : (_err$response$data$re = _err$response$data.result) === null || _err$response$data$re === void 0 ? void 0 : _err$response$data$re.errorText;
      react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"].error(text || err.response.data.message, Object(_lib_toast__WEBPACK_IMPORTED_MODULE_10__[/* getToastConfig */ "a"])());
      setSubmitLoading(false);
    }
  };

  const handleResendMessage = async resetTimer => {
    try {
      const res = await Object(_lib_api_client_clientCommon__WEBPACK_IMPORTED_MODULE_12__[/* client_changeMobileNumber */ "e"])({
        mobileNumber: currdata.mobileNumber,
        addressId: currdata.addressId
      });
      setData({
        requestId: res.result.requestId
      });
      can_send_new_email = false;
      resetTimer();
    } catch (err) {
      react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"].error(err.response.data.message, Object(_lib_toast__WEBPACK_IMPORTED_MODULE_10__[/* getToastConfig */ "a"])());
      can_send_new_email = true;
    }
  };

  return __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], null, ({
    translate: t
  }) => {
    return __jsx(_common__WEBPACK_IMPORTED_MODULE_3__[/* BoxStyle2 */ "c"], {
      className: "orderaddress__verify-phone p-5"
    }, __jsx("section", {
      className: "add-address-step2"
    }, __jsx("div", {
      className: "add-address-step2__col"
    }, __jsx("p", {
      className: "add-address-step2__p1 text-align-center"
    }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], {
      id: "common.addressform.verify"
    })), __jsx("p", {
      className: "add-address-step2__p2 text-align-center"
    }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], {
      id: "common.addressform.verify-des"
    })), __jsx("p", {
      className: "add-address-step2__phone text-align-center"
    }, phoneUtil.format(number, PNF.INTERNATIONAL)), __jsx("a", {
      onClick: handleclick,
      className: "add-address-step2__link primary-link"
    }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], {
      id: "common.addressform.changephone"
    })), __jsx("div", {
      className: "add-address-step2__verification-container"
    }, __jsx(react_verification_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
      inputField: {
        onChange: handleCode
      },
      length: COUNT,
      placeholder: ""
    })), __jsx(_Responsive__WEBPACK_IMPORTED_MODULE_5__[/* ProtraitPhonesAndBigger */ "f"], null, __jsx("button", {
      onClick: handleSubmit,
      className: "primary-btn add-address-step2__btn"
    }, submitLoading ? __jsx(_common__WEBPACK_IMPORTED_MODULE_3__[/* Loading */ "s"], {
      type: "white",
      width: "20px",
      height: "20px"
    }) : __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], {
      id: "common.addressform.changephone-btn"
    })))), __jsx("div", {
      className: "add-address-step2__col mt-4"
    }, __jsx(react_compound_timer_build__WEBPACK_IMPORTED_MODULE_13___default.a, {
      initialTime: 300000,
      direction: "backward"
    }, ({
      start,
      reset,
      getTime
    }) => {
      if (getTime() <= 0) {
        can_send_new_email = true;
      }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
        className: "add-address-step2__opt"
      }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], {
        id: "common.addressform.dontreceive"
      })), "\xA0\xA0", __jsx("span", {
        className: "timer__count ml-3 mr-3"
      }, __jsx(react_compound_timer_build__WEBPACK_IMPORTED_MODULE_13___default.a.Minutes, null), " : ", __jsx(react_compound_timer_build__WEBPACK_IMPORTED_MODULE_13___default.a.Seconds, null)), __jsx("a", {
        onClick: e => {
          e.preventDefault();
          if (!can_send_new_email) return;
          handleResendMessage(() => {
            reset();
            start();
          });
        },
        className: "add-address-step2__link primary-link"
      }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], {
        id: "common.addressform.resendnow"
      })));
    })), __jsx(_Responsive__WEBPACK_IMPORTED_MODULE_5__[/* ProtraitPhones */ "e"], null, __jsx("div", {
      className: "checkout-fix justify-content-center"
    }, __jsx("button", {
      onClick: handleSubmit,
      className: "primary-btn returns__add-btn"
    }, submitLoading ? __jsx(_common__WEBPACK_IMPORTED_MODULE_3__[/* Loading */ "s"], {
      type: "white",
      width: "20px",
      height: "20px"
    }) : __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], {
      id: "common.addressform.changephone-btn"
    }))))));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (VerifyPhone);

/***/ }),

/***/ "5U/F":
/***/ (function(module, exports) {

module.exports = require("react-input-range");

/***/ }),

/***/ "5w86":
/***/ (function(module, exports) {

module.exports = require("react-compound-timer/build");

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

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7ITC":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "7k10":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5U/F");
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_input_range__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import "./RangeBox.scss";
// import "./RangeBox-rtl.scss";

/* harmony default export */ __webpack_exports__["a"] = (class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleRangeBoxChange", value => {
      this.setState({
        value
      });
      this.props.onChange && this.props.onChange(value);
    });

    this.state = {
      value: {
        min: this.props.min,
        max: this.props.max
      }
    };
  }

  render() {
    return __jsx("div", {
      className: "rangeBox"
    }, this.props.show ? __jsx("div", {
      className: "rangeBox__input-container"
    }, __jsx("input", {
      className: "rangeBox__input",
      type: "number",
      minValue: 0,
      value: this.state.value.min,
      onChange: event => {
        const value = event.target.value;
        this.setState(prevstate => {
          return {
            value: {
              min: value,
              max: prevstate.value.max
            }
          };
        });
      }
    }), __jsx("span", {
      className: "rangeBox__to"
    }, "to"), __jsx("input", {
      className: "rangeBox__input",
      type: "number",
      maxValue: this.props.max,
      value: this.state.value.max,
      onChange: event => {
        const value = event.target.value;
        this.setState(state => {
          return {
            value: {
              min: state.value.min,
              max: value
            }
          };
        });
      }
    }), __jsx("a", {
      className: "rangeBox__set",
      href: "#",
      onClick: e => {
        e.preventDefault();
        this.props.onSet(this.state.value);
      }
    }, this.props.setText)) : null);
  }

});

/***/ }),

/***/ "8BCV":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/menu - return-721086bb79f9e8f6af164fec6de4f8e4.svg";

/***/ }),

/***/ "8tkK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loading_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Pejl");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const GoodItemNavigation = () => {
  return __jsx("div", {
    className: "goodItem-navi-loaing d-flex flex-column align-items-center justify-content-center"
  }, __jsx(_Loading_Loading__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    type: "gray",
    width: "60px",
    height: "60px"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (GoodItemNavigation);

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

/***/ "BgOU":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/express-ar-e5edb31df64d3b4280d3aa07e8b6cd01.png";

/***/ }),

/***/ "BtzS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_search_gray_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dzZG");
/* harmony import */ var _assets_icons_search_gray_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_search_gray_svg__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import "./CheckBoxList.scss";
// import "./CheckBoxList-rtl.scss";

/* harmony default export */ __webpack_exports__["a"] = (({
  data = [],
  itemClass,
  listClass,
  search,
  placeholder,
  dataName,
  dataValue,
  singleSelect = false,
  onSelect = () => {},
  initialSelectIdArr = []
}) => {
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: checkedIds,
    1: setCheckedIds
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const gen = {};

    for (let id of initialSelectIdArr) {
      gen[id] = {
        value: data[dataValue],
        checked: true
      };
    }

    setCheckedIds(gen);
  }, [initialSelectIdArr[0]]);

  const handleCheckChange = event => {
    if (singleSelect) {
      const newState = {
        [event.target.value]: {
          value: event.target.value,
          checked: event.target.checked
        }
      };
      setCheckedIds(newState);
      createSelectedArrayValue(newState);
    } else {
      const newState = _objectSpread(_objectSpread({}, checkedIds), {}, {
        [event.target.value]: {
          value: event.target.value,
          checked: event.target.checked
        }
      });

      setCheckedIds(newState);
      createSelectedArrayValue(newState);
    }
  };

  const createSelectedArrayValue = checkedList => {
    const arr = [];

    for (let key in checkedList) {
      if (checkedList[key].checked) arr.push(key);
    }

    onSelect(arr);
  }; //const placeholder = <Placeholder />;


  const handleChange = e => {
    setSearchText(e.target.value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, search && __jsx("div", {
    className: "checklist__search"
  }, __jsx(_assets_icons_search_gray_svg__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "checklist__search-input-icon"
  }), __jsx("input", {
    onChange: handleChange,
    type: "text",
    value: searchText,
    className: "checklist__search-input",
    placeholder: placeholder
  })), __jsx("ul", {
    className: `checklist ${listClass}`
  }, data.map((item, index) => {
    return (searchText && item.includes(searchText) || !searchText) && __jsx("label", {
      key: index,
      className: "checklist__label"
    }, __jsx("li", {
      className: `${itemClass}`
    }, __jsx("input", {
      className: "checklist__check",
      type: "checkbox",
      name: item[dataName],
      value: item[dataValue],
      checked: checkedIds[item[dataValue]] ? checkedIds[item[dataValue]].checked : false,
      onChange: handleCheckChange
    }), __jsx("span", null, item[dataName])));
  })));
});

/***/ }),

/***/ "C5tE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getToastConfig; });
/* harmony import */ var _isRtl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("gtw1");

const getToastConfig = () => {
  return {
    position: "top-right",
    autoClose: 10000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  };
};

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

/***/ "DrLl":
/***/ (function(module) {

module.exports = JSON.parse("{\"refund-saved\":[\"refund saved successfully\",\"تم حفظ المبلغ المسترد بنجاح\",\"با موفقیت ذخیره شد\"],\"select-Item\":[\"please select an item first\",\"الرجاء تحديد عنصر أولا\",\"ابندا یک گزینه را انتخاب کنید\"],\"verify-mobile\":[\"you must verify your mobile number first\",\"يجب عليك التحقق من رقم هاتفك المحمول أولاً\",\"شما ابتدا باید شماره موبایل خود را تایید کنید\"],\"verification-succes\":[\"email verified successfully\",\"تم التحقق من البريد الإلكتروني بنجاح\",\"ایمیل شما با موفقیت تایید شد\"],\"verification-error\":[\"verification code is not correct!\",\"رمز التحقق غير صحيح\",\"کد وارد شده نامعتبر است\"],\"phone-not-valid\":[\"your phone number is not valid\",\"رقم الهاتف غير صالح\",\"شماره وارد شده صحیح نیست\"],\"phone-not-match-country\":[\"phone number is not valid for the selected region\",\"رقم الهاتف غير صالح للمنطقة المحددة\",\"شماره وارد شده با کشور انتخاب شده تطابق ندارد\"],\"select-region-first\":[\"please select a country first\",\"الرجاء تحديد البلد أولا\",\"ابتدا یک کشور را انتخاب کنید\"],\"code-is-not-valid\":[\"entered code is not valid\",\"الرمز الذي تم إدخاله غير صالح\",\"کد وارد شده صحیح نیست\"],\"email-not-valid\":[\"your email address is not valid\",\"عنوان البريد الإلكتروني غير صالح\",\"آدرس ایمیل موجود نمی باشد\"],\"pass-not-valid\":[\"your password must be at least 6 characters\",\"يجب أن تتكون كلمة المرور من 6 أحرف على الأقل\",\"کلمه عبور حداقل باید 6 کاراکتر باشد\"],\"confirm-pass\":[\"your passwords are not equals\",\"كلمة المرور ليست متشابهة\",\"کلمه عبور شما برابر نیست\"],\"empty-filed\":[\"this field must not be empty\",\"هذا الحقل مطلوب\",\"این گزینه نمی تواند خالی باشد\"],\"error-detected\":[\"There are items that require your attention\",\"هناك عناصر تتطلب انتباهك\",\"مطالبی می باشد که باید به آنها توجه کنید\"],\"succ-regitered\":[\"you have successfully registered\",\"تم التسجيل بنجاح\",\"ثبت نام شما با موفقیت انجام شد\"],\"succ-login\":[\"you have successfully logged in\",\"تم تسجيل الدخول بنجاح\",\"ورود شما با موفقیت انجام شد\"],\"succ-update-profile\":[\"you successfully edit your profile\",\"تم تحرير ملف التعريف بنجاح\",\"ویرایش پروفایل شما با موفقیت انجام شد\"],\"succ-update-password\":[\"you successfully change your password\",\"تم تغيير كلمة المرور بنجاح\",\"تغییر کلمه عبور شما با موفقیت انجام شد\"],\"confirm-address-delete\":[\"are you sure to delete this address\",\"هل أنت متأكد من حذف العنوان\",\"آیا مطمعن هستید که آدرس را حذف کنید؟\"],\"select-address\":[\"please select an address first\",\"الرجاء تحديد عنوان أولا\",\"لطفاً اول آدرس را انتخاب نمایید\"],\"select-payment\":[\"please select a payment method first\",\"الرجاء تحديد طريقة الدفع أولاً\",\"ابتدا روش پرداخت خود را انتخاب کنید\"],\"return-req\":[\"Request sended successfully\",\"تم ارسال الطلب بنجاح\",\"درخواست ارسال دوباره با موفقیت انجام شد\"],\"success-add-address\":[\"The address successfuly added\",\"تم إضافة العنوان بنجاح\",\"ادرس با موفقیت اضافه شد\"],\"success-update-address\":[\"The address successfully updated\",\"تم تحديث العنوان بنجاح\",\"ادرس با موفقیت بروز شد\"],\"success-delete-address\":[\"The address successfully deleted\",\"تم حذف العنوان بنجاح\",\"ادرس با موفقیت حذف شد\"],\"country-add-address\":[\"The address you selected is not in our list of active countries\",\"العنوان الذي حددته غير موجود في قائمة البلدان النشطة لدينا\",\"ادرس انتخاب شده توسط شما در لیست کشور های فعال ما قرار ندارد\"],\"error-city-create-shop\":[\"The selected country must be the same as the city you selected in step two\",\"يجب أن تكون الدولة المحددة هي نفس الدولة التي حددتها في الخطوة الثانية\",\"کشور انتخاب شده باید همان کشوری باشد که در مرحله دو انتخاب کرده اید\"],\"postal-code-filed\":[\"Enter valid Postal Code!\",\"أدخل رمزًا بريديًا صالحًا!\",\"کد پستی معتبر وارد کنید\"],\"pass-not-valid-create-shop\":[\"your password must be at least 8 characters\",\"يجب أن تتكون كلمة مرورك من 8 أحرف على الأقل\",\"رمز عبور حداقل باید 8 کاراکتر باشد\"],\"error-create-shop\":[\"Registration error occurred. Please try again\",\"حدث خطأ في التسجيل. حاول مرة اخرى\",\"خطایی در ثبت نام رخ داده است لطفا یکبار دیگر امتحان کنید\"],\"credi-card-filed\":[\"Enter valid CreditCard Number!\",\"أدخل رقم بطاقة ائتمان صالح!\",\"شماره کارت معتبر وارد کنید\"],\"reason-error\":[\"Select a reason is required\",\"تحديد سبب مطلوب\",\"انتخاب دلیل الزامی است\"]}");

/***/ }),

/***/ "E4SY":
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "EGWi":
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "ELs5":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shipped-b0f867eec8891238fdec0eb1e07b3a12.svg";

/***/ }),

/***/ "EsFC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return client_registerCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return client_verifyCustomerMobileNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return client_resendVerifyMobileNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return client_loginCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return client_authDetials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return client_loginWithSocial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return client_sendForgetEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return client_verifyForgetEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return client_changeForgetPass; });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BfmP");

const client_registerCustomer = async ({
  email,
  pass,
  name,
  family,
  captchaToken,
  mobileNumber,
  countryId,
  phoneCode,
  smsCode,
  requestId
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.post(`/Auth/CustomerRegister`, {
    userName: email,
    password: pass,
    name: name,
    family: family,
    captchaToken: captchaToken,
    mobileNumber: mobileNumber,
    countryId: countryId,
    phoneCode: phoneCode,
    VerfiyCode: smsCode,
    RequestId: requestId
  });
  return result.data;
};
const client_verifyCustomerMobileNumber = async ({
  captchaToken,
  mobileNumber,
  email
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.post(`/Auth/SendVerifyMobileNumberCustomer`, {
    captchaToken: captchaToken,
    mobileNumber: mobileNumber,
    email: email
  });
  return result.data;
};
const client_resendVerifyMobileNumber = async ({
  mobileNumber
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.post(`/Auth/ResendVerifyMobileNumber`, {
    mobileNumber: mobileNumber
  });
  return result.data;
};
const client_loginCustomer = async ({
  email,
  pass,
  captchaToken
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.post(`/Auth/CustomerLogin`, {
    userName: email,
    password: pass,
    captchaToken: captchaToken
  });
  return result.data;
};
const client_authDetials = async () => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Auth/GetWebSiteAuthDetials`);
  return result.data;
};
const client_loginWithSocial = async ({
  accessToken,
  socialType
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.post(`/Auth/CustomerRegisterGoogleFacebook`, {
    AccessToken: accessToken,
    SocialType: socialType
  });
  return result.data;
};
const client_sendForgetEmail = async ({
  email
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Auth/SendEmailForgetPassword`, {
    params: {
      email
    }
  });
  return result.data;
};
const client_verifyForgetEmail = async ({
  email,
  code
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/Auth/VerifyCodeEmail`, {
    params: {
      email,
      code
    }
  });
  return result.data;
};
const client_changeForgetPass = async ({
  pass,
  email
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.put(`/Auth/ChangeCustomerEmailForgetPass`, {
    newPassword: pass,
    userName: email
  });
  return result.data;
};

/***/ }),

/***/ "FWZJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return generateArrNumberRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isAr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getErrorMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return setTokenCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return setCartCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return slugy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return removeTokenCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeCartCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return setCouponCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return removeCouponCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return trimText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return roundDecimalNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return trimTextLonger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatMoney; });
/* harmony import */ var _langRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4jN0");
/* harmony import */ var _translations_errors_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DrLl");
var _translations_errors_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("DrLl", 1);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BfmP");




const generateArrNumberRange = (from, to) => {
  const arr = [];
  from = parseInt(from);
  to = parseInt(to);
  if (to > 10) to = 10;

  for (let i = from; i <= to; i++) {
    arr.push(i);
  }

  return arr;
};
const isAr = code => {
  if (code === _langRoutes__WEBPACK_IMPORTED_MODULE_0__[/* possibleLangAndCur */ "e"].langs.arabic.code) return true;
  return false;
};
const getErrorMsg = (lang, id) => {
  let langId = 0;

  if (_langRoutes__WEBPACK_IMPORTED_MODULE_0__[/* possibleLangAndCur */ "e"].langs.arabic.code === lang) {
    langId = 1;
  }

  return _translations_errors_json__WEBPACK_IMPORTED_MODULE_1__[id][langId];
};
const setTokenCookie = (token, name = "ajyal_crd") => {
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(name, token, {
    expires: parseInt("7"),
    domain: "ajyal.bh"
  });
};
const setCartCookie = (id, name = "ajyal_cart") => {
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(name, id, {
    expires: parseInt("30"),
    domain: "ajyal.bh"
  });
};
const slugy = str => {
  if (str) str = str.replace(/\s+/g, "-").toLowerCase();
  return str;
};
const removeTokenCookie = () => {
  const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("ajyal_crd");

  if (token) {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove("ajyal_crd", {
      domain: "ajyal.bh"
    });
    _api_axios__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].setToken(null);
  }
};
const removeCartCookie = () => {
  const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("ajyal_cart");

  if (token) {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove("ajyal_cart", {
      domain: "ajyal.bh"
    });
    _api_axios__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].setCartId(null);
  }
};
const setCouponCookie = (token, name = "ajyal_coupon") => {
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(name, token, {
    expires: parseInt("1"),
    domain: "ajyal.bh"
  });
};
const removeCouponCookie = () => {
  const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("ajyal_coupon");

  if (token) {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove("ajyal_coupon", {
      domain: "ajyal.bh"
    });
  }
};
const trimText = (text, maxLenght = 55) => {
  if (!text || text.length === 0) return "";
  let newText = text;

  if (text.length > maxLenght) {
    newText = text.substring(0, maxLenght) + "...";
  }

  return newText;
};
const roundDecimalNumber = number => {
  if (number == 0) return 0;

  if (number < 10) {
    if (number < 5) {
      return number;
    } else {
      return 5;
    }
  }

  if (number < 100) {
    let tempNumber = number / 10;
    tempNumber = parseInt(tempNumber);
    tempNumber = tempNumber * 10;
    return tempNumber;
  }

  if (number < 1000) {
    let tempNumber = number / 100;
    tempNumber = parseInt(tempNumber);
    tempNumber = tempNumber * 100;
    return tempNumber;
  }

  if (number < 10000) {
    let tempNumber = number / 100;
    tempNumber = parseInt(tempNumber);
    tempNumber = tempNumber * 100;
    return tempNumber;
  }

  if (number < 100000) {
    let tempNumber = number / 100;
    tempNumber = parseInt(tempNumber);
    tempNumber = tempNumber * 100;
    return tempNumber;
  }

  if (number < 1000000) {
    let tempNumber = number / 1000;
    tempNumber = parseInt(tempNumber);
    tempNumber = tempNumber * 1000;
    return tempNumber;
  }

  if (number < 1000000) {
    let tempNumber = number / 1000;
    tempNumber = parseInt(tempNumber);
    tempNumber = tempNumber * 1000;
    return tempNumber;
  }

  return number;
};
const trimTextLonger = text => {
  if (!text || text.length === 0) return "";
  let newText = text;

  if (text.length > 60) {
    newText = text.substring(0, 60) + "...";
  }

  return newText;
};
const formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    const negativeSign = amount < 0 ? "-" : "";
    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = i.length > 3 ? i.length % 3 : 0;
    return negativeSign + (j ? i.substr(0, j) + thousands : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e);
  }
};

/***/ }),

/***/ "G7fd":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-point-8bae4fd9afec1c487fb4ad6b2dccf78f.svg";

/***/ }),

/***/ "J46/":
/***/ (function(module, exports) {

module.exports = require("react-slidedown");

/***/ }),

/***/ "J50Q":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/menu - credit-3bbf79739b42dd2ea769762aeaf33897.svg";

/***/ }),

/***/ "JJGT":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/faild-61995b576bbebee8aba18fb2550fac47.svg";

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "K+uJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const item = probs => __jsx("div", {
  href: "",
  className: "nav__link " + (probs.isCategory ? "nav__link--first" : "")
}, probs.icon, __jsx("span", {
  className: "nav__link-text " + (probs.isCategory ? "nav__link-text--margin" : "mx-3")
}, probs.content), probs.downIcon);

/* harmony default export */ __webpack_exports__["a"] = (item);

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KGsa":
/***/ (function(module, exports) {

module.exports = require("react-verification-input");

/***/ }),

/***/ "KO14":
/***/ (function(module, exports) {



/***/ }),

/***/ "KmJH":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-good-Item-call-e733fafe8f793f8059e74efc321c5cac.svg";

/***/ }),

/***/ "LEBW":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension/developmentOnly");

/***/ }),

/***/ "MF5A":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/header-store-32eff875fd8bb4e5cb35ddc69af18f16.svg";

/***/ }),

/***/ "N//i":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/menu - payment-52e25301f90689b6825f4f9418dcaae8.svg";

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

/***/ "Pejl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Loading */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //// type can be `gray` and `white`

const Loading = ({
  type,
  width,
  height,
  styleSheet
}) => {
  let style = {
    margin: "auto",
    background: "none",
    display: "block",
    "shape-rendering": "auto",
    width: width ? width : "auto",
    height: height ? height : "auto"
  };

  if (styleSheet) {
    style = _objectSpread(_objectSpread({}, style), styleSheet);
  }

  if (type === "gray ") return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: style,
    width: "200px",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid"
  }, __jsx("circle", {
    cx: "50",
    cy: "50",
    r: "32",
    "stroke-width": "8",
    stroke: "#acb1b8",
    "stroke-dasharray": "50.26548245743669 50.26548245743669",
    fill: "none",
    "stroke-linecap": "round"
  }, __jsx("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    repeatCount: "indefinite",
    dur: "1s",
    keyTimes: "0;1",
    values: "0 50 50;360 50 50"
  })));
  if (type == "white") return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: style,
    width: "200px",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid"
  }, __jsx("circle", {
    cx: "50",
    cy: "50",
    r: "32",
    "stroke-width": "8",
    stroke: "#ffffff",
    "stroke-dasharray": "50.26548245743669 50.26548245743669",
    fill: "none",
    "stroke-linecap": "round"
  }, __jsx("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    repeatCount: "indefinite",
    dur: "1s",
    keyTimes: "0;1",
    values: "0 50 50;360 50 50"
  })));
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: style,
    width: "200px",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid"
  }, __jsx("circle", {
    cx: "50",
    cy: "50",
    r: "32",
    "stroke-width": "8",
    stroke: "#acb1b8",
    "stroke-dasharray": "50.26548245743669 50.26548245743669",
    fill: "none",
    "stroke-linecap": "round"
  }, __jsx("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    repeatCount: "indefinite",
    dur: "1s",
    keyTimes: "0;1",
    values: "0 50 50;360 50 50"
  })));
};
/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),

/***/ "Q21r":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ongoing-6b96fe7b154e94e54ef79075a45badac.svg";

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

/***/ "RHkg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slidedown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("J46/");
/* harmony import */ var react_slidedown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slidedown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slidedown_lib_slidedown_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KO14");
/* harmony import */ var react_slidedown_lib_slidedown_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slidedown_lib_slidedown_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_icons_linear_arrow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rhkG");
/* harmony import */ var _assets_icons_linear_arrow_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_linear_arrow_svg__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import "./Dropdown.scss";
// import "./Dropdown-rtl.scss";


/* harmony default export */ __webpack_exports__["a"] = (class extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      e.preventDefault();
      if (!this.alwaysOpen) this.setState(state => ({
        open: !state.open
      })); // this.arrowRef.current.classList.toggle("dropdown__arrow--open");
    });

    if (this.props.alwaysOpen) this.alwaysOpen = true;else this.alwaysOpen = false;
    this.firstOpen = this.props.firstOpen;
    this.state = {
      open: this.firstOpen == true ? true : this.alwaysOpen
    }; //this.arrowRef = React.createRef();
  }

  render() {
    return __jsx("div", {
      className: `dropdown ${this.props.containerClass}`
    }, __jsx("div", {
      href: "#",
      className: `dropdown__link ${this.props.headerClass}`,
      onClick: this.handleClick
    }, this.props.haveLink ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
      href: this.props.link
    }, __jsx("a", null, __jsx("span", {
      style: {
        color: "#4d5a6c"
      },
      className: "dropdown__text"
    }, this.props.text))) : __jsx("span", {
      className: "dropdown__text"
    }, this.props.text), !this.props.noDropIcon && __jsx(_assets_icons_linear_arrow_svg__WEBPACK_IMPORTED_MODULE_4__["ReactComponent"], {
      className: `dropdown__arrow ${this.state.open ? "dropdown__arrow--open" : "dropdown__arrow--close"}`
    })), this.alwaysOpen ? __jsx("div", null, this.props.children) : __jsx(react_slidedown__WEBPACK_IMPORTED_MODULE_2__["SlideDown"], null, this.state.open && this.props.children));
  }

});

/***/ }),

/***/ "RvTX":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cancelled-538250c464ab01e7ea1907e28bdad4d7.svg";

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ "Shty":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/menu - orders-d888f08bcbbbb5bc237365abf20cb5df.svg";

/***/ }),

/***/ "SnCT":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-star-59890f366f3ee6e5aab513cfe99db89d.svg";

/***/ }),

/***/ "TozK":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/express-2e2e919e09da04bac3f2c05b89bf7690.png";

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Uvuq":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-star-gray-06ca9efe1223dee900ec79d4d309937a.svg";

/***/ }),

/***/ "VXA8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_menu_profile_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("gkYy");
/* harmony import */ var _assets_icons_menu_profile_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_menu_profile_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_menu_orders_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Shty");
/* harmony import */ var _assets_icons_menu_orders_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_menu_orders_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_menu_addresses_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0VMs");
/* harmony import */ var _assets_icons_menu_addresses_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_menu_addresses_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_icons_menu_payment_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("N//i");
/* harmony import */ var _assets_icons_menu_payment_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_menu_payment_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_icons_menu_credit_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("J50Q");
/* harmony import */ var _assets_icons_menu_credit_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_menu_credit_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_icons_menu_return_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("8BCV");
/* harmony import */ var _assets_icons_menu_return_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_menu_return_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_icons_menu_Preference_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4oW3");
/* harmony import */ var _assets_icons_menu_Preference_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_menu_Preference_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_icons_menu_Claims_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("vh5R");
/* harmony import */ var _assets_icons_menu_Claims_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_menu_Claims_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_localize_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("tepj");
/* harmony import */ var react_localize_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_localize_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("oncg");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("FWZJ");
/* harmony import */ var _appConfigSlice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("o2tl");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // import "./PanelNavi.scss";
// import "./PanelNavi-rtl.scss";
/// import assets

















/* harmony default export */ __webpack_exports__["a"] = (({
  closeMenu,
  dontShowSignOut,
  loc,
  outOfReactRouter,
  accountDrop,
  weAreInPanel
}) => {
  let url = loc;
  const dis = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_16__["useRouter"])();

  const handleCloseMobileMenu = () => {
    if (closeMenu) closeMenu();
  };

  const CrossLink = _ref => {
    let {
      children
    } = _ref,
        props = _objectWithoutProperties(_ref, ["children"]);

    if (outOfReactRouter && !weAreInPanel) return __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
      href: props.href,
      as: props.as
    }, __jsx("a", {
      className: props.className
    }, children));
    return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["NavLink"], props, children);
  };

  return __jsx("nav", {
    className: classnames__WEBPACK_IMPORTED_MODULE_13___default()("user-panel-nav mobile", {
      accountDrop: accountDrop
    })
  }, __jsx("ul", {
    className: "user-panel-nav__list"
  }, __jsx("li", {
    className: "user-panel-nav__item",
    onClick: handleCloseMobileMenu
  }, __jsx(CrossLink, {
    exact: true,
    isActive: (match, location) => {
      if (location.pathname.includes(`${url}/profile`)) return true;
    },
    to: `${url}/profile`,
    className: "user-panel-nav__link",
    activeClassName: "active",
    href: `/[lang-curr]/panel/profile`,
    as: `${url}/profile`
  }, __jsx("div", {
    className: "user-panel-nav__itm-cnt"
  }, __jsx(_assets_icons_menu_profile_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"], {
    className: "user-panel-nav__item-icon"
  }), __jsx("span", {
    className: "user-panel-nav__link-text"
  }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_9__["Translate"], {
    id: "nav.profile"
  }))))), __jsx("li", {
    className: "user-panel-nav__item",
    onClick: handleCloseMobileMenu
  }, __jsx(CrossLink, {
    exact: true,
    className: "user-panel-nav__link",
    to: `${url}/orders`,
    activeClassName: "active",
    isActive: (match, location) => {
      if (location.pathname.includes(`${url}/orders`)) return true;
    },
    href: `/[lang-curr]/panel/orders`,
    as: `${url}/orders`
  }, __jsx("div", {
    className: "user-panel-nav__itm-cnt"
  }, __jsx(_assets_icons_menu_orders_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"], {
    className: "user-panel-nav__item-icon"
  }), __jsx("span", {
    className: "user-panel-nav__link-text"
  }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_9__["Translate"], {
    id: "nav.orders"
  }))))), __jsx("li", {
    className: "user-panel-nav__item",
    onClick: handleCloseMobileMenu
  }, __jsx(CrossLink, {
    exact: true,
    isActive: (match, location) => {
      if (location.pathname.includes(`${url}/addresses`)) return true;
    },
    className: "user-panel-nav__link",
    to: `${url}/addresses`,
    activeClassName: "active",
    href: `/[lang-curr]/panel/addresses`,
    as: `${url}/addresses`
  }, __jsx("div", {
    className: "user-panel-nav__itm-cnt"
  }, __jsx(_assets_icons_menu_addresses_svg__WEBPACK_IMPORTED_MODULE_3__["ReactComponent"], {
    className: "user-panel-nav__item-icon"
  }), __jsx("span", {
    className: "user-panel-nav__link-text"
  }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_9__["Translate"], {
    id: "nav.address"
  }))))), __jsx("li", {
    className: "user-panel-nav__item",
    onClick: handleCloseMobileMenu
  }, __jsx(CrossLink, {
    exact: true,
    className: "user-panel-nav__link",
    to: `${url}/payment`,
    activeClassName: "active",
    href: `/[lang-curr]/panel/payment`,
    as: `${url}/payment`
  }, __jsx("div", {
    className: "user-panel-nav__itm-cnt"
  }, __jsx(_assets_icons_menu_payment_svg__WEBPACK_IMPORTED_MODULE_4__["ReactComponent"], {
    className: "user-panel-nav__item-icon"
  }), __jsx("span", {
    className: "user-panel-nav__link-text"
  }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_9__["Translate"], {
    id: "nav.payment"
  }))))), __jsx("li", {
    className: "user-panel-nav__item",
    onClick: handleCloseMobileMenu
  }, __jsx(CrossLink, {
    exact: true,
    className: "user-panel-nav__link",
    to: `${url}/credits`,
    activeClassName: "active",
    href: `/[lang-curr]/panel/credits`,
    as: `${url}/credits`
  }, __jsx("div", {
    className: "user-panel-nav__itm-cnt"
  }, __jsx(_assets_icons_menu_credit_svg__WEBPACK_IMPORTED_MODULE_5__["ReactComponent"], {
    className: "user-panel-nav__item-icon"
  }), __jsx("span", {
    className: "user-panel-nav__link-text"
  }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_9__["Translate"], {
    id: "nav.credit"
  }))))), __jsx("li", {
    className: "user-panel-nav__item",
    onClick: handleCloseMobileMenu
  }, __jsx(CrossLink, {
    exact: true,
    className: "user-panel-nav__link",
    to: `${url}/returns`,
    activeClassName: "active",
    isActive: (match, location) => {
      if (location.pathname.includes(`${url}/returns`)) return true;
    },
    href: `/[lang-curr]/panel/returns`,
    as: `${url}/returns`
  }, __jsx("div", {
    className: "user-panel-nav__itm-cnt"
  }, __jsx(_assets_icons_menu_return_svg__WEBPACK_IMPORTED_MODULE_6__["ReactComponent"], {
    className: "user-panel-nav__item-icon"
  }), __jsx("span", {
    className: "user-panel-nav__link-text"
  }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_9__["Translate"], {
    id: "nav.return"
  }))))), __jsx("li", {
    className: "user-panel-nav__item",
    onClick: handleCloseMobileMenu
  }, __jsx(CrossLink, {
    exact: true,
    className: "user-panel-nav__link",
    to: `${url}/preference`,
    activeClassName: "active",
    href: `/[lang-curr]/panel/preference`,
    as: `${url}/preference`
  }, __jsx("div", {
    className: "user-panel-nav__itm-cnt user-panel-nav__itm-cnt--last"
  }, __jsx(_assets_icons_menu_Preference_svg__WEBPACK_IMPORTED_MODULE_7__["ReactComponent"], {
    className: "user-panel-nav__item-icon"
  }), __jsx("span", {
    className: "user-panel-nav__link-text"
  }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_9__["Translate"], {
    id: "nav.preference"
  })))))), !dontShowSignOut && __jsx("div", {
    className: "user-panel-nav__signout"
  }, __jsx("a", {
    href: "/#",
    className: "user-panel-nav__signout-text",
    onClick: e => {
      e.preventDefault();
      Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_14__[/* removeTokenCookie */ "g"])(); //dis({ type: LOGOUT });

      router.reload();
    }
  }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_9__["Translate"], {
    id: "nav.signout"
  }))));
});

/***/ }),

/***/ "Vhn9":
/***/ (function(module, exports) {



/***/ }),

/***/ "W0sL":
/***/ (function(module, exports) {

module.exports = require("next-useragent");

/***/ }),

/***/ "WrI8":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/email-veri-bd1535442095ca32fe3f51bc13505f86.png";

/***/ }),

/***/ "WsuK":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Adidas_Logo-d4757a8d1fd43ad0e7708d3f6e217b70.svg";

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "Y/sV":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/heart-circle-fill-e66ed116a703eee6262666ebf851c647.svg";

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "aEEx":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/house-12f9e041828b54aa65e327e5ffda0012.svg";

/***/ }),

/***/ "aNEW":
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "ajwg":
/***/ (function(module) {

module.exports = JSON.parse("{\"@authtitle\":[\"ajyal.bh | Sign in or Sing up\",\"ajyal.bh | تسجيل الدخول أو الاشتراك\",\"ajyal.bh | ثبت نام کنید یا وارد شوید \"],\"lang\":[\"العربية\",\"English\",\"English\"],\"forget-pass\":[\"Forgot your password?\",\"نسيت كلمة المرور؟\",\"رمز عبور خود را فراموش کردید؟\"],\"enter-email\":[\"Enter your email address and we'll send you a code to reset your password\",\"أدخل عنوان بريدك الإلكتروني وسنرسل لك رابطًا لإعادة تعيين كلمة المرور\",\"ایمیل خود را وارد کنید سپس ما برای شما یک کد برای تعویض پسورد خواهیم فرستاد\"],\"submit\":[\"submit\",\"إرسال\",\"ارسال\"],\"send-new-email\":[\"send new email\",\"إرسال بريد إلكتروني جديد\",\"ارسال ایمیل جدید\"],\"change-pass\":[\"change your password now!\",\"تغيير كلمة المرور الخاصة بك الآن\",\"همین حالا رمز عبور خود را تغییر دهید\"],\"submit-email\":[\"Submit email\",\"إرسال البريد الإلكتروني\",\"ارسال ایمیل\"],\"check-inbox\":[\"Check your email inbox\",\"تحقق من صندوق البريد الإلكتروني الخاص بك\",\"ایمیل خود را بررسی کنید\"],\"sent-email-msg1\":[\"We've sent an email to\",\"لقد أرسلنا بريدًا إلكترونيًا إلى\",\"ما یک ایمیل به\"],\"sent-email-msg2\":[\" with 6-digit code . Please  enter the code below then set a new password .\",\"برمز مكون من 6 أرقام. الرجاء إدخال الرمز أدناه ثم تعيين كلمة مرور جديدة.\",\"با 6 رقم کد ارسال کردیم، کد را وارد کرده سپس پسورد خود را تغییر دهید\"],\"verify-code-placeholder\":[\"Verification Code\",\"شفرة التأكيد\",\"کد تایید\"],\"verify\":[\"Verify\",\"تحقق\",\"تایید\"],\"old-pass-place-holder\":[\"Enter your old password\",\"أدخل كلمة المرور القديمة الخاصة بك\",\"رمز قدیمی را وارد کنید\"],\"new-pass\":[\"New password\",\"كلمة سر جديدة\",\"\"],\"new-pass-placeholder\":[\"enter your new password\",\"أدخل كلمة المرور الجديدة\",\"رمز جدید خود را وارد کنید\"],\"signIn3\":[\"SIGN IN\",\"تسجيل الدخول\",\"ورود\"],\"signUp3\":[\"SIGN UP\",\"اشتراك\",\"ثبت نام\"],\"welcome\":[\"Welcome back!\",\"!أهلا بك مجدداً\",\"خوش آمدید\"],\"signIn\":[\"Sign in to your account\",\"تسجيل الدخول إلى حسابك\",\"وارد حساب کاربری خود شوید\"],\"signIn-mobile\":[\"Hala ! Welcome back !\",\"!أهلا بك مجدداً\",\"خوش آمدید\"],\"email\":[\"Email\",\"البريد الإلكتروني\",\"ایمیل\"],\"mobileNumber\":[\"Mobile Number\",\"رقم الهاتف المحمول\",\"شماره موبایل\"],\"Password\":[\"Password\",\"كلمة المرور\",\"رمز عبور\"],\"login\":[\"Login\",\"تسجيل الدخول\",\"ورود\"],\"forget\":[\"Forget Password?\",\"نسيت كلمة المرور؟\",\"فراموشی رمز عبور؟\"],\"new\":[\"New here?\",\"هل أنت زائر جديد؟\",\"\"],\"sign-dis\":[\"Sign up and discover our products\",\"سجل واكتشف منتجاتنا\",\"ثبت نام کنید و از محصولات ما استفاده کنید\"],\"acc-have\":[\"Have an account?\",\"ليس لديك حساب ؟\",\"کاربر جدید هستید؟\"],\"login2\":[\"Log in to your account We were waiting for you!\",\"تسجيل الدخول إلى حسابك\",\"به حساب کاربری خود وارد شوید\"],\"hi\":[\"Hi!\",\"!مرحبا\",\"سلام!\"],\"acc-create\":[\"Create a Ajyal account\",\"إنشاء حساب على أجيال\",\"ساخت حساب کاربری اجیال\"],\"pas-confirm\":[\"Confirm password\",\"تأكيد كلمة المرور\",\"\"],\"fullname\":[\"Full name\",\"الاسم الكامل\",\"\"],\"acc-create2\":[\"Create an account\",\"إنشاء حساب\",\"ساخت حساب کاربری جدید\"],\"email-placeholder\":[\"Enter email address\",\"أدخل البريد الإلكتروني\",\"ایمیل خود را وارد کنید\"],\"mobile-placeholder\":[\"Enter mobile number\",\"أدخل رقم الهاتف المحمول\",\"شماره موبایل خود را وارد کنید\"],\"pass-placeholder\":[\"Enter password\",\"أدخل كلمة المرور\",\"پسورد را وارد کنید\"],\"cpass-placeholder\":[\"Confirm your password\",\"أدخل كلمة المرور مرة أخرى\",\"رمز عبور خود را تایید کنید\"],\"name-placeholder\":[\"Enter your name\",\"أدخل أسمك\",\"نام خود را وارد کنید\"],\"family-placeholder\":[\"Enter your family name\",\"أدخل اسم عائلتك\",\"نام خوانوادگی خود را وارد کنید\"],\"name\":[\"Name\",\"الاسم\",\"نام\"],\"family\":[\"Family\",\"العائلة\",\"نام خوانوادگی\"],\"verify-sms\":[\"Please verify your mobile number to continue\",\"لازم تأكد رقم موبايلك عشان نكمّل\",\"شماره موبایل خود را برای ادامه تایید کنید\"],\"verify-sms-des\":[\"To proceed to register, use the OTP & verify your mobile number. We’ve sent the OTP to\",\" عشان نكمّل لإتمام الشراء، استخدم رمز OTP وأكد رقم موبايلك. بعتنا رمز OTP إلى\",\"کد تایید به شماره موبایل شما ارسال شد، برای تکمیل ثبت نام کد تایید را وارد کنید\"],\"changephone-btn\":[\"Submit & verify phone\",\"إرسال الرمز\",\"تایید شماره موبایل\"],\"dontreceive\":[\"Didn't receive OTP?\",\"لم يصلك رمز OTP?\",\"کد تایید دریافت نشده است؟\"],\"resendnow\":[\"Resend now\",\"إعادة إرسال الآن\",\"ارسال مجدد\"],\"changeRegisterData\":[\"Change Register Data\",\"تغيير بيانات التسجيل\",\"تغییر اطلاعات\"]}");

/***/ }),

/***/ "bsZb":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-upload-9c70194ff4cc9f09bc6c2f9d62fcef54.svg";

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "d5cu":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/store-icon-8d8f26783c6e9b98e5de61bcc778d062.svg";

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "dzZG":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJoZWFkZXJfLV9zZWFyY2giIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZGF0YS1uYW1lPSJoZWFkZXIgLSBzZWFyY2giIHZpZXdCb3g9IjAgMCAxNiAxNiI+DQogICAgPGcgaWQ9InNlYXJjaCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjA0OSAuMDI0KSI+DQogICAgICAgIDxwYXRoIGlkPSJQYXRoXzc3IiBmaWxsPSIjYWNiMWI4IiBkPSJNMTUuODUzIDE0LjkxM0wxMS4yMiAxMC4yOGE2LjMyNiA2LjMyNiAwIDEgMC0uOTQuOTRsNC42MzQgNC42MzRhLjMzMi4zMzIgMCAwIDAgLjQ3IDBsLjQ3LS40N2EuMzMyLjMzMiAwIDAgMC0uMDAxLS40NzF6TTYuMzE0IDExLjNBNC45ODUgNC45ODUgMCAxIDEgMTEuMyA2LjMxNCA0Ljk5IDQuOTkgMCAwIDEgNi4zMTQgMTEuM3oiIGRhdGEtbmFtZT0iUGF0aCA3NyIvPg0KICAgIDwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "e9Wp":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/header-OrderTracking-0ce8b2e9e0e0191207fa9e567b30d69e.svg";

/***/ }),

/***/ "eDu+":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/heart-circle-7d63fec043d0d073b1131e949f636a43.svg";

/***/ }),

/***/ "eZBL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _BoxStyle2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pEL2");

/* harmony default export */ __webpack_exports__["a"] = (_BoxStyle2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "eaBv":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-image-placeholder-7d632c7920e0646680a8ce46b1bd1759.svg";

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fwXw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_localize_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tepj");
/* harmony import */ var react_localize_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api_client_clientCommon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hK2O");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("lCwK");
/* harmony import */ var _assets_icons_search_gray_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dzZG");
/* harmony import */ var _assets_icons_search_gray_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_search_gray_svg__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import "./CheckBoxList.scss";
// import "./CheckBoxList-rtl.scss";

let SearchTimer = null;
/* harmony default export */ __webpack_exports__["a"] = (({
  catId,
  itemClass,
  listClass,
  placeholder,
  pageSize = 10,
  onSelect = () => {},
  selecteIds = []
}) => {
  const {
    0: brands,
    1: setBrands
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: brandsLoading,
    1: setBrandsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: seeLoading,
    1: setSeeLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const query = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => {
    return {
      pageSize: pageSize,
      pageNumber: 1,
      search: "",
      catId,
      BrandIds: selecteIds
    };
  }, [catId]);
  query.BrandIds = selecteIds;
  const resCount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(200);

  const getBrands = () => {
    setBrandsLoading(true);
    Object(_lib_api_client_clientCommon__WEBPACK_IMPORTED_MODULE_2__[/* client_categoryBrands */ "d"])(query).then(res => {
      resCount.current = res.result.length;
      setBrands(res.result);
      setBrandsLoading(false);
    }).catch(err => {
      console.log(err);
      setBrands([]);
      setBrandsLoading(false);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getBrands();
  }, [catId]);

  const handleSeeClick = e => {
    e.preventDefault();
    if (seeLoading) return;
    setSeeLoading(true);
    query.pageNumber = query.pageNumber + 1;
    Object(_lib_api_client_clientCommon__WEBPACK_IMPORTED_MODULE_2__[/* client_categoryBrands */ "d"])(query).then(res => {
      resCount.current = res.result.length;
      setBrands([...brands, ...res.result]);
    }).catch(err => {
      console.log(err);
      setBrands([]);
    }).finally(() => {
      setSeeLoading(false);
    });
  };

  const handleSearchChange = e => {
    const q = e.target.value;
    query.search = q;
    query.pageNumber = 1;

    if (SearchTimer) {
      clearTimeout(SearchTimer);
      SearchTimer = null;
    }

    const callback = async query => {
      setBrandsLoading(true);

      try {
        const res = await Object(_lib_api_client_clientCommon__WEBPACK_IMPORTED_MODULE_2__[/* client_categoryBrands */ "d"])(query);

        if (res.result) {
          resCount.current = res.result.length;
          setBrands(res.result);
        }
      } catch (er) {
        setBrands([]);
      } finally {
        setBrandsLoading(false);
      }
    };

    SearchTimer = setTimeout(callback.bind(null, query), 500);
  };

  const handleCheckChange = e => {
    onSelect({
      value: e.target.name,
      id: e.target.value
    }, e.target.checked);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "checklist__search"
  }, __jsx(_assets_icons_search_gray_svg__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "checklist__search-input-icon"
  }), __jsx("input", {
    onChange: handleSearchChange,
    type: "text" // value={searchText}
    ,
    className: "checklist__search-input",
    placeholder: placeholder
  })), __jsx("ul", {
    className: `checklist ${listClass}`
  }, brandsLoading ? __jsx(_common__WEBPACK_IMPORTED_MODULE_3__[/* Loading */ "s"], {
    width: "20px",
    height: "20px"
  }) : brands.map((brand, index) => {
    return __jsx("label", {
      key: index,
      className: "checklist__label"
    }, __jsx("li", {
      className: `${itemClass} d-flex justify-content-between align-items-center`
    }, __jsx("div", null, __jsx("input", {
      className: "checklist__check",
      type: "checkbox",
      name: brand.brandTitle,
      value: brand.brandId,
      checked: selecteIds.includes(brand.brandId) ? true : false,
      onChange: handleCheckChange
    }), __jsx("span", null, brand.brandTitle)), __jsx("span", null, "(", brand.goodsCount, ")")));
  })), resCount.current >= pageSize && !brandsLoading && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, seeLoading ? __jsx(_common__WEBPACK_IMPORTED_MODULE_3__[/* Loading */ "s"], {
    width: "20px",
    height: "20px"
  }) : __jsx("a", {
    href: "",
    onClick: handleSeeClick,
    className: "seemore__link"
  }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], {
    id: "seemore"
  }))));
});

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

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

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "gkYy":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/menu - profile-16ebeb00b359894fdf3e2d373fa88830.svg";

/***/ }),

/***/ "gtw1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isRtl; });
const isRtl = lang => {
  switch (lang) {
    case "en":
      return false;
      break;

    case "ar":
      return true;
      break;

    case "fa":
      return true;
      break;

    default:
      break;
  }
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

/***/ "hG8t":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-heart-fill-a1b0ab587d7961a5ff9da6cbe4985bc1.svg";

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

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "iAjL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _PanelNavi_PanelNavi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("VXA8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _PanelNavi_PanelNavi__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "isJr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_search_gray_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dzZG");
/* harmony import */ var _assets_icons_search_gray_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_search_gray_svg__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import "./CheckBoxList.scss";
// import "./CheckBoxList-rtl.scss";

/* harmony default export */ __webpack_exports__["a"] = (({
  data,
  itemClass,
  listClass,
  search,
  placeholder,
  dataName,
  dataValue,
  singleSelect = false,
  onSelect = () => {},
  initialSelectIdArr = [],
  seeMore,
  maxItemShow,
  textOpen,
  textClose
}) => {
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: checkedIds,
    1: setCheckedIds
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: seemoreFlag,
    1: setSeemoreFlag
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const gen = {};

    for (let id of initialSelectIdArr) {
      if (data[id]) {
        gen[id] = {
          value: data[id][dataValue],
          checked: true
        };
      }
    }

    setCheckedIds(gen);
    return () => {};
  }, [initialSelectIdArr.length]);

  const handleCheckChange = event => {
    if (singleSelect) {
      const newState = {
        [event.target.value]: {
          value: event.target.value,
          checked: event.target.checked
        }
      };
      setCheckedIds(newState);
      createSelectedArrayValue(newState);
    } else {
      const newState = _objectSpread(_objectSpread({}, checkedIds), {}, {
        [event.target.value]: {
          value: event.target.value,
          checked: event.target.checked
        }
      });

      setCheckedIds(newState);
      createSelectedArrayValue(newState);
    }
  };

  const createSelectedArrayValue = checkedList => {
    const arr = [];

    for (let key in checkedList) {
      if (checkedList[key].checked) arr.push(parseInt(key));
    }

    onSelect(arr);
  }; //const placeholder = <Placeholder />;


  const handleChange = e => {
    setSearchText(e.target.value);
  };

  const handleClick = e => {
    e.preventDefault();
    setSeemoreFlag(!seemoreFlag);
  };

  if (!data) return null;
  const arrayData = Object.keys(data);
  let count = arrayData.length;

  if (seeMore) {
    count = maxItemShow;

    if (searchText) {
      count = arrayData.length;
    }

    if (seemoreFlag) {
      count = arrayData.length;
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, search && __jsx("div", {
    className: "checklist__search"
  }, __jsx(_assets_icons_search_gray_svg__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "checklist__search-input-icon"
  }), __jsx("input", {
    onChange: handleChange,
    type: "text",
    value: searchText,
    className: "checklist__search-input",
    placeholder: placeholder
  })), __jsx("ul", {
    className: `checklist ${listClass}`
  }, arrayData.slice(0, count).map((key, index) => {
    return (searchText && data[key][dataName].includes(searchText) || !searchText) && __jsx("label", {
      key: index,
      className: "checklist__label"
    }, __jsx("li", {
      className: `${itemClass}`
    }, __jsx("input", {
      className: "checklist__check",
      type: "checkbox",
      name: data[key][dataName],
      value: data[key][dataValue],
      checked: checkedIds[data[key][dataValue]] ? checkedIds[data[key][dataValue]].checked : false,
      onChange: handleCheckChange
    }), __jsx("span", null, data[key][dataName])));
  })), seeMore && !searchText && __jsx("a", {
    href: "",
    onClick: handleClick,
    className: "seemore__link"
  }, !seemoreFlag ? textOpen : textClose));
});

/***/ }),

/***/ "j6jx":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/completed-a2b0cf6e8e1b1172909c715a9f5794b8.svg";

/***/ }),

/***/ "jxY/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MediaProtraitPhones */
/* unused harmony export MinMediaProtraitPhones */
/* unused harmony export MediaLandScapePhone */
/* unused harmony export MinMediaLandScapePhone */
/* unused harmony export MediaTablets */
/* unused harmony export MinMediaTablets */
/* unused harmony export MediaDesktops */
/* unused harmony export MinMediaDesktops */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ProtraitPhones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ProtraitPhonesAndBigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LandScapePhones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LandScapePhonesAndBigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Tablets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TabletsAndBigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Desktops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DesktopsAndBigger; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("NNXn");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Extra small devices (portrait phones, less than 576px)

const MediaProtraitPhones = {
  maxWidth: 575.98
};
const MinMediaProtraitPhones = {
  minWidth: 575.98
}; /// sm
// Small devices (landscape phones, less than 768px)

const MediaLandScapePhone = {
  maxWidth: 767.98
};
const MinMediaLandScapePhone = {
  minWidth: 767.98
}; /// md
// Medium devices (tablets, less than 992px)

const MediaTablets = {
  maxWidth: 991.98
};
const MinMediaTablets = {
  minWidth: 991.98
}; /// lg
// Large devices (desktops, less than 1200px)

const MediaDesktops = {
  maxWidth: 1199.98
};
const MinMediaDesktops = {
  minWidth: 1199.98
}; /// xl
//// React responsive Components

const ProtraitPhones = ({
  children,
  className
}) => {
  return __jsx("div", {
    className: `d-block d-sm-none ${className ? className : ''}`
  }, children);
};
const ProtraitPhonesAndBigger = ({
  children,
  className
}) => {
  return __jsx("div", {
    className: `d-none d-sm-block  ${className ? className : ''}`
  }, children);
};
const LandScapePhones = ({
  children,
  className
}) => {
  return __jsx("div", {
    className: `d-block d-md-none ${className ? className : ''}`
  }, children);
};
const LandScapePhonesAndBigger = ({
  children,
  className
}) => {
  return __jsx("div", {
    className: `d-none d-md-block ${className ? className : ''}`
  }, children);
};
const Tablets = ({
  children,
  className
}) => {
  return __jsx("div", {
    className: `d-block d-lg-none ${className ? className : ''}`
  }, children);
};
const TabletsAndBigger = ({
  children,
  className
}) => {
  return __jsx("div", {
    className: `d-none d-lg-block ${className ? className : ''}`
  }, children);
};
const Desktops = ({
  children,
  className
}) => {
  return __jsx("div", {
    className: `d-block d-xl-none ${className ? className : ''}`
  }, children);
};
const DesktopsAndBigger = ({
  children,
  className
}) => {
  return __jsx("div", {
    className: `d-none d-xl-block ${className ? className : ''}`
  }, children);
};

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "lCwK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ common_BoxStyle1; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ Dropdown["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ GoodItem["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ common_LinearHeader; });
__webpack_require__.d(__webpack_exports__, "y", function() { return /* reexport */ common_SelectBox; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ common_GoodItemRow; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* reexport */ common_Pager; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ BoxStyle2["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ common_BoxStyle3; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ ColorFullProgressBar; });
__webpack_require__.d(__webpack_exports__, "B", function() { return /* reexport */ StarRating; });
__webpack_require__.d(__webpack_exports__, "z", function() { return /* reexport */ SelectBox2_SelectBox2; });
__webpack_require__.d(__webpack_exports__, "A", function() { return /* reexport */ SelectBox3_SelectBox3; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ MobileMenu_MobileMenu; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ Button_Button; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ GoodSituation; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ DeliveryProgress; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* reexport */ MultiAddInput; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ MobileItemDrop; });
__webpack_require__.d(__webpack_exports__, "C", function() { return /* reexport */ UploadBox; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Alert; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ BreadCrump; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ GoodItemLoader_GoodItemLoader; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ GoodItemRowLoader; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ Loading["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ FormErrorMsg_FormErrorMsg; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* reexport */ PageLoading_PageLoading; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ GoodItemLoader_GoodItemLoader2; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ common_CategoryBoxStyle; });

// UNUSED EXPORTS: GoodItemNavigation

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./lib/querys.js
var querys = __webpack_require__("/CuA");

// EXTERNAL MODULE: ./appConfigSlice.js
var appConfigSlice = __webpack_require__("o2tl");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-localize-redux"
var external_react_localize_redux_ = __webpack_require__("tepj");

// CONCATENATED MODULE: ./components/common/BoxStyle1/BoxStyle1.jsx
var __jsx = external_react_default.a.createElement;
 // import "./BoxStyle1.scss";
// import "./BoxStyle1-rtl.scss";






/* harmony default export */ var BoxStyle1 = (({
  children,
  headerContent,
  className,
  childRef,
  showViewAll,
  viewAllId
}) => {
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const curr = Object(external_react_redux_["useSelector"])(appConfigSlice["g" /* selectCurr */]);
  return __jsx("div", {
    ref: childRef,
    className: `boxStyle1 ${className ? className : ""}`
  }, __jsx("header", {
    className: `boxStyle1__header ${showViewAll == true ? 'boxStyle1__header-with-view-all' : ''}`
  }, __jsx("span", {
    className: "boxStyle1__border"
  }), typeof headerContent === "string" ? __jsx("h2", {
    className: "boxStyle1__header-text"
  }, headerContent) : headerContent, showViewAll == true ? __jsx(link_default.a, {
    href: `/${curr}-${lang}/search?type=${querys["d" /* SEARCH_TYPE_MODULE */]}&id=${viewAllId}`
  }, __jsx("a", {
    className: "boxStyle1__view-all-box"
  }, __jsx("span", null, __jsx(external_react_localize_redux_["Translate"], {
    id: "common.view-all"
  })))) : null), children);
});
// CONCATENATED MODULE: ./components/common/BoxStyle1/index.js

/* harmony default export */ var common_BoxStyle1 = (BoxStyle1);
// EXTERNAL MODULE: ./components/common/Dropdown/Dropdown.jsx
var Dropdown = __webpack_require__("RHkg");

// EXTERNAL MODULE: ./components/common/GoodItem/index.js + 1 modules
var GoodItem = __webpack_require__("ptTz");

// CONCATENATED MODULE: ./components/common/LinearHeader/LinearHeader.jsx
var LinearHeader_jsx = external_react_default.a.createElement;
 // import "./LinearHeader.scss";

/* harmony default export */ var LinearHeader = (({
  headerText
}) => {
  return LinearHeader_jsx(external_react_default.a.Fragment, null, headerText ? LinearHeader_jsx("div", {
    className: "linearHeader"
  }, LinearHeader_jsx("h3", {
    className: "linearHeader__h3"
  }, LinearHeader_jsx("span", {
    className: "linearHeader__text"
  }, headerText))) : LinearHeader_jsx("div", {
    className: "linearHeader"
  }));
});
// CONCATENATED MODULE: ./components/common/LinearHeader/index.js

/* harmony default export */ var common_LinearHeader = (LinearHeader);
// EXTERNAL MODULE: ./assets/images/img-bahrain.svg
var img_bahrain = __webpack_require__("ryWw");
var img_bahrain_default = /*#__PURE__*/__webpack_require__.n(img_bahrain);

// EXTERNAL MODULE: ./assets/images/img-united-states.svg
var img_united_states = __webpack_require__("zP6j");
var img_united_states_default = /*#__PURE__*/__webpack_require__.n(img_united_states);

// EXTERNAL MODULE: ./assets/icons/img-radio-button-off.svg
var img_radio_button_off = __webpack_require__("4Tx6");
var img_radio_button_off_default = /*#__PURE__*/__webpack_require__.n(img_radio_button_off);

// EXTERNAL MODULE: ./assets/icons/img-radio-button-on.svg
var img_radio_button_on = __webpack_require__("tyI+");
var img_radio_button_on_default = /*#__PURE__*/__webpack_require__.n(img_radio_button_on);

// CONCATENATED MODULE: ./components/common/SelectBox/items/item.jsx
var item_jsx = external_react_default.a.createElement;


const Item = props => {
  return item_jsx(external_react_default.a.Fragment, null, props.hideBottomBorder == true ? item_jsx("button", {
    id: props.id,
    onClick: props.click
  }, item_jsx("img", {
    id: "deactiveLang",
    src: props.active,
    alt: "activate"
  }), item_jsx("img", {
    className: "lang-flag",
    src: props.flag,
    alt: "flag"
  }), item_jsx("span", null, props.value)) : item_jsx("button", {
    id: props.id,
    onClick: props.click,
    style: {
      borderBottom: "0.1rem solid #eee"
    }
  }, item_jsx("img", {
    id: "deactiveLang",
    src: props.active,
    alt: "activate"
  }), item_jsx("img", {
    className: "lang-flag",
    src: props.flag,
    alt: "flag"
  }), item_jsx("span", null, props.value)));
};

/* harmony default export */ var items_item = (Item);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/app/pages/UserPanel/PanelLayouts/index.js
var PanelLayouts = __webpack_require__("iAjL");

// CONCATENATED MODULE: ./components/common/SelectBox/SelectBox.jsx
var SelectBox_jsx = external_react_default.a.createElement;
 // import "./SelectBox.scss";













const DontLogin = () => {
  const lang = Object(external_react_redux_["useSelector"])(state => {
    return state.appConfig.lang.code;
  });
  const curr = Object(external_react_redux_["useSelector"])(state => {
    return state.appConfig.currency.code;
  });
  const router = Object(router_["useRouter"])();
  const dis = Object(external_react_redux_["useDispatch"])();

  const handleSignInClick = (e, isSignUp) => {
    e.preventDefault();
    dis({
      type: appConfigSlice["d" /* PREVLINK_CHANGE */],
      payload: {
        link: router.asPath
      }
    });
    if (isSignUp) router.push(`/${curr}-${lang}/Auth?signup`);else router.push(`/${curr}-${lang}/Auth`);
  };

  return SelectBox_jsx("div", {
    className: "dontlogin d-flex p-4 flex-column"
  }, SelectBox_jsx("span", {
    className: "dontlogin__smallText"
  }, SelectBox_jsx(external_react_localize_redux_["Translate"], {
    id: "dontlogin.retu-custo"
  })), SelectBox_jsx("a", {
    onClick: e => {
      handleSignInClick(e, false);
    },
    className: "dontlogin__btn"
  }, SelectBox_jsx(external_react_localize_redux_["Translate"], {
    id: "signin2"
  })), SelectBox_jsx("span", {
    className: "dontlogin__smallText dontlogin__smallText--border-top"
  }, SelectBox_jsx(external_react_localize_redux_["Translate"], {
    id: "dontlogin.dont-acc"
  })), SelectBox_jsx("a", {
    onClick: e => {
      handleSignInClick(e, true);
    },
    className: "primary-link dontlogin__link"
  }, SelectBox_jsx(external_react_localize_redux_["Translate"], {
    id: "signup"
  })));
};

const SelectBox = props => {
  // will hold a reference for our real input file
  const lang = Object(external_react_redux_["useSelector"])(state => {
    return state.appConfig.lang.code;
  });
  const curr = Object(external_react_redux_["useSelector"])(state => {
    return state.appConfig.currency.code;
  });
  const isLogin = Object(external_react_redux_["useSelector"])(appConfigSlice["i" /* selectLogin */]).isLogin;
  const pathname = Object(router_["useRouter"])().asPath;
  const weAreInPanel = pathname.includes("/panel");

  const changeLangOrCurrency = e => {
    const cuurentEl = e.currentTarget.id.split("-");

    if (cuurentEl[2] !== "active") {
      let path = pathname.split("/");
      const landAndCurrency = cuurentEl[0] + "-" + cuurentEl[1];
      let newPath = "";
      path.forEach((element, index) => {
        if (index != 1) {
          newPath = newPath + "/" + element;
        } else {
          newPath = newPath + landAndCurrency;
        }
      });
      window.location.href = newPath;
    }
  };

  if (props.type === "account") {
    return SelectBox_jsx("div", {
      className: `select-box-container ${props.className ? props.className : ""}`
    }, isLogin ? SelectBox_jsx(PanelLayouts["a" /* PanelNavi */], {
      loc: `/${curr}-${lang}/panel`,
      outOfReactRouter: true,
      accountDrop: true,
      weAreInPanel: weAreInPanel
    }) : SelectBox_jsx(DontLogin, null));
  }

  return SelectBox_jsx("div", {
    className: `select-box-container ${props.className ? props.className : ""}`
  }, SelectBox_jsx("div", {
    className: "select-box-container__item"
  }, props.type === "lang" ? SelectBox_jsx(items_item, {
    id: props.currency + "-" + "en-" + (props.lang === "en" ? "active" : "deactive"),
    click: changeLangOrCurrency,
    value: "English",
    flag: img_united_states_default.a,
    active: props.lang === "en" ? img_radio_button_on_default.a : img_radio_button_off_default.a
  }) : SelectBox_jsx(items_item, {
    id: "usd-" + props.lang + "-" + (props.currency === "usd" ? "active" : "deactive"),
    click: changeLangOrCurrency,
    value: "USD",
    flag: img_united_states_default.a,
    active: props.currency === "usd" ? img_radio_button_on_default.a : img_radio_button_off_default.a
  })), SelectBox_jsx("div", {
    className: "select-box-container__item"
  }, props.type === "lang" ? SelectBox_jsx(items_item, {
    id: props.currency + "-" + "ar-" + (props.lang === "ar" ? "active" : "deactive"),
    hideBottomBorder: true,
    click: changeLangOrCurrency,
    value: "Arabic",
    flag: img_bahrain_default.a,
    active: props.lang === "ar" ? img_radio_button_on_default.a : img_radio_button_off_default.a
  }) : SelectBox_jsx(items_item, {
    id: "bhd-" + props.lang + "-" + (props.currency === "bhd" ? "active" : "deactive"),
    hideBottomBorder: true,
    click: changeLangOrCurrency,
    value: "BHD",
    flag: img_bahrain_default.a,
    active: props.currency === "bhd" ? img_radio_button_on_default.a : img_radio_button_off_default.a
  })));
};

/* harmony default export */ var SelectBox_SelectBox = (SelectBox);
// CONCATENATED MODULE: ./components/common/SelectBox/index.js

/* harmony default export */ var common_SelectBox = (SelectBox_SelectBox);
// EXTERNAL MODULE: external "react-star-rating-component"
var external_react_star_rating_component_ = __webpack_require__("txVm");
var external_react_star_rating_component_default = /*#__PURE__*/__webpack_require__.n(external_react_star_rating_component_);

// EXTERNAL MODULE: ./assets/icons/express.png
var express = __webpack_require__("TozK");
var express_default = /*#__PURE__*/__webpack_require__.n(express);

// EXTERNAL MODULE: ./assets/icons/express-ar.png
var express_ar = __webpack_require__("BgOU");
var express_ar_default = /*#__PURE__*/__webpack_require__.n(express_ar);

// EXTERNAL MODULE: ./assets/icons/marketplace.png
var marketplace = __webpack_require__("xYMx");
var marketplace_default = /*#__PURE__*/__webpack_require__.n(marketplace);

// EXTERNAL MODULE: ./assets/icons/marketplaceAr.png
var marketplaceAr = __webpack_require__("tQxu");
var marketplaceAr_default = /*#__PURE__*/__webpack_require__.n(marketplaceAr);

// EXTERNAL MODULE: ./assets/icons/img-star.svg
var img_star = __webpack_require__("SnCT");
var img_star_default = /*#__PURE__*/__webpack_require__.n(img_star);

// EXTERNAL MODULE: ./assets/icons/img-star-gray.svg
var img_star_gray = __webpack_require__("Uvuq");
var img_star_gray_default = /*#__PURE__*/__webpack_require__.n(img_star_gray);

// EXTERNAL MODULE: ./assets/icons/heart-circle.svg
var heart_circle = __webpack_require__("eDu+");

// EXTERNAL MODULE: ./assets/icons/heart-circle-fill.svg
var heart_circle_fill = __webpack_require__("Y/sV");

// CONCATENATED MODULE: ./components/common/Button/Button.jsx
var Button_jsx = external_react_default.a.createElement;
 // import "./Button.scss";

const Button = props => {
  return Button_jsx("div", {
    className: "Button"
  }, Button_jsx("button", {
    onClick: props.onClick,
    className: "Button__custom",
    type: "submit",
    className: "Button__custom " + (props.size === "xsm" ? "Button__xsm" : "") + (props.disable ? "disable" : ""),
    style: {
      borderRadius: props.radius ? "5px" : "0px"
    }
  }, props.value));
};

/* harmony default export */ var Button_Button = (Button);
// EXTERNAL MODULE: ./lib/isRtl.js
var isRtl = __webpack_require__("gtw1");

// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__("E4SY");
var external_react_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_react_lazyload_);

// EXTERNAL MODULE: ./lib/helpers.js
var helpers = __webpack_require__("FWZJ");

// EXTERNAL MODULE: ./lib/api/client/clientCart.js
var clientCart = __webpack_require__("CbI7");

// EXTERNAL MODULE: ./lib/api/axios.js
var axios = __webpack_require__("BfmP");

// EXTERNAL MODULE: ./components/common/Loading/Loading.jsx
var Loading = __webpack_require__("Pejl");

// EXTERNAL MODULE: ./components/common/GoodItemNavigation/GoodItemNavigation.jsx
var GoodItemNavigation = __webpack_require__("8tkK");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: ./components/app/pages/CartAndWishlist/cartAndWishlistSlice.js
var cartAndWishlistSlice = __webpack_require__("QQGX");

// CONCATENATED MODULE: ./components/common/GoodItemRow/GoodItemRow.jsx
var GoodItemRow_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import "./GoodItemRow.scss";
// import "./GoodItemRow-rtl.scss";
























const mapStateToProps = state => {
  return {
    lang: Object(appConfigSlice["h" /* selectLang */])(state),
    curr: Object(appConfigSlice["g" /* selectCurr */])(state),
    isLogin: Object(appConfigSlice["i" /* selectLogin */])(state).isLogin,
    wishCount: Object(cartAndWishlistSlice["v" /* selectWishCount */])(state)
  };
};

const mapDispatchToProps = {
  saveLink: link => {
    return {
      type: appConfigSlice["d" /* PREVLINK_CHANGE */],
      payload: {
        link
      }
    };
  },
  addWishCount: cartAndWishlistSlice["e" /* addWishCount */]
};
/* harmony default export */ var GoodItemRow = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(Object(router_["withRouter"])(class extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleCartClick", async e => {
      e.preventDefault();
      if (this.state.cartIconLoading) return;
      this.setState({
        cartIconLoading: true
      });

      try {
        const result = await Object(clientCart["b" /* client_addToCart */])({
          goodId: this.props.goodsId,
          providerId: this.props.providerId,
          count: 1
        });

        if (result.status === 200) {
          const id = result.result.cookieId;
          const cartId = external_js_cookie_default.a.get("ajyal_cart");

          if (!cartId && id) {
            Object(helpers["i" /* setCartCookie */])(id);
            axios["a" /* default */].setCartId(id);
          }

          this.props.router.push(`/${this.props.curr}-${this.props.lang}/cart`);
        }
      } catch (err) {
        console.log(err); // return false;
      }
    });

    _defineProperty(this, "handleGoToDetail", e => {
      e.preventDefault();
      this.setState({
        navigation: true
      });
      this.props.router.push(`/${this.props.curr}-${this.props.lang}/product/${this.props.goodsId}/${this.props.providerId}/${Object(helpers["l" /* slugy */])(this.props.title)}`);
    });

    _defineProperty(this, "handleLike", e => {
      e.preventDefault();

      if (!this.props.isLogin) {
        this.props.saveLink(this.props.router.asPath);
        this.props.router.push(`/${this.props.curr}-${this.props.lang}/Auth`);
        return;
      }

      const prevLike = this.state.liked;

      try {
        const result = Object(clientCart["e" /* client_likeGood */])(this.props.goodsId);
        this.setState({
          liked: !prevLike
        });
        const wishCount = prevLike ? this.props.wishCount - 1 : this.props.wishCount + 1;
        this.props.addWishCount(wishCount);
      } catch (err) {
        this.setState({
          liked: prevLike
        });
      }
    });

    this.is_rtl = Object(isRtl["a" /* isRtl */])(this.props.lang);
    this.state = {
      cartIconLoading: false,
      liked: this.props.goodsLiked,
      navigation: false
    };
    this.goToDetails = this.props.haveVariation || this.props.saleWithCall;
  }

  render() {
    return GoodItemRow_jsx("div", {
      className: "goodItem-s2-container"
    }, this.state.navigation && GoodItemRow_jsx(GoodItemNavigation["a" /* default */], null), GoodItemRow_jsx("article", {
      className: this.props.hover ? "goodItem-s2 goodItem-s1--hover" : "goodItem-s2"
    }, GoodItemRow_jsx("div", {
      className: "goodItem-s2__left-container"
    }, GoodItemRow_jsx(link_default.a, {
      href: "/[usd-cur]/product/[...good]",
      as: `/${this.props.curr}-${this.props.lang}/product/${this.props.goodsId}/${this.props.providerId}/${Object(helpers["l" /* slugy */])(this.props.title)}`
    }, GoodItemRow_jsx("a", {
      className: "goodItem-s2__fig",
      onClick: () => {
        this.setState({
          navigation: true
        });
      }
    }, GoodItemRow_jsx("figure", null, GoodItemRow_jsx(external_react_lazyload_default.a, {
      placeholder: GoodItemRow_jsx("img", {
        className: "goodItem-loader__img",
        src: "/assets/imgs/placeholder-v2.png"
      })
    }, GoodItemRow_jsx("img", {
      className: "goodItem-s2__img",
      src: `${"http://ajyal.webtreeonline.com/Uploads/Images/Goods"}/${this.props.goodsId}/thumb-${this.props.goodsImage}`
    }))))), GoodItemRow_jsx("div", {
      className: "goodItem-s2__left-right"
    }, GoodItemRow_jsx("div", {
      className: "goodItem-s2__ns-con"
    }, GoodItemRow_jsx(link_default.a, {
      href: "/[usd-cur]/product/[...good]",
      as: `/${this.props.curr}-${this.props.lang}/product/${this.props.goodsId}/${this.props.providerId}/${Object(helpers["l" /* slugy */])(this.props.title)}`
    }, GoodItemRow_jsx("a", {
      className: "goodItem-s2__name",
      onClick: () => {
        this.setState({
          navigation: true
        });
      }
    }, Object(helpers["n" /* trimTextLonger */])(this.props.title))), this.props.withModelNumber && GoodItemRow_jsx("div", {
      className: "cart-item__model-container"
    }, GoodItemRow_jsx("span", {
      className: "order-item__small-text"
    }, GoodItemRow_jsx(external_react_localize_redux_["Translate"], {
      id: "common.good-item.model-num"
    })), GoodItemRow_jsx("span", {
      className: "order-item__small-value"
    }, this.props.modelnumber)), this.props.surveyCount > 0 ? GoodItemRow_jsx("div", {
      className: "goodItem-s2__star-container"
    }, GoodItemRow_jsx(external_react_star_rating_component_default.a, {
      name: "good Item rate",
      editing: false,
      renderStarIcon: (index, value) => {
        return GoodItemRow_jsx("img", {
          alt: "",
          className: "goodItem-s2__star",
          src: index <= value ? img_star_default.a : img_star_gray_default.a
        });
      },
      starCount: 5,
      value: this.props.surveyScore
    }), GoodItemRow_jsx("span", {
      className: "goodItem-s2__start-count"
    }, "(", this.props.surveyScore, ")")) : undefined), GoodItemRow_jsx("div", {
      className: "goodItem-s2__right-ft-con"
    }, GoodItemRow_jsx("div", {
      className: "goodItem-s2__right-ft"
    }, !this.is_rtl ? GoodItemRow_jsx("span", {
      className: "goodItem-s2__currency"
    }, GoodItemRow_jsx(external_react_localize_redux_["Translate"], {
      id: this.props.curr
    })) : undefined, GoodItemRow_jsx("div", {
      className: "goodItem-s2__price-container"
    }, GoodItemRow_jsx("span", {
      className: "goodItem-s2__number"
    }, Object(helpers["a" /* formatMoney */])(this.props.finalPrice))), this.is_rtl ? GoodItemRow_jsx("span", {
      className: "goodItem-s2__currency"
    }, GoodItemRow_jsx(external_react_localize_redux_["Translate"], {
      id: this.props.curr
    }), "\u200F") : undefined, this.props.discountAmount > 0 ? GoodItemRow_jsx("div", {
      className: "goodItem-s2__off-percentage-container"
    }, GoodItemRow_jsx("span", {
      className: "goodItem-s2__off-percentage"
    }, this.props.discountPercentage), GoodItemRow_jsx("span", {
      className: "goodItem-s2__off-text"
    }, "% OFF")) : undefined, this.props.discountAmount > 0 && GoodItemRow_jsx("span", {
      className: "goodItem-s2__price-off"
    }, Object(helpers["a" /* formatMoney */])(this.props.price))), this.props.shippingPossibilities ? GoodItemRow_jsx("img", {
      alt: "market icon",
      className: "goodItem-s2__exp",
      src: this.is_rtl ? marketplaceAr_default.a : marketplace_default.a
    }) : GoodItemRow_jsx("img", {
      alt: "express icon",
      className: "goodItem-s2__exp",
      src: this.is_rtl ? express_ar_default.a : express_default.a
    })))), !this.props.withoutRightBox && GoodItemRow_jsx("div", {
      className: "goodItem-s2__right-container"
    }, !this.goToDetails ? GoodItemRow_jsx(Button_Button, {
      radius: "true",
      onClick: this.handleCartClick,
      value: this.state.cartIconLoading ? GoodItemRow_jsx(Loading["a" /* default */], {
        type: "white",
        width: "22px",
        height: "22px"
      }) : GoodItemRow_jsx(external_react_localize_redux_["Translate"], {
        id: "addcard"
      })
    }) : GoodItemRow_jsx(Button_Button, {
      radius: "true",
      onClick: this.handleGoToDetail,
      value: this.props.saleWithCall ? GoodItemRow_jsx(external_react_localize_redux_["Translate"], {
        id: "common.show-p-info"
      }) : GoodItemRow_jsx(external_react_localize_redux_["Translate"], {
        id: "common.go-detail"
      })
    }), GoodItemRow_jsx("a", {
      href: "",
      className: "goodItem-s2__wishlist-cnt",
      onClick: this.handleLike
    }, this.state.liked ? GoodItemRow_jsx(external_react_default.a.Fragment, null, GoodItemRow_jsx(heart_circle_fill["ReactComponent"], {
      className: "goodItem-s2__wishlist-icon"
    }), GoodItemRow_jsx("span", {
      className: "goodItem-s2__wishlist-text"
    }, GoodItemRow_jsx(external_react_localize_redux_["Translate"], {
      id: "in-wishlist"
    }))) : GoodItemRow_jsx(external_react_default.a.Fragment, null, GoodItemRow_jsx(heart_circle["ReactComponent"], {
      className: "goodItem-s2__wishlist-icon"
    }), GoodItemRow_jsx("span", {
      className: "goodItem-s2__wishlist-text"
    }, GoodItemRow_jsx(external_react_localize_redux_["Translate"], {
      id: "add-wish"
    })))))));
  }

})));
// CONCATENATED MODULE: ./components/common/GoodItemRow/index.js

/* harmony default export */ var common_GoodItemRow = (GoodItemRow);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./assets/icons/play-left.svg
var play_left = __webpack_require__("x/s0");

// CONCATENATED MODULE: ./components/common/Pager/Pager.jsx
var Pager_jsx = external_react_default.a.createElement;
 // import "./Pager.scss";
// import "./Pager-rtl.scss";



/* harmony default export */ var Pager = (({
  count = 0,
  activeItem,
  onPageClick,
  smoothScroll,
  scrollTo
}) => {
  const items = [];

  for (let i = 1; i <= count; i++) {
    items.push(Pager_jsx("li", {
      className: "pager__item"
    }, Pager_jsx("a", {
      href: "",
      className: external_classnames_default()("pager__link", {
        active: i === activeItem
      }),
      onClick: e => {
        e.preventDefault();
        onPageClick(i);

        if (smoothScroll) {
          window.scrollTo({
            top: scrollTo || 0,
            behavior: "smooth"
          });
        }
      }
    }, i)));
  }

  return Pager_jsx("ul", {
    className: "pager"
  }, count !== 0 && count !== 1 && Pager_jsx(external_react_default.a.Fragment, null, activeItem > 1 && Pager_jsx("li", {
    className: "pager__item"
  }, Pager_jsx("a", {
    href: "/#",
    onClick: e => {
      e.preventDefault();
      onPageClick(activeItem - 1);
    },
    className: "pager__link"
  }, Pager_jsx(play_left["ReactComponent"], {
    className: "pager__prev-icon"
  }))), items, activeItem < count && Pager_jsx("li", {
    className: "pager__item"
  }, Pager_jsx("a", {
    href: "/#",
    className: "pager__link",
    onClick: e => {
      e.preventDefault();
      onPageClick(activeItem + 1);
    }
  }, Pager_jsx(play_left["ReactComponent"], {
    className: "pager__next-icon"
  })))));
});
// CONCATENATED MODULE: ./components/common/Pager/index.js

/* harmony default export */ var common_Pager = (Pager);
// EXTERNAL MODULE: ./components/common/BoxStyle2/index.js
var BoxStyle2 = __webpack_require__("eZBL");

// CONCATENATED MODULE: ./components/common/BoxStyle3/BoxStyle3.jsx
var BoxStyle3_jsx = external_react_default.a.createElement;
 // import "./BoxStyle1.scss";
// import "./BoxStyle1-rtl.scss";

/* harmony default export */ var BoxStyle3 = (({
  children,
  headerContent,
  className
}) => {
  return BoxStyle3_jsx("div", {
    className: `boxStyle3 ${className ? className : ''}`
  }, BoxStyle3_jsx("header", {
    className: "boxStyle3__header"
  }, BoxStyle3_jsx("span", {
    className: "boxStyle3__border"
  }), typeof headerContent === "string" ? BoxStyle3_jsx("h2", {
    className: "boxStyle3__header-text"
  }, headerContent) : headerContent), children);
});
// CONCATENATED MODULE: ./components/common/BoxStyle3/index.js

/* harmony default export */ var common_BoxStyle3 = (BoxStyle3);
// EXTERNAL MODULE: external "rc-progress"
var external_rc_progress_ = __webpack_require__("1tXf");

// CONCATENATED MODULE: ./components/common/ColorFullProgressBar/ColorFullProgressBar.jsx
var ColorFullProgressBar_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


 // import "./ColorFullProgressBar.scss";

/* harmony default export */ var ColorFullProgressBar = (_ref => {
  let {
    number,
    percent,
    colorfullnumber
  } = _ref,
      props = _objectWithoutProperties(_ref, ["number", "percent", "colorfullnumber"]);

  let color, style;

  if (percent > 50) {
    color = "#3ad976";
  } else if (percent > 30) {
    color = "#f0cd40";
  } else {
    color = "#f07040";
  }

  if (colorfullnumber) {
    style = {
      color: color
    };
  }

  return ColorFullProgressBar_jsx("div", {
    className: "progress"
  }, number && ColorFullProgressBar_jsx("span", {
    className: "progress__number"
  }, number), ColorFullProgressBar_jsx("span", {
    className: "progress__cnt"
  }, ColorFullProgressBar_jsx(external_rc_progress_["Line"], _extends({
    percent: percent,
    strokeColor: color
  }, props))), ColorFullProgressBar_jsx("span", {
    style: style,
    className: "progress__percent"
  }, percent, "%"));
});
// CONCATENATED MODULE: ./components/common/ColorFullProgressBar/index.js

// CONCATENATED MODULE: ./components/common/StarRating/StarRating.jsx
var StarRating_jsx = external_react_default.a.createElement;

function StarRating_extends() { StarRating_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return StarRating_extends.apply(this, arguments); }

function StarRating_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = StarRating_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function StarRating_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const renderStarIcon = (index, value) => {
  return StarRating_jsx("img", {
    alt: "star",
    className: "goodItem-s2__star",
    src: index <= value ? img_star_default.a : img_star_gray_default.a
  });
};

/* harmony default export */ var StarRating = (_ref => {
  let {
    nextText
  } = _ref,
      props = StarRating_objectWithoutProperties(_ref, ["nextText"]);

  return StarRating_jsx("div", {
    className: "goodItem-s2__star-container"
  }, StarRating_jsx(external_react_star_rating_component_default.a, StarRating_extends({}, props, {
    renderStarIcon: renderStarIcon
  })), StarRating_jsx("span", {
    className: "goodItem-s2__start-count"
  }, nextText));
});
// CONCATENATED MODULE: ./components/common/SelectBox2/SelectBox2.jsx
var SelectBox2_jsx = external_react_default.a.createElement;

function SelectBox2_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import "./SelectBox2.scss";

class SelectBox2_SelectBox2 extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    SelectBox2_defineProperty(this, "updateChildren", () => {
      const children2 = external_react_default.a.Children.toArray(this.props.children);
      this.newChildren = children2.map(child => {
        if (child.type === SelectBox2_SelectBox2.SelectItem) {
          if (this.multiSelect) {
            for (let item of this.state.selectedItems) {
              if (child.props.name === item.name) return /*#__PURE__*/external_react_default.a.cloneElement(child, {
                handleChange: this.handleChange,
                selected: true
              });
            }

            return /*#__PURE__*/external_react_default.a.cloneElement(child, {
              handleChange: this.handleChange
            });
          } else if (child.props.name === this.state.selectedItem.name) {
            return /*#__PURE__*/external_react_default.a.cloneElement(child, {
              handleChange: this.handleChange,
              selected: true
            });
          } else return /*#__PURE__*/external_react_default.a.cloneElement(child, {
            handleChange: this.handleChange
          });
        } else {
          return child;
        }
      });
    });

    SelectBox2_defineProperty(this, "handleParentChange", () => {
      if (this.props.onChange) {
        if (this.multiSelect) this.props.onChange(this.state.selectedItems);else this.props.onChange(this.state.selectedItem);
      }
    });

    SelectBox2_defineProperty(this, "handleChange", (selectedItem, isSelected) => {
      if (this.multiSelect) {
        if (isSelected) {
          const newitems = this.state.selectedItems.filter(item => {
            return item.name !== selectedItem.name;
          });
          this.setState({
            selectedItems: newitems
          }, this.handleParentChange);
        } else this.setState({
          selectedItems: [...this.state.selectedItems, {
            value: selectedItem.value,
            name: selectedItem.name
          }]
        }, this.handleParentChange);
      } else {
        if (isSelected) {
          this.setState({
            selectedItem: {
              value: "",
              name: ""
            }
          }, this.handleParentChange);
        } else this.setState({
          selectedItem: {
            value: selectedItem.value,
            name: selectedItem.name
          }
        }, this.handleParentChange);
      }
    });

    this.multiSelect = this.props.multiSelect;
    if (this.multiSelect) this.state = {
      selectedItems: []
    };else this.state = {
      selectedItem: {
        value: this.props.selectedItemValue,
        name: this.props.selectedItemName
      }
    };
  }

  render() {
    this.updateChildren();
    return SelectBox2_jsx("div", {
      className: `SelectBox2 ${this.props.className ? this.props.className : ""}`
    }, this.newChildren);
  }

}
SelectBox2_SelectBox2.SelectItem = class extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    SelectBox2_defineProperty(this, "handleClick", () => {
      debugger;
      this.props.handleSelect(this.props.value);
      this.props.handleChange({
        value: this.props.value,
        name: this.props.name
      }, this.props.selected);
    });
  }

  componentDidMount() {
    if (this.props.selectedId != 0 && this.props.selectedId == this.props.value) {
      this.handleClick();
    }
  }

  render() {
    return SelectBox2_jsx(external_react_default.a.Fragment, null, SelectBox2_jsx("div", {
      className: "SelectBox2__item",
      onClick: this.handleClick
    }, SelectBox2_jsx("img", {
      className: "SelectBox2__img",
      alt: "select item",
      src: this.props.selected ? img_radio_button_on_default.a : img_radio_button_off_default.a
    }), SelectBox2_jsx("div", {
      className: "SelectBox2__content"
    }, this.props.children)));
  }

};
// CONCATENATED MODULE: ./components/common/SelectBox2/SelectBox3.jsx
var _class, _temp;

var SelectBox3_jsx = external_react_default.a.createElement;

function SelectBox3_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import "./SelectBox2.scss";


const SelectBoxContext = /*#__PURE__*/external_react_default.a.createContext();
class SelectBox3_SelectBox3 extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    SelectBox3_defineProperty(this, "handleChange", (selectedItem, isSelected) => {
      let newitems;

      if (this.props.multiSelect) {
        if (!isSelected) {
          newitems = this.state.selectedItems.filter(item => {
            return item.name !== selectedItem.name;
          });
        } else {
          newitems = [...this.state.selectedItems, selectedItem];
        }
      } else {
        if (!isSelected) {
          newitems = [];
        } else {
          newitems = [selectedItem];
        }
      }

      this.setState({
        selectedItems: newitems
      });
      this.props.onChange && this.props.onChange(newitems);
    });

    this.multiSelect = this.props.multiSelect;
    this.state = {
      handleChange: this.handleChange,
      selectedItems: this.props.selectedItems ? this.props.selectedItems : []
    };
  }

  render() {
    return SelectBox3_jsx(SelectBoxContext.Provider, {
      value: this.state
    }, SelectBox3_jsx("div", {
      className: `SelectBox2 ${this.props.className ? this.props.className : ""}`
    }, this.props.children));
  }

}
SelectBox3_SelectBox3.SelectItem = (_temp = _class = class extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    SelectBox3_defineProperty(this, "checkSelected", () => {
      for (let item of this.context.selectedItems) {
        if (item.name === this.props.name) {
          this.selected = true;
          return;
        }
      }

      this.selected = false;
    });

    SelectBox3_defineProperty(this, "handleClick", () => {
      this.selected = !this.selected;
      this.context.handleChange({
        value: this.props.value,
        name: this.props.name
      }, this.selected);
    });

    this.selected = false;
    this.state = {
      selected: false
    }; // this.justCircleClick = this.props.justCircleClick;
  }

  render() {
    this.checkSelected();
    return SelectBox3_jsx(external_react_default.a.Fragment, null, SelectBox3_jsx("div", {
      className: external_classnames_default()("SelectBox2__item", {
        "SelectBox2__item--circleClick": this.props.justCircleClick
      }),
      onClick: () => {
        if (!this.props.justCircleClick) {
          this.handleClick();
        }
      }
    }, SelectBox3_jsx("img", {
      className: "SelectBox2__img",
      alt: "select item",
      src: this.selected ? img_radio_button_on_default.a : img_radio_button_off_default.a,
      onClick: () => {
        if (this.props.justCircleClick) {
          this.handleClick();
        }
      }
    }), SelectBox3_jsx("div", {
      className: "SelectBox2__content"
    }, this.props.children)));
  }

}, SelectBox3_defineProperty(_class, "contextType", SelectBoxContext), _temp);
// EXTERNAL MODULE: ./components/app/header/LayoutsHeader/Nav/Items/item.jsx
var Items_item = __webpack_require__("K+uJ");

// EXTERNAL MODULE: ./components/app/header/LayoutsHeader/Nav/Category/category.jsx + 1 modules
var category = __webpack_require__("1SXp");

// EXTERNAL MODULE: ./assets/icons/house.svg
var house = __webpack_require__("aEEx");

// EXTERNAL MODULE: ./assets/icons/header-deals.svg
var header_deals = __webpack_require__("tfaz");

// EXTERNAL MODULE: ./assets/icons/header-OrderTracking.svg
var header_OrderTracking = __webpack_require__("e9Wp");

// EXTERNAL MODULE: ./assets/icons/header-help.svg
var header_help = __webpack_require__("2A/y");

// EXTERNAL MODULE: ./assets/icons/header-store.svg
var header_store = __webpack_require__("MF5A");

// EXTERNAL MODULE: ./assets/icons/store-icon.svg
var store_icon = __webpack_require__("d5cu");

// EXTERNAL MODULE: ./assets/images/logo-2.png
var logo_2 = __webpack_require__("nXN2");

// EXTERNAL MODULE: ./components/app/pages/Search/SearchLayout/CheckBoxList/CheckBoxList.jsx
var CheckBoxList = __webpack_require__("BtzS");

// CONCATENATED MODULE: ./components/app/pages/Search/SearchLayout/SeeMore/SeeMore.jsx
var SeeMore_jsx = external_react_default.a.createElement;
 //import classnames from "classnames";
// import "./SeeMore.scss";
//import "./SeeMore-rtl.scss";

/* harmony default export */ var SeeMore = (({
  children,
  textOpen,
  maxHeight,
  textClose
}) => {
  const {
    0: height,
    1: setheight
  } = Object(external_react_["useState"])("auto");

  const handleClick = e => {
    e.preventDefault();
    setheight(height === "auto" ? maxHeight : "auto");
  };

  return SeeMore_jsx(external_react_default.a.Fragment, null, SeeMore_jsx("div", {
    className: "seemore",
    style: {
      "max-height": maxHeight
    }
  }, children), SeeMore_jsx("a", {
    href: "",
    onClick: handleClick,
    className: "seemore__link"
  }, height === "auto" ? textClose : textOpen));
});
// EXTERNAL MODULE: ./components/app/pages/Search/SearchLayout/RangeBox/RangeBox.jsx
var RangeBox = __webpack_require__("7k10");

// EXTERNAL MODULE: ./lib/switch.js
var lib_switch = __webpack_require__("t8EK");

// EXTERNAL MODULE: ./components/app/pages/Search/SearchLayout/CheckBoxList/CheckBoxList2.jsx
var CheckBoxList2 = __webpack_require__("isJr");

// EXTERNAL MODULE: external "react-switch"
var external_react_switch_ = __webpack_require__("DbpL");
var external_react_switch_default = /*#__PURE__*/__webpack_require__.n(external_react_switch_);

// EXTERNAL MODULE: ./components/app/pages/Search/SearchLayout/CheckBoxList/BrandsCheckList.jsx
var BrandsCheckList = __webpack_require__("fwXw");

// CONCATENATED MODULE: ./components/common/MobileMenu/MobileMenu.jsx
var MobileMenu_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { MobileMenu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MobileMenu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import "./MobileMenu.scss";
// import "./MobileMenu-rtl.scss";































const MobileMenu = props => {
  var _props$filters, _props$filters2, _props$filters3, _props$filters4, _data$childCategory$c, _Object$keys;

  const disableBodyOverflow = flag => {
    if (flag) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
      props.closeMenu();
    }
  };

  const {
    asPath
  } = Object(router_["useRouter"])();
  const {
    0: specSelected,
    1: setSpecSelected
  } = Object(external_react_["useState"])(props.specSelected);
  const {
    0: range,
    1: setRange
  } = Object(external_react_["useState"])({});
  const {
    0: arrival,
    1: setArrival
  } = Object(external_react_["useState"])([(_props$filters = props.filters) === null || _props$filters === void 0 ? void 0 : _props$filters.goodsCreatedDay]);
  const {
    0: brands,
    1: setBrand
  } = Object(external_react_["useState"])({
    selected: props.selectedBrands,
    ids: (_props$filters2 = props.filters) === null || _props$filters2 === void 0 ? void 0 : _props$filters2.brandId
  });
  const {
    0: justExist,
    1: setJustExist
  } = Object(external_react_["useState"])((_props$filters3 = props.filters) === null || _props$filters3 === void 0 ? void 0 : _props$filters3.justExist);
  const {
    0: sortedId,
    1: setSortId
  } = Object(external_react_["useState"])((_props$filters4 = props.filters) === null || _props$filters4 === void 0 ? void 0 : _props$filters4.orderByType);
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const curr = Object(external_react_redux_["useSelector"])(appConfigSlice["g" /* selectCurr */]);
  const data = props.data; // document.getElementById('page-nav-toggle').checked = true;

  disableBodyOverflow(true);

  const handleFilterClick = () => {
    props.mobileFilterClick(arrival, brands, range, justExist);
    disableBodyOverflow(false);
  };

  const handleBrandClick = (brand, checked) => {
    const id = parseInt(brand.id);
    let selected = [...brands.selected];
    let ids = [...brands.ids];

    if (checked) {
      selected.push(brand);
      ids.push(id);
    } else {
      // if is remove
      selected = selected.filter(brand => {
        return brand.id != id;
      });
      const index = ids.indexOf(id);

      if (index > -1) {
        ids.splice(index, 1);
      }
    }

    setBrand({
      selected,
      ids
    });
  };

  const handleSortClick = () => {
    props.mobileSortClick(sortedId);
    disableBodyOverflow(false);
  };

  const handleSortChange = e => {
    setSortId(parseInt(e.target.value));
  };

  return MobileMenu_jsx("div", null, MobileMenu_jsx("input", {
    id: "page-nav-toggle",
    className: "main-navigation-toggle",
    type: "checkbox",
    defaultChecked: "true"
  }), MobileMenu_jsx("nav", {
    className: "main-navigation"
  }, MobileMenu_jsx("label", {
    className: "main-navigation-toggle-label",
    htmlFor: "page-nav-toggle"
  }, MobileMenu_jsx("svg", {
    onClick: () => disableBodyOverflow(false),
    id: "close_big",
    width: "24",
    height: "24",
    "data-name": "close big",
    viewBox: "0 0 24 24",
    className: "icon--menu-toggle-close"
  }, MobileMenu_jsx("g", {
    id: "close",
    transform: "translate(4.158 4.156)"
  }, MobileMenu_jsx("path", {
    id: "Path_537",
    fill: "#acb1b8",
    d: "M15.637 3.19l-4.9 4.9 4.9 4.9A1.867 1.867 0 1 1 13 15.64l-4.9-4.9-4.9 4.9A1.867 1.867 0 0 1 .547 13l4.9-4.9-4.9-4.9A1.867 1.867 0 0 1 3.187.548l4.9 4.9L13 .548a1.867 1.867 0 0 1 2.637 2.642z",
    "data-name": "Path 537",
    transform: "translate(0 -.002)"
  })))), props.weAreInPanel && props.userPanelNavi, MobileMenu_jsx("div", {
    ref: props.mainManuRef,
    className: external_classnames_default()({
      "mainMenu--inactive": props.weAreInPanel,
      mainMenu: props.weAreInPanel
    })
  }, props.isMainMenu === true ? MobileMenu_jsx("div", null, MobileMenu_jsx("div", {
    className: "main-navigation__logo"
  }, MobileMenu_jsx("img", {
    src: `${"http://ajyal.webtreeonline.com/Uploads/Images/Logo"}/${props.logo}`,
    alt: "logo2"
  })), MobileMenu_jsx("div", {
    className: "main-navigation__section"
  }, MobileMenu_jsx("div", {
    className: "main-navigation__sign-in"
  }, MobileMenu_jsx(link_default.a, {
    href: `/${curr}-${lang}/Auth`
  }, MobileMenu_jsx("a", {
    href: ""
  }, MobileMenu_jsx("img", {
    src: props.userCheckIcon,
    alt: "userCheckIcon"
  }), MobileMenu_jsx("span", null, MobileMenu_jsx(external_react_localize_redux_["Translate"], {
    id: "singin"
  }))))), MobileMenu_jsx("div", {
    className: "main-navigation__lang"
  }, MobileMenu_jsx("span", null, MobileMenu_jsx(external_react_localize_redux_["Translate"], {
    id: "language"
  })), props.lang.code === "en" ? MobileMenu_jsx("span", {
    className: "main-navigation__lang-ar",
    onClick: e => {
      e.preventDefault();
      Object(lib_switch["d" /* switchLang */])(asPath, true);
    }
  }, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629") : MobileMenu_jsx("span", {
    className: "main-navigation__lang-en",
    onClick: e => {
      e.preventDefault();
      Object(lib_switch["d" /* switchLang */])(asPath, true);
    }
  }, "English")), MobileMenu_jsx("div", {
    className: "main-navigation__lang",
    style: {
      borderBottom: "none"
    }
  }, MobileMenu_jsx("span", null, MobileMenu_jsx(external_react_localize_redux_["Translate"], {
    id: "currency"
  })), props.currency === "usd" ? MobileMenu_jsx("div", {
    className: "main-navigation__lang-ar",
    onClick: () => {
      Object(lib_switch["c" /* switchCurr */])(asPath, true);
    }
  }, MobileMenu_jsx("img", {
    className: "mr-3 ml-3",
    src: img_bahrain_default.a,
    alt: "bhd"
  }), "BHD") : MobileMenu_jsx("div", {
    className: "main-navigation__lang-en",
    onClick: () => {
      Object(lib_switch["c" /* switchCurr */])(asPath, true);
    }
  }, MobileMenu_jsx("img", {
    className: "mr-3 ml-3",
    src: img_united_states_default.a,
    alt: "usd"
  }), "USD")))) : MobileMenu_jsx("div", {
    style: {
      padding: "0 2rem"
    },
    className: "main-navigation__section-filter d-flex align-items-center"
  }, MobileMenu_jsx("h4", {
    className: "section-filter-top-title"
  }, props.filterSort ? MobileMenu_jsx(external_react_localize_redux_["Translate"], {
    id: "sort"
  }) : MobileMenu_jsx(external_react_localize_redux_["Translate"], {
    id: "filter"
  })), MobileMenu_jsx("span", {
    className: "section-filter-top-clear"
  })), props.filterSort || props.filtersMenu ? null : MobileMenu_jsx("div", {
    className: "main-navigation__section"
  }, MobileMenu_jsx(category["a" /* default */], {
    categoryTitle: MobileMenu_jsx(external_react_localize_redux_["Translate"], {
      id: "category"
    }),
    type: "mobile",
    data: props.data.categories
  })), props.isMainMenu === true ? MobileMenu_jsx("div", {
    className: "main-navigation__section main-navigation__items mb-5"
  }, MobileMenu_jsx("ul", null, MobileMenu_jsx("li", {
    className: "nav__item nav__item--secound"
  }, MobileMenu_jsx(link_default.a, {
    href: `/${curr}-${lang}`
  }, MobileMenu_jsx("a", null, MobileMenu_jsx(Items_item["a" /* default */], {
    content: MobileMenu_jsx(external_react_localize_redux_["Translate"], {
      id: "homeItem"
    }),
    isCategory: false,
    icon: MobileMenu_jsx(house["ReactComponent"], {
      className: "nav__item-svg"
    })
  })))), MobileMenu_jsx("li", {
    className: "nav__item"
  }, MobileMenu_jsx(link_default.a, {
    href: `/${curr}-${lang}/search?type=${querys["c" /* SEARCH_TYPE_DEAL */]}`
  }, MobileMenu_jsx("a", null, MobileMenu_jsx(Items_item["a" /* default */], {
    content: MobileMenu_jsx(external_react_localize_redux_["Translate"], {
      id: "dealsItem"
    }),
    isCategory: false,
    icon: MobileMenu_jsx(header_deals["ReactComponent"], {
      className: "nav__item-svg"
    })
  })))), MobileMenu_jsx("li", {
    className: "nav__item"
  }, MobileMenu_jsx(link_default.a, {
    href: `/${curr}-${lang}/tracking`
  }, MobileMenu_jsx("a", null, MobileMenu_jsx(Items_item["a" /* default */], {
    content: MobileMenu_jsx(external_react_localize_redux_["Translate"], {
      id: "orderTrackingItem"
    }),
    isCategory: false,
    icon: MobileMenu_jsx(header_OrderTracking["ReactComponent"], {
      className: "nav__item-svg"
    })
  })))), MobileMenu_jsx("li", {
    className: "nav__item"
  }, MobileMenu_jsx(link_default.a, {
    href: `/${curr}-${lang}/hc`
  }, MobileMenu_jsx("a", null, MobileMenu_jsx(Items_item["a" /* default */], {
    content: MobileMenu_jsx(external_react_localize_redux_["Translate"], {
      id: "helpCenterItem"
    }),
    isCategory: false,
    icon: MobileMenu_jsx(header_help["ReactComponent"], {
      className: "nav__item-svg"
    })
  })))), MobileMenu_jsx("li", {
    className: "nav__item"
  }, MobileMenu_jsx(link_default.a, {
    href: `/${curr}-${lang}/vendors`
  }, MobileMenu_jsx("a", null, MobileMenu_jsx(Items_item["a" /* default */], {
    content: MobileMenu_jsx(external_react_localize_redux_["Translate"], {
      id: "main-nav.storeList"
    }),
    isCategory: false,
    icon: MobileMenu_jsx(store_icon["ReactComponent"], {
      className: "nav__item-svg"
    })
  })))), MobileMenu_jsx("li", {
    className: "nav__item nav__item--last"
  }, MobileMenu_jsx(link_default.a, {
    href: `/${curr}-${lang}/becomeSeller`
  }, MobileMenu_jsx("a", null, MobileMenu_jsx(Items_item["a" /* default */], {
    content: MobileMenu_jsx(external_react_localize_redux_["Translate"], {
      id: "sellWithUsItem"
    }),
    isCategory: false,
    icon: MobileMenu_jsx(header_store["ReactComponent"], {
      className: "nav__item-svg"
    })
  })))))) : MobileMenu_jsx("div", {
    className: "main-navigation__section-filter main-navigation__section-filter--items"
  }, props.filterSort ? MobileMenu_jsx("div", {
    className: "section-filter-sort"
  }, props.sortedBy.map(sort => {
    return MobileMenu_jsx("label", {
      key: sort.value,
      htmlFor: `rdo-${sort.value}`
    }, MobileMenu_jsx("input", {
      type: "radio",
      className: "option-input radio",
      name: sort.label,
      value: sort.value,
      id: `rdo-${sort.value}`,
      checked: sort.value === sortedId,
      onChange: handleSortChange
    }), sort.label);
  })) : MobileMenu_jsx("div", null, props.providerMenu && MobileMenu_jsx(Dropdown["a" /* default */], {
    alwaysOpen: false,
    headerClass: "search__filter-header",
    containerClass: "search__list-container",
    text: MobileMenu_jsx(external_react_localize_redux_["Translate"], {
      id: "searchAside.FeaturedCategories"
    })
  }, MobileMenu_jsx("ul", {
    className: "search__filter-list"
  }, data.childCategory && data.childCategory.map(cat => {
    return MobileMenu_jsx("li", {
      key: cat.categoryId,
      className: "search__list-item"
    }, MobileMenu_jsx(Dropdown["a" /* default */], {
      headerClass: "search__drop-header",
      text: cat.categoryTitle,
      haveLink: true,
      link: `/${curr}-${lang}/${props.providerName}?id=${cat.categoryId}`
    }, MobileMenu_jsx("ul", {
      className: "search__drop-list"
    }, cat.child && cat.child.map(child2 => {
      return MobileMenu_jsx("li", {
        key: child2.categoryId,
        className: "search__list-item"
      }, MobileMenu_jsx(link_default.a, {
        href: `/${curr}-${lang}/${props.providerName}?id=${child2.categoryId}`
      }, MobileMenu_jsx("a", {
        onClick: () => {
          disableBodyOverflow(false);
        },
        className: "search__list-link"
      }, child2.categoryTitle)));
    }))));
  }))), props.searchMenu && data.childCategory && MobileMenu_jsx(Dropdown["a" /* default */], {
    alwaysOpen: true,
    headerClass: "search__filter-header",
    containerClass: "search__list-container",
    text: data.childCategory.categoryTitle
  }, MobileMenu_jsx("ul", {
    className: "search__filter-list"
  }, (_data$childCategory$c = data.childCategory.child) === null || _data$childCategory$c === void 0 ? void 0 : _data$childCategory$c.map(cat => {
    return MobileMenu_jsx("li", {
      key: cat.categoryId,
      className: "search__list-item"
    }, MobileMenu_jsx(Dropdown["a" /* default */], {
      headerClass: "search__drop-header",
      text: cat.categoryTitle
    }, MobileMenu_jsx("ul", {
      className: "search__drop-list"
    }, cat.child && cat.child.map(child2 => {
      return MobileMenu_jsx("li", {
        key: child2.categoryId,
        className: "search__list-item"
      }, MobileMenu_jsx(link_default.a, {
        href: `/${props.curr}-${props.lang}/search?type=3&id=${child2.categoryId}`
      }, MobileMenu_jsx("a", {
        onClick: () => {
          disableBodyOverflow(false);
        },
        className: "search__list-link"
      }, child2.categoryTitle)));
    }))));
  }))), MobileMenu_jsx(Dropdown["a" /* default */], {
    alwaysOpen: false,
    headerClass: "search__filter-header",
    containerClass: "search__list-container",
    text: MobileMenu_jsx(external_react_localize_redux_["Translate"], {
      id: "searchAside.NewArrivals"
    })
  }, MobileMenu_jsx(CheckBoxList["a" /* default */], {
    listClass: "search__filter-list",
    itemClass: "search__list-item search__list-item--check",
    data: props.arrivals,
    dataName: "title",
    dataValue: "value",
    initialSelectIdArr: arrival,
    singleSelect: true,
    onSelect: arr => {
      setArrival(arr);
    }
  })), (_Object$keys = Object.keys(data.specs || {})) === null || _Object$keys === void 0 ? void 0 : _Object$keys.map(key => {
    return MobileMenu_jsx(Dropdown["a" /* default */], {
      key: data.specs[key].specId,
      alwaysOpen: false,
      headerClass: "search__filter-header",
      containerClass: "search__list-container",
      text: data.specs[key].specTitle
    }, MobileMenu_jsx(CheckBoxList2["a" /* default */], {
      listClass: "search__filter-list",
      itemClass: "search__list-item search__list-item--check",
      data: data.specs[key].options,
      dataName: "optionTitle",
      dataValue: "optionId",
      initialSelectIdArr: specSelected[key],
      singleSelect: !data.specs[key].isMultiSelectInFilter,
      onSelect: arr => {
        props.handleSpecSelect(data.specs[key].specId, arr, true);
        setSpecSelected(_objectSpread(_objectSpread({}, specSelected), {}, {
          [data.specs[key].specId]: arr
        }));
      }
    }));
  }), MobileMenu_jsx(Dropdown["a" /* default */], {
    alwaysOpen: false,
    headerClass: "search__filter-header",
    containerClass: "search__list-container",
    text: MobileMenu_jsx(external_react_localize_redux_["Translate"], {
      id: "searchAside.Price"
    })
  }, MobileMenu_jsx(RangeBox["a" /* default */], {
    show: false,
    min: 0,
    max: data.maxPrice,
    onChange: value => {
      setRange(value);
    },
    setText: MobileMenu_jsx(external_react_localize_redux_["Translate"], {
      id: "setPrice"
    })
  })), MobileMenu_jsx(Dropdown["a" /* default */], {
    alwaysOpen: false,
    headerClass: "search__filter-header",
    containerClass: "search__list-container",
    text: MobileMenu_jsx(external_react_localize_redux_["Translate"], {
      id: "searchAside.Brand"
    })
  }, MobileMenu_jsx(external_react_localize_redux_["Translate"], null, ({
    translate
  }) => {
    var _props$filters5;

    return MobileMenu_jsx(BrandsCheckList["a" /* default */], {
      catId: (_props$filters5 = props.filters) === null || _props$filters5 === void 0 ? void 0 : _props$filters5.id,
      itemClass: "search__list-item search__list-item--check",
      listClass: "search__filter-list",
      placeholder: translate("searchplaceholder"),
      selecteIds: brands.ids,
      onSelect: (brand, checked) => {
        handleBrandClick(brand, checked); // this.props.brandsChangedAction(brand, checked);
      }
    }) // <CheckBoxList2
    //   search
    //   textOpen={<Translate id="seemore" />}
    //   textClose="close"
    //   seeMore
    //   maxItemShow={2}
    //   placeholder={translate("searchplaceholder")}
    //   data={data.brands}
    //   dataName="brandTitle"
    //   dataValue="brandId"
    //   initialSelectIdArr={brands}
    //   listClass="search__filter-list"
    //   itemClass="search__list-item search__list-item--check"
    //   onSelect={(arr) => {
    //     setBrands(arr);
    //   }}
    // />
    ;
  })), MobileMenu_jsx("div", {
    className: `dropdown search__list-container`
  }, MobileMenu_jsx("div", {
    href: "#",
    className: `dropdown__link search__filter-header single-lined`
  }, MobileMenu_jsx("span", null, MobileMenu_jsx(external_react_localize_redux_["Translate"], {
    id: "just-exist"
  })), MobileMenu_jsx(external_react_switch_default.a, {
    onChange: checked => {
      setJustExist(checked);
    } // width={46}
    // height={22}
    ,
    uncheckedIcon: "",
    checkedIcon: "",
    checked: justExist
  }))))))), !props.isMainMenu ? MobileMenu_jsx("div", {
    className: "section-filter-button"
  }, props.filterSort ? MobileMenu_jsx(Button_Button, {
    onClick: handleSortClick,
    radius: false,
    value: MobileMenu_jsx(external_react_localize_redux_["Translate"], {
      id: "sort"
    })
  }) : MobileMenu_jsx(Button_Button, {
    onClick: handleFilterClick,
    radius: false,
    value: MobileMenu_jsx(external_react_localize_redux_["Translate"], {
      id: "filter3"
    })
  })) : null);
};

/* harmony default export */ var MobileMenu_MobileMenu = (MobileMenu);
// EXTERNAL MODULE: ./assets/icons/order-status/cancelled.svg
var cancelled = __webpack_require__("RvTX");

// EXTERNAL MODULE: ./assets/icons/order-status/delivered.svg
var delivered = __webpack_require__("/FKe");

// EXTERNAL MODULE: ./assets/icons/order-status/porcessing.svg
var porcessing = __webpack_require__("yKZ5");

// EXTERNAL MODULE: ./assets/icons/order-status/confirmed.svg
var confirmed = __webpack_require__("4XW2");

// EXTERNAL MODULE: ./assets/icons/order-status/completed.svg
var completed = __webpack_require__("j6jx");

// EXTERNAL MODULE: ./assets/icons/order-status/ongoing.svg
var ongoing = __webpack_require__("Q21r");

// EXTERNAL MODULE: ./assets/icons/order-status/return-complete.svg
var return_complete = __webpack_require__("rIwL");

// EXTERNAL MODULE: ./assets/icons/order-status/return-processing.svg
var return_processing = __webpack_require__("w+QA");

// EXTERNAL MODULE: ./assets/icons/order-status/shipped.svg
var shipped = __webpack_require__("ELs5");

// EXTERNAL MODULE: ./assets/icons/order-status/shipping.svg
var shipping = __webpack_require__("rdeP");

// CONCATENATED MODULE: ./components/common/GoodSituation/GoodSituation.jsx
var GoodSituation_jsx = external_react_default.a.createElement;
 // import "./GoodSituation.scss";











/* harmony default export */ var GoodSituation = (props => {
  let icon, color, text;

  switch (props.id) {
    case 1:
      icon = GoodSituation_jsx(ongoing["ReactComponent"], null);
      color = "#f0cd40";
      text = props.title;
      break;

    case 2:
      icon = GoodSituation_jsx(confirmed["ReactComponent"], null);
      color = "#f0cd40";
      text = props.title;
      break;

    case 3:
      icon = GoodSituation_jsx(porcessing["ReactComponent"], null);
      color = "#0288d1";
      text = props.title;
      break;

    case 4:
      icon = GoodSituation_jsx(shipping["ReactComponent"], null);
      color = "#0288d1";
      text = props.title;
      break;

    case 5:
      icon = GoodSituation_jsx(shipped["ReactComponent"], null);
      color = "#0288d1";
      text = props.title;
      break;

    case 6:
      icon = GoodSituation_jsx(delivered["ReactComponent"], null);
      color = "#0288d1";
      text = props.title;
      break;

    case 7:
      icon = GoodSituation_jsx(completed["ReactComponent"], null);
      color = "#3ad976";
      text = props.title;
      break;

    case 100:
      icon = GoodSituation_jsx(cancelled["ReactComponent"], null);
      color = "#f07040";
      text = props.title;
      break;

    case 200:
      icon = GoodSituation_jsx(return_processing["ReactComponent"], null);
      color = "#0288d1";
      text = props.title;
      break;

    case 201:
      icon = GoodSituation_jsx(return_complete["ReactComponent"], null);
      color = "#0288d1";
      text = props.title;
      break;

    default:
      break;
  }

  return GoodSituation_jsx("div", {
    className: "goodsitua"
  }, icon, GoodSituation_jsx("span", {
    className: "goodsitua__text",
    style: {
      color: color
    }
  }, text));
});
// CONCATENATED MODULE: ./components/common/DeliveryProgress/DeliveryProgress.jsx
var DeliveryProgress_jsx = external_react_default.a.createElement;
 // import './DeliveryProgress.scss';

/* harmony default export */ var DeliveryProgress = (({
  processing,
  delivered,
  fillItemCount,
  stepCount
}) => {
  let classname;
  if (delivered) classname = "delivery-progress__item--green";
  if (processing) classname = "delivery-progress__item--orange";
  let items = [];

  for (let i = 0; i < stepCount; i++) {
    if (i < fillItemCount) {
      items.push(DeliveryProgress_jsx("span", {
        className: `delivery-progress__item ${classname}`
      }));
    } else {
      items.push(DeliveryProgress_jsx("span", {
        className: "delivery-progress__item"
      }));
    }
  }

  return DeliveryProgress_jsx("div", {
    className: "delivery-progress"
  }, items);
});
// EXTERNAL MODULE: ./assets/icons/close-naviblue.svg
var close_naviblue = __webpack_require__("ozmN");

// EXTERNAL MODULE: ./assets/icons/add-icon.svg
var add_icon = __webpack_require__("11Tc");

// CONCATENATED MODULE: ./components/common/MultiAddInput/MultiAddInput.jsx
var MultiAddInput_jsx = external_react_default.a.createElement;

function MultiAddInput_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import "./MultiAddInput.scss";



let MultiAddInput_id = 0;
/* harmony default export */ var MultiAddInput = (class extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    MultiAddInput_defineProperty(this, "handleCloseClick", (itemIndex, e) => {
      // const newItems = this.state.items.filter((item) => {
      //   return item.id !== itemId;
      // });
      // this.setState({ items: [...newItems] });
      this.props.handleCloseClick(itemIndex);
    });

    MultiAddInput_defineProperty(this, "handleAddClick", e => {
      if (!this.state.inputText) return; // this.setState({
      //   items: [
      //     ...this.state.items,
      //     {
      //       id: id,
      //       text: this.state.inputText,
      //       item: (
      //         <li
      //           className="multiaddinput__list-item"
      //           style={{
      //             backgroundColor: this.props.itemBgColor,
      //             color: this.props.itemColor,
      //           }}
      //           key={id}
      //         >
      //           {this.state.inputText}
      //           <CloseIcon
      //             onClick={this.handleCloseClick.bind(this, id)}
      //             className="multiaddinput__close-icon"
      //           />
      //         </li>
      //       ),
      //     },
      //   ],
      // });

      this.props.handleAddClick(this.state.inputText);
      MultiAddInput_id++;
      this.setState({
        inputText: ""
      });
      this.inputRef.current.focus();
    });

    this.inputRef = /*#__PURE__*/external_react_default.a.createRef();
    this.state = {
      items: [],
      inputText: ""
    };
  }

  render() {
    var _this$props$items;

    return MultiAddInput_jsx("div", {
      className: "multiaddinput"
    }, MultiAddInput_jsx("div", {
      className: "multiaddinput__input-cnt"
    }, MultiAddInput_jsx("input", {
      id: this.props.name,
      ref: this.inputRef,
      name: this.props.name,
      placeholder: this.props.placeholder,
      type: "text",
      className: "gray__input multiaddinput__input",
      value: this.state.inputText,
      onChange: e => {
        this.setState({
          inputText: e.target.value
        });
      }
    }), MultiAddInput_jsx("span", {
      onClick: this.handleAddClick,
      className: "multiaddinput__icon-cnt"
    }, MultiAddInput_jsx(add_icon["ReactComponent"], {
      className: "multiaddinput__input-icon"
    }))), MultiAddInput_jsx("ul", {
      className: "multiaddinput__list"
    }, (_this$props$items = this.props.items) === null || _this$props$items === void 0 ? void 0 : _this$props$items.map((item, index) => {
      return MultiAddInput_jsx("li", {
        className: "multiaddinput__list-item",
        style: {
          backgroundColor: this.props.itemBgColor,
          color: this.props.itemColor
        },
        key: index
      }, item.pointText, this.props.disabled ? null : MultiAddInput_jsx(close_naviblue["ReactComponent"], {
        onClick: this.handleCloseClick.bind(this, index),
        className: "multiaddinput__close-icon"
      }));
    })));
  }

});
// EXTERNAL MODULE: ./assets/icons/img-open-menu.svg
var img_open_menu = __webpack_require__("4dkq");
var img_open_menu_default = /*#__PURE__*/__webpack_require__.n(img_open_menu);

// CONCATENATED MODULE: ./components/common/MobileItemDrop/MobileItemDrop.jsx
var MobileItemDrop_jsx = external_react_default.a.createElement;
 // import './MobileItemDrop.scss'


/* harmony default export */ var MobileItemDrop = (({
  children
}) => {
  return MobileItemDrop_jsx("div", {
    className: "mobile-drop"
  }, MobileItemDrop_jsx("img", {
    src: img_open_menu_default.a,
    alt: "drop icon",
    className: "mobile-drop__icon"
  }), MobileItemDrop_jsx("div", {
    className: "mobile-drop__content"
  }, children));
});
// EXTERNAL MODULE: external "react-dropzone"
var external_react_dropzone_ = __webpack_require__("aNEW");

// EXTERNAL MODULE: ./assets/icons/createshop/img-upload.svg
var img_upload = __webpack_require__("bsZb");
var img_upload_default = /*#__PURE__*/__webpack_require__.n(img_upload);

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");

// CONCATENATED MODULE: ./components/common/UploadBox/UploadBox.jsx
var UploadBox_jsx = external_react_default.a.createElement;
 // import "./UploadBox.scss";






function UploadBox(props, {
  className
}) {
  const {
    0: files,
    1: setFiles
  } = Object(external_react_["useState"])([]);
  const {
    getRootProps,
    getInputProps,
    open
  } = Object(external_react_dropzone_["useDropzone"])({
    accept: "image/*",
    noClick: true,
    noKeyboard: true,
    multiple: false,
    onDropAccepted: acceptedFiles => {
      props.handleSelectFile(acceptedFiles, props.index);
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const setInitialFile = () => {
    let arr = [];

    if (props.oldFile == undefined) {
      return;
    }

    if (props.oldFile[props.index] != null) {
      if (props.oldFile[props.index] == files[0]) {
        return;
      }

      arr.push(props.oldFile[props.index]);
      setFiles(arr.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  };

  Object(external_react_["useEffect"])(() => {
    setInitialFile();
  }, [files]);
  const thumbs = files.map(file => UploadBox_jsx("img", {
    src: file.preview,
    key: file.name,
    className: "uploadBox__img",
    alt: "upload"
  }));
  const names = files.map(file => {
    return UploadBox_jsx("li", {
      className: "mb-2"
    }, UploadBox_jsx("span", {
      className: "uploadBox__drag-text"
    }, file.name));
  });

  if (thumbs.length === 0) {
    thumbs.push(UploadBox_jsx("img", {
      src: img_upload_default.a,
      key: Object(external_uuid_["v4"])(),
      alt: "upload icon",
      className: "uploadBox__img uploadBox__img--icon"
    }));
  }

  return UploadBox_jsx("section", {
    className: `uploadBox ${className ? className : ""}`
  }, UploadBox_jsx("div", getRootProps({
    className: "dropzone"
  }), UploadBox_jsx("input", getInputProps()), UploadBox_jsx("div", {
    className: "d-flex flex-row align-items-center"
  }, UploadBox_jsx("div", {
    className: "uploadBox__img-cnt"
  }, thumbs), UploadBox_jsx("div", {
    className: "uploadBox__right d-flex flex-row align-items-center flex-wrap"
  }, UploadBox_jsx("ul", {
    className: "w-100 p-0 m-0"
  }, names), UploadBox_jsx("span", {
    className: "uploadBox__drag-text"
  }, UploadBox_jsx(external_react_localize_redux_["Translate"], {
    id: "upload.drag-drop"
  })), UploadBox_jsx("button", {
    onClick: open,
    className: "uploadBox__browse",
    type: "button"
  }, UploadBox_jsx(external_react_localize_redux_["Translate"], {
    id: "upload.browse"
  }))))));
}
// EXTERNAL MODULE: ./assets/icons/correct.svg
var correct = __webpack_require__("3L5Z");

// EXTERNAL MODULE: ./assets/icons/faild.svg
var icons_faild = __webpack_require__("JJGT");

// CONCATENATED MODULE: ./components/common/Alert/Alert.jsx
var Alert_jsx = external_react_default.a.createElement;

 // import "./Alert.scss";
// import { LandScapePhones } from "../../../Responsive";






/* harmony default export */ var Alert = (({
  to,
  btnText,
  topText,
  btmText,
  faild
}) => {
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const curr = Object(external_react_redux_["useSelector"])(appConfigSlice["g" /* selectCurr */]);
  return Alert_jsx(BoxStyle2["a" /* default */], {
    className: "cancel-result flex-wrap no-gutters mt-0 alert"
  }, faild ? Alert_jsx(icons_faild["ReactComponent"], {
    className: "cancel-result__icon col-12 col-md-auto"
  }) : Alert_jsx(correct["ReactComponent"], {
    className: "cancel-result__icon col-12 col-md-auto"
  }), Alert_jsx("div", {
    style: {
      flexGrow: 1
    }
  }, Alert_jsx("p", {
    className: "cancel-result__text"
  }, topText), btmText && Alert_jsx("p", {
    style: {
      color: "#4d5a6c",
      fontWeight: "normal"
    },
    className: "mt-2 cancel-result__text"
  }, btmText)), Alert_jsx(link_default.a, {
    href: "/[lang-curr]",
    as: `/${curr}-${lang}`
  }, Alert_jsx("a", {
    style: {
      width: "200px"
    },
    className: "mt-4 mt-md-0 primary-btn col-12 col-md-auto"
  }, btnText)));
});
// EXTERNAL MODULE: ./assets/images/breadcrump.png
var breadcrump = __webpack_require__("srzv");
var breadcrump_default = /*#__PURE__*/__webpack_require__.n(breadcrump);

// CONCATENATED MODULE: ./components/common/BreadCrump/BreadCrump.jsx
var BreadCrump_jsx = external_react_default.a.createElement;







/* harmony default export */ var BreadCrump = (({
  className,
  data,
  isGoodsDetails,
  goodsName
}) => {
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const curr = Object(external_react_redux_["useSelector"])(appConfigSlice["g" /* selectCurr */]);
  return BreadCrump_jsx("div", {
    className: `breadcrump ${className}`
  }, BreadCrump_jsx("ul", {
    className: "breadcrump__list"
  }, BreadCrump_jsx("li", {
    className: "breadcrump__item",
    key: "id1214"
  }, BreadCrump_jsx(link_default.a, {
    href: `/${curr}-${lang}`
  }, BreadCrump_jsx("a", {
    className: "breadcrump__link"
  }, BreadCrump_jsx(external_react_localize_redux_["Translate"], {
    id: "home"
  }))), BreadCrump_jsx("i", {
    className: "breadcrump__img-cnt"
  }, BreadCrump_jsx("img", {
    src: breadcrump_default.a,
    alt: "breadcrump icon"
  }))), data && data.map((cat, index) => {
    return BreadCrump_jsx("li", {
      key: index,
      className: "breadcrump__item"
    }, BreadCrump_jsx(link_default.a, {
      href: `/${curr}-${lang}/search?type=${querys["b" /* SEARCH_TYPE_CATEGORY */]}&id=${cat.categoryId}`
    }, BreadCrump_jsx("a", {
      className: "breadcrump__link"
    }, cat.categoryTitle)), BreadCrump_jsx("i", {
      className: "breadcrump__img-cnt"
    }, BreadCrump_jsx("img", {
      src: breadcrump_default.a,
      alt: "breadcrump icon"
    })));
  }), isGoodsDetails ? BreadCrump_jsx("li", {
    className: "breadcrump__item"
  }, BreadCrump_jsx("a", {
    className: "breadcrump__link"
  }, goodsName), BreadCrump_jsx("i", {
    className: "breadcrump__img-cnt"
  }, BreadCrump_jsx("img", {
    src: breadcrump_default.a,
    alt: "breadcrump icon"
  }))) : null));
});
// EXTERNAL MODULE: external "react-content-loader"
var external_react_content_loader_ = __webpack_require__("EGWi");
var external_react_content_loader_default = /*#__PURE__*/__webpack_require__.n(external_react_content_loader_);

// EXTERNAL MODULE: ./assets/images/img-image-placeholder.svg
var img_image_placeholder = __webpack_require__("eaBv");
var img_image_placeholder_default = /*#__PURE__*/__webpack_require__.n(img_image_placeholder);

// CONCATENATED MODULE: ./components/common/GoodItemLoader/GoodItemLoader.jsx
var GoodItemLoader_jsx = external_react_default.a.createElement;

function GoodItemLoader_extends() { GoodItemLoader_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return GoodItemLoader_extends.apply(this, arguments); }




const props2 = {
  speed: 2,
  width: "100%",
  height: "100%",
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
};

const GoodItemLoader = props => {
  return GoodItemLoader_jsx("div", {
    className: `goodItem-s1-container goodItem-loader ${props.className ? props.className : ""}`
  }, GoodItemLoader_jsx("article", {
    className: "goodItem-s1"
  }, GoodItemLoader_jsx("figure", {
    className: "goodItem-s1__fig goodItem-loader__img-cnt"
  }, GoodItemLoader_jsx("img", {
    className: "goodItem-loader__img",
    src: img_image_placeholder_default.a
  })), GoodItemLoader_jsx(external_react_content_loader_default.a, GoodItemLoader_extends({
    uniqueKey: "my-random-valye",
    width: 100,
    height: 25 // viewBox="0 0 100 100"
    ,
    style: {
      width: "100%"
    }
  }, props), GoodItemLoader_jsx("rect", {
    x: "0",
    y: "0",
    rx: "3",
    ry: "3",
    width: "100%",
    height: "25"
  })), GoodItemLoader_jsx("div", {
    className: "d-flex justify-content-between"
  }, GoodItemLoader_jsx("div", {
    className: "w-100 mt-3",
    style: {
      flexBasis: "63%"
    }
  }, GoodItemLoader_jsx(external_react_content_loader_default.a, GoodItemLoader_extends({
    width: 100,
    uniqueKey: "qweqweqw",
    height: 50 // viewBox="0 0 100 100"
    ,
    style: {
      width: "100%"
    }
  }, props), GoodItemLoader_jsx("rect", {
    x: "0",
    y: "0",
    rx: "3",
    ry: "3",
    width: "100%",
    height: "40"
  }))), GoodItemLoader_jsx("div", {
    className: "mt-3",
    style: {
      flexBasis: "29%"
    }
  }, GoodItemLoader_jsx(external_react_content_loader_default.a, GoodItemLoader_extends({
    width: 30,
    height: 50 // viewBox="0 0 100 100"
    ,
    style: {
      width: "100%"
    }
  }, props), GoodItemLoader_jsx("circle", {
    cx: "20",
    cy: "20",
    r: "20"
  }))))));
};

/* harmony default export */ var GoodItemLoader_GoodItemLoader = (GoodItemLoader);
// CONCATENATED MODULE: ./components/common/GoodItemLoader/GoodItemRowLoader.jsx
var GoodItemRowLoader_jsx = external_react_default.a.createElement;

function GoodItemRowLoader_extends() { GoodItemRowLoader_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return GoodItemRowLoader_extends.apply(this, arguments); }




const GoodItemRowLoader_props2 = {
  speed: 2,
  width: "100%",
  height: "100%",
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
};

const GoodItemRowLoader_GoodItemLoader = props => {
  return GoodItemRowLoader_jsx("div", {
    className: "goodItem-s2-container goodItem-loader goodItem-loader--row",
    href: "#"
  }, GoodItemRowLoader_jsx("article", {
    className: "goodItem-s2"
  }, GoodItemRowLoader_jsx("div", {
    className: "goodItem-s2__left-container"
  }, GoodItemRowLoader_jsx("figure", {
    className: "goodItem-s2__fig goodItem-loader__img-cnt goodItem-loader__img-cnt--row"
  }, GoodItemRowLoader_jsx("img", {
    className: "goodItem-loader__img--row goodItem-loader__img",
    alt: "loader",
    title: "loader",
    src: img_image_placeholder_default.a
  })), GoodItemRowLoader_jsx("div", {
    className: "goodItem-s2__left-right"
  }, GoodItemRowLoader_jsx(external_react_content_loader_default.a, GoodItemRowLoader_extends({
    uniqueKey: "my-random-valye",
    width: 100,
    height: 100 // viewBox="0 0 100 100"
    ,
    style: {
      width: "100%"
    }
  }, props), GoodItemRowLoader_jsx("rect", {
    x: "0",
    y: "25",
    rx: "3",
    ry: "3",
    width: "100%",
    height: "30"
  }), GoodItemRowLoader_jsx("rect", {
    x: "0",
    y: "65",
    rx: "3",
    ry: "3",
    width: "30%",
    height: "25"
  })))), !props.withoutRightBox && GoodItemRowLoader_jsx("div", {
    className: "goodItem-s2__right-container"
  })));
};

/* harmony default export */ var GoodItemRowLoader = (GoodItemRowLoader_GoodItemLoader);
// CONCATENATED MODULE: ./components/common/FormErrorMsg/FormErrorMsg.jsx
var FormErrorMsg_jsx = external_react_default.a.createElement;


const FormErrorMsg = ({
  show,
  msg,
  style
}) => {
  if (!show) return null;
  return FormErrorMsg_jsx("p", {
    className: "form-err",
    style: style
  }, msg);
};

/* harmony default export */ var FormErrorMsg_FormErrorMsg = (FormErrorMsg);
// EXTERNAL MODULE: ./assets/icons/img-loader-ora.svg
var img_loader_ora = __webpack_require__("4muE");
var img_loader_ora_default = /*#__PURE__*/__webpack_require__.n(img_loader_ora);

// CONCATENATED MODULE: ./components/common/PageLoading/PageLoading.jsx
var PageLoading_jsx = external_react_default.a.createElement;






const PageLoading = () => {
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  return PageLoading_jsx("div", {
    className: "pageloading d-flex"
  }, PageLoading_jsx("img", {
    className: "pageloading__img",
    alt: "loading...",
    title: "loading...",
    src: img_loader_ora_default.a
  }), PageLoading_jsx("p", {
    className: "pageloading__text"
  }, Object(helpers["d" /* isAr */])(lang) ? "تحميل الصفحة" : "Loading Page"));
};

/* harmony default export */ var PageLoading_PageLoading = (PageLoading);
// CONCATENATED MODULE: ./components/common/GoodItemLoader/GoodItemLoader2.jsx
var GoodItemLoader2_jsx = external_react_default.a.createElement;



const GoodItemLoader2 = props => {
  return GoodItemLoader2_jsx("div", {
    className: `goodItem-s1-container goodItem-loader ${props.className ? props.className : ""}`
  }, GoodItemLoader2_jsx("article", {
    className: "goodItem-s1"
  }, GoodItemLoader2_jsx("figure", {
    className: "goodItem-s1__fig goodItem-loader__img-cnt"
  }, GoodItemLoader2_jsx("img", {
    className: "goodItem-loader__img",
    src: img_image_placeholder_default.a
  })), GoodItemLoader2_jsx("div", {
    className: "d-flex justify-content-between"
  }, GoodItemLoader2_jsx("div", {
    className: "w-100 mt-3",
    style: {
      flexBasis: "63%"
    }
  }, GoodItemLoader2_jsx("div", {
    className: "ssc-line w-100"
  }), GoodItemLoader2_jsx("div", {
    style: {
      width: "60%"
    },
    className: "ssc-line"
  })), GoodItemLoader2_jsx("div", {
    className: "mt-3",
    style: {
      flexBasis: "29%"
    }
  }, GoodItemLoader2_jsx("div", {
    style: {
      width: "40px",
      height: "40px"
    },
    className: " ssc-circle"
  })))));
};

/* harmony default export */ var GoodItemLoader_GoodItemLoader2 = (GoodItemLoader2);
// EXTERNAL MODULE: ./components/common/CategoryBoxStyle/CategoryBoxStyle.scss
var CategoryBoxStyle = __webpack_require__("/zgD");

// EXTERNAL MODULE: ./components/common/CategoryBoxStyle/CategoryBoxStyle-rtl.scss
var CategoryBoxStyle_rtl = __webpack_require__("Vhn9");

// CONCATENATED MODULE: ./components/common/CategoryBoxStyle/CategoryBoxStyle.jsx
var CategoryBoxStyle_jsx = external_react_default.a.createElement;








/* harmony default export */ var CategoryBoxStyle_CategoryBoxStyle = (({
  children,
  headerContent,
  link,
  className,
  childRef,
  showViewAll,
  viewAllId
}) => {
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const curr = Object(external_react_redux_["useSelector"])(appConfigSlice["g" /* selectCurr */]);
  return CategoryBoxStyle_jsx("div", {
    ref: childRef,
    className: `categoryBoxStyle ${className ? className : ""}`
  }, CategoryBoxStyle_jsx("header", {
    className: `categoryBoxStyle__header ${showViewAll == true ? 'categoryBoxStyle__header-with-view-all' : ''}`
  }, CategoryBoxStyle_jsx("span", {
    className: "categoryBoxStyle__border"
  }), typeof headerContent === "string" ? CategoryBoxStyle_jsx("h2", {
    className: "categoryBoxStyle__header-text"
  }, headerContent) : headerContent, showViewAll == true ? CategoryBoxStyle_jsx(link_default.a, {
    href: `${link}`
  }, CategoryBoxStyle_jsx("a", {
    className: "categoryBoxStyle__view-all-box"
  }, CategoryBoxStyle_jsx("span", null, CategoryBoxStyle_jsx(external_react_localize_redux_["Translate"], {
    id: "common.view-all"
  })))) : null), children);
});
// CONCATENATED MODULE: ./components/common/CategoryBoxStyle/index.js

/* harmony default export */ var common_CategoryBoxStyle = (CategoryBoxStyle_CategoryBoxStyle);
// CONCATENATED MODULE: ./components/common/index.js
































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

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nXN2":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-2-23b53d788a7bba6eb1cd962b57616dbb.png";

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

/***/ "ozmN":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4LjE2NSIgaGVpZ2h0PSI4LjE2NSIgdmlld0JveD0iMCAwIDguMTY1IDguMTY1Ij4NCiAgICA8ZyBpZD0iY2xvc2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLS4wMDIpIj4NCiAgICAgICAgPHBhdGggaWQ9IlBhdGhfNTM3IiBmaWxsPSIjMTcyODQwIiBkPSJNNy44ODkgMS42MUw1LjQxNSA0LjA4NGwyLjQ3NCAyLjQ3NWEuOTQyLjk0MiAwIDEgMS0xLjMzMiAxLjMzMkw0LjA4MiA1LjQxNyAxLjYwOCA3Ljg5MUEuOTQyLjk0MiAwIDEgMSAuMjc2IDYuNTU4TDIuNzUgNC4wODQuMjc2IDEuNjFBLjk0Mi45NDIgMCAwIDEgMS42MDguMjc4bDIuNDc0IDIuNDc0TDYuNTU3LjI3OEEuOTQyLjk0MiAwIDAgMSA3Ljg4OSAxLjYxeiIgZGF0YS1uYW1lPSJQYXRoIDUzNyIvPg0KICAgIDwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "pEL2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import "./BoxStyle2.scss";
// import "./BoxStyle2-rtl.scss";

/* harmony default export */ __webpack_exports__["a"] = (({
  children,
  headerContent,
  className
}) => {
  return __jsx("div", {
    className: `boxStyle2 ${className ? className : ''}`
  }, headerContent && headerContent, children);
});

/***/ }),

/***/ "ptTz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-star-rating-component"
var external_react_star_rating_component_ = __webpack_require__("txVm");
var external_react_star_rating_component_default = /*#__PURE__*/__webpack_require__.n(external_react_star_rating_component_);

// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__("E4SY");
var external_react_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_react_lazyload_);

// EXTERNAL MODULE: ./assets/icons/img-bst.svg
var img_bst = __webpack_require__("2TGm");
var img_bst_default = /*#__PURE__*/__webpack_require__.n(img_bst);

// EXTERNAL MODULE: ./assets/icons/img-bst-fill.svg
var img_bst_fill = __webpack_require__("q2sq");
var img_bst_fill_default = /*#__PURE__*/__webpack_require__.n(img_bst_fill);

// EXTERNAL MODULE: ./assets/icons/img-heart.svg
var img_heart = __webpack_require__("/L9k");
var img_heart_default = /*#__PURE__*/__webpack_require__.n(img_heart);

// EXTERNAL MODULE: ./assets/icons/img-heart-fill.svg
var img_heart_fill = __webpack_require__("hG8t");
var img_heart_fill_default = /*#__PURE__*/__webpack_require__.n(img_heart_fill);

// EXTERNAL MODULE: ./assets/icons/express.png
var express = __webpack_require__("TozK");
var express_default = /*#__PURE__*/__webpack_require__.n(express);

// EXTERNAL MODULE: ./assets/icons/express-ar.png
var express_ar = __webpack_require__("BgOU");
var express_ar_default = /*#__PURE__*/__webpack_require__.n(express_ar);

// EXTERNAL MODULE: ./assets/icons/marketplace.png
var marketplace = __webpack_require__("xYMx");
var marketplace_default = /*#__PURE__*/__webpack_require__.n(marketplace);

// EXTERNAL MODULE: ./assets/icons/marketplaceAr.png
var marketplaceAr = __webpack_require__("tQxu");
var marketplaceAr_default = /*#__PURE__*/__webpack_require__.n(marketplaceAr);

// EXTERNAL MODULE: ./assets/icons/img-star.svg
var img_star = __webpack_require__("SnCT");
var img_star_default = /*#__PURE__*/__webpack_require__.n(img_star);

// EXTERNAL MODULE: ./assets/icons/img-star-gray.svg
var img_star_gray = __webpack_require__("Uvuq");
var img_star_gray_default = /*#__PURE__*/__webpack_require__.n(img_star_gray);

// EXTERNAL MODULE: ./assets/icons/img-point.svg
var img_point = __webpack_require__("G7fd");
var img_point_default = /*#__PURE__*/__webpack_require__.n(img_point);

// EXTERNAL MODULE: ./assets/icons/img-good-Item-call.svg
var img_good_Item_call = __webpack_require__("KmJH");
var img_good_Item_call_default = /*#__PURE__*/__webpack_require__.n(img_good_Item_call);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./lib/isRtl.js
var isRtl = __webpack_require__("gtw1");

// EXTERNAL MODULE: ./appConfigSlice.js
var appConfigSlice = __webpack_require__("o2tl");

// EXTERNAL MODULE: external "react-localize-redux"
var external_react_localize_redux_ = __webpack_require__("tepj");

// EXTERNAL MODULE: ./lib/helpers.js
var helpers = __webpack_require__("FWZJ");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./lib/api/client/clientCart.js
var clientCart = __webpack_require__("CbI7");

// EXTERNAL MODULE: ./lib/api/axios.js
var axios = __webpack_require__("BfmP");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: ./components/common/Loading/Loading.jsx
var Loading = __webpack_require__("Pejl");

// EXTERNAL MODULE: ./components/common/GoodItemNavigation/GoodItemNavigation.jsx
var GoodItemNavigation = __webpack_require__("8tkK");

// EXTERNAL MODULE: ./components/app/pages/CartAndWishlist/cartAndWishlistSlice.js
var cartAndWishlistSlice = __webpack_require__("QQGX");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./components/common/GoodItem/GoodItem.jsx
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 // import "./GoodItem.scss";
// import "./GoodItem-rtl.scss";










 // import eyeeee from "./../../../assets/icons/img-eye.svg";


 // import Tooltip from "react-tooltip-lite";















const mapStateToProps = state => {
  return {
    lang: Object(appConfigSlice["h" /* selectLang */])(state),
    curr: Object(appConfigSlice["g" /* selectCurr */])(state),
    isLogin: Object(appConfigSlice["i" /* selectLogin */])(state).isLogin,
    cartCount: Object(cartAndWishlistSlice["o" /* selectCartCount */])(state),
    wishCount: Object(cartAndWishlistSlice["v" /* selectWishCount */])(state)
  };
};

const mapDispatchToProps = {
  saveLink: link => {
    return {
      type: appConfigSlice["d" /* PREVLINK_CHANGE */],
      payload: {
        link
      }
    };
  },
  addCartCount: cartAndWishlistSlice["c" /* addCartCount */],
  addWishCount: cartAndWishlistSlice["e" /* addWishCount */]
};

const SmartRoute = _ref => {
  let {
    reload,
    as,
    children,
    className,
    onClick
  } = _ref,
      props = _objectWithoutProperties(_ref, ["reload", "as", "children", "className", "onClick"]);

  return !reload ? __jsx(link_default.a, _extends({}, props, {
    as: as
  }), __jsx("a", {
    className: className,
    onClick: onClick
  }, children)) : __jsx("a", {
    className: className,
    href: as,
    onClick: onClick
  }, children);
};

/* harmony default export */ var GoodItem = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(Object(router_["withRouter"])(class extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleCartClick", async e => {
      e.preventDefault();
      this.setState({
        cartIconLoading: true
      });

      try {
        const result = await Object(clientCart["b" /* client_addToCart */])({
          goodId: this.props.goodsId,
          providerId: this.props.providerId,
          count: 1
        });

        if (result.status === 200) {
          const id = result.result.cookieId;
          const cartId = external_js_cookie_default.a.get("ajyal_cart");

          if (!cartId && id) {
            Object(helpers["i" /* setCartCookie */])(id);
            axios["a" /* default */].setCartId(id);
          } // this.props.router.push(
          //   `/${this.props.curr}-${this.props.lang}/cart`
          // );


          if (!this.state.inCart) {
            this.props.addCartCount(this.props.cartCount + 1);
          }

          this.setState({
            cartIconLoading: false,
            inCart: true
          });
        }
      } catch (err) {
        this.setState({
          cartIconLoading: false
        }); // return false;
      }
    });

    _defineProperty(this, "handleLike", e => {
      e.preventDefault();

      if (!this.props.isLogin) {
        this.props.saveLink(this.props.router.asPath);
        this.props.router.push(`/${this.props.curr}-${this.props.lang}/Auth`);
        return;
      }

      const prevLike = this.state.liked;

      try {
        const result = Object(clientCart["e" /* client_likeGood */])(this.props.goodsId);
        this.setState({
          liked: !prevLike
        });
        const wishCount = prevLike ? this.props.wishCount - 1 : this.props.wishCount + 1;
        this.props.addWishCount(wishCount);
      } catch (err) {
        this.setState({
          liked: prevLike
        });
      }
    });

    this.is_rtl = Object(isRtl["a" /* isRtl */])(this.props.lang);
    this.state = {
      cartIconLoading: false,
      liked: this.props.goodsLiked,
      inCart: this.props.inCart,
      navigation: false
    };
    this.goToDetails = this.props.haveVariation || this.props.saleWithCall;
  }

  render() {
    return __jsx("div", {
      className: "goodItem-s1-container goodItem-s1-container--hover"
    }, this.state.navigation && __jsx(GoodItemNavigation["a" /* default */], null), __jsx("article", {
      title: this.props.title,
      className: this.props.hover ? "goodItem-s1 goodItem-s1--hover" : "goodItem-s1"
    }, __jsx("img", {
      onClick: this.handleLike,
      className: this.state.liked ? "goodItem-s1__heart-icon goodItem-s1__heart-icon--block" : "goodItem-s1__heart-icon",
      src: this.state.liked ? img_heart_fill_default.a : img_heart_default.a
    }), __jsx(SmartRoute, {
      reload: this.props.reload,
      href: "/[usd-cur]/product/[...good]",
      as: `/${this.props.curr}-${this.props.lang}/product/${this.props.goodsId}/${this.props.providerId}/${Object(helpers["l" /* slugy */])(this.props.title)}`,
      onClick: () => {
        this.setState({
          navigation: true
        });
      }
    }, __jsx("figure", {
      className: "goodItem-s1__fig"
    }, __jsx("div", {
      className: "goodItem-s1__fig-img"
    }, __jsx(external_react_lazyload_default.a, {
      once: true,
      placeholder: __jsx("img", {
        className: "goodItem-loader__img goodItem-loader__img--slider",
        src: "/assets/imgs/placeholder-v2.png"
      })
    }, __jsx("div", {
      className: "goodItem-s1__aspect"
    }, __jsx("img", {
      className: "goodItem-s1__img",
      src: `${"http://ajyal.webtreeonline.com/Uploads/Images/Goods"}/${this.props.goodsId}/thumb-${this.props.goodsImage}`
    })))), __jsx("figcaption", {
      className: "goodItem-s1__fig-cap"
    }, __jsx("span", {
      className: "fig-cap-desktop"
    }, Object(helpers["m" /* trimText */])(this.props.title)), __jsx("span", {
      className: "fig-cap-mobile"
    }, Object(helpers["m" /* trimText */])(this.props.title, 40))))), __jsx("footer", {
      className: "goodItem-s1__footer"
    }, __jsx("div", {
      className: "goodItem-s1__star-container"
    }, this.props.surveyCount > 0 ? __jsx("div", {
      className: "d-flex align-items-center"
    }, __jsx(external_react_star_rating_component_default.a, {
      name: "good Item rate",
      editing: false,
      renderStarIcon: (index, value) => {
        return __jsx("img", {
          className: "goodItem-s1__star",
          src: index <= value ? img_star_default.a : img_star_gray_default.a
        });
      },
      starCount: 5,
      value: this.props.surveyScore
    }), __jsx("span", {
      className: "goodItem-s1__start-count"
    }, "(", this.props.surveyScore, ")")) : null), this.props.inventoryCount <= 0 && __jsx("div", {
      className: "w-100 col-12 unavailable"
    }, __jsx("span", null, __jsx(external_react_localize_redux_["Translate"], {
      id: "common.unavailable"
    }))), this.props.inventoryCount > 0 && __jsx("div", {
      className: "goodItem-s1__footer-left"
    }, !this.props.saleWithCall ? __jsx("div", {
      className: "goodItem-s1__footer-left-div"
    }, !this.is_rtl ? __jsx("span", {
      className: "goodItem-s1__currency"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: this.props.curr
    })) : undefined, __jsx("div", {
      className: "goodItem-s1__price-container"
    }, __jsx("span", {
      className: "goodItem-s1__number"
    }, Object(helpers["a" /* formatMoney */])(this.props.finalPrice))), this.is_rtl ? __jsx("span", {
      className: "goodItem-s1__currency"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: this.props.curr
    })) : undefined, this.props.discountAmount > 0 && __jsx("div", null, __jsx("span", {
      className: "goodItem-s1__price-off"
    }, Object(helpers["a" /* formatMoney */])(this.props.price + this.props.vat)), __jsx("div", {
      className: "goodItem-s1__off-percentage-container show-on-mobile"
    }, __jsx("span", {
      className: "goodItem-s1__off-percentage"
    }, this.props.discountPercentage), __jsx("span", {
      className: "goodItem-s1__off-text"
    }, "%OFF")))) : __jsx("div", {
      className: "goodItem-s1__footer-left-div"
    }, __jsx("span", {
      className: "goodItem-s1__currency"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "connect-provider"
    }))), !this.props.saleWithCall && !this.props.isDownloadable && __jsx("div", {
      className: "goodItem-s1__footer-left-div goodItem-s1__footer-left-div--align-center"
    }, this.props.shippingPossibilities ? __jsx("img", {
      alt: "market icon",
      className: "goodItem-s1__exp",
      src: this.is_rtl ? marketplaceAr_default.a : marketplace_default.a
    }) : __jsx("img", {
      alt: "express icon",
      className: "goodItem-s1__exp",
      src: this.is_rtl ? express_ar_default.a : express_default.a
    }), this.props.discountAmount > 0 ? __jsx("div", {
      className: "goodItem-s1__off-percentage-container"
    }, __jsx("span", {
      className: "goodItem-s1__off-percentage"
    }, this.props.discountPercentage), __jsx("span", {
      className: "goodItem-s1__off-text"
    }, "%OFF")) : undefined)), this.props.inventoryCount > 0 ? this.goToDetails ? __jsx(SmartRoute, {
      reload: this.props.reload,
      href: "/[usd-cur]/product/[...good]",
      as: `/${this.props.curr}-${this.props.lang}/product/${this.props.goodsId}/${this.props.providerId}/${Object(helpers["l" /* slugy */])(this.props.title)}`,
      className: external_classnames_default()("goodItem-s1__eyeIcon", {
        "goodItem-s1__eyeIcon--green": this.props.saleWithCall
      }),
      onClick: () => {
        this.setState({
          navigation: true
        });
      },
      title: "go to detail"
    }, __jsx("img", {
      src: this.props.saleWithCall ? img_good_Item_call_default.a : img_point_default.a,
      alt: "go to Detail",
      title: "go to detail"
    })) : this.state.cartIconLoading ? __jsx(Loading["a" /* default */], {
      type: "gray",
      width: "30px",
      height: "30px",
      styleSheet: {
        margin: "initial",
        marginBottom: "5px"
      }
    }) : __jsx("a", {
      href: "#",
      onClick: this.handleCartClick
    }, __jsx("img", {
      className: "goodItem-s1__bst",
      src: this.state.inCart ? img_bst_fill_default.a : img_bst_default.a
    })) : null)));
  }

})));
// CONCATENATED MODULE: ./components/common/GoodItem/index.js

/* harmony default export */ var common_GoodItem = __webpack_exports__["a"] = (GoodItem);

/***/ }),

/***/ "q2sq":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-bst-fill-85e7a51c3d21a5ebf794e90590ab441f.svg";

/***/ }),

/***/ "rCsO":
/***/ (function(module, exports) {

module.exports = require("react-google-login");

/***/ }),

/***/ "rIwL":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/return-complete-2617614b773f5deeab2d92787da57e8d.svg";

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rdeP":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shipping-f39b1eb4a6bc98cd364194806da8d08b.svg";

/***/ }),

/***/ "rhkG":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/linear-arrow-73300d143ab3c56ad042bdfb64ef253d.svg";

/***/ }),

/***/ "ryWw":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-bahrain-367e270071b7da1a08c230babad484c2.svg";

/***/ }),

/***/ "s6mn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return validatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return validatePasswordCreateShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validateConfirmPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return validateEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return validatePhoneNumber; });
/* unused harmony export validatePostalCode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validateCreditCard; });
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("R+uO");
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1TxS");
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isLength__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var validator_lib_isCreditCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yrcK");
/* harmony import */ var validator_lib_isCreditCard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isCreditCard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("O5CA");
/* harmony import */ var validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var validator_lib_isPostalCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("h/Og");
/* harmony import */ var validator_lib_isPostalCode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isPostalCode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("FWZJ");
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("2C5Q");
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(google_libphonenumber__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const validateEmail = ({
  name,
  value,
  handler,
  lang
}) => {
  if (handler) {
    if (validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_0___default()(value)) handler(state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        [name]: false
      });
    });else handler(state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        [name]: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getErrorMsg */ "c"])(lang, "email-not-valid")
      });
    });
  } else {
    if (validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_0___default()(value)) return true;else return false;
  }
};
const validatePassword = ({
  name,
  value,
  handler,
  lang
}) => {
  if (handler) {
    if (validator_lib_isLength__WEBPACK_IMPORTED_MODULE_1___default()(value, {
      min: 6,
      max: 50
    })) handler(state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        [name]: false
      });
    });else handler(state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        [name]: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getErrorMsg */ "c"])(lang, "pass-not-valid")
      });
    });
  } else {
    if (validator_lib_isLength__WEBPACK_IMPORTED_MODULE_1___default()(value, {
      min: 6,
      max: 50
    })) return true;else return false;
  }
};
const validatePasswordCreateShop = ({
  name,
  value,
  handler,
  lang
}) => {
  if (handler) {
    if (validator_lib_isLength__WEBPACK_IMPORTED_MODULE_1___default()(value, {
      min: 8,
      max: 50
    })) handler(state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        [name]: false
      });
    });else handler(state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        [name]: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getErrorMsg */ "c"])(lang, "pass-not-valid-create-shop")
      });
    });
  } else {
    if (validator_lib_isLength__WEBPACK_IMPORTED_MODULE_1___default()(value, {
      min: 8,
      max: 50
    })) return true;else return false;
  }
};
const validateConfirmPassword = ({
  name,
  value1 = "",
  value2 = "",
  handler,
  lang
}) => {
  if (handler) {
    if (value1 === value2) handler(state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        [name]: false
      });
    });else handler(state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        [name]: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getErrorMsg */ "c"])(lang, "confirm-pass")
      });
    });
  } else {
    if (value1 === value2) return true;else return false;
  }
};
const validateEmpty = ({
  name,
  value,
  handler,
  lang
}) => {
  if (handler) {
    if (!validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(value)) handler(state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        [name]: false
      });
    });else handler(state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        [name]: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getErrorMsg */ "c"])(lang, "empty-filed")
      });
    });
  } else {
    if (!validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(value)) return true;else return false;
  }
};
const validatePhoneNumber = ({
  name,
  value,
  handler,
  lang,
  iso
}) => {
  const phoneUtil = google_libphonenumber__WEBPACK_IMPORTED_MODULE_6__["PhoneNumberUtil"].getInstance();

  if (!iso || validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(iso)) {
    if (handler) {
      handler(state => {
        return _objectSpread(_objectSpread({}, state), {}, {
          [name]: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getErrorMsg */ "c"])(lang, "select-region-first")
        });
      });
      return;
    } else {
      return false;
    }
  }

  try {
    const number = phoneUtil.parse(value, iso);
    phoneUtil.isValidNumber(number);
    const re = phoneUtil.isValidNumberForRegion(number, iso);

    if (handler) {
      if (re) handler(state => {
        return _objectSpread(_objectSpread({}, state), {}, {
          [name]: false
        });
      });else handler(state => {
        return _objectSpread(_objectSpread({}, state), {}, {
          [name]: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getErrorMsg */ "c"])(lang, "phone-not-match-country")
        });
      });
    } else {
      if (re) return true;else return false;
    }
  } catch (err) {
    if (handler) {
      handler(state => {
        return _objectSpread(_objectSpread({}, state), {}, {
          [name]: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getErrorMsg */ "c"])(lang, "phone-not-valid")
        });
      });
    } else {
      return false;
    }
  }
};
const validatePostalCode = ({
  name,
  value,
  handler,
  lang
}) => {
  if (handler) {
    if (validator_lib_isPostalCode__WEBPACK_IMPORTED_MODULE_4___default()(value)) handler(state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        [name]: false
      });
    });else handler(state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        [name]: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getErrorMsg */ "c"])(lang, "postal-code-filed")
      });
    });
  } else {
    if (validator_lib_isPostalCode__WEBPACK_IMPORTED_MODULE_4___default()(value)) return true;else return false;
  }
};
const validateCreditCard = ({
  name,
  value,
  handler,
  lang
}) => {
  if (handler) {
    if (validator_lib_isCreditCard__WEBPACK_IMPORTED_MODULE_2___default()(value)) handler(state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        [name]: false
      });
    });else handler(state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        [name]: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getErrorMsg */ "c"])(lang, "credi-card-filed")
      });
    });
  } else {
    if (validator_lib_isCreditCard__WEBPACK_IMPORTED_MODULE_2___default()(value)) return true;else return false;
  }
};

/***/ }),

/***/ "srzv":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAANCAYAAACUwi84AAAABHNCSVQICAgIfAhkiAAAAJdJREFUGFd90LENwjAQBdD/gwQlLohrGhR3yQjHJhkBNoJJ4hFSQkcLlVtoDtkSkRISX3f6T/+ko3VygaL+vHEMDx8wGdpKehK1Kvo5RLMXs97ALyHGxhxKIIcGsIRGIKKdE1kBXapVnEegPEjDAh0Jo8D1dfPtAObCWJLAUphALkzAVhJIbH83/15dOmkLRfO8+9M0jPsXlTtcfJFYyZgAAAAASUVORK5CYII="

/***/ }),

/***/ "t8EK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return switchLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return switchCurr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showNextCurr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return showNextLang; });
const switchLang = (url = "/usd-ar", reloadPage = false) => {
  debugger;
  const parts = url.split("/");
  const vari = parts[1];

  if (!vari) {
    return;
  }

  const cur_part = vari.split("-");

  if (!cur_part[1]) {
    return;
  }

  switch (cur_part[1]) {
    case "en":
      cur_part[1] = "ar";
      break;

    case "ar":
      cur_part[1] = "en";
      break;

    case "fa":
      cur_part[1] = "fa";
      break;

    default:
      cur_part[1] = "en";
      break;
  }

  parts[1] = cur_part.join("-");
  const newUrl = parts.join("/");

  if (reloadPage) {
    window.location.href = newUrl;
  }

  return newUrl;
};
const switchCurr = (url = "/bhd-ar", reloadPage = false) => {
  const parts = url.split("/");
  const vari = parts[1];

  if (!vari) {
    return;
  }

  const cur_part = vari.split("-");

  if (!cur_part[0]) {
    return;
  }

  switch (cur_part[0]) {
    case "usd":
      cur_part[0] = "bhd";
      break;

    case "bhd":
      cur_part[0] = "usd";
      break;

    case "tmn":
      cur_part[0] = "tmn";
      break;

    default:
      cur_part[0] = "usd";
      break;
  }

  parts[1] = cur_part.join("-");
  const newUrl = parts.join("/");

  if (reloadPage) {
    window.location.href = newUrl;
  }

  return newUrl;
};
const showNextCurr = curr => {
  if (curr == "bhd") return "USD";
  if (curr == "usd") return "BHD";
};
const showNextLang = lang => {
  if (lang == "en") return "العربية";
  if (lang == "ar") return "English";
}; // switchLang()

/***/ }),

/***/ "tQxu":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/marketplaceAr-4edb7fa9d6093c95fe128e18473d0379.png";

/***/ }),

/***/ "tepj":
/***/ (function(module, exports) {

module.exports = require("react-localize-redux");

/***/ }),

/***/ "tfaz":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/header-deals-cbbfb7df7512117d38c485231505a22c.svg";

/***/ }),

/***/ "txVm":
/***/ (function(module, exports) {

module.exports = require("react-star-rating-component");

/***/ }),

/***/ "tyI+":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-radio-button-on-0d1185a63aadfae4603b91a02f9a7504.svg";

/***/ }),

/***/ "uaeF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NEXT */
/* unused harmony export PREV */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VERIFY_PHONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_PHONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SELECT_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_ADDRESS_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COMPLETE; });
const NEXT = "NEXT";
const PREV = "PREV";
const VERIFY_PHONE = 1;
const CHANGE_PHONE = 2;
const SELECT_ADDRESS = 3;
const GET_ADDRESS_DETAIL = 4;
const COMPLETE = "COMPLETE";

/***/ }),

/***/ "vh5R":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/menu - Claims-9a1d5e96f7d80029420770576b767d04.svg";

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "w+QA":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/return-processing-14d5be51db43c43d973eef5d69863abb.svg";

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "x/s0":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1LjU4OSIgaGVpZ2h0PSI5LjQ2MiIgdmlld0JveD0iMCAwIDUuNTg5IDkuNDYyIj4NCiAgICA8ZyBpZD0icGxheSIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDk4Ljc5NCA3OS4zODgpIj4NCiAgICAgICAgPHBhdGggaWQ9IlBhdGhfNDA1IiBmaWxsPSIjMTcyODQwIiBkPSJNMTk3LjQyOCAxNTMuNjQ4bC00Ljg4OS00LjI1N2EuMy4zIDAgMCAwLS40ODMuMTQxLjYuNiAwIDAgMC0uMDU2LjI1N3Y4LjUxMWMwIC4yNjEuMTU2LjQ3My4zNDkuNDc0YS4yODcuMjg3IDAgMCAwIC4xOS0uMDc2bDQuODg5LTQuMjU3YS41ODEuNTgxIDAgMCAwIC4xMDYtLjY1My40MzQuNDM0IDAgMCAwLS4xMDYtLjE0M3oiIGRhdGEtbmFtZT0iUGF0aCA0MDUiLz4NCiAgICA8L2c+DQo8L3N2Zz4NCg=="

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

/***/ "xYMx":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/marketplace-915d0d6d899cdd90b8df395f7ac1664f.png";

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yKZ5":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/porcessing-5be232c621ff6706de2ac51b036981ee.svg";

/***/ }),

/***/ "yrcK":
/***/ (function(module, exports) {

module.exports = require("validator/lib/isCreditCard");

/***/ }),

/***/ "zP6j":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-united-states-2a2114553ff244d1cfbfbef54f0e200b.svg";

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

/***/ }),

/***/ "zr7/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_localize_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tepj");
/* harmony import */ var react_localize_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_verification_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KGsa");
/* harmony import */ var react_verification_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_verification_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("lCwK");
/* harmony import */ var _Responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("jxY/");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("2C5Q");
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(google_libphonenumber__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("FWZJ");
/* harmony import */ var _lib_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("C5tE");
/* harmony import */ var _appConfigSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("o2tl");
/* harmony import */ var _lib_api_client_clientCustomer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("EsFC");
/* harmony import */ var react_compound_timer_build__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("5w86");
/* harmony import */ var react_compound_timer_build__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_compound_timer_build__WEBPACK_IMPORTED_MODULE_12__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const COUNT = 4;

const VerifyPhone = ({
  currdata,
  submitRegister,
  loaderSubmitButton,
  Backclick
}) => {
  const lang = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_appConfigSlice__WEBPACK_IMPORTED_MODULE_10__[/* selectLang */ "h"]);
  const curr = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_appConfigSlice__WEBPACK_IMPORTED_MODULE_10__[/* selectCurr */ "g"]);
  const PNF = google_libphonenumber__WEBPACK_IMPORTED_MODULE_6__["PhoneNumberFormat"];
  const phoneUtil = google_libphonenumber__WEBPACK_IMPORTED_MODULE_6__["PhoneNumberUtil"].getInstance();
  const phone = currdata.phoneCode + currdata.mobileNumber;
  const number = phoneUtil.parseAndKeepRawInput(phone, currdata.iso);
  let can_send_new_email = false;
  const {
    0: code,
    1: setCode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const handleCode = ref => {
    setCode(ref.target.value);
  };

  const handleSubmit = async () => {
    if (loaderSubmitButton) return;

    if (code.length < COUNT) {
      react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error(Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_8__[/* getErrorMsg */ "c"])(lang, "code-is-not-valid"), Object(_lib_toast__WEBPACK_IMPORTED_MODULE_9__[/* getToastConfig */ "a"])());
      return;
    }

    submitRegister(code, currdata.requestId);
  };

  const handleResendMessage = async resetTimer => {
    try {
      const res = await Object(_lib_api_client_clientCustomer__WEBPACK_IMPORTED_MODULE_11__[/* client_resendVerifyMobileNumber */ "f"])({
        mobileNumber: '+' + currdata.phoneCode + currdata.mobileNumber
      });
      currdata.requestId = res.result.requestId, can_send_new_email = false;
      react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].success(res.message, Object(_lib_toast__WEBPACK_IMPORTED_MODULE_9__[/* getToastConfig */ "a"])());
      resetTimer();
    } catch (err) {
      react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error(err.response.data.message, Object(_lib_toast__WEBPACK_IMPORTED_MODULE_9__[/* getToastConfig */ "a"])());
      can_send_new_email = true;
    }
  };

  const handleBackclick = () => {
    Backclick();
  };

  return __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], null, ({
    translate: t
  }) => {
    return __jsx("div", {
      className: "auth__verify-phone p-5"
    }, __jsx("section", {
      className: "add-address-step2"
    }, __jsx("div", {
      className: "add-address-step2__col"
    }, __jsx("p", {
      className: "add-address-step2__p1 text-align-center"
    }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], {
      id: "verify-sms"
    })), __jsx("p", {
      className: "add-address-step2__p2 text-align-center"
    }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], {
      id: "verify-sms-des"
    })), __jsx("p", {
      className: "add-address-step2__phone text-align-center"
    }, phoneUtil.format(number, PNF.INTERNATIONAL)), __jsx("a", {
      onClick: handleBackclick,
      className: "add-address-step2__link primary-link"
    }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], {
      id: "changeRegisterData"
    })), __jsx("div", {
      className: "add-address-step2__verification-container"
    }, __jsx(react_verification_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
      inputField: {
        onChange: handleCode
      },
      length: COUNT,
      placeholder: ""
    })), __jsx(_Responsive__WEBPACK_IMPORTED_MODULE_4__[/* ProtraitPhonesAndBigger */ "f"], null, __jsx("button", {
      onClick: handleSubmit,
      className: "primary-btn add-address-step2__btn"
    }, loaderSubmitButton ? __jsx(_common__WEBPACK_IMPORTED_MODULE_3__[/* Loading */ "s"], {
      type: "white",
      width: "20px",
      height: "20px"
    }) : __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], {
      id: "changephone-btn"
    })))), __jsx("div", {
      className: "add-address-step2__col mt-4"
    }, __jsx(react_compound_timer_build__WEBPACK_IMPORTED_MODULE_12___default.a, {
      initialTime: 300000,
      direction: "backward"
    }, ({
      start,
      reset,
      getTime
    }) => {
      if (getTime() <= 0) {
        can_send_new_email = true;
      }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
        className: "add-address-step2__opt"
      }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], {
        id: "dontreceive"
      })), "\xA0\xA0", __jsx("span", {
        className: "timer__count ml-3 mr-3"
      }, __jsx(react_compound_timer_build__WEBPACK_IMPORTED_MODULE_12___default.a.Minutes, null), " : ", __jsx(react_compound_timer_build__WEBPACK_IMPORTED_MODULE_12___default.a.Seconds, null)), __jsx("a", {
        onClick: e => {
          e.preventDefault();
          if (!can_send_new_email) return;
          handleResendMessage(() => {
            reset();
            start();
          });
        },
        className: "add-address-step2__link primary-link"
      }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], {
        id: "resendnow"
      })));
    })), __jsx(_Responsive__WEBPACK_IMPORTED_MODULE_4__[/* ProtraitPhones */ "e"], null, __jsx("div", {
      className: "checkout-fix justify-content-center"
    }, __jsx("button", {
      onClick: handleSubmit,
      className: "primary-btn returns__add-btn"
    }, loaderSubmitButton ? __jsx(_common__WEBPACK_IMPORTED_MODULE_3__[/* Loading */ "s"], {
      type: "white",
      width: "20px",
      height: "20px"
    }) : __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], {
      id: "changephone-btn"
    }))))));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (VerifyPhone);

/***/ })

/******/ });