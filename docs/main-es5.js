(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
      "Xmul");

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


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRlci5jb21wb25lbnQvY291bnRlci5jb21wb25lbnQuc2NzcyJ9 */";
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


      __webpack_exports__["default"] = ".row {\r\n  margin-top: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuIl19 */";
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
      "Xmul");
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
            }).toString();
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


      __webpack_exports__["default"] = ".inventories {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 300px;\n  max-height: 300px;\n  overflow: hidden;\n}\n\n.load-indicator-background {\n  background-color: #cccccc;\n  opacity: .7;\n}\n\n.load-indicator, .load-indicator-background, .inventories-table-container {\n  height: 100%;\n  width: 100%;\n  z-index: +1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.inventories-table-container {\n  z-index: initial;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.load-indicator {\n  margin: auto;\n  background-color: white;\n  width: 7rem;\n  height: 3rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.load-indicator > div {\n  margin: 0;\n  padding: 0;\n  vertical-align: middle;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcmllcy5jb21wb25lbnQvaW52ZW50b3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBUkE7RUFVSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUUxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50b3JpZXMuY29tcG9uZW50L2ludmVudG9yaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludmVudG9yaWVzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5sb2FkLWluZGljYXRvci1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4gIG9wYWNpdHk6IC43O1xyXG59XHJcblxyXG4ubG9hZC1pbmRpY2F0b3IsIC5sb2FkLWluZGljYXRvci1iYWNrZ3JvdW5kLCAuaW52ZW50b3JpZXMtdGFibGUtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogKzE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLmludmVudG9yaWVzLXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgei1pbmRleDogaW5pdGlhbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmxvYWQtaW5kaWNhdG9yIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDdyZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgPiBkaXYge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */";
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
      "Xmul");
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


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRlci1idXR0b24uY29tcG9uZW50L2NvdW50ZXItYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */";
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


      __webpack_exports__["default"] = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h3>Usage example of the ngx-state-store module</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\"></div>\r\n  <div class=\"row\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <ul>\r\n        <li>src/app/components/counter-button.component/counter-button.component.ts</li>\r\n        <li>src/app/components/counter.component/counter.component.ts</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <app-counter-button></app-counter-button>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <app-counter></app-counter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\"></div>\r\n  <div class=\"row\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <ul>\r\n        <li>src/app/components/inventories-button.component/inventories-button.component.ts</li>\r\n        <li>src/app/components/inventories.component/inventories.component.ts</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <app-inventories-button></app-inventories-button>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <app-inventories></app-inventories>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "Xmul":
    /*!***********************************************************************!*\
      !*** ./dist/ngx-state-store/__ivy_ngcc__/fesm2015/ngx-state-store.js ***!
      \***********************************************************************/

    /*! exports provided: Action, NgxStateStoreModule, StateHelper, Store, ɵa */

    /***/
    function Xmul(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Action", function () {
        return Action;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxStateStoreModule", function () {
        return NgxStateStoreModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateHelper", function () {
        return StateHelper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Store", function () {
        return Store;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return STATE_CONFIG;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/state/state-helper.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var StateHelper = /*#__PURE__*/function () {
        function StateHelper() {
          _classCallCheck(this, StateHelper);
        }

        _createClass(StateHelper, null, [{
          key: "deepFreeze",

          /**
           * Makes a shadow freeze
           *
           * @template T
           * @param {?} o object to freeze
           * @return {?}
           */
          value: function deepFreeze(o) {
            Object.freeze(o);
            /** @type {?} */

            var oIsFunction = typeof o === 'function';
            /** @type {?} */

            var hasOwnProp = Object.prototype.hasOwnProperty;
            Object.getOwnPropertyNames(o).forEach(
            /**
            * @param {?} prop
            * @return {?}
            */
            function (prop) {
              if (hasOwnProp.call(o, prop) && (oIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true) && o[prop] !== null && (typeof o[prop] === 'object' || typeof o[prop] === 'function') && !Object.isFrozen(o[prop])) {
                StateHelper.deepFreeze(o[prop]);
              }
            });
            return o;
          }
          /**
           * The method returns the clone of the object. Useful to clone frozen object.
           *
           * @template T
           * @param {?} o object to clone
           * @param {?=} cloneFunctions determines whether the functions must be also cloned, default value 'true'
           * @return {?}
           */

        }, {
          key: "cloneObject",
          value: function cloneObject(o) {
            var cloneFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return StateHelper.cloneObjectIntern(o, undefined, cloneFunctions);
          }
          /**
           * The method returns the clone of the object. Useful to clone frozen object.
           *
           * @private
           * @template T
           * @param {?} o object to clone
           * @param {?=} parent owner object of the object to clone, it is used for the functions cloning
           * @param {?=} cloneFunctions determines whether the functions must be also cloned, default value 'true'
           * @return {?}
           */

        }, {
          key: "cloneObjectIntern",
          value: function cloneObjectIntern(o, parent, cloneFunctions) {
            /** @type {?} */
            var target;

            if (o) {
              if (typeof o === 'object') {
                if (Array.isArray(o)) {
                  target =
                  /** @type {?} */
                  o.slice();

                  /** @type {?} */
                  o.forEach(
                  /**
                  * @param {?} element
                  * @param {?} index
                  * @return {?}
                  */
                  function (element, index) {
                    /** @type {?} */
                    target[index] = StateHelper.cloneObjectIntern(element, o, cloneFunctions);
                  });
                } else if (StateHelper.isValidDate(o)) {
                  target = new Date(
                  /** @type {?} */

                  /** @type {?} */
                  o.toISOString());
                } else {
                  target = Object.assign({}, o);
                  Object.getOwnPropertyNames(o).forEach(
                  /**
                  * @param {?} prop
                  * @return {?}
                  */
                  function (prop) {
                    /** @type {?} */
                    var functionType = typeof o[prop] === 'function';

                    if (cloneFunctions && functionType || !functionType) {
                      target[prop] = StateHelper.cloneObjectIntern(target[prop], target, cloneFunctions);
                    } else {
                      delete target[prop];
                    }
                  });
                }
              } else if (typeof o === 'function') {
                if (cloneFunctions) {
                  target = o.bind(parent || {});
                  Object.getOwnPropertyNames(o).forEach(
                  /**
                  * @param {?} prop
                  * @return {?}
                  */
                  function (prop) {
                    if (prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' && prop !== 'length' && prop !== 'name') {
                      target[prop] = StateHelper.cloneObjectIntern(target[prop], target, cloneFunctions);
                    }
                  });
                }
              } else {
                target = o;
              }
            } else {
              target = o;
            }

            return target;
          }
          /**
           * @return {?}
           */

        }, {
          key: "getEmptyObject",
          value: function getEmptyObject() {
            return Object.create(null);
          }
          /**
           * @template S
           * @param {?} state
           * @param {?} newValue
           * @return {?}
           */

        }, {
          key: "combine",
          value: function combine(state, newValue) {
            return Object.assign(StateHelper.getEmptyObject(), state, newValue);
          }
          /**
           * @private
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "isValidDate",
          value: function isValidDate(date) {
            return date && date instanceof Date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(
            /** @type {?} */
            date);
          }
        }]);

        return StateHelper;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/state/store-plugin.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @abstract
       */


      var StorePlugin = /*#__PURE__*/function () {
        /**
         * @protected
         * @param {?} storageName
         */
        function StorePlugin(storageName) {
          _classCallCheck(this, StorePlugin);

          this.storageName = storageName;
          this.namespace = 'ngx-state-store';
          this.prepareWindowObject(storageName);
        }
        /**
         * @return {?}
         */


        _createClass(StorePlugin, [{
          key: "prepareWindowObject",

          /**
           *
           * @private
           * @param {?} storeName e.g. 'store-demo'
           * @return {?}
           */
          value: function prepareWindowObject(storeName) {
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
        }, {
          key: "state",
          get: function get() {
            return window[this.namespace][this.storageName].state;
          }
        }]);

        return StorePlugin;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/state/store-log-plugin.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function ActionToState() {}

      if (false) {}
      /**
       * @record
       */


      function LogSettings() {}

      if (false) {}

      var StoreLogPlugin = /*#__PURE__*/function (_StorePlugin) {
        _inherits(StoreLogPlugin, _StorePlugin);

        var _super2 = _createSuper(StoreLogPlugin);

        /**
         * @param {?} storeName
         * @param {?=} log
         * @param {?=} limit
         */
        function StoreLogPlugin(storeName) {
          var _this5;

          var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          _classCallCheck(this, StoreLogPlugin);

          _this5 = _super2.call(this, storeName);
          _this5.actionEnd = 'Action end:   ';
          _this5.stateLog = StateHelper.getEmptyObject();
          _this5.stateLog.executedStack = [];
          _this5.stateLog.limit = limit;
          _this5.stateLog.log = log;
          _this5.state.log = _this5.stateLog;
          return _this5;
        }
        /**
         * @private
         * @return {?}
         */


        _createClass(StoreLogPlugin, [{
          key: "dispatchBefore",

          /**
           * @return {?}
           */
          value: function dispatchBefore() {}
          /**
           * @param {?} actionId
           * @param {?} state
           * @param {?} order
           * @return {?}
           */

        }, {
          key: "dispatchAfter",
          value: function dispatchAfter(actionId, state, order) {
            if (this.loggingDisabled) {
              return;
            }
            /** @type {?} */


            var log = {
              actionId: actionId,
              state: state
            };
            this.stateLog.executedStack.push(log);
            StoreLogPlugin.restrict(this.stateLog.executedStack, this.stateLog.limit);
            /** @type {?} */

            var message = this.actionEnd + actionId;
            StoreLogPlugin.logAction(order + '. ' + message, state);
            StoreLogPlugin.logAction('', '');
          }
          /**
           * @return {?}
           */

        }, {
          key: "newState",
          value: function newState() {}
        }, {
          key: "loggingDisabled",
          get: function get() {
            return !this.state.log.log;
          }
          /**
           * @private
           * @param {?} message
           * @param {?=} state
           * @return {?}
           */

        }], [{
          key: "logAction",
          value: function logAction(message, state) {
            console.log(message, state);
          }
          /**
           * @private
           * @param {?} arr
           * @param {?} limit
           * @return {?}
           */

        }, {
          key: "restrict",
          value: function restrict(arr, limit) {
            if (arr.length > limit) {
              arr.splice(0, 1);
            }
          }
        }]);

        return StoreLogPlugin;
      }(StorePlugin);

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/state/state-config.token.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var STATE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('STATE_CONFIG');
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/state/store-performance-plugin.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Measure time of action execution.
       * @record
       */

      function PerformanceSettings() {}

      if (false) {}
      /**
       * @record
       */


      function ActionTime() {}

      if (false) {}

      var StorePerformancePlugin = /*#__PURE__*/function (_StorePlugin2) {
        _inherits(StorePerformancePlugin, _StorePlugin2);

        var _super3 = _createSuper(StorePerformancePlugin);

        /**
         * @param {?} storeName
         * @param {?=} log
         */
        function StorePerformancePlugin(storeName) {
          var _this6;

          var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          _classCallCheck(this, StorePerformancePlugin);

          _this6 = _super3.call(this, storeName);
          _this6.performanceLog = [];
          _this6.settings = {
            timekeeping: log,
            performanceLog: _this6.performanceLog
          };
          _this6.state.performance = _this6.settings;
          return _this6;
        }
        /**
         * @private
         * @return {?}
         */


        _createClass(StorePerformancePlugin, [{
          key: "dispatchBefore",

          /**
           * @param {?} actionId
           * @param {?} state
           * @param {?} order
           * @return {?}
           */
          value: function dispatchBefore(actionId, state, order) {
            if (!this.timekeeping) {
              return;
            }

            this.performanceLog[order] = {
              id: actionId,
              time: performance.now()
            };
          }
          /**
           * @return {?}
           */

        }, {
          key: "newState",
          value: function newState() {}
          /**
           * @param {?} actionId
           * @param {?} state
           * @param {?} order
           * @return {?}
           */

        }, {
          key: "dispatchAfter",
          value: function dispatchAfter(actionId, state, order) {
            if (!this.timekeeping) {
              return;
            }

            this.performanceLog[order].time = performance.now() - this.performanceLog[order].time;
          }
        }, {
          key: "timekeeping",
          get: function get() {
            return this.state.performance.timekeeping;
          }
        }]);

        return StorePerformancePlugin;
      }(StorePlugin);

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/state/store.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template S
       */


      var Store = /*#__PURE__*/function () {
        /**
         * @param {?} config
         */
        function Store(config) {
          _classCallCheck(this, Store);

          this.config = config;
          this.actionCounter = 0;
          this.plugins = [];
          this.plugins.push(new StoreLogPlugin(this.config.storeName, this.config.log));
          this.plugins.push(new StorePerformancePlugin(this.config.storeName, this.config.timekeeping));
          this.currentState = config.initialState || {};
          this.stateStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.currentState);
        }
        /**
         * @private
         * @param {?} action
         * @param {?} error
         * @return {?}
         */


        _createClass(Store, [{
          key: "dispatch",

          /**
           * @param {?} action
           * @return {?}
           */
          value: function dispatch(action) {
            var _this7 = this;

            /** @type {?} */
            var currentCounter = ++this.actionCounter;
            this.dispatchBefore(action, this.currentState, currentCounter);
            /** @type {?} */

            var actionResult$;

            try {
              actionResult$ = action.handleState(this.getStateContext());
            } catch (error) {
              this.dispatchAfter(action, this.currentState, currentCounter);
              console.error(error);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }
            /** @type {?} */


            var result = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // Otherwise it will run sync.
            // And the result observable is
            // complete before return statement.

            setTimeout(
            /**
            * @return {?}
            */
            function () {
              if (actionResult$ == null) {
                _this7.dispatchAfter(action, _this7.currentState, currentCounter);

                result.next(_this7.currentState);
                result.complete();
              } else {
                /** @type {?} */
                actionResult$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(
                /**
                * @return {?}
                */
                function () {
                  _this7.dispatchAfter(action, _this7.currentState, currentCounter);

                  result.next(_this7.currentState);
                  result.complete();
                },
                /**
                * @param {?} error
                * @return {?}
                */
                function (error) {
                  /** @type {?} */
                  var errorState = Store.getErrorState(action, error);

                  _this7.dispatchAfter(action, errorState, currentCounter);

                  console.error(error);
                  result.error(error);
                });
              }
            });
            return result.asObservable();
          }
          /**
           * @template keyString
           * @param {?} prop
           * @param {?=} objectComparator
           * @return {?}
           */

        }, {
          key: "select",
          value: function select(prop, objectComparator) {
            if (objectComparator) {
              return this.stateStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])(
              /** @type {?} */
              prop), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(objectComparator));
            }

            return this.stateStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])(
            /** @type {?} */
            prop), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
          }
          /**
           * The Observable is complete after forward one value.
           *
           * @template keyString
           * @param {?} prop property to select
           * @return {?}
           */

        }, {
          key: "selectOnce",
          value: function selectOnce(prop) {
            return this.select(prop).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getStateContext",
          value: function getStateContext() {
            var _this8 = this;

            return {
              getState:
              /**
              * @return {?}
              */
              function getState() {
                return _this8.currentState;
              },
              setState:
              /**
              * @param {?} state
              * @return {?}
              */
              function setState(state) {
                _this8.updateState(state);
              },
              patchState:
              /**
              * @param {?} partOfState
              * @return {?}
              */
              function patchState(partOfState) {
                /** @type {?} */
                var isArray = Array.isArray(partOfState);
                /** @type {?} */

                var isPrimitive = typeof partOfState !== 'object';

                if (isArray) {
                  throw new Error('Patching arrays is not supported.');
                } else if (isPrimitive) {
                  throw new Error('Patching primitives is not supported.');
                }
                /** @type {?} */


                var newState = StateHelper.combine(_this8.currentState, partOfState);

                _this8.updateState(newState);
              }
            };
          }
          /**
           * @private
           * @param {?} state
           * @return {?}
           */

        }, {
          key: "updateState",
          value: function updateState(state) {
            var _this9 = this;

            this.currentState = StateHelper.deepFreeze(state);
            this.dispatchState(this.currentState); // next-sync. Otherwise the state change will trigger all other changes.

            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this9.stateStream.next(_this9.currentState);
            }, 0);
          }
          /**
           * @private
           * @param {?} action
           * @param {?} state
           * @param {?} order
           * @return {?}
           */

        }, {
          key: "dispatchBefore",
          value: function dispatchBefore(action, state, order) {
            this.plugins.forEach(
            /**
            * @param {?} plugin
            * @return {?}
            */
            function (plugin) {
              plugin.dispatchBefore(action.Type, state, order);
            });
          }
          /**
           * @private
           * @param {?} action
           * @param {?} state
           * @param {?} order
           * @return {?}
           */

        }, {
          key: "dispatchAfter",
          value: function dispatchAfter(action, state, order) {
            this.plugins.forEach(
            /**
            * @param {?} plugin
            * @return {?}
            */
            function (plugin) {
              plugin.dispatchAfter(action.Type, state, order);
            });
          }
          /**
           * @private
           * @param {?} state
           * @return {?}
           */

        }, {
          key: "dispatchState",
          value: function dispatchState(state) {
            this.plugins.forEach(
            /**
            * @param {?} plugin
            * @return {?}
            */
            function (plugin) {
              plugin.newState(state);
            });
          }
        }], [{
          key: "getErrorState",
          value: function getErrorState(action, error) {
            /** @type {?} */
            var state = StateHelper.getEmptyObject();
            state.error = error;
            state.action = action.Type;
            return state;
          }
        }]);

        return Store;
      }();

      Store.ɵfac = function Store_Factory(t) {
        return new (t || Store)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](STATE_CONFIG));
      };

      Store.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: Store,
        factory: Store.ɵfac
      });
      /** @nocollapse */

      Store.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [STATE_CONFIG]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Store, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [STATE_CONFIG]
            }]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/state/action.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @abstract
       */


      var Action = /*#__PURE__*/function () {
        /**
         * @protected
         * @param {?} actionId
         */
        function Action(actionId) {
          _classCallCheck(this, Action);

          this.actionId = actionId;
        }
        /**
         * @return {?}
         */


        _createClass(Action, [{
          key: "clone",

          /**
           * @protected
           * @template T
           * @param {?} o
           * @param {?=} cloneFunctions
           * @return {?}
           */
          value: function clone(o) {
            var cloneFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return StateHelper.cloneObject(o, cloneFunctions);
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "getEmptyState",
          value: function getEmptyState() {
            return StateHelper.getEmptyObject();
          }
          /**
           * @protected
           * @template T
           * @return {?}
           */

        }, {
          key: "getEmptyObject",
          value: function getEmptyObject() {
            return StateHelper.getEmptyObject();
          }
          /**
           * @protected
           * @template S
           * @param {?} state
           * @param {?} newValue
           * @return {?}
           */

        }, {
          key: "combine",
          value: function combine(state, newValue) {
            return StateHelper.combine(state, newValue);
          }
        }, {
          key: "Type",
          get: function get() {
            return this.actionId;
          }
        }]);

        return Action;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/ngx-state-store.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgxStateStoreModule = /*#__PURE__*/function () {
        function NgxStateStoreModule() {
          _classCallCheck(this, NgxStateStoreModule);
        }

        _createClass(NgxStateStoreModule, null, [{
          key: "forRoot",

          /**
           * @param {?} config
           * @return {?}
           */
          value: function forRoot(config) {
            return {
              ngModule: NgxStateStoreModule,
              providers: [Store, {
                provide: STATE_CONFIG,
                useValue: config
              }]
            };
          }
        }]);

        return NgxStateStoreModule;
      }();

      NgxStateStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgxStateStoreModule
      });
      NgxStateStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgxStateStoreModule_Factory(t) {
          return new (t || NgxStateStoreModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxStateStoreModule, {
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxStateStoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            exports: []
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: ngx-state-store.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-state-store.js.map

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
      "Xmul");

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


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50b3JpZXMtYnV0dG9uLmNvbXBvbmVudC9pbnZlbnRvcmllcy1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */";
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
      "Xmul");
      /* harmony import */


      var _action_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../action-ids */
      "Kdq/");

      var IncrementCounterAction = /*#__PURE__*/function (_ngx_state_store__WEB2) {
        _inherits(IncrementCounterAction, _ngx_state_store__WEB2);

        var _super4 = _createSuper(IncrementCounterAction);

        function IncrementCounterAction() {
          _classCallCheck(this, IncrementCounterAction);

          return _super4.call(this, _action_ids__WEBPACK_IMPORTED_MODULE_1__["ActionIds"].UpdateCounter);
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
      "Xmul");

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
      "Xmul");
      /**
       * Hide loading indicator which block the page.
       */


      var HideLoadingIndicatorAction = /*#__PURE__*/function (_ngx_state_store__WEB3) {
        _inherits(HideLoadingIndicatorAction, _ngx_state_store__WEB3);

        var _super5 = _createSuper(HideLoadingIndicatorAction);

        function HideLoadingIndicatorAction(identifier) {
          var _this10;

          _classCallCheck(this, HideLoadingIndicatorAction);

          _this10 = _super5.call(this, _action_ids__WEBPACK_IMPORTED_MODULE_0__["ActionIds"].HideLoadingIndicator + ': ' + identifier);
          _this10.identifier = identifier;
          return _this10;
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
      "Xmul");
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

        var _super6 = _createSuper(LoadInventoriesAction);

        function LoadInventoriesAction(inventoryConnector) {
          var _this11;

          _classCallCheck(this, LoadInventoriesAction);

          _this11 = _super6.call(this, _action_ids__WEBPACK_IMPORTED_MODULE_1__["ActionIds"].LoadInventories);
          _this11.inventoryConnector = inventoryConnector;
          return _this11;
        }

        _createClass(LoadInventoriesAction, [{
          key: "handleState",
          value: function handleState(stateContext) {
            var _this12 = this;

            return this.inventoryConnector.loadInventory().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (inventories) {
              var newState = _this12.getEmptyState();

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
      "Xmul");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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
            var _this13 = this;

            this.loading$ = this.store.select('ShowLoadingIndicator').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (indicators) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(indicators.filter(function (i) {
                return i === _services_state_store_action_factory__WEBPACK_IMPORTED_MODULE_7__["LoadIndicator"].LOAD_INVENTORIES;
              }).length > 0);
            }));
            this.store.select('Inventories').subscribe(function (inventories) {
              _this13.inventories = inventories;
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