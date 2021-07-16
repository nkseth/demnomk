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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "/7k0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ app_header; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./assets/icons/img-search.svg
var img_search = __webpack_require__("C5/m");
var img_search_default = /*#__PURE__*/__webpack_require__.n(img_search);

// EXTERNAL MODULE: ./assets/icons/img-header-search-left.svg
var img_header_search_left = __webpack_require__("NZu/");
var img_header_search_left_default = /*#__PURE__*/__webpack_require__.n(img_header_search_left);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-localize-redux"
var external_react_localize_redux_ = __webpack_require__("tepj");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./appConfigSlice.js
var appConfigSlice = __webpack_require__("o2tl");

// EXTERNAL MODULE: ./lib/querys.js
var querys = __webpack_require__("/CuA");

// EXTERNAL MODULE: ./components/common/index.js + 35 modules
var common = __webpack_require__("lCwK");

// CONCATENATED MODULE: ./components/app/header/LayoutsHeader/SearchInput/SearchSugestion/SearchSugestion.jsx
var __jsx = external_react_default.a.createElement;








class SearchSugestion_SearchSugestion extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "header-top__search-sugestion"
    }, __jsx("div", {
      className: "header-top__search-sugestion__triangle"
    }), __jsx("div", {
      className: "header-top__search-sugestion__body"
    }, this.props.showLoader ? __jsx(common["s" /* Loading */], {
      type: "gray",
      width: "11%",
      height: "70%"
    }) : __jsx("div", {
      className: "w-100 d-flex flex-wrap"
    }, __jsx("div", {
      className: "col-md-8 col-sm-6 col-12 header-top__search-sugestion__body__goods p-0"
    }, this.props.data.goods.map(item => {
      return __jsx("div", {
        className: " header-top__search-sugestion__body__goods__items",
        key: item.goodsId
      }, __jsx(link_default.a, {
        href: `/${this.props.curr}-${this.props.lang}/search?search=${item.title}`
      }, __jsx("a", null, __jsx("span", {
        className: "good"
      }, item.title), __jsx("span", {
        className: "category ml-2 mr-2"
      }, item.categoryTitle))));
    })), __jsx("div", {
      className: "col-md-4 col-sm-6 col-12 header-top__search-sugestion__body__matches"
    }, __jsx("div", {
      className: "mt-sm-0 mt-3 header-top__search-sugestion__body__matches__items"
    }, this.props.data.brand.length != 0 && __jsx("div", {
      className: "header"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "nav.matching-brand"
    })), this.props.data.brand.map(item => {
      return __jsx("div", {
        className: "items",
        key: item.brandId
      }, __jsx(link_default.a, {
        href: `/${this.props.curr}-${this.props.lang}/search?brandId=${item.brandId}&type=${querys["e" /* SEARCH_TYPE_SEARCH */]}`
      }, __jsx("a", null, item.brandTitle)));
    })), __jsx("div", {
      className: "mt-sm-0 mt-3 header-top__search-sugestion__body__matches__items"
    }, __jsx("div", {
      className: "header-top__search-sugestion__body__matches__items"
    }, this.props.data.category.length != 0 && __jsx("div", {
      className: "header"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "nav.matching-category"
    })), this.props.data.category.map(cat => {
      let allLink;

      if (cat.haveWebPage) {
        allLink = `/${this.props.curr}-${this.props.lang}/category/${cat.categoryId}`;
      } else {
        allLink = `/${this.props.curr}-${this.props.lang}/search?id=${cat.categoryId}&type=${querys["b" /* SEARCH_TYPE_CATEGORY */]}`;
      }

      return __jsx("div", {
        className: "items",
        key: cat.categoryId
      }, __jsx(link_default.a, {
        href: allLink
      }, __jsx("a", null, cat.categoryTitle)));
    })))))));
  }

}

const mapDispatchToProps = state => {
  return {
    lang: Object(appConfigSlice["h" /* selectLang */])(state),
    curr: Object(appConfigSlice["g" /* selectCurr */])(state)
  };
};

/* harmony default export */ var SearchInput_SearchSugestion_SearchSugestion = (Object(external_react_redux_["connect"])(mapDispatchToProps)(SearchSugestion_SearchSugestion));
// EXTERNAL MODULE: ./lib/api/client/clientHome.js
var clientHome = __webpack_require__("/d77");

// CONCATENATED MODULE: ./components/app/header/LayoutsHeader/SearchInput/SearchInput.jsx
var SearchInput_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class SearchInput_SearchInput extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "changeSearchInput", async e => {
      this.setState({
        searchQuery: e.target.value
      });

      if (e.target.value != "") {
        this.setState({
          showSuggestion: true,
          showLoader: true
        });
        const result = await Object(clientHome["b" /* client_getHomeSerachAutoComplete */])(e.target.value);

        if (result.result.goods.length != 0) {
          this.setState({
            showLoader: false,
            autoData: result.result
          });
        } else {
          this.setState({
            showLoader: false,
            showSuggestion: false
          });
        }
      } else {
        this.setState({
          showSuggestion: false
        });
      }
    });

    _defineProperty(this, "handRedirectSearch", e => {
      if (e.which === 13 && this.state.searchQuery != null && this.state.searchQuery != undefined && this.state.searchQuery != "") {
        this.props.history.push(`/${this.props.curr}-${this.props.lang}/search?search=${this.state.searchQuery}`);
      }
    });

    this.state = {
      showSuggestion: false,
      autoData: {},
      showLoader: false,
      searchQuery: ""
    };
    this.wrapperRef = /*#__PURE__*/external_react_default.a.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    var _this$wrapperRef$curr;

    if (this.wrapperRef && !((_this$wrapperRef$curr = this.wrapperRef.current) === null || _this$wrapperRef$curr === void 0 ? void 0 : _this$wrapperRef$curr.contains(event.target))) {
      this.setState({
        showSuggestion: false
      });
    }
  }

  render() {
    return SearchInput_jsx("div", {
      className: "header-top__search-box",
      ref: this.wrapperRef
    }, SearchInput_jsx("input", {
      type: "text",
      className: "header-top__search-input",
      placeholder: this.props.placeholder,
      onChange: this.changeSearchInput,
      value: this.state.searchQuery,
      onKeyPress: this.handRedirectSearch
    }), SearchInput_jsx(link_default.a, {
      href: `/${this.props.curr}-${this.props.lang}/search?search=${this.state.searchQuery}`
    }, SearchInput_jsx("a", {
      className: "header-top__search-btn"
    }, this.props.lang === "en" ? SearchInput_jsx("img", {
      src: img_search_default.a,
      className: "header-top__search-icon"
    }) : SearchInput_jsx("img", {
      src: img_header_search_left_default.a,
      className: "header-top__search-icon"
    }))), this.state.showSuggestion && SearchInput_jsx(SearchInput_SearchSugestion_SearchSugestion, {
      showLoader: this.state.showLoader,
      data: this.state.autoData
    }));
  }

}

/* harmony default export */ var LayoutsHeader_SearchInput_SearchInput = (SearchInput_SearchInput);
// EXTERNAL MODULE: ./assets/images/logo-2.png
var logo_2 = __webpack_require__("nXN2");
var logo_2_default = /*#__PURE__*/__webpack_require__.n(logo_2);

// EXTERNAL MODULE: ./assets/icons/img-header-profile.svg
var img_header_profile = __webpack_require__("hKlM");
var img_header_profile_default = /*#__PURE__*/__webpack_require__.n(img_header_profile);

// EXTERNAL MODULE: ./assets/icons/img-header-heart.svg
var img_header_heart = __webpack_require__("Lnvz");
var img_header_heart_default = /*#__PURE__*/__webpack_require__.n(img_header_heart);

// EXTERNAL MODULE: ./assets/icons/img-header-cart.svg
var img_header_cart = __webpack_require__("ZoKj");
var img_header_cart_default = /*#__PURE__*/__webpack_require__.n(img_header_cart);

// EXTERNAL MODULE: ./assets/icons/img-header-arrow-down-light.svg
var img_header_arrow_down_light = __webpack_require__("WcO4");
var img_header_arrow_down_light_default = /*#__PURE__*/__webpack_require__.n(img_header_arrow_down_light);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/app/pages/CartAndWishlist/cartAndWishlistSlice.js
var cartAndWishlistSlice = __webpack_require__("QQGX");

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__("wVQA");
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "firebase/messaging"
var messaging_ = __webpack_require__("dIt4");

// CONCATENATED MODULE: ./firebaseInit.js


const config = {
  apiKey: "AIzaSyCuFiXFlxTYqdyte-TsZAfxUJjch3jU1o8",
  authDomain: "ajyal-shop.firebaseapp.com",
  projectId: "ajyal-shop",
  storageBucket: "ajyal-shop.appspot.com",
  messagingSenderId: "953067270092",
  appId: "1:953067270092:web:b4469316c4c0da4e413769",
  measurementId: "G-7Y3Q3WJ0MP"
};
let firebaseInit_isSafari = false;
var firebaseInit_ua;

if (false) {}

if (!app_default.a.apps.length && !firebaseInit_isSafari) {
  app_default.a.initializeApp(config);
}

let messaging;

if (false) {} // const messaging = firebase.messaging();
// next block of code goes here


const requestFirebaseNotificationPermission = () => {
  if (firebaseInit_isSafari) return;
  return new Promise((resolve, reject) => {
    messaging.getToken() // .then(() => messaging.getToken())
    .then(firebaseToken => {
      resolve(firebaseToken);
    }).catch(err => {
      reject(err);
    });
  });
};
const onMessageListener = () => {
  if (firebaseInit_isSafari) return;
  return new Promise(resolve => {
    messaging.onMessage(payload => {
      resolve(payload);
    });
  });
};
// EXTERNAL MODULE: ./lib/api/client/clientCommon.js
var clientCommon = __webpack_require__("hK2O");

// EXTERNAL MODULE: ./assets/icons/search-gray.svg
var search_gray = __webpack_require__("dzZG");
var search_gray_default = /*#__PURE__*/__webpack_require__.n(search_gray);

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

// EXTERNAL MODULE: ./assets/icons/header-menu.svg
var header_menu = __webpack_require__("L0zi");

// EXTERNAL MODULE: ./assets/icons/store-icon.svg
var store_icon = __webpack_require__("d5cu");

// EXTERNAL MODULE: ./assets/icons/header-arrow-down.svg
var header_arrow_down = __webpack_require__("6cdP");

// EXTERNAL MODULE: ./components/app/header/LayoutsHeader/Nav/Items/item.jsx
var Items_item = __webpack_require__("K+uJ");

// EXTERNAL MODULE: ./components/app/header/LayoutsHeader/Nav/Category/category.jsx + 1 modules
var category = __webpack_require__("1SXp");

// CONCATENATED MODULE: ./components/app/header/LayoutsHeader/Nav/nav.jsx
var nav_jsx = external_react_default.a.createElement;

















const Nav = props => {
  var _props$data;

  // نشان دادن دسته بندی
  const {
    0: isShownCategory,
    1: setIsShownCategory
  } = Object(external_react_["useState"])(false);
  const {
    0: delayHandler,
    1: setDelayHandler
  } = Object(external_react_["useState"])(null);
  const DropRef = Object(external_react_["useRef"])();
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const curr = Object(external_react_redux_["useSelector"])(appConfigSlice["g" /* selectCurr */]);

  const handleMouseEnter = event => {
    setDelayHandler(setTimeout(() => {
      DropRef.current.style.display = "block";
    }, 200));
  };

  const handleMouseLeave = () => {
    DropRef.current.style.display = "none";
    clearTimeout(delayHandler);
  };

  const closeMenu = () => {
    DropRef.current.style.display = "none";
    clearTimeout(delayHandler);
  };

  return nav_jsx("div", {
    onMouseLeave: handleMouseLeave,
    style: {
      backgroundColor: "#E2E2E2"
    }
  }, nav_jsx("nav", {
    className: "nav p-0 container siteWidthContainer"
  }, nav_jsx("ul", {
    className: "nav__list m-0 "
  }, nav_jsx("li", {
    className: "nav__item nav__item--first",
    onMouseEnter: handleMouseEnter
  }, nav_jsx(Items_item["a" /* default */], {
    content: props.content("category"),
    isCategory: true,
    icon: nav_jsx(header_menu["ReactComponent"], {
      className: "nav__item-svg"
    }),
    downIcon: nav_jsx(header_arrow_down["ReactComponent"], null)
  })), nav_jsx("li", {
    className: "nav__item nav__item--secound"
  }, nav_jsx(link_default.a, {
    href: `/${curr}-${lang}`
  }, nav_jsx("a", null, nav_jsx(Items_item["a" /* default */], {
    content: props.content("homeItem"),
    isCategory: false,
    icon: nav_jsx(house["ReactComponent"], {
      className: "nav__item-svg"
    })
  })))), nav_jsx("li", {
    className: "nav__item"
  }, nav_jsx(link_default.a, {
    href: `/${curr}-${lang}/search?type=${querys["c" /* SEARCH_TYPE_DEAL */]}`
  }, nav_jsx("a", null, nav_jsx(Items_item["a" /* default */], {
    content: props.content("dealsItem"),
    isCategory: false,
    icon: nav_jsx(header_deals["ReactComponent"], {
      className: "nav__item-svg"
    })
  })))), nav_jsx("li", {
    className: "nav__item"
  }, nav_jsx(link_default.a, {
    href: `/${curr}-${lang}/tracking`
  }, nav_jsx("a", null, nav_jsx(Items_item["a" /* default */], {
    content: props.content("orderTrackingItem"),
    isCategory: false,
    icon: nav_jsx(header_OrderTracking["ReactComponent"], {
      className: "nav__item-svg"
    })
  })))), nav_jsx("li", {
    className: "nav__item"
  }, nav_jsx(link_default.a, {
    href: `/${curr}-${lang}/hc`
  }, nav_jsx("a", null, nav_jsx(Items_item["a" /* default */], {
    content: props.content("helpCenterItem"),
    isCategory: false,
    icon: nav_jsx(header_help["ReactComponent"], {
      className: "nav__item-svg"
    })
  })))), nav_jsx("li", {
    className: "nav__item"
  }, nav_jsx(link_default.a, {
    href: `/${curr}-${lang}/vendors`
  }, nav_jsx("a", null, nav_jsx(Items_item["a" /* default */], {
    content: nav_jsx(external_react_localize_redux_["Translate"], {
      id: "main-nav.storeList"
    }),
    isCategory: false,
    icon: nav_jsx(store_icon["ReactComponent"], {
      className: "nav__item-svg"
    })
  })))), nav_jsx("li", {
    className: "nav__item nav__item--last"
  }, nav_jsx(link_default.a, {
    href: `/${curr}-${lang}/becomeSeller`
  }, nav_jsx("a", null, nav_jsx(Items_item["a" /* default */], {
    content: props.content("sellWithUsItem"),
    isCategory: false,
    icon: nav_jsx(header_store["ReactComponent"], {
      className: "nav__item-svg"
    })
  })))))), nav_jsx("div", {
    ref: DropRef,
    style: {
      display: "none"
    }
  }, nav_jsx("div", {
    className: "web-category-overlay"
  }), nav_jsx("div", {
    onMouseLeave: handleMouseLeave
  }, nav_jsx(category["a" /* default */], {
    closeHomeMenu: closeMenu,
    data: (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.categories,
    type: "web",
    categoryContent: props.allCategory
  }))));
};

/* harmony default export */ var nav = (Nav);
// CONCATENATED MODULE: ./components/app/header/app-header.jsx
var app_header_jsx = external_react_default.a.createElement;

function app_header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















class app_header_AppHeader extends external_react_default.a.Component {
  constructor(props) {
    super(props); //this code is for Development purpose

    app_header_defineProperty(this, "state", {
      showSelectBoxLang: false,
      showSelectBoxCurrency: false,
      showAccountBox: false,
      searchCilck: false,
      search: "",
      searchResultLoading: false,
      searchData: []
    });

    app_header_defineProperty(this, "handleSearchChange", async e => {
      const value = e.target.value;
      this.setState({
        search: value,
        searchResultLoading: true
      });

      try {
        const result = await Object(clientHome["b" /* client_getHomeSerachAutoComplete */])(value);

        if (result.result.goods.length != 0) {
          this.setState({
            searchData: result.result,
            searchResultLoading: false
          });
        } else {
          this.setState({
            searchData: [],
            searchResultLoading: false
          });
        }
      } catch (error) {
        this.setState({
          searchData: [],
          searchResultLoading: false
        });
      }
    });

    app_header_defineProperty(this, "handRedirectSearch", e => {
      if (e.which === 13 && this.state.search != null && this.state.search != undefined && this.state.search != "") {
        this.props.router.push(`/${this.props.curr}-${this.props.lang}/search?search=${this.state.search}`);
      }
    });

    this.activeCurrency = this.props.curr;
    this.lang = this.props.lang;
    this.activeLang = {
      code: this.props.lang
    };
    this.data = this.props.data;
    this.inputRef = /*#__PURE__*/external_react_default.a.createRef();
  }

  componentDidMount() {
    var _this$props$data, _this$props$data2;

    this.props.addCartCount((_this$props$data = this.props.data) === null || _this$props$data === void 0 ? void 0 : _this$props$data.cartCount);
    this.props.addWishCount((_this$props$data2 = this.props.data) === null || _this$props$data2 === void 0 ? void 0 : _this$props$data2.wishListCount);
    let isSafari = false;
    var ua = navigator.userAgent.toLowerCase();

    if (ua.indexOf("safari") != -1) {
      if (ua.indexOf("chrome") > -1) {// alert("1"); // Chrome
      } else {
        // alert("2"); // Safari
        isSafari = true;
      }
    }

    if (!isSafari) {
      requestFirebaseNotificationPermission().then(firebaseToken => {
        // eslint-disable-next-line no-console
        console.log("Firebase Toke: ", firebaseToken);

        if (firebaseToken && this.props.isLogin == true) {
          console.log("Send token to server");
          Object(clientCommon["g" /* client_updateUserNotificationKey */])(firebaseToken);
        }
      }).catch(err => {
        return err;
      });
    }
  }

  render() {
    var _this$data;

    const data = this.data;
    return app_header_jsx("header", {
      className: "header "
    }, data.liveChatStatus && this.props.isDesktop && app_header_jsx("script", {
      type: "text/javascript",
      id: "hs-script-loader",
      async: true,
      defer: true,
      src: "//js.hs-scripts.com/8803827.js"
    }), app_header_jsx("div", null, this.props.isDesktop && app_header_jsx("section", {
      className: "header-top"
    }, app_header_jsx("div", {
      className: "header-top__container container siteWidthContainer"
    }, app_header_jsx("div", {
      className: "header-top__item header-top__item--left-padding"
    }, data.logoUrlShopHeader && app_header_jsx(link_default.a, {
      href: "/[lang-curr]",
      as: `/${this.props.curr}-${this.props.lang}`
    }, app_header_jsx("a", {
      className: "header-top__item-link"
    }, app_header_jsx("img", {
      src: `${"http://ajyal.webtreeonline.com/Uploads/Images/Logo"}/${data.logoUrlShopHeader}`,
      alt: "website logo",
      className: "header-top__logo"
    })))), app_header_jsx("div", {
      className: "header-top__item header-top__item--fill header-top__item--flex"
    }, app_header_jsx(external_react_localize_redux_["Translate"], null, ({
      translate
    }) => {
      return app_header_jsx(LayoutsHeader_SearchInput_SearchInput, {
        placeholder: translate("searchPlaceholder"),
        lang: this.lang,
        curr: this.activeCurrency,
        search: translate("search"),
        history: this.props.router
      });
    }), app_header_jsx("a", {
      onClick: () => {
        this.setState({
          showSelectBoxLang: this.state.showSelectBoxLang ? false : true,
          showSelectBoxCurrency: false,
          showAccountBox: false
        });
      },
      className: "header-top__item-drop-container d-flex align-align-items-center"
    }, app_header_jsx("span", {
      className: "header-top__item-text"
    }, app_header_jsx(external_react_localize_redux_["Translate"], {
      id: "lang"
    })), app_header_jsx("img", {
      src: img_header_arrow_down_light_default.a,
      className: "nav__item-svg",
      alt: "arrowdownLight"
    }), this.state.showSelectBoxLang ? app_header_jsx(common["y" /* SelectBox */], {
      type: "lang",
      lang: this.lang,
      currency: this.activeCurrency
    }) : null), app_header_jsx("a", {
      onClick: () => {
        this.setState({
          showSelectBoxLang: false,
          showAccountBox: false,
          showSelectBoxCurrency: this.state.showSelectBoxCurrency ? false : true
        });
      },
      ref: this.wrapperRef,
      className: "header-top__item-drop-container d-flex align-align-items-center"
    }, app_header_jsx("span", {
      className: "header-top__item-text"
    }, this.activeCurrency.toUpperCase()), app_header_jsx("img", {
      src: img_header_arrow_down_light_default.a,
      className: "nav__item-svg",
      alt: "arrowdownLight"
    }), this.state.showSelectBoxCurrency ? app_header_jsx(common["y" /* SelectBox */], {
      lang: this.lang,
      currency: this.activeCurrency,
      type: "currency"
    }) : null)), app_header_jsx("div", {
      className: "header-top__item header-top__item--icon-margin"
    }, app_header_jsx("div", {
      className: "header-top__item-container"
    }, app_header_jsx("a", {
      onClick: () => {
        this.setState({
          showSelectBoxLang: false,
          showSelectBoxCurrency: false,
          showAccountBox: !this.state.showAccountBox
        });
      },
      className: "header-top__item-link"
    }, app_header_jsx("div", null, app_header_jsx("span", {
      className: "header-top__item-text-up"
    }, this.props.isLogin ? (_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data.customerFullName : app_header_jsx(external_react_localize_redux_["Translate"], {
      id: "singin"
    })), app_header_jsx("span", {
      style: {
        cursor: "pointer"
      },
      className: "header-top__item-text mr-3"
    }, this.props.isLogin ? app_header_jsx(external_react_localize_redux_["Translate"], {
      id: "my-account"
    }) : app_header_jsx(external_react_localize_redux_["Translate"], {
      id: "account"
    }), app_header_jsx("img", {
      src: img_header_arrow_down_light_default.a,
      className: "nav__item-svg",
      alt: "arrowdownLight"
    }))), app_header_jsx("img", {
      src: img_header_profile_default.a,
      className: "header-top__item-icon header-top__item-icon--user",
      alt: "UserCheckIcon"
    }), this.state.showAccountBox ? app_header_jsx(common["y" /* SelectBox */], {
      lang: this.lang,
      currency: this.activeCurrency,
      className: "dropAccount",
      type: "account"
    }) : null))), app_header_jsx("div", {
      className: "header-top__item header-top__item--icon-margin"
    }, app_header_jsx("div", {
      className: "header-top__item-container"
    }, app_header_jsx("a", {
      href: `/${this.props.curr}-${this.props.lang}/cart`,
      className: "header-top__item-link header-top__item-link--relative"
    }, app_header_jsx("span", {
      className: "header-top__item-text mr-3"
    }, app_header_jsx(external_react_localize_redux_["Translate"], {
      id: "wishlist"
    })), this.props.wishCount > 0 && app_header_jsx("span", {
      className: "header-top__badge"
    }, this.props.wishCount), app_header_jsx("img", {
      src: img_header_heart_default.a,
      className: "header-top__item-icon header-top__item-icon--heart",
      alt: "HeartOutlineIcon"
    })))), app_header_jsx("div", {
      className: "header-top__item"
    }, app_header_jsx("div", {
      className: "header-top__item-container header-top__item--icon-margin"
    }, app_header_jsx("a", {
      href: `/${this.props.curr}-${this.props.lang}/cart`,
      className: "header-top__item-link"
    }, app_header_jsx("span", {
      className: "header-top__item-text mr-3"
    }, app_header_jsx(external_react_localize_redux_["Translate"], {
      id: "cart"
    })), this.props.cartCount > 0 && app_header_jsx("span", {
      className: "header-top__badge"
    }, this.props.cartCount), app_header_jsx("img", {
      src: img_header_cart_default.a,
      className: "header-top__item-icon header-top__item-icon--buy",
      alt: "BuyButtonIcon"
    }))))))), app_header_jsx(external_react_localize_redux_["Translate"], null, ({
      translate
    }) => {
      return app_header_jsx("div", null, this.props.isDesktop ? app_header_jsx(nav, {
        params: this.lang,
        content: translate,
        data: data
      }) : app_header_jsx("div", {
        className: "header__mobileMenu"
      }, data.logoUrlShopHeader && app_header_jsx(link_default.a, {
        href: "/[lang-curr]",
        as: `/${this.props.curr}-${this.props.lang}`
      }, app_header_jsx("a", {
        className: "header-top__item-link mr-4 ml-4"
      }, app_header_jsx("img", {
        src: logo_2_default.a,
        alt: "mobile logo",
        className: "header__mobileMenu--logo"
      }))), app_header_jsx("div", {
        className: "header__mobileMenu--search"
      }, app_header_jsx(link_default.a, {
        href: `/${this.props.curr}-${this.props.lang}/search?search=${this.state.search}`
      }, app_header_jsx("a", null, app_header_jsx(search_gray_default.a, {
        className: "mobile-search-input-icon"
      }))), app_header_jsx("input", {
        ref: this.inputRef,
        onChange: this.handleSearchChange.bind(this),
        type: "text",
        value: this.state.search,
        onKeyPress: this.handRedirectSearch,
        placeholder: translate("searchPlaceholder")
      })), this.state.searchData.length != 0 && app_header_jsx("div", {
        className: "searchResultMobile"
      }, app_header_jsx(SearchInput_SearchSugestion_SearchSugestion, {
        showLoader: this.state.searchResultLoading,
        data: this.state.searchData
      }))));
    }));
  }

}

const app_header_mapDispatchToProps = {
  addCartCount: cartAndWishlistSlice["c" /* addCartCount */],
  addWishCount: cartAndWishlistSlice["e" /* addWishCount */]
};

const mapStateToProps = state => {
  return {
    isLogin: Object(appConfigSlice["i" /* selectLogin */])(state).isLogin,
    lang: Object(appConfigSlice["h" /* selectLang */])(state),
    curr: Object(appConfigSlice["g" /* selectCurr */])(state),
    cartCount: Object(cartAndWishlistSlice["o" /* selectCartCount */])(state),
    wishCount: Object(cartAndWishlistSlice["v" /* selectWishCount */])(state)
  };
};

/* harmony default export */ var app_header = (Object(external_react_redux_["connect"])(mapStateToProps, app_header_mapDispatchToProps)(Object(router_["withRouter"])(app_header_AppHeader)));
// CONCATENATED MODULE: ./components/app/header/index.js


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

/***/ "0VMs":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/menu - addresses-d6517b695e09278599ee41ed8dedcae7.svg";

/***/ }),

