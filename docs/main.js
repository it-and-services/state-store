(self["webpackChunkstate_store"] = self["webpackChunkstate_store"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9595);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _services_state_store_app_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/state-store/app-initial-state */ 4735);
/* harmony import */ var _components_counter_button_component_counter_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/counter-button.component/counter-button.component */ 8950);
/* harmony import */ var _components_counter_component_counter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/counter.component/counter.component */ 83);
/* harmony import */ var _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/state-store/action-factory */ 1924);
/* harmony import */ var _services_connectors_inventory_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/connectors/inventory.connector */ 4026);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _components_inventories_button_component_inventories_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/inventories-button.component/inventories-button.component */ 3083);
/* harmony import */ var _components_inventories_component_inventories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inventories.component/inventories.component */ 2513);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var ngx_state_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-state-store */ 6593);
















let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_counter_button_component_counter_button_component__WEBPACK_IMPORTED_MODULE_3__.CounterButtonComponent, _components_counter_component_counter_component__WEBPACK_IMPORTED_MODULE_4__.CounterComponent, _components_inventories_button_component_inventories_button_component__WEBPACK_IMPORTED_MODULE_7__.InventoriesButtonComponent, _components_inventories_component_inventories_component__WEBPACK_IMPORTED_MODULE_8__.InventoriesComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, ngx_state_store__WEBPACK_IMPORTED_MODULE_15__.NgxStateStoreModule.forRoot({
    storeName: 'store-demo',
    log: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.state.log,
    timekeeping: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.state.timekeeping,
    initialState: _services_state_store_app_initial_state__WEBPACK_IMPORTED_MODULE_2__.AppInitialState
  })],
  providers: [_services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_5__.ActionFactory, _services_connectors_inventory_connector__WEBPACK_IMPORTED_MODULE_6__.InventoryConnector],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 8950:
/*!*********************************************************************************!*\
  !*** ./src/app/components/counter-button.component/counter-button.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterButtonComponent": () => (/* binding */ CounterButtonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _counter_button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter-button.component.html?ngResource */ 9054);
/* harmony import */ var _counter_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter-button.component.scss?ngResource */ 3475);
/* harmony import */ var _counter_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_counter_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/state-store/action-factory */ 1924);
/* harmony import */ var ngx_state_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-state-store */ 6593);
var _class;






let CounterButtonComponent = (_class = class CounterButtonComponent {
  constructor(store, factory) {
    this.store = store;
    this.factory = factory;
  }
  incrementCounter() {
    this.store.dispatch(this.factory.incrementCounter());
  }
}, _class.ctorParameters = () => [{
  type: ngx_state_store__WEBPACK_IMPORTED_MODULE_3__.Store
}, {
  type: _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_2__.ActionFactory
}], _class);
CounterButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-counter-button',
  template: _counter_button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_counter_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CounterButtonComponent);


/***/ }),

/***/ 83:
/*!*******************************************************************!*\
  !*** ./src/app/components/counter.component/counter.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterComponent": () => (/* binding */ CounterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _counter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter.component.html?ngResource */ 4065);
/* harmony import */ var _counter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.component.scss?ngResource */ 1185);
/* harmony import */ var _counter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_counter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_state_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-state-store */ 6593);
var _class;





let CounterComponent = (_class = class CounterComponent {
  constructor(store) {
    this.store = store;
  }
  ngOnInit() {
    this.counter$ = this.store.select('Counter');
  }
}, _class.ctorParameters = () => [{
  type: ngx_state_store__WEBPACK_IMPORTED_MODULE_2__.Store
}], _class);
CounterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-counter',
  template: _counter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_counter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CounterComponent);


/***/ }),

/***/ 3083:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/inventories-button.component/inventories-button.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoriesButtonComponent": () => (/* binding */ InventoriesButtonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _inventories_button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventories-button.component.html?ngResource */ 869);
/* harmony import */ var _inventories_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventories-button.component.scss?ngResource */ 6767);
/* harmony import */ var _inventories_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inventories_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_state_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-state-store */ 6593);
/* harmony import */ var _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/state-store/action-factory */ 1924);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 745);
var _class;








