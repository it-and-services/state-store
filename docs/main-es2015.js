(self["webpackChunkstate_store"] = self["webpackChunkstate_store"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ 1249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AppComponent = class AppComponent {
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _services_state_store_app_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/state-store/app-initial-state */ 4735);
/* harmony import */ var _components_counter_button_component_counter_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/counter-button.component/counter-button.component */ 8950);
/* harmony import */ var _components_counter_component_counter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/counter.component/counter.component */ 83);
/* harmony import */ var _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/state-store/action-factory */ 1924);
/* harmony import */ var _services_connectors_inventory_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/connectors/inventory.connector */ 4026);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _components_inventories_button_component_inventories_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/inventories-button.component/inventories-button.component */ 3083);
/* harmony import */ var _components_inventories_component_inventories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inventories.component/inventories.component */ 2513);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);
/* harmony import */ var ngx_state_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-state-store */ 7258);
















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _components_counter_button_component_counter_button_component__WEBPACK_IMPORTED_MODULE_3__.CounterButtonComponent,
            _components_counter_component_counter_component__WEBPACK_IMPORTED_MODULE_4__.CounterComponent,
            _components_inventories_button_component_inventories_button_component__WEBPACK_IMPORTED_MODULE_7__.InventoriesButtonComponent,
            _components_inventories_component_inventories_component__WEBPACK_IMPORTED_MODULE_8__.InventoriesComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            ngx_state_store__WEBPACK_IMPORTED_MODULE_15__.NgxStateStoreModule.forRoot({
                storeName: 'store-demo',
                log: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.state.log,
                timekeeping: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.state.timekeeping,
                initialState: _services_state_store_app_initial_state__WEBPACK_IMPORTED_MODULE_2__.AppInitialState
            }),
        ],
        providers: [_services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_5__.ActionFactory, _services_connectors_inventory_connector__WEBPACK_IMPORTED_MODULE_6__.InventoryConnector],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 8950:
/*!*********************************************************************************!*\
  !*** ./src/app/components/counter-button.component/counter-button.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterButtonComponent": function() { return /* binding */ CounterButtonComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_counter_button_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./counter-button.component.html */ 9804);
/* harmony import */ var _counter_button_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter-button.component.scss */ 4971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/state-store/action-factory */ 1924);
/* harmony import */ var ngx_state_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-state-store */ 7258);






let CounterButtonComponent = class CounterButtonComponent {
    constructor(store, factory) {
        this.store = store;
        this.factory = factory;
    }
    incrementCounter() {
        this.store.dispatch(this.factory.incrementCounter());
    }
};
CounterButtonComponent.ctorParameters = () => [
    { type: ngx_state_store__WEBPACK_IMPORTED_MODULE_3__.Store },
    { type: _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_2__.ActionFactory }
];
CounterButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-counter-button',
        template: _raw_loader_counter_button_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_counter_button_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CounterButtonComponent);



/***/ }),

/***/ 83:
/*!*******************************************************************!*\
  !*** ./src/app/components/counter.component/counter.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterComponent": function() { return /* binding */ CounterComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_counter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./counter.component.html */ 8167);
/* harmony import */ var _counter_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.component.scss */ 4756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_state_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-state-store */ 7258);





let CounterComponent = class CounterComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.counter$ = this.store.select('Counter');
    }
};
CounterComponent.ctorParameters = () => [
    { type: ngx_state_store__WEBPACK_IMPORTED_MODULE_2__.Store }
];
CounterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-counter',
        template: _raw_loader_counter_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_counter_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CounterComponent);



/***/ }),

/***/ 3083:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/inventories-button.component/inventories-button.component.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoriesButtonComponent": function() { return /* binding */ InventoriesButtonComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_inventories_button_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./inventories-button.component.html */ 6836);
/* harmony import */ var _inventories_button_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventories-button.component.scss */ 4954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_state_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-state-store */ 7258);
/* harmony import */ var _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/state-store/action-factory */ 1924);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3653);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5917);








