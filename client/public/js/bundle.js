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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Shares = __webpack_require__ (/*! ./models/shares.js */ \"./src/models/shares.js\");\nconst Users = __webpack_require__ (/*! ./models/users_profile.js */ \"./src/models/users_profile.js\");\nconst Companies = __webpack_require__ (/*! ./models/companies.js */ \"./src/models/companies.js\");\nconst UsersPortfolio = __webpack_require__ (/*! ./models/users_portfolio.js */ \"./src/models/users_portfolio.js\");\n\nconst CurrentPortfolioView = __webpack_require__ (/*! ./views/current_portfolio_view.js */ \"./src/views/current_portfolio_view.js\");\nconst SelectMarketView = __webpack_require__ (/*! ./views/select_market_view.js */ \"./src/views/select_market_view.js\");\nconst SelectProfileView = __webpack_require__ (/*! ./views/select_profile_views.js */ \"./src/views/select_profile_views.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('JS Loaded');\n\n  const shares = new Shares()\n  shares.getShareData();\n  shares.bindEvents();\n\n  const companies = new Companies()\n  companies.getCompNameData();\n  companies.bindEvents();\n\n  const users = new Users()\n  users.getUserData();\n\n  const usersPortfolio = new UsersPortfolio()\n  usersPortfolio.getUserPortData()\n\n  const selectMarketView = new SelectMarketView()\n  selectMarketView.bindEvents();\n\n  const currentPortfolioView = new CurrentPortfolioView()\n  currentPortfolioView.bindEvents();\n\n  const selectProfileView = new SelectProfileView()\n  selectProfileView.bindEvents();\n\n\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class RequestHelper{\n\n  constructor(url) {\n    this.url = url;\n  }\n\n  get() {\n    return fetch(this.url)\n      .then((res) => {\n        return res.json()\n      });\n  }\n\n  post(payload) {\n    return fetch(this.url, {\n      method: 'POST',\n      body: JSON.stringify(payload),\n      headers: { 'Content-Type': 'application/json' }\n    })\n      .then((response) => response.json());\n  }\n\n  delete(){\n  return fetch(this.url, {\n    method: 'DELETE',\n  })\n    .then((response) => response.json());\n  }\n}\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/companies.js":
/*!*********************************!*\
  !*** ./src/models/companies.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\nconst RequestHelper = __webpack_require__ (/*! ../helpers/request_helper */ \"./src/helpers/request_helper.js\");\n\nclass Companies {\n\n  constructor(){\n  this.data = [];\n  }\n\n  bindEvents(){\n    PubSub.subscribe('Shares:change',(event)=>{\n      const selectedIndex = event.detail;\n      console.log(selectedIndex);\n      const selectedShare = this.data[selectedIndex]\n      console.log(selectedShare);\n      PubSub.publish('Shares:Selected-share-ready', selectedShare)\n\n    })\n  }\n\n  getCompNameData(){\n    const url = 'http://localhost:3000/shares'\n    const request = new RequestHelper(url);\n    request.get()\n    .then((data)=>{\n      this.data = data;\n      console.log(data);\n      PubSub.publish('Shares:companies-name-list', this.data);\n    })\n    .catch((message)=>{\n      console.error(message);\n    })\n  }\n\n}\n\nmodule.exports = Companies;\n\n\n//# sourceURL=webpack:///./src/models/companies.js?");

/***/ }),

/***/ "./src/models/shares.js":
/*!******************************!*\
  !*** ./src/models/shares.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\nconst RequestHelper = __webpack_require__ (/*! ../helpers/request_helper */ \"./src/helpers/request_helper.js\");\n\n\nclass Shares{\n\n\n  constructor(){\n    this.data = []\n  }\n\n  bindEvents(){\n    PubSub.subscribe('Shares:Selected-share-ready', (event)=>{\n      const selectedSymbol = event.detail.symbol;\n      this.getShareData(selectedSymbol);\n      console.log(selectedSymbol);\n\n    })\n  }\n\n  getShareData(selectCompany){\n    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${selectCompany}&interval=1min&apikey=6GR3MV93NBI8PBGT`\n    const request = new RequestHelper(url);\n    request.get()\n    .then((data) =>{\n      this.data = data;\n      console.log(data);\n      PubSub.publish('Shares:all-data-loaded', this.data)\n    })\n    .catch((message)=>{\n      console.error(message);\n    })\n\n  }\n\n\n\n}\n\nmodule.exports = Shares;\n\n\n//# sourceURL=webpack:///./src/models/shares.js?");

/***/ }),

/***/ "./src/models/users_portfolio.js":
/*!***************************************!*\
  !*** ./src/models/users_portfolio.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\nconst RequestHelper = __webpack_require__ (/*! ../helpers/request_helper */ \"./src/helpers/request_helper.js\");\n\nclass UsersPortfolio{\n\n  constructor(){\n  this.data = []\n  }\n\n  bindEvents(){\n\n  }\n\n  getUserPortData(){\n    const url = 'http://localhost:3000/shares/users_shares'\n    const request = new RequestHelper(url);\n    request.get()\n    .then((data)=>{\n      this.data = data;\n      PubSub.publish('Shares:users-portfolio-list', this.data);\n      console.log(this.data);\n    })\n    .catch((message)=>{\n      console.error(message);\n    })\n  }\n\n}\n\nmodule.exports = UsersPortfolio;\n\n\n//# sourceURL=webpack:///./src/models/users_portfolio.js?");