let InventoriesButtonComponent = (_class = class InventoriesButtonComponent {
  constructor(store, factory) {
    this.store = store;
    this.factory = factory;
    this.changes = {
      addedEntries: [],
      removedEntries: []
    };
    this.inventories = [];
  }
  ngOnInit() {
    this.store.select('Inventories', (oldInventories, newInventories) => {
      if (oldInventories === newInventories || oldInventories && newInventories && !this.calcDiff(oldInventories, newInventories).length && !this.calcDiff(newInventories, oldInventories).length) {
        return true;
      }
      return false;
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.skip)(1)).subscribe(newInventories => {
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
    this.store.dispatch(this.factory.showLoadIndicator(_services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_2__.LoadIndicator.LOAD_INVENTORIES)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => this.store.dispatch(this.factory.loadInventories())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.log(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(error);
    })).subscribe(state => {
      this.lastDownloadAt = state.LastDownloadAt;
      this.store.dispatch(this.factory.hideLoadIndicator(_services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_2__.LoadIndicator.LOAD_INVENTORIES));
    });
  }
  inventoriesToString(inventories) {
    return inventories.map(e => e.id).join(', ');
  }
}, _class.ctorParameters = () => [{
  type: ngx_state_store__WEBPACK_IMPORTED_MODULE_7__.Store
}, {
  type: _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_2__.ActionFactory
}], _class);
InventoriesButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-inventories-button',
  template: _inventories_button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_inventories_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], InventoriesButtonComponent);


/***/ }),

/***/ 2513:
/*!***************************************************************************!*\
  !*** ./src/app/components/inventories.component/inventories.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoriesComponent": () => (/* binding */ InventoriesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _inventories_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventories.component.html?ngResource */ 2938);
/* harmony import */ var _inventories_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventories.component.scss?ngResource */ 3040);
/* harmony import */ var _inventories_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inventories_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_state_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-state-store */ 6593);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/state-store/action-factory */ 1924);
var _class;







let InventoriesComponent = (_class = class InventoriesComponent {
  constructor(store) {
    this.store = store;
  }
  ngOnInit() {
    this.loading$ = this.store.select('ShowLoadingIndicator').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(indicators => indicators.filter(i => i === _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_2__.LoadIndicator.LOAD_INVENTORIES).length > 0));
    this.store.select('Inventories').subscribe(inventories => {
      this.inventories = inventories;
    });
  }
}, _class.ctorParameters = () => [{
  type: ngx_state_store__WEBPACK_IMPORTED_MODULE_4__.Store
}], _class);
InventoriesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-inventories',
  template: _inventories_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_inventories_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], InventoriesComponent);


/***/ }),

/***/ 4026:
/*!************************************************************!*\
  !*** ./src/app/services/connectors/inventory.connector.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryConnector": () => (/* binding */ InventoryConnector)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 1339);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1353);
var _class;





let InventoryConnector = (_class = class InventoryConnector {
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
}, _class.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}], _class);
InventoryConnector = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()], InventoryConnector);


/***/ }),

/***/ 1924:
/*!********************************************************!*\
  !*** ./src/app/services/state-store/action-factory.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionFactory": () => (/* binding */ ActionFactory),
/* harmony export */   "LoadIndicator": () => (/* binding */ LoadIndicator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 8811);
/* harmony import */ var _connectors_inventory_connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connectors/inventory.connector */ 4026);
var _class;




var LoadIndicator;
(function (LoadIndicator) {
  LoadIndicator["DEFAULT"] = "DEFAULT";
  LoadIndicator["LOAD_INVENTORIES"] = "LOAD_INVENTORIES";
})(LoadIndicator || (LoadIndicator = {}));
let ActionFactory = (_class = class ActionFactory {
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
}, _class.ctorParameters = () => [{
  type: _connectors_inventory_connector__WEBPACK_IMPORTED_MODULE_1__.InventoryConnector
}], _class);
ActionFactory = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], ActionFactory);


/***/ }),

/***/ 4172:
/*!****************************************************!*\
  !*** ./src/app/services/state-store/action-ids.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionIds": () => (/* binding */ ActionIds)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideLoadingIndicatorAction": () => (/* binding */ HideLoadingIndicatorAction)
