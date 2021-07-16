exports.ids = [27];
exports.modules = {

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

/***/ "/FKe":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/delivered-04375fa4e133a431bf7f171229d64900.svg";

/***/ }),

/***/ "/L9k":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-heart-4ff2a335401835d52e2021e4ef7c663c.svg";

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

/***/ "1J8E":
/***/ (function(module, exports) {



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

/***/ "4muE":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-loader-ora-01ac714fbb271b71733fb81f9cea6c8b.svg";

/***/ }),

/***/ "4oW3":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/menu - Preference-bfac52b8aa28692ada1a53dd635ee6bb.svg";

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

/***/ "8DLf":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-jyal-backicon-6e0987afc8952a9c2429f0ead0f8223e.svg";

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

/***/ "96uj":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/profile-16258a5d79c0ec4ae20f19d83d986dd5.svg";

/***/ }),

/***/ "9lmT":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-linear-arrow-73300d143ab3c56ad042bdfb64ef253d.svg";

/***/ }),

/***/ "A4yD":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/5-c38a5660758209784333c7a94a6c0120.gif";

/***/ }),

/***/ "BOLt":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/deals-4e9c4ec2125a8125f4cdbad7277fc271.svg";

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

/***/ "Dmrs":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-credit-card-ea217eccc5f4b2ef5233e286f4879c14.svg";

/***/ }),

/***/ "DrLl":
/***/ (function(module) {

module.exports = JSON.parse("{\"refund-saved\":[\"refund saved successfully\",\"تم حفظ المبلغ المسترد بنجاح\",\"با موفقیت ذخیره شد\"],\"select-Item\":[\"please select an item first\",\"الرجاء تحديد عنصر أولا\",\"ابندا یک گزینه را انتخاب کنید\"],\"verify-mobile\":[\"you must verify your mobile number first\",\"يجب عليك التحقق من رقم هاتفك المحمول أولاً\",\"شما ابتدا باید شماره موبایل خود را تایید کنید\"],\"verification-succes\":[\"email verified successfully\",\"تم التحقق من البريد الإلكتروني بنجاح\",\"ایمیل شما با موفقیت تایید شد\"],\"verification-error\":[\"verification code is not correct!\",\"رمز التحقق غير صحيح\",\"کد وارد شده نامعتبر است\"],\"phone-not-valid\":[\"your phone number is not valid\",\"رقم الهاتف غير صالح\",\"شماره وارد شده صحیح نیست\"],\"phone-not-match-country\":[\"phone number is not valid for the selected region\",\"رقم الهاتف غير صالح للمنطقة المحددة\",\"شماره وارد شده با کشور انتخاب شده تطابق ندارد\"],\"select-region-first\":[\"please select a country first\",\"الرجاء تحديد البلد أولا\",\"ابتدا یک کشور را انتخاب کنید\"],\"code-is-not-valid\":[\"entered code is not valid\",\"الرمز الذي تم إدخاله غير صالح\",\"کد وارد شده صحیح نیست\"],\"email-not-valid\":[\"your email address is not valid\",\"عنوان البريد الإلكتروني غير صالح\",\"آدرس ایمیل موجود نمی باشد\"],\"pass-not-valid\":[\"your password must be at least 6 characters\",\"يجب أن تتكون كلمة المرور من 6 أحرف على الأقل\",\"کلمه عبور حداقل باید 6 کاراکتر باشد\"],\"confirm-pass\":[\"your passwords are not equals\",\"كلمة المرور ليست متشابهة\",\"کلمه عبور شما برابر نیست\"],\"empty-filed\":[\"this field must not be empty\",\"هذا الحقل مطلوب\",\"این گزینه نمی تواند خالی باشد\"],\"error-detected\":[\"There are items that require your attention\",\"هناك عناصر تتطلب انتباهك\",\"مطالبی می باشد که باید به آنها توجه کنید\"],\"succ-regitered\":[\"you have successfully registered\",\"تم التسجيل بنجاح\",\"ثبت نام شما با موفقیت انجام شد\"],\"succ-login\":[\"you have successfully logged in\",\"تم تسجيل الدخول بنجاح\",\"ورود شما با موفقیت انجام شد\"],\"succ-update-profile\":[\"you successfully edit your profile\",\"تم تحرير ملف التعريف بنجاح\",\"ویرایش پروفایل شما با موفقیت انجام شد\"],\"succ-update-password\":[\"you successfully change your password\",\"تم تغيير كلمة المرور بنجاح\",\"تغییر کلمه عبور شما با موفقیت انجام شد\"],\"confirm-address-delete\":[\"are you sure to delete this address\",\"هل أنت متأكد من حذف العنوان\",\"آیا مطمعن هستید که آدرس را حذف کنید؟\"],\"select-address\":[\"please select an address first\",\"الرجاء تحديد عنوان أولا\",\"لطفاً اول آدرس را انتخاب نمایید\"],\"select-payment\":[\"please select a payment method first\",\"الرجاء تحديد طريقة الدفع أولاً\",\"ابتدا روش پرداخت خود را انتخاب کنید\"],\"return-req\":[\"Request sended successfully\",\"تم ارسال الطلب بنجاح\",\"درخواست ارسال دوباره با موفقیت انجام شد\"],\"success-add-address\":[\"The address successfuly added\",\"تم إضافة العنوان بنجاح\",\"ادرس با موفقیت اضافه شد\"],\"success-update-address\":[\"The address successfully updated\",\"تم تحديث العنوان بنجاح\",\"ادرس با موفقیت بروز شد\"],\"success-delete-address\":[\"The address successfully deleted\",\"تم حذف العنوان بنجاح\",\"ادرس با موفقیت حذف شد\"],\"country-add-address\":[\"The address you selected is not in our list of active countries\",\"العنوان الذي حددته غير موجود في قائمة البلدان النشطة لدينا\",\"ادرس انتخاب شده توسط شما در لیست کشور های فعال ما قرار ندارد\"],\"error-city-create-shop\":[\"The selected country must be the same as the city you selected in step two\",\"يجب أن تكون الدولة المحددة هي نفس الدولة التي حددتها في الخطوة الثانية\",\"کشور انتخاب شده باید همان کشوری باشد که در مرحله دو انتخاب کرده اید\"],\"postal-code-filed\":[\"Enter valid Postal Code!\",\"أدخل رمزًا بريديًا صالحًا!\",\"کد پستی معتبر وارد کنید\"],\"pass-not-valid-create-shop\":[\"your password must be at least 8 characters\",\"يجب أن تتكون كلمة مرورك من 8 أحرف على الأقل\",\"رمز عبور حداقل باید 8 کاراکتر باشد\"],\"error-create-shop\":[\"Registration error occurred. Please try again\",\"حدث خطأ في التسجيل. حاول مرة اخرى\",\"خطایی در ثبت نام رخ داده است لطفا یکبار دیگر امتحان کنید\"],\"credi-card-filed\":[\"Enter valid CreditCard Number!\",\"أدخل رقم بطاقة ائتمان صالح!\",\"شماره کارت معتبر وارد کنید\"],\"reason-error\":[\"Select a reason is required\",\"تحديد سبب مطلوب\",\"انتخاب دلیل الزامی است\"]}");

/***/ }),

/***/ "E5gy":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/facebook-085185392dc86f53bb2e30cf9feaf7a7.svg";

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

/***/ "G3Sf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ PanelPages_Profile_Profile; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ Orders; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ PanelPages_Addresses_Addresses; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ Payment; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ Credits; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ PanelPages_Returns_Returns; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ Preference_Preference; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ Claims; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-localize-redux"
var external_react_localize_redux_ = __webpack_require__("tepj");

// EXTERNAL MODULE: ./components/common/index.js + 35 modules
var common = __webpack_require__("lCwK");

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// EXTERNAL MODULE: ./lib/api/axios.js
var api_axios = __webpack_require__("BfmP");

// CONCATENATED MODULE: ./lib/api/client/clientUserPanel.js

const client_getProfileGeneralDetail = async () => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`/Profile/CustomerDetailsProfile/`);
  return result.data;
};
const client_updateProfile = async model => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.put(`/Profile/EditCustomerProfile/`, model);
  return result.data;
};
const client_changeCustomerPassword = async model => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.post(`/Auth/ChangeCustomerPassword/`, model);
  return result.data;
};
const client_getOrderList = async model => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`/Profile/ProfileOrdersList?PageNumber=${model.pageNumber}&PageSize=${model.pageSize}`);
  return result.data;
};
const client_getCreditList = async model => {
  let query = Object.keys(model).reduce(function (a, k) {
    a.push(k + "=" + encodeURIComponent(model[k]));
    return a;
  }, []).join("&");
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`/Profile/ProfileAjyalCredit?${query}`);
  return result.data;
};
const client_getOrderItems = async id => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`/Profile/ProfileOrdersItem?orderId=${id}`);
  return result.data;
};
const client_getReturnOrderRequests = async model => {
  let query = Object.keys(model).reduce(function (a, k) {
    a.push(k + "=" + encodeURIComponent(model[k]));
    return a;
  }, []).join("&");
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`/Profile/ProfileReturnRequested?${query}`);
  return result.data;
};
const client_getReturnOrderDelivereds = async model => {
  let query = Object.keys(model).reduce(function (a, k) {
    a.push(k + "=" + encodeURIComponent(model[k]));
    return a;
  }, []).join("&");
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`/Profile/ProfileReturnDeliverd?${query}`);
  return result.data;
};
const client_getOrderItemForReturned = async () => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`/Profile/ProfileOrdersItemReturned`);
  return result.data;
};
const client_getReturningProduct = async itemId => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`/Profile/ProfileProductReturned/${itemId}`);
  return result.data;
};
const client_getReturningReasonList = async () => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`/Form/ReturningReason`);
  return result.data;
};
const client_getReturningActionList = async () => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`/Form/ReturningAction`);
  return result.data;
};
const client_submitReturnRequest = async model => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.put(`/UserOrder/ReturnOrder`, model);
  return result.data;
};
const client_getUserAddresses = async () => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`/Profile/Address`);
  return result.data;
};
const client_sendVerifyEmail = async ({
  email
}) => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`/Profile/SendEmailVerify`, {
    params: {
      email
    }
  });
  return result.data;
};
const client_verifyEmail = async ({
  email,
  code
}) => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`/Profile/VerifyCustomerEmail`, {
    params: {
      email,
      code
    }
  });
  return result.data;
};
const client_getPreference = async () => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`/Profile/CustomerRefundPreference`);
  return result.data;
};
const client_setPreference = async preferenceCode => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.put(`/Profile/SetCustomerRefundPreference/${preferenceCode}`);
  return result.data;
};
const client_customerGoodsComment = async (orderItemId, goodsId) => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`/UserActivity/CustomerGoodsComment/${goodsId}/${orderItemId}`);
  return result.data;
};
const client_addCustomerGoodsComment = async model => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.post(`/UserActivity/CustomerGoodsComment`, model);
  return result.data;
};
const client_getCustomerBankCards = async () => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`/Profile/GetCustomerBankCards`);
  return result.data;
};
const client_removeCustomerBankCard = async bankCardId => {
  const axios = api_axios["a" /* default */].getAxios();
  return axios.delete(`/Profile/RemoveCustomerBankCard/${bankCardId}`);
}; // cancel list 

const client_getCancelList = async orderId => {
  const axios = api_axios["a" /* default */].getAxios();
  return axios.get(`/Profile/ProfileOrdersItemCanceled/${orderId}`);
};
const client_getCancelReasonList = async () => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.get(`/Form/ActiveCancelingReason`);
  return result.data;
};
const client_submitCancelRequest = async model => {
  const axios = api_axios["a" /* default */].getAxios();
  const result = await axios.put(`/UserOrder/CancelOrder`, model);
  return result.data;
};
// EXTERNAL MODULE: ./assets/icons/tick.svg
var tick = __webpack_require__("VS4v");
var tick_default = /*#__PURE__*/__webpack_require__.n(tick);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__("7koQ");
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);

// EXTERNAL MODULE: ./appConfigSlice.js
var appConfigSlice = __webpack_require__("o2tl");

// EXTERNAL MODULE: ./lib/formValidator.js
var formValidator = __webpack_require__("s6mn");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./lib/toast.js
var toast = __webpack_require__("C5tE");

// EXTERNAL MODULE: ./lib/helpers.js
var helpers = __webpack_require__("FWZJ");

// EXTERNAL MODULE: ./lib/isRtl.js
var isRtl = __webpack_require__("gtw1");

// EXTERNAL MODULE: external "react-datepicker"
var external_react_datepicker_ = __webpack_require__("ZTWx");
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_);

// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__("vtRj");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// EXTERNAL MODULE: ./lib/api/client/clientShop.js
var clientShop = __webpack_require__("0OiM");

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Profile/ProfileEdit.jsx
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const ProfileEdit_renderBoxHeader = () => {
  return __jsx("div", {
    className: "profile-edit__header-container"
  }, __jsx("h2", {
    className: "profile-edit__box-header"
  }, __jsx(external_react_localize_redux_["Translate"], {
    id: "profile.editprofile"
  })), __jsx("p", {
    className: "profile-edit__box-subheader"
  }, __jsx(external_react_localize_redux_["Translate"], {
    id: "profile.manageprofile"
  })));
};

class ProfileEdit_ProfileEdit extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderPasswordModal", () => {
      return __jsx(external_react_localize_redux_["Translate"], null, ({
        translate: t
      }) => {
        return __jsx("form", {
          className: "changepass",
          onSubmit: this.handleSubmitChangePass
        }, __jsx("header", {
          className: "changepass__header"
        }, __jsx("h2", {
          className: "changepass__header-text"
        }, t("profile.changepass"))), __jsx("div", {
          className: "changepass__content"
        }, __jsx("p", {
          className: "changepass__des"
        }, t("profile.des-changepass")), __jsx("label", {
          className: "changepass__input-cnt gray__form-label"
        }, __jsx("span", {
          className: "gray__input-label"
        }, t("profile.cur-pass")), __jsx("input", {
          className: "gray__input",
          type: "password",
          placeholder: t("profile.cur-pass-placeholder"),
          onBlur: e => {
            Object(formValidator["d" /* validateEmpty */])({
              name: "curr",
              value: e.target.value,
              handler: this.setErrors,
              lang: this.lang
            });
          },
          required: true,
          onChange: this.handleChangeCurrPass,
          value: this.state.currPass
        }), __jsx(common["k" /* FormErrorMsg */], {
          show: this.state.errors["curr"],
          msg: this.state.errors["curr"]
        })), __jsx("label", {
          className: "changepass__input-cnt gray__form-label"
        }, __jsx("span", {
          className: "gray__input-label"
        }, t("profile.new-pass")), __jsx("input", {
          className: "gray__input",
          type: "password",
          placeholder: t("profile.new-pass-placeholder"),
          onBlur: e => {
            Object(formValidator["d" /* validateEmpty */])({
              name: "pass",
              value: e.target.value,
              handler: this.setErrors,
              lang: this.lang
            });
          },
          required: true,
          onChange: this.handleChangepass,
          value: this.state.pass
        }), __jsx(common["k" /* FormErrorMsg */], {
          show: this.state.errors["pass"],
          msg: this.state.errors["pass"]
        })), __jsx("label", {
          className: "changepass__input-cnt gray__form-label mt-5"
        }, __jsx("span", {
          className: "gray__input-label"
        }, t("profile.con-pass")), __jsx("input", {
          className: "gray__input",
          type: "password",
          placeholder: t("profile.con-pass-placeholder"),
          required: true,
          value: this.state.cPass,
          onBlur: e => {
            Object(formValidator["a" /* validateConfirmPassword */])({
              name: e.target.name,
              value1: this.state.pass,
              value2: e.target.value,
              handler: this.setErrors,
              lang: this.context.lang
            });
          },
          onChange: e => {
            this.handleConfirmPassChange(e);
            Object(formValidator["a" /* validateConfirmPassword */])({
              name: "cpassword",
              value1: this.state.pass,
              value2: e.target.value,
              handler: this.setErrors,
              lang: this.context.lang
            });
          }
        }), __jsx(common["k" /* FormErrorMsg */], {
          show: this.state.errors["cpassword"],
          msg: this.state.errors["cpassword"]
        }))), __jsx("footer", {
          className: "changepass__footer"
        }, __jsx("button", {
          onClick: this.handleModalClose,
          className: "changepass__footer-btn",
          type: "button"
        }, t("profile.cancel")), __jsx("button", {
          className: "changepass__footer-btn changepass__footer-btn--primary"
        }, this.state.showPassLoader ? __jsx(common["s" /* Loading */], {
          type: "gray",
          width: "11%",
          height: "70%"
        }) : t("profile.save-pass"))));
      });
    });

    _defineProperty(this, "setErrors", func => {
      const error = func(this.state.errors);
      this.setState({
        errors: error
      });
    });

    _defineProperty(this, "clickHandler", e => {
      e.preventDefault();
      this.setState({
        isPasswordModalOpen: true
      });
    });

    _defineProperty(this, "handleModalClose", () => {
      this.setState({
        isPasswordModalOpen: false
      });
    });

    _defineProperty(this, "handleChangeName", e => {
      this.setState({
        name: e.target.value
      });
    });

    _defineProperty(this, "handleFamily", e => {
      this.setState({
        family: e.target.value
      }, () => {});
    });

    _defineProperty(this, "handleChangeCurrPass", e => {
      this.setState({
        currPass: e.target.value
      });
    });

    _defineProperty(this, "handleChangepass", e => {
      this.setState({
        pass: e.target.value
      });
    });

    _defineProperty(this, "handleChangepass", e => {
      this.setState({
        pass: e.target.value
      });
    });

    _defineProperty(this, "handleConfirmPassChange", e => {
      this.setState({
        cPass: e.target.value
      });
    });

    _defineProperty(this, "handleSubmit", async e => {
      e.preventDefault();

      for (let key in this.state.errors) {
        if (this.state.errors[key]) {
          console.log("error");
          return;
        }
      }

      try {
        var _this$state$date, _this$state$selectedC, _this$state$selectedC2, _this$state$selectedP;

        this.setState({
          showLoader: true
        });
        let result = await client_updateProfile({
          userName: this.state.email,
          name: this.state.name,
          family: this.state.family,
          nationalCode: this.state.nationalCode,
          birthDate: (_this$state$date = this.state.date) === null || _this$state$date === void 0 ? void 0 : _this$state$date.toLocaleDateString(),
          FkCountryId: (_this$state$selectedC = this.state.selectedCountry) === null || _this$state$selectedC === void 0 ? void 0 : _this$state$selectedC.value,
          FkCityId: (_this$state$selectedC2 = this.state.selectedCity) === null || _this$state$selectedC2 === void 0 ? void 0 : _this$state$selectedC2.value,
          FkProvinceId: (_this$state$selectedP = this.state.selectedProvince) === null || _this$state$selectedP === void 0 ? void 0 : _this$state$selectedP.value
        });

        if (result.status == 200) {
          external_react_toastify_["toast"].success(Object(helpers["c" /* getErrorMsg */])(this.props.lang, "succ-update-profile"), Object(toast["a" /* getToastConfig */])());
        }
      } catch (error) {
        var _error$response;

        external_react_toastify_["toast"].error((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data.message, Object(toast["a" /* getToastConfig */])());
      }

      this.setState({
        showLoader: false
      });
    });

    _defineProperty(this, "handleSubmitChangePass", async e => {
      e.preventDefault();

      for (let key in this.state.errors) {
        if (this.state.errors[key]) {
          return;
        }
      }

      try {
        this.setState({
          showPassLoader: true
        });
        let result = await client_changeCustomerPassword({
          oldPassword: this.state.currPass,
          newPassword: this.state.pass,
          userName: this.state.email
        });

        if (result.status == 200) {
          external_react_toastify_["toast"].success(Object(helpers["c" /* getErrorMsg */])(this.props.lang, "succ-update-password"), Object(toast["a" /* getToastConfig */])());
          this.setState({
            isPasswordModalOpen: false
          });
        }
      } catch (error) {
        var _error$response2;

        external_react_toastify_["toast"].error((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.data.message, Object(toast["a" /* getToastConfig */])());
      }

      this.setState({
        showPassLoader: false
      });
    });

    _defineProperty(this, "handleCountryChange", async item => {
      this.setState(state => {
        return _objectSpread(_objectSpread({}, state), {}, {
          selectedCountry: item,
          selectedCity: null,
          selectedProvince: null
        });
      });
      const result = await Object(clientShop["g" /* client_getActiveProvince */])(item.value);
      let provinces = [];
      result.result.forEach(item => {
        provinces.push({
          value: item.provinceId,
          label: item.provinceName
        });
      });
      provinces.sort(this.compare);
      this.setState(state => {
        return _objectSpread(_objectSpread({}, state), {}, {
          form: _objectSpread(_objectSpread({}, state.form), {}, {
            provinces: provinces
          })
        });
      }); // const result = await client_getActiveCities(item.value);
      // let cities = [];
      // result.result.forEach((item) => {
      //   cities.push({ value: item.cityId, label: item.cityTitle });
      // });
      // this.setState((state) => {
      //   return {
      //     ...state,
      //     form: {
      //       ...state.form,
      //       cities: cities,
      //     },
      //   };
      // });
    });

    _defineProperty(this, "handleProvinceChange", async item => {
      var _this$state$selectedP2;

      this.setState(state => {
        return _objectSpread(_objectSpread({}, state), {}, {
          selectedProvince: item,
          selectedCity: null
        });
      });
      const result = await Object(clientShop["e" /* client_getActiveCities */])(item.value);

      if (item.value != ((_this$state$selectedP2 = this.state.selectedProvince) === null || _this$state$selectedP2 === void 0 ? void 0 : _this$state$selectedP2.value)) {
        this.setState(state => {
          return _objectSpread(_objectSpread({}, state), {}, {
            selectedProvince: null
          });
        });
      }

      let cities = [];
      result.result.forEach(item => {
        cities.push({
          value: item.cityId,
          label: item.cityTitle
        });
      });
      cities.sort(this.compare);
      this.setState(state => {
        return _objectSpread(_objectSpread({}, state), {}, {
          form: _objectSpread(_objectSpread({}, state.form), {}, {
            cities: cities
          })
        });
      }); // setCityItems(cities);
      // setProvinceEmptyError(false);
    });

    this.state = {
      form: {
        countries: [],
        provinces: [],
        cities: []
      },
      nationalCode: "",
      birthdat: "",
      email: "",
      family: "",
      name: "",
      errors: "",
      currPass: "",
      pass: "",
      cPass: "",
      selectedCountry: null,
      selectedCity: null,
      selectedProvince: null,
      customerId: 0,
      componentLogged: false,
      showLoader: false,
      showPassLoader: false,
      date: null
    };
    this.is_rtl = Object(isRtl["a" /* isRtl */])(this.props.lang);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleFamily = this.handleFamily.bind(this);
    this.handleChangeCurrPass = this.handleChangeCurrPass.bind(this);
    this.handleChangepass = this.handleChangepass.bind(this);
  }

  componentDidMount() {
    this.setState({
      componentLogged: false
    }); // get active countries

    Object(clientShop["f" /* client_getActiveCountries */])().then(res => {
      let countries = [];
      res.result.forEach(item => {
        countries.push({
          value: item.countryId,
          label: item.countryTitle,
          iso: item.iso,
          phoneCode: item.phoneCode
        });
        this.setState(state => {
          return {
            form: _objectSpread(_objectSpread({}, state.form), {}, {
              countries: countries
            })
          };
        });
      });
    });

    if (this.props.state.fkCountryId) {
      this.handleCountryChange({
        value: this.props.state.fkCountryId,
        label: this.props.state.countryName
      });
    }

    if (this.props.state.fkProvinceId) {
      this.handleProvinceChange({
        value: this.props.state.fkProvinceId,
        label: this.props.state.provinceName
      });
    }
  }

  componentWillUnmount() {
    this.props.getData();
  }

  componentDidUpdate() {
    if (!this.state.componentLogged && this.props.state.email != "") {
      this.setState({
        name: this.props.state.name,
        family: this.props.state.family,
        email: this.props.state.email,
        customerId: this.props.state.customerId,
        componentLogged: true,
        selectedCountry: this.props.state.fkCountryId ? {
          value: this.props.state.fkCountryId,
          label: this.props.state.countryName
        } : null,
        selectedProvince: this.props.state.fkProvinceId ? {
          value: this.props.state.fkProvinceId,
          label: this.props.state.provinceName
        } : null,
        selectedCity: this.props.state.fkCityId ? {
          value: this.props.state.fkCityId,
          label: this.props.state.cityName
        } : null
      }); // if (this.props.state.fkCountryId) {
      //   this.handleCountryChange({ value: this.props.state.fkCountryId, label: this.props.state.countryName });
      // }
    }
  }

  compare(a, b) {
    return a.label > b.label ? 1 : b.label > a.label ? -1 : 0;
  }

  render() {
    return __jsx(common["b" /* BoxStyle1 */], {
      headerContent: ProfileEdit_renderBoxHeader()
    }, __jsx(external_react_modal_default.a, {
      closeTimeoutMS: 200,
      className: "changepass-modal",
      overlayClassName: "editProfileOverly",
      onRequestClose: this.handleModalClose,
      isOpen: this.state.isPasswordModalOpen,
      ariaHideApp: false
    }, this.renderPasswordModal(0)), __jsx("section", {
      className: "container-fluid profile-edit"
    }, __jsx("form", {
      className: "profile-edit__form-container mt-4",
      onSubmit: this.handleSubmit
    }, __jsx(external_react_localize_redux_["Translate"], null, ({
      translate
    }) => {
      return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
        className: "row no-gutters justify-content-between"
      }, __jsx("div", {
        className: "col-md-6"
      }, __jsx("label", {
        className: "profile-edit__form-label gray__form-label mt-3"
      }, __jsx("span", {
        className: "profile-edit__input-label gray__input-label"
      }, __jsx(external_react_localize_redux_["Translate"], {
        id: "profile.firstname"
      }), __jsx("span", {
        className: "input-required"
      }, "*")), __jsx("input", {
        className: "profile-edit__input gray__input",
        type: "text",
        onBlur: e => {
          Object(formValidator["d" /* validateEmpty */])({
            name: "name",
            value: e.target.value,
            handler: this.setErrors,
            lang: this.lang
          });
        },
        required: true,
        onChange: this.handleChangeName,
        value: this.state.name
      }), __jsx(common["k" /* FormErrorMsg */], {
        show: this.state.errors["name"],
        msg: this.state.errors["name"]
      }))), __jsx("div", {
        className: "col-md-6"
      }, __jsx("label", {
        className: "profile-edit__form-label gray__form-label mt-3"
      }, __jsx("span", {
        className: "profile-edit__input-label gray__input-label"
      }, __jsx(external_react_localize_redux_["Translate"], {
        id: "profile.lastname"
      }), __jsx("span", {
        className: "input-required"
      }, "*")), __jsx("input", {
        className: "profile-edit__input gray__input",
        type: "text",
        onBlur: e => {
          Object(formValidator["d" /* validateEmpty */])({
            name: "family",
            value: e.target.value,
            handler: this.setErrors,
            lang: this.lang
          });
        },
        required: true,
        onChange: this.handleFamily,
        value: this.state.family
      }), __jsx(common["k" /* FormErrorMsg */], {
        show: this.state.errors["family"],
        msg: this.state.errors["family"]
      })))), __jsx("div", {
        className: "row no-gutters justify-content-between mt-4"
      }, __jsx("div", {
        className: "col-md-6"
      }, __jsx("label", {
        className: "profile-edit__form-label gray__form-label mt-3"
      }, __jsx("span", {
        className: "profile-edit__input-label gray__input-label"
      }, __jsx(external_react_localize_redux_["Translate"], {
        id: "profile.national-code"
      })), __jsx("input", {
        className: "profile-edit__input gray__input",
        type: "text" // onChange={this.handleChangeName}
        ,
        value: this.state.nationalCode,
        placeholder: translate("profile.national-code-placeholder"),
        onChange: e => {
          this.setState({
            nationalCode: e.target.value
          });
        }
      }))), __jsx("div", {
        className: "col-md-6"
      }, __jsx("label", {
        className: "profile-edit__form-label gray__form-label mt-3"
      }, __jsx("span", {
        className: "profile-edit__input-label gray__input-label"
      }, __jsx(external_react_localize_redux_["Translate"], {
        id: "profile.birthday-date"
      })), __jsx(external_react_datepicker_default.a, {
        placeholderText: "Click to select a date",
        peekNextMonth: true,
        showMonthDropdown: true,
        showYearDropdown: true,
        withPortal: true,
        dropdownMode: "select",
        selected: this.state.date,
        onChange: date => {
          this.setState({
            date
          });
        },
        className: "profile-edit__input gray__input"
      })))), __jsx("div", {
        className: "row no-gutters justify-content-between mt-4"
      }, __jsx("div", {
        className: "col-md-6"
      }, __jsx("label", {
        className: "profile-edit__form-label gray__form-label mt-3"
      }, __jsx("span", {
        className: "auth__input-label"
      }, __jsx(external_react_localize_redux_["Translate"], {
        id: "addresses.country"
      })), __jsx(external_react_select_default.a, {
        className: "react-select",
        options: this.state.form.countries // isDisabled={isDisableCountry}
        ,
        onChange: this.handleCountryChange,
        placeholder: translate("addresses.country-placeholder"),
        value: this.state.selectedCountry,
        required: true
      }))), __jsx("div", {
        className: "col-md-6"
      }, __jsx("label", {
        className: "profile-edit__form-label gray__form-label mt-3"
      }, __jsx("span", {
        className: "auth__input-label"
      }, __jsx(external_react_localize_redux_["Translate"], {
        id: "addresses.province"
      })), __jsx(external_react_select_default.a, {
        className: "react-select",
        options: this.state.form.provinces,
        onChange: item => {
          this.handleProvinceChange(item); // setSelectedProvince(item);
        },
        placeholder: translate("addresses.province-placeholder"),
        value: this.state.selectedProvince,
        required: true
      })))), __jsx("div", {
        className: "row no-gutters justify-content-between mt-2"
      }, __jsx("div", {
        className: "col-md-6"
      }, __jsx("label", {
        className: "profile-edit__form-label gray__form-label mt-3"
      }, __jsx("span", {
        className: "auth__input-label"
      }, __jsx(external_react_localize_redux_["Translate"], {
        id: "addresses.city"
      })), __jsx(external_react_select_default.a, {
        className: "react-select",
        options: this.state.form.cities // isDisabled={isDisableCountry}
        ,
        onChange: item => {
          this.setState({
            selectedCity: item
          });
        },
        placeholder: translate("addresses.city-placeholder"),
        value: this.state.selectedCity,
        required: true
      }))), __jsx("div", {
        className: "col-md-6"
      }, __jsx("label", {
        className: "profile-edit__form-label gray__form-label mt-3"
      }, __jsx("span", {
        className: "profile-edit__input-label gray__input-label"
      }, __jsx(external_react_localize_redux_["Translate"], {
        id: "profile.email1"
      })), __jsx("input", {
        className: "profile-edit__input gray__input",
        type: "email",
        placeholder: translate("profile.email-placeholder"),
        required: true,
        readOnly: true,
        value: this.state.email
      }), __jsx("span", {
        className: "profile-edit__sub-label-form"
      }, __jsx(external_react_localize_redux_["Translate"], {
        id: "profile.cantchange"
      }))))), __jsx("div", {
        className: "profile-edit__passchange-link-cnt"
      }, __jsx("a", {
        onClick: this.clickHandler,
        className: "profile-edit__passchange-link"
      }, __jsx(external_react_localize_redux_["Translate"], {
        id: "profile.changepass"
      }))), __jsx("button", {
        className: "primary-btn profile-edit__save-btn",
        type: "submit"
      }, this.state.showLoader ? __jsx(common["s" /* Loading */], {
        type: "gray",
        width: "20px",
        height: "20px"
      }) : __jsx(external_react_localize_redux_["Translate"], {
        id: "profile.save"
      })));
    }))));
  }

}

