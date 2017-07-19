webpackJsonp([0,3],{

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 145;


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(162);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/main.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestapiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RestapiService = (function () {
    //static instance: RestapiService;
    function RestapiService(http) {
        this.http = http;
        this.Dev_URL = 'http://bornartist.in';
        this.productObj = {};
        this.Orders = [];
        var HOST = "http://" + window.location.hostname;
        console.log(' HOST ' + HOST);
        if (HOST == "http://localhost") {
            HOST = HOST + ":3000";
        }
        this.Dev_URL = HOST;
    }
    RestapiService.prototype.doLogin = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }); //x-www-form-urlencoded
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body2 = data;
        var content = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        content.set('email', data.email);
        content.set('password', data.password);
        return this.http.post(this.Dev_URL + '/api/login', content, options).map(function (res) { return res.json(); });
    };
    RestapiService.prototype.doSignup = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }); //x-www-form-urlencoded
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body2 = { email: data.email, password: data.password };
        console.log(body2);
        var content = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        content.set('email', data.email);
        content.set('password', data.password);
        content.set('name', data.name);
        return this.http.post(this.Dev_URL + '/api/signup', content, options).map(function (res) { return res.json(); });
    };
    RestapiService.prototype.doGetProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }); //x-www-form-urlencoded
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var content = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        return this.http.get(this.Dev_URL + '/api/userprofile', options).map(function (res) { return res.json(); });
    };
    RestapiService.prototype.doUploadDesignImage = function (fileList, obj) {
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('imgUploader', file, file.name);
            // formData.append('id', obj._id);
            formData.append('wipID', obj.orderId);
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
            // headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
            return this.http.post(this.Dev_URL + '/api/uploaddesign', formData, options).map(function (res) { return res.json(); });
        }
    };
    //ORDER APIS for Client Side
    /**
     * Order APIs
     * 1. Order API contains ->
     *    {
     *      "customer_details": {
              "title": "Mr.",
              "first_name": "Nandha",
              "last_name": "Kumar",
              "email": "nanadha@gmail.com"
            },
            "shipping_address": {
            "title": "Mr.",
            "first_name": "Nandha",
            "last_name": "Kumar",
            "address_line1": "Ram nagar",
            "address_line2": "Ramapuram",
            "country": "india",
            "city": "chennai",
            "state": "Tamilnadu",
            "pincode": "110001",
            "mobile": "9875642310"
          },
          "self_shipping": "yes",
          "billing_address": {
            "title": "Mr.",
            "first_name": "Nandha",
            "last_name": "Kumar",
            "address_line1": "Ram nagar",
            "address_line2": "Ramapuram",
            "country": "india",
            "city": "chennai",
            "state": "Tamilnadu",
            "pincode": "110001",
            "mobile": "9875642310"
          },
        "product_detail": [
          {
            "product_name": "Product1",
            "product_code": "6060-Guy-L",
            "product_color": "White",
            "product_design_id": "654210",
            "tax": "0",
            "product_size": [
              {
                "size_name": "M",
                "size_quantity": "1",
                "unit_price": "120"
              },
              {
                "size_name": "L",
                "size_quantity": "2",
                "unit_price": "250"
              }
            ]
          },
     * }
     */
    /**
     * Start a fresh order
     */
    RestapiService.prototype.InitializeOrder = function (prod) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }); //x-www-form-urlencoded
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var content = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        content.set('style_name', prod.style_name);
        content.set('style_code', prod.style_code);
        content.set('color', prod.color);
        content.set('unit_price', prod.price);
        return this.http.post(this.Dev_URL + '/api/order/createtemporder', content, options).map(function (res) { return res.json(); });
    };
    /**
     * End Of Orders API
     */
    /** CART on Server */
    RestapiService.prototype.getCart = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }); //x-www-form-urlencoded
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var content = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        return this.http.get(this.Dev_URL + '/api/viewcart', options).map(function (res) { return res.json(); });
    };
    /**
     * NEW API WIP
     */
    RestapiService.prototype.getSummary = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }); //x-www-form-urlencoded
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var content = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        return this.http.get(this.Dev_URL + '/api/checkoutsummary', options).map(function (res) { return res.json(); });
    };
    RestapiService.prototype.doGetTxnDetails = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }); //x-www-form-urlencoded
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var content = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        return this.http.get(this.Dev_URL + '/api/txnsummary', options).map(function (res) { return res.json(); });
    };
    RestapiService.prototype.doDeletefromCart = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }); //x-www-form-urlencoded
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var content = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        content.set('id', id);
        return this.http.post(this.Dev_URL + '/api/deletefromcart', content, options).map(function (res) { return res.json(); });
    };
    RestapiService.prototype.retrieveAllDesignImages = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }); //x-www-form-urlencoded
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var content = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        return this.http.post(this.Dev_URL + '/api/orders', options).map(function (res) { return res.json(); });
    };
    RestapiService.prototype.getPastPlacesOrders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }); //x-www-form-urlencoded
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var content = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        return this.http.post(this.Dev_URL + '/api/getorders', options).map(function (res) { return res.json(); });
    };
    RestapiService.prototype.getPendingOrders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }); //x-www-form-urlencoded
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var content = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        return this.http.post(this.Dev_URL + '/api/getpendingorders', options).map(function (res) { return res.json(); });
    };
    //New CART PAGE API Functions
    RestapiService.prototype.updateSize = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }); //x-www-form-urlencoded
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var content = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        content.set('sizes', data.sizes);
        content.set('index', data.index);
        return this.http.post(this.Dev_URL + '/api/order/updatesize', content, options).map(function (res) { return res.json(); });
    };
    RestapiService.prototype.clearSizeInfo = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }); //x-www-form-urlencoded
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var content = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        content.set('sizes', data.sizes);
        content.set('index', data.index);
        return this.http.post(this.Dev_URL + '/api/order/clearsizenifo', content, options).map(function (res) { return res.json(); });
    };
    return RestapiService;
}());
RestapiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */]) === "function" && _a || Object])
], RestapiService);

var _a;
//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/restapi.service.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    return AboutusComponent;
}());
AboutusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-aboutus',
        template: __webpack_require__(341),
        styles: [__webpack_require__(324)]
    }),
    __metadata("design:paramtypes", [])
], AboutusComponent);

//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/aboutus.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restapi_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsetupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountsetupComponent = (function () {
    // form: FormGroup;
    function AccountsetupComponent(restapi, app) {
        this.restapi = restapi;
        this.app = app;
        this.email = '';
        this.name = '';
        this.isAuth = false;
        this.refreshProfileFromServer();
        this.isLogin = true;
        //this.isAuth = true;
        // this.userInfo = {
        //   "name" : "Sachin",
        //   'local.email' : "48.rohit@gmail.com",
        // };
        // this.Address = [ {
        //       "address_line1":"#19, 18th cross,",
        //       "address_line2":"6th main, btm",
        //       "city":"Bangalore",
        //       "country":"india",
        //       "first_name":"Sachin",
        //       "last_name":"Rohit",
        //       "mobile":"9611167363",
        //       "pincode":"560078",
        //       "state":"Karnataka",
        //       "title":"Mr."
        // },{
        //       "address_line1":"#19, 18th cross,",
        //       "address_line2":"6th main, btm",
        //       "city":"Bangalore",
        //       "country":"india",
        //       "first_name":"Sachin",
        //       "last_name":"Rohit",
        //       "mobile":"9611167363",
        //       "pincode":"560078",
        //       "state":"Karnataka",
        //       "title":"Mr."
        // }];
    }
    AccountsetupComponent.prototype.ngOnInit = function () {
    };
    AccountsetupComponent.prototype.refreshProfileFromServer = function () {
        var _this = this;
        console.log('refreshProfileFromServer');
        this.restapi.doGetProfile().subscribe(function (res) {
            console.log(res);
            _this.evaluateAuthStatus(res);
        }, function (err) {
            console.log(err);
            _this.isAuth = false;
            _this.doShowSignInUI();
        });
    };
    AccountsetupComponent.prototype.evaluateAuthStatus = function (res) {
        console.log('evaluateAuthStatus Account ' + JSON.stringify(res));
        if (res.user) {
            this.isAuth = true;
            //Determine the Auth Type and build a local profile. Let us not screw backend for this
            this.userInfo = res['user'];
            this.Address = res.address;
            this.getPendingOrders();
            //this.getPastPlacedOrders();
        }
        else {
            this.isAuth = false;
            this.Address = null;
            this.doShowSignInUI();
        }
    };
    AccountsetupComponent.prototype.doSignup = function (f) {
        var _this = this;
        var data = { email: this.email, password: this.password, name: this.name };
        this.doLoginInProgress = true;
        this.restapi.doSignup(data).subscribe(function (res) {
            console.log(res);
            //res = JSON.parse(res);
            if (res.error) {
                //alert('email already taken')
                _this.error_msg = 'Email is already registered with us. Try signing in or use another email to signup.';
            }
            else {
                console.log('doSignup result success');
                _this.evaluateAuthStatus(res);
            }
            _this.doLoginInProgress = false;
        }, function (err) {
            console.log(err);
            _this.doLoginInProgress = false;
            _this.error_msg = 'Something is not right, try again.';
        }, function () {
            console.log('finally');
            setTimeout(function () {
                _this.error_msg = '';
            }, 3000);
        });
    };
    AccountsetupComponent.prototype.doLogin = function (f) {
        var _this = this;
        var data = { email: this.email, password: this.password };
        this.doLoginInProgress = true;
        this.restapi.doLogin(data).subscribe(function (res) {
            console.log(res);
            //res = JSON.parse(res);
            if (res.error) {
                //alert('email/password combination is wrong');
                _this.error_msg = 'email and password combination is wrong.';
            }
            else {
                //window.location.href = '/';
                console.log('doLogin result success');
                _this.evaluateAuthStatus(res);
            }
            _this.doLoginInProgress = false;
        }, function (err) {
            console.log(err);
            _this.doLoginInProgress = false;
            _this.error_msg = 'Something is not right, try again.';
        }, function () {
            console.log('finally');
            setTimeout(function () {
                _this.error_msg = '';
            }, 3000);
        });
    };
    AccountsetupComponent.prototype.doShowSignInUI = function () {
        this.isLogin = true;
    };
    AccountsetupComponent.prototype.doShowSignUpUI = function () {
        this.isLogin = false;
    };
    AccountsetupComponent.prototype.getPastPlacedOrders = function () {
        var _this = this;
        this.restapi.getPastPlacesOrders().subscribe(function (res) {
            console.log(res);
            //res.txnid is same for all the wips
            if (res && res.length != 0) {
                _this.recentOrders = res;
                _this.recentOrders.forEach(function (element) {
                    var wips = _this.all_wips.filter(function (r) { return r.txnid == element.txnid; });
                    if (!element.wip) {
                        element['wip'] = wips;
                    }
                    else {
                        element.wip.push(wips);
                    }
                });
                //this.recentOrders = res;
                console.log(_this.recentOrders);
            }
        }, function (err) {
            console.log(err);
            _this.recentOrders = null;
        });
    };
    AccountsetupComponent.prototype.getPendingOrders = function () {
        var _this = this;
        this.restapi.getPendingOrders().subscribe(function (res) {
            console.log(res);
            _this.all_wips = res;
            //this.recentDesigns = res;
            if (res && res.length != 0) {
                _this.recentDesigns = res.filter(function (wip) { return wip.orderStatus == "wip"; });
                _this.app.updateCart(_this.recentDesigns.length);
            }
            _this.getPastPlacedOrders();
        }, function (err) {
            console.log(err);
            _this.recentDesigns = null;
        });
    };
    return AccountsetupComponent;
}());
AccountsetupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-accountsetup',
        template: __webpack_require__(342),
        styles: [__webpack_require__(325)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__restapi_service__["a" /* RestapiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__restapi_service__["a" /* RestapiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], AccountsetupComponent);

var _a, _b;
//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/accountsetup.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restapi_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddproductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AddproductComponent = (function () {
    function AddproductComponent(restapi, zone) {
        // this.restapi.doGetAllProducts().subscribe( prods =>{
        //   this.allProdsList = prods;
        //   console.log( this.allProdsList)
        // }, err =>{
        //    alert('Error : Unable to fetch products. Please reload this page. ')
        // })
        this.restapi = restapi;
        this.zone = zone;
        this.colors = [
            { 'color': 'white' },
            { 'color': 'black' },
            { 'color': 'red' },
            { 'color': 'brown' },
            { 'color': 'blue' }
        ];
        // this.options = new NgUploaderOptions({
        //   url: 'http://api.ngx-uploader.com/upload',
        //   autoUpload: true,
        //   calculateSpeed: true
        // });
    }
    AddproductComponent.prototype.ngOnInit = function () {
    };
    AddproductComponent.prototype.handleUpload = function (data) {
        var _this = this;
        setTimeout(function () {
            _this.zone.run(function () {
                _this.response = data;
                if (data && data.response) {
                    _this.response = JSON.parse(data.response);
                }
            });
        });
    };
    AddproductComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    return AddproductComponent;
}());
AddproductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addproduct',
        template: __webpack_require__(343),
        styles: [__webpack_require__(326)]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__restapi_service__["a" /* RestapiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__restapi_service__["a" /* RestapiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object])
], AddproductComponent);

var _a, _b;
//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/addproduct.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__posts_posts_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__posts_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__restapi_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__accountsetup_accountsetup_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__addproduct_addproduct_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_product_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cart_cart_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__checkout_checkout_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__aboutus_aboutus_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contactus_contactus_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__gallery_gallery_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__transactionfailed_transactionfailed_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__transactionsuccess_transactionsuccess_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__terms_terms_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__privacy_privacy_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__faq_faq_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_image_zoom__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_image_zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angular2_image_zoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__safe_pipe__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__iam_iam_component__ = __webpack_require__(161);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'posts',
        component: __WEBPACK_IMPORTED_MODULE_6__posts_posts_component__["a" /* PostsComponent */]
    },
    {
        path: 'account',
        component: __WEBPACK_IMPORTED_MODULE_9__accountsetup_accountsetup_component__["a" /* AccountsetupComponent */]
    },
    {
        path: 'editproducts',
        component: __WEBPACK_IMPORTED_MODULE_10__addproduct_addproduct_component__["a" /* AddproductComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'product/:id',
        component: __WEBPACK_IMPORTED_MODULE_12__product_product_component__["a" /* ProductComponent */]
    },
    {
        path: 'cart',
        component: __WEBPACK_IMPORTED_MODULE_13__cart_cart_component__["a" /* CartComponent */]
    },
    {
        path: 'checkout',
        component: __WEBPACK_IMPORTED_MODULE_14__checkout_checkout_component__["a" /* CheckoutComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_15__aboutus_aboutus_component__["a" /* AboutusComponent */]
    },
    {
        path: 'contactus',
        component: __WEBPACK_IMPORTED_MODULE_16__contactus_contactus_component__["a" /* ContactusComponent */]
    },
    {
        path: 'gallery',
        component: __WEBPACK_IMPORTED_MODULE_17__gallery_gallery_component__["a" /* GalleryComponent */]
    },
    {
        path: 'transactionsuccess',
        component: __WEBPACK_IMPORTED_MODULE_19__transactionsuccess_transactionsuccess_component__["a" /* TransactionsuccessComponent */]
    },
    {
        path: 'transactionfailed',
        component: __WEBPACK_IMPORTED_MODULE_18__transactionfailed_transactionfailed_component__["a" /* TransactionfailedComponent */]
    }, {
        path: 'privacy',
        component: __WEBPACK_IMPORTED_MODULE_21__privacy_privacy_component__["a" /* PrivacyComponent */]
    }, {
        path: 'terms',
        component: __WEBPACK_IMPORTED_MODULE_20__terms_terms_component__["a" /* TermsComponent */]
    }, {
        path: 'faq',
        component: __WEBPACK_IMPORTED_MODULE_22__faq_faq_component__["a" /* FaqComponent */]
    },
    {
        path: 'iam',
        component: __WEBPACK_IMPORTED_MODULE_25__iam_iam_component__["a" /* IamComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__posts_posts_component__["a" /* PostsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__accountsetup_accountsetup_component__["a" /* AccountsetupComponent */],
            __WEBPACK_IMPORTED_MODULE_10__addproduct_addproduct_component__["a" /* AddproductComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_13__cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_14__checkout_checkout_component__["a" /* CheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_15__aboutus_aboutus_component__["a" /* AboutusComponent */],
            __WEBPACK_IMPORTED_MODULE_16__contactus_contactus_component__["a" /* ContactusComponent */],
            __WEBPACK_IMPORTED_MODULE_17__gallery_gallery_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_18__transactionfailed_transactionfailed_component__["a" /* TransactionfailedComponent */],
            __WEBPACK_IMPORTED_MODULE_19__transactionsuccess_transactionsuccess_component__["a" /* TransactionsuccessComponent */],
            __WEBPACK_IMPORTED_MODULE_20__terms_terms_component__["a" /* TermsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__privacy_privacy_component__["a" /* PrivacyComponent */],
            __WEBPACK_IMPORTED_MODULE_22__faq_faq_component__["a" /* FaqComponent */],
            __WEBPACK_IMPORTED_MODULE_24__safe_pipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_25__iam_iam_component__["a" /* IamComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(ROUTES),
            __WEBPACK_IMPORTED_MODULE_23_angular2_image_zoom__["ImageZoomModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__posts_service__["a" /* PostsService */], __WEBPACK_IMPORTED_MODULE_8__restapi_service__["a" /* RestapiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/app.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restapi_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponent = (function () {
    function CartComponent(restapi, r, el, app) {
        this.restapi = restapi;
        this.app = app;
        this.cartCount = 0;
        this.qtd = [];
        this.Sizes = [];
        this.router = r;
        this.Total = 0;
        this.el = el;
        this.qtd.push({ "size": 1 });
        this.size_info_model_men = [{ 0: {
                    "XS": 0,
                    "S": 0,
                    "M": 0,
                    "L": 0,
                    "XL": 0,
                    "XXL": 0,
                    "XXXL": 0
                } }];
        this.size_info_model = {
            "XS": 0,
            "S": 0,
            "M": 0,
            "L": 0,
            "XL": 0,
            "XXL": 0,
            "XXXL": 0
        };
        //used to compute total
        this.refreshCart();
        // this.OrderList = [ 
        //   {
        //     "displayName" : "Custom Product Name",
        //     "designReferenceFile": "http://bornartist.in/designs/596338cc86a4d32bebdccd8e",
        //     "men_size":[{"gender":"M","qty":"2","size":"S"}, {"gender":"M","qty":"2","size":"XXL"}]
        //   },
        //     {
        //     "displayName" : "Custom Product Name",
        //     "designReferenceFile": "http://bornartist.in/designs/596338cc86a4d32bebdccd8e",
        //     "men_size":[{"gender":"M","qty":"2","size":"S"}, {"gender":"M","qty":"2","size":"XXL"}]
        //   }
        // ]
        // this.OrderList.forEach(element => {
        //           element.qty = {};
        //           element.size_info_model_men = {};
        //           element.size_info_model = {};
        // });
        //*ngFor="let sizeObject of product.men_size;"
        //used only for count!
        this.refreshCartFromServer();
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.refreshCart = function () {
        var _this = this;
        this.restapi.getCart().subscribe(function (res) {
            console.log(res);
            //then make another call 
            _this.refreshCartFromServer();
            if (res && res.length != 0) {
                _this.OrderList = res.filter(function (wip) { return wip.orderStatus == "wip"; });
                if (_this.OrderList.length == 0) {
                    _this.disableCheckoutBtn = true;
                    _this.isEmptyCart = true;
                }
                else {
                    _this.disableCheckoutBtn = false;
                    _this.isEmptyCart = false;
                }
                if (_this.OrderList.length > 0) {
                    _this.isEmptyCart = false;
                    var elem = document.getElementById('disableCheckoutBtnID');
                    elem.disabled = false;
                    var inde = 0;
                    _this.OrderList.forEach(function (element) {
                        element.qty = {};
                        //setImage("http://bornartist.in/designs/596338cc86a4d32bebdccd8e");
                        if (!_this.disableCheckoutBtn) {
                            if (element.wip_cost) {
                                _this.disableCheckoutBtn = false;
                                elem.disabled = false;
                            }
                            else {
                                _this.disableCheckoutBtn = true;
                                elem.disabled = true;
                            }
                        }
                        if (_this.Backup_OrderList) {
                            element.size_info_model_men = _this.Backup_OrderList[inde].size_info_model_men;
                            element.size_info_model_women = _this.Backup_OrderList[inde].size_info_model_women;
                            element.size_info_model_kids = _this.Backup_OrderList[inde].size_info_model_kids;
                            element.size_info_model_baby = _this.Backup_OrderList[inde].size_info_model_baby;
                            element.is_collapse_men = _this.Backup_OrderList[inde].is_collapse_men;
                            element.is_collapse_women = _this.Backup_OrderList[inde].is_collapse_women;
                            element.is_collapse_kids = _this.Backup_OrderList[inde].is_collapse_kids;
                            element.is_collapse_baby = _this.Backup_OrderList[inde].is_collapse_baby;
                        }
                        else {
                            var tmp_size_info_model_men = {
                                "XS": 0,
                                "S": 0,
                                "M": 0,
                                "L": 0,
                                "XL": 0,
                                "XXL": 0,
                                "XXXL": 0
                            };
                            var tmp_size_info_model_women = {
                                "XS": 0,
                                "S": 0,
                                "M": 0,
                                "L": 0,
                                "XL": 0,
                                "XXL": 0,
                                "XXXL": 0
                            };
                            var tmp_size_info_model_kids = {
                                "XS": 0,
                                "S": 0,
                                "M": 0,
                                "L": 0,
                                "XL": 0,
                                "XXL": 0,
                                "XXXL": 0
                            };
                            var tmp_size_info_model_baby = {
                                "XS": 0,
                                "S": 0,
                                "M": 0,
                                "L": 0,
                                "XL": 0,
                                "XXL": 0,
                                "XXXL": 0
                            };
                            element.size_info_model_men = tmp_size_info_model_men;
                            element.size_info_model_women = tmp_size_info_model_women;
                            element.size_info_model_kids = tmp_size_info_model_kids;
                            element.size_info_model_baby = tmp_size_info_model_baby;
                        }
                        //this.totalcost = this.totalcost + element.wip_cost;
                        inde++;
                    });
                }
                else {
                    _this.isEmptyCart = true;
                    _this.OrderList = null;
                }
            }
            else {
                _this.isEmptyCart = true;
                _this.OrderList = null;
            }
        }, function (err) {
            console.error(err);
            _this.isEmptyCart = true;
            _this.updatingsize = null;
            _this.OrderList = null;
        });
    };
    CartComponent.prototype.showWarningMsg = function (msg) {
        var _this = this;
        this.warning_msg = msg;
        setTimeout(function () {
            console.log('warning_msg');
            _this.warning_msg = null;
        }, 3000);
    };
    CartComponent.prototype.showSuccessMsg = function (msg) {
        var _this = this;
        this.success_msg = msg;
        setTimeout(function () {
            console.log('warning_msg');
            _this.success_msg = null;
        }, 3000);
    };
    CartComponent.prototype.onChange = function (event, index) {
        console.log(event + '  ' + index);
        console.log(JSON.stringify(this.OrderList[index]));
    };
    CartComponent.prototype.deleteFromCart = function (id) {
        var _this = this;
        console.log('deleteFromCart' + id);
        this.restapi.doDeletefromCart(id).subscribe(function (res) {
            console.log('deleteFromCart res');
            console.log(res);
            _this.refreshCart();
            setInterval(function () {
                computeCost();
                setImage();
            }, 1200);
        }, function (err) {
            setInterval(function () {
                computeCost();
                setImage();
            }, 1200);
        });
    };
    CartComponent.prototype.refreshCartFromServer = function () {
        var _this = this;
        this.restapi.getSummary().subscribe(function (res) {
            console.log(res);
            if (res && res.orderlist.length != 0) {
                var OrderList = res.orderlist.filter(function (wip) { return wip.orderStatus == "wip"; });
                _this.totalcost = res.total;
                _this.app.updateCart(OrderList.length);
            }
            _this.updatingsize = false;
        }, function (err) {
            console.log('failed to refresh cart from server');
            _this.updatingsize = null;
        });
    };
    CartComponent.prototype.updateOnServer = function (Gender, productIndex, size_info_model) {
        var _this = this;
        this.updatingsize = true;
        var SizeInfo = [];
        Object.keys(size_info_model).forEach(function (key) {
            if (size_info_model[key]) {
                console.log(key); // the name of the current key.
                console.log(size_info_model[key]); // the value of the current key.
                var size = {
                    'gender': Gender,
                    'qty': size_info_model[key],
                    'size': key
                };
                SizeInfo.push(size);
            }
        });
        console.log(SizeInfo);
        var data = {
            'sizes': JSON.stringify(SizeInfo),
            'index': productIndex
        };
        this.restapi.updateSize(data).subscribe(function (res) {
            console.log(res);
            //Do this to update cost?
            _this.Backup_OrderList = _this.OrderList;
            _this.refreshCart();
        }, function (err) {
            console.log(err);
        });
    };
    CartComponent.prototype.updateMenSizeInfo = function (productIndex) {
        //Should know the row id
        //should know the size info of all supported sizes
        //should cater other rows also
        console.log(productIndex);
        console.log(this.OrderList[productIndex].size_info_model_men);
        this.updateOnServer("M", productIndex, this.OrderList[productIndex].size_info_model_men);
    };
    CartComponent.prototype.updateWomenSizeInfo = function (productIndex) {
        //console.log(this.size_info_model_women[productIndex])
        console.log(productIndex);
        //this.updateOnServer("F", productIndex)
        this.updateOnServer("F", productIndex, this.OrderList[productIndex].size_info_model_women);
    };
    CartComponent.prototype.updateKidsSizeInfo = function (productIndex) {
        console.log(this.size_info_model_men[productIndex]);
        console.log(productIndex);
        this.updateOnServer("Kid", productIndex, this.OrderList[productIndex].size_info_model_kids);
    };
    CartComponent.prototype.updateBabySizeInfo = function (productIndex) {
        console.log(this.size_info_model_men[productIndex]);
        console.log(productIndex);
        this.updateOnServer("Baby", productIndex, this.OrderList[productIndex].size_info_model_baby);
    };
    CartComponent.prototype.saveItemInfo = function (data) {
        console.log(data);
    };
    CartComponent.prototype.toggleWomenSize = function (productIndex) {
        console.log(productIndex);
        this.OrderList[productIndex]['is_collapse_women'] = !this.OrderList[productIndex]['is_collapse_women'];
        this.OrderList[productIndex]['is_collapse_men'] = false;
        this.OrderList[productIndex]['is_collapse_kids'] = false;
        this.OrderList[productIndex]['is_collapse_baby'] = false;
    };
    CartComponent.prototype.resetSize = function (Gender, productIndex) {
        var _this = this;
        var SizeInfo = [];
        var size_info_model;
        this.updatingsize = true;
        if (Gender == "M") {
            size_info_model = this.OrderList[productIndex].size_info_model_men;
        }
        if (Gender == "F") {
            size_info_model = this.OrderList[productIndex].size_info_model_women;
        }
        if (Gender == "Kid") {
            size_info_model = this.OrderList[productIndex].size_info_model_kids;
        }
        if (Gender == "Baby") {
            size_info_model = this.OrderList[productIndex].size_info_model_baby;
        }
        Object.keys(size_info_model).forEach(function (key) {
            // if(size_info_model[key]){
            console.log(key); // the name of the current key.
            console.log(size_info_model[key]); // the value of the current key.
            var size = {
                'gender': Gender,
                'qty': 0,
                'size': key
            };
            SizeInfo.push(size);
            // }
        });
        console.log(SizeInfo);
        var data = {
            'sizes': JSON.stringify(SizeInfo),
            'index': productIndex
        };
        this.restapi.clearSizeInfo(data).subscribe(function (res) {
            console.log(res);
            //Do this to update cost?
            _this.Backup_OrderList = _this.OrderList;
            _this.refreshCart();
        }, function (err) {
            console.log(err);
        });
    };
    return CartComponent;
}());
CartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(345),
        styles: [__webpack_require__(328)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__restapi_service__["a" /* RestapiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__restapi_service__["a" /* RestapiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _d || Object])
], CartComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/cart.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restapi_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutComponent = (function () {
    function CheckoutComponent(restapi, app) {
        this.restapi = restapi;
        this.app = app;
        this.customerDetails = {};
        this.shippingDetails = {};
        this.billingDetails = {};
        this.error_customer = false;
        this.error_shipping = false;
        this.error_billing = false;
        this.billingAddressSameAsShippingAddress = true;
        this.payment_success_url = this.restapi.Dev_URL + '/api/paymentsuccess';
        this.payment_failure_url = this.restapi.Dev_URL + '/api/paymentfailed';
        this.getTotalCost();
        //  this.OrderList = [
        //    {
        //      "displayName": 'Custom T-Shirt',
        //      "orderStatus": "wip",
        //    }
        //  ]
        //Only to get CART Count
        this.refreshCartFromServer();
        //Profile 
        this.refreshProfileFromServer();
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent.prototype.getTotalCost = function () {
        var _this = this;
        this.Total = 0;
        this.restapi.getSummary().subscribe(function (res) {
            console.log(res);
            _this.OrderList = res.orderlist;
            _this.Total = res.total;
        }, function (err) {
            console.error(err);
        });
    };
    CheckoutComponent.prototype.refreshCartFromServer = function () {
        var _this = this;
        this.restapi.getSummary().subscribe(function (res) {
            console.log(res);
            if (res && res.orderlist.length != 0) {
                var OrderList = res.orderlist.filter(function (wip) { return wip.orderStatus == "wip"; });
                _this.app.updateCart(OrderList.length);
            }
        }, function (err) {
            console.log('failed to refresh cart from server');
        });
    };
    //Fetch Profile
    CheckoutComponent.prototype.refreshProfileFromServer = function () {
        var _this = this;
        console.log('refreshProfileFromServer -->');
        this.restapi.doGetProfile().subscribe(function (res) {
            console.log(res);
            _this.evaluateAuthStatus(res);
        }, function (err) {
            console.log(err);
            _this.isAuth = false;
        });
    };
    CheckoutComponent.prototype.evaluateAuthStatus = function (res) {
        console.log('evaluateAuthStatus -->');
        console.log(res);
        if (res.user) {
            console.log('valid user found');
            this.isAuth = true;
            //Determine the Auth Type and build a local profile. Let us not screw backend for this.
            this.userInfo = res.user;
            this.customerDetails['firstName'] = this.userInfo.name;
            this.customerDetails['email'] = this.userInfo.local.email;
        }
        else {
            console.log('no user found');
            this.isAuth = false;
        }
    };
    CheckoutComponent.prototype.confirmDetails = function () {
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__(346),
        styles: [__webpack_require__(329)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__restapi_service__["a" /* RestapiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__restapi_service__["a" /* RestapiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], CheckoutComponent);

var _a, _b;
//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/checkout.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactusComponent = (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    return ContactusComponent;
}());
ContactusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contactus',
        template: __webpack_require__(347),
        styles: [__webpack_require__(330)]
    }),
    __metadata("design:paramtypes", [])
], ContactusComponent);

//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/contactus.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = (function () {
    function FaqComponent() {
        this.url = 'https://pixlr.com/express/?s=c&image=http%3A//developer.pixlr.com/_image/example3.jpg&title=Example%20image%203&target=http%3A//localhost:3000/api/order/uploaddesignreference&exit=http%3A//bornartist.in/';
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    return FaqComponent;
}());
FaqComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-faq',
        template: __webpack_require__(348),
        styles: [__webpack_require__(331)]
    }),
    __metadata("design:paramtypes", [])
], FaqComponent);

//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/faq.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restapi_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = (function () {
    function GalleryComponent(restapi) {
        this.restapi = restapi;
        this.retrieveAllDesignImages();
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent.prototype.retrieveAllDesignImages = function () {
        var _this = this;
        console.log('retrieveAllDesignImages --> ');
        this.restapi.retrieveAllDesignImages().subscribe(function (res) {
            console.log('retrieveAllDesignImages success--> ');
            console.log(res);
            _this.imagePaths = res; //children;
        }, function (err) {
            console.log('retrieveAllDesignImages failed--> ');
            console.log(err);
        });
    };
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gallery',
        template: __webpack_require__(349),
        styles: [__webpack_require__(332)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__restapi_service__["a" /* RestapiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__restapi_service__["a" /* RestapiService */]) === "function" && _a || Object])
], GalleryComponent);