/* harmony export */ });
/* harmony import */ var _action_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-ids */ 4172);
/* harmony import */ var ngx_state_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-state-store */ 6593);


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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncrementCounterAction": () => (/* binding */ IncrementCounterAction)
/* harmony export */ });
/* harmony import */ var ngx_state_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-state-store */ 6593);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideLoadingIndicatorAction": () => (/* reexport safe */ _hide_loading_indicator_action__WEBPACK_IMPORTED_MODULE_0__.HideLoadingIndicatorAction),
/* harmony export */   "IncrementCounterAction": () => (/* reexport safe */ _increment_counter_action__WEBPACK_IMPORTED_MODULE_1__.IncrementCounterAction),
/* harmony export */   "LoadInventoriesAction": () => (/* reexport safe */ _load_inventories_action__WEBPACK_IMPORTED_MODULE_2__.LoadInventoriesAction),
/* harmony export */   "ShowLoadingIndicatorAction": () => (/* reexport safe */ _show_loading_indicator_action__WEBPACK_IMPORTED_MODULE_3__.ShowLoadingIndicatorAction)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadInventoriesAction": () => (/* binding */ LoadInventoriesAction)
/* harmony export */ });
/* harmony import */ var ngx_state_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-state-store */ 6593);
/* harmony import */ var _action_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-ids */ 4172);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9337);



class LoadInventoriesAction extends ngx_state_store__WEBPACK_IMPORTED_MODULE_1__.Action {
  constructor(inventoryConnector) {
    super(_action_ids__WEBPACK_IMPORTED_MODULE_0__.ActionIds.LoadInventories);
    this.inventoryConnector = inventoryConnector;
  }
  handleState(stateContext) {
    return this.inventoryConnector.loadInventory().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(inventories => {
      const newState = this.getEmptyState();
      newState.Inventories = inventories;
      newState.LastDownloadAt = new Date().toISOString();
      stateContext.patchState(newState);
    }));
  }
}

/***/ }),

/***/ 7994:
/*!*******************************************************************************!*\
  !*** ./src/app/services/state-store/actions/show-loading-indicator.action.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowLoadingIndicatorAction": () => (/* binding */ ShowLoadingIndicatorAction)
/* harmony export */ });
/* harmony import */ var ngx_state_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-state-store */ 6593);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppInitialState": () => (/* binding */ AppInitialState)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 9595:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".row {\n  margin-top: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/app/app.component.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;AACF","sourcesContent":[".row {\r\n  margin-top: 1rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3475:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/counter-button.component/counter-button.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1185:
/*!********************************************************************************!*\
  !*** ./src/app/components/counter.component/counter.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6767:
/*!******************************************************************************************************!*\
  !*** ./src/app/components/inventories-button.component/inventories-button.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3040:
/*!****************************************************************************************!*\
  !*** ./src/app/components/inventories.component/inventories.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".inventories {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 300px;\n  max-height: 300px;\n  overflow: hidden;\n}\n\n.load-indicator-background {\n  background-color: #cccccc;\n  opacity: 0.7;\n}\n\n.load-indicator, .load-indicator-background, .inventories-table-container {\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.inventories-table-container {\n  z-index: initial;\n  overflow-x: auto;\n  overflow-y: auto;\n}\n\n.load-indicator {\n  margin: auto;\n  background-color: white;\n  width: 7rem;\n  height: 3rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.load-indicator > div {\n  margin: 0;\n  padding: 0;\n  vertical-align: middle;\n}", "",{"version":3,"sources":["webpack://./src/app/components/inventories.component/inventories.component.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,iBAAA;EACA,gBAAA;AACF;;AAEA;EACE,yBAAA;EACA,YAAA;AACF;;AAEA;EACE,YAAA;EACA,WAAA;EACA,UAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;AACF;;AAEA;EACE,gBAAA;EACA,gBAAA;EACA,gBAAA;AACF;;AAEA;EACE,YAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;AACF;AACE;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AACJ","sourcesContent":[".inventories {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  min-height: 300px;\r\n  max-height: 300px;\r\n  overflow: hidden;\r\n}\r\n\r\n.load-indicator-background {\r\n  background-color: #cccccc;\r\n  opacity: .7;\r\n}\r\n\r\n.load-indicator, .load-indicator-background, .inventories-table-container {\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: +1;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.inventories-table-container {\r\n  z-index: initial;\r\n  overflow-x: auto;\r\n  overflow-y: auto;\r\n}\r\n\r\n.load-indicator {\r\n  margin: auto;\r\n  background-color: white;\r\n  width: 7rem;\r\n  height: 3rem;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n\r\n  > div {\r\n    margin: 0;\r\n    padding: 0;\r\n    vertical-align: middle;\r\n  }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h3>Usage example of the ngx-state-store module</h3>\r\n      The complete module documentation is available at <a\r\n      href=\"https://it-and-services.github.io/state-store/\"\r\n      target=\"_blank\">https://it-and-services.github.io/state-store/</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\"></div>\r\n  <div class=\"row\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <ul>\r\n        <li>src/app/components/counter-button.component/counter-button.component.ts</li>\r\n        <li>src/app/components/counter.component/counter.component.ts</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <app-counter-button></app-counter-button>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <app-counter></app-counter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\"></div>\r\n  <div class=\"row\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <ul>\r\n        <li>src/app/components/inventories-button.component/inventories-button.component.ts</li>\r\n        <li>src/app/components/inventories.component/inventories.component.ts</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <app-inventories-button></app-inventories-button>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <app-inventories></app-inventories>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 9054:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/counter-button.component/counter-button.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<button class=\"btn-primary\" (click)=\"incrementCounter()\">Increment Counter</button>\r\n";

/***/ }),

