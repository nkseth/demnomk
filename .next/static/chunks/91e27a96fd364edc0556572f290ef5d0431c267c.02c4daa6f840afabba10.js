(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{"53UD":function(e,t){e.exports="/_next/static/images/like-small-0d98e61f2213c8f403a0a6668ecac6b8.svg"},"5CTP":function(e,t){e.exports="/_next/static/images/Component88-00358f827c18f7d71a0657e81e561bff.svg"},"8yPs":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4LjE2NSIgaGVpZ2h0PSI4LjE2NSIgdmlld0JveD0iMCAwIDguMTY1IDguMTY1Ij4NCiAgICA8ZyBpZD0iY2xvc2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLS4wMDIpIj4NCiAgICAgICAgPHBhdGggaWQ9IlBhdGhfNTM3IiBmaWxsPSIjYWNiMWI4IiBkPSJNNy44ODkgMS42MUw1LjQxNSA0LjA4NGwyLjQ3NCAyLjQ3NWEuOTQyLjk0MiAwIDEgMS0xLjMzMiAxLjMzMkw0LjA4MiA1LjQxNyAxLjYwOCA3Ljg5MUEuOTQyLjk0MiAwIDEgMSAuMjc2IDYuNTU4TDIuNzUgNC4wODQuMjc2IDEuNjFBLjk0Mi45NDIgMCAwIDEgMS42MDguMjc4bDIuNDc0IDIuNDc0TDYuNTU3LjI3OEEuOTQyLjk0MiAwIDAgMSA3Ljg4OSAxLjYxeiIgZGF0YS1uYW1lPSJQYXRoIDUzNyIvPg0KICAgIDwvZz4NCjwvc3ZnPg0K"},Fsc3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=s?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(a,n,o):a[n]=e[n]}a.default=e,t&&t.set(e,a);return a}(a("q1tI")),o=(s=a("TSYQ"))&&s.__esModule?s:{default:s};function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var a,s,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s=this,(a=!(o=p(t).call(this,e))||"object"!==c(o)&&"function"!==typeof o?d(s):o).state={selected:a.parseValue(e.value,e.options)||{label:"undefined"===typeof e.placeholder?"Select...":e.placeholder,value:""},isOpen:!1},a.dropdownRef=(0,n.createRef)(),a.mounted=!0,a.handleDocumentClick=a.handleDocumentClick.bind(d(a)),a.fireChangeEvent=a.fireChangeEvent.bind(d(a)),a}var a,s,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),a=t,(s=[{key:"componentDidUpdate",value:function(e){if(this.props.value!==e.value)if(this.props.value){var t=this.parseValue(this.props.value,this.props.options);t!==this.state.selected&&this.setState({selected:t})}else this.setState({selected:{label:"undefined"===typeof this.props.placeholder?"Select...":this.props.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&"function"===typeof this.props.onFocus&&this.props.onFocus(this.state.isOpen),"mousedown"===e.type&&0!==e.button||(e.stopPropagation(),e.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(e,t){var a;if("string"===typeof e)for(var s=0,n=t.length;s<n;s++)if("group"===t[s].type){var o=t[s].items.filter((function(t){return t.value===e}));o.length&&(a=o[0])}else"undefined"!==typeof t[s].value&&t[s].value===e&&(a=t[s]);return a||e}},{key:"setValue",value:function(e,t){var a={selected:{value:e,label:t},isOpen:!1};this.fireChangeEvent(a),this.setState(a)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var t,a=e.value;"undefined"===typeof a&&(a=e.label||e);var s=e.label||e.value||e,i=a===this.state.selected.value||a===this.state.selected,c=(r(t={},"".concat(this.props.baseClassName,"-option"),!0),r(t,e.className,!!e.className),r(t,"is-selected",i),t),l=(0,o.default)(c);return n.default.createElement("div",{key:a,className:l,onMouseDown:this.setValue.bind(this,a,s),onClick:this.setValue.bind(this,a,s),role:"option","aria-selected":i?"true":"false"},s)}},{key:"buildMenu",value:function(){var e=this,t=this.props,a=t.options,s=t.baseClassName,o=a.map((function(t){if("group"===t.type){var a=n.default.createElement("div",{className:"".concat(s,"-title")},t.name),o=t.items.map((function(t){return e.renderOption(t)}));return n.default.createElement("div",{className:"".concat(s,"-group"),key:t.name,role:"listbox",tabIndex:"-1"},a,o)}return e.renderOption(t)}));return o.length?o:n.default.createElement("div",{className:"".concat(s,"-noresults")},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(this.dropdownRef.current.contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return"string"===typeof this.state.selected||""!==this.state.selected.value}},{key:"render",value:function(){var e,t,a,s,i,c=this.props,l=c.baseClassName,p=c.controlClassName,d=c.placeholderClassName,u=c.menuClassName,m=c.arrowClassName,h=c.arrowClosed,f=c.arrowOpen,_=c.className,b=this.props.disabled?"Dropdown-disabled":"",g="string"===typeof this.state.selected?this.state.selected:this.state.selected.label,v=(0,o.default)((r(e={},"".concat(l,"-root"),!0),r(e,_,!!_),r(e,"is-open",this.state.isOpen),e)),N=(0,o.default)((r(t={},"".concat(l,"-control"),!0),r(t,p,!!p),r(t,b,!!b),t)),y=(0,o.default)((r(a={},"".concat(l,"-placeholder"),!0),r(a,d,!!d),r(a,"is-selected",this.isValueSelected()),a)),I=(0,o.default)((r(s={},"".concat(l,"-menu"),!0),r(s,u,!!u),s)),j=(0,o.default)((r(i={},"".concat(l,"-arrow"),!0),r(i,m,!!m),i)),O=n.default.createElement("div",{className:y},g),w=this.state.isOpen?n.default.createElement("div",{className:I,"aria-expanded":"true"},this.buildMenu()):null;return n.default.createElement("div",{ref:this.dropdownRef,className:v},n.default.createElement("div",{className:N,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},O,n.default.createElement("div",{className:"".concat(l,"-arrow-wrapper")},f&&h?this.state.isOpen?f:h:n.default.createElement("span",{className:j}))),w)}}])&&l(a.prototype,s),i&&l(a,i),t}(n.Component);m.defaultProps={baseClassName:"Dropdown"};var h=m;t.default=h},HIpQ:function(e,t){e.exports="/_next/static/images/Returns-7fb7c25d22421d786c9b646db343c94d.svg"},TIcW:function(e,t,a){"use strict";a.d(t,"b",(function(){return S})),a.d(t,"a",(function(){return R})),a.d(t,"c",(function(){return F}));var s=a("1OyB"),n=a("vuIU"),o=a("JX7q"),i=a("Ji7U"),c=a("md7G"),r=a("foSv"),l=a("rePB"),p=a("q1tI"),d=a.n(p),u=(a("TozK"),a("BgOU"),a("umvX")),m=a("Fsc3"),h=a.n(m),f=a("53UD"),_=a("fnaZ"),b=a("mv05"),g=a("5CTP"),v=a("HIpQ"),N=a("HMs9"),y=a.n(N),I=a("YFqc"),j=a.n(I),O=a("FWZJ"),w=a("/MKj"),C=a("o2tl"),x=a("gtw1"),D=a("lCwK"),k=d.a.createElement;function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=Object(r.a)(e);if(t){var n=Object(r.a)(this).constructor;a=Reflect.construct(s,arguments,n)}else a=s.apply(this,arguments);return Object(c.a)(this,a)}}var E=function(e){Object(i.a)(a,e);var t=M(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),Object(l.a)(Object(o.a)(e),"handleRemoveItem",(function(t){t.preventDefault(),e.props.wishlistItem?e.props.handleRemoveFromWishlist(e.props.goodsId):e.props.removeItemFromCart(e.props.itemId)})),Object(l.a)(Object(o.a)(e),"handleQuantityChange",(function(t){var a=parseInt(t.value);e.props.handleItemQuantityChange(a,e.props.goodsId,e.props.providerId)})),Object(l.a)(Object(o.a)(e),"handleWishToCart",(function(t){t.preventDefault(),e.props.handleMoveWishToCart(e.props.goodsId,e.props.providerId)})),Object(l.a)(Object(o.a)(e),"renderDeliverType",(function(){var t=null;switch(e.props.method){case 1:t=k(d.a.Fragment,null,k("img",{src:"".concat("http://ajyal.webtreeonline.com/Uploads/Images/ShippingMethod","/").concat("1."+e.props.lang+".png"),alt:"marketpalce",className:"goodItem-s2__exp"}));break;case 6:t=k("img",{src:"".concat("http://ajyal.webtreeonline.com/Uploads/Images/ShippingMethod","/").concat("6."+e.props.lang+".png"),alt:"EXPRESS",className:"goodItem-s2__exp"});break;case 2:t=k("img",{src:"".concat("http://ajyal.webtreeonline.com/Uploads/Images/ShippingMethod","/").concat("2."+e.props.lang+".png"),alt:"AJYAL",className:"goodItem-s2__exp"});break;case 3:t=k("img",{src:"".concat("http://ajyal.webtreeonline.com/Uploads/Images/ShippingMethod","/").concat("3."+e.props.lang+".png"),alt:"UBEX",className:"goodItem-s2__exp"});break;case 5:t=k("img",{src:"".concat("http://ajyal.webtreeonline.com/Uploads/Images/ShippingMethod","/").concat("5."+e.props.lang+".png"),alt:"ARAMEX",className:"goodItem-s2__exp"});break;case 4:t=k("img",{src:"".concat("http://ajyal.webtreeonline.com/Uploads/Images/ShippingMethod","/").concat("4."+e.props.lang+".png"),alt:"DHL",className:"goodItem-s2__exp"});break;case 7:t=k("p",{class:"itemDetail__cityError"},k(u.b,{id:"detail.city-not"}))}return t})),e}return Object(n.a)(a,[{key:"render",value:function(){return k("div",{className:"goodItem-s2-container cart-item"},k("article",{className:"goodItem-s2"},k("div",{className:"goodItem-s2__left-container"},k("figure",{className:"goodItem-s2__fig"},k(y.a,{placeholder:k("img",{className:"goodItem-loader__img",src:"/assets/imgs/placeholder-v2.png"})},k("img",{alt:this.props.title,className:"goodItem-s2__img",src:"".concat("http://ajyal.webtreeonline.com/Uploads/Images/Goods","/").concat(this.props.goodsId,"/thumb-").concat(this.props.goodsImage)}))),k("div",{className:"goodItem-s2__left-right"},k("div",{className:"goodItem-s2__ns-con"},k("div",{className:"cart-item__model"},this.props.goodsBrand),k(j.a,{href:"/[usd-cur]/product/[...good]",as:"/".concat(this.props.curr,"-").concat(this.props.lang,"/product/").concat(this.props.goodsId,"/").concat(this.props.providerId,"/").concat(Object(O.l)(this.props.title))},k("a",{className:"goodItem-s2__name"},Object(O.n)(this.props.title))),!this.props.wishlistItem&&k(D.k,{show:!this.props.shippingAvailable||!this.props.exist,style:{marginTop:"-2px",width:"90%"},msg:this.props.exist?k(u.b,{id:"cart-cart.doesnt-exist-city"}):k(u.b,{id:"cart-cart.doesnt-exist-ava"})}),!this.props.wishlistItem&&this.props.goodsVariety&&k("div",{className:"cart-item__model-container"},k("ul",{className:"d-flex flex-wrap cart-item__varietyList"},this.props.goodsVariety.map((function(e){return k("li",{className:"d-flex"},k("span",{className:"cart-item__model cart-item__model--less-margin"},e.parameterTitle,":"),k("span",{className:"cart-item__model-num-value"},e.valueTitle))}))))),k("div",{className:"cart-item__store-name"},k("span",null,k(u.b,{id:"soldby"})),k("span",{className:"store"},this.props.storeName)),this.props.haveGuarantee&&k("div",{className:"cart-item__Guarantee"},k(g.ReactComponent,{className:"cart-item__Guarantee-icon"}),k("span",null,this.props.guaranteeMonthDuration,"\xa0",k(u.b,{id:"month-war"}))),this.props.returningAllowed&&k("div",{className:"cart-item__Guarantee"},k(v.ReactComponent,{className:"cart-item__Guarantee-icon"}),k("span",null,k(u.b,{id:"free-return"}))),k("div",{className:"cart-item-remove-like d-flex"},k("a",{href:"",className:this.props.wishlistItem?"cart-item__remove cart-item__remove--margin":"cart-item__remove",onClick:this.handleRemoveItem},k(_.ReactComponent,{className:"cart-item__text-icon cart-item__text-icon--remove"}),k(u.b,{id:"cart-cart.removeFromList"})),this.props.wishlistItem&&!this.props.saleWithCall&&k("a",{href:"",className:"cart-item__remove",onClick:this.handleWishToCart},k(b.ReactComponent,{className:"cart-item__text-icon"}),k(u.b,{id:"cart-wishlist.move-cart"})),this.props.cart&&k("a",{href:"",className:"cart-item__remove"},k(f.ReactComponent,{className:"cart-item__text-icon"}),k(u.b,{id:"cart-cart.move-whishlist"}))))),!this.props.withoutRight&&k("div",{className:"goodItem-s2__right-container cart-item__right"},this.props.saleWithCall?k("div",{className:"goodItem-s2__connect-provider"},k(u.b,{id:"connect-provider"})):k("div",{className:"goodItem-s2__right-ft-con"},k("div",{className:"goodItem-s2__right-ft"},k("div",{className:"goodItem-s2__price-container"},Object(x.a)(this.props.lang)?void 0:k("span",{className:"goodItem-s2__currency"},k(u.b,{id:this.props.curr})),k("span",{className:"goodItem-s2__number"},this.props.wishlistItem?Object(O.a)(this.props.finalPrice):Object(O.a)(this.props.priceWithDiscount)),Object(x.a)(this.props.lang)?k("span",{className:"goodItem-s2__currency"},k(u.b,{id:this.props.curr})):void 0),this.props.discountAmount>0?k(d.a.Fragment,null,k("div",{className:"goodItem-s2__off-percentage-container"},k("span",{className:"goodItem-s2__off-percentage"},this.props.wishlistItem?this.props.discountPercentage:this.props.discountPercent),k("span",{className:"goodItem-s2__off-text"},"% OFF")),k("span",{className:"goodItem-s2__price-off"},this.props.wishlistItem?Object(O.a)(this.props.price+this.props.vat):Object(O.a)(this.props.unitPrice*this.props.quantity+this.props.vat))):void 0)),k("div",null,this.props.showQuantity&&1!=this.props.isDownloadable&&k("div",{className:"cart-item__quantity"},k(h.a,{value:this.props.quantity.toString(),className:"gray__dropDown cart-item__dropdown",options:Object(O.b)(1,this.props.inventoryCount),onChange:this.handleQuantityChange})),!this.props.isDownloadable&&this.renderDeliverType()))))}}]),a}(d.a.Component),S=Object(w.b)((function(e){return{lang:Object(C.h)(e),curr:Object(C.g)(e)}}))(E),P=a("8yPs"),A=(a("sqzE"),a("QQGX")),L=d.a.createElement,R=function(e){var t=e.data,a=e.addCoupon,s=e.checkOut,n=Object(w.d)(C.h),o=Object(w.d)(C.g),i=Object(w.d)(A.m),c=Object(w.d)(A.s),r=Object(p.useState)(""),l=r[0],m=r[1],h=function(){a(l),m("")},f=function(){a(null),m("")},_=function(){i&&s()};return L("aside",{className:"cart-aside"},L(D.b,null,L("div",{className:"cart-aside__cnt"},L("div",{className:"cart-aside__top-cnt"},L("h4",{className:"cart-aside__header"},L(u.b,{id:"aside.order-sum"})),L("div",{className:"cart-aside__item"},L("span",null,L("span",{className:"cart-aside__item-text"},L(u.b,{id:"aside.subtotal"})),L("span",{className:"cart-aside__item-text-sub"},t.itemsCount,"\xa0",t.itemsCount>1?L(u.b,{id:"cart-cart.items"}):L(u.b,{id:"cart-cart.item"}))),L("div",{className:"goodItem-s2__price-container d-flex"},!Object(x.a)(n)&&L("span",{className:"goodItem-s2__number"},L(u.b,{id:o}),"\xa0"),L("span",{className:"goodItem-s2__number"},Object(O.a)(t.totalWithOutDiscountCode-t.vat-t.shipping)),Object(x.a)(n)&&L("span",{className:"goodItem-s2__number"},"\xa0",L(u.b,{id:o})))),L("div",{className:"cart-aside__item"},L("span",null,L("span",{className:"cart-aside__item-text"},L(u.b,{id:"aside.shipping"}))),L("span",{className:"cart-aside__free"},0===t.shipping?L(u.b,{id:"aside.free"}):Object(O.a)(t.shipping))),t.discount>0&&L("div",{className:"cart-aside__item"},L("span",null,L("span",{className:"cart-aside__item-text"},L(u.b,{id:"aside.discount"}))),L("div",{className:"d-flex"},!Object(x.a)(n)&&L("span",{className:"cart-aside__discount"},L(u.b,{id:o}),"\xa0"),L("span",{className:"cart-aside__discount"},"-",Object(O.a)(t.discount)),Object(x.a)(n)&&L("span",{className:"cart-aside__discount"},"\xa0",L(u.b,{id:o})))),t.vat>0&&L("div",{className:"cart-aside__item"},L("span",null,L("span",{className:"cart-aside__item-text"},L(u.b,{id:"aside.vat"}))),L("div",{className:"goodItem-s2__price-container d-flex"},!Object(x.a)(n)&&L("span",{className:"goodItem-s2__number"},L(u.b,{id:o}),"\xa0"),L("span",{className:"goodItem-s2__number"},Object(O.a)(t.vat)),Object(x.a)(n)&&L("span",{className:"goodItem-s2__number"},"\xa0",L(u.b,{id:o})))),L("div",{className:"cart-aside__item cart-aside__item--border"},L("h4",{className:"cart-aside__header"},L(u.b,{id:"aside.total"}),t.vat>0&&L("span",{className:"cart-aside__item-text-sub cart-aside__item-text-sub--header"},L(u.b,{id:"aside.inciusive"}))),L("div",{className:"goodItem-s2__price-container"},t.discount>0&&L("div",{className:"d-flex"},!Object(x.a)(n)&&L("span",{className:"goodItem-s2__price-off"},L(u.b,{id:o}),"\xa0"),L("span",{className:"goodItem-s2__price-off d-block"},Object(O.a)(t.totalWithOutDiscountCode)),Object(x.a)(n)&&L("span",{className:"goodItem-s2__price-off"},"\xa0",L(u.b,{id:o}))),L("div",null,!Object(x.a)(n)&&L("span",{className:"goodItem-s2__number"},L(u.b,{id:o}),"\xa0"),L("span",{className:"goodItem-s2__number"},Object(O.a)(t.total)),Object(x.a)(n)&&L("span",{className:"goodItem-s2__number"},"\xa0",L(u.b,{id:o})))))),L("div",{className:"cart-aside__btm-cnt"},L(u.b,null,(function(e){var t=e.translate;return L(d.a.Fragment,null,L("div",{className:"cart-aside__input-cnt"},L("input",{className:"gray__input cart-aside__input",type:"text",placeholder:t("aside.coupon"),value:l,onChange:function(e){m(e.target.value)}}),L(D.f,{radius:!0,size:"xsm",onClick:h,value:L(u.b,{id:"aside.apply"})})),c&&L("div",{className:"cart-aside__coupon-cnt"},L("span",{className:"cart-aside__coupon-text"},L(u.b,{id:"aside.coupon2"})),L("span",{className:"cart-aside__coupon-value"},c),L(P.ReactComponent,{className:"cart-aside__coupon-icon",onClick:f})),L("div",{className:"cart-aside__btn-cnt"},L(D.f,{disable:!i,radius:!0,value:L(u.b,{id:"aside.checkout"}),onClick:_})))}))))))},T=a("nHsO"),U=a("TSYQ"),W=a.n(U),Q=d.a.createElement,F=function(e){var t=e.dark,a=e.p1,s=e.p2,n=e.icon,o=e.normal,i=e.history;return Q("div",{className:W()("empty-cart",{"empty-cart--gray":t,"empty-cart--normal":o})},n&&Q(T.ReactComponent,{className:"empty-cart__icon"}),Q("p",{className:"empty-cart__p1"},a),Q("p",{className:"empty-cart__p2"},s),Q(D.f,{onClick:function(){i.push("/")},radius:!0,value:Q(u.b,{id:"con-shopping"})}))}},fnaZ:function(e,t){e.exports="/_next/static/images/delete-cart-48a1dc52b988f081b15e25bf0ce2bbf8.svg"},mv05:function(e,t){e.exports="/_next/static/images/cart1-2063bec2c07204948982901a9ecd5f22.svg"},nHsO:function(e,t){e.exports="/_next/static/images/shopping-cart2-3afe568315864bb33cd3561e794d5244.svg"},sqzE:function(e,t){e.exports="/_next/static/images/addtocard-7c1c2aa041fd9ecb32470e2c8ba58b14.svg"}}]);