/***/ "11Tc":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS4xMzkiIGhlaWdodD0iMTEuMTM5IiB2aWV3Qm94PSIwIDAgMTEuMTM5IDExLjEzOSI+DQogICAgPHBhdGggaWQ9ImFkZCIgZmlsbD0iI2ZmZiIgZD0iTTEwLjE0NSA0LjU3NUg2Ljc2M2EuMi4yIDAgMCAxLS4yLS4yVi45OTVhLjk5NS45OTUgMCAwIDAtMS45ODkgMHYzLjM4MWEuMi4yIDAgMCAxLS4yLjJILjk5NWEuOTk1Ljk5NSAwIDAgMCAwIDEuOTg5aDMuMzgxYS4yLjIgMCAwIDEgLjIuMnYzLjM4MmEuOTk1Ljk5NSAwIDAgMCAxLjk4OSAwVjYuNzYzYS4yLjIgMCAwIDEgLjItLjJoMy4zODJhLjk5NS45OTUgMCAwIDAgMC0xLjk4OXptMCAwIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("xJP+");


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

/***/ "2dJn":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/instagram-6e3bbde9d899557da6708b1faad6b7bd.svg";

/***/ }),

/***/ "2rcv":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/whatsapp-icon-1a694f4b214fe0a23d8d8f05a40a5e48.svg";

/***/ }),

/***/ "2zhz":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/empty-address-79fc73e6965ce623ff2be092ccc6cea1.svg";

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

/***/ "53UD":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/like-small-0d98e61f2213c8f403a0a6668ecac6b8.svg";

/***/ }),

/***/ "5CTP":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Component88-00358f827c18f7d71a0657e81e561bff.svg";

/***/ }),

/***/ "5U/F":
/***/ (function(module, exports) {

module.exports = require("react-input-range");

/***/ }),

/***/ "5w86":
/***/ (function(module, exports) {

module.exports = require("react-compound-timer/build");

/***/ }),

/***/ "69Df":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cash-e55d0a39728a8f4b4d09e081d05bc396.png";

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

/***/ "6cdP":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJoZWFkZXJfLV9hcnJvd19kb3duIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGRhdGEtbmFtZT0iaGVhZGVyIC0gYXJyb3cgZG93biIgdmlld0JveD0iMCAwIDE2IDE2Ij4NCiAgICA8ZyBpZD0icGxheSIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTc0LjEwNyAtMTIuNDU5KSI+DQogICAgICAgIDxwYXRoIGlkPSJQYXRoXzQwNSIgZmlsbD0iIzE3Mjg0MCIgZD0iTTE5Ny42NTUgMTUzLjAzNGwtNS4wOTQtMy42NTRhLjM0Mi4zNDIgMCAwIDAtLjUuMTIxLjQ0MS40NDEgMCAwIDAtLjA1OC4yMjF2Ny4zMDlhLjM4Ny4zODcgMCAwIDAgLjM2My40MDcuMzM3LjMzNyAwIDAgMCAuMi0uMDY1bDUuMDk0LTMuNjU0YS40MzUuNDM1IDAgMCAwIC4xMS0uNTYxLjM4OC4zODggMCAwIDAtLjExLS4xMjN6IiBkYXRhLW5hbWU9IlBhdGggNDA1Ii8+DQogICAgPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "7+Mu":
/***/ (function(module, exports) {

module.exports = require("react-dropdown");

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

/***/ "7ykv":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/edit-61304f465f4f6a73d95e79579467f95b.svg";

/***/ }),

/***/ "8BCV":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/menu - return-721086bb79f9e8f6af164fec6de4f8e4.svg";

/***/ }),

/***/ "8HVj":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/categories-ee8decebb403ae4d38797c85c1422359.svg";

/***/ }),

/***/ "8KQs":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/home-843e8f6c37d0f810237f4164296b8a5b.svg";

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

/***/ "8yPs":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4LjE2NSIgaGVpZ2h0PSI4LjE2NSIgdmlld0JveD0iMCAwIDguMTY1IDguMTY1Ij4NCiAgICA8ZyBpZD0iY2xvc2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLS4wMDIpIj4NCiAgICAgICAgPHBhdGggaWQ9IlBhdGhfNTM3IiBmaWxsPSIjYWNiMWI4IiBkPSJNNy44ODkgMS42MUw1LjQxNSA0LjA4NGwyLjQ3NCAyLjQ3NWEuOTQyLjk0MiAwIDEgMS0xLjMzMiAxLjMzMkw0LjA4MiA1LjQxNyAxLjYwOCA3Ljg5MUEuOTQyLjk0MiAwIDEgMSAuMjc2IDYuNTU4TDIuNzUgNC4wODQuMjc2IDEuNjFBLjk0Mi45NDIgMCAwIDEgMS42MDguMjc4bDIuNDc0IDIuNDc0TDYuNTU3LjI3OEEuOTQyLjk0MiAwIDAgMSA3Ljg4OSAxLjYxeiIgZGF0YS1uYW1lPSJQYXRoIDUzNyIvPg0KICAgIDwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "A4yD":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/5-c38a5660758209784333c7a94a6c0120.gif";

/***/ }),

/***/ "BOLt":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/deals-4e9c4ec2125a8125f4cdbad7277fc271.svg";

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

/***/ "C5/m":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS45OTkiIGhlaWdodD0iMTUuOTk5IiB2aWV3Qm94PSIwIDAgMTUuOTk5IDE1Ljk5OSI+PHBhdGggZD0iTTE1LjksMTQuOTU4bC00LjY0OC00LjY0OGE2LjM0NSw2LjM0NSwwLDEsMC0uOTQzLjk0M0wxNC45NTgsMTUuOWEuMzMzLjMzMywwLDAsMCwuNDcxLDBsLjQ3MS0uNDcxQS4zMzMuMzMzLDAsMCwwLDE1LjksMTQuOTU4Wk02LjMzMywxMS4zMzJhNSw1LDAsMSwxLDUtNUE1LjAwNSw1LjAwNSwwLDAsMSw2LjMzMywxMS4zMzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSIjMTcyODQwIi8+PC9zdmc+"

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

/***/ "Dmrs":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-credit-card-ea217eccc5f4b2ef5233e286f4879c14.svg";

/***/ }),

/***/ "DrLl":
/***/ (function(module) {

module.exports = JSON.parse("{\"refund-saved\":[\"refund saved successfully\",\"تم حفظ المبلغ المسترد بنجاح\",\"با موفقیت ذخیره شد\"],\"select-Item\":[\"please select an item first\",\"الرجاء تحديد عنصر أولا\",\"ابندا یک گزینه را انتخاب کنید\"],\"verify-mobile\":[\"you must verify your mobile number first\",\"يجب عليك التحقق من رقم هاتفك المحمول أولاً\",\"شما ابتدا باید شماره موبایل خود را تایید کنید\"],\"verification-succes\":[\"email verified successfully\",\"تم التحقق من البريد الإلكتروني بنجاح\",\"ایمیل شما با موفقیت تایید شد\"],\"verification-error\":[\"verification code is not correct!\",\"رمز التحقق غير صحيح\",\"کد وارد شده نامعتبر است\"],\"phone-not-valid\":[\"your phone number is not valid\",\"رقم الهاتف غير صالح\",\"شماره وارد شده صحیح نیست\"],\"phone-not-match-country\":[\"phone number is not valid for the selected region\",\"رقم الهاتف غير صالح للمنطقة المحددة\",\"شماره وارد شده با کشور انتخاب شده تطابق ندارد\"],\"select-region-first\":[\"please select a country first\",\"الرجاء تحديد البلد أولا\",\"ابتدا یک کشور را انتخاب کنید\"],\"code-is-not-valid\":[\"entered code is not valid\",\"الرمز الذي تم إدخاله غير صالح\",\"کد وارد شده صحیح نیست\"],\"email-not-valid\":[\"your email address is not valid\",\"عنوان البريد الإلكتروني غير صالح\",\"آدرس ایمیل موجود نمی باشد\"],\"pass-not-valid\":[\"your password must be at least 6 characters\",\"يجب أن تتكون كلمة المرور من 6 أحرف على الأقل\",\"کلمه عبور حداقل باید 6 کاراکتر باشد\"],\"confirm-pass\":[\"your passwords are not equals\",\"كلمة المرور ليست متشابهة\",\"کلمه عبور شما برابر نیست\"],\"empty-filed\":[\"this field must not be empty\",\"هذا الحقل مطلوب\",\"این گزینه نمی تواند خالی باشد\"],\"error-detected\":[\"There are items that require your attention\",\"هناك عناصر تتطلب انتباهك\",\"مطالبی می باشد که باید به آنها توجه کنید\"],\"succ-regitered\":[\"you have successfully registered\",\"تم التسجيل بنجاح\",\"ثبت نام شما با موفقیت انجام شد\"],\"succ-login\":[\"you have successfully logged in\",\"تم تسجيل الدخول بنجاح\",\"ورود شما با موفقیت انجام شد\"],\"succ-update-profile\":[\"you successfully edit your profile\",\"تم تحرير ملف التعريف بنجاح\",\"ویرایش پروفایل شما با موفقیت انجام شد\"],\"succ-update-password\":[\"you successfully change your password\",\"تم تغيير كلمة المرور بنجاح\",\"تغییر کلمه عبور شما با موفقیت انجام شد\"],\"confirm-address-delete\":[\"are you sure to delete this address\",\"هل أنت متأكد من حذف العنوان\",\"آیا مطمعن هستید که آدرس را حذف کنید؟\"],\"select-address\":[\"please select an address first\",\"الرجاء تحديد عنوان أولا\",\"لطفاً اول آدرس را انتخاب نمایید\"],\"select-payment\":[\"please select a payment method first\",\"الرجاء تحديد طريقة الدفع أولاً\",\"ابتدا روش پرداخت خود را انتخاب کنید\"],\"return-req\":[\"Request sended successfully\",\"تم ارسال الطلب بنجاح\",\"درخواست ارسال دوباره با موفقیت انجام شد\"],\"success-add-address\":[\"The address successfuly added\",\"تم إضافة العنوان بنجاح\",\"ادرس با موفقیت اضافه شد\"],\"success-update-address\":[\"The address successfully updated\",\"تم تحديث العنوان بنجاح\",\"ادرس با موفقیت بروز شد\"],\"success-delete-address\":[\"The address successfully deleted\",\"تم حذف العنوان بنجاح\",\"ادرس با موفقیت حذف شد\"],\"country-add-address\":[\"The address you selected is not in our list of active countries\",\"العنوان الذي حددته غير موجود في قائمة البلدان النشطة لدينا\",\"ادرس انتخاب شده توسط شما در لیست کشور های فعال ما قرار ندارد\"],\"error-city-create-shop\":[\"The selected country must be the same as the city you selected in step two\",\"يجب أن تكون الدولة المحددة هي نفس الدولة التي حددتها في الخطوة الثانية\",\"کشور انتخاب شده باید همان کشوری باشد که در مرحله دو انتخاب کرده اید\"],\"postal-code-filed\":[\"Enter valid Postal Code!\",\"أدخل رمزًا بريديًا صالحًا!\",\"کد پستی معتبر وارد کنید\"],\"pass-not-valid-create-shop\":[\"your password must be at least 8 characters\",\"يجب أن تتكون كلمة مرورك من 8 أحرف على الأقل\",\"رمز عبور حداقل باید 8 کاراکتر باشد\"],\"error-create-shop\":[\"Registration error occurred. Please try again\",\"حدث خطأ في التسجيل. حاول مرة اخرى\",\"خطایی در ثبت نام رخ داده است لطفا یکبار دیگر امتحان کنید\"],\"credi-card-filed\":[\"Enter valid CreditCard Number!\",\"أدخل رقم بطاقة ائتمان صالح!\",\"شماره کارت معتبر وارد کنید\"],\"reason-error\":[\"Select a reason is required\",\"تحديد سبب مطلوب\",\"انتخاب دلیل الزامی است\"]}");

/***/ }),

/***/ "E/xK":
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),

/***/ "E4SY":
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "E5gy":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/facebook-085185392dc86f53bb2e30cf9feaf7a7.svg";

/***/ }),

/***/ "EGWi":
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "ELs5":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shipped-b0f867eec8891238fdec0eb1e07b3a12.svg";

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

/***/ "GFe7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return client_getAddresses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return client_deleteAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return client_addAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return client_updateAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return client_changeDestination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return client_getOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return client_getActivePayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return client_getPaymentPageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return client_getPaymentResult; });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BfmP");

