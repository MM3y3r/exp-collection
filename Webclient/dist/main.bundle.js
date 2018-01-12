webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- the contact card -->\n<div class=\"material-contact animate-in-card\">\n  <div *ngFor=\"let user of baseData | async\">\n    <!-- <span>TEST: {{user.experiences.work1.duration}}</span> -->\n\n    <!-- image -->\n    <img class=\"animate-in-image\" src=\"http://lorempixel.com/400/400/sports\">\n    <!-- name -->\n    <h1 class=\"animate-in-01\">{{user.name}}</h1>\n    <!-- title -->\n    <h2 class=\"animate-in-02\">{{user.title}}</h2>\n\n    <hr class=\"animate-in-03\">\n\n    <!-- bio -->\n    <p class=\"animate-in-04\">{{user.description}}</p>\n\n    <!-- contact links -->\n    <span class=\"actions animate-in-05\">\n\n      <a href=\"https://www.twitter.com/\" target=\"_blank\">LinkedIn</a>\n      <a href=\"https://www.dribbble.com/\" target=\"_blank\">Twitter</a>\n      <a href=\"https://www.behance.net/\" target=\"_blank\">Github</a>\n\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);", ""]);

// module
exports.push([module.i, "/*font (roboto)*/\n/*resets*/\n* {\n  padding: 0;\n  margin: 0;\n  font-family: \"Roboto\", sans-serif; }\n\n/*basic layout*/\n.material-contact {\n  width: 400px;\n  max-width: 90%;\n  height: auto;\n  padding: 50px 50px 30px 50px;\n  box-sizing: border-box;\n  display: block;\n  position: relative;\n  margin: 50px auto;\n  overflow: hidden;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);\n  background: #fff;\n  border-radius: 5px; }\n\n/*header*/\n.material-contact img {\n  width: 120px;\n  height: 120px;\n  display: block;\n  margin: 0 auto;\n  border-radius: 100%; }\n\n.material-contact h1 {\n  width: 100%;\n  height: auto;\n  padding: 15px 0 5px 0;\n  display: block;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.9rem;\n  font-weight: 300;\n  line-height: 1em;\n  text-align: center;\n  color: #000;\n  background: none; }\n\n.material-contact h2 {\n  width: 100%;\n  height: auto;\n  padding: 5px 0;\n  display: block;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 300;\n  line-height: 1em;\n  text-align: center;\n  color: #aaa;\n  background: none; }\n\n.material-contact hr {\n  width: 30%;\n  height: 0;\n  padding: 0;\n  display: block;\n  margin: 30px auto;\n  border: 1px solid #ddd; }\n\n/*info section*/\n.material-contact p {\n  width: 100%;\n  height: auto;\n  padding: 10px 0;\n  display: block;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.2em;\n  text-align: justify; }\n\n.material-contact .actions {\n  width: 100%;\n  height: auto;\n  padding: 0;\n  display: block;\n  margin: 10px 0 0 0;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  text-align: center; }\n\n.material-contact .actions a {\n  width: auto;\n  height: auto;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  margin: 5px auto;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1.2em;\n  text-decoration: none;\n  border-radius: 100px;\n  background: #fff;\n  color: #aaa;\n  transition: 0.1s; }\n\n.material-contact .actions a:hover {\n  background: #fff;\n  color: #000; }\n\n.material-contact .actions a:active {\n  background: #000;\n  color: #fff; }\n\n/*animation*/\n.animate-in-01 {\n  animation: animateIn 1s ease;\n  -webkit-animation: animateIn 1s ease; }\n\n.animate-in-02 {\n  animation: animateIn 1s ease forwards;\n  animation-delay: 0.2s;\n  -webkit-animation: animateIn 1s ease forwards;\n  -webkit-animation-delay: 0.2s;\n  opacity: 0; }\n\n.animate-in-03 {\n  animation: animateIn 1s ease forwards;\n  animation-delay: 0.4s;\n  -webkit-animation: animateIn 1s ease forwards;\n  -webkit-animation-delay: 0.4s;\n  opacity: 0; }\n\n.animate-in-04 {\n  animation: animateIn 1s ease forwards;\n  animation-delay: 0.5s;\n  -webkit-animation: animateIn 1s ease forwards;\n  -webkit-animation-delay: 0.5s;\n  opacity: 0; }\n\n.animate-in-05 {\n  animation: animateIn 1s ease forwards;\n  animation-delay: 0.6s;\n  -webkit-animation: animateIn 1s ease forwards;\n  -webkit-animation-delay: 0.6s;\n  opacity: 0; }\n\n@keyframes animateIn {\n  0% {\n    opacity: 0;\n    transform: translateY(50px);\n    -webkit-transform: translateY(50px);\n    -moz-transform: translateY(50px);\n    -ms-transform: translateY(50px);\n    -o-transform: translateY(50px); }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0); } }\n\n@-webkit-keyframes animateIn {\n  0% {\n    opacity: 0;\n    transform: translateY(50px);\n    -webkit-transform: translateY(50px);\n    -moz-transform: translateY(50px);\n    -ms-transform: translateY(50px);\n    -o-transform: translateY(50px); }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0); } }\n\n.animate-in-image {\n  animation: animateInImage 1s ease;\n  -webkit-animation: animateInImage 1s ease; }\n\n@keyframes animateInImage {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes animateInImage {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.animate-in-card {\n  animation: animateIn 0.7s ease;\n  -webkit-animation: animateIn 0.7s ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Imports



var AboutComponent = (function () {
    function AboutComponent(db, route) {
        this.db = db;
        this.route = route;
        this.route.params.subscribe(function (params) { return console.log(params); });
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.baseData = this.getData('/users');
    };
    AboutComponent.prototype.getData = function (listPath) {
        //console.log(this.db.list(listPath).valueChanges());
        return this.db.list(listPath).valueChanges();
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navigation {\n  height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #efefef;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  vertical-align: middle;\n}\n\n.navElement {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  text-align: center;\n  text-decoration: unset;\n  color: black;\n}\n\n.active {\n  /* color: pink; */\n  /* font-style: italic; */\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navigation\">\n  <a class=\"navElement\" routerLink=\"/home{{currentPath}}\" routerLinkActive=\"active\">Who am I?</a>\n  <a class=\"navElement\" routerLink=\"/experiences{{currentPath}}\" routerLinkActive=\"active\">Experiences</a>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Helpers :

var AppComponent = (function () {
    // @Input() currentPath: string;
    function AppComponent(http, route) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.route.params.subscribe(function (params) { return (_this.path = "/" + params.id); });
        // console.log('@constructor path: ' + this.path);
        // this.http
        //   .get('http://api.icndb.com/jokes/random/20')
        //   .map(response => response.json())
        //   .subscribe(res => (this.myData = res));
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log(this.route.snapshot.queryParamMap);
        // console.log('@oninit: ' + this.path);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__experiences_experiences_component__ = __webpack_require__("../../../../../src/app/experiences/experiences.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Firebase imports




// general imports











var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
    { path: 'home/:id', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
    { path: 'experiences', component: __WEBPACK_IMPORTED_MODULE_14__experiences_experiences_component__["a" /* ExperiencesComponent */] },
    { path: 'experiences/:id', component: __WEBPACK_IMPORTED_MODULE_14__experiences_experiences_component__["a" /* ExperiencesComponent */] },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_12__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_14__experiences_experiences_component__["a" /* ExperiencesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_13__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_0_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatIconModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/experiences/experiences.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- the contact card -->\n<div *ngIf=\"user.experiences && user.experiences.length > 0\">\n  <div *ngFor=\"let exp of user.experiences\">\n    <div class=\"material-contact animate-in-card\">\n\n      <h1 class=\"animate-in-01\">{{ exp?.name }}</h1>\n      <h2 class=\"animate-in-01\">{{ exp?.duration }}</h2>\n      <p class=\"animate-in-01\">{{ exp?.description }}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/experiences/experiences.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);", ""]);

// module
exports.push([module.i, "/*font (roboto)*/\n/*resets*/\n* {\n  padding: 0;\n  margin: 0;\n  font-family: \"Roboto\", sans-serif; }\n\n/*basic layout*/\n.material-contact {\n  width: 600px;\n  max-width: 90%;\n  height: auto;\n  padding: 50px 50px 30px 50px;\n  box-sizing: border-box;\n  display: block;\n  position: relative;\n  margin: 50px auto;\n  overflow: hidden;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);\n  background: #fff;\n  border-radius: 5px; }\n\n/*header*/\n.material-contact img {\n  width: 120px;\n  height: 120px;\n  display: block;\n  margin: 0 auto;\n  border-radius: 100%; }\n\n.material-contact h1 {\n  width: 100%;\n  height: auto;\n  padding: 15px 0 5px 0;\n  display: block;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.9rem;\n  font-weight: 300;\n  line-height: 1em;\n  text-align: center;\n  color: #000;\n  background: none; }\n\n.material-contact h2 {\n  width: 100%;\n  height: auto;\n  padding: 5px 0;\n  display: block;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 300;\n  line-height: 1em;\n  text-align: center;\n  color: #aaa;\n  background: none; }\n\n.material-contact hr {\n  width: 30%;\n  height: 0;\n  padding: 0;\n  display: block;\n  margin: 30px auto;\n  border: 1px solid #ddd; }\n\n/*info section*/\n.material-contact p {\n  width: 100%;\n  height: auto;\n  padding: 10px 0;\n  display: block;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.2em;\n  text-align: justify; }\n\n.material-contact .actions {\n  width: 100%;\n  height: auto;\n  padding: 0;\n  display: block;\n  margin: 10px 0 0 0;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  text-align: center; }\n\n.material-contact .actions a {\n  width: auto;\n  height: auto;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  margin: 5px auto;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1.2em;\n  text-decoration: none;\n  border-radius: 100px;\n  background: #fff;\n  color: #aaa;\n  transition: 0.1s; }\n\n.material-contact .actions a:hover {\n  background: #fff;\n  color: #000; }\n\n.material-contact .actions a:active {\n  background: #000;\n  color: #fff; }\n\n/*animation*/\n.animate-in-01 {\n  animation: animateIn 1s ease;\n  -webkit-animation: animateIn 1s ease; }\n\n.animate-in-02 {\n  animation: animateIn 1s ease forwards;\n  animation-delay: 0.2s;\n  -webkit-animation: animateIn 1s ease forwards;\n  -webkit-animation-delay: 0.2s;\n  opacity: 0; }\n\n.animate-in-03 {\n  animation: animateIn 1s ease forwards;\n  animation-delay: 0.4s;\n  -webkit-animation: animateIn 1s ease forwards;\n  -webkit-animation-delay: 0.4s;\n  opacity: 0; }\n\n.animate-in-04 {\n  animation: animateIn 1s ease forwards;\n  animation-delay: 0.5s;\n  -webkit-animation: animateIn 1s ease forwards;\n  -webkit-animation-delay: 0.5s;\n  opacity: 0; }\n\n.animate-in-05 {\n  animation: animateIn 1s ease forwards;\n  animation-delay: 0.6s;\n  -webkit-animation: animateIn 1s ease forwards;\n  -webkit-animation-delay: 0.6s;\n  opacity: 0; }\n\n@keyframes animateIn {\n  0% {\n    opacity: 0;\n    transform: translateY(50px);\n    -webkit-transform: translateY(50px);\n    -moz-transform: translateY(50px);\n    -ms-transform: translateY(50px);\n    -o-transform: translateY(50px); }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0); } }\n\n@-webkit-keyframes animateIn {\n  0% {\n    opacity: 0;\n    transform: translateY(50px);\n    -webkit-transform: translateY(50px);\n    -moz-transform: translateY(50px);\n    -ms-transform: translateY(50px);\n    -o-transform: translateY(50px); }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0); } }\n\n.animate-in-image {\n  animation: animateInImage 1s ease;\n  -webkit-animation: animateInImage 1s ease; }\n\n@keyframes animateInImage {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes animateInImage {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.animate-in-card {\n  animation: animateIn 0.7s ease;\n  -webkit-animation: animateIn 0.7s ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/experiences/experiences.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperiencesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Imports



var ExperiencesComponent = (function () {
    function ExperiencesComponent(db, route) {
        var _this = this;
        this.db = db;
        this.route = route;
        this.user;
        this.route.params.subscribe(function (params) { return (_this.path = "users/" + params.id); });
        console.log('@constructor path: ' + this.path);
        var userobject = db.object(this.path);
        var currentUser$ = userobject.valueChanges();
        currentUser$.subscribe(console.log);
        currentUser$.subscribe(function (response) {
            // console.log('Success Response: ' + JSON.stringify(response));
            _this.user = response;
            console.log('user: ' + _this.user);
        }, function (error) {
            console.log('Error happened: ' + error);
        }, function () {
            console.log('the subscription is completed');
        });
        // this.currentUser = currentUser$.subscribe;
    }
    ExperiencesComponent.prototype.ngOnInit = function () {
        // console.log('my User...' + this.myUser);
        // this.route.params.subscribe(
        //   params => (this.currentUser = this.db.object(`/currentUser/${params.id}`))
        //   // .valueChanges())
        //   // this.baseData = this.getData(`/currentUser/${params.id}`)
        // );
        // this.currentUser = this.getData(this.path);
        // console.log('My Current User : ' + this.currentUser.subscribe(obj => console.log));
        // console.log('baseData: ' + this.baseData);
    };
    ExperiencesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-experiences',
            template: __webpack_require__("../../../../../src/app/experiences/experiences.component.html"),
            styles: [__webpack_require__("../../../../../src/app/experiences/experiences.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]])
    ], ExperiencesComponent);
    return ExperiencesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- the contact card -->\n<div class=\"material-contact animate-in-card\">\n  <!-- <div *ngFor=\"let user of baseData | async\"> -->\n  <!-- <span>TEST: {{user.experiences.work1.duration}}</span> -->\n\n  <!-- image -->\n  <img class=\"animate-in-image\" src=\"http://lorempixel.com/400/400/sports\">\n  <!-- name -->\n  <h1 class=\"animate-in-01\">{{ user.name }}</h1>\n  <!-- title -->\n  <h2 class=\"animate-in-02\">{{ user.title }}</h2>\n\n  <hr class=\"animate-in-03\">\n\n  <!-- bio -->\n  <p class=\"animate-in-04\">{{ user.description }}</p>\n\n  <!-- contact links -->\n  <span class=\"actions animate-in-05\">\n\n    <a href=\"https://www.twitter.com/{{user.socialMedia.twitter}}\" target=\"_blank\">Twitter</a>\n    <a href=\"https://www.linkedin.com/in/{{user.socialMedia.linkedin}}\" target=\"_blank\">Linkedin</a>\n    <a href=\"https://github.com/{{user.socialMedia.github}}\" target=\"_blank\">Github</a>\n\n  </span>\n  <!-- </div> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);", ""]);

// module
exports.push([module.i, "/*font (roboto)*/\n/*resets*/\n* {\n  padding: 0;\n  margin: 0;\n  font-family: 'Roboto', sans-serif; }\n\n/*basic layout*/\n.material-contact {\n  width: 400px;\n  max-width: 90%;\n  height: auto;\n  padding: 50px 50px 30px 50px;\n  box-sizing: border-box;\n  display: block;\n  position: relative;\n  margin: 50px auto;\n  overflow: hidden;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);\n  background: #fff;\n  border-radius: 5px; }\n\n/*header*/\n.material-contact img {\n  width: 120px;\n  height: 120px;\n  display: block;\n  margin: 0 auto;\n  border-radius: 100%; }\n\n.material-contact h1 {\n  width: 100%;\n  height: auto;\n  padding: 15px 0 5px 0;\n  display: block;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.9rem;\n  font-weight: 300;\n  line-height: 1em;\n  text-align: center;\n  color: #000;\n  background: none; }\n\n.material-contact h2 {\n  width: 100%;\n  height: auto;\n  padding: 5px 0;\n  display: block;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.2rem;\n  font-weight: 300;\n  line-height: 1em;\n  text-align: center;\n  color: #aaa;\n  background: none; }\n\n.material-contact hr {\n  width: 30%;\n  height: 0;\n  padding: 0;\n  display: block;\n  margin: 30px auto;\n  border: 1px solid #ddd; }\n\n/*info section*/\n.material-contact p {\n  width: 100%;\n  height: auto;\n  padding: 10px 0;\n  display: block;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.2em;\n  text-align: justify; }\n\n.material-contact .actions {\n  width: 100%;\n  height: auto;\n  padding: 0;\n  display: block;\n  margin: 10px 0 0 0;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  text-align: center; }\n\n.material-contact .actions a {\n  width: auto;\n  height: auto;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  margin: 5px auto;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1.2em;\n  text-decoration: none;\n  border-radius: 100px;\n  background: #fff;\n  color: #aaa;\n  transition: .1s; }\n\n.material-contact .actions a:hover {\n  background: #fff;\n  color: #000; }\n\n.material-contact .actions a:active {\n  background: #000;\n  color: #fff; }\n\n/*animation*/\n.animate-in-01 {\n  animation: animateIn 1s ease;\n  -webkit-animation: animateIn 1s ease; }\n\n.animate-in-02 {\n  animation: animateIn 1s ease forwards;\n  animation-delay: .2s;\n  -webkit-animation: animateIn 1s ease forwards;\n  -webkit-animation-delay: .2s;\n  opacity: 0; }\n\n.animate-in-03 {\n  animation: animateIn 1s ease forwards;\n  animation-delay: .4s;\n  -webkit-animation: animateIn 1s ease forwards;\n  -webkit-animation-delay: .4s;\n  opacity: 0; }\n\n.animate-in-04 {\n  animation: animateIn 1s ease forwards;\n  animation-delay: .5s;\n  -webkit-animation: animateIn 1s ease forwards;\n  -webkit-animation-delay: .5s;\n  opacity: 0; }\n\n.animate-in-05 {\n  animation: animateIn 1s ease forwards;\n  animation-delay: .6s;\n  -webkit-animation: animateIn 1s ease forwards;\n  -webkit-animation-delay: .6s;\n  opacity: 0; }\n\n@keyframes animateIn {\n  0% {\n    opacity: 0;\n    transform: translateY(50px);\n    -webkit-transform: translateY(50px);\n    -moz-transform: translateY(50px);\n    -ms-transform: translateY(50px);\n    -o-transform: translateY(50px); }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0); } }\n\n@-webkit-keyframes animateIn {\n  0% {\n    opacity: 0;\n    transform: translateY(50px);\n    -webkit-transform: translateY(50px);\n    -moz-transform: translateY(50px);\n    -ms-transform: translateY(50px);\n    -o-transform: translateY(50px); }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0); } }\n\n.animate-in-image {\n  animation: animateInImage 1s ease;\n  -webkit-animation: animateInImage 1s ease; }\n\n@keyframes animateInImage {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes animateInImage {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.animate-in-card {\n  animation: animateIn .7s ease;\n  -webkit-animation: animateIn .7s ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Imports



var HomeComponent = (function () {
    function HomeComponent(db, route) {
        var _this = this;
        this.db = db;
        this.route = route;
        this.user;
        this.route.params.subscribe(function (params) { return (_this.path = "users/" + params.id); });
        var userobject = db.object(this.path);
        var currentUser$ = userobject.valueChanges();
        currentUser$.subscribe(console.log);
        currentUser$.subscribe(function (response) {
            // console.log('Success Response: ' + JSON.stringify(response));
            _this.user = response;
            console.log('user: ' + _this.user);
        }, function (error) {
            console.log('Error happened: ' + error);
        }, function () {
            console.log('the subscription is completed');
        });
        // this.currentUser = currentUser$.subscribe;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // console.log('my User...' + this.myUser);
        // this.route.params.subscribe(
        //   params => (this.currentUser = this.db.object(`/currentUser/${params.id}`))
        //   // .valueChanges())
        //   // this.baseData = this.getData(`/currentUser/${params.id}`)
        // );
        // this.currentUser = this.getData(this.path);
        // console.log('My Current User : ' + this.currentUser.subscribe(obj => console.log));
        // console.log('baseData: ' + this.baseData);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCl8G3slkZnWPnZmCizqm1-gxw8E0yTicY',
        authDomain: 'expcollection-50f13.firebaseapp.com',
        databaseURL: 'https://expcollection-50f13.firebaseio.com',
        projectId: 'expcollection-50f13',
        storageBucket: 'expcollection-50f13.appspot.com',
        messagingSenderId: '797339981218'
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map