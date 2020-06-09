function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _equation_panel_equation_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./equation-panel/equation-panel.component */
    "./src/app/equation-panel/equation-panel.component.ts");
    /* harmony import */


    var _graph_view_graph_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./graph-view/graph-view.component */
    "./src/app/graph-view/graph-view.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-equation-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-graph-view");
        }
      },
      directives: [_equation_panel_equation_panel_component__WEBPACK_IMPORTED_MODULE_1__["EquationPanelComponent"], _graph_view_graph_view_component__WEBPACK_IMPORTED_MODULE_2__["GraphViewComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: -webkit-fill-available;\n  height: -moz-available;\n  height: stretch;\n}\n/*# sourceMappingURL=src/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnN0eWwiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVE7RUFDUiw4QkFBTztFQUFQLHNCQUFPO0VBQVAsZUFBTztBQ0NUO0FBQ0Esb0RBQW9EIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3RcbiAgZGlzcGxheSBmbGV4XG4gIGhlaWdodCBzdHJldGNoXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogc3RyZXRjaDtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MubWFwICovIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.styl']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _equation_panel_equation_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./equation-panel/equation-panel.component */
    "./src/app/equation-panel/equation-panel.component.ts");
    /* harmony import */


    var _graph_view_graph_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./graph-view/graph-view.component */
    "./src/app/graph-view/graph-view.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _equation_panel_equation_panel_component__WEBPACK_IMPORTED_MODULE_4__["EquationPanelComponent"], _graph_view_graph_view_component__WEBPACK_IMPORTED_MODULE_5__["GraphViewComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _equation_panel_equation_panel_component__WEBPACK_IMPORTED_MODULE_4__["EquationPanelComponent"], _graph_view_graph_view_component__WEBPACK_IMPORTED_MODULE_5__["GraphViewComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/equation-ast.ts":
  /*!*********************************!*\
    !*** ./src/app/equation-ast.ts ***!
    \*********************************/

  /*! exports provided: EquationAst */

  /***/
  function srcAppEquationAstTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquationAst", function () {
      return EquationAst;
    });
    /* harmony import */


    var parjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! parjs */
    "./node_modules/parjs/index.js");
    /* harmony import */


    var parjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var parjs_combinators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! parjs/combinators */
    "./node_modules/parjs/combinators.js");
    /* harmony import */


    var parjs_combinators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parjs_combinators__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _parser_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./parser.utils */
    "./src/app/parser.utils.ts");

    var EquationAst = /*#__PURE__*/function () {
      function EquationAst(rootNode) {
        _classCallCheck(this, EquationAst);

        this.rootNode = rootNode;
      }

      _createClass(EquationAst, null, [{
        key: "parse",
        value: function parse(str) {
          var res = pEquation.parse(str);

          if (res.isOk) {
            return new EquationAst(res.value);
          } else {
            console.warn(res.value);
            return null;
          }
        }
      }]);

      return EquationAst;
    }();

    var pNumber = Object(parjs__WEBPACK_IMPORTED_MODULE_0__["digit"])(10).pipe(Object(_parser_utils__WEBPACK_IMPORTED_MODULE_2__["multiple"])(), Object(parjs_combinators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (digits) {
      return {
        type: 'number',
        value: parseInt(digits.join(''))
      };
    }));
    var pPronumeral = Object(parjs__WEBPACK_IMPORTED_MODULE_0__["letter"])().pipe(Object(parjs_combinators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (value) {
      return {
        type: 'pronumeral',
        value: value
      };
    }));
    var pSubExpression = Object(parjs_combinators__WEBPACK_IMPORTED_MODULE_1__["or"])(pNumber)(pPronumeral);
    var pSign = Object(parjs_combinators__WEBPACK_IMPORTED_MODULE_1__["maybe"])('+')(Object(parjs__WEBPACK_IMPORTED_MODULE_0__["anyCharOf"])('+-'));
    var pTerm = pSign.pipe(Object(parjs_combinators__WEBPACK_IMPORTED_MODULE_1__["then"])(pSubExpression.pipe(Object(_parser_utils__WEBPACK_IMPORTED_MODULE_2__["multiple"])())), Object(parjs_combinators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          sign = _ref2[0],
          children = _ref2[1];

      return {
        type: 'term',
        sign: sign,
        children: children
      };
    }));
    var pProduct = pTerm.pipe(Object(_parser_utils__WEBPACK_IMPORTED_MODULE_2__["multipleSepBy"])('*'), Object(_parser_utils__WEBPACK_IMPORTED_MODULE_2__["singleOrMap"])(function (children) {
      return {
        type: 'product',
        children: children
      };
    }));
    var pSum = pProduct.pipe(Object(_parser_utils__WEBPACK_IMPORTED_MODULE_2__["multiple"])(), Object(_parser_utils__WEBPACK_IMPORTED_MODULE_2__["singleOrMap"])(function (children) {
      return {
        type: 'sum',
        children: children
      };
    }));
    var pEquation = pSum.pipe(Object(_parser_utils__WEBPACK_IMPORTED_MODULE_2__["multipleSepBy"])('='), Object(parjs_combinators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (children) {
      return {
        type: 'equation',
        children: children
      };
    }));
    /***/
  },

  /***/
  "./src/app/equation-panel/equation-panel.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/equation-panel/equation-panel.component.ts ***!
    \************************************************************/

  /*! exports provided: EquationPanelComponent */

  /***/
  function srcAppEquationPanelEquationPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquationPanelComponent", function () {
      return EquationPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _equation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../equation */
    "./src/app/equation.ts");
    /* harmony import */


    var _equations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../equations.service */
    "./src/app/equations.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function EquationPanelComponent_p_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EquationPanelComponent_p_0_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var equation_r1 = ctx.$implicit;
          return equation_r1.text = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var equation_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", equation_r1.text);
      }
    }

    var EquationPanelComponent = /*#__PURE__*/function () {
      function EquationPanelComponent(equations) {
        _classCallCheck(this, EquationPanelComponent);

        this.equations = equations;
      }

      _createClass(EquationPanelComponent, [{
        key: "newEquation",
        value: function newEquation() {
          this.equations.addEquation(new _equation__WEBPACK_IMPORTED_MODULE_1__["Equation"]());
        }
      }]);

      return EquationPanelComponent;
    }();

    EquationPanelComponent.ɵfac = function EquationPanelComponent_Factory(t) {
      return new (t || EquationPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_equations_service__WEBPACK_IMPORTED_MODULE_2__["EquationsService"]));
    };

    EquationPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EquationPanelComponent,
      selectors: [["app-equation-panel"]],
      decls: 4,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [3, "click"], ["autofocus", "", 3, "ngModel", "ngModelChange"]],
      template: function EquationPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EquationPanelComponent_p_0_Template, 2, 1, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquationPanelComponent_Template_button_click_2_listener() {
            return ctx.newEquation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New Equation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.equations.equations);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["[_nghost-%COMP%] {\n  background: #fff;\n  flex-shrink: 1;\n  width: 20%;\n  overflow: none;\n  display: flex;\n  flex-direction: column;\n}\nul[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\ninput[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n}\n/*# sourceMappingURL=src/app/equation-panel/equation-panel.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXF1YXRpb24tcGFuZWwvc3JjL2FwcC9lcXVhdGlvbi1wYW5lbC9lcXVhdGlvbi1wYW5lbC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvZXF1YXRpb24tcGFuZWwvZXF1YXRpb24tcGFuZWwuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBVztFQUNYLGNBQVk7RUFDWixVQUFNO0VBQ04sY0FBUztFQUVULGFBQVE7RUFDUixzQkFBZTtBQ0FqQjtBREVBOztFQUNFLFNBQU87RUFDUCxVQUFRO0FDQ1Y7QURDQTtFQUNFLGdCQUFXO0FDQ2I7QURDQTs7RUFDRSxzQkFBVztFQUNYLFdBQU07QUNFUjtBQUNBLDhFQUE4RSIsImZpbGUiOiJzcmMvYXBwL2VxdWF0aW9uLXBhbmVsL2VxdWF0aW9uLXBhbmVsLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3RcbiAgYmFja2dyb3VuZCAjZmZmXG4gIGZsZXgtc2hyaW5rIDFcbiAgd2lkdGggMjAlXG4gIG92ZXJmbG93IG5vbmVcblxuICBkaXNwbGF5IGZsZXhcbiAgZmxleC1kaXJlY3Rpb24gY29sdW1uXG5cbnVsLCBwXG4gIG1hcmdpbiAwXG4gIHBhZGRpbmcgMFxuXG51bFxuICBsaXN0LXN0eWxlIG5vbmVcblxuaW5wdXQsIGJ1dHRvblxuICBib3gtc2l6aW5nIGJvcmRlci1ib3hcbiAgd2lkdGggMTAwJVxuIiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmbGV4LXNocmluazogMTtcbiAgd2lkdGg6IDIwJTtcbiAgb3ZlcmZsb3c6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG51bCxcbnAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5pbnB1dCxcbmJ1dHRvbiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9lcXVhdGlvbi1wYW5lbC9lcXVhdGlvbi1wYW5lbC5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquationPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-equation-panel',
          templateUrl: './equation-panel.component.html',
          styleUrls: ['./equation-panel.component.styl']
        }]
      }], function () {
        return [{
          type: _equations_service__WEBPACK_IMPORTED_MODULE_2__["EquationsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/equation.ts":
  /*!*****************************!*\
    !*** ./src/app/equation.ts ***!
    \*****************************/

  /*! exports provided: Equation */

  /***/
  function srcAppEquationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Equation", function () {
      return Equation;
    });
    /* harmony import */


    var _equation_ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./equation-ast */
    "./src/app/equation-ast.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var Equation = /*#__PURE__*/function () {
      function Equation() {
        _classCallCheck(this, Equation);

        this._text = '';
        this._ast = null;
        this.updates = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(Equation, [{
        key: "text",
        get: function get() {
          return this._text;
        },
        set: function set(text) {
          this._ast = _equation_ast__WEBPACK_IMPORTED_MODULE_0__["EquationAst"].parse(text);
          this._text = text;
          this.updates.next(this);
        }
      }, {
        key: "ast",
        get: function get() {
          return this._ast;
        }
      }]);

      return Equation;
    }();
    /***/

  },

  /***/
  "./src/app/equations.service.ts":
  /*!**************************************!*\
    !*** ./src/app/equations.service.ts ***!
    \**************************************/

  /*! exports provided: EquationsService */

  /***/
  function srcAppEquationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquationsService", function () {
      return EquationsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var EquationsService = /*#__PURE__*/function () {
      function EquationsService() {
        _classCallCheck(this, EquationsService);

        this._equations = [];
        this.arrayUpdates = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(EquationsService, [{
        key: "addEquation",
        value: function addEquation(equation) {
          var newEquations = Array.from(this.equations);
          newEquations.push(equation);
          this.equations = newEquations;
        }
      }, {
        key: "updates",
        get: function get() {
          return this.arrayUpdates.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.equations), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (a) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"]).apply(void 0, _toConsumableArray(a.map(function (e) {
              return e.updates;
            }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (x) {
              return x;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(a));
          }));
        }
      }, {
        key: "equations",
        get: function get() {
          return this._equations;
        },
        set: function set(equations) {
          this._equations = equations;
          this.arrayUpdates.next(equations);
        }
      }]);

      return EquationsService;
    }();

    EquationsService.ɵfac = function EquationsService_Factory(t) {
      return new (t || EquationsService)();
    };

    EquationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EquationsService,
      factory: EquationsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/exec-equation.service.ts":
  /*!******************************************!*\
    !*** ./src/app/exec-equation.service.ts ***!
    \******************************************/

  /*! exports provided: ExecEquationService */

  /***/
  function srcAppExecEquationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExecEquationService", function () {
      return ExecEquationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExecEquationService = /*#__PURE__*/function () {
      function ExecEquationService() {
        _classCallCheck(this, ExecEquationService);
      }

      _createClass(ExecEquationService, [{
        key: "execEquation",
        value: function execEquation(equation, context) {
          var _a;

          var rootNode = (_a = equation.ast) === null || _a === void 0 ? void 0 : _a.rootNode;

          if (!rootNode) {
            return {};
          } // Extract the parts


          var exps = rootNode.children.slice();
          var expression = exps.pop(); // TODO: replace with inverse functionality
          // Get the result variables

          var resultKeys = [];

          var _iterator = _createForOfIteratorHelper(exps),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var exp = _step.value;

              if (exp.type === 'term' && exp.children.length === 1 && exp.children[0].type === 'pronumeral') {
                resultKeys.push(exp.children[0].value);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (resultKeys.length === 0) {
            resultKeys.push('y');
          } // Evaluate the expression


          var result = this.evalNode(expression, context); // Create the resultant context

          var resultCtx = {};

          for (var _i2 = 0, _resultKeys = resultKeys; _i2 < _resultKeys.length; _i2++) {
            var key = _resultKeys[_i2];
            resultCtx[key] = result;
          }

          return resultCtx;
        }
      }, {
        key: "evalNode",
        value: function evalNode(node, context) {
          var _this = this;

          var _a;

          switch (node.type) {
            case 'expression':
              return node.children.reduce(function (sum, exp) {
                return sum + _this.evalNode(exp, context);
              }, 0);

            case 'product':
              return node.children.reduce(function (prod, exp) {
                return prod * _this.evalNode(exp, context);
              }, 1);

            case 'term':
              return (node.sign === '-' ? -1 : 1) * node.children.reduce(function (prod, exp) {
                return prod * _this.evalNode(exp, context);
              }, 1);

            case 'pronumeral':
              return (_a = context[node.value]) !== null && _a !== void 0 ? _a : NaN;

            case 'number':
              return node.value;

            default:
              throw "IDK ".concat(node.type);
          }
        }
      }]);

      return ExecEquationService;
    }();

    ExecEquationService.ɵfac = function ExecEquationService_Factory(t) {
      return new (t || ExecEquationService)();
    };

    ExecEquationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ExecEquationService,
      factory: ExecEquationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExecEquationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/graph-view/graph-view.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/graph-view/graph-view.component.ts ***!
    \****************************************************/

  /*! exports provided: GraphViewComponent */

  /***/
  function srcAppGraphViewGraphViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphViewComponent", function () {
      return GraphViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _equations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../equations.service */
    "./src/app/equations.service.ts");
    /* harmony import */


    var _exec_equation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../exec-equation.service */
    "./src/app/exec-equation.service.ts");

    var _c0 = ["canvas"];

    var GraphViewComponent = /*#__PURE__*/function () {
      function GraphViewComponent(equations, execEquation) {
        _classCallCheck(this, GraphViewComponent);

        this.equations = equations;
        this.execEquation = execEquation;
        this.ctxCache = null;
        this.subCache = null;
      }

      _createClass(GraphViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var resize = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize');
          var updates = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.equations.updates, resize);
          this.subCache = updates.subscribe({
            next: function next() {
              return _this2.render();
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.render();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subCache) {
            this.subCache.unsubscribe();
            this.subCache = null;
          }
        }
      }, {
        key: "render",
        value: function render() {
          var ctx = this.ctx;
          if (!ctx) return;
          var width = ctx.canvas.width = ctx.canvas.clientWidth;
          var height = ctx.canvas.height = ctx.canvas.clientHeight;
          ctx.clearRect(0, 0, width, height);

          var _iterator2 = _createForOfIteratorHelper(this.equations.equations),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var equation = _step2.value;
              ctx.strokeStyle = 'black';
              ctx.beginPath();

              for (var sx = 0; sx < width; sx += 5) {
                var x = 6 * (sx / width) - 3;

                var _this$execEquation$ex = this.execEquation.execEquation(equation, {
                  x: x
                }),
                    y = _this$execEquation$ex.y;

                var sy = (-y / 6 + 0.5) * height;
                ctx.lineTo(sx, sy);
              }

              ctx.stroke();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }, {
        key: "ctx",
        get: function get() {
          var _a, _b;

          if (((_a = this.ctxCache) === null || _a === void 0 ? void 0 : _a.canvas) !== ((_b = this.canvas) === null || _b === void 0 ? void 0 : _b.nativeElement)) {
            this.ctxCache = this.canvas.nativeElement.getContext('2d');
          }

          return this.ctxCache;
        }
      }]);

      return GraphViewComponent;
    }();

    GraphViewComponent.ɵfac = function GraphViewComponent_Factory(t) {
      return new (t || GraphViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_equations_service__WEBPACK_IMPORTED_MODULE_2__["EquationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_exec_equation_service__WEBPACK_IMPORTED_MODULE_3__["ExecEquationService"]));
    };

    GraphViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GraphViewComponent,
      selectors: [["app-graph-view"]],
      viewQuery: function GraphViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        }
      },
      decls: 2,
      vars: 0,
      consts: [["canvas", ""]],
      template: function GraphViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", null, 0);
        }
      },
      styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\ncanvas[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=src/app/graph-view/graph-view.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhcGgtdmlldy9zcmMvYXBwL2dyYXBoLXZpZXcvZ3JhcGgtdmlldy5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvZ3JhcGgtdmlldy9ncmFwaC12aWV3LmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBSztBQ0NQO0FEQ0E7RUFDRSxXQUFNO0VBQ04sWUFBTztBQ0NUO0FBQ0Esc0VBQXNFIiwiZmlsZSI6InNyYy9hcHAvZ3JhcGgtdmlldy9ncmFwaC12aWV3LmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3RcbiAgZmxleCAxXG5cbmNhbnZhc1xuICB3aWR0aCAxMDAlXG4gIGhlaWdodCAxMDAlXG4iLCI6aG9zdCB7XG4gIGZsZXg6IDE7XG59XG5jYW52YXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9ncmFwaC12aWV3L2dyYXBoLXZpZXcuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-graph-view',
          templateUrl: './graph-view.component.html',
          styleUrls: ['./graph-view.component.styl']
        }]
      }], function () {
        return [{
          type: _equations_service__WEBPACK_IMPORTED_MODULE_2__["EquationsService"]
        }, {
          type: _exec_equation_service__WEBPACK_IMPORTED_MODULE_3__["ExecEquationService"]
        }];
      }, {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['canvas']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/parser.utils.ts":
  /*!*********************************!*\
    !*** ./src/app/parser.utils.ts ***!
    \*********************************/

  /*! exports provided: multiple, multipleSepBy, singleOrMap */

  /***/
  function srcAppParserUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "multiple", function () {
      return multiple;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "multipleSepBy", function () {
      return multipleSepBy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "singleOrMap", function () {
      return singleOrMap;
    });
    /* harmony import */


    var parjs_combinators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! parjs/combinators */
    "./node_modules/parjs/combinators.js");
    /* harmony import */


    var parjs_combinators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parjs_combinators__WEBPACK_IMPORTED_MODULE_0__);

    function multiple() {
      return function (p) {
        return Object(parjs_combinators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              a = _ref4[0],
              b = _ref4[1];

          return [a].concat(_toConsumableArray(b));
        })(Object(parjs_combinators__WEBPACK_IMPORTED_MODULE_0__["then"])(Object(parjs_combinators__WEBPACK_IMPORTED_MODULE_0__["many"])()(p))(p));
      };
    }

    function multipleSepBy(separator) {
      return function (p) {
        return Object(parjs_combinators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              a = _ref6[0],
              b = _ref6[1];

          return [a].concat(_toConsumableArray(b.map(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                _ = _ref8[0],
                x = _ref8[1];

            return x;
          })));
        })(Object(parjs_combinators__WEBPACK_IMPORTED_MODULE_0__["then"])(Object(parjs_combinators__WEBPACK_IMPORTED_MODULE_0__["many"])()(Object(parjs_combinators__WEBPACK_IMPORTED_MODULE_0__["then"])(p)(separator)))(p));
      };
    }

    function singleOrMap(f) {
      return Object(parjs_combinators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (arr) {
        return arr.length === 1 ? arr[0] : f(arr);
      });
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
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
    /*! /home/runner/work/graphiti/graphiti/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map