const client_getAddresses = async () => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/UserActivity/Address`);
  return result.data;
};
const client_deleteAddress = async addressId => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.delete(`/UserActivity/Address/${addressId}`);
  return result.data;
};
const client_addAddress = async ({
  transfereeMobile,
  postalCode,
  address,
  locationX,
  locationY,
  transfereeName,
  transfereeFamily
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.post(`/UserActivity/AddressCard`, {
    transfereeMobile,
    postalCode,
    address,
    locationX,
    locationY,
    transfereeName,
    transfereeFamily,
    MobileVerifed: false
  });
  return result.data;
};
const client_updateAddress = async ({
  addressId,
  transfereeMobile,
  postalCode,
  address,
  locationX,
  locationY,
  transfereeName,
  transfereeFamily
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.put(`/UserActivity/AddressOrder`, {
    addressId,
    transfereeMobile,
    postalCode,
    address,
    locationX,
    locationY,
    transfereeName,
    transfereeFamily,
    MobileVerifed: false
  });
  return result.data;
};
const client_changeDestination = async addressId => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.put(`/UserOrder/ChangeDestination/${addressId}`);
  return result.data;
};
const client_getOrder = async (code = "") => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get("/UserOrder/OrderDetail?code=" + code);
  return result.data;
};
const client_getActivePayment = async () => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.get(`/form/ActivePaymentMethod`);
  return result.data;
};
const client_getPaymentPageUrl = async (type, cardName, cardNumber, cardMonth, cardYear, cardSecurity, cardZip, coupon) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.post(`/UserOrder/InitOrderPayment`, {
    paymentType: type,
    cardName: cardName,
    cardNumber: cardNumber,
    cardMonth: cardMonth,
    cardYear: cardYear,
    securityCode: cardSecurity,
    cardZip: cardZip,
    code: coupon
  });
  return result.data;
};
const client_getPaymentResult = async ({
  paymentId,
  PayerID,
  token
}) => {
  const axios = _axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAxios();
  const result = await axios.post(`/UserOrder/PayOrder`, {
    PaymentId: paymentId,
    PayerID: PayerID,
    Token: token
  });
  return result.data;
};

/***/ }),

/***/ "GNgB":
/***/ (function(module, exports) {

module.exports = require("react-geocode");

/***/ }),

/***/ "HIpQ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Returns-7fb7c25d22421d786c9b646db343c94d.svg";

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

/***/ "Jsld":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-visa-5ae612d7c7b24cfd14e3c5fa55bf01d4.svg";

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

/***/ "KoxA":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/back-9de011aa37d4476b4dcd939f2050e735.svg";

/***/ }),

/***/ "L0zi":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/header-menu-94b2df1c9f2762e73936267722eab0da.svg";

/***/ }),

/***/ "LEBW":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension/developmentOnly");

/***/ }),

/***/ "Lnvz":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-header-heart-74bd62157b805a9066be41f03bfa60b7.svg";

/***/ }),

/***/ "MF5A":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/header-store-32eff875fd8bb4e5cb35ddc69af18f16.svg";

/***/ }),

/***/ "MGin":
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "N//i":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/menu - payment-52e25301f90689b6825f4f9418dcaae8.svg";

/***/ }),

/***/ "NNXn":
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "NZu/":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJoZWFkZXJfLV9zZWFyY2hfLV9sZWZ0IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGRhdGEtbmFtZT0iaGVhZGVyIC0gc2VhcmNoIC0gbGVmdCIgdmlld0JveD0iMCAwIDE2IDE2Ij4NCiAgICA8cGF0aCBpZD0iUGF0aF83NyIgZmlsbD0iIzE3Mjg0MCIgZD0iTS4xIDE0LjkxNGw0LjYzMS00LjYzNGE2LjMyNiA2LjMyNiAwIDEgMSAuOTQuOTRsLTQuNjM0IDQuNjMzYS4zMzIuMzMyIDAgMCAxLS40NyAwbC0uNDctLjQ3YS4zMzIuMzMyIDAgMCAxIC4wMDMtLjQ2OXpNOS42MzcgMTEuM2E0Ljk4NSA0Ljk4NSAwIDEgMC00Ljk4NS00Ljk4NkE0Ljk5IDQuOTkgMCAwIDAgOS42MzcgMTEuM3oiIGRhdGEtbmFtZT0iUGF0aCA3NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjA0OSAuMDI0KSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "O5CA":
/***/ (function(module, exports) {

module.exports = require("validator/lib/isEmpty");

/***/ }),

/***/ "OCln":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-paypal-c428ce58c966341c214c2fbeac92799b.svg";

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

/***/ "PyIC":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/order-placed-outline-ea08d5870db5566acaa34de1c006a665.svg";

/***/ }),

/***/ "Q21r":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ongoing-6b96fe7b154e94e54ef79075a45badac.svg";

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

/***/ "QkQT":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-american-c2c3550fcc19dcc706247323b672b830.svg";

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

/***/ "RPl1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_empty_address_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2zhz");
/* harmony import */ var _assets_icons_empty_address_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_empty_address_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_localize_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tepj");
/* harmony import */ var react_localize_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_localize_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MGin");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oncg");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["a"] = (({
  withoutBtn
}) => {
  const {
    url
  } = !withoutBtn ? Object(react_router__WEBPACK_IMPORTED_MODULE_3__["useRouteMatch"])() : {
    url: undefined
  };
  return __jsx("section", {
    className: "no-address"
  }, __jsx("div", null, __jsx(_assets_icons_empty_address_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"], {
    className: "no-address__icon"
  }), __jsx("p", {
    className: "no-address__topText"
  }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_2__["Translate"], {
    id: "addresses.empty-des"
  })), __jsx("p", {
    className: "no-address__btmText"
  }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_2__["Translate"], {
    id: "addresses.empty-des2"
  })), !withoutBtn && __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: `${url}/add`,
    className: "primary-btn no-address__btn"
  }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_2__["Translate"], {
    id: "addresses.addadress"
  }))));
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

/***/ "TIcW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ CartAndWishlistLayouts_CartAndWishlistItem_CartAndWishlistItem; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ CartAndWishlistAside; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ EmptyCart; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./assets/icons/express.png
var express = __webpack_require__("TozK");

// EXTERNAL MODULE: ./assets/icons/express-ar.png
var express_ar = __webpack_require__("BgOU");

// EXTERNAL MODULE: external "react-localize-redux"
var external_react_localize_redux_ = __webpack_require__("tepj");

// EXTERNAL MODULE: external "react-dropdown"
var external_react_dropdown_ = __webpack_require__("7+Mu");
var external_react_dropdown_default = /*#__PURE__*/__webpack_require__.n(external_react_dropdown_);

// EXTERNAL MODULE: ./assets/icons/like-small.svg
var like_small = __webpack_require__("53UD");

// EXTERNAL MODULE: ./assets/icons/delete-cart.svg
var delete_cart = __webpack_require__("fnaZ");

// EXTERNAL MODULE: ./assets/icons/cart1.svg
var cart1 = __webpack_require__("mv05");

// EXTERNAL MODULE: ./assets/icons/Component88.svg
var Component88 = __webpack_require__("5CTP");

// EXTERNAL MODULE: ./assets/icons/Returns.svg
var Returns = __webpack_require__("HIpQ");

// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__("E4SY");
var external_react_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_react_lazyload_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./lib/helpers.js
var helpers = __webpack_require__("FWZJ");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./appConfigSlice.js
var appConfigSlice = __webpack_require__("o2tl");

// EXTERNAL MODULE: ./lib/isRtl.js
var isRtl = __webpack_require__("gtw1");

// EXTERNAL MODULE: ./components/common/index.js + 35 modules
var common = __webpack_require__("lCwK");

// CONCATENATED MODULE: ./components/app/pages/CartAndWishlist/CartAndWishlistLayouts/CartAndWishlistItem/CartAndWishlistItem.jsx
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const MARKET = 1;
const AJYAL = 2;
const UBEX = 3;
const DHL = 4;
const ARAMEX = 5;
const EXPRESS = 6;
const NOT_POSSIBLE = 7;

class CartAndWishlistItem_CartAndWishlistItem extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleRemoveItem", e => {
      e.preventDefault();

      if (this.props.wishlistItem) {
        this.props.handleRemoveFromWishlist(this.props.goodsId);
      } else {
        this.props.removeItemFromCart(this.props.itemId);
      }
    });

    _defineProperty(this, "handleQuantityChange", selected => {
      const count = parseInt(selected.value);
      this.props.handleItemQuantityChange(count, this.props.goodsId, this.props.providerId);
    });

    _defineProperty(this, "handleWishToCart", e => {
      e.preventDefault();
      this.props.handleMoveWishToCart(this.props.goodsId, this.props.providerId);
    });

    _defineProperty(this, "renderDeliverType", () => {
      let content = null;

      switch (this.props.method) {
        case MARKET:
          content = __jsx(external_react_default.a.Fragment, null, __jsx("img", {
            src: `${"http://ajyal.webtreeonline.com/Uploads/Images/ShippingMethod"}/${MARKET + "." + this.props.lang + ".png"}`,
            alt: "marketpalce",
            className: "goodItem-s2__exp"
          }));
          break;

        case EXPRESS:
          content = __jsx("img", {
            src: `${"http://ajyal.webtreeonline.com/Uploads/Images/ShippingMethod"}/${EXPRESS + "." + this.props.lang + ".png"}`,
            alt: "EXPRESS",
            className: "goodItem-s2__exp"
          });
          break;

        case AJYAL:
          content = __jsx("img", {
            src: `${"http://ajyal.webtreeonline.com/Uploads/Images/ShippingMethod"}/${AJYAL + "." + this.props.lang + ".png"}`,
            alt: "AJYAL",
            className: "goodItem-s2__exp"
          });
          break;

        case UBEX:
          content = __jsx("img", {
            src: `${"http://ajyal.webtreeonline.com/Uploads/Images/ShippingMethod"}/${UBEX + "." + this.props.lang + ".png"}`,
            alt: "UBEX",
            className: "goodItem-s2__exp"
          });
          break;

        case ARAMEX:
          content = __jsx("img", {
            src: `${"http://ajyal.webtreeonline.com/Uploads/Images/ShippingMethod"}/${ARAMEX + "." + this.props.lang + ".png"}`,
            alt: "ARAMEX",
            className: "goodItem-s2__exp"
          });
          break;

        case DHL:
          content = __jsx("img", {
            src: `${"http://ajyal.webtreeonline.com/Uploads/Images/ShippingMethod"}/${DHL + "." + this.props.lang + ".png"}`,
            alt: "DHL",
            className: "goodItem-s2__exp"
          });
          break;

        case NOT_POSSIBLE:
          content = __jsx("p", {
            class: "itemDetail__cityError"
          }, __jsx(external_react_localize_redux_["Translate"], {
            id: "detail.city-not"
          }));
          break;
      }

      return content;
    });
  }

  render() {
    return __jsx("div", {
      className: "goodItem-s2-container cart-item"
    }, __jsx("article", {
      className: "goodItem-s2"
    }, __jsx("div", {
      className: "goodItem-s2__left-container"
    }, __jsx("figure", {
      className: "goodItem-s2__fig"
    }, __jsx(external_react_lazyload_default.a, {
      placeholder: __jsx("img", {
        className: "goodItem-loader__img",
        src: "/assets/imgs/placeholder-v2.png"
      })
    }, __jsx("img", {
      alt: this.props.title,
      className: "goodItem-s2__img",
      src: `${"http://ajyal.webtreeonline.com/Uploads/Images/Goods"}/${this.props.goodsId}/thumb-${this.props.goodsImage}`
    }))), __jsx("div", {
      className: "goodItem-s2__left-right"
    }, __jsx("div", {
      className: "goodItem-s2__ns-con"
    }, __jsx("div", {
      className: "cart-item__model"
    }, this.props.goodsBrand), __jsx(link_default.a, {
      href: "/[usd-cur]/product/[...good]",
      as: `/${this.props.curr}-${this.props.lang}/product/${this.props.goodsId}/${this.props.providerId}/${Object(helpers["l" /* slugy */])(this.props.title)}`
    }, __jsx("a", {
      className: "goodItem-s2__name"
    }, Object(helpers["n" /* trimTextLonger */])(this.props.title))), !this.props.wishlistItem && __jsx(common["k" /* FormErrorMsg */], {
      show: !this.props.shippingAvailable || !this.props.exist,
      style: {
        marginTop: "-2px",
        width: "90%"
      },
      msg: !this.props.exist ? __jsx(external_react_localize_redux_["Translate"], {
        id: "cart-cart.doesnt-exist-ava"
      }) : __jsx(external_react_localize_redux_["Translate"], {
        id: "cart-cart.doesnt-exist-city"
      })
    }), !this.props.wishlistItem && this.props.goodsVariety && __jsx("div", {
      className: "cart-item__model-container"
    }, __jsx("ul", {
      className: "d-flex flex-wrap cart-item__varietyList"
    }, this.props.goodsVariety.map(variety => {
      return __jsx("li", {
        className: "d-flex"
      }, __jsx("span", {
        className: "cart-item__model cart-item__model--less-margin"
      }, variety.parameterTitle, ":"), __jsx("span", {
        className: "cart-item__model-num-value"
      }, variety.valueTitle));
    })))), __jsx("div", {
      className: "cart-item__store-name"
    }, __jsx("span", null, __jsx(external_react_localize_redux_["Translate"], {
      id: "soldby"
    })), __jsx("span", {
      className: "store"
    }, this.props.storeName)), this.props.haveGuarantee && __jsx("div", {
      className: "cart-item__Guarantee"
    }, __jsx(Component88["ReactComponent"], {
      className: "cart-item__Guarantee-icon"
    }), __jsx("span", null, this.props.guaranteeMonthDuration, "\xA0", __jsx(external_react_localize_redux_["Translate"], {
      id: "month-war"
    }))), this.props.returningAllowed && __jsx("div", {
      className: "cart-item__Guarantee"
    }, __jsx(Returns["ReactComponent"], {
      className: "cart-item__Guarantee-icon"
    }), __jsx("span", null, __jsx(external_react_localize_redux_["Translate"], {
      id: "free-return"
    }))), __jsx("div", {
      className: "cart-item-remove-like d-flex"
    }, __jsx("a", {
      href: "",
      className: this.props.wishlistItem ? "cart-item__remove cart-item__remove--margin" : "cart-item__remove",
      onClick: this.handleRemoveItem
    }, __jsx(delete_cart["ReactComponent"], {
      className: "cart-item__text-icon cart-item__text-icon--remove"
    }), __jsx(external_react_localize_redux_["Translate"], {
      id: "cart-cart.removeFromList"
    })), this.props.wishlistItem && !this.props.saleWithCall && __jsx("a", {
      href: "",
      className: "cart-item__remove",
      onClick: this.handleWishToCart
    }, __jsx(cart1["ReactComponent"], {
      className: "cart-item__text-icon"
    }), __jsx(external_react_localize_redux_["Translate"], {
      id: "cart-wishlist.move-cart"
    })), this.props.cart && __jsx("a", {
      href: "",
      className: "cart-item__remove"
    }, __jsx(like_small["ReactComponent"], {
      className: "cart-item__text-icon"
    }), __jsx(external_react_localize_redux_["Translate"], {
      id: "cart-cart.move-whishlist"
    }))))), !this.props.withoutRight && __jsx("div", {
      className: "goodItem-s2__right-container cart-item__right"
    }, !this.props.saleWithCall ? __jsx("div", {
      className: "goodItem-s2__right-ft-con"
    }, __jsx("div", {
      className: "goodItem-s2__right-ft"
    }, __jsx("div", {
      className: "goodItem-s2__price-container"
    }, !Object(isRtl["a" /* isRtl */])(this.props.lang) ? __jsx("span", {
      className: "goodItem-s2__currency"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: this.props.curr
    })) : undefined, __jsx("span", {
      className: "goodItem-s2__number"
    }, this.props.wishlistItem ? Object(helpers["a" /* formatMoney */])(this.props.finalPrice) : Object(helpers["a" /* formatMoney */])(this.props.priceWithDiscount)), Object(isRtl["a" /* isRtl */])(this.props.lang) ? __jsx("span", {
      className: "goodItem-s2__currency"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: this.props.curr
    })) : undefined), this.props.discountAmount > 0 ? __jsx(external_react_default.a.Fragment, null, __jsx("div", {
      className: "goodItem-s2__off-percentage-container"
    }, __jsx("span", {
      className: "goodItem-s2__off-percentage"
    }, this.props.wishlistItem ? this.props.discountPercentage : this.props.discountPercent), __jsx("span", {
      className: "goodItem-s2__off-text"
    }, "% OFF")), __jsx("span", {
      className: "goodItem-s2__price-off"
    }, this.props.wishlistItem ? Object(helpers["a" /* formatMoney */])(this.props.price + this.props.vat) : Object(helpers["a" /* formatMoney */])(this.props.unitPrice * this.props.quantity + this.props.vat))) : undefined)) : __jsx("div", {
      className: "goodItem-s2__connect-provider"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "connect-provider"
    })), __jsx("div", null, this.props.showQuantity && this.props.isDownloadable != true && __jsx("div", {
      className: "cart-item__quantity"
    }, __jsx(external_react_dropdown_default.a, {
      value: this.props.quantity.toString(),
      className: "gray__dropDown cart-item__dropdown",
      options: Object(helpers["b" /* generateArrNumberRange */])(1, this.props.inventoryCount),
      onChange: this.handleQuantityChange
    })), !this.props.isDownloadable && this.renderDeliverType()))));
  }

}

const mapStateToProps = state => {
  return {
    lang: Object(appConfigSlice["h" /* selectLang */])(state),
    curr: Object(appConfigSlice["g" /* selectCurr */])(state)
  };
};

/* harmony default export */ var CartAndWishlistLayouts_CartAndWishlistItem_CartAndWishlistItem = (Object(external_react_redux_["connect"])(mapStateToProps)(CartAndWishlistItem_CartAndWishlistItem));
// EXTERNAL MODULE: ./assets/icons/close.svg
var icons_close = __webpack_require__("8yPs");

// EXTERNAL MODULE: ./assets/icons/addtocard.svg
var addtocard = __webpack_require__("sqzE");

// EXTERNAL MODULE: ./components/app/pages/CartAndWishlist/cartAndWishlistSlice.js
var cartAndWishlistSlice = __webpack_require__("QQGX");

// CONCATENATED MODULE: ./components/app/pages/CartAndWishlist/CartAndWishlistLayouts/CartAndWishlistAside/CartAndWishlistAside.jsx
var CartAndWishlistAside_jsx = external_react_default.a.createElement;

 // import "./CartAndWishlistAside.scss";
// import "./CartAndWishlistAside-rtl.scss";









/* harmony default export */ var CartAndWishlistAside = (({
  data,
  addCoupon,
  checkOut
}) => {
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const curr = Object(external_react_redux_["useSelector"])(appConfigSlice["g" /* selectCurr */]);
  const canCheckout = Object(external_react_redux_["useSelector"])(cartAndWishlistSlice["m" /* selectCanCheckout */]);
  const curr_coupon = Object(external_react_redux_["useSelector"])(cartAndWishlistSlice["s" /* selectCoupon */]);
  const {
    0: coupon,
    1: setCoupon
  } = Object(external_react_["useState"])("");

  const handleCouponClick = () => {
    addCoupon(coupon);
    setCoupon("");
  };

  const handleDeleteCoupon = () => {
    addCoupon(null);
    setCoupon("");
  };

  const handleCheckOut = () => {
    if (!canCheckout) return;
    checkOut();
  };

  return CartAndWishlistAside_jsx("aside", {
    className: "cart-aside"
  }, CartAndWishlistAside_jsx(common["b" /* BoxStyle1 */], null, CartAndWishlistAside_jsx("div", {
    className: "cart-aside__cnt"
  }, CartAndWishlistAside_jsx("div", {
    className: "cart-aside__top-cnt"
  }, CartAndWishlistAside_jsx("h4", {
    className: "cart-aside__header"
  }, CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: "aside.order-sum"
  })), CartAndWishlistAside_jsx("div", {
    className: "cart-aside__item"
  }, CartAndWishlistAside_jsx("span", null, CartAndWishlistAside_jsx("span", {
    className: "cart-aside__item-text"
  }, CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: "aside.subtotal"
  })), CartAndWishlistAside_jsx("span", {
    className: "cart-aside__item-text-sub"
  }, data.itemsCount, "\xA0", data.itemsCount > 1 ? CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: "cart-cart.items"
  }) : CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: "cart-cart.item"
  }))), CartAndWishlistAside_jsx("div", {
    className: "goodItem-s2__price-container d-flex"
  }, !Object(isRtl["a" /* isRtl */])(lang) && CartAndWishlistAside_jsx("span", {
    className: "goodItem-s2__number"
  }, CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  }), "\xA0"), CartAndWishlistAside_jsx("span", {
    className: "goodItem-s2__number"
  }, Object(helpers["a" /* formatMoney */])(data.totalWithOutDiscountCode - data.vat - data.shipping)), Object(isRtl["a" /* isRtl */])(lang) && CartAndWishlistAside_jsx("span", {
    className: "goodItem-s2__number"
  }, "\xA0", CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  })))), CartAndWishlistAside_jsx("div", {
    className: "cart-aside__item"
  }, CartAndWishlistAside_jsx("span", null, CartAndWishlistAside_jsx("span", {
    className: "cart-aside__item-text"
  }, CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: "aside.shipping"
  }))), CartAndWishlistAside_jsx("span", {
    className: "cart-aside__free"
  }, data.shipping === 0 ? CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: "aside.free"
  }) : Object(helpers["a" /* formatMoney */])(data.shipping))), data.discount > 0 && CartAndWishlistAside_jsx("div", {
    className: "cart-aside__item"
  }, CartAndWishlistAside_jsx("span", null, CartAndWishlistAside_jsx("span", {
    className: "cart-aside__item-text"
  }, CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: "aside.discount"
  }))), CartAndWishlistAside_jsx("div", {
    className: "d-flex"
  }, !Object(isRtl["a" /* isRtl */])(lang) && CartAndWishlistAside_jsx("span", {
    className: "cart-aside__discount"
  }, CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  }), "\xA0"), CartAndWishlistAside_jsx("span", {
    className: "cart-aside__discount"
  }, "-", Object(helpers["a" /* formatMoney */])(data.discount)), Object(isRtl["a" /* isRtl */])(lang) && CartAndWishlistAside_jsx("span", {
    className: "cart-aside__discount"
  }, "\xA0", CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  })))), data.vat > 0 && CartAndWishlistAside_jsx("div", {
    className: "cart-aside__item"
  }, CartAndWishlistAside_jsx("span", null, CartAndWishlistAside_jsx("span", {
    className: "cart-aside__item-text"
  }, CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: "aside.vat"
  }))), CartAndWishlistAside_jsx("div", {
    className: "goodItem-s2__price-container d-flex"
  }, !Object(isRtl["a" /* isRtl */])(lang) && CartAndWishlistAside_jsx("span", {
    className: "goodItem-s2__number"
  }, CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  }), "\xA0"), CartAndWishlistAside_jsx("span", {
    className: "goodItem-s2__number"
  }, Object(helpers["a" /* formatMoney */])(data.vat)), Object(isRtl["a" /* isRtl */])(lang) && CartAndWishlistAside_jsx("span", {
    className: "goodItem-s2__number"
  }, "\xA0", CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  })))), CartAndWishlistAside_jsx("div", {
    className: "cart-aside__item cart-aside__item--border"
  }, CartAndWishlistAside_jsx("h4", {
    className: "cart-aside__header"
  }, CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: "aside.total"
  }), data.vat > 0 && CartAndWishlistAside_jsx("span", {
    className: "cart-aside__item-text-sub cart-aside__item-text-sub--header"
  }, CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: "aside.inciusive"
  }))), CartAndWishlistAside_jsx("div", {
    className: "goodItem-s2__price-container"
  }, data.discount > 0 && CartAndWishlistAside_jsx("div", {
    className: "d-flex"
  }, !Object(isRtl["a" /* isRtl */])(lang) && CartAndWishlistAside_jsx("span", {
    className: "goodItem-s2__price-off"
  }, CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  }), "\xA0"), CartAndWishlistAside_jsx("span", {
    className: "goodItem-s2__price-off d-block"
  }, Object(helpers["a" /* formatMoney */])(data.totalWithOutDiscountCode)), Object(isRtl["a" /* isRtl */])(lang) && CartAndWishlistAside_jsx("span", {
    className: "goodItem-s2__price-off"
  }, "\xA0", CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  }))), CartAndWishlistAside_jsx("div", null, !Object(isRtl["a" /* isRtl */])(lang) && CartAndWishlistAside_jsx("span", {
    className: "goodItem-s2__number"
  }, CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  }), "\xA0"), CartAndWishlistAside_jsx("span", {
    className: "goodItem-s2__number"
  }, Object(helpers["a" /* formatMoney */])(data.total)), Object(isRtl["a" /* isRtl */])(lang) && CartAndWishlistAside_jsx("span", {
    className: "goodItem-s2__number"
  }, "\xA0", CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  })))))), CartAndWishlistAside_jsx("div", {
    className: "cart-aside__btm-cnt"
  }, CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], null, ({
    translate: t
  }) => {
    return CartAndWishlistAside_jsx(external_react_default.a.Fragment, null, CartAndWishlistAside_jsx("div", {
      className: "cart-aside__input-cnt"
    }, CartAndWishlistAside_jsx("input", {
      className: "gray__input cart-aside__input",
      type: "text",
      placeholder: t("aside.coupon"),
      value: coupon,
      onChange: e => {
        setCoupon(e.target.value);
      }
    }), CartAndWishlistAside_jsx(common["f" /* Button */], {
      radius: true,
      size: "xsm",
      onClick: handleCouponClick,
      value: CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
        id: "aside.apply"
      })
    })), curr_coupon && CartAndWishlistAside_jsx("div", {
      className: "cart-aside__coupon-cnt"
    }, CartAndWishlistAside_jsx("span", {
      className: "cart-aside__coupon-text"
    }, CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
      id: "aside.coupon2"
    })), CartAndWishlistAside_jsx("span", {
      className: "cart-aside__coupon-value"
    }, curr_coupon), CartAndWishlistAside_jsx(icons_close["ReactComponent"], {
      className: "cart-aside__coupon-icon",
      onClick: handleDeleteCoupon
    })), CartAndWishlistAside_jsx("div", {
      className: "cart-aside__btn-cnt"
    }, CartAndWishlistAside_jsx(common["f" /* Button */], {
      disable: !canCheckout,
      radius: true,
      value: CartAndWishlistAside_jsx(external_react_localize_redux_["Translate"], {
        id: "aside.checkout"
      }),
      onClick: handleCheckOut
    })));
  })))));
});
// EXTERNAL MODULE: ./assets/icons/shopping-cart2.svg
var shopping_cart2 = __webpack_require__("nHsO");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./components/app/pages/CartAndWishlist/CartAndWishlistLayouts/EmptyCart.jsx
var EmptyCart_jsx = external_react_default.a.createElement;





/* harmony default export */ var EmptyCart = (({
  dark,
  p1,
  p2,
  icon,
  normal,
  history
}) => {
  const navigateTo = () => {
    history.push('/');
  };

  return EmptyCart_jsx("div", {
    className: external_classnames_default()("empty-cart", {
      "empty-cart--gray": dark,
      "empty-cart--normal": normal
    })
  }, icon && EmptyCart_jsx(shopping_cart2["ReactComponent"], {
    className: "empty-cart__icon"
  }), EmptyCart_jsx("p", {
    className: "empty-cart__p1"
  }, p1), EmptyCart_jsx("p", {
    className: "empty-cart__p2"
  }, p2), EmptyCart_jsx(common["f" /* Button */], {
    onClick: navigateTo,
    radius: true,
    value: EmptyCart_jsx(external_react_localize_redux_["Translate"], {
      id: "con-shopping"
    })
  }));
});
// CONCATENATED MODULE: ./components/app/pages/CartAndWishlist/CartAndWishlistLayouts/index.js




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

/***/ "Tv38":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cart-127959b8da26ae9dc800af43b5b15451.svg";

/***/ }),

/***/ "UonA":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Email-a5acaf46b938ebaec0e0fd9d6b24bc86.svg";

/***/ }),

/***/ "Uvuq":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-star-gray-06ca9efe1223dee900ec79d4d309937a.svg";

/***/ }),

/***/ "VU+i":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj48cmVjdCB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAiLz48cGF0aCBkPSJNMzAsMTVBMTUsMTUsMCwxLDEsMTUsMCwxNSwxNSwwLDAsMSwzMCwxNVptMCwwIiBmaWxsPSIjZjBiNDQwIi8+PHBhdGggZD0iTTIsMTFBMiwyLDAsMCwxLDAsOVYyQTIsMiwwLDAsMSwyLDBIMTVhMiwyLDAsMCwxLDIsMlY5YTIsMiwwLDAsMS0yLDJaTTEuNjE5LDguMzFhMSwxLDAsMCwwLDEsMUgxNC4zODFhMSwxLDAsMCwwLDEtMVY1LjVIMS42MTlaTTE1LjM4MSwzLjM4N1YyLjY5NGExLDEsMCwwLDAtMS0xSDIuNjE5YTEsMSwwLDAsMC0xLDF2LjY5M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuNDkgOS41OTgpIiBmaWxsPSIjZmZmIi8+PC9zdmc+"

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

/***/ "WcO4":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJoZWFkZXJfLV9hcnJvd19kb3duIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGRhdGEtbmFtZT0iaGVhZGVyIC0gYXJyb3cgZG93biIgdmlld0JveD0iMCAwIDE2IDE2Ij4NCiAgICA8ZyBpZD0icGxheSIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTc0LjEwNyAtMTIuNDU5KSI+DQogICAgICAgIDxwYXRoIGlkPSJQYXRoXzQwNSIgZmlsbD0iI2RiZGJkYiIgZD0iTTE5Ny42NTUgMTUzLjAzNGwtNS4wOTQtMy42NTRhLjM0Mi4zNDIgMCAwIDAtLjUuMTIxLjQ0MS40NDEgMCAwIDAtLjA1OC4yMjF2Ny4zMDlhLjM4Ny4zODcgMCAwIDAgLjM2My40MDcuMzM3LjMzNyAwIDAgMCAuMi0uMDY1bDUuMDk0LTMuNjU0YS40MzUuNDM1IDAgMCAwIC4xMS0uNTYxLjM4OC4zODggMCAwIDAtLjExLS4xMjN6IiBkYXRhLW5hbWU9IlBhdGggNDA1Ii8+DQogICAgPC9nPg0KPC9zdmc+DQo="

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

/***/ "Xrh3":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/edit-small-df0aa24c497e6e62a1fa18785a150bed.svg";

/***/ }),

/***/ "Y/sV":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/heart-circle-fill-e66ed116a703eee6262666ebf851c647.svg";

/***/ }),

/***/ "Y7pu":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJwbGFjZWhvbGRlciIgd2lkdGg9IjIxLjIyNSIgaGVpZ2h0PSIzMy4xMDYiIHZpZXdCb3g9IjAgMCAyMS4yMjUgMzMuMTA2Ij4NCiAgICA8cGF0aCBpZD0iU3VidHJhY3Rpb25fNyIgZmlsbD0iI2ZlMTc0MyIgZD0iTTEwLjYxMyAzMy4xMDZMNi4yNSAyMC4yODZhMTAuNjEyIDEwLjYxMiAwIDEgMSA4LjcyNyAwTDEwLjYxNCAzMy4xem0wLTMwYTcuNSA3LjUgMCAxIDAgNy41IDcuNSA3LjUxMyA3LjUxMyAwIDAgMC03LjUtNy40OTd6IiBkYXRhLW5hbWU9IlN1YnRyYWN0aW9uIDciLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


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

/***/ "ZoKj":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-header-cart-1caa0c5cd0cca5af2347526a490ba5de.svg";

/***/ }),

/***/ "aEEx":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/house-12f9e041828b54aa65e327e5ffda0012.svg";

/***/ }),

/***/ "aNEW":
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "bsZb":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-upload-9c70194ff4cc9f09bc6c2f9d62fcef54.svg";

/***/ }),

/***/ "c+f6":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-credimax-8774115be733d6bbc445735112b4d52d.svg";

/***/ }),

/***/ "c2pk":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/account-d54d080d893560fcf05cdabc5c4b008a.svg";

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

/***/ "dIt4":
/***/ (function(module, exports) {

module.exports = require("firebase/messaging");

/***/ }),

/***/ "dUIK":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/app-store-ar-3a3006d577a4670a65e0a610702d8c85.png";

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

/***/ "dlhx":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/app-store-cd48aeb13c9d038051749a8bb180290e.png";

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

/***/ "efgi":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shipping-fill-06220a13021eab0078cf0a26d6b1e9a5.svg";

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

/***/ "eq0K":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4NCiAgICA8Zz4NCiAgICAgICAgPHBhdGggZmlsbD0iIzAyODhkMSIgZD0iTTguNiAxLjc1M2wtMi43IDIuNyAyLjcgMi43QTEuMDI3IDEuMDI3IDAgMSAxIDcuMTQ2IDguNmwtMi43LTIuNy0yLjcgMi43QTEuMDI3IDEuMDI3IDAgMSAxIC4zIDcuMTQ1TDMgNC40NDkuMyAxLjc1M0ExLjAyNyAxLjAyNyAwIDAgMSAxLjc1Mi4zTDQuNDQ5IDMgNy4xNDUuM0ExLjAyNyAxLjAyNyAwIDAgMSA4LjYgMS43NTN6IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAxLjk3OSAxMC40MTQpIi8+DQogICAgPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "fPZj":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/payment-outline-ef6832d9b7a4e384e4d0fcea112c3dd9.svg";

/***/ }),

/***/ "fnaZ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/delete-cart-48a1dc52b988f081b15e25bf0ce2bbf8.svg";

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

/***/ "hKlM":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-header-profile-c461f723543aa5bb75870629db83609e.svg";

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

/***/ "iGxQ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/phone-icon-97af811d1cd39934c996aae2efe96993.svg";

/***/ }),

/***/ "iqwy":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/google-play-ar-41df043debebc310d821128036f284f5.png";

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

/***/ "kagP":
/***/ (function(module) {

module.exports = JSON.parse("{\"@orderTitle\":[\"ajyal.bh | order\",\"ajyal.bh | طلب\",\"ajyal.bh | سفارش\"],\"order-nav\":{\"shipping-address\":[\"Shipping Address\",\"عنوان الشحن\",\"آدرس ارسال\"],\"payment\":[\"Payment\",\"الدفع\",\"پرداخت\"],\"order-placed\":[\"Order Placed\",\"تم وضع الطلب\",\"ثبت سفارش\"]},\"shipping\":{\"add-new-address\":[\"Add new address\",\"إضافة عنوان جديد\",\"افزودن آدرس جدید\"]},\"payment\":{\"payment\":[\"Payment\",\"الدفع\",\"پرداخت\"],\"your-order\":[\"Your Order\",\"قائمتي المفضلة\",\"سفارش شما\"],\"use-my-credits\":[\"Use my credits for this order\",\"استخدم رصیدي لشراء هذه الطلبیة\",\"استفاده از اعتبار من برای سفارش\"],\"ava-blc\":[\"Available balance:\",\"الرصید المتوفر\",\"موجودی کافی است\"],\"pay-with-cash\":[\"Pay with cash\",\"الدفع نقدا\",\"پرداخت نقدی\"],\"pay-with-card\":[\"Pay with card\",\"الدفع بالبطاقة\",\"پرداخت با کارت اعتباری\"],\"ship-to\":[\"Ship to\",\"الشحن الی\",\"ارسال به \"]},\"payment-method\":{\"name-on-card\":[\"Name on card\",\"الاسم على البطاقة\",\"نام کارت\"],\"card-number\":[\"Card Number\",\"رقم البطاقة\",\"شماره کارت\"],\"expiry-date\":[\"Expiry Date\",\"تاريخ الانتهاء \",\"تاریخ انقضا\"],\"security-code\":[\"Security Code\",\"رمز الحماية\",\"رمز عبور\"],\"postal-code\":[\"Zip/Postal Code\",\"الرمز البريدي\",\"کد پستی\"],\"complate-payment\":[\"Complate Payment\",\"دفع كامل\",\"تکمیل پرداخت \"],\"redirectToPyamnetPage\":[\"In order to complete your transaction, we will transfer you to payment page\",\"لإتمام معاملتك ، سنقوم بتحويلك إلى صفحة الدفع\",\"برای تکمیل معامله شما ، شما را به صفحه پرداخت منتقل خواهیم کرد\"]},\"orderplaced\":{\"go-to-order-detail\":[\"Go to Order Detail\",\"اذهب إلى تفاصيل الطلبية\",\"جزئیات سفارش\"]},\"cart-cart\":{\"mycart\":[\"My cart\",\"عربة التسوق\",\"سبد خرید من\"],\"item\":[\"Item\",\"المنتج\",\"گزینه\"],\"items\":[\"Items\",\"المنتجين\",\"گزینه ها\"],\"quantity\":[\"Quantity\",\"الكمية\",\"تعداد\"],\"removeFromList\":[\"Remove from list\",\"حذف\",\"حذف از لیست\"],\"move-whishlist\":[\"Move to Wishlist\",\"إضافة إلى منتجاتك المفضلة\",\"انتقال به علاقمندی ها\"],\"model-num\":[\"Model number\",\":رقم الموديل\",\"شماره مدل:\"],\"doesnt-exist-city\":[\"this item is not available in this city\",\"هذا العنصر غير متوفر في هذه المدينة\",\"این گزینه در این شهر موجود نمی باشد\"],\"doesnt-exist-ava\":[\"this item is not available\",\"هذا العنصر غير متوفر\",\"این گزینه موجود نمی باشد\"]},\"soldby\":[\"Sold by :\",\"البائع :\",\"فروشنده : \"],\"addresses\":{\"addresses\":[\"Addresses\",\"العناوين\",\"آدرس ها\"],\"empty-des\":[\"Where are your saved addresses?\",\"العناوين المحفوظة\",\"آدرس تایید شده شما کجاست؟\"],\"empty-des2\":[\"Add an address so we can get cracking on the delivery!\",\"أضف عنوانًا حتى نتمكن من توصيل الطلب إليك!\",\"یک آدرس برای تحویل کالا اضافه کنید\"],\"addadress\":[\"Add an address\",\"إضافة عنوان جديد\",\"اضافه کردن آدرس\"],\"setmap\":[\"Set from map:\",\"تعيين من الخريطة:\",\"انتخاب از نقشه\"],\"addnewadd\":[\"Add a new addresses\",\"إضافة عنوان جديد\",\"اضافه کردن آدرس جدید\"],\"addi-address\":[\"Additional address details\",\"تفاصيل العنوان الإضافية\",\"افزودن جزییات آدرس\"],\"addi-address-placeholder\":[\"Enter address details\",\"أدخل تفاصيل العنوان الإضافية\",\" جزییات آدرس را وارد کنید\"],\"postal-code\":[\"Postal code\",\"الكود البريدى\",\"کد پستی\"],\"postal-code-placeholder\":[\"Enter Postal code\",\"أدخل الرمز البريدي\",\"کد پستی را وارد کنید\"],\"firstname\":[\"First name\",\"الاسم\",\"نام\"],\"firstname-placeholder\":[\"Enter your first name\",\"أدخل الاسم الأول\",\"نام را وارد کنید\"],\"mobile-number\":[\"Mobile number\",\"رقم الجواّل\",\"شماره موبایل\"],\"mobile-number-placeholder\":[\"Enter mobile number\",\"أدخل رقم الجواّل\",\"شماره موبایل را وارد کنید\"],\"add-label\":[\"Address Label (Optional)\",\"تسمية العنوان (اختياري)\",\"برچسب آدرس (اختیاری)\"],\"lastname\":[\"Last name\",\"العائلة\",\"نام خانوادگی\"],\"lastname-placeholder\":[\"Enter your last name\",\"أدخل الاسم العائلة\",\"نام خانوادگی را وارد کنید\"],\"save\":[\"Save address\",\"حفظ العنوان\",\"ذخیره آدرس\"],\"verify\":[\"Please verify your mobile number to continue\",\"يرجى تأكيد رقم هاتفك المحمول للمتابعة\",\"لطفاً شماره موبایل خود را برای ادامه تایید کنید\"],\"verify-des\":[\"To proceed to checkout, use the OTP & verify your mobile number. We’ve sent the OTP to\",\"لمتابعة إتمام الشراء، استخدم كود OTP وقم بتأكيد رقم جوّالك. لقد قمنا بإرسال كود OTP إلى\",\"کد تایید ارسال شد ، برای اتمام ثبت نام کد تایید ارسال شده به شماره موبایل خود را وارد کنید \"],\"changephone\":[\"Change Phone Number\",\"تغيير الرقم\",\"تغییر شماره موبایل\"],\"changephone-btn\":[\"Submit & verify phone\",\"تحقق من رقم الهاتف\",\"ارسال و تایید شماره موبایل\"],\"skip\":[\"Skip\",\"تخطى\",\"رد شدن\"],\"dontreceive\":[\"Didn't receive OTP?\",\"لم يصلك رمز OTP?\",\"کد تایید دریافت نشد؟\"],\"resendnow\":[\"Resend now\",\"إعادة إرسال الآن\",\"ارسال مجدد\"],\"cancel\":[\"Cancel\",\"إلغاء\",\"لغو\"],\"entermobile\":[\"Please enter your new mobile number and we’ll send you a new OTP.\",\"الرجاء إدخال رقم جوّالك وسنقوم بإرسال كود OTP جديد لك.\",\"لطفاً شماره موبایل جدید خود را برای ارسال کد تایید وارد کنید\"],\"send-new-code\":[\"Send new code\",\"إرسال رمز جديد\",\"ارسال کد جدید\"],\"name\":[\"Name\",\"الاسم\",\"نام\"],\"phone\":[\"Phone\",\"رقم الهاتف\",\"شماره تماس\"],\"default\":[\"Set as default\",\"تعيين كافتراضي\",\"تنظیم به عنوان پیش فرض\"],\"delete\":[\"Delete address\",\"حذف العنوان\",\"حذف آدرس\"],\"edit\":[\"Edit\",\"تعدیل\",\"ویرایش\"],\"notvery\":[\"not verified\",\"لم يتم التحقق\",\"تایید نشد\"],\"pri-add\":[\"Primary address\",\"العنوان الرئيسي\",\"آدرس منتخب\"],\"confirm-loc\":[\"Confirm Location\",\"تأكيد الموقع\",\"تایید آدرس\"],\"search-loc-placeholder\":[\"Search for your location\",\"بحث عن موقعك\",\"جستجوی آدرس شما\"],\"set-default-add\":[\"Set as default address\",\"تعيين كعنوان افتراضي\",\" انتخاب آدرس اصلی\"]}}");

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

/***/ "mXvp":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-cash-455785fe378f91be001ac1c76b15f00c.svg";

/***/ }),

/***/ "mv05":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cart1-2063bec2c07204948982901a9ecd5f22.svg";

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

/***/ "nASZ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/google-play-bde2a881dacc8970b860187ff01220b3.png";

/***/ }),

/***/ "nHsO":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shopping-cart2-3afe568315864bb33cd3561e794d5244.svg";

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

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

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

/***/ "rECn":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC4wMDMiIGhlaWdodD0iMTguMDAzIiB2aWV3Qm94PSIwIDAgMTguMDAzIDE4LjAwMyI+DQogICAgPHBhdGggaWQ9InRhcmdldCIgZmlsbD0iI2ZmZiIgZD0iTTkgNS43MjhBMy4yNzMgMy4yNzMgMCAxIDAgMTIuMjc1IDkgMy4yNzIgMy4yNzIgMCAwIDAgOSA1LjcyOHptNy4zMTYgMi40NTVhNy4zNiA3LjM2IDAgMCAwLTYuNS02LjVWMEg4LjE4M3YxLjY4NmE3LjM2IDcuMzYgMCAwIDAtNi41IDYuNUgwVjkuODJoMS42ODZhNy4zNiA3LjM2IDAgMCAwIDYuNSA2LjVWMThIOS44MnYtMS42ODJhNy4zNiA3LjM2IDAgMCAwIDYuNS02LjVIMThWOC4xODNoLTEuNjgyek05IDE0LjczQTUuNzI4IDUuNzI4IDAgMSAxIDE0LjczIDkgNS43MjkgNS43MjkgMCAwIDEgOSAxNC43M3oiLz4NCjwvc3ZnPg0K"

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

/***/ "sRP1":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/business-and-trade-63ca0d88088c8344752c1282d64ddb0d.svg";

/***/ }),

/***/ "sqzE":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/addtocard-7c1c2aa041fd9ecb32470e2c8ba58b14.svg";

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

/***/ "tAkY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./assets/icons/Help.svg
var Help = __webpack_require__("v3Um");

// EXTERNAL MODULE: ./assets/icons/Email.svg
var Email = __webpack_require__("UonA");

// EXTERNAL MODULE: ./assets/icons/whatsapp-icon.svg
var whatsapp_icon = __webpack_require__("2rcv");

// EXTERNAL MODULE: ./assets/icons/phone-icon.svg
var phone_icon = __webpack_require__("iGxQ");

// EXTERNAL MODULE: ./assets/icons/social-media/facebook.svg
var facebook = __webpack_require__("E5gy");

// EXTERNAL MODULE: ./assets/icons/social-media/twitter.svg
var twitter = __webpack_require__("xsd1");

// EXTERNAL MODULE: ./assets/icons/social-media/instagram.svg
var instagram = __webpack_require__("2dJn");

// EXTERNAL MODULE: ./assets/icons/social-media/linkdin.svg
var linkdin = __webpack_require__("wW2i");

// EXTERNAL MODULE: ./assets/images/app-store.png
var app_store = __webpack_require__("dlhx");
var app_store_default = /*#__PURE__*/__webpack_require__.n(app_store);

// EXTERNAL MODULE: ./assets/images/google-play.png
var google_play = __webpack_require__("nASZ");
var google_play_default = /*#__PURE__*/__webpack_require__.n(google_play);

// EXTERNAL MODULE: ./assets/images/app-store-ar.png
var app_store_ar = __webpack_require__("dUIK");
var app_store_ar_default = /*#__PURE__*/__webpack_require__.n(app_store_ar);

// EXTERNAL MODULE: ./assets/images/google-play-ar.png
var google_play_ar = __webpack_require__("iqwy");
var google_play_ar_default = /*#__PURE__*/__webpack_require__.n(google_play_ar);

// EXTERNAL MODULE: ./assets/icons/Footer/img-american.svg
var img_american = __webpack_require__("QkQT");
var img_american_default = /*#__PURE__*/__webpack_require__.n(img_american);

// EXTERNAL MODULE: ./assets/icons/Footer/img-visa.svg
var img_visa = __webpack_require__("Jsld");
var img_visa_default = /*#__PURE__*/__webpack_require__.n(img_visa);

// EXTERNAL MODULE: ./assets/icons/Footer/img-mastercard.svg
var img_mastercard = __webpack_require__("xMaE");
var img_mastercard_default = /*#__PURE__*/__webpack_require__.n(img_mastercard);

// EXTERNAL MODULE: ./assets/icons/Footer/img-cash.svg
var img_cash = __webpack_require__("mXvp");
var img_cash_default = /*#__PURE__*/__webpack_require__.n(img_cash);

// EXTERNAL MODULE: ./assets/icons/Footer/img-paypal.svg
var img_paypal = __webpack_require__("OCln");
var img_paypal_default = /*#__PURE__*/__webpack_require__.n(img_paypal);

// EXTERNAL MODULE: ./assets/icons/Footer/img-credimax.svg
var img_credimax = __webpack_require__("c+f6");
var img_credimax_default = /*#__PURE__*/__webpack_require__.n(img_credimax);

// EXTERNAL MODULE: ./assets/icons/Footer/img-sadad.svg
var img_sadad = __webpack_require__("wduO");
var img_sadad_default = /*#__PURE__*/__webpack_require__.n(img_sadad);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./appConfigSlice.js
var appConfigSlice = __webpack_require__("o2tl");

// EXTERNAL MODULE: external "react-localize-redux"
var external_react_localize_redux_ = __webpack_require__("tepj");

// EXTERNAL MODULE: ./lib/querys.js
var querys = __webpack_require__("/CuA");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/common/ActiveLink/ActiveLink.jsx
var __jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = _ref => {
  let {
    children,
    activeClassName
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "activeClassName"]);

  const {
    asPath
  } = Object(router_["useRouter"])();
  const child = external_react_["Children"].only(children);
  const childClassName = child.props.className || ''; // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as

  const className = asPath === props.href || asPath === props.as ? `${childClassName} ${activeClassName}`.trim() : childClassName;
  return __jsx(link_default.a, props, /*#__PURE__*/external_react_default.a.cloneElement(child, {
    className: className || null
  }));
};

/* harmony default export */ var ActiveLink_ActiveLink = (ActiveLink);
// EXTERNAL MODULE: ./assets/icons/mobile/bottomTabs/account.svg
var account = __webpack_require__("c2pk");
var account_default = /*#__PURE__*/__webpack_require__.n(account);

// EXTERNAL MODULE: ./assets/icons/mobile/bottomTabs/cart.svg
var cart = __webpack_require__("Tv38");
var cart_default = /*#__PURE__*/__webpack_require__.n(cart);

// EXTERNAL MODULE: ./assets/icons/mobile/bottomTabs/categories.svg
var categories = __webpack_require__("8HVj");
var categories_default = /*#__PURE__*/__webpack_require__.n(categories);

// EXTERNAL MODULE: ./assets/icons/mobile/bottomTabs/home.svg
var home = __webpack_require__("8KQs");
var home_default = /*#__PURE__*/__webpack_require__.n(home);

// EXTERNAL MODULE: ./assets/icons/mobile/bottomTabs/deals.svg
var deals = __webpack_require__("BOLt");
var deals_default = /*#__PURE__*/__webpack_require__.n(deals);

// EXTERNAL MODULE: ./components/app/pages/CartAndWishlist/cartAndWishlistSlice.js
var cartAndWishlistSlice = __webpack_require__("QQGX");

// CONCATENATED MODULE: ./components/app/footer/app-footer.jsx
var app_footer_jsx = external_react_default.a.createElement;

 // import { withLocalize } from "react-localize-redux";
/// import assets
































class app_footer_AppFooter extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
    this.links = this.props.data.links ? this.props.data.links : {};
    this.lang = this.props.lang;
  }

  render() {
    return app_footer_jsx("footer", {
      className: "footer  p-0"
    }, app_footer_jsx("section", {
      className: "footer__top-container"
    }, app_footer_jsx("div", {
      className: "container siteWidthContainer"
    }, app_footer_jsx("div", {
      className: "footer__top-list row"
    }, app_footer_jsx("div", {
      className: "col-xl-4 col-12 footer__top-item footer__top-item--first"
    }, app_footer_jsx("p", {
      className: "footer__top-left-text"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.footer-msg1"
    })), app_footer_jsx("p", {
      className: "footer__btn-left-text"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.footer-msg2"
    }))), app_footer_jsx("div", {
      className: "col-xl-8 col-12"
    }, app_footer_jsx("div", {
      className: "row footer__mobile-style"
    }, app_footer_jsx("div", {
      className: "footer__top-item col-12 col-lg-3"
    }, app_footer_jsx(Help["ReactComponent"], {
      className: "footer__top-icon"
    }), app_footer_jsx(link_default.a, {
      href: `/${this.props.curr}-${this.props.lang}/hc`
    }, app_footer_jsx("a", {
      className: "top-item-info"
    }, app_footer_jsx("p", {
      className: "footer__t-text"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.helpCenter"
    })), app_footer_jsx("span", {
      className: "footer__b-text"
    }, this.links.address)))), app_footer_jsx("div", {
      className: "footer__top-item col-12 col-lg-3"
    }, app_footer_jsx(Email["ReactComponent"], {
      className: "footer__top-icon"
    }), app_footer_jsx("div", {
      className: "top-item-info"
    }, app_footer_jsx("p", {
      className: "footer__t-text"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.emailSupport"
    })), app_footer_jsx("span", {
      className: "footer__b-text"
    }, this.links.email))), app_footer_jsx("div", {
      className: "footer__top-item col-12 col-lg-3"
    }, app_footer_jsx(phone_icon["ReactComponent"], {
      className: "footer__top-icon"
    }), app_footer_jsx("div", {
      className: "top-item-info"
    }, app_footer_jsx("p", {
      className: "footer__t-text"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.phoneSupport"
    })), app_footer_jsx("span", {
      className: "footer__b-text"
    }, this.links.phone))), app_footer_jsx("div", {
      className: "footer__top-item col-12 col-lg-3"
    }, app_footer_jsx(whatsapp_icon["ReactComponent"], {
      className: "footer__top-icon"
    }), app_footer_jsx("div", {
      className: "top-item-info"
    }, app_footer_jsx("p", {
      className: "footer__t-text"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.whatsAppUs"
    })), app_footer_jsx("span", {
      className: "footer__b-text"
    }, this.links.supportPhone)))))))), app_footer_jsx("div", {
      className: "siteWidthContainer container-home",
      style: {
        margin: "0 auto"
      }
    }, app_footer_jsx("section", {
      className: "footer__btm-container "
    }, app_footer_jsx("div", {
      className: "footer__list-cnt row"
    }, this.data.footer && this.data.footer.map(cat => {
      return app_footer_jsx("ul", {
        className: "footer__md-list col-md-2",
        key: cat.categoryId
      }, app_footer_jsx("h3", {
        className: "footer__list-header"
      }, cat.categoryTitle), cat.childs && cat.childs.map(child => {
        let allLink = "#";

        if (child.haveWebPage) {
          allLink = `/${this.props.curr}-${this.props.lang}/category/${child.categoryId}`;
        } else {
          allLink = `/${this.props.curr}-${this.props.lang}/search?id=${child.categoryId}&type=${querys["b" /* SEARCH_TYPE_CATEGORY */]}`;
        }

        return app_footer_jsx("li", {
          key: child.categoryId,
          className: "footer__list-item"
        }, app_footer_jsx(link_default.a, {
          href: allLink
        }, app_footer_jsx("a", {
          className: "footer__list-link"
        }, child.categoryTitle)));
      }));
    }))), app_footer_jsx("section", {
      className: "pr-5 pl-5"
    }, app_footer_jsx("div", {
      className: "footer__nt-container row"
    }, app_footer_jsx("div", {
      className: "footer__nt-left col-12 col-xl-6 mb-5"
    }, app_footer_jsx("h4", {
      className: "footer__nt-header"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.ShopOnTheGo"
    })), app_footer_jsx("div", {
      className: "d-flex justify-content-center"
    }, app_footer_jsx("a", {
      href: ""
    }, app_footer_jsx("img", {
      alt: "",
      src: this.lang[1] === "ar" ? app_store_ar_default.a : app_store_default.a,
      className: "footer__nt-img"
    })), app_footer_jsx("a", {
      href: ""
    }, app_footer_jsx("img", {
      alt: "",
      src: this.lang[1] === "ar" ? google_play_ar_default.a : google_play_default.a,
      className: "footer__nt-img"
    })))), app_footer_jsx("div", {
      className: "footer__nt-right col-12 col-xl-6"
    }, app_footer_jsx("h4", {
      className: "footer__nt-header footer__nt-header--margin"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.ConnectWithUs"
    })), app_footer_jsx("ul", {
      className: "footer__nt-icon-list"
    }, app_footer_jsx("li", null, app_footer_jsx("a", {
      target: "_blank",
      className: "footer__nt-icon-container footer__nt-icon-container--facebook",
      href: this.links.facebookUrl
    }, app_footer_jsx(facebook["ReactComponent"], null))), app_footer_jsx("li", null, app_footer_jsx("a", {
      className: "footer__nt-icon-container",
      href: this.links.twitterUrl,
      target: "_blank"
    }, app_footer_jsx(twitter["ReactComponent"], null))), app_footer_jsx("li", null, app_footer_jsx("a", {
      target: "_blank",
      className: "footer__nt-icon-container",
      href: this.links.instagramUrl
    }, app_footer_jsx(instagram["ReactComponent"], null))), app_footer_jsx("li", null, app_footer_jsx("a", {
      target: "_blank",
      className: "footer__nt-icon-container",
      href: this.links.linkedinUrl
    }, app_footer_jsx(linkdin["ReactComponent"], null)))))))), app_footer_jsx("section", {
      className: "footer__btm2-container"
    }, app_footer_jsx("div", {
      className: "container siteWidthContainer container-home footer__btm2-container--flex row",
      style: {
        margin: "0 auto"
      }
    }, app_footer_jsx("div", {
      className: "footer__btm2-left col-12 col-xl-5 justify-content-center"
    }, app_footer_jsx("p", {
      className: "footer__btm2-text "
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.copyRight"
    })), app_footer_jsx("img", {
      src: img_paypal_default.a,
      alt: "paypal",
      title: "",
      className: "footer__btm2-img"
    }), app_footer_jsx("img", {
      src: img_credimax_default.a,
      alt: "credimax",
      className: "footer__btm2-img"
    }), app_footer_jsx("img", {
      src: img_sadad_default.a,
      alt: "sadad",
      className: "footer__btm2-img"
    }), app_footer_jsx("img", {
      src: img_american_default.a,
      alt: "american",
      className: "footer__btm2-img"
    }), app_footer_jsx("img", {
      src: img_cash_default.a,
      alt: "cash",
      className: "footer__btm2-img"
    }), app_footer_jsx("img", {
      src: img_visa_default.a,
      alt: "visa",
      className: "footer__btm2-img"
    }), app_footer_jsx("img", {
      src: img_mastercard_default.a,
      alt: "mastercard",
      className: "footer__btm2-img"
    })), app_footer_jsx("div", {
      className: "footer__btm2-right col-12 col-xl-7"
    }, app_footer_jsx("div", {
      className: "footer__desktop-end"
    }, app_footer_jsx(link_default.a, {
      href: `/${this.props.curr}-${this.props.lang}/content/CustomerRights`
    }, app_footer_jsx("a", {
      className: "footer__btm2-link"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.btm-nav.Careers"
    }))), app_footer_jsx(link_default.a, {
      href: `/${this.props.curr}-${this.props.lang}/content/WarrantyPolicy`
    }, app_footer_jsx("a", {
      className: "footer__btm2-link"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.btm-nav.warrantyPolicy"
    }))), app_footer_jsx(link_default.a, {
      href: `/${this.props.curr}-${this.props.lang}/becomeSeller`
    }, app_footer_jsx("a", {
      className: "footer__btm2-link"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.btm-nav.sellWithUs"
    }))), app_footer_jsx(link_default.a, {
      href: `/${this.props.curr}-${this.props.lang}/content/TermsOfUse`
    }, app_footer_jsx("a", {
      className: "footer__btm2-link"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.btm-nav.termOfUse"
    }))), app_footer_jsx(link_default.a, {
      href: `/${this.props.curr}-${this.props.lang}/content/TermsOfSale`
    }, app_footer_jsx("a", {
      className: "footer__btm2-link"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.btm-nav.termsOfSale"
    }))), app_footer_jsx(link_default.a, {
      href: `/${this.props.curr}-${this.props.lang}/content/PrivacyPolicy`
    }, app_footer_jsx("a", {
      className: "footer__btm2-link"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.btm-nav.privacyPolicy"
    })))), app_footer_jsx("div", {
      className: "footer__mobile-end row"
    }, app_footer_jsx(link_default.a, {
      href: `/${this.props.curr}-${this.props.lang}/content/CustomerRights`
    }, app_footer_jsx("a", {
      className: "footer__btm2-link"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.btm-nav.Careers"
    }))), app_footer_jsx(link_default.a, {
      href: `/${this.props.curr}-${this.props.lang}/content/WarrantyPolicy`
    }, app_footer_jsx("a", {
      className: "footer__btm2-link"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.btm-nav.warrantyPolicy"
    }))), app_footer_jsx(link_default.a, {
      href: `/${this.props.curr}-${this.props.lang}/becomeSeller`
    }, app_footer_jsx("a", {
      className: "footer__btm2-link"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.btm-nav.sellWithUs"
    }))), app_footer_jsx(link_default.a, {
      href: `/${this.props.curr}-${this.props.lang}/content/TermsOfUse`
    }, app_footer_jsx("a", {
      className: "footer__btm2-link"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.btm-nav.termOfUse"
    }))), app_footer_jsx(link_default.a, {
      href: `/${this.props.curr}-${this.props.lang}/content/TermsOfSale`
    }, app_footer_jsx("a", {
      className: "footer__btm2-link"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.btm-nav.termsOfSale"
    }))), app_footer_jsx(link_default.a, {
      href: `/${this.props.curr}-${this.props.lang}/content/PrivacyPolicy`
    }, app_footer_jsx("a", {
      className: "footer__btm2-link"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.btm-nav.privacyPolicy"
    }))), app_footer_jsx("div", {
      className: "col-12 text-center"
    }, app_footer_jsx("p", {
      className: "footer__btm2-text-mobile"
    }, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.chat"
    }))))))), !this.props.isDesktop && app_footer_jsx("div", {
      style: {
        marginTop: "100px"
      }
    }, app_footer_jsx("nav", {
      className: "footer__nav"
    }, app_footer_jsx(ActiveLink_ActiveLink, {
      activeClassName: "active-footer",
      href: `/${this.props.curr}-${this.props.lang}`
    }, app_footer_jsx("a", {
      href: ""
    }, app_footer_jsx("span", null, app_footer_jsx(home_default.a, null)), app_footer_jsx("span", null, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.btm-nav.home"
    })))), app_footer_jsx(ActiveLink_ActiveLink, {
      activeClassName: "active-footer",
      href: `/${this.props.curr}-${this.props.lang}/categories`
    }, app_footer_jsx("a", {
      href: ""
    }, app_footer_jsx("span", null, app_footer_jsx(categories_default.a, null)), app_footer_jsx("span", null, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.btm-nav.category"
    })))), app_footer_jsx(ActiveLink_ActiveLink, {
      activeClassName: "active-footer",
      href: `/${this.props.curr}-${this.props.lang}/search?type=5`
    }, app_footer_jsx("a", {
      href: ""
    }, app_footer_jsx("span", null, app_footer_jsx(deals_default.a, null)), app_footer_jsx("span", null, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.btm-nav.deals"
    })))), app_footer_jsx(ActiveLink_ActiveLink, {
      activeClassName: "active-footer",
      href: `/${this.props.curr}-${this.props.lang}/panel`
    }, app_footer_jsx("a", {
      href: ""
    }, app_footer_jsx("span", null, app_footer_jsx(account_default.a, null)), app_footer_jsx("span", null, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.btm-nav.profile"
    })))), app_footer_jsx(ActiveLink_ActiveLink, {
      activeClassName: "active-footer",
      href: `/${this.props.curr}-${this.props.lang}/cart`
    }, app_footer_jsx("a", {
      href: `/${this.props.curr}-${this.props.lang}/cart`,
      className: "iconContainer"
    }, app_footer_jsx("div", {
      style: {
        position: "relative"
      }
    }, app_footer_jsx("span", null, app_footer_jsx(cart_default.a, null), this.props.cartCount > 0 && app_footer_jsx("span", {
      className: "cart-mobile-counter"
    }, this.props.cartCount))), app_footer_jsx("span", null, app_footer_jsx(external_react_localize_redux_["Translate"], {
      id: "footer.btm-nav.cart"
    })))))));
  }

}

const mapDispatchToProps = {
  addCartCount: cartAndWishlistSlice["c" /* addCartCount */]
};

const mapStateToProps = state => {
  return {
    lang: Object(appConfigSlice["h" /* selectLang */])(state),
    curr: Object(appConfigSlice["g" /* selectCurr */])(state),
    cartCount: Object(cartAndWishlistSlice["o" /* selectCartCount */])(state)
  };
};

/* harmony default export */ var app_footer = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(app_footer_AppFooter));
// CONCATENATED MODULE: ./components/app/footer/index.js

/* harmony default export */ var footer = __webpack_exports__["a"] = (app_footer);

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

/***/ "v3Um":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Help-fdfe5a5407f1b17c07628cb887e1c981.svg";

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

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "wW2i":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/linkdin-5ccf750a7727103c3b7ad564180a3232.svg";

/***/ }),

/***/ "wYP+":
/***/ (function(module) {

module.exports = JSON.parse("{\"@categoryTitle\":[\"ajyal.bh | category\",\"ajyal.bh | الفئة\",\"ajyal.bh | دسته بندی\"],\"@indexTitle\":[\"ajyal.bh - Online Shopping in Bahrain\",\"التسوق عبر الإنترنت في البحرين\",\"فروشگاه آنلاین اجیال\"],\"lang\":[\"English\",\"العربیة\",\"فارسی\"],\"usd\":[\"USD\",\"$\",\"تومان\"],\"bhd\":[\"BHD\",\"د.ب\",\"تومان\"],\"tmn\":[\"TMN\",\"تومان\",\"تومان\"],\"searchPlaceholder\":[\"What are you looking for?\",\"ما الذي تبحث عنه؟\",\"در جستجوی چه هستید؟\"],\"seemore\":[\"see more\",\"اظهار الكل\",\"بیشتر\"],\"all\":[\"All\",\"جميع\",\"همه\"],\"search\":[\"search\",\"بحث\",\"جستجو\"],\"singin\":[\"Sign in or Sign up\",\"تسجيل الدخول أو الاشتراك\",\"ورود / ایجاد حساب کاربری\"],\"account\":[\"Account\",\"الحساب\",\"حساب کاربری\"],\"my-account\":[\"My Account\",\"حسابي\",\"حساب کاربری من\"],\"signin2\":[\"Sign in\",\"تسجيل الدخول\",\"ورود\"],\"signup\":[\"Sign up\",\"الاشتراك\",\"ثبت نام\"],\"wishlist\":[\"Wishlist\",\"المفصلة\",\"علاقمندی ها\"],\"cart\":[\"cart\",\"عربة التسوق\",\"سبد خرید\"],\"mobileMenuDesc\":[\"We have everything you need\",\"لدينا كل ما تحتاجه\",\"هرچیزی که شما نیاز دارید ما داریم\"],\"language\":[\"Language\",\"اللغة\",\"زبان\"],\"currency\":[\"currency\",\"العملة\",\"واحد پول\"],\"category\":[\"All Categories\",\"كل التصنيفات\",\"تمام دسته بندی ها\"],\"homeItem\":[\"Home\",\"الصفحة الرئيسية\",\"خانه\"],\"dealsItem\":[\"Deals\",\"العروض\",\"معاملات\"],\"orderTrackingItem\":[\"Order Tracking\",\"تتبع الطلب\",\"پیگیری سفارش\"],\"helpCenterItem\":[\"Help Center\",\"مركز المساعدة\",\"مرکز راهنمایی\"],\"sellWithUsItem\":[\"Sell with us\",\"البيع معنا\",\"با ما بفروشید\"],\"back-to-main-menu\":[\"Back to main menu\",\"العودة إلى القائمة الرئيسية\",\"بازگشت به منوی اصلی\"],\"home\":[\"Home\",\"الصفحة الرئيسية\",\"خانه\"],\"brands\":[\"Brands\",\"الماركات\",\"برند ها\"],\"connect-provider\":[\"Connect provider\",\"الاتصال بالبائع\",\"ارتباط با تامین کننده\"],\"country\":[\"Country\",\"بلد\",\"کشور\"],\"city\":[\"City\",\"مدينة\",\"شهر\"],\"province\":[\"Province\",\"المحافظة\",\"استان\"],\"common\":{\"unavailable\":[\"Unavailable\",\"غير متوفر\",\"ناموجود\"],\"save\":[\"Save\",\"حفظ\",\"ذخیره\"],\"name\":[\"Name\",\"الاسم\",\"نام\"],\"phone\":[\"Phone\",\"رقم الهاتف\",\"شماره موبایل\"],\"delete-address\":[\"Delete address\",\"حذف العنوان\",\"حذف آدرس\"],\"delete\":[\"Delete\",\"حذف\",\"حذف\"],\"edit\":[\"Edit\",\"تعدیل\",\"ویرایش\"],\"primary-address\":[\"primary address\",\"العنوان الرئيسي\",\"آدرس منتخب\"],\"recommended\":[\"Customer Also Viewed\",\"قد يعجبك أيضاً\",\"پیشنهاد برای شما\"],\"show-p-info\":[\"go to detail\",\"انتقل إلى التفاصيل\",\"به جزئیات بروید\"],\"continue\":[\"Continue\",\"متابعة\",\"ادامه\"],\"not-verified\":[\"not verified\",\"لم يتم التحقق\",\"تایید نشد\"],\"cancel\":[\"Cancel\",\"إلغاء\",\"لغو\"],\"place-order\":[\"Place Order\",\"تاکید الطلبیة\",\"محل سفارش\"],\"item\":[\"item\",\"منتج\",\"گزینه\"],\"items\":[\"items\",\"منتجات\",\"گزینه ها\"],\"back\":[\"Back\",\"عودة\",\"بازگشت\"],\"order\":[\"Order\",\"الطلبیه\",\"سفارش\"],\"continue-shopping\":[\"Continue Shopping\",\"متابعة التسوق\",\"ادامه خرید\"],\"addressform\":{\"verify\":[\"Please verify your mobile number to continue\",\"يرجى التحقق من رقم هاتفك المحمول للمتابعة\",\"شماره موبایل خود را برای ادامه تایید کنید\"],\"verify-des\":[\"To proceed to checkout, use the OTP & verify your mobile number. We’ve sent the OTP to\",\"لمتابعة إتمام الشراء، استخدم كود OTP وقم بتأكيد رقم جوّالك. لقد قمنا بإرسال كود OTP إلى\",\"کد تایید به شماره موبایل شما ارسال شد، برای تکمیل ثبت نام کد تایید را وارد کنید\"],\"changephone\":[\"Change Phone Number\",\"تغيير الرقم\",\"شماره موبایل خود را تغییر دهید\"],\"changephone-btn\":[\"Submit & verify phone\",\"تحقق من رقم الهاتف\",\"تایید شماره موبایل\"],\"skip\":[\"Skip\",\"رد شدن\",\"تخطى\"],\"dontreceive\":[\"Didn't receive OTP?\",\"لم يصلك رمز OTP?\",\"کد تایید دریافت نشده است؟\"],\"resendnow\":[\"Resend now\",\"إعادة إرسال الآن\",\"ارسال مجدد\"],\"entermobile\":[\"Please enter your new mobile number and we’ll send you a new OTP.\",\"الرجاء إدخال رقم جوّالك وسنقوم بإرسال كود OTP جديد لك.\",\"لطفاً شماره موبایل جدید خود را وارد کنید تا کد تایید برای شما ارسال شود\"],\"send-new-code\":[\"Send new code\",\"عايز كود جديد\",\"ارسال کد جدید\"],\"mobile-number-placeholder\":[\"Enter mobile number\",\"أدخل رقم الجواّل\",\"شماره موبایل را وارد کنید\"]},\"addressAside\":{\"order-sum\":[\"Order Summary\",\"ملخص الطلبية\",\"خلاصه سفارش\"],\"subtotal\":[\"Subtotal\",\"المجموع الفرعي\",\"جمع کل\"],\"shipping\":[\"Shipping\",\"الشحن\",\"ارسال\"],\"total\":[\"Total\",\"المجموع\",\"جمع بندی\"],\"free\":[\"Free\",\"مجاناً\",\"رایگان\"],\"inciusive\":[\"(Inclusive of VAT)\",\"(شامل ضريبة القيمة المضافة VAT)\",\"شامل ارزش افزوده\"],\"vat\":[\"VAT\",\"VAT\",\"ارزش افزوده\"],\"apply\":[\"Apply\",\"تطبيق\",\"تایید\"],\"coupon\":[\"Coupon Code or Gift Card\",\"رمز القسيمة أو الكوبون\",\"کارت هدیه یا کوپن\"],\"con-shop\":[\"Continue Shopping\",\"متابعة التسوق\",\"ادامه خرید\"],\"checkout\":[\"Checkout Now\",\"إتمام الشراء الآن\",\"اکنون پرداخت کنید\"],\"item\":[\"items\",\"منتج\",\"گزینه ها\"],\"discount\":[\"Discount\",\"خصم\",\"تخفیف\"],\"coupon2\":[\"Coupon\",\"قسيمة\",\"کد تخفیف\"]},\"go-detail\":[\"go to detail\",\"انتقل إلى التفاصيل\",\"به جزئیات بروید\"],\"good-item\":{\"model-num\":[\"Model number:\",\"رقم الموديل:\",\"نمونه عدد\"],\"reviews\":[\"reviews\",\"المراجعات\",\"نظرات\"]},\"good-process\":{\"cancelled\":[\"Cancelled\",\"تم الإلغاء\",\"لغو شده\"],\"delivered\":[\"Delivered\",\"تم التوصيل\",\"ارسال شده\"],\"processing\":[\"Processing\",\"معالجة\",\"در حال پردازش\"]},\"view-all\":[\"VIEW ALL\",\"مشاهدة الكل\",\"مشاهده همه\"]},\"email-verify\":{\"check-email\":[\"check your email inbox\",\"تحقق من صندوق البريد الإلكتروني الخاص بك\",\"لطفا ایمیل خود را بررسی کنید\"],\"enter-code\":[\"Enter the code that was sent to you to Verify the email\",\"أدخل الرمز الذي تم إرساله إليك للتحقق من البريد الإلكتروني\",\"لطفا کد ارسال شده به ایمیل را وارد کنید\"],\"verification-code-placeholder\":[\"Verification Code\",\"شفرة التأكيد\",\"کد تایید\"],\"verify\":[\"Verify\",\"تحقق\",\"تایید\"],\"verify-email\":[\"Verify Your Email\",\"تأكيد بريدك الألكتروني\",\"ایمیل خود را تایید کنید\"]},\"nav\":{\"profile\":[\"Profile\",\"حسابك\",\"پروفایل\"],\"orders\":[\"Orders\",\"الطلبيات\",\"سفارش ها\"],\"address\":[\"Addresses\",\"العناوين\",\"آدرس ها\"],\"payment\":[\"Payment\",\"عمليات الدفع\",\"پرداخت\"],\"credit\":[\"Ajyal Credits\",\"رصید اجیال\",\"حساب اجیال\"],\"return\":[\"Returns\",\"الإرجاع\",\"مرجوعی ها\"],\"preference\":[\"Preference\",\"تفضيلات\",\"اولویت\"],\"claims\":[\"Claims\",\"طلبات الضمان\",\"درخواست ها\"],\"signout\":[\"Sign Out\",\"تسجيل الخروج\",\"خروج از سیستم\"],\"matching-brand\":[\"Matching Brands\",\"الماركات المتطابقة\",\"انتخاب برند\"],\"matching-category\":[\"Matching Categories\",\"الفئات المتطابقة\",\"انتخاب دسته بندی\"]},\"footer\":{\"topBrand\":[\"Top Brands\",\"افضل المارکات\",\"برندهای برتر\"],\"topCategories\":[\"Top Categories\",\"الأكثرة شهرة\",\"دسته بندی های برتر\"],\"viewAll\":[\"View All\",\"عرض الكل\",\"نمایش همه\"],\"footer-msg1\":[\"We’re Always Here To Help\",\"نحن دائماً جاهزون لمساعدتك\",\"ما همیشه برای کمک در کنار شما هستیم\"],\"footer-msg2\":[\"Reach out to us through any of these support channels\",\"تواصل معنا من خلال قنوات الدعم التالية\",\"برای پشتیبانی از طریق  کانال های ارتباطی با ما در ارتباط باشید\"],\"helpCenter\":[\"HELP CENTER\",\"مرکزالمساعدة\",\"مرکز راهنمایی\"],\"emailSupport\":[\"EMAIL SUPPORT\",\"الدعم عبر البريد الإلكتروني\",\"ایمیل پشتیبانی\"],\"phoneSupport\":[\"PHONE SUPPORT\",\"الدعم عبر الهاتف\",\"شماره پشتیبانی\"],\"whatsAppUs\":[\"WhatsApp Us\",\"راسلنا علی\",\"واتس آپ \"],\"ConnectWithUs\":[\"CONNECT WITH US\",\"تواصل معنا\",\"با ما در ارتباط باشید\"],\"ShopOnTheGo\":[\"SHOP ON THE MOBILE\",\"تسوق أينما كنت\",\"خرید در تلفن موبایل شما\"],\"btm-nav\":{\"Careers\":[\"Customer Rights\",\"فرص التوظيف\",\"حقوق مشتریان\"],\"warrantyPolicy\":[\"Warranty Policy\",\"سياسة الضمان\",\"شرایط گارانتی\"],\"sellWithUs\":[\"Sell with us\",\"البيع معنا\",\"با ما بفروشید\"],\"termOfUse\":[\"Terms of Use\",\"شروط الاستخدام\",\"شرایط استفاده\"],\"termsOfSale\":[\"Terms of Sale\",\"شروط البيع\",\"شرایط فروش\"],\"privacyPolicy\":[\"Privacy Policy\",\"سياسة الخصوصية\",\"خط و مشی های امنیتی\"],\"home\":[\"Home\",\"المنزل\",\"خانه\"],\"category\":[\"Categories\",\"الفئات\",\"دسته بندی ها\"],\"profile\":[\"My Account\",\"حسابي\",\"پروفایل کاربری\"],\"cart\":[\"Cart\",\"عربة التسوق\",\"سبد خرید\"],\"deals\":[\"Deals\",\"العروض\",\"معاملات\"]},\"chat\":[\"Chat\",\"دردشه\",\"گفتگو\"],\"copyRight\":[\"© 2021 Ajyal. All Rights Reserved.\",\"أجیال. جميع الحقوق محفوظة © 2021\",\"© 2021 Ajyal. All Rights Reserved.\"]},\"dontlogin\":{\"retu-custo\":[\"Returning Customer\",\"الزبون العائد\",\"حساب کاربری دارید \"],\"dont-acc\":[\"Don't have an account?\",\"ليس لديك حساب؟\",\"حساب کاربری ندارید؟\"]},\"main-nav\":{\"storeList\":[\"Stores List\",\"المتاجر\",\"لیست فروشگاه ها\"]},\"How-are-these-calculated\":[\"How are these calculated?\",\"كيف يتم حساب ذلك؟\",\"این چگونه محاسبه میشود؟\"],\"mobile-profile\":{\"hala\":[\"Hala! Nice to meet you\",\"هاله! سعيد بلقائك\",\"\"],\"hala-des\":[\"The region's favorite online marketplace\",\"السوق المفضل على الإنترنت في المنطقة\",\"\"]},\"Goods\":[\"goods\",\"بضائع\",\"کالاها\"]}");

/***/ }),

/***/ "wduO":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-sadad-e4cfe6f5c8f3cacfc77ecffa9d2b98f9.svg";

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

/***/ "xJP+":
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

// EXTERNAL MODULE: ./translations/order-translations.json
var order_translations = __webpack_require__("kagP");

// EXTERNAL MODULE: ./translations/header-translations.json
var header_translations = __webpack_require__("wYP+");

// EXTERNAL MODULE: ./components/app/footer/index.js + 2 modules
var footer = __webpack_require__("tAkY");

// EXTERNAL MODULE: ./components/app/header/index.js + 5 modules
var header = __webpack_require__("/7k0");

// CONCATENATED MODULE: ./components/app/pages/Order/OrderConstants.js
const SHIPPING = 1;
const PAYMENT = 2;
const ORDERPLACED = 3;
const MAXSTEP = 3;
const NEXT = "NEXT";
const PREV = "PREV";
const COMPLETE_AND_NEXT = "COMPLETE_AND_NEXT";
// CONCATENATED MODULE: ./components/app/pages/Order/OrderContext.js

const orderContext = /*#__PURE__*/external_react_default.a.createContext();
// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__("CSOn");

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");

// EXTERNAL MODULE: ./components/app/pages/Order/OrderLayouts/ShippingAddress/ShippingAddressConstant.js
var ShippingAddressConstant = __webpack_require__("uaeF");

// EXTERNAL MODULE: ./components/app/pages/Order/OrderLayouts/ShippingAddress/VerifyPhone.jsx
var VerifyPhone = __webpack_require__("50fw");

// EXTERNAL MODULE: ./components/common/index.js + 35 modules
var common = __webpack_require__("lCwK");

// EXTERNAL MODULE: ./Responsive.js
var Responsive = __webpack_require__("jxY/");

// EXTERNAL MODULE: ./appConfigSlice.js
var appConfigSlice = __webpack_require__("o2tl");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./lib/helpers.js
var helpers = __webpack_require__("FWZJ");

// EXTERNAL MODULE: ./lib/toast.js
var toast = __webpack_require__("C5tE");

// EXTERNAL MODULE: ./lib/api/client/clientCommon.js
var clientCommon = __webpack_require__("hK2O");

// EXTERNAL MODULE: ./lib/formValidator.js
var formValidator = __webpack_require__("s6mn");

// CONCATENATED MODULE: ./components/app/pages/Order/OrderLayouts/ShippingAddress/ChangePhone.jsx
var __jsx = external_react_default.a.createElement;













const ChangePhone = ({
  handleSituation,
  currdata,
  setData
}) => {
  const {
    0: errors,
    1: setErrors
  } = Object(external_react_["useState"])({});
  const {
    0: mobile,
    1: setMobile
  } = Object(external_react_["useState"])("");
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const {
    0: submitLoading,
    1: setSubmitLoading
  } = Object(external_react_["useState"])(false);

  const handleSubmit = async () => {
    if (submitLoading) return;

    for (let key in errors) {
      if (errors[key]) {
        external_react_toastify_["toast"].error(Object(helpers["c" /* getErrorMsg */])(lang, "error-detected"), Object(toast["a" /* getToastConfig */])());
        return;
      }
    }

    setSubmitLoading(true);

    try {
      const result = await Object(clientCommon["e" /* client_changeMobileNumber */])({
        mobileNumber: mobile,
        addressId: currdata.addressId
      });

      if (result.status == "200") {
        setData({
          requestId: result.result.requestId,
          mobileNumber: mobile
        });
        setSubmitLoading(false);
        handleSituation(ShippingAddressConstant["e" /* VERIFY_PHONE */]);
      }
    } catch (err) {
      var _err$response$data$re;

      if ((_err$response$data$re = err.response.data.result) === null || _err$response$data$re === void 0 ? void 0 : _err$response$data$re.errorText) {
        var _err$response$data$re2;

        external_react_toastify_["toast"].error((_err$response$data$re2 = err.response.data.result) === null || _err$response$data$re2 === void 0 ? void 0 : _err$response$data$re2.errorText, Object(toast["a" /* getToastConfig */])());
      } else external_react_toastify_["toast"].error(err.response.data.message, Object(toast["a" /* getToastConfig */])());

      setSubmitLoading(false);
    }
  };

  return __jsx(external_react_localize_redux_["Translate"], null, ({
    translate: t
  }) => {
    return __jsx(common["c" /* BoxStyle2 */], {
      className: "orderaddress__change-phone p-5"
    }, __jsx("section", {
      className: "add-address-step3"
    }, __jsx("div", {
      className: "add-address-step3__col"
    }, __jsx("p", {
      className: "add-address-step3__p1 text-align-center"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "common.addressform.changephone"
    })), __jsx("p", {
      className: "add-address-step3__p2 text-align-center"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "common.addressform.entermobile"
    })), __jsx("div", {
      className: "add-address-step3__phone-container"
    }, __jsx("div", {
      className: "add-address-step1__mobile-cnt"
    }, __jsx("span", {
      className: "add-address-step1__mobile-code"
    }, " ", "+", currdata.phoneCode), __jsx("input", {
      className: "gray__input",
      type: "text",
      placeholder: t("common.addressform.mobile-number-placeholder"),
      name: "phone",
      value: mobile,
      onChange: e => {
        setMobile(e.target.value);

        if (errors[e.target.name]) {
          Object(formValidator["g" /* validatePhoneNumber */])({
            name: e.target.name,
            value: e.target.value,
            handler: setErrors,
            lang,
            iso: currdata.iso
          });
        }
      },
      onBlur: e => {
        Object(formValidator["g" /* validatePhoneNumber */])({
          name: e.target.name,
          value: e.target.value,
          handler: setErrors,
          lang,
          iso: currdata.iso
        });
      }
    })), __jsx(common["k" /* FormErrorMsg */], {
      show: errors["phone"],
      msg: errors["phone"]
    })), __jsx(Responsive["f" /* ProtraitPhonesAndBigger */], null, __jsx("button", {
      onClick: handleSubmit,
      to: "addresses",
      className: "primary-btn add-address-step3__btn"
    }, submitLoading ? __jsx(common["s" /* Loading */], {
      type: "white",
      with: "20px",
      height: "20px"
    }) : __jsx(external_react_localize_redux_["Translate"], {
      id: "common.addressform.send-new-code"
    }))), __jsx("a", {
      onClick: e => {
        e.preventDefault();
        handleSituation(ShippingAddressConstant["e" /* VERIFY_PHONE */]);
      },
      className: "add-address-step3__link mt-5 mt-md-3 d-block primary-link"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "common.cancel"
    })), __jsx(Responsive["e" /* ProtraitPhones */], null, __jsx("div", {
      className: "checkout-fix justify-content-center"
    }, __jsx("button", {
      onClick: handleSubmit,
      to: "addresses",
      className: "primary-btn returns__add-btn"
    }, submitLoading ? __jsx(common["s" /* Loading */], {
      type: "white",
      with: "20px",
      height: "20px"
    }) : __jsx(external_react_localize_redux_["Translate"], {
      id: "common.addressform.send-new-code"
    })))))));
  });
};

/* harmony default export */ var ShippingAddress_ChangePhone = (ChangePhone);
// EXTERNAL MODULE: ./assets/icons/back.svg
var icons_back = __webpack_require__("KoxA");

// EXTERNAL MODULE: external "google-map-react"
var external_google_map_react_ = __webpack_require__("E/xK");
var external_google_map_react_default = /*#__PURE__*/__webpack_require__.n(external_google_map_react_);

// EXTERNAL MODULE: ./assets/icons/placeholder.svg
var placeholder = __webpack_require__("Y7pu");
var placeholder_default = /*#__PURE__*/__webpack_require__.n(placeholder);

// EXTERNAL MODULE: ./assets/icons/5.gif
var _5 = __webpack_require__("A4yD");
var _5_default = /*#__PURE__*/__webpack_require__.n(_5);

// EXTERNAL MODULE: external "react-geocode"
var external_react_geocode_ = __webpack_require__("GNgB");

// EXTERNAL MODULE: ./assets/icons/target.svg
var target = __webpack_require__("rECn");

// EXTERNAL MODULE: ./lib/api/axios.js
var api_axios = __webpack_require__("BfmP");

// CONCATENATED MODULE: ./lib/api/client/clientMap.js

const client_areaCheck = async (lat, lng) => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`UserActivity/CheckAddressArea`, {
    params: {
      lat,
      long: lng
    }
  });
  return result.data;
};
// CONCATENATED MODULE: ./components/app/pages/Order/OrderLayouts/ShippingAddress/Map.jsx
var Map_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // const AnyReactComponent = ({ text }) => <div>{text}</div>;

/* harmony default export */ var Map = (class extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "addressWindowContent", () => {
      return `<div class="map__add-cnt">
    <h3 class="map__header"></h3>
    <div class="map__content">
    <img class="map__loading-icon" src="${_5_default.a}" />
    </div>
    </div>`;
    });

    _defineProperty(this, "handleBackClick", () => {
      this.props.back();
    });

    _defineProperty(this, "setAddressInWindowContent", response => {
      const name = response.cityName;
      const addr = response.address;
      this.infowindow.setContent(`<div class="map__add-cnt">
    <h3 class="map__header">${name}</h3>
    <div class="map__content">
    ${addr}
    </div>
    </div>`);
    });

    _defineProperty(this, "getAddress", async (lat, lng, cb) => {
      try {
        const results = await client_areaCheck(lat, lng);

        if (results.status === 200) {
          // console.log(results.results)
          cb(results.result);
        }
      } catch (err) {
        this.props.areaError(err);
        this.setState({
          showSubmitLoading: false
        });
        this.infowindow.close();
      } // Geocode.setApiKey(this.API_KEY);
      // Geocode.fromLatLng(lat, lng).then(
      //   (response) => {
      //     console.log(response);
      //     const address = response.results[0].formatted_address;
      //     // console.log(address);
      //     cb(response);
      //     // this.setAddressInWindowContent(response.results[1].formatted_address,address);
      //   },
      //   (error) => {
      //     console.error(error);
      //   }
      // );

    });

    _defineProperty(this, "setCurLocation", e => {
      e.preventDefault();

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.map.setCenter(pos);
          this.markers.forEach(marker => {
            marker.setMap(null);
          });
          this.markers = [];
          this.markers.push(new this.maps.Marker({
            position: pos,
            map: this.map,
            icon: placeholder_default.a
          }));
          this.selectedMarker = this.markers[0];
          this.infowindow.setContent(this.addressWindowContent());
          this.infowindow.open(this.map, this.selectedMarker);
          this.getAddress(this.selectedMarker.position.lat(), this.selectedMarker.position.lng(), this.setAddressInWindowContent);
        }, function () {// handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {// Browser doesn't support Geolocation
        // handleLocationError(false, infoWindow, map.getCenter());
      }
    });

    _defineProperty(this, "handleSearchBox", (map, maps) => {
      const searchBox = new maps.places.SearchBox(this.searchInput.current);
      map.controls[maps.ControlPosition.TOP_CENTER].push(this.searchInput.current);
      map.controls[maps.ControlPosition.TOP_LEFT].push(this.targetBtn.current);
      map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
      });
      this.markers = []; // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.

      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
          return;
        } // console.log(places);
        // Clear out the old markers.


        this.markers.forEach(marker => {
          marker.setMap(null);
        });
        this.markers = []; // For each place, get the icon, name and location.

        const bounds = new maps.LatLngBounds();
        places.forEach(place => {
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }

          const icon = {
            url: placeholder_default.a,
            size: new maps.Size(71, 71),
            origin: new maps.Point(0, 0),
            anchor: new maps.Point(17, 34),
            scaledSize: new maps.Size(25, 25)
          }; // Create a marker for each place.

          this.markers.push(new maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location
          }));

          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      });
    });

    _defineProperty(this, "handleApiLoaded", (map, maps) => {
      this.map = map;
      this.maps = maps;
      this.handleSearchBox(map, maps);
      this.infowindow = new maps.InfoWindow({
        content: this.addressWindowContent()
      });

      if (this.props.lat && this.props.lng) {
        this.markers = [];
        this.markers.push(new maps.Marker({
          position: {
            lat: this.props.lat,
            lng: this.props.lng
          },
          map,
          icon: placeholder_default.a
        }));
        this.selectedMarker = this.markers[0];
      }

      map.addListener("click", e => {
        this.markers.forEach(marker => {
          marker.setMap(null);
        });
        this.markers = [];
        this.markers.push(new maps.Marker({
          position: e.latLng,
          map,
          icon: placeholder_default.a
        }));
        this.selectedMarker = this.markers[0];
        this.infowindow.setContent(this.addressWindowContent());
        this.infowindow.open(map, this.selectedMarker);
        this.getAddress(this.selectedMarker.position.lat(), this.selectedMarker.position.lng(), this.setAddressInWindowContent);
      });
    });

    _defineProperty(this, "handleSubmit", () => {
      if (!this.selectedMarker) {
        alert("you should select your location first");
        return;
      }

      this.setState({
        showSubmitLoading: true
      }, () => {
        this.getAddress(this.selectedMarker.position.lat(), this.selectedMarker.position.lng(), response => {
          // this.props.setData({
          //   address: response.results[0].formatted_address,
          // });
          // this.handleBackClick();
          this.props.handleSubmit({
            address: response.address,
            lat: response.locationX,
            lng: response.locationY,
            phoneCode: response.phoneCode,
            iso: response.iso
          });
        });
      });
    });

    this.searchInput = /*#__PURE__*/external_react_default.a.createRef();
    this.targetBtn = /*#__PURE__*/external_react_default.a.createRef();
    this.markers = [];
    this.selectedMarker = null;
    this.API_KEY = "AIzaSyDA1IUurSPV52x4PbyUM3aeVA3AAIEtAwo";
    this.infowindow = null;
    this.map = null;
    this.maps = null;
    this.setCurLocation.bind(this);
    this.state = {
      showSubmitLoading: false
    };
    this.center = {
      lat: this.props.lat ? this.props.lat : parseInt("26.064832437137248"),
      lng: this.props.lng ? this.props.lng : parseInt("50.55588953197002")
    };
    this.zoom = this.props.zoom ? this.props.zoom : 9;
  }

  render() {
    return Map_jsx(external_react_localize_redux_["Translate"], null, ({
      translate: t
    }) => {
      return Map_jsx(external_react_default.a.Fragment, null, Map_jsx("section", {
        className: "mapAddress"
      }, Map_jsx("header", {
        className: "mapAddress__header mapAddress__header--order"
      }, Map_jsx("a", {
        onClick: this.handleBackClick
      }, Map_jsx(icons_back["ReactComponent"], {
        className: "mapAddress__back-icon"
      }), Map_jsx("span", {
        className: "mapAddress__header-text"
      }, Map_jsx(external_react_localize_redux_["Translate"], {
        id: "addresses.addresses"
      })))), Map_jsx("div", {
        id: "map",
        className: "mapAddress__map-cnt"
      }, Map_jsx("input", {
        placeholder: t("addresses.search-loc-placeholder"),
        type: "text",
        className: "gray__input mapAddress__searchInput",
        ref: this.searchInput
      }), Map_jsx(external_google_map_react_default.a, {
        yesIWantToUseGoogleMapApiInternals: true,
        onGoogleApiLoaded: ({
          map,
          maps
        }) => this.handleApiLoaded(map, maps),
        bootstrapURLKeys: {
          key: this.API_KEY,
          libraries: "places"
        },
        defaultCenter: this.center,
        defaultZoom: this.zoom
      }), Map_jsx("button", {
        onClick: $event => this.setCurLocation($event),
        className: "mapAddress__curr-btn",
        ref: this.targetBtn,
        type: "button"
      }, Map_jsx(target["ReactComponent"], {
        className: "mapAddress__target-icon"
      }))), Map_jsx("div", {
        className: "mapAddress__btn-cnt"
      }, Map_jsx("button", {
        onClick: this.handleSubmit,
        className: "primary-btn add-address-step1__btn",
        type: "button"
      }, this.state.showSubmitLoading ? Map_jsx(common["s" /* Loading */], {
        type: "white",
        width: "20px",
        height: "20px"
      }) : t("addresses.confirm-loc")))));
    });
  }

});
// CONCATENATED MODULE: ./components/app/pages/Order/OrderLayouts/ShippingAddress/SelectAddress.jsx
var SelectAddress_jsx = external_react_default.a.createElement;










const SelectAddress = ({
  handleSituation,
  setData,
  lat,
  lng
}) => {
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);

  const back = () => {
    handleSituation(ShippingAddressConstant["b" /* COMPLETE */]);
  };

  const handleSubmit = ({
    address,
    lat,
    lng,
    phoneCode,
    iso
  }) => {
    setData({
      address,
      lat,
      lng,
      phoneCode,
      iso
    });
    handleSituation(ShippingAddressConstant["c" /* GET_ADDRESS_DETAIL */]);
  };

  const handleAreaError = err => {
    var _err$response, _err$response$data;

    if (err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message) {
      external_react_toastify_["toast"].error(err.response.data.message, Object(toast["a" /* getToastConfig */])());
    } else {
      external_react_toastify_["toast"].error("error occurred for request", Object(toast["a" /* getToastConfig */])());
    }
  };

  return SelectAddress_jsx(common["c" /* BoxStyle2 */], {
    className: "orderaddress__change-phone p-5"
  }, SelectAddress_jsx("section", {
    className: "add-address-step3"
  }, SelectAddress_jsx(Map, {
    back: back,
    handleSubmit: handleSubmit,
    lat: lat,
    lng: lng,
    areaError: handleAreaError
  })));
};

/* harmony default export */ var ShippingAddress_SelectAddress = (SelectAddress);
// EXTERNAL MODULE: ./assets/icons/edit.svg
var edit = __webpack_require__("7ykv");

// CONCATENATED MODULE: ./components/app/pages/Order/OrderLayouts/ShippingAddress/AddressDetails.jsx
var AddressDetails_jsx = external_react_default.a.createElement;













/* harmony default export */ var AddressDetails = (({
  handleSituation,
  setData,
  currdata,
  addAddress
}) => {
  const {
    0: firstname,
    1: setFirstname
  } = Object(external_react_["useState"])(currdata.firstname);
  const {
    0: lastname,
    1: setLanstname
  } = Object(external_react_["useState"])(currdata.lastname);
  const {
    0: mobile,
    1: setMobile
  } = Object(external_react_["useState"])(currdata.mobileNumber);
  const {
    0: postalCode,
    1: setPostalCode
  } = Object(external_react_["useState"])(currdata.postalCode);
  const {
    0: errors,
    1: setErrors
  } = Object(external_react_["useState"])({});
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const {
    0: submitLoading,
    1: setSubmitLoading
  } = Object(external_react_["useState"])(false);

  const handleBackClick = () => {
    handleSituation(ShippingAddressConstant["b" /* COMPLETE */]);
  };

  const updateAddressClick = () => {
    handleSituation(ShippingAddressConstant["d" /* SELECT_ADDRESS */]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (submitLoading) return;

    for (let key in errors) {
      if (errors[key]) {
        external_react_toastify_["toast"].error(Object(helpers["c" /* getErrorMsg */])(lang, "error-detected"), Object(toast["a" /* getToastConfig */])());
        return;
      }
    }

    setSubmitLoading(true);
    setData({
      firstname: firstname,
      lastname: lastname,
      postalCode: postalCode,
      mobileNumber: mobile
    }, () => {
      addAddress(() => {
        if (currdata.isUpdate) {
          handleSituation(ShippingAddressConstant["b" /* COMPLETE */]);
        } else {
          handleSituation(ShippingAddressConstant["e" /* VERIFY_PHONE */]);
        }

        setSubmitLoading(false);
      });
    });
  };

  return AddressDetails_jsx(external_react_localize_redux_["Translate"], null, ({
    translate: t
  }) => {
    return AddressDetails_jsx(external_react_default.a.Fragment, null, AddressDetails_jsx(common["c" /* BoxStyle2 */], {
      className: "orderaddress__change-phone p-5"
    }, AddressDetails_jsx("form", {
      onSubmit: handleSubmit
    }, AddressDetails_jsx("section", {
      className: "add-address-step1 no-gutters"
    }, AddressDetails_jsx("header", {
      className: "mapAddress__header mapAddress__header--order"
    }, AddressDetails_jsx("a", {
      onClick: handleBackClick
    }, AddressDetails_jsx(icons_back["ReactComponent"], {
      className: "mapAddress__back-icon"
    }), AddressDetails_jsx("span", {
      className: "mapAddress__header-text"
    }, AddressDetails_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.addresses"
    })))), AddressDetails_jsx("div", {
      className: "row no-gutters justify-content-between"
    }, AddressDetails_jsx("div", {
      className: "col-md-6"
    }, AddressDetails_jsx("label", {
      className: "gray__form-label add-address-step1__item"
    }, AddressDetails_jsx("div", {
      className: "d-flex justify-content-between add-address-step1__mapinput gray__input clearfix"
    }, AddressDetails_jsx("div", {
      className: "col"
    }, AddressDetails_jsx("span", {
      className: "add-address-step1__mapinput-text"
    }, AddressDetails_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.setmap"
    })), AddressDetails_jsx("span", {
      className: "add-address-step1__mapinput-value"
    }, currdata.address)), AddressDetails_jsx("a", {
      onClick: updateAddressClick,
      className: "add-address-step1__mapinput-btn"
    }, AddressDetails_jsx(edit["ReactComponent"], null))))), AddressDetails_jsx("div", {
      className: "col-md-6"
    }, AddressDetails_jsx("label", {
      className: "gray__form-label add-address-step1__item"
    }, AddressDetails_jsx("span", {
      className: "gray__input-label"
    }, t("addresses.mobile-number"), AddressDetails_jsx("span", {
      className: "input-required"
    }, "*")), AddressDetails_jsx("div", {
      className: "add-address-step1__mobile-cnt"
    }, AddressDetails_jsx("span", {
      className: "add-address-step1__mobile-code mr-0"
    }, "+"), AddressDetails_jsx("span", {
      className: "add-address-step1__mobile-code"
    }, currdata.phoneCode), AddressDetails_jsx("input", {
      className: "gray__input",
      type: "tel",
      required: true,
      name: "phone",
      maxLength: "15",
      placeholder: t("addresses.mobile-number-placeholder"),
      value: mobile,
      onChange: e => {
        setMobile(e.target.value);

        if (errors[e.target.name]) {
          Object(formValidator["g" /* validatePhoneNumber */])({
            name: e.target.name,
            value: e.target.value,
            handler: setErrors,
            lang,
            iso: currdata.iso
          });
        }
      },
      onBlur: e => {
        Object(formValidator["g" /* validatePhoneNumber */])({
          name: e.target.name,
          value: e.target.value,
          handler: setErrors,
          lang,
          iso: currdata.iso
        });
      }
    })), AddressDetails_jsx(common["k" /* FormErrorMsg */], {
      show: errors["phone"],
      msg: errors["phone"]
    })))), AddressDetails_jsx("div", {
      className: "row no-gutters justify-content-between"
    }, AddressDetails_jsx("div", {
      className: "col-md-6"
    }, AddressDetails_jsx("label", {
      className: "gray__form-label add-address-step1__item"
    }, AddressDetails_jsx("span", {
      className: "gray__input-label"
    }, t("addresses.firstname"), AddressDetails_jsx("span", {
      className: "input-required"
    }, "*")), AddressDetails_jsx("input", {
      className: "gray__input",
      type: "text",
      name: "firstname",
      placeholder: t("addresses.firstname-placeholder"),
      onChange: e => {
        setFirstname(e.target.value);

        if (errors[e.target.name]) {
          Object(formValidator["d" /* validateEmpty */])({
            name: e.target.name,
            value: e.target.value,
            handler: setErrors,
            lang
          });
        }
      },
      value: firstname,
      required: true,
      onBlur: e => {
        Object(formValidator["d" /* validateEmpty */])({
          name: e.target.name,
          value: e.target.value,
          handler: setErrors,
          lang
        });
      }
    }), AddressDetails_jsx(common["k" /* FormErrorMsg */], {
      show: errors["firstname"],
      msg: errors["firstname"]
    }))), AddressDetails_jsx("div", {
      className: "col-md-6"
    }, AddressDetails_jsx("label", {
      className: "gray__form-label add-address-step1__item"
    }, AddressDetails_jsx("span", {
      className: "gray__input-label"
    }, t("addresses.lastname"), AddressDetails_jsx("span", {
      className: "input-required"
    }, "*")), AddressDetails_jsx("input", {
      className: "gray__input",
      type: "text",
      name: "lastname",
      placeholder: t("addresses.lastname-placeholder"),
      onChange: e => {
        setLanstname(e.target.value);

        if (errors[e.target.name]) {
          Object(formValidator["d" /* validateEmpty */])({
            name: e.target.name,
            value: e.target.value,
            handler: setErrors,
            lang
          });
        }
      },
      required: true,
      value: lastname,
      onBlur: e => {
        Object(formValidator["d" /* validateEmpty */])({
          name: e.target.name,
          value: e.target.value,
          handler: setErrors,
          lang
        });
      }
    }), AddressDetails_jsx(common["k" /* FormErrorMsg */], {
      show: errors["lastname"],
      msg: errors["lastname"]
    })))), AddressDetails_jsx("div", {
      className: "row no-gutters justify-content-between"
    }, AddressDetails_jsx("div", {
      className: "col-md-6"
    }, AddressDetails_jsx("label", {
      className: "gray__form-label add-address-step1__item"
    }, AddressDetails_jsx("span", {
      className: "gray__input-label"
    }, t("addresses.postal-code")), AddressDetails_jsx("input", {
      className: "gray__input",
      name: "postalCode",
      placeholder: t("addresses.postal-code-placeholder"),
      type: "text",
      pattern: "[0-9]*",
      value: postalCode,
      onChange: e => {
        setPostalCode(e.target.value);
      }
    }))))), AddressDetails_jsx("div", {
      className: "add-address-step1__btn-cnt"
    }, AddressDetails_jsx("button", {
      className: "primary-btn add-address-step1__btn",
      type: "submit"
    }, submitLoading ? AddressDetails_jsx(common["s" /* Loading */], {
      type: "white",
      width: "20px",
      height: "20px"
    }) : t("addresses.save"))))));
  });
});
// EXTERNAL MODULE: ./assets/icons/business-and-trade.svg
var business_and_trade = __webpack_require__("sRP1");

// EXTERNAL MODULE: ./assets/icons/edit-small.svg
var edit_small = __webpack_require__("Xrh3");

// EXTERNAL MODULE: ./assets/icons/delete.svg
var icons_delete = __webpack_require__("xREX");

// EXTERNAL MODULE: ./assets/icons/add-blue.svg
var add_blue = __webpack_require__("eq0K");

// EXTERNAL MODULE: ./lib/api/client/clientOrder.js
var clientOrder = __webpack_require__("GFe7");

// EXTERNAL MODULE: ./components/app/pages/UserPanel/PanelPages/Addresses/AddressesLayouts/NoAddressesPage.jsx
var NoAddressesPage = __webpack_require__("RPl1");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "google-libphonenumber"
var external_google_libphonenumber_ = __webpack_require__("2C5Q");

// CONCATENATED MODULE: ./components/app/pages/Order/OrderLayouts/ShippingAddress/AddressesList.jsx
var AddressesList_jsx = external_react_default.a.createElement;























const AddressesList = ({
  handleSituation,
  setData,
  handleOrderStep
}) => {
  const {
    0: addressLoading,
    1: setAddressLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: addressList,
    1: setAddressList
  } = Object(external_react_["useState"])([]);
  const {
    0: selectedAddress,
    1: setSelectedAddress
  } = Object(external_react_["useState"])(null);
  const {
    0: continueLoading,
    1: setContinueLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: verifyLoading,
    1: setVerifyLoading
  } = Object(external_react_["useState"])(false);
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const PNF = external_google_libphonenumber_["PhoneNumberFormat"];
  const phoneUtil = external_google_libphonenumber_["PhoneNumberUtil"].getInstance();

  const getAddresses = () => {
    setAddressLoading(true);
    setSelectedAddress(null);
    Object(clientOrder["e" /* client_getAddresses */])().then(response => {
      if (response.status === 200) {
        setAddressList(response.result);
        setAddressLoading(false);
      }
    }).catch(err => {
      console.log(err);
    });
  };

  Object(external_react_["useEffect"])(() => {
    getAddresses();
    return () => {};
  }, []);

  const handleDelete = async addressId => {
    const con = confirm(Object(helpers["c" /* getErrorMsg */])(lang, "confirm-address-delete"));
    if (!con) return;
    setAddressLoading(true);
    const del_resutl = await Object(clientOrder["c" /* client_deleteAddress */])(addressId);

    if (del_resutl.status === 200) {
      Object(clientOrder["e" /* client_getAddresses */])().then(response => {
        if (response.status === 200) {
          setAddressList(response.result);
          setAddressLoading(false);
        }
      }).catch(err => {
        console.log(err);
      });
    }
  };

  const handleEdit = adr => {
    setData({
      addressId: adr.addressId,
      address: adr.address,
      firstname: adr.transfereeName,
      lastname: adr.transfereeFamily,
      postalCode: adr.postalCode,
      mobileNumber: adr.transfereeMobile,
      requestId: null,
      lat: adr.locationX,
      lng: adr.locationY,
      isUpdate: true
    }, () => {
      handleSituation(ShippingAddressConstant["d" /* SELECT_ADDRESS */]);
    });
  };

  const handleAddNew = () => {
    setData({
      addressId: null,
      address: null,
      firstname: null,
      lastname: null,
      postalCode: null,
      mobileNumber: null,
      lat: null,
      lng: null,
      isUpdate: false
    }, () => {
      handleSituation(ShippingAddressConstant["d" /* SELECT_ADDRESS */]);
    });
  };

  const handleSelectAddress = selected => {
    const id = selected[0] ? parseInt(selected[0].name) : null;
    const verified = selected[0] ? selected[0].value : null;
    setSelectedAddress({
      id,
      verified
    });
  };

  const handleContinueClick = async () => {
    if (continueLoading) return;

    if (!selectedAddress || selectedAddress.id === null) {
      external_react_toastify_["toast"].error(Object(helpers["c" /* getErrorMsg */])(lang, "select-address"), Object(toast["a" /* getToastConfig */])());
      return;
    }

    if (!selectedAddress.verified) {
      external_react_toastify_["toast"].error(Object(helpers["c" /* getErrorMsg */])(lang, "verify-mobile"), Object(toast["a" /* getToastConfig */])());
      return;
    }

    setContinueLoading(true);

    try {
      const res = await Object(clientOrder["b" /* client_changeDestination */])(selectedAddress.id);

      if (res.status === 200) {
        handleOrderStep(NEXT);
      }
    } catch (err) {
      setContinueLoading(false);
      external_react_toastify_["toast"].error(err.response.data.message, Object(toast["a" /* getToastConfig */])());
    }
  };

  const handleVerifyClick = async item => {
    if (verifyLoading) return;
    setVerifyLoading(true);

    try {
      const res = await Object(clientCommon["e" /* client_changeMobileNumber */])({
        addressId: item.addressId,
        mobileNumber: item.transfereeMobile.trim()
      });

      if (res.status == "200") {
        setData({
          iso: item.iso,
          phoneCode: item.phoneCode,
          mobileNumber: item.transfereeMobile.trim(),
          addressId: item.addressId,
          requestId: res.result.requestId
        }, () => {
          handleSituation(ShippingAddressConstant["e" /* VERIFY_PHONE */]);
        });
      }
    } catch (err) {
      // this.setState({ verifyLoading: false });
      external_react_toastify_["toast"].error(err.response.data.message, Object(toast["a" /* getToastConfig */])());
      setVerifyLoading(false);
    }
  };

  const handleSetDefault = async addressId => {
    try {
      const res = await Object(clientCommon["f" /* client_setDefaultAddress */])({
        addressId
      });

      if (res.status == "200") {
        getAddresses();
      }
    } catch (err) {
      external_react_toastify_["toast"].error(err.response.data.message, Object(toast["a" /* getToastConfig */])());
    }
  };

  return AddressesList_jsx(external_react_default.a.Fragment, null, AddressesList_jsx(common["c" /* BoxStyle2 */], {
    className: "orderaddress"
  }, addressLoading ? AddressesList_jsx(common["s" /* Loading */], {
    type: "gray",
    width: "40px",
    height: "40px",
    styleSheet: {
      margin: "50px auto"
    }
  }) : AddressesList_jsx("section", {
    className: "orderaddress__cnt"
  }, addressList.length === 0 && AddressesList_jsx(NoAddressesPage["a" /* default */], {
    withoutBtn: true
  }), AddressesList_jsx("div", {
    className: "mt-2 mb-2"
  }, addressList.length > 0 ? AddressesList_jsx(common["A" /* SelectBox3 */], {
    className: "returns-add-single__select-box--addresses",
    onChange: handleSelectAddress
  }, addressList.map(adr => {
    return AddressesList_jsx(common["A" /* SelectBox3 */].SelectItem, {
      justCircleClick: true,
      name: adr.addressId,
      value: adr.mobileVerifed
    }, AddressesList_jsx("div", {
      className: "addresses__item-cnt no-gutters justify-content-between flex-wrap returns-add-single__addresses"
    }, AddressesList_jsx(Responsive["c" /* LandScapePhones */], null, AddressesList_jsx(common["t" /* MobileItemDrop */], null, AddressesList_jsx("a", {
      href: "",
      className: "addresses__right-item addresses__right-item--iconi",
      onClick: e => {
        e.preventDefault();
        handleDelete(adr.addressId);
      }
    }, AddressesList_jsx(icons_delete["ReactComponent"], {
      className: "addresses__right-item-icon"
    }), AddressesList_jsx(external_react_localize_redux_["Translate"], {
      id: "common.delete-address"
    })), AddressesList_jsx("a", {
      href: "",
      className: "addresses__right-item addresses__right-item--iconi",
      onClick: e => {
        e.preventDefault();
        handleEdit(adr);
      }
    }, AddressesList_jsx(edit_small["ReactComponent"], {
      className: "addresses__right-item-icon"
    }), AddressesList_jsx(external_react_localize_redux_["Translate"], {
      id: "common.edit"
    })))), AddressesList_jsx("div", {
      className: "col-12 col-md-5 addresses__row-item"
    }, AddressesList_jsx("span", {
      className: "addresses__icon-cnt"
    }, AddressesList_jsx(business_and_trade["ReactComponent"], {
      className: "addresses__left-icon"
    })), AddressesList_jsx("p", {
      className: "addresses__ars-text"
    }, adr.address)), AddressesList_jsx("div", {
      className: "col-auto addresses__row-item"
    }, AddressesList_jsx("span", {
      className: "addresses__ars-head"
    }, AddressesList_jsx(external_react_localize_redux_["Translate"], {
      id: "common.name"
    })), AddressesList_jsx("span", {
      className: "addresses__ars-value"
    }, adr.transfereeName + " " + adr.transfereeFamily)), AddressesList_jsx("div", {
      className: "col-auto  col-sm-auto addresses__row-item"
    }, AddressesList_jsx("span", {
      className: "addresses__ars-head"
    }, AddressesList_jsx(external_react_localize_redux_["Translate"], {
      id: "common.phone"
    })), AddressesList_jsx("span", {
      className: "addresses__ars-value"
    }, phoneUtil.format(phoneUtil.parseAndKeepRawInput(adr.phoneCode + adr.transfereeMobile, adr.iso), PNF.INTERNATIONAL)), !adr.mobileVerifed && AddressesList_jsx("span", {
      className: external_classnames_default()("addresses__ars-alert", "d-block", {
        "addresses__ars-alert--disable": verifyLoading
      }),
      onClick: () => {
        handleVerifyClick(adr);
      }
    }, AddressesList_jsx("span", {
      className: "addresses__alert-icon"
    }, "!"), AddressesList_jsx(external_react_localize_redux_["Translate"], {
      id: "common.not-verified"
    }))), AddressesList_jsx(Responsive["d" /* LandScapePhonesAndBigger */], null, AddressesList_jsx("div", {
      className: "col-12 col-md-auto addresses__row-item"
    }, adr.isDefualt ? AddressesList_jsx("a", {
      onClick: e => {
        e.preventDefault();
      },
      href: "",
      className: "addresses__right-item addresses__right-item--gray-btn"
    }, AddressesList_jsx(external_react_localize_redux_["Translate"], {
      id: "common.primary-address"
    })) : AddressesList_jsx("a", {
      href: "",
      onClick: e => {
        e.preventDefault();
        handleSetDefault(adr.addressId);
      },
      className: "addresses__right-item addresses__right-item--primary-btn"
    }, AddressesList_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.default"
    })), AddressesList_jsx("a", {
      href: "",
      className: "addresses__right-item addresses__right-item--iconi",
      onClick: e => {
        e.preventDefault();
        handleDelete(adr.addressId);
      }
    }, AddressesList_jsx(icons_delete["ReactComponent"], {
      className: "addresses__right-item-icon"
    }), AddressesList_jsx(external_react_localize_redux_["Translate"], {
      id: "common.delete-address"
    })), AddressesList_jsx("a", {
      href: "",
      className: "addresses__right-item addresses__right-item--iconi",
      onClick: e => {
        e.preventDefault();
        handleEdit(adr);
      }
    }, AddressesList_jsx(edit_small["ReactComponent"], {
      className: "addresses__right-item-icon"
    }), AddressesList_jsx(external_react_localize_redux_["Translate"], {
      id: "common.edit"
    }))))));
  })) : null))), AddressesList_jsx("section", {
    className: "order-re__btn-cnt d-flex justify-content-end mt-4 mb-4 mr-xl-0 mr-3"
  }, AddressesList_jsx(Responsive["f" /* ProtraitPhonesAndBigger */], null, AddressesList_jsx("button", {
    className: "primary-btn",
    onClick: handleAddNew
  }, AddressesList_jsx(external_react_localize_redux_["Translate"], {
    id: "shipping.add-new-address"
  })), AddressesList_jsx("button", {
    // onClick={this.handleContinueClick}
    className: "primary-btn ml-4  rtl-ml-0 rtl-mr-4",
    onClick: handleContinueClick
  }, continueLoading ? AddressesList_jsx(common["s" /* Loading */], {
    type: "white",
    width: "20px",
    height: "19px",
    styleSheet: {
      display: "inline"
    }
  }) : AddressesList_jsx(external_react_localize_redux_["Translate"], {
    id: "common.continue"
  }))), AddressesList_jsx(Responsive["e" /* ProtraitPhones */], {
    className: "w-100"
  }, AddressesList_jsx("button", {
    className: "orderaddress__full-with-btn",
    onClick: handleAddNew
  }, AddressesList_jsx(add_blue["ReactComponent"], {
    className: "orderaddress__full-with-btn-icon"
  }), AddressesList_jsx(external_react_localize_redux_["Translate"], {
    id: "shipping.add-new-address"
  })), AddressesList_jsx("div", {
    className: "checkout-fix justify-content-center"
  }, AddressesList_jsx("button", {
    //   onClick={this.handleContinueClick}
    className: "primary-btn returns__add-btn",
    onClick: handleContinueClick
  }, continueLoading ? AddressesList_jsx(common["s" /* Loading */], {
    type: "white",
    width: "20px",
    height: "19px",
    styleSheet: {
      display: "inline"
    }
  }) : AddressesList_jsx(external_react_localize_redux_["Translate"], {
    id: "common.continue"
  }))))));
};

/* harmony default export */ var ShippingAddress_AddressesList = (AddressesList);
// CONCATENATED MODULE: ./components/app/pages/Order/OrderLayouts/ShippingAddress/ShippingAddress.jsx
var ShippingAddress_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { ShippingAddress_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ShippingAddress_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import "./ShippingAddress.scss";
// import "./ShippingAddress-rtl.scss";











class ShippingAddress_ShippingAddress extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    ShippingAddress_defineProperty(this, "setData", (newData, cb) => {
      this.setState(state => {
        return _objectSpread(_objectSpread({}, state), {}, {
          data: _objectSpread(_objectSpread({}, state.data), newData)
        });
      }, () => {
        if (cb) {
          cb();
        }
      });
    });

    ShippingAddress_defineProperty(this, "addNewAddress", async cb => {
      if (this.state.data.isUpdate) {
        try {
          const result = await Object(clientOrder["i" /* client_updateAddress */])({
            addressId: this.state.data.addressId,
            transfereeMobile: this.state.data.mobileNumber,
            postalCode: this.state.data.postalCode,
            address: this.state.data.address,
            locationX: this.state.data.lat,
            locationY: this.state.data.lng,
            transfereeName: this.state.data.firstname,
            transfereeFamily: this.state.data.lastname
          });

          if (result.status === 200) {
            cb && cb();
          }
        } catch (err) {}
      } else {
        try {
          const result = await Object(clientOrder["a" /* client_addAddress */])({
            transfereeMobile: this.state.data.mobileNumber,
            postalCode: this.state.data.postalCode,
            address: this.state.data.address,
            locationX: this.state.data.lat,
            locationY: this.state.data.lng,
            transfereeName: this.state.data.firstname,
            transfereeFamily: this.state.data.lastname
          });

          if (result.status === 200) {
            this.setData({
              addressId: result.result.addressId,
              requestId: result.result.requestId
            }, () => {
              cb && cb();
            });
          }
        } catch (err) {}
      }
    });

    ShippingAddress_defineProperty(this, "handleContinueClick", () => {
      this.bool ? this.handleSituation(ShippingAddressConstant["e" /* VERIFY_PHONE */]) : this.context.handleStep(COMPLETE_AND_NEXT);
      this.bool = false;
    });

    this.state = {
      situation: ShippingAddressConstant["b" /* COMPLETE */],
      get_address_Loading: false,
      data: {
        addressId: null,
        requestId: null,
        isUpdate: false,
        address: null,
        iso: null,
        phoneCode: null,
        firstname: null,
        lastname: null,
        postalCode: null,
        mobileNumber: null,
        lat: null,
        lng: null
      }
    }; // for test

    this.bool = true; ////

    this.handleSituation = this.handleSituation.bind(this);
  }

  handleSituation(type) {
    let situation;

    switch (type) {
      case ShippingAddressConstant["a" /* CHANGE_PHONE */]:
        situation = ShippingAddressConstant["a" /* CHANGE_PHONE */];
        break;

      case ShippingAddressConstant["b" /* COMPLETE */]:
        situation = ShippingAddressConstant["b" /* COMPLETE */];
        break;

      case ShippingAddressConstant["e" /* VERIFY_PHONE */]:
        situation = ShippingAddressConstant["e" /* VERIFY_PHONE */];
        break;

      case ShippingAddressConstant["c" /* GET_ADDRESS_DETAIL */]:
        situation = ShippingAddressConstant["c" /* GET_ADDRESS_DETAIL */];
        break;

      case ShippingAddressConstant["d" /* SELECT_ADDRESS */]:
        situation = ShippingAddressConstant["d" /* SELECT_ADDRESS */];
        break;

      default:
        situation = ShippingAddressConstant["b" /* COMPLETE */];
        break;
    }

    this.setState({
      situation
    });
  }

  render() {
    let content;
    const situation = this.state.situation;

    switch (situation) {
      case ShippingAddressConstant["b" /* COMPLETE */]:
        content = ShippingAddress_jsx(ShippingAddress_AddressesList, {
          setData: this.setData,
          handleSituation: this.handleSituation,
          handleOrderStep: this.props.handleOrderStep
        });
        break;

      case ShippingAddressConstant["e" /* VERIFY_PHONE */]:
        content = ShippingAddress_jsx(VerifyPhone["a" /* default */], {
          setData: this.setData,
          currdata: this.state.data,
          handleSituation: this.handleSituation
        });
        break;

      case ShippingAddressConstant["a" /* CHANGE_PHONE */]:
        content = ShippingAddress_jsx(ShippingAddress_ChangePhone, {
          setData: this.setData,
          handleSituation: this.handleSituation,
          currdata: this.state.data
        });
        break;

      case ShippingAddressConstant["d" /* SELECT_ADDRESS */]:
        content = ShippingAddress_jsx(ShippingAddress_SelectAddress, {
          handleSituation: this.handleSituation,
          setData: this.setData,
          lat: this.state.data.lat,
          lng: this.state.data.lng
        });
        break;

      case ShippingAddressConstant["c" /* GET_ADDRESS_DETAIL */]:
        content = ShippingAddress_jsx(AddressDetails, {
          addAddress: this.addNewAddress,
          setData: this.setData,
          handleSituation: this.handleSituation,
          currdata: this.state.data
        });
        break;

      default:
        content = this.renderAddresses();
        break;
    }

    return ShippingAddress_jsx(external_react_default.a.Fragment, null, ShippingAddress_jsx(external_react_transition_group_["SwitchTransition"], null, ShippingAddress_jsx(external_react_transition_group_["CSSTransition"], {
      key: this.state.situation,
      key: this.state.situation,
      classNames: "user-panel__routes",
      timeout: 200
    }, content)));
  }

}

ShippingAddress_defineProperty(ShippingAddress_ShippingAddress, "contextType", orderContext);
// EXTERNAL MODULE: ./assets/icons/payment/shipping-fill.svg
var shipping_fill = __webpack_require__("efgi");

// EXTERNAL MODULE: ./assets/icons/payment/payment-outline.svg
var payment_outline = __webpack_require__("fPZj");

// EXTERNAL MODULE: ./assets/icons/payment/payment-fill.svg
var payment_fill = __webpack_require__("VU+i");

// EXTERNAL MODULE: ./assets/icons/payment/order-placed-outline.svg
var order_placed_outline = __webpack_require__("PyIC");

// CONCATENATED MODULE: ./components/app/pages/Order/OrderLayouts/OrderNav.jsx
var OrderNav_jsx = external_react_default.a.createElement;

function OrderNav_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class OrderNav_class extends external_react_default.a.Component {
  render() {
    const needBack = this.context.step === PAYMENT ? true : false;
    return OrderNav_jsx("header", {
      className: "ordernav"
    }, OrderNav_jsx(common["c" /* BoxStyle2 */], {
      className: "ordernav__state-box"
    }, needBack && OrderNav_jsx("div", {
      className: "createshop__prev-cnt ordernav__back-cnt"
    }, OrderNav_jsx("div", {
      onClick: () => {
        this.context.handleStep(PREV);
      },
      className: "text-align-right",
      style: {
        cursor: "pointer"
      }
    }, OrderNav_jsx(icons_back["ReactComponent"], {
      className: "createshop__back-icon"
    }), OrderNav_jsx(external_react_localize_redux_["Translate"], {
      id: "common.back"
    }))), OrderNav_jsx("div", {
      className: "d-flex flex-row justify-content-center align-items-center"
    }, OrderNav_jsx("div", {
      className: external_classnames_default()("ordernav__item-cnt", "d-flex", "align-items-center", "justify-content-center", {
        active: this.context.orderState[SHIPPING].active || this.context.orderState[SHIPPING].complete
      })
    }, OrderNav_jsx("i", {
      className: "ordernav__icon-cnt"
    }, OrderNav_jsx(shipping_fill["ReactComponent"], {
      className: "ordernav__icon"
    })), OrderNav_jsx("span", {
      className: "ordernav__text"
    }, OrderNav_jsx(external_react_localize_redux_["Translate"], {
      id: "order-nav.shipping-address"
    }))), OrderNav_jsx("div", {
      className: external_classnames_default()("ordernav__item-cnt", "d-flex", "align-items-center", "justify-content-center", "ordernav__item-cnt--have-line", {
        active: this.context.orderState[PAYMENT].active || this.context.orderState[PAYMENT].complete
      })
    }, OrderNav_jsx("i", {
      className: "ordernav__icon-cnt"
    }, this.context.orderState[ORDERPLACED].active || this.context.orderState[ORDERPLACED].complete ? OrderNav_jsx(payment_fill["ReactComponent"], {
      className: "ordernav__icon"
    }) : OrderNav_jsx(payment_outline["ReactComponent"], {
      className: "ordernav__icon"
    })), OrderNav_jsx("span", {
      className: "ordernav__text"
    }, OrderNav_jsx(external_react_localize_redux_["Translate"], {
      id: "order-nav.payment"
    }))), OrderNav_jsx("div", {
      className: "ordernav__item-cnt d-flex align-items-center justify-content-center ordernav__item-cnt--have-line"
    }, OrderNav_jsx("i", {
      className: "ordernav__icon-cnt"
    }, OrderNav_jsx(order_placed_outline["ReactComponent"], {
      className: "ordernav__icon"
    })), OrderNav_jsx("span", {
      className: "ordernav__text"
    }, OrderNav_jsx(external_react_localize_redux_["Translate"], {
      id: "order-nav.order-placed"
    }))))));
  }

}

OrderNav_defineProperty(OrderNav_class, "contextType", orderContext);
// CONCATENATED MODULE: ./components/app/pages/Order/OrderLayouts/ShipTo.jsx
var ShipTo_jsx = external_react_default.a.createElement;



/* harmony default export */ var ShipTo = (({
  withoutEdit,
  data
}) => {
  return ShipTo_jsx("div", {
    className: "shipto"
  }, ShipTo_jsx("div", {
    className: "d-flex justify-content-between align-items-center mb-4"
  }, ShipTo_jsx("h2", {
    className: "shipto__header"
  }, ShipTo_jsx(external_react_localize_redux_["Translate"], {
    id: "payment.ship-to"
  })), !withoutEdit && ShipTo_jsx("a", {
    href: "",
    className: "payment__sky-text"
  }, ShipTo_jsx(external_react_localize_redux_["Translate"], {
    id: "common.edit"
  }))), ShipTo_jsx("div", {
    className: "returns-add-single__addresses"
  }, data.address != null && ShipTo_jsx("div", {
    className: " addresses__row-item mt-1"
  }, ShipTo_jsx("span", {
    className: "addresses__icon-cnt"
  }, ShipTo_jsx(business_and_trade["ReactComponent"], {
    className: "addresses__left-icon"
  })), ShipTo_jsx("p", {
    className: "addresses__ars-text"
  }, data.address)), ShipTo_jsx("div", {
    className: " addresses__row-item mt-md-4 mt-5"
  }, ShipTo_jsx("span", {
    className: "addresses__ars-head mb-0"
  }, ShipTo_jsx(external_react_localize_redux_["Translate"], {
    id: "common.name"
  })), ShipTo_jsx("span", {
    className: "addresses__ars-value"
  }, data.transfereeName + " " + data.transfereeFamily)), data.transfereeMobile != null && ShipTo_jsx("div", {
    className: " mt-5 mt-sm-0 addresses__row-item"
  }, ShipTo_jsx("span", {
    className: "addresses__ars-head mb-0 mt-3"
  }, ShipTo_jsx(external_react_localize_redux_["Translate"], {
    id: "common.phone"
  })), ShipTo_jsx("span", {
    className: "addresses__ars-value"
  }, data.transfereeMobile))));
});
// CONCATENATED MODULE: ./components/app/pages/Order/OrderLayouts/Payment/PaymentAside.jsx
var PaymentAside_jsx = external_react_default.a.createElement;








const PaymentAside = ({
  data
}) => {
  const curr = Object(external_react_redux_["useSelector"])(appConfigSlice["g" /* selectCurr */]);
  return PaymentAside_jsx("div", {
    className: "payment__order-sum pl-3 rtl-pl-0 rtl-pr-3"
  }, PaymentAside_jsx(common["c" /* BoxStyle2 */], {
    className: "payment__aside "
  }, PaymentAside_jsx("div", {
    className: "cart-aside__cnt"
  }, PaymentAside_jsx("div", {
    className: "cart-aside__top-cnt"
  }, PaymentAside_jsx("h4", {
    className: "cart-aside__header"
  }, PaymentAside_jsx(external_react_localize_redux_["Translate"], {
    id: "common.addressAside.order-sum"
  })), PaymentAside_jsx("div", {
    className: "cart-aside__item"
  }, PaymentAside_jsx("span", null, PaymentAside_jsx("span", {
    className: "cart-aside__item-text"
  }, PaymentAside_jsx(external_react_localize_redux_["Translate"], {
    id: "common.addressAside.subtotal"
  })), PaymentAside_jsx("span", {
    className: "cart-aside__item-text-sub"
  }, data.itemsCount, "\xA0", data.itemsCount > 1 ? PaymentAside_jsx(external_react_localize_redux_["Translate"], {
    id: "common.items"
  }) : PaymentAside_jsx(external_react_localize_redux_["Translate"], {
    id: "common.item"
  }))), PaymentAside_jsx("div", {
    className: "goodItem-s2__price-container"
  }, PaymentAside_jsx("span", {
    className: "goodItem-s2__number"
  }, PaymentAside_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  }), "\xA0", Object(helpers["a" /* formatMoney */])(data.totalWithOutDiscountCode - data.vat - data.shipping)))), PaymentAside_jsx("div", {
    className: "cart-aside__item"
  }, PaymentAside_jsx("span", null, PaymentAside_jsx("span", {
    className: "cart-aside__item-text"
  }, PaymentAside_jsx(external_react_localize_redux_["Translate"], {
    id: "common.addressAside.shipping"
  }))), PaymentAside_jsx("span", {
    className: "cart-aside__free"
  }, data.shipping === 0 ? PaymentAside_jsx(external_react_localize_redux_["Translate"], {
    id: "common.addressAside.free"
  }) : Object(helpers["a" /* formatMoney */])(data.shipping))), data.discount > 0 && PaymentAside_jsx("div", {
    className: "cart-aside__item"
  }, PaymentAside_jsx("span", null, PaymentAside_jsx("span", {
    className: "cart-aside__item-text"
  }, PaymentAside_jsx(external_react_localize_redux_["Translate"], {
    id: "common.addressAside.discount"
  }))), PaymentAside_jsx("span", {
    className: "cart-aside__discount"
  }, "-", PaymentAside_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  }), "\xA0 ", Object(helpers["a" /* formatMoney */])(data.discount))), data.vat > 0 && PaymentAside_jsx("div", {
    className: "cart-aside__item"
  }, PaymentAside_jsx("span", null, PaymentAside_jsx("span", {
    className: "cart-aside__item-text"
  }, PaymentAside_jsx(external_react_localize_redux_["Translate"], {
    id: "common.addressAside.vat"
  }))), PaymentAside_jsx("div", {
    className: "goodItem-s2__price-container"
  }, PaymentAside_jsx("span", {
    className: "goodItem-s2__number"
  }, PaymentAside_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  }), "\xA0", Object(helpers["a" /* formatMoney */])(data.vat)))), PaymentAside_jsx("div", {
    className: "cart-aside__item cart-aside__item--border"
  }, PaymentAside_jsx("h4", {
    className: "cart-aside__header"
  }, PaymentAside_jsx(external_react_localize_redux_["Translate"], {
    id: "common.addressAside.total"
  }), data.vat > 0 && PaymentAside_jsx("span", {
    className: "cart-aside__item-text-sub cart-aside__item-text-sub--header"
  }, PaymentAside_jsx(external_react_localize_redux_["Translate"], {
    id: "common.addressAside.inciusive"
  }))), PaymentAside_jsx("div", {
    className: "goodItem-s2__price-container"
  }, data.discount > 0 && PaymentAside_jsx("span", {
    className: "goodItem-s2__price-off d-block"
  }, PaymentAside_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  }), "\xA0 ", Object(helpers["a" /* formatMoney */])(data.totalWithOutDiscountCode)), PaymentAside_jsx("span", {
    className: "goodItem-s2__number"
  }, PaymentAside_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  }), "\xA0 ", Object(helpers["a" /* formatMoney */])(data.total))))), PaymentAside_jsx(ShipTo, {
    withoutEdit: true,
    data: data
  }))));
};

/* harmony default export */ var Payment_PaymentAside = (PaymentAside);
// EXTERNAL MODULE: ./components/app/pages/CartAndWishlist/CartAndWishlistLayouts/index.js + 3 modules
var CartAndWishlistLayouts = __webpack_require__("TIcW");

// CONCATENATED MODULE: ./components/app/pages/Order/OrderLayouts/ItemsBox.jsx
var ItemsBox_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





/* harmony default export */ var ItemsBox = (({
  count,
  items
}) => {
  const renderBoxHeader = () => {
    return ItemsBox_jsx("div", {
      className: "profile-edit__header-container"
    }, ItemsBox_jsx("h2", {
      className: "profile-edit__box-header"
    }, ItemsBox_jsx(external_react_localize_redux_["Translate"], {
      id: "payment.your-order"
    })), ItemsBox_jsx("p", {
      className: "profile-edit__box-subheader"
    }, count, "\xA0", count > 1 ? ItemsBox_jsx(external_react_localize_redux_["Translate"], {
      id: "common.items"
    }) : ItemsBox_jsx(external_react_localize_redux_["Translate"], {
      id: "common.item"
    })));
  };

  return ItemsBox_jsx(common["b" /* BoxStyle1 */], {
    className: "payment__items-cnt",
    headerContent: renderBoxHeader()
  }, ItemsBox_jsx("div", {
    className: "payment__items"
  }, items.map(item => {
    return ItemsBox_jsx(CartAndWishlistLayouts["b" /* CartAndWishlistItem */], _extends({
      key: item.itemId
    }, item, {
      withoutRight: true
    }));
  })));
});
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__("vtRj");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./components/app/pages/Order/OrderLayouts/Payment/Payment.jsx
var Payment_jsx = external_react_default.a.createElement;



















const Payment = () => {
  const {
    0: checked,
    1: setChecked
  } = Object(external_react_["useState"])(false);
  const {
    0: payment,
    1: setPayment
  } = Object(external_react_["useState"])(null);
  const {
    0: paymentType,
    1: setPaymentType
  } = Object(external_react_["useState"])(null);
  const {
    0: cartType,
    1: setCartType
  } = Object(external_react_["useState"])(null);
  const {
    0: cartTypeId,
    1: setCartTypeId
  } = Object(external_react_["useState"])(null);
  const {
    0: placeOrderLoading,
    1: setPlaceOrderLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: errors,
    1: setErrors
  } = Object(external_react_["useState"])({});
  const {
    0: cardName,
    1: setCardName
  } = Object(external_react_["useState"])(null);
  const {
    0: cardNumber,
    1: setCardNumber
  } = Object(external_react_["useState"])(null);
  const {
    0: cardMonth,
    1: setCardMonth
  } = Object(external_react_["useState"])(null);
  const {
    0: cardYear,
    1: setCardYear
  } = Object(external_react_["useState"])(null);
  const {
    0: cardSecurity,
    1: setCardSecurity
  } = Object(external_react_["useState"])(null);
  const {
    0: cardZip,
    1: setCardZip
  } = Object(external_react_["useState"])(null);
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const coupon = external_js_cookie_default.a.get("ajyal_coupon");

  const handleChange = check => {
    setChecked(check);
  };

  Object(external_react_["useEffect"])(() => {
    Promise.all([Object(clientOrder["f" /* client_getOrder */])(coupon), Object(clientOrder["d" /* client_getActivePayment */])()]).then(res => {
      setPayment(res[0].result);
      let cards = [];
      res[1].result.forEach(item => {
        cards.push({
          value: item.methodId,
          label: Payment_jsx("div", null, Payment_jsx("img", {
            src: `${"http://ajyal.webtreeonline.com/Uploads/Images/PaymentLogo"}/${item.methodImageUrl}`,
            height: "20px",
            width: "20px"
          }), " ", item.methodTitle)
        });
      });
      setCartTypeId(cards.find(x => x.value === 3));
      setCartType(cards);
    }).catch(ex => console.error(ex)); // client_getOrder()
    //   .then((res) => {
    //     
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // client_getActivePayment()
    //   .then((res) => {
    //   })
    //   .catch((err) => {});

    return () => {};
  }, []);

  if (!payment) {
    return Payment_jsx("div", {
      className: "row payment no-gutters"
    }, Payment_jsx(common["s" /* Loading */], {
      type: "gray",
      styleSheet: {
        margin: "80px auto"
      },
      width: "60px",
      height: "60px"
    }));
  }

  const onCartTypeChange = event => {
    setCartTypeId(event);
  };

  const handlePlaceOrderClick = async e => {
    e.preventDefault();

    if (!cartTypeId) {
      external_react_toastify_["toast"].error(Object(helpers["c" /* getErrorMsg */])(lang, "select-payment"), Object(toast["a" /* getToastConfig */])());
      return;
    }

    if (placeOrderLoading) return;

    for (let key in errors) {
      if (errors[key]) {
        external_react_toastify_["toast"].error(Object(helpers["c" /* getErrorMsg */])(lang, "error-detected"), Object(toast["a" /* getToastConfig */])());
        return;
      }
    }

    setPlaceOrderLoading(true);

    try {
      const result = await Object(clientOrder["g" /* client_getPaymentPageUrl */])(parseInt(cartTypeId.value), cardName, cardNumber, cardMonth, cardYear, cardSecurity, cardZip, coupon);

      if (result.status == "200") {
        window.location.href = result.result;
      }

      setPlaceOrderLoading(false);
    } catch (err) {
      var _err$response$data$re;

      if ((_err$response$data$re = err.response.data.result) === null || _err$response$data$re === void 0 ? void 0 : _err$response$data$re.errorText) {
        var _err$response$data$re2;

        external_react_toastify_["toast"].error((_err$response$data$re2 = err.response.data.result) === null || _err$response$data$re2 === void 0 ? void 0 : _err$response$data$re2.errorText, Object(toast["a" /* getToastConfig */])());
      } else external_react_toastify_["toast"].error(err.response.data.message, Object(toast["a" /* getToastConfig */])());

      setPlaceOrderLoading(false);
    }
  };

  return Payment_jsx("div", {
    className: "row payment no-gutters"
  }, Payment_jsx("section", {
    className: "col-xl-9 col-lg-8 col-12 order-md-1 order-2"
  }, Payment_jsx("form", {
    className: "mt-4",
    onSubmit: handlePlaceOrderClick
  }, Payment_jsx(common["c" /* BoxStyle2 */], {
    headerContent: Payment_jsx("h2", {
      className: "payment__box-header"
    }, Payment_jsx(external_react_localize_redux_["Translate"], {
      id: "payment.payment"
    })),
    className: "payment__payment-detail-cnt"
  }, Payment_jsx("div", {
    className: "row mt-4"
  }, Payment_jsx(external_react_select_default.a, {
    className: "react-select col-md-4 col-8",
    options: cartType,
    value: cartTypeId,
    onChange: onCartTypeChange
  })), (cartTypeId === null || cartTypeId === void 0 ? void 0 : cartTypeId.value) === 2 ? Payment_jsx("div", {
    className: "payment-method__container mt-4"
  }, Payment_jsx("div", {
    className: "payment__payment-method"
  }, Payment_jsx(external_react_localize_redux_["Translate"], null, ({
    translate
  }) => {
    return Payment_jsx(external_react_default.a.Fragment, null, Payment_jsx("div", {
      className: "row"
    }, Payment_jsx("div", {
      className: "col-12"
    }, Payment_jsx("label", {
      className: "mt-3 credimax-card-name"
    }, Payment_jsx("span", {
      className: "payment-method__input-label gray__input-label"
    }, Payment_jsx(external_react_localize_redux_["Translate"], {
      id: "payment-method.name-on-card"
    }), Payment_jsx("span", {
      className: "input-required"
    }, "*")), Payment_jsx("input", {
      className: "payment-method__input gray__input",
      type: "text",
      required: true,
      name: "cardName",
      value: cardName,
      onChange: e => {
        setCardName(e.target.value);

        if (errors[e.target.name]) {
          Object(formValidator["d" /* validateEmpty */])({
            name: e.target.name,
            value: e.target.value,
            handler: setErrors,
            lang
          });
        }
      },
      onBlur: e => {
        Object(formValidator["d" /* validateEmpty */])({
          name: e.target.name,
          value: e.target.value,
          handler: setErrors,
          lang
        });
      }
    }), Payment_jsx(common["k" /* FormErrorMsg */], {
      show: errors["cardName"],
      msg: errors["cardName"]
    }))), Payment_jsx("div", {
      className: "col-12"
    }, Payment_jsx("label", {
      className: "mt-3 credimax-card-number"
    }, Payment_jsx("span", {
      className: "payment-method__input-label gray__input-label"
    }, Payment_jsx(external_react_localize_redux_["Translate"], {
      id: "payment-method.card-number"
    }), Payment_jsx("span", {
      className: "input-required"
    }, "*")), Payment_jsx("input", {
      className: "payment-method__input gray__input",
      type: "text",
      placeholder: "---- ---- ---- ----",
      name: "cardNumber",
      value: cardNumber,
      onChange: e => {
        setCardNumber(e.target.value);

        if (errors[e.target.name]) {
          Object(formValidator["b" /* validateCreditCard */])({
            name: e.target.name,
            value: e.target.value,
            handler: setErrors,
            lang
          });
        }
      },
      onBlur: e => {
        Object(formValidator["b" /* validateCreditCard */])({
          name: e.target.name,
          value: e.target.value,
          handler: setErrors,
          lang
        });
      }
    }), Payment_jsx(common["k" /* FormErrorMsg */], {
      show: errors["cardNumber"],
      msg: errors["cardNumber"]
    }))), Payment_jsx("div", {
      className: "col-md-3 col-12"
    }, Payment_jsx("label", {
      className: "mt-3"
    }, Payment_jsx("span", {
      className: "payment-method__input-label gray__input-label"
    }, Payment_jsx(external_react_localize_redux_["Translate"], {
      id: "payment-method.expiry-date"
    }), Payment_jsx("span", {
      className: "input-required"
    }, "*")), Payment_jsx("div", {
      className: "d-flex"
    }, Payment_jsx("input", {
      className: "payment-method__input gray__input date-input-month",
      type: "text",
      placeholder: "MM",
      required: true,
      maxLength: "2",
      name: "cardMonth",
      value: cardMonth,
      onChange: e => {
        setCardMonth(e.target.value);

        if (errors[e.target.name]) {
          Object(formValidator["d" /* validateEmpty */])({
            name: e.target.name,
            value: e.target.value,
            handler: setErrors,
            lang
          });
        }
      },
      onBlur: e => {
        Object(formValidator["d" /* validateEmpty */])({
          name: e.target.name,
          value: e.target.value,
          handler: setErrors,
          lang
        });
      }
    }), Payment_jsx("input", {
      className: "payment-method__input gray__input date-input-year",
      type: "text",
      placeholder: "YY",
      maxLength: "2",
      required: true,
      name: "cardYear",
      value: cardYear,
      onChange: e => {
        setCardYear(e.target.value);

        if (errors[e.target.name]) {
          Object(formValidator["d" /* validateEmpty */])({
            name: e.target.name,
            value: e.target.value,
            handler: setErrors,
            lang
          });
        }
      },
      onBlur: e => {
        Object(formValidator["d" /* validateEmpty */])({
          name: e.target.name,
          value: e.target.value,
          handler: setErrors,
          lang
        });
      }
    })))), Payment_jsx("div", {
      className: "col-md-3 p-md-0 col-12"
    }, Payment_jsx("label", {
      className: "mt-3 w-100"
    }, Payment_jsx("span", {
      className: "payment-method__input-label gray__input-label"
    }, Payment_jsx(external_react_localize_redux_["Translate"], {
      id: "payment-method.security-code"
    }), Payment_jsx("span", {
      className: "input-required"
    }, "*")), Payment_jsx("input", {
      className: "payment-method__input gray__input",
      type: "text",
      required: true,
      name: "cardSecurity",
      value: cardSecurity,
      onChange: e => {
        setCardSecurity(e.target.value);

        if (errors[e.target.name]) {
          Object(formValidator["d" /* validateEmpty */])({
            name: e.target.name,
            value: e.target.value,
            handler: setErrors,
            lang
          });
        }
      },
      onBlur: e => {
        Object(formValidator["d" /* validateEmpty */])({
          name: e.target.name,
          value: e.target.value,
          handler: setErrors,
          lang
        });
      }
    })))), Payment_jsx("div", {
      className: "row"
    }, Payment_jsx("div", {
      className: "col-md-3 col-12"
    }, Payment_jsx("label", {
      className: "mt-3 w-100"
    }, Payment_jsx("span", {
      className: "payment-method__input-label gray__input-label"
    }, Payment_jsx(external_react_localize_redux_["Translate"], {
      id: "payment-method.postal-code"
    }), Payment_jsx("span", {
      className: "input-required"
    }, "*")), Payment_jsx("input", {
      className: "payment-method__input gray__input",
      type: "text",
      name: "cardZip",
      value: cardZip,
      onChange: e => {
        setCardZip(e.target.value);

        if (errors[e.target.name]) {
          Object(formValidator["d" /* validateEmpty */])({
            name: e.target.name,
            value: e.target.value,
            handler: setErrors,
            lang
          });
        }
      },
      onBlur: e => {
        Object(formValidator["d" /* validateEmpty */])({
          name: e.target.name,
          value: e.target.value,
          handler: setErrors,
          lang
        });
      }
    })))));
  }))) : Payment_jsx("div", {
    className: "payment-method__container mt-4"
  }, Payment_jsx("div", {
    className: "payment__payment-method p-4"
  }, Payment_jsx(external_react_localize_redux_["Translate"], null, ({
    translate
  }) => {
    return Payment_jsx(external_react_default.a.Fragment, null, Payment_jsx("div", {
      className: "row"
    }, Payment_jsx("div", {
      className: "col-12"
    }, Payment_jsx(external_react_localize_redux_["Translate"], {
      id: "payment-method.redirectToPyamnetPage"
    }))));
  }))), Payment_jsx(Responsive["f" /* ProtraitPhonesAndBigger */], null, Payment_jsx("div", {
    className: "payment__btn-cnt d-flex mt-5"
  }, Payment_jsx(orderContext.Consumer, null, context => Payment_jsx("button", {
    className: "primary-btn"
  }, placeOrderLoading ? Payment_jsx(common["s" /* Loading */], {
    type: "white",
    width: "20px",
    height: "20px"
  }) : (cartTypeId === null || cartTypeId === void 0 ? void 0 : cartTypeId.value) === 2 ? Payment_jsx(external_react_localize_redux_["Translate"], {
    id: "payment-method.complate-payment"
  }) : Payment_jsx(external_react_localize_redux_["Translate"], {
    id: "common.place-order"
  }))))), Payment_jsx(Responsive["e" /* ProtraitPhones */], null, Payment_jsx("div", {
    className: "checkout-fix justify-content-center"
  }, Payment_jsx(orderContext.Consumer, null, context => Payment_jsx("button", {
    className: "primary-btn returns__add-btn"
  }, placeOrderLoading ? Payment_jsx(common["s" /* Loading */], {
    type: "white",
    width: "20px",
    height: "20px"
  }) : (cartTypeId === null || cartTypeId === void 0 ? void 0 : cartTypeId.value) === 2 ? Payment_jsx(external_react_localize_redux_["Translate"], {
    id: "payment-method.complate-payment"
  }) : Payment_jsx(external_react_localize_redux_["Translate"], {
    id: "common.place-order"
  })))))), Payment_jsx(ItemsBox, {
    count: payment.itemsCount,
    items: payment.items
  }))), Payment_jsx("aside", {
    className: "col-xl-3 col-lg-4 col-12 order-md-2 order-1"
  }, Payment_jsx(Payment_PaymentAside, {
    data: payment
  })));
};

/* harmony default export */ var Payment_Payment = (Payment);
// CONCATENATED MODULE: ./components/app/pages/Order/OrderLayouts/MobileOrderNav.jsx
var MobileOrderNav_jsx = external_react_default.a.createElement;

function MobileOrderNav_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class MobileOrderNav_class extends external_react_default.a.Component {
  render() {
    const needBack = this.context.step === PAYMENT ? true : false;
    let icon, text;

    switch (this.context.step) {
      case SHIPPING:
        icon = MobileOrderNav_jsx(shipping_fill["ReactComponent"], {
          className: "ordernav-mobile__icon"
        });
        text = MobileOrderNav_jsx(external_react_localize_redux_["Translate"], {
          id: "order-nav.shipping-address"
        });
        break;

      case PAYMENT:
        icon = MobileOrderNav_jsx(payment_fill["ReactComponent"], {
          className: "ordernav-mobile__icon"
        });
        text = MobileOrderNav_jsx(external_react_localize_redux_["Translate"], {
          id: "order-nav.payment"
        });
        break;

      case ORDERPLACED:
        icon = MobileOrderNav_jsx(payment_outline["ReactComponent"], {
          className: "ordernav-mobile__icon"
        });
        text = MobileOrderNav_jsx(external_react_localize_redux_["Translate"], {
          id: "order-nav.shipping-address"
        });
        break;

      default:
        icon = MobileOrderNav_jsx(shipping_fill["ReactComponent"], {
          className: "ordernav-mobile__icon"
        });
        text = MobileOrderNav_jsx(external_react_localize_redux_["Translate"], {
          id: "order-nav.shipping-address"
        });
        break;
    }

    return MobileOrderNav_jsx("header", {
      className: "ordernav-mobile d-flex align-items-center justify-content-center"
    }, needBack && MobileOrderNav_jsx("div", {
      className: "createshop__prev-cnt ordernav-mobile__back-cnt"
    }, MobileOrderNav_jsx("div", {
      onClick: () => {
        this.context.handleStep(PREV);
      },
      className: "text-align-right",
      style: {
        cursor: "pointer"
      }
    }, MobileOrderNav_jsx(icons_back["ReactComponent"], {
      className: "createshop__back-icon"
    }))), MobileOrderNav_jsx("div", {
      className: "ordernav-mobile__item-cnt d-flex justify-content-center align-items-center"
    }, MobileOrderNav_jsx("i", {
      className: "ordernav__icon-cnt"
    }, icon), MobileOrderNav_jsx("span", {
      className: "ordernav__text"
    }, text)), MobileOrderNav_jsx("ul", {
      className: "ordernav-mobile__list"
    }, MobileOrderNav_jsx("li", {
      className: external_classnames_default()("ordernav-mobile__dot", {
        active: this.context.orderState[SHIPPING].active || this.context.orderState[SHIPPING].complete
      })
    }), MobileOrderNav_jsx("li", {
      className: external_classnames_default()("ordernav-mobile__dot", {
        active: this.context.orderState[PAYMENT].active || this.context.orderState[PAYMENT].complete
      })
    }), MobileOrderNav_jsx("li", {
      className: external_classnames_default()("ordernav-mobile__dot", {
        active: this.context.orderState[ORDERPLACED].active || this.context.orderState[ORDERPLACED].complete
      })
    })));
  }

}

MobileOrderNav_defineProperty(MobileOrderNav_class, "contextType", orderContext);
// CONCATENATED MODULE: ./components/app/pages/Order/OrderLayouts/index.js




// EXTERNAL MODULE: ./assets/icons/cash.png
var cash = __webpack_require__("69Df");

// EXTERNAL MODULE: ./assets/icons/img-credit-card.svg
var img_credit_card = __webpack_require__("Dmrs");
var img_credit_card_default = /*#__PURE__*/__webpack_require__.n(img_credit_card);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/app/pages/Order/OrderLayouts/OrderPlaced/OrderPlaced.jsx
var OrderPlaced_jsx = external_react_default.a.createElement;
 // import "./OrderPlaced.scss";















const OrderPlaced = ({
  content2
}) => {
  const router = Object(router_["useRouter"])();
  const curr = Object(external_react_redux_["useSelector"])(appConfigSlice["g" /* selectCurr */]);
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const {
    token,
    paymentId,
    PayerID
  } = router.query;
  const {
    0: paymentLoading,
    1: setPaymentLoading
  } = Object(external_react_["useState"])(true);
  const {
    0: paymentResult,
    1: setPaymentResult
  } = Object(external_react_["useState"])({
    error: null,
    res: {}
  });
  Object(external_react_["useEffect"])(() => {
    setPaymentLoading(true);
    Object(helpers["f" /* removeCouponCookie */])();
    Object(clientOrder["h" /* client_getPaymentResult */])({
      token,
      paymentId,
      PayerID
    }).then(res => {
      setPaymentResult({
        error: false,
        res: res.result
      });
      setPaymentLoading(false);
    }).catch(err => {
      if (!err.response.data.result || err.response.data.status != "400") {
        router.push(`/${curr}-${lang}`);
        return;
      }

      if (err.response.data.status == "400") {
        setPaymentResult({
          error: true,
          res: err.response.data.result
        });
        setPaymentLoading(false);
      }
    });
    return () => {};
  }, []);

  if (paymentLoading) {
    return OrderPlaced_jsx(common["s" /* Loading */], {
      type: "gray",
      styleSheet: {
        margin: "80px auto"
      },
      width: "60px",
      height: "60px"
    });
  }

  return OrderPlaced_jsx(external_react_default.a.Fragment, null, paymentResult.error ? OrderPlaced_jsx(common["a" /* Alert */], {
    faild: true,
    btmText: "Purchase Failed",
    btnText: OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
      id: "common.continue-shopping"
    }),
    topText: "Looks like we encountered an error, Please try again "
  }) : OrderPlaced_jsx(common["a" /* Alert */], {
    btmText: `You'll receive an email at ${paymentResult.res.transfereeEmail} once your order is confirmed.`,
    btnText: OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
      id: "common.continue-shopping"
    }),
    topText: `Thank you for your order ${paymentResult.res.transfereeName} ${paymentResult.res.transfereeFamily}!`
  }), OrderPlaced_jsx(common["c" /* BoxStyle2 */], {
    className: "payment__payment-detail-cnt"
  }, OrderPlaced_jsx("div", {
    className: "row justify-content-between no-gutters"
  }, OrderPlaced_jsx("div", {
    className: "mb-5 mb-md-0 col-12 col-md-6 col-lg-7"
  }, OrderPlaced_jsx("h2", {
    className: "payment__box-header"
  }, OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
    id: "common.order"
  }), " \xA0 ", paymentResult.res.trackingCode), OrderPlaced_jsx("div", {
    className: "orderplaced__process-cnt"
  }, OrderPlaced_jsx(common["q" /* GoodSituation */], {
    title: paymentResult.error ? OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
      id: "common.good-process.cancelled"
    }) : OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
      id: "common.good-process.processing"
    }),
    id: paymentResult.error ? 100 : 3,
    processing: true
  })), !paymentResult.error && OrderPlaced_jsx("div", {
    className: "orderplaced__deliveryprogress-cnt"
  }, OrderPlaced_jsx(common["i" /* DeliveryProgress */], {
    processing: true,
    fillItemCount: 2,
    stepCount: 4
  })), OrderPlaced_jsx("div", {
    className: "mt-4"
  }, OrderPlaced_jsx("div", {
    className: "cart-aside__item"
  }, OrderPlaced_jsx("span", null, OrderPlaced_jsx("span", {
    className: "cart-aside__item-text"
  }, OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
    id: "common.addressAside.subtotal"
  })), OrderPlaced_jsx("span", {
    className: "cart-aside__item-text-sub"
  }, paymentResult.res.itemsCount, "\xA0", paymentResult.res.itemsCount > 1 ? OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
    id: "common.items"
  }) : OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
    id: "common.item"
  }))), OrderPlaced_jsx("div", {
    className: "goodItem-s2__price-container"
  }, OrderPlaced_jsx("span", {
    className: "goodItem-s2__number"
  }, OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  }), "\xA0", Object(helpers["a" /* formatMoney */])(paymentResult.res.totalWithOutDiscountCode - paymentResult.res.vat - paymentResult.res.shipping)))), OrderPlaced_jsx("div", {
    className: "cart-aside__item"
  }, OrderPlaced_jsx("span", null, OrderPlaced_jsx("span", {
    className: "cart-aside__item-text"
  }, OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
    id: "common.addressAside.shipping"
  }))), OrderPlaced_jsx("span", {
    className: "cart-aside__free"
  }, paymentResult.res.shipping === 0 ? OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
    id: "common.addressAside.free"
  }) : Object(helpers["a" /* formatMoney */])(paymentResult.res.shipping))), paymentResult.res.vat > 0 && OrderPlaced_jsx("div", {
    className: "cart-aside__item"
  }, OrderPlaced_jsx("span", null, OrderPlaced_jsx("span", {
    className: "cart-aside__item-text"
  }, OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
    id: "common.addressAside.vat"
  }))), OrderPlaced_jsx("div", {
    className: "goodItem-s2__price-container"
  }, OrderPlaced_jsx("span", {
    className: "goodItem-s2__number"
  }, OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  }), "\xA0", Object(helpers["a" /* formatMoney */])(paymentResult.res.vat)))), paymentResult.res.discount > 0 && OrderPlaced_jsx("div", {
    className: "cart-aside__item"
  }, OrderPlaced_jsx("span", null, OrderPlaced_jsx("span", {
    className: "cart-aside__item-text"
  }, OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
    id: "common.addressAside.discount"
  }))), OrderPlaced_jsx("span", {
    className: "cart-aside__discount"
  }, "-", OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  }), "\xA0 ", Object(helpers["a" /* formatMoney */])(paymentResult.res.discount))), OrderPlaced_jsx("div", {
    className: "cart-aside__item cart-aside__item--border"
  }, OrderPlaced_jsx("div", {
    className: "d-flex align-items-center"
  }, OrderPlaced_jsx("h4", {
    className: "mb-0 cart-aside__header"
  }, OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
    id: "common.addressAside.total"
  })), paymentResult.res.vat > 0 && OrderPlaced_jsx("span", {
    className: "ml-3 rtl-ml-0 rtl-mr-3 cart-aside__item-text-sub"
  }, OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
    id: "common.addressAside.inciusive"
  }))), OrderPlaced_jsx("div", {
    className: "goodItem-s2__price-container"
  }, paymentResult.res.discount > 0 && OrderPlaced_jsx("span", {
    className: "goodItem-s2__price-off d-block"
  }, OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  }), "\xA0", Object(helpers["a" /* formatMoney */])(paymentResult.res.totalWithOutDiscountCode)))), OrderPlaced_jsx("div", {
    className: "cart-aside__item"
  }, OrderPlaced_jsx("div", {
    className: "d-flex align-items-center"
  }, OrderPlaced_jsx("img", {
    src: img_credit_card_default.a,
    className: "payment__icon",
    alt: "credit icon"
  }), OrderPlaced_jsx("span", {
    className: "payment__text4 payment__text4--margin"
  }, OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
    id: "payment.pay-with-card"
  }))), OrderPlaced_jsx("div", {
    className: "goodItem-s2__price-container"
  }, OrderPlaced_jsx("span", {
    className: "goodItem-s2__number"
  }, OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
    id: curr
  }), "\xA0 ", Object(helpers["a" /* formatMoney */])(paymentResult.res.total)))))), OrderPlaced_jsx("div", {
    className: "mt-5 mt-md-0 col-12 col-lg-4 col-md-5 d-flex flex-column justify-content-between"
  }, OrderPlaced_jsx(ShipTo, {
    withoutEdit: true,
    data: paymentResult.res
  }), OrderPlaced_jsx("a", {
    href: "",
    className: "mt-0 mt-5 orderplaced__ship-link text-align-right"
  }, OrderPlaced_jsx(external_react_localize_redux_["Translate"], {
    id: "orderplaced.go-to-order-detail"
  }))))), OrderPlaced_jsx(ItemsBox, {
    count: paymentResult.res.items.length,
    items: paymentResult.res.items
  }));
};

