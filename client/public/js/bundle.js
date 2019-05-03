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

eval("const Shares = __webpack_require__ (/*! ./models/shares.js */ \"./src/models/shares.js\");\nconst Users = __webpack_require__ (/*! ./models/users_profile.js */ \"./src/models/users_profile.js\");\nconst Companies = __webpack_require__ (/*! ./models/companies.js */ \"./src/models/companies.js\");\nconst UsersPortfolio = __webpack_require__ (/*! ./models/users_portfolio.js */ \"./src/models/users_portfolio.js\");\n\nconst CurrentPortfolioView = __webpack_require__ (/*! ./views/current_portfolio_view.js */ \"./src/views/current_portfolio_view.js\");\nconst SelectMarketView = __webpack_require__ (/*! ./views/select_market_view.js */ \"./src/views/select_market_view.js\");\nconst SelectProfileView = __webpack_require__ (/*! ./views/select_profile_views.js */ \"./src/views/select_profile_views.js\");\n// const MarketCatalogue = require ('./views/market_view.js');\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('JS Loaded');\n\n  const shares = new Shares()\n  shares.getShareData();\n  shares.bindEvents();\n\n  const users = new Users()\n  users.getUserData();\n  users.bindEvents();\n\n  const companies = new Companies()\n  companies.getCompNameData();\n  companies.bindEvents();\n\n  const usersPortfolio = new UsersPortfolio()\n  usersPortfolio.getUserPortData()\n  usersPortfolio.bindEvents()\n\n  const selectMarketView = new SelectMarketView()\n  selectMarketView.bindEvents();\n\n  const currentPortfolioView = new CurrentPortfolioView()\n  currentPortfolioView.bindEvents();\n\n  const selectProfileView = new SelectProfileView()\n  selectProfileView.bindEvents();\n\n  // const marketCatalogue = new MarketCatalogue()\n  // marketCatalogue.bindEvents()\n\n\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/data_helper.js":
/*!************************************!*\
  !*** ./src/helpers/data_helper.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const DataHelper = {\n\n  calculateData(array) {\n    return array.reduce((total, number)=>{\n      return total + number;\n    })\n  }\n}\n\nmodule.exports = DataHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/data_helper.js?");

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

eval("class RequestHelper{\n\n  constructor(url) {\n    this.url = url;\n  }\n\n  get() {\n    return fetch(this.url)\n      .then((res) => {\n        return res.json()\n      });\n  }\n\n  post(payload) {\n    return fetch(this.url, {\n      method: 'POST',\n      body: JSON.stringify(payload),\n      headers: { 'Content-Type': 'application/json' }\n    })\n      .then((response) => response.json());\n  }\n\n  delete(){\n  return fetch(this.url, {\n    method: 'DELETE',\n  })\n    .then((response) => response.json());\n  }\n  \n}\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/companies.js":
/*!*********************************!*\
  !*** ./src/models/companies.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\nconst RequestHelper = __webpack_require__ (/*! ../helpers/request_helper */ \"./src/helpers/request_helper.js\");\n\nclass Companies {\n\n  constructor(){\n  this.data = [];\n  }\n\n  bindEvents(){\n    // subscribes to select market view to get users selection of\n    // company from drop down\n    PubSub.subscribe('Shares:change',(event)=>{\n      const selectedIndex = event.detail;\n      console.log(selectedIndex);\n      const selectedShare = this.data[selectedIndex]\n      console.log(selectedShare);\n      // publishes selected share info so share.js model can use data\n      // to extract share symbol for interpolation in API call\n      PubSub.publish('Shares:Selected-share-ready', selectedShare)\n\n    })\n  }\n  // gets data from database table shares\n  getCompNameData(){\n    const url = 'http://localhost:3000/shares'\n    const request = new RequestHelper(url);\n    request.get()\n    .then((data)=>{\n      this.data = data;\n      console.log(data);\n      PubSub.publish('Shares:companies-name-list', this.data);\n    })\n    .catch((message)=>{\n      console.error(message);\n    })\n  }\n\n}\n\nmodule.exports = Companies;\n\n\n//# sourceURL=webpack:///./src/models/companies.js?");

/***/ }),