const mapStateToProps = state => {
  return {
    lang: Object(appConfigSlice["h" /* selectLang */])(state)
  };
};

/* harmony default export */ var Profile_ProfileEdit = (Object(external_react_redux_["connect"])(mapStateToProps)(ProfileEdit_ProfileEdit));
// EXTERNAL MODULE: ./assets/icons/profile.svg
var profile = __webpack_require__("96uj");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./Responsive.js
var Responsive = __webpack_require__("jxY/");

// EXTERNAL MODULE: ./components/app/pages/UserPanel/PanelLayouts/PanelNavi/PanelNavi.jsx
var PanelNavi = __webpack_require__("VXA8");

// EXTERNAL MODULE: ./assets/images/email-veri.png
var email_veri = __webpack_require__("WrI8");
var email_veri_default = /*#__PURE__*/__webpack_require__.n(email_veri);

// EXTERNAL MODULE: external "react-compound-timer/build"
var build_ = __webpack_require__("5w86");
var build_default = /*#__PURE__*/__webpack_require__.n(build_);

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Profile/ProfileVerifyEmail.jsx
var ProfileVerifyEmail_jsx = external_react_default.a.createElement;














const ProfileVerifyEmail = ({
  handleSitu,
  email
}) => {
  const {
    0: code,
    1: setCode
  } = Object(external_react_["useState"])("");
  const {
    0: sendEmailLoading,
    1: setSendEmailLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: submitLoading,
    1: setSubmitLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: errors,
    1: setErrors
  } = Object(external_react_["useState"])({});
  let can_send_new_email = false;
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]); // const [errors]

  const sendEmail = () => {
    setSendEmailLoading(true);
    client_sendVerifyEmail({
      email
    }).then(res => {
      setSendEmailLoading(false);
    }).catch(err => {
      external_react_toastify_["toast"].error("error occurred", Object(toast["a" /* getToastConfig */])());
      setSendEmailLoading(false);
    });
  };

  Object(external_react_["useEffect"])(() => {
    sendEmail();
    return () => {};
  }, []);

  const handleResendEmail = e => {
    e.preventDefault();
    sendEmail();
    can_send_new_email = false;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (submitLoading) return;

    for (let key in errors) {
      if (errors[key]) {
        external_react_toastify_["toast"].error(Object(helpers["c" /* getErrorMsg */])(lang, "error-detected"), Object(toast["a" /* getToastConfig */])());
        return;
      }
    }

    setSubmitLoading(true);

    try {
      const res = await client_verifyEmail({
        email,
        code
      });
      external_react_toastify_["toast"].success(Object(helpers["c" /* getErrorMsg */])(lang, "verification-succes"), Object(toast["a" /* getToastConfig */])());
      handleSitu(PROFILE);
    } catch (err) {
      external_react_toastify_["toast"].error(err.response.data.message, Object(toast["a" /* getToastConfig */])());
      setSubmitLoading(false);
    }
  };

  return ProfileVerifyEmail_jsx(common["c" /* BoxStyle2 */], null, ProfileVerifyEmail_jsx("section", {
    className: "container-fluid verify-email-cnt"
  }, ProfileVerifyEmail_jsx("div", {
    className: "verify-email"
  }, sendEmailLoading ? ProfileVerifyEmail_jsx(common["s" /* Loading */], {
    width: "40px",
    height: "40px",
    styleSheet: {
      margin: "60px auto 40px auto"
    }
  }) : ProfileVerifyEmail_jsx("img", {
    alt: "verify your email",
    src: email_veri_default.a,
    className: "verify-email__img"
  }), ProfileVerifyEmail_jsx("p", {
    className: "verify-email__top-text"
  }, ProfileVerifyEmail_jsx(external_react_localize_redux_["Translate"], {
    id: "email-verify.check-email"
  })), ProfileVerifyEmail_jsx("p", {
    className: "verify-email__btm-text"
  }, ProfileVerifyEmail_jsx(external_react_localize_redux_["Translate"], {
    id: "email-verify.enter-code"
  })), ProfileVerifyEmail_jsx("form", {
    className: "verify-email__form",
    onSubmit: handleSubmit
  }, ProfileVerifyEmail_jsx(external_react_localize_redux_["Translate"], null, ({
    translate: t
  }) => {
    return ProfileVerifyEmail_jsx(external_react_default.a.Fragment, null, ProfileVerifyEmail_jsx("div", {
      className: "verify-email__input-cnt"
    }, ProfileVerifyEmail_jsx("input", {
      type: "text",
      className: "gray__input",
      name: "code",
      value: code,
      required: true,
      placeholder: t("email-verify.verification-code-placeholder"),
      onChange: e => {
        setCode(e.target.value);
        Object(formValidator["d" /* validateEmpty */])({
          name: "code",
          value: e.target.value,
          handler: setErrors,
          lang
        });
      },
      onBlur: e => {
        Object(formValidator["d" /* validateEmpty */])({
          name: "code",
          value: e.target.value,
          handler: setErrors,
          lang
        });
      }
    })), ProfileVerifyEmail_jsx(common["k" /* FormErrorMsg */], {
      show: errors["code"],
      msg: errors["code"]
    }));
  }), ProfileVerifyEmail_jsx("button", {
    className: "primary-btn no-address__btn"
  }, submitLoading ? ProfileVerifyEmail_jsx(common["s" /* Loading */], {
    type: "white",
    width: "20px",
    height: "20px"
  }) : ProfileVerifyEmail_jsx(external_react_localize_redux_["Translate"], {
    id: "email-verify.verify"
  })))), ProfileVerifyEmail_jsx(build_default.a, {
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

    return ProfileVerifyEmail_jsx("div", {
      className: "timer mt-5 d-flex align-items-center justify-content-center"
    }, ProfileVerifyEmail_jsx("span", {
      className: "timer__count"
    }, ProfileVerifyEmail_jsx(build_default.a.Minutes, null), " : ", ProfileVerifyEmail_jsx(build_default.a.Seconds, null)), ProfileVerifyEmail_jsx("a", {
      onClick: e => {
        if (!can_send_new_email) return;
        handleResendEmail(e);
        reset();
        start();
      },
      className: "timer__text"
    }, ProfileVerifyEmail_jsx(external_react_localize_redux_["Translate"], {
      id: "profile.send-new-email"
    })));
  })));
};

/* harmony default export */ var Profile_ProfileVerifyEmail = (ProfileVerifyEmail);
// EXTERNAL MODULE: external "google-libphonenumber"
var external_google_libphonenumber_ = __webpack_require__("2C5Q");

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Profile/Profile.jsx
var Profile_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Profile_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import "./Profile.scss";





 // import "./Profile-rtl.scss";












const PROFILE = 1;
const PROFILE_EMAIL_VERIFY = 2;

class Profile_Profile extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Profile_defineProperty(this, "getData", async () => {
      this.setState({
        showLoader: true
      });
      const result = await client_getProfileGeneralDetail();
      this.setState({
        birthDate: result.result.birthDate,
        cityName: result.result.cityName,
        countryName: result.result.countryName,
        customerId: result.result.customerId,
        email: result.result.email,
        family: result.result.family,
        fkCountryId: result.result.fkCountryId,
        lastLogin: result.result.lastLogin,
        mobileNumber: result.result.mobileNumber,
        name: result.result.name,
        nationalCode: result.result.nationalCode,
        registeryDate: result.result.registeryDate,
        emailVerifed: result.result.emailVerifed,
        iso: result.result.iso,
        phoneCode: result.result.phoneCode,
        mobileVerifed: result.result.mobileVerifed,
        fkCityId: result.result.fkCityId,
        fkProvinceId: result.result.fkProvinceId,
        provinceName: result.result.provinceName,
        showLoader: false
      });
    });

    Profile_defineProperty(this, "handleSituation", situ => {
      switch (situ) {
        case PROFILE:
          this.setState({
            profilePosi: PROFILE
          });
          this.getData();
          break;

        case PROFILE_EMAIL_VERIFY:
          this.setState({
            profilePosi: PROFILE_EMAIL_VERIFY
          });
          break;
      }
    });

    Profile_defineProperty(this, "formatPhoneNumber", () => {
      if (this.state.mobileNumber) {
        try {
          return this.phoneUtil.format(this.phoneUtil.parseAndKeepRawInput(this.state.phoneCode + this.state.mobileNumber, this.state.iso), this.PNF.INTERNATIONAL);
        } catch (error) {
          console.log(error);
          return "";
        }
      } else {
        return "";
      }
    });

    this.state = {
      profilePosi: PROFILE,
      birthDate: "",
      cityName: "",
      countryName: "",
      customerId: 0,
      email: "",
      family: "",
      fkCountryId: "",
      lastLogin: "",
      mobileNumber: "",
      name: "",
      nationalCode: "",
      registeryDate: "",
      showLoader: false
    };
    this.phoneUtil = external_google_libphonenumber_["PhoneNumberUtil"].getInstance();
    this.PNF = external_google_libphonenumber_["PhoneNumberFormat"];
  }

  componentDidMount() {
    this.getData();
  }

  renderBoxHeader() {
    return Profile_jsx("h2", {
      className: "user-panel__box-header"
    }, Profile_jsx(external_react_localize_redux_["Translate"], {
      id: "nav.profile"
    }));
  }

  render() {
    return Profile_jsx(external_react_default.a.Fragment, null, Profile_jsx(external_react_toastify_["ToastContainer"], _extends({
      rtl: Object(isRtl["a" /* isRtl */])(this.props.lang)
    }, Object(toast["a" /* getToastConfig */])())), Profile_jsx(external_react_router_dom_["Switch"], null, Profile_jsx(external_react_router_dom_["Route"], {
      path: `${this.props.match.path}/edit`,
      render: () => Profile_jsx(Profile_ProfileEdit, {
        state: this.state,
        getData: this.getData
      })
    }), Profile_jsx(external_react_router_dom_["Route"], {
      exact: true,
      path: `${this.props.match.path}`
    }, this.state.profilePosi === PROFILE_EMAIL_VERIFY ? Profile_jsx(external_react_default.a.Fragment, null, Profile_jsx(Profile_ProfileVerifyEmail, {
      email: this.state.email,
      handleSitu: this.handleSituation
    })) : Profile_jsx(external_react_default.a.Fragment, null, this.state.showLoader ? Profile_jsx("div", {
      style: {
        minHeight: "100vh"
      }
    }, Profile_jsx(common["s" /* Loading */], {
      type: "gray",
      width: "11%",
      height: "70%"
    })) : Profile_jsx(common["b" /* BoxStyle1 */], {
      headerContent: this.renderBoxHeader()
    }, Profile_jsx("section", {
      className: "profile"
    }, Profile_jsx("div", {
      className: "row"
    }, Profile_jsx("div", {
      className: "col-12 col-md-6"
    }, Profile_jsx("div", {
      className: "profile__item-container flex-wrap"
    }, Profile_jsx("span", {
      className: "profile__item"
    }, Profile_jsx(external_react_localize_redux_["Translate"], {
      id: "profile.firstname"
    })), Profile_jsx("span", {
      className: "profile__item profile__item--color"
    }, this.state.name)), Profile_jsx("div", {
      className: "profile__item-container profile__item-container--color"
    }, Profile_jsx("span", {
      className: "profile__item"
    }, Profile_jsx(external_react_localize_redux_["Translate"], {
      id: "profile.lastname"
    })), Profile_jsx("span", {
      className: "profile__item profile__item--color"
    }, this.state.family)), Profile_jsx("div", {
      className: "profile__item-container"
    }, Profile_jsx("span", {
      className: "profile__item"
    }, Profile_jsx(external_react_localize_redux_["Translate"], {
      id: "profile.national-code"
    })), Profile_jsx("span", {
      className: "profile__item profile__item--color"
    }, this.state.nationalCode)), Profile_jsx("div", {
      className: "profile__item-container profile__item-container--color"
    }, Profile_jsx("span", {
      className: "profile__item"
    }, Profile_jsx(external_react_localize_redux_["Translate"], {
      id: "profile.birthday-date"
    })), Profile_jsx("span", {
      className: "profile__item profile__item--color"
    }, this.state.birthDate))), Profile_jsx("div", {
      className: "col-12 mt-md-0 col-md-6"
    }, Profile_jsx("div", {
      className: "profile__item-container profile__item-container--color"
    }, Profile_jsx("span", {
      className: "profile__item"
    }, Profile_jsx(external_react_localize_redux_["Translate"], {
      id: "profile.email1"
    })), Profile_jsx("div", null, Profile_jsx("span", {
      className: "profile__item profile__item--color"
    }, this.state.email, this.state.emailVerifed && Profile_jsx(tick_default.a, {
      className: "ml-3 mr-3 mb-1"
    })), !this.state.emailVerifed && Profile_jsx("div", null, Profile_jsx("span", {
      className: external_classnames_default()("addresses__ars-alert"),
      onClick: () => {
        this.handleSituation(PROFILE_EMAIL_VERIFY);
      }
    }, Profile_jsx("span", {
      className: "addresses__alert-icon"
    }, "!"), Profile_jsx(external_react_localize_redux_["Translate"], {
      id: "email-verify.verify-email"
    }))))), Profile_jsx("div", {
      className: "profile__item-container"
    }, Profile_jsx("span", {
      className: "profile__item"
    }, Profile_jsx(external_react_localize_redux_["Translate"], {
      id: "profile.country-name"
    })), Profile_jsx("span", {
      className: "profile__item profile__item--color"
    }, this.state.countryName)), Profile_jsx("div", {
      className: "profile__item-container profile__item-container--color"
    }, Profile_jsx("span", {
      className: "profile__item"
    }, Profile_jsx(external_react_localize_redux_["Translate"], {
      id: "profile.city-name"
    })), Profile_jsx("span", {
      className: "profile__item profile__item--color"
    }, this.state.cityName)), Profile_jsx("div", {
      className: "profile__item-container profile__item-container"
    }, Profile_jsx("span", {
      className: "profile__item"
    }, Profile_jsx(external_react_localize_redux_["Translate"], {
      id: "profile.mobile-number"
    })), Profile_jsx("div", null, Profile_jsx("span", {
      className: "profile__item profile__item--color"
    }, this.formatPhoneNumber(), this.state.mobileVerifed && Profile_jsx(tick_default.a, {
      className: "ml-3 mr-3 mb-1"
    })), this.state.mobileNumber && !this.state.mobileVerifed ? Profile_jsx("div", null, Profile_jsx("span", {
      className: external_classnames_default()("addresses__ars-alert"),
      onClick: () => {// this.handleSituation(
        //   PROFILE_EMAIL_VERIFY
        // );
      }
    }, Profile_jsx("span", {
      className: "addresses__alert-icon"
    }, "!"), Profile_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.notvery"
    }))) : null)))), Profile_jsx(external_react_router_dom_["Link"], {
      to: `${this.props.match.url}/edit`,
      className: "primary-btn profile__btn"
    }, Profile_jsx(external_react_localize_redux_["Translate"], {
      id: "profile.editprofile"
    }))))))));
  }

}

const Profile_mapStateToProps = state => {
  return {
    lang: Object(appConfigSlice["h" /* selectLang */])(state)
  };
};

/* harmony default export */ var PanelPages_Profile_Profile = (Object(external_react_redux_["connect"])(Profile_mapStateToProps)(Profile_Profile));
// EXTERNAL MODULE: external "react-router"
var external_react_router_ = __webpack_require__("MGin");

// EXTERNAL MODULE: ./assets/icons/emptybox.svg
var emptybox = __webpack_require__("unSA");

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Orders/OrdersLayouts/NoOrdersPage.jsx
var NoOrdersPage_jsx = external_react_default.a.createElement;





/* harmony default export */ var NoOrdersPage = (() => {
  const {
    url
  } = Object(external_react_router_["useRouteMatch"])();
  return NoOrdersPage_jsx("section", {
    className: "no-address"
  }, NoOrdersPage_jsx("div", null, NoOrdersPage_jsx(emptybox["ReactComponent"], {
    className: "no-address__icon"
  }), NoOrdersPage_jsx("p", {
    className: "no-address__topText"
  }, NoOrdersPage_jsx(external_react_localize_redux_["Translate"], {
    id: "orders.empty-msg1"
  })), NoOrdersPage_jsx("p", {
    className: "no-address__btmText"
  }, NoOrdersPage_jsx(external_react_localize_redux_["Translate"], {
    id: "orders.empty-msg2"
  })), NoOrdersPage_jsx(external_react_router_dom_["Link"], {
    to: `/`,
    className: "primary-btn no-address__btn"
  }, NoOrdersPage_jsx(external_react_localize_redux_["Translate"], {
    id: "orders.con-shopping"
  }))));
});
// EXTERNAL MODULE: ./assets/icons/img-down-arrow-white.svg
var img_down_arrow_white = __webpack_require__("vmdf");
var img_down_arrow_white_default = /*#__PURE__*/__webpack_require__.n(img_down_arrow_white);

// EXTERNAL MODULE: ./assets/icons/img-linear-arrow.svg
var img_linear_arrow = __webpack_require__("9lmT");
var img_linear_arrow_default = /*#__PURE__*/__webpack_require__.n(img_linear_arrow);

// EXTERNAL MODULE: ./assets/icons/back.svg
var back = __webpack_require__("KoxA");

// EXTERNAL MODULE: ./assets/icons/business-and-trade.svg
var business_and_trade = __webpack_require__("sRP1");
var business_and_trade_default = /*#__PURE__*/__webpack_require__.n(business_and_trade);

// EXTERNAL MODULE: ./assets/icons/express.png
var express = __webpack_require__("TozK");

// EXTERNAL MODULE: ./assets/icons/express-ar.png
var express_ar = __webpack_require__("BgOU");

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__("9BML");

// EXTERNAL MODULE: ./assets/icons/marketplace.png
var marketplace = __webpack_require__("xYMx");

// EXTERNAL MODULE: ./assets/icons/marketplaceAr.png
var marketplaceAr = __webpack_require__("tQxu");

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Orders/OrdersLayouts/OrderItem.jsx
var OrderItem_jsx = external_react_default.a.createElement;

function OrderItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const MARKET = 1;
const AJYAL = 2;
const UBEX = 3;
const DHL = 4;
const ARAMEX = 5;
const EXPRESS = 6;
const NOT_POSSIBLE = 7;
/* harmony default export */ var OrderItem = (class extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    OrderItem_defineProperty(this, "renderDeliverType", () => {
      let content = null;

      switch (this.props.data.shippingMethod) {
        case MARKET:
          content = OrderItem_jsx(external_react_default.a.Fragment, null, OrderItem_jsx("img", {
            src: `${"http://ajyal.webtreeonline.com/Uploads/Images/ShippingMethod"}/${MARKET + "." + this.props.lang + ".png"}`,
            alt: "marketpalce",
            className: "goodItem-s2__exp"
          }));
          break;

        case EXPRESS:
          content = OrderItem_jsx("img", {
            src: `${"http://ajyal.webtreeonline.com/Uploads/Images/ShippingMethod"}/${EXPRESS + "." + this.props.lang + ".png"}`,
            alt: "EXPRESS",
            className: "goodItem-s2__exp"
          });
          break;

        case AJYAL:
          content = OrderItem_jsx("img", {
            src: `${"http://ajyal.webtreeonline.com/Uploads/Images/ShippingMethod"}/${AJYAL + "." + this.props.lang + ".png"}`,
            alt: "AJYAL",
            className: "goodItem-s2__exp"
          });
          break;

        case UBEX:
          content = OrderItem_jsx("img", {
            src: `${"http://ajyal.webtreeonline.com/Uploads/Images/ShippingMethod"}/${UBEX + "." + this.props.lang + ".png"}`,
            alt: "UBEX",
            className: "goodItem-s2__exp"
          });
          break;

        case ARAMEX:
          content = OrderItem_jsx("img", {
            src: `${"http://ajyal.webtreeonline.com/Uploads/Images/ShippingMethod"}/${ARAMEX + "." + this.props.lang + ".png"}`,
            alt: "ARAMEX",
            className: "goodItem-s2__exp"
          });
          break;

        case DHL:
          content = OrderItem_jsx("img", {
            src: `${"http://ajyal.webtreeonline.com/Uploads/Images/ShippingMethod"}/${DHL + "." + this.props.lang + ".png"}`,
            alt: "DHL",
            className: "goodItem-s2__exp"
          });
          break;

        case NOT_POSSIBLE:
          content = OrderItem_jsx("p", {
            class: "itemDetail__cityError"
          }, OrderItem_jsx(external_react_localize_redux_["Translate"], {
            id: "detail.city-not"
          }));
          break;
      }

      return content;
    });

    this.goods_Pre = "http://ajyal.webtreeonline.com/Uploads/Images/Goods";
    this.download_pre = "http://ajyal.webtreeonline.com/Uploads/Private/File";
  }

  render() {
    return OrderItem_jsx("article", {
      className: "goodItem-s2 cart-item order-item"
    }, !this.props.withoutRightBox && OrderItem_jsx(Responsive["c" /* LandScapePhones */], {
      className: "order-item__detail-cnt order-item__detail-cnt-mobile p-0 col-12"
    }, OrderItem_jsx("div", {
      className: "d-flex"
    }, OrderItem_jsx(common["q" /* GoodSituation */], {
      id: this.props.data.statusId,
      title: this.props.data.statusTitle
    }), OrderItem_jsx("span", {
      className: "order-item__detail-text order-item__detail-text--margin"
    }, OrderItem_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.on"
    }), "  \xA0", " ", this.props.data.orderStatusPlacedDateTime, ","))), OrderItem_jsx("div", {
      className: "goodItem-s2__left-container"
    }, OrderItem_jsx("figure", {
      className: "goodItem-s2__fig"
    }, OrderItem_jsx("img", {
      alt: "",
      className: "goodItem-s2__img",
      src: `${this.goods_Pre}/${this.props.data.goodsId}/${this.props.data.goodsImage}`
    })), OrderItem_jsx("div", {
      className: "goodItem-s2__left-right"
    }, OrderItem_jsx("div", {
      className: "goodItem-s2__ns-con"
    }, OrderItem_jsx("a", {
      className: "goodItem-s2__name"
    }, this.props.data.title), OrderItem_jsx("div", {
      className: "cart-item__model-container"
    }, OrderItem_jsx("span", {
      className: "order-item__small-text"
    }, OrderItem_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.model-num"
    })), OrderItem_jsx("span", {
      className: "order-item__small-value"
    }, this.props.data.modelNumber)), OrderItem_jsx("div", {
      className: "cart-item__model-container"
    }, OrderItem_jsx("span", {
      className: "order-item__small-text"
    }, OrderItem_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.sold-by"
    })), OrderItem_jsx("span", {
      className: "sky-text-link"
    }, this.props.data.shopName)), OrderItem_jsx("p", {
      className: "order-item__detail-text order-item__detail-text--good"
    }, this.props.data.returningAllowed ? OrderItem_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.msg1"
    }) : null)), OrderItem_jsx("div", {
      className: "goodItem-s2__right-ft-con"
    }, OrderItem_jsx("div", {
      className: "goodItem-s2__right-ft"
    }, OrderItem_jsx("div", {
      className: "d-flex align-items-center"
    }, OrderItem_jsx("span", {
      className: "goodItem-s2__currency"
    }, this.props.currency.toUpperCase()), OrderItem_jsx("div", {
      className: "goodItem-s2__price-container"
    }, OrderItem_jsx("span", {
      className: "goodItem-s2__number"
    }, Object(helpers["a" /* formatMoney */])(this.props.data.priceWithDiscount))), this.props.data.discountAmount != 0 ? OrderItem_jsx("div", {
      className: "goodItem-s2__off-percentage-container"
    }, OrderItem_jsx("span", {
      className: "goodItem-s2__off-percentage"
    }, this.props.data.discountPercent), OrderItem_jsx("span", {
      className: "goodItem-s2__off-text"
    }, "% OFF")) : undefined, this.props.data.discountAmount != 0 ? OrderItem_jsx("span", {
      className: "goodItem-s2__price-off"
    }, Object(helpers["a" /* formatMoney */])(this.props.data.unitPrice)) : null)), !this.props.data.isDownloadable && OrderItem_jsx("div", null, this.renderDeliverType())))), !this.props.withoutRightBox && OrderItem_jsx("div", {
      className: "goodItem-s2__right-container cart-item__right orders__right-container"
    }, OrderItem_jsx("div", {
      className: "orders__right-items"
    }, this.props.data.statusId != 100 ? OrderItem_jsx(Responsive["d" /* LandScapePhonesAndBigger */], null, OrderItem_jsx(common["q" /* GoodSituation */], {
      id: this.props.data.statusId,
      title: this.props.data.statusTitle
    })) : OrderItem_jsx(Responsive["d" /* LandScapePhonesAndBigger */], null, OrderItem_jsx(common["q" /* GoodSituation */], {
      id: this.props.data.statusId,
      title: this.props.data.statusTitle
    }), OrderItem_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.on"
    }), Object(external_date_fns_["format"])(new Date(this.props.data.orderStatusPlacedDateTime), "MMM dd , yyyy"), this.props.data.StatusId == 3 ? OrderItem_jsx(common["i" /* DeliveryProgress */], {
      processing: true,
      fillItemCount: 2,
      stepCount: 4
    }) : this.props.data.StatusId == 6 ? OrderItem_jsx(common["i" /* DeliveryProgress */], {
      delivered: true,
      fillItemCount: 4,
      stepCount: 4
    }) : undefined), this.props.data.statusId == 100 ? undefined : OrderItem_jsx(external_react_default.a.Fragment, null, OrderItem_jsx("span", {
      className: "orders__text-bold d-block"
    }, this.props.currency.toUpperCase() + " ", Object(helpers["a" /* formatMoney */])(this.props.data.totalPrice), OrderItem_jsx("span", {
      className: "orders__text-small"
    }, this.props.data.quantity + " ", OrderItem_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.items"
    }))), this.props.data.isDownloadable && OrderItem_jsx("a", {
      target: "_blank",
      href: `${this.download_pre}/${this.props.data.goodsId}/${this.props.data.downloadUrl}`,
      className: "primary-btn orders__btn orders__btn--mobile"
    }, OrderItem_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.download"
    })), OrderItem_jsx(external_react_router_dom_["Link"], {
      to: this.props.reviewLink,
      className: "primary-btn orders__btn orders__btn--mobile"
    }, OrderItem_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.review"
    }), OrderItem_jsx("img", {
      className: "d-none d-md-inline orders__btn-arrow-icon",
      src: img_down_arrow_white_default.a,
      alt: "arrow icon"
    }))))));
  }

});
// EXTERNAL MODULE: ./assets/icons/credit-card.svg
var credit_card = __webpack_require__("e9h6");

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Orders/OrdersLayouts/OrderCartDetail.jsx
var OrderCartDetail_jsx = external_react_default.a.createElement;





