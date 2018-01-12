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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- welcome card -->\n<div class=\"material-contact animate-in-card\">\n  <h1>Generate your page by entering your data here!</h1>\n  <h2>View your new page under http://localhost:4200/home/{{UserID}}</h2>\n</div>\n\n<!-- welcome card -->\n<div class=\"material-contact animate-in-card\">\n  <mat-form-field class=\"example-full-width\">\n    <input (change)=\"onInputChange('name', $event.target.value)\" id=\"name\" matInput placeholder=\"Full name\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input (change)=\"onInputChange('title', $event.target.value)\" id=\"title\" matInput placeholder=\"Job title\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input (change)=\"onInputChange('description', $event.target.value)\" id=\"description\" matInput placeholder=\"Description\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input (change)=\"onSocialInputChange('twitter', $event.target.value)\" matInput placeholder=\"Twitter handle\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input (change)=\"onSocialInputChange('github', $event.target.value)\" matInput placeholder=\"GitHub profile URL\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input (change)=\"onSocialInputChange('linkedin', $event.target.value)\" matInput placeholder=\"Linkedin profile URL\">\n  </mat-form-field>\n</div>\n\n<div class=\"material-contact animate-in-card\">\n  <h1>Enter your experience here!</h1>\n  <mat-form-field class=\"example-full-width\">\n    <input (change)=\"onExperienceInputChange('name', $event.target.value)\" matInput id=\"expName\" #expName placeholder=\"Company name\"\n      [(ngModel)]=\"experienceInputName\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input (change)=\"onExperienceInputChange('description', $event.target.value)\" matInput id=\"expDescription\" #expDescription\n      placeholder=\"Description\" [(ngModel)]=\"experienceInputDescription\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input (change)=\"onExperienceInputChange('duration', $event.target.value)\" matInput id=\"expDuration\" #expDuration placeholder=\"Duration\"\n      [(ngModel)]=\"experienceInputDuration\">\n  </mat-form-field>\n  <!-- SAVE BUTTON -->\n  <button (click)=\"addExperienceToUserObject()\" mat-raised-button color=\"primary\">Add experience</button>\n</div>\n\n<div *ngFor=\"let experience of UserObject.experiences\" mySpy class=\"experiences\">\n  <div *ngIf=\"experienceValidation(experience);else noContent\">\n    <div class=\"material-contact animate-in-card\">\n      <h1>{{experience.name}}</h1>\n      <div>{{experience.description}}</div>\n      <div>{{experience.duration}}</div>\n    </div>\n  </div>\n  <ng-template #noContent></ng-template>\n</div>\n\n<div class=\"material-contact animate-in-card\">\n  <button (click)=\"submitToFirebase()\" mat-raised-button color=\"accent\">Submit</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);", ""]);