/***/ "./src/models/shares.js":
/*!******************************!*\
  !*** ./src/models/shares.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\nconst RequestHelper = __webpack_require__ (/*! ../helpers/request_helper */ \"./src/helpers/request_helper.js\");\n\n\nclass Shares{\n\n  constructor(){\n    this.data = []\n  }\n\n  bindEvents(){\n    // selected share info passed from companies.js so we can use\n    // string interpolation to insert the symbol of the selected\n    // share into the getShareData function\n    PubSub.subscribe('Shares:Selected-share-ready', (event)=>{\n      const selectedSymbol = event.detail.symbol;\n      this.getShareData(selectedSymbol);\n      console.log(selectedSymbol);\n\n    })\n  }\n  //call to API using symbol passed in through PubSub in bindEvents.\n  getShareData(selectCompany){\n    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${selectCompany}&interval=1min&outputsize=full&apikey=6GR3MV93NBI8PBGT`\n    const request = new RequestHelper(url);\n    request.get()\n    .then((data) =>{\n      this.data = data;\n      PubSub.publish('Shares:all-data-loaded', this.data)\n    })\n    .catch((message)=>{\n      console.error(message);\n    })\n  }\n}\n\nmodule.exports = Shares;\n\n\n//# sourceURL=webpack:///./src/models/shares.js?");

/***/ }),

/***/ "./src/models/users_portfolio.js":
/*!***************************************!*\
  !*** ./src/models/users_portfolio.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\nconst RequestHelper = __webpack_require__ (/*! ../helpers/request_helper */ \"./src/helpers/request_helper.js\");\n\nclass UsersPortfolio{\n\n  constructor(){\n  this.data = []\n  }\n\n  bindEvents(){\n    PubSub.subscribe('Users:single-user-id-ready', (event) =>{\n      const userID = event.detail\n      console.log(userID);\n      this.getUserPortData(userID)\n    })\n\n  }\n\n  getUserPortData(userID){\n    const url = `http://localhost:3000/shares/users_shares/${userID}`\n    const request = new RequestHelper(url);\n    request.get()\n    .then((data)=>{\n      this.data = data;\n      return data;\n    })\n    // data from get getUserPortData function is collected and then passed in as shares below\n\n    .then((shares)=>{\n      // promises array created so we can store each promise request\n      const promises = [];\n      //for each instance of share we create a new request and push this in thr promises array\n\n      shares.forEach((share)=>{\n        const livePrice = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${share.symbol}&interval=1min&outputsize=full&apikey=6GR3MV93NBI8PBGT`\n        const request = new RequestHelper(livePrice);\n        const promise = request.get()\n        promises.push(promise)\n      })\n\n      Promise.all(promises).then((results)=>{\n\n      const concatResults = [];\n\n        results.forEach((result, index)=>{\n\n          const price = result['Global Quote']['05. price']\n          const changePercent = result['Global Quote']['10. change percent']\n          const openPrice = result['Global Quote']['02. open']\n          shares[index].price = price\n          shares[index].changePercent = changePercent\n          shares[index].openPrice = openPrice\n\n          concatResults.push(shares[index]);\n      })\n        PubSub.publish('Shares:users-portfolio-list', concatResults)\n      })\n    })\n  }\n\n}\n\nmodule.exports = UsersPortfolio;\n\n\n//# sourceURL=webpack:///./src/models/users_portfolio.js?");

/***/ }),

/***/ "./src/models/users_profile.js":
/*!*************************************!*\
  !*** ./src/models/users_profile.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\nconst RequestHelper = __webpack_require__ (/*! ../helpers/request_helper */ \"./src/helpers/request_helper.js\");\n\nclass Users{\n\n  constructor(){\n  this.data = []\n  }\n\n  bindEvents(){\n    PubSub.subscribe('Users: user-removed', (event)=>{\n      const userID = event.detail;\n      this.removeUser(userID)\n    })\n  }\n\n  getUserData(){\n    const url = 'http://localhost:3000/shares/users'\n    const request = new RequestHelper(url);\n    request.get()\n    .then((data)=>{\n      this.data = data;\n      console.log(data);\n      PubSub.publish('Shares:users-name-list', this.data);\n    })\n    .catch((message)=>{\n      console.error(message);\n    })\n  }\n\n  removeUser(userID){\n    const url = `http://localhost:3000/shares/users/${userID}`\n    const request = new RequestHelper(url);\n    request.delete(userID)\n    .then((users)=>{\n      PubSub.publish('Shares:users-name-list', users);\n    })\n    .catch(console.error)\n    }\n\n}\n\nmodule.exports = Users;\n\n\n//# sourceURL=webpack:///./src/models/users_profile.js?");

/***/ }),