let InventoriesButtonComponent = class InventoriesButtonComponent {
    constructor(store, factory) {
        this.store = store;
        this.factory = factory;
        this.changes = { addedEntries: [], removedEntries: [] };
        this.inventories = [];
    }
    ngOnInit() {
        this.store.select('Inventories', (oldInventories, newInventories) => {
            if (oldInventories === newInventories
                || oldInventories && newInventories
                    && !this.calcDiff(oldInventories, newInventories).length
                    && !this.calcDiff(newInventories, oldInventories).length) {
                return true;
            }
            return false;
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.skip)(1))
            .subscribe((newInventories) => {
            this.changes.addedEntries = this.calcDiff(this.inventories, newInventories);
            this.changes.removedEntries = this.calcDiff(newInventories, this.inventories);
            this.inventories = newInventories;
            console.log('the log is present only if there are some changes');
        });
    }
    calcDiff(source, target) {
        return (target || []).filter(t => !(source || []).find(s => s.id === t.id));
    }
    loadInventory() {
        this.changes.addedEntries = [];
        this.changes.removedEntries = [];
        this.store.dispatch(this.factory.showLoadIndicator(_services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_2__.LoadIndicator.LOAD_INVENTORIES))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => this.store.dispatch(this.factory.loadInventories())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
            console.log(error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(error);
        })).subscribe((state) => {
            this.lastDownloadAt = state.LastDownloadAt;
            this.store.dispatch(this.factory.hideLoadIndicator(_services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_2__.LoadIndicator.LOAD_INVENTORIES));
        });
    }
    inventoriesToString(inventories) {
        return inventories.map(e => e.id).join(', ');
    }
};
InventoriesButtonComponent.ctorParameters = () => [
    { type: ngx_state_store__WEBPACK_IMPORTED_MODULE_7__.Store },
    { type: _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_2__.ActionFactory }
];
InventoriesButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-inventories-button',
        template: _raw_loader_inventories_button_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_inventories_button_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InventoriesButtonComponent);



/***/ }),

/***/ 2513:
/*!***************************************************************************!*\
  !*** ./src/app/components/inventories.component/inventories.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoriesComponent": function() { return /* binding */ InventoriesComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_inventories_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./inventories.component.html */ 1686);
/* harmony import */ var _inventories_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventories.component.scss */ 7714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_state_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-state-store */ 7258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/state-store/action-factory */ 1924);







let InventoriesComponent = class InventoriesComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.loading$ = this.store.select('ShowLoadingIndicator').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(indicators => indicators.filter(i => i === _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_2__.LoadIndicator.LOAD_INVENTORIES).length > 0));
        this.store.select('Inventories').subscribe(inventories => {
            this.inventories = inventories;
        });
    }
};
InventoriesComponent.ctorParameters = () => [
    { type: ngx_state_store__WEBPACK_IMPORTED_MODULE_4__.Store }
];
InventoriesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-inventories',
        template: _raw_loader_inventories_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_inventories_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InventoriesComponent);



/***/ }),

/***/ 4026:
/*!************************************************************!*\
  !*** ./src/app/services/connectors/inventory.connector.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryConnector": function() { return /* binding */ InventoryConnector; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 5792);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9773);





let InventoryConnector = class InventoryConnector {
    constructor(http) {
        this.http = http;
    }
    loadInventory() {
        // delay(2000) to imitate the network throttling
        return this.http.get('assets/mock-data/inventories.json').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.delay)(2000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(inventories => {
            inventories.splice(this.getRandomInt(inventories.length), this.getRandomInt(2));
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(inventories);
        }));
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
};
InventoryConnector.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
InventoryConnector = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], InventoryConnector);



/***/ }),

/***/ 1924:
/*!********************************************************!*\
  !*** ./src/app/services/state-store/action-factory.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadIndicator": function() { return /* binding */ LoadIndicator; },
/* harmony export */   "ActionFactory": function() { return /* binding */ ActionFactory; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 8811);
/* harmony import */ var _connectors_inventory_connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connectors/inventory.connector */ 4026);




