(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n\r\n<div class=\"container main-content\">\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-user-info></app-user-info>\n<div class=\"content\">\n    <div class=\"home-content\">\n        <a routerLink=\"/home/tasks\" routerLinkActive=\"active\">All Tasks</a>\n        <a routerLink=\"/home/new\" routerLinkActive=\"active\">New Task</a>\n        <a routerLink=\"/home/updateUserInfo\" routerLinkActive=\"active\">Update User Info</a>\n    </div>\n    <div class=\"home-data\">\n        <router-outlet></router-outlet>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"formStyle\">\n    <div class=\"head\">\n        <h2> Login <span class=\"glyphicon glyphicon-share\"></span></h2>\n    </div>\n    <div class=\"body\">\n        <form [formGroup]=\"loginForm\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error' : hasError('email')}\">\n                <label for=\"email\" class=\"col-sm-3 control-label\">Email</label>\n                <div class=\"col-sm-9\">\n                    <input type=\"email\" (blur)=\"getFormError()\" class=\"form-control\" id=\"email\" formControlName=\"email\" placeholder=\"Email\">\n                    <span class=\"help-block\" *ngIf=\"hasError('email')\">\n                        {{ loginFormErrors.email }}\n                    </span>\n                </div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error' : hasError('password')}\">\n                <label for=\"password\" class=\"col-sm-3 control-label\">Password</label>\n                <div class=\"col-sm-9\">\n                    <input type=\"password\" (blur)=\"getFormError()\" class=\"form-control\" id=\"password\" formControlName=\"password\" placeholder=\"Password\">\n                    <span class=\"help-block\" *ngIf=\"hasError('password')\">\n                        {{ loginFormErrors.password }}\n                    </span>\n                </div>\n            </div>\n            <div class=\"form-group\">\n            <div class=\"col-sm-offset-3 col-sm-9\">\n                <button type=\"submit\" [disabled]=\"loginForm.invalid\" class=\"btn col-sm-12\">Login</button>\n            </div>\n            </div>\n        </form>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar\">\n    <div class=\"container\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#urlS\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" routerLink=\"/home\">ToDo</a>\n      </div>\n  \n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"urlS\">\n        <ul class=\"nav navbar-nav\">\n          <li><a routerLink=\"/home\" *ngIf=\"isLogein\" routerLinkActive=\"active\">Home <span class=\"sr-only\">(current)</span></a></li>\n        </ul>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a routerLink=\"/login\" *ngIf=\"!isLogein\" routerLinkActive=\"active\">Login</a></li>\n          <li><a routerLink=\"/signup\" *ngIf=\"!isLogein\" routerLinkActive=\"active\">SignUp</a></li>\n          <li><a (click)=\"logOut()\" *ngIf=\"isLogein\">Logout</a></li>\n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-task/new-task.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-task/new-task.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"formStyle\">\n        <div class=\"head\">\n            <h2> {{pageCase.case | titlecase}} <span class=\"glyphicon glyphicon-list-alt\"></span></h2>\n        </div>\n        <div class=\"body\">\n            <form [formGroup]=\"taskForm\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\" [ngClass]=\"{'has-error' : hasError('name')}\">\n                    <label for=\"name\" class=\"col-sm-3 control-label\">Name</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" (blur)=\"getFormError()\" class=\"form-control\" id=\"name\" formControlName=\"name\" placeholder=\"Name\">\n                        <span class=\"help-block\" *ngIf=\"hasError('name')\">\n                            {{ taskFormErrors.name }}\n                        </span>\n                    </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'has-error' : hasError('description')}\">\n                    <label for=\"description\" class=\"col-sm-3 control-label\">Description</label>\n                    <div class=\"col-sm-9\">\n                        <textarea (blur)=\"getFormError()\" class=\"form-control\" id=\"description\" formControlName=\"description\" placeholder=\"Description\"></textarea>\n                        <span class=\"help-block\" *ngIf=\"hasError('description')\">\n                            {{ taskFormErrors.description }}\n                        </span>\n                    </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'has-error' : hasError('color')}\">\n                    <label for=\"color\" class=\"col-sm-3 control-label\">Color</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"color\" (blur)=\"getFormError()\" id=\"color\" formControlName=\"color\" placeholder=\"Color\">\n                        <span class=\"help-block\" *ngIf=\"hasError('color')\">\n                            {{ taskFormErrors.color }}\n                        </span>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                <div class=\"col-sm-offset-3 col-sm-9\">\n                    <button type=\"submit\" [disabled]=\"taskForm.invalid\" class=\"btn col-sm-12\">Save</button>\n                </div>\n                </div>\n            </form>\n        </div>\n    </div>\n        ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p class=\"main\"> 404 Not found page</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"formStyle\">\n    <div class=\"head\">\n        <h2> {{pageCase | titlecase}} <span class=\"glyphicon glyphicon-user\"></span></h2>\n    </div>\n    <div class=\"body\">\n        <form [formGroup]=\"signupForm\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error' : hasError('fullname')}\">\n                <label for=\"fullname\" class=\"col-sm-3 control-label\">Full Name</label>\n                <div class=\"col-sm-9\">\n                    <input type=\"text\" (blur)=\"getFormError()\" class=\"form-control\" id=\"fullname\" formControlName=\"fullname\" placeholder=\"Full Name\">\n                    <span class=\"help-block\" *ngIf=\"hasError('fullname')\">\n                        {{ signupFormErrors.fullname }}\n                    </span>\n                </div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error' : hasError('email')}\">\n                <label for=\"email\" class=\"col-sm-3 control-label\">Email</label>\n                <div class=\"col-sm-9\">\n                    <input type=\"email\" (blur)=\"getFormError()\" class=\"form-control\" id=\"email\" formControlName=\"email\" placeholder=\"Email\">\n                    <span class=\"help-block\" *ngIf=\"hasError('email')\">\n                        {{ signupFormErrors.email }}\n                    </span>\n                </div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error' : hasError('password')}\">\n                <label for=\"password\" class=\"col-sm-3 control-label\">Password</label>\n                <div class=\"col-sm-9\">\n                    <input type=\"password\" (blur)=\"getFormError()\" class=\"form-control\" id=\"password\" formControlName=\"password\" placeholder=\"Password\">\n                    <span class=\"help-block\" *ngIf=\"hasError('password')\">\n                        {{ signupFormErrors.password }}\n                    </span>\n                </div>\n            </div>\n            <div class=\"form-group\">\n            <div class=\"col-sm-offset-3 col-sm-9\">\n                <button type=\"submit\" [disabled]=\"signupForm.invalid\" class=\"btn col-sm-12\">{{pageCase | titlecase}}</button>\n            </div>\n            </div>\n        </form>\n    </div>\n</div>\n    ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br><br>\n<p class=\"alert alert-danger\" *ngIf=\"!tasks\"> You have no tasks </p>\n<div class=\"col-md-4 col-sm-6 col-xs-12 task-content\" *ngFor=\"let task of tasks\">\n    <div class=\"task\" [style.background-color]=\"task.color\">\n        <div class=\"name-oprations\">\n            {{task.name}}\n            <span class=\"pull-right\">\n                <a [routerLink]=\"'/home/updateTask/'+task._id\"><span class=\"glyphicon glyphicon-pencil\" title=\"Edit\"></span></a>\n                <span (click)=\"removeTask(task._id)\" class=\"glyphicon glyphicon-trash\" title=\"Delete\"></span>\n            </span>\n            </div>\n        <div class=\"description\">\n            {{task.description}}\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-info/user-info.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-info/user-info.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p class=\"user-info\">Welcome {{userInfo.fullName}} To Your ToDo List</p>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
            /* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
            /* harmony import */ var _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-task/new-task.component */ "./src/app/new-task/new-task.component.ts");
            /* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
            var routes = [
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                {
                    path: 'home',
                    component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
                    children: [
                        {
                            path: '',
                            canActivateChild: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
                            children: [
                                { path: '', component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__["TasksComponent"] },
                                { path: 'tasks', component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__["TasksComponent"] },
                                { path: 'new', component: _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_6__["NewTaskComponent"] },
                                { path: 'updateTask/:id', component: _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_6__["NewTaskComponent"] },
                                { path: 'updateUserInfo', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
                            ]
                        },
                    ]
                },
                { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".main-content{\r\n    background-color: #00000040;\r\n    margin-top: -20px;\r\n    padding-top: 20px;\r\n    border-radius: 0 0 10px 10px;\r\n    min-height: 540px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDQwO1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1NDBweDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Todo List';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
            /* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user-info/user-info.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
            /* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
            /* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
            /* harmony import */ var _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./new-task/new-task.component */ "./src/app/new-task/new-task.component.ts");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
            /* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./jwt.service */ "./src/app/jwt.service.ts");
            /* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./task.service */ "./src/app/task.service.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                        _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                        _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_10__["UserInfoComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"],
                        _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_14__["TasksComponent"],
                        _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_15__["NewTaskComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                        angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"].forRoot()
                    ],
                    providers: [
                        _user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"],
                        _jwt_service__WEBPACK_IMPORTED_MODULE_17__["JwtService"],
                        _task_service__WEBPACK_IMPORTED_MODULE_18__["TaskService"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth.guard.ts": 
        /*!*******************************!*\
          !*** ./src/app/auth.guard.ts ***!
          \*******************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(user, router) {
                    this.user = user;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    if (this.user.isLoggedin()) {
                        return true;
                    }
                    this.router.navigate(['/login']);
                    return false;
                };
                AuthGuard.prototype.canActivateChild = function (route, state) {
                    return this.canActivate(route, state);
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".home-content a{\r\n    display: inline-block;\r\n    width: 33.333%;\r\n    text-align: center;\r\n    padding: 20px;\r\n    background-color: #2131ab1a;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    transition: ease-in-out .4s;\r\n}\r\n.home-content a.active{\r\n    background-color: #2131ab47\r\n}\r\n.home-content a:hover{\r\n    background-color: #2131abb0\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1jb250ZW50IGF7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzMuMzMzJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEzMWFiMWE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC40cztcclxufVxyXG4uaG9tZS1jb250ZW50IGEuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMzFhYjQ3XHJcbn1cclxuLmhvbWUtY29udGVudCBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMzFhYmIwXHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/jwt.service.ts": 
        /*!********************************!*\
          !*** ./src/app/jwt.service.ts ***!
          \********************************/
        /*! exports provided: JwtService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function () { return JwtService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
            /* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
            var JwtService = /** @class */ (function () {
                function JwtService() {
                }
                JwtService.prototype.getToken = function () {
                    return localStorage.getItem('token');
                };
                JwtService.prototype.setToken = function (token) {
                    return localStorage.setItem('token', token);
                };
                JwtService.prototype.resetToken = function () {
                    localStorage.removeItem('token');
                };
                JwtService.prototype.isTokenExpire = function () {
                    var token = this.getToken();
                    if (token) {
                        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
                        var date = new Date(0);
                        date.setUTCSeconds(decoded.exp);
                        return !(date.valueOf() > new Date().valueOf());
                    }
                    else {
                        return true;
                    }
                };
                return JwtService;
            }());
            JwtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], JwtService);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/login/login.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".formStyle{\r\n    background-color: #0c0c0c;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n}\r\n.formStyle .head{\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n.formStyle .body{\r\n    padding: 27px;\r\n    background-color: #040404;\r\n}\r\n.formStyle .body .form-control{\r\n    background-color: transparent;\r\n    padding: 22px 10px;\r\n    text-align: center;\r\n    color: #fff;\r\n    font-size: 15px;\r\n    font-family: monospace;\r\n}\r\n.formStyle .body .btn{\r\n    background-color: #ffffff36;\r\n    padding: 9px;\r\n    color: #fff;\r\n}\r\n.formStyle .body .btn:hover{\r\n    background-color: #2323236e;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybVN0eWxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjMGMwYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5mb3JtU3R5bGUgLmhlYWR7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb3JtU3R5bGUgLmJvZHl7XHJcbiAgICBwYWRkaW5nOiAyN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0MDQwNDtcclxufVxyXG4uZm9ybVN0eWxlIC5ib2R5IC5mb3JtLWNvbnRyb2x7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDIycHggMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxufVxyXG4uZm9ybVN0eWxlIC5ib2R5IC5idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMzY7XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uZm9ybVN0eWxlIC5ib2R5IC5idG46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzNmU7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _my_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../my-validation */ "./src/app/my-validation.ts");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(fb, flashMessage, router, route, user) {
                    this.fb = fb;
                    this.flashMessage = flashMessage;
                    this.router = router;
                    this.route = route;
                    this.user = user;
                    this.loginFormErrors = {
                        email: '',
                        password: '',
                    };
                }
                LoginComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loginForm = this.fb.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[a-zA-Z0-9_\-\.]+\@[a-zA-Z0-9_\-\.]{3,9}\.[a-zA-Z]{3,}/)]],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]]
                    });
                    this.loginForm.valueChanges.subscribe(function (_) {
                        _this.getFormError();
                    });
                };
                LoginComponent.prototype.getFormError = function () {
                    this.loginFormErrors = _my_validation__WEBPACK_IMPORTED_MODULE_5__["MyValidation"].getFormError(this.loginForm);
                };
                LoginComponent.prototype.hasError = function (field) {
                    return _my_validation__WEBPACK_IMPORTED_MODULE_5__["MyValidation"].hasError(this.loginForm, field);
                };
                LoginComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.user.loginOrSignupOrUpdateUser(this.loginForm.value, 'login').subscribe(function (res) {
                        if (res['status'] === 'done') {
                            _this.flashMessage.show(res['status'] + " : Welcome ", { cssClass: "alert-success" });
                            localStorage.setItem('token', res['token']);
                            localStorage.setItem('userInfo', JSON.stringify(res['data']));
                            location.href = '/home';
                        }
                        else {
                            _this.flashMessage.show(res['status'] + " : " + res['error'], { cssClass: "alert-danger" });
                        }
                    }, function (err) {
                        _this.flashMessage.show(err.message, { cssClass: 'alert-danger' });
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/my-validation.ts": 
        /*!**********************************!*\
          !*** ./src/app/my-validation.ts ***!
          \**********************************/
        /*! exports provided: MyValidation */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyValidation", function () { return MyValidation; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var MyValidation = /** @class */ (function () {
                function MyValidation() {
                }
                MyValidation.errorMessage = function (error, fielname) {
                    return fielname + " " + this.errors[error];
                };
                MyValidation.hasError = function (form, field) {
                    return (form.get(field).invalid && (form.get(field).touched || form.get(field).dirty));
                };
                MyValidation.getFormError = function (form) {
                    var _this = this;
                    var signupFormErrors = {};
                    Object.keys(form.controls).forEach(function (controll) {
                        signupFormErrors[controll] = '';
                        if (form.get(controll).invalid) {
                            Object.keys(form.get(controll).errors).forEach(function (error) {
                                signupFormErrors[controll] += _this.errorMessage(error, controll) + ' ';
                            });
                        }
                    });
                    return signupFormErrors;
                };
                return MyValidation;
            }());
            MyValidation.errors = {
                required: ' is required field',
                minlength: ' has little character',
                maxlength: ' has much character',
                min: ' has small value',
                max: ' has large value',
                pattern: ' is not match pattern',
                email: 'this is not email'
            };
            /***/ 
        }),
        /***/ "./src/app/navbar/navbar.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/navbar/navbar.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".navbar {\r\n    background-color: #000000;\r\n    border: none;\r\n    border-radius: 0;\r\n}\r\n.navbar .navbar-nav>li>a {\r\n    color: #fff;\r\n}\r\n.navbar .navbar-nav>li>a.active {\r\n    background-color: #101010;\r\n    color: #3f3fab;\r\n    font-weight: bold;\r\n}\r\n.navbar-brand{\r\n    letter-spacing: 3px;\r\n    font-family: monospace;\r\n}\r\n.navbar-brand {\r\n    color: #FF9800;\r\n    font-weight: bold;\r\n}\r\n.nav>li>a:hover {\r\n    background-color: #151515;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLm5hdmJhciAubmF2YmFyLW5hdj5saT5hIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5uYXZiYXIgLm5hdmJhci1uYXY+bGk+YS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTAxMDtcclxuICAgIGNvbG9yOiAjM2YzZmFiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm5hdmJhci1icmFuZHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG59XHJcbi5uYXZiYXItYnJhbmQge1xyXG4gICAgY29sb3I6ICNGRjk4MDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubmF2PmxpPmE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/navbar/navbar.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/navbar/navbar.component.ts ***!
          \********************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jwt.service */ "./src/app/jwt.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent(jwt, router) {
                    this.jwt = jwt;
                    this.router = router;
                }
                NavbarComponent.prototype.ngOnInit = function () {
                    this.isLogein = !this.jwt.isTokenExpire();
                };
                NavbarComponent.prototype.logOut = function () {
                    this.jwt.resetToken();
                    this.isLogein = false;
                    this.router.navigate(['/login']);
                };
                return NavbarComponent;
            }());
            NavbarComponent.ctorParameters = function () { return [
                { type: _jwt_service__WEBPACK_IMPORTED_MODULE_2__["JwtService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/app/new-task/new-task.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/new-task/new-task.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".formStyle{\r\n    background-color: #0c0c0c;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n}\r\n.formStyle .head{\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n.formStyle .body{\r\n    padding: 27px;\r\n    background-color: #040404;\r\n}\r\n.formStyle .body .form-control{\r\n    background-color: transparent;\r\n    padding: 22px 10px;\r\n    text-align: center;\r\n    color: #fff;\r\n    font-size: 15px;\r\n    font-family: monospace;\r\n}\r\n.formStyle .body .btn{\r\n    background-color: #ffffff36;\r\n    padding: 9px;\r\n    color: #fff;\r\n}\r\n.formStyle .body .btn:hover{\r\n    background-color: #2323236e;\r\n}\r\n.formStyle .body [type=\"color\"]{\r\n    padding: 0;\r\n    height: 40px;\r\n    width: 100%;\r\n    border: 1px solid #ccc;\r\n    border-radius: 40px;\r\n    overflow: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXRhc2svbmV3LXRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9uZXctdGFzay9uZXctdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1TdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzBjMGM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uZm9ybVN0eWxlIC5oZWFke1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9ybVN0eWxlIC5ib2R5e1xyXG4gICAgcGFkZGluZzogMjdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDA0MDQ7XHJcbn1cclxuLmZvcm1TdHlsZSAuYm9keSAuZm9ybS1jb250cm9se1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAyMnB4IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbn1cclxuLmZvcm1TdHlsZSAuYm9keSAuYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjM2O1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmZvcm1TdHlsZSAuYm9keSAuYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMzZlO1xyXG59XHJcbi5mb3JtU3R5bGUgLmJvZHkgW3R5cGU9XCJjb2xvclwiXXtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/new-task/new-task.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/new-task/new-task.component.ts ***!
          \************************************************/
        /*! exports provided: NewTaskComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function () { return NewTaskComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _my_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../my-validation */ "./src/app/my-validation.ts");
            /* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
            var NewTaskComponent = /** @class */ (function () {
                function NewTaskComponent(fb, task, flashMessage, route) {
                    this.fb = fb;
                    this.task = task;
                    this.flashMessage = flashMessage;
                    this.route = route;
                    this.taskFormErrors = {
                        name: '',
                        description: '',
                        color: '',
                    };
                    this.pageCase = {
                        case: 'new'
                    };
                }
                NewTaskComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.taskForm = this.fb.group({
                        name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
                        description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
                        color: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    });
                    this.taskForm.valueChanges.subscribe(function (_) {
                        _this.getFormError();
                    });
                    this.route.paramMap.subscribe(function (params) {
                        var id = params.get('id');
                        if (id) {
                            _this.pageCase['case'] = 'update';
                            _this.pageCase['id'] = id;
                            _this.getUserData();
                        }
                    });
                };
                NewTaskComponent.prototype.getUserData = function () {
                    var _this = this;
                    this.task.getTaskData(this.pageCase['id']).subscribe(function (res) {
                        if (res['status'] === "done") {
                            var data = res['data'];
                            _this.taskForm.patchValue({ name: data['name'], description: data['description'], color: data['color'] });
                        }
                        else {
                            _this.flashMessage.show(res['status'] + " : " + res['error'], { cssClass: "alert-danger" });
                        }
                    }, function (err) {
                        console.log({ err: err });
                        _this.flashMessage.show(err.message, { cssClass: "alert-danger" });
                    });
                };
                NewTaskComponent.prototype.hasError = function (field) {
                    return _my_validation__WEBPACK_IMPORTED_MODULE_5__["MyValidation"].hasError(this.taskForm, field);
                };
                NewTaskComponent.prototype.getFormError = function () {
                    this.taskFormErrors = _my_validation__WEBPACK_IMPORTED_MODULE_5__["MyValidation"].getFormError(this.taskForm);
                };
                NewTaskComponent.prototype.onSubmit = function () {
                    var _this = this;
                    var data = this.taskForm.value;
                    if (this.pageCase['id']) {
                        data['_id'] = this.pageCase['id'];
                    }
                    this.task.newAndUpdateTask(data, this.pageCase['case']).subscribe(function (res) {
                        if (res['status'] === "done") {
                            _this.flashMessage.show(res['status'] + " : you can Login now ", { cssClass: "alert-success" });
                            if (_this.pageCase['case'] === 'update') {
                                _this.getUserData();
                            }
                            else {
                                _this.taskForm.patchValue({ name: '', description: '', color: '#000' });
                            }
                        }
                        else {
                            _this.flashMessage.show(res['status'] + " : " + res['error'], { cssClass: "alert-danger" });
                        }
                    }, function (err) {
                        _this.flashMessage.show(err.message, { cssClass: "alert-danger" });
                    });
                };
                return NewTaskComponent;
            }());
            NewTaskComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"] },
                { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            NewTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-new-tasl',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-task/new-task.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-task.component.css */ "./src/app/new-task/new-task.component.css")).default]
                })
            ], NewTaskComponent);
            /***/ 
        }),
        /***/ "./src/app/not-found/not-found.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/not-found/not-found.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".main{\r\n    text-align: center;\r\n    font-size: 24px;\r\n    background-color: #713737ab;\r\n    padding: 20px;\r\n    border-radius: 57px;\r\n    font-family: monospace;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MTM3MzdhYjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1N3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/not-found/not-found.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/not-found/not-found.component.ts ***!
          \**************************************************/
        /*! exports provided: NotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () { return NotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NotFoundComponent = /** @class */ (function () {
                function NotFoundComponent() {
                }
                NotFoundComponent.prototype.ngOnInit = function () {
                };
                return NotFoundComponent;
            }());
            NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")).default]
                })
            ], NotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/signup/signup.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/signup/signup.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".formStyle{\r\n    background-color: #0c0c0c;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n}\r\n.formStyle .head{\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n.formStyle .body{\r\n    padding: 27px;\r\n    background-color: #040404;\r\n}\r\n.formStyle .body .form-control{\r\n    background-color: transparent;\r\n    padding: 22px 10px;\r\n    text-align: center;\r\n    color: #fff;\r\n    font-size: 15px;\r\n    font-family: monospace;\r\n}\r\n.formStyle .body .btn{\r\n    background-color: #ffffff36;\r\n    padding: 9px;\r\n    color: #fff;\r\n}\r\n.formStyle .body .btn:hover{\r\n    background-color: #2323236e;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1TdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzBjMGM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uZm9ybVN0eWxlIC5oZWFke1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9ybVN0eWxlIC5ib2R5e1xyXG4gICAgcGFkZGluZzogMjdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDA0MDQ7XHJcbn1cclxuLmZvcm1TdHlsZSAuYm9keSAuZm9ybS1jb250cm9se1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAyMnB4IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbn1cclxuLmZvcm1TdHlsZSAuYm9keSAuYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjM2O1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmZvcm1TdHlsZSAuYm9keSAuYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMzZlO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/signup/signup.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/signup/signup.component.ts ***!
          \********************************************/
        /*! exports provided: SignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function () { return SignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _my_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../my-validation */ "./src/app/my-validation.ts");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
            var SignupComponent = /** @class */ (function () {
                function SignupComponent(fb, router, user, flashMessage, route) {
                    this.fb = fb;
                    this.router = router;
                    this.user = user;
                    this.flashMessage = flashMessage;
                    this.route = route;
                    this.signupFormErrors = {
                        fullname: '',
                        email: '',
                        password: '',
                    };
                    this.pageCase = 'signup';
                }
                SignupComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.signupForm = this.fb.group({
                        fullname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[a-zA-z0-9_\-\.]+\@[a-zA-z0-9_\-]{3,6}\.[a-zA-z]{3,5}/)]],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
                    });
                    this.signupForm.valueChanges.subscribe(function (_) {
                        _this.getFormError();
                    });
                    if (this.route.snapshot.routeConfig.path === 'updateUserInfo') {
                        this.pageCase = 'update';
                        this.signupForm.get('password').setValidators([]);
                        this.getUserData();
                    }
                };
                SignupComponent.prototype.getUserData = function () {
                    var _this = this;
                    this.user.getUserData().subscribe(function (res) {
                        if (res['status'] === "done") {
                            var data = res['data'];
                            localStorage.setItem('userInfo', JSON.stringify({ email: data['email'], fullName: data['fullName'], date: data['date'] }));
                            _this.signupForm.patchValue({ email: data['email'], fullname: data['fullname'] });
                        }
                        else {
                            _this.flashMessage.show(res['status'] + " : " + res['error'], { cssClass: "alert-danger" });
                        }
                    }, function (err) {
                        console.log({ err: err });
                        _this.flashMessage.show(err.message, { cssClass: "alert-danger" });
                    });
                };
                SignupComponent.prototype.hasError = function (field) {
                    return _my_validation__WEBPACK_IMPORTED_MODULE_5__["MyValidation"].hasError(this.signupForm, field);
                };
                SignupComponent.prototype.getFormError = function () {
                    this.signupFormErrors = _my_validation__WEBPACK_IMPORTED_MODULE_5__["MyValidation"].getFormError(this.signupForm);
                };
                SignupComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.user.loginOrSignupOrUpdateUser(this.signupForm.value, this.pageCase).subscribe(function (res) {
                        if (res['status'] === "done") {
                            _this.flashMessage.show(res['status'] + " : you can Login now ", { cssClass: "alert-success" });
                            if (_this.pageCase === 'update') {
                                _this.getUserData();
                            }
                            else
                                _this.router.navigate(['/login']);
                        }
                        else {
                            _this.flashMessage.show(res['status'] + " : " + res['error'], { cssClass: "alert-danger" });
                        }
                    }, function (err) {
                        _this.flashMessage.show(err.message, { cssClass: "alert-danger" });
                    });
                };
                return SignupComponent;
            }());
            SignupComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
                { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")).default]
                })
            ], SignupComponent);
            /***/ 
        }),
        /***/ "./src/app/task.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/task.service.ts ***!
          \*********************************/
        /*! exports provided: TaskService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function () { return TaskService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            // import { JwtService } from './jwt.service';
            var TaskService = /** @class */ (function () {
                function TaskService(http) {
                    this.http = http;
                }
                TaskService.prototype.newAndUpdateTask = function (data, path) {
                    var token = localStorage.getItem('token');
                    return this.http.post("task/" + path, data, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': "Bearer " + token
                        })
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.responsError));
                };
                TaskService.prototype.listAllTasks = function () {
                    var token = localStorage.getItem('token');
                    return this.http.get("task/list", {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': "Bearer " + token
                        })
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.responsError));
                };
                TaskService.prototype.getTaskData = function (_id) {
                    var token = localStorage.getItem('token');
                    return this.http.get("task/taskData/" + _id, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': "Bearer " + token
                        })
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.responsError));
                };
                TaskService.prototype.deleteTask = function (_id) {
                    var token = localStorage.getItem('token');
                    return this.http.delete("task/delete/" + _id, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': "Bearer " + token
                        })
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.responsError));
                };
                TaskService.prototype.responsError = function (error) {
                    if (error instanceof ErrorEvent) {
                        console.error('An error occurred:', error.error.message);
                    }
                    else {
                        console.error("Backend returned code " + error.status + ", body was: " + error.error);
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                };
                return TaskService;
            }());
            TaskService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TaskService);
            /***/ 
        }),
        /***/ "./src/app/tasks/tasks.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/tasks/tasks.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".task-content{\r\n    margin-bottom: 15px;\r\n}\r\n.task{\r\n    border-radius: 6px;\r\n    text-align: center;\r\n    min-height: 100px;\r\n    font-family: monospace, 'Courier New', Courier;\r\n    overflow: hidden;\r\n}\r\n.task .name-oprations{\r\n    font-weight: bold;\r\n    background-color: #0000007a;\r\n    padding: 6px;\r\n    letter-spacing: 1px;\r\n}\r\n.task .name-oprations span.glyphicon{\r\n    border-radius: 50%;\r\n    margin-right: 6px;\r\n    cursor: pointer;\r\n    padding: 6px;\r\n    margin-top: -7px;\r\n    font-size: 9px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n.task .name-oprations span.glyphicon-pencil{\r\n    background-color: #00000061;\r\n}\r\n.task .name-oprations span.glyphicon-trash{\r\n    background-color: #fd0a0a61;\r\n}\r\n.task .description{\r\n    padding: 6px;\r\n    min-height: 70px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsOENBQThDO0lBQzlDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay1jb250ZW50e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4udGFza3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgJ0NvdXJpZXIgTmV3JywgQ291cmllcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnRhc2sgLm5hbWUtb3ByYXRpb25ze1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwN2E7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbi50YXNrIC5uYW1lLW9wcmF0aW9ucyBzcGFuLmdseXBoaWNvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnRhc2sgLm5hbWUtb3ByYXRpb25zIHNwYW4uZ2x5cGhpY29uLXBlbmNpbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA2MTtcclxufVxyXG4udGFzayAubmFtZS1vcHJhdGlvbnMgc3Bhbi5nbHlwaGljb24tdHJhc2h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQwYTBhNjE7XHJcbn1cclxuLnRhc2sgLmRlc2NyaXB0aW9ue1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgbWluLWhlaWdodDogNzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/tasks/tasks.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/tasks/tasks.component.ts ***!
          \******************************************/
        /*! exports provided: TasksComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function () { return TasksComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
            var TasksComponent = /** @class */ (function () {
                function TasksComponent(task, flashMessage) {
                    this.task = task;
                    this.flashMessage = flashMessage;
                }
                TasksComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.task.listAllTasks().subscribe(function (res) {
                        if (res['status'] === 'done') {
                            _this.tasks = res['data'];
                        }
                        else {
                            _this.flashMessage.show(res['status'] + " : " + res['error'], { cssClass: 'alert-danger' });
                        }
                    }, function (err) {
                        _this.flashMessage.show(err.message, { cssClass: 'alert-danger' });
                    });
                };
                TasksComponent.prototype.removeTask = function (_id) {
                    var _this = this;
                    this.task.deleteTask(_id).subscribe(function (res) {
                        if (res['status'] === 'done') {
                            _this.flashMessage.show(res['status'] + " : Task Deleted Successfully", { cssClass: 'alert-success' });
                            _this.tasks = _this.tasks.filter(function (task) { return task['_id'] !== _id; });
                        }
                        else {
                            _this.flashMessage.show(res['status'] + " : " + res['error'], { cssClass: 'alert-danger' });
                        }
                    }, function (err) {
                        _this.flashMessage.show(err.message, { cssClass: 'alert-danger' });
                    });
                };
                return TasksComponent;
            }());
            TasksComponent.ctorParameters = function () { return [
                { type: _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] },
                { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] }
            ]; };
            TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tasks',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tasks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tasks.component.css */ "./src/app/tasks/tasks.component.css")).default]
                })
            ], TasksComponent);
            /***/ 
        }),
        /***/ "./src/app/user-info/user-info.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/user-info/user-info.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".user-info{\r\n    font-family: cursive;\r\n    font-size: 20px;\r\n    background-color: #2131ab;\r\n    padding: 14px;\r\n    text-align: center;\r\n    border-radius: 10px 10px 0 0;\r\n    color: #fff;\r\n    margin: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWluZm97XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTMxYWI7XHJcbiAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/user-info/user-info.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/user-info/user-info.component.ts ***!
          \**************************************************/
        /*! exports provided: UserInfoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function () { return UserInfoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UserInfoComponent = /** @class */ (function () {
                function UserInfoComponent() {
                }
                UserInfoComponent.prototype.ngOnInit = function () {
                    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
                };
                return UserInfoComponent;
            }());
            UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-info',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-info/user-info.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-info.component.css */ "./src/app/user-info/user-info.component.css")).default]
                })
            ], UserInfoComponent);
            /***/ 
        }),
        /***/ "./src/app/user.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/user.service.ts ***!
          \*********************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jwt.service */ "./src/app/jwt.service.ts");
            // import * as jwt from 'jsonwebtoken';
            var UserService = /** @class */ (function () {
                function UserService(http, jwt) {
                    this.http = http;
                    this.jwt = jwt;
                }
                UserService.prototype.loginOrSignupOrUpdateUser = function (data, path) {
                    var token = this.jwt.getToken();
                    return this.http.post("user/" + path, data, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': "Bearer " + token
                        })
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.responsError));
                };
                UserService.prototype.getUserData = function () {
                    var token = this.jwt.getToken();
                    return this.http.get("user/verifyAndGetData", {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': "Bearer " + token
                        })
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.responsError));
                };
                UserService.prototype.responsError = function (error) {
                    if (error instanceof ErrorEvent) {
                        /// A client-side or network error occurred. Handle it accordingly.
                        console.error('An error occurred:', error.error.message);
                    }
                    else {
                        // The backend returned an unsuccessful response code.
                        // The response body may contain clues as to what went wrong,
                        console.error("Backend returned code " + error.status + ", body was: " + error.error);
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                    ;
                };
                UserService.prototype.isLoggedin = function () {
                    return !this.jwt.isTokenExpire();
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! E:\abdo\MEAN Stack Projects\todoList\front-end\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map