var _a;
//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/gallery.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restapi_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__posts_service__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(restapi, r, post) {
        this.restapi = restapi;
        this.post = post;
        this.router = r;
        this.color = 'white';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.doFiltering = function () {
        this.menProds = this.allProdsList.filter(function (prod) { return prod.section === "Men"; });
        this.kidsProds = this.allProdsList.filter(function (prod) { return prod.section === "Kids"; });
        this.womenProds = this.allProdsList.filter(function (prod) { return prod.section === "Women"; });
    };
    HomeComponent.prototype.gotoProduct = function (menItem) {
        console.log('gotoProduct');
        console.log(JSON.stringify(menItem));
        this.router.navigate(['/product/', { id: menItem._id }]);
    };
    HomeComponent.prototype.onSelectVNeck = function (image) {
        console.log(document.getElementById('vneckshirt'));
        var img = document.getElementById('vneckshirt');
        //window.localStorage.setItem('vneck', img['src'] );
        //window.localStorage.setItem('vneck_color', this.color);
        // window.sessionStorage.setItem('vneck', img['src'] );
        // window.sessionStorage.setItem('vneck_color', this.color);
        // window.sessionStorage.setItem('vneck_selected', 'true');
        var a = document.getElementById('btn-customize-vneck');
        a['href'] = "/posts?style_code=99-RF-100132-190/SJ&style_name='Men\'s V Neck  Short Sleeve Tshirt-190'&imagePath=" + img['src'] + "&scale=1&color=" + this.color;
    };
    HomeComponent.prototype.onSelectRoundNeck = function (round) {
        console.log(document.getElementById('roundneck'));
        var img = document.getElementById('roundneck');
        ///window.sessionStorage.setItem('roundneck', img['src'] );
        //window.sessionStorage.setItem('roundneck_color', this.color);
        //window.sessionStorage.setItem('vneck_selected', 'false');
        var a = document.getElementById('btn-customize-roundneck');
        if (this.color == 'white') {
            a['href'] = "/posts?style_code=99-RF-100112-190/SJ&style_name='Men's Round Neck Short Sleeve Tshirt-190'&isround=true&imagePath=" + img['src'] + "&scale=1.0&color=" + this.color;
        }
        else {
            a['href'] = "/posts?style_code=99-RF-100112-190/SJ&style_name='Men's Round Neck Short Sleeve Tshirt-190'&isround=true&imagePath=" + img['src'] + "&scale=0.4&color=" + this.color;
        }
    };
    HomeComponent.prototype.changeColor = function (color) {
        var img = document.getElementById('vneckshirt');
        this.color = color;
        if (color == 'Royal Blue') {
            img['src'] = 'assets/vneckblue300.jpg';
        }
        else if (color == 'brown') {
            img['src'] = 'assets/vneckgreen300.jpg';
        }
        else if (color == 'black') {
            img['src'] = 'assets/Vneckblack300.jpg';
        }
        else if (color == 'white') {
            img['src'] = 'assets/V-NeckWhite300.jpg';
        }
        else if (color == 'Red') {
            img['src'] = 'assets/vneckred300.jpg';
        }
    };
    HomeComponent.prototype.changeColorRoundNeck = function (color) {
        var img = document.getElementById('roundneck');
        this.color = color;
        if (color == 'Royal Blue') {
            img['src'] = 'assets/roundneck/blue-round-neck-t-shirts-single.jpg';
        }
        else if (color == 'brown') {
            img['src'] = 'roundneck/brown-round-neck-t-shirt.jpg';
        }
        else if (color == 'black') {
            img['src'] = 'assets/roundneck/black-round-neck-t-shirts-single.jpg';
        }
        else if (color == 'white') {
            img['src'] = 'assets/Roundneck300.jpg'; //white-round-neck-t-shirts-single.jpg';
        }
        else if (color == 'Red') {
            img['src'] = 'assets/roundneck/red-round-neck-t-shirts-single.jpg';
        }
    };
    HomeComponent.prototype.selectmen = function () {
        console.log('from angular');
        selectMenVneck();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(350),
        styles: [__webpack_require__(333)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__restapi_service__["a" /* RestapiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__restapi_service__["a" /* RestapiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__posts_service__["a" /* PostsService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/home.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IamComponent = (function () {
    function IamComponent() {
    }
    IamComponent.prototype.ngOnInit = function () {
    };
    return IamComponent;
}());
IamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-iam',
        template: __webpack_require__(351),
        styles: [__webpack_require__(334)]
    }),
    __metadata("design:paramtypes", [])
], IamComponent);

//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/iam.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(37);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(154);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/index.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posts_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restapi_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostsComponent = (function () {
    function PostsComponent(postsService, restapi, r, route, app) {
        this.postsService = postsService;
        this.restapi = restapi;
        this.app = app;
        // instantiate posts to an empty object
        this.posts = [];
        this.countofCart = 2;
        this.counterValue = 0;
        this.counterChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        console.log('contructor post');
        this.router = r;
        this.route = route;
        var obj = window.localStorage.getItem('product');
        this.counterValue++;
        this.counterChange.emit({
            value: this.counterValue
        });
        this.refreshCartFromServer();
    }
    PostsComponent.prototype.doSomething = function ($event) {
        $event.returnValue = 'Your data will be lost!';
    };
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('contructor ngOnInit');
        this.route
            .queryParams
            .subscribe(function (params) {
            console.log(params);
            window.localStorage.setItem('style_code', params.style_code);
            window.localStorage.setItem('style_name', params.style_name);
            window.localStorage.setItem('color', params.color);
            var order_id = window.localStorage.getItem('order_id');
            console.log(order_id);
            // if(order_id){
            //   //this.updateExistingOrder(params.style_code, params.style_name, order_id, params.color);
            // }else{
            // }
            _this.initializeOrder(params.style_code, params.style_name, params.color);
        });
    };
    PostsComponent.prototype.fileChange = function (event) {
        console.log('fired');
        var indexOfproductsWip = window.sessionStorage.getItem('index');
        console.log('indexOfproductsWip =' + indexOfproductsWip);
        var fileList = event.target.files;
        //var prod = this.restapi.doGetSelectedProd();
        var prod = window.localStorage.getItem('product');
        prod = JSON.parse(prod);
        var order_id = window.localStorage.getItem('order_id');
        var options = {
            // _id : prod['_id'],
            // product_stylecode : prod['style_code'], //'99-RF-100112-190/SJ' 99-RF-100112-190/SJ
            orderId: order_id,
            indexOfproductsWip: indexOfproductsWip
        };
        console.log('uploading design image');
        console.log(options);
        this.restapi.doUploadDesignImage(fileList, options).subscribe(function (res) {
            console.log(res);
            // if(res.result.response_msg[0]== "Merchant design created successfully. "){
            //    window.localStorage.setItem('design_code', res.design_code)
            // }
            window.localStorage.setItem('order', JSON.stringify(res));
        }, function (err) {
            console.log(err);
        });
    };
    PostsComponent.prototype.initializeOrder = function (style_code, style_name, color) {
        var _this = this;
        console.log('InitializeOrder-->');
        var obj = {
            'style_name': style_name,
            'style_code': style_code,
            'color': color
        };
        this.restapi.InitializeOrder(obj).subscribe(function (res) {
            console.log(res);
            if (res._id) {
                console.log('InitializeOrder success -->');
                console.log(JSON.stringify(res));
                window.localStorage.setItem('order_id', res._id);
                window.localStorage.setItem('order', JSON.stringify(res));
                window.sessionStorage.setItem('index', res.index);
                window.sessionStorage.setItem('order_id', res._id);
                console.log('InitializeOrder success <--');
                downloadImage();
            }
            else {
                alert('something is not right. orderId isnull');
            }
            _this.refreshCartFromServer();
        }, function (err) {
            console.log(err);
        });
    };
    PostsComponent.prototype.saveDesign = function () {
        console.log('save design');
        this.refreshCartFromServer();
        downloadImage();
    };
    PostsComponent.prototype.refreshCartFromServer = function () {
        var _this = this;
        this.restapi.getSummary().subscribe(function (res) {
            console.log(res);
            if (res && res.orderlist.length != 0) {
                var OrderList = res.orderlist.filter(function (wip) { return wip.orderStatus == "wip"; });
                _this.app.updateCart(OrderList.length);
            }
        }, function (err) {
            console.log('failed to refresh cart from server');
        });
    };
    return PostsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PostsComponent.prototype, "counterValue", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PostsComponent.prototype, "counterChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:beforeunload', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PostsComponent.prototype, "doSomething", null);
PostsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-posts',
        template: __webpack_require__(352),
        styles: [__webpack_require__(335)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__restapi_service__["a" /* RestapiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__restapi_service__["a" /* RestapiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]) === "function" && _e || Object])
], PostsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/posts.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacyComponent = (function () {
    function PrivacyComponent(router) {
        this.router = router;
    }
    PrivacyComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    return PrivacyComponent;
}());
PrivacyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-privacy',
        template: __webpack_require__(353),
        styles: [__webpack_require__(336)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], PrivacyComponent);

var _a;
//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/privacy.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restapi_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = (function () {
    function ProductComponent(restapi, router, activatedRoute) {
        this.restapi = restapi;
        this.router = router;
        this.activatedRoute = activatedRoute;
        var params = this.activatedRoute.snapshot.params;
        console.log(JSON.stringify(params));
    }
    ProductComponent.prototype.ngOnInit = function () {
        var params = this.activatedRoute.snapshot.params;
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(354),
        styles: [__webpack_require__(337)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__restapi_service__["a" /* RestapiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__restapi_service__["a" /* RestapiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object])
], ProductComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/product.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    // transform(value: any, args?: any): any {
    //   return null;
    // }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'safe'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/safe.pipe.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsComponent = (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    return TermsComponent;
}());
TermsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-terms',
        template: __webpack_require__(355),
        styles: [__webpack_require__(338)]
    }),
    __metadata("design:paramtypes", [])
], TermsComponent);

//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/terms.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restapi_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionfailedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionfailedComponent = (function () {
    function TransactionfailedComponent(restapi) {
        this.restapi = restapi;
        this.orderItems = [];
        this.orderSummary = [];
        this.getTxnSummary();
        // this.orderItems = [
        //   {
        //     designReferenceFile:"http://bornartist.in/designs/5950c5d310ba4149fbec2944",
        //     displayName:"Custom Round Neck T-shirt for Men",
        //     men_size : [
        //       {
        //         gender:"M",
        //         qty:"1",
        //         size:"S"
        //       }
        //     ]
        //   },
        //   {
        //     designReferenceFile:"http://bornartist.in/designs/5950c5d310ba4149fbec2944",
        //     displayName:"Custom Round Neck T-shirt for Men",
        //     men_size : [
        //       {
        //         gender:"M",
        //         qty:"1",
        //         size:"S"
        //       }
        //     ]
        //   }
        // ]
        // this.orderSummary = [
        //   {
        //     order_id : "5950c5",
        //     txnid : "5950c5",
        //     txnAmount : 499,
        //     "shipping_address" : {
        //       address_line1:"#19, 18th cross,",
        //       address_line2:"6th main, btm",
        //       city:"Bangalore",
        //       country:"india",
        //       first_name:"Sachin",
        //       last_name:"Rohit",
        //       mobile:"9611167363",
        //       pincode:"560078",
        //       state:"Karnataka",
        //       title:"Mr."
        //     },
        //     "customer_details":{
        //       email:"48.rohit@gmail.com",
        //       first_name:"Sachin",
        //       last_name:"Rohit",
        //       title:"Mr."
        //     }
        //   }
        // ]
    }
    TransactionfailedComponent.prototype.ngOnInit = function () {
    };
    TransactionfailedComponent.prototype.getTxnSummary = function () {
        var _this = this;
        this.Total = 0;
        this.restapi.doGetTxnDetails().subscribe(function (res) {
            console.log(res);
            // this.OrderList = res.orderlist;
            // this.Total = res[0].txnAmount;
            // this.TxnId = res[0].txnid
            // this.OrderList = res.orderlist;
            _this.orderSummary = res.ordersummary;
            var data = res.ordersummary;
            _this.Total = data[0].txnAmount;
            _this.TxnId = data[0].txnid;
            //these contain the preview images
            _this.orderItems = res.orderitems;
            //designReferenceFile
        });
    };
    return TransactionfailedComponent;
}());
TransactionfailedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-transactionfailed',
        template: __webpack_require__(356),
        styles: [__webpack_require__(339)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__restapi_service__["a" /* RestapiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__restapi_service__["a" /* RestapiService */]) === "function" && _a || Object])
], TransactionfailedComponent);

var _a;
//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/transactionfailed.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restapi_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsuccessComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionsuccessComponent = (function () {
    function TransactionsuccessComponent(restapi) {
        this.restapi = restapi;
        this.Total = 0;
        this.TxnId = null;
        this.orderItems = [];
        this.orderSummary = [];
        this.getTxnSummary();
        // this.orderItems = [
        //   {
        //     designReferenceFile:"http://bornartist.in/designs/5950c5d310ba4149fbec2944",
        //     displayName:"Custom Round Neck T-shirt for Men",
        //     men_size : [
        //       {
        //         gender:"M",
        //         qty:"1",
        //         size:"S"
        //       }
        //     ]
        //   },
        //   {
        //     designReferenceFile:"http://bornartist.in/designs/5950c5d310ba4149fbec2944",
        //     displayName:"Custom Round Neck T-shirt for Men",
        //     men_size : [
        //       {
        //         gender:"M",
        //         qty:"1",
        //         size:"S"
        //       }
        //     ]
        //   }
        // ]
        // this.orderSummary = [
        //   {
        //     order_id : "5950c5",
        //     txnid : "5950c5",
        //     txnAmount : 499,
        //     "shipping_address" : {
        //       address_line1:"#19, 18th cross,",
        //       address_line2:"6th main, btm",
        //       city:"Bangalore",
        //       country:"india",
        //       first_name:"Sachin",
        //       last_name:"Rohit",
        //       mobile:"9611167363",
        //       pincode:"560078",
        //       state:"Karnataka",
        //       title:"Mr."
        //     },
        //     "customer_details":{
        //       email:"48.rohit@gmail.com",
        //       first_name:"Sachin",
        //       last_name:"Rohit",
        //       title:"Mr."
        //     }
        //   }
        // ]
    }
    TransactionsuccessComponent.prototype.ngOnInit = function () {
    };
    TransactionsuccessComponent.prototype.getTxnSummary = function () {
        var _this = this;
        this.Total = 0;
        this.restapi.doGetTxnDetails().subscribe(function (res) {
            console.log(res);
            // this.OrderList = res.orderlist;
            _this.orderSummary = res.ordersummary;
            var data = res.ordersummary;
            _this.Total = data[0].txnAmount;
            _this.TxnId = data[0].txnid;
            //these contain the preview images
            _this.orderItems = res.orderitems;
            //designReferenceFile
        });
    };
    TransactionsuccessComponent.prototype.getOrderedProductDetailsForPreview = function () {
        var _this = this;
        this.restapi.doGetTxnDetails().subscribe(function (res) {
            console.log(res);
            // this.OrderList = res.orderlist;
            _this.Total = res[0].txnAmount;
            _this.TxnId = res[0].txnid;
        });
    };
    return TransactionsuccessComponent;
}());
TransactionsuccessComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-transactionsuccess',
        template: __webpack_require__(357),
        styles: [__webpack_require__(340)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__restapi_service__["a" /* RestapiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__restapi_service__["a" /* RestapiService */]) === "function" && _a || Object])
], TransactionsuccessComponent);