/* harmony default export */ var OrderCartDetail = (props => {
  var _props$data, _props$data$shipping, _props$data$discount, _props$data$totalWith;

  return OrderCartDetail_jsx(external_react_default.a.Fragment, null, OrderCartDetail_jsx("h2", {
    className: "order-cart__header"
  }, OrderCartDetail_jsx(external_react_localize_redux_["Translate"], {
    id: "orders.pay-method"
  })), OrderCartDetail_jsx("div", {
    className: "order-cart__credit-cnt"
  }, OrderCartDetail_jsx(Responsive["f" /* ProtraitPhonesAndBigger */], null, OrderCartDetail_jsx(credit_card["ReactComponent"], {
    className: "order-cart__credit-icon"
  })), OrderCartDetail_jsx("span", {
    className: "order-cart__credit-text"
  }, "Credit Card ( ", props.data.payment, " )")), OrderCartDetail_jsx("div", {
    className: "cart-aside__top-cnt"
  }, OrderCartDetail_jsx("h4", {
    className: "cart-aside__header"
  }, OrderCartDetail_jsx(external_react_localize_redux_["Translate"], {
    id: "orders.order-sum"
  })), OrderCartDetail_jsx("div", {
    className: "cart-aside__item"
  }, OrderCartDetail_jsx("span", null, OrderCartDetail_jsx("span", {
    className: "cart-aside__item-text"
  }, OrderCartDetail_jsx(external_react_localize_redux_["Translate"], {
    id: "orders.subtotal"
  })), OrderCartDetail_jsx("span", {
    className: "cart-aside__item-text-sub"
  }, (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.itemQuantity, " ", OrderCartDetail_jsx(external_react_localize_redux_["Translate"], {
    id: "orders.item"
  }))), OrderCartDetail_jsx("div", {
    className: "goodItem-s2__price-container"
  }, OrderCartDetail_jsx("span", {
    className: "goodItem-s2__number"
  }, props.currency.toUpperCase() + " ", Object(helpers["a" /* formatMoney */])(props.data.total - props.data.vat - props.data.shipping)))), OrderCartDetail_jsx("div", {
    className: "cart-aside__item"
  }, OrderCartDetail_jsx("span", null, OrderCartDetail_jsx("span", {
    className: "cart-aside__item-text"
  }, OrderCartDetail_jsx(external_react_localize_redux_["Translate"], {
    id: "orders.shipping"
  }))), OrderCartDetail_jsx("span", {
    className: "cart-aside__free"
  }, (_props$data$shipping = props.data.shipping) === null || _props$data$shipping === void 0 ? void 0 : _props$data$shipping.toLocaleString())), props.data.discount !== 0 ? OrderCartDetail_jsx("div", {
    className: "cart-aside__item"
  }, OrderCartDetail_jsx("span", null, OrderCartDetail_jsx("span", {
    className: "cart-aside__item-text"
  }, OrderCartDetail_jsx(external_react_localize_redux_["Translate"], {
    id: "orders.discount"
  }))), OrderCartDetail_jsx("span", {
    className: "cart-aside__discount"
  }, "- ", props.currency.toUpperCase() + " ", " ", (_props$data$discount = props.data.discount) === null || _props$data$discount === void 0 ? void 0 : _props$data$discount.toLocaleString())) : null, props.data.vat > 0 && OrderCartDetail_jsx("div", {
    className: "cart-aside__item"
  }, OrderCartDetail_jsx("span", null, OrderCartDetail_jsx("span", {
    className: "cart-aside__item-text"
  }, OrderCartDetail_jsx(external_react_localize_redux_["Translate"], {
    id: "common.addressAside.vat"
  }))), OrderCartDetail_jsx("div", {
    className: "goodItem-s2__price-container"
  }, OrderCartDetail_jsx("span", {
    className: "goodItem-s2__number"
  }, props.currency.toUpperCase(), "\xA0", Object(helpers["a" /* formatMoney */])(props.data.vat)))), OrderCartDetail_jsx("div", {
    className: "cart-aside__item cart-aside__item--border"
  }, OrderCartDetail_jsx("h4", {
    className: "cart-aside__header"
  }, OrderCartDetail_jsx(external_react_localize_redux_["Translate"], {
    id: "orders.total"
  }), OrderCartDetail_jsx("span", {
    className: "cart-aside__item-text-sub cart-aside__item-text-sub--header"
  }, props.data.vat != 0 && OrderCartDetail_jsx(external_react_localize_redux_["Translate"], {
    id: "orders.inciusive"
  }))), OrderCartDetail_jsx("div", {
    className: "goodItem-s2__price-container"
  }, props.data.discount != 0 && OrderCartDetail_jsx("span", {
    className: "goodItem-s2__price-off d-block"
  }, props.currency.toUpperCase() + " ", " ", (_props$data$totalWith = props.data.totalWithOutDiscountCode) === null || _props$data$totalWith === void 0 ? void 0 : _props$data$totalWith.toLocaleString()), OrderCartDetail_jsx("span", {
    className: "goodItem-s2__number"
  }, props.currency.toUpperCase() + " ", Object(helpers["a" /* formatMoney */])(props.data.finalPrice))))));
});
// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Orders/OrdersLayouts/OrderDetail.jsx
var OrderDetail_jsx = external_react_default.a.createElement;

function OrderDetail_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















class OrderDetail_OrderDetail extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    OrderDetail_defineProperty(this, "handleBackClick", () => {//   console.log(this.props.match);
      //   this.props.history.push(`${this.props.match.url}`);
    });

    OrderDetail_defineProperty(this, "getData", async () => {
      this.setState({
        showLoader: true
      });
      const result = await client_getOrderItems(this.props.match.params.id);
      this.setState({
        showLoader: false
      });
      this.setState({
        data: result.result
      });
    });

    this.state = {
      showLoader: false,
      data: {}
    };
    this.phoneUtil = external_google_libphonenumber_["PhoneNumberUtil"].getInstance();
    this.PNF = external_google_libphonenumber_["PhoneNumberFormat"];
  }

  componentDidMount() {
    this.getData();
  }

  renderBoxHeader() {
    return OrderDetail_jsx("header", {
      className: "mapAddress__header"
    }, OrderDetail_jsx(external_react_router_dom_["Link"], {
      to: this.props.match.url.split("/").slice(0, -1).join("/"),
      className: "orderDetail__backlink"
    }, OrderDetail_jsx(back["ReactComponent"], {
      className: "mapAddress__back-icon"
    }), OrderDetail_jsx("div", {
      className: "orders__item-header flex-wrap no-gutters"
    }, OrderDetail_jsx("h2", {
      className: "orders__item-cnt-header"
    }, OrderDetail_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.orders"
    }), " \xA0", " ", this.state.data.trackingCode), OrderDetail_jsx("span", {
      className: "col-md-auto col-12 orders__header-gray-text"
    }, OrderDetail_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.placed-on"
    }), " \xA0", " ", this.state.data.placedDateTime !== undefined ? Object(external_date_fns_["format"])(new Date(this.state.data.placedDateTime), "MMM dd , yyyy") : null))));
  }

  render() {
    var _this$state$data, _this$state$data$item;

    return OrderDetail_jsx("section", {
      className: "orderDetail"
    }, OrderDetail_jsx(common["c" /* BoxStyle2 */], {
      headerContent: this.renderBoxHeader()
    }, OrderDetail_jsx("header", {
      className: "orderDetail__header-top row mr-0 ml-0 justify-content-between"
    }, OrderDetail_jsx("div", {
      className: "col-12 col-sm-6 col-md-5"
    }, OrderDetail_jsx("i", {
      className: "orderDetail__addr-icon"
    }, OrderDetail_jsx(business_and_trade["ReactComponent"], null)), OrderDetail_jsx("p", {
      className: "orderDetail__header-text orderDetail__header-text--margin"
    }, this.state.data.address)), OrderDetail_jsx("div", {
      className: "mt-4 mt-sm-0 col-sm-4 col-md-3"
    }, OrderDetail_jsx("span", {
      className: "orderDetail__header-text d-block"
    }, this.state.data.transfereeName, " ", this.state.data.transfereeFamily), OrderDetail_jsx("span", {
      className: "orderDetail__header-text d-block"
    }, this.state.data.transfereeMobile ? this.phoneUtil.format(this.phoneUtil.parseAndKeepRawInput(this.state.data.transfereeMobile, this.state.data.iso), this.PNF.INTERNATIONAL) : null)), OrderDetail_jsx(Responsive["d" /* LandScapePhonesAndBigger */], {
      className: "col-3 p-0"
    }, OrderDetail_jsx("div", {
      style: {
        textAlign: 'right'
      }
    }, this.state.data.cancelingAllowed ? OrderDetail_jsx(external_react_router_dom_["Link"], {
      to: `${this.props.match.url}/cancel`,
      className: "orange-btn orderDetail__cancel-btn"
    }, OrderDetail_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.cancel-item-btn"
    })) : null)), OrderDetail_jsx(Responsive["c" /* LandScapePhones */], {
      className: "d-flex mt-3 w-100 justify-content-center"
    }, this.state.data.cancelingAllowed ? OrderDetail_jsx(external_react_router_dom_["Link"], {
      to: `${this.props.match.url}/cancel`,
      className: "orange-btn orderDetail__cancel-btn"
    }, OrderDetail_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.cancel-item-btn"
    })) : null)), OrderDetail_jsx("section", {
      className: "orderDetail__goods-cnt"
    }, (_this$state$data = this.state.data) === null || _this$state$data === void 0 ? void 0 : (_this$state$data$item = _this$state$data.items) === null || _this$state$data$item === void 0 ? void 0 : _this$state$data$item.map(item => {
      return OrderDetail_jsx(OrderItem, {
        reviewLink: `${this.props.match.url}/${item.itemId}/${item.goodsId}`,
        data: item,
        key: item.itemId,
        currency: this.props.currency,
        lang: this.props.lang
      });
    }))), OrderDetail_jsx(common["c" /* BoxStyle2 */], {
      className: "order-cart"
    }, OrderDetail_jsx(OrderCartDetail, {
      data: this.state.data,
      currency: this.props.currency
    })));
  }

}

const OrderDetail_mapStateToProps = state => {
  return {
    lang: Object(appConfigSlice["h" /* selectLang */])(state),
    currency: Object(appConfigSlice["g" /* selectCurr */])(state)
  };
};

/* harmony default export */ var OrdersLayouts_OrderDetail = (Object(external_react_redux_["connect"])(OrderDetail_mapStateToProps)(OrderDetail_OrderDetail));
// EXTERNAL MODULE: external "react-slidedown"
var external_react_slidedown_ = __webpack_require__("J46/");
var external_react_slidedown_default = /*#__PURE__*/__webpack_require__.n(external_react_slidedown_);

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Orders/OrdersLayouts/OrderReview.jsx
var OrderReview_jsx = external_react_default.a.createElement;

function OrderReview_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function OrderReview_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { OrderReview_ownKeys(Object(source), true).forEach(function (key) { OrderReview_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { OrderReview_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function OrderReview_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















class OrderReview_OrderReview extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    OrderReview_defineProperty(this, "handleStarClick", value => {
      if (this.state.lockPage) return;

      if (!this.state.showRatingInput) {
        this.setState({
          showRatingInput: true
        });
      }

      ;

      let comment = OrderReview_objectSpread({}, this.state.data.comment);

      comment.reviewPoint = value;
      this.setState(state => {
        return OrderReview_objectSpread(OrderReview_objectSpread({}, state), {}, {
          data: OrderReview_objectSpread(OrderReview_objectSpread({}, state.data), {}, {
            comment: comment
          })
        });
      });
    });

    OrderReview_defineProperty(this, "handleAddClick", (text, pointType) => {
      if (this.state.lockPage) return;
      const model = {
        pointId: 0,
        fkCommentId: 0,
        pointText: text,
        pointType: pointType
      };

      if (pointType == true) {
        // add pros
        let points = Array.isArray(this.state.prosItems) ? [...this.state.prosItems] : [];
        points.push(model);
        this.setState({
          prosItems: points
        });
      } else {
        // add const
        let points = Array.isArray(this.state.consItems) ? [...this.state.consItems] : [];
        points.push(model);
        this.setState({
          consItems: points
        });
      }
    });

    OrderReview_defineProperty(this, "handleCloseClick", (index, pointType) => {
      if (this.state.lockPage) return;

      if (pointType == true) {
        // delete pros
        const prosItems = [...this.state.prosItems];
        prosItems.splice(index, 1);
        this.setState({
          prosItems: prosItems
        });
      } else {
        // delete cons
        const consItems = [...this.state.consItems];
        consItems.splice(index, 1);
        this.setState({
          consItems: consItems
        });
      }
    });

    OrderReview_defineProperty(this, "getData", async () => {
      var _result$result$commen, _result$result$commen2, _result$result, _result$result$commen3, _result$result2, _result$result2$comme;

      console.log(this.props.match.params.orderItemId);
      console.log(this.props.match.params.good);
      this.setState({
        showLoader: true
      });
      const result = await client_customerGoodsComment(this.props.match.params.orderItemId, this.props.match.params.good); // console.log(result?.result);

      this.setState({
        data: result.result
      });
      const consItems = (_result$result$commen = result.result.comment.goodsCommentPoints) === null || _result$result$commen === void 0 ? void 0 : _result$result$commen.filter(x => x.pointType == false);
      const prosItems = (_result$result$commen2 = result.result.comment.goodsCommentPoints) === null || _result$result$commen2 === void 0 ? void 0 : _result$result$commen2.filter(x => x.pointType == true);

      if (((_result$result = result.result) === null || _result$result === void 0 ? void 0 : (_result$result$commen3 = _result$result.comment) === null || _result$result$commen3 === void 0 ? void 0 : _result$result$commen3.reviewPoint) && ((_result$result2 = result.result) === null || _result$result2 === void 0 ? void 0 : (_result$result2$comme = _result$result2.comment) === null || _result$result2$comme === void 0 ? void 0 : _result$result2$comme.reviewPoint) > 0) {
        this.setState({
          lockPage: true,
          showRatingInput: true
        });
      }

      ;
      this.setState({
        consItems: consItems,
        prosItems: prosItems
      });
      this.setState({
        showLoader: false
      }); // this.setState({ data: result.result });
    });

    OrderReview_defineProperty(this, "handleQuestionStarClick", (value, item) => {
      var _this$state$data, _this$state$data$comm, _this$state$data$comm2;

      if (this.state.lockPage) return;
      console.log(value);
      const model = {
        ansId: 0,
        fkCommentId: 0,
        fkQuestionId: item.queId,
        fkCustomerId: 0,
        fkShopId: 0,
        ansValue: value
      };
      const findAnswerIndex = (_this$state$data = this.state.data) === null || _this$state$data === void 0 ? void 0 : (_this$state$data$comm = _this$state$data.comment) === null || _this$state$data$comm === void 0 ? void 0 : (_this$state$data$comm2 = _this$state$data$comm.shopSurveyAnswers) === null || _this$state$data$comm2 === void 0 ? void 0 : _this$state$data$comm2.findIndex(x => x.fkQuestionId == item.queId);

      if (findAnswerIndex != -1 && findAnswerIndex != undefined) {
        // answer exist edit value
        const answers = Array.isArray(this.state.data.comment.shopSurveyAnswers) ? [...this.state.data.comment.shopSurveyAnswers] : [];
        answers[findAnswerIndex].ansValue = value;
        this.setState(state => {
          return OrderReview_objectSpread(OrderReview_objectSpread({}, state), {}, {
            data: OrderReview_objectSpread(OrderReview_objectSpread({}, state.data), {}, {
              comment: OrderReview_objectSpread(OrderReview_objectSpread({}, state.data.comment), {}, {
                shopSurveyAnswers: answers
              })
            })
          });
        });
      } else {
        var _this$state$data2, _this$state$data2$com;

        // add new answer
        let answers = [];

        if ((_this$state$data2 = this.state.data) === null || _this$state$data2 === void 0 ? void 0 : (_this$state$data2$com = _this$state$data2.comment) === null || _this$state$data2$com === void 0 ? void 0 : _this$state$data2$com.shopSurveyAnswers) {
          answers = [...this.state.data.comment.shopSurveyAnswers];
        } else {}

        answers.push(model);
        this.setState(state => {
          return OrderReview_objectSpread(OrderReview_objectSpread({}, state), {}, {
            data: OrderReview_objectSpread(OrderReview_objectSpread({}, state.data), {}, {
              comment: OrderReview_objectSpread(OrderReview_objectSpread({}, state.data.comment), {}, {
                shopSurveyAnswers: answers
              })
            })
          });
        });
      }
    });

    OrderReview_defineProperty(this, "setErrors", func => {
      const error = func(this.state.errors);
      this.setState({
        errors: error
      });
    });

    OrderReview_defineProperty(this, "submitReview", async () => {
      var _this$state$data3, _this$state$data3$com, _this$state$data4, _this$state$data4$com;

      if (this.state.lockPage) return;
      const model = {
        commentId: ((_this$state$data3 = this.state.data) === null || _this$state$data3 === void 0 ? void 0 : (_this$state$data3$com = _this$state$data3.comment) === null || _this$state$data3$com === void 0 ? void 0 : _this$state$data3$com.commentId) || 0,
        commentText: this.state.commentText || ((_this$state$data4 = this.state.data) === null || _this$state$data4 === void 0 ? void 0 : (_this$state$data4$com = _this$state$data4.comment) === null || _this$state$data4$com === void 0 ? void 0 : _this$state$data4$com.commentText),
        commentDate: null,
        customerName: null,
        customerId: 0,
        orderItemId: this.props.match.params.orderItemId,
        likeCount: 0,
        reviewPoint: this.state.data.comment.reviewPoint,
        isAccepted: null,
        tGoodsCommentPoints: [],
        shopSurveyAnswers: []
      };
      const surveyAnswers = [];

      if (this.state.data.comment.shopSurveyAnswers !== null) {
        for (let index = 0; index < this.state.data.comment.shopSurveyAnswers.length; index++) {
          const element = this.state.data.comment.shopSurveyAnswers[index];
          const surveyModel = {
            ansId: 0,
            fkCommentId: 0,
            fkQuestionId: element.fkQuestionId,
            fkCustomerId: 0,
            fkShopId: 0,
            ansValue: element.ansValue,
            fkOrderItemId: this.props.match.params.orderItemId
          };
          surveyAnswers.push(surveyModel);
        }
      }

      model.shopSurveyAnswers = surveyAnswers;
      const allPoints = this.state.prosItems.concat(this.state.consItems);
      model.tGoodsCommentPoints = allPoints;
      console.log(model);
      this.setState({
        showLoader: true
      });

      try {
        this.setState({
          submitLoading: true
        });
        const result = await client_addCustomerGoodsComment(model);
        external_react_toastify_["toast"].success(result.message, Object(toast["a" /* getToastConfig */])());
        this.setState({
          submitLoading: false
        });
        this.setState({
          lockPage: true
        });
      } catch (error) {
        var _error$response, _error$response$data;

        this.setState({
          submitLoading: false
        });
        external_react_toastify_["toast"].error(error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message, Object(toast["a" /* getToastConfig */])());
      } // if (result.status === 200) {
      // } else {
      // }


      this.setState({
        showLoader: false
      });
    });

    this.goods_Pre = "http://ajyal.webtreeonline.com/Uploads/Images/Goods";
    this.lang = this.props.lang;
    this.state = {
      showLoader: false,
      showRatingInput: false,
      commentText: null,
      consItems: [],
      prosItems: [],
      errors: {},
      lockPage: false,
      submitLoading: false
    };
  }

  componentDidMount() {
    this.getData();
  }

  renderBoxHeader() {
    return OrderReview_jsx("header", {
      className: "mapAddress__header"
    }, OrderReview_jsx(external_react_router_dom_["Link"], {
      to: this.props.match.url.split("/").slice(0, -1).join("/"),
      className: "orderDetail__backlink"
    }, OrderReview_jsx(back["ReactComponent"], {
      className: "mapAddress__back-icon"
    }), OrderReview_jsx("div", {
      className: "orders__item-header"
    }, OrderReview_jsx("h2", {
      className: "orders__item-cnt-header"
    }, OrderReview_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.order-det"
    })))));
  }

  render() {
    if (this.state.data) {
      var _this$state$data5, _this$state$data5$goo, _this$state$data6, _this$state$data6$goo, _this$state$data7, _this$state$data8, _this$state$data9, _this$state$data$ques;

      return OrderReview_jsx("section", {
        className: "order-review"
      }, OrderReview_jsx(common["c" /* BoxStyle2 */], {
        headerContent: this.renderBoxHeader()
      }, OrderReview_jsx("div", {
        className: "row no-gutters"
      }, OrderReview_jsx("div", {
        className: "col-12 col-lg-7"
      }, OrderReview_jsx("article", {
        className: "goodItem-s2 cart-item order-item"
      }, OrderReview_jsx("div", {
        className: "goodItem-s2__left-container"
      }, OrderReview_jsx("figure", {
        className: "goodItem-s2__fig"
      }, OrderReview_jsx("img", {
        alt: "",
        className: "goodItem-s2__img",
        src: `${this.goods_Pre}/${(_this$state$data5 = this.state.data) === null || _this$state$data5 === void 0 ? void 0 : (_this$state$data5$goo = _this$state$data5.goods) === null || _this$state$data5$goo === void 0 ? void 0 : _this$state$data5$goo.goodsId}/${(_this$state$data6 = this.state.data) === null || _this$state$data6 === void 0 ? void 0 : (_this$state$data6$goo = _this$state$data6.goods) === null || _this$state$data6$goo === void 0 ? void 0 : _this$state$data6$goo.image}`
      })), OrderReview_jsx("div", {
        className: "goodItem-s2__left-right"
      }, OrderReview_jsx("div", {
        className: "goodItem-s2__ns-con"
      }, OrderReview_jsx("a", {
        className: "goodItem-s2__name"
      }, (_this$state$data7 = this.state.data) === null || _this$state$data7 === void 0 ? void 0 : _this$state$data7.goods.title), OrderReview_jsx("div", {
        className: "cart-item__model-container"
      }, OrderReview_jsx("span", {
        className: "order-item__small-text"
      }, OrderReview_jsx(external_react_localize_redux_["Translate"], {
        id: "orders.model-num"
      })), OrderReview_jsx("span", {
        className: "order-item__small-value"
      }, (_this$state$data8 = this.state.data) === null || _this$state$data8 === void 0 ? void 0 : _this$state$data8.goods.serialNumber)), OrderReview_jsx("div", {
        className: "cart-item__model-container"
      }, OrderReview_jsx("span", {
        className: "order-item__small-text"
      }, OrderReview_jsx(external_react_localize_redux_["Translate"], {
        id: "orders.sold-by"
      })), OrderReview_jsx("span", {
        className: "sky-text-link"
      }, (_this$state$data9 = this.state.data) === null || _this$state$data9 === void 0 ? void 0 : _this$state$data9.goods.shopName)))))), OrderReview_jsx("p", {
        className: "order-review__text order-review__text--mobile-center"
      }, OrderReview_jsx(external_react_localize_redux_["Translate"], {
        id: "orders.rate-this"
      })), OrderReview_jsx(common["B" /* StarRating */], {
        name: "rating",
        starCount: 5,
        value: this.state.data.comment.reviewPoint,
        onStarClick: value => this.handleStarClick(value)
      }), OrderReview_jsx(external_react_slidedown_default.a, null, this.state.showRatingInput && OrderReview_jsx(external_react_localize_redux_["Translate"], null, ({
        translate: t
      }) => {
        var _this$state, _this$state$data10;

        return OrderReview_jsx(external_react_default.a.Fragment, null, OrderReview_jsx("textarea", {
          placeholder: t("orders.comment-placeholder"),
          className: "gray__input order-review__text-area",
          disabled: this.state.lockPage,
          required: true,
          name: "commentText",
          onChange: event => {
            this.setState({
              commentText: event.target.value
            });
          },
          value: (_this$state = this.state) === null || _this$state === void 0 ? void 0 : (_this$state$data10 = _this$state.data) === null || _this$state$data10 === void 0 ? void 0 : _this$state$data10.comment.commentText,
          onBlur: e => {
            Object(formValidator["d" /* validateEmpty */])({
              name: 'commentText',
              value: e.target.value,
              handler: this.setErrors,
              lang: this.lang
            });
          }
        }), OrderReview_jsx(common["k" /* FormErrorMsg */], {
          show: this.state.errors["commentText"],
          msg: this.state.errors["commentText"]
        }), OrderReview_jsx("label", {
          htmlFor: "pros",
          className: "order-review__label"
        }, OrderReview_jsx(external_react_localize_redux_["Translate"], {
          id: "orders.pros"
        })), OrderReview_jsx(common["v" /* MultiAddInput */], {
          disabled: this.state.lockPage,
          itemColor: "#3ad976",
          itemBgColor: "#f0fdf4",
          name: "pros",
          handleAddClick: text => this.handleAddClick(text, true),
          handleCloseClick: index => this.handleCloseClick(index, true),
          items: this.state.prosItems,
          placeholder: t("orders.pros-placeholder")
        }), OrderReview_jsx("label", {
          htmlFor: "cons",
          className: "order-review__label"
        }, OrderReview_jsx(external_react_localize_redux_["Translate"], {
          id: "orders.cons"
        })), OrderReview_jsx(common["v" /* MultiAddInput */], {
          disabled: this.state.lockPage,
          itemColor: "#f07040",
          itemBgColor: "#fef0eb",
          handleAddClick: text => this.handleAddClick(text, false),
          handleCloseClick: index => this.handleCloseClick(index, false),
          items: this.state.consItems,
          name: "cons",
          placeholder: t("orders.cons-placeholder")
        }));
      })), OrderReview_jsx("div", {
        className: "order-review__ques"
      }, (_this$state$data$ques = this.state.data.questions) === null || _this$state$data$ques === void 0 ? void 0 : _this$state$data$ques.map((item, index) => {
        var _this$state$data11, _this$state$data11$co, _this$state$data11$co2;

        let rateValue = null;
        const findAnswerIndex = (_this$state$data11 = this.state.data) === null || _this$state$data11 === void 0 ? void 0 : (_this$state$data11$co = _this$state$data11.comment) === null || _this$state$data11$co === void 0 ? void 0 : (_this$state$data11$co2 = _this$state$data11$co.shopSurveyAnswers) === null || _this$state$data11$co2 === void 0 ? void 0 : _this$state$data11$co2.findIndex(x => x.fkQuestionId == item.queId);

        if (findAnswerIndex != -1 && findAnswerIndex != undefined) {
          var _this$state$data$comm3, _this$state$data$comm4;

          rateValue = (_this$state$data$comm3 = this.state.data.comment) === null || _this$state$data$comm3 === void 0 ? void 0 : (_this$state$data$comm4 = _this$state$data$comm3.shopSurveyAnswers[findAnswerIndex]) === null || _this$state$data$comm4 === void 0 ? void 0 : _this$state$data$comm4.ansValue;
        }

        return OrderReview_jsx("div", {
          key: item.queId,
          className: "order-review__ques-item"
        }, OrderReview_jsx("p", {
          className: "order-review__text"
        }, item.questionText), OrderReview_jsx("div", null, OrderReview_jsx(common["B" /* StarRating */], {
          name: "rating",
          starCount: 5,
          value: rateValue,
          onStarClick: value => this.handleQuestionStarClick(value, item)
        })));
      })), this.state.lockPage == false ? OrderReview_jsx(external_react_default.a.Fragment, null, OrderReview_jsx(Responsive["f" /* ProtraitPhonesAndBigger */], null, OrderReview_jsx("button", {
        onClick: this.submitReview.bind(this),
        className: "primary-btn order-review__submit-btn"
      }, this.state.submitLoading ? OrderReview_jsx(common["s" /* Loading */], {
        type: "white",
        width: "20px",
        height: "20px"
      }) : OrderReview_jsx(external_react_localize_redux_["Translate"], {
        id: "orders.submit-review"
      }))), OrderReview_jsx(Responsive["e" /* ProtraitPhones */], null, OrderReview_jsx("div", {
        className: "checkout-fix justify-content-center"
      }, OrderReview_jsx("button", {
        onClick: this.submitReview.bind(this),
        className: "primary-btn returns__add-btn"
      }, OrderReview_jsx(external_react_localize_redux_["Translate"], {
        id: "orders.submit-review"
      }))))) : null))));
    } else {
      return OrderReview_jsx("div", null);
    }
  }

}

