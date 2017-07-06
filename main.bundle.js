webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubHeaderComponent = (function () {
    function SubHeaderComponent() {
    }
    SubHeaderComponent.prototype.ngOnInit = function () {
    };
    return SubHeaderComponent;
}());
SubHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sub-header',
        template: __webpack_require__(170),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [])
], SubHeaderComponent);

//# sourceMappingURL=sub-header.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(171),
        styles: [__webpack_require__(163)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
        this.SubHeading = [
            // {"ModuleName":"Settings","IconUrl":"http://icons.iconarchive.com/icons/ampeross/qetto-2/128/settings-icon.png"},
            { "ModuleName": "Request an Appointment", "IconUrl": "http://icons.iconarchive.com/icons/saki/nuoveXT-2/128/Actions-appointment-new-icon.png" },
            { "ModuleName": "Request for Refill", "IconUrl": "http://icons.iconarchive.com/icons/dapino/medical/128/pills-pot-icon.png" }
        ];
        this.modules1 = [
            { "ModuleName": "Appointments", "IconUrl": "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/128/Actions-appointment-new-icon.png" },
            { "ModuleName": "Contact My Doctor", "IconUrl": "http://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/128/Mail-icon.png" },
            { "ModuleName": "Test Results", "IconUrl": "http://icons.iconarchive.com/icons/dapino/medical/128/medical-report-icon.png" },
            { "ModuleName": "Medications", "IconUrl": "http://icons.iconarchive.com/icons/medicalwp/medical/128/Pills-blue-icon.png" }
        ];
        this.modules2 = [
            { "ModuleName": "Health at a Glance", "IconUrl": "http://icons.iconarchive.com/icons/mcdo-design/smooth-leopard/128/History-Folder-Lavender-icon.png" },
            { "ModuleName": "Patient Health Questionaire", "IconUrl": "http://icons.iconarchive.com/icons/custom-icon-design/flatastic-9/128/Tests-icon.png" },
            { "ModuleName": "After Visit Summary", "IconUrl": "http://icons.iconarchive.com/icons/umut-pulat/tulliana-2/128/korganizer-icon.png" },
            { "ModuleName": "Patient Plan", "IconUrl": "http://icons.iconarchive.com/icons/icojam/blue-bits/128/document-write-icon.png" }
        ];
        this.modules3 = [
            { "ModuleName": "Caregivers", "IconUrl": "http://icons.iconarchive.com/icons/aha-soft/software/128/user-group-icon.png" },
            { "ModuleName": "Providers", "IconUrl": "http://icons.iconarchive.com/icons/icons-land/vista-people/128/Medical-Nurse-Male-Light-icon.png" },
            { "ModuleName": "Billing", "IconUrl": "http://icons.iconarchive.com/icons/webiconset/application/128/Invoice-icon.png" },
            { "ModuleName": "Education", "IconUrl": "http://icons.iconarchive.com/icons/saki/nuoveXT-2/128/Actions-document-find-icon.png" }
        ];
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(172),
        styles: [__webpack_require__(164)]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 103:
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

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".button{\r\n  font-size: large;\r\n  padding-left: 2%;\r\n  padding-right: 2%;\r\n\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "a:active\r\n{\r\n  font-weight: bold;\r\n  color: blueviolet!important;\r\n  border-bottom: solid 5px #005E63!important;\r\n  background-color: grey;\r\n}\r\n\r\n.ul-shadow{\r\n  box-shadow:         3px 1px 2px 1px #ccc;\r\n\r\n  border-bottom-left-radius: 15px;\r\n  padding-left: 10px; padding-bottom: 5px; padding-top: 5px;\r\n\r\n}\r\n.clicked{\r\n  color: #AD122A;\r\n  box-shadow: 2px 3px 2px 2px rgba(173,18,42, .1);\r\n  font-weight: bold;\r\n  border-right: none !important;\r\n  border-bottom-left-radius: 15px;\r\n  border-left: 3px solid #AD122A;\r\n  padding: 7px;\r\n}\r\n\r\nli:active{\r\n  color: #AD122A;\r\n  box-shadow: 2px 3px 2px 2px rgba(173,18,42, .1);\r\n  font-weight: bold;\r\n  border-right: 3px solid #AD122A;;\r\n  border-bottom-left-radius: 15px;\r\n  border-left: 3px solid #AD122A;\r\n  padding: 7px;\r\n  background-color: blue;\r\n\r\n}\r\n\r\nli:hover{\r\n  padding-left: 8px;\r\n  color: black /*#AD122A*/;\r\n  font-weight: bold;\r\n  border-left: 3px solid #AD122A;\r\n  box-shadow: 15px 0 50px 10px rgba(246, 246, 246, 0.2) inset, 2px 1px 2px 2px rgba(0 ,94, 99, .2);\r\n  border-top-right-radius: 20px;\r\n  border-bottom-right-radius: 20px;\r\n  background-color: lightgray;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".container-fluid{\r\n\r\n  background-color:gainsboro;\r\n}\r\n.button{\r\n  font-size: large;\r\n  margin: 20px;\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".container-fluid{\r\n\r\n  background-color: silver;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<div class=\"container\">\n<div class=\"row\">\n\n</div></div>\n\n\n\n\n"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div >\n    <!--Personal Details-->\n    <div class=\"row table-bordered\" style=\"padding-left: 1.5%\">\n        <h3>Caregiver Personal Details</h3>\n        <br>\n        <div class=\"col-sm-10\">\n          <div class=\"row\">\n               <div class=\"col-sm-3\">\n                 <label style=\"font-size: large\"> Name: </label>\n                 <input type=\"text\" class=\"form-inline\" style=\"font-size: large\" [value]=\"SelectedCaregiver.Name\" *ngIf=\"!IsPersonalDetailsEditable; else Name\" readonly>\n                 <ng-template #Name>\n                   <input type=\"text\" class=\"form-inline\" style=\"font-size: large\" [value]=\"SelectedCaregiver.Name\">\n                 </ng-template>\n              </div>\n\n            <div class=\"col-sm-3\">\n              <label style=\"font-size: large\"> Relationship: </label>\n              <input type=\"text\" *ngIf=\"!IsPersonalDetailsEditable; else Relationship\" class=\"form-inline\" style=\"font-size: large\" [value]=\"SelectedCaregiver.Relationship\" readonly>\n              <ng-template #Relationship>\n                <input type=\"text\" class=\"form-inline\" style=\"font-size: large\" value=\"\">\n              </ng-template>\n            </div>\n\n            <div class=\"col-sm-3\">\n              <label style=\"font-size: large\"> Email Id: </label>\n              <input type=\"email\" class=\"form-inline\" style=\"font-size: large\" [value]=\"SelectedCaregiver.EmailId\"  *ngIf=\"!IsPersonalDetailsEditable; else Email\" readonly >\n              <ng-template #Email>\n                <input type=\"text\" class=\"form-inline\" style=\"font-size: large\" [value]=\"SelectedCaregiver.EmailId\">\n              </ng-template>\n\n            </div>\n\n            <div class=\"col-sm-3\">\n              <label style=\"font-size: large\"> Contact Details: </label>\n              <input type=\"text\" class=\"form-inline\" style=\"font-size: large\" [value]=\"SelectedCaregiver.PhoneNumber\"  *ngIf=\"!IsPersonalDetailsEditable; else Contact\" readonly>\n              <ng-template #Contact>\n                <input type=\"text\" class=\"form-inline\" style=\"font-size: large\" [value]=\"SelectedCaregiver.PhoneNumber\">\n              </ng-template>\n\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"col-sm-2\">\n\n          <button *ngIf=\"!IsPersonalDetailsEditable\" class=\"btn-primary button\" align=\"middle\" (click)=\"OnPersonalEditClick()\">  <span class=\"glyphicon glyphicon-edit\"></span>    Edit Personal Details </button>\n\n          <button *ngIf=\"IsPersonalDetailsEditable\" class=\"btn-primary button\" align=\"middle\" (click)=\"OnPersonalSaveClick()\"> <span class=\"glyphicon glyphicon-floppy-save\"></span>    Save Personal Details </button>\n\n        </div>\n\n      <br>\n      <br> <br>\n\n    </div>\n    <br>\n    <!--Privelages-->\n    <div class=\"row table-bordered\" style=\"padding-left: 1.5%\">\n      <h3>Caregiver Privelages</h3>\n      <br>\n      <!--Privelages First Row-->\n      <div class=\"row\">\n        <div class=\"col-sm-10\">\n          <div class=\"row\">\n            <div class=\"col-sm-3\">\n              <label style=\"font-size: large\"> Power of Attorney: </label>\n              <label class=\"form-inline\" style=\"font-size: large\" *ngIf=\"!IsPrivelagesEditable && SelectedCaregiver.IsPowerofAttorney == true\">  Yes </label>\n              <label class=\"form-inline\" style=\"font-size: large\" *ngIf=\"!IsPrivelagesEditable && SelectedCaregiver.IsPowerofAttorney == false\">  No </label>\n              <ui-switch size=\"large\" *ngIf=\"IsPrivelagesEditable\"></ui-switch>\n            </div>\n\n            <div class=\"col-sm-3\">\n              <label style=\"font-size: large\"> View Reports: </label>\n              <label *ngIf=\"!IsPrivelagesEditable && SelectedCaregiver.ViewReports == true\" class=\"form-inline\" style=\"font-size: large\"> Yes </label>\n              <label *ngIf=\"!IsPrivelagesEditable && SelectedCaregiver.ViewReports == false\" class=\"form-inline\" style=\"font-size: large\"> No </label>\n              <ui-switch size=\"large\" *ngIf=\"IsPrivelagesEditable\"></ui-switch>\n\n            </div>\n\n            <div class=\"col-sm-3\">\n              <label style=\"font-size: large\"> View AVS: </label>\n              <label class=\"form-inline\" style=\"font-size: large\"  *ngIf=\"!IsPrivelagesEditable && SelectedCaregiver.ViewAVS == true\"> Yes </label>\n              <label class=\"form-inline\" style=\"font-size: large\"  *ngIf=\"!IsPrivelagesEditable && SelectedCaregiver.ViewAVS == false\"> No </label>\n              <ui-switch size=\"large\" *ngIf=\"IsPrivelagesEditable\"></ui-switch>\n\n            </div>\n\n            <div class=\"col-sm-3\">\n              <label style=\"font-size: large\"> View  Health at a Glance: </label>\n              <label class=\"form-inline\" style=\"font-size: large\" *ngIf=\"!IsPrivelagesEditable && SelectedCaregiver.ViewHealthGlance == true\"> Yes </label>\n              <label class=\"form-inline\" style=\"font-size: large\" *ngIf=\"!IsPrivelagesEditable && SelectedCaregiver.ViewHealthGlance == false\"> No </label>\n              <ui-switch size=\"large\" *ngIf=\"IsPrivelagesEditable\"></ui-switch>\n\n\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"col-sm-2\">\n\n          <button *ngIf=\"!IsPrivelagesEditable\" class=\"btn-primary button\" align=\"middle\" (click)=\"OnPrivelagesEditClick()\">  <span class=\"glyphicon glyphicon-edit\"></span>    Edit Privelages </button>\n\n          <button *ngIf=\"IsPrivelagesEditable\" class=\"btn-primary button\" align=\"middle\" (click)=\"OnPrivelagesSaveClick()\"> <span class=\"glyphicon glyphicon-floppy-save\"></span>    Save Privelages </button>\n\n        </div>\n      </div>\n      <br> <br>\n      <!--Privelages Second Row-->\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n            <label style=\"font-size: large\"> Providers: </label>\n                <ul>\n                  <li>\n                    View Providers\n                  </li>\n                  <li>\n                    Manage Providers\n                  </li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n\n\n        </div>\n\n      </div>\n\n      <br>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<app-sub-header></app-sub-header>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-2 table-bordered\" >\n      <br>\n      <br>\n      <br>\n      <a routerLink=\"/NewCaregiver\" style=\"font-size: 25px;padding-left: 10%\">\n        <span class=\"\tglyphicon glyphicon-plus-sign\"></span><u> Add New Caregiver</u>\n      </a>\n      <br>\n      <br>\n      <br>\n      <h3 style=\"padding-left: 10% \">Below are your caregivers- </h3>\n      <ul class=\"ul-shadow\" style=\"padding-left: 10% \">\n\n        <li *ngFor=\"let caregiver of caregiversList\" [class.clicked]=\"IsCaregiverSelected\" class=\"list-group-item\" style=\"font-size: large\">\n          <span class=\"glyphicon glyphicon-ok\" *ngIf=\"IsCaregiverSelected\"></span>\n          <a [routerLink]=\"['/Caregivers',caregiver.Id]\" (click)=\"OnClick()\">&nbsp;{{caregiver.Name}} </a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-sm-10\">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <br>\n            <p style=\"font-size: large\" *ngIf=\"!IsCaregiverSelected\">\n              {{caregiverGeneralDescription}}\n          </p>\n          </div>\n        <router-outlet *ngIf = IsCaregiverSelected></router-outlet>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-2\" align=\"left\">\n      <div>\n       <input type=\"button\" class=\"btn-primary button\" value=\"Back\" >\n      </div>\n    </div>\n    <div class=\"col-sm-10\" align=\"right\" >\n      <h3 style=\"color: darkblue\"> My CareGivers</h3>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-fluid\">\n   <div class=\"row\" class=\"panel-heading\" >\n      <div class=\"col-sm-1\">\n       <a routerLink=\"/Home\"><img\n              src=\"http://brandwise.unmc.edu/wp-content/uploads/sites/6/2014/07/overview-1.png\"\n              alt=\"UNMC Logo\"\n              style=\"max-height: 100px;\"> </a>\n\n      </div>\n      <div class=\"col-sm-10\" align=\"center\">\n        <h1 style=\"font-size: 48px\">MyChart</h1>\n       </div>\n      <div class=\"col-sm-1\">\n       <ul class=\"nav navbar-nav navbar-right\">\n         <li class=\"dropdown\">\n           <a href=\"#\" class=\"dropdown-toggle\" role=\"button\" style=\"font-size: 28px; color: black\">Logout <span class=\"caret\"></span></a>\n           <ul class=\"dropdown-menu\">\n             <li><a href=\"#\">Edit Profile</a></li>\n             <li><a href=\"#\">Logout</a></li>\n           </ul>\n         </li>\n       </ul>\n     </div>\n   </div>\n </div>\n"

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <div *ngFor=\"let module of SubHeading\" class=\"col-sm-4\" align=\"center\">\n      <a routerLink=\"/{{module.ModuleName}}\">\n        <img\n          [src]=\"module.IconUrl\"\n          [alt]=\"module.ModuleName\"\n          class=\"img-responsive\"\n          style=\"max-height: 70px;\" width=\"70px\">\n        <h2> {{module.ModuleName}} </h2>\n      </a>\n     </div>\n\n    <div class=\"col-sm-4\" align=\"center\">\n      <input type=\"text\" placeholder=\"Enter search string\" class=\"input-lg\">\n      <button type=\"button\" class=\"btn btn-default\">\n        <span class=\"glyphicon glyphicon-search\"></span>\n      </button>\n\n    </div>\n\n  </div>\n  <br>\n  <br>\n\n <div class=\"row\">\n    <div *ngFor=\"let module of modules1\" class=\"col-sm-3\" align=\"center\">\n      <a routerLink=\"/{{module.ModuleName}}\" class=\"list-group-item\">\n      <img\n          [src]=\"module.IconUrl\"\n          alt=\"{{ module.ModuleName }}\"\n          class=\"img-responsive\"\n          style=\"max-height: 200px;\" width=\"200px\">\n       <h2> {{ module.ModuleName }}</h2>\n      </a>\n\n    </div>\n  </div>\n  <br>\n  <br>\n\n  <div class=\"row\">\n    <div *ngFor=\"let module of modules2\" class=\"col-sm-3\" align=\"center\">\n      <a routerLink=\"/{{module.ModuleName}}\" class=\"list-group-item\">\n        <img\n          [src]=\"module.IconUrl\"\n          alt=\"{{ module.ModuleName }}\"\n          class=\"img-responsive\"\n          style=\"max-height: 200px;\" width=\"200px\">\n        <h2> {{ module.ModuleName }}</h2>\n      </a>\n\n    </div>\n  </div>\n  <br>\n  <br>\n\n\n  <div class=\"row\">\n    <div *ngFor=\"let module of modules3\" class=\"col-sm-3\" align=\"center\">\n      <a routerLink=\"/{{module.ModuleName}}\" class=\"list-group-item\">\n        <img\n          [src]=\"module.IconUrl\"\n          alt=\"{{ module.ModuleName }}\"\n          class=\"img-responsive\"\n          style=\"max-height: 200px;\" width=\"200px\">\n        <h2> {{ module.ModuleName }}</h2>\n      </a>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(88);


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__caregiver_Model__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caregiverService; });

