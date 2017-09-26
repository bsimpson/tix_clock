webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 3fr 2fr 3fr 2fr 3fr;\n      grid-template-columns: 1fr 3fr 2fr 3fr 2fr 3fr;\n  -ms-grid-rows: 1fr;\n      grid-template-rows: 1fr;\n  -ms-grid-column-align: center;\n      justify-items: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  grid-gap: 3rem;\n\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.hours-first {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  -ms-grid-rows: (1fr)[3];\n      grid-template-rows: repeat(3, 1fr);\n  grid-gap: 5px;\n}\n\n.minutes-first, .seconds-first {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[2];\n      grid-template-columns: repeat(2, 1fr);\n  -ms-grid-rows: (1fr)[3];\n      grid-template-rows: repeat(3, 1fr);\n  grid-gap: 5px;\n}\n\n.hours-second, .minutes-second, .seconds-second {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[3];\n      grid-template-columns: repeat(3, 1fr);\n  -ms-grid-rows: (1fr)[3];\n      grid-template-rows: repeat(3, 1fr);\n  grid-gap: 5px;\n}\n\n.box {\n  width: 50px;\n  height: 50px;\n  background-color: #ccc;\n}\n\n.hours-first .on, .hours-second .on {\n  background-color: red;\n}\n\n.minutes-first .on, .minutes-second .on {\n  background-color: blue;\n}\n\n.seconds-first .on, .seconds-second .on {\n  background-color: green;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"hours-first\">\n    <div class=\"box hours\" ngClass=\"{{hour ? 'on' : 'off' }}\" *ngFor=\"let hour of hoursFirst\"></div>\n  </div>\n  <div class=\"hours-second\">\n    <div class=\"box hours\" ngClass=\"{{hour ? 'on' : 'off' }}\" *ngFor=\"let hour of hoursSecond\"></div>\n  </div>\n\n  <div class=\"minutes-first\">\n    <div class=\"box minutes\" ngClass=\"{{minute ? 'on' : 'off' }}\" *ngFor=\"let minute of minutesFirst\"></div>\n  </div>\n  <div class=\"minutes-second\">\n    <div class=\"box minutes\" ngClass=\"{{minute ? 'on' : 'off' }}\" *ngFor=\"let minute of minutesSecond\"></div>\n  </div>\n\n  <div class=\"seconds-first\">\n    <div class=\"box seconds\" ngClass=\"{{second ? 'on' : 'off' }}\" *ngFor=\"let second of secondsFirst\"></div>\n  </div>\n  <div class=\"seconds-second\">\n    <div class=\"box seconds\" ngClass=\"{{second ? 'on' : 'off' }}\" *ngFor=\"let second of secondsSecond\"></div>\n  </div>\n</div>\n\n<input [(ngModel)]=\"time\" (click)=\"calculateGrid()\" id=\"time\" type=\"hidden\" />\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function AppComponent() {
        this.calculateGrid();
    }
    AppComponent.prototype.calculateGrid = function () {
        this.time = new Date();
        this.hours = this.splitTimeParts(this.twelveHour(this.time.getHours()));
        this.minutes = this.splitTimeParts(this.time.getMinutes());
        this.seconds = this.splitTimeParts(this.time.getSeconds());
        this.hoursFirst = this.fillArray(this.hoursFirst, this.hours[0], 3);
        this.hoursSecond = this.fillArray(this.hoursSecond, this.hours[1], 9);
        this.minutesFirst = this.fillArray(this.minutesFirst, this.minutes[0], 6);
        this.minutesSecond = this.fillArray(this.minutesSecond, this.minutes[1], 9);
        this.secondsFirst = this.fillArray(this.secondsFirst, this.seconds[0], 6);
        this.secondsSecond = this.fillArray(this.secondsSecond, this.seconds[1], 9);
    };
    AppComponent.prototype.splitTimeParts = function (time) {
        // Take the time and split into first and second digit
        var parts = time.toString().split('');
        // Lpad with 0 is single digit
        if (parts.length < 2) {
            parts.unshift('0');
        }
        var _a = parts.slice(), first = _a[0], last = _a[1];
        return [parseInt(first, 10), parseInt(last, 10)];
    };
    AppComponent.prototype.twelveHour = function (hour) {
        if (hour === 0 || hour === 12) {
            return 12;
        }
        return hour % 12;
    };
    AppComponent.prototype.fillArray = function (array, numberToFill, total) {
        if (typeof array === 'undefined') {
            array = new Array(total);
            array.fill(false);
        }
        if (numberToFill === 0) {
            array = new Array(total);
            array.fill(false);
        }
        while (array.filter(function (item) { return item === true; }).length !== numberToFill) {
            array[this.random(total)] = true;
        }
        return array;
    };
    AppComponent.prototype.random = function (max) {
        max = Math.floor(max);
        return Math.floor(Math.random() * (max));
    };
    AppComponent.prototype.ngOnChanges = function (changes) {
        this.calculateGrid();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map