const OrderReview_mapStateToProps = state => {
  return {
    lang: Object(appConfigSlice["h" /* selectLang */])(state),
    curr: Object(appConfigSlice["g" /* selectCurr */])(state)
  };
};

/* harmony default export */ var OrdersLayouts_OrderReview = (Object(external_react_redux_["connect"])(OrderReview_mapStateToProps)(OrderReview_OrderReview));
// EXTERNAL MODULE: ./assets/icons/ajyal-wallet.png
var ajyal_wallet = __webpack_require__("p+aC");
var ajyal_wallet_default = /*#__PURE__*/__webpack_require__.n(ajyal_wallet);

// EXTERNAL MODULE: external "react-dropdown"
var external_react_dropdown_ = __webpack_require__("7+Mu");

// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__("CSOn");

// EXTERNAL MODULE: ./assets/icons/correct.svg
var correct = __webpack_require__("3L5Z");

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Orders/OrdersLayouts/CancelResult.jsx
var CancelResult_jsx = external_react_default.a.createElement;








/* harmony default export */ var CancelResult = (({
  orderBackLink,
  content,
  currency,
  lang
}) => {
  return CancelResult_jsx("div", {
    className: "mt-4"
  }, CancelResult_jsx(common["a" /* Alert */], {
    to: orderBackLink,
    topText: CancelResult_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.cancel-msg2"
    }),
    btnText: CancelResult_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.back-order"
    })
  }), content === null || content === void 0 ? void 0 : content.map((item, index) => {
    return CancelResult_jsx(external_react_default.a.Fragment, null, CancelResult_jsx(common["c" /* BoxStyle2 */], {
      className: "cancel-result"
    }, CancelResult_jsx(OrderItem, {
      data: item,
      key: item.itemId,
      currency: currency,
      lang: lang,
      withoutRightBox: "true"
    })));
  }));
});
// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Orders/OrdersLayouts/CancelOrders.jsx
var CancelOrders_jsx = external_react_default.a.createElement;

function CancelOrders_extends() { CancelOrders_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CancelOrders_extends.apply(this, arguments); }

function CancelOrders_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























class CancelOrders_CancelOrders extends external_react_default.a.Component {
  constructor(props) {
    super(props); // console.log(this.props.content2,"----------");

    CancelOrders_defineProperty(this, "showResultPage", async () => {
      if (this.state.selectedItems.some(x => x.fkCancelingReasonId == 0) == true) {
        external_react_toastify_["toast"].error(Object(helpers["c" /* getErrorMsg */])(this.props.lang, "reason-error"), Object(toast["a" /* getToastConfig */])());
        return;
      }

      try {
        this.setState({
          showButtonLoader: true
        });
        const result = await client_submitCancelRequest(this.state.selectedItems);
        this.setState({
          showButtonLoader: false
        });

        if (result.status == 200) {
          external_react_toastify_["toast"].success(Object(helpers["c" /* getErrorMsg */])(this.props.lang, "return-req"), Object(toast["a" /* getToastConfig */])());
          this.setState({
            showResultPage: true,
            cancelResultData: result.result
          });
        }
      } catch (error) {
        var _error$response;

        this.setState({
          showButtonLoader: false
        });
        external_react_toastify_["toast"].error((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data.message, Object(toast["a" /* getToastConfig */])());
      }
    });

    CancelOrders_defineProperty(this, "handleStarClick", () => {
      if (!this.state.showRatingInput) {
        this.setState({
          showRatingInput: true
        });
      }
    });

    CancelOrders_defineProperty(this, "getListCancelData", async () => {
      this.setState({
        showLoader: true
      });
      const result = await client_getCancelList(this.props.match.params.id);
      this.setState({
        showLoader: false
      });
      this.setState({
        data: result.data.result
      });
    });

    CancelOrders_defineProperty(this, "getListCancelReason", async () => {
      const result = await client_getCancelReasonList();
      let options = [];
      result.result.forEach(element => {
        options.push({
          value: element.reasonId,
          label: element.reasonTitle
        });
      });
      this.setState({
        cancelReasonData: options
      });
    });

    CancelOrders_defineProperty(this, "handleSelectReason", (itemId, index, reason) => {
      const items = this.state.selectedItems;
      items.find(c => c.fkOrderItemId == itemId).fkCancelingReasonId = reason.value;
      const reasonItem = this.state.selectedReasopnOPtions;
      reasonItem[index] = reason;
      this.setState({
        selectedItems: items,
        selectedReasopnOPtions: reasonItem
      });
    });

    this.state = {
      selectedItems: [],
      showResultPage: false,
      showLoader: false,
      data: [],
      cancelReasonData: [],
      selectedReasopnOPtions: [],
      cancelResultData: []
    };
  }

  handleItemSelect(SelecetdItemData) {
    let newItemState = [];

    for (let item of SelecetdItemData) {
      const orderItem = this.state.data.find(x => x.itemId == item.value);
      const datas = {};
      datas.fkOrderId = this.props.match.params.id;
      datas.fkOrderItemId = orderItem.itemId;
      datas.fkCancelingReasonId = 0;
      newItemState.push(datas);
    }

    this.setState({
      selectedItems: newItemState
    });
  }

  componentDidMount() {
    this.getListCancelData();
    this.getListCancelReason();
  }

  renderQuestions(itemId, index) {
    return CancelOrders_jsx("div", {
      className: "order-cancel__slide-cnt mt-2 mt-md-0"
    }, CancelOrders_jsx("div", {
      className: "cart-item__quantity order-cancel__que"
    }, CancelOrders_jsx(Responsive["f" /* ProtraitPhonesAndBigger */], null, CancelOrders_jsx("span", {
      className: "order-cancel__text"
    }, CancelOrders_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.cancel-msg1"
    }))), CancelOrders_jsx(external_react_select_default.a, {
      className: "react-select",
      options: this.state.cancelReasonData,
      onChange: this.handleSelectReason.bind(event, itemId, index),
      placeholder: CancelOrders_jsx(external_react_localize_redux_["Translate"], {
        id: "returns.select-reason-place"
      }),
      value: this.state.selectedReasopnOPtions[index],
      required: true
    })));
  }

  renderBoxHeader() {
    return CancelOrders_jsx("header", {
      className: "mapAddress__header"
    }, CancelOrders_jsx(external_react_router_dom_["Link"], {
      to: this.props.match.url.split("/").slice(0, -1).join("/"),
      className: "orderDetail__backlink"
    }, CancelOrders_jsx(back["ReactComponent"], {
      className: "mapAddress__back-icon"
    }), CancelOrders_jsx("div", {
      className: "orders__item-header"
    }, CancelOrders_jsx("h2", {
      className: "orders__item-cnt-header"
    }, CancelOrders_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.select-for-cancel"
    })))));
  }

  render() {
    var _this$state$data$, _this$state$data;

    return CancelOrders_jsx("div", null, CancelOrders_jsx(external_react_toastify_["ToastContainer"], CancelOrders_extends({
      rtl: Object(isRtl["a" /* isRtl */])(this.props.lang)
    }, Object(toast["a" /* getToastConfig */])())), CancelOrders_jsx(external_react_transition_group_["SwitchTransition"], null, CancelOrders_jsx(external_react_transition_group_["CSSTransition"], {
      classNames: "user-panel__routes",
      timeout: 200,
      key: this.state.showResultPage ? 1 : 2
    }, this.state.showResultPage ? CancelOrders_jsx(CancelResult, {
      content: this.state.cancelResultData,
      currency: this.props.currency,
      lang: this.props.lang,
      orderBackLink: this.props.match.url.split("/").slice(0, -1).join("/")
    }) : CancelOrders_jsx("section", {
      className: "order-cancel"
    }, CancelOrders_jsx(common["c" /* BoxStyle2 */], {
      headerContent: this.renderBoxHeader()
    }, CancelOrders_jsx(Responsive["f" /* ProtraitPhonesAndBigger */], null, CancelOrders_jsx("div", {
      className: "order-cart__credit-cnt"
    }, ((_this$state$data$ = this.state.data[0]) === null || _this$state$data$ === void 0 ? void 0 : _this$state$data$.customerRefound) == 2 ? CancelOrders_jsx(external_react_default.a.Fragment, null, CancelOrders_jsx(credit_card["ReactComponent"], {
      className: "order-cart__credit-icon"
    }), CancelOrders_jsx("span", {
      className: "order-cancel__card"
    }, CancelOrders_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.card-refund"
    }))) : CancelOrders_jsx(external_react_default.a.Fragment, null, CancelOrders_jsx("img", {
      src: ajyal_wallet_default.a,
      className: "payment__icon",
      alt: "cash icon"
    }), CancelOrders_jsx("span", {
      className: "order-cancel__card"
    }, CancelOrders_jsx(external_react_localize_redux_["Translate"], {
      id: "preference.wallet"
    })))), CancelOrders_jsx("p", {
      className: "order-cancel__text"
    }, CancelOrders_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.card-msg1"
    }), CancelOrders_jsx("br", null), CancelOrders_jsx("a", {
      href: "/bhd-en/panel/preference",
      className: "order-cancel__link"
    }, CancelOrders_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.de-re"
    })))), CancelOrders_jsx("div", {
      className: "row no-gutters"
    }, CancelOrders_jsx("div", {
      className: "col-12"
    }, CancelOrders_jsx(common["A" /* SelectBox3 */], {
      multiSelect: true,
      onChange: this.handleItemSelect.bind(this)
    }, (_this$state$data = this.state.data) === null || _this$state$data === void 0 ? void 0 : _this$state$data.map((item, index) => {
      return CancelOrders_jsx(external_react_default.a.Fragment, null, CancelOrders_jsx(common["A" /* SelectBox3 */].SelectItem, {
        name: index,
        value: item.itemId
      }, CancelOrders_jsx(OrderItem, {
        data: item,
        key: item.itemId,
        currency: this.props.currency,
        lang: this.props.lang,
        withoutRightBox: "true"
      })), CancelOrders_jsx(external_react_slidedown_default.a, null, this.state.selectedItems.find(c => c.fkOrderItemId == item.itemId) && this.renderQuestions(item.itemId, index)));
    })), CancelOrders_jsx(Responsive["f" /* ProtraitPhonesAndBigger */], null, CancelOrders_jsx("div", {
      className: "order-cancel__btn-cnt"
    }, this.state.selectedItems.length > 0 && CancelOrders_jsx("button", {
      onClick: this.showResultPage,
      className: "primary-btn order-review__submit-btn"
    }, this.state.showButtonLoader ? CancelOrders_jsx(common["s" /* Loading */], {
      type: "white",
      width: "20px",
      height: "20px"
    }) : CancelOrders_jsx("span", null, CancelOrders_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.cancel"
    }), "\xA0 ", this.state.selectedItems.length, "\xA0 ", CancelOrders_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.items"
    }))))), CancelOrders_jsx(Responsive["e" /* ProtraitPhones */], null, CancelOrders_jsx("div", {
      className: "checkout-fix justify-content-center"
    }, this.state.selectedItems.length > 0 && CancelOrders_jsx("button", {
      onClick: this.showResultPage,
      className: "primary-btn order-review__submit-btn"
    }, this.state.showButtonLoader ? CancelOrders_jsx(common["s" /* Loading */], {
      type: "white",
      width: "20px",
      height: "20px"
    }) : CancelOrders_jsx("span", null, CancelOrders_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.cancel"
    }), "\xA0 ", this.state.selectedItems.length, "\xA0 ", CancelOrders_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.items"
    }))))))))))));
  }

}

const CancelOrders_mapStateToProps = state => {
  return {
    lang: Object(appConfigSlice["h" /* selectLang */])(state),
    currency: Object(appConfigSlice["g" /* selectCurr */])(state)
  };
};

/* harmony default export */ var OrdersLayouts_CancelOrders = (Object(external_react_redux_["connect"])(CancelOrders_mapStateToProps)(CancelOrders_CancelOrders));
// EXTERNAL MODULE: external "react-custom-scrollbars"
var external_react_custom_scrollbars_ = __webpack_require__("qC9r");

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Orders/Orders.jsx
var Orders_jsx = external_react_default.a.createElement;

function Orders_extends() { Orders_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Orders_extends.apply(this, arguments); }



















const Orders_renderBoxHeader = () => {
  return Orders_jsx("div", {
    className: "profile-edit__header-container"
  }, Orders_jsx("h2", {
    className: "profile-edit__box-header"
  }, Orders_jsx(external_react_localize_redux_["Translate"], {
    id: "orders.orders"
  })), Orders_jsx(Responsive["d" /* LandScapePhonesAndBigger */], null, Orders_jsx("p", {
    className: "profile-edit__box-subheader"
  }, Orders_jsx(external_react_localize_redux_["Translate"], {
    id: "orders.orders-des1"
  }))));
};

/* harmony default export */ var Orders = (() => {
  const {
    0: emptyOrdersPage,
    1: setEmptyOrdersPage
  } = Object(external_react_["useState"])(true);
  const {
    0: pageNumber,
    1: setPageNumber
  } = Object(external_react_["useState"])(1);
  const {
    0: pageSize,
    1: setPageSize
  } = Object(external_react_["useState"])(3);
  const {
    0: orderItems,
    1: setOrderItems
  } = Object(external_react_["useState"])([]);
  const {
    0: totalNumber,
    1: setTotalNumber
  } = Object(external_react_["useState"])(0);
  const {
    path,
    url
  } = Object(external_react_router_["useRouteMatch"])(); //this code is for Development purpose

  const lang = Object(external_react_redux_["useSelector"])(state => {
    return state.appConfig.lang.code;
  });
  const currency = Object(external_react_redux_["useSelector"])(state => {
    return state.appConfig.currency.name;
  }); // const activeLang = langs.find((lang) => {
  //   return lang.active === true;
  // });

  const order_pre = "http://ajyal.webtreeonline.com/Uploads/Images/Goods";
  const download_pre = "http://ajyal.webtreeonline.com/Uploads/Private/File";
  Object(external_react_["useEffect"])(() => {
    const res = getData(pageNumber);
    return () => {};
  }, []);

  const getData = async pagenumber => {
    const response = await client_getOrderList({
      id: 0,
      pageSize: pageSize,
      pageNumber: pagenumber
    });
    setTotalNumber(response.result.count);
    setOrderItems(response.result.data);

    if (response.result.count == 0) {
      setEmptyOrdersPage(true);
    } else {
      setEmptyOrdersPage(false);
    }
  };

  const pageChangedAction = async pagenumber => {
    setPageNumber(pagenumber);
    const res = await getData(pagenumber);
  };

  return Orders_jsx(external_react_router_["Switch"], null, Orders_jsx(external_react_router_["Route"], {
    strict: true,
    path: `${path}/:id/cancel`,
    render: routeProps => {
      return Orders_jsx(OrdersLayouts_CancelOrders, routeProps);
    }
  }), Orders_jsx(external_react_router_["Route"], {
    strict: true,
    path: `${path}/:id/:orderItemId/:good`,
    render: routeProps => {
      return Orders_jsx(OrdersLayouts_OrderReview, routeProps);
    }
  }), Orders_jsx(external_react_router_["Route"], {
    strict: true,
    path: `${path}/:id`,
    render: routeProps => {
      return Orders_jsx(OrdersLayouts_OrderDetail, routeProps);
    }
  }), Orders_jsx(external_react_router_["Route"], {
    path: `${path}`
  }, emptyOrdersPage ? Orders_jsx(NoOrdersPage, null) : Orders_jsx(common["b" /* BoxStyle1 */], {
    headerContent: Orders_renderBoxHeader()
  }, Orders_jsx("section", {
    className: "orders"
  }, orderItems.map(item => {
    return Orders_jsx("article", {
      className: "orders__item-cnt"
    }, Orders_jsx(Responsive["c" /* LandScapePhones */], null, Orders_jsx(external_react_router_dom_["Link"], {
      to: `${url}/${item.orderId}`
    }, Orders_jsx("header", {
      className: "orders__item-header flex-wrap no-gutters"
    }, Orders_jsx("img", {
      src: img_linear_arrow_default.a,
      alt: "arrow",
      className: "orders__mobile-arrow"
    }), Orders_jsx("h2", {
      className: "orders__item-cnt-header"
    }, Orders_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.orders"
    }), " \xA0", item.trackingCode), Orders_jsx("span", {
      className: "col-md-auto col-12 orders__header-gray-text"
    }, Orders_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.placed-on"
    }), " ", item.placedDateTime)))), Orders_jsx(Responsive["d" /* LandScapePhonesAndBigger */], null, Orders_jsx("header", {
      className: "orders__item-header flex-wrap no-gutters"
    }, Orders_jsx("h2", {
      className: "orders__item-cnt-header"
    }, Orders_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.orders"
    }), " \xA0", item.trackingCode), Orders_jsx("span", {
      className: "col-md-auto col-12 orders__header-gray-text"
    }, Orders_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.placed-on"
    }), " ", Object(external_date_fns_["format"])(new Date(item.placedDateTime), "MMM dd , yyyy")))), Orders_jsx("div", {
      className: "orders__order-cnt"
    }, Orders_jsx(external_react_custom_scrollbars_["Scrollbars"], {
      renderView: props => Orders_jsx("div", Orders_extends({}, props, {
        className: "deliveryPanel__scrol-view"
      })) // renderTrackVertical={(props) => (
      //   <div
      //     {...props}
      //     className="deliveryPanel__track-vertical"
      //   />
      // )}
      // Hide delay in ms autoHideTimeout={1000}
      // Duration for hide animation in ms. autoHideDuration={200}
      ,
      style: {
        width: "100%",
        height: "203px"
      }
    }, Orders_jsx("ul", {
      className: "orders__orders-list"
    }, item === null || item === void 0 ? void 0 : item.items.map(orderItems => {
      return Orders_jsx("li", {
        className: "orders__order-item"
      }, orderItems.isDownloadable ? Orders_jsx("a", {
        target: "_blank",
        href: `${download_pre}/${orderItems.goodsId}/${orderItems.downloadUrl}`
      }, Orders_jsx("figure", {
        className: "orders__img-fig"
      }, Orders_jsx("img", {
        src: `${order_pre}/${orderItems.goodsId}/${orderItems.goodsImage}`,
        alt: "item",
        className: "orders__img"
      }), !orderItems.isDownloadable && Orders_jsx("figcaption", {
        className: "orders__fig-cap"
      }, Orders_jsx(common["q" /* GoodSituation */], {
        id: orderItems.statusId,
        title: orderItems.statusTitle
      })))) : Orders_jsx("a", null, Orders_jsx("figure", {
        className: "orders__img-fig"
      }, Orders_jsx("img", {
        src: `${order_pre}/${orderItems.goodsId}/${orderItems.goodsImage}`,
        alt: "item",
        className: "orders__img"
      }), !orderItems.isDownloadable && Orders_jsx("figcaption", {
        className: "orders__fig-cap"
      }, Orders_jsx(common["q" /* GoodSituation */], {
        id: orderItems.statusId,
        title: orderItems.statusTitle
      })))));
    }))), Orders_jsx("div", {
      className: "mt-5 mt-md-0 orders__right-cnt"
    }, Orders_jsx("div", {
      className: "orders__right-items"
    }, Orders_jsx("span", {
      className: "orders__text-bold"
    }, Orders_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.order-sum"
    }), Orders_jsx("span", {
      className: "orders__text-small"
    }, item.orderItemCount), Orders_jsx("span", {
      className: "orders__text-small"
    }, Orders_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.items"
    }))), Orders_jsx("span", {
      className: "mt-3 orders__text-bold d-block"
    }, currency, " ", item.finalPrice.toLocaleString()), Orders_jsx(Responsive["d" /* LandScapePhonesAndBigger */], null, Orders_jsx(external_react_router_dom_["Link"], {
      to: `${url}/${item.orderId}`,
      className: "primary-btn orders__btn"
    }, Orders_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.detail-view"
    }), Orders_jsx("img", {
      className: "orders__btn-arrow-icon",
      src: img_down_arrow_white_default.a,
      alt: "arrow icon"
    })))))));
  })), Orders_jsx(common["x" /* Pager */], {
    count: Math.ceil(totalNumber / pageSize),
    activeItem: pageNumber,
    onPageClick: pageNumber => {
      pageChangedAction(pageNumber);
    }
  })))) // <BoxStyle1 headerContent={renderBoxHeader()}>
  //   <section className="orders">
  //   </section>
  // </BoxStyle1>
  ;
});

const Orders_mapStateToProps = state => {
  return {
    lang: Object(appConfigSlice["h" /* selectLang */])(state)
  };
};
// EXTERNAL MODULE: ./components/app/pages/UserPanel/PanelPages/Addresses/AddressesLayouts/NoAddressesPage.jsx
var NoAddressesPage = __webpack_require__("RPl1");

// EXTERNAL MODULE: ./assets/icons/edit.svg
var edit = __webpack_require__("7ykv");

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Addresses/AddressesLayouts/AddAddressStep1.jsx
var AddAddressStep1_jsx = external_react_default.a.createElement;

function AddAddressStep1_extends() { AddAddressStep1_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AddAddressStep1_extends.apply(this, arguments); }


