var caregiverService = (function () {
    function caregiverService() {
        this.caregiversList = [
            new __WEBPACK_IMPORTED_MODULE_0__caregiver_Model__["a" /* caregiver */](1, "Tom Windle", "", "Tom.Windle@unmc.edu", "(402) 987- 3241", "Friend", false, true, true, true, true, false, true, false, true, false, true, false, true, false, true),
            new __WEBPACK_IMPORTED_MODULE_0__caregiver_Model__["a" /* caregiver */](2, "Yves", "", "yves@unomaha.edu", "(402) 458- 7412", "Son", false, true, true, true, true, false, true, false, true, false, true, false, true, false, true),
            new __WEBPACK_IMPORTED_MODULE_0__caregiver_Model__["a" /* caregiver */](3, "Aditya", "", "achouhan@unomaha.edu", "(402) 913- 4882", "Father", false, true, true, true, true, false, true, false, true, false, true, false, true, false, true),
        ];
        this.caregiverGeneralDescription = "Caregivers are the individuals which help patients with the basic life functions, manage medical care, help people  maintain health and remain in their home or community. " +
            "Caregivers are the individuals which help patients with the basic life functions, manage medical care, help people  maintain health and remain in their home or community";
    }
    caregiverService.prototype.getCaregiversList = function () {
        return this.caregiversList.slice();
    };
    caregiverService.prototype.getCaregiverGeneralDescription = function () {
        return this.caregiverGeneralDescription;
    };
    caregiverService.prototype.getCaregiverDetails = function (index) {
        return this.caregiversList[index - 1];
    };
    return caregiverService;
}());