/***/ "./src/views/current_portfolio_view.js":
/*!*********************************************!*\
  !*** ./src/views/current_portfolio_view.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\nconst RequestHelper = __webpack_require__ (/*! ../helpers/request_helper */ \"./src/helpers/request_helper.js\");\nconst {calculateData} = __webpack_require__ (/*! ../helpers/data_helper */ \"./src/helpers/data_helper.js\");\n\nclass CurrentPortfolioView {\n\n  constructor(){\n    this.container = document.querySelector('#portfolio-container')\n    this.totalPortVal = null;\n  }\n\n  bindEvents(){\n    PubSub.subscribe('Shares:users-portfolio-list',(event) =>{\n      const shares = event.detail;\n      this.calculatePortTotal(shares);\n      this.render(shares);\n  });\n}\n//function that creates a total Portfolio Value by taking\n// the total value of each holding a user has in their Portfolio\n// and adding them together in an array via reduce\n\ncalculatePortTotal(shares){\n  const portTotal = []\n  shares.forEach((share)=>{\n    const sharePrice = share.price * 100\n    const shareQuantity = share.quantity\n    const totalHoldings = sharePrice * shareQuantity\n    portTotal.push(totalHoldings)\n    this.totalPortVal = calculateData(portTotal)\n  })\n}\n  render(shares){\n    this.clearShares();\n    this.createTotalsCard()\n\n    shares.forEach((share)=>{\n      this.createCard(share)\n    });\n  }\n\n  clearShares(){\n    this.container.innerHTML = '';\n  }\n  // creates card for each holding a user has\n  createCard(share){\n    const meta = document.createElement('div')\n    meta.classList.add('meta')\n    meta.innerHTML = `You hold ${share.quantity} shares`\n\n    const header = document.createElement('div')\n    header.classList.add('header')\n    header.innerHTML = share.name\n\n    const currentPrice = document.createElement('div')\n    const sharePrice = share.price / 100\n    currentPrice.classList.add('meta')\n    currentPrice.innerHTML = 'Price Per Share:' + sharePrice\n\n    const holdingsValue = document.createElement('div')\n    const indivHolding = sharePrice * share.quantity / 10\n    const totalIndivHolding = indivHolding.toFixed(1)\n    holdingsValue.classList.add('meta')\n    holdingsValue.innerHTML = 'Total Holdings Value: £'+ totalIndivHolding\n\n    const container = document.createElement('div');\n    container.id = 'arrow-container'\n    container.classList.add('right','floated')\n\n    const priceDifference = document.createElement('div')\n    priceDifference.classList.add('meta')\n    priceDifference.innerHTML = share.changePercent;\n\n    const image = document.createElement('img')\n    image.classList.add('ui','right','floated','mini','image')\n      // will display up arrow if current price of share is greater than the open price\n        if (share.price > share.openPrice ){\n      image.src = `Images/upArrow.png`\n      //otherwise will show down arrow if shares are lower than open price\n        }else if(share.price < share.openPrice ){\n      image.src = `Images/downArrow.png`\n        }else{\n      image.src = `Images/nutArrow.png`\n    };\n\n    const content = document.createElement('div')\n    content.classList.add('content')\n\n    const card = document.createElement('div')\n    card.classList.add('ui')\n    card.classList.add('card')\n    card.style.borderColor = 'black'\n    card.style.borderStyle = 'solid'\n    card.style.background = '#FAF0E6';\n    card.style.opacity = '0.7';\n\n\n    container.appendChild(image)\n    container.appendChild(priceDifference)\n    content.appendChild(container)\n    content.appendChild(header)\n    content.appendChild(meta)\n    content.appendChild(currentPrice)\n    content.appendChild(holdingsValue)\n    card.appendChild(content)\n\n    this.container.appendChild(card)\n\n    }\n//creates total portfolio amount tile for each user\n  createTotalsCard(shares){\n    const header = document.createElement('div')\n    header.classList.add('header')\n    header.innerHTML = 'Total Portfolio Amount:' + this.totalPortVal / 10000\n\n    const content = document.createElement('div')\n    content.classList.add('content')\n\n    const totalCard = document.createElement('div')\n    totalCard.classList.add('ui')\n    totalCard.classList.add('card')\n    totalCard.style.borderColor = 'black'\n    totalCard.style.borderStyle = 'solid'\n    totalCard.style.background = '#FAF0E6';\n\n\n    content.appendChild(header)\n    totalCard.appendChild(content)\n\n    this.container.appendChild(totalCard)\n  }\n}\n\nmodule.exports = CurrentPortfolioView;\n\n\n//# sourceURL=webpack:///./src/views/current_portfolio_view.js?");