var LoadIndicator;
(function (LoadIndicator) {
    LoadIndicator["DEFAULT"] = "DEFAULT";
    LoadIndicator["LOAD_INVENTORIES"] = "LOAD_INVENTORIES";
})(LoadIndicator || (LoadIndicator = {}));
let ActionFactory = class ActionFactory {
    constructor(inventoryConnector) {
        this.inventoryConnector = inventoryConnector;
    }
    incrementCounter() {
        return new _actions__WEBPACK_IMPORTED_MODULE_0__.IncrementCounterAction();
    }
    showLoadIndicator(identifier = LoadIndicator.DEFAULT) {
        return new _actions__WEBPACK_IMPORTED_MODULE_0__.ShowLoadingIndicatorAction(identifier);
    }
    hideLoadIndicator(identifier = LoadIndicator.DEFAULT) {
        return new _actions__WEBPACK_IMPORTED_MODULE_0__.HideLoadingIndicatorAction(identifier);
    }
    loadInventories() {
        return new _actions__WEBPACK_IMPORTED_MODULE_0__.LoadInventoriesAction(this.inventoryConnector);
    }
};
ActionFactory.ctorParameters = () => [
    { type: _connectors_inventory_connector__WEBPACK_IMPORTED_MODULE_1__.InventoryConnector }
];
ActionFactory = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], ActionFactory);



/***/ }),

/***/ 4172:
/*!****************************************************!*\
  !*** ./src/app/services/state-store/action-ids.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionIds": function() { return /* binding */ ActionIds; }
/* harmony export */ });
var ActionIds;
(function (ActionIds) {
    ActionIds["HideLoadingIndicator"] = "[Load] Hide Loading Indicator";
    ActionIds["ShowLoadingIndicator"] = "[Load] Show Loading Indicator";
    ActionIds["UpdateCounter"] = "[Common] Update counter";
    ActionIds["LoadInventories"] = "[Load] Load inventories from back-end";
})(ActionIds || (ActionIds = {}));


/***/ }),

/***/ 5948:
/*!*******************************************************************************!*\
  !*** ./src/app/services/state-store/actions/hide-loading-indicator.action.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideLoadingIndicatorAction": function() { return /* binding */ HideLoadingIndicatorAction; }
/* harmony export */ });
/* harmony import */ var _action_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-ids */ 4172);
/* harmony import */ var ngx_state_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-state-store */ 7258);


/**
 * Hide loading indicator which block the page.
 */
class HideLoadingIndicatorAction extends ngx_state_store__WEBPACK_IMPORTED_MODULE_1__.Action {
    constructor(identifier) {
        super(_action_ids__WEBPACK_IMPORTED_MODULE_0__.ActionIds.HideLoadingIndicator + ': ' + identifier);
        this.identifier = identifier;
    }
    handleState(stateContext) {
        if (stateContext.getState().ShowLoadingIndicator == null) {
            return;
        }
        const index = stateContext.getState().ShowLoadingIndicator.indexOf(this.identifier);
        if (index < 0) {
            return;
        }
        const newState = this.getEmptyState();
        newState.ShowLoadingIndicator = stateContext.getState().ShowLoadingIndicator.slice();
        newState.ShowLoadingIndicator.splice(index, 1);
        stateContext.patchState(newState);
    }
}


/***/ }),

/***/ 6022:
/*!**************************************************************************!*\
  !*** ./src/app/services/state-store/actions/increment-counter.action.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncrementCounterAction": function() { return /* binding */ IncrementCounterAction; }
/* harmony export */ });
/* harmony import */ var ngx_state_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-state-store */ 7258);
/* harmony import */ var _action_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-ids */ 4172);


class IncrementCounterAction extends ngx_state_store__WEBPACK_IMPORTED_MODULE_1__.Action {
    constructor() {
        super(_action_ids__WEBPACK_IMPORTED_MODULE_0__.ActionIds.UpdateCounter);
    }
    handleState(stateContext) {
        const newValue = this.getEmptyState();
        newValue.Counter = stateContext.getState().Counter + 1;
        stateContext.patchState(newValue);
    }
}


/***/ }),

/***/ 8811:
/*!*******************************************************!*\
  !*** ./src/app/services/state-store/actions/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideLoadingIndicatorAction": function() { return /* reexport safe */ _hide_loading_indicator_action__WEBPACK_IMPORTED_MODULE_0__.HideLoadingIndicatorAction; },