/* harmony default export */ var AddAddressStep1 = (({
  handleSituation,
  data,
  editItem,
  setData
}) => {
  const {
    0: mobile,
    1: setMobile
  } = Object(external_react_["useState"])("");
  const {
    0: errors,
    1: setErrors
  } = Object(external_react_["useState"])({});
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const curr = Object(external_react_redux_["useSelector"])(appConfigSlice["g" /* selectCurr */]);
  const {
    0: firstname,
    1: setFirstname
  } = Object(external_react_["useState"])("");
  const {
    0: lastname,
    1: setLanstname
  } = Object(external_react_["useState"])("");
  const {
    0: postalCode,
    1: setPostalCode
  } = Object(external_react_["useState"])("");
  const {
    0: phoneCode,
    1: setPhoneCode
  } = Object(external_react_["useState"])("");
  const {
    0: addressId,
    1: setAddressId
  } = Object(external_react_["useState"])(0);
  const {
    0: addressTitle,
    1: setAddressTitle
  } = Object(external_react_["useState"])("");
  const {
    0: selectedCountry,
    1: setSelectedCountry
  } = Object(external_react_["useState"])(0);
  const {
    0: isDisableCountry,
    1: setDisableCountry
  } = Object(external_react_["useState"])(false);
  const {
    0: selectedCity,
    1: setSelectedCity
  } = Object(external_react_["useState"])(0);
  const {
    0: selectedProvince,
    1: setSelectedProvince
  } = Object(external_react_["useState"])(0);
  const {
    0: countryItems,
    1: setCountryItems
  } = Object(external_react_["useState"])([]);
  const {
    0: cityItems,
    1: setCityItems
  } = Object(external_react_["useState"])([]);
  const {
    0: provinceItems,
    1: setProvinceItems
  } = Object(external_react_["useState"])([]);
  const {
    0: addressEmptyError,
    1: setAddressEmptyError
  } = Object(external_react_["useState"])(false);
  const {
    0: countryEmptyError,
    1: setCountryEmptyError
  } = Object(external_react_["useState"])(false);
  const {
    0: cityEmptyError,
    1: setcityEmptyError
  } = Object(external_react_["useState"])(false);
  const {
    0: provinceEmptyError,
    1: setProvinceEmptyError
  } = Object(external_react_["useState"])(false);
  const {
    0: isEditState,
    1: setIsEditState
  } = Object(external_react_["useState"])(false);
  const {
    0: submitLoading,
    1: setSubmitLoading
  } = Object(external_react_["useState"])(false);
  const history = Object(external_react_router_dom_["useHistory"])();
  Object(external_react_["useEffect"])(() => {
    if (editItem != null) {
      setIsEditState(true);
      setEditData();
    } else {
      getCountris();
    }

    return () => {
      editItem = null;
    };
  }, []);

  function compare(a, b) {
    return a.label > b.label ? 1 : b.label > a.label ? -1 : 0;
  }

  const setEditData = async () => {
    if (data.address == undefined) {
      setAddressTitle(editItem.address);
      data.address = editItem.address;
      data.Location = {
        lat: editItem.locationX,
        lng: editItem.locationY
      };
    }

    setAddressId(editItem.addressId);
    setPostalCode(editItem.postalCode);
    setLanstname(editItem.transfereeFamily);
    setFirstname(editItem.transfereeName);
    setMobile(editItem.transfereeMobile);
    let city = {
      value: editItem.fkCityId,
      label: editItem.cityName
    };
    let province = {
      value: editItem.fkProvinceId,
      label: editItem.provinceName
    };
    let country = {
      value: editItem.fkCountryId,
      label: editItem.countryName,
      phoneCode: editItem.phoneCode
    };
    await getCountris();

    if (data.iso === undefined) {
      await handleCountryChange(country);
      setSelectedCountry(country);
      setSelectedCity(city);
      setSelectedProvince(province);
      setDisableCountry(true);
    }
  };

  const getAddressHandler = () => {
    handleSituation({
      type: "showMap"
    });
  };

  const getCountris = async () => {
    const result = await Object(clientShop["f" /* client_getActiveCountries */])();
    let countries = [];
    result.result.forEach(item => {
      countries.push({
        value: item.countryId,
        label: item.countryTitle,
        iso: item.iso,
        phoneCode: item.phoneCode
      });
    });
    countries.sort(compare);
    setCountryItems(countries);

    if (data.iso !== undefined) {
      let currentCountry = countries.filter(x => x.iso === data.iso);

      if (currentCountry.length > 0) {
        setSelectedCountry(currentCountry[0]);
        setAddressTitle(data.address);
        setDisableCountry(true);
        handleCountryChange(currentCountry[0]);
      } else {
        external_react_toastify_["toast"].error(Object(helpers["c" /* getErrorMsg */])(lang, "country-add-address"), Object(toast["a" /* getToastConfig */])());
        setDisableCountry(false);
        setSelectedCountry(0);
        setSelectedCity(0);
        setPhoneCode("");
        return;
      }
    }
  };

  const handleCountryChange = async item => {
    setPhoneCode(item.phoneCode);

    if (item.value != (selectedCountry === null || selectedCountry === void 0 ? void 0 : selectedCountry.value)) {
      setSelectedProvince(0);
      setSelectedCity(0);
    }

    const result = await Object(clientShop["g" /* client_getActiveProvince */])(item.value);
    let provinces = [];
    result.result.forEach(item => {
      provinces.push({
        value: item.provinceId,
        label: item.provinceName
      });
    });
    provinces.sort(compare);
    setProvinceItems(provinces);
  };

  const handleProvinceChange = async item => {
    const result = await Object(clientShop["e" /* client_getActiveCities */])(item.value);

    if (item.value != (selectedProvince === null || selectedProvince === void 0 ? void 0 : selectedProvince.value)) {
      setSelectedCity(0);
    }

    let cities = [];
    result.result.forEach(item => {
      cities.push({
        value: item.cityId,
        label: item.cityTitle
      });
    });
    cities.sort(compare);
    setCityItems(cities);
    setProvinceEmptyError(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (submitLoading) return;

    if (data.address == undefined) {
      setAddressEmptyError(true);
      return;
    }

    if (selectedCountry == 0) {
      setCountryItems(true);
      return;
    }

    if (selectedProvince == 0) {
      setProvinceEmptyError(true);
      return;
    }

    if (selectedCity == 0) {
      setcityEmptyError(true);
      return;
    }

    for (let key in errors) {
      if (errors[key]) {
        external_react_toastify_["toast"].error(Object(helpers["c" /* getErrorMsg */])(lang, "error-detected"), Object(toast["a" /* getToastConfig */])());
        return;
      }
    }

    setSubmitLoading(true);

    if (!isEditState) {
      const result = await Object(clientShop["b" /* client_addAddress */])({
        transfereeMobile: mobile,
        postalCode: postalCode,
        address: data.address,
        locationX: data.Location.lat,
        locationY: data.Location.lng,
        transfereeName: firstname,
        transfereeFamily: lastname,
        fkCountryId: selectedCountry.value,
        fkCityId: selectedCity.value,
        fkProvinceId: selectedProvince.value,
        isDefualt: data.isDefault
      });

      if (result.status == 200) {
        external_react_toastify_["toast"].success(Object(helpers["c" /* getErrorMsg */])(lang, "success-add-address"), Object(toast["a" /* getToastConfig */])());
        setcityEmptyError(false);
        setProvinceEmptyError(false);
        setAddressEmptyError(false);
        setCountryEmptyError(false);
        setSubmitLoading(false);
        setData({
          phoneNumberVeri: {
            requestId: result.result.requestId,
            addressId: result.result.addressId,
            phoneNumber: mobile,
            phoneIso: selectedCountry.iso,
            phoneCode: phoneCode
          }
        });
        handleSituation({
          type: "phoneveri"
        }); // history.push("/" + curr + "-" + lang + "/panel/addresses");
      }
    } else {
      const result = await Object(clientShop["d" /* client_editAddAddress */])({
        transfereeMobile: mobile,
        postalCode: postalCode,
        address: data.address,
        locationX: data.Location.lat,
        locationY: data.Location.lng,
        transfereeName: firstname,
        transfereeFamily: lastname,
        fkCountryId: selectedCountry.value,
        fkCityId: selectedCity.value,
        fkProvinceId: selectedProvince.value,
        addressId: addressId,
        cityName: selectedCity.label,
        countryName: selectedCountry.label
      });

      if (result.status == 200) {
        external_react_toastify_["toast"].success(Object(helpers["c" /* getErrorMsg */])(lang, "success-update-address"), Object(toast["a" /* getToastConfig */])());
        editItem = null;
        setcityEmptyError(false);
        setProvinceEmptyError(false);
        setAddressEmptyError(false);
        setCountryEmptyError(false);
        setSubmitLoading(false);
        setIsEditState(true);
        history.push("/" + curr + "-" + lang + "/panel/addresses");
      }
    }
  };

  return AddAddressStep1_jsx(external_react_localize_redux_["Translate"], null, ({
    translate: t
  }) => {
    return AddAddressStep1_jsx("form", {
      onSubmit: $event => {
        handleSubmit($event);
      }
    }, AddAddressStep1_jsx("section", {
      className: "add-address-step1 no-gutters"
    }, AddAddressStep1_jsx(external_react_toastify_["ToastContainer"], AddAddressStep1_extends({
      rtl: Object(isRtl["a" /* isRtl */])(lang)
    }, Object(toast["a" /* getToastConfig */])())), AddAddressStep1_jsx("div", {
      className: "row no-gutters justify-content-between"
    }, AddAddressStep1_jsx("div", {
      className: "col-md-6"
    }, AddAddressStep1_jsx("label", {
      className: "gray__form-label add-address-step1__item"
    }, AddAddressStep1_jsx("div", {
      className: "d-flex justify-content-between add-address-step1__mapinput gray__input clearfix"
    }, AddAddressStep1_jsx("div", {
      className: "col"
    }, AddAddressStep1_jsx("span", {
      className: "add-address-step1__mapinput-text"
    }, AddAddressStep1_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.setmap"
    })), AddAddressStep1_jsx("span", {
      className: "add-address-step1__mapinput-value"
    }, addressTitle)), AddAddressStep1_jsx("button", {
      onClick: getAddressHandler,
      className: "add-address-step1__mapinput-btn"
    }, AddAddressStep1_jsx(edit["ReactComponent"], null)))), addressEmptyError && AddAddressStep1_jsx("span", {
      className: "custom-error"
    }, AddAddressStep1_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.empty-address-error"
    }))), AddAddressStep1_jsx("div", {
      className: "col-md-6"
    }, AddAddressStep1_jsx("label", {
      className: "gray__form-label add-address-step1__item"
    }, AddAddressStep1_jsx("span", {
      className: "auth__input-label"
    }, AddAddressStep1_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.country"
    }), AddAddressStep1_jsx("span", {
      className: "input-required"
    }, "*")), AddAddressStep1_jsx(external_react_select_default.a, {
      className: "react-select",
      options: countryItems,
      isDisabled: isDisableCountry,
      onChange: item => {
        handleCountryChange(item);
        setSelectedCountry(item);
      },
      placeholder: t("addresses.country-placeholder"),
      value: selectedCountry,
      required: true
    })), countryEmptyError && AddAddressStep1_jsx("span", {
      className: "country-error"
    }, AddAddressStep1_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.country-placeholder"
    })))), AddAddressStep1_jsx("div", {
      className: "row no-gutters justify-content-between"
    }, AddAddressStep1_jsx("div", {
      className: "col-md-6"
    }, AddAddressStep1_jsx("label", {
      className: "gray__form-label add-address-step1__item"
    }, AddAddressStep1_jsx("span", {
      className: "auth__input-label"
    }, AddAddressStep1_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.province"
    }), AddAddressStep1_jsx("span", {
      className: "input-required"
    }, "*")), AddAddressStep1_jsx(external_react_select_default.a, {
      className: "react-select",
      options: provinceItems,
      onChange: setSelectedProvince,
      onChange: item => {
        handleProvinceChange(item);
        setSelectedProvince(item);
      },
      placeholder: t("addresses.province-placeholder"),
      value: selectedProvince,
      required: true
    })), provinceEmptyError && AddAddressStep1_jsx("span", {
      className: "country-error"
    }, AddAddressStep1_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.province-placeholder"
    }))), AddAddressStep1_jsx("div", {
      className: "col-md-6"
    }, AddAddressStep1_jsx("label", {
      className: "gray__form-label add-address-step1__item"
    }, AddAddressStep1_jsx("span", {
      className: "auth__input-label"
    }, AddAddressStep1_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.city"
    }), AddAddressStep1_jsx("span", {
      className: "input-required"
    }, "*")), AddAddressStep1_jsx(external_react_select_default.a, {
      className: "react-select",
      options: cityItems,
      onChange: item => {
        setSelectedCity(item);
        setcityEmptyError(false);
      },
      placeholder: t("addresses.city-placeholder"),
      value: selectedCity,
      required: true
    })), cityEmptyError && AddAddressStep1_jsx("span", {
      className: "country-error"
    }, AddAddressStep1_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.city-placeholder"
    })))), AddAddressStep1_jsx("div", {
      className: "row no-gutters justify-content-between"
    }, AddAddressStep1_jsx("div", {
      className: "col-md-6"
    }, AddAddressStep1_jsx("label", {
      className: "gray__form-label add-address-step1__item"
    }, AddAddressStep1_jsx("span", {
      className: "gray__input-label"
    }, t("addresses.firstname"), AddAddressStep1_jsx("span", {
      className: "input-required"
    }, "*")), AddAddressStep1_jsx("input", {
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
    }), AddAddressStep1_jsx(common["k" /* FormErrorMsg */], {
      show: errors["firstname"],
      msg: errors["firstname"]
    }))), AddAddressStep1_jsx("div", {
      className: "col-md-6"
    }, AddAddressStep1_jsx("label", {
      className: "gray__form-label add-address-step1__item"
    }, AddAddressStep1_jsx("span", {
      className: "gray__input-label"
    }, t("addresses.lastname"), AddAddressStep1_jsx("span", {
      className: "input-required"
    }, "*")), AddAddressStep1_jsx("input", {
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
    }), AddAddressStep1_jsx(common["k" /* FormErrorMsg */], {
      show: errors["lastname"],
      msg: errors["lastname"]
    })))), AddAddressStep1_jsx("div", {
      className: "row no-gutters justify-content-between"
    }, AddAddressStep1_jsx("div", {
      className: "col-md-6"
    }, AddAddressStep1_jsx("label", {
      className: "gray__form-label add-address-step1__item"
    }, AddAddressStep1_jsx("span", {
      className: "gray__input-label"
    }, t("addresses.mobile-number"), AddAddressStep1_jsx("span", {
      className: "input-required"
    }, "*")), AddAddressStep1_jsx("div", {
      className: "add-address-step1__mobile-cnt"
    }, AddAddressStep1_jsx("span", {
      className: "add-address-step1__mobile-code"
    }, "+", phoneCode), AddAddressStep1_jsx("input", {
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
            iso: selectedCountry.iso
          });
        }
      },
      onBlur: e => {
        Object(formValidator["g" /* validatePhoneNumber */])({
          name: e.target.name,
          value: e.target.value,
          handler: setErrors,
          lang,
          iso: selectedCountry.iso
        });
      }
    })), AddAddressStep1_jsx(common["k" /* FormErrorMsg */], {
      show: errors["phone"],
      msg: errors["phone"]
    }))), AddAddressStep1_jsx("div", {
      className: "col-md-6"
    }, AddAddressStep1_jsx("label", {
      className: "gray__form-label add-address-step1__item"
    }, AddAddressStep1_jsx("span", {
      className: "gray__input-label"
    }, t("addresses.postal-code")), AddAddressStep1_jsx("input", {
      className: "gray__input",
      name: "postalCode",
      placeholder: t("addresses.postal-code-placeholder"),
      type: "text",
      pattern: "[0-9]*",
      value: postalCode,
      onChange: e => {
        setPostalCode(e.target.value);
      }
    }))))), AddAddressStep1_jsx(Responsive["c" /* LandScapePhones */], {
      className: "add-address-step1__check"
    }, AddAddressStep1_jsx("input", {
      type: "checkbox",
      id: "setDefault",
      name: "setDefault",
      value: "Bike"
    }), AddAddressStep1_jsx("label", {
      htmlFor: "setDefault"
    }, t("addresses.set-default-add"))), AddAddressStep1_jsx("div", {
      className: "add-address-step1__btn-cnt"
    }, AddAddressStep1_jsx("button", {
      className: "primary-btn add-address-step1__btn",
      type: "submit"
    }, submitLoading ? AddAddressStep1_jsx(common["s" /* Loading */], {
      type: "white",
      width: "20px",
      height: "20px"
    }) : isEditState ? t("addresses.edit") : t("addresses.save"))));
  });
});
// EXTERNAL MODULE: external "react-verification-input"
var external_react_verification_input_ = __webpack_require__("KGsa");
var external_react_verification_input_default = /*#__PURE__*/__webpack_require__.n(external_react_verification_input_);

// EXTERNAL MODULE: ./lib/api/client/clientCommon.js
var clientCommon = __webpack_require__("hK2O");

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Addresses/AddressesLayouts/AddAddressStep2.jsx
var AddAddressStep2_jsx = external_react_default.a.createElement;

function AddAddressStep2_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function AddAddressStep2_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AddAddressStep2_ownKeys(Object(source), true).forEach(function (key) { AddAddressStep2_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AddAddressStep2_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AddAddressStep2_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const COUNT = 4;
/* harmony default export */ var AddAddressStep2 = (({
  handleSituation,
  addpage,
  data,
  setData
}) => {
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  const curr = Object(external_react_redux_["useSelector"])(appConfigSlice["g" /* selectCurr */]);
  const PNF = external_google_libphonenumber_["PhoneNumberFormat"];
  const phoneUtil = external_google_libphonenumber_["PhoneNumberUtil"].getInstance();
  const history = Object(external_react_router_dom_["useHistory"])();
  const phone = data.phoneCode + data.phoneNumber;
  const number = phoneUtil.parseAndKeepRawInput(phone, data.phoneIso);
  let can_send_new_email = false;

  const handleclick = () => {
    handleSituation({
      type: "next"
    });
  };

  const {
    0: code,
    1: setCode
  } = Object(external_react_["useState"])("");

  const handleCode = ref => {
    setCode(ref.target.value);
  };

  const {
    0: submitLoading,
    1: setSubmitLoading
  } = Object(external_react_["useState"])(false);

  const handleSubmit = async () => {
    if (submitLoading) return;

    if (code.length < COUNT) {
      external_react_toastify_["toast"].error(Object(helpers["c" /* getErrorMsg */])(lang, "code-is-not-valid"), Object(toast["a" /* getToastConfig */])());
      return;
    }

    setSubmitLoading(true);

    try {
      const result = await Object(clientCommon["h" /* client_verifyAddressPhone */])({
        addressId: data.addressId,
        code,
        requestId: data.requestId
      });

      if (result.status == 200) {
        // handleSituation({ type: "addresses" });
        history.push("/" + curr + "-" + lang + "/panel/addresses");
      }
    } catch (err) {
      var _err$response$data, _err$response$data$re;

      const text = (_err$response$data = err.response.data) === null || _err$response$data === void 0 ? void 0 : (_err$response$data$re = _err$response$data.result) === null || _err$response$data$re === void 0 ? void 0 : _err$response$data$re.errorText;
      external_react_toastify_["toast"].error(text || err.response.data.message, Object(toast["a" /* getToastConfig */])());
      setSubmitLoading(false);
    }
  };

  const handleResendMessage = async resetTimer => {
    try {
      const res = await Object(clientCommon["e" /* client_changeMobileNumber */])({
        mobileNumber: data.phoneNumber,
        addressId: data.addressId
      });
      setData({
        phoneNumberVeri: AddAddressStep2_objectSpread(AddAddressStep2_objectSpread({}, data), {}, {
          requestId: res.result.requestId
        })
      });
      can_send_new_email = false;
      resetTimer();
    } catch (err) {
      external_react_toastify_["toast"].error(err.response.data.message, Object(toast["a" /* getToastConfig */])());
      can_send_new_email = true;
    }
  };

  return AddAddressStep2_jsx(external_react_localize_redux_["Translate"], null, ({
    translate: t
  }) => {
    return AddAddressStep2_jsx(external_react_default.a.Fragment, null, AddAddressStep2_jsx("section", {
      className: "add-address-step2"
    }, AddAddressStep2_jsx("div", {
      className: "add-address-step2__col"
    }, AddAddressStep2_jsx("p", {
      className: "add-address-step2__p1"
    }, AddAddressStep2_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.verify"
    })), AddAddressStep2_jsx("p", {
      className: "add-address-step2__p2"
    }, AddAddressStep2_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.verify-des"
    })), AddAddressStep2_jsx("p", {
      className: "add-address-step2__phone"
    }, phoneUtil.format(number, PNF.INTERNATIONAL)), AddAddressStep2_jsx("a", {
      onClick: handleclick,
      className: "add-address-step2__link primary-link"
    }, AddAddressStep2_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.changephone"
    })), AddAddressStep2_jsx("div", {
      className: "add-address-step2__verification-container"
    }, AddAddressStep2_jsx(external_react_verification_input_default.a, {
      placeholder: "",
      inputField: {
        onChange: handleCode
      },
      length: COUNT // getInputRef={handleCode}

    })), AddAddressStep2_jsx("button", {
      onClick: handleSubmit,
      className: "primary-btn add-address-step2__btn"
    }, submitLoading ? AddAddressStep2_jsx(common["s" /* Loading */], {
      type: "white",
      width: "20px",
      height: "20px"
    }) : AddAddressStep2_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.changephone-btn"
    })), AddAddressStep2_jsx("a", {
      onClick: e => {
        e.preventDefault();
        history.push("/" + curr + "-" + lang + "/panel/addresses");
      },
      className: "add-address-step2__link mt-3 d-block primary-link"
    }, AddAddressStep2_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.skip"
    }))), AddAddressStep2_jsx("div", {
      className: "add-address-step2__col"
    }, AddAddressStep2_jsx(build_default.a, {
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

      return AddAddressStep2_jsx(external_react_default.a.Fragment, null, AddAddressStep2_jsx("span", {
        className: "add-address-step2__opt"
      }, AddAddressStep2_jsx(external_react_localize_redux_["Translate"], {
        id: "addresses.dontreceive"
      })), "\xA0\xA0", AddAddressStep2_jsx("span", {
        className: "timer__count ml-3 mr-3"
      }, AddAddressStep2_jsx(build_default.a.Minutes, null), " : ", AddAddressStep2_jsx(build_default.a.Seconds, null)), AddAddressStep2_jsx("a", {
        onClick: e => {
          e.preventDefault();
          if (!can_send_new_email) return;
          handleResendMessage(() => {
            reset();
            start();
          });
        },
        className: "add-address-step2__link primary-link"
      }, AddAddressStep2_jsx(external_react_localize_redux_["Translate"], {
        id: "addresses.resendnow"
      })));
    }))));
  });
});
// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Addresses/AddressesLayouts/AddAddressStep3.jsx
var AddAddressStep3_jsx = external_react_default.a.createElement;

function AddAddressStep3_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function AddAddressStep3_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AddAddressStep3_ownKeys(Object(source), true).forEach(function (key) { AddAddressStep3_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AddAddressStep3_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AddAddressStep3_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












/* harmony default export */ var AddAddressStep3 = (({
  handleSituation,
  data,
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
        addressId: data.addressId
      });

      if (result.status == "200") {
        setData({
          phoneNumberVeri: AddAddressStep3_objectSpread(AddAddressStep3_objectSpread({}, data), {}, {
            requestId: result.result.requestId,
            phoneNumber: mobile
          })
        });
        setSubmitLoading(false);
        handleSituation({
          type: "phoneveri"
        });
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

  return AddAddressStep3_jsx(external_react_localize_redux_["Translate"], null, ({
    translate: t
  }) => {
    return AddAddressStep3_jsx(external_react_default.a.Fragment, null, AddAddressStep3_jsx("section", {
      className: "add-address-step3"
    }, AddAddressStep3_jsx("div", {
      className: "add-address-step3__col"
    }, AddAddressStep3_jsx("p", {
      className: "add-address-step3__p1"
    }, AddAddressStep3_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.changephone"
    })), AddAddressStep3_jsx("p", {
      className: "add-address-step3__p2"
    }, AddAddressStep3_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.entermobile"
    })), AddAddressStep3_jsx("div", {
      className: "add-address-step3__phone-container"
    }, AddAddressStep3_jsx("div", {
      className: "add-address-step1__mobile-cnt"
    }, AddAddressStep3_jsx("span", {
      className: "add-address-step1__mobile-code"
    }, "+", data.phoneCode), AddAddressStep3_jsx("input", {
      className: "gray__input",
      type: "text",
      placeholder: t("addresses.mobile-number-placeholder"),
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
            iso: data.phoneIso
          });
        }
      },
      onBlur: e => {
        Object(formValidator["g" /* validatePhoneNumber */])({
          name: e.target.name,
          value: e.target.value,
          handler: setErrors,
          lang,
          iso: data.phoneIso
        });
      }
    })), AddAddressStep3_jsx(common["k" /* FormErrorMsg */], {
      show: errors["phone"],
      msg: errors["phone"]
    })), AddAddressStep3_jsx("button", {
      className: "primary-btn add-address-step3__btn",
      onClick: handleSubmit
    }, submitLoading ? AddAddressStep3_jsx(common["s" /* Loading */], {
      type: "white",
      with: "20px",
      height: "20px"
    }) : AddAddressStep3_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.send-new-code"
    })), AddAddressStep3_jsx("a", {
      className: "add-address-step3__link mt-5 mt-md-3 d-block primary-link",
      onClick: e => {
        e.preventDefault();
        handleSituation({
          type: "phoneveri"
        });
      }
    }, AddAddressStep3_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.cancel"
    })))));
  });
});
// EXTERNAL MODULE: ./components/app/pages/UserPanel/PanelPages/Addresses/AddressesLayouts/SelectAddress.jsx
var SelectAddress = __webpack_require__("TLen");

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Addresses/AddressesLayouts/AddressesAdd.jsx
var AddressesAdd_jsx = external_react_default.a.createElement;

function AddressesAdd_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function AddressesAdd_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AddressesAdd_ownKeys(Object(source), true).forEach(function (key) { AddressesAdd_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AddressesAdd_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AddressesAdd_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class AddressesAdd_AddressesAdd extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    AddressesAdd_defineProperty(this, "setData", data => {
      const newData = AddressesAdd_objectSpread({}, this.state.data);

      for (let key in data) {
        newData[key] = data[key];
      }

      this.setState({
        data: newData
      });
    });

    AddressesAdd_defineProperty(this, "setDefaultHandler", e => {
      this.setData({
        isDefault: e.target.checked
      });
    });

    console.log(this.props, "----");
    const {
      verifyPhone
    } = this.props;
    this.state = {
      currentSituation: verifyPhone ? 2 : 1,
      showSelectAddress: false,
      data: {
        isDefault: false,
        phoneNumberVeri: {
          requestId: verifyPhone ? verifyPhone.requestId : null,
          addressId: verifyPhone ? verifyPhone.addressId : null,
          phoneNumber: verifyPhone ? verifyPhone.phoneNumber : null,
          phoneIso: verifyPhone ? verifyPhone.phoneIso : null,
          phoneCode: verifyPhone ? verifyPhone.phoneCode : null
        }
      }
    };
    this.handleSituation = this.handleSituation.bind(this);
  }

  handleSituation({
    type
  }) {
    let nextState;

    switch (type) {
      case "addresses":
        this.setState({
          currentSituation: 1
        });
        break;

      case "phoneveri":
        this.setState({
          currentSituation: 2
        });
        break;

      case "changephone":
        this.setState({
          currentSituation: 3
        });
        break;

      case "next":
        nextState = this.state.currentSituation >= 2 ? 3 : this.state.currentSituation + 1;
        this.setState({
          currentSituation: nextState
        });
        break;

      case "prev":
        break;

      case "showMap":
        this.setState({
          showSelectAddress: true
        });
        break;

      case "hideMap":
        this.setState({
          showSelectAddress: false
        });
        break;

      default:
        break;
    }
  }

  renderBoxHeader() {
    return AddressesAdd_jsx(external_react_default.a.Fragment, null, AddressesAdd_jsx("h2", {
      className: "user-panel__box-header"
    }, AddressesAdd_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.addnewadd"
    })), this.state.currentSituation === 1 && AddressesAdd_jsx(Responsive["d" /* LandScapePhonesAndBigger */], {
      className: "add-address-step1__check add-address-step1__check--desktop"
    }));
  }

  render() {
    if (this.state.showSelectAddress) {
      var _this$props$editItem, _this$props$editItem2;

      return AddressesAdd_jsx(external_react_transition_group_["CSSTransition"], {
        appear: true,
        in: true,
        classNames: "user-panel__routes",
        timeout: 400
      }, AddressesAdd_jsx(common["c" /* BoxStyle2 */], null, AddressesAdd_jsx(SelectAddress["a" /* default */], {
        setData: this.setData,
        handleSituation: this.handleSituation,
        lat: (_this$props$editItem = this.props.editItem) === null || _this$props$editItem === void 0 ? void 0 : _this$props$editItem.locationX,
        lng: (_this$props$editItem2 = this.props.editItem) === null || _this$props$editItem2 === void 0 ? void 0 : _this$props$editItem2.locationY
      })));
    }

    let page;

    switch (this.state.currentSituation) {
      case 1:
        page = AddressesAdd_jsx(AddAddressStep1, {
          data: this.state.data,
          handleSituation: this.handleSituation,
          editItem: this.props.editItem,
          setData: this.setData
        });
        break;

      case 2:
        page = AddressesAdd_jsx(AddAddressStep2, {
          addpage: this.props.addpage,
          data: this.state.data.phoneNumberVeri,
          setData: this.setData,
          handleSituation: this.handleSituation
        });
        break;

      case 3:
        page = AddressesAdd_jsx(AddAddressStep3, {
          handleSituation: this.handleSituation,
          data: this.state.data.phoneNumberVeri,
          setData: this.setData
        });
        break;

      default:
        break;
    }

    return AddressesAdd_jsx(common["b" /* BoxStyle1 */], {
      headerContent: this.renderBoxHeader()
    }, AddressesAdd_jsx(external_react_transition_group_["SwitchTransition"], null, AddressesAdd_jsx(external_react_transition_group_["CSSTransition"], {
      classNames: "user-panel__routes",
      timeout: 200,
      key: this.state.currentSituation
    }, page)));
  }

}

