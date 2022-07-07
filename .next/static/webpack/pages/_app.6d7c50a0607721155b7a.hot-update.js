webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZSIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwiYWRkUG9zdCIsInR5cGUiLCJkdW1teVBvc3QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxZQUFZLEdBQUU7RUFDdkJDLFNBQVMsRUFBQyxDQUFDO0lBQ1BDLEVBQUUsRUFBQyxDQURJO0lBRVBDLElBQUksRUFBQztNQUNERCxFQUFFLEVBQUMsQ0FERjtNQUVERSxRQUFRLEVBQUM7SUFGUixDQUZFO0lBTVBDLE9BQU8sRUFBQyxTQU5EO0lBT1BDLEtBQUssRUFBQyxDQUFDO01BQ0hDLEdBQUcsRUFBQztJQURELENBQUQsRUFFSjtNQUNFQSxHQUFHLEVBQUM7SUFETixDQUZJLEVBSUo7TUFDRUEsR0FBRyxFQUFDO0lBRE4sQ0FKSSxDQVBDO0lBY1BDLFFBQVEsRUFBQyxDQUFDO01BQ1BMLElBQUksRUFBQztRQUNKQyxRQUFRLEVBQUM7TUFETCxDQURFO01BSVBDLE9BQU8sRUFBQztJQUpELENBQUQsRUFNVDtNQUNJRixJQUFJLEVBQUM7UUFDREMsUUFBUSxFQUFDO01BRFIsQ0FEVDtNQUlLQyxPQUFPLEVBQUM7SUFKYixDQU5TO0VBZEYsQ0FBRCxDQURhO0VBOEJ2QkksVUFBVSxFQUFDLEVBOUJZO0VBK0J2QkMsU0FBUyxFQUFDO0FBL0JhLENBQXBCO0FBa0NQLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNPLElBQU1DLE9BQU8sR0FBRztFQUNuQkMsSUFBSSxFQUFDRjtBQURjLENBQWhCO0FBSVAsSUFBTUcsU0FBUyxHQUFHO0VBQ1ZaLEVBQUUsRUFBQyxDQURPO0VBRVZHLE9BQU8sRUFBQyxZQUZFO0VBR1ZGLElBQUksRUFBQztJQUNERCxFQUFFLEVBQUMsQ0FERjtJQUVERSxRQUFRLEVBQUM7RUFGUixDQUhLO0VBUVZFLEtBQUssRUFBQyxFQVJJO0VBU1ZFLFFBQVEsRUFBQztBQVRDLENBQWxCOztBQVlBLElBQU1PLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQStCO0VBQUEsSUFBOUJDLEtBQThCLHVFQUF4QmhCLFlBQXdCO0VBQUEsSUFBVmlCLE1BQVU7O0VBQzNDLFFBQU9BLE1BQU0sQ0FBQ0osSUFBZDtJQUNJLEtBQUtGLFFBQUw7TUFDSSx1Q0FDT0ssS0FEUDtRQUVJZixTQUFTLEdBQUVhLFNBQUYsc0dBQWdCRSxLQUFLLENBQUNmLFNBQXRCLEVBRmI7UUFHSVMsU0FBUyxFQUFDO01BSGQ7O0lBS0o7TUFDSSxPQUFPTSxLQUFQO0VBUlI7QUFXSCxDQVpEOztBQWNlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjZkN2M1MGEwNjA3NzIxMTU1YjdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPXtcclxuICAgIG1haW5Qb3N0czpbe1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOidoaSBtYW4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50Oifssqvrsojsp7gg6rCc7Iqk6ri4JyxcclxuICAgICAgICBJbWFnZTpbe1xyXG4gICAgICAgICAgICBzcmM6J2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMDQvMjMvMjIvMDAvdHJlZS03MzY4ODVfXzQ4MC5qcGcnLFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBzcmM6J2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMDQvMjMvMjIvMDAvdHJlZS03MzY4ODVfXzQ4MC5qcGcnLFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBzcmM6J2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMDQvMjMvMjIvMDAvdHJlZS03MzY4ODVfXzQ4MC5qcGcnLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzOlt7XHJcbiAgICAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiduZXJvJ1xyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgY29udGVudDon7Jqw7JmAIOqwnOygle2MkCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTonaGVybydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAsY29udGVudDon7Ja866W47IKs6rOg7Iu264ukJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXVxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOltdLFxyXG4gICAgcG9zdEFkZGVkOmZhbHNlLFxyXG59XHJcblxyXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCc7XHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xyXG4gICAgdHlwZTpBRERfUE9TVCxcclxuXHJcbn1cclxuY29uc3QgZHVtbXlQb3N0ID0ge1xyXG4gICAgICAgIGlkOjIsXHJcbiAgICAgICAgY29udGVudDon7LKr67KI7Ke4IHJlcmVyZScsXHJcbiAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOid6ZW9yb2NvJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEltYWdlOltdLFxyXG4gICAgICAgIENvbW1lbnRzOltdXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PntcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6W2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIHBvc3RBZGRlZDp0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9