/* harmony export */   "IncrementCounterAction": function() { return /* reexport safe */ _increment_counter_action__WEBPACK_IMPORTED_MODULE_1__.IncrementCounterAction; },
/* harmony export */   "LoadInventoriesAction": function() { return /* reexport safe */ _load_inventories_action__WEBPACK_IMPORTED_MODULE_2__.LoadInventoriesAction; },
/* harmony export */   "ShowLoadingIndicatorAction": function() { return /* reexport safe */ _show_loading_indicator_action__WEBPACK_IMPORTED_MODULE_3__.ShowLoadingIndicatorAction; }
/* harmony export */ });
/* harmony import */ var _hide_loading_indicator_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hide-loading-indicator.action */ 5948);
/* harmony import */ var _increment_counter_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./increment-counter.action */ 6022);
/* harmony import */ var _load_inventories_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-inventories.action */ 4589);
/* harmony import */ var _show_loading_indicator_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-loading-indicator.action */ 7994);






/***/ }),

/***/ 4589:
/*!*************************************************************************!*\
  !*** ./src/app/services/state-store/actions/load-inventories.action.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadInventoriesAction": function() { return /* binding */ LoadInventoriesAction; }
/* harmony export */ });
/* harmony import */ var ngx_state_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-state-store */ 7258);
/* harmony import */ var _action_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-ids */ 4172);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8307);



class LoadInventoriesAction extends ngx_state_store__WEBPACK_IMPORTED_MODULE_1__.Action {
    constructor(inventoryConnector) {
        super(_action_ids__WEBPACK_IMPORTED_MODULE_0__.ActionIds.LoadInventories);
        this.inventoryConnector = inventoryConnector;
    }
    handleState(stateContext) {
        return this.inventoryConnector.loadInventory()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(inventories => {
            const newState = this.getEmptyState();
            newState.Inventories = inventories;
            newState.LastDownloadAt = (new Date()).toISOString();
            stateContext.patchState(newState);
        }));
    }
}


/***/ }),

/***/ 7994:
/*!*******************************************************************************!*\
  !*** ./src/app/services/state-store/actions/show-loading-indicator.action.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowLoadingIndicatorAction": function() { return /* binding */ ShowLoadingIndicatorAction; }
/* harmony export */ });
/* harmony import */ var ngx_state_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-state-store */ 7258);
/* harmony import */ var _action_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-ids */ 4172);


/**
 * Shows loading indicator to blocks the page, so the user can not
 * use the ui.
 */
class ShowLoadingIndicatorAction extends ngx_state_store__WEBPACK_IMPORTED_MODULE_1__.Action {
    constructor(identifier) {
        super(_action_ids__WEBPACK_IMPORTED_MODULE_0__.ActionIds.ShowLoadingIndicator + ': ' + identifier);
        this.identifier = identifier;
    }
    handleState(stateContext) {
        const newState = this.getEmptyState();
        newState.ShowLoadingIndicator = stateContext.getState().ShowLoadingIndicator.slice();
        newState.ShowLoadingIndicator.push(this.identifier);
        stateContext.patchState(newState);
    }
}


/***/ }),

/***/ 4735:
/*!***********************************************************!*\
  !*** ./src/app/services/state-store/app-initial-state.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppInitialState": function() { return /* binding */ AppInitialState; }
