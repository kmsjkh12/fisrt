webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'hi man'
    },
    content: '첫번째 개스길',
    Image: [{
      src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    }, {
      src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    }, {
      src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    }],
    Comments: [{
      User: {
        nickname: 'nero'
      },
      content: '우와 개정판'
    }, {
      User: {
        nickname: 'hero'
      },
      content: '얼른사고싶다'
    }]
  }],
  imagePaths: [],
  postAdded: false
};
var ADD_POST = 'ADD_POST';
var addPost = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  content: '첫번째 rerere',
  User: {
    id: 1,
    nickname: 'zeoroco'
  },
  Image: [],
  Comments: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        postAdded: true
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZSIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwiYWRkUG9zdCIsInR5cGUiLCJkdW1teVBvc3QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxZQUFZLEdBQUU7RUFDdkJDLFNBQVMsRUFBQyxDQUFDO0lBQ1BDLEVBQUUsRUFBQyxDQURJO0lBRVBDLElBQUksRUFBQztNQUNERCxFQUFFLEVBQUMsQ0FERjtNQUVERSxRQUFRLEVBQUM7SUFGUixDQUZFO0lBTVBDLE9BQU8sRUFBQyxTQU5EO0lBT1BDLEtBQUssRUFBQyxDQUFDO01BQ0hDLEdBQUcsRUFBQztJQURELENBQUQsRUFFSjtNQUNFQSxHQUFHLEVBQUM7SUFETixDQUZJLEVBSUo7TUFDRUEsR0FBRyxFQUFDO0lBRE4sQ0FKSSxDQVBDO0lBY1BDLFFBQVEsRUFBQyxDQUFDO01BQ1BMLElBQUksRUFBQztRQUNKQyxRQUFRLEVBQUM7TUFETCxDQURFO01BSVBDLE9BQU8sRUFBQztJQUpELENBQUQsRUFNVDtNQUNJRixJQUFJLEVBQUM7UUFDREMsUUFBUSxFQUFDO01BRFIsQ0FEVDtNQUlLQyxPQUFPLEVBQUM7SUFKYixDQU5TO0VBZEYsQ0FBRCxDQURhO0VBOEJ2QkksVUFBVSxFQUFDLEVBOUJZO0VBK0J2QkMsU0FBUyxFQUFDO0FBL0JhLENBQXBCO0FBa0NQLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNPLElBQU1DLE9BQU8sR0FBRztFQUNuQkMsSUFBSSxFQUFDRjtBQURjLENBQWhCO0FBSVAsSUFBTUcsU0FBUyxHQUFHO0VBQ1ZaLEVBQUUsRUFBQyxDQURPO0VBRVZHLE9BQU8sRUFBQyxZQUZFO0VBR1ZGLElBQUksRUFBQztJQUNERCxFQUFFLEVBQUMsQ0FERjtJQUVERSxRQUFRLEVBQUM7RUFGUixDQUhLO0VBUVZFLEtBQUssRUFBQyxFQVJJO0VBU1ZFLFFBQVEsRUFBQztBQVRDLENBQWxCOztBQVlBLElBQU1PLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQStCO0VBQUEsSUFBOUJDLEtBQThCLHVFQUF4QmhCLFlBQXdCO0VBQUEsSUFBVmlCLE1BQVU7O0VBQzNDLFFBQU9BLE1BQU0sQ0FBQ0osSUFBZDtJQUNJLEtBQUtGLFFBQUw7TUFDSSx1Q0FDT0ssS0FEUDtRQUVJZixTQUFTLEdBQUVhLFNBQUYsc0dBQWdCRSxLQUFLLENBQUNmLFNBQXRCLEVBRmI7UUFHSVMsU0FBUyxFQUFDO01BSGQ7O0lBS0o7TUFDSSxPQUFPTSxLQUFQO0VBUlI7QUFXSCxDQVpEOztBQWNlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZDdjNTBhMDYwNzcyMTE1NWI3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID17XHJcbiAgICBtYWluUG9zdHM6W3tcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTonaGkgbWFuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDon7LKr67KI7Ke4IOqwnOyKpOq4uCcsXHJcbiAgICAgICAgSW1hZ2U6W3tcclxuICAgICAgICAgICAgc3JjOidodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE1LzA0LzIzLzIyLzAwL3RyZWUtNzM2ODg1X180ODAuanBnJyxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgc3JjOidodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE1LzA0LzIzLzIyLzAwL3RyZWUtNzM2ODg1X180ODAuanBnJyxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgc3JjOidodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE1LzA0LzIzLzIyLzAwL3RyZWUtNzM2ODg1X180ODAuanBnJyxcclxuICAgICAgICB9XSxcclxuICAgICAgICBDb21tZW50czpbe1xyXG4gICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICBuaWNrbmFtZTonbmVybydcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIGNvbnRlbnQ6J+yasOyZgCDqsJzsoJXtjJAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6J2hlcm8nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLGNvbnRlbnQ6J+yWvOuluOyCrOqzoOyLtuuLpCdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF1cclxuICAgIH1dLFxyXG4gICAgaW1hZ2VQYXRoczpbXSxcclxuICAgIHBvc3RBZGRlZDpmYWxzZSxcclxufVxyXG5cclxuY29uc3QgQUREX1BPU1QgPSAnQUREX1BPU1QnO1xyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcclxuICAgIHR5cGU6QUREX1BPU1QsXHJcblxyXG59XHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuICAgICAgICBpZDoyLFxyXG4gICAgICAgIGNvbnRlbnQ6J+yyq+uyiOynuCByZXJlcmUnLFxyXG4gICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTonemVvcm9jbydcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBJbWFnZTpbXSxcclxuICAgICAgICBDb21tZW50czpbXVxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOltkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICBwb3N0QWRkZWQ6dHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==