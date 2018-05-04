webpackJsonp([0],{

/***/ 140:
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
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/esm5/platform-browser.js
var platform_browser = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 4 modules
var ionic_angular = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/@ionic-native/status-bar/index.js
var status_bar = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/@ionic-native/splash-screen/index.js
var splash_screen = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/http.js
var http = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/rxjs/add/operator/map.js
var map = __webpack_require__(191);
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform_platform = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-controller.js
var alert_controller = __webpack_require__(39);

// CONCATENATED MODULE: ./src/pages/home/home.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var home_HomePage = /** @class */ (function () {
    function HomePage(navCtrl, httpClient, plt, alertCtrl) {
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.plt = plt;
        this.alertCtrl = alertCtrl;
        this.users = this.httpClient.get('https://randomuser.me/api/?results=20')
            .map(function (res) { return res['results']; });
    }
    HomePage.prototype.checkPlatform = function () {
        var alert = this.alertCtrl.create({
            title: 'Platform',
            message: 'You are running on: ' + this.plt.platforms(),
            buttons: ['OK']
        });
        alert.present();
        if (this.plt.is('cordova')) {
            // Do Cordova stuff
        }
        else {
            // Do stuff inside the regular browser
        }
    };
    HomePage = __decorate([
        Object(core["k" /* Component */])({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [ionic_angular["e" /* NavController */], http["c" /* HttpClient */], platform_platform["a" /* Platform */], alert_controller["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map
// CONCATENATED MODULE: ./src/pages/list/list.ts
var list___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var list___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var list_ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = list___decorate([
        Object(core["k" /* Component */])({
            selector: 'page-list',
            templateUrl: 'list.html'
        }),
        list___metadata("design:paramtypes", [ionic_angular["e" /* NavController */], ionic_angular["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map
// CONCATENATED MODULE: ./src/pages/skeleton/skeleton.ts
var skeleton___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var skeleton___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var skeleton_SkeletonPage = /** @class */ (function () {
    function SkeletonPage(navCtrl, httpClient, plt, alertCtrl) {
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.plt = plt;
        this.alertCtrl = alertCtrl;
        this.users = this.httpClient.get('https://randomuser.me/api/?results=20')
            .map(function (res) {
            document.getElementById('skeleton').style.display = 'none';
            return res['results'];
        });
    }
    SkeletonPage.prototype.checkPlatform = function () {
        var alert = this.alertCtrl.create({
            title: 'Platform',
            message: 'You are running on: ' + this.plt.platforms(),
            buttons: ['OK']
        });
        alert.present();
        if (this.plt.is('cordova')) {
            // Do Cordova stuff
        }
        else {
            // Do stuff inside the regular browser
        }
    };
    SkeletonPage = skeleton___decorate([
        Object(core["k" /* Component */])({
            selector: 'page-skeleton',
            templateUrl: 'skeleton.html'
        }),
        skeleton___metadata("design:paramtypes", [ionic_angular["e" /* NavController */], http["c" /* HttpClient */], platform_platform["a" /* Platform */], alert_controller["a" /* AlertController */]])
    ], SkeletonPage);
    return SkeletonPage;
}());

//# sourceMappingURL=skeleton.js.map
// CONCATENATED MODULE: ./src/app/app.component.ts
var app_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var app_component_MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = home_HomePage;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: home_HomePage },
            { title: 'List', component: list_ListPage },
            { title: 'Skeleton', component: skeleton_SkeletonPage }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    app_component___decorate([
        Object(core["Y" /* ViewChild */])(ionic_angular["d" /* Nav */]),
        app_component___metadata("design:type", ionic_angular["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = app_component___decorate([
        Object(core["k" /* Component */])({
            templateUrl: 'app.html'
        }),
        app_component___metadata("design:paramtypes", [ionic_angular["g" /* Platform */], status_bar["a" /* StatusBar */], splash_screen["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map
// CONCATENATED MODULE: ./src/app/app.module.ts
var app_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var app_module_AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = app_module___decorate([
        Object(core["D" /* NgModule */])({
            declarations: [
                app_component_MyApp,
                home_HomePage,
                skeleton_SkeletonPage,
                list_ListPage
            ],
            imports: [
                platform_browser["a" /* BrowserModule */],
                ionic_angular["c" /* IonicModule */].forRoot(app_component_MyApp, {}, {
                    links: []
                }),
                http["d" /* HttpClientModule */]
            ],
            bootstrap: [ionic_angular["a" /* IonicApp */]],
            entryComponents: [
                app_component_MyApp,
                home_HomePage,
                skeleton_SkeletonPage,
                list_ListPage
            ],
            providers: [
                status_bar["a" /* StatusBar */],
                splash_screen["a" /* SplashScreen */],
                { provide: core["q" /* ErrorHandler */], useClass: ionic_angular["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.js
var app_root = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory.js
var action_sheet_component_ngfactory = __webpack_require__(230);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-component.ngfactory.js
var alert_component_ngfactory = __webpack_require__(231);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.ngfactory.js
var app_root_ngfactory = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-component.ngfactory.js + 1 modules
var loading_component_ngfactory = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-component.ngfactory.js
var modal_component_ngfactory = __webpack_require__(234);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-component.ngfactory.js + 1 modules
var picker_component_ngfactory = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-component.ngfactory.js
var popover_component_ngfactory = __webpack_require__(236);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select-popover-component.ngfactory.js + 1 modules
var select_popover_component_ngfactory = __webpack_require__(237);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-component.ngfactory.js
var toast_component_ngfactory = __webpack_require__(238);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/menu/menu-close.js
var menu_close = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/menu-controller.js
var menu_controller = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/split-pane/split-pane.js
var split_pane = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/menu/menu.ngfactory.js
var menu_ngfactory = __webpack_require__(239);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/menu/menu.js + 1 modules
var menu = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.ngfactory.js
var toolbar_ngfactory = __webpack_require__(240);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav.ngfactory.js
var nav_ngfactory = __webpack_require__(241);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav.js
var nav = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/ionic-angular/transitions/transition-controller.js
var transition_controller = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(15);

// CONCATENATED MODULE: ./src/app/app.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




































var styles_MyApp = [];
var RenderType_MyApp = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_MyApp, data: {} });

function View_MyApp_1(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 7, "button", [["class", "transparent list-item item item-block"], ["ion-item", ""], ["menuClose", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (core["_29" /* ɵnov */](_v, 6).close() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.openPage(_v.context.$implicit) !== false);
        ad = (pd_1 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_35" /* ɵqud */](335544320, 5, { contentLabel: 0 }), core["_35" /* ɵqud */](603979776, 6, { _buttons: 1 }), core["_35" /* ɵqud */](603979776, 7, { _icons: 1 }), core["_16" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_16" /* ɵdid */](6, 16384, null, 0, menu_close["a" /* MenuClose */], [menu_controller["a" /* MenuController */]], { menuClose: [0, "menuClose"] }, null), (_l()(), core["_37" /* ɵted */](7, 2, ["\n          ", "\n        "]))], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 6, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.title; _ck(_v, 7, 0, currVal_1); }); }
function View_MyApp_0(_l) { return core["_39" /* ɵvid */](0, [core["_35" /* ɵqud */](402653184, 1, { nav: 0 }), (_l()(), core["_17" /* ɵeld */](1, 0, null, null, 39, "ion-split-pane", [["when", "sm"]], null, null, null, null, null)), core["_16" /* ɵdid */](2, 4341760, null, 1, split_pane["b" /* SplitPane */], [core["G" /* NgZone */], platform_platform["a" /* Platform */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { when: [0, "when"] }, null), core["_35" /* ɵqud */](603979776, 2, { _setchildren: 1 }), core["_33" /* ɵprd */](2048, [[2, 4]], split_pane["a" /* RootNode */], null, [split_pane["b" /* SplitPane */]]), (_l()(), core["_37" /* ɵted */](-1, null, ["\n\n  "])), (_l()(), core["_17" /* ɵeld */](6, 0, null, null, 28, "ion-menu", [["role", "navigation"]], null, null, null, menu_ngfactory["b" /* View_Menu_0 */], menu_ngfactory["a" /* RenderType_Menu */])), core["_16" /* ɵdid */](7, 245760, null, 2, menu["a" /* Menu */], [menu_controller["a" /* MenuController */], core["p" /* ElementRef */], config["a" /* Config */], platform_platform["a" /* Platform */], core["N" /* Renderer */], keyboard["a" /* Keyboard */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], app["a" /* App */]], { content: [0, "content"] }, null), core["_35" /* ɵqud */](335544320, 3, { menuContent: 0 }), core["_35" /* ɵqud */](335544320, 4, { menuNav: 0 }), core["_33" /* ɵprd */](2048, [[2, 4]], split_pane["a" /* RootNode */], null, [menu["a" /* Menu */]]), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_17" /* ɵeld */](12, 0, null, 0, 10, "ion-header", [], null, null, null, null, null)), core["_16" /* ɵdid */](13, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_17" /* ɵeld */](15, 0, null, null, 6, "ion-toolbar", [["class", "toolbar"], ["color", "secondary"]], [[2, "statusbar-padding", null]], null, null, toolbar_ngfactory["b" /* View_Toolbar_0 */], toolbar_ngfactory["a" /* RenderType_Toolbar */])), core["_16" /* ɵdid */](16, 49152, null, 0, toolbar["a" /* Toolbar */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_37" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_17" /* ɵeld */](18, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_16" /* ɵdid */](19, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["Menu"])), (_l()(), core["_37" /* ɵted */](-1, 3, ["\n      "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n \n    "])), (_l()(), core["_17" /* ɵeld */](24, 0, null, 0, 9, "ion-content", [["class", "menu-container"]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_16" /* ɵdid */](25, 4374528, [[3, 4]], 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["N" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["G" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n      "])), (_l()(), core["_17" /* ɵeld */](27, 0, null, 1, 5, "ion-list", [["no-lines", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](28, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_12" /* ɵand */](16777216, null, null, 1, null, View_MyApp_1)), core["_16" /* ɵdid */](31, 802816, null, 0, common["i" /* NgForOf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */], core["A" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n \n  "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n \n  "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_17" /* ɵeld */](37, 0, null, null, 2, "ion-nav", [["main", ""], ["swipeBackEnabled", "false"]], null, null, null, nav_ngfactory["b" /* View_Nav_0 */], nav_ngfactory["a" /* RenderType_Nav */])), core["_16" /* ɵdid */](38, 4374528, [[1, 4], ["content", 4]], 0, nav["a" /* Nav */], [[2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], app["a" /* App */], config["a" /* Config */], platform_platform["a" /* Platform */], core["p" /* ElementRef */], core["G" /* NgZone */], core["N" /* Renderer */], core["l" /* ComponentFactoryResolver */], gesture_controller["l" /* GestureController */], transition_controller["a" /* TransitionController */], [2, deep_linker["a" /* DeepLinker */]], dom_controller["a" /* DomController */], core["q" /* ErrorHandler */]], { swipeBackEnabled: [0, "swipeBackEnabled"], root: [1, "root"] }, null), core["_33" /* ɵprd */](2048, [[2, 4]], split_pane["a" /* RootNode */], null, [nav["a" /* Nav */]]), (_l()(), core["_37" /* ɵted */](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "sm"; _ck(_v, 2, 0, currVal_0); var currVal_1 = core["_29" /* ɵnov */](_v, 38); _ck(_v, 7, 0, currVal_1); var currVal_3 = "secondary"; _ck(_v, 16, 0, currVal_3); var currVal_6 = _co.pages; _ck(_v, 31, 0, currVal_6); var currVal_7 = "false"; var currVal_8 = _co.rootPage; _ck(_v, 38, 0, currVal_7, currVal_8); }, function (_ck, _v) { var currVal_2 = core["_29" /* ɵnov */](_v, 16)._sbPadding; _ck(_v, 15, 0, currVal_2); var currVal_4 = core["_29" /* ɵnov */](_v, 25).statusbarPadding; var currVal_5 = core["_29" /* ɵnov */](_v, 25)._hasRefresher; _ck(_v, 24, 0, currVal_4, currVal_5); }); }
function View_MyApp_Host_0(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "ng-component", [], null, null, null, View_MyApp_0, RenderType_MyApp)), core["_16" /* ɵdid */](1, 49152, null, 0, app_component_MyApp, [platform_platform["a" /* Platform */], status_bar["a" /* StatusBar */], splash_screen["a" /* SplashScreen */]], null, null)], null, null); }
var MyAppNgFactory = core["_13" /* ɵccf */]("ng-component", app_component_MyApp, View_MyApp_Host_0, {}, {}, []);

//# sourceMappingURL=app.component.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/col.js
var col = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card.js
var card = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/avatar/avatar.js
var avatar = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card-content.js
var card_content = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/row.js
var row = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/menu/menu-toggle.js
var menu_toggle = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/fab/fab-container.ngfactory.js
var fab_container_ngfactory = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/fab/fab-container.js
var fab_container = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/fab/fab.ngfactory.js
var fab_ngfactory = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/fab/fab.js
var fab = __webpack_require__(40);

// CONCATENATED MODULE: ./src/pages/home/home.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








































var styles_HomePage = [];
var RenderType_HomePage = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_HomePage, data: {} });

function View_HomePage_2(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 27, "ion-col", [["class", "col"], ["col-12", ""], ["col-lg-3", ""], ["col-md-4", ""], ["col-xl-2", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](1, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_17" /* ɵeld */](3, 0, null, null, 23, "ion-card", [], null, null, null, null, null)), core["_16" /* ɵdid */](4, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_17" /* ɵeld */](6, 0, null, null, 15, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](7, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_35" /* ɵqud */](335544320, 2, { contentLabel: 0 }), core["_35" /* ɵqud */](603979776, 3, { _buttons: 1 }), core["_35" /* ɵqud */](603979776, 4, { _icons: 1 }), core["_16" /* ɵdid */](11, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_37" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_17" /* ɵeld */](13, 0, null, 0, 4, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](14, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n              "])), (_l()(), core["_17" /* ɵeld */](16, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_37" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_17" /* ɵeld */](19, 0, null, 2, 1, "h2", [["text-capitalize", ""]], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](20, null, ["", " ", ""])), (_l()(), core["_37" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_17" /* ɵeld */](23, 0, null, null, 2, "ion-card-content", [], null, null, null, null, null)), core["_16" /* ɵdid */](24, 16384, null, 0, card_content["a" /* CardContent */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            Bacon ipsum dolor amet salami prosciutto ham hock, strip steak buffalo ribeye pork chop. Beef ribs tenderloin tail shoulder.\n            Spare ribs ham shoulder brisket rump hamburger. Pork belly kevin shoulder prosciutto ribeye pork chop chicken\n            strip steak pig.\n          "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n      "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.picture.medium; _ck(_v, 16, 0, currVal_0); var currVal_1 = ((_v.context.$implicit.name == null) ? null : _v.context.$implicit.name.first); var currVal_2 = ((_v.context.$implicit.name == null) ? null : _v.context.$implicit.name.last); _ck(_v, 20, 0, currVal_1, currVal_2); }); }
function View_HomePage_1(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 6, "ion-row", [["class", "row"]], null, null, null, null, null)), core["_16" /* ɵdid */](1, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_12" /* ɵand */](16777216, null, null, 2, null, View_HomePage_2)), core["_16" /* ɵdid */](4, 802816, null, 0, common["i" /* NgForOf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */], core["A" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_31" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["i" /* ChangeDetectorRef */]]), (_l()(), core["_37" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_38" /* ɵunv */](_v, 4, 0, core["_29" /* ɵnov */](_v, 5).transform(_co.users)); _ck(_v, 4, 0, currVal_0); }, null); }
function View_HomePage_0(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), core["_16" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_17" /* ɵeld */](3, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_16" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_37" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_17" /* ɵeld */](6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (core["_29" /* ɵnov */](_v, 8).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_16" /* ɵdid */](7, 1097728, [[1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), core["_16" /* ɵdid */](8, 1064960, null, 0, menu_toggle["a" /* MenuToggle */], [menu_controller["a" /* MenuController */], [2, view_controller["a" /* ViewController */]], [2, button_button["a" /* Button */]], [2, navbar["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), core["_16" /* ɵdid */](9, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_35" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n      "])), (_l()(), core["_17" /* ɵeld */](12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_16" /* ɵdid */](13, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_37" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_17" /* ɵeld */](16, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_16" /* ɵdid */](17, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["Home"])), (_l()(), core["_37" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n \n "])), (_l()(), core["_17" /* ɵeld */](22, 0, null, null, 31, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_16" /* ɵdid */](23, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["N" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["G" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_12" /* ɵand */](16777216, null, 1, 1, null, View_HomePage_1)), core["_16" /* ɵdid */](26, 16384, null, 0, common["j" /* NgIf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), core["_17" /* ɵeld */](28, 0, null, 0, 11, "ion-fab", [["bottom", ""], ["class", "web-fab"], ["right", ""]], null, null, null, fab_container_ngfactory["b" /* View_FabContainer_0 */], fab_container_ngfactory["a" /* RenderType_FabContainer */])), core["_16" /* ɵdid */](29, 1228800, null, 2, fab_container["a" /* FabContainer */], [platform_platform["a" /* Platform */]], null, null), core["_35" /* ɵqud */](335544320, 5, { _mainButton: 0 }), core["_35" /* ɵqud */](603979776, 6, { _fabLists: 1 }), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_17" /* ɵeld */](33, 0, null, 0, 5, "button", [["color", "primary"], ["icon-only", ""], ["ion-fab", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.checkPlatform() !== false);
        ad = (pd_0 && ad);
    } return ad; }, fab_ngfactory["b" /* View_FabButton_0 */], fab_ngfactory["a" /* RenderType_FabButton */])), core["_16" /* ɵdid */](34, 49152, [[5, 4]], 0, fab["a" /* FabButton */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n      "])), (_l()(), core["_17" /* ɵeld */](36, 0, null, 0, 1, "ion-icon", [["name", "help"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_16" /* ɵdid */](37, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n   "])), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n   \n   "])), (_l()(), core["_17" /* ɵeld */](41, 0, null, 0, 11, "ion-fab", [["class", "mobile-fab"], ["edge", ""], ["right", ""], ["top", ""]], null, null, null, fab_container_ngfactory["b" /* View_FabContainer_0 */], fab_container_ngfactory["a" /* RenderType_FabContainer */])), core["_16" /* ɵdid */](42, 1228800, null, 2, fab_container["a" /* FabContainer */], [platform_platform["a" /* Platform */]], null, null), core["_35" /* ɵqud */](335544320, 7, { _mainButton: 0 }), core["_35" /* ɵqud */](603979776, 8, { _fabLists: 1 }), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_17" /* ɵeld */](46, 0, null, 0, 5, "button", [["color", "primary"], ["icon-only", ""], ["ion-fab", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.checkPlatform() !== false);
        ad = (pd_0 && ad);
    } return ad; }, fab_ngfactory["b" /* View_FabButton_0 */], fab_ngfactory["a" /* RenderType_FabButton */])), core["_16" /* ɵdid */](47, 49152, [[7, 4]], 0, fab["a" /* FabButton */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n      "])), (_l()(), core["_17" /* ɵeld */](49, 0, null, 0, 1, "ion-icon", [["name", "help"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_16" /* ɵdid */](50, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n   "])), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n\n "]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = ""; _ck(_v, 8, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 13, 0, currVal_5); var currVal_8 = _co.users; _ck(_v, 26, 0, currVal_8); var currVal_9 = "primary"; _ck(_v, 34, 0, currVal_9); var currVal_11 = "help"; _ck(_v, 37, 0, currVal_11); var currVal_12 = "primary"; _ck(_v, 47, 0, currVal_12); var currVal_14 = "help"; _ck(_v, 50, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_29" /* ɵnov */](_v, 8).isHidden; _ck(_v, 6, 0, currVal_2); var currVal_4 = core["_29" /* ɵnov */](_v, 13)._hidden; _ck(_v, 12, 0, currVal_4); var currVal_6 = core["_29" /* ɵnov */](_v, 23).statusbarPadding; var currVal_7 = core["_29" /* ɵnov */](_v, 23)._hasRefresher; _ck(_v, 22, 0, currVal_6, currVal_7); var currVal_10 = core["_29" /* ɵnov */](_v, 37)._hidden; _ck(_v, 36, 0, currVal_10); var currVal_13 = core["_29" /* ɵnov */](_v, 50)._hidden; _ck(_v, 49, 0, currVal_13); }); }
function View_HomePage_Host_0(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "page-home", [], null, null, null, View_HomePage_0, RenderType_HomePage)), core["_16" /* ɵdid */](1, 49152, null, 0, home_HomePage, [nav_controller["a" /* NavController */], http["c" /* HttpClient */], platform_platform["a" /* Platform */], alert_controller["a" /* AlertController */]], null, null)], null, null); }
var HomePageNgFactory = core["_13" /* ɵccf */]("page-home", home_HomePage, View_HomePage_Host_0, {}, {}, []);

//# sourceMappingURL=home.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/grid.js
var grid = __webpack_require__(100);

// CONCATENATED MODULE: ./src/pages/skeleton/skeleton.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









































var styles_SkeletonPage = [];
var RenderType_SkeletonPage = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_SkeletonPage, data: {} });

function View_SkeletonPage_2(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 27, "ion-col", [["class", "col"], ["col-12", ""], ["col-lg-3", ""], ["col-md-4", ""], ["col-xl-2", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](1, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_17" /* ɵeld */](3, 0, null, null, 23, "ion-card", [], null, null, null, null, null)), core["_16" /* ɵdid */](4, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_17" /* ɵeld */](6, 0, null, null, 15, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](7, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_35" /* ɵqud */](335544320, 11, { contentLabel: 0 }), core["_35" /* ɵqud */](603979776, 12, { _buttons: 1 }), core["_35" /* ɵqud */](603979776, 13, { _icons: 1 }), core["_16" /* ɵdid */](11, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_37" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_17" /* ɵeld */](13, 0, null, 0, 4, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](14, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n              "])), (_l()(), core["_17" /* ɵeld */](16, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_37" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_17" /* ɵeld */](19, 0, null, 2, 1, "h2", [["text-capitalize", ""]], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](20, null, ["", " ", ""])), (_l()(), core["_37" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_17" /* ɵeld */](23, 0, null, null, 2, "ion-card-content", [], null, null, null, null, null)), core["_16" /* ɵdid */](24, 16384, null, 0, card_content["a" /* CardContent */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            Bacon ipsum dolor amet salami prosciutto ham hock, strip steak buffalo ribeye pork chop. Beef ribs tenderloin tail shoulder.\n            Spare ribs ham shoulder brisket rump hamburger. Pork belly kevin shoulder prosciutto ribeye pork chop chicken\n            strip steak pig.\n          "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n      "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.picture.medium; _ck(_v, 16, 0, currVal_0); var currVal_1 = ((_v.context.$implicit.name == null) ? null : _v.context.$implicit.name.first); var currVal_2 = ((_v.context.$implicit.name == null) ? null : _v.context.$implicit.name.last); _ck(_v, 20, 0, currVal_1, currVal_2); }); }
function View_SkeletonPage_1(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 6, "ion-row", [["class", "row"]], null, null, null, null, null)), core["_16" /* ɵdid */](1, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_12" /* ɵand */](16777216, null, null, 2, null, View_SkeletonPage_2)), core["_16" /* ɵdid */](4, 802816, null, 0, common["i" /* NgForOf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */], core["A" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_31" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["i" /* ChangeDetectorRef */]]), (_l()(), core["_37" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_38" /* ɵunv */](_v, 4, 0, core["_29" /* ɵnov */](_v, 5).transform(_co.users)); _ck(_v, 4, 0, currVal_0); }, null); }
function View_SkeletonPage_0(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), core["_16" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_17" /* ɵeld */](3, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_16" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_37" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_17" /* ɵeld */](6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (core["_29" /* ɵnov */](_v, 8).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_16" /* ɵdid */](7, 1097728, [[1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), core["_16" /* ɵdid */](8, 1064960, null, 0, menu_toggle["a" /* MenuToggle */], [menu_controller["a" /* MenuController */], [2, view_controller["a" /* ViewController */]], [2, button_button["a" /* Button */]], [2, navbar["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), core["_16" /* ɵdid */](9, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_35" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n      "])), (_l()(), core["_17" /* ɵeld */](12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_16" /* ɵdid */](13, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_37" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_17" /* ɵeld */](16, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_16" /* ɵdid */](17, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["Skeleton"])), (_l()(), core["_37" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n \n "])), (_l()(), core["_17" /* ɵeld */](22, 0, null, null, 108, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_16" /* ɵdid */](23, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["N" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["G" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["_17" /* ɵeld */](25, 0, null, 1, 75, "ion-grid", [["class", "grid"]], null, null, null, null, null)), core["_16" /* ɵdid */](26, 16384, null, 0, grid["a" /* Grid */], [], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_17" /* ɵeld */](28, 0, null, null, 71, "ion-row", [["class", "row"], ["id", "skeleton"]], null, null, null, null, null)), core["_16" /* ɵdid */](29, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_17" /* ɵeld */](31, 0, null, null, 21, "ion-col", [["class", "skeleton col"], ["col-12", ""], ["col-lg-3", ""], ["col-md-4", ""], ["col-xl-2", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](32, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](34, 0, null, null, 17, "ion-card", [], null, null, null, null, null)), core["_16" /* ɵdid */](35, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n              "])), (_l()(), core["_17" /* ɵeld */](37, 0, null, null, 8, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](38, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_35" /* ɵqud */](335544320, 2, { contentLabel: 0 }), core["_35" /* ɵqud */](603979776, 3, { _buttons: 1 }), core["_35" /* ɵqud */](603979776, 4, { _icons: 1 }), core["_16" /* ɵdid */](42, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_17" /* ɵeld */](43, 0, null, 0, 1, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](44, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_17" /* ɵeld */](45, 0, null, 2, 0, "h2", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n              "])), (_l()(), core["_17" /* ɵeld */](47, 0, null, null, 0, "h3", [], null, null, null, null, null)), (_l()(), core["_17" /* ɵeld */](48, 0, null, null, 0, "h3", [], null, null, null, null, null)), (_l()(), core["_17" /* ɵeld */](49, 0, null, null, 0, "h3", [], null, null, null, null, null)), (_l()(), core["_17" /* ɵeld */](50, 0, null, null, 0, "h3", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_17" /* ɵeld */](54, 0, null, null, 21, "ion-col", [["class", "skeleton col"], ["col-12", ""], ["col-lg-3", ""], ["col-md-4", ""], ["col-xl-2", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](55, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](57, 0, null, null, 17, "ion-card", [], null, null, null, null, null)), core["_16" /* ɵdid */](58, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n              "])), (_l()(), core["_17" /* ɵeld */](60, 0, null, null, 8, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](61, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_35" /* ɵqud */](335544320, 5, { contentLabel: 0 }), core["_35" /* ɵqud */](603979776, 6, { _buttons: 1 }), core["_35" /* ɵqud */](603979776, 7, { _icons: 1 }), core["_16" /* ɵdid */](65, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_17" /* ɵeld */](66, 0, null, 0, 1, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](67, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_17" /* ɵeld */](68, 0, null, 2, 0, "h2", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n              "])), (_l()(), core["_17" /* ɵeld */](70, 0, null, null, 0, "h3", [], null, null, null, null, null)), (_l()(), core["_17" /* ɵeld */](71, 0, null, null, 0, "h3", [], null, null, null, null, null)), (_l()(), core["_17" /* ɵeld */](72, 0, null, null, 0, "h3", [], null, null, null, null, null)), (_l()(), core["_17" /* ɵeld */](73, 0, null, null, 0, "h3", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_17" /* ɵeld */](77, 0, null, null, 21, "ion-col", [["class", "skeleton col"], ["col-12", ""], ["col-lg-3", ""], ["col-md-4", ""], ["col-xl-2", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](78, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](80, 0, null, null, 17, "ion-card", [], null, null, null, null, null)), core["_16" /* ɵdid */](81, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n              "])), (_l()(), core["_17" /* ɵeld */](83, 0, null, null, 8, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](84, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_35" /* ɵqud */](335544320, 8, { contentLabel: 0 }), core["_35" /* ɵqud */](603979776, 9, { _buttons: 1 }), core["_35" /* ɵqud */](603979776, 10, { _icons: 1 }), core["_16" /* ɵdid */](88, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_17" /* ɵeld */](89, 0, null, 0, 1, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](90, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_17" /* ɵeld */](91, 0, null, 2, 0, "h2", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n              "])), (_l()(), core["_17" /* ɵeld */](93, 0, null, null, 0, "h3", [], null, null, null, null, null)), (_l()(), core["_17" /* ɵeld */](94, 0, null, null, 0, "h3", [], null, null, null, null, null)), (_l()(), core["_17" /* ɵeld */](95, 0, null, null, 0, "h3", [], null, null, null, null, null)), (_l()(), core["_17" /* ɵeld */](96, 0, null, null, 0, "h3", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_12" /* ɵand */](16777216, null, 1, 1, null, View_SkeletonPage_1)), core["_16" /* ɵdid */](103, 16384, null, 0, common["j" /* NgIf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), core["_17" /* ɵeld */](105, 0, null, 0, 11, "ion-fab", [["bottom", ""], ["class", "web-fab"], ["right", ""]], null, null, null, fab_container_ngfactory["b" /* View_FabContainer_0 */], fab_container_ngfactory["a" /* RenderType_FabContainer */])), core["_16" /* ɵdid */](106, 1228800, null, 2, fab_container["a" /* FabContainer */], [platform_platform["a" /* Platform */]], null, null), core["_35" /* ɵqud */](335544320, 14, { _mainButton: 0 }), core["_35" /* ɵqud */](603979776, 15, { _fabLists: 1 }), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_17" /* ɵeld */](110, 0, null, 0, 5, "button", [["color", "primary"], ["icon-only", ""], ["ion-fab", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.checkPlatform() !== false);
        ad = (pd_0 && ad);
    } return ad; }, fab_ngfactory["b" /* View_FabButton_0 */], fab_ngfactory["a" /* RenderType_FabButton */])), core["_16" /* ɵdid */](111, 49152, [[14, 4]], 0, fab["a" /* FabButton */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n      "])), (_l()(), core["_17" /* ɵeld */](113, 0, null, 0, 1, "ion-icon", [["name", "help"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_16" /* ɵdid */](114, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n   "])), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n   \n   "])), (_l()(), core["_17" /* ɵeld */](118, 0, null, 0, 11, "ion-fab", [["class", "mobile-fab"], ["edge", ""], ["right", ""], ["top", ""]], null, null, null, fab_container_ngfactory["b" /* View_FabContainer_0 */], fab_container_ngfactory["a" /* RenderType_FabContainer */])), core["_16" /* ɵdid */](119, 1228800, null, 2, fab_container["a" /* FabContainer */], [platform_platform["a" /* Platform */]], null, null), core["_35" /* ɵqud */](335544320, 16, { _mainButton: 0 }), core["_35" /* ɵqud */](603979776, 17, { _fabLists: 1 }), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_17" /* ɵeld */](123, 0, null, 0, 5, "button", [["color", "primary"], ["icon-only", ""], ["ion-fab", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.checkPlatform() !== false);
        ad = (pd_0 && ad);
    } return ad; }, fab_ngfactory["b" /* View_FabButton_0 */], fab_ngfactory["a" /* RenderType_FabButton */])), core["_16" /* ɵdid */](124, 49152, [[16, 4]], 0, fab["a" /* FabButton */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n      "])), (_l()(), core["_17" /* ɵeld */](126, 0, null, 0, 1, "ion-icon", [["name", "help"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_16" /* ɵdid */](127, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n   "])), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n\n "]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = ""; _ck(_v, 8, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 13, 0, currVal_5); var currVal_8 = _co.users; _ck(_v, 103, 0, currVal_8); var currVal_9 = "primary"; _ck(_v, 111, 0, currVal_9); var currVal_11 = "help"; _ck(_v, 114, 0, currVal_11); var currVal_12 = "primary"; _ck(_v, 124, 0, currVal_12); var currVal_14 = "help"; _ck(_v, 127, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_29" /* ɵnov */](_v, 8).isHidden; _ck(_v, 6, 0, currVal_2); var currVal_4 = core["_29" /* ɵnov */](_v, 13)._hidden; _ck(_v, 12, 0, currVal_4); var currVal_6 = core["_29" /* ɵnov */](_v, 23).statusbarPadding; var currVal_7 = core["_29" /* ɵnov */](_v, 23)._hasRefresher; _ck(_v, 22, 0, currVal_6, currVal_7); var currVal_10 = core["_29" /* ɵnov */](_v, 114)._hidden; _ck(_v, 113, 0, currVal_10); var currVal_13 = core["_29" /* ɵnov */](_v, 127)._hidden; _ck(_v, 126, 0, currVal_13); }); }
function View_SkeletonPage_Host_0(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "page-skeleton", [], null, null, null, View_SkeletonPage_0, RenderType_SkeletonPage)), core["_16" /* ɵdid */](1, 49152, null, 0, skeleton_SkeletonPage, [nav_controller["a" /* NavController */], http["c" /* HttpClient */], platform_platform["a" /* Platform */], alert_controller["a" /* AlertController */]], null, null)], null, null); }
var SkeletonPageNgFactory = core["_13" /* ɵccf */]("page-skeleton", skeleton_SkeletonPage, View_SkeletonPage_Host_0, {}, {}, []);

//# sourceMappingURL=skeleton.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(10);

// CONCATENATED MODULE: ./src/pages/list/list.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
































var styles_ListPage = [];
var RenderType_ListPage = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_ListPage, data: {} });

function View_ListPage_1(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 12, "button", [["class", "item item-block"], ["ion-item", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.itemTapped($event, _v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_35" /* ɵqud */](335544320, 2, { contentLabel: 0 }), core["_35" /* ɵqud */](603979776, 3, { _buttons: 1 }), core["_35" /* ɵqud */](603979776, 4, { _icons: 1 }), core["_16" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_37" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["_17" /* ɵeld */](7, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_16" /* ɵdid */](8, 147456, [[4, 4]], 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_37" /* ɵted */](9, 2, ["\n      ", "\n      "])), (_l()(), core["_17" /* ɵeld */](10, 0, null, 4, 1, "div", [["class", "item-note"], ["item-end", ""]], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](11, null, ["\n        ", "\n      "])), (_l()(), core["_37" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.icon; _ck(_v, 8, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 8)._hidden; _ck(_v, 7, 0, currVal_0); var currVal_2 = _v.context.$implicit.title; _ck(_v, 9, 0, currVal_2); var currVal_3 = _v.context.$implicit.note; _ck(_v, 11, 0, currVal_3); }); }
function View_ListPage_2(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 4, "div", [["padding", ""]], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n    You navigated here from "])), (_l()(), core["_17" /* ɵeld */](2, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](3, null, ["", ""])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n  "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.selectedItem.title; _ck(_v, 3, 0, currVal_0); }); }
function View_ListPage_0(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), core["_16" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_17" /* ɵeld */](3, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_16" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_37" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_17" /* ɵeld */](6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (core["_29" /* ɵnov */](_v, 8).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_16" /* ɵdid */](7, 1097728, [[1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), core["_16" /* ɵdid */](8, 1064960, null, 0, menu_toggle["a" /* MenuToggle */], [menu_controller["a" /* MenuController */], [2, view_controller["a" /* ViewController */]], [2, button_button["a" /* Button */]], [2, navbar["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), core["_16" /* ɵdid */](9, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_35" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n      "])), (_l()(), core["_17" /* ɵeld */](12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_16" /* ɵdid */](13, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_37" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_17" /* ɵeld */](16, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_16" /* ɵdid */](17, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["List"])), (_l()(), core["_37" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_17" /* ɵeld */](22, 0, null, null, 12, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_16" /* ɵdid */](23, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["N" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["G" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["_17" /* ɵeld */](25, 0, null, 1, 5, "ion-list", [], null, null, null, null, null)), core["_16" /* ɵdid */](26, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_12" /* ɵand */](16777216, null, null, 1, null, View_ListPage_1)), core["_16" /* ɵdid */](29, 802816, null, 0, common["i" /* NgForOf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */], core["A" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["_12" /* ɵand */](16777216, null, 1, 1, null, View_ListPage_2)), core["_16" /* ɵdid */](33, 16384, null, 0, common["j" /* NgIf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = ""; _ck(_v, 8, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 13, 0, currVal_5); var currVal_8 = _co.items; _ck(_v, 29, 0, currVal_8); var currVal_9 = _co.selectedItem; _ck(_v, 33, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_29" /* ɵnov */](_v, 8).isHidden; _ck(_v, 6, 0, currVal_2); var currVal_4 = core["_29" /* ɵnov */](_v, 13)._hidden; _ck(_v, 12, 0, currVal_4); var currVal_6 = core["_29" /* ɵnov */](_v, 23).statusbarPadding; var currVal_7 = core["_29" /* ɵnov */](_v, 23)._hasRefresher; _ck(_v, 22, 0, currVal_6, currVal_7); }); }
function View_ListPage_Host_0(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "page-list", [], null, null, null, View_ListPage_0, RenderType_ListPage)), core["_16" /* ɵdid */](1, 49152, null, 0, list_ListPage, [nav_controller["a" /* NavController */], nav_params["a" /* NavParams */]], null, null)], null, null); }
var ListPageNgFactory = core["_13" /* ɵccf */]("page-list", list_ListPage, View_ListPage_Host_0, {}, {}, []);

//# sourceMappingURL=list.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-config.js
var gesture_config = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-controller.js
var action_sheet_controller = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/events.js
var events = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/haptic.js
var haptic = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-controller.js
var loading_controller = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(188);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/url-serializer.js
var url_serializer = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-controller.js
var modal_controller = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-controller.js
var picker_controller = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-controller.js
var popover_controller = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/tap-click.js + 3 modules
var tap_click = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-controller.js
var toast_controller = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/ionic-error-handler.js
var ionic_error_handler = __webpack_require__(187);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform-registry.js
var platform_registry = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/ng-module-loader.js
var ng_module_loader = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/mode-registry.js
var mode_registry = __webpack_require__(126);

// CONCATENATED MODULE: ./src/app/app.module.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















































var AppModuleNgFactory = core["_14" /* ɵcmf */](app_module_AppModule, [app_root["b" /* IonicApp */]], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["l" /* ComponentFactoryResolver */], core["_10" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], MyAppNgFactory, HomePageNgFactory, SkeletonPageNgFactory, ListPageNgFactory]], [3, core["l" /* ComponentFactoryResolver */]], core["E" /* NgModuleRef */]]), core["_26" /* ɵmpd */](5120, core["C" /* LOCALE_ID */], core["_34" /* ɵq */], [[3, core["C" /* LOCALE_ID */]]]), core["_26" /* ɵmpd */](4608, common["l" /* NgLocalization */], common["k" /* NgLocaleLocalization */], [core["C" /* LOCALE_ID */], [2, common["t" /* ɵa */]]]), core["_26" /* ɵmpd */](5120, core["b" /* APP_ID */], core["_19" /* ɵi */], []), core["_26" /* ɵmpd */](5120, core["A" /* IterableDiffers */], core["_27" /* ɵn */], []), core["_26" /* ɵmpd */](5120, core["B" /* KeyValueDiffers */], core["_30" /* ɵo */], []), core["_26" /* ɵmpd */](4608, platform_browser["c" /* DomSanitizer */], platform_browser["q" /* ɵe */], [common["d" /* DOCUMENT */]]), core["_26" /* ɵmpd */](6144, core["R" /* Sanitizer */], null, [platform_browser["c" /* DomSanitizer */]]), core["_26" /* ɵmpd */](4608, platform_browser["f" /* HAMMER_GESTURE_CONFIG */], gesture_config["a" /* IonicGestureConfig */], []), core["_26" /* ɵmpd */](5120, platform_browser["d" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new platform_browser["k" /* ɵDomEventsPlugin */](p0_0, p0_1), new platform_browser["o" /* ɵKeyEventsPlugin */](p1_0), new platform_browser["n" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [common["d" /* DOCUMENT */], core["G" /* NgZone */], common["d" /* DOCUMENT */], common["d" /* DOCUMENT */], platform_browser["f" /* HAMMER_GESTURE_CONFIG */]]), core["_26" /* ɵmpd */](4608, platform_browser["e" /* EventManager */], platform_browser["e" /* EventManager */], [platform_browser["d" /* EVENT_MANAGER_PLUGINS */], core["G" /* NgZone */]]), core["_26" /* ɵmpd */](135680, platform_browser["m" /* ɵDomSharedStylesHost */], platform_browser["m" /* ɵDomSharedStylesHost */], [common["d" /* DOCUMENT */]]), core["_26" /* ɵmpd */](4608, platform_browser["l" /* ɵDomRendererFactory2 */], platform_browser["l" /* ɵDomRendererFactory2 */], [platform_browser["e" /* EventManager */], platform_browser["m" /* ɵDomSharedStylesHost */]]), core["_26" /* ɵmpd */](6144, core["P" /* RendererFactory2 */], null, [platform_browser["l" /* ɵDomRendererFactory2 */]]), core["_26" /* ɵmpd */](6144, platform_browser["p" /* ɵSharedStylesHost */], null, [platform_browser["m" /* ɵDomSharedStylesHost */]]), core["_26" /* ɵmpd */](4608, core["W" /* Testability */], core["W" /* Testability */], [core["G" /* NgZone */]]), core["_26" /* ɵmpd */](4608, platform_browser["h" /* Meta */], platform_browser["h" /* Meta */], [common["d" /* DOCUMENT */]]), core["_26" /* ɵmpd */](4608, platform_browser["i" /* Title */], platform_browser["i" /* Title */], [common["d" /* DOCUMENT */]]), core["_26" /* ɵmpd */](4608, esm5_forms["k" /* ɵi */], esm5_forms["k" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["c" /* FormBuilder */], esm5_forms["c" /* FormBuilder */], []), core["_26" /* ɵmpd */](4608, http["h" /* HttpXsrfTokenExtractor */], http["n" /* ɵh */], [common["d" /* DOCUMENT */], core["J" /* PLATFORM_ID */], http["l" /* ɵf */]]), core["_26" /* ɵmpd */](4608, http["o" /* ɵi */], http["o" /* ɵi */], [http["h" /* HttpXsrfTokenExtractor */], http["m" /* ɵg */]]), core["_26" /* ɵmpd */](5120, http["a" /* HTTP_INTERCEPTORS */], function (p0_0) { return [p0_0]; }, [http["o" /* ɵi */]]), core["_26" /* ɵmpd */](4608, http["k" /* ɵe */], http["k" /* ɵe */], []), core["_26" /* ɵmpd */](6144, http["i" /* XhrFactory */], null, [http["k" /* ɵe */]]), core["_26" /* ɵmpd */](4608, http["g" /* HttpXhrBackend */], http["g" /* HttpXhrBackend */], [http["i" /* XhrFactory */]]), core["_26" /* ɵmpd */](6144, http["b" /* HttpBackend */], null, [http["g" /* HttpXhrBackend */]]), core["_26" /* ɵmpd */](4608, http["f" /* HttpHandler */], http["j" /* ɵc */], [http["b" /* HttpBackend */], core["y" /* Injector */]]), core["_26" /* ɵmpd */](4608, http["c" /* HttpClient */], http["c" /* HttpClient */], [http["f" /* HttpHandler */]]), core["_26" /* ɵmpd */](4608, action_sheet_controller["a" /* ActionSheetController */], action_sheet_controller["a" /* ActionSheetController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, alert_controller["a" /* AlertController */], alert_controller["a" /* AlertController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, events["a" /* Events */], events["a" /* Events */], []), core["_26" /* ɵmpd */](4608, util_form["a" /* Form */], util_form["a" /* Form */], []), core["_26" /* ɵmpd */](4608, haptic["a" /* Haptic */], haptic["a" /* Haptic */], [platform_platform["a" /* Platform */]]), core["_26" /* ɵmpd */](4608, keyboard["a" /* Keyboard */], keyboard["a" /* Keyboard */], [config["a" /* Config */], platform_platform["a" /* Platform */], core["G" /* NgZone */], dom_controller["a" /* DomController */]]), core["_26" /* ɵmpd */](4608, loading_controller["a" /* LoadingController */], loading_controller["a" /* LoadingController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](5120, common["g" /* LocationStrategy */], ionic_angular_module["b" /* provideLocationStrategy */], [common["r" /* PlatformLocation */], [2, common["a" /* APP_BASE_HREF */]], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, common["f" /* Location */], common["f" /* Location */], [common["g" /* LocationStrategy */]]), core["_26" /* ɵmpd */](5120, url_serializer["b" /* UrlSerializer */], url_serializer["d" /* setupUrlSerializer */], [app["a" /* App */], url_serializer["a" /* DeepLinkConfigToken */]]), core["_26" /* ɵmpd */](5120, deep_linker["a" /* DeepLinker */], deep_linker["b" /* setupDeepLinker */], [app["a" /* App */], url_serializer["b" /* UrlSerializer */], common["f" /* Location */], module_loader["b" /* ModuleLoader */], core["l" /* ComponentFactoryResolver */]]), core["_26" /* ɵmpd */](4608, modal_controller["a" /* ModalController */], modal_controller["a" /* ModalController */], [app["a" /* App */], config["a" /* Config */], deep_linker["a" /* DeepLinker */]]), core["_26" /* ɵmpd */](4608, picker_controller["a" /* PickerController */], picker_controller["a" /* PickerController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, popover_controller["a" /* PopoverController */], popover_controller["a" /* PopoverController */], [app["a" /* App */], config["a" /* Config */], deep_linker["a" /* DeepLinker */]]), core["_26" /* ɵmpd */](4608, tap_click["a" /* TapClick */], tap_click["a" /* TapClick */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], app["a" /* App */], gesture_controller["l" /* GestureController */]]), core["_26" /* ɵmpd */](4608, toast_controller["a" /* ToastController */], toast_controller["a" /* ToastController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, transition_controller["a" /* TransitionController */], transition_controller["a" /* TransitionController */], [platform_platform["a" /* Platform */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, status_bar["a" /* StatusBar */], status_bar["a" /* StatusBar */], []), core["_26" /* ɵmpd */](4608, splash_screen["a" /* SplashScreen */], splash_screen["a" /* SplashScreen */], []), core["_26" /* ɵmpd */](512, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["_26" /* ɵmpd */](512, core["q" /* ErrorHandler */], ionic_error_handler["a" /* IonicErrorHandler */], []), core["_26" /* ɵmpd */](256, config["b" /* ConfigToken */], {}, []), core["_26" /* ɵmpd */](1024, platform_registry["a" /* PlatformConfigToken */], platform_registry["b" /* providePlatformConfigs */], []), core["_26" /* ɵmpd */](1024, platform_platform["a" /* Platform */], platform_platform["b" /* setupPlatform */], [platform_browser["b" /* DOCUMENT */], platform_registry["a" /* PlatformConfigToken */], core["G" /* NgZone */]]), core["_26" /* ɵmpd */](1024, config["a" /* Config */], config["c" /* setupConfig */], [config["b" /* ConfigToken */], platform_platform["a" /* Platform */]]), core["_26" /* ɵmpd */](512, dom_controller["a" /* DomController */], dom_controller["a" /* DomController */], [platform_platform["a" /* Platform */]]), core["_26" /* ɵmpd */](512, menu_controller["a" /* MenuController */], menu_controller["a" /* MenuController */], []), core["_26" /* ɵmpd */](512, app["a" /* App */], app["a" /* App */], [config["a" /* Config */], platform_platform["a" /* Platform */], [2, menu_controller["a" /* MenuController */]]]), core["_26" /* ɵmpd */](512, gesture_controller["l" /* GestureController */], gesture_controller["l" /* GestureController */], [app["a" /* App */]]), core["_26" /* ɵmpd */](256, url_serializer["a" /* DeepLinkConfigToken */], { links: [] }, []), core["_26" /* ɵmpd */](512, core["j" /* Compiler */], core["j" /* Compiler */], []), core["_26" /* ɵmpd */](512, ng_module_loader["a" /* NgModuleLoader */], ng_module_loader["a" /* NgModuleLoader */], [core["j" /* Compiler */]]), core["_26" /* ɵmpd */](1024, module_loader["b" /* ModuleLoader */], module_loader["c" /* provideModuleLoader */], [ng_module_loader["a" /* NgModuleLoader */], core["y" /* Injector */]]), core["_26" /* ɵmpd */](1024, core["c" /* APP_INITIALIZER */], function (p0_0, p1_0, p2_0, p2_1, p3_0, p3_1, p3_2, p3_3, p3_4, p4_0, p4_1, p4_2, p4_3) { return [platform_browser["s" /* ɵh */](p0_0), mode_registry["a" /* registerModeConfigs */](p1_0), events["b" /* setupProvideEvents */](p2_0, p2_1), tap_click["b" /* setupTapClick */](p3_0, p3_1, p3_2, p3_3, p3_4), module_loader["d" /* setupPreloading */](p4_0, p4_1, p4_2, p4_3)]; }, [[2, core["F" /* NgProbeToken */]], config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], app["a" /* App */], gesture_controller["l" /* GestureController */], config["a" /* Config */], url_serializer["a" /* DeepLinkConfigToken */], module_loader["b" /* ModuleLoader */], core["G" /* NgZone */]]), core["_26" /* ɵmpd */](512, core["d" /* ApplicationInitStatus */], core["d" /* ApplicationInitStatus */], [[2, core["c" /* APP_INITIALIZER */]]]), core["_26" /* ɵmpd */](131584, core["f" /* ApplicationRef */], core["f" /* ApplicationRef */], [core["G" /* NgZone */], core["_11" /* ɵConsole */], core["y" /* Injector */], core["q" /* ErrorHandler */], core["l" /* ComponentFactoryResolver */], core["d" /* ApplicationInitStatus */]]), core["_26" /* ɵmpd */](512, core["e" /* ApplicationModule */], core["e" /* ApplicationModule */], [core["f" /* ApplicationRef */]]), core["_26" /* ɵmpd */](512, platform_browser["a" /* BrowserModule */], platform_browser["a" /* BrowserModule */], [[3, platform_browser["a" /* BrowserModule */]]]), core["_26" /* ɵmpd */](512, esm5_forms["j" /* ɵba */], esm5_forms["j" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["d" /* FormsModule */], esm5_forms["d" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* ReactiveFormsModule */], esm5_forms["i" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, http["e" /* HttpClientXsrfModule */], http["e" /* HttpClientXsrfModule */], []), core["_26" /* ɵmpd */](512, http["d" /* HttpClientModule */], http["d" /* HttpClientModule */], []), core["_26" /* ɵmpd */](512, app_module_AppModule, app_module_AppModule, []), core["_26" /* ɵmpd */](256, http["l" /* ɵf */], "XSRF-TOKEN", []), core["_26" /* ɵmpd */](256, http["m" /* ɵg */], "X-XSRF-TOKEN", []), core["_26" /* ɵmpd */](256, app_root["a" /* AppRootToken */], app_component_MyApp, []), core["_26" /* ɵmpd */](256, common["a" /* APP_BASE_HREF */], "/", [])]); });

//# sourceMappingURL=app.module.ngfactory.js.map
// CONCATENATED MODULE: ./src/app/main.ts



Object(core["_4" /* enableProdMode */])();
Object(platform_browser["j" /* platformBrowser */])().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map