//# sourceMappingURL=caregiver.Service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 87;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(103);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(167),
        styles: [__webpack_require__(159)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__caregivers_caregivers_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__caregivers_sub_header_sub_header_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__caregivers_caregiver_details_caregiver_details_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__caregivers_caregiver_Service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_ui_switch_dist_ui_switch_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_ui_switch_dist_ui_switch_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_ui_switch_dist_ui_switch_component__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__main_main_component__["a" /* MainComponent */] },
    { path: 'Caregivers', component: __WEBPACK_IMPORTED_MODULE_7__caregivers_caregivers_component__["a" /* CaregiversComponent */],
        children: [
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_10__caregivers_caregiver_details_caregiver_details_component__["a" /* CaregiverDetailsComponent */] }
        ] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_7__caregivers_caregivers_component__["a" /* CaregiversComponent */],
            __WEBPACK_IMPORTED_MODULE_9__caregivers_sub_header_sub_header_component__["a" /* SubHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__caregivers_caregiver_details_caregiver_details_component__["a" /* CaregiverDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_12_angular2_ui_switch_dist_ui_switch_component__["UiSwitchComponent"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__caregivers_caregiver_Service__["a" /* caregiverService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__caregiver_Service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaregiverDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaregiverDetailsComponent = (function () {
    function CaregiverDetailsComponent(route, objCaregiverService) {
        this.route = route;
        this.objCaregiverService = objCaregiverService;
        this.IsPersonalDetailsEditable = false;
        this.IsPrivelagesEditable = false;
        this.Relationships = ['Son',
            'Daughter',
            'Brother',
            'Sister',
            'Friend',
            'Father',
            'Mother',
            'Husband',
            'Wife',
            'GrandSon',
            'GrandDaughter',
            'GrandFather',
            'GrandMother'];
    }
    CaregiverDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.SelectedCaregiverId = +params['id'];
            _this.SelectedCaregiver = _this.objCaregiverService.getCaregiverDetails(_this.SelectedCaregiverId);
        });
    };
    CaregiverDetailsComponent.prototype.OnPersonalEditClick = function () {
        this.IsPersonalDetailsEditable = true;
    };
    CaregiverDetailsComponent.prototype.OnPersonalSaveClick = function () {
        this.IsPersonalDetailsEditable = false;
    };
    CaregiverDetailsComponent.prototype.OnPrivelagesEditClick = function () {
        this.IsPrivelagesEditable = true;
    };
    CaregiverDetailsComponent.prototype.OnPrivelagesSaveClick = function () {
        this.IsPrivelagesEditable = false;
    };
    return CaregiverDetailsComponent;
}());
CaregiverDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-caregiver-details',
        template: __webpack_require__(168),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__caregiver_Service__["a" /* caregiverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__caregiver_Service__["a" /* caregiverService */]) === "function" && _b || Object])
], CaregiverDetailsComponent);