/* harmony default export */ var AddressesLayouts_AddressesAdd = (Object(external_react_router_dom_["withRouter"])(AddressesAdd_AddressesAdd));
// EXTERNAL MODULE: ./assets/icons/edit-small.svg
var edit_small = __webpack_require__("Xrh3");

// EXTERNAL MODULE: ./assets/icons/delete.svg
var icons_delete = __webpack_require__("xREX");

// EXTERNAL MODULE: ./lib/api/client/clientOrder.js
var clientOrder = __webpack_require__("GFe7");

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Addresses/Addresses.jsx
var Addresses_jsx = external_react_default.a.createElement;

function Addresses_extends() { Addresses_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Addresses_extends.apply(this, arguments); }

function Addresses_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import "./Addresses.scss";
// import "./Addresses-rtl.scss";





















class Addresses_Addresses extends external_react_default.a.Component {
  constructor(props) {
    super(props); // for UI development

    Addresses_defineProperty(this, "handleAddressPage", () => {
      this.props.history.push("/" + this.state.curr + "-" + this.state.lang + "/panel/addresses");
    });

    Addresses_defineProperty(this, "getAddresses", async () => {
      this.setState({
        showLoader: true
      });
      const result = await client_getUserAddresses();
      let showEmpty = result.result.length == 0 ? true : false;
      this.setState({
        data: result.result,
        showLoader: false,
        emptyAddresspage: showEmpty
      });
    });

    Addresses_defineProperty(this, "handleDelete", async addressId => {
      const con = confirm(Object(helpers["c" /* getErrorMsg */])(this.state.lang, "confirm-address-delete"));
      if (!con) return;
      const del_resutl = await Object(clientOrder["c" /* client_deleteAddress */])(addressId);

      if (del_resutl.status === 200) {
        this.getAddresses();
        external_react_toastify_["toast"].success(Object(helpers["c" /* getErrorMsg */])(this.props.lang, "success-delete-address"), Object(toast["a" /* getToastConfig */])());
      }
    });

    Addresses_defineProperty(this, "handleClickEdit", item => {
      this.setState({
        selectedItemForEdit: item
      });
      this.props.history.push(this.props.match.url + "/add");
    });

    Addresses_defineProperty(this, "handleVerifyClick", async item => {
      this.verifyPhone = null;
      if (this.state.verifyLoading) return;
      this.setState({
        verifyLoading: true
      });

      try {
        const res = await Object(clientCommon["e" /* client_changeMobileNumber */])({
          addressId: item.addressId,
          mobileNumber: item.transfereeMobile.trim()
        });

        if (res.status == "200") {
          this.verifyPhone = {
            requestId: res.result.requestId,
            addressId: item.addressId,
            phoneNumber: item.transfereeMobile.trim(),
            phoneIso: item.iso,
            phoneCode: item.phoneCode
          };
          this.props.history.push(this.props.match.url + "/add");
          this.setState({
            verifyLoading: false
          });
        }
      } catch (err) {
        this.setState({
          verifyLoading: false
        });
        external_react_toastify_["toast"].error(err.response.data.message, toast["a" /* getToastConfig */]);
      }
    });

    Addresses_defineProperty(this, "handleSetDefault", async addressId => {
      try {
        const res = await Object(clientCommon["f" /* client_setDefaultAddress */])({
          addressId
        });

        if (res.status == "200") {
          this.getAddresses();
        }
      } catch (err) {
        external_react_toastify_["toast"].error(err.response.data.message, Object(toast["a" /* getToastConfig */])());
      }
    });

    this.state = {
      emptyAddresspage: true,
      showLoader: false,
      data: [],
      selectedItemForEdit: null,
      verifyLoading: false
    };
    this.verifyPhone = null;
    this.phoneUtil = external_google_libphonenumber_["PhoneNumberUtil"].getInstance();
    this.PNF = external_google_libphonenumber_["PhoneNumberFormat"];
  } //// for testing


  renderBoxHeader() {
    return Addresses_jsx(external_react_default.a.Fragment, null, Addresses_jsx("h2", {
      className: "user-panel__box-header"
    }, Addresses_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.addresses"
    })), Addresses_jsx(Responsive["d" /* LandScapePhonesAndBigger */], null, Addresses_jsx(external_react_router_dom_["Link"], {
      to: `${this.props.match.url}/add`,
      className: "addresses__addnew primary-btn",
      onClick: () => {
        this.setState({
          selectedItemForEdit: null
        });
      }
    }, Addresses_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.addnewadd"
    }))));
  }

  componentDidMount() {
    this.getAddresses();
    this.unlisten = this.props.history.listen((location, action) => {
      if (this.props.match.url == location.pathname) {
        this.getAddresses();
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  componentDidUpdate() {
    this.verifyPhone = null;
  }

  render() {
    return Addresses_jsx(external_react_router_dom_["Switch"], null, Addresses_jsx(external_react_router_dom_["Route"], {
      path: `${this.props.match.path}/add`,
      render: () => Addresses_jsx(external_react_default.a.Fragment, null, Addresses_jsx(external_react_toastify_["ToastContainer"], Addresses_extends({
        rtl: Object(isRtl["a" /* isRtl */])(this.props.lang)
      }, Object(toast["a" /* getToastConfig */])())), Addresses_jsx(AddressesLayouts_AddressesAdd, {
        addpage: this.handleAddressPage,
        editItem: this.state.selectedItemForEdit,
        verifyPhone: this.verifyPhone
      }))
    }), Addresses_jsx(external_react_router_dom_["Route"], {
      path: `${this.props.match.path}`
    }, Addresses_jsx(external_react_toastify_["ToastContainer"], Addresses_extends({
      rtl: Object(isRtl["a" /* isRtl */])(this.props.lang)
    }, Object(toast["a" /* getToastConfig */])())), this.state.showLoader ? Addresses_jsx("div", {
      style: {
        minHeight: "100vh"
      }
    }, Addresses_jsx(common["s" /* Loading */], {
      type: "gray",
      width: "11%",
      height: "70%"
    })) : this.state.emptyAddresspage ? Addresses_jsx(NoAddressesPage["a" /* default */], null) : Addresses_jsx(common["b" /* BoxStyle1 */], {
      headerContent: this.renderBoxHeader()
    }, Addresses_jsx("section", {
      className: "addresses"
    }, Addresses_jsx("div", null, Addresses_jsx("ul", {
      className: "addresses__list"
    }, this.state.data.map(item => {
      return Addresses_jsx("li", {
        className: "addresses__item-cnt flex-wrap no-gutters"
      }, Addresses_jsx(Responsive["c" /* LandScapePhones */], {
        className: "w-100"
      }, Addresses_jsx("div", {
        className: "d-flex justify-content-between mb-2"
      }, Addresses_jsx("div", null, item.isDefualt ? Addresses_jsx("a", {
        onClick: e => {
          e.preventDefault();
        },
        className: "addresses__right-item addresses__right-item--gray-btn"
      }, Addresses_jsx(external_react_localize_redux_["Translate"], {
        id: "addresses.pri-add"
      })) : Addresses_jsx("a", {
        onClick: e => {
          e.preventDefault();
          this.handleSetDefault(item.addressId);
        },
        className: "addresses__right-item addresses__right-item--primary-btn"
      }, Addresses_jsx(external_react_localize_redux_["Translate"], {
        id: "addresses.default"
      }))), Addresses_jsx("div", {
        class: "addresses__btn-cnt d-flex align-items-center"
      }, Addresses_jsx("a", {
        className: "addresses__right-item addresses__right-item--iconi",
        onClick: () => this.handleDelete(item.addressId)
      }, Addresses_jsx(icons_delete["ReactComponent"], {
        className: "addresses__right-item-icon"
      }), Addresses_jsx(external_react_localize_redux_["Translate"], {
        id: "common.delete"
      })), Addresses_jsx("a", {
        onClick: () => this.handleClickEdit(item),
        className: "addresses__right-item addresses__right-item--iconi"
      }, Addresses_jsx(edit_small["ReactComponent"], {
        className: "addresses__right-item-icon"
      }), Addresses_jsx(external_react_localize_redux_["Translate"], {
        id: "addresses.edit"
      }))))), Addresses_jsx("div", {
        className: "col-12 col-md-auto addresses__row-item addresses__row-item--first"
      }, Addresses_jsx("span", {
        className: "addresses__icon-cnt"
      }, Addresses_jsx(business_and_trade["ReactComponent"], {
        className: "addresses__left-icon"
      })), Addresses_jsx("p", {
        className: "addresses__ars-text"
      }, item.address)), Addresses_jsx("div", {
        className: "mt-2 mt-md-0 addresses__row-item"
      }, Addresses_jsx("span", {
        className: "addresses__ars-head"
      }, Addresses_jsx(external_react_localize_redux_["Translate"], {
        id: "addresses.name"
      })), Addresses_jsx("span", {
        className: "addresses__ars-value"
      }, item.transfereeName, " ", item.transfereeFamily)), Addresses_jsx("div", {
        className: "mt-2 mt-md-0 addresses__row-item"
      }, Addresses_jsx("span", {
        className: "addresses__ars-head"
      }, Addresses_jsx(external_react_localize_redux_["Translate"], {
        id: "addresses.phone"
      })), Addresses_jsx("span", {
        className: "addresses__ars-value"
      }, this.phoneUtil.format(this.phoneUtil.parseAndKeepRawInput(item.phoneCode + item.transfereeMobile, item.iso), this.PNF.INTERNATIONAL)), !item.mobileVerifed && Addresses_jsx("span", {
        className: external_classnames_default()("addresses__ars-alert", "d-block", {
          "addresses__ars-alert--disable": this.state.verifyLoading
        }),
        onClick: () => {
          this.handleVerifyClick(item);
        }
      }, Addresses_jsx("span", {
        className: "addresses__alert-icon"
      }, "!"), Addresses_jsx(external_react_localize_redux_["Translate"], {
        id: "addresses.notvery"
      }))), Addresses_jsx(Responsive["d" /* LandScapePhonesAndBigger */], null, Addresses_jsx("div", {
        className: "addresses__row-item"
      }, item.isDefualt ? Addresses_jsx("a", {
        onClick: e => {
          e.preventDefault();
        },
        className: "addresses__right-item addresses__right-item--gray-btn"
      }, Addresses_jsx(external_react_localize_redux_["Translate"], {
        id: "addresses.pri-add"
      })) : Addresses_jsx("a", {
        onClick: e => {
          e.preventDefault();
          this.handleSetDefault(item.addressId);
        },
        className: "addresses__right-item addresses__right-item--primary-btn"
      }, Addresses_jsx(external_react_localize_redux_["Translate"], {
        id: "addresses.default"
      })), Addresses_jsx("a", {
        className: "addresses__right-item addresses__right-item--iconi",
        onClick: () => this.handleDelete(item.addressId)
      }, Addresses_jsx(icons_delete["ReactComponent"], {
        className: "addresses__right-item-icon"
      }), Addresses_jsx(external_react_localize_redux_["Translate"], {
        id: "addresses.delete"
      })), Addresses_jsx("a", {
        onClick: () => this.handleClickEdit(item),
        className: "addresses__right-item addresses__right-item--iconi"
      }, Addresses_jsx(edit_small["ReactComponent"], {
        className: "addresses__right-item-icon"
      }), Addresses_jsx(external_react_localize_redux_["Translate"], {
        id: "addresses.edit"
      })))));
    }))), Addresses_jsx(Responsive["c" /* LandScapePhones */], null, Addresses_jsx("div", {
      className: "checkout-fix justify-content-center"
    }, Addresses_jsx(external_react_router_dom_["Link"], {
      to: `${this.props.match.url}/add`,
      className: "primary-btn returns__add-btn primary-btn--icon",
      onClick: () => {
        this.setState({
          selectedItemForEdit: null
        });
      }
    }, Addresses_jsx(external_react_localize_redux_["Translate"], {
      id: "addresses.addnewadd"
    }))))))));
  }

}

const Addresses_mapStateToProps = state => {
  return {
    lang: Object(appConfigSlice["h" /* selectLang */])(state),
    curr: Object(appConfigSlice["h" /* selectLang */])(state)
  };
};

/* harmony default export */ var PanelPages_Addresses_Addresses = (Object(external_react_redux_["connect"])(Addresses_mapStateToProps)(Addresses_Addresses));
// EXTERNAL MODULE: ./components/common/BoxStyle2/index.js
var BoxStyle2 = __webpack_require__("eZBL");

// EXTERNAL MODULE: ./assets/icons/empty-payment.svg
var empty_payment = __webpack_require__("Sdyw");

// CONCATENATED MODULE: ./components/app/pages/UserPanel/UserPanelConstants.js
const TRANSACTIONTYPE_Purchase = 10;
const TRANSACTIONTYPE_Cash = 20;
const TRANSACTIONTYPE_Gift = 30;
const TRANSACTIONTYPE_Refund = 91;
// EXTERNAL MODULE: ./assets/icons/trash.svg
var trash = __webpack_require__("L6ya");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./components/app/pages/UserPanel/PanelPages/Payment/CreditCardItem.scss
var CreditCardItem = __webpack_require__("1J8E");

// EXTERNAL MODULE: ./components/app/pages/UserPanel/PanelPages/Payment/CreditCardItem-rtl.scss
var CreditCardItem_rtl = __webpack_require__("T/AL");

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Payment/CreditCardItem.jsx
var CreditCardItem_jsx = external_react_default.a.createElement;






/* harmony default export */ var Payment_CreditCardItem = (props => {
  const cardDate = external_moment_default()('20' + props.data.bankCardYear + '/' + props.data.bankCardMonth + '/01').format('MMM YYYY');
  return CreditCardItem_jsx("div", {
    className: "card-container"
  }, CreditCardItem_jsx("div", {
    className: "card"
  }, CreditCardItem_jsx("div", {
    className: "card__header"
  }, CreditCardItem_jsx("div", {
    className: "card__header__left"
  }, CreditCardItem_jsx("div", null, CreditCardItem_jsx("img", {
    src: `${"http://ajyal.webtreeonline.com/Uploads/Images/PaymentLogo"}/${props.data.paymentMethodImageName}`,
    alt: "jyal refund icon",
    className: "card-icon"
  }))), CreditCardItem_jsx("div", {
    className: "card__header__right"
  }, CreditCardItem_jsx("span", null, props.data.bankCardNumber))), CreditCardItem_jsx("div", {
    className: "card__body"
  }, CreditCardItem_jsx("div", {
    className: "card__body__left"
  }, CreditCardItem_jsx("p", {
    className: "full-text"
  }, CreditCardItem_jsx("span", {
    className: "expire-text"
  }, CreditCardItem_jsx(external_react_localize_redux_["Translate"], {
    id: "payment.expiry"
  }), " "), CreditCardItem_jsx("span", {
    className: "expire-data-text"
  }, cardDate))), CreditCardItem_jsx("div", {
    className: "card__body__right"
  })), CreditCardItem_jsx("div", {
    className: "card__footer"
  }, CreditCardItem_jsx("div", {
    onClick: () => props.onItemClick(props.data.bankCardId),
    className: "card__footer__delete-wrapper"
  }, CreditCardItem_jsx("span", {
    className: "card__footer__icon-container"
  }, CreditCardItem_jsx(trash["ReactComponent"], {
    className: "trash-icon"
  })), CreditCardItem_jsx("span", {
    className: "card__footer__delete-text"
  }, CreditCardItem_jsx(external_react_localize_redux_["Translate"], {
    id: "payment.delete"
  }))))));
});
// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Payment/Payment.jsx
var Payment_jsx = external_react_default.a.createElement;












/* harmony default export */ var Payment = (() => {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: cards,
    1: setCards
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    const res = getData();
  }, []);

  const removeCustomerBankCard = async bankCardId => {
    setIsLoading(true);
    client_removeCustomerBankCard(bankCardId).then(res => {
      console.log(res);
      setIsLoading(false);
      getData();
    }).catch(err => {
      setIsLoading(false);
      console.log(err);
    });
  };

  const getData = async () => {
    setIsLoading(true);
    client_getCustomerBankCards().then(res => {
      console.log(res);
      setCards(res.result);
      setIsLoading(false);
    }).catch(err => {
      setIsLoading(false);
      console.log(err);
    });
  };

  const onItemClickHandler = bankCardId => {
    console.log(bankCardId);
    removeCustomerBankCard(bankCardId);
  };

  return Payment_jsx(BoxStyle2["a" /* default */], {
    className: "payment"
  }, isLoading ? Payment_jsx(common["s" /* Loading */], {
    type: "gray",
    width: "9%",
    height: "70%"
  }) : Payment_jsx("div", null, Payment_jsx("section", {
    className: "payment__content"
  }, (cards === null || cards === void 0 ? void 0 : cards.length) > 0 ? Payment_jsx("div", {
    className: "payment__data-wrapper"
  }, cards === null || cards === void 0 ? void 0 : cards.map(item => {
    return Payment_jsx("div", {
      key: item.bankCardId,
      className: "card-item-wrapper"
    }, Payment_jsx(Payment_CreditCardItem, {
      onItemClick: onItemClickHandler,
      data: item
    }));
  })) : Payment_jsx("section", {
    className: "no-address"
  }, Payment_jsx("div", null, Payment_jsx(empty_payment["ReactComponent"], {
    className: "no-address__icon"
  }), Payment_jsx("p", {
    className: "no-address__topText"
  }, Payment_jsx(external_react_localize_redux_["Translate"], {
    id: "payment.dont-have-payment-card"
  })))))));
});
// EXTERNAL MODULE: ./assets/icons/empty wallet.svg
var empty_wallet = __webpack_require__("Wvg8");

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Credits/Credits.jsx
var Credits_jsx = external_react_default.a.createElement;

function Credits_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import "./Credits.scss";
// import "./Credits-rtl.scss";










class Credits_Credit extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Credits_defineProperty(this, "pageChangedAction", async pagenumber => {
      this.setState({
        pageNumber: pagenumber
      });
      await this.getData(pagenumber);
    });

    Credits_defineProperty(this, "getData", async pagenumber => {
      this.setState({
        showLoader: true
      });
      const result = await client_getCreditList({
        pageNumber: pagenumber,
        pageSize: this.state.pageSize
      });

      if (result.result.count == 0) {
        this.setState({
          emptyCrdits: true
        });
      } else {
        this.setState({
          creditsItems: result.result.transactionList,
          totalNumber: result.result.count,
          credit: result.result.credit
        });
      }

      this.setState({
        showLoader: false
      });
    });

    this.state = {
      emptyCrdits: false,
      pageNumber: 1,
      pageSize: 10,
      totalNumber: 0,
      credit: 0,
      showLoader: false,
      creditsItems: []
    };
  }

  renderEmtpySection() {
    return Credits_jsx("section", {
      className: "no-address"
    }, Credits_jsx("div", null, Credits_jsx(empty_wallet["ReactComponent"], {
      className: "no-address__icon"
    }), Credits_jsx("p", {
      className: "no-address__topText"
    }, Credits_jsx(external_react_localize_redux_["Translate"], {
      id: "credits.msg2"
    }))));
  }

  componentDidMount() {
    this.getData(this.state.pageNumber);
  }

  render() {
    var _this$state$creditsIt, _this$state$creditsIt2;

    return Credits_jsx(BoxStyle2["a" /* default */], {
      className: "credit"
    }, this.state.showLoader ? Credits_jsx(common["s" /* Loading */], {
      type: "gray",
      width: "9%",
      height: "70%"
    }) : Credits_jsx("div", null, Credits_jsx("header", {
      className: "credit__header row no-gutters align-items-center justify-content-between"
    }, Credits_jsx("div", {
      className: "credit__header-div col-md-5 col-lg-4"
    }, Credits_jsx("div", {
      className: "credit__header-div--back"
    }, Credits_jsx("span", {
      className: "credit__text-s2"
    }, Credits_jsx(external_react_localize_redux_["Translate"], {
      id: "credits.av-balance"
    })), Credits_jsx("span", {
      className: "credit__text credit__text--bold"
    }, Credits_jsx(external_react_localize_redux_["Translate"], {
      id: this.props.curr
    }), " ", this.state.credit)))), Credits_jsx("section", {
      className: "credit__content"
    }, this.state.emptyCrdits && this.renderEmtpySection(), !this.state.emptyCrdits && Credits_jsx("div", {
      className: "credit__table-cnt"
    }, Credits_jsx(Responsive["d" /* LandScapePhonesAndBigger */], null, Credits_jsx("table", {
      className: "credit__table"
    }, Credits_jsx("thead", {
      className: "credit__table-header"
    }, Credits_jsx("tr", null, Credits_jsx("th", null, Credits_jsx(external_react_localize_redux_["Translate"], {
      id: "credits.date"
    })), Credits_jsx("th", null, Credits_jsx(external_react_localize_redux_["Translate"], {
      id: "credits.type"
    })), Credits_jsx("th", null, Credits_jsx(external_react_localize_redux_["Translate"], {
      id: "credits.details"
    })), Credits_jsx("th", null, Credits_jsx(external_react_localize_redux_["Translate"], {
      id: "credits.amount"
    })), Credits_jsx("th", null, Credits_jsx(external_react_localize_redux_["Translate"], {
      id: "credits.balance"
    })))), Credits_jsx("tbody", {
      className: "credit__table-body"
    }, (_this$state$creditsIt = this.state.creditsItems) === null || _this$state$creditsIt === void 0 ? void 0 : _this$state$creditsIt.map(item => {
      return Credits_jsx("tr", null, Credits_jsx("td", {
        className: "credit__tbl-text credit__tbl-text--gray"
      }, item.transactionDateTime), Credits_jsx("td", {
        className: "credit__tbl-text credit__tbl-text--primary"
      }, item.transactionType), Credits_jsx("td", {
        className: "credit__tbl-text credit__tbl-text--primary"
      }, item.comment), Credits_jsx("td", {
        className: `credit__tbl-text d-ltr ${item.transactionTypeId != 10 ? 'credit__tbl-text--green' : 'credit__tbl-text--orange'}`
      }, item.transactionTypeId == 10 ? Credits_jsx("span", null, "-") : Credits_jsx("span", null, "+"), " ", this.props.curr.toUpperCase(), " ", item.amount), Credits_jsx("td", {
        className: "credit__tbl-text credit__tbl-text--primary"
      }, this.props.curr.toUpperCase(), " ", item.balance));
    })))), Credits_jsx(Responsive["c" /* LandScapePhones */], null, Credits_jsx("ul", {
      className: "credit__landScape-list"
    }, (_this$state$creditsIt2 = this.state.creditsItems) === null || _this$state$creditsIt2 === void 0 ? void 0 : _this$state$creditsIt2.map(item => {
      return Credits_jsx("li", {
        className: "credit__landScape-item"
      }, Credits_jsx("div", {
        className: "credit__div"
      }, Credits_jsx("span", {
        className: "d-block credit__tbl-text credit__tbl-text--primary"
      }, item.transactionType), Credits_jsx("span", {
        className: "credit__tbl-text credit__tbl-text--gray"
      }, item.transactionDateTime)), Credits_jsx("div", {
        className: "credit__div"
      }, Credits_jsx("span", {
        className: "d-block credit__tbl-text d-ltr" + item.transactionTypeId == 10 ? "credit__tbl-text--orange" : "credit__tbl-text--green"
      }, item.transactionTypeId == 10 ? Credits_jsx("span", null, "-") : Credits_jsx("span", null, "+"), " ", this.props.curr.toUpperCase(), " ", item.amount, " ", this.props.curr.toUpperCase(), " ", item.amount), Credits_jsx("span", {
        className: "d-block credit__tbl-text credit__tbl-text--primary d-ltr"
      }, Credits_jsx("span", {
        className: "credit__tbl-text credit__tbl-text--margin-right credit__tbl-text--gray"
      }, "Balance"), this.props.curr.toUpperCase(), " ", item.balance)), Credits_jsx("div", {
        className: "credit__div credit__div--basis"
      }, Credits_jsx("span", {
        className: "d-block credit__tbl-text credit__tbl-text--primary"
      }, item.comment)));
    }))), Credits_jsx(common["x" /* Pager */], {
      count: Math.ceil(this.state.totalNumber / this.state.pageSize),
      activeItem: this.state.pageNumber,
      onPageClick: pageNumber => {
        this.pageChangedAction(pageNumber);
      }
    })))));
  }

}

const Credits_mapStateToProps = state => {
  return {
    curr: Object(appConfigSlice["g" /* selectCurr */])(state)
  };
};

/* harmony default export */ var Credits = (Object(external_react_redux_["connect"])(Credits_mapStateToProps)(Credits_Credit));
// EXTERNAL MODULE: ./components/common/BoxStyle2/BoxStyle2.jsx
var BoxStyle2_BoxStyle2 = __webpack_require__("pEL2");

// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__("65ip");

// EXTERNAL MODULE: ./assets/icons/return.svg
var icons_return = __webpack_require__("MeAH");

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Returns/ReturnsLayouts/EmptyReturnsRequest.jsx
var EmptyReturnsRequest_jsx = external_react_default.a.createElement;



/* harmony default export */ var EmptyReturnsRequest = (props => {
  return EmptyReturnsRequest_jsx("section", {
    className: "no-address"
  }, props.type === 'requested' ? EmptyReturnsRequest_jsx("div", null, EmptyReturnsRequest_jsx(icons_return["ReactComponent"], {
    className: "no-address__icon"
  }), EmptyReturnsRequest_jsx("p", {
    className: "no-address__topText text-align-center"
  }, EmptyReturnsRequest_jsx(external_react_localize_redux_["Translate"], {
    id: "returns.empty-msg1"
  })), EmptyReturnsRequest_jsx("p", {
    className: "no-address__btmText text-align-center"
  }, EmptyReturnsRequest_jsx(external_react_localize_redux_["Translate"], {
    id: "returns.empty-msg2"
  }))) : EmptyReturnsRequest_jsx("div", null, EmptyReturnsRequest_jsx(icons_return["ReactComponent"], {
    className: "no-address__icon"
  }), EmptyReturnsRequest_jsx("p", {
    className: "no-address__topText text-align-center"
  }, EmptyReturnsRequest_jsx(external_react_localize_redux_["Translate"], {
    id: "returns.empty-msg1-deliverd"
  }))));
});
// EXTERNAL MODULE: ./assets/icons/img-jyal-backicon.svg
var img_jyal_backicon = __webpack_require__("8DLf");
var img_jyal_backicon_default = /*#__PURE__*/__webpack_require__.n(img_jyal_backicon);

// EXTERNAL MODULE: external "react-js-pagination"
var external_react_js_pagination_ = __webpack_require__("yRgD");
var external_react_js_pagination_default = /*#__PURE__*/__webpack_require__.n(external_react_js_pagination_);

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Returns/ReturnsLayouts/ReturnsTabs/ReturnsRequested.jsx
var ReturnsRequested_jsx = external_react_default.a.createElement;