/***/ 4065:
/*!********************************************************************************!*\
  !*** ./src/app/components/counter.component/counter.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"alert alert-primary\" role=\"alert\">\r\n  current counter {{counter$ | async}}\r\n</div>\r\n";

/***/ }),

/***/ 869:
/*!******************************************************************************************************!*\
  !*** ./src/app/components/inventories-button.component/inventories-button.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<button (click)=\"loadInventory()\" class=\"btn-primary\">Load Inventory</button>\r\n<p>Last download at: {{lastDownloadAt}}</p>\r\n<p *ngIf=\"changes.addedEntries.length\">\r\n  {{changes.addedEntries.length}} new {{changes.addedEntries.length > 1 ? 'entries' : 'entry'}}:\r\n  {{inventoriesToString(changes.addedEntries)}}</p>\r\n<p *ngIf=\"changes.removedEntries.length\">\r\n  {{changes.removedEntries.length}} {{changes.removedEntries.length > 1 ? 'entries' : 'entry'}} removed:\r\n  {{inventoriesToString(changes.removedEntries)}}</p>\r\n";

/***/ }),

/***/ 2938:
/*!****************************************************************************************!*\
  !*** ./src/app/components/inventories.component/inventories.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"inventories\">\r\n  <div *ngIf=\"loading$ | async\" class=\"load-indicator-background\"></div>\r\n  <div *ngIf=\"loading$ | async\" class=\"load-indicator\">\r\n    <div>Loading ...</div>\r\n  </div>\r\n\r\n  <div class=\"inventories-table-container\">\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n      <tr>\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">ID</th>\r\n        <th scope=\"col\">Version</th>\r\n        <th scope=\"col\">Name</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let inventory of inventories; let i=index\">\r\n        <th scope=\"row\">{{i}}</th>\r\n        <td>{{inventory.id}}</td>\r\n        <td>{{inventory.version}}</td>\r\n        <td>{{inventory.name}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 6593:
/*!***********************************************************!*\
  !*** ./dist/ngx-state-store/fesm2020/ngx-state-store.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action),
/* harmony export */   "NgxStateStoreModule": () => (/* binding */ NgxStateStoreModule),
/* harmony export */   "StateHelper": () => (/* binding */ StateHelper),
/* harmony export */   "Store": () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 4276);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4437);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);