var _a, _b;
//# sourceMappingURL=caregiver-details.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caregiver; });
/**
 * Created by aditya.chouhan on 7/5/2017.
 */
var caregiver = (function () {
    function caregiver(Id, Name, ImageURL, EmailId, PhoneNumber, Relationship, IsPowerofAttorney, ViewReports, ViewAVS, ViewHealthGlance, ViewProviders, ManageProviders, ViewMessages, SendMessages, ViewMedications, RefillMedication, ViewBills, PayBills, ViewAppointments, ScheduleAppointments, FillQuestionnaire) {
        this.Id = Id;
        this.Name = Name;
        this.ImageURL = ImageURL;
        this.EmailId = EmailId;
        this.PhoneNumber = PhoneNumber;
        this.Relationship = Relationship;
        this.IsPowerofAttorney = IsPowerofAttorney;
        this.ViewReports = ViewReports;
        this.ViewAVS = ViewAVS;
        this.ViewHealthGlance = ViewHealthGlance;
        this.ViewProviders = ViewProviders;
        this.ManageProviders = ManageProviders;
        this.ViewMessages = ViewMessages;
        this.SendMessages = SendMessages;
        this.ViewMedications = ViewMedications;
        this.RefillMedication = RefillMedication;
        this.ViewBills = ViewBills;
        this.PayBills = PayBills;
        this.ViewAppointments = ViewAppointments;
        this.ScheduleAppointments = ScheduleAppointments;
        this.FillQuestionnaire = FillQuestionnaire;
    }
    return caregiver;
}());

//# sourceMappingURL=caregiver.Model.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__caregiver_Service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaregiversComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaregiversComponent = (function () {
    function CaregiversComponent(route, objCaregiver) {
        this.route = route;
        this.objCaregiver = objCaregiver;
        this.IsCaregiverSelected = false;
    }
    CaregiversComponent.prototype.ngOnInit = function () {
        this.caregiversList = this.objCaregiver.getCaregiversList();
        this.caregiverGeneralDescription = this.objCaregiver.getCaregiverGeneralDescription();
    };
    CaregiversComponent.prototype.OnClick = function () {
        this.IsCaregiverSelected = true;
    };
    return CaregiversComponent;
}());
CaregiversComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-caregivers',
        template: __webpack_require__(169),
        styles: [__webpack_require__(161)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__caregiver_Service__["a" /* caregiverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__caregiver_Service__["a" /* caregiverService */]) === "function" && _b || Object])
], CaregiversComponent);

var _a, _b;
//# sourceMappingURL=caregivers.component.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.bundle.js.map