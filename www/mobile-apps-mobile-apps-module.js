(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobile-apps-mobile-apps-module"],{

/***/ "./src/app/mobile-apps/mobile-apps.module.ts":
/*!***************************************************!*\
  !*** ./src/app/mobile-apps/mobile-apps.module.ts ***!
  \***************************************************/
/*! exports provided: MobileAppsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileAppsPageModule", function() { return MobileAppsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _mobile_apps_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile-apps.page */ "./src/app/mobile-apps/mobile-apps.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _mobile_apps_page__WEBPACK_IMPORTED_MODULE_5__["MobileAppsPage"]
    }
];
var MobileAppsPageModule = /** @class */ (function () {
    function MobileAppsPageModule() {
    }
    MobileAppsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_mobile_apps_page__WEBPACK_IMPORTED_MODULE_5__["MobileAppsPage"]]
        })
    ], MobileAppsPageModule);
    return MobileAppsPageModule;
}());



/***/ }),

/***/ "./src/app/mobile-apps/mobile-apps.page.html":
/*!***************************************************!*\
  !*** ./src/app/mobile-apps/mobile-apps.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Mobile Apps</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  Mobile apps that I have created and published to the app stores.\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Words Against the Clock</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button color=\"dark\">\n        <ion-icon name=\"logo-apple\"></ion-icon>Download for iOS</ion-button>\n      <ion-button color=\"dark\">\n        <ion-icon name=\"logo-android\"></ion-icon>Download for Android</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Football Squares Number Picker</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button color=\"dark\">\n        <ion-icon name=\"logo-apple\"></ion-icon>Download for iOS</ion-button>\n      <ion-button color=\"dark\">\n        <ion-icon name=\"logo-android\"></ion-icon>Download for Android</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Memory Stretch</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button color=\"dark\">\n        <ion-icon name=\"logo-apple\"></ion-icon>Download for iOS</ion-button>\n      <ion-button color=\"dark\">\n        <ion-icon name=\"logo-android\"></ion-icon>Download for Android</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Multi-Task Color-Match</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button color=\"dark\">\n        <ion-icon name=\"logo-apple\"></ion-icon>Download for iOS</ion-button>\n      <ion-button color=\"dark\">\n        <ion-icon name=\"logo-android\"></ion-icon>Download for Android</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/mobile-apps/mobile-apps.page.scss":
/*!***************************************************!*\
  !*** ./src/app/mobile-apps/mobile-apps.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mobile-apps/mobile-apps.page.ts":
/*!*************************************************!*\
  !*** ./src/app/mobile-apps/mobile-apps.page.ts ***!
  \*************************************************/
/*! exports provided: MobileAppsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileAppsPage", function() { return MobileAppsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MobileAppsPage = /** @class */ (function () {
    function MobileAppsPage() {
    }
    MobileAppsPage.prototype.ngOnInit = function () {
    };
    MobileAppsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mobile-apps',
            template: __webpack_require__(/*! ./mobile-apps.page.html */ "./src/app/mobile-apps/mobile-apps.page.html"),
            styles: [__webpack_require__(/*! ./mobile-apps.page.scss */ "./src/app/mobile-apps/mobile-apps.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], MobileAppsPage);
    return MobileAppsPage;
}());



/***/ })

}]);
//# sourceMappingURL=mobile-apps-mobile-apps-module.js.map