/* harmony default export */ var ReturnsRequested = (class extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmptyPage: true,
      showLoader: false,
      pageNumber: 1,
      pageSize: 10,
      resultOrderCount: 0,
      orderItems: []
    };
    this.goods_Pre = "http://ajyal.webtreeonline.com/Uploads/Images/Brand";
    this.phoneUtil = external_google_libphonenumber_["PhoneNumberUtil"].getInstance();
    this.PNF = external_google_libphonenumber_["PhoneNumberFormat"];
  }

  async componentDidMount() {
    this.setState({
      showLoader: true
    });
    let model = {
      pageNumber: this.state.pageNumber,
      pageSize: this.state.pageSize
    };
    const result = await client_getReturnOrderRequests(model);
    this.setState({
      showLoader: false,
      orderItems: result.result.data,
      resultOrderCount: result.result.count
    });
  }

  async pageChangedAction(pageNumber) {
    this.setState({
      showLoader: true,
      pageNumber: pageNumber
    });
    let model = {
      pageNumber: pageNumber,
      pageSize: this.state.pageSize
    };
    const result = await client_getReturnOrderRequests(model);
    this.setState({
      showLoader: false,
      orderItems: result.result.data,
      resultOrderCount: result.result.count
    });
  }

  render() {
    return ReturnsRequested_jsx(external_react_default.a.Fragment, null, this.state.showLoader ? ReturnsRequested_jsx(common["s" /* Loading */], {
      type: "gray",
      width: "10%",
      height: "50%"
    }) : this.state.orderItems.length == 0 ? ReturnsRequested_jsx(EmptyReturnsRequest, {
      type: "requested"
    }) : ReturnsRequested_jsx("div", {
      className: "return-req"
    }, ReturnsRequested_jsx("ul", {
      className: "return-req__list"
    }, this.state.orderItems.map(item => {
      return ReturnsRequested_jsx("li", {
        className: "return-req__item",
        key: item.itemId
      }, ReturnsRequested_jsx("header", {
        className: "orders__item-header flex-wrap no-gutters"
      }, ReturnsRequested_jsx("h2", {
        className: "orders__item-cnt-header"
      }, ReturnsRequested_jsx(external_react_localize_redux_["Translate"], {
        id: "returns.return"
      }), " \xA0", item.goodsCode), ReturnsRequested_jsx("span", {
        className: "col-md-auto col-12 orders__header-gray-text"
      }, ReturnsRequested_jsx(external_react_localize_redux_["Translate"], {
        id: "orders.placed-on"
      })), ReturnsRequested_jsx("span", {
        className: "col-md-auto col-12 orders__header-gray-text"
      }, item.orderStatusPlacedDateTime), ReturnsRequested_jsx("div", {
        className: "col-12 return-req__detail"
      }, ReturnsRequested_jsx("div", {
        className: "row no-gutters justify-content-between"
      }, ReturnsRequested_jsx("div", {
        className: "col-12 col-lg-7"
      }, ReturnsRequested_jsx(Responsive["f" /* ProtraitPhonesAndBigger */], null, ReturnsRequested_jsx("h4", {
        className: "return-req__text1"
      }, ReturnsRequested_jsx(external_react_localize_redux_["Translate"], {
        id: "returns.pickup"
      }))), ReturnsRequested_jsx("div", {
        className: "d-flex flex-wrap justify-content-between"
      }, ReturnsRequested_jsx("div", {
        className: "col-12 col-md-7 p-0"
      }, ReturnsRequested_jsx("i", {
        className: "orderDetail__addr-icon"
      }, ReturnsRequested_jsx(business_and_trade_default.a, null)), ReturnsRequested_jsx("p", {
        className: "orderDetail__header-text orderDetail__header-text--margin"
      }, item.adAddress)), ReturnsRequested_jsx("div", {
        className: "col-12 ml-4 ml-md-0 col-md-3"
      }, ReturnsRequested_jsx("span", {
        className: "orderDetail__header-text d-block"
      }, item.adTransfereeName + " " + item.adTransfereeFamily), ReturnsRequested_jsx("span", {
        className: "orderDetail__header-text d-block"
      }, this.phoneUtil.format(this.phoneUtil.parseAndKeepRawInput(item.phoneCode + item.transfereeMobile, item.iso), this.PNF.INTERNATIONAL))))), ReturnsRequested_jsx("div", {
        className: "col-12 mt-5 mt-lg-0 col-lg-3 text-align-right"
      }, ReturnsRequested_jsx("h4", {
        className: "return-req__text1"
      }, ReturnsRequested_jsx(external_react_localize_redux_["Translate"], {
        id: "returns.refund-method"
      })), item.returnActionId === 1 && ReturnsRequested_jsx("img", {
        src: img_jyal_backicon_default.a,
        alt: "jyal refund icon",
        className: "d-inline"
      }), ReturnsRequested_jsx("span", {
        style: {
          verticalAlign: "middle"
        },
        className: "d-inline ml-4 orders__header-gray-text"
      }, item.returnAction))))), ReturnsRequested_jsx(ReturnItem, {
        withoutRightBox: true,
        withoutModelNumber: true,
        data: item,
        currency: this.props.currency
      }));
    })), ReturnsRequested_jsx("div", null, ReturnsRequested_jsx(external_react_js_pagination_default.a, {
      activePage: this.state.pageNumber,
      itemsCountPerPage: this.state.pageSize,
      totalItemsCount: this.state.resultOrderCount,
      itemClass: "pager__item",
      innerClass: "pager",
      linkClass: "pager__link",
      activeLinkClass: "active",
      pageRangeDisplayed: 5,
      onChange: pageNumber => {
        this.props.pageChangedAction(pageNumber);
      }
    }))));
  }

});
// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Returns/ReturnsLayouts/ReturnsTabs/ReturnsDelivered.jsx
var ReturnsDelivered_jsx = external_react_default.a.createElement;








/* harmony default export */ var ReturnsDelivered = (class extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmptyPage: true,
      showLoader: false,
      pageNumber: 1,
      pageSize: 10,
      orderItems: [],
      resultOrderCount: 0
    };
    this.goods_Pre = "http://ajyal.webtreeonline.com/Uploads/Images/Brand";
  }

  async componentDidMount() {
    this.setState({
      showLoader: true
    });
    let model = {
      pageNumber: this.state.pageNumber,
      pageSize: this.state.pageSize
    };
    const result = await client_getReturnOrderDelivereds(model);
    this.setState({
      showLoader: false,
      orderItems: result.result.data,
      resultOrderCount: result.result.count
    });
  }

  async pageChangedAction(pageNumber) {
    this.setState({
      showLoader: true,
      pageNumber: pageNumber
    });
    let model = {
      pageNumber: pageNumber,
      pageSize: this.state.pageSize
    };
    const result = await client_getReturnOrderDelivereds(model);
    this.setState({
      showLoader: false,
      orderItems: result.result.data,
      resultOrderCount: result.result.count
    });
  }

  render() {
    return ReturnsDelivered_jsx(external_react_default.a.Fragment, null, this.state.showLoader ? ReturnsDelivered_jsx(common["s" /* Loading */], {
      type: "gray",
      width: "10%",
      height: "50%"
    }) : this.state.orderItems.length == 0 ? ReturnsDelivered_jsx(EmptyReturnsRequest, {
      type: "delivered"
    }) : ReturnsDelivered_jsx("div", {
      className: "return-del"
    }, ReturnsDelivered_jsx("div", {
      className: "return-req"
    }, ReturnsDelivered_jsx("ul", {
      className: "return-req__list"
    }, this.state.orderItems.map(item => {
      return ReturnsDelivered_jsx("li", {
        className: "return-req__item"
      }, ReturnsDelivered_jsx("header", {
        className: "orders__item-header flex-wrap no-gutters"
      }, ReturnsDelivered_jsx("h2", {
        className: "orders__item-cnt-header"
      }, ReturnsDelivered_jsx(external_react_localize_redux_["Translate"], {
        id: "returns.return"
      }), " \xA0 ", item.goodsCode), ReturnsDelivered_jsx("span", {
        className: "col-md-auto col-12 orders__header-gray-text"
      }, ReturnsDelivered_jsx(external_react_localize_redux_["Translate"], {
        id: "orders.placed-on"
      }), item.orderStatusPlacedDateTime)), ReturnsDelivered_jsx(ReturnItem, {
        withoutModelNumber: true,
        withoutRightBox: true,
        data: item,
        currency: this.props.currency
      }));
    }))), ReturnsDelivered_jsx("div", null, ReturnsDelivered_jsx(external_react_js_pagination_default.a, {
      activePage: this.state.pageNumber,
      itemsCountPerPage: this.state.pageSize,
      totalItemsCount: this.state.resultOrderCount,
      itemClass: "pager__item",
      innerClass: "pager",
      linkClass: "pager__link",
      activeLinkClass: "active",
      pageRangeDisplayed: 5,
      onChange: pageNumber => {
        this.props.pageChangedAction(pageNumber);
      }
    }))));
  }

});
// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Returns/ReturnsLayouts/ReturnItem.jsx
var ReturnItem_jsx = external_react_default.a.createElement;

function ReturnItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* harmony default export */ var ReturnItem = (class extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    ReturnItem_defineProperty(this, "clickSelectItem", item => {
      if (this.props.selectedItem) {
        this.props.selectedItem(this.props.data);
      }
    });

    this.goods_Pre = "http://ajyal.webtreeonline.com/Uploads/Images/Goods";
  }

  render() {
    return ReturnItem_jsx("article", {
      className: "goodItem-s2 cart-item order-item return-item"
    }, !this.props.withoutRightBox && ReturnItem_jsx(Responsive["c" /* LandScapePhones */], {
      className: "order-item__detail-cnt order-item__detail-cnt-mobile p-0 col-12"
    }, ReturnItem_jsx("div", {
      className: "d-flex"
    }, this.props.data.statusId == 100 ? ReturnItem_jsx(common["q" /* GoodSituation */], {
      id: this.props.data.statusId,
      title: this.props.data.statusTitle
    }) : ReturnItem_jsx(external_react_default.a.Fragment, null, ReturnItem_jsx(common["q" /* GoodSituation */], {
      id: this.props.data.statusId,
      title: this.props.data.statusTitle
    }), ReturnItem_jsx("span", {
      className: "order-item__detail-text order-item__detail-text--margin"
    }, ReturnItem_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.on"
    }), this.props.data.orderStatusPlacedDateTime)))), ReturnItem_jsx("div", {
      className: "goodItem-s2__left-container"
    }, ReturnItem_jsx("figure", {
      className: "goodItem-s2__fig"
    }, ReturnItem_jsx("img", {
      alt: "",
      className: "goodItem-s2__img",
      src: `${this.goods_Pre}/${this.props.data.goodsId}/${this.props.data.goodsImage}`
    })), ReturnItem_jsx("div", {
      className: "goodItem-s2__left-right"
    }, ReturnItem_jsx("div", {
      className: "goodItem-s2__ns-con"
    }, ReturnItem_jsx("a", {
      className: "goodItem-s2__name"
    }, this.props.data.title), !this.props.withoutModelNumber && ReturnItem_jsx("div", {
      className: "cart-item__model-container"
    }, ReturnItem_jsx("span", {
      className: "order-item__small-text"
    }, ReturnItem_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.model-num"
    })), ReturnItem_jsx("span", {
      className: "order-item__small-value"
    }, this.props.data.goodsCode)), ReturnItem_jsx("div", {
      className: "cart-item__model-container"
    }, ReturnItem_jsx("span", {
      className: "order-item__small-text"
    }, ReturnItem_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.sold-by"
    })), ReturnItem_jsx("span", {
      className: "sky-text-link"
    }, this.props.data.shopName))), ReturnItem_jsx("div", {
      className: "goodItem-s2__right-ft-con"
    }, ReturnItem_jsx("div", {
      className: "goodItem-s2__right-ft"
    }, ReturnItem_jsx("span", {
      className: "goodItem-s2__currency"
    }, ReturnItem_jsx(external_react_localize_redux_["Translate"], {
      id: this.props.currency
    })), ReturnItem_jsx("div", {
      className: "goodItem-s2__price-container"
    }, ReturnItem_jsx("span", {
      className: "goodItem-s2__number"
    }, this.props.data.totalPrice)))), !this.props.withoutReason && ReturnItem_jsx("div", {
      className: "cart-item__model-container"
    }, ReturnItem_jsx("span", {
      className: "order-item__small-text"
    }, ReturnItem_jsx(external_react_localize_redux_["Translate"], {
      id: "returns.reason"
    })), ReturnItem_jsx("span", {
      className: "order-item__small-value"
    }, this.props.data.returnReason)))), !this.props.withoutRightBox && ReturnItem_jsx("div", {
      className: "goodItem-s2__right-container cart-item__right"
    }, ReturnItem_jsx("div", {
      className: "orders__right-items"
    }, this.props.data.statusId == 100 ? ReturnItem_jsx(Responsive["d" /* LandScapePhonesAndBigger */], null, ReturnItem_jsx(common["q" /* GoodSituation */], {
      id: this.props.data.statusId,
      title: this.props.data.statusTitle
    })) : ReturnItem_jsx(external_react_default.a.Fragment, null, ReturnItem_jsx(Responsive["d" /* LandScapePhonesAndBigger */], null, ReturnItem_jsx("div", {
      className: "order-item__detail-cnt"
    }, ReturnItem_jsx(common["q" /* GoodSituation */], {
      id: this.props.data.statusId,
      title: this.props.data.statusTitle
    }), ReturnItem_jsx("span", {
      className: "order-item__detail-text order-item__detail-text--margin"
    }, ReturnItem_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.on"
    })), ReturnItem_jsx("span", {
      className: "order-item__detail-text order-item__detail-text--margin"
    }, this.props.data.orderStatusPlacedDateTime))), ReturnItem_jsx("span", {
      className: "orders__text-bold d-block"
    }, ReturnItem_jsx("span", {
      className: "goodItem-s2__currency  mr-2 ml-2"
    }, ReturnItem_jsx(external_react_localize_redux_["Translate"], {
      id: this.props.currency
    })), Object(helpers["a" /* formatMoney */])(this.props.data.totalPrice), ReturnItem_jsx("span", {
      className: "orders__text-small"
    }, this.props.data.quantity, ReturnItem_jsx(external_react_localize_redux_["Translate"], {
      id: "orders.items"
    }))), ReturnItem_jsx(external_react_router_dom_["Link"], {
      to: this.props.btnLink,
      className: "primary-btn orders__btn",
      onClick: this.clickSelectItem
    }, this.props.btnText, ReturnItem_jsx("img", {
      className: "orders__btn-arrow-icon",
      src: img_down_arrow_white_default.a,
      alt: "arrow icon"
    }))))));
  }

});
// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Returns/ReturnsLayouts/ReturnsAdd.jsx
var ReturnsAdd_jsx = external_react_default.a.createElement;








/* harmony default export */ var ReturnsAdd = (({
  currency
}) => {
  const {
    url
  } = Object(external_react_router_dom_["useRouteMatch"])();
  const {
    0: data,
    1: setData
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    client_getOrderItemForReturned().then(data => {
      setData(data.result);
    });
    return () => {};
  }, []);

  const selectedItemForReturn = item => {};

  const renderBoxHeader = () => {
    return ReturnsAdd_jsx("header", {
      className: "mapAddress__header"
    }, ReturnsAdd_jsx(external_react_router_dom_["Link"], {
      to: url.split("/").slice(0, -1).join("/"),
      className: "orderDetail__backlink"
    }, ReturnsAdd_jsx(back["ReactComponent"], {
      className: "mapAddress__back-icon"
    }), ReturnsAdd_jsx("div", {
      className: "orders__item-header"
    }, ReturnsAdd_jsx("h2", {
      className: "orders__item-cnt-header text-transform-none"
    }, ReturnsAdd_jsx(external_react_localize_redux_["Translate"], {
      id: "returns.select-item-for-return"
    })))));
  };

  return ReturnsAdd_jsx(common["c" /* BoxStyle2 */], {
    className: "returns-add",
    headerContent: renderBoxHeader()
  }, ReturnsAdd_jsx("div", {
    className: "returns-add__items"
  }, data.map(item => {
    return ReturnsAdd_jsx(ReturnItem, {
      key: item.itemId,
      withoutReason: true,
      btnText: ReturnsAdd_jsx(external_react_localize_redux_["Translate"], {
        id: "returns.select-item"
      }),
      btnLink: `${url}/${item.itemId}`,
      data: item,
      currency: currency,
      selectedItem: selectedItemForReturn
    });
  })));
});
// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Returns/ReturnsLayouts/ReturnsAddSingle.jsx
var ReturnsAddSingle_jsx = external_react_default.a.createElement;

function ReturnsAddSingle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















/* harmony default export */ var ReturnsAddSingle = (class extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    ReturnsAddSingle_defineProperty(this, "setDropQuanyityOPtions", () => {
      let options = [];

      for (let index = this.props.data.quantity; index < 1; index--) {
        options.push(index);
      }

      this.setState({
        quantityOPtions: options
      });
    });

    ReturnsAddSingle_defineProperty(this, "selecAction", id => {
      this.setState({
        fkReturningActionId: id
      });
    });

    ReturnsAddSingle_defineProperty(this, "handleSelectReason", item => {
      this.setState({
        fkReturningReasonId: item.value,
        reasonComment: item.condition,
        selectedReasopnOPtions: item
      });
    });

    ReturnsAddSingle_defineProperty(this, "handleCommentChange", e => {
      this.setState({
        requestComment: e.target.value
      });
    });

    ReturnsAddSingle_defineProperty(this, "handleQuantiyChange", value => {
      this.setState({
        quantity: value
      });
    });

    ReturnsAddSingle_defineProperty(this, "handleSubmit", async () => {
      if (this.state.fkReturningReasonId == 0) {
        this.setState({
          selectReasonError: true
        });
      }

      if (this.state.fkReturningActionId == 0) {
        this.setState({
          actionReasonError: true
        });
      }

      try {
        this.setState({
          showButtonLoader: true
        });
        const result = await client_submitReturnRequest({
          fkOrderItemId: this.props.match.params.id,
          fkReturningReasonId: this.state.fkReturningReasonId,
          fkReturningActionId: this.state.fkReturningActionId,
          requestComment: this.state.requestComment,
          quantity: this.state.quantity
        });
        this.setState({
          showButtonLoader: false
        });

        if (result.status == 200) {
          external_react_toastify_["toast"].success(Object(helpers["c" /* getErrorMsg */])(this.props.lang, "return-req"), Object(toast["a" /* getToastConfig */])());
          this.props.history.push("/" + this.props.currency + "-" + this.props.lang + "/panel/returns");
        }
      } catch (error) {
        var _error$response;

        this.setState({
          showButtonLoader: false
        });
        external_react_toastify_["toast"].error((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data.message, Object(toast["a" /* getToastConfig */])());
      }
    });

    this.state = {
      showRatingInput: false,
      showMoreAddresses: false,
      showLoader: false,
      showButtonLoader: false,
      fkReturningReasonId: 0,
      fkReturningActionId: 0,
      reasonComment: "",
      requestComment: "",
      quantity: 1,
      reasopnOPtions: [],
      selectedReasopnOPtions: null,
      actionOptions: [],
      quantityOPtions: [],
      data: null,
      selectReasonError: false,
      actionReasonError: false
    };
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }

  async componentDidMount() {
    const reasonResult = await client_getReturningReasonList();
    let options = [];
    reasonResult.result.forEach(element => {
      options.push({
        value: element.reasonId,
        label: element.reasonTitle,
        condition: element.returnCondition
      });
    });
    const actionResult = await client_getReturningActionList();
    this.setDropQuanyityOPtions();
    this.setState({
      reasopnOPtions: options,
      actionOptions: actionResult.result
    });

    try {
      const product = await client_getReturningProduct(this.props.match.params.id);
      this.setState({
        data: product.result
      });
    } catch (error) {
      this.props.history.push("/" + this.props.currency + "-" + this.props.lang + "/panel/returns");
    }
  }

  handleSelectChange(data) {
    if (data.name === "refund") {
      this.setState({
        showRefundDetail: true
      });
    } else {
      this.setState({
        showRefundDetail: false
      });
    }
  }

  handleShowMoreAddresses() {
    this.setState(state => {
      return {
        showMoreAddresses: !state.showMoreAddresses
      };
    });
  }

  renderBoxHeader() {
    return ReturnsAddSingle_jsx("header", {
      className: "mapAddress__header"
    }, ReturnsAddSingle_jsx(external_react_router_dom_["Link"], {
      to: this.props.match.url.split("/").slice(0, -1).join("/"),
      className: "orderDetail__backlink"
    }, ReturnsAddSingle_jsx(back["ReactComponent"], {
      className: "mapAddress__back-icon"
    }), ReturnsAddSingle_jsx("div", {
      className: "orders__item-header"
    }, ReturnsAddSingle_jsx("h2", {
      className: "orders__item-cnt-header text-transform-none"
    }, ReturnsAddSingle_jsx(external_react_localize_redux_["Translate"], {
      id: "returns.returns"
    })))));
  }

  render() {
    return ReturnsAddSingle_jsx("section", {
      className: "order-review returns-add-single"
    }, ReturnsAddSingle_jsx(common["c" /* BoxStyle2 */], {
      headerContent: this.renderBoxHeader()
    }, ReturnsAddSingle_jsx("div", {
      className: "col-12 col-lg-7"
    }, this.state.data && ReturnsAddSingle_jsx(ReturnItem, {
      withoutRightBox: true,
      withoutReason: true,
      currency: this.props.currency,
      data: this.state.data
    }), ReturnsAddSingle_jsx("div", {
      className: "mt-4 row no-gutters"
    }, ReturnsAddSingle_jsx("div", {
      className: "col-12 col-sm-7 cart-item__quantity"
    }, ReturnsAddSingle_jsx("span", {
      className: "order-cancel__text"
    }, ReturnsAddSingle_jsx(external_react_localize_redux_["Translate"], {
      id: "returns.return-msg1"
    })), ReturnsAddSingle_jsx(external_react_select_default.a, {
      className: "react-select",
      options: this.state.reasopnOPtions,
      onChange: this.handleSelectReason,
      placeholder: ReturnsAddSingle_jsx(external_react_localize_redux_["Translate"], {
        id: "returns.select-reason-place"
      }),
      value: this.state.selectedReasopnOPtions,
      required: true
    })), this.state.selectReasonError && ReturnsAddSingle_jsx("span", {
      className: "error-text"
    }, ReturnsAddSingle_jsx(external_react_localize_redux_["Translate"], {
      id: "returns.reason-error"
    }))), ReturnsAddSingle_jsx("div", {
      className: "mt-3 returns-add-single__box-gray"
    }, ReturnsAddSingle_jsx("p", {
      className: "mb-0 returns-add-single__text2"
    }, this.state.reasonComment)), ReturnsAddSingle_jsx(external_react_localize_redux_["Translate"], null, ({
      translate: t
    }) => {
      return ReturnsAddSingle_jsx("textarea", {
        value: this.state.requestComment,
        onChange: this.handleCommentChange,
        placeholder: t("returns.return-des-placeholder"),
        className: "gray__input order-review__text-area",
        required: true
      });
    })), ReturnsAddSingle_jsx("div", {
      className: "col-12"
    }, ReturnsAddSingle_jsx("div", {
      className: "returns-add-single__slc-cnt"
    }, ReturnsAddSingle_jsx("p", {
      className: "returns-add-single__text3 returns-add-single__text3--bold"
    }, ReturnsAddSingle_jsx(external_react_localize_redux_["Translate"], {
      id: "returns.req-type"
    })), ReturnsAddSingle_jsx(common["z" /* SelectBox2 */], {
      className: "returns-add-single__select-box",
      onChange: this.handleSelectChange.bind(this)
    }, this.state.actionOptions.map(item => {
      return ReturnsAddSingle_jsx(common["z" /* SelectBox2 */].SelectItem, {
        key: item.returningTypeId,
        handleSelect: this.selecAction,
        name: item.returningTypeTitle,
        value: item.returningTypeId
      }, ReturnsAddSingle_jsx("span", {
        className: "order-review__text"
      }, item.returningTypeTitle));
    })), this.state.actionReasonError && ReturnsAddSingle_jsx("span", {
      className: "error-text"
    }, ReturnsAddSingle_jsx(external_react_localize_redux_["Translate"], {
      id: "returns.action-error"
    }))), ReturnsAddSingle_jsx(external_react_slidedown_default.a, null, this.state.showRefundDetail && ReturnsAddSingle_jsx("div", {
      className: "returns-add-single__box-gray"
    }, ReturnsAddSingle_jsx("div", {
      className: "text-align-right"
    }, ReturnsAddSingle_jsx("img", {
      src: img_jyal_backicon_default.a,
      alt: "jyal refund icon",
      className: "d-inline"
    }), ReturnsAddSingle_jsx("span", {
      style: {
        verticalAlign: "middle"
      },
      className: "d-inline ml-4 orders__header-gray-text"
    }, "Refund to Wallet")), ReturnsAddSingle_jsx("p", {
      className: "mb-0 mt-3 returns-add-single__text2"
    }, "The amount of returned or canceled purchases will be refunded to your wallet")))), ReturnsAddSingle_jsx(Responsive["f" /* ProtraitPhonesAndBigger */], null, ReturnsAddSingle_jsx("button", {
      onClick: this.handleSubmit.bind(this),
      className: "primary-btn order-review__submit-btn"
    }, this.state.showButtonLoader ? ReturnsAddSingle_jsx(common["s" /* Loading */], {
      type: "white",
      width: "20px",
      height: "20px"
    }) : ReturnsAddSingle_jsx(external_react_localize_redux_["Translate"], {
      id: "returns.submit-req"
    }))), ReturnsAddSingle_jsx(Responsive["e" /* ProtraitPhones */], null, ReturnsAddSingle_jsx("div", {
      className: "checkout-fix"
    }, ReturnsAddSingle_jsx("button", {
      onClick: this.handleSubmit.bind(this),
      className: "primary-btn returns__add-btn"
    }, this.state.showButtonLoader ? ReturnsAddSingle_jsx(common["s" /* Loading */], {
      type: "white",
      width: "20px",
      height: "20px"
    }) : ReturnsAddSingle_jsx(external_react_localize_redux_["Translate"], {
      id: "returns.submit-req"
    }))))));
  }

});
// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Returns/ReturnsLayouts/index.js





// EXTERNAL MODULE: ./assets/icons/add-icon.svg
var add_icon = __webpack_require__("11Tc");

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Returns/Returns.jsx
var Returns_jsx = external_react_default.a.createElement;

function Returns_extends() { Returns_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Returns_extends.apply(this, arguments); }

function Returns_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import "./Returns.scss";
// import "./Returns-rtl.scss";











class Returns_Returns extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Returns_defineProperty(this, "selectItemForReturn", item => {
      this.setState({
        item: item
      });
    });

    this.state = {
      item: {}
    }; //this code is for Development purpose

    this.lang = this.props.lang;
  }

  render() {
    return Returns_jsx("section", {
      className: "returns"
    }, Returns_jsx(external_react_router_["Switch"], null, Returns_jsx(external_react_router_["Route"], {
      path: `${this.props.match.path}/add/:id`,
      render: props => {
        return Returns_jsx(ReturnsAddSingle, Returns_extends({}, props, {
          data: this.state.item,
          currency: this.props.currency,
          lang: this.props.lang
        }));
      }
    }), Returns_jsx(external_react_router_["Route"], {
      path: `${this.props.match.path}/add`,
      render: props => {
        return Returns_jsx(ReturnsAdd, {
          currency: this.props.currency
        });
      }
    }), Returns_jsx(external_react_router_["Route"], {
      path: `${this.props.match.path}`
    }, Returns_jsx(BoxStyle2_BoxStyle2["a" /* default */], {
      className: "returns__box"
    }, Returns_jsx("section", {
      className: "goodDetailTabs"
    }, Returns_jsx(external_react_tabs_["Tabs"], null, Returns_jsx(external_react_tabs_["TabList"], null, Returns_jsx(external_react_tabs_["Tab"], null, Returns_jsx(external_react_localize_redux_["Translate"], {
      id: "returns.return-request-tab1"
    })), Returns_jsx(external_react_tabs_["Tab"], null, Returns_jsx(external_react_localize_redux_["Translate"], {
      id: "returns.return-delivered-tab2"
    })), Returns_jsx(Responsive["d" /* LandScapePhonesAndBigger */], null, Returns_jsx(external_react_router_dom_["Link"], {
      to: `${this.props.match.url}/add`,
      className: "primary-btn returns__add-btn primary-btn--icon"
    }, Returns_jsx(add_icon["ReactComponent"], {
      className: "primary-btn-icon"
    }), Returns_jsx(external_react_localize_redux_["Translate"], {
      id: "returns.add-btn"
    })))), Returns_jsx(external_react_tabs_["TabPanel"], null, Returns_jsx(ReturnsRequested, {
      currency: this.props.currency
    })), Returns_jsx(external_react_tabs_["TabPanel"], null, Returns_jsx(ReturnsDelivered, {
      currency: this.props.currency
    })))), Returns_jsx(Responsive["c" /* LandScapePhones */], null, Returns_jsx("div", {
      className: "checkout-fix"
    }, Returns_jsx(external_react_router_dom_["Link"], {
      to: `${this.props.match.url}/add`,
      className: "primary-btn returns__add-btn primary-btn--icon"
    }, Returns_jsx(external_react_localize_redux_["Translate"], {
      id: "returns.add-btn"
    }))))))));
  }

}