/***/ }),

/***/ "./src/views/select_market_view.js":
/*!*****************************************!*\
  !*** ./src/views/select_market_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\n\n\nclass SelectMarketView{\n\n  constructor(){\n    this.element = document.querySelector('#company-list')\n  }\n\n  bindEvents(){\n    //subscribes to list of companies from companies.js model\n    PubSub.subscribe('Shares:companies-name-list', (event) =>{\n      const companyData = event.detail;\n      this.selectCompany(companyData);\n    })\n    //event listener for when the new share is selected from dropdown\n    // this is then subscribed back to companies.js\n    this.element.addEventListener('change', (event) => {\n      const selectIndex = event.target.value\n      PubSub.publish('Shares:change', selectIndex);\n    })\n  }\n\n  // loops through array of company informaiton creating\n  // a dropdown list\n\n  selectCompany(companyData){\n    companyData.forEach((share, index)=>{\n      const option = document.createElement('option')\n      option.textContent = share.name;\n      option.value = index;\n      this.element.appendChild(option);\n    })\n  }\n}\n\nmodule.exports = SelectMarketView;\n\n\n//# sourceURL=webpack:///./src/views/select_market_view.js?");

/***/ }),

/***/ "./src/views/select_profile_views.js":
/*!*******************************************!*\
  !*** ./src/views/select_profile_views.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\n\nclass SelectProfileView{\n\n  constructor(){\n    this.container = document.querySelector('#profile-container')\n  }\n\n  bindEvents(){\n    //gets users info from user portfolio models getdata call\n    PubSub.subscribe('Shares:users-name-list', (event)=>{\n      const users = event.detail;\n      this.render(users);\n    })\n  }\n\n  render(users){\n    this.clearUsers();\n    //for each user we will create a user card using the createIdCard function\n    users.forEach((user)=>{\n      const card = this.createIdCard(user)\n      this.container.appendChild(card)\n    });\n  }\n\n  clearUsers(){\n    this.container.innerHTML = '';\n  }\n\n  //creates user card\n  createIdCard(user){\n    const meta = document.createElement('div')\n    meta.classList.add('meta')\n    meta.innerHTML = `User: ${user.user_id}`\n\n    const header = document.createElement('div')\n    header.classList.add('header')\n    header.innerHTML = `Name: ${user.name}`\n\n\n    const image = document.createElement('img')\n    image.classList.add('right','floated','massive','ui', 'avatar','image')\n    image.src = `Images/${user.img_url}`\n\n    const content = document.createElement('div')\n    content.classList.add('content')\n\n    const removeButton = document.createElement('div')\n    removeButton.classList.add('ui', 'basic', 'red', 'button')\n    removeButton.textContent = 'Remove'\n    removeButton.value = user.id\n    //event listener for click on remove button to call remove user function\n    removeButton.addEventListener('click',(event)=>{\n    const userID = event.target.value\n    PubSub.publish('Users: user-removed', userID)\n    })\n\n\n    const viewButton = document.createElement('div')\n    viewButton.classList.add('ui', 'basic', 'black', 'button')\n    viewButton.textContent = 'View'\n    viewButton.value = user.id\n    // event listener for click on view button. when click occurs\n    // user ID is passed to user portfolio model\n    viewButton.addEventListener('click', (event) => {\n    const singleUserID = event.target.value;\n      PubSub.publish('Users:single-user-id-ready', singleUserID)\n    })\n\n    const orButton = document.createElement('div')\n    orButton.classList.add('or')\n\n    const card = document.createElement('div')\n    card.classList.add('ui')\n    card.classList.add('card')\n    card.style.borderColor = '#453F30'\n    card.style.borderStyle = 'solid'\n    card.style.background = '#97AA92';\n\n    const buttons = document.createElement('div')\n    buttons.classList.add('ui','buttons')\n    buttons.appendChild(viewButton)\n    buttons.appendChild(orButton)\n    buttons.appendChild(removeButton)\n\n    content.appendChild(image)\n    content.appendChild(meta)\n    content.appendChild(header)\n    card.appendChild(content)\n    card.appendChild(buttons)\n\n    return card;\n  }\n}\n\nmodule.exports = SelectProfileView;\n\n\n//# sourceURL=webpack:///./src/views/select_profile_views.js?");

/***/ })

/******/ });