/* harmony default export */ var OrderPlaced_OrderPlaced = (OrderPlaced);
// EXTERNAL MODULE: ./lib/isRtl.js
var isRtl = __webpack_require__("gtw1");

// CONCATENATED MODULE: ./components/app/pages/Order/Order.jsx
var Order_jsx = external_react_default.a.createElement;

function Order_extends() { Order_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Order_extends.apply(this, arguments); }

function Order_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Order_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Order_ownKeys(Object(source), true).forEach(function (key) { Order_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Order_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Order_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import "./Order.scss";
// import "./Order-rtl.scss";
// import orderTranslations from "./../../../../translations/order-translations.json";
/// for UI development
// import data from "../../../data/data2.json";
// import data2 from "../../../data/data.jsx";















class Order_Order extends external_react_default.a.Component {
  constructor(props) {
    super(props); //this code is for Development purpose

    Order_defineProperty(this, "handleStep", type => {
      let step, newFormState;
      const curstep = this.state.step;

      if (type === COMPLETE_AND_NEXT) {
        newFormState = Order_objectSpread(Order_objectSpread({}, this.state.orderState), {}, {
          [curstep]: Order_objectSpread(Order_objectSpread({}, this.state.orderState[curstep]), {}, {
            active: false,
            complete: true
          })
        });
        type = NEXT;
      } else {
        newFormState = Order_objectSpread(Order_objectSpread({}, this.state.orderState), {}, {
          [curstep]: Order_objectSpread(Order_objectSpread({}, this.state.orderState[curstep]), {}, {
            active: false
          })
        });
      }

      switch (type) {
        case NEXT:
          step = curstep >= MAXSTEP ? MAXSTEP : curstep + 1;
          break;

        case PREV:
          step = curstep <= 1 ? 1 : curstep - 1;
          break;

        default:
          step = type;
          break;
      }

      newFormState[step].active = true;
      this.setState({
        step,
        orderState: newFormState
      });
    });

    this.lang = this.props.lang; // this.content = data[this.lang].search;
    // this.content2 = data2[this.lang].goodsSliderComponent;
    ///////////

    this.randId = Object(external_uuid_["v4"])();
    const formData = {
      [SHIPPING]: {},
      [PAYMENT]: {}
    };
    const token = this.props.router.query.token ? true : false;
    const payment = this.props.router.query.to == "pay" ? true : this.props.router.query.to == "downloadable" ? true : false;
    let _step = SHIPPING;

    if (token) {
      _step = ORDERPLACED;
    } else if (payment) {
      _step = PAYMENT;
    }

    const orderState = {
      [SHIPPING]: {
        complete: payment ? true : false,
        active: payment ? false : true,
        id: Object(external_uuid_["v4"])()
      },
      [PAYMENT]: {
        complete: false,
        active: payment ? true : false,
        id: Object(external_uuid_["v4"])()
      },
      [ORDERPLACED]: {
        complete: false,
        active: false,
        id: Object(external_uuid_["v4"])()
      }
    };
    this.state = {
      step: _step,
      orderState,
      handleStep: this.handleStep
    };
  }

  componentDidMount() {//   setTimeout(() => {
    //     this.setState(
    //       {
    //         step: PAYMENT,
    //       },
    //       () => {
    //         setTimeout(() => {
    //           this.setState({
    //             step: ORDERPLACED,
    //           });
    //         }, 4000);
    //       }
    //     );
    //   }, 2000);
  }

  render() {
    const step = this.state.step;
    let content;

    switch (step) {
      case SHIPPING:
        content = Order_jsx(ShippingAddress_ShippingAddress, {
          handleOrderStep: this.handleStep
        });
        break;

      case PAYMENT:
        content = Order_jsx(Payment_Payment, {
          content2: this.content2
        });
        break;

      case ORDERPLACED:
        content = Order_jsx(OrderPlaced_OrderPlaced, {
          content2: this.content2
        });
        break;

      default:
        break;
    }

    return Order_jsx("main", {
      className: "order-re container siteWidthContainer"
    }, Order_jsx(external_react_toastify_["ToastContainer"], Order_extends({
      rtl: Object(isRtl["a" /* isRtl */])(this.props.lang)
    }, Object(toast["a" /* getToastConfig */])())), Order_jsx(orderContext.Provider, {
      value: this.state
    }, Order_jsx(external_react_transition_group_["SwitchTransition"], {
      className: "user-panel__container"
    }, Order_jsx(external_react_transition_group_["CSSTransition"], {
      key: step !== ORDERPLACED ? this.randId : this.state.orderState[step].id,
      classNames: "user-panel__routes",
      timeout: 200
    }, Order_jsx(external_react_default.a.Fragment, null, step !== ORDERPLACED && Order_jsx("div", null, Order_jsx(external_react_default.a.Fragment, null, Order_jsx(Responsive["b" /* DesktopsAndBigger */], null, Order_jsx(OrderNav_class, null)), Order_jsx(Responsive["a" /* Desktops */], null, Order_jsx(MobileOrderNav_class, null)), Order_jsx(external_react_transition_group_["SwitchTransition"], {
      className: "user-panel__container"
    }, Order_jsx(external_react_transition_group_["CSSTransition"], {
      key: this.state.orderState[step].id,
      classNames: "user-panel__routes",
      timeout: 200
    }, Order_jsx("div", {
      className: "animate-cnt"
    }, content))))), step === ORDERPLACED && content)))));
  }

}

const mapStateToProps = state => {
  return {
    lang: Object(appConfigSlice["h" /* selectLang */])(state)
  };
};

/* harmony default export */ var pages_Order_Order = (Object(external_react_redux_["connect"])(mapStateToProps)(Object(router_["withRouter"])(Order_Order)));
// CONCATENATED MODULE: ./components/app/pages/Order/index.js

// EXTERNAL MODULE: ./lib/api/client/serverCommon.js
var serverCommon = __webpack_require__("YPTI");

// EXTERNAL MODULE: ./lib/isServer.js
var isServer = __webpack_require__("zo9w");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next-useragent"
var external_next_useragent_ = __webpack_require__("W0sL");

// CONCATENATED MODULE: ./pages/[lang-curr]/order/index.jsx
var order_jsx = external_react_default.a.createElement;


















class order_OrderPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    if (!Object(isServer["a" /* isServer */])()) {
      this.redirect = false;
      const token = external_js_cookie_default.a.get("ajyal_crd");

      if (!token) {
        this.props.router.push(`/${this.props.curr}-${this.props.lang}/Auth`);
        this.redirect = true;
      }
    }
  }

  render() {
    if (this.redirect) {
      return order_jsx("p", null, "Redirecting...");
    }

    const order = order_jsx(pages_Order_Order, null);

    return order_jsx(external_react_localize_redux_["LocalizeProvider"], {
      initialize: Object(payload["b" /* translationsPayload */])(Object(payload["a" /* mergeTranslations */])(order_translations, header_translations), this.props.lang)
    }, order_jsx(external_react_localize_redux_["Translate"], null, ({
      translate: t
    }) => {
      return order_jsx(head_default.a, null, order_jsx("title", null, t("@orderTitle")));
    }), order_jsx(header["a" /* Header */], {
      data: this.props.data.header,
      lang: this.props.lang,
      curr: this.props.curr,
      isDesktop: this.props.ua.isDesktop
    }), order, order_jsx(footer["a" /* default */], {
      data: this.props.data.footer,
      isDesktop: this.props.ua.isDesktop,
      lang: this.props.lang,
      cartCount: this.props.data.header.cartCount
    }));
  }

}