const Returns_mapStateToProps = state => {
  return {
    lang: state.appConfig.lang.code,
    currency: state.appConfig.currency.code
  };
};

/* harmony default export */ var PanelPages_Returns_Returns = (Object(external_react_redux_["connect"])(Returns_mapStateToProps)(Returns_Returns));
// EXTERNAL MODULE: ./assets/icons/img-credit-card.svg
var img_credit_card = __webpack_require__("Dmrs");
var img_credit_card_default = /*#__PURE__*/__webpack_require__.n(img_credit_card);

// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Preference/Preference.jsx
var Preference_jsx = external_react_default.a.createElement;

function Preference_extends() { Preference_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Preference_extends.apply(this, arguments); }













const WALLET = 1;
const CART = 2;

const Preference_renderBoxHeader = () => {
  return Preference_jsx("div", {
    className: "profile-edit__header-container"
  }, Preference_jsx("h2", {
    className: "profile-edit__box-header"
  }, Preference_jsx(external_react_localize_redux_["Translate"], {
    id: "preference.preference"
  })), Preference_jsx("p", {
    className: "profile-edit__box-subheader"
  }, Preference_jsx(external_react_localize_redux_["Translate"], {
    id: "preference.msg1"
  })));
};

let selectedItem = null;

const Preference = () => {
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  const {
    0: saveLoading,
    1: setSaveLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: result,
    1: setResult
  } = Object(external_react_["useState"])(null);
  const lang = Object(external_react_redux_["useSelector"])(appConfigSlice["h" /* selectLang */]);
  Object(external_react_["useEffect"])(() => {
    client_getPreference().then(res => {
      setResult(res.result);
      selectedItem = res.result;
      setLoading(false);
    }).catch(err => {
      external_react_toastify_["toast"].error(err.response.data.message, Object(toast["a" /* getToastConfig */])());
    });
  }, []);

  const handleSelectItem = item => {
    console.log(item);
    if (item.length > 0) selectedItem = item[0].name;else selectedItem = null;
    console.log(selectedItem);
  };

  const handleSave = async () => {
    if (saveLoading) return;
    console.log(selectedItem); // return;

    if (!selectedItem) {
      external_react_toastify_["toast"].error(Object(helpers["c" /* getErrorMsg */])(lang, "select-Item"), Object(toast["a" /* getToastConfig */])());
      return;
    }

    setSaveLoading(true);

    try {
      const res = await client_setPreference(selectedItem);
      external_react_toastify_["toast"].success(Object(helpers["c" /* getErrorMsg */])(lang, "refund-saved"), Object(toast["a" /* getToastConfig */])());
    } catch (err) {
      external_react_toastify_["toast"].error(err.response.data.message, Object(toast["a" /* getToastConfig */])());
    } finally {
      setSaveLoading(false);
    }
  };

  return Preference_jsx(external_react_default.a.Fragment, null, Preference_jsx(external_react_toastify_["ToastContainer"], Preference_extends({
    rtl: Object(isRtl["a" /* isRtl */])(lang)
  }, Object(toast["a" /* getToastConfig */])())), Preference_jsx(common["b" /* BoxStyle1 */], {
    headerContent: Preference_renderBoxHeader()
  }, Preference_jsx("section", {
    className: "container-fluid profile-edit preference"
  }, loading ? Preference_jsx(common["s" /* Loading */], {
    type: "gray",
    width: "50px",
    height: "50px"
  }) : Preference_jsx(external_react_default.a.Fragment, null, Preference_jsx(common["A" /* SelectBox3 */], {
    selectedItems: result ? [{
      name: result
    }] : [],
    className: "payment__select-cnt mt-5 mb-5",
    onChange: handleSelectItem
  }, Preference_jsx(common["A" /* SelectBox3 */].SelectItem, {
    name: WALLET
  }, Preference_jsx("img", {
    src: ajyal_wallet_default.a,
    className: "payment__icon",
    alt: "cash icon"
  }), Preference_jsx("span", {
    className: "payment__text4 payment__text4--margin"
  }, Preference_jsx(external_react_localize_redux_["Translate"], {
    id: "preference.wallet"
  })), Preference_jsx("p", {
    className: "payment__text2 mt-3"
  }, Preference_jsx(external_react_localize_redux_["Translate"], {
    id: "preference.wallet-msg"
  }))), Preference_jsx(common["A" /* SelectBox3 */].SelectItem, {
    name: CART
  }, Preference_jsx("img", {
    src: img_credit_card_default.a,
    className: "payment__icon",
    alt: "cash icon"
  }), Preference_jsx("span", {
    className: "payment__text4 payment__text4--margin"
  }, Preference_jsx(external_react_localize_redux_["Translate"], {
    id: "preference.card"
  })), Preference_jsx("p", {
    className: "payment__text2 mt-3"
  }, Preference_jsx(external_react_localize_redux_["Translate"], {
    id: "preference.card-msg"
  })))), Preference_jsx("div", {
    className: "preference__btn-cnt"
  }, Preference_jsx("button", {
    className: "primary-btn",
    onClick: handleSave
  }, saveLoading ? Preference_jsx(common["s" /* Loading */], {
    type: "white",
    with: "20px",
    height: "20px"
  }) : Preference_jsx(external_react_localize_redux_["Translate"], {
    id: "common.save"
  })))))));
};

/* harmony default export */ var Preference_Preference = (Preference);
// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/Claims/Claims.jsx
var Claims_jsx = external_react_default.a.createElement;

/* harmony default export */ var Claims = (() => {
  return Claims_jsx("div", null, " Hello i am Claims page ");
});
// CONCATENATED MODULE: ./components/app/pages/UserPanel/PanelPages/index.js









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

/***/ "J50Q":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/menu - credit-3bbf79739b42dd2ea769762aeaf33897.svg";

/***/ }),

/***/ "JJGT":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/faild-61995b576bbebee8aba18fb2550fac47.svg";

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

/***/ "L6ya":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/trash-ec0c35c874f82e64459bbfa6c0b86cee.svg";

/***/ }),

/***/ "Lnvz":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-header-heart-74bd62157b805a9066be41f03bfa60b7.svg";

/***/ }),

/***/ "MF5A":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/header-store-32eff875fd8bb4e5cb35ddc69af18f16.svg";

/***/ }),

/***/ "MeAH":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/return-dcb6a4ec652e11480adb4e66bc6f69ad.svg";

/***/ }),

/***/ "N//i":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/menu - payment-52e25301f90689b6825f4f9418dcaae8.svg";

/***/ }),

/***/ "NZu/":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJoZWFkZXJfLV9zZWFyY2hfLV9sZWZ0IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGRhdGEtbmFtZT0iaGVhZGVyIC0gc2VhcmNoIC0gbGVmdCIgdmlld0JveD0iMCAwIDE2IDE2Ij4NCiAgICA8cGF0aCBpZD0iUGF0aF83NyIgZmlsbD0iIzE3Mjg0MCIgZD0iTS4xIDE0LjkxNGw0LjYzMS00LjYzNGE2LjMyNiA2LjMyNiAwIDEgMSAuOTQuOTRsLTQuNjM0IDQuNjMzYS4zMzIuMzMyIDAgMCAxLS40NyAwbC0uNDctLjQ3YS4zMzIuMzMyIDAgMCAxIC4wMDMtLjQ2OXpNOS42MzcgMTEuM2E0Ljk4NSA0Ljk4NSAwIDEgMC00Ljk4NS00Ljk4NkE0Ljk5IDQuOTkgMCAwIDAgOS42MzcgMTEuM3oiIGRhdGEtbmFtZT0iUGF0aCA3NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjA0OSAuMDI0KSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "OCln":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-paypal-c428ce58c966341c214c2fbeac92799b.svg";

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

/***/ "QkQT":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-american-c2c3550fcc19dcc706247323b672b830.svg";

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

/***/ "Sdyw":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/empty-payment-5cdc5caccea548a5bcf2c40f62371ade.svg";

/***/ }),

/***/ "Shty":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/menu - orders-d888f08bcbbbb5bc237365abf20cb5df.svg";

/***/ }),

/***/ "SnCT":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-star-59890f366f3ee6e5aab513cfe99db89d.svg";

/***/ }),

/***/ "T/AL":
/***/ (function(module, exports) {



/***/ }),

/***/ "TLen":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_localize_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tepj");
/* harmony import */ var react_localize_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_back_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KoxA");
/* harmony import */ var _assets_icons_back_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_back_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("E/xK");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_icons_placeholder_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Y7pu");
/* harmony import */ var _assets_icons_placeholder_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_placeholder_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_icons_5_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("A4yD");
/* harmony import */ var _assets_icons_5_gif__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_5_gif__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("GNgB");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_geocode__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_icons_target_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("rECn");
/* harmony import */ var _assets_icons_target_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_target_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("FWZJ");
/* harmony import */ var _lib_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("C5tE");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _appConfigSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("o2tl");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













 // const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SelectAddress extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "addressWindowContent", () => {
      return `<div class="map__add-cnt">
    <h3 class="map__header"></h3>
    <div class="map__content">
    <img class="map__loading-icon" src="${_assets_icons_5_gif__WEBPACK_IMPORTED_MODULE_5___default.a}" />
    </div>
    </div>`;
    });

    _defineProperty(this, "handleBackClick", () => {
      this.props.handleSituation({
        type: "hideMap"
      });
    });

    _defineProperty(this, "setAddressInWindowContent", response => {
      const name = response.results[1].formatted_address;
      const addr = response.results[0].formatted_address;
      this.infowindow.setContent(`<div class="map__add-cnt">
    <h3 class="map__header">${name}</h3>
    <div class="map__content">
    ${addr}
    </div>
    </div>`);
    });

    _defineProperty(this, "getAddress", (lat, lng, cb) => {
      react_geocode__WEBPACK_IMPORTED_MODULE_6___default.a.setApiKey(this.API_KEY);
      react_geocode__WEBPACK_IMPORTED_MODULE_6___default.a.fromLatLng(lat, lng, null, this.props.lang).then(response => {
        const address = response.results[0].formatted_address;

        if (this.props.selectedCountry !== undefined && this.props.selectedCountry !== null) {
          const currentCountry = response.results[1].address_components.find(x => x.types[0] == "country").long_name;

          if (currentCountry !== this.props.selectedCountry) {
            this.markers.forEach(marker => {
              marker.setMap(null);
            });
            react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"].error(Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_9__[/* getErrorMsg */ "c"])(this.props.lang, "error-city-create-shop"), Object(_lib_toast__WEBPACK_IMPORTED_MODULE_10__[/* getToastConfig */ "a"])());
          }
        } // console.log(address);


        cb(response); // this.setAddressInWindowContent(response.results[1].formatted_address,address);
      }, error => {
        console.error(error);
      });
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
            icon: _assets_icons_placeholder_svg__WEBPACK_IMPORTED_MODULE_4___default.a
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
            return;
          }

          const icon = {
            url: _assets_icons_placeholder_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
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

      if (this.props.lat && this.props.lng && !this.props.dontSetLocation) {
        const pos = {
          lat: this.props.lat,
          lng: this.props.lng
        };
        this.markers.push(new maps.Marker({
          position: pos,
          map,
          icon: _assets_icons_placeholder_svg__WEBPACK_IMPORTED_MODULE_4___default.a
        }));
        this.selectedMarker = this.markers[0];
        this.infowindow.setContent(this.addressWindowContent());
        this.infowindow.open(map, this.selectedMarker);
        this.getAddress(this.selectedMarker.position.lat(), this.selectedMarker.position.lng(), this.setAddressInWindowContent);
      }

      map.addListener("click", e => {
        this.markers.forEach(marker => {
          marker.setMap(null);
        });
        this.markers = [];
        this.markers.push(new maps.Marker({
          position: e.latLng,
          map,
          icon: _assets_icons_placeholder_svg__WEBPACK_IMPORTED_MODULE_4___default.a
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
          let iso = "";

          for (let index = 0; index < response.results[0].address_components.length; index++) {
            if (response.results[0].address_components[index].types.includes("country")) {
              iso = response.results[0].address_components[index].short_name;
            }
          }

          this.props.setData({
            address: response.results[0].formatted_address,
            Location: response.results[0].geometry.location,
            iso: iso
          });
          this.handleBackClick();
        });
      });
    });

    this.searchInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.targetBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.markers = [];
    this.selectedMarker = null;
    this.API_KEY = "AIzaSyDA1IUurSPV52x4PbyUM3aeVA3AAIEtAwo";
    this.infowindow = null;
    this.map = null;
    this.maps = null;
    this.state = {
      showSubmitLoading: false
    };
    this.center = {
      lat: this.props.lat ? this.props.lat : parseInt("26.064832437137248"),
      lng: this.props.lng ? this.props.lng : parseInt("50.55588953197002")
    };
    this.zoom = this.props.zoom ? this.props.zoom : 11;
    this.setCurLocation.bind(this);
  }

  componentDidMount() {}

  render() {
    return __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], null, ({
      translate: t
    }) => {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
        className: "mapAddress"
      }, __jsx("header", {
        className: "mapAddress__header"
      }, __jsx("a", {
        on: true,
        onClick: this.handleBackClick
      }, __jsx(_assets_icons_back_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"], {
        className: "mapAddress__back-icon"
      }), __jsx("span", {
        className: "mapAddress__header-text"
      }, __jsx(react_localize_redux__WEBPACK_IMPORTED_MODULE_1__["Translate"], {
        id: "addresses.addresses"
      })))), __jsx("div", {
        id: "map",
        className: "mapAddress__map-cnt"
      }, __jsx("input", {
        placeholder: t("addresses.search-loc-placeholder"),
        type: "text",
        className: "gray__input mapAddress__searchInput",
        ref: this.searchInput
      }), __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
      }), __jsx("button", {
        onClick: $event => this.setCurLocation($event),
        className: "mapAddress__curr-btn",
        ref: this.targetBtn,
        type: "button"
      }, __jsx(_assets_icons_target_svg__WEBPACK_IMPORTED_MODULE_7__["ReactComponent"], {
        className: "mapAddress__target-icon"
      }))), __jsx("div", {
        className: "mapAddress__btn-cnt"
      }, __jsx("button", {
        onClick: this.handleSubmit,
        className: "primary-btn add-address-step1__btn",
        type: "button"
      }, this.state.showSubmitLoading ? __jsx("img", {
        className: "map__loading-icon",
        src: _assets_icons_5_gif__WEBPACK_IMPORTED_MODULE_5___default.a
      }) : t("addresses.confirm-loc")))));
    });
  }

}

const mapStateToProps = state => {
  return {
    lang: Object(_appConfigSlice__WEBPACK_IMPORTED_MODULE_12__[/* selectLang */ "h"])(state)
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps)(SelectAddress));

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

/***/ "VS4v":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/tick-4f72f9399b329433571b0460b5cbfa68.svg";

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

/***/ "WcO4":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJoZWFkZXJfLV9hcnJvd19kb3duIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGRhdGEtbmFtZT0iaGVhZGVyIC0gYXJyb3cgZG93biIgdmlld0JveD0iMCAwIDE2IDE2Ij4NCiAgICA8ZyBpZD0icGxheSIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTc0LjEwNyAtMTIuNDU5KSI+DQogICAgICAgIDxwYXRoIGlkPSJQYXRoXzQwNSIgZmlsbD0iI2RiZGJkYiIgZD0iTTE5Ny42NTUgMTUzLjAzNGwtNS4wOTQtMy42NTRhLjM0Mi4zNDIgMCAwIDAtLjUuMTIxLjQ0MS40NDEgMCAwIDAtLjA1OC4yMjF2Ny4zMDlhLjM4Ny4zODcgMCAwIDAgLjM2My40MDcuMzM3LjMzNyAwIDAgMCAuMi0uMDY1bDUuMDk0LTMuNjU0YS40MzUuNDM1IDAgMCAwIC4xMS0uNTYxLjM4OC4zODggMCAwIDAtLjExLS4xMjN6IiBkYXRhLW5hbWU9IlBhdGggNDA1Ii8+DQogICAgPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "WrI8":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/email-veri-bd1535442095ca32fe3f51bc13505f86.png";

/***/ }),

/***/ "Wsh4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ PanelDesktop_PanelDesktop; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// EXTERNAL MODULE: ./components/app/footer/index.js + 2 modules
var footer = __webpack_require__("tAkY");

// EXTERNAL MODULE: ./components/app/header/index.js + 5 modules
var header = __webpack_require__("/7k0");

// EXTERNAL MODULE: ./components/app/pages/UserPanel/PanelLayouts/index.js
var PanelLayouts = __webpack_require__("iAjL");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-localize-redux"
var external_react_localize_redux_ = __webpack_require__("tepj");

// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__("CSOn");

// EXTERNAL MODULE: external "react-router"
var external_react_router_ = __webpack_require__("MGin");

// EXTERNAL MODULE: ./components/app/pages/UserPanel/PanelPages/index.js + 31 modules
var PanelPages = __webpack_require__("G3Sf");

// EXTERNAL MODULE: ./Responsive.js
var Responsive = __webpack_require__("jxY/");

// EXTERNAL MODULE: ./components/app/ScrollToTop/ScrollToTop.jsx
var ScrollToTop = __webpack_require__("xbBa");

// EXTERNAL MODULE: ./appConfigSlice.js
var appConfigSlice = __webpack_require__("o2tl");

// CONCATENATED MODULE: ./components/app/pages/UserPanel/UserPanel.jsx
var __jsx = external_react_default.a.createElement;

 // import ProfileTranslations from "./../../../../translations/user-panel-translations.json";










class UserPanel_UserPanel extends external_react_default.a.Component {
  constructor(props) {
    super(props); // this.content = data[this.lang[1]].search;
    // this.content2 = data2[this.lang[1]].goodsSliderComponent;
    // this.props.addTranslation(ProfileTranslations);

    this.matchedPath = this.props.loc;
  }

  renderBoxHeader() {
    return __jsx("h2", {
      className: "user-panel__box-header"
    }, __jsx(external_react_localize_redux_["Translate"], {
      id: "nav.profile"
    }));
  }

  render() {
    // console.log(this.matchedPath)
    return __jsx("div", {
      className: "container siteWidthContainer container-home container-home-profile"
    }, __jsx("div", {
      className: "row"
    }, __jsx(Responsive["b" /* DesktopsAndBigger */], {
      className: "col-2-5 pl-0"
    }, __jsx("div", {
      style: {
        marginBottom: "-25px"
      }
    }, __jsx(PanelLayouts["a" /* PanelNavi */], {
      loc: this.matchedPath
    }))), __jsx("div", {
      className: "col padd-sm-0"
    }, __jsx(ScrollToTop["a" /* ScrollToTopReactRouter */], null), __jsx("section", {
      className: "user-panel"
    }, __jsx(external_react_router_["Switch"], null, __jsx(external_react_router_["Route"], {
      strict: true,
      path: `${this.matchedPath}/orders`,
      component: PanelPages["d" /* Orders */]
    }), __jsx(external_react_router_["Route"], {
      path: `${this.matchedPath}/addresses`,
      component: PanelPages["a" /* Addresses */]
    }), __jsx(external_react_router_["Route"], {
      path: `${this.matchedPath}/payment`,
      component: PanelPages["e" /* Payment */]
    }), __jsx(external_react_router_["Route"], {
      path: `${this.matchedPath}/credits`,
      component: PanelPages["c" /* Credits */]
    }), __jsx(external_react_router_["Route"], {
      path: `${this.matchedPath}/returns`,
      component: PanelPages["h" /* Returns */]
    }), __jsx(external_react_router_["Route"], {
      path: `${this.matchedPath}/preference`,
      component: PanelPages["f" /* Preference */]
    }), __jsx(external_react_router_["Route"], {
      path: `${this.matchedPath}/claims`,
      component: PanelPages["b" /* Claims */]
    }), __jsx(external_react_router_["Route"], {
      strict: true,
      path: `${this.matchedPath}/profile`,
      component: PanelPages["g" /* Profile */]
    }))))));
  }

}

const mapStateToProps = state => {
  return {
    lang: Object(appConfigSlice["h" /* selectLang */])(state)
  };
};

/* harmony default export */ var pages_UserPanel_UserPanel = (Object(external_react_redux_["connect"])(mapStateToProps)(UserPanel_UserPanel));
// EXTERNAL MODULE: ./lib/isServer.js
var isServer = __webpack_require__("zo9w");

// CONCATENATED MODULE: ./pages/[lang-curr]/panel/PanelDesktop.jsx
var PanelDesktop_jsx = external_react_default.a.createElement;






const context = {};
class PanelDesktop_PanelDesktop extends external_react_default.a.Component {
  render() {
    const userPanel = PanelDesktop_jsx(pages_UserPanel_UserPanel, {
      lang: this.props.lang,
      loc: this.props.loc
    });

    return PanelDesktop_jsx(external_react_default.a.Fragment, null, Object(isServer["a" /* isServer */])() ? PanelDesktop_jsx(external_react_router_dom_["StaticRouter"], {
      context: context,
      location: this.props.router.asPath
    }, PanelDesktop_jsx(header["a" /* Header */], {
      data: this.props.data.header,
      lang: this.props.lang,
      curr: this.props.curr,
      loc: this.props.loc,
      isDesktop: true
    }), userPanel) : PanelDesktop_jsx(external_react_router_dom_["BrowserRouter"], null, PanelDesktop_jsx(header["a" /* Header */], {
      data: this.props.data.header,
      lang: this.props.lang,
      curr: this.props.curr,
      loc: this.props.loc,
      isDesktop: true
    }), userPanel), PanelDesktop_jsx(footer["a" /* default */], {
      data: this.props.data.footer,
      lang: this.props.lang,
      isDesktop: true,
      cartCount: this.props.data.header.cartCount
    }));
  }

}

/***/ }),

/***/ "WsuK":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Adidas_Logo-d4757a8d1fd43ad0e7708d3f6e217b70.svg";

/***/ }),

/***/ "Wvg8":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/empty wallet-2cf8d86021cbb874277645f90f4a4f43.svg";

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

/***/ "ZoKj":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-header-cart-1caa0c5cd0cca5af2347526a490ba5de.svg";

/***/ }),

/***/ "aEEx":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/house-12f9e041828b54aa65e327e5ffda0012.svg";

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

/***/ "e9h6":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/credit-card-ea217eccc5f4b2ef5233e286f4879c14.svg";

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

/***/ "hG8t":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-heart-fill-a1b0ab587d7961a5ff9da6cbe4985bc1.svg";

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

/***/ "nASZ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/google-play-bde2a881dacc8970b860187ff01220b3.png";

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

/***/ "ozmN":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4LjE2NSIgaGVpZ2h0PSI4LjE2NSIgdmlld0JveD0iMCAwIDguMTY1IDguMTY1Ij4NCiAgICA8ZyBpZD0iY2xvc2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLS4wMDIpIj4NCiAgICAgICAgPHBhdGggaWQ9IlBhdGhfNTM3IiBmaWxsPSIjMTcyODQwIiBkPSJNNy44ODkgMS42MUw1LjQxNSA0LjA4NGwyLjQ3NCAyLjQ3NWEuOTQyLjk0MiAwIDEgMS0xLjMzMiAxLjMzMkw0LjA4MiA1LjQxNyAxLjYwOCA3Ljg5MUEuOTQyLjk0MiAwIDEgMSAuMjc2IDYuNTU4TDIuNzUgNC4wODQuMjc2IDEuNjFBLjk0Mi45NDIgMCAwIDEgMS42MDguMjc4bDIuNDc0IDIuNDc0TDYuNTU3LjI3OEEuOTQyLjk0MiAwIDAgMSA3Ljg4OSAxLjYxeiIgZGF0YS1uYW1lPSJQYXRoIDUzNyIvPg0KICAgIDwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "p+aC":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ajyal-wallet-a1a7037fa5659d7e73fec0b3f548ac17.png";

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

/***/ "tfaz":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/header-deals-cbbfb7df7512117d38c485231505a22c.svg";

/***/ }),

/***/ "tyI+":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-radio-button-on-0d1185a63aadfae4603b91a02f9a7504.svg";

/***/ }),

/***/ "unSA":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/emptybox-2ef49e8c524531daae5706ea16c4f830.svg";

/***/ }),

/***/ "v3Um":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Help-fdfe5a5407f1b17c07628cb887e1c981.svg";

/***/ }),

/***/ "vh5R":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/menu - Claims-9a1d5e96f7d80029420770576b767d04.svg";

/***/ }),

/***/ "vmdf":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJkb3duLWFycm93IiB3aWR0aD0iMTIuNjg3IiBoZWlnaHQ9IjcuNDk0IiB2aWV3Qm94PSIwIDAgMTIuNjg3IDcuNDk0Ij4NCiAgICA8ZyBpZD0iR3JvdXBfMTQwNiIgZGF0YS1uYW1lPSJHcm91cCAxNDA2Ij4NCiAgICAgICAgPHBhdGggaWQ9IlBhdGhfNDY4IiBmaWxsPSIjZmZmIiBkPSJNMTIuNDg0LjYyNmwtLjQxNS0uNDE4YS43LjcgMCAwIDAtLjk4MiAwTDYuMzQ2IDQuOTQ5IDEuNi4yYS43LjcgMCAwIDAtLjk4MSAwTC4yLjYxOGEuNy43IDAgMCAwIDAgLjk4Mmw1LjY1NCA1LjY3MWEuNzA5LjcwOSAwIDAgMCAuNDkyLjIyMy43MDkuNzA5IDAgMCAwIC40OTEtLjIyM2w1LjY0Ni01LjY1NmEuNy43IDAgMCAwIC4yLS41LjY5NC42OTQgMCAwIDAtLjE5OS0uNDg5eiIgZGF0YS1uYW1lPSJQYXRoIDQ2OCIvPg0KICAgIDwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "w+QA":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/return-processing-14d5be51db43c43d973eef5d69863abb.svg";

/***/ }),

/***/ "wW2i":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/linkdin-5ccf750a7727103c3b7ad564180a3232.svg";

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

/***/ "xbBa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollToTopReactRouter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oncg");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_isServer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zo9w");




function ScrollToTopReactRouter() {
  const {
    pathname
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    !Object(_lib_isServer__WEBPACK_IMPORTED_MODULE_2__[/* isServer */ "a"])() && window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/***/ }),

/***/ "xsd1":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/twitter-588693a50fcbf2b6ac4bd27a40ed650f.svg";

/***/ }),

/***/ "yKZ5":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/porcessing-5be232c621ff6706de2ac51b036981ee.svg";

/***/ }),

/***/ "zP6j":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-united-states-2a2114553ff244d1cfbfbef54f0e200b.svg";

/***/ })

};;