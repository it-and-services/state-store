(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+S5A":
    /*!************************************************************!*\
      !*** ./src/app/services/connectors/inventory.connector.ts ***!
      \************************************************************/

    /*! exports provided: InventoryConnector */

    /***/
    function S5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryConnector", function () {
        return InventoryConnector;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var InventoryConnector = /*#__PURE__*/function () {
        function InventoryConnector(http) {
          _classCallCheck(this, InventoryConnector);

          this.http = http;
        }

        _createClass(InventoryConnector, [{
          key: "loadInventory",
          value: function loadInventory() {
            var _this = this;

            // delay(2000) to imitate the network throttling
            return this.http.get('assets/mock-data/inventories.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (inventories) {
              inventories.splice(_this.getRandomInt(inventories.length), _this.getRandomInt(2));
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(inventories);
            }));
          }
        }, {
          key: "getRandomInt",
          value: function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
        }]);

        return InventoryConnector;
      }();

      InventoryConnector.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      InventoryConnector = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], InventoryConnector);
      /***/
    },

    /***/
    "//Wm":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/counter-button.component/counter-button.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: CounterButtonComponent */

    /***/
    function Wm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CounterButtonComponent", function () {
        return CounterButtonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_counter_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./counter-button.component.html */
      "fBK4");
      /* harmony import */


      var _counter_button_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./counter-button.component.scss */
      "QI/C");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/state-store/action-factory */
      "flpt");
      /* harmony import */


      var ngx_state_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-state-store */
      "Zvfn");

      var CounterButtonComponent = /*#__PURE__*/function () {
        function CounterButtonComponent(store, factory) {
          _classCallCheck(this, CounterButtonComponent);

          this.store = store;
          this.factory = factory;
        }

        _createClass(CounterButtonComponent, [{
          key: "incrementCounter",
          value: function incrementCounter() {
            this.store.dispatch(this.factory.incrementCounter());
          }
        }]);

        return CounterButtonComponent;
      }();

      CounterButtonComponent.ctorParameters = function () {
        return [{
          type: ngx_state_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }, {
          type: _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_4__["ActionFactory"]
        }];
      };

      CounterButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-counter-button',
        template: _raw_loader_counter_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_counter_button_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CounterButtonComponent);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Dev\projects\state-store\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1lFn":
    /*!*********************************************************************!*\
      !*** ./src/app/components/counter.component/counter.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function lFn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudGVyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "4FLy":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventories-button.component/inventories-button.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FLy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button (click)=\"loadInventory()\" class=\"btn-primary\">Load Inventory</button>\r\n<p>Last download at: {{lastDownloadAt}}</p>\r\n<p *ngIf=\"changes.addedEntries.length\">\r\n  {{changes.addedEntries.length}} new {{changes.addedEntries.length > 1 ? 'entries' : 'entry'}}:\r\n  {{inventoriesToString(changes.addedEntries)}}</p>\r\n<p *ngIf=\"changes.removedEntries.length\">\r\n  {{changes.removedEntries.length}} {{changes.removedEntries.length > 1 ? 'entries' : 'entry'}} removed:\r\n  {{inventoriesToString(changes.removedEntries)}}</p>\r\n";
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".row {\r\n  margin-top: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BlUe":
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/inventories-button.component/inventories-button.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: InventoriesButtonComponent */

    /***/
    function BlUe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoriesButtonComponent", function () {
        return InventoriesButtonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inventories_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inventories-button.component.html */
      "4FLy");
      /* harmony import */


      var _inventories_button_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inventories-button.component.scss */
      "iZzG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_state_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-state-store */
      "Zvfn");
      /* harmony import */


      var _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/state-store/action-factory */
      "flpt");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var InventoriesButtonComponent = /*#__PURE__*/function () {
        function InventoriesButtonComponent(store, factory) {
          _classCallCheck(this, InventoriesButtonComponent);

          this.store = store;
          this.factory = factory;
          this.changes = {
            addedEntries: [],
            removedEntries: []
          };
        }

        _createClass(InventoriesButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.store.select('Inventories', function (oldInventories, newInventories) {
              if (oldInventories === newInventories || oldInventories && newInventories && !_this2.calcDiff(oldInventories, newInventories).length && !_this2.calcDiff(newInventories, oldInventories).length) {
                return true;
              }

              _this2.changes.addedEntries = _this2.calcDiff(oldInventories, newInventories);
              _this2.changes.removedEntries = _this2.calcDiff(newInventories, oldInventories);
              return false;
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["skip"])(1)).subscribe(function () {
              console.log('the log is present only if there are some changes');
            });
          }
        }, {
          key: "calcDiff",
          value: function calcDiff(source, target) {
            return (target || []).filter(function (t) {
              return !(source || []).find(function (s) {
                return s.id === t.id;
              });
            });
          }
        }, {
          key: "loadInventory",
          value: function loadInventory() {
            var _this3 = this;

            this.changes.addedEntries = [];
            this.changes.removedEntries = [];
            this.store.dispatch(this.factory.showLoadIndicator(_services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_5__["LoadIndicator"].LOAD_INVENTORIES)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function () {
              return _this3.store.dispatch(_this3.factory.loadInventories());
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
              console.log(error);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(error);
            })).subscribe(function (state) {
              _this3.lastDownloadAt = state.LastDownloadAt;

              _this3.store.dispatch(_this3.factory.hideLoadIndicator(_services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_5__["LoadIndicator"].LOAD_INVENTORIES));
            });
          }
        }, {
          key: "inventoriesToString",
          value: function inventoriesToString(inventories) {
            return inventories.map(function (e) {
              return e.id;
            }).join(', ');
          }
        }]);

        return InventoriesButtonComponent;
      }();

      InventoriesButtonComponent.ctorParameters = function () {
        return [{
          type: ngx_state_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_5__["ActionFactory"]
        }];
      };

      InventoriesButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inventories-button',
        template: _raw_loader_inventories_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inventories_button_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InventoriesButtonComponent);
      /***/
    },

    /***/
    "JizG":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/inventories.component/inventories.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function JizG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".inventories {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 300px;\n  max-height: 300px;\n  overflow: hidden;\n}\n\n.load-indicator-background {\n  background-color: #cccccc;\n  opacity: 0.7;\n}\n\n.load-indicator, .load-indicator-background, .inventories-table-container {\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.inventories-table-container {\n  z-index: initial;\n  overflow-x: auto;\n  overflow-y: auto;\n}\n\n.load-indicator {\n  margin: auto;\n  background-color: white;\n  width: 7rem;\n  height: 3rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.load-indicator > div {\n  margin: 0;\n  padding: 0;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbnZlbnRvcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFDSiIsImZpbGUiOiJpbnZlbnRvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZlbnRvcmllcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubG9hZC1pbmRpY2F0b3ItYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICBvcGFjaXR5OiAuNztcclxufVxyXG5cclxuLmxvYWQtaW5kaWNhdG9yLCAubG9hZC1pbmRpY2F0b3ItYmFja2dyb3VuZCwgLmludmVudG9yaWVzLXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6ICsxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5pbnZlbnRvcmllcy10YWJsZS1jb250YWluZXIge1xyXG4gIHotaW5kZXg6IGluaXRpYWw7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubG9hZC1pbmRpY2F0b3Ige1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogN3JlbTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICA+IGRpdiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "KEIZ":
    /*!***********************************************************!*\
      !*** ./src/app/services/state-store/app-initial-state.ts ***!
      \***********************************************************/

    /*! exports provided: AppInitialState */

    /***/
    function KEIZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppInitialState", function () {
        return AppInitialState;
      });

      var AppInitialState = {
        ShowLoadingIndicator: [],
        Counter: 0,
        Inventories: null,
        LastDownloadAt: ''
      };
      /***/
    },

    /***/
    "Kdq/":
    /*!****************************************************!*\
      !*** ./src/app/services/state-store/action-ids.ts ***!
      \****************************************************/

    /*! exports provided: ActionIds */

    /***/
    function Kdq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionIds", function () {
        return ActionIds;
      });

      var ActionIds;

      (function (ActionIds) {
        ActionIds["HideLoadingIndicator"] = "[Load] Hide Loading Indicator";
        ActionIds["ShowLoadingIndicator"] = "[Load] Show Loading Indicator";
        ActionIds["UpdateCounter"] = "[Common] Update counter";
        ActionIds["LoadInventories"] = "[Load] Load inventories from back-end";
      })(ActionIds || (ActionIds = {}));
      /***/

    },

    /***/
    "Nzl3":
    /*!*******************************************************************************!*\
      !*** ./src/app/services/state-store/actions/show-loading-indicator.action.ts ***!
      \*******************************************************************************/

    /*! exports provided: ShowLoadingIndicatorAction */

    /***/
    function Nzl3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowLoadingIndicatorAction", function () {
        return ShowLoadingIndicatorAction;
      });
      /* harmony import */


      var ngx_state_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-state-store */
      "Zvfn");
      /* harmony import */


      var _action_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../action-ids */
      "Kdq/");
      /**
       * Shows loading indicator to blocks the page, so the user can not
       * use the ui.
       */


      var ShowLoadingIndicatorAction = /*#__PURE__*/function (_ngx_state_store__WEB) {
        _inherits(ShowLoadingIndicatorAction, _ngx_state_store__WEB);

        var _super = _createSuper(ShowLoadingIndicatorAction);

        function ShowLoadingIndicatorAction(identifier) {
          var _this4;

          _classCallCheck(this, ShowLoadingIndicatorAction);

          _this4 = _super.call(this, _action_ids__WEBPACK_IMPORTED_MODULE_1__["ActionIds"].ShowLoadingIndicator + ': ' + identifier);
          _this4.identifier = identifier;
          return _this4;
        }

        _createClass(ShowLoadingIndicatorAction, [{
          key: "handleState",
          value: function handleState(stateContext) {
            var newState = this.getEmptyState();
            newState.ShowLoadingIndicator = stateContext.getState().ShowLoadingIndicator.slice();
            newState.ShowLoadingIndicator.push(this.identifier);
            stateContext.patchState(newState);
          }
        }]);

        return ShowLoadingIndicatorAction;
      }(ngx_state_store__WEBPACK_IMPORTED_MODULE_0__["Action"]);
      /***/

    },

    /***/
    "QI/C":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/counter-button.component/counter-button.component.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function QIC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudGVyLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "UD5o":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/counter.component/counter.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UD5o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"alert alert-primary\" role=\"alert\">\r\n  current counter {{counter$ | async}}\r\n</div>\r\n";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h3>Usage example of the ngx-state-store module</h3>\r\n      The complete module documentation is available at <a\r\n      href=\"https://it-and-services.github.io/state-store/\"\r\n      target=\"_blank\">https://it-and-services.github.io/state-store/</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\"></div>\r\n  <div class=\"row\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <ul>\r\n        <li>src/app/components/counter-button.component/counter-button.component.ts</li>\r\n        <li>src/app/components/counter.component/counter.component.ts</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <app-counter-button></app-counter-button>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <app-counter></app-counter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\"></div>\r\n  <div class=\"row\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <ul>\r\n        <li>src/app/components/inventories-button.component/inventories-button.component.ts</li>\r\n        <li>src/app/components/inventories.component/inventories.component.ts</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <app-inventories-button></app-inventories-button>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <app-inventories></app-inventories>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _services_state_store_app_initial_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/state-store/app-initial-state */
      "KEIZ");
      /* harmony import */


      var _components_counter_button_component_counter_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/counter-button.component/counter-button.component */
      "//Wm");
      /* harmony import */


      var _components_counter_component_counter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/counter.component/counter.component */
      "ow1h");
      /* harmony import */


      var _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/state-store/action-factory */
      "flpt");
      /* harmony import */


      var _services_connectors_inventory_connector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/connectors/inventory.connector */
      "+S5A");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _components_inventories_button_component_inventories_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/inventories-button.component/inventories-button.component */
      "BlUe");
      /* harmony import */


      var _components_inventories_component_inventories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/inventories.component/inventories.component */
      "uwD1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ngx_state_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-state-store */
      "Zvfn");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_counter_button_component_counter_button_component__WEBPACK_IMPORTED_MODULE_6__["CounterButtonComponent"], _components_counter_component_counter_component__WEBPACK_IMPORTED_MODULE_7__["CounterComponent"], _components_inventories_button_component_inventories_button_component__WEBPACK_IMPORTED_MODULE_11__["InventoriesButtonComponent"], _components_inventories_component_inventories_component__WEBPACK_IMPORTED_MODULE_12__["InventoriesComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], ngx_state_store__WEBPACK_IMPORTED_MODULE_15__["NgxStateStoreModule"].forRoot({
          storeName: 'store-demo',
          log: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].state.log,
          timekeeping: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].state.timekeeping,
          initialState: _services_state_store_app_initial_state__WEBPACK_IMPORTED_MODULE_5__["AppInitialState"]
        })],
        providers: [_services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_8__["ActionFactory"], _services_connectors_inventory_connector__WEBPACK_IMPORTED_MODULE_9__["InventoryConnector"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "fBK4":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/counter-button.component/counter-button.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fBK4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button class=\"btn-primary\" (click)=\"incrementCounter()\">Increment Counter</button>\r\n";
      /***/
    },

    /***/
    "fWts":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventories.component/inventories.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fWts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"inventories\">\r\n  <div *ngIf=\"loading$ | async\" class=\"load-indicator-background\"></div>\r\n  <div *ngIf=\"loading$ | async\" class=\"load-indicator\">\r\n    <div>Loading ...</div>\r\n  </div>\r\n\r\n  <div class=\"inventories-table-container\">\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n      <tr>\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">ID</th>\r\n        <th scope=\"col\">Version</th>\r\n        <th scope=\"col\">Name</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let inventory of inventories; let i=index\">\r\n        <th scope=\"row\">{{i}}</th>\r\n        <td>{{inventory.id}}</td>\r\n        <td>{{inventory.version}}</td>\r\n        <td>{{inventory.name}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "flpt":
    /*!********************************************************!*\
      !*** ./src/app/services/state-store/action-factory.ts ***!
      \********************************************************/

    /*! exports provided: LoadIndicator, ActionFactory */

    /***/
    function flpt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadIndicator", function () {
        return LoadIndicator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionFactory", function () {
        return ActionFactory;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./actions */
      "vspk");
      /* harmony import */


      var _connectors_inventory_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../connectors/inventory.connector */
      "+S5A");

      var LoadIndicator;

      (function (LoadIndicator) {
        LoadIndicator["DEFAULT"] = "DEFAULT";
        LoadIndicator["LOAD_INVENTORIES"] = "LOAD_INVENTORIES";
      })(LoadIndicator || (LoadIndicator = {}));

      var ActionFactory = /*#__PURE__*/function () {
        function ActionFactory(inventoryConnector) {
          _classCallCheck(this, ActionFactory);

          this.inventoryConnector = inventoryConnector;
        }

        _createClass(ActionFactory, [{
          key: "incrementCounter",
          value: function incrementCounter() {
            return new _actions__WEBPACK_IMPORTED_MODULE_2__["IncrementCounterAction"]();
          }
        }, {
          key: "showLoadIndicator",
          value: function showLoadIndicator() {
            var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : LoadIndicator.DEFAULT;
            return new _actions__WEBPACK_IMPORTED_MODULE_2__["ShowLoadingIndicatorAction"](identifier);
          }
        }, {
          key: "hideLoadIndicator",
          value: function hideLoadIndicator() {
            var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : LoadIndicator.DEFAULT;
            return new _actions__WEBPACK_IMPORTED_MODULE_2__["HideLoadingIndicatorAction"](identifier);
          }
        }, {
          key: "loadInventories",
          value: function loadInventories() {
            return new _actions__WEBPACK_IMPORTED_MODULE_2__["LoadInventoriesAction"](this.inventoryConnector);
          }
        }]);

        return ActionFactory;
      }();

      ActionFactory.ctorParameters = function () {
        return [{
          type: _connectors_inventory_connector__WEBPACK_IMPORTED_MODULE_3__["InventoryConnector"]
        }];
      };

      ActionFactory = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ActionFactory);
      /***/
    },

    /***/
    "iZzG":
    /*!*******************************************************************************************!*\
      !*** ./src/app/components/inventories-button.component/inventories-button.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function iZzG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlbnRvcmllcy1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "n91a":
    /*!**************************************************************************!*\
      !*** ./src/app/services/state-store/actions/increment-counter.action.ts ***!
      \**************************************************************************/

    /*! exports provided: IncrementCounterAction */

    /***/
    function n91a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncrementCounterAction", function () {
        return IncrementCounterAction;
      });
      /* harmony import */


      var ngx_state_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-state-store */
      "Zvfn");
      /* harmony import */


      var _action_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../action-ids */
      "Kdq/");

      var IncrementCounterAction = /*#__PURE__*/function (_ngx_state_store__WEB2) {
        _inherits(IncrementCounterAction, _ngx_state_store__WEB2);

        var _super2 = _createSuper(IncrementCounterAction);

        function IncrementCounterAction() {
          _classCallCheck(this, IncrementCounterAction);

          return _super2.call(this, _action_ids__WEBPACK_IMPORTED_MODULE_1__["ActionIds"].UpdateCounter);
        }

        _createClass(IncrementCounterAction, [{
          key: "handleState",
          value: function handleState(stateContext) {
            var newValue = this.getEmptyState();
            newValue.Counter = stateContext.getState().Counter + 1;
            stateContext.patchState(newValue);
          }
        }]);

        return IncrementCounterAction;
      }(ngx_state_store__WEBPACK_IMPORTED_MODULE_0__["Action"]);
      /***/

    },

    /***/
    "ow1h":
    /*!*******************************************************************!*\
      !*** ./src/app/components/counter.component/counter.component.ts ***!
      \*******************************************************************/

    /*! exports provided: CounterComponent */

    /***/
    function ow1h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CounterComponent", function () {
        return CounterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_counter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./counter.component.html */
      "UD5o");
      /* harmony import */


      var _counter_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./counter.component.scss */
      "1lFn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_state_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-state-store */
      "Zvfn");

      var CounterComponent = /*#__PURE__*/function () {
        function CounterComponent(store) {
          _classCallCheck(this, CounterComponent);

          this.store = store;
        }

        _createClass(CounterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.counter$ = this.store.select('Counter');
          }
        }]);

        return CounterComponent;
      }();

      CounterComponent.ctorParameters = function () {
        return [{
          type: ngx_state_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      };

      CounterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-counter',
        template: _raw_loader_counter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_counter_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CounterComponent);
      /***/
    },

    /***/
    "qnpm":
    /*!*******************************************************************************!*\
      !*** ./src/app/services/state-store/actions/hide-loading-indicator.action.ts ***!
      \*******************************************************************************/

    /*! exports provided: HideLoadingIndicatorAction */

    /***/
    function qnpm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HideLoadingIndicatorAction", function () {
        return HideLoadingIndicatorAction;
      });
      /* harmony import */


      var _action_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../action-ids */
      "Kdq/");
      /* harmony import */


      var ngx_state_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-state-store */
      "Zvfn");
      /**
       * Hide loading indicator which block the page.
       */


      var HideLoadingIndicatorAction = /*#__PURE__*/function (_ngx_state_store__WEB3) {
        _inherits(HideLoadingIndicatorAction, _ngx_state_store__WEB3);

        var _super3 = _createSuper(HideLoadingIndicatorAction);

        function HideLoadingIndicatorAction(identifier) {
          var _this5;

          _classCallCheck(this, HideLoadingIndicatorAction);

          _this5 = _super3.call(this, _action_ids__WEBPACK_IMPORTED_MODULE_0__["ActionIds"].HideLoadingIndicator + ': ' + identifier);
          _this5.identifier = identifier;
          return _this5;
        }

        _createClass(HideLoadingIndicatorAction, [{
          key: "handleState",
          value: function handleState(stateContext) {
            if (stateContext.getState().ShowLoadingIndicator == null) {
              return;
            }

            var index = stateContext.getState().ShowLoadingIndicator.indexOf(this.identifier);

            if (index < 0) {
              return;
            }

            var newState = this.getEmptyState();
            newState.ShowLoadingIndicator = stateContext.getState().ShowLoadingIndicator.slice();
            newState.ShowLoadingIndicator.splice(index, 1);
            stateContext.patchState(newState);
          }
        }]);

        return HideLoadingIndicatorAction;
      }(ngx_state_store__WEBPACK_IMPORTED_MODULE_1__["Action"]);
      /***/

    },

    /***/
    "rz38":
    /*!*************************************************************************!*\
      !*** ./src/app/services/state-store/actions/load-inventories.action.ts ***!
      \*************************************************************************/

    /*! exports provided: LoadInventoriesAction */

    /***/
    function rz38(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadInventoriesAction", function () {
        return LoadInventoriesAction;
      });
      /* harmony import */


      var ngx_state_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-state-store */
      "Zvfn");
      /* harmony import */


      var _action_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../action-ids */
      "Kdq/");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var LoadInventoriesAction = /*#__PURE__*/function (_ngx_state_store__WEB4) {
        _inherits(LoadInventoriesAction, _ngx_state_store__WEB4);

        var _super4 = _createSuper(LoadInventoriesAction);

        function LoadInventoriesAction(inventoryConnector) {
          var _this6;

          _classCallCheck(this, LoadInventoriesAction);

          _this6 = _super4.call(this, _action_ids__WEBPACK_IMPORTED_MODULE_1__["ActionIds"].LoadInventories);
          _this6.inventoryConnector = inventoryConnector;
          return _this6;
        }

        _createClass(LoadInventoriesAction, [{
          key: "handleState",
          value: function handleState(stateContext) {
            var _this7 = this;

            return this.inventoryConnector.loadInventory().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (inventories) {
              var newState = _this7.getEmptyState();

              newState.Inventories = inventories;
              newState.LastDownloadAt = new Date().toISOString();
              stateContext.patchState(newState);
            }));
          }
        }]);

        return LoadInventoriesAction;
      }(ngx_state_store__WEBPACK_IMPORTED_MODULE_0__["Action"]);
      /***/

    },

    /***/
    "uwD1":
    /*!***************************************************************************!*\
      !*** ./src/app/components/inventories.component/inventories.component.ts ***!
      \***************************************************************************/

    /*! exports provided: InventoriesComponent */

    /***/
    function uwD1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoriesComponent", function () {
        return InventoriesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inventories_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inventories.component.html */
      "fWts");
      /* harmony import */


      var _inventories_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inventories.component.scss */
      "JizG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_state_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-state-store */
      "Zvfn");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/state-store/action-factory */
      "flpt");

      var InventoriesComponent = /*#__PURE__*/function () {
        function InventoriesComponent(store) {
          _classCallCheck(this, InventoriesComponent);

          this.store = store;
        }

        _createClass(InventoriesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.loading$ = this.store.select('ShowLoadingIndicator').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (indicators) {
              return indicators.filter(function (i) {
                return i === _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_6__["LoadIndicator"].LOAD_INVENTORIES;
              }).length > 0;
            }));
            this.store.select('Inventories').subscribe(function (inventories) {
              _this8.inventories = inventories;
            });
          }
        }]);

        return InventoriesComponent;
      }();

      InventoriesComponent.ctorParameters = function () {
        return [{
          type: ngx_state_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      };

      InventoriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inventories',
        template: _raw_loader_inventories_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inventories_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InventoriesComponent);
      /***/
    },

    /***/
    "vspk":
    /*!*******************************************************!*\
      !*** ./src/app/services/state-store/actions/index.ts ***!
      \*******************************************************/

    /*! exports provided: HideLoadingIndicatorAction, IncrementCounterAction, LoadInventoriesAction, ShowLoadingIndicatorAction */

    /***/
    function vspk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _hide_loading_indicator_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./hide-loading-indicator.action */
      "qnpm");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HideLoadingIndicatorAction", function () {
        return _hide_loading_indicator_action__WEBPACK_IMPORTED_MODULE_0__["HideLoadingIndicatorAction"];
      });
      /* harmony import */


      var _increment_counter_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./increment-counter.action */
      "n91a");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IncrementCounterAction", function () {
        return _increment_counter_action__WEBPACK_IMPORTED_MODULE_1__["IncrementCounterAction"];
      });
      /* harmony import */


      var _load_inventories_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./load-inventories.action */
      "rz38");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoadInventoriesAction", function () {
        return _load_inventories_action__WEBPACK_IMPORTED_MODULE_2__["LoadInventoriesAction"];
      });
      /* harmony import */


      var _show_loading_indicator_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./show-loading-indicator.action */
      "Nzl3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ShowLoadingIndicatorAction", function () {
        return _show_loading_indicator_action__WEBPACK_IMPORTED_MODULE_3__["ShowLoadingIndicatorAction"];
      });
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map