// @dynamic
class StateHelper {
  static immutableFunction(objectName) {
    return (...a) => {
      throw Error(objectName + ' is immutable');
    };
  }
  /**
   * Makes a shadow freeze
   *
   * @param o object to freeze
   */
  static deepFreeze(o) {
    // @ts-ignore
    if (o === window) {
      return o;
    }
    if (o instanceof Map) {
      StateHelper.freezeMap(o);
    } else if (o instanceof Set) {
      StateHelper.freezeSet(o);
    } else if (o instanceof Date && StateHelper.isValidDate(o)) {
      StateHelper.freezeDate(o);
    }
    StateHelper.freezeObject(o);
    return o;
  }
  static freezeMap(o) {
    o.clear = StateHelper.immutableMapFunction;
    o.set = StateHelper.immutableMapFunction;
    o.delete = StateHelper.immutableMapFunction;
    const origin = new Map(o);
    for (const [key, value] of origin.entries()) {
      StateHelper.deepFreeze(key);
      StateHelper.deepFreeze(value);
    }
    o.entries = () => origin.entries();
    o.values = () => origin.values();
    o.keys = () => origin.keys();
    o.has = a => origin.has(a);
    o.get = a => origin.get(a);
    o.forEach = callbackFn => origin.forEach(callbackFn);
    o[Symbol.iterator] = () => origin[Symbol.iterator]();
    Object.defineProperty(o, 'size', {
      value: origin.size,
      writable: false
    });
  }
  static freezeSet(o) {
    o.clear = StateHelper.immutableSetFunction;
    o.add = StateHelper.immutableSetFunction;
    o.delete = StateHelper.immutableSetFunction;
    const origin = new Set(o);
    for (const value of origin) {
      StateHelper.deepFreeze(value);
    }
    o.entries = () => origin.entries();
    o.values = () => origin.values();
    o.keys = () => origin.keys();
    o.has = a => origin.has(a);
    o.forEach = callbackFn => origin.forEach(callbackFn);
    o[Symbol.iterator] = () => origin[Symbol.iterator]();
    Object.defineProperty(o, 'size', {
      value: origin.size,
      writable: false
    });
  }
  static freezeDate(o) {
    o.setDate = StateHelper.immutableDateFunction;
    o.setHours = StateHelper.immutableDateFunction;
    o.setFullYear = StateHelper.immutableDateFunction;
    o.setMilliseconds = StateHelper.immutableDateFunction;
    o.setMinutes = StateHelper.immutableDateFunction;
    o.setMonth = StateHelper.immutableDateFunction;
    o.setSeconds = StateHelper.immutableDateFunction;
    o.setTime = StateHelper.immutableDateFunction;
    o.setUTCDate = StateHelper.immutableDateFunction;
    o.setUTCHours = StateHelper.immutableDateFunction;
    o.setUTCFullYear = StateHelper.immutableDateFunction;
    o.setUTCMilliseconds = StateHelper.immutableDateFunction;
    o.setUTCMinutes = StateHelper.immutableDateFunction;
    o.setUTCMonth = StateHelper.immutableDateFunction;
    o.setUTCSeconds = StateHelper.immutableDateFunction;
    const origin = new Date(o.getTime());
    o.getDate = () => origin.getDate();
    o.getDay = () => origin.getDay();
    o.getFullYear = () => origin.getFullYear();
    o.getHours = () => origin.getHours();
    o.getMilliseconds = () => origin.getMilliseconds();
    o.getMinutes = () => origin.getMinutes();
    o.getMonth = () => origin.getMonth();
    o.getSeconds = () => origin.getSeconds();
    o.getTimezoneOffset = () => origin.getTimezoneOffset();
    o.getTime = () => origin.getTime();
    o.getUTCDate = () => origin.getUTCDate();
    o.getUTCDay = () => origin.getUTCDay();
    o.getUTCFullYear = () => origin.getUTCFullYear();
    o.getUTCHours = () => origin.getUTCHours();
    o.getUTCMilliseconds = () => origin.getUTCMilliseconds();
    o.getUTCMinutes = () => origin.getUTCMinutes();
    o.getUTCMonth = () => origin.getUTCMonth();
    o.getUTCSeconds = () => origin.getUTCSeconds();
    o.valueOf = () => origin.valueOf();
    o.toDateString = () => origin.toDateString();
    o.toString = () => origin.toString();
    o.toJSON = key => origin.toJSON(key);
    o.toLocaleDateString = () => origin.toLocaleDateString();
    o.toLocaleString = () => origin.toLocaleString();
    o.toLocaleTimeString = () => origin.toLocaleTimeString();
    o.toISOString = () => origin.toISOString();
    o.toTimeString = () => origin.toTimeString();
    o.toUTCString = () => origin.toUTCString();
  }
  static freezeObject(o) {
    Object.freeze(o);
    const oIsFunction = typeof o === 'function';
    Object.getOwnPropertyNames(o).forEach(prop => {
      if ((oIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true) && o[prop] !== null && (typeof o[prop] === 'object' || typeof o[prop] === 'function') && !Object.isFrozen(o[prop])) {
        StateHelper.deepFreeze(o[prop]);
      }
    });
  }
  /**
   * The method returns the clone of the object. Useful to clone frozen object.
   *
   * @param o object to clone
   * @param cloneFunctions determines whether the functions must be also cloned, default value 'true'
   */
  static cloneObject(o, cloneFunctions = true) {
    const cyclicDependenciesMap = new Map();
    return StateHelper.cloneObjectIntern(cyclicDependenciesMap, o, undefined, cloneFunctions);
  }
  /**
   * The method returns the clone of the object. Useful to clone frozen object.
   *
   * @param cyclicDependenciesMap map to detect and resolve cyclic dependencies
   * @param o object to clone
   * @param parent owner object of the object to clone, it is used for the functions cloning
   * @param cloneFunctions determines whether the functions must be also cloned, default value 'true'
   */
  static cloneObjectIntern(cyclicDependenciesMap, o, parent, cloneFunctions) {
    let target;
    // @ts-ignore
    if (o === window) {
      return o;
    }
    if (o) {
      if (cyclicDependenciesMap.has(o)) {
        return cyclicDependenciesMap.get(o);
      }
      if (typeof o === 'object') {
        // clone Array
        if (Array.isArray(o)) {
          target = StateHelper.cloneArray(o, cyclicDependenciesMap, cloneFunctions);
          // clone Map
        } else if (o instanceof Map) {
          target = StateHelper.cloneMap(o, cyclicDependenciesMap, cloneFunctions);
          // clone Set
        } else if (o instanceof Set) {
          target = StateHelper.cloneSet(o, cyclicDependenciesMap, cloneFunctions);
          // clone Date
        } else if (StateHelper.isValidDate(o)) {
          target = new Date(o.getTime());
          cyclicDependenciesMap.set(o, target);
          // clone Object
        } else {
          target = StateHelper.cloneSimpleObject(o, cyclicDependenciesMap, cloneFunctions);
        }
        // clone function
      } else if (typeof o === 'function') {
        if (cloneFunctions) {
          target = StateHelper.cloneFunction(o, cyclicDependenciesMap, parent, cloneFunctions);
        }
      } else {
        target = o;
      }
    } else {
      target = o;
    }
    return target;
  }
  static cloneArray(o, cyclicDependenciesMap, cloneFunctions) {
    const target = o.slice();
    cyclicDependenciesMap.set(o, target);
    o.forEach((element, index) => {
      target[index] = StateHelper.cloneObjectIntern(cyclicDependenciesMap, element, undefined, cloneFunctions);
    });
    return target;
  }
  static cloneMap(o, cyclicDependenciesMap, cloneFunctions) {
    const target = new Map();
    cyclicDependenciesMap.set(o, target);
    for (const [key, value] of o.entries()) {
      const keyClone = StateHelper.cloneObjectIntern(cyclicDependenciesMap, key, undefined, cloneFunctions);
      const valueClone = StateHelper.cloneObjectIntern(cyclicDependenciesMap, value, undefined, cloneFunctions);
      target.set(keyClone, valueClone);
    }
    return target;
  }
  static cloneSet(o, cyclicDependenciesMap, cloneFunctions) {
    const target = new Set();
    cyclicDependenciesMap.set(o, target);
    for (const value of o) {
      const valueClone = StateHelper.cloneObjectIntern(cyclicDependenciesMap, value, undefined, cloneFunctions);
      target.add(valueClone);
    }
    return target;
  }
  static cloneSimpleObject(o, cyclicDependenciesMap, cloneFunctions) {
    const target = Object.assign({}, o);
    cyclicDependenciesMap.set(o, target);
    Object.getOwnPropertyNames(o).forEach(prop => {
      const functionType = typeof o[prop] === 'function';
      if (cloneFunctions && functionType || !functionType) {
        target[prop] = StateHelper.cloneObjectIntern(cyclicDependenciesMap, o[prop], target, cloneFunctions);
      } else {
        delete target[prop];
      }
    });
    return target;
  }
  static cloneFunction(o, cyclicDependenciesMap, parent, cloneFunctions) {
    const target = o.bind(parent || {});
    cyclicDependenciesMap.set(o, target);
    Object.getOwnPropertyNames(o).forEach(prop => {
      if (prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' && prop !== 'length' && prop !== 'name') {
        target[prop] = StateHelper.cloneObjectIntern(cyclicDependenciesMap, o[prop], target, cloneFunctions);
      }
    });
    return target;
  }
  static getEmptyObject() {
    return Object.create(null);
  }
  static combine(state, newValue) {
    return Object.assign(StateHelper.getEmptyObject(), state, newValue);
  }
  static isValidDate(date) {
    return date && date instanceof Date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date);
  }
}
StateHelper.immutableMapFunction = StateHelper.immutableFunction('Map');
StateHelper.immutableSetFunction = StateHelper.immutableFunction('Set');
StateHelper.immutableDateFunction = StateHelper.immutableFunction('Date');
class StorePlugin {
  constructor(storageName) {
    this.storageName = storageName;
    this.namespace = 'ngx-state-store';
    this.prepareWindowObject(storageName);
  }
  get state() {
    return window[this.namespace][this.storageName].state;
  }
  /**
   *
   * @param storeName e.g. 'store-demo'
   */
  prepareWindowObject(storeName) {
    if (!window[this.namespace]) {
      window[this.namespace] = StateHelper.getEmptyObject();
    }
    if (!window[this.namespace][storeName]) {
      window[this.namespace][storeName] = StateHelper.getEmptyObject();
    }
    if (!window[this.namespace][storeName].state) {
      window[this.namespace][storeName].state = StateHelper.getEmptyObject();
    }
  }
}
class StoreLogPlugin extends StorePlugin {
  constructor(storeName, log = false, limit = 0) {
    super(storeName);
    this.actionEnd = 'Action end:   ';
    this.stateLog = StateHelper.getEmptyObject();
    this.stateLog.executedStack = [];
    this.stateLog.limit = limit;
    this.stateLog.log = log;
    this.state.log = this.stateLog;
  }
  get loggingDisabled() {
    return !this.state.log.log;
  }
  static logAction(message, state) {
    console.log(message, state);
  }
  static restrict(arr, limit) {
    if (arr.length > limit) {
      arr.splice(0, 1);
    }
  }
  dispatchBefore() {}
  dispatchAfter(actionId, state, order) {
    if (this.loggingDisabled) {
      return;
    }
    const log = {
      actionId,
      state
    };
    this.stateLog.executedStack.push(log);
    StoreLogPlugin.restrict(this.stateLog.executedStack, this.stateLog.limit);
    const message = this.actionEnd + actionId;
    StoreLogPlugin.logAction(order + '. ' + message, state);
    StoreLogPlugin.logAction('', '');
  }
  newState() {}
}
const STATE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('STATE_CONFIG');
class StorePerformancePlugin extends StorePlugin {
  constructor(storeName, log = false, limit = 1000) {
    super(storeName);
    this.performanceLog = [];
    this.settings = {
      timekeeping: log,
      limit: limit < 1 ? 1 : limit,
      performanceLog: this.performanceLog
    };
    this.state.performance = this.settings;
  }
  get timekeeping() {
    return this.state.performance.timekeeping;
  }
  dispatchBefore(actionId, state, order) {
    if (!this.timekeeping) {
      return;
    }
    const index = order % this.settings.limit;
    if (this.performanceLog.length < index) {
      this.performanceLog.length = index;
    }
    this.performanceLog[index] = {
      id: actionId,
      order,
      time: performance.now()
    };
  }
  newState() {}
  dispatchAfter(actionId, state, order) {
    if (!this.timekeeping) {
      return;
    }
    const index = order % this.settings.limit;
    if (this.performanceLog[index]?.order === order) {
      this.performanceLog[index].time = performance.now() - this.performanceLog[index].time;
    }
  }
}
class Store {
  constructor(config) {
    this.config = config;
    this.actionCounter = 0;
    this.plugins = [];
    this.plugins.push(new StoreLogPlugin(this.config.storeName, this.config.log));
    this.plugins.push(new StorePerformancePlugin(this.config.storeName, this.config.timekeeping));
    this.currentState = config.initialState || {};
    this.stateStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.currentState);
  }
  static getErrorState(action, error) {
    const state = StateHelper.getEmptyObject();
    state.error = error;
    state.action = action.Type;
    return state;
  }
  dispatch(action) {
    const currentCounter = this.actionCounter++;
    this.dispatchBefore(action, this.currentState, currentCounter);
    let actionResult$;
    try {
      actionResult$ = action.handleState(this.getStateContext());
    } catch (error) {
      this.dispatchAfter(action, this.currentState, currentCounter);
      console.error(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
    }
    const result = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    // Otherwise it will run sync.
    // And the result observable is
    // complete before return statement.
    setTimeout(() => {
      if ((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.isObservable)(actionResult$)) {
        actionResult$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(() => {
          this.dispatchAfter(action, this.currentState, currentCounter);
          result.next(this.currentState);
          result.complete();
        }, error => {
          const errorState = Store.getErrorState(action, error);
          this.dispatchAfter(action, errorState, currentCounter);
          console.error(error);
          result.error(error);
        });
      } else {
        this.dispatchAfter(action, this.currentState, currentCounter);
        result.next(this.currentState);
        result.complete();
      }
    });
    return result.asObservable();
  }
  select(prop, objectComparator) {
    if (objectComparator) {
      return this.stateStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.pluck)(prop), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(objectComparator));
    }
    return this.stateStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.pluck)(prop), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)());
  }
  /**
   * The Observable is complete after forward one value.
   *
   * @param prop property to select
   */
  selectOnce(prop) {
    return this.select(prop).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1));
  }
  getStateContext() {
    return {
      getState: () => this.currentState,
      setState: state => {
        this.updateState(state);
      },
      patchState: partOfState => {
        const isArray = Array.isArray(partOfState);
        const isPrimitive = typeof partOfState !== 'object';
        if (isArray) {
          throw new Error('Patching arrays is not supported.');
        } else if (isPrimitive) {
          throw new Error('Patching primitives is not supported.');
        }
        const newState = StateHelper.combine(this.currentState, partOfState);
        this.updateState(newState);
      }
    };
  }
  updateState(state) {
    this.currentState = StateHelper.deepFreeze(state);
    this.dispatchState(this.currentState);
    // next-sync. Otherwise the state change will trigger all other changes.
    setTimeout(() => {
      this.stateStream.next(this.currentState);
    }, 0);
  }
  dispatchBefore(action, state, order) {
    this.plugins.forEach(plugin => {
      plugin.dispatchBefore(action.Type, state, order);
    });
  }
  dispatchAfter(action, state, order) {
    this.plugins.forEach(plugin => {
      plugin.dispatchAfter(action.Type, state, order);
    });
  }
  dispatchState(state) {
    this.plugins.forEach(plugin => {
      plugin.newState(state);
    });
  }
}
/** @nocollapse */
Store.ɵfac = function Store_Factory(t) {
  return new (t || Store)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](STATE_CONFIG));
};
/** @nocollapse */
Store.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Store,
  factory: Store.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Store, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [STATE_CONFIG]
      }]
    }];
  }, null);
})();
class Action {
  constructor(actionId) {
    this.actionId = actionId;
  }
  get Type() {
    return this.actionId;
  }
  clone(o, cloneFunctions = true) {
    return StateHelper.cloneObject(o, cloneFunctions);
  }
  getEmptyState() {
    return StateHelper.getEmptyObject();
  }
  getEmptyObject() {
    return StateHelper.getEmptyObject();
  }
  combine(state, newValue) {
    return StateHelper.combine(state, newValue);
  }
}
class NgxStateStoreModule {
  static forRoot(config) {
    return {
      ngModule: NgxStateStoreModule,
      providers: [Store, {
        provide: STATE_CONFIG,
        useValue: config
      }]
    };
  }
}
/** @nocollapse */
NgxStateStoreModule.ɵfac = function NgxStateStoreModule_Factory(t) {
  return new (t || NgxStateStoreModule)();
};
/** @nocollapse */
NgxStateStoreModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxStateStoreModule,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]
});
/** @nocollapse */
NgxStateStoreModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxStateStoreModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule],
      exports: []
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-state-store
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map