var _a;
//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/transactionsuccess.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/environment.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/polyfills.js.map

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".footer{\n    position: absolute;\n    bottom:0px;\n}\n\n.container{\n    min-height: 100%;\n    margin-top:16em\n}\n\n.card-header{\n    background: none;\n    color:#EC9600;\n}\n\n.card{\n    border:0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "body {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #eee;\n}\n\n.form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px;\n}\n.form-signin .checkbox {\n  font-weight: normal;\n}\n.form-signin .form-control {\n  position: relative;\n  height: auto;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.container{\n  margin-top:18em;\n  min-height: 100%;\n}\n\n.login-signup-block{\n  margin-top:10em !important;\n}\n\n.active{\n  background: none !important;\n  color: black !important;\n  border-radius:0px !important;\n}\n\n.nav-tabs{\n  color:black\n}\n\na{\n  color:black;\n}\na.nav-link{\n  color:black !important;\n}\n\n.tab-content{\n  padding-top:2em;\n}\n\n.wraptocenter{\n  width:40%;\n}\n\n.card-margins{\n  margin-right: 1em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".badge {\n  padding-left: 9px;\n  padding-right: 9px;\n  border-radius: 9px;\n}\n\n#cart-badge {\n    font-size: 14px;\n    background: #696969;\n    color: #fff;\n    padding: 0 5px;\n    vertical-align: top;\n}\n\nhtml,\nbody {\n  height: 100%;\n  /* The html and body elements cannot have any padding or margin. */\n}\n\n/* Wrapper for page content to push down footer */\n#wrap {\n  /*min-height: 100%;*/\n  /*height: auto !important;*/\n  /*height: 100%;*/\n  /* Negative indent footer by its height */\n  margin: 0 auto -12em;\n  /* Pad the bottom by footer height */\n  /*padding: 0 0 12em;*/\n}\n\n/* Set the fixed height of the footer here */\nfooter {\n  height: 12em;\n  width:100%;\n  background-color: #ffefd5;\n   padding: 0 ;\n       margin-bottom: 0px;\n\n}\n\n\n\n.icon-wrapper{\n    position:relative;\n    float:left;\n}\n\n*.icon-blue {color: #0088cc}\n*.icon-grey {color: white}\ni {   \n    /*width:2em !important;;*/\n    text-align:center;\n    vertical-align:middle;\n}\n.badge{\n    background: rgba(0,0,0,0.5);\n    width: auto;\n    height: auto;\n    margin: 0;\n    border-radius: 50%;\n    position:absolute;\n    top:-13px;\n    right:-1.6em;\n    padding:0.3em;\n}\n\n.btn{\n  margin-left:1em\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".nomargin{\n    margin-left:4em;\n    font-size: 1.5em;\n}\n\na[disabled] {\n    pointer-events: none;\n    background: #a0dba0;\n}\n\n.container{\n    min-height: 100%;\n    margin-top:16em;\n}\n\nimage-zoom-container{\n   \n}\n\n.modal-body{\n    padding-top:0px !important;\n}\n\ntd{\n   border-top:0px\n}\n\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  line-height: 1.428571429;\n  border-radius: 15px;\n}\n\n.size-sheet-modal-font{\n    font-size:0.6em;\n    margin-bottom:0px;\n    margin-top:0.2em;\n}\n\n.card-header{\n    padding:0.6em;\n    background: rgba(247, 247, 249, 0.41);\n}\n\nh5{\n    font-size:1em !important;\n}\n\n.input-min-width {\n    min-width:4em!important;\n}\n.form-control-sm, .input-group-sm>.form-control, .input-group-sm>.input-group-addon, .input-group-sm>.input-group-btn>.btn {\n    border-radius:0px;\n}\n.chip-exisiting-sizes{\n    margin-bottom: 0px;\n    font-size: 0.7em;\n    background: lightgrey;\n    padding: 0.5em;\n    border-radius: 10px;\n    margin-right:3px;\n    color:black;\n}\n\n.card-block{\n    padding-top:0.6em;\n    padding-bottom:0.6em;\n}\n\n.chevron-color{\n    color : #9E9E9E;\n}\n\n.fa{\n    font-size: 0.8em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "#loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 100px;\n  height: 100px;\n  margin: -75px 0 0 -75px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #3498db;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 1s linear infinite;\n  animation: spin 1s linear infinite;\n /*//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_loader5*/\n}\n\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n.container{\n    min-height: 100%;\n}\n\n.checkout-hidden{\n  display: none\n}\n\n.checkout-shown{\n  display: block\n}\n\n.card{\n  border: 0px\n}\n\n.card-block{\n  padding-left:0px;\n}\n\n.chip-exisiting-sizes{\n    margin-bottom: 0px;\n    font-size: 0.7em;\n    background: none;\n    border: 1px solid lightgray;\n    padding: 0.5em;\n    border-radius: 10px;\n    margin-right:3px;\n    color:black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".container{\n    min-height: 100%;\n    padding-top:16em\n}\n\n.card-header{\n    background: none;\n    color:#EC9600;\n}\n\n.card{\n    border:0px;\n}\n\n.footer{\n    position: absolute;\n    bottom:0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "\n.container{\n    min-height: 100%;\n    padding-top:16em\n}\n\n.image-container{\n    display: block;\n    margin:auto;\n}\n.wraptocenter {\n  display: block;\n  width: 320px;\n  height: 320px;\n  top: 50%;\n  border:1px solid #EC9600;\n  margin-left:1em;\n  margin-bottom: 1em;\n}\n/*.wraptocenter * {\n  vertical-align: middle;\n}*/\n\n.card-header{\n    background: none;\n    color:#EC9600;\n    border: 0px;\n}\n\n.card{\n    border:0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".active-selection{\n    /*border: 10px solid green;\n    border-radius: 4px;*/\n}\n\n.btn-outline{\n    \n}\n\n.item-desc{\n    font-weight:300;\n    font-size:0.8em;\n    margin-top:1.4em;\n}\n\n.card-header {\n    background:#ec9600;\n    color:white !important;\n}\n\n.pick-text{\n    color:white;\n}\n\n.btn-sm{\n   font-weight: 100;\n   /*border: 1px solid rgba(226, 226, 226, 0.53);;\n   border-radius: 0px;*/\n   /*background:#edf4f4;*/\n   background :white;\n   font-family: 'Handlee', cursive;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "input[type=\"text\"], input[type=\"number\"], textarea {\n\n  background-color : #ECECEC; \n  /*border: 2px solid #C0C0C0;*/\n\n}\n\n#overlay {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    background: #000;\n    opacity: 0.8;\n    filter: alpha(opacity=80);\n}\n\n#loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 100px;\n  height: 100px;\n  margin: -75px 0 0 -75px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #3498db;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 1s linear infinite;\n  animation: spin 1s linear infinite;\n /*//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_loader5*/\n}\n\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n/* Add animation to \"page content\" */\n.animate-bottom {\n  position: relative;\n  -webkit-animation-name: animatebottom;\n  -webkit-animation-duration: 1s;\n  animation-name: animatebottom;\n  animation-duration: 1s\n}\n\n@-webkit-keyframes animatebottom {\n  from { bottom:-100px; opacity:0 } \n  to { bottom:0px; opacity:1 }\n}\n\n@keyframes animatebottom { \n  from{ bottom:-100px; opacity:0 } \n  to{ bottom:0; opacity:1 }\n}\n\n.container{\n    min-height: 100%;\n}\n\n\n/**\nRange Input\n*/\n/*input[type=range] {\n  -webkit-appearance: none;\n  margin: 18px 0;\n  width: 100%;\n}\ninput[type=range]:focus {\n  outline: none;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 8.4px;\n  cursor: pointer;\n  animate: 0.2s;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #3071a9;\n  border-radius: 1.3px;\n  border: 0.2px solid #010101;\n}\ninput[type=range]::-webkit-slider-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 36px;\n  width: 16px;\n  border-radius: 3px;\n  background: #ffffff;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -14px;\n}\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  background: #367ebd;\n}\ninput[type=range]::-moz-range-track {\n  width: 100%;\n  height: 8.4px;\n  cursor: pointer;\n  animate: 0.2s;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #3071a9;\n  border-radius: 1.3px;\n  border: 0.2px solid #010101;\n}\ninput[type=range]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 36px;\n  width: 16px;\n  border-radius: 3px;\n  background: #ffffff;\n  cursor: pointer;\n}\ninput[type=range]::-ms-track {\n  width: 100%;\n  height: 8.4px;\n  cursor: pointer;\n  animate: 0.2s;\n  background: transparent;\n  border-color: transparent;\n  border-width: 16px 0;\n  color: transparent;\n}\ninput[type=range]::-ms-fill-lower {\n  background: #2a6495;\n  border: 0.2px solid #010101;\n  border-radius: 2.6px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\ninput[type=range]::-ms-fill-upper {\n  background: #3071a9;\n  border: 0.2px solid #010101;\n  border-radius: 2.6px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\ninput[type=range]::-ms-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 36px;\n  width: 16px;\n  border-radius: 3px;\n  background: #ffffff;\n  cursor: pointer;\n}\ninput[type=range]:focus::-ms-fill-lower {\n  background: #3071a9;\n}\ninput[type=range]:focus::-ms-fill-upper {\n  background: #367ebd;\n}*/\n\n.btn-sm{\n   font-weight: 100;\n   /*border: 1px solid rgba(226, 226, 226, 0.53);;\n   border-radius: 0px;*/\n   /*background:#edf4f4;*/\n   background :white;\n}\n\n.btn-sm-action{\n  min-width: 21.5%!important;\n}\n\n.input-group-addon{\n  border-radius: 0px;\n}\n\n.btn-danger{\n  background : #e45a5a\n}\n\n.btn-success{\n  background : rgb(92, 184, 92);\n}\n\n.btn-sm:hover{\n  \n}\n\nselect{\n  -webkit-appearance: none; \n   -moz-appearance: none;\n   /*appearance: none;  */\n}\n\ninput[type=\"number\"] {\n\t-webkit-appearance: none;\n\twidth: 5em!important;\n  border: 1px thin grey !important;;\n   border-radius: 0px;  \n\t/*height: 32px;*/\n}\n\n\ninput[type=\"color\"] {\n\t-webkit-appearance: none;\n\tborder: none;\n\twidth: 20px;\n\t/*height: 32px;*/\n}\ninput[type=\"color\"]::-webkit-color-swatch-wrapper {\n\t/*padding: 0;*/\n}\ninput[type=\"color\"]::-webkit-color-swatch {\n\tborder: none;\n}\n\ninput[type=\"color\"] {\n\t-webkit-appearance: none;\n\tborder: none;\n\twidth: 16px;\n\theight: 16px;\n}\ninput[type=\"color\"]::-webkit-color-swatch-wrapper {\n\tpadding: 0;\n}\ninput[type=\"color\"]::-webkit-color-swatch {\n\tborder: none;\n}\n\n\n.my-fancy-container {\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  display: inline-block;\n  margin: 60px;\n  padding: 10px;\n  text-align: center;\n}\n\n.my-text {\n  display: block;\n}\n\n.my-icon {\n    vertical-align: middle;\n    font-size: 1em;\n}\n\n.arrow-down {\n\twidth: 0; \n\theight: 0; \n\tborder-left: 5px solid transparent;\n\tborder-right: 5px solid transparent;\n\tborder-top: 5px solid black;\n    margin: 0 auto;\n}\n\n.btn-group-height{\n height: 2rem;\n}\n\n/*input[type=range] {\n  -webkit-appearance: none;\n  width: 100%;\n  background :rgba(226, 226, 226, 0.53);\n}*/\n\ninput[type=\"range\"]::-webkit-slider-thumb {\n     -webkit-appearance: none;\n    background: #e45a5a;\n    /*opacity: 0.5;*/\n    /*width: 10px;\n    height: 26px;*/\n}\n\np{\n  margin-bottom:0px !important;\n}\n\n.input-group-addon{\n  width:100% !important;\n  text-align: left;\n  /*background: rgba(255, 253, 253, 0.53);*/\n  /*border-top: 1px;\n   border-bottom: 1px;*/\n  min-width: 12em;\n  background-color:rgba(226, 132, 19, 0.6) !important;\n  color:white\n}\n\n/*//#3b62c3*/\n\n.input-group-header:hover{\n  background: #2aa4de !important;\n}\n\n.border-style{\n  border:2px dodgerblue !important;\n}\n.input-group-header{\n    background:#E28413 !important;\n    /*EC9600; */\n    padding:8px;\n    color:white;\n    min-width: 12em;\n    border-top-width:2px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.68) !important;;\n }\n\n .btn-image-filter{\n   color:white;\n   background: transparent;\n   margin-bottom:0px;\n }\n\n .card{\n   width:45em\n }\n .card-block{\n   padding:0;\n }\n\n .card-header {\n   background: rgba(0, 0, 0, 0.68) !important;\n   color:white;\n    /*rgba(182, 201, 247, 0.64)*/\n }\n\n.btn-group{\n  /*background: #06BEE1 !important;*/\n}\n\n.invisible-fonts{\n  color:white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "footer{\n    min-height: 200px\n}\n\n.container{\n    min-height: 100%;\n}\n\n.card-header{\n    /*//background:lightcoral;*/\n    color:lightcoral;\n    font-weight: 200;\n}\n\n\n.image-container {\n  display: block;\n  margin: auto;\n}\n\n.wraptocenter {\n  display: block;\n  width: 320px;\n  height: 320px;\n  top: 50%;\n  border: 1px solid rgba(236, 150, 0, 0.18);\n  margin-left: 1em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "footer{\n    min-height: 200px\n}\n\n.container{\n    min-height: 100%;\n}\n\n.card-header{\n\n    font-weight: 200;\n}\n\n.image-container {\n  display: block;\n  margin: auto;\n}\n\n.wraptocenter {\n  display: block;\n  width: 320px;\n  height: 320px;\n  top: 50%;\n  border: 1px solid rgba(236, 150, 0, 0.18);\n  margin-left: 1em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"\">\n\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Born Artist\n      </div>\n      <div class=\"card-block\">\n        <h4 class=\"card-title\">Brings the artist in you!</h4>\n        <p class=\"card-text\">At Born Artist, We come to see wide smiles in families. Infants are born with unique talents but all they have in common\n    is ART. Every parent would like to see a Picasso or Da Vinci in their kid. Every scribble is an art. Children not only\n    would like to see their art on walls, might as well on other places, why not on apparels ( clothes )? We are here to\n    make that come true. We print their imagination on clothes for both kids and parents. We guarantee you that we can help\n    get it. We have the best equipment to print their art in t-shirts and hoodies ( full sleeves, half sleeves and sleeveless\n    for all ages). We assure you 40 washes and the print will not fade . Once the order is placed, your product will be delivered\n    to you within 5-7 business days. We are tied up with many Art schools and international schools, where all the schools\n    managements would love to gift (or) award your children with their art printed on apparel. So, Dear parents , what are\n    you waiting for ? Just upload the image in our website, get it printed and make your children gifted or awarded</p>\n       \n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        COMPETITIONS AND AWARDS WITH US\n      </div>\n      <div class=\"card-block\">\n        <h4 class=\"card-title\">Partner with us</h4>\n        <p class=\"card-text\">Art competitions are held on monthly basis. The best art will be posted on the homepage of our website with the winners\n    Art work and photo, details which includes his (or) her age and schools details. Customers can place their order anytime.\n    Our website has many options to customize your own design on apparels. You can choose the type, color & size of t-shirt\n    and to customize your own design or image on the t-shirt.\n    <br/> Customer can also have a final preview of the image (or) design on the t-shirt before placing the order. Conclusion,Our\n    overall motto is very simple. We want borartist.in to be the place where your kids can find,discover (or) create their\n    own design on their t-shirts. In doing so, we can create wide range of smiles on children's faces and their families\n    as well.With parents help, Bornartist.in will continue to enable kids to discover new artistic world and create a new\n    way to show their unique talent to the world.We assure you that the smiles on your kids face lasts for a long time.</p>\n       \n      </div>\n    </div>\n\n\n  <!--<h2 style=\"text-align:center\">Who we are!</h2>\n\n  <hr/>\n  <br/>\n  <h3>BORN ARTIST</h3>\n  <p>At Born Artist, We come to see wide smiles in families. Infants are born with unique talents but all they have in common\n    is ART. Every parent would like to see a Picasso or Da Vinci in their kid. Every scribble is an art. Children not only\n    would like to see their art on walls, might as well on other places, why not on apparels ( clothes )? We are here to\n    make that come true. We print their imagination on clothes for both kids and parents. We guarantee you that we can help\n    get it. We have the best equipment to print their art in t-shirts and hoodies ( full sleeves, half sleeves and sleeveless\n    for all ages). We assure you 40 washes and the print will not fade . Once the order is placed, your product will be delivered\n    to you within 5-7 business days. We are tied up with many Art schools and international schools, where all the schools\n    managements would love to gift (or) award your children with their art printed on apparel. So, Dear parents , what are\n    you waiting for ? Just upload the image in our website, get it printed and make your children gifted or awarded.</p>\n  <h3>COMPETITIONS AND AWARDS WITH US</h3>\n  <p>Art competitions are held on monthly basis. The best art will be posted on the homepage of our website with the winners\n    Art work and photo, details which includes his (or) her age and schools details. Customers can place their order anytime.\n    Our website has many options to customize your own design on apparels. You can choose the type, color & size of t-shirt\n    and to customize your own design or image on the t-shirt.\n    <br/> Customer can also have a final preview of the image (or) design on the t-shirt before placing the order. Conclusion,Our\n    overall motto is very simple. We want borartist.in to be the place where your kids can find,discover (or) create their\n    own design on their t-shirts. In doing so, we can create wide range of smiles on children's faces and their families\n    as well.With parents help, Bornartist.in will continue to enable kids to discover new artistic world and create a new\n    way to show their unique talent to the world.We assure you that the smiles on your kids face lasts for a long time.</p>-->\n</div>"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = " <div class=\"container\">\n\n   <div class=\"login-signup-block\" *ngIf=\"!isAuth\">\n    <div *ngIf=\"isLogin==true\">\n\n        <div *ngIf=\"error_msg\" class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <strong>Oh snap!</strong> {{error_msg}}\n        </div>\n\n      <form class=\"form-signin\" #signin=\"ngForm\" >\n        <h2 class=\"form-signin-heading text-center \">Welcome Back!</h2>\n        <div  class=\"form-group  \">\n            <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n            <input type=\"email\" id=\"inputEmail\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\"  placeholder=\"Email address\" required autofocus>\n        </div>\n\n        <div  class=\"form-group  \">\n            <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n            <input type=\"password\" id=\"inputPassword\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n        </div>\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\n          </label>\n        </div>\n        <button class=\"btn  btn-primary btn-block\" type=\"submit\" [disabled]=\"!email || !password\" (click)=\"doLogin(signin)\" >\n            <i *ngIf=\"doLoginInProgress\" class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>   Sign in\n        </button>\n        <!--<a href=\"#\"> Forgot Password? </a>-->\n        <!--<br>-->\n        \n        <button class=\"btn btn-block\" style=\"background:none!important;color:black;font-size:1em\" (click)=\"doShowSignUpUI();\" > New here? Create Account now! </button>\n      </form>\n    </div> <!-- isLogin -->\n\n    <div *ngIf=\"isLogin==false\">\n        <form class=\"form-signin\">\n          <h2 class=\"form-signin-heading text-center\" >Hello!</h2>\n          <div  class=\"form-group  \">\n              <label for=\"inputEmail\" class=\"sr-only\">Name</label>\n              <!--[ngModelOptions]=\"{ standalone: true }\" (ngModelChange)=\"name = $event\"-->\n              <input type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"name\"  class=\"form-control\" placeholder=\"Your Name\" required autofocus>\n          </div>\n\n          <div  class=\"form-group  \">\n            <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n            <input type=\"email\" id=\"inputEmail\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Email Id\" required >\n          </div>\n\n          <div  class=\"form-group  \">\n            <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n            <input type=\"password\" id=\"inputPassword\" name=\"password\" [(ngModel)]=\"password\"  class=\"form-control\" placeholder=\"Password\" required>\n          </div>\n          \n          \n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\" value=\"remember-me\"> Remember me\n            </label>\n          </div>\n          <button class=\"btn btn-warning btn-block\" type=\"submit\" (click)='doSignup();' [disabled]=\"!email || !password || !name\">\n              <i *ngIf=\"doLoginInProgress\" class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>  Create Account</button>\n\n          <button class=\"btn  btn-block\" style=\"background:none!important;color:black;font-size:1em\" (click)='doShowSignInUI();' >\n              Already have an account? Sign in here</button>\n        </form>\n    </div>\n   </div> <!-- login and sign up block -->\n\n <div class=\"\">\n\n   \n   <div class=\"container\" *ngIf=\"isAuth\">\n    <div class=\"row\">\n         <div class=\"col-lg-3 \">\n             <h4> Account Summary</h4>\n             <!--<h4 >Hello , {{userInfo.name}} !</h4> \n             <p> email : {{userInfo.local.email}} </p>-->\n         </div> \n         <div class=\"col-lg-5\">\n            <a href=\"/api/logout\" class=\"btn btn-sm \" style=\"float:right;color:brown\" > Logout </a>\n         </div>\n    </div>\n    <br>\n    <div class=\"row m-y-2\">\n      <!--push-lg-4-->\n     \n        <div class=\"col-lg-8 \">\n            <ul class=\"nav nav-tabs\">\n                <li class=\"nav-item\">\n                    <a href=\"\" data-target=\"#profile\" data-toggle=\"tab\" class=\"nav-link active\"> Profile</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a href=\"\" data-target=\"#messages\" data-toggle=\"tab\" class=\"nav-link\"> Orders</a>\n                </li>\n                <li class=\"nav-item\">\n                    <!--<a href=\"\" data-target=\"#edit\" data-toggle=\"tab\" class=\"nav-link\">Edit Profile</a>-->\n                </li>\n            </ul>\n            <div class=\"tab-content p-b-3\">\n                <div class=\"tab-pane active\" id=\"profile\">\n                    <!--<h4 class=\"m-y-2\">{{userInfo.name}}</h4>-->\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <!--<h6>Personal Info</h6>-->\n                            <!--<p>\n                             {{userInfo.local.email}}\n                            </p>\n                            <p>\n                              {{userInfo.local.phone}}\n                            </p>-->\n                           \n                        </div>\n                        <div class=\"col-md-6\">\n                            <!--<h6>Recent Tags</h6>\n                            <a href=\"\" class=\"tag tag-default tag-pill\">html5</a>-->\n                            \n                        </div>\n                        <div class=\"col-md-12\">\n                            <h6 style=\"color:#EC9600;\"> Contact Information </h6>\n                            <div class=\"row \" style=\"padding-left:15px\">\n                                <!--<div class=\"col-offset-2 col-md-8  \" class=\"wraptocenter\" style=\"display:inline!important\" >\n                                        <div class=\"card  col-md-12\" style=\"padding-left:0px;padding-right:0px;\">\n                                            <div class=\"card-block\" style=\"padding-bottom:0px\">\n                                                <h6 class=\"card-title mb-2 \">Name : {{userInfo.name}}</h6>\n                                                <div class=\"card-text\">\n                                                    <p> Email : 48.rohit@gmail.com <br>\n                                                        Mobile : 9611167363</p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                </div>-->\n                                <div class=\" col-md-8 col-sm-4\" class=\"wraptocenter\" style=\"display:inline!important\">\n                                    <div class=\"card \" style=\"padding-left:0px;padding-right:0px;border:none\">\n                                        <div class=\"card-block\" style=\"padding-bottom:0px\">\n                                            <h6 class=\"card-title mb-2 text-muted\">Name : {{userInfo.name}}</h6>\n                                            <div class=\"card-text\">\n                                                    <p text-muted> Email : {{userInfo.local.email}} </p>\n                                                    <p text-muted *ngIf=\"userInfo.phone\" > Mobile : {{userInfo.phone}} </p>\n                                                </div>\n                                        </div>\n                                    </div>\n                                    <br>\n                                </div>\n                            </div>\n                            <br>\n\n                            <h6 style=\"color:#EC9600;\" *ngIf=\"Address && Address.length!=0 \"> Recently used address list </h6>\n                            <div class=\"row \" style=\"padding-left:15px\">\n                                <!-- class=\"col-offset-2 col-md-8 col-sm-4 \" -->\n                                <div  class=\"col-md-3\" class=\"wraptocenter\" *ngFor=\"let address of Address;let i = index\"  style=\"display:inline!important\">\n                                    <div class=\"card card-margins\" style=\"padding-left:0px;padding-right:0px;\">\n                                        <div class=\"card-block\" style=\"padding-bottom:0px\">\n                                            <h6 class=\"card-subtitle mb-2 text-muted\" style=\"color:#EC9600!important;\">Address # {{i+1}}</h6>\n                                            <div class=\"card-text\">\n                                                <p> {{address.title}} {{address.first_name}} \n                                                </p>\n                                                <p> {{address.address_line1}}, {{address.address_line2}} \n                                                {{address.city}}, {{address.state}} - {{address.pincode}}</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <br>\n                                </div>\n                            </div>\n\n\n                            <!--<h4 class=\"m-t-2\"><span class=\"fa fa-clock-o ion-clock pull-xs-right\"></span> Recent Activity</h4>\n                            <table class=\"table table-hover table-striped\">\n                                <tbody>                                    \n                                   <tr *ngFor=\"let order of recentOrders\">\n                                      <td>\n                                        <span class=\"pull-xs-right font-weight-bold\" style=\"padding-right:3em\">{{order.updatedAt | date:'medium'}}</span>  {{order.displayName}} for Rs. {{order.wip_cost}}\n\n                                      </td>\n                                  </tr>\n\n                                  <tr *ngIf=\"!recentOrders\">\n                                      <td>\n                                        <span class=\"pull-xs-right font-weight-bold\" style=\"padding-right:3em;color:brown\"></span> There are recent orders from you.\n                                      </td>\n                                  </tr>\n                           \n                                </tbody>\n                            </table>-->\n                        </div>\n                    </div>\n                    <!--/row-->\n                </div>\n                <div class=\"tab-pane\" id=\"messages\">\n                    <h6 class=\"m-y-2\" style=\"color:#EC9600;\"><span class=\"fa fa-check-square-o pull-xs-right\"></span> Recent Orders</h6>\n  \n                    <table class=\"table table-hover table-striped\">\n                        <tbody>                                    \n                            <tr *ngFor=\"let order of recentOrders\">\n                                <td>\n                                    <!--<span class=\"pull-xs-right font-weight-bold\" style=\"padding-right:3em\">{{order.updatedAt | date:'short'}}</span>\n                                {{order.txnid}} OrderId #{{order.txnid}} for Rs. {{order.txnAmount}}-->\n\n                                    <div class=\"card\">\n                                        <div class=\"card-header\">\n                                            <div class=\"row\">\n                                                <div class=\"col \">\n                                                    <p > ORDER DATE </p>\n                                                    <p> {{order.updatedAt | date:'mediumDate'}} </p>\n                                                </div>\n                                                <div class=\"col \">\n                                                    <p > TOTAL </p>\n                                                    <p> &#8377; {{order.txnAmount}} </p>\n                                                </div>\n                                                <div class=\"col \">\n                                                    <p > SHIP TO </p> \n                                                    <p style=\"margin-bottom:0px\"> {{order.customer_details.first_name}} </p>\n                                                    <p style=\"margin-bottom:0px\"> {{order.billing_address.address_line1}}, {{order.billing_address.address_line2}}, {{order.billing_address.city}} </p>\n                                                    <p style=\"margin-bottom:0px\"> Mobile: {{order.billing_address.mobile}} </p>\n                                                </div>\n                                                <div class=\"col \">\n                                                    <span > ORDER # {{order.txnid}} </span>\n                                                </div>\n                                            \n                                            </div>\n                                        </div>\n                                        <div class=\"card-block\">\n                                            <div *ngFor=\"let wip of order.wip\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-sm-2 \">\n                                                        <img [src]=\"wip.designReferenceFile\" width=\"100\" height=\"100\"/>\n                                                    </div>\n                                                    <div  class=\"col \">\n                                                        <h5> {{wip.displayName}} </h5>\n                                                        <p> Cost : {{wip.wip_cost}}  </p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </td>\n                            </tr>\n\n                            <tr *ngIf=\"!recentOrders\">\n                                <td>\n                                   <span class=\"pull-xs-right font-weight-bold\" style=\"padding-right:3em;color:brown\"></span> There are recent orders from you.\n                                </td>\n                            </tr>\n                           \n                        </tbody> \n                    </table>\n\n                     <hr>\n                     <h6 class=\"m-y-2\" style=\"color:#EC9600;\"> <span class=\"fa fa-clock-o ion-clock pull-xs-right\"></span> Pending Designs</h6>\n                    <!--<div class=\"alert alert-info alert-dismissable\">\n                        <a class=\"panel-close close\" data-dismiss=\"alert\">×</a> This is an <strong>.alert</strong>. Use this to show important messages to the user.\n                    </div>-->\n                    <table class=\"table table-hover table-striped\">\n                        <tbody>                                    \n                            <tr *ngFor=\"let order of recentDesigns\">\n                                <td>\n                                   <span class=\"pull-xs-right font-weight-bold\" style=\"padding-right:3em\">{{order.updatedAt | date:'medium'}}</span>  {{order.displayName}}.\n\n                                </td>\n                            </tr>\n\n                            <tr *ngIf=\"!recentDesigns\">\n                                <td>\n                                   <span class=\"pull-xs-right font-weight-bold\" style=\"padding-right:3em;color:brown\" ></span> There are recent orders from you.\n                                </td>\n                            </tr>\n                           \n                        </tbody> \n                    </table>\n\n\n                </div>\n                <div class=\"tab-pane\" id=\"edit\">\n                    <h4 class=\"m-y-2\">Edit Profile</h4>\n                    <form role=\"form\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">First name</label>\n                            <div class=\"col-lg-9\">\n                                <input class=\"form-control\" type=\"text\" value=\"Jane\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Last name</label>\n                            <div class=\"col-lg-9\">\n                                <input class=\"form-control\" type=\"text\" value=\"Bishop\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Email</label>\n                            <div class=\"col-lg-9\">\n                                <input class=\"form-control\" type=\"email\" value=\"email@gmail.com\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Company</label>\n                            <div class=\"col-lg-9\">\n                                <input class=\"form-control\" type=\"text\" value=\"\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Website</label>\n                            <div class=\"col-lg-9\">\n                                <input class=\"form-control\" type=\"url\" value=\"\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Address</label>\n                            <div class=\"col-lg-9\">\n                                <input class=\"form-control\" type=\"text\" value=\"\" placeholder=\"Street\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\"></label>\n                            <div class=\"col-lg-6\">\n                                <input class=\"form-control\" type=\"text\" value=\"\" placeholder=\"City\">\n                            </div>\n                            <div class=\"col-lg-3\">\n                                <input class=\"form-control\" type=\"text\" value=\"\" placeholder=\"State\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Time Zone</label>\n                            <div class=\"col-lg-9\">\n                                <select id=\"user_time_zone\" class=\"form-control\" size=\"0\">\n                                    <option value=\"Hawaii\">(GMT-10:00) Hawaii</option>\n                                    <option value=\"Alaska\">(GMT-09:00) Alaska</option>\n                                    <option value=\"Pacific Time (US &amp; Canada)\">(GMT-08:00) Pacific Time (US &amp; Canada)</option>\n                                    <option value=\"Arizona\">(GMT-07:00) Arizona</option>\n                                    <option value=\"Mountain Time (US &amp; Canada)\">(GMT-07:00) Mountain Time (US &amp; Canada)</option>\n                                    <option value=\"Central Time (US &amp; Canada)\" selected=\"selected\">(GMT-06:00) Central Time (US &amp; Canada)</option>\n                                    <option value=\"Eastern Time (US &amp; Canada)\">(GMT-05:00) Eastern Time (US &amp; Canada)</option>\n                                    <option value=\"Indiana (East)\">(GMT-05:00) Indiana (East)</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Username</label>\n                            <div class=\"col-lg-9\">\n                                <input class=\"form-control\" type=\"text\" value=\"janeuser\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Password</label>\n                            <div class=\"col-lg-9\">\n                                <input class=\"form-control\" type=\"password\" value=\"11111122333\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Confirm password</label>\n                            <div class=\"col-lg-9\">\n                                <input class=\"form-control\" type=\"password\" value=\"11111122333\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\"></label>\n                            <div class=\"col-lg-9\">\n                                <input type=\"reset\" class=\"btn btn-secondary\" value=\"Cancel\">\n                                <input type=\"button\" class=\"btn btn-primary\" value=\"Save Changes\">\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!--<div class=\"col-lg-4 pull-lg-8 text-xs-center\">\n            <img src=\"//placehold.it/150\" class=\"m-x-auto img-fluid img-circle img-responsive rounded\" alt=\"avatar\">\n            <h6 class=\"m-t-2\">Upload a different photo</h6>\n            <label class=\"custom-file\">\n                <input type=\"file\" id=\"file\" class=\"custom-file-input\">\n                <span class=\"custom-file-control\">Choose file</span>\n            </label>\n        </div> Image for -->\n    </div>\n</div>\n </div>\n\n</div> <!-- /container -->"

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "\n\n\n\n    <!--\"style_name\": \"Men's Round Neck Short Sleeve Tshirt-190\",\n    \"style_code\": \"99-RF-100112-190/SJ\",\n    \"section\": \"Men\",-->\n\n<div class=\"container\" >\n  <h2> Update Product Information </h2>\n\n          <!--<form id=\"frmUploader\"  enctype=\"multipart/form-data\" >\n            <div class=\"form-group\">\n               <div class=\"col-10\">\n                  <input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\"\">\n                  <input type=\"submit\" name=\"submit\" id=\"btnSubmit\" value=\"Upload\"  (click)=\"upload();\"/>\n               </div>\n            </div>\n          </form>-->\n\n  <div class=\"card\"  *ngFor=\"let obj of allProdsList\" style=\"width:50%;margin-bottom:1em\">\n    <img class=\"card-img-top\" src=\"{{obj.imagePath}}\" alt=\"No Image Found\" style=\"width:20em;height:auto;margin:auto\">\n    <div class=\"card-block\">\n      <h4 class=\"card-title\">{{obj.style_name}}</h4>\n      <p class=\"card-text\">Premium T-shirts </p>  \n      <div class=\"row\">\n        <div class=\"col-sm-8\">\n          <span class=\"product-name-price\"> <a href=\"#\">{{obj.style_name}}</a> </span>\n        </div>\n        <div class=\"col-sm-2\">\n          <span class=\"product-name-price\"> &#8377; {{obj.price}}</span>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <!--<div class=\"col-lg-offset-3 col-lg-12\">\n          <div class=\"input-group\">\n            <span class=\"input-group-btn\">\n              <button class=\"btn btn-secondary\" type=\"button\">Image Link</button>\n            </span>\n            <input class=\"form-control\" type=text name=\"file\" [(ngModel)]=\"obj.file\" placeholder=\"image link (url) \" />\n          </div>\n        </div>-->\n        <div class=\"col-lg-offset-3 col-lg-12\" style=\"margin-top:1em\" >\n          <div >\n            <p style=\"font-weight:500;\"> Currently Available Colors</p>\n            <p style=\"color:brown\"> {{obj.colors}} </p>\n          </div>\n          <p> Select and Update colors Information</p>\n          <select class=\"form-control\" multiple [(ngModel)]=\"obj.customcolors\">\n            <option *ngFor=\"let obj of colors\"  >{{obj.color}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"row\" >\n        <!--<div class=\"col-lg-offset-3 col-lg-12\" style=\"margin-top:1em\" >\n            <p style=\"font-weight:500;\"> Cost </p>\n            <input class=\"form-control\" type=text name=\"price\" [(ngModel)]=\"obj.price\" placeholder=\"selling price\" />         \n        </div>-->\n\n        <div class=\"form-group \" style=\"margin-top:1em\">\n          <label for=\"example-text-input\" class=\"col-2 col-form-label\">Price</label>\n          <div class=\"col-10\">\n            <input class=\"form-control\" type=\"text\" name=\"updatePrice\" [(ngModel)]=\"obj.updatePrice\"  placeholder=\"selling price\" id=\"example-text-input\">\n          </div>\n        </div>\n\n        <div class=\"form-group\" style=\"margin-top:1em\">\n           <label for=\"example-text-input\" class=\"col-2 col-form-label\">Product Images</label>\n          <div class=\"col-10\">\n            <input type=\"file\" (change)=\"fileChange($event, obj)\" placeholder=\"Upload file\" accept=\"\">\n          </div>\n        </div> <!-- action=\"/api/upload/\" method=\"post\" -->\n\n        <!--/api/upload-->\n\n      </div>\n     <div class=\"row\" style=\"margin-top:1em\">\n        <div class=\"col-lg-4\" >\n          <button class=\"btn btn-primary\" (click)=\"doUpdateProduct(obj);\" [disabled]=\"isValidUpdateBtn(obj)\" > Update Info </button>\n        </div>\n        <div class=\"col-lg-4\"  style=\"margin-left:0.5em\">\n          <a href=\"/customization\" class=\"btn btn-primary\">Customize</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrap\">\n  <nav class=\"navbar navbar-toggleable-md navbar-light fixed-top bg-faded\" style=\"background-color:#ec9600;\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"/\" style=\"color:white\">BornArtist</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-8\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item \">\n              <a class=\"nav-link navigation_text\" routerLink=\"/home\" routerLinkActive=\"active\">Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link navigation_text\" routerLink=\"/about\" routerLinkActive=\"active\">About Us</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link navigation_text\" routerLink=\"/gallery\" routerLinkActive=\"active\">Gallery</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link navigation_text\" routerLink=\"/contactus\" routerLinkActive=\"active\">Contact Us</a>\n            </li>\n            <!--<li>\n              <div class=\"dropdown\">\n                  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Change Fonts\n                  </button>\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                    <button class=\"dropdown-item\" onclick=\"applyfont('Lobster');\">Lobster</button>\n                    <button class=\"dropdown-item\" onclick=\"applyfont('Pacifico');\">Pacifico</button>\n                    <button class=\"dropdown-item\" onclick=\"applyfont('Gloria Hallelujah');\">Gloria Hallelujah</button>\n                    <button class=\"dropdown-item\" onclick=\"applyfont('Dancing Script');\">Dancing Script</button>\n                    <button class=\"dropdown-item\" onclick=\"applyfont('Architects Daughter');\">Architects Daughter</button>\n                    <button class=\"dropdown-item\" onclick=\"applyfont('Satisfy');\">Satisfy</button>\n                    <button class=\"dropdown-item\" onclick=\"applyfont('Cookie');\">Cookie</button>\n                    <button class=\"dropdown-item\" onclick=\"applyfont('Yellowtail');\">Yellowtail</button>\n                    <button class=\"dropdown-item\" onclick=\"applyfont('Courgette');\">Courgette</button>\n                    <button class=\"dropdown-item\" onclick=\"applyfont('Chewy');\">Chewy</button>\n\n                    \n                  </div>\n                </div>\n            </li>-->\n          </ul>\n        </div>\n\n        <div class=\"col-sm-4 col-lg-3 \" style=\"font-size:20px\">\n          <!--<form class=\"form-inline \">-->\n            <!--<button class=\"btn btn-primary btn-outline\" routerLink=\"/cart\" type=\"submit\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>cart</button>\n            <button class=\"btn btn-success mr-sm-2 mr-sm-0\" routerLink=\"/login\" type=\"submit\">Account </button>-->\n            <!--<counter [counterValue]=\"myValue\" (counterChange)=\"myValueChange($event);\"></counter\n            <i class=\"fa fa-envelope fa-5x fa-border icon-grey badge\"></i>\n            >-->\n            <a class=\"pull-right btn btn-color\" data-original-title=\"List\" data-placement=\"bottom\" data-toggle=\"tooltip\" title=\"view profile. order history\" href=\"/account\">\n              <div class=\"icon-wrapper\">\n                <i class=\"fa fa-user-circle fa-4 icon-grey\"> {{name}} </i>\n              </div>\n            </a>\n\n            <a class=\"pull-right btn  btn-color\" data-original-title=\"List\" data-placement=\"bottom\"  data-toggle=\"tooltip\" title=\"view cart summary\"  href=\"/cart\">\n              <div class=\"icon-wrapper\">\n                <i class=\"fa fa-shopping-cart  icon-grey\"> </i>\n                <span class=\"badge\">{{count}}</span>\n              </div>\n            </a>\n    \n            <!--<a class=\"pull-right btn  btn-color\"  href=\"/cart\"> {{count}} <i class=\"fa fa-shopping-cart fa-border icon-grey badge\" aria-hidden=\"true\"></i> &nbsp; Cart</a>-->\n            <!--<a class=\"btn btn-primary btn-outline\" routerLink=\"/designs\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i> &nbsp; Saved Designs</a>-->\n             <!--<a routerLink=\"/cart\"><i class=\"fa fa-shopping-cart\"></i></a>\n                                <label id=\"cart-badge\" class=\"badge badge-warning\">1</label>-->\n\n            <!--<a class=\"btn btn-success btn-outline\" routerLink=\"/login\" > Account </a>-->\n          <!--</form>-->\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n</div>\n<router-outlet ></router-outlet>\n<footer id=\"footer\"  >\n  <div class=\"container text-center\">\n    <br/>\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n      </div>\n      <div class=\"col-sm-6\">\n\n\n        <ul class=\"list-inline\">\n          <!--<li class=\"list-inline-item\">\n            <h2 href=\"\"><i class=\"fa fa-twitter\"></i></h2>\n          </li>-->\n          <li class=\"list-inline-item\">\n            <h2 > <a href=\"https://www.facebook.com/BornArtistIndia/\"><i class=\"fa fa-facebook\"></i></a></h2>\n          </li>\n          <li class=\"list-inline-item\">\n            <h2 > <a href=\"https://plus.google.com/111519606648106881469\"><i class=\"fa fa-google-plus\"></i></a></h2>\n          </li>\n        </ul>\n        <ul class=\"list-inline\">\n          <li class=\"list-inline-item\">\n            <a href=\"\" routerLink=\"/privacy\" >Privacy Policy</a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"\" routerLink=\"/terms\">Terms & Conditions</a>\n          </li>\n          <!--<li class=\"list-inline-item\">\n            <a href=\"\" routerLink=\"/faq\">FAQ</a>\n          </li>-->\n        </ul>\n      </div>\n\n      <div class=\"col-sm-3\">\n      </div>\n    </div>\n\n    <p>&copy; 2017 BORN ARTIST ENTERPRISES. All Rights Reserved.</p>\n\n  </div>\n\n</footer>"

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n    <div class=\"row\" *ngIf=\"isEmptyCart\">\n      <img src=\"assets/images/shopping-cart.png\"  style=\"margin:auto;\"/>\n      <p style=\"font-size:1.2em;text-align:center;width:100%\" class=\"text-sm-center\"> Nothing in here! </p>\n      <a href='/home' class=\"text-sm-center\" style=\"text-align:center;width:100%\" >Choose a T-shirt and order one now! </a>\n    </div>\n\n\n    <table id=\"cart\" class=\"table table-condensed\" *ngIf=\"!isEmptyCart\" >\n        <thead >\n            <tr>\n                <th style=\"width:25%\">Product</th>\n                <th style=\"width:10%\">Price</th>\n                <th style=\"width:45%\">\n                    Quantity\n                </th>\n                <th style=\"width:10%\" class=\"text-center\">Subtotal</th>\n                <th style=\"width:0%\"></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let product of OrderList; let k = index\">\n                <td data-th=\"Product\">\n                    <h4 style=\"font-weight:300;font-size:1.2em !important;\">{{product.displayName}}</h4>\n                    <div class=\"row\">\n                        <div class=\"col-sm-2 \">\n                            <img [allowZoom]=\"true\" [src]=\"product.designReferenceFile\" [imageZoom]=\"product.designReferenceFile\" width=\"250\" height=\"250\"\n                                [lensWidth]=\"400\" [lensHeight]=\"400\" />\n                        </div>\n                    </div>\n                </td>\n                <td data-th=\"Price\">\n                    <p> &#8377; 499 </p>\n                </td>\n                <td data-th=\"Quantity\">\n\n                    <!-- \n                    Accordion Style for Men, Women, Kids and Babies\n                    Let Size-sheet option be available in panel header itself.\n\n                    1. On change input, update every order, Have a save button also\n                    2. \n                -->\n                    <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                        <div class=\"card\">\n                            <div class=\"card-header\" (click)=\"product.is_collapse_men = !product.is_collapse_men\"  role=\"tab\" id=\"headingOne\">\n                               \n                                <h5 class=\"mb-0\">\n                                    <!-- data-toggle=\"collapse\" aria-controls=\"collapseOne\" href=\"#collapseOne\" -->\n                                    <a  data-parent=\"#accordion\"  aria-expanded=\"true\"  >\n                                     <i *ngIf=\"product.is_collapse_men\" class=\"fa fa-chevron-up chevron-color\" style=\"font-weight:300\" aria-hidden=\"true\"></i>\n                                     <i *ngIf=\"!product.is_collapse_men\" class=\"fa fa-chevron-down chevron-color\" style=\"font-weight:300\" aria-hidden=\"true\"></i> Men \n\n                                     <span *ngFor=\"let sizeObject of product.men_size;let mk = index\" > \n                                         <span class=\"pull-right text-sm chip-exisiting-sizes\"> {{sizeObject.size}} - {{sizeObject.qty}} </span>\n                                     </span>\n                                    </a>\n\n                                </h5>\n                            </div>\n\n                            <div id=\"collapseOne\" *ngIf=\"product.is_collapse_men\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                                <div class=\"card-block\">\n                                   \n                                    <!--selectbox.options[selectbox.options.length]= new Option('S', 'S');\n                                    selectbox.options[selectbox.options.length]= new Option('M', 'M');\n                                    selectbox.options[selectbox.options.length]= new Option('L', 'L');\n                                    selectbox.options[selectbox.options.length]= new Option('XL', 'XL');\n                                    selectbox.options[selectbox.options.length]= new Option('XXL', 'XXL');\n                                    selectbox.options[selectbox.options.length]= new Option('XXXL', 'XXXL');\n                                    *ngFor=\"let sizeObject of product.men_size;\"\n                                    -->\n\n                                    <div class=\"row\"  >\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\" type=\"button\" >S</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\" [(ngModel)]=\"product.size_info_model_men['S']\" placeholder=\"0\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\"  type=\"button\">M</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\" [(ngModel)]=\"product.size_info_model_men['M']\" placeholder=\"0\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\" type=\"button\" >L</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\" [(ngModel)]=\"product.size_info_model_men['L']\" placeholder=\"0\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\" type=\"button\">XL</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\" [(ngModel)]=\"product.size_info_model_men['XL']\" placeholder=\"0\" >\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\" type=\"button\" >XXL</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\" [(ngModel)]=\"product.size_info_model_men['XXL']\" placeholder=\"0\" >\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\"  type=\"button\">XXXL</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\" [(ngModel)]=\"product.size_info_model_men['XXXL']\" placeholder=\"0\"  >\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <p class=\"text-left  \" style=\"margin-top:1em;margin-bottom:0px;\">\n                                                <button class=\"btn btn-sm btn-outline-danger \" data-toggle=\"modal\" data-target=\"#exampleModal\"  style=\"border:0px;font-family:Handlee;\"> Size Chart </button>\n                                            </p>\n\n                                                    <!--<p style=\"padding-left:12px\">\n                                                    Size Chart\n                                                    <button class=\"btn btn-primary btn-sm \" style=\"background:none;color:red;border:0px;font-family:Handlee;border-right:1px solid #efc275\" data-toggle=\"modal\" data-target=\"#exampleModal\" href=\"\"> \n                                                    Men \n                                                    </button>\n                                                    <button class=\"btn btn-primary btn-sm \" style=\"background:none;color:red;border:0px;font-family:Handlee;border-right:1px solid #efc275\" data-toggle=\"modal\" data-target=\"#exampleModalWomen\" href=\"\"> \n                                                    Women \n                                                    </button>\n                                                    <button class=\"btn btn-primary btn-sm \" style=\"background:none;color:red;border:0px;font-family:Handlee;border-right:1px solid #efc275\" data-toggle=\"modal\" data-target=\"#exampleModalKids\" href=\"\"> \n                                                    Kids\n                                                    </button>\n                                                    <button class=\"btn btn-primary btn-sm \" style=\"background:none;color:red;border:0px;font-family:Handlee;border-right:0px solid #efc275\" data-toggle=\"modal\" data-target=\"#exampleModalBabies\" href=\"\"> \n                                                    Babies <span class=\"size-sheet-modal-font\" >( 1 - 24 months)</span>\n                                                    </button>\n                                                    \n                                                    </p>-->\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <!--<p class=\"text-left \" style=\"margin-top:1em;margin-bottom:0px;\">\n                                                <button class=\"btn btn-sm btn-outline-success \" (click)=\"updateMenSizeInfo(k);\" > Save </button>\n                                                <button class=\"btn btn-sm btn-outline-secondary\" (click)=\"resetSize('M', k);\"> Reset </button>\n                                            </p>\n                                            -->\n                                            <div class=\"input-group input-group-sm\" style=\"margin-top:1em;margin-bottom:0px;\">\n                                                <button type=\"button\" class=\"btn btn-sm btn-outline-success\" (click)=\"updateMenSizeInfo(k);\" >Save</button>\n                                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" style=\"margin-left:1em\" (click)=\"resetSize('M', k);\">Clear</button>                                 \n                                            </div>\n\n                                        </div>\n                                    </div> <!-- row --> \n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card\" >\n                            <div class=\"card-header\" (click)=\"product.is_collapse_women = !product.is_collapse_women\"   role=\"tab\" id=\"headingTwo\">\n                                <h5 class=\"mb-0\">\n                                    <!--<a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">-->\n                                        <!--<a (click)=\"toggleWomenSize(k);\"  data-parent=\"#accordion\"  aria-expanded=\"false\"  >-->\n                                    <a data-parent=\"#accordion\"  aria-expanded=\"true\"  >\n                                        <i *ngIf=\"product.is_collapse_women\" class=\"fa fa-chevron-up chevron-color\" style=\"font-weight:300\" aria-hidden=\"true\"></i>\n                                        <i *ngIf=\"!product.is_collapse_women\" class=\"fa fa-chevron-down chevron-color\" style=\"font-weight:300\" aria-hidden=\"true\"></i>  Women \n                                        <span *ngFor=\"let sizeObject of product.women_size;let mk = index\" > \n                                         <span class=\"pull-right text-sm chip-exisiting-sizes\"> {{sizeObject.size}} - {{sizeObject.qty}} </span>\n                                        </span>\n                                    </a>\n                                </h5>\n                            </div>\n                            <div id=\"collapseTwo\" *ngIf=\"product.is_collapse_women\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                                <div class=\"card-block\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\" type=\"button\" >XS</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\" [(ngModel)]=\"product.size_info_model_women['XS']\"  placeholder=\"0\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\"  type=\"button\">S</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\"  [(ngModel)]=\"product.size_info_model_women['S']\"  placeholder=\"0\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\" type=\"button\" >M</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\"  [(ngModel)]=\"product.size_info_model_women['M']\"  placeholder=\"0\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\" type=\"button\">L</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\"  [(ngModel)]=\"product.size_info_model_women['L']\"  placeholder=\"0\" >\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\" type=\"button\" >XL</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\"  [(ngModel)]=\"product.size_info_model_women['XL']\" placeholder=\"0\" >\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\"  type=\"button\">XXL</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\"  [(ngModel)]=\"product.size_info_model_women['XXL']\" placeholder=\"0\"  >\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                          \n                                            <p class=\"text-left  \" style=\"margin-top:1em;margin-bottom:0px;\">\n                                                <button class=\"btn btn-sm btn-outline-danger \" data-toggle=\"modal\" data-target=\"#exampleModalWomen\"  style=\"border:0px;font-family:Handlee;\"> Size Chart </button>\n                                            </p>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                           \n                                            <!--<p class=\"text-left  \" style=\"margin-top:1em;margin-bottom:0px;\">\n                                                <button class=\"btn btn-sm btn-outline-success \" (click)=\"updateWomenSizeInfo(k);\"> Save </button>\n                                            </p>-->\n                                            <div class=\"input-group input-group-sm\" style=\"margin-top:1em;margin-bottom:0px;\">\n                                                <button type=\"button\" class=\"btn btn-sm btn-outline-success\" (click)=\"updateWomenSizeInfo(k);\" >Save</button>\n                                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" style=\"margin-left:1em\" (click)=\"resetSize('F', k);\">Clear</button>                                 \n                                            </div>\n                                        </div>\n                                    </div> <!-- row --> \n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card\" >\n                            <div class=\"card-header\" (click)=\"product.is_collapse_kids = !product.is_collapse_kids\"  role=\"tab\" id=\"headingThree\">\n                                <h5 class=\"mb-0\">\n                                    <!--<a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">-->\n                                    <a  data-parent=\"#accordion\"  aria-expanded=\"false\"  >\n                                        <i *ngIf=\"product.is_collapse_kids\" class=\"fa fa-chevron-up chevron-color\" style=\"font-weight:300\" aria-hidden=\"true\"></i>\n                                        <i *ngIf=\"!product.is_collapse_kids\" class=\"fa fa-chevron-down chevron-color\" style=\"font-weight:300\" aria-hidden=\"true\"></i>    Kids\n                                        <span *ngFor=\"let sizeObject of product.kids_size;let mk = index\" > \n                                            <span class=\"pull-right text-sm chip-exisiting-sizes\"> {{sizeObject.size}} - {{sizeObject.qty}} </span>\n                                        </span>\n                                    </a>\n                                </h5>\n                            </div>\n                            <div id=\"collapseThree\" *ngIf=\"product.is_collapse_kids\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n                                <div class=\"card-block\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\" type=\"button\" >XS</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\" [(ngModel)]=\"product.size_info_model_kids['XS']\" placeholder=\"0\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\"  type=\"button\">S</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\" [(ngModel)]=\"product.size_info_model_kids['S']\" placeholder=\"0\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\" type=\"button\" >M</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\" [(ngModel)]=\"product.size_info_model_kids['M']\" placeholder=\"0\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\" type=\"button\">L</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\" [(ngModel)]=\"product.size_info_model_kids['L']\" placeholder=\"0\" >\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\" type=\"button\" >XL</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\" [(ngModel)]=\"product.size_info_model_kids['XL']\" placeholder=\"0\" >\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\"  type=\"button\">XXL</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\" [(ngModel)]=\"product.size_info_model_kids['XXL']\" placeholder=\"0\"  >\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                           \n                                            <p class=\"text-left  \" style=\"margin-top:1em;margin-bottom:0px;\">\n                                                <button class=\"btn btn-sm btn-outline-danger \" style=\"border:0px\"  data-toggle=\"modal\" data-target=\"#exampleModalKids\"> Size Chart </button>\n                                            </p>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                           \n                                            <!--<p class=\"text-left  \" style=\"margin-top:1em;margin-bottom:0px;\">\n                                                <button class=\"btn btn-sm btn-outline-success \" (click)=\"updateKidsSizeInfo(k);\"> Save </button>\n                                            </p>-->\n                                            <div class=\"input-group input-group-sm\" style=\"margin-top:1em;margin-bottom:0px;\">\n                                                <button type=\"button\" class=\"btn btn-sm btn-outline-success\" (click)=\"updateKidsSizeInfo(k);\" >Save</button>\n                                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" style=\"margin-left:1em\" (click)=\"resetSize('Kid', k);\">Clear</button>                                 \n                                            </div>\n                                        </div>\n                                    </div> <!-- row --> \n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card\">\n                            <div class=\"card-header\" (click)=\"product.is_collapse_baby = !product.is_collapse_baby\"  role=\"tab\" id=\"headingFour\">\n                                <h5 class=\"mb-0\">\n                                    <!--<a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">-->\n                                    <a  data-parent=\"#accordion\"  aria-expanded=\"false\"  >\n                                         <i *ngIf=\"product.is_collapse_baby\" class=\"fa fa-chevron-up chevron-color\" style=\"font-weight:300\" aria-hidden=\"true\"></i>\n                                        <i *ngIf=\"!product.is_collapse_baby\" class=\"fa fa-chevron-down chevron-color\" style=\"font-weight:300\" aria-hidden=\"true\"></i> Baby\n                                        <span *ngFor=\"let sizeObject of product.babies_size;let mk = index\" > \n                                            <span class=\"pull-right text-sm chip-exisiting-sizes\"> {{sizeObject.size}} - {{sizeObject.qty}} </span>\n                                        </span>\n                                    </a>\n                                </h5>\n                            </div>\n                            <div id=\"collapseFour\" *ngIf=\"product.is_collapse_baby\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingFour\">\n                                <div class=\"card-block\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\" type=\"button\" >XS</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\" [(ngModel)]=\"product.size_info_model_baby['XS']\"  placeholder=\"0\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\"  type=\"button\">S</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\" [(ngModel)]=\"product.size_info_model_baby['S']\" placeholder=\"0\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\" type=\"button\" >M</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\" [(ngModel)]=\"product.size_info_model_baby['M']\" placeholder=\"0\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            <div class=\"input-group input-group-sm\">\n                                                <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-sm btn-secondary input-min-width\" type=\"button\">L</button>\n                                            </span>\n                                                <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control input-min-width\" [(ngModel)]=\"product.size_info_model_baby['L']\" placeholder=\"0\" >\n                                            </div>\n                                        </div>\n                                \n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                           \n                                            <p class=\"text-left  \" style=\"margin-top:1em;margin-bottom:0px;\">\n                                                <button class=\"btn btn-sm btn-outline-danger \" style=\"border:0px\" data-toggle=\"modal\" data-target=\"#exampleModalBabies\"> Size Chart </button>\n                                            </p>\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-4 col-sm-3\">\n                                            \n                                            <!--<p class=\"text-left  \" style=\"margin-top:1em;margin-bottom:0px;\">\n                                                <button class=\"btn btn-sm btn-outline-success \" (click)=\"updateBabySizeInfo(k);\"> Save </button>\n                                                \n                                            </p>-->\n                                            <div class=\"input-group input-group-sm\" style=\"margin-top:1em;margin-bottom:0px;\">\n                                                <button type=\"button\" class=\"btn btn-sm btn-outline-success\" (click)=\"updateBabySizeInfo(k);\" >\n                                                    Save\n                                                </button>\n                                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" style=\"margin-left:1em\" (click)=\"resetSize('Baby', k);\">Clear</button>                                 \n                                            </div>\n                                        </div>\n                                    </div> <!-- row --> \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </td>\n                <td data-th=\"Subtotal\" class=\"text-center\">\n                    <i *ngIf=\"updatingsize\" class=\"fa fa-spinner fa-spin chevron-color\" aria-hidden=\"true\"></i>\n                     &#8377;\n                    <span [attr.id]=\"'cost-'+k\"> {{product.wip_cost}}</span>\n                </td>\n                <td class=\"actions\" data-th=\"\">\n                    <button class=\"btn btn-danger btn-sm\" (click)=\"deleteFromCart(product._id);\"><i class=\"fa fa-trash-o\"></i></button>\n                </td>\n            </tr>\n            </tbody>\n            <tfoot>\n                <tr class=\"visible-xs\">\n                    <!--<td class=\"text-center\"><strong>Total 1.99</strong></td> routerLink=\"/checkout\"-->\n                </tr>\n                <tr>\n                    <td></td>\n                    <td colspan=\"2\" class=\"\" style=\"color:red\"></td>\n                   \n                    <td class=\"hidden-xs text-center\">\n                    </td>\n                    <td >\n                     Total : &#8377; {{totalcost}}\n                      <!--<span id=\"totalcost\"> </span>-->\n                    </td>\n                </tr>\n                <tr>\n                    <td><a href=\"#\" class=\"btn btn-warning\" routerLink=\"/home\"><i class=\"fa fa-angle-left\"></i> Continue Shopping</a></td>\n                    <td colspan=\"2\" class=\"\" style=\"color:red\" >\n                        <span *ngIf=\"totalcost == 0\"> * Add at least one size and quantity for checkout. </span></td>\n                    <!--<td > hidden-xs</td>-->\n                    <td class=\"hidden-xs text-center\">\n                    </td>\n                    <!--<span id=\"totalcost\"> </span>-->\n                   \n                    <td >\n                    \n                    <a class=\"btn btn-success btn-block\" id=\"disableCheckoutBtnID\" [attr.disabled]=\"disableCheckoutBtn == true ? true : null\"  href=\"/checkout\">\n                        Checkout <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <!--<span *ngIf=\"disableCheckoutBtn == true\">* Add Size & Quantity for order </span>-->\n                    <p  id=\"no-size-warning\"  style=\"font-size:0.7rem;margin-top:1em;\" *ngIf=\"totalcost == 0\">* Need at least one quantity for checkout. </p>\n                    \n                    </td>\n                </tr>\n            </tfoot>\n    </table>\n\n</div>\n\n<!-- Modal -->\n\n                    <!-- Modal -->\n                    <div class=\"modal fade text-center\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                      <div class=\"modal-dialog\" role=\"document\">\n                        <div class=\"modal-content\">\n                          <div class=\"modal-header\">\n                             <!--<h3 style=\"font-size:1.2em;color:blue\"> Men's Size Sheet</h3>-->\n                              <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"font-size:1.1em;color:#025AA5\">Men's Size Sheet </h5>\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <div >\n                              <!--<img src=\"assets/images/men_round_size.jpg\" style=\"display:inline-block;margin:auto;\">-->\n                              <table class=\"table table-sm table-hover table-striped\">\n                                <thead>\n                                  <tr>\n                                    <th style=\"width:10%\">Size</th>\n                                    <th style=\"width:25%;text-align:center\">Chest</th>\n                                    <th style=\"width:25%;text-align:center\">Length</th>\n                                    <th style=\"width:40%;text-align:center\" class=\"text-center\">Sleeve Length</th>\n                                    <th style=\"width:0%\"></th>\n                                  </tr>\n                                  <!--<tr >\n                                    <td> Size </td>\n                                    <td> cm. </td>\n                                    <td> cm. </td>\n                                    <td> cm. </td>\n                                  </tr>-->\n                                </thead>\n                                <tbody>\n                                  <tr>\n                                    <td> S </td>\n                                    <td> 48 </td>\n                                    <td> 68 </td>\n                                    <td> 21.5 </td>\n                                  </tr>\n                                  <tr>\n                                    <td> M </td>\n                                    <td> 50.75 </td>\n                                    <td> 71 </td>\n                                    <td> 22.5 </td>\n                                  </tr>\n                                  <tr>\n                                    <td> L </td>\n                                    <td> 54 </td>\n                                    <td> 74 </td>\n                                    <td> 23 </td>\n                                  </tr>\n                                  <tr>\n                                    <td> XL </td>\n                                    <td> 57 </td>\n                                    <td> 76 </td>\n                                    <td> 24 </td>\n                                  </tr>\n                                  <tr>\n                                    <td> XXL </td>\n                                    <td> 62</td>\n                                    <td> 79</td>\n                                    <td> 24.5 </td>\n                                  </tr>\n                                  <tr>\n                                    <td> XXXL  </td>\n                                    <td> 68</td>\n                                    <td> 80 </td>\n                                    <td> 25</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                              <p style=\"font-size:0.8em\"> * All Measurements in Cms </p>\n                            </div>\n                            <!--<div style=\"margin-top:2em;margin-bottom:2em\">\n                              <h3 style=\"font-size:1.2em\"> Women's Round Neck Size</h3>\n                              <img src=\"assets/images/women_round_size.jpg\" style=\"display:inline-block;margin:auto;\">\n                            </div>\n                            <div style=\"margin-top:2em;margin-bottom:2em\">\n                              <h3 style=\"font-size:1.2em\"> Kids's Round Neck Size</h3>\n                              <img src=\"assets/images/kids_round_size.jpg\" style=\"display:inline-block;margin:auto;\">\n                            </div>-->\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-secondary btn-sm\" data-dismiss=\"modal\">Close</button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                    <!-- Women Size Modal -->\n                    <div class=\"modal fade text-center\" id=\"exampleModalWomen\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                      <div class=\"modal-dialog\" role=\"document\">\n                        <div class=\"modal-content\">\n                          <div class=\"modal-header\">\n                            <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"font-size:1.1em;color:maroon\">Women's Size Sheet </h5>\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <div >\n                              <!--<h3 style=\"font-size:1.2em\"> Women's Round Neck Size</h3>-->\n                              <!--<img src=\"assets/images/men_round_size.jpg\" style=\"display:inline-block;margin:auto;\">-->\n                              <table class=\"table table-sm table-hover table-striped\">\n                                <thead>\n                                  <tr>\n                                    <th style=\"width:10%\">Size </th>\n                                    <th style=\"width:25%;text-align:center\">Chest</th>\n                                    <th style=\"width:25%;text-align:center\">Length</th>\n                                    <th style=\"width:40%;text-align:center\" class=\"text-center\">Sleeve Length</th>\n                                    <th style=\"width:0%\"></th>\n                                  </tr>\n                                  <!--<tr>\n                                    <td> Size </td>\n                                    <td> cm. </td>\n                                    <td> cm. </td>\n                                    <td> cm. </td>\n                                  </tr>-->\n                                </thead>\n                                <tbody>\n                                  <tr>\n                                    <td> XS </td>\n                                    <td> 38 </td>\n                                    <td> 58 </td>\n                                    <td> 13.5 </td>\n                                  </tr>\n                                  <tr>\n                                    <td> S </td>\n                                    <td> 41 </td>\n                                    <td> 60 </td>\n                                    <td> 14.5 </td>\n                                  </tr>\n                                  <tr>\n                                    <td> M </td>\n                                    <td> 44.0 </td>\n                                    <td> 62 </td>\n                                    <td> 15.5 </td>\n                                  </tr>\n                                  <tr>\n                                    <td> L </td>\n                                    <td> 47 </td>\n                                    <td> 64 </td>\n                                    <td> 16.5 </td>\n                                  </tr>\n                                  <tr>\n                                    <td> XL </td>\n                                    <td> 50 </td>\n                                    <td> 66 </td>\n                                    <td> 17.5 </td>\n                                  </tr>\n                                  <tr>\n                                    <td> XXL </td>\n                                    <td> 54</td>\n                                    <td> 68</td>\n                                    <td> 19.5 </td>\n                                  </tr>\n       \n                                </tbody>\n                              </table>\n                              <p style=\"font-size:0.8em\"> * All Measurements in Cms </p>\n                            </div>\n             \n                          </div>\n                          <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-secondary btn-sm\" data-dismiss=\"modal\">Close</button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"modal fade text-center\" id=\"exampleModalKids\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                      <div class=\"modal-dialog\" role=\"document\">\n                        <div class=\"modal-content\">\n                          <div class=\"modal-header\">\n                            <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"font-size:1.1em;color:green\">Kids's Size Sheet </h5>\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <div style=\"width:100%;\">\n                             \n                              <table class=\"table table-sm table-hover table-striped\" style=\"width:100%;\">\n                                <thead>\n                                  <tr>\n                                    <th style=\"width:10%\">Size</th>\n                                    <th style=\"width:25%;text-align:center\">Chest</th>\n                                    <th style=\"width:25%;text-align:center\">Length</th>\n                                    <th style=\"width:40%;text-align:center\" class=\"text-center\">Sleeve Length</th>\n                                    <th style=\"width:0%\"></th>\n                                  </tr>\n                                  <!--<tr>\n                                    <td> Size </td>\n                                    <td> cm. </td>\n                                    <td> cm. </td>\n                                    <td> cm. </td>\n                                  </tr>-->\n                                </thead>\n                                <tbody>\n                                  <tr>\n                                    <td> \n                                      <!--<button type=\"button\" class=\"btn btn-primary btn-circle\"><i> </i></button>-->\n                                      XS <p class=\"size-sheet-modal-font\">(3-4Yrs)</p>\n                                    </td>\n                                    <td> 33 </td>\n                                    <td> 43 </td>\n                                    <td> 13 </td>\n                                  </tr>\n                                  <tr>\n                                    <td> S <p class=\"size-sheet-modal-font\">(5-6Yrs)</p></td>\n                                    <td> 36.5 </td>\n                                    <td> 46.0 </td>\n                                    <td> 15 </td>\n                                  </tr>\n                                  <tr>\n                                    <td> M <p class=\"size-sheet-modal-font\">(7-8Yrs)</p></td>\n                                    <td> 39.5 </td>\n                                    <td> 49.5 </td>\n                                    <td> 16.0 </td>\n                                  </tr>\n                                  <tr>\n                                    <td> L <p class=\"size-sheet-modal-font\">(9-10Yrs)</p></td>\n                                    <td> 42 </td>\n                                    <td> 53.5 </td>\n                                    <td> 16.5 </td>\n                                  </tr>\n                                  <tr>\n                                    <td> XL <p class=\"size-sheet-modal-font\">(11-12Yrs)</p></td>\n                                    <td> 44.5 </td>\n                                    <td> 57 </td>\n                                    <td> 17 </td>\n                                  </tr>\n                                  <tr>\n                                    <td> XXL <p class=\"size-sheet-modal-font\">(13-14Yrs)</p></td>\n                                    <td> 47</td>\n                                    <td> 61</td>\n                                    <td> 18 </td>\n                                  </tr>\n                 \n                                </tbody>\n                              </table>\n                              <p style=\"font-size:0.8em\"> * All Measurements in Cms </p>\n                            </div>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-secondary btn-sm\" data-dismiss=\"modal\" onclick=\"saveSize();\">Close</button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"modal fade text-center\" id=\"exampleModalBabies\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                      <div class=\"modal-dialog\" role=\"document\">\n                        <div class=\"modal-content\">\n                          <div class=\"modal-header\">\n                            <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"font-size:1.1em;color:green\">Babies Size Sheet </h5>\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <div style=\"width:100%;\">\n                             \n                              <table class=\"table table-sm table-hover table-striped\" style=\"width:100%;\">\n                                <thead>\n                                  <tr>\n                                    <th style=\"width:10%\">Size</th>\n                                    <th style=\"width:25%;text-align:center\">Chest</th>\n                                    <th style=\"width:25%;text-align:center\">Length</th>\n                                    <th style=\"width:40%;text-align:center\" class=\"text-center\">Sleeve Length</th>\n                                    <th style=\"width:0%\"></th>\n                                  </tr>\n                                  <!--<tr>\n                                    <td> Size </td>\n                                    <td> cm. </td>\n                                    <td> cm. </td>\n                                    <td> cm. </td>\n                                  </tr>-->\n                                </thead>\n                                <tbody>\n                                  <tr>\n                                    <td> \n                                      <!--<button type=\"button\" class=\"btn btn-primary btn-circle\"><i> </i></button>-->\n                                      XS <p class=\"size-sheet-modal-font\">(0-6 month's)</p>\n                                    </td>\n                                    <td> 33 </td>\n                                    <td> 43 </td>\n                                    <td> 13 </td>\n                                  </tr>\n                                  <tr>\n                                    <td> S <p class=\"size-sheet-modal-font\">(6-12 month's)</p></td>\n                                    <td> 36.5 </td>\n                                    <td> 46.0 </td>\n                                    <td> 15 </td>\n                                  </tr>\n                                  <tr>\n                                    <td> M <p class=\"size-sheet-modal-font\">(12-18 month's)</p></td>\n                                    <td> 39.5 </td>\n                                    <td> 49.5 </td>\n                                    <td> 16.0 </td>\n                                  </tr>\n                                  <tr>\n                                    <td> L <p class=\"size-sheet-modal-font\">(18-24 month's)</p></td>\n                                    <td> 42 </td>\n                                    <td> 53.5 </td>\n                                    <td> 16.5 </td>\n                                  </tr>                  \n                 \n                                </tbody>\n                              </table>\n                              <p style=\"font-size:0.8em\"> * All Measurements in Cms </p>\n                            </div>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-secondary btn-sm\" data-dismiss=\"modal\" onclick=\"saveSize();\">Close</button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>"

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:16em!important;margin-bottom:0px\">\n\n  <div id=\"loader\" style=\"display:none;\" ></div>\n  <h4 style=\"padding-left:2em\"> Checkout </h4>\n  <!-- <div *ngIf=\"warning_msg\" class=\"alert alert-warning alert-dismissible\" role=\"alert\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n    <strong>Warning!</strong> {{warning_msg}}\n  </div>\n\n  <div *ngIf=\"success_msg\" class=\"alert alert-success alert-dismissible\" role=\"alert\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n    <strong>Success!</strong> {{success_msg}}\n  </div> -->\n\n            \n\n  <form class=\"form-horizontal\" role=\"form\" data-toggle=\"validator\" action='https://secure.payu.in/_payment' method='post'\n    name='payuForm' id=\"payuForm\">\n\n    <hr *ngIf=\"OrderList && !OrderList.length\" style=\"margin-top:1em;margin-left:0\">\n\n    <div class=row>\n        <input type='hidden' name='key' value='pRqSpXoP'>\n        <input type='hidden' id=\"hash\" name='hash' value=''>\n        <input type='hidden' id=\"txnid\" name='txnid' value='440335b3b3030188ca78'>\n        <input name='amount' value={{Total}} type='hidden' >\n        <input type='hidden' name=\"productinfo\" value='t-shirt' >\n        <!--value=\"http://bornartist.in/api/paymentsuccess\"-->\n        <input type='hidden' name=\"surl\"  [(ngModel)]=\"payment_success_url\">\n        <!--value=\"http://bornartist.in/api/paymentfailed\" -->\n        <input type='hidden' name=\"furl\" [(ngModel)]=\"payment_failure_url\">\n        <input type='hidden' name=\"service_provider\" value='payu_paisa'  size='64'>\n    </div>\n\n    <div class=\"row\" *ngIf=\"OrderList && !OrderList.length\">\n      <img src=\"assets/images/shopping-cart.png\"  style=\"margin:auto;\"/>\n      <p style=\"font-size:1.2em;text-align:center;width:100%\" class=\"text-sm-center\"> Nothing in here! </p>\n      <a href='/home' class=\"text-sm-center\" style=\"text-align:center;width:100%\" >Choose a T-shirt and order one now! </a>\n    </div>\n\n    <div class=\"row\" *ngIf=\"OrderList && OrderList.length\" style=\"padding-left:3em;padding-right:3em;margin-top:1em\">\n      <div class=\"col \">\n          <legend>\n            <div style=\"font-size:0.6em;color:#de8a39\">Order Summary</div>\n          </legend>\n          <div id=\"ordersummary\">\n              <div class=row *ngIf=\"OrderList\" style=\" padding-left: 12px;padding-right: 12px;font-size:0.7em!important\">\n              \n                  <table class=\"table table table-condensed  custab \">\n                  <thead>\n                  <!-- col-md-6 col-md-offset-2 custyle <a href=\"#\" class=\"btn btn-primary btn-xs pull-right\"><b>+</b> Add new categories</a>-->\n                      <tr class=\"danger\" style=\"border:0px;color: #3e3232;;font-weight:200!important;\">\n                          <th style=\"font-weight:200!important;width:10% !important;\">Sl.No</th>\n                          <th style=\"font-weight:200!important;width:20% !important;\">Product</th>\n                          <th style=\"font-weight:200!important;width:20% !important;\">Size</th>\n                          <th style=\"font-weight:200!important;\">Cost</th>\n                          <th class=\"text-center\"></th>\n                      </tr>\n                  </thead>\n                      <tbody style=\"font-size:1.3em\">\n                        <tr *ngFor=\"let wip of OrderList;let k = index\">\n                              <td>{{k+1}}</td>\n                              <td>{{wip.displayName}}</td>\n                              <td> \n                                <p *ngIf=\"wip.men_size && wip.men_size.length \"> \n                                   Men  \n                                     <span *ngFor=\"let sizeObject of wip.men_size;let mk = index\" > \n                                         <span class=\" text-sm chip-exisiting-sizes\"> {{sizeObject.size}} - {{sizeObject.qty}} </span>\n                                     </span>\n                                </p>\n                                <p *ngIf=\"wip.women_size && wip.women_size.length \"> \n                                   Women  \n                                     <span *ngFor=\"let sizeObject of wip.women_size;let mk = index\" > \n                                         <span class=\"  text-sm chip-exisiting-sizes\"> {{sizeObject.size}} - {{sizeObject.qty}} </span>\n                                     </span>\n                                </p>\n                                <p *ngIf=\"wip.kids_size && wip.kids_size.length \"> \n                                   Kids  \n                                     <span *ngFor=\"let sizeObject of wip.kids_size;let mk = index\" > \n                                         <span class=\" text-sm chip-exisiting-sizes\"> {{sizeObject.size}} - {{sizeObject.qty}} </span>\n                                     </span>\n                                </p>\n                                <p *ngIf=\"wip.babies_size && wip.babies_size.length \"> \n                                   Babies  \n                                     <span *ngFor=\"let sizeObject of wip.babies_size;let mk = index\" > \n                                         <span class=\" text-sm chip-exisiting-sizes\"> {{sizeObject.size}} - {{sizeObject.qty}} </span>\n                                     </span>\n                                </p>\n                              </td>\n                              <td>\n                                <p *ngIf=\"wip.wip_cost\" style=\"margin-bottom:0.2em\"> &#8377; {{wip.wip_cost}}</p>\n                                <p *ngIf=\"!wip.wip_cost\" style=\"margin-bottom:0.2em\"> N/A </p>\n                              </td>\n                              <td class=\"text-center\">\n                                <p *ngIf=\"!wip.wip_cost\" style=\"margin-bottom:0.2em\"> Please add size to order this item. </p>\n                                <a *ngIf=\"!wip.wip_cost\" href=\"http://bornartist.in/cart\"> Add size </a>\n                              </td>\n                        </tr>\n                        <tr class=\"success\">\n                              <!--<td style-></td>\n                              <td></td>\n                              <td></td>\n                              <td class=\"text-center\"> <a class='btn btn-info btn-xs' href=\"#\"><span class=\"glyphicon glyphicon-edit\"></span> Edit</a> -->\n                              <!--<a class=\"btn btn-success\" style=\"color:#368648;font-weight:600;background:rgba(92, 184, 92, 0)!important\"> Rs. {{Total}}</a>-->\n                              <!--</td>-->\n\n                        <!--<hr style=\"margin-left:3em;margin-right:3em;margin-top:1em\">-->\n                        </tr>\n                      </tbody>\n                      <tfoot>\n                        <tr>\n                            <!--<div class=\"form-group row\">\n                              <div class=\"col-sm-10\">\n                                <div class=\"form-check\">\n                                  <label class=\"form-check-label\">\n                                    <input class=\"form-check-input\" type=\"checkbox\">  Display my ordered designs in public gallery \n                                  </label>\n                                </div>\n                              </div>\n                            </div>-->\n                        </tr>\n                      </tfoot>\n                  </table>\n\n\n  \n                  \n                  <!--<p> * All orders will be delivered to mentioned address with-in 5-8 business days.</p>\n                  <p> * Orders placed cannot be cancelled. </p>-->\n              </div>\n              <!--<div class=\"row\" *ngIf=\"OrderList\" style=\" padding-left: 12px;padding-right: 12px;font-size:0.7em!important\">\n                    <div class=\"form-group \" >\n                      <div >\n                        <div class=\"form-check\">\n                          <label class=\"form-check-label\" style=\"font-size:1.2em\">\n                                <input class=\"form-check-input\" type=\"checkbox\" name=\"share_design_sts\" id=\"share_design_sts\"> <u> <span >  Display my ordered designs in public gallery </span></u>\n                          </label>\n                        </div>\n                      </div>\n                     </div>\n              </div>-->\n              <div class=\"row\" *ngIf=\"OrderList\" style=\" padding-left: 12px;padding-right: 12px;font-size:0.7em!important\">\n                  <h4 style=\"margin-top:0px;margin-bottom:0px;\" style=\"color:black;font-weight:600;background:rgba(92, 184, 92, 0)!important;font-size:1.7em;font-weight:bolder\"> Grand Total : &#8377;  {{Total}} </h4>\n              </div>\n          </div>\n      </div>\n    </div>\n\n    <hr style=\"margin-left:3em;margin-right:3em;margin-top:1em\">\n    <span id=\"error_shipping\" >  </span>\n\n    <div class=\"row\" *ngIf=\"OrderList && OrderList.length\" style=\"padding-left:3em;padding-right:3em;margin-top:2em\">\n\n        <div class=\"col col-sm-8 col-lg-12 checkout-hidden\" id=\"confirm-details-card\">\n          <div class=\"card\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">\n                \n                <div style=\"font-size:0.6em;color:#de8a39\">Confirm Details</div>\n              </h4>\n              <h6 class=\"card-subtitle mb-2 text-muted\">\n                {{customerDetails.title}} {{customerDetails.firstName}} {{customerDetails.lastName}}\n              </h6>\n              <div class=\"card-text\">\n                  <h6>  \n                       <div style=\"font-size:0.8em;color:#de8a39\">Address</div>\n                  </h6>\n                  <p style=\"margin-bottom:0px\"> {{shippingDetails.address}} , {{shippingDetails.address2}}</p>\n                  <p style=\"margin-bottom:0px\"> {{shippingDetails.city}}, {{shippingDetails.state}} - {{shippingDetails.pincode}}<p>\n                  <p style=\"margin-bottom:0em\"> Phone : {{shippingDetails.mobile}} </p>\n                  <p style=\"margin-bottom:1em\"> Email : {{customerDetails.email}} </p>\n              </div>\n\n              \n              <!--<a href=\"\" class=\"card-link\">Edit</a>\n              <a href=\"#\" class=\"card-link\">Confirm</a>-->\n              <button class=\"btn btn-primary card-link  \" id=\"confirm-details-edit\" style=\"background:none;color:#de8a39;border:1px solid #de8a39\" onclick=\"confirmDetailsEdit(this);\" > Edit </button>\n              <button class=\"btn btn-success  invisible\" id=\"pay-with-cod\" style=\"background:none;color:#449D44\" onclick=\"paycash(this);\" >Cash-on-Delivery</button>\n              <button class=\"btn btn-success  invisible\"  id=\"pay-with-payumoney\" style=\"\" onclick=\"paynow(this);\">Pay Online</button>\n            </div>\n            <p style=\"padding-left:0em;margin-bottom:0px;font-size:0.7em\" *ngIf=\"OrderList && OrderList.length\"> * All orders will be delivered to mentioned address with-in 5-8 business days.</p>\n            <p style=\"padding-left:0em;margin-bottom:1em;font-size:0.7em\" *ngIf=\"OrderList && OrderList.length\"> * Orders placed cannot be cancelled. </p>\n          </div>\n        </div>\n\n\n        <div class=\"col col-sm-4\" style=\"display:none;\">\n          <legend>\n            Order Summary\n          </legend>\n          <div id=\"ordersummary\">\n              <div class=row *ngIf=\"OrderList\" style=\" padding-left: 12px;padding-right: 12px;\">\n              \n                  <table class=\"table table table-hover table-condensed  custab \">\n                  <thead>\n                  <!-- col-md-6 col-md-offset-2 custyle <a href=\"#\" class=\"btn btn-primary btn-xs pull-right\"><b>+</b> Add new categories</a>-->\n                      <tr class=\"danger\" style=\"background: #de8a39;color: #3e3232;;font-weight:200!important;\">\n                          <th style=\"font-weight:200!important;\">Sl.No</th>\n                          <th style=\"font-weight:200!important;\">Item</th>\n                          <th style=\"font-weight:200!important;\">Cost</th>\n                          <th class=\"text-center\"></th>\n                      </tr>\n                  </thead>\n                      \n                        <tr *ngFor=\"let wip of OrderList;let k = index\">\n                              <td>{{k+1}}</td>\n                              <td>{{wip.displayName}}</td>\n                              <td>\n                                <p *ngIf=\"wip.wip_cost\"> {{wip.wip_cost}}</p>\n                                <p *ngIf=\"!wip.wip_cost\"> N/A </p>\n                              </td>\n                              <td class=\"text-center\">\n                                <p *ngIf=\"!wip.wip_cost\"> Please add size to order this item. </p>\n                                <a *ngIf=\"!wip.wip_cost\" href=\"http://bornartist.in/cart\"> Add size </a>\n                              </td>\n                        </tr>\n                        <tr class=\"success\">\n                              <td ></td>\n                              <td></td>\n                              <td></td>\n                              <td class=\"text-center\"><!-- <a class='btn btn-info btn-xs' href=\"#\"><span class=\"glyphicon glyphicon-edit\"></span> Edit</a> -->\n                              <a class=\"btn btn-success\" style=\"color:#368648;font-weight:600;background:rgba(92, 184, 92, 0)!important\"> Rs. {{Total}}</a></td>\n                        </tr>\n                  </table>\n                  <!--<p> * 1 All orders will be delivered to mentioned address with-in 5-8 business days.</p>\n                  <p> * Orders placed cannot be cancelled. </p>-->\n            </div>\n          </div>\n\n          <div class=\"form-group  \">\n            <div class=\"col-sm-5\">\n              <label style=\"color:red\">\n              <span *ngIf=\"error_billing\"> * All billing details required </span>\n            </label>\n            </div>\n          </div>\n\n      </div>\n\n\n      <div class=\"col col-sm-4 col-lg-4 visible\" id=\"personal-detail-form\">\n          <legend>\n            <h5 style=\"font-size:0.8em\"> Personal Details </h5>\n          </legend>\n          <div class=\"form-group  \">\n           \n            <div class=\"col-sm-10\">\n              <select class=\"form-control form-control-sm \" id=\"title\" name=\"title\" [(ngModel)]=\"customerDetails.title\" required=\"true\">\n                  <option ngValue='Mr.' value='Mr.' selected >Mr.</option>\n                  <option ngValue=\"Mrs.\" value='Mrs.' >Mrs.</option>\n                  <option ngValue=\"Miss.\" value='Miss.' >Miss.</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"form-group  \">\n            <div class=\"col-sm-10\">\n              <input required type=\"text\" class=\"form-control form-control-sm\" id=\"first-name\" name=\"firstname\" placeholder=\"First Name\"\n                value=\"customerDetails.firstName\" (ngModelChange)=\"customerDetails.firstName = $event\" [(ngModel)]=\"customerDetails.firstName\">\n            </div>\n          </div>\n\n          <div class=\"form-group  \">\n            <div class=\"col-sm-10\">\n              <input required type=\"text\" class=\"form-control form-control-sm\" id=\"last-name\" name=\"lastName\" placeholder=\"Last Name\" value=\"customerDetails.lastName\"\n                (ngModelChange)=\"customerDetails.lastName = $event\" [(ngModel)]=\"customerDetails.lastName\">\n            </div>\n          </div>\n          <div class=\"form-group   \">\n            <div class=\"col-sm-10\">\n              <input required type=\"email\" class=\"form-control form-control-sm\" id=\"email-address\" name=\"email\" placeholder=\"Email Address\"\n                value=\"customerDetails.email\" (ngModelChange)=\"customerDetails.email = $event\" [(ngModel)]=\"customerDetails.email\">\n            </div>\n          </div>\n\n          <!--<div class=\"form-group   \">\n            <div class=\"col-sm-10\">\n              <input required type=\"email\" class=\"form-control form-control-sm\" id=\"email-address\" name=\"email\" placeholder=\"Email Address\"\n                value=\"customerDetails.email\" (ngModelChange)=\"customerDetails.email = $event\" [(ngModel)]=\"customerDetails.email\">\n            </div>\n          </div>-->\n\n          <div class=\"form-group \" >\n                <div class=\"col-sm-10\" >\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\" style=\"font-size:1.2em\">\n                          <input class=\"form-check-input\" type=\"checkbox\" name=\"share_design_sts\" id=\"share_design_sts\" > <u> <span >  Display my ordered designs in public gallery </span></u>\n                    </label>\n                  </div>\n                </div>\n          </div>\n\n          <div class=\"form-group  \">\n            <div class=\"col-sm-10\">\n              <label style=\"color:red\">\n            </label>\n            </div>\n          </div>\n\n          <div class=\"form-group  \">\n            <div class=\"col-sm-10\">\n              <label style=\"color:red\">\n            </label>\n            </div>\n          </div>\n          <div class=\"form-group  \">\n            <div class=\"col-sm-10\">\n              <label style=\"color:red\">\n            </label>\n            </div>\n          </div>\n\n          <div class=\"form-group  \">\n            <div class=\"col-sm-10\">\n              <label style=\"color:red\">\n              </label>\n            </div>\n          </div>\n\n          <!--<div class=\"form-group  \">\n            <div class=\"col-sm-10\">\n              <label style=\"color:red\">\n              <span id=\"error_shipping\" > * All  details required </span>\n            </label>\n            </div>\n          </div>-->\n\n      </div>\n\n      <div class=\"col col-sm-4 col-lg-4 visible\" id=\"delivery-detail-form\">\n        <legend>\n         <h5 style=\"font-size:0.8em\"> Delivery Address </h5>\n        </legend>\n\n        <!-- <fieldset class=\"form-group\">\n          <legend>Radio buttons</legend>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked>\n                Mr. Sachin Rohit, #1233, Wrong Road, Y Turn, Telangana.\n            </label>\n          </div>\n          <div class=\"form-check\">\n          <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\">\n              Option two can be something else and selecting it will deselect option one\n            </label>\n          </div>\n          <div class=\"form-check disabled\">\n          <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios3\" value=\"option3\" disabled>\n              Option three is disabled\n            </label>\n          </div>\n        </fieldset> -->\n\n        <div class=\"form-group  \">\n          <!--<label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Address</label>-->\n          <div class=\"col-sm-10\">\n            <input required type=\"text\" class=\"form-control form-control-sm\" id=\"address\" placeholder=\"Address \" name=\"shippingDetailsaddress\" value=\"shippingDetails.address\"\n              (ngModelChange)=\"shippingDetails.address = $event\" [(ngModel)]=\"shippingDetails.address\">\n          </div>\n        </div>\n\n        <div class=\"form-group  \">\n          <!--<label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Landmark</label>-->\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"landmark\" placeholder=\"Landmark\" value=\"shippingDetails.address2\"\n              name=\"shippingDetailsaddress2\" (ngModelChange)=\"shippingDetails.address2 = $event\" [(ngModel)]=\"shippingDetails.address2\">\n          </div>\n        </div>\n\n        <div class=\"form-group  \">\n          <!--<label for=\"inputPassword3\" class=\"col-sm-2 control-label\">City</label>-->\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"city\" placeholder=\"city\" value=\"shippingDetails.city\" name=\"shippingDetailscity\"\n              (ngModelChange)=\"shippingDetails.city = $event\" [(ngModel)]=\"shippingDetails.city\" required>\n          </div>\n        </div>\n\n        <div class=\"form-group  \">\n          <!--<label for=\"inputPassword3\" class=\"col-sm-2 control-label\">State</label>-->\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"state\" placeholder=\"State\" value=\"shippingDetails.state\" name=\"shippingDetailsstate\"\n              (ngModelChange)=\"shippingDetails.state = $event\" [(ngModel)]=\"shippingDetails.state\" required>\n          </div>\n        </div>\n\n        <div class=\"form-group  \">\n          <!--<label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Pincode</label>-->\n          <div class=\"col-sm-10\">\n            <input required type=\"number\" class=\"form-control form-control-sm\" id=\"pincode\" placeholder=\"Pincode\" value=\"shippingDetails.pincode\"\n              name=\"shippingDetailspincode\" (ngModelChange)=\"shippingDetails.pincode = $event\" [(ngModel)]=\"shippingDetails.pincode\" required>\n          </div>\n        </div>\n\n        <div class=\"form-group  \">\n          <!--<label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Mobile</label>-->\n          <div class=\"col-sm-10\">\n            <input  type=\"number\" class=\"form-control form-control-sm\" id=\"phone\" oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" placeholder=\"Mobile Number\" name=\"shippingDetailsphone\"\n              maxlength = \"10\" value=\"shippingDetails.mobile\" (ngModelChange)=\"shippingDetails.mobile = $event\" [(ngModel)]=\"shippingDetails.mobile\" required>\n          </div>\n        </div>\n\n        <div class=\"form-group\" >\n           <div class=\"col-sm-10\">\n              <button class=\"btn btn-primary btn-block \" id=\"confirm-details\" onclick=\"confirmDetails(this);\"> Confirm </button>\n           </div>\n        </div>\n\n        <!-- payment buttons where here -->\n        <!--</form>-->\n      </div>\n\n      </div> <!-- row -->\n      <div class=\"row\">\n        <!--<div class=\"col col-sm-4 col-lg-2 \" >\n          <div class=\"col-sm-offset-2 col-md-offset-2 col-lg-offset-2\">\n            <button class=\"btn btn-primary btn-block \" id=\"confirm-details\"> Confirm </button>\n          </div>\n        </div>-->\n        <!-- card was here -->\n\n      \n      </div> <!-- row -->\n  </form>\n      <!--<p style=\"padding-left:1em\" *ngIf=\"OrderList && OrderList.length\"> * All orders will be delivered to mentioned address with-in 5-8 business days.</p>\n      <p style=\"padding-left:1em\" *ngIf=\"OrderList && OrderList.length\"> * Orders placed cannot be cancelled. </p>-->\n</div>"

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"\n    \">\n  <!--<h2 style=\"text-align:center\">Contact us </h2>\n  <hr/>\n  <br />\n  <h3>BORN ARTIST ENTERPRISES</h3>\n  <br/>\n  <h3>ADDRESS</h3>\n  <p>#24, 2nd floor, 12th cross, </p>\n  <p>visweswarayya colony, </p>\n  <p>manjunath bar & restaurant, </p>\n  <p>akash nagar, </p>\n  <p>B narayanapura, </p>\n  <p>Bengaluru, </p>\n  <p>560016</p>\n  <h3>CONTACT PERSON</h3>\n  <p>Venkat (9742481118)</p>\n  <h3>MAIL ID</h3>\n  <p>Venkat.Badaru08@Gmail.Com</p>-->\n\n\n  <div class=\"card\">\n      <div class=\"card-header\">\n       Registered Office\n      </div>\n      <div class=\"card-block\">\n        <h4 class=\"card-title\">BORN ARTIST ENTERPRISES </h4>\n        <p class=\"card-text\">\n          #24, 2nd floor, 12th cross,  <br/>\n          visweswarayya colony, <br/>\n          manjunath bar & restaurant, <br/>\n          akash nagar, B narayanapura,<br/>\n          Bengaluru - 560016.\n\n          \n              <br/>\n              <br/>\n              Email : bornartist.helpdesk@gmail.com\n              <br/>\n              Call : <strong> Venkat (9742481118) </strong>\n        </p>\n       \n      </div>\n    </div>\n\n</div>"

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:16em\">\n\n  <iframe width=\"100%\" height=\"600\" [src]=\"url | safe\"></iframe>\n</div>\n"

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!--<h3 style=\"text-align:left\">Previously ordered designs </h3>-->\n  <div class=\"card\">\n      <div class=\"card-header\">\n       Previously Ordered Designs\n      </div>\n  </div>\n  <hr>\n  \n<div class=\"row\">\n  <div class=\"col-md-3\" *ngFor=\"let image of imagePaths\" class=\"wraptocenter\" style=\"\">\n    <img [src]=\"image.designReferenceFile\" style=\"max-height:300px!important;max-width:300px;\" class=\"image-container\" alt=\"Image not found\"> \n     <!--onerror=\"this.src='assets/warning.png';\" -->\n  </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:18em\">\n    <img src=\"../assets/images/headerimag.png\" alt=\"born artist\" style=\"width:100%\">\n</div>\n\n<div class=\"center-div\">\n    <div class=\"container center-text\">\n        <h3>\n            Three easy steps for happiness</h3>\n        <br />\n    </div>\n    <div class=\"row\">\n        <div class=\"process\">\n            <div class=\"process-row\">\n                <div class=\"process-step\">\n                    <button type=\"button\" class=\"btn btn-color btn-circle\" disabled=\"disabled\">\n                                <i class=\"fa fa-user fa-3x\"></i>\n                            </button>\n                    <p>\n                        Choose T-shirt</p>\n                </div>\n                <div class=\"process-step\">\n                    <button type=\"button\" class=\"btn btn-color btn-circle\" disabled=\"disabled\">\n                                <i class=\"fa fa-tachometer  fa-3x\" aria-hidden=\"true\"></i>\n                            </button>\n                    <p>\n                        Customize</p>\n                </div>\n                <div class=\"process-step\">\n                    <button type=\"button\" class=\"btn btn-color btn-circle\" disabled=\"disabled\">\n                                <i class=\"fa fa-shopping-cart fa-3x\"></i>\n                            </button>\n                    <p>\n                        Order</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<br/>\n<br/>\n<hr align=\"center\" />\n<br/>\n\n<div class=\"container\">\n    <br />\n    <div class=\"card\">\n        <div class=\"card-header\" role=\"tab\" id=\"Div1\">\n            <h5 class=\"mb-0 text-center\">\n                <a class=\"collapsible\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\"> <span class=\"pick-text\">Pick One To Get Started</span></a>\n            </h5>\n        </div>\n        <div id=\"Div2\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n            <div class=\"card-block\">\n                <div class=\"row\">\n                    <div class=\"col-sm-1 col-md-1 col-xs-1\">\n                    </div>\n                    <div class=\"col-sm-4 col-md-4 col-xs-4 image-wrap active-selection\">\n                        <div class=\"thumbnail\">\n                            <div class=\"text-center\">\n                                <img class=\"img-fluid img-responsive\" style=\"max-height:300px!important;max-width:300px;\" id=\"vneckshirt\" src=\"assets/V-NeckWhite300.jpg\"\n                                    alt=\"\">\n                            </div>\n                            <hr />\n                            <div style=\"margin-top: 1em;\">\n                                <h4 class=\"pull-right product-info\">\n                                    &#8377; 499 </h4>\n                                <h4 class=\"product-info\">\n                                    V-Neck \n                                    <p class=\"item-desc\">Premium plain t-shirt with v-neck</p>\n                                </h4>\n                            </div>\n                        </div>\n\n                        <div class=\"table\">\n                            <tr> \n                                <td style=\"font-weight:200;font-size:0.8em\">Colours   </td> \n                                <td>  \n                                    <button (click)=\"changeColor('Royal Blue')\" class=\"btn btn-sq-xs btn-primary\">\n                                        <br />\n                                    </button>\n                                     <button (click)=\"changeColor('black')\" class=\"btn btn-sq-xs btn-black\">\n                                        <br />\n                                    </button>\n                                     <button (click)=\"changeColor('white')\" class=\"btn btn-sq-xs btn-white\">\n                                        <br />\n                                    </button>\n                                    <button (click)=\"changeColor('Red')\" class=\"btn btn-sq-xs btn-danger\">\n                                        <br />\n                                    </button>\n                                    <!--<button (click)=\"changeColor('brown')\" \n                                    class=\"btn btn-sq-xs\" style=\"background:brown\">\n                                        <br />\n                                    </button>-->\n                                    <!--<button (click)=\"changeColor('black')\" class=\"btn btn-sq-xs btn-black\">\n                                        <br />\n                                    </button><button (click)=\"changeColor('white')\" class=\"btn btn-sq-xs btn-white\">\n                                         <br /> \n                                    </button><button (click)=\"changeColor('danger')\" class=\"btn btn-sq-xs btn-danger\">\n                                         <br />\n                                    </button>-->\n                                </td> \n                            </tr>\n                            <tr>\n                                <td style=\"font-weight:200;font-size:0.8em\"> Sizes   </td>\n                                <td style=\"font-weight:500;font-size:0.8em\"> S, L, XL, XXL, XXXL </td>\n                            </tr>\n                            <tr> \n                                <td style=\"font-weight:500;font-size:0.8em\"> Size Sheet </td>\n                                <td style=\"font-weight:500;font-size:0.8em\">\n                                    <p style=\"font-size:0.5em!important;\">\n                                        <button class=\"btn btn-primary btn-sm \" style=\"background:none;color:red;border:0px;font-size:1.8em!important;\" data-toggle=\"modal\" data-target=\"#exampleModal\" href=\"\"> \n                                        Men\n                                        </button>\n                                    </p>\n                                        <!-- Modal -->\n                                        <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                                        <div class=\"modal-dialog\" role=\"document\">\n                                            <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Men's Round Neck Size </h5>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                                <span aria-hidden=\"true\">&times;</span>\n                                                </button>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                <div >\n                                                <!--<h3 style=\"font-size:1.2em\"> Men's Round Neck Size</h3>-->\n                                                <!--<img src=\"assets/images/men_round_size.jpg\" style=\"display:inline-block;margin:auto;\">-->\n                                                <table>\n                                                    <thead>\n                                                    <tr>\n                                                        <th style=\"width:10%\"></th>\n                                                        <th style=\"width:25%\">CHEST</th>\n                                                        <th style=\"width:25%\">LENGTH</th>\n                                                        <th style=\"width:40%\" class=\"text-center\">SLEEVE LENGTH</th>\n                                                        <th style=\"width:0%\"></th>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> Size </td>\n                                                        <td> cm. </td>\n                                                        <td> cm. </td>\n                                                        <td> cm. </td>\n                                                    </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                    <tr>\n                                                        <td> S </td>\n                                                        <td> 48 </td>\n                                                        <td> 68 </td>\n                                                        <td> 21.5 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> M </td>\n                                                        <td> 50.75 </td>\n                                                        <td> 71 </td>\n                                                        <td> 22.5 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> L </td>\n                                                        <td> 54 </td>\n                                                        <td> 74 </td>\n                                                        <td> 23 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> XL </td>\n                                                        <td> 57 </td>\n                                                        <td> 76 </td>\n                                                        <td> 24 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> XXL </td>\n                                                        <td> 62</td>\n                                                        <td> 79</td>\n                                                        <td> 24.5 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> XXXL  </td>\n                                                        <td> 68</td>\n                                                        <td> 80 </td>\n                                                        <td> 25</td>\n                                                    </tr>\n                                                    </tbody>\n                                                </table>\n                                                </div>\n                                                <!--<div style=\"margin-top:2em;margin-bottom:2em\">\n                                                <h3 style=\"font-size:1.2em\"> Women's Round Neck Size</h3>\n                                                <img src=\"assets/images/women_round_size.jpg\" style=\"display:inline-block;margin:auto;\">\n                                                </div>\n                                                <div style=\"margin-top:2em;margin-bottom:2em\">\n                                                <h3 style=\"font-size:1.2em\"> Kids's Round Neck Size</h3>\n                                                <img src=\"assets/images/kids_round_size.jpg\" style=\"display:inline-block;margin:auto;\">\n                                                </div>-->\n                                            </div>\n                                            <div class=\"modal-footer\">\n                                                <button type=\"button\" class=\"btn btn-secondary btn-sm\" data-dismiss=\"modal\">Close</button>\n                                            </div>\n                                            </div>\n                                        </div>\n                                        </div>\n\n                                        <!-- Women Size Modal -->\n                                        <div class=\"modal fade\" id=\"exampleModalWomen\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                                        <div class=\"modal-dialog\" role=\"document\">\n                                            <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"font-size:1.2em\">Women's Round Neck Size </h5>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                                <span aria-hidden=\"true\">&times;</span>\n                                                </button>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                <div >\n                                                <!--<h3 style=\"font-size:1.2em\"> Women's Round Neck Size</h3>-->\n                                                <!--<img src=\"assets/images/men_round_size.jpg\" style=\"display:inline-block;margin:auto;\">-->\n                                                <table>\n                                                    <thead>\n                                                    <tr>\n                                                        <th style=\"width:10%\"></th>\n                                                        <th style=\"width:25%\">CHEST</th>\n                                                        <th style=\"width:25%\">LENGTH</th>\n                                                        <th style=\"width:40%\" class=\"text-center\">SLEEVE LENGTH</th>\n                                                        <th style=\"width:0%\"></th>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> Size </td>\n                                                        <td> cm. </td>\n                                                        <td> cm. </td>\n                                                        <td> cm. </td>\n                                                    </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                    <tr>\n                                                        <td> XS </td>\n                                                        <td> 38 </td>\n                                                        <td> 58 </td>\n                                                        <td> 13.5 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> S </td>\n                                                        <td> 41 </td>\n                                                        <td> 60 </td>\n                                                        <td> 14.5 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> M </td>\n                                                        <td> 44.0 </td>\n                                                        <td> 62 </td>\n                                                        <td> 15.5 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> L </td>\n                                                        <td> 47 </td>\n                                                        <td> 64 </td>\n                                                        <td> 16.5 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> XL </td>\n                                                        <td> 50 </td>\n                                                        <td> 66 </td>\n                                                        <td> 17.5 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> XXL </td>\n                                                        <td> 54</td>\n                                                        <td> 68</td>\n                                                        <td> 19.5 </td>\n                                                    </tr>\n                                                    <!--<tr>\n                                                        <td> XXXL  </td>\n                                                        <td> 68</td>\n                                                        <td> 80 </td>\n                                                        <td> 25</td>\n                                                    </tr>-->\n                                                    </tbody>\n                                                </table>\n                                                </div>\n                                                \n                                            </div>\n                                            <div class=\"modal-footer\">\n                                                <button type=\"button\" class=\"btn btn-secondary btn-sm\" data-dismiss=\"modal\">Close</button>\n                                            </div>\n                                            </div>\n                                        </div>\n                                        </div>\n\n                                        <div class=\"modal fade\" id=\"exampleModalKids\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                                        <div class=\"modal-dialog\" role=\"document\">\n                                            <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"font-size:1.2em\">Kids's Round Neck Size </h5>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                                <span aria-hidden=\"true\">&times;</span>\n                                                </button>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                <div >\n                                               \n                                                <table>\n                                                    <thead>\n                                                    <tr>\n                                                        <th style=\"width:10%\"></th>\n                                                        <th style=\"width:25%\">CHEST</th>\n                                                        <th style=\"width:25%\">LENGTH</th>\n                                                        <th style=\"width:40%\" class=\"text-center\">SLEEVE LENGTH</th>\n                                                        <th style=\"width:0%\"></th>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> Size </td>\n                                                        <td> cm. </td>\n                                                        <td> cm. </td>\n                                                        <td> cm. </td>\n                                                    </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                    <tr>\n                                                        <td> XS </td>\n                                                        <td> 33 </td>\n                                                        <td> 43 </td>\n                                                        <td> 13 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> S </td>\n                                                        <td> 36.5 </td>\n                                                        <td> 46.0 </td>\n                                                        <td> 15 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> M </td>\n                                                        <td> 39.5 </td>\n                                                        <td> 49.5 </td>\n                                                        <td> 16.0 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> L </td>\n                                                        <td> 42 </td>\n                                                        <td> 53.5 </td>\n                                                        <td> 16.5 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> XL </td>\n                                                        <td> 44.5 </td>\n                                                        <td> 57 </td>\n                                                        <td> 17 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> XXL </td>\n                                                        <td> 47</td>\n                                                        <td> 61</td>\n                                                        <td> 18 </td>\n                                                    </tr>\n                                                    <!--<tr>\n                                                        <td> XXXL  </td>\n                                                        <td> 68</td>\n                                                        <td> 80 </td>\n                                                        <td> 25</td>\n                                                    </tr>-->\n                                                    </tbody>\n                                                </table>\n                                                </div>\n                                                <!--<div style=\"margin-top:2em;margin-bottom:2em\">\n                                                <h3 style=\"font-size:1.2em\"> Women's Round Neck Size</h3>\n                                                <img src=\"assets/images/women_round_size.jpg\" style=\"display:inline-block;margin:auto;\">\n                                                </div>-->\n                                                <!--<div style=\"margin-top:2em;margin-bottom:2em\">\n                                                <h3 style=\"font-size:1.2em\"> Kids's Round Neck Size</h3>\n                                                <img src=\"assets/images/kids_round_size.jpg\" style=\"display:inline-block;margin:auto;\">\n                                                </div>-->\n                                            </div>\n                                            <div class=\"modal-footer\">\n                                                <button type=\"button\" class=\"btn btn-secondary btn-sm\" data-dismiss=\"modal\">Close</button>\n                                            </div>\n                                            </div>\n                                        </div>\n                                        </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"font-weight:200;font-size:0.8em\"> Categories   </td>\n                                <td style=\"font-weight:500;font-size:0.8em\"> \n                                    \n                                    <button type=\"button\" id=\"men-btn\" class=\"btn btn-sm\" (click)=\"selectmen();\"> Men </button>\n                                </td>\n                            </tr>\n                        </div>\n                        <div style=\"text-align:right\">\n                            <a class=\"btn btn-color\" id=\"btn-customize-vneck\" (click)=\"onSelectVNeck('vneckshirt')\" href=\"/posts?style_code=99-RF-100132-190/SJ&style_name='Men\\'s V Neck  Short Sleeve Tshirt-190'\">\n                                <i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i> Customize</a>\n                        </div>\n\n                    </div>\n                    <div class=\"col-sm-2 col-md-2\">\n                    </div>\n                    <div class=\"col-sm-4 col-md-4 col-xs-4 image-wrap\">\n                        <div class=\"thumbnail\">\n                            <div class=\"text-center\">\n                                <img class=\"img-fluid\" id=\"roundneck\" src=\"assets/Roundneck300.jpg\" alt=\"\" style=\"max-height:300px!important;max-width:300px;\">\n                            </div>\n                            <hr />\n                            <div style=\"margin-top: 1em;\">\n                                <h4 class=\"pull-right product-info\">\n                                    &#8377; 499</h4>\n                                <h4 class=\"product-info\">\n                                    Round Neck \n                                    <p class=\"item-desc\">Premium plain t-shirt with round neck</p>\n                                </h4>\n                            </div>\n                        </div>\n                        \n                        <div class=\"table\">\n                            <tr> \n                                <td style=\"font-weight:200;font-size:0.8em\">Colours   </td> \n                                <td>  \n                                <button (click)=\"changeColorRoundNeck('Royal Blue')\" class=\"btn btn-sq-xs btn-primary\">\n                                    <br />\n                                </button>\n    \n                                <button (click)=\"changeColorRoundNeck('black')\" class=\"btn btn-sq-xs btn-black\">\n                                    <br />\n                                </button>\n                                <button (click)=\"changeColorRoundNeck('white')\"   class=\"btn btn-sq-xs btn-white\">\n                                    <br />\n                                </button>\n                                <button (click)=\"changeColorRoundNeck('Red')\"  class=\"btn btn-sq-xs btn-danger\">\n                                    <br />  \n                                </button> \n                                </td> \n                            </tr>\n                            <tr>\n                                <td style=\"font-weight:200;font-size:0.8em\"> Sizes   </td>\n                                <td style=\"font-weight:500;font-size:0.8em\"> \n                                    <p> S, L, XL, XXL, XXXL </p>\n                                </td>\n                            </tr>\n                            <tr> \n                                <td style=\"font-weight:500;font-size:0.8em\"> Size Sheet </td>\n                                <td style=\"font-weight:500;font-size:0.8em\">\n                                    <p style=\"font-size:0.5em!important;\">\n                                        <button class=\"btn btn-primary btn-sm \" style=\"background:none;color:red;border:0px;font-size:1.8em!important;\" data-toggle=\"modal\" data-target=\"#exampleModal\" href=\"\"> \n                                        Men\n                                        </button>\n                                        <button class=\"btn btn-primary btn-sm \" style=\"background:none;color:red;border:0px;font-size:1.8em!important;\" data-toggle=\"modal\" data-target=\"#exampleModalWomen\" href=\"\"> \n                                        Women\n                                        </button>\n                                        \n                                        <button class=\"btn btn-primary btn-sm \" style=\"background:none;color:red;border:0px;font-size:1.8em!important;\" data-toggle=\"modal\" data-target=\"#exampleModalKids\" href=\"\"> \n                                        Kids\n                                        </button>\n                                    </p>\n                                        <!-- Modal -->\n                                        <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                                        <div class=\"modal-dialog\" role=\"document\">\n                                            <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Men's Round Neck Size </h5>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                                <span aria-hidden=\"true\">&times;</span>\n                                                </button>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                <div >\n                                                \n                                                <table>\n                                                    <thead>\n                                                    <tr>\n                                                        <th style=\"width:10%\"></th>\n                                                        <th style=\"width:25%\">CHEST</th>\n                                                        <th style=\"width:25%\">LENGTH</th>\n                                                        <th style=\"width:40%\" class=\"text-center\">SLEEVE LENGTH</th>\n                                                        <th style=\"width:0%\"></th>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> Size </td>\n                                                        <td> cm. </td>\n                                                        <td> cm. </td>\n                                                        <td> cm. </td>\n                                                    </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                    <tr>\n                                                        <td> S </td>\n                                                        <td> 48 </td>\n                                                        <td> 68 </td>\n                                                        <td> 21.5 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> M </td>\n                                                        <td> 50.75 </td>\n                                                        <td> 71 </td>\n                                                        <td> 22.5 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> L </td>\n                                                        <td> 54 </td>\n                                                        <td> 74 </td>\n                                                        <td> 23 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> XL </td>\n                                                        <td> 57 </td>\n                                                        <td> 76 </td>\n                                                        <td> 24 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> XXL </td>\n                                                        <td> 62</td>\n                                                        <td> 79</td>\n                                                        <td> 24.5 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> XXXL  </td>\n                                                        <td> 68</td>\n                                                        <td> 80 </td>\n                                                        <td> 25</td>\n                                                    </tr>\n                                                    </tbody>\n                                                </table>\n                                                </div>\n                                               \n                                            </div>\n                                            <div class=\"modal-footer\">\n                                                <button type=\"button\" class=\"btn btn-secondary btn-sm\" data-dismiss=\"modal\">Close</button>\n                                            </div>\n                                            </div>\n                                        </div>\n                                        </div>\n\n                                        <!-- Women Size Modal -->\n                                        <div class=\"modal fade\" id=\"exampleModalWomen\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                                        <div class=\"modal-dialog\" role=\"document\">\n                                            <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"font-size:1.2em\">Women's Round Neck Size </h5>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                                <span aria-hidden=\"true\">&times;</span>\n                                                </button>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                <div >\n                                                \n                                                <table>\n                                                    <thead>\n                                                    <tr>\n                                                        <th style=\"width:10%\"></th>\n                                                        <th style=\"width:25%\">CHEST</th>\n                                                        <th style=\"width:25%\">LENGTH</th>\n                                                        <th style=\"width:40%\" class=\"text-center\">SLEEVE LENGTH</th>\n                                                        <th style=\"width:0%\"></th>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> Size </td>\n                                                        <td> cm. </td>\n                                                        <td> cm. </td>\n                                                        <td> cm. </td>\n                                                    </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                    <tr>\n                                                        <td> XS </td>\n                                                        <td> 38 </td>\n                                                        <td> 58 </td>\n                                                        <td> 13.5 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> S </td>\n                                                        <td> 41 </td>\n                                                        <td> 60 </td>\n                                                        <td> 14.5 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> M </td>\n                                                        <td> 44.0 </td>\n                                                        <td> 62 </td>\n                                                        <td> 15.5 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> L </td>\n                                                        <td> 47 </td>\n                                                        <td> 64 </td>\n                                                        <td> 16.5 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> XL </td>\n                                                        <td> 50 </td>\n                                                        <td> 66 </td>\n                                                        <td> 17.5 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> XXL </td>\n                                                        <td> 54</td>\n                                                        <td> 68</td>\n                                                        <td> 19.5 </td>\n                                                    </tr>\n                                                    \n                                                    </tbody>\n                                                </table>\n                                                </div>\n                                               \n                                            </div>\n                                            <div class=\"modal-footer\">\n                                                <button type=\"button\" class=\"btn btn-secondary btn-sm\" data-dismiss=\"modal\">Close</button>\n                                            </div>\n                                            </div>\n                                        </div>\n                                        </div>\n\n                                        <div class=\"modal fade\" id=\"exampleModalKids\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                                        <div class=\"modal-dialog\" role=\"document\">\n                                            <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"font-size:1.2em\">Kids's Round Neck Size </h5>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                                <span aria-hidden=\"true\">&times;</span>\n                                                </button>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                <div >\n                                                \n                                                <table>\n                                                    <thead>\n                                                    <tr>\n                                                        <th style=\"width:10%\"></th>\n                                                        <th style=\"width:25%\">CHEST</th>\n                                                        <th style=\"width:25%\">LENGTH</th>\n                                                        <th style=\"width:40%\" class=\"text-center\">SLEEVE LENGTH</th>\n                                                        <th style=\"width:0%\"></th>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> Size </td>\n                                                        <td> cm. </td>\n                                                        <td> cm. </td>\n                                                        <td> cm. </td>\n                                                    </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                    <tr>\n                                                        <td> XS </td>\n                                                        <td> 33 </td>\n                                                        <td> 43 </td>\n                                                        <td> 13 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> S </td>\n                                                        <td> 36.5 </td>\n                                                        <td> 46.0 </td>\n                                                        <td> 15 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> M </td>\n                                                        <td> 39.5 </td>\n                                                        <td> 49.5 </td>\n                                                        <td> 16.0 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> L </td>\n                                                        <td> 42 </td>\n                                                        <td> 53.5 </td>\n                                                        <td> 16.5 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> XL </td>\n                                                        <td> 44.5 </td>\n                                                        <td> 57 </td>\n                                                        <td> 17 </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td> XXL </td>\n                                                        <td> 47</td>\n                                                        <td> 61</td>\n                                                        <td> 18 </td>\n                                                    </tr>\n                                                   \n                                                    </tbody>\n                                                </table>\n                                                </div>\n                                               \n                                            </div>\n                                            <div class=\"modal-footer\">\n                                                <button type=\"button\" class=\"btn btn-secondary btn-sm\" data-dismiss=\"modal\">Close</button>\n                                            </div>\n                                            </div>\n                                        </div>\n                                        </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"font-weight:200;font-size:0.8em\"> Categories   </td>\n                                <td style=\"font-weight:500;font-size:0.8em\">  \n                                    <button type=\"button\" id=\"men2-btn\" class=\"btn btn-sm\" onclick=\"selectNHighlight('men2-btn');\"> Men </button>\n                                    <button type=\"button\" id=\"women-btn\" class=\"btn btn-sm\" onclick=\"selectNHighlight('women-btn');\"> Women </button>\n                                    <button type=\"button\" id=\"kids-btn\" class=\"btn btn-sm\" onclick=\"selectNHighlight('kids-btn');\"> Kids </button>  </td>\n                               \n                            </tr>\n                        </div>\n                    \n                        <div style=\"text-align:right\">\n\n                            <a class=\"btn btn-color \" id=\"btn-customize-roundneck\" (click)=\"onSelectRoundNeck('roundneck');\" href=\"/posts?/posts?style_code=99-RF-100112-190/SJ&style_name='Men's Round Neck Short Sleeve Tshirt-190'&isround=true\">\n                                            <i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i> Customize</a>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:16em;min-height:100%;\">\n\n\n  <!-- tabbed view for -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 \">\n        <h4> Summary for Administrators</h4>\n      </div>\n      <div class=\"col-lg-5\">\n        <a href=\"/api/logout\" class=\"btn btn-sm \" style=\"float:right;color:brown\"> Logout </a>\n      </div>\n    </div>\n    <br>\n    <div class=\"row m-y-2\">\n      <!--push-lg-4-->\n\n      <div class=\"col-lg-8 \">\n        <ul class=\"nav nav-tabs\">\n          <li class=\"nav-item\">\n            <a href=\"\" data-target=\"#profile\" data-toggle=\"tab\" class=\"nav-link active\"> Profile</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"\" data-target=\"#messages\" data-toggle=\"tab\" class=\"nav-link\"> Orders</a>\n          </li>\n          <li class=\"nav-item\">\n            <!--<a href=\"\" data-target=\"#edit\" data-toggle=\"tab\" class=\"nav-link\">Edit Profile</a>-->\n          </li>\n        </ul>\n        <div class=\"tab-content p-b-3\">\n          <div class=\"tab-pane active\" id=\"profile\">\n            <!--<h4 class=\"m-y-2\">{{userInfo.name}}</h4>-->\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                  \n              </div>\n              <div class=\"col-md-6\">\n                <!--<h6>Recent Tags</h6>\n                            <a href=\"\" class=\"tag tag-default tag-pill\">html5</a>-->\n\n              </div>\n              <div class=\"col-md-12\">\n                <h6 style=\"color:#EC9600;\"> Contact Information </h6>\n                <div class=\"row \" style=\"padding-left:15px\">\n                  \n                  <div class=\" col-md-8 col-sm-4\" class=\"wraptocenter\" style=\"display:inline!important\">\n                    <div class=\"card \" style=\"padding-left:0px;padding-right:0px;border:none\">\n                      <div class=\"card-block\" style=\"padding-bottom:0px\">\n                        <h6 class=\"card-title mb-2 text-muted\">Name : {{userInfo.name}}</h6>\n                        <div class=\"card-text\">\n                          <p text-muted> Email : {{userInfo.local.email}} </p>\n                          <p text-muted *ngIf=\"userInfo.phone\"> Mobile : {{userInfo.phone}} </p>\n                        </div>\n                      </div>\n                    </div>\n                    <br>\n                  </div>\n                </div>\n                <br>\n\n                <h6 style=\"color:#EC9600;\" *ngIf=\"Address && Address.length!=0 \"> Recently used address list </h6>\n                <div class=\"row \" style=\"padding-left:15px\">\n                  <div class=\"col-offset-2 col-md-8 col-sm-4\" *ngFor=\"let address of Address;let i = index\" class=\"wraptocenter\" style=\"display:inline!important\">\n                    <div class=\"card col-md-8 \" style=\"padding-left:0px;padding-right:0px;\">\n                      <div class=\"card-block\" style=\"padding-bottom:0px\">\n                        <h6 class=\"card-subtitle mb-2 text-muted\" style=\"color:#EC9600!important;\">Address # {{i+1}}</h6>\n                        <div class=\"card-text\">\n                          <p> {{address.title}} {{address.first_name}}\n                          </p>\n                          <p> {{address.address_line1}}, {{address.address_line2}} {{address.city}}, {{address.state}} - {{address.pincode}}</p>\n                        </div>\n                      </div>\n                    </div>\n                    <br>\n                  </div>\n                </div>\n\n\n                <!--<h4 class=\"m-t-2\"><span class=\"fa fa-clock-o ion-clock pull-xs-right\"></span> Recent Activity</h4>\n                            <table class=\"table table-hover table-striped\">\n                                <tbody>                                    \n                                   <tr *ngFor=\"let order of recentOrders\">\n                                      <td>\n                                        <span class=\"pull-xs-right font-weight-bold\" style=\"padding-right:3em\">{{order.updatedAt | date:'medium'}}</span>  {{order.displayName}} for Rs. {{order.wip_cost}}\n\n                                      </td>\n                                  </tr>\n\n                                  <tr *ngIf=\"!recentOrders\">\n                                      <td>\n                                        <span class=\"pull-xs-right font-weight-bold\" style=\"padding-right:3em;color:brown\"></span> There are recent orders from you.\n                                      </td>\n                                  </tr>\n                           \n                                </tbody>\n                            </table>-->\n              </div>\n            </div>\n            <!--/row-->\n          </div>\n          <div class=\"tab-pane\" id=\"messages\">\n            <h6 class=\"m-y-2\" style=\"color:#EC9600;\"><span class=\"fa fa-check-square-o pull-xs-right\"></span> Recent Orders</h6>\n\n            <table class=\"table table-hover table-striped\">\n              <tbody>\n                <tr *ngFor=\"let order of recentOrders\">\n                  <td>\n                    <!--<span class=\"pull-xs-right font-weight-bold\" style=\"padding-right:3em\">{{order.updatedAt | date:'short'}}</span>\n                                {{order.txnid}} OrderId #{{order.txnid}} for Rs. {{order.txnAmount}}-->\n\n                    <div class=\"card\">\n                      <div class=\"card-header\">\n                        <div class=\"row\">\n                          <div class=\"col \">\n                            <p> ORDER DATE </p>\n                            <p> {{order.updatedAt | date:'mediumDate'}} </p>\n                          </div>\n                          <div class=\"col \">\n                            <p> TOTAL </p>\n                            <p> &#8377; {{order.txnAmount}} </p>\n                          </div>\n                          <div class=\"col \">\n                            <p> SHIP TO </p>\n                            <p style=\"margin-bottom:0px\"> {{order.customer_details.first_name}} </p>\n                            <p style=\"margin-bottom:0px\"> {{order.billing_address.address_line1}}, {{order.billing_address.address_line2}}, {{order.billing_address.city}}\n                              </p>\n                            <p style=\"margin-bottom:0px\"> Mobile: {{order.billing_address.mobile}} </p>\n                          </div>\n                          <div class=\"col \">\n                            <span> ORDER # {{order.txnid}} </span>\n                          </div>\n\n                        </div>\n                      </div>\n                      <div class=\"card-block\">\n                        <div *ngFor=\"let wip of order.wip\">\n                          <div class=\"row\">\n                            <div class=\"col-sm-2 \">\n                              <img [src]=\"wip.designReferenceFile\" width=\"100\" height=\"100\" />\n                            </div>\n                            <div class=\"col \">\n                              <h5> {{wip.displayName}} </h5>\n                              <p> Cost : {{wip.wip_cost}} </p>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                  </td>\n                </tr>\n\n                <tr *ngIf=\"!recentOrders\">\n                  <td>\n                    <span class=\"pull-xs-right font-weight-bold\" style=\"padding-right:3em;color:brown\"></span> There are\n                    recent orders from you.\n                  </td>\n                </tr>\n\n              </tbody>\n            </table>\n\n            <hr>\n            <h6 class=\"m-y-2\" style=\"color:#EC9600;\"> <span class=\"fa fa-clock-o ion-clock pull-xs-right\"></span> Pending Designs</h6>\n            <!--<div class=\"alert alert-info alert-dismissable\">\n                        <a class=\"panel-close close\" data-dismiss=\"alert\">×</a> This is an <strong>.alert</strong>. Use this to show important messages to the user.\n                    </div>-->\n            <table class=\"table table-hover table-striped\">\n              <tbody>\n                <tr *ngFor=\"let order of recentDesigns\">\n                  <td>\n                    <span class=\"pull-xs-right font-weight-bold\" style=\"padding-right:3em\">{{order.updatedAt | date:'medium'}}</span>                    {{order.displayName}}.\n\n                  </td>\n                </tr>\n\n                <tr *ngIf=\"!recentDesigns\">\n                  <td>\n                    <span class=\"pull-xs-right font-weight-bold\" style=\"padding-right:3em;color:brown\"></span> There are\n                    recent orders from you.\n                  </td>\n                </tr>\n\n              </tbody>\n            </table>\n\n\n          </div>\n          <div class=\"tab-pane\" id=\"edit\">\n            <h4 class=\"m-y-2\">Edit Profile</h4>\n            <form role=\"form\">\n              <div class=\"form-group row\">\n                <label class=\"col-lg-3 col-form-label form-control-label\">First name</label>\n                <div class=\"col-lg-9\">\n                  <input class=\"form-control\" type=\"text\" value=\"Jane\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-lg-3 col-form-label form-control-label\">Last name</label>\n                <div class=\"col-lg-9\">\n                  <input class=\"form-control\" type=\"text\" value=\"Bishop\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-lg-3 col-form-label form-control-label\">Email</label>\n                <div class=\"col-lg-9\">\n                  <input class=\"form-control\" type=\"email\" value=\"email@gmail.com\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-lg-3 col-form-label form-control-label\">Company</label>\n                <div class=\"col-lg-9\">\n                  <input class=\"form-control\" type=\"text\" value=\"\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-lg-3 col-form-label form-control-label\">Website</label>\n                <div class=\"col-lg-9\">\n                  <input class=\"form-control\" type=\"url\" value=\"\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-lg-3 col-form-label form-control-label\">Address</label>\n                <div class=\"col-lg-9\">\n                  <input class=\"form-control\" type=\"text\" value=\"\" placeholder=\"Street\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-lg-3 col-form-label form-control-label\"></label>\n                <div class=\"col-lg-6\">\n                  <input class=\"form-control\" type=\"text\" value=\"\" placeholder=\"City\">\n                </div>\n                <div class=\"col-lg-3\">\n                  <input class=\"form-control\" type=\"text\" value=\"\" placeholder=\"State\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-lg-3 col-form-label form-control-label\">Time Zone</label>\n                <div class=\"col-lg-9\">\n                  <select id=\"user_time_zone\" class=\"form-control\" size=\"0\">\n                                    <option value=\"Hawaii\">(GMT-10:00) Hawaii</option>\n                                    <option value=\"Alaska\">(GMT-09:00) Alaska</option>\n                                    <option value=\"Pacific Time (US &amp; Canada)\">(GMT-08:00) Pacific Time (US &amp; Canada)</option>\n                                    <option value=\"Arizona\">(GMT-07:00) Arizona</option>\n                                    <option value=\"Mountain Time (US &amp; Canada)\">(GMT-07:00) Mountain Time (US &amp; Canada)</option>\n                                    <option value=\"Central Time (US &amp; Canada)\" selected=\"selected\">(GMT-06:00) Central Time (US &amp; Canada)</option>\n                                    <option value=\"Eastern Time (US &amp; Canada)\">(GMT-05:00) Eastern Time (US &amp; Canada)</option>\n                                    <option value=\"Indiana (East)\">(GMT-05:00) Indiana (East)</option>\n                                </select>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-lg-3 col-form-label form-control-label\">Username</label>\n                <div class=\"col-lg-9\">\n                  <input class=\"form-control\" type=\"text\" value=\"janeuser\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-lg-3 col-form-label form-control-label\">Password</label>\n                <div class=\"col-lg-9\">\n                  <input class=\"form-control\" type=\"password\" value=\"11111122333\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-lg-3 col-form-label form-control-label\">Confirm password</label>\n                <div class=\"col-lg-9\">\n                  <input class=\"form-control\" type=\"password\" value=\"11111122333\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-lg-3 col-form-label form-control-label\"></label>\n                <div class=\"col-lg-9\">\n                  <input type=\"reset\" class=\"btn btn-secondary\" value=\"Cancel\">\n                  <input type=\"button\" class=\"btn btn-primary\" value=\"Save Changes\">\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <!--<div class=\"col-lg-4 pull-lg-8 text-xs-center\">\n            <img src=\"//placehold.it/150\" class=\"m-x-auto img-fluid img-circle img-responsive rounded\" alt=\"avatar\">\n            <h6 class=\"m-t-2\">Upload a different photo</h6>\n            <label class=\"custom-file\">\n                <input type=\"file\" id=\"file\" class=\"custom-file-input\">\n                <span class=\"custom-file-control\">Choose file</span>\n            </label>\n        </div> Image for -->\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:16em;\">\n  <div id=\"loader\" style=\"display:none;\" ></div>\n  <div id=\"warning_msg\" class=\"alert alert-warning alert-dismissible\" style=\"display:none;\" role=\"alert\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n      <strong>Warning!</strong> Failed to save design. Try again.\n  </div>\n\n  <div id=\"success_msg\" class=\"alert alert-success alert-dismissible\" style=\"display:none;\" role=\"alert\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n    <strong>Success!</strong> Design saved and added to cart.\n  </div>\n\n\n  <div class=\"card \"  > \n     <div class=\"card-header\" >\n<!--\n        <div class=\"my-fancy-container\">\n            <span class='icon icon-file-text my-icon'></span>\n            <span class=\"my-text\">Hello World</span>\n            <div class=\"arrow-down\"></div>\n        </div>-->\n         <!-- \n           <button class=\"btn btn-sm\" onclick=\"Addtext();\" data-original-title=\"List\">\n             <i class=\"fa fa-font  my-icon\" aria-hidden=\"true\" style=\"color:black!important\"></i>\n            <span class=\"my-text\">Add Text</span>\n         </button>\n        \n\n        <button class=\"btn btn-sm\" onclick=\"Addtext();\" data-original-title=\"List\">\n          <figure>\n\t\t\t\t\t <i class=\"fa fa-font\" aria-hidden=\"true\" style=\"color:black!important\"></i>\n            <figcaption>Add Text</figcaption>\n          </figure>\n        </button>-->\n      \n\n       <!--<button class=\"btn btn-sm\" onclick=\"Addtext();\" data-original-title=\"List\">\n\t\t\t\t\t <i class=\"fa fa-font\" aria-hidden=\"true\" style=\"color:black!important\"></i>+</button>-->\n<!--\n        <button type=\"button\" id=\"bold-btn\" class=\"btn btn-sm\" data-original-title=\"Bold - Ctrl+B\" data-toggle=\"tooltip\" title=\"Bold\">\n            <i class=\"fa fa-bold my-icon\" style=\"color:black!important\" ></i>\n            <span class=\"my-text\">Bold</span>\n        </button>\n        <button type=\"button\" class=\"btn btn-sm btn-outline\" id=\"italic-btn\" data-original-title=\"Italic - Ctrl+I\" data-toggle=\"tooltip\"\n          title=\"Italic\">\n          <i class=\"fa fa-italic my-icon\" style=\"color:black!important\"></i>\n          <span class=\"my-text\">Italic</span>\n        </button>\n        <button type=\"button\" class=\"btn btn-default btn-sm\" id=\"underline-btn\" data-original-title=\"List\" data-toggle=\"tooltip\" title=\"Underline\">\n            <i class=\"fa fa-underline my-icon\" style=\"color:black!important\"></i>\n            <span class=\"my-text\">Underline</span>\n        </button>\n        <button type=\"button\" class=\"btn btn-default btn-sm\" id=\"strike-btn\" data-original-title=\"Img\" data-toggle=\"tooltip\" title=\"Strikethrough\">\n        <i class=\"fa fa-strikethrough my-icon\" style=\"color:black!important\" ></i>\n        <span class=\"my-text\">Strikethrough</span>\n        </button>-->\n\n        <!--<button type=\"button\" class=\"btn btn-default btn-sm\" data-toggle=\"tooltip\" title=\"Text Size\">\n            <i class=\"fa fa-text-height my-icon\" style=\"color:black!important\"></i>\n            <span class=\"my-text\">Text Height</span>\n        </button>\n        <input type=\"number\" value=\"10\" min=\"1\" max=\"120\" step=\"1\" style=\"min-width:2.5em;max-width:4em;display: inline-block;\" id=\"text-font-size\" class=\"form-control form-control-sm\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" data-toggle=\"tooltip\" title=\"Text Height\">\n            <i class=\"fa fa-text-width my-icon\" style=\"color:black!important\"></i>\n            <span class=\"my-text\">Text Width</span>\n        </button>\n        <input type=\"number\" value=\"4\" min=\"0\" max=\"10\" step=\"0.1\" style=\"min-width:2.5em;max-width:4em;display: inline-block;\" id=\"text-line-height\" class=\"form-control form-control-sm\">\n        <button class=\"btn btn-default btn-sm\" id=\"btnGroupDrop1\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Font\n        </button>\n        <select class=\"form-control form-control-sm \" name=\"FontStyleNumber\" id=\"FontStyleNumber\" style=\"display: inline-block;height:auto;border-radius:0px;width:10em\">\n                    <option style=\"height:auto;border-radius:0px !important\" value=\"Times New Roman\">Times New Roman</option>\n                    <option value=\"Arial\">Arial</option>\n                    <option value=\"Georgia\">Georgia</option>\n                    <option value=\"Hammersmith One\">Hammersmith One</option>\n                    <option value=\"Pacifico\">Pacifico</option>\n                    <option value=\"Anton\">Anton</option>\n                    <option value=\"Sigmar One\">Sigmar One</option>\n                    <option value=\"Righteous\">Righteous</option>\n                    <option value=\"Roboto\">Roboto</option>\n                    <option value=\"UnifrakturCook\" style=\"font-family:UnifrakturCook\">\n                    <span style=\"font:UnifrakturCook\">UnifrakturCook</span></option>\n        </select>-->\n       Design Tool\n       <span id=\"autosavestatus\" style=\"margin-left:4em;float:right\"> </span>\n      <div class=\"btn-group\" style=\"margin-left:10em\"  >\n\n          <!--<button class=\"btn btn-sm \" data-original-title=\"URL\">\n              Text <input type=\"color\" value=\"\" id=\"text-color\" >\n              </button>\n          <button class=\"btn btn-sm\" data-original-title=\"URL\">\n              Text-Background <input type=\"color\" value=\"\" id=\"text-lines-bg-color\" >\n              </button>\n          <button class=\"btn btn-sm\" data-original-title=\"URL\">\n              Stroke <input type=\"color\" value=\"\" id=\"text-stroke-color\" >\n              </button>\n          <button class=\"btn btn-sm\" data-original-title=\"URL\">\n              Background <input type=\"color\" value=\"\" id=\"text-bg-color\">\n          </button>-->\n\n        \n      <!--<div class=\"btn-group\">-->\n        <!--<button class=\"btn btn-sm \">\n          <i class=\"fa fa-picture-o my-icon\" style=\"color:black!important\"></i>  <span class=\"my-text\">Image</span> <input type=\"file\" id=\"file_upload\" (change)=\"fileChange($event)\" hidden>\n        </button>-->\n  \n        <!--<button class=\"btn btn-sm\" onclick=\"sendSelectedObjectToFront()\"> <i class=\"fa fa-reply my-icon\" aria-hidden=\"true\" style=\"color:black!important\"></i>&nbsp; <span class=\"my-text\">Bring front</span> </button>\n        <button class=\"btn btn-sm\" onclick=\"sendSelectedObjectBack()\"> <i class=\"fa fa-share\" aria-hidden=\"true\" style=\"color:black!important\"></i>&nbsp;<span class=\"my-text\"> Send back </span> </button>\n        <button class=\"btn  btn-sm btn-danger \" id=\"delete\"><i class=\"fa fa-trash-o \" aria-hidden=\"true\" ></i> &nbsp;  <span class=\"my-text\">Delete</span></button>\n        <button class=\"btn btn-sm btn-success\" onclick=\"downloadImage();\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>&nbsp; \n         <span class=\"my-text\">Save</span> </button>-->\n       <!--</div>-->\n      </div>\n    </div>\n    <div class=\"card-block\">\n\n        <!-- Text Toolbar -->\n        <div class=\"row\">\n          <div class=\"col col-sm-3 col-md-3 col-lg-2\">\n            <div class=\"btn-group-vertical\" >\n              <div class=\"input-group input-group-header\" >\n                <p class=\"text-center\" style=\"    width: inherit;\"  >\n                  <a class=\"btn btn-sm btn-image-filter text-left\" onclick=\"Addtext();\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Add a New Text Field\">         \n                         <i class=\"fa fa-font \" aria-hidden=\"true\" style=\"color:white!important\"></i>\n                          &nbsp; &nbsp; &nbsp;New Text Field\n                  </a>\n                </p>\n              </div>\n             <div class=\"input-group input-group-header\" id=\"font-header\" >\n                <p class=\"text-center\" style=\" width: inherit;\" onclick=\"showFontFormatting();\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Make text bold, italics\">\n                  <a class=\"btn btn-sm btn-image-filter text-left\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTextStyling\" aria-expanded=\"true\" aria-controls=\"collapseTextStyling\">\n                   <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>&nbsp; &nbsp; &nbsp; Font Formatting\n                  </a>\n                </p>\n              </div>\n              <div class=\"input-group input-group-header border-style\"  >\n                <p class=\"text-center\" style=\"    width: inherit;\" onclick=\"showFontStyling();\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Adjust text size and width\">\n                  <a class=\"btn btn-sm btn-image-filter text-left\" data-toggle=\"collapse\" data-parent=\"#accordion\"  href=\"#collapseFontFamily\" aria-expanded=\"false\" aria-controls=\"collapseFontFamily\">\n                   <i class=\"fa fa-text-height\" aria-hidden=\"true\"></i>&nbsp; &nbsp; &nbsp; Font Size\n                  </a>\n                </p>\n              </div>\n              <div class=\"input-group input-group-header\" >\n                <p class=\"text-center\" style=\"    width: inherit;\"  onclick=\"showFontColours();\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Adjust text colours, background\">\n                  <a class=\"btn btn-sm btn-image-filter text-left\" data-toggle=\"collapse\" data-parent=\"#accordion\"  href=\"#collapseFontColours\" aria-expanded=\"false\" aria-controls=\"collapseFontColours\">\n                   <i class=\"fa fa-paint-brush\" aria-hidden=\"true\"></i>&nbsp; &nbsp; &nbsp; Font Colours\n                  </a>\n                </p>\n              </div>\n\n              <div class=\"input-group input-group-header\" >\n                <div class=\"text-left\" style=\"    width: inherit;\">\n                  <!--<button class=\"btn btn-sm btn-image-filter text-center btn-file\" >         \n                    <i class=\"fa fa-picture-o \" style=\"\"></i>\n                      \n                    <input type=\"file\" id=\"file_upload\" style=\"width:3em!important;display:none\" (change)=\"fileChange($event)\" >\n                  </button>-->\n                  <label class=\"btn  btn-sm btn-default btn-file btn-image-filter text-left\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"upload images\">\n                      <i class=\"fa fa-picture-o \" style=\"\"></i> &nbsp; &nbsp; &nbsp;Upload Image <input type=\"file\" id=\"file_upload\" (change)=\"fileChange($event)\" hidden>\n                  </label>\n                </div>\n              </div>\n              <div class=\"input-group input-group-header\"  style=\"background:#C42847!important;\">\n                <p class=\"text-center\" style=\"    width: inherit;\">\n                  <a class=\"btn btn-sm btn-image-filter text-left\" data-toggle=\"collapse\" href=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                    Enable Image Filters \n                  </a>\n                </p>\n              </div>\n\n               <div class=\"collapse show\" id=\"collapseExample\">\n\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\" style=\"width:100%; text-align: left;\">\n                      <p>\n                        <input type=\"checkbox\" id=\"grayscale\" disabled  aria-label=\"Checkbox for following text input\">\n                        GreyScale\n                      </p>\n                    </span>\n                  </div>\n\n                  <div class=\"input-group\" id=\"invert-header\">\n                    <span class=\"input-group-addon\" style=\"width:100%; text-align: left;\">\n                      <p>\n                        <input type=\"checkbox\" id=\"invert\" disabled>\n                        Invert\n                      </p>\n                      </span>\n                  </div>\n                  <!--<div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                          <input type=\"checkbox\" id=\"invert\" disabled>\n                        </span>\n                    <span class=\"input-group-addon\" style=\"width:100%; text-align: left;\">Invert</span>\n                  </div>-->\n\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\" style=\"width:100%; text-align: left;\">\n                      <p>\n                          <input type=\"checkbox\" id=\"sepia\" disabled>\n                          Sepia\n                          <!--<span class=\"input-group-addon\" style=\"width:100%;text-align: left;\">Sepia</span>-->\n                      </p>\n                    </span>\n                  </div>\n\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                      <p>\n                          <input type=\"checkbox\" id=\"sepia2\" disabled>\n                          Sepia-2\n                      </p>\n                        </span>\n                    <!--<span class=\"input-group-addon\" style=\"width:100%;text-align: left;\">Sepia-2</span>-->\n                  </div>\n              \n                  <div class=\"input-group\">\n                      <span class=\"input-group-addon\" style=\"width:100% !important;\">\n                          <p style=\"width: inherit;text-align:left;width:100%!important;margin-bottom:8px\">\n                            <input type=\"checkbox\" id=\"brightness\" disabled>\n                            Brightness\n                          </p>\n                          <p style=\"margin-left:18px;margin-bottom:0px\">\n                            <input type=\"range\" id=\"brightness-value\" value=\"100\" min=\"-255\" max=\"255\" disabled style=\"display:none;width:100%!important\"> \n                          </p>\n                        </span>\n                  </div>\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                      <p style=\"width: inherit;text-align:left;width:100%!important;margin-bottom:8px\">\n                          <input type=\"checkbox\" id=\"contrast\" disabled>\n                          Contrast\n                      </p>\n                                      \n                      <p style=\"margin-left:18px;margin-bottom:0px\">\n                        <input type=\"range\" id=\"contrast-value\" value=\"0\" min=\"-255\" max=\"255\" disabled style=\"display:none;width:100%!important\">\n                      </p>\n                    </span>\n                  </div>\n\n                  <!--<div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                          <input type=\"checkbox\" id=\"contrast\" disabled>\n                    </span>\n                    <span class=\"input-group-addon\" style=\"width:100%\">Contrast</span>\n                    <p>\n                      <span class=\"input-group-addon\" style=\"font-size:0.5em;margin-bottom:-0.5em\">Value</span>\n                      <input type=\"range\" id=\"contrast-value\" value=\"0\" min=\"-255\" max=\"255\" disabled>\n                    </p>\n                  </div>-->\n\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                      <p style=\"width: inherit;text-align:left;width:100%!important;margin-bottom:8px\">\n                          <input type=\"checkbox\" id=\"saturate\" disabled > Saturate\n                      </p>\n                        <p style=\"margin-left:18px;margin-bottom:0px\">\n                          <input type=\"range\" id=\"saturate-value\" value=\"0\" min=\"-255\" max=\"255\" disabled style=\"display:none;width:100%!important\">\n                        </p>\n                    </span>\n                  </div>\n               </div>\n\n            </div>\n          </div>\n\n          <!-- start of Canvas offset-sm-2 col col-sm-6 col-md-6 col-lg-2-->\n          <div class=\" col col-sm-3 col-md-2 col-lg-4 \" style=\"width:100%;\">\n            <div style=\"height:44px !important;padding-left:4.2em;min-width:100%;\">\n              <div class=\"btn-group\" id=\"accordion\">\n                  <div class=\"collapse show\" id=\"collapseTextStyling\">\n                    <div class=\"btn-group\">\n                      <button type=\"button\" id=\"bold-btn\" class=\"btn btn-sm\" data-original-title=\"Bold - Ctrl+B\" data-toggle=\"tooltip\" title=\"Bold\">\n                          <i class=\"fa fa-bold my-icon\" style=\"color:black!important\" ></i>\n                          <span class=\"my-text\">Bold</span>\n                      </button>\n                      <button type=\"button\" class=\"btn btn-sm btn-outline\" id=\"italic-btn\" data-original-title=\"Italic - Ctrl+I\" data-toggle=\"tooltip\"\n                          title=\"Italic\">\n                          <i class=\"fa fa-italic my-icon\" style=\"color:black!important\"></i>\n                          <span class=\"my-text\">Italic</span>\n                      </button>\n                      <button type=\"button\" class=\"btn btn-default btn-sm\" id=\"underline-btn\" data-original-title=\"List\" data-toggle=\"tooltip\" title=\"Underline\">\n                          <i class=\"fa fa-underline my-icon\" style=\"color:black!important\"></i>\n                          <span class=\"my-text\">Underline</span>\n                      </button>\n                      <button type=\"button\" class=\"btn btn-default btn-sm\" id=\"strike-btn\" data-original-title=\"Img\" data-toggle=\"tooltip\" title=\"Strikethrough\">\n                          <i class=\"fa fa-strikethrough my-icon\" style=\"color:black!important\" ></i>\n                          <span class=\"my-text\">Strikethrough</span>\n                      </button>\n                    </div>\n                  </div>\n\n                  <div class=\"collapse\" id=\"collapseFontFamily\">\n                    <div class=\"btn-group\">\n                      <button type=\"button\" class=\"btn btn-default btn-sm\" data-toggle=\"tooltip\" title=\"Text Size\">\n                          <i class=\"fa fa-text-height my-icon\" style=\"color:black!important\"></i>\n                          <span class=\"my-text\">Text Height</span>\n                      </button>\n                      <input type=\"number\" value=\"10\" min=\"1\" max=\"120\" step=\"1\" style=\"min-width:2.5em;max-width:4em;display: inline-block;\" id=\"text-font-size\" class=\"form-control form-control-sm\">\n                      <button type=\"button\" class=\"btn btn-default btn-sm\" data-toggle=\"tooltip\" title=\"Text Height\">\n                          <i class=\"fa fa-text-width my-icon\" style=\"color:black!important\"></i>\n                          <span class=\"my-text\">Text Width</span>\n                      </button>\n                      <input type=\"number\" value=\"4\" min=\"0\" max=\"10\" step=\"0.1\" style=\"min-width:2.5em;max-width:4em;display: inline-block;\" id=\"text-line-height\" class=\"form-control form-control-sm\">\n                      <button class=\"btn btn-default btn-sm\" id=\"btnGroupDrop1\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        Font\n                      </button>\n                          <select class=\"form-control form-control-sm \" name=\"FontStyleNumber\" id=\"FontStyleNumber\" style=\"display: inline-block;height:auto;border-radius:0px;width:10em\">\n                                      <option style=\"height:auto;border-radius:0px !important\" value=\"Times New Roman\">Times New Roman</option>\n                                      \n                                      <option value=\"Acme\" style=\"font-family: 'Acme', sans-serif;\">\n                                        <span style=\"font-family: 'Acme', sans-serif;\">Acme</span>\n                                      </option>\n\n                                      <option value=\"Allura\" style=\"font-family: 'Allura', cursive;\">\n                                        <span style=\"font-family: 'Allura', cursive;\">Allura</span>\n                                      </option>\n\n                                      <option value=\"Amatic SC\" style=\"font-family: 'Amatic SC', cursive;\">\n                                        <span style=\"font-family: 'Amatic SC', cursive;\">Amatic SC</span>\n                                      </option>\n\n                                    <option value=\"Audiowide\" style=\"font-family: 'Audiowide', cursive;\">\n                                          <span style=\"font-family: 'Audiowide', cursive;\">Acme</span>\n                                      </option>\n                                      <option value=\"'Bitter'\" style=\"font-family: 'Bitter', serif;\">\n                                          <span style=\"font-family: 'Bitter', serif\">Bitter</span>\n                                      </option>\n                                      <option value=\"'Caveat'\" style=\"font-family: 'Caveat', cursive;\">\n                                          <span style=\"font-family: 'Caveat', cursive;\">Caveat</span>\n                                      </option>\n                                      <option value=\"'Chewy'\" style=\"font-family: 'Chewy', cursive;\">\n                                          <span style=\"font-family: 'Chewy', cursive;\">Chewy</span>\n                                      </option>\n                                      <option value=\"'Cookie'\" style=\"font-family: 'Cookie', cursive;\">\n                                          <span style=\"font-family: 'Cookie', cursive;\">Cookie</span>\n                                      </option>\n                                      <option value=\"'Courgette', cursive\" style=\"font-family: 'Courgette', cursive;\">\n                                          <span style=\"font-family: 'Courgette', cursive;\">Courgette</span>\n                                      </option>\n                                      <option value=\"'Covered By Your Grace', cursive\" style=\"font-family: 'Covered By Your Grace', cursive;\">\n                                          <span style=\"font-family: 'Covered By Your Grace', cursive;\">Covered By Your Grace</span>\n                                      </option>\n                                      <option value=\"'Damion', cursive\" style=\"font-family: 'Damion', cursive;\">\n                                          <span style=\"font-family: 'Damion', cursive;\">Damion</span>\n                                      </option>\n                                      <option value=\"'Dancing Script', cursive\" style=\"font-family: 'Dancing Script', cursive;\">\n                                          <span style=\"font-family: 'Dancing Script', cursive;\">Dancing Script</span>\n                                      </option>\n                                      <option value=\"'Dosis', sans-serif\" style=\"font-family: 'Dosis', sans-serif;\">\n                                          <span style=\"font-family: 'Dosis', sans-serif;\">Dosis</span>\n                                      </option>\n                                      <option value=\"'Exo', sans-serif\" style=\"font-family: 'Exo', sans-serif;\">\n                                          <span style=\"font-family: 'Exo', sans-serif;\">Exo</span>\n                                      </option>\n                                      <option value=\"'Freckle Face', cursive\" style=\"font-family: 'Freckle Face', cursive;\">\n                                          <span style=\"font-family: 'Freckle Face', cursive;\">Freckle Face</span>\n                                      </option>\n                                      <option value=\"'Fresca', sans-serif\" style=\"font-family: 'Fresca', sans-serif;\">\n                                          <span style=\"font-family: 'Fresca', sans-serif;\">Fresca</span>\n                                      </option>\n                                      <option value=\"'Gloria Hallelujah', cursive\" style=\"font-family: 'Gloria Hallelujah', cursive;\">\n                                          <span style=\"font-family: 'Gloria Hallelujah', cursive;\">Gloria Hallelujah</span>\n                                      </option>\n                                      <option value=\"'Great Vibes', cursive\" style=\"font-family: 'Great Vibes', cursive;\">\n                                          <span style=\"font-family: 'Great Vibes', cursive;\">Great Vibes</span>\n                                      </option>\n                                      <option value=\"'Handlee', cursive\" style=\"font-family: 'Handlee', cursive;\">\n                                          <span style=\"font-family: 'Handlee', cursive;\">Handlee</span>\n                                      </option>\n                                      <option value=\"'Homemade Apple', cursive\" style=\"font-family: 'Homemade Apple', cursive;\">\n                                          <span style=\"font-family: 'HaHomemade Applendlee', cursive;\">Homemade Apple</span>\n                                      </option>\n                                      <option value=\"'Indie Flower', cursive\" style=\"font-family: 'Indie Flower', cursive;\">\n                                          <span style=\"font-family: 'Indie Flower', cursive;\">Indie Flower</span>\n                                      </option>\n                                      <option value=\"'Julius Sans One', sans-serif\" style=\"font-family: 'Julius Sans One', sans-serif;\">\n                                          <span style=\"font-family: 'Julius Sans One', sans-serif;\">Julius Sans One</span>\n                                      </option>\n                                      <option value=\"'Just Another Hand', cursive\" style=\"font-family: 'Just Another Hand', cursive;\">\n                                          <span style=\"font-family: 'Just Another Hand', cursive;\">Just Another Hand</span>\n                                      </option>\n                                      <option value=\"'Lobster', cursive\" style=\"font-family: 'Lobster', cursive;\">\n                                          <span style=\"font-family: 'Lobster', cursive;\">Lobster</span>\n                                      </option>\n                                      <option value=\"'Lobster Two', cursive\" style=\"font-family: 'Lobster Two', cursive;\">\n                                          <span style=\"font-family: 'Lobster Two', cursive;\">Lobster Two</span>\n                                      </option>\n                                      <option value=\"'Luckiest Guy', cursive\" style=\"font-family: 'Luckiest Guy', cursive;\">\n                                          <span style=\"font-family: 'Luckiest Guy', cursive;\">Luckiest Guy</span>\n                                      </option>\n                                      <option value=\"'Marck Script', cursive\" style=\"font-family: 'Marck Script', cursive;\">\n                                          <span style=\"font-family: 'Marck Script', cursive;\">Marck Script</span>\n                                      </option>\n                                      <option value=\"'Niconne', cursive\" style=\"font-family: 'Niconne', cursive;\">\n                                          <span style=\"font-family: 'Niconne', cursive;\">Niconne</span>\n                                      </option>\n                                      <option value=\"'Nunito', sans-serif\" style=\"font-family: 'Nunito', sans-serif;\">\n                                          <span style=\"font-family: 'Nunito', sans-serif;\">Nunito</span>\n                                      </option>\n                                      <option value=\"'Old Standard TT', serif\" style=\"font-family: 'Old Standard TT', serif;\">\n                                          <span style=\"font-family: 'Old Standard TT', serif;\">Old Standard TT</span>\n                                      </option>\n                                      <option value=\"'Open Sans', sans-serif\" style=\"font-family: 'Open Sans', sans-serif;\">\n                                          <span style=\"font-family: 'Open Sans', sans-serif;\">Open Sans</span>\n                                      </option>\n                                      <option value=\"'Oswald', sans-serif\" style=\"font-family: 'Oswald', sans-serif;\">\n                                          <span style=\"font-family: 'Oswald', sans-serif;\">Oswald</span>\n                                      </option>\n                                      <option value=\"'Pacifico', cursive\" style=\"font-family: 'Pacifico', cursive;\">\n                                          <span style=\"font-family: 'Pacifico', cursive;\">Pacifico</span>\n                                      </option>\n                                      <option value=\"'Permanent Marker', cursive\" style=\"font-family: 'Permanent Marker', cursive;\">\n                                          <span style=\"font-family: 'Permanent Marker', cursive;\">Permanent Marker</span>\n                                      </option>\n                                      <option value=\"'Plaster', cursive\" style=\"font-family: 'Plaster', cursive;\">\n                                          <span style=\"font-family: 'Plaster', cursive;\">Plaster</span>\n                                      </option>\n                                      <option value=\"'Playball', cursive\" style=\"font-family: 'Playball', cursive;\">\n                                          <span style=\"font-family: 'Playball', cursive;\">Playball</span>\n                                      </option>\n                                      <option value=\"'Quantico', sans-serif\" style=\"font-family: 'Quantico', sans-serif;\">\n                                          <span style=\"font-family: 'Quantico', sans-serif;\">Quantico</span>\n                                      </option>\n                                      <option value=\"'Quicksand', sans-serif\" style=\"font-family: 'Quicksand', sans-serif;\">\n                                          <span style=\"font-family: 'Quicksand', sans-serif;\">Quicksand</span>\n                                      </option>\n                                      <option value=\"'Reenie Beanie', cursive\" style=\"font-family: 'Reenie Beanie', cursive;\">\n                                          <span style=\"font-family: 'Reenie Beanie', cursive;\">Reenie Beanie</span>\n                                      </option>\n                                      <option value=\"'Righteous', cursive\" style=\"font-family: 'Righteous', cursive;\">\n                                          <span style=\"font-family: 'Righteous', cursive;\">Righteous</span>\n                                      </option>\n                                      <option value=\"'Rock Salt', cursive\" style=\"font-family: 'Rock Salt', cursive;\">\n                                          <span style=\"font-family: 'Rock Salt', cursive;\">Rock Salt</span>\n                                      </option>\n                                      <option value=\"'Rokkitt', serif\" style=\"font-family: 'Rokkitt', serif;\">\n                                          <span style=\"font-family: 'Rokkitt', serif;\">Rokkitt</span>\n                                      </option>\n                                      <option value=\"'Satisfy', cursive\" style=\"font-family: 'Satisfy', cursive;\">\n                                          <span style=\"font-family: 'Satisfy', cursive;\">Satisfy</span>\n                                      </option>\n                                      <option value=\"'Shadows Into Light Two', cursive\" style=\"font-family: 'Shadows Into Light Two', cursive;\">\n                                          <span style=\"font-family: 'SatisfShadows Into Light Twoy', cursive;\">Shadows Into Light Two</span>\n                                      </option>\n                                      <option value=\"'Shrikhand', cursive\" style=\"font-family: 'Shrikhand', cursive;\">\n                                          <span style=\"font-family: 'Shrikhand', cursive;\">Shrikhand</span>\n                                      </option>\n                                      <option value=\"'Ubuntu Mono', monospace\" style=\"font-family: 'Ubuntu Mono', monospace;\">\n                                          <span style=\"font-family: 'Ubuntu Mono', monospace;\">Ubuntu Mono</span>\n                                      </option>\n                                      <option value=\"'Yanone Kaffeesatz', sans-serif\" style=\"font-family: 'Yanone Kaffeesatz', sans-serif;\">\n                                          <span style=\"font-family: 'Yanone Kaffeesatz', sans-serif;\">Yanone Kaffeesatz</span>\n                                      </option>\n\n                                 \n\n                                      <option value=\"Arial\">Arial</option>\n                                      <option value=\"Georgia\">Georgia</option>\n                                      <option value=\"Hammersmith One\">Hammersmith One</option>\n                                      <option value=\"Pacifico\">Pacifico</option>\n                                      <option value=\"Anton\">Anton</option>\n                                      <option value=\"Sigmar One\">Sigmar One</option>\n                                      <option value=\"Righteous\">Righteous</option>\n                                      <option value=\"Roboto\">Roboto</option>\n                                      <option value=\"UnifrakturCook\" style=\"font-family:UnifrakturCook\">\n                                        <span style=\"font:UnifrakturCook\">UnifrakturCook</span>\n                                      </option>\n\n                          </select>\n                    </div>\n                  </div>\n                  <div class=\"collapse\" id=\"collapseFontColours\"  >\n                    <div class=\"btn-group\" style=\"height:44px !important; \">\n  \n                    <!--<label class=\"btn btn-default btn-sm  text-left\">\n                        Text-Color <input type=\"color\" value=\"\" id=\"text-color\" hidden >\n                    </label>-->\n\n                    <button class=\"btn btn-default btn-sm \" data-original-title=\"URL\">\n                        Text <input type=\"color\" value=\"\" id=\"text-color\" >\n                    </button>\n                    <button class=\"btn btn-default btn-sm\" data-original-title=\"URL\">\n                        Text-Background <input type=\"color\" value=\"\" id=\"text-lines-bg-color\" >\n                        </button>\n                    <button class=\"btn btn-default btn-sm\" data-original-title=\"URL\">\n                        Stroke <input type=\"color\" value=\"\" id=\"text-stroke-color\" >\n                        </button>\n                    <button class=\"btn btn-default btn-sm\" data-original-title=\"URL\">\n                        Background <input type=\"color\" value=\"\" id=\"text-bg-color\">\n                    </button>\n                    </div>\n                  </div>\n              </div>\n            </div>\n            <div crossOrigin='anonymous' id=\"design-area\" class=\"\" style=\" width:100%;padding-left:6em;padding-top:0.5em\">\n              <!--<img crossOrigin='Anonymous' src={{imagePath.changingThisBreaksApplicationSecurity}} style=\"width:400px;height:300px\"/>-->\n              <canvas id=\"canvas\" height=\"400\" width=\"350\" style=\" display:block;\">\n              </canvas>\n            </div>\n\n            <div style=\"padding-left:4.2em; position: absolute;bottom: 0px;\">\n              <div class=\"btn-group \" >\n                  <button class=\"btn btn-sm btn-sm-action\" onclick=\"sendSelectedObjectToFront()\"> <i class=\"fa fa-reply my-icon\" aria-hidden=\"true\" style=\"color:black!important\"></i>&nbsp; <span class=\"my-text\">Bring front</span> </button>\n                  <button class=\"btn btn-sm btn-sm-action\" onclick=\"sendSelectedObjectBack()\"> <i class=\"fa fa-share\" aria-hidden=\"true\" style=\"color:black!important\"></i>&nbsp;<span class=\"my-text\"> Send back </span> </button>\n                  <button class=\"btn  btn-sm  btn-sm-action\" style=\"color:black!important\" id=\"delete\"><i class=\"fa fa-trash-o \" style=\"color:black!important\"  aria-hidden=\"true\" ></i> &nbsp;  <span class=\"my-text\">Delete</span></button>\n                  <button class=\"btn btn-sm btn-success btn-sm-action\" style=\"color:black!important\"  (click)=\"saveDesign()\" ><i class=\"fa fa-floppy-o\" style=\"color:black!important\" aria-hidden=\"true\"></i>&nbsp; \n                  <span class=\"my-text\">Save</span> </button>\n                  <a href=\"/cart\" class=\"btn btn-sm btn-sm-action\" style=\"background:rgba(255, 165, 32, 0.87);color:black!important\" ><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\" style=\"color:black!important\"></i>&nbsp; \n                  <span class=\"my-text\">Checkout</span> </a>\n                  <!--\n                    onclick=\"downloadImage();\"\n                    <button class=\"btn btn-sm btn-sm-action\" style=\"width:100%;color:black!important\" ><i class=\"fa fa-cloud\" aria-hidden=\"true\" style=\"color:black!important\"></i>&nbsp; \n                  <span class=\"my-text\">Saved</span> </button>-->\n              </div>\n\n            </div>\n          </div>\n          <!-- ENd of Canvas -->\n\n        </div>\n    </div>\n</div>\n\n<div class=\"container\" style=\"margin-top:2em\">\n  <h6> Supported Fonts</h6>\n  <div >\n    <p style=\"font-size:0.8em\">\n      <span style=\"font-family: 'Acme', sans-serif;\"> Acme </span>\n      <span style=\"font-family: 'Allura', cursive;\">Allura </span>\n      <span style=\"font-family: 'Amatic SC', cursive;\">Amatic SC</span>\n      <span style=\"font-family: 'Bitter', serif;\">Bitter</span>\n      <span style=\"font-family: 'Caveat', cursive;\">Caveat</span>\n<span style=\"font-family: 'Chewy', cursive;\"> Chewy</span>\n<span style=\"font-family: 'Cookie', cursive;\"> Cookie</span>\n<span style=\"font-family: 'Courgette', cursive;\"> Courgette</span>\n<span style=\"font-family: 'Covered By Your Grace', cursive;\"> Covered By Your Grace </span>\n<span style=\"font-family: 'Damion', cursive;\"> Damion </span>\n<span style=\"font-family: 'Dancing Script', cursive;\">Dancing Script </span>\n<span style=\"font-family: 'Dosis', sans-serif;\"> Dosis</span>\n<span style=\"font-family: 'Exo', sans-serif;\"> Exo</span>\n<span style=\"font-family: 'Freckle Face', cursive;\"> Freckle Face</span>\n<span style=\"font-family: 'Fresca', sans-serif;\"> Fresca</span>\n<span style=\"font-family: 'Gloria Hallelujah', cursive;\"> Gloria Hallelujah</span>\n<span style=\"font-family: 'Great Vibes', cursive;\">Great Vibes </span>\n<span style=\"font-family: 'Handlee', cursive;\"> Handlee</span>\n<span style=\"font-family: 'Homemade Apple', cursive;\">Homemade Apple </span>\n<span style=\"font-family: 'Indie Flower', cursive;\"> Indie Flower</span>\n<span style=\"font-family: 'Josefin Slab', serif;\"> Josefin Slab</span>\n<span style=\"font-family: 'Julius Sans One', sans-serif;\">Julius Sans One </span>\n<span style=\"font-family: 'Just Another Hand', cursive;\">Just Another Hand </span>\n<span style=\"font-family: 'Lobster', cursive;\"> Lobster</span>\n<span style=\"font-family: 'Lobster Two', cursive;\"> Lobster Two</span>\n<span style=\"font-family: 'Luckiest Guy', cursive;\"> Luckiest Guy </span>\n<span style=\"font-family: 'Marck Script', cursive;\"> Marck Script </span>\n<span style=\"font-family: 'Niconne', cursive;\"> Niconne</span>\n<span style=\"font-family: 'Nunito', sans-serif;\"> Nunito </span>\n<span style=\"font-family: 'Old Standard TT', serif;\"> Old Standard TT</span>\n<span style=\"font-family: 'Open Sans', sans-serif;\"> Open Sans </span>\n<span style=\"font-family: 'Oswald', sans-serif;\">Oswald </span>\n<span style=\"font-family: 'Pacifico', cursive;\">Pacifico </span>\n<span style=\"font-family: 'Permanent Marker', cursive;\"> Permanent Marker</span>\n<span style=\"font-family: 'Plaster', cursive;\"> Plaster</span>\n<span style=\"font-family: 'Playball', cursive;\">Playball </span>\n<span style=\"font-family: 'Quantico', sans-serif;\">Quantico </span>\n<span style=\"font-family: 'Quicksand', sans-serif;\"> Quicksand</span>\n<span style=\"font-family: 'Reenie Beanie', cursive;\">Reenie Beanie </span>\n<span style=\"font-family: 'Righteous', cursive;\"> Righteous</span>\n<span style=\"font-family: 'Roboto', sans-serif;\"> Roboto</span>\n<span style=\"font-family: 'Roboto Mono', monospace;\">Roboto Mono </span>\n<span style=\"font-family: 'Rock Salt', cursive;\"> Rock Salt</span>\n<span style=\"font-family: 'Rokkitt', serif;\"> Rokkitt</span>\n<span style=\"font-family: 'Satisfy', cursive;\"> Satisfy </span>\n<span style=\"font-family: 'Shadows Into Light Two', cursive;\"> Shadows Into Light Two </span>\n<span style=\"font-family: 'Shrikhand', cursive;\"> Shrikhand</span>\n<span style=\"font-family: 'Ubuntu Mono', monospace;\">Ubuntu Mono </span>\n<span style=\"font-family: 'Yanone Kaffeesatz', sans-serif;\"> Yanone Kaffeesatz</span>\n    </p>\n  </div>\n    <div class=\"invisible-fonts\" style=\"font-family: 'Acme', sans-serif;\">Acme</div>\n    <div class=\"invisible-fonts\" style=\"font-family: 'Allura', cursive;\">Allura</div>\n    <div class=\"invisible-fonts\" style=\"font-family: 'Amatic SC', cursive;\">Amatic SC</div>\n    <div class=\"invisible-fonts\" style=\"font-family: 'Bitter', serif;\">Bitter</div>\n    <div class=\"invisible-fonts\" style=\"font-family: 'Caveat', cursive;\">Caveat</div>\n    \n</div>"

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:16em;\">\n  \n  <h3 style=\"text-align:left\">Privacy Policy</h3>\n\n  <p> Your privacy is important to BornArtist Enterprises.  </p>\n  \n  <p>\n    This privacy statement provides information about the personal information that BornArtist Enterprises collects, and the ways in which BornArtist Enterprises uses that personal information.\n  </p>\n\n\n<h4> Personal information collection </h4>\n\nBorn Artist Enterprises may collect and use the following kinds of personal information: \n\n<ul>\n  <li>\n    information about your use of this website\n  </li>\n  <li>\n    information that you provide using for the purpose of registering with the website\n  </li>\n    <li>\n      information about transactions carried out over this website\n  </li>\n    <li>\n      any other information that you send to BornArtist Enterprises.\n  </li>\n</ul>\n\n<!--[information that you provide using for the purpose of registering with the website (including [INSERT DETAILS]);]\n[information about transactions carried out over this website (including [INSERT DETAILS]);] \n[information that you provide for the purpose of subscribing to the website services (including [INSERT DETAILS]); and]\n[any other information that you send to BornArtist Enterprises.]-->\n\n<h4> Using personal information </h4>\n<p>\nBornArtist Enterprises may use your personal information to: \n</p>\n\n<ul>\n  <li> administer this website </li>\n  <li> personalize the website for you </li>\n  <li> enable your access to and use of the website services </li>\n  <li> send to you products that you purchase</li>\n  <li> supply to you services that you purchase</li>\n  <li> collect payments from you</li>\n  <li> send you marketing communications</li>\n  <!--<li> </li>\n  <li> </li>-->\n</ul>\n<!--[administer this website;]\n[personalize the website for you;]\n[enable your access to and use of the website services;]\n[publish information about you on the website;]\n[send to you products that you purchase;]\n[supply to you services that you purchase;]\n[send to you statements and invoices;]\n[collect payments from you; and]\n[send you marketing communications.]-->\n\n<p>Where Born Artist Enterprises discloses your personal information to its agents or sub-contractors for these purposes, the agent or sub-contractor in question will be obligated to use that personal information in accordance with the terms of this privacy statement. \n</p>\n<p>\nIn addition to the disclosures reasonably necessary for the purposes identified elsewhere above, BornArtist Enterprises may disclose your personal information to the extent that it is required to do so by law, in connection with any legal proceedings or prospective legal proceedings, and in order to establish, exercise or defend its legal rights.\n</p>\n<h4> Securing your data </h4>\n\n<ul>\n  <li>BornArtist Enterprises will take reasonable technical and organisational precautions to prevent the loss, misuse or alteration of your personal information. </li>\n\n  <li>BornArtist Enterprises will store all the personal information you provide [on its secure servers]. </li>\n\n  <li> Information relating to electronic transactions entered into via this website will be protected by encryption technology.] </li>\n\n</ul>\n\n<h4> Updating this statement </h4>\n\n<p>BornArtist Enterprises may update this privacy policy by posting a new version on this website.  </p>\n\n<p> You should check this page occasionally to ensure you are familiar with any changes.  </p>\n\n<h4> Contact BornArtist Enterprises </h4>\n\n<p> If you have any questions about this privacy policy  please write: \n\nby email to <b> bornartist.helpdesk@gmail.com  </b></p>\n</div>"

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\" *ngFor=\"let prod of productInfo\">\n    <div class=\"container-fliud\">\n      <div class=\"wrapper row\">\n        <div class=\"preview col-md-6\">\n          <div class=\"preview-pic tab-content\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img [src]=\"prod.imagePath\" />\n            </div>\n            <!--<div class=\"tab-pane\" id=\"pic-2\">\n              <img [src]=\"prod.imagePath\" /></div>-->\n          </div>\n          <ul class=\"preview-thumbnail nav nav-tabs\">\n            <li class=\"active\">\n              <a data-target=\"#pic-1\" data-toggle=\"tab\"><img [src]=\"prod.imagePath\" /></a>\n            </li>\n            <!--<li>\n              <a data-target=\"#pic-2\" data-toggle=\"tab\"><img [src]=prod.imagePath /></a>\n            </li>-->\n          </ul>\n\n        </div>\n        <div class=\"details col-md-6\">\n          <h3 class=\"product-title\">{{prod.style_name}}</h3>\n          <!--<div class=\"rating\">\n            <div class=\"stars\">\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star\"></span>\n              <span class=\"fa fa-star\"></span>\n            </div>\n            <span class=\"review-no\">41 reviews</span>\n          </div>-->\n          <p class=\"product-description\">Being a notable enterprise of this industry, we are offering a stylish range of Corporate Collar T-Shirts that\n            is very comfortable. We present these t-shirts in vivacious colors, brilliant finish and other exclusive attributes\n            that positions our t-shirts far ahead of our competitors. Provided marvelous t-shirts are designed by our professionals\n            in order to preserve their conformity with ...</p>\n          <h4 class=\"price\"> Buy now @ <span>&#8377; {{prod.price}}</span></h4>\n          <!--<p class=\"vote\"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>-->\n          <h5 class=\"sizes\">Sizes:\n            <div class=\"btn-group\" data-toggle=\"buttons\" disabled>\n              <label class=\"btn btn-secondary active\"> S\n              </label>\n              <label class=\"btn btn-secondary\"> M \n              </label>\n              <label class=\"btn btn-secondary\"> L \n              </label>\n              <label class=\"btn btn-secondary\"> XL\n              </label>\n            </div>\n            \n          </h5>\n          <p data-toggle=\"modal\" data-target=\"#exampleModalLabel\">view size chart</p>\n          \n              <!-- Modal content-->\n            <div class=\"modal fade\" id=\"exampleModalLabel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n              <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Size Chart</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                    <table class=\"table table-bordered\">\n                      <tr>\n                          <td> Size  </td>\n                          <td> Chest (cms) </td>\n                          <td> Length (cms) </td>\n                          <td> Sleeve Length (cms) </td>\n                      </tr>\n                      <tr>\n                         \n                          <td> S </td>\n                          <td> 47.5  </td>\n                          <td> 67 </td>\n                          <td> 21.5 </td>\n                      </tr>\n                      <tr>\n                          <td> M </td> \n                          <td> 50 </td>\n                          <td> 69 </td>\n                          <td> 22 </td>\n                      </tr>\n                      <tr>\n                          <td> L </td> \n                          <td> 53 </td>\n                          <td> 71 </td>\n                          <td> 23 </td>\n                      </tr>\n                      <tr>\n                          <td> XL </td> \n                          <td> 55.5 </td>\n                          <td> 73 </td>\n                          <td> 24 </td>\n                      </tr>\n                      <tr>\n                          <td> XXL </td> \n                          <td> 59 </td>\n                          <td> 75 </td>\n                          <td> 25.5 </td>\n                      </tr>\n                      <tr>\n                          <td> XXXL </td> \n                          <td> 63 </td>\n                          <td> 76 </td>\n                          <td> 26 </td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    <!--<button type=\"button\" class=\"btn btn-primary\">Save changes</button>-->\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n          \n\n          <div class=\"action\">\n            <!--<button class=\"add-to-cart btn btn-default\" (click)=\"onSelect(prod);\"  href=\"/posts\" type=\"button\">Customize</button>-->\n             <a class=\"add-to-cart btn btn-default \" (click)=\"onSelect(prod);\"  href=\"/posts\" >Customize</a>\n            <!--<button class=\"like btn btn-default\" type=\"button\"><span class=\"fa fa-heart\"></span></button>-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

module.exports = "<p>\n  terms works!\n</p>\n\n\n"

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:18em\">\n\n  <!--<div class=\"card \" >\n    <div class=\"card-header\">\n      Payment Failed\n    </div>\n    <div class=\"card-block\">\n      <h4 class=\"card-title\">Your order of Rs. {{Total}} failed. Reference Transaction ID : {{TxnId}}.</h4>\n      <p class=\"card-text\">We could not process your payment at this moment. Please review your order and retry payment again. </p>\n      <a href=\"/cart\" class=\"btn btn-primary \">Review</a>\n    </div>\n  </div>-->\n\n  <div class=\"card \" >\n      <div class=\"card-header\" *ngIf=\"orderSummary && orderSummary.length!=0\">\n        Payment Failed : Ref - <u> <b> <span style=\"font-weight:500!important;font-weight: bold;\"> #{{orderSummary[0].txnid}} </span> </b> </u>\n      </div>\n      <div class=\"card-block\">  \n        <p class=\"card-text\">We could not process your payment at this moment. Please review your order and retry payment again. </p>\n      <div class=\"row\" *ngIf=\"orderSummary && orderSummary.length!=0\">\n        \n        <div class=\"col-md-6 col-lg-3\">\n            <div >\n              <h5 style=\"color:lightcoral;\"> Order Details </h5><br>\n              <h6 style=\"color:black\"> <u> Delivery Address </u></h6>\n              <div *ngIf=orderSummary[0]> \n                <div> {{orderSummary[0].shipping_address.title}} {{orderSummary[0].shipping_address.first_name}} {{orderSummary[0].shipping_address.last_name}} </div>\n                <div > {{orderSummary[0].shipping_address.address_line1}} , {{orderSummary[0].shipping_address.address_line2}} </div>\n                <p > {{orderSummary[0].shipping_address.city}} , {{orderSummary[0].shipping_address.state}} - {{orderSummary[0].shipping_address.pincode}}  </p>\n                <p > Mobile : {{orderSummary[0].shipping_address.mobile}} </p>\n              </div>\n              <!--<a href=\"/home\" class=\"btn btn-primary btnm\">Back to Home</a>-->\n            </div>\n        </div>\n      </div>\n\n      <h6 style=\"color:black\"> <u> Design Previews </u></h6>\n     \n      <div class=\"row\"  style=\"margin-top:1em\">\n        <div class=\"col-md-3\"  class=\"wraptocenter\" *ngFor=\"let order of orderItems;\" >\n          <img [src]=\"order.designReferenceFile\" style=\"max-height:300px!important;max-width:300px;\" class=\"image-container\" alt=\"Image not found\"> \n          <!--onerror=\"this.src='assets/warning.png';\" -->\n          <!--<div *ngIf=order.men_size style=\"padding-left:1em;margin-bottom:2em\"> \n              <span *ngFor=\"let men_size of order.men_size\"> Size : {{men_size.size}} , Qty : {{men_size.qty}} </span>\n          </div>\n          <div *ngIf=order.men_size style=\"padding-left:1em;margin-bottom:2em\"> \n              <span *ngFor=\"let men_size of order.men_size\"> Size : {{men_size.size}} , Qty : {{men_size.qty}} </span>\n          </div>-->\n        </div>\n      </div>\n\n      <div style=\"padding-left:0.3em;padding-top:1em\">\n        <a href=\"/home\" class=\"btn btn-primary btn \" style=\"background:none;color:#0275d8;border:none;\"> Back to Home</a> \n        <a href=\"/cart\" class=\"btn btn-primary \">Retry</a>\n      </div>\n\n      </div>\n\n        \n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:18em\">\n\n  <div class=\"card \" >\n      <div class=\"card-header\" *ngIf=\"orderSummary && orderSummary.length!=0\">\n        Order Confirmation :  Order ID  <u> <b> <span style=\"font-weight:500!important;font-weight: bold;\"> #{{orderSummary[0].txnid}} </span> </b> </u>\n      </div>\n      <div class=\"card-block\">\n        <h4 class=\"card-title\">Your order of has been placed successfully.</h4>\n        <p class=\"card-text\">Please quote the OrderId for any future reference. Thank you for making a purchase with us. </p>\n        <!--<a href=\"/home\" class=\"btn btn-primary btnm\">Home</a> <a href=\"/gallery\" class=\"btn btn btn-warning\">Gallery</a>-->\n\n      <div class=\"row\" *ngIf=\"orderSummary && orderSummary.length!=0\">\n        <div class=\"col-md-6 col-lg-3\">\n            <div >\n              <h6 style=\"color:black\"> <u> Delivery Address </u></h6>\n              <div *ngIf=orderSummary[0]> \n                <div> {{orderSummary[0].shipping_address.title}} {{orderSummary[0].shipping_address.first_name}} {{orderSummary[0].shipping_address.last_name}} </div>\n                <div > {{orderSummary[0].shipping_address.address_line1}} , {{orderSummary[0].shipping_address.address_line2}} </div>\n                <p > {{orderSummary[0].shipping_address.city}} , {{orderSummary[0].shipping_address.state}} - {{orderSummary[0].shipping_address.pincode}}  </p>\n                <p > Mobile : {{orderSummary[0].shipping_address.mobile}} </p>\n              </div>\n              <!--<a href=\"/home\" class=\"btn btn-primary btnm\">Back to Home</a>-->\n            </div>\n        </div>\n      </div>\n\n      <h6 style=\"color:black\"> <u> Design Previews </u></h6>\n     \n      <div class=\"row\"  style=\"margin-top:1em\">\n        <div class=\"col-md-3\"  class=\"wraptocenter\" *ngFor=\"let order of orderItems;\" >\n          <img [src]=\"order.designReferenceFile\" style=\"max-height:300px!important;max-width:300px;\" class=\"image-container\" alt=\"Image not found\"> \n          <!--onerror=\"this.src='assets/warning.png';\" -->\n          <!--<div *ngIf=order.men_size style=\"padding-left:1em;margin-bottom:2em\"> \n              <span *ngFor=\"let men_size of order.men_size\"> Size : {{men_size.size}} , Qty : {{men_size.qty}} </span>\n          </div>\n          <div *ngIf=order.men_size style=\"padding-left:1em;margin-bottom:2em\"> \n              <span *ngFor=\"let men_size of order.men_size\"> Size : {{men_size.size}} , Qty : {{men_size.qty}} </span>\n          </div>-->\n        </div>\n      </div>\n\n      <div style=\"padding-left:0.3em;padding-top:1em\">\n        <a href=\"/home\" class=\"btn btn-primary btnm\"> Back to Home</a>\n      </div>\n\n      </div>\n\n        \n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restapi_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    // countofCart = 0;
    function AppComponent(restapi) {
        this.restapi = restapi;
        this.title = 'app works!';
        this.count = 0;
        console.log('contructor AppComponent');
        this.refreshCartFromServer();
    }
    AppComponent.prototype.updateCart = function (count) {
        this.count = count;
        console.log(this.count);
    };
    //Post Sign up/Login
    AppComponent.prototype.updateName = function (name) {
        this.name = name;
    };
    AppComponent.prototype.refreshCartFromServer = function () {
        var _this = this;
        this.restapi.getSummary().subscribe(function (res) {
            console.log(res);
            //this.updateCart(res.orderlist.length);
            if (res && res.orderlist.length != 0) {
                var OrderList = res.orderlist.filter(function (wip) { return wip.orderStatus == "wip"; });
                _this.updateCart(OrderList.length);
            }
        }, function (err) {
            console.log('failed to refresh cart from server');
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(344),
        styles: [__webpack_require__(327)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__restapi_service__["a" /* RestapiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__restapi_service__["a" /* RestapiService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/app.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(146);


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
        this.tempval = 'a';
    }
    // Get all posts from the API
    PostsService.prototype.getAllPosts = function () {
        return this.http.get('http://locahost:3000/api/posts')
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.dosetTempVal = function (val) {
        this.tempval = val;
    };
    PostsService.prototype.dogetTempVal = function () {
        return this.tempval;
    };
    return PostsService;
}());
PostsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], PostsService);

var _a;
//# sourceMappingURL=/Users/sachinrohit/workspace/repo/tests/ng2-mean/src/posts.service.js.map

/***/ })

},[388]);
//# sourceMappingURL=main.bundle.js.map