/* harmony export */ });
const AppInitialState = {
    ShowLoadingIndicator: [],
    Counter: 0,
    Inventories: null,
    LastDownloadAt: ''
};


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --configuration production` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    state: {
        log: true,
        timekeeping: true
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 1249:
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\r\n  margin-top: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 4971:
/*!***********************************************************************************!*\
  !*** ./src/app/components/counter-button.component/counter-button.component.scss ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudGVyLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 4756:
/*!*********************************************************************!*\
  !*** ./src/app/components/counter.component/counter.component.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 4954:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/inventories-button.component/inventories-button.component.scss ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlbnRvcmllcy1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 7714:
/*!*****************************************************************************!*\
  !*** ./src/app/components/inventories.component/inventories.component.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inventories {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 300px;\n  max-height: 300px;\n  overflow: hidden;\n}\n\n.load-indicator-background {\n  background-color: #cccccc;\n  opacity: 0.7;\n}\n\n.load-indicator, .load-indicator-background, .inventories-table-container {\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.inventories-table-container {\n  z-index: auto;\n  z-index: initial;\n  overflow-x: auto;\n  overflow-y: auto;\n}\n\n.load-indicator {\n  margin: auto;\n  background-color: white;\n  width: 7rem;\n  height: 3rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.load-indicator > div {\n  margin: 0;\n  padding: 0;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVudG9yaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFBQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFDSiIsImZpbGUiOiJpbnZlbnRvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZlbnRvcmllcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubG9hZC1pbmRpY2F0b3ItYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICBvcGFjaXR5OiAuNztcclxufVxyXG5cclxuLmxvYWQtaW5kaWNhdG9yLCAubG9hZC1pbmRpY2F0b3ItYmFja2dyb3VuZCwgLmludmVudG9yaWVzLXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6ICsxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5pbnZlbnRvcmllcy10YWJsZS1jb250YWluZXIge1xyXG4gIHotaW5kZXg6IGluaXRpYWw7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubG9hZC1pbmRpY2F0b3Ige1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogN3JlbTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICA+IGRpdiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h3>Usage example of the ngx-state-store module</h3>\r\n      The complete module documentation is available at <a\r\n      href=\"https://it-and-services.github.io/state-store/\"\r\n      target=\"_blank\">https://it-and-services.github.io/state-store/</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\"></div>\r\n  <div class=\"row\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <ul>\r\n        <li>src/app/components/counter-button.component/counter-button.component.ts</li>\r\n        <li>src/app/components/counter.component/counter.component.ts</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <app-counter-button></app-counter-button>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <app-counter></app-counter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\"></div>\r\n  <div class=\"row\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <ul>\r\n        <li>src/app/components/inventories-button.component/inventories-button.component.ts</li>\r\n        <li>src/app/components/inventories.component/inventories.component.ts</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <app-inventories-button></app-inventories-button>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <app-inventories></app-inventories>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 9804:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/counter-button.component/counter-button.component.html ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"btn-primary\" (click)=\"incrementCounter()\">Increment Counter</button>\r\n");

/***/ }),

/***/ 8167:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/counter.component/counter.component.html ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert alert-primary\" role=\"alert\">\r\n  current counter {{counter$ | async}}\r\n</div>\r\n");

/***/ }),

/***/ 6836:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventories-button.component/inventories-button.component.html ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button (click)=\"loadInventory()\" class=\"btn-primary\">Load Inventory</button>\r\n<p>Last download at: {{lastDownloadAt}}</p>\r\n<p *ngIf=\"changes.addedEntries.length\">\r\n  {{changes.addedEntries.length}} new {{changes.addedEntries.length > 1 ? 'entries' : 'entry'}}:\r\n  {{inventoriesToString(changes.addedEntries)}}</p>\r\n<p *ngIf=\"changes.removedEntries.length\">\r\n  {{changes.removedEntries.length}} {{changes.removedEntries.length > 1 ? 'entries' : 'entry'}} removed:\r\n  {{inventoriesToString(changes.removedEntries)}}</p>\r\n");

/***/ }),

/***/ 1686:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventories.component/inventories.component.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inventories\">\r\n  <div *ngIf=\"loading$ | async\" class=\"load-indicator-background\"></div>\r\n  <div *ngIf=\"loading$ | async\" class=\"load-indicator\">\r\n    <div>Loading ...</div>\r\n  </div>\r\n\r\n  <div class=\"inventories-table-container\">\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n      <tr>\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">ID</th>\r\n        <th scope=\"col\">Version</th>\r\n        <th scope=\"col\">Name</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let inventory of inventories; let i=index\">\r\n        <th scope=\"row\">{{i}}</th>\r\n        <td>{{inventory.id}}</td>\r\n        <td>{{inventory.version}}</td>\r\n        <td>{{inventory.name}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map