/***/ }),

/***/ "./src/models/users_profile.js":
/*!*************************************!*\
  !*** ./src/models/users_profile.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\nconst RequestHelper = __webpack_require__ (/*! ../helpers/request_helper */ \"./src/helpers/request_helper.js\");\n\nclass Users{\n\n  constructor(){\n  this.data = []\n  }\n\n  bindEvents(){\n\n  }\n\n  getUserData(){\n    const url = 'http://localhost:3000/shares/users'\n    const request = new RequestHelper(url);\n    request.get()\n    .then((data)=>{\n      this.data = data;\n      PubSub.publish('Shares:users-name-list', this.data);\n      console.log(this.data);\n    })\n    .catch((message)=>{\n      console.error(message);\n    })\n  }\n\n}\n\nmodule.exports = Users;\n\n\n//# sourceURL=webpack:///./src/models/users_profile.js?");

/***/ }),

/***/ "./src/views/current_portfolio_view.js":
/*!*********************************************!*\
  !*** ./src/views/current_portfolio_view.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\n\n\nclass CurrentPortfolioView {\n\n  constructor(){\n    this.container = document.querySelector('#portfolio-container')\n  }\n\n  bindEvents(){\n    PubSub.subscribe('Shares:users-portfolio-list',(event) =>{\n      const shares = event.detail;\n      this.render(shares)\n\n    })\n  }\n\n  render(shares){\n    this.clearShares();\n\n    shares.forEach((share)=>{\n      const card = this.createCard(share)\n      this.container.appendChild(card)\n    });\n  }\n  clearShares(){\n    this.container.innerHTML = '';\n  }\n\n  createCard(share){\n\n    const meta = document.createElement('div')\n    meta.classList.add('meta')\n    meta.innerHTML = share.quantity\n\n    const header = document.createElement('div')\n    header.classList.add('header')\n    header.innerHTML = share.share_id\n\n    const content = document.createElement('div')\n    content.classList.add('content')\n\n    const card = document.createElement('div')\n    card.classList.add('ui')\n    card.classList.add('card')\n\n    content.appendChild(meta)\n    content.appendChild(header)\n    card.appendChild(content)\n\n    return card;\n  }\n\n}\n\nmodule.exports = CurrentPortfolioView;\n\n\n//# sourceURL=webpack:///./src/views/current_portfolio_view.js?");

/***/ }),

/***/ "./src/views/select_market_view.js":
/*!*****************************************!*\
  !*** ./src/views/select_market_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\n\n\nclass SelectMarketView{\n\n  constructor(){\n    this.element = document.querySelector('#company-list')\n  }\n\n  bindEvents(){\n    PubSub.subscribe('Shares:companies-name-list', (event) =>{\n      const companyData = event.detail;\n      console.log(companyData);\n      this.selectCompany(companyData);\n    })\n\n    this.element.addEventListener('change', (event) => {\n      const selectIndex = event.target.value\n      PubSub.publish('Shares:change', selectIndex);\n    })\n  }\n\n\n  selectCompany(companyData){\n    companyData.forEach((share, index)=>{\n      const option = document.createElement('option')\n      option.textContent = share.name;\n      option.value = index;\n      this.element.appendChild(option);\n    })\n  }\n}\n\nmodule.exports = SelectMarketView;\n\n\n//# sourceURL=webpack:///./src/views/select_market_view.js?");

/***/ }),

/***/ "./src/views/select_profile_views.js":
/*!*******************************************!*\
  !*** ./src/views/select_profile_views.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\n\nclass SelectProfileView{\n\n  constructor(){\n    this.container = document.querySelector('#profile-container')\n  }\n\n  bindEvents(){\n    PubSub.subscribe('Shares:users-name-list', (event)=>{\n      const users = event.detail;\n      console.log(users);\n      this.render(users);\n    })\n  }\n\n  render(users){\n    this.clearUsers();\n\n    users.forEach((user)=>{\n      const card = this.createIdCard(user)\n      this.container.appendChild(card)\n    });\n  }\n  clearUsers(){\n    this.container.innerHTML = '';\n  }\n    createIdCard(user){\n      const meta = document.createElement('div')\n      meta.classList.add('meta')\n      meta.innerHTML = `User: ${user.user_id}`\n\n      const header = document.createElement('div')\n      header.classList.add('header')\n      header.innerHTML = user.name\n\n      const content = document.createElement('div')\n      content.classList.add('content')\n\n      const card = document.createElement('div')\n      card.classList.add('ui')\n      card.classList.add('card')\n      card.style.background = '#3CB371';\n\n      content.appendChild(meta)\n      content.appendChild(header)\n      card.appendChild(content)\n\n      return card;\n    }\n}\n\nmodule.exports = SelectProfileView;\n\n\n//# sourceURL=webpack:///./src/views/select_profile_views.js?");

/***/ })

/******/ });