const order_mapStateToProps = state => {
  return {
    lang: Object(appConfigSlice["h" /* selectLang */])(state),
    curr: Object(appConfigSlice["g" /* selectCurr */])(state)
  };
};

/* harmony default export */ var _lang_curr_order = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(order_mapStateToProps)(Object(router_["withRouter"])(order_OrderPage)));
const getServerSideProps = store["a" /* wrapper */].getServerSideProps(async context => {
  const ua = Object(external_next_useragent_["useUserAgent"])(context.req.headers["user-agent"]);
  const Result = await Promise.all([Object(serverCommon["c" /* server_fetchHeader */])(ua.isDesktop), Object(serverCommon["b" /* server_fetchFooter */])()]);
  return {
    props: {
      ua,
      data: {
        header: Result[0].result,
        footer: Result[1].result
      }
    }
  };
});

/***/ }),

/***/ "xMaE":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-mastercard-4752b2cd1b71314b789960a5114bd551.svg";

/***/ }),

/***/ "xREX":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/delete-390785406bde8358401f12c9386b53df.svg";

/***/ }),

/***/ "xYMx":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/marketplace-915d0d6d899cdd90b8df395f7ac1664f.png";

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xsd1":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/twitter-588693a50fcbf2b6ac4bd27a40ed650f.svg";

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

/***/ })

/******/ });