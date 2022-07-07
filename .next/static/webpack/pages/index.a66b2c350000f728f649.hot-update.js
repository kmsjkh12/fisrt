webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\kmsjk\\Desktop\\nodebird\\components\\PostForm.js",
    _this = undefined,
    _s = $RefreshSig$();








var PostForm = function PostForm() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["default"]);
  }, []);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector.imagePaths;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      text = _useInput2[0],
      onChangeText = _useInput2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    style: {
      margin: '10px 0 20px'
    },
    encType: "multipart/form-data",
    onFinish: onSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
      value: text,
      onChange: onChangeText,
      maxLength: 140,
      placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC774\uC5C8\uB098\uC694 "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
        type: "file",
        multiple: true,
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        style: {
          "float": 'right'
        },
        htmlType: "submit",
        children: "\uC9F9\uCA31 "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      children: imagePaths.map(function (v) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          style: {
            display: 'inline-block'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
            src: v,
            style: {
              width: '200px'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              children: "\uC81C\uAC70 "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 22
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 17
          }, _this)]
        }, v, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_s(PostForm, "teInZey1MXMAbynp7Hh9E6Vo+B0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvblN1Ym1pdCIsInVzZUNhbGxiYWNrIiwiYWRkUG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsInVzZUlucHV0IiwidGV4dCIsIm9uQ2hhbmdlVGV4dCIsIm1hcmdpbiIsIm1hcCIsInYiLCJkaXNwbGF5Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBSztFQUFBOztFQUNsQixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0VBQ0EsSUFBTUMsUUFBUSxHQUFFQyx5REFBVyxDQUFDLFlBQUk7SUFDNUJILFFBQVEsQ0FBQ0ksc0RBQUQsQ0FBUjtFQUNILENBRjBCLEVBRXpCLEVBRnlCLENBQTNCOztFQUtBLG1CQUFvQkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtFQUFBLENBQUQsQ0FBL0I7RUFBQSxJQUFPQyxVQUFQLGdCQUFPQSxVQUFQOztFQUNBLGdCQUE0QkMsK0RBQVEsQ0FBQyxFQUFELENBQXBDO0VBQUE7RUFBQSxJQUFPQyxJQUFQO0VBQUEsSUFBWUMsWUFBWjs7RUFFSixvQkFDSSxxRUFBQyx5Q0FBRDtJQUFNLEtBQUssRUFBRTtNQUFDQyxNQUFNLEVBQUc7SUFBVixDQUFiO0lBQXVDLE9BQU8sRUFBRSxxQkFBaEQ7SUFBc0UsUUFBUSxFQUFFVixRQUFoRjtJQUFBLHdCQUNJLHFFQUFDLDBDQUFELENBQU8sUUFBUDtNQUNBLEtBQUssRUFBRVEsSUFEUDtNQUVBLFFBQVEsRUFBRUMsWUFGVjtNQUdBLFNBQVMsRUFBRSxHQUhYO01BSUEsV0FBVyxFQUFDO0lBSlo7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURKLGVBUUE7TUFBQSx3QkFDSTtRQUFPLElBQUksRUFBQyxNQUFaO1FBQW1CLFFBQVEsTUFBM0I7UUFBNEIsTUFBTTtNQUFsQztRQUFBO1FBQUE7UUFBQTtNQUFBLFNBREosZUFFSSxxRUFBQywyQ0FBRDtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUZKLGVBR0kscUVBQUMsMkNBQUQ7UUFBUSxJQUFJLEVBQUMsU0FBYjtRQUF1QixLQUFLLEVBQUU7VUFBQyxTQUFPO1FBQVIsQ0FBOUI7UUFBZ0QsUUFBUSxFQUFDLFFBQXpEO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBSEo7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBUkEsZUFhQTtNQUFBLFVBQ0tILFVBQVUsQ0FBQ0ssR0FBWCxDQUFlLFVBQUNDLENBQUQ7UUFBQSxvQkFDWjtVQUFhLEtBQUssRUFBRTtZQUFDQyxPQUFPLEVBQUM7VUFBVCxDQUFwQjtVQUFBLHdCQUNJO1lBQUssR0FBRyxFQUFFRCxDQUFWO1lBQWEsS0FBSyxFQUFFO2NBQUNFLEtBQUssRUFBQztZQUFQO1VBQXBCO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FESixlQUVJO1lBQUEsdUJBQUsscUVBQUMsMkNBQUQ7Y0FBQTtZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFBTDtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBRko7UUFBQSxHQUFVRixDQUFWO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FEWTtNQUFBLENBQWY7SUFETDtNQUFBO01BQUE7TUFBQTtJQUFBLFNBYkE7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREo7QUEwQkMsQ0FwQ0Q7O0dBQU1mLFE7VUFDZUUsdUQsRUFNR0ksdUQsRUFDUUksdUQ7OztLQVIxQlYsUTtBQXNDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTY2YjJjMzUwMDAwZjcyOGY2NDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgLHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtGb3JtLCBJbnB1dCxCdXR0b259IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGFkZFBvc3QgZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCdcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PntcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IG9uU3VibWl0ID11c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKGFkZFBvc3QpO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCB7aW1hZ2VQYXRoc30gPXVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCBbdGV4dCxvbkNoYW5nZVRleHRdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgXHJcbnJldHVybihcclxuICAgIDxGb3JtIHN0eWxlPXt7bWFyZ2luIDogJzEwcHggMCAyMHB4J319IGVuY1R5cGUgPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvblN1Ym1pdH0gPlxyXG4gICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9XHJcbiAgICAgICAgbWF4TGVuZ3RoPXsxNDB9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLslrTrlqQg7Iug6riw7ZWcIOydvOydtCDsnbTsl4jrgpjsmpQgXCJcclxuICAgICAgICAvPlxyXG4gICAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGhpZGRlbiAvPlxyXG4gICAgICAgIDxCdXR0b24+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17e2Zsb2F0OiAncmlnaHQnfX0gaHRtbFR5cGU9XCJzdWJtaXRcIj7sp7nsqLEgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2KT0+KFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17dn0gc3R5bGU9e3tkaXNwbGF5OidpbmxpbmUtYmxvY2snfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dn0gc3R5bGU9e3t3aWR0aDonMjAwcHgnfX0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXY+PEJ1dHRvbj7soJzqsbAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8L0Zvcm0+XHJcbilcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=