// module
exports.push([module.i, "/*font (roboto)*/\n/*resets*/\n* {\n  padding: 0;\n  margin: 0;\n  font-family: \"Roboto\", sans-serif; }\n\n/*basic layout*/\n.material-contact {\n  width: 800px;\n  max-width: 90%;\n  height: auto;\n  padding: 50px 50px 50px 50px;\n  box-sizing: border-box;\n  display: block;\n  position: relative;\n  margin: 50px auto;\n  overflow: hidden;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);\n  background: #fff;\n  border-radius: 5px; }\n\n/*header*/\n.material-contact img {\n  width: 120px;\n  height: 120px;\n  display: block;\n  margin: 0 auto;\n  border-radius: 100%; }\n\n.material-contact h1 {\n  width: 100%;\n  height: auto;\n  padding: 15px 0 5px 0;\n  display: block;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.9rem;\n  font-weight: 300;\n  line-height: 1em;\n  text-align: center;\n  color: #000;\n  background: none; }\n\n.material-contact h2 {\n  width: 100%;\n  height: auto;\n  padding: 5px 0;\n  display: block;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 300;\n  line-height: 1em;\n  text-align: center;\n  color: #aaa;\n  background: none; }\n\n.material-contact hr {\n  width: 30%;\n  height: 0;\n  padding: 0;\n  display: block;\n  margin: 30px auto;\n  border: 1px solid #ddd; }\n\n/*info section*/\n.material-contact p {\n  width: 100%;\n  height: auto;\n  padding: 10px 0;\n  display: block;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.2em;\n  text-align: justify; }\n\n.material-contact .actions {\n  width: 100%;\n  height: auto;\n  padding: 0;\n  display: block;\n  margin: 10px 0 0 0;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  text-align: center; }\n\n.material-contact .actions a {\n  width: auto;\n  height: auto;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  margin: 5px auto;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1.2em;\n  text-decoration: none;\n  border-radius: 100px;\n  background: #fff;\n  color: #aaa;\n  transition: 0.1s; }\n\n.material-contact .actions a:hover {\n  background: #fff;\n  color: #000; }\n\n.material-contact .actions a:active {\n  background: #000;\n  color: #fff; }\n\n/*animation*/\n.animate-in-01 {\n  animation: animateIn 1s ease;\n  -webkit-animation: animateIn 1s ease; }\n\n.animate-in-02 {\n  animation: animateIn 1s ease forwards;\n  animation-delay: 0.2s;\n  -webkit-animation: animateIn 1s ease forwards;\n  -webkit-animation-delay: 0.2s;\n  opacity: 0; }\n\n.animate-in-03 {\n  animation: animateIn 1s ease forwards;\n  animation-delay: 0.4s;\n  -webkit-animation: animateIn 1s ease forwards;\n  -webkit-animation-delay: 0.4s;\n  opacity: 0; }\n\n.animate-in-04 {\n  animation: animateIn 1s ease forwards;\n  animation-delay: 0.5s;\n  -webkit-animation: animateIn 1s ease forwards;\n  -webkit-animation-delay: 0.5s;\n  opacity: 0; }\n\n.animate-in-05 {\n  animation: animateIn 1s ease forwards;\n  animation-delay: 0.6s;\n  -webkit-animation: animateIn 1s ease forwards;\n  -webkit-animation-delay: 0.6s;\n  opacity: 0; }\n\n@keyframes animateIn {\n  0% {\n    opacity: 0;\n    transform: translateY(50px);\n    -webkit-transform: translateY(50px);\n    -moz-transform: translateY(50px);\n    -ms-transform: translateY(50px);\n    -o-transform: translateY(50px); }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0); } }\n\n@-webkit-keyframes animateIn {\n  0% {\n    opacity: 0;\n    transform: translateY(50px);\n    -webkit-transform: translateY(50px);\n    -moz-transform: translateY(50px);\n    -ms-transform: translateY(50px);\n    -o-transform: translateY(50px); }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0); } }\n\n.animate-in-image {\n  animation: animateInImage 1s ease;\n  -webkit-animation: animateInImage 1s ease; }\n\n@keyframes animateInImage {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes animateInImage {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.animate-in-card {\n  animation: animateIn 0.7s ease;\n  -webkit-animation: animateIn 0.7s ease; }\n\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
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

var ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// Types :
var socialMedia = (function () {
    function socialMedia() {
    }
    return socialMedia;
}());
var experience = (function () {
    function experience() {
    }
    return experience;
}());
var User = (function () {
    function User() {
    }
    return User;
}());
var AppComponent = (function () {
    // expName.value;
    // expDuration.value;
    // expDescription.value;
    // TODO: definitly build frontend validation for  experience....
    function AppComponent(db) {
        this.experienceInputName = '';
        this.experienceInputDuration = '';
        this.experienceInputDescription = '';
        this.idGen = function () {
            var rtn = '';
            for (var i = 0; i < 8; i++) {
                rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
            }
            return rtn;
        };
        // this.slug = Md5.hashStr('blah blah blah');
        this.users = db.list('/users');
        this.UserID = this.idGen();
        this.UserObject = {
            name: "",
            title: "",
            description: "",
            socialMedia: {
                github: "",
                twitter: "",
                linkedIn: "",
            },
            experiences: [{
                    name: "testUser",
                    description: "testDesription",
                    duration: "testDuration",
                }],
        };
        this.ExperienceObjectArray = [null];
        this.ExperienceCounter = 0;
        var usersRef$ = this.users.valueChanges();
        usersRef$.subscribe(console.log);
    }
    AppComponent.prototype.onInputChange = function (key, value) {
        this.UserObject[key] = value;
        //console.log(this.UserObject);
    };
    AppComponent.prototype.onSocialInputChange = function (key, value) {
        this.UserObject.socialMedia[key] = value;
        //console.log(this.UserObject);
    };
    AppComponent.prototype.onExperienceInputChange = function (key, value) {
        //console.log("exp name : " + this.experienceInputName);
        try {
            if (!this.ExperienceObjectArray[this.ExperienceCounter]) {
                this.ExperienceObjectArray[this.ExperienceCounter] = {
                    name: "",
                    description: "",
                    duration: "",
                };
            }
            this.ExperienceObjectArray[this.ExperienceCounter][key] = value;
            //console.log(this.ExperienceObjectArray);
        }
        catch (error) {
            console.warn('error at the onExperienceInputChange: ' + error);
        }
    };
    AppComponent.prototype.addExperienceToUserObject = function () {
        if (!this.experienceValidation(this.ExperienceObjectArray[this.ExperienceCounter])) {
            console.log("invalid exp input. Not adding to userObj!");
            return;
        }
        console.log('writing to array number ' + this.ExperienceCounter);
        this.UserObject.experiences.push(this.ExperienceObjectArray[this.ExperienceCounter]);
        this.ExperienceCounter++;
        this.clearExperienceInput();
    };
    AppComponent.prototype.experienceValidation = function (experience) {
        // TODO : add alternative templates...
        try {
            if (!experience || experience.name === "" || experience.description === "" || experience.duration === "") {
                //TODO: user feedback
                return false;
            }
            else if (experience.name === "testUser" || experience.description === "testDesription" || experience.duration === "testDuration") {
                //TODO: user feedback
                return false;
            }
            else {
                return true;
            }
        }
        catch (error) {
            console.warn('error at the experienceValidation: ' + error);
        }
    };
    // clears the experience input fields
    AppComponent.prototype.clearExperienceInput = function () {
        this.experienceInputName = null;
        this.experienceInputDuration = null;
        this.experienceInputDescription = null;
    };
    AppComponent.prototype.removeItemFromList = function (key) {
        this.users.remove(key).then(function (_) { return console.log('item deleted!'); });
    };
    AppComponent.prototype.submitToFirebase = function () {
        //TODO: implement custom key!!!
        this.users.set(this.UserID, this.UserObject).then(function (_) { return console.log("Data pushed to Firebase!"); });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Firebase imports




// general imports







var User = (function () {
    function User() {
        this.description = 'Your Title';
        this.experiences = 'Ad Content';
        this.name = 5.0;
        this.socialMedia = 'http://via.placeholder.com/350x150';
    }
    return User;
}());

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["G" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatInputModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
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