(function () {
  const b = document.createElement("link").relList;
  if (b && b.supports && b.supports("modulepreload")) return;
  for (const M of document.querySelectorAll('link[rel="modulepreload"]')) f(M);
  new MutationObserver((M) => {
    for (const N of M)
      if (N.type === "childList")
        for (const R of N.addedNodes)
          R.tagName === "LINK" && R.rel === "modulepreload" && f(R);
  }).observe(document, { childList: !0, subtree: !0 });
  function g(M) {
    const N = {};
    return (
      M.integrity && (N.integrity = M.integrity),
      M.referrerPolicy && (N.referrerPolicy = M.referrerPolicy),
      M.crossOrigin === "use-credentials"
        ? (N.credentials = "include")
        : M.crossOrigin === "anonymous"
          ? (N.credentials = "omit")
          : (N.credentials = "same-origin"),
      N
    );
  }
  function f(M) {
    if (M.ep) return;
    M.ep = !0;
    const N = g(M);
    fetch(M.href, N);
  }
})();
function Bd(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default")
    ? s.default
    : s;
}
var hf = { exports: {} },
  Ne = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zd;
function sv() {
  if (zd) return Ne;
  zd = 1;
  var s = Symbol.for("react.transitional.element"),
    b = Symbol.for("react.fragment");
  function g(f, M, N) {
    var R = null;
    if (
      (N !== void 0 && (R = "" + N),
      M.key !== void 0 && (R = "" + M.key),
      "key" in M)
    ) {
      N = {};
      for (var p in M) p !== "key" && (N[p] = M[p]);
    } else N = M;
    return (
      (M = N.ref),
      { $$typeof: s, type: f, key: R, ref: M !== void 0 ? M : null, props: N }
    );
  }
  return ((Ne.Fragment = b), (Ne.jsx = g), (Ne.jsxs = g), Ne);
}
var Od;
function ov() {
  return (Od || ((Od = 1), (hf.exports = sv())), hf.exports);
}
var X = ov(),
  rf = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Md;
function dv() {
  if (Md) return Q;
  Md = 1;
  var s = Symbol.for("react.transitional.element"),
    b = Symbol.for("react.portal"),
    g = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    M = Symbol.for("react.profiler"),
    N = Symbol.for("react.consumer"),
    R = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    j = Symbol.for("react.lazy"),
    C = Symbol.for("react.activity"),
    ul = Symbol.iterator;
  function bl(m) {
    return m === null || typeof m != "object"
      ? null
      : ((m = (ul && m[ul]) || m["@@iterator"]),
        typeof m == "function" ? m : null);
  }
  var rl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _l = Object.assign,
    Ot = {};
  function Ll(m, O, H) {
    ((this.props = m),
      (this.context = O),
      (this.refs = Ot),
      (this.updater = H || rl));
  }
  ((Ll.prototype.isReactComponent = {}),
    (Ll.prototype.setState = function (m, O) {
      if (typeof m != "object" && typeof m != "function" && m != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, m, O, "setState");
    }),
    (Ll.prototype.forceUpdate = function (m) {
      this.updater.enqueueForceUpdate(this, m, "forceUpdate");
    }));
  function Mt() {}
  Mt.prototype = Ll.prototype;
  function Cl(m, O, H) {
    ((this.props = m),
      (this.context = O),
      (this.refs = Ot),
      (this.updater = H || rl));
  }
  var Bl = (Cl.prototype = new Mt());
  ((Bl.constructor = Cl), _l(Bl, Ll.prototype), (Bl.isPureReactComponent = !0));
  var mt = Array.isArray;
  function Ul() {}
  var J = { H: null, A: null, T: null, S: null },
    Ql = Object.prototype.hasOwnProperty;
  function Pl(m, O, H) {
    var B = H.ref;
    return {
      $$typeof: s,
      type: m,
      key: O,
      ref: B !== void 0 ? B : null,
      props: H,
    };
  }
  function aa(m, O) {
    return Pl(m.type, O, m.props);
  }
  function P(m) {
    return typeof m == "object" && m !== null && m.$$typeof === s;
  }
  function zl(m) {
    var O = { "=": "=0", ":": "=2" };
    return (
      "$" +
      m.replace(/[=:]/g, function (H) {
        return O[H];
      })
    );
  }
  var yt = /\/+/g;
  function lt(m, O) {
    return typeof m == "object" && m !== null && m.key != null
      ? zl("" + m.key)
      : O.toString(36);
  }
  function tt(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (
          (typeof m.status == "string"
            ? m.then(Ul, Ul)
            : ((m.status = "pending"),
              m.then(
                function (O) {
                  m.status === "pending" &&
                    ((m.status = "fulfilled"), (m.value = O));
                },
                function (O) {
                  m.status === "pending" &&
                    ((m.status = "rejected"), (m.reason = O));
                },
              )),
          m.status)
        ) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function A(m, O, H, B, Z) {
    var w = typeof m;
    (w === "undefined" || w === "boolean") && (m = null);
    var el = !1;
    if (m === null) el = !0;
    else
      switch (w) {
        case "bigint":
        case "string":
        case "number":
          el = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case s:
            case b:
              el = !0;
              break;
            case j:
              return ((el = m._init), A(el(m._payload), O, H, B, Z));
          }
      }
    if (el)
      return (
        (Z = Z(m)),
        (el = B === "" ? "." + lt(m, 0) : B),
        mt(Z)
          ? ((H = ""),
            el != null && (H = el.replace(yt, "$&/") + "/"),
            A(Z, O, H, "", function (Yu) {
              return Yu;
            }))
          : Z != null &&
            (P(Z) &&
              (Z = aa(
                Z,
                H +
                  (Z.key == null || (m && m.key === Z.key)
                    ? ""
                    : ("" + Z.key).replace(yt, "$&/") + "/") +
                  el,
              )),
            O.push(Z)),
        1
      );
    el = 0;
    var Vl = B === "" ? "." : B + ":";
    if (mt(m))
      for (var El = 0; El < m.length; El++)
        ((B = m[El]), (w = Vl + lt(B, El)), (el += A(B, O, H, w, Z)));
    else if (((El = bl(m)), typeof El == "function"))
      for (m = El.call(m), El = 0; !(B = m.next()).done;)
        ((B = B.value), (w = Vl + lt(B, El++)), (el += A(B, O, H, w, Z)));
    else if (w === "object") {
      if (typeof m.then == "function") return A(tt(m), O, H, B, Z);
      throw (
        (O = String(m)),
        Error(
          "Objects are not valid as a React child (found: " +
            (O === "[object Object]"
              ? "object with keys {" + Object.keys(m).join(", ") + "}"
              : O) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return el;
  }
  function U(m, O, H) {
    if (m == null) return m;
    var B = [],
      Z = 0;
    return (
      A(m, B, "", "", function (w) {
        return O.call(H, w, Z++);
      }),
      B
    );
  }
  function L(m) {
    if (m._status === -1) {
      var O = m._result;
      ((O = O()),
        O.then(
          function (H) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 1), (m._result = H));
          },
          function (H) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 2), (m._result = H));
          },
        ),
        m._status === -1 && ((m._status = 0), (m._result = O)));
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var il =
      typeof reportError == "function"
        ? reportError
        : function (m) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var O = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof m == "object" &&
                  m !== null &&
                  typeof m.message == "string"
                    ? String(m.message)
                    : String(m),
                error: m,
              });
              if (!window.dispatchEvent(O)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", m);
              return;
            }
            console.error(m);
          },
    dl = {
      map: U,
      forEach: function (m, O, H) {
        U(
          m,
          function () {
            O.apply(this, arguments);
          },
          H,
        );
      },
      count: function (m) {
        var O = 0;
        return (
          U(m, function () {
            O++;
          }),
          O
        );
      },
      toArray: function (m) {
        return (
          U(m, function (O) {
            return O;
          }) || []
        );
      },
      only: function (m) {
        if (!P(m))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return m;
      },
    };
  return (
    (Q.Activity = C),
    (Q.Children = dl),
    (Q.Component = Ll),
    (Q.Fragment = g),
    (Q.Profiler = M),
    (Q.PureComponent = Cl),
    (Q.StrictMode = f),
    (Q.Suspense = D),
    (Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J),
    (Q.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (m) {
        return J.H.useMemoCache(m);
      },
    }),
    (Q.cache = function (m) {
      return function () {
        return m.apply(null, arguments);
      };
    }),
    (Q.cacheSignal = function () {
      return null;
    }),
    (Q.cloneElement = function (m, O, H) {
      if (m == null)
        throw Error(
          "The argument must be a React element, but you passed " + m + ".",
        );
      var B = _l({}, m.props),
        Z = m.key;
      if (O != null)
        for (w in (O.key !== void 0 && (Z = "" + O.key), O))
          !Ql.call(O, w) ||
            w === "key" ||
            w === "__self" ||
            w === "__source" ||
            (w === "ref" && O.ref === void 0) ||
            (B[w] = O[w]);
      var w = arguments.length - 2;
      if (w === 1) B.children = H;
      else if (1 < w) {
        for (var el = Array(w), Vl = 0; Vl < w; Vl++)
          el[Vl] = arguments[Vl + 2];
        B.children = el;
      }
      return Pl(m.type, Z, B);
    }),
    (Q.createContext = function (m) {
      return (
        (m = {
          $$typeof: R,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (m.Provider = m),
        (m.Consumer = { $$typeof: N, _context: m }),
        m
      );
    }),
    (Q.createElement = function (m, O, H) {
      var B,
        Z = {},
        w = null;
      if (O != null)
        for (B in (O.key !== void 0 && (w = "" + O.key), O))
          Ql.call(O, B) &&
            B !== "key" &&
            B !== "__self" &&
            B !== "__source" &&
            (Z[B] = O[B]);
      var el = arguments.length - 2;
      if (el === 1) Z.children = H;
      else if (1 < el) {
        for (var Vl = Array(el), El = 0; El < el; El++)
          Vl[El] = arguments[El + 2];
        Z.children = Vl;
      }
      if (m && m.defaultProps)
        for (B in ((el = m.defaultProps), el))
          Z[B] === void 0 && (Z[B] = el[B]);
      return Pl(m, w, Z);
    }),
    (Q.createRef = function () {
      return { current: null };
    }),
    (Q.forwardRef = function (m) {
      return { $$typeof: p, render: m };
    }),
    (Q.isValidElement = P),
    (Q.lazy = function (m) {
      return { $$typeof: j, _payload: { _status: -1, _result: m }, _init: L };
    }),
    (Q.memo = function (m, O) {
      return { $$typeof: E, type: m, compare: O === void 0 ? null : O };
    }),
    (Q.startTransition = function (m) {
      var O = J.T,
        H = {};
      J.T = H;
      try {
        var B = m(),
          Z = J.S;
        (Z !== null && Z(H, B),
          typeof B == "object" &&
            B !== null &&
            typeof B.then == "function" &&
            B.then(Ul, il));
      } catch (w) {
        il(w);
      } finally {
        (O !== null && H.types !== null && (O.types = H.types), (J.T = O));
      }
    }),
    (Q.unstable_useCacheRefresh = function () {
      return J.H.useCacheRefresh();
    }),
    (Q.use = function (m) {
      return J.H.use(m);
    }),
    (Q.useActionState = function (m, O, H) {
      return J.H.useActionState(m, O, H);
    }),
    (Q.useCallback = function (m, O) {
      return J.H.useCallback(m, O);
    }),
    (Q.useContext = function (m) {
      return J.H.useContext(m);
    }),
    (Q.useDebugValue = function () {}),
    (Q.useDeferredValue = function (m, O) {
      return J.H.useDeferredValue(m, O);
    }),
    (Q.useEffect = function (m, O) {
      return J.H.useEffect(m, O);
    }),
    (Q.useEffectEvent = function (m) {
      return J.H.useEffectEvent(m);
    }),
    (Q.useId = function () {
      return J.H.useId();
    }),
    (Q.useImperativeHandle = function (m, O, H) {
      return J.H.useImperativeHandle(m, O, H);
    }),
    (Q.useInsertionEffect = function (m, O) {
      return J.H.useInsertionEffect(m, O);
    }),
    (Q.useLayoutEffect = function (m, O) {
      return J.H.useLayoutEffect(m, O);
    }),
    (Q.useMemo = function (m, O) {
      return J.H.useMemo(m, O);
    }),
    (Q.useOptimistic = function (m, O) {
      return J.H.useOptimistic(m, O);
    }),
    (Q.useReducer = function (m, O, H) {
      return J.H.useReducer(m, O, H);
    }),
    (Q.useRef = function (m) {
      return J.H.useRef(m);
    }),
    (Q.useState = function (m) {
      return J.H.useState(m);
    }),
    (Q.useSyncExternalStore = function (m, O, H) {
      return J.H.useSyncExternalStore(m, O, H);
    }),
    (Q.useTransition = function () {
      return J.H.useTransition();
    }),
    (Q.version = "19.2.8"),
    Q
  );
}
var Nd;
function Tf() {
  return (Nd || ((Nd = 1), (rf.exports = dv())), rf.exports);
}
var pl = Tf();
const mv = Bd(pl);
var Sf = { exports: {} },
  De = {},
  gf = { exports: {} },
  bf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dd;
function yv() {
  return (
    Dd ||
      ((Dd = 1),
      (function (s) {
        function b(A, U) {
          var L = A.length;
          A.push(U);
          l: for (; 0 < L;) {
            var il = (L - 1) >>> 1,
              dl = A[il];
            if (0 < M(dl, U)) ((A[il] = U), (A[L] = dl), (L = il));
            else break l;
          }
        }
        function g(A) {
          return A.length === 0 ? null : A[0];
        }
        function f(A) {
          if (A.length === 0) return null;
          var U = A[0],
            L = A.pop();
          if (L !== U) {
            A[0] = L;
            l: for (var il = 0, dl = A.length, m = dl >>> 1; il < m;) {
              var O = 2 * (il + 1) - 1,
                H = A[O],
                B = O + 1,
                Z = A[B];
              if (0 > M(H, L))
                B < dl && 0 > M(Z, H)
                  ? ((A[il] = Z), (A[B] = L), (il = B))
                  : ((A[il] = H), (A[O] = L), (il = O));
              else if (B < dl && 0 > M(Z, L))
                ((A[il] = Z), (A[B] = L), (il = B));
              else break l;
            }
          }
          return U;
        }
        function M(A, U) {
          var L = A.sortIndex - U.sortIndex;
          return L !== 0 ? L : A.id - U.id;
        }
        if (
          ((s.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var N = performance;
          s.unstable_now = function () {
            return N.now();
          };
        } else {
          var R = Date,
            p = R.now();
          s.unstable_now = function () {
            return R.now() - p;
          };
        }
        var D = [],
          E = [],
          j = 1,
          C = null,
          ul = 3,
          bl = !1,
          rl = !1,
          _l = !1,
          Ot = !1,
          Ll = typeof setTimeout == "function" ? setTimeout : null,
          Mt = typeof clearTimeout == "function" ? clearTimeout : null,
          Cl = typeof setImmediate < "u" ? setImmediate : null;
        function Bl(A) {
          for (var U = g(E); U !== null;) {
            if (U.callback === null) f(E);
            else if (U.startTime <= A)
              (f(E), (U.sortIndex = U.expirationTime), b(D, U));
            else break;
            U = g(E);
          }
        }
        function mt(A) {
          if (((_l = !1), Bl(A), !rl))
            if (g(D) !== null) ((rl = !0), Ul || ((Ul = !0), zl()));
            else {
              var U = g(E);
              U !== null && tt(mt, U.startTime - A);
            }
        }
        var Ul = !1,
          J = -1,
          Ql = 5,
          Pl = -1;
        function aa() {
          return Ot ? !0 : !(s.unstable_now() - Pl < Ql);
        }
        function P() {
          if (((Ot = !1), Ul)) {
            var A = s.unstable_now();
            Pl = A;
            var U = !0;
            try {
              l: {
                ((rl = !1), _l && ((_l = !1), Mt(J), (J = -1)), (bl = !0));
                var L = ul;
                try {
                  t: {
                    for (
                      Bl(A), C = g(D);
                      C !== null && !(C.expirationTime > A && aa());
                    ) {
                      var il = C.callback;
                      if (typeof il == "function") {
                        ((C.callback = null), (ul = C.priorityLevel));
                        var dl = il(C.expirationTime <= A);
                        if (((A = s.unstable_now()), typeof dl == "function")) {
                          ((C.callback = dl), Bl(A), (U = !0));
                          break t;
                        }
                        (C === g(D) && f(D), Bl(A));
                      } else f(D);
                      C = g(D);
                    }
                    if (C !== null) U = !0;
                    else {
                      var m = g(E);
                      (m !== null && tt(mt, m.startTime - A), (U = !1));
                    }
                  }
                  break l;
                } finally {
                  ((C = null), (ul = L), (bl = !1));
                }
                U = void 0;
              }
            } finally {
              U ? zl() : (Ul = !1);
            }
          }
        }
        var zl;
        if (typeof Cl == "function")
          zl = function () {
            Cl(P);
          };
        else if (typeof MessageChannel < "u") {
          var yt = new MessageChannel(),
            lt = yt.port2;
          ((yt.port1.onmessage = P),
            (zl = function () {
              lt.postMessage(null);
            }));
        } else
          zl = function () {
            Ll(P, 0);
          };
        function tt(A, U) {
          J = Ll(function () {
            A(s.unstable_now());
          }, U);
        }
        ((s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (A) {
            A.callback = null;
          }),
          (s.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Ql = 0 < A ? Math.floor(1e3 / A) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return ul;
          }),
          (s.unstable_next = function (A) {
            switch (ul) {
              case 1:
              case 2:
              case 3:
                var U = 3;
                break;
              default:
                U = ul;
            }
            var L = ul;
            ul = U;
            try {
              return A();
            } finally {
              ul = L;
            }
          }),
          (s.unstable_requestPaint = function () {
            Ot = !0;
          }),
          (s.unstable_runWithPriority = function (A, U) {
            switch (A) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                A = 3;
            }
            var L = ul;
            ul = A;
            try {
              return U();
            } finally {
              ul = L;
            }
          }),
          (s.unstable_scheduleCallback = function (A, U, L) {
            var il = s.unstable_now();
            switch (
              (typeof L == "object" && L !== null
                ? ((L = L.delay),
                  (L = typeof L == "number" && 0 < L ? il + L : il))
                : (L = il),
              A)
            ) {
              case 1:
                var dl = -1;
                break;
              case 2:
                dl = 250;
                break;
              case 5:
                dl = 1073741823;
                break;
              case 4:
                dl = 1e4;
                break;
              default:
                dl = 5e3;
            }
            return (
              (dl = L + dl),
              (A = {
                id: j++,
                callback: U,
                priorityLevel: A,
                startTime: L,
                expirationTime: dl,
                sortIndex: -1,
              }),
              L > il
                ? ((A.sortIndex = L),
                  b(E, A),
                  g(D) === null &&
                    A === g(E) &&
                    (_l ? (Mt(J), (J = -1)) : (_l = !0), tt(mt, L - il)))
                : ((A.sortIndex = dl),
                  b(D, A),
                  rl || bl || ((rl = !0), Ul || ((Ul = !0), zl()))),
              A
            );
          }),
          (s.unstable_shouldYield = aa),
          (s.unstable_wrapCallback = function (A) {
            var U = ul;
            return function () {
              var L = ul;
              ul = U;
              try {
                return A.apply(this, arguments);
              } finally {
                ul = L;
              }
            };
          }));
      })(bf)),
    bf
  );
}
var pd;
function vv() {
  return (pd || ((pd = 1), (gf.exports = yv())), gf.exports);
}
var Ef = { exports: {} },
  Zl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ud;
function hv() {
  if (Ud) return Zl;
  Ud = 1;
  var s = Tf();
  function b(D) {
    var E = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        E += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return (
      "Minified React error #" +
      D +
      "; visit " +
      E +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function g() {}
  var f = {
      d: {
        f: g,
        r: function () {
          throw Error(b(522));
        },
        D: g,
        C: g,
        L: g,
        m: g,
        X: g,
        S: g,
        M: g,
      },
      p: 0,
      findDOMNode: null,
    },
    M = Symbol.for("react.portal");
  function N(D, E, j) {
    var C =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: M,
      key: C == null ? null : "" + C,
      children: D,
      containerInfo: E,
      implementation: j,
    };
  }
  var R = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(D, E) {
    if (D === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return (
    (Zl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    (Zl.createPortal = function (D, E) {
      var j =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
        throw Error(b(299));
      return N(D, E, null, j);
    }),
    (Zl.flushSync = function (D) {
      var E = R.T,
        j = f.p;
      try {
        if (((R.T = null), (f.p = 2), D)) return D();
      } finally {
        ((R.T = E), (f.p = j), f.d.f());
      }
    }),
    (Zl.preconnect = function (D, E) {
      typeof D == "string" &&
        (E
          ? ((E = E.crossOrigin),
            (E =
              typeof E == "string"
                ? E === "use-credentials"
                  ? E
                  : ""
                : void 0))
          : (E = null),
        f.d.C(D, E));
    }),
    (Zl.prefetchDNS = function (D) {
      typeof D == "string" && f.d.D(D);
    }),
    (Zl.preinit = function (D, E) {
      if (typeof D == "string" && E && typeof E.as == "string") {
        var j = E.as,
          C = p(j, E.crossOrigin),
          ul = typeof E.integrity == "string" ? E.integrity : void 0,
          bl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
        j === "style"
          ? f.d.S(D, typeof E.precedence == "string" ? E.precedence : void 0, {
              crossOrigin: C,
              integrity: ul,
              fetchPriority: bl,
            })
          : j === "script" &&
            f.d.X(D, {
              crossOrigin: C,
              integrity: ul,
              fetchPriority: bl,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
      }
    }),
    (Zl.preinitModule = function (D, E) {
      if (typeof D == "string")
        if (typeof E == "object" && E !== null) {
          if (E.as == null || E.as === "script") {
            var j = p(E.as, E.crossOrigin);
            f.d.M(D, {
              crossOrigin: j,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
          }
        } else E == null && f.d.M(D);
    }),
    (Zl.preload = function (D, E) {
      if (
        typeof D == "string" &&
        typeof E == "object" &&
        E !== null &&
        typeof E.as == "string"
      ) {
        var j = E.as,
          C = p(j, E.crossOrigin);
        f.d.L(D, j, {
          crossOrigin: C,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          type: typeof E.type == "string" ? E.type : void 0,
          fetchPriority:
            typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
          referrerPolicy:
            typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
          imageSrcSet:
            typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
          media: typeof E.media == "string" ? E.media : void 0,
        });
      }
    }),
    (Zl.preloadModule = function (D, E) {
      if (typeof D == "string")
        if (E) {
          var j = p(E.as, E.crossOrigin);
          f.d.m(D, {
            as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
            crossOrigin: j,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          });
        } else f.d.m(D);
    }),
    (Zl.requestFormReset = function (D) {
      f.d.r(D);
    }),
    (Zl.unstable_batchedUpdates = function (D, E) {
      return D(E);
    }),
    (Zl.useFormState = function (D, E, j) {
      return R.H.useFormState(D, E, j);
    }),
    (Zl.useFormStatus = function () {
      return R.H.useHostTransitionStatus();
    }),
    (Zl.version = "19.2.8"),
    Zl
  );
}
var Rd;
function rv() {
  if (Rd) return Ef.exports;
  Rd = 1;
  function s() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (b) {
        console.error(b);
      }
  }
  return (s(), (Ef.exports = hv()), Ef.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cd;
function Sv() {
  if (Cd) return De;
  Cd = 1;
  var s = vv(),
    b = Tf(),
    g = rv();
  function f(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function M(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function N(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return;) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function R(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function p(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function D(l) {
    if (N(l) !== l) throw Error(f(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = N(l)), t === null)) throw Error(f(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ;) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((u = e.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n;) {
          if (n === a) return (D(e), l);
          if (n === u) return (D(e), t);
          n = n.sibling;
        }
        throw Error(f(188));
      }
      if (a.return !== u.return) ((a = e), (u = n));
      else {
        for (var c = !1, i = e.child; i;) {
          if (i === a) {
            ((c = !0), (a = e), (u = n));
            break;
          }
          if (i === u) {
            ((c = !0), (u = e), (a = n));
            break;
          }
          i = i.sibling;
        }
        if (!c) {
          for (i = n.child; i;) {
            if (i === a) {
              ((c = !0), (a = n), (u = e));
              break;
            }
            if (i === u) {
              ((c = !0), (u = n), (a = e));
              break;
            }
            i = i.sibling;
          }
          if (!c) throw Error(f(189));
        }
      }
      if (a.alternate !== u) throw Error(f(190));
    }
    if (a.tag !== 3) throw Error(f(188));
    return a.stateNode.current === a ? l : t;
  }
  function j(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null;) {
      if (((t = j(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var C = Object.assign,
    ul = Symbol.for("react.element"),
    bl = Symbol.for("react.transitional.element"),
    rl = Symbol.for("react.portal"),
    _l = Symbol.for("react.fragment"),
    Ot = Symbol.for("react.strict_mode"),
    Ll = Symbol.for("react.profiler"),
    Mt = Symbol.for("react.consumer"),
    Cl = Symbol.for("react.context"),
    Bl = Symbol.for("react.forward_ref"),
    mt = Symbol.for("react.suspense"),
    Ul = Symbol.for("react.suspense_list"),
    J = Symbol.for("react.memo"),
    Ql = Symbol.for("react.lazy"),
    Pl = Symbol.for("react.activity"),
    aa = Symbol.for("react.memo_cache_sentinel"),
    P = Symbol.iterator;
  function zl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (P && l[P]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var yt = Symbol.for("react.client.reference");
  function lt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === yt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case _l:
        return "Fragment";
      case Ll:
        return "Profiler";
      case Ot:
        return "StrictMode";
      case mt:
        return "Suspense";
      case Ul:
        return "SuspenseList";
      case Pl:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case rl:
          return "Portal";
        case Cl:
          return l.displayName || "Context";
        case Mt:
          return (l._context.displayName || "Context") + ".Consumer";
        case Bl:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case J:
          return (
            (t = l.displayName || null),
            t !== null ? t : lt(l.type) || "Memo"
          );
        case Ql:
          ((t = l._payload), (l = l._init));
          try {
            return lt(l(t));
          } catch {}
      }
    return null;
  }
  var tt = Array.isArray,
    A = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    L = { pending: !1, data: null, method: null, action: null },
    il = [],
    dl = -1;
  function m(l) {
    return { current: l };
  }
  function O(l) {
    0 > dl || ((l.current = il[dl]), (il[dl] = null), dl--);
  }
  function H(l, t) {
    (dl++, (il[dl] = l.current), (l.current = t));
  }
  var B = m(null),
    Z = m(null),
    w = m(null),
    el = m(null);
  function Vl(l, t) {
    switch ((H(w, t), H(Z, l), H(B, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? w0(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = w0(t)), (l = $0(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (O(B), H(B, l));
  }
  function El() {
    (O(B), O(Z), O(w));
  }
  function Yu(l) {
    l.memoizedState !== null && H(el, l);
    var t = B.current,
      a = $0(t, l.type);
    t !== a && (H(Z, l), H(B, a));
  }
  function Ue(l) {
    (Z.current === l && (O(B), O(Z)),
      el.current === l && (O(el), (_e._currentValue = L)));
  }
  var Fn, Af;
  function Da(l) {
    if (Fn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((Fn = (t && t[1]) || ""),
          (Af =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Fn +
      l +
      Af
    );
  }
  var kn = !1;
  function In(l, t) {
    if (!l || kn) return "";
    kn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(z, []);
                } catch (S) {
                  var r = S;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (S) {
                  r = S;
                }
                l.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (S) {
                r = S;
              }
              (z = l()) &&
                typeof z.catch == "function" &&
                z.catch(function () {});
            }
          } catch (S) {
            if (S && r && typeof S.stack == "string") return [S.stack, r.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name",
      );
      e &&
        e.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = u.DetermineComponentFrameRoot(),
        c = n[0],
        i = n[1];
      if (c && i) {
        var o = c.split(`
`),
          h = i.split(`
`);
        for (
          e = u = 0;
          u < o.length && !o[u].includes("DetermineComponentFrameRoot");
        )
          u++;
        for (; e < h.length && !h[e].includes("DetermineComponentFrameRoot");)
          e++;
        if (u === o.length || e === h.length)
          for (
            u = o.length - 1, e = h.length - 1;
            1 <= u && 0 <= e && o[u] !== h[e];
          )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (o[u] !== h[e]) {
            if (u !== 1 || e !== 1)
              do
                if ((u--, e--, 0 > e || o[u] !== h[e])) {
                  var T =
                    `
` + o[u].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      T.includes("<anonymous>") &&
                      (T = T.replace("<anonymous>", l.displayName)),
                    T
                  );
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      ((kn = !1), (Error.prepareStackTrace = a));
    }
    return (a = l ? l.displayName || l.name : "") ? Da(a) : "";
  }
  function Xd(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Da(l.type);
      case 16:
        return Da("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? Da("Suspense Fallback")
          : Da("Suspense");
      case 19:
        return Da("SuspenseList");
      case 0:
      case 15:
        return In(l.type, !1);
      case 11:
        return In(l.type.render, !1);
      case 1:
        return In(l.type, !0);
      case 31:
        return Da("Activity");
      default:
        return "";
    }
  }
  function _f(l) {
    try {
      var t = "",
        a = null;
      do ((t += Xd(l, a)), (a = l), (l = l.return));
      while (l);
      return t;
    } catch (u) {
      return (
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack
      );
    }
  }
  var Pn = Object.prototype.hasOwnProperty,
    lc = s.unstable_scheduleCallback,
    tc = s.unstable_cancelCallback,
    Ld = s.unstable_shouldYield,
    Qd = s.unstable_requestPaint,
    at = s.unstable_now,
    Zd = s.unstable_getCurrentPriorityLevel,
    zf = s.unstable_ImmediatePriority,
    Of = s.unstable_UserBlockingPriority,
    Re = s.unstable_NormalPriority,
    Vd = s.unstable_LowPriority,
    Mf = s.unstable_IdlePriority,
    Kd = s.log,
    Jd = s.unstable_setDisableYieldValue,
    Bu = null,
    ut = null;
  function ua(l) {
    if (
      (typeof Kd == "function" && Jd(l),
      ut && typeof ut.setStrictMode == "function")
    )
      try {
        ut.setStrictMode(Bu, l);
      } catch {}
  }
  var et = Math.clz32 ? Math.clz32 : Wd,
    wd = Math.log,
    $d = Math.LN2;
  function Wd(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((wd(l) / $d) | 0)) | 0);
  }
  var Ce = 256,
    He = 262144,
    Ye = 4194304;
  function pa(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Be(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0,
      n = l.suspendedLanes,
      c = l.pingedLanes;
    l = l.warmLanes;
    var i = u & 134217727;
    return (
      i !== 0
        ? ((u = i & ~n),
          u !== 0
            ? (e = pa(u))
            : ((c &= i),
              c !== 0
                ? (e = pa(c))
                : a || ((a = i & ~l), a !== 0 && (e = pa(a)))))
        : ((i = u & ~n),
          i !== 0
            ? (e = pa(i))
            : c !== 0
              ? (e = pa(c))
              : a || ((a = u & ~l), a !== 0 && (e = pa(a)))),
      e === 0
        ? 0
        : t !== 0 &&
            t !== e &&
            (t & n) === 0 &&
            ((n = e & -e),
            (a = t & -t),
            n >= a || (n === 32 && (a & 4194048) !== 0))
          ? t
          : e
    );
  }
  function qu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Fd(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Nf() {
    var l = Ye;
    return ((Ye <<= 1), (Ye & 62914560) === 0 && (Ye = 4194304), l);
  }
  function ac(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function ju(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function kd(l, t, a, u, e, n) {
    var c = l.pendingLanes;
    ((l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0));
    var i = l.entanglements,
      o = l.expirationTimes,
      h = l.hiddenUpdates;
    for (a = c & ~a; 0 < a;) {
      var T = 31 - et(a),
        z = 1 << T;
      ((i[T] = 0), (o[T] = -1));
      var r = h[T];
      if (r !== null)
        for (h[T] = null, T = 0; T < r.length; T++) {
          var S = r[T];
          S !== null && (S.lane &= -536870913);
        }
      a &= ~z;
    }
    (u !== 0 && Df(l, u, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t)));
  }
  function Df(l, t, a) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var u = 31 - et(t);
    ((l.entangledLanes |= t),
      (l.entanglements[u] = l.entanglements[u] | 1073741824 | (a & 261930)));
  }
  function pf(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a;) {
      var u = 31 - et(a),
        e = 1 << u;
      ((e & t) | (l[u] & t) && (l[u] |= t), (a &= ~e));
    }
  }
  function Uf(l, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : uc(a)),
      (a & (l.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function uc(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function ec(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Rf() {
    var l = U.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : Sd(l.type));
  }
  function Cf(l, t) {
    var a = U.p;
    try {
      return ((U.p = l), t());
    } finally {
      U.p = a;
    }
  }
  var ea = Math.random().toString(36).slice(2),
    ql = "__reactFiber$" + ea,
    Jl = "__reactProps$" + ea,
    Fa = "__reactContainer$" + ea,
    nc = "__reactEvents$" + ea,
    Id = "__reactListeners$" + ea,
    Pd = "__reactHandles$" + ea,
    Hf = "__reactResources$" + ea,
    Gu = "__reactMarker$" + ea;
  function cc(l) {
    (delete l[ql], delete l[Jl], delete l[nc], delete l[Id], delete l[Pd]);
  }
  function ka(l) {
    var t = l[ql];
    if (t) return t;
    for (var a = l.parentNode; a;) {
      if ((t = a[Fa] || a[ql])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = td(l); l !== null;) {
            if ((a = l[ql])) return a;
            l = td(l);
          }
        return t;
      }
      ((l = a), (a = l.parentNode));
    }
    return null;
  }
  function Ia(l) {
    if ((l = l[ql] || l[Fa])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function xu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(f(33));
  }
  function Pa(l) {
    var t = l[Hf];
    return (
      t ||
        (t = l[Hf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Hl(l) {
    l[Gu] = !0;
  }
  var Yf = new Set(),
    Bf = {};
  function Ua(l, t) {
    (lu(l, t), lu(l + "Capture", t));
  }
  function lu(l, t) {
    for (Bf[l] = t, l = 0; l < t.length; l++) Yf.add(t[l]);
  }
  var lm = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    qf = {},
    jf = {};
  function tm(l) {
    return Pn.call(jf, l)
      ? !0
      : Pn.call(qf, l)
        ? !1
        : lm.test(l)
          ? (jf[l] = !0)
          : ((qf[l] = !0), !1);
  }
  function qe(l, t, a) {
    if (tm(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function je(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Bt(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  function vt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Gf(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function am(l, t, a) {
    var u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof u < "u" &&
      typeof u.get == "function" &&
      typeof u.set == "function"
    ) {
      var e = u.get,
        n = u.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (c) {
            ((a = "" + c), n.call(this, c));
          },
        }),
        Object.defineProperty(l, t, { enumerable: u.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function ic(l) {
    if (!l._valueTracker) {
      var t = Gf(l) ? "checked" : "value";
      l._valueTracker = am(l, t, "" + l[t]);
    }
  }
  function xf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      u = "";
    return (
      l && (u = Gf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = u),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function Ge(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var um = /[\n"\\]/g;
  function ht(l) {
    return l.replace(um, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function fc(l, t, a, u, e, n, c, i) {
    ((l.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + vt(t))
          : l.value !== "" + vt(t) && (l.value = "" + vt(t))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      t != null
        ? sc(l, c, vt(t))
        : a != null
          ? sc(l, c, vt(a))
          : u != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.name = "" + vt(i))
        : l.removeAttribute("name"));
  }
  function Xf(l, t, a, u, e, n, c, i) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        ic(l);
        return;
      }
      ((a = a != null ? "" + vt(a) : ""),
        (t = t != null ? "" + vt(t) : a),
        i || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((u = u ?? e),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (l.checked = i ? l.checked : !!u),
      (l.defaultChecked = !!u),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c),
      ic(l));
  }
  function sc(l, t, a) {
    (t === "number" && Ge(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function tu(l, t, a, u) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        ((e = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== e && (l[a].selected = e),
          e && u && (l[a].defaultSelected = !0));
    } else {
      for (a = "" + vt(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          ((l[e].selected = !0), u && (l[e].defaultSelected = !0));
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Lf(l, t, a) {
    if (
      t != null &&
      ((t = "" + vt(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + vt(a) : "";
  }
  function Qf(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(f(92));
        if (tt(u)) {
          if (1 < u.length) throw Error(f(93));
          u = u[0];
        }
        a = u;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = vt(t)),
      (l.defaultValue = a),
      (u = l.textContent),
      u === a && u !== "" && u !== null && (l.value = u),
      ic(l));
  }
  function au(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var em = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Zf(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : u
        ? l.setProperty(t, a)
        : typeof a != "number" || a === 0 || em.has(t)
          ? t === "float"
            ? (l.cssFloat = a)
            : (l[t] = ("" + a).trim())
          : (l[t] = a + "px");
  }
  function Vf(l, t, a) {
    if (t != null && typeof t != "object") throw Error(f(62));
    if (((l = l.style), a != null)) {
      for (var u in a)
        !a.hasOwnProperty(u) ||
          (t != null && t.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? l.setProperty(u, "")
            : u === "float"
              ? (l.cssFloat = "")
              : (l[u] = ""));
      for (var e in t)
        ((u = t[e]), t.hasOwnProperty(e) && a[e] !== u && Zf(l, e, u));
    } else for (var n in t) t.hasOwnProperty(n) && Zf(l, n, t[n]);
  }
  function oc(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var nm = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    cm =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function xe(l) {
    return cm.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function qt() {}
  var dc = null;
  function mc(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var uu = null,
    eu = null;
  function Kf(l) {
    var t = Ia(l);
    if (t && (l = t.stateNode)) {
      var a = l[Jl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (fc(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode;) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + ht("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Jl] || null;
                if (!e) throw Error(f(90));
                fc(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((u = a[t]), u.form === l.form && xf(u));
          }
          break l;
        case "textarea":
          Lf(l, a.value, a.defaultValue);
          break l;
        case "select":
          ((t = a.value), t != null && tu(l, !!a.multiple, t, !1));
      }
    }
  }
  var yc = !1;
  function Jf(l, t, a) {
    if (yc) return l(t, a);
    yc = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (
        ((yc = !1),
        (uu !== null || eu !== null) &&
          (Nn(), uu && ((t = uu), (l = eu), (eu = uu = null), Kf(t), l)))
      )
        for (t = 0; t < l.length; t++) Kf(l[t]);
    }
  }
  function Xu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Jl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((u = !u.disabled) ||
          ((l = l.type),
          (u = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !u));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(f(231, t, typeof a));
    return a;
  }
  var jt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    vc = !1;
  if (jt)
    try {
      var Lu = {};
      (Object.defineProperty(Lu, "passive", {
        get: function () {
          vc = !0;
        },
      }),
        window.addEventListener("test", Lu, Lu),
        window.removeEventListener("test", Lu, Lu));
    } catch {
      vc = !1;
    }
  var na = null,
    hc = null,
    Xe = null;
  function wf() {
    if (Xe) return Xe;
    var l,
      t = hc,
      a = t.length,
      u,
      e = "value" in na ? na.value : na.textContent,
      n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++);
    var c = a - l;
    for (u = 1; u <= c && t[a - u] === e[n - u]; u++);
    return (Xe = e.slice(l, 1 < u ? 1 - u : void 0));
  }
  function Le(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Qe() {
    return !0;
  }
  function $f() {
    return !1;
  }
  function wl(l) {
    function t(a, u, e, n, c) {
      ((this._reactName = a),
        (this._targetInst = e),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null));
      for (var i in l)
        l.hasOwnProperty(i) && ((a = l[i]), (this[i] = a ? a(n) : n[i]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Qe
          : $f),
        (this.isPropagationStopped = $f),
        this
      );
    }
    return (
      C(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Qe));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Qe));
        },
        persist: function () {},
        isPersistent: Qe,
      }),
      t
    );
  }
  var Ra = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ze = wl(Ra),
    Qu = C({}, Ra, { view: 0, detail: 0 }),
    im = wl(Qu),
    rc,
    Sc,
    Zu,
    Ve = C({}, Qu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: bc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Zu &&
              (Zu && l.type === "mousemove"
                ? ((rc = l.screenX - Zu.screenX), (Sc = l.screenY - Zu.screenY))
                : (Sc = rc = 0),
              (Zu = l)),
            rc);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : Sc;
      },
    }),
    Wf = wl(Ve),
    fm = C({}, Ve, { dataTransfer: 0 }),
    sm = wl(fm),
    om = C({}, Qu, { relatedTarget: 0 }),
    gc = wl(om),
    dm = C({}, Ra, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mm = wl(dm),
    ym = C({}, Ra, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    vm = wl(ym),
    hm = C({}, Ra, { data: 0 }),
    Ff = wl(hm),
    rm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Sm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    gm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function bm(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = gm[l])
        ? !!t[l]
        : !1;
  }
  function bc() {
    return bm;
  }
  var Em = C({}, Qu, {
      key: function (l) {
        if (l.key) {
          var t = rm[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Le(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? Sm[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: bc,
      charCode: function (l) {
        return l.type === "keypress" ? Le(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Le(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    Tm = wl(Em),
    Am = C({}, Ve, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    kf = wl(Am),
    _m = C({}, Qu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: bc,
    }),
    zm = wl(_m),
    Om = C({}, Ra, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Mm = wl(Om),
    Nm = C({}, Ve, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Dm = wl(Nm),
    pm = C({}, Ra, { newState: 0, oldState: 0 }),
    Um = wl(pm),
    Rm = [9, 13, 27, 32],
    Ec = jt && "CompositionEvent" in window,
    Vu = null;
  jt && "documentMode" in document && (Vu = document.documentMode);
  var Cm = jt && "TextEvent" in window && !Vu,
    If = jt && (!Ec || (Vu && 8 < Vu && 11 >= Vu)),
    Pf = " ",
    ls = !1;
  function ts(l, t) {
    switch (l) {
      case "keyup":
        return Rm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function as(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var nu = !1;
  function Hm(l, t) {
    switch (l) {
      case "compositionend":
        return as(t);
      case "keypress":
        return t.which !== 32 ? null : ((ls = !0), Pf);
      case "textInput":
        return ((l = t.data), l === Pf && ls ? null : l);
      default:
        return null;
    }
  }
  function Ym(l, t) {
    if (nu)
      return l === "compositionend" || (!Ec && ts(l, t))
        ? ((l = wf()), (Xe = hc = na = null), (nu = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return If && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Bm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function us(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Bm[l.type] : t === "textarea";
  }
  function es(l, t, a, u) {
    (uu ? (eu ? eu.push(u) : (eu = [u])) : (uu = u),
      (t = Yn(t, "onChange")),
      0 < t.length &&
        ((a = new Ze("onChange", "change", null, a, u)),
        l.push({ event: a, listeners: t })));
  }
  var Ku = null,
    Ju = null;
  function qm(l) {
    L0(l, 0);
  }
  function Ke(l) {
    var t = xu(l);
    if (xf(t)) return l;
  }
  function ns(l, t) {
    if (l === "change") return t;
  }
  var cs = !1;
  if (jt) {
    var Tc;
    if (jt) {
      var Ac = "oninput" in document;
      if (!Ac) {
        var is = document.createElement("div");
        (is.setAttribute("oninput", "return;"),
          (Ac = typeof is.oninput == "function"));
      }
      Tc = Ac;
    } else Tc = !1;
    cs = Tc && (!document.documentMode || 9 < document.documentMode);
  }
  function fs() {
    Ku && (Ku.detachEvent("onpropertychange", ss), (Ju = Ku = null));
  }
  function ss(l) {
    if (l.propertyName === "value" && Ke(Ju)) {
      var t = [];
      (es(t, Ju, l, mc(l)), Jf(qm, t));
    }
  }
  function jm(l, t, a) {
    l === "focusin"
      ? (fs(), (Ku = t), (Ju = a), Ku.attachEvent("onpropertychange", ss))
      : l === "focusout" && fs();
  }
  function Gm(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ke(Ju);
  }
  function xm(l, t) {
    if (l === "click") return Ke(t);
  }
  function Xm(l, t) {
    if (l === "input" || l === "change") return Ke(t);
  }
  function Lm(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var nt = typeof Object.is == "function" ? Object.is : Lm;
  function wu(l, t) {
    if (nt(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Pn.call(t, e) || !nt(l[e], t[e])) return !1;
    }
    return !0;
  }
  function os(l) {
    for (; l && l.firstChild;) l = l.firstChild;
    return l;
  }
  function ds(l, t) {
    var a = os(l);
    l = 0;
    for (var u; a;) {
      if (a.nodeType === 3) {
        if (((u = l + a.textContent.length), l <= t && u >= t))
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a;) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = os(a);
    }
  }
  function ms(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ms(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function ys(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Ge(l.document); t instanceof l.HTMLIFrameElement;) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Ge(l.document);
    }
    return t;
  }
  function _c(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var Qm = jt && "documentMode" in document && 11 >= document.documentMode,
    cu = null,
    zc = null,
    $u = null,
    Oc = !1;
  function vs(l, t, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Oc ||
      cu == null ||
      cu !== Ge(u) ||
      ((u = cu),
      "selectionStart" in u && _c(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      ($u && wu($u, u)) ||
        (($u = u),
        (u = Yn(zc, "onSelect")),
        0 < u.length &&
          ((t = new Ze("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: u }),
          (t.target = cu))));
  }
  function Ca(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var iu = {
      animationend: Ca("Animation", "AnimationEnd"),
      animationiteration: Ca("Animation", "AnimationIteration"),
      animationstart: Ca("Animation", "AnimationStart"),
      transitionrun: Ca("Transition", "TransitionRun"),
      transitionstart: Ca("Transition", "TransitionStart"),
      transitioncancel: Ca("Transition", "TransitionCancel"),
      transitionend: Ca("Transition", "TransitionEnd"),
    },
    Mc = {},
    hs = {};
  jt &&
    ((hs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete iu.animationend.animation,
      delete iu.animationiteration.animation,
      delete iu.animationstart.animation),
    "TransitionEvent" in window || delete iu.transitionend.transition);
  function Ha(l) {
    if (Mc[l]) return Mc[l];
    if (!iu[l]) return l;
    var t = iu[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in hs) return (Mc[l] = t[a]);
    return l;
  }
  var rs = Ha("animationend"),
    Ss = Ha("animationiteration"),
    gs = Ha("animationstart"),
    Zm = Ha("transitionrun"),
    Vm = Ha("transitionstart"),
    Km = Ha("transitioncancel"),
    bs = Ha("transitionend"),
    Es = new Map(),
    Nc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Nc.push("scrollEnd");
  function Nt(l, t) {
    (Es.set(l, t), Ua(t, [l]));
  }
  var Je =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    rt = [],
    fu = 0,
    Dc = 0;
  function we() {
    for (var l = fu, t = (Dc = fu = 0); t < l;) {
      var a = rt[t];
      rt[t++] = null;
      var u = rt[t];
      rt[t++] = null;
      var e = rt[t];
      rt[t++] = null;
      var n = rt[t];
      if (((rt[t++] = null), u !== null && e !== null)) {
        var c = u.pending;
        (c === null ? (e.next = e) : ((e.next = c.next), (c.next = e)),
          (u.pending = e));
      }
      n !== 0 && Ts(a, e, n);
    }
  }
  function $e(l, t, a, u) {
    ((rt[fu++] = l),
      (rt[fu++] = t),
      (rt[fu++] = a),
      (rt[fu++] = u),
      (Dc |= u),
      (l.lanes |= u),
      (l = l.alternate),
      l !== null && (l.lanes |= u));
  }
  function pc(l, t, a, u) {
    return ($e(l, t, a, u), We(l));
  }
  function Ya(l, t) {
    return ($e(l, null, null, t), We(l));
  }
  function Ts(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null;)
      ((n.childLanes |= a),
        (u = n.alternate),
        u !== null && (u.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        e &&
          t !== null &&
          ((e = 31 - et(a)),
          (l = n.hiddenUpdates),
          (u = l[e]),
          u === null ? (l[e] = [t]) : u.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function We(l) {
    if (50 < re) throw ((re = 0), (Gi = null), Error(f(185)));
    for (var t = l.return; t !== null;) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var su = {};
  function Jm(l, t, a, u) {
    ((this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ct(l, t, a, u) {
    return new Jm(l, t, a, u);
  }
  function Uc(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function Gt(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = ct(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function As(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Fe(l, t, a, u, e, n) {
    var c = 0;
    if (((u = l), typeof l == "function")) Uc(l) && (c = 1);
    else if (typeof l == "string")
      c = ky(l, a, B.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case Pl:
          return (
            (l = ct(31, a, t, e)),
            (l.elementType = Pl),
            (l.lanes = n),
            l
          );
        case _l:
          return Ba(a.children, e, n, t);
        case Ot:
          ((c = 8), (e |= 24));
          break;
        case Ll:
          return (
            (l = ct(12, a, t, e | 2)),
            (l.elementType = Ll),
            (l.lanes = n),
            l
          );
        case mt:
          return (
            (l = ct(13, a, t, e)),
            (l.elementType = mt),
            (l.lanes = n),
            l
          );
        case Ul:
          return (
            (l = ct(19, a, t, e)),
            (l.elementType = Ul),
            (l.lanes = n),
            l
          );
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Cl:
                c = 10;
                break l;
              case Mt:
                c = 9;
                break l;
              case Bl:
                c = 11;
                break l;
              case J:
                c = 14;
                break l;
              case Ql:
                ((c = 16), (u = null));
                break l;
            }
          ((c = 29),
            (a = Error(f(130, l === null ? "null" : typeof l, ""))),
            (u = null));
      }
    return (
      (t = ct(c, a, t, e)),
      (t.elementType = l),
      (t.type = u),
      (t.lanes = n),
      t
    );
  }
  function Ba(l, t, a, u) {
    return ((l = ct(7, l, u, t)), (l.lanes = a), l);
  }
  function Rc(l, t, a) {
    return ((l = ct(6, l, null, t)), (l.lanes = a), l);
  }
  function _s(l) {
    var t = ct(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function Cc(l, t, a) {
    return (
      (t = ct(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var zs = new WeakMap();
  function St(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = zs.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: _f(t) }), zs.set(l, t), t);
    }
    return { value: l, source: t, stack: _f(t) };
  }
  var ou = [],
    du = 0,
    ke = null,
    Wu = 0,
    gt = [],
    bt = 0,
    ca = null,
    Ut = 1,
    Rt = "";
  function xt(l, t) {
    ((ou[du++] = Wu), (ou[du++] = ke), (ke = l), (Wu = t));
  }
  function Os(l, t, a) {
    ((gt[bt++] = Ut), (gt[bt++] = Rt), (gt[bt++] = ca), (ca = l));
    var u = Ut;
    l = Rt;
    var e = 32 - et(u) - 1;
    ((u &= ~(1 << e)), (a += 1));
    var n = 32 - et(t) + e;
    if (30 < n) {
      var c = e - (e % 5);
      ((n = (u & ((1 << c) - 1)).toString(32)),
        (u >>= c),
        (e -= c),
        (Ut = (1 << (32 - et(t) + e)) | (a << e) | u),
        (Rt = n + l));
    } else ((Ut = (1 << n) | (a << e) | u), (Rt = l));
  }
  function Hc(l) {
    l.return !== null && (xt(l, 1), Os(l, 1, 0));
  }
  function Yc(l) {
    for (; l === ke;)
      ((ke = ou[--du]), (ou[du] = null), (Wu = ou[--du]), (ou[du] = null));
    for (; l === ca;)
      ((ca = gt[--bt]),
        (gt[bt] = null),
        (Rt = gt[--bt]),
        (gt[bt] = null),
        (Ut = gt[--bt]),
        (gt[bt] = null));
  }
  function Ms(l, t) {
    ((gt[bt++] = Ut),
      (gt[bt++] = Rt),
      (gt[bt++] = ca),
      (Ut = t.id),
      (Rt = t.overflow),
      (ca = l));
  }
  var jl = null,
    yl = null,
    I = !1,
    ia = null,
    Et = !1,
    Bc = Error(f(519));
  function fa(l) {
    var t = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Fu(St(t, l)), Bc);
  }
  function Ns(l) {
    var t = l.stateNode,
      a = l.type,
      u = l.memoizedProps;
    switch (((t[ql] = l), (t[Jl] = u), a)) {
      case "dialog":
        (W("cancel", t), W("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        W("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ge.length; a++) W(ge[a], t);
        break;
      case "source":
        W("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (W("error", t), W("load", t));
        break;
      case "details":
        W("toggle", t);
        break;
      case "input":
        (W("invalid", t),
          Xf(
            t,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0,
          ));
        break;
      case "select":
        W("invalid", t);
        break;
      case "textarea":
        (W("invalid", t), Qf(t, u.value, u.defaultValue, u.children));
    }
    ((a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      K0(t.textContent, a)
        ? (u.popover != null && (W("beforetoggle", t), W("toggle", t)),
          u.onScroll != null && W("scroll", t),
          u.onScrollEnd != null && W("scrollend", t),
          u.onClick != null && (t.onclick = qt),
          (t = !0))
        : (t = !1),
      t || fa(l, !0));
  }
  function Ds(l) {
    for (jl = l.return; jl;)
      switch (jl.tag) {
        case 5:
        case 31:
        case 13:
          Et = !1;
          return;
        case 27:
        case 3:
          Et = !0;
          return;
        default:
          jl = jl.return;
      }
  }
  function mu(l) {
    if (l !== jl) return !1;
    if (!I) return (Ds(l), (I = !0), !1);
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Pi(l.type, l.memoizedProps))),
        (a = !a)),
      a && yl && fa(l),
      Ds(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(f(317));
      yl = ld(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(f(317));
      yl = ld(l);
    } else
      t === 27
        ? ((t = yl), Aa(l.type) ? ((l = ef), (ef = null), (yl = l)) : (yl = t))
        : (yl = jl ? At(l.stateNode.nextSibling) : null);
    return !0;
  }
  function qa() {
    ((yl = jl = null), (I = !1));
  }
  function qc() {
    var l = ia;
    return (
      l !== null &&
        (kl === null ? (kl = l) : kl.push.apply(kl, l), (ia = null)),
      l
    );
  }
  function Fu(l) {
    ia === null ? (ia = [l]) : ia.push(l);
  }
  var jc = m(null),
    ja = null,
    Xt = null;
  function sa(l, t, a) {
    (H(jc, t._currentValue), (t._currentValue = a));
  }
  function Lt(l) {
    ((l._currentValue = jc.current), O(jc));
  }
  function Gc(l, t, a) {
    for (; l !== null;) {
      var u = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), u !== null && (u.childLanes |= t))
          : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function xc(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null;) {
      var n = e.dependencies;
      if (n !== null) {
        var c = e.child;
        n = n.firstContext;
        l: for (; n !== null;) {
          var i = n;
          n = e;
          for (var o = 0; o < t.length; o++)
            if (i.context === t[o]) {
              ((n.lanes |= a),
                (i = n.alternate),
                i !== null && (i.lanes |= a),
                Gc(n.return, a, l),
                u || (c = null));
              break l;
            }
          n = i.next;
        }
      } else if (e.tag === 18) {
        if (((c = e.return), c === null)) throw Error(f(341));
        ((c.lanes |= a),
          (n = c.alternate),
          n !== null && (n.lanes |= a),
          Gc(c, a, l),
          (c = null));
      } else c = e.child;
      if (c !== null) c.return = e;
      else
        for (c = e; c !== null;) {
          if (c === l) {
            c = null;
            break;
          }
          if (((e = c.sibling), e !== null)) {
            ((e.return = c.return), (c = e));
            break;
          }
          c = c.return;
        }
      e = c;
    }
  }
  function yu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null;) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var c = e.alternate;
        if (c === null) throw Error(f(387));
        if (((c = c.memoizedProps), c !== null)) {
          var i = e.type;
          nt(e.pendingProps.value, c.value) ||
            (l !== null ? l.push(i) : (l = [i]));
        }
      } else if (e === el.current) {
        if (((c = e.alternate), c === null)) throw Error(f(387));
        c.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(_e) : (l = [_e]));
      }
      e = e.return;
    }
    (l !== null && xc(t, l, a, u), (t.flags |= 262144));
  }
  function Ie(l) {
    for (l = l.firstContext; l !== null;) {
      if (!nt(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ga(l) {
    ((ja = l),
      (Xt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function Gl(l) {
    return ps(ja, l);
  }
  function Pe(l, t) {
    return (ja === null && Ga(l), ps(l, t));
  }
  function ps(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Xt === null)) {
      if (l === null) throw Error(f(308));
      ((Xt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else Xt = Xt.next = t;
    return a;
  }
  var wm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, u) {
                  l.push(u);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                }));
            };
          },
    $m = s.unstable_scheduleCallback,
    Wm = s.unstable_NormalPriority,
    Ol = {
      $$typeof: Cl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Xc() {
    return { controller: new wm(), data: new Map(), refCount: 0 };
  }
  function ku(l) {
    (l.refCount--,
      l.refCount === 0 &&
        $m(Wm, function () {
          l.controller.abort();
        }));
  }
  var Iu = null,
    Lc = 0,
    vu = 0,
    hu = null;
  function Fm(l, t) {
    if (Iu === null) {
      var a = (Iu = []);
      ((Lc = 0),
        (vu = Vi()),
        (hu = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        }));
    }
    return (Lc++, t.then(Us, Us), t);
  }
  function Us() {
    if (--Lc === 0 && Iu !== null) {
      hu !== null && (hu.status = "fulfilled");
      var l = Iu;
      ((Iu = null), (vu = 0), (hu = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function km(l, t) {
    var a = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          a.push(e);
        },
      };
    return (
      l.then(
        function () {
          ((u.status = "fulfilled"), (u.value = t));
          for (var e = 0; e < a.length; e++) (0, a[e])(t);
        },
        function (e) {
          for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
            (0, a[e])(void 0);
        },
      ),
      u
    );
  }
  var Rs = A.S;
  A.S = function (l, t) {
    ((h0 = at()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Fm(l, t),
      Rs !== null && Rs(l, t));
  };
  var xa = m(null);
  function Qc() {
    var l = xa.current;
    return l !== null ? l : ml.pooledCache;
  }
  function ln(l, t) {
    t === null ? H(xa, xa.current) : H(xa, t.pool);
  }
  function Cs() {
    var l = Qc();
    return l === null ? null : { parent: Ol._currentValue, pool: l };
  }
  var ru = Error(f(460)),
    Zc = Error(f(474)),
    tn = Error(f(542)),
    an = { then: function () {} };
  function Hs(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function Ys(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(qt, qt), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), qs(l), l);
      default:
        if (typeof t.status == "string") t.then(qt, qt);
        else {
          if (((l = ml), l !== null && 100 < l.shellSuspendCounter))
            throw Error(f(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  ((e.status = "fulfilled"), (e.value = u));
                }
              },
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  ((e.status = "rejected"), (e.reason = u));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), qs(l), l);
        }
        throw ((La = t), ru);
    }
  }
  function Xa(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((La = a), ru)
        : a;
    }
  }
  var La = null;
  function Bs() {
    if (La === null) throw Error(f(459));
    var l = La;
    return ((La = null), l);
  }
  function qs(l) {
    if (l === ru || l === tn) throw Error(f(483));
  }
  var Su = null,
    Pu = 0;
  function un(l) {
    var t = Pu;
    return ((Pu += 1), Su === null && (Su = []), Ys(Su, l, t));
  }
  function le(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function en(l, t) {
    throw t.$$typeof === ul
      ? Error(f(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          f(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function js(l) {
    function t(y, d) {
      if (l) {
        var v = y.deletions;
        v === null ? ((y.deletions = [d]), (y.flags |= 16)) : v.push(d);
      }
    }
    function a(y, d) {
      if (!l) return null;
      for (; d !== null;) (t(y, d), (d = d.sibling));
      return null;
    }
    function u(y) {
      for (var d = new Map(); y !== null;)
        (y.key !== null ? d.set(y.key, y) : d.set(y.index, y), (y = y.sibling));
      return d;
    }
    function e(y, d) {
      return ((y = Gt(y, d)), (y.index = 0), (y.sibling = null), y);
    }
    function n(y, d, v) {
      return (
        (y.index = v),
        l
          ? ((v = y.alternate),
            v !== null
              ? ((v = v.index), v < d ? ((y.flags |= 67108866), d) : v)
              : ((y.flags |= 67108866), d))
          : ((y.flags |= 1048576), d)
      );
    }
    function c(y) {
      return (l && y.alternate === null && (y.flags |= 67108866), y);
    }
    function i(y, d, v, _) {
      return d === null || d.tag !== 6
        ? ((d = Rc(v, y.mode, _)), (d.return = y), d)
        : ((d = e(d, v)), (d.return = y), d);
    }
    function o(y, d, v, _) {
      var G = v.type;
      return G === _l
        ? T(y, d, v.props.children, _, v.key)
        : d !== null &&
            (d.elementType === G ||
              (typeof G == "object" &&
                G !== null &&
                G.$$typeof === Ql &&
                Xa(G) === d.type))
          ? ((d = e(d, v.props)), le(d, v), (d.return = y), d)
          : ((d = Fe(v.type, v.key, v.props, null, y.mode, _)),
            le(d, v),
            (d.return = y),
            d);
    }
    function h(y, d, v, _) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== v.containerInfo ||
        d.stateNode.implementation !== v.implementation
        ? ((d = Cc(v, y.mode, _)), (d.return = y), d)
        : ((d = e(d, v.children || [])), (d.return = y), d);
    }
    function T(y, d, v, _, G) {
      return d === null || d.tag !== 7
        ? ((d = Ba(v, y.mode, _, G)), (d.return = y), d)
        : ((d = e(d, v)), (d.return = y), d);
    }
    function z(y, d, v) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return ((d = Rc("" + d, y.mode, v)), (d.return = y), d);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case bl:
            return (
              (v = Fe(d.type, d.key, d.props, null, y.mode, v)),
              le(v, d),
              (v.return = y),
              v
            );
          case rl:
            return ((d = Cc(d, y.mode, v)), (d.return = y), d);
          case Ql:
            return ((d = Xa(d)), z(y, d, v));
        }
        if (tt(d) || zl(d))
          return ((d = Ba(d, y.mode, v, null)), (d.return = y), d);
        if (typeof d.then == "function") return z(y, un(d), v);
        if (d.$$typeof === Cl) return z(y, Pe(y, d), v);
        en(y, d);
      }
      return null;
    }
    function r(y, d, v, _) {
      var G = d !== null ? d.key : null;
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return G !== null ? null : i(y, d, "" + v, _);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case bl:
            return v.key === G ? o(y, d, v, _) : null;
          case rl:
            return v.key === G ? h(y, d, v, _) : null;
          case Ql:
            return ((v = Xa(v)), r(y, d, v, _));
        }
        if (tt(v) || zl(v)) return G !== null ? null : T(y, d, v, _, null);
        if (typeof v.then == "function") return r(y, d, un(v), _);
        if (v.$$typeof === Cl) return r(y, d, Pe(y, v), _);
        en(y, v);
      }
      return null;
    }
    function S(y, d, v, _, G) {
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return ((y = y.get(v) || null), i(d, y, "" + _, G));
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case bl:
            return (
              (y = y.get(_.key === null ? v : _.key) || null),
              o(d, y, _, G)
            );
          case rl:
            return (
              (y = y.get(_.key === null ? v : _.key) || null),
              h(d, y, _, G)
            );
          case Ql:
            return ((_ = Xa(_)), S(y, d, v, _, G));
        }
        if (tt(_) || zl(_))
          return ((y = y.get(v) || null), T(d, y, _, G, null));
        if (typeof _.then == "function") return S(y, d, v, un(_), G);
        if (_.$$typeof === Cl) return S(y, d, v, Pe(d, _), G);
        en(d, _);
      }
      return null;
    }
    function Y(y, d, v, _) {
      for (
        var G = null, ll = null, q = d, K = (d = 0), k = null;
        q !== null && K < v.length;
        K++
      ) {
        q.index > K ? ((k = q), (q = null)) : (k = q.sibling);
        var tl = r(y, q, v[K], _);
        if (tl === null) {
          q === null && (q = k);
          break;
        }
        (l && q && tl.alternate === null && t(y, q),
          (d = n(tl, d, K)),
          ll === null ? (G = tl) : (ll.sibling = tl),
          (ll = tl),
          (q = k));
      }
      if (K === v.length) return (a(y, q), I && xt(y, K), G);
      if (q === null) {
        for (; K < v.length; K++)
          ((q = z(y, v[K], _)),
            q !== null &&
              ((d = n(q, d, K)),
              ll === null ? (G = q) : (ll.sibling = q),
              (ll = q)));
        return (I && xt(y, K), G);
      }
      for (q = u(q); K < v.length; K++)
        ((k = S(q, y, K, v[K], _)),
          k !== null &&
            (l && k.alternate !== null && q.delete(k.key === null ? K : k.key),
            (d = n(k, d, K)),
            ll === null ? (G = k) : (ll.sibling = k),
            (ll = k)));
      return (
        l &&
          q.forEach(function (Na) {
            return t(y, Na);
          }),
        I && xt(y, K),
        G
      );
    }
    function x(y, d, v, _) {
      if (v == null) throw Error(f(151));
      for (
        var G = null, ll = null, q = d, K = (d = 0), k = null, tl = v.next();
        q !== null && !tl.done;
        K++, tl = v.next()
      ) {
        q.index > K ? ((k = q), (q = null)) : (k = q.sibling);
        var Na = r(y, q, tl.value, _);
        if (Na === null) {
          q === null && (q = k);
          break;
        }
        (l && q && Na.alternate === null && t(y, q),
          (d = n(Na, d, K)),
          ll === null ? (G = Na) : (ll.sibling = Na),
          (ll = Na),
          (q = k));
      }
      if (tl.done) return (a(y, q), I && xt(y, K), G);
      if (q === null) {
        for (; !tl.done; K++, tl = v.next())
          ((tl = z(y, tl.value, _)),
            tl !== null &&
              ((d = n(tl, d, K)),
              ll === null ? (G = tl) : (ll.sibling = tl),
              (ll = tl)));
        return (I && xt(y, K), G);
      }
      for (q = u(q); !tl.done; K++, tl = v.next())
        ((tl = S(q, y, K, tl.value, _)),
          tl !== null &&
            (l &&
              tl.alternate !== null &&
              q.delete(tl.key === null ? K : tl.key),
            (d = n(tl, d, K)),
            ll === null ? (G = tl) : (ll.sibling = tl),
            (ll = tl)));
      return (
        l &&
          q.forEach(function (fv) {
            return t(y, fv);
          }),
        I && xt(y, K),
        G
      );
    }
    function ol(y, d, v, _) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === _l &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case bl:
            l: {
              for (var G = v.key; d !== null;) {
                if (d.key === G) {
                  if (((G = v.type), G === _l)) {
                    if (d.tag === 7) {
                      (a(y, d.sibling),
                        (_ = e(d, v.props.children)),
                        (_.return = y),
                        (y = _));
                      break l;
                    }
                  } else if (
                    d.elementType === G ||
                    (typeof G == "object" &&
                      G !== null &&
                      G.$$typeof === Ql &&
                      Xa(G) === d.type)
                  ) {
                    (a(y, d.sibling),
                      (_ = e(d, v.props)),
                      le(_, v),
                      (_.return = y),
                      (y = _));
                    break l;
                  }
                  a(y, d);
                  break;
                } else t(y, d);
                d = d.sibling;
              }
              v.type === _l
                ? ((_ = Ba(v.props.children, y.mode, _, v.key)),
                  (_.return = y),
                  (y = _))
                : ((_ = Fe(v.type, v.key, v.props, null, y.mode, _)),
                  le(_, v),
                  (_.return = y),
                  (y = _));
            }
            return c(y);
          case rl:
            l: {
              for (G = v.key; d !== null;) {
                if (d.key === G)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === v.containerInfo &&
                    d.stateNode.implementation === v.implementation
                  ) {
                    (a(y, d.sibling),
                      (_ = e(d, v.children || [])),
                      (_.return = y),
                      (y = _));
                    break l;
                  } else {
                    a(y, d);
                    break;
                  }
                else t(y, d);
                d = d.sibling;
              }
              ((_ = Cc(v, y.mode, _)), (_.return = y), (y = _));
            }
            return c(y);
          case Ql:
            return ((v = Xa(v)), ol(y, d, v, _));
        }
        if (tt(v)) return Y(y, d, v, _);
        if (zl(v)) {
          if (((G = zl(v)), typeof G != "function")) throw Error(f(150));
          return ((v = G.call(v)), x(y, d, v, _));
        }
        if (typeof v.then == "function") return ol(y, d, un(v), _);
        if (v.$$typeof === Cl) return ol(y, d, Pe(y, v), _);
        en(y, v);
      }
      return (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
        ? ((v = "" + v),
          d !== null && d.tag === 6
            ? (a(y, d.sibling), (_ = e(d, v)), (_.return = y), (y = _))
            : (a(y, d), (_ = Rc(v, y.mode, _)), (_.return = y), (y = _)),
          c(y))
        : a(y, d);
    }
    return function (y, d, v, _) {
      try {
        Pu = 0;
        var G = ol(y, d, v, _);
        return ((Su = null), G);
      } catch (q) {
        if (q === ru || q === tn) throw q;
        var ll = ct(29, q, null, y.mode);
        return ((ll.lanes = _), (ll.return = y), ll);
      } finally {
      }
    };
  }
  var Qa = js(!0),
    Gs = js(!1),
    oa = !1;
  function Vc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Kc(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function da(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ma(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (al & 2) !== 0)) {
      var e = u.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (u.pending = t),
        (t = We(l)),
        Ts(l, null, a),
        t
      );
    }
    return ($e(l, u, t, a), We(l));
  }
  function te(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var u = t.lanes;
      ((u &= l.pendingLanes), (a |= u), (t.lanes = a), pf(l, a));
    }
  }
  function Jc(l, t) {
    var a = l.updateQueue,
      u = l.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var e = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (n === null ? (e = n = c) : (n = n.next = c), (a = a.next));
        } while (a !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      ((a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (l.updateQueue = a));
      return;
    }
    ((l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t));
  }
  var wc = !1;
  function ae() {
    if (wc) {
      var l = hu;
      if (l !== null) throw l;
    }
  }
  function ue(l, t, a, u) {
    wc = !1;
    var e = l.updateQueue;
    oa = !1;
    var n = e.firstBaseUpdate,
      c = e.lastBaseUpdate,
      i = e.shared.pending;
    if (i !== null) {
      e.shared.pending = null;
      var o = i,
        h = o.next;
      ((o.next = null), c === null ? (n = h) : (c.next = h), (c = o));
      var T = l.alternate;
      T !== null &&
        ((T = T.updateQueue),
        (i = T.lastBaseUpdate),
        i !== c &&
          (i === null ? (T.firstBaseUpdate = h) : (i.next = h),
          (T.lastBaseUpdate = o)));
    }
    if (n !== null) {
      var z = e.baseState;
      ((c = 0), (T = h = o = null), (i = n));
      do {
        var r = i.lane & -536870913,
          S = r !== i.lane;
        if (S ? (F & r) === r : (u & r) === r) {
          (r !== 0 && r === vu && (wc = !0),
            T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var Y = l,
              x = i;
            r = t;
            var ol = a;
            switch (x.tag) {
              case 1:
                if (((Y = x.payload), typeof Y == "function")) {
                  z = Y.call(ol, z, r);
                  break l;
                }
                z = Y;
                break l;
              case 3:
                Y.flags = (Y.flags & -65537) | 128;
              case 0:
                if (
                  ((Y = x.payload),
                  (r = typeof Y == "function" ? Y.call(ol, z, r) : Y),
                  r == null)
                )
                  break l;
                z = C({}, z, r);
                break l;
              case 2:
                oa = !0;
            }
          }
          ((r = i.callback),
            r !== null &&
              ((l.flags |= 64),
              S && (l.flags |= 8192),
              (S = e.callbacks),
              S === null ? (e.callbacks = [r]) : S.push(r)));
        } else
          ((S = {
            lane: r,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            T === null ? ((h = T = S), (o = z)) : (T = T.next = S),
            (c |= r));
        if (((i = i.next), i === null)) {
          if (((i = e.shared.pending), i === null)) break;
          ((S = i),
            (i = S.next),
            (S.next = null),
            (e.lastBaseUpdate = S),
            (e.shared.pending = null));
        }
      } while (!0);
      (T === null && (o = z),
        (e.baseState = o),
        (e.firstBaseUpdate = h),
        (e.lastBaseUpdate = T),
        n === null && (e.shared.lanes = 0),
        (Sa |= c),
        (l.lanes = c),
        (l.memoizedState = z));
    }
  }
  function xs(l, t) {
    if (typeof l != "function") throw Error(f(191, l));
    l.call(t);
  }
  function Xs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) xs(a[l], t);
  }
  var gu = m(null),
    nn = m(0);
  function Ls(l, t) {
    ((l = Ft), H(nn, l), H(gu, t), (Ft = l | t.baseLanes));
  }
  function $c() {
    (H(nn, Ft), H(gu, gu.current));
  }
  function Wc() {
    ((Ft = nn.current), O(gu), O(nn));
  }
  var it = m(null),
    Tt = null;
  function ya(l) {
    var t = l.alternate;
    (H(Tl, Tl.current & 1),
      H(it, l),
      Tt === null &&
        (t === null || gu.current !== null || t.memoizedState !== null) &&
        (Tt = l));
  }
  function Fc(l) {
    (H(Tl, Tl.current), H(it, l), Tt === null && (Tt = l));
  }
  function Qs(l) {
    l.tag === 22
      ? (H(Tl, Tl.current), H(it, l), Tt === null && (Tt = l))
      : va();
  }
  function va() {
    (H(Tl, Tl.current), H(it, it.current));
  }
  function ft(l) {
    (O(it), Tt === l && (Tt = null), O(Tl));
  }
  var Tl = m(0);
  function cn(l) {
    for (var t = l; t !== null;) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || af(a) || uf(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Qt = 0,
    V = null,
    fl = null,
    Ml = null,
    fn = !1,
    bu = !1,
    Za = !1,
    sn = 0,
    ee = 0,
    Eu = null,
    Im = 0;
  function Sl() {
    throw Error(f(321));
  }
  function kc(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!nt(l[a], t[a])) return !1;
    return !0;
  }
  function Ic(l, t, a, u, e, n) {
    return (
      (Qt = n),
      (V = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (A.H = l === null || l.memoizedState === null ? Mo : yi),
      (Za = !1),
      (n = a(u, e)),
      (Za = !1),
      bu && (n = Vs(t, a, u, e)),
      Zs(l),
      n
    );
  }
  function Zs(l) {
    A.H = ie;
    var t = fl !== null && fl.next !== null;
    if (((Qt = 0), (Ml = fl = V = null), (fn = !1), (ee = 0), (Eu = null), t))
      throw Error(f(300));
    l === null ||
      Nl ||
      ((l = l.dependencies), l !== null && Ie(l) && (Nl = !0));
  }
  function Vs(l, t, a, u) {
    V = l;
    var e = 0;
    do {
      if ((bu && (Eu = null), (ee = 0), (bu = !1), 25 <= e))
        throw Error(f(301));
      if (((e += 1), (Ml = fl = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((A.H = No), (n = t(a, u)));
    } while (bu);
    return n;
  }
  function Pm() {
    var l = A.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? ne(t) : t),
      (l = l.useState()[0]),
      (fl !== null ? fl.memoizedState : null) !== l && (V.flags |= 1024),
      t
    );
  }
  function Pc() {
    var l = sn !== 0;
    return ((sn = 0), l);
  }
  function li(l, t, a) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a));
  }
  function ti(l) {
    if (fn) {
      for (l = l.memoizedState; l !== null;) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      fn = !1;
    }
    ((Qt = 0), (Ml = fl = V = null), (bu = !1), (ee = sn = 0), (Eu = null));
  }
  function Kl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ml === null ? (V.memoizedState = Ml = l) : (Ml = Ml.next = l), Ml);
  }
  function Al() {
    if (fl === null) {
      var l = V.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = fl.next;
    var t = Ml === null ? V.memoizedState : Ml.next;
    if (t !== null) ((Ml = t), (fl = l));
    else {
      if (l === null)
        throw V.alternate === null ? Error(f(467)) : Error(f(310));
      ((fl = l),
        (l = {
          memoizedState: fl.memoizedState,
          baseState: fl.baseState,
          baseQueue: fl.baseQueue,
          queue: fl.queue,
          next: null,
        }),
        Ml === null ? (V.memoizedState = Ml = l) : (Ml = Ml.next = l));
    }
    return Ml;
  }
  function on() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ne(l) {
    var t = ee;
    return (
      (ee += 1),
      Eu === null && (Eu = []),
      (l = Ys(Eu, l, t)),
      (t = V),
      (Ml === null ? t.memoizedState : Ml.next) === null &&
        ((t = t.alternate),
        (A.H = t === null || t.memoizedState === null ? Mo : yi)),
      l
    );
  }
  function dn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ne(l);
      if (l.$$typeof === Cl) return Gl(l);
    }
    throw Error(f(438, String(l)));
  }
  function ai(l) {
    var t = null,
      a = V.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var u = V.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (t = {
              data: u.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = on()), (V.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = aa;
    return (t.index++, a);
  }
  function Zt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function mn(l) {
    var t = Al();
    return ui(t, fl, l);
  }
  function ui(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(f(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue,
      n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var c = e.next;
        ((e.next = n.next), (n.next = c));
      }
      ((t.baseQueue = e = n), (u.pending = null));
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var i = (c = null),
        o = null,
        h = t,
        T = !1;
      do {
        var z = h.lane & -536870913;
        if (z !== h.lane ? (F & z) === z : (Qt & z) === z) {
          var r = h.revertLane;
          if (r === 0)
            (o !== null &&
              (o = o.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: h.action,
                  hasEagerState: h.hasEagerState,
                  eagerState: h.eagerState,
                  next: null,
                }),
              z === vu && (T = !0));
          else if ((Qt & r) === r) {
            ((h = h.next), r === vu && (T = !0));
            continue;
          } else
            ((z = {
              lane: 0,
              revertLane: h.revertLane,
              gesture: null,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
              o === null ? ((i = o = z), (c = n)) : (o = o.next = z),
              (V.lanes |= r),
              (Sa |= r));
          ((z = h.action),
            Za && a(n, z),
            (n = h.hasEagerState ? h.eagerState : a(n, z)));
        } else
          ((r = {
            lane: z,
            revertLane: h.revertLane,
            gesture: h.gesture,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          }),
            o === null ? ((i = o = r), (c = n)) : (o = o.next = r),
            (V.lanes |= z),
            (Sa |= z));
        h = h.next;
      } while (h !== null && h !== t);
      if (
        (o === null ? (c = n) : (o.next = i),
        !nt(n, l.memoizedState) && ((Nl = !0), T && ((a = hu), a !== null)))
      )
        throw a;
      ((l.memoizedState = n),
        (l.baseState = c),
        (l.baseQueue = o),
        (u.lastRenderedState = n));
    }
    return (e === null && (u.lanes = 0), [l.memoizedState, u.dispatch]);
  }
  function ei(l) {
    var t = Al(),
      a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch,
      e = a.pending,
      n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var c = (e = e.next);
      do ((n = l(n, c.action)), (c = c.next));
      while (c !== e);
      (nt(n, t.memoizedState) || (Nl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n));
    }
    return [n, u];
  }
  function Ks(l, t, a) {
    var u = V,
      e = Al(),
      n = I;
    if (n) {
      if (a === void 0) throw Error(f(407));
      a = a();
    } else a = t();
    var c = !nt((fl || e).memoizedState, a);
    if (
      (c && ((e.memoizedState = a), (Nl = !0)),
      (e = e.queue),
      ii($s.bind(null, u, e, l), [l]),
      e.getSnapshot !== t || c || (Ml !== null && Ml.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        Tu(9, { destroy: void 0 }, ws.bind(null, u, e, a, t), null),
        ml === null)
      )
        throw Error(f(349));
      n || (Qt & 127) !== 0 || Js(u, t, a);
    }
    return a;
  }
  function Js(l, t, a) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = V.updateQueue),
      t === null
        ? ((t = on()), (V.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l)));
  }
  function ws(l, t, a, u) {
    ((t.value = a), (t.getSnapshot = u), Ws(t) && Fs(l));
  }
  function $s(l, t, a) {
    return a(function () {
      Ws(t) && Fs(l);
    });
  }
  function Ws(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !nt(l, a);
    } catch {
      return !0;
    }
  }
  function Fs(l) {
    var t = Ya(l, 2);
    t !== null && Il(t, l, 2);
  }
  function ni(l) {
    var t = Kl();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), Za)) {
        ua(!0);
        try {
          a();
        } finally {
          ua(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function ks(l, t, a, u) {
    return ((l.baseState = a), ui(l, fl, typeof u == "function" ? u : Zt));
  }
  function ly(l, t, a, u, e) {
    if (hn(l)) throw Error(f(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      (A.T !== null ? a(!0) : (n.isTransition = !1),
        u(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), Is(t, n))
          : ((n.next = a.next), (t.pending = a.next = n)));
    }
  }
  function Is(l, t) {
    var a = t.action,
      u = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = A.T,
        c = {};
      A.T = c;
      try {
        var i = a(e, u),
          o = A.S;
        (o !== null && o(c, i), Ps(l, t, i));
      } catch (h) {
        ci(l, t, h);
      } finally {
        (n !== null && c.types !== null && (n.types = c.types), (A.T = n));
      }
    } else
      try {
        ((n = a(e, u)), Ps(l, t, n));
      } catch (h) {
        ci(l, t, h);
      }
  }
  function Ps(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (u) {
            lo(l, t, u);
          },
          function (u) {
            return ci(l, t, u);
          },
        )
      : lo(l, t, a);
  }
  function lo(l, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      to(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), Is(l, a))));
  }
  function ci(l, t, a) {
    var u = l.pending;
    if (((l.pending = null), u !== null)) {
      u = u.next;
      do ((t.status = "rejected"), (t.reason = a), to(t), (t = t.next));
      while (t !== u);
    }
    l.action = null;
  }
  function to(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function ao(l, t) {
    return t;
  }
  function uo(l, t) {
    if (I) {
      var a = ml.formState;
      if (a !== null) {
        l: {
          var u = V;
          if (I) {
            if (yl) {
              t: {
                for (var e = yl, n = Et; e.nodeType !== 8;) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = At(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                ((n = e.data), (e = n === "F!" || n === "F" ? e : null));
              }
              if (e) {
                ((yl = At(e.nextSibling)), (u = e.data === "F!"));
                break l;
              }
            }
            fa(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return (
      (a = Kl()),
      (a.memoizedState = a.baseState = t),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ao,
        lastRenderedState: t,
      }),
      (a.queue = u),
      (a = _o.bind(null, V, u)),
      (u.dispatch = a),
      (u = ni(!1)),
      (n = mi.bind(null, V, !1, u.queue)),
      (u = Kl()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (u.queue = e),
      (a = ly.bind(null, V, e, n, a)),
      (e.dispatch = a),
      (u.memoizedState = l),
      [t, a, !1]
    );
  }
  function eo(l) {
    var t = Al();
    return no(t, fl, l);
  }
  function no(l, t, a) {
    if (
      ((t = ui(l, t, ao)[0]),
      (l = mn(Zt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var u = ne(t);
      } catch (c) {
        throw c === ru ? tn : c;
      }
    else u = t;
    t = Al();
    var e = t.queue,
      n = e.dispatch;
    return (
      a !== t.memoizedState &&
        ((V.flags |= 2048),
        Tu(9, { destroy: void 0 }, ty.bind(null, e, a), null)),
      [u, n, l]
    );
  }
  function ty(l, t) {
    l.action = t;
  }
  function co(l) {
    var t = Al(),
      a = fl;
    if (a !== null) return no(t, a, l);
    (Al(), (t = t.memoizedState), (a = Al()));
    var u = a.queue.dispatch;
    return ((a.memoizedState = l), [t, u, !1]);
  }
  function Tu(l, t, a, u) {
    return (
      (l = { tag: l, create: a, deps: u, inst: t, next: null }),
      (t = V.updateQueue),
      t === null && ((t = on()), (V.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((u = a.next), (a.next = l), (l.next = u), (t.lastEffect = l)),
      l
    );
  }
  function io() {
    return Al().memoizedState;
  }
  function yn(l, t, a, u) {
    var e = Kl();
    ((V.flags |= l),
      (e.memoizedState = Tu(
        1 | t,
        { destroy: void 0 },
        a,
        u === void 0 ? null : u,
      )));
  }
  function vn(l, t, a, u) {
    var e = Al();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    fl !== null && u !== null && kc(u, fl.memoizedState.deps)
      ? (e.memoizedState = Tu(t, n, a, u))
      : ((V.flags |= l), (e.memoizedState = Tu(1 | t, n, a, u)));
  }
  function fo(l, t) {
    yn(8390656, 8, l, t);
  }
  function ii(l, t) {
    vn(2048, 8, l, t);
  }
  function ay(l) {
    V.flags |= 4;
    var t = V.updateQueue;
    if (t === null) ((t = on()), (V.updateQueue = t), (t.events = [l]));
    else {
      var a = t.events;
      a === null ? (t.events = [l]) : a.push(l);
    }
  }
  function so(l) {
    var t = Al().memoizedState;
    return (
      ay({ ref: t, nextImpl: l }),
      function () {
        if ((al & 2) !== 0) throw Error(f(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function oo(l, t) {
    return vn(4, 2, l, t);
  }
  function mo(l, t) {
    return vn(4, 4, l, t);
  }
  function yo(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function vo(l, t, a) {
    ((a = a != null ? a.concat([l]) : null), vn(4, 4, yo.bind(null, t, l), a));
  }
  function fi() {}
  function ho(l, t) {
    var a = Al();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && kc(t, u[1]) ? u[0] : ((a.memoizedState = [l, t]), l);
  }
  function ro(l, t) {
    var a = Al();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && kc(t, u[1])) return u[0];
    if (((u = l()), Za)) {
      ua(!0);
      try {
        l();
      } finally {
        ua(!1);
      }
    }
    return ((a.memoizedState = [u, t]), u);
  }
  function si(l, t, a) {
    return a === void 0 || ((Qt & 1073741824) !== 0 && (F & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = S0()), (V.lanes |= l), (Sa |= l), a);
  }
  function So(l, t, a, u) {
    return nt(a, t)
      ? a
      : gu.current !== null
        ? ((l = si(l, a, u)), nt(l, t) || (Nl = !0), l)
        : (Qt & 42) === 0 || ((Qt & 1073741824) !== 0 && (F & 261930) === 0)
          ? ((Nl = !0), (l.memoizedState = a))
          : ((l = S0()), (V.lanes |= l), (Sa |= l), t);
  }
  function go(l, t, a, u, e) {
    var n = U.p;
    U.p = n !== 0 && 8 > n ? n : 8;
    var c = A.T,
      i = {};
    ((A.T = i), mi(l, !1, t, a));
    try {
      var o = e(),
        h = A.S;
      if (
        (h !== null && h(i, o),
        o !== null && typeof o == "object" && typeof o.then == "function")
      ) {
        var T = km(o, u);
        ce(l, t, T, dt(l));
      } else ce(l, t, u, dt(l));
    } catch (z) {
      ce(l, t, { then: function () {}, status: "rejected", reason: z }, dt());
    } finally {
      ((U.p = n),
        c !== null && i.types !== null && (c.types = i.types),
        (A.T = c));
    }
  }
  function uy() {}
  function oi(l, t, a, u) {
    if (l.tag !== 5) throw Error(f(476));
    var e = bo(l).queue;
    go(
      l,
      e,
      t,
      L,
      a === null
        ? uy
        : function () {
            return (Eo(l), a(u));
          },
    );
  }
  function bo(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: L,
      baseState: L,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: L,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Zt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function Eo(l) {
    var t = bo(l);
    (t.next === null && (t = l.alternate.memoizedState),
      ce(l, t.next.queue, {}, dt()));
  }
  function di() {
    return Gl(_e);
  }
  function To() {
    return Al().memoizedState;
  }
  function Ao() {
    return Al().memoizedState;
  }
  function ey(l) {
    for (var t = l.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = dt();
          l = da(a);
          var u = ma(t, l, a);
          (u !== null && (Il(u, t, a), te(u, t, a)),
            (t = { cache: Xc() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function ny(l, t, a) {
    var u = dt();
    ((a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      hn(l)
        ? zo(t, a)
        : ((a = pc(l, t, a, u)), a !== null && (Il(a, l, u), Oo(a, t, u))));
  }
  function _o(l, t, a) {
    var u = dt();
    ce(l, t, a, u);
  }
  function ce(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (hn(l)) zo(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var c = t.lastRenderedState,
            i = n(c, a);
          if (((e.hasEagerState = !0), (e.eagerState = i), nt(i, c)))
            return ($e(l, t, e, 0), ml === null && we(), !1);
        } catch {
        } finally {
        }
      if (((a = pc(l, t, e, u)), a !== null))
        return (Il(a, l, u), Oo(a, t, u), !0);
    }
    return !1;
  }
  function mi(l, t, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: Vi(),
        gesture: null,
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      hn(l))
    ) {
      if (t) throw Error(f(479));
    } else ((t = pc(l, a, u, 2)), t !== null && Il(t, l, 2));
  }
  function hn(l) {
    var t = l.alternate;
    return l === V || (t !== null && t === V);
  }
  function zo(l, t) {
    bu = fn = !0;
    var a = l.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t));
  }
  function Oo(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      ((u &= l.pendingLanes), (a |= u), (t.lanes = a), pf(l, a));
    }
  }
  var ie = {
    readContext: Gl,
    use: dn,
    useCallback: Sl,
    useContext: Sl,
    useEffect: Sl,
    useImperativeHandle: Sl,
    useLayoutEffect: Sl,
    useInsertionEffect: Sl,
    useMemo: Sl,
    useReducer: Sl,
    useRef: Sl,
    useState: Sl,
    useDebugValue: Sl,
    useDeferredValue: Sl,
    useTransition: Sl,
    useSyncExternalStore: Sl,
    useId: Sl,
    useHostTransitionStatus: Sl,
    useFormState: Sl,
    useActionState: Sl,
    useOptimistic: Sl,
    useMemoCache: Sl,
    useCacheRefresh: Sl,
  };
  ie.useEffectEvent = Sl;
  var Mo = {
      readContext: Gl,
      use: dn,
      useCallback: function (l, t) {
        return ((Kl().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: Gl,
      useEffect: fo,
      useImperativeHandle: function (l, t, a) {
        ((a = a != null ? a.concat([l]) : null),
          yn(4194308, 4, yo.bind(null, t, l), a));
      },
      useLayoutEffect: function (l, t) {
        return yn(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        yn(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = Kl();
        t = t === void 0 ? null : t;
        var u = l();
        if (Za) {
          ua(!0);
          try {
            l();
          } finally {
            ua(!1);
          }
        }
        return ((a.memoizedState = [u, t]), u);
      },
      useReducer: function (l, t, a) {
        var u = Kl();
        if (a !== void 0) {
          var e = a(t);
          if (Za) {
            ua(!0);
            try {
              a(t);
            } finally {
              ua(!1);
            }
          }
        } else e = t;
        return (
          (u.memoizedState = u.baseState = e),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: e,
          }),
          (u.queue = l),
          (l = l.dispatch = ny.bind(null, V, l)),
          [u.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Kl();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = ni(l);
        var t = l.queue,
          a = _o.bind(null, V, t);
        return ((t.dispatch = a), [l.memoizedState, a]);
      },
      useDebugValue: fi,
      useDeferredValue: function (l, t) {
        var a = Kl();
        return si(a, l, t);
      },
      useTransition: function () {
        var l = ni(!1);
        return (
          (l = go.bind(null, V, l.queue, !0, !1)),
          (Kl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var u = V,
          e = Kl();
        if (I) {
          if (a === void 0) throw Error(f(407));
          a = a();
        } else {
          if (((a = t()), ml === null)) throw Error(f(349));
          (F & 127) !== 0 || Js(u, t, a);
        }
        e.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (e.queue = n),
          fo($s.bind(null, u, n, l), [l]),
          (u.flags |= 2048),
          Tu(9, { destroy: void 0 }, ws.bind(null, u, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = Kl(),
          t = ml.identifierPrefix;
        if (I) {
          var a = Rt,
            u = Ut;
          ((a = (u & ~(1 << (32 - et(u) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = sn++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = Im++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: di,
      useFormState: uo,
      useActionState: uo,
      useOptimistic: function (l) {
        var t = Kl();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = mi.bind(null, V, !0, a)),
          (a.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: ai,
      useCacheRefresh: function () {
        return (Kl().memoizedState = ey.bind(null, V));
      },
      useEffectEvent: function (l) {
        var t = Kl(),
          a = { impl: l };
        return (
          (t.memoizedState = a),
          function () {
            if ((al & 2) !== 0) throw Error(f(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    yi = {
      readContext: Gl,
      use: dn,
      useCallback: ho,
      useContext: Gl,
      useEffect: ii,
      useImperativeHandle: vo,
      useInsertionEffect: oo,
      useLayoutEffect: mo,
      useMemo: ro,
      useReducer: mn,
      useRef: io,
      useState: function () {
        return mn(Zt);
      },
      useDebugValue: fi,
      useDeferredValue: function (l, t) {
        var a = Al();
        return So(a, fl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = mn(Zt)[0],
          t = Al().memoizedState;
        return [typeof l == "boolean" ? l : ne(l), t];
      },
      useSyncExternalStore: Ks,
      useId: To,
      useHostTransitionStatus: di,
      useFormState: eo,
      useActionState: eo,
      useOptimistic: function (l, t) {
        var a = Al();
        return ks(a, fl, l, t);
      },
      useMemoCache: ai,
      useCacheRefresh: Ao,
    };
  yi.useEffectEvent = so;
  var No = {
    readContext: Gl,
    use: dn,
    useCallback: ho,
    useContext: Gl,
    useEffect: ii,
    useImperativeHandle: vo,
    useInsertionEffect: oo,
    useLayoutEffect: mo,
    useMemo: ro,
    useReducer: ei,
    useRef: io,
    useState: function () {
      return ei(Zt);
    },
    useDebugValue: fi,
    useDeferredValue: function (l, t) {
      var a = Al();
      return fl === null ? si(a, l, t) : So(a, fl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = ei(Zt)[0],
        t = Al().memoizedState;
      return [typeof l == "boolean" ? l : ne(l), t];
    },
    useSyncExternalStore: Ks,
    useId: To,
    useHostTransitionStatus: di,
    useFormState: co,
    useActionState: co,
    useOptimistic: function (l, t) {
      var a = Al();
      return fl !== null
        ? ks(a, fl, l, t)
        : ((a.baseState = l), [l, a.queue.dispatch]);
    },
    useMemoCache: ai,
    useCacheRefresh: Ao,
  };
  No.useEffectEvent = so;
  function vi(l, t, a, u) {
    ((t = l.memoizedState),
      (a = a(u, t)),
      (a = a == null ? t : C({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a));
  }
  var hi = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var u = dt(),
        e = da(u);
      ((e.payload = t),
        a != null && (e.callback = a),
        (t = ma(l, e, u)),
        t !== null && (Il(t, l, u), te(t, l, u)));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var u = dt(),
        e = da(u);
      ((e.tag = 1),
        (e.payload = t),
        a != null && (e.callback = a),
        (t = ma(l, e, u)),
        t !== null && (Il(t, l, u), te(t, l, u)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = dt(),
        u = da(a);
      ((u.tag = 2),
        t != null && (u.callback = t),
        (t = ma(l, u, a)),
        t !== null && (Il(t, l, a), te(t, l, a)));
    },
  };
  function Do(l, t, a, u, e, n, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(u, n, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !wu(a, u) || !wu(e, n)
          : !0
    );
  }
  function po(l, t, a, u) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, u),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, u),
      t.state !== l && hi.enqueueReplaceState(t, t.state, null));
  }
  function Va(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = C({}, a));
      for (var e in l) a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  function Uo(l) {
    Je(l);
  }
  function Ro(l) {
    console.error(l);
  }
  function Co(l) {
    Je(l);
  }
  function rn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Ho(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function ri(l, t, a) {
    return (
      (a = da(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        rn(l, t);
      }),
      a
    );
  }
  function Yo(l) {
    return ((l = da(l)), (l.tag = 3), l);
  }
  function Bo(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      ((l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          Ho(t, a, u);
        }));
    }
    var c = a.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        (Ho(t, a, u),
          typeof e != "function" &&
            (ga === null ? (ga = new Set([this])) : ga.add(this)));
        var i = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: i !== null ? i : "",
        });
      });
  }
  function cy(l, t, a, u, e) {
    if (
      ((a.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && yu(t, a, e, !0),
        (a = it.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              Tt === null ? Dn() : a.alternate === null && gl === 0 && (gl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = e),
              u === an
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([u])) : t.add(u),
                  Li(l, u, e)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              u === an
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([u])) : a.add(u)),
                  Li(l, u, e)),
              !1
            );
        }
        throw Error(f(435, a.tag));
      }
      return (Li(l, u, e), Dn(), !1);
    }
    if (I)
      return (
        (t = it.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            u !== Bc && ((l = Error(f(422), { cause: u })), Fu(St(l, a))))
          : (u !== Bc && ((t = Error(f(423), { cause: u })), Fu(St(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (u = St(u, a)),
            (e = ri(l.stateNode, u, e)),
            Jc(l, e),
            gl !== 4 && (gl = 2)),
        !1
      );
    var n = Error(f(520), { cause: u });
    if (
      ((n = St(n, a)),
      he === null ? (he = [n]) : he.push(n),
      gl !== 4 && (gl = 2),
      t === null)
    )
      return !0;
    ((u = St(u, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = e & -e),
            (a.lanes |= l),
            (l = ri(a.stateNode, u, l)),
            Jc(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ga === null || !ga.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (e &= -e),
              (a.lanes |= e),
              (e = Yo(e)),
              Bo(e, l, a, u),
              Jc(a, e),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Si = Error(f(461)),
    Nl = !1;
  function xl(l, t, a, u) {
    t.child = l === null ? Gs(t, null, a, u) : Qa(t, l.child, a, u);
  }
  function qo(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var c = {};
      for (var i in u) i !== "ref" && (c[i] = u[i]);
    } else c = u;
    return (
      Ga(t),
      (u = Ic(l, t, a, c, n, e)),
      (i = Pc()),
      l !== null && !Nl
        ? (li(l, t, e), Vt(l, t, e))
        : (I && i && Hc(t), (t.flags |= 1), xl(l, t, u, e), t.child)
    );
  }
  function jo(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !Uc(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), Go(l, t, n, u, e))
        : ((l = Fe(a.type, null, u, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !Oi(l, e))) {
      var c = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : wu), a(c, u) && l.ref === t.ref)
      )
        return Vt(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = Gt(n, u)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function Go(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (wu(n, u) && l.ref === t.ref)
        if (((Nl = !1), (t.pendingProps = u = n), Oi(l, e)))
          (l.flags & 131072) !== 0 && (Nl = !0);
        else return ((t.lanes = l.lanes), Vt(l, t, e));
    }
    return gi(l, t, a, u, e);
  }
  function xo(l, t, a, u) {
    var e = u.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      u.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (u = t.child = l.child, e = 0; u !== null;)
            ((e = e | u.lanes | u.childLanes), (u = u.sibling));
          u = e & ~n;
        } else ((u = 0), (t.child = null));
        return Xo(l, t, n, a, u);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && ln(t, n !== null ? n.cachePool : null),
          n !== null ? Ls(t, n) : $c(),
          Qs(t));
      else
        return (
          (u = t.lanes = 536870912),
          Xo(l, t, n !== null ? n.baseLanes | a : a, a, u)
        );
    } else
      n !== null
        ? (ln(t, n.cachePool), Ls(t, n), va(), (t.memoizedState = null))
        : (l !== null && ln(t, null), $c(), va());
    return (xl(l, t, e, a), t.child);
  }
  function fe(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Xo(l, t, a, u, e) {
    var n = Qc();
    return (
      (n = n === null ? null : { parent: Ol._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: a, cachePool: n }),
      l !== null && ln(t, null),
      $c(),
      Qs(t),
      l !== null && yu(l, t, u, !0),
      (t.childLanes = e),
      null
    );
  }
  function Sn(l, t) {
    return (
      (t = bn({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function Lo(l, t, a) {
    return (
      Qa(t, l.child, null, a),
      (l = Sn(t, t.pendingProps)),
      (l.flags |= 2),
      ft(t),
      (t.memoizedState = null),
      l
    );
  }
  function iy(l, t, a) {
    var u = t.pendingProps,
      e = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (I) {
        if (u.mode === "hidden")
          return ((l = Sn(t, u)), (t.lanes = 536870912), fe(null, l));
        if (
          (Fc(t),
          (l = yl)
            ? ((l = P0(l, Et)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ca !== null ? { id: Ut, overflow: Rt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = _s(l)),
                (a.return = t),
                (t.child = a),
                (jl = t),
                (yl = null)))
            : (l = null),
          l === null)
        )
          throw fa(t);
        return ((t.lanes = 536870912), null);
      }
      return Sn(t, u);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var c = n.dehydrated;
      if ((Fc(t), e))
        if (t.flags & 256) ((t.flags &= -257), (t = Lo(l, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(f(558));
      else if (
        (Nl || yu(l, t, a, !1), (e = (a & l.childLanes) !== 0), Nl || e)
      ) {
        if (
          ((u = ml),
          u !== null && ((c = Uf(u, a)), c !== 0 && c !== n.retryLane))
        )
          throw ((n.retryLane = c), Ya(l, c), Il(u, l, c), Si);
        (Dn(), (t = Lo(l, t, a)));
      } else
        ((l = n.treeContext),
          (yl = At(c.nextSibling)),
          (jl = t),
          (I = !0),
          (ia = null),
          (Et = !1),
          l !== null && Ms(t, l),
          (t = Sn(t, u)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (l = Gt(l.child, { mode: u.mode, children: u.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function gn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(f(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function gi(l, t, a, u, e) {
    return (
      Ga(t),
      (a = Ic(l, t, a, u, void 0, e)),
      (u = Pc()),
      l !== null && !Nl
        ? (li(l, t, e), Vt(l, t, e))
        : (I && u && Hc(t), (t.flags |= 1), xl(l, t, a, e), t.child)
    );
  }
  function Qo(l, t, a, u, e, n) {
    return (
      Ga(t),
      (t.updateQueue = null),
      (a = Vs(t, u, a, e)),
      Zs(l),
      (u = Pc()),
      l !== null && !Nl
        ? (li(l, t, n), Vt(l, t, n))
        : (I && u && Hc(t), (t.flags |= 1), xl(l, t, a, n), t.child)
    );
  }
  function Zo(l, t, a, u, e) {
    if ((Ga(t), t.stateNode === null)) {
      var n = su,
        c = a.contextType;
      (typeof c == "object" && c !== null && (n = Gl(c)),
        (n = new a(u, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = hi),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = u),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Vc(t),
        (c = a.contextType),
        (n.context = typeof c == "object" && c !== null ? Gl(c) : su),
        (n.state = t.memoizedState),
        (c = a.getDerivedStateFromProps),
        typeof c == "function" && (vi(t, a, c, u), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && hi.enqueueReplaceState(n, n.state, null),
          ue(t, u, n, e),
          ae(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (u = !0));
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps,
        o = Va(a, i);
      n.props = o;
      var h = n.context,
        T = a.contextType;
      ((c = su), typeof T == "object" && T !== null && (c = Gl(T)));
      var z = a.getDerivedStateFromProps;
      ((T =
        typeof z == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (i = t.pendingProps !== i),
        T ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i || h !== c) && po(t, n, u, c)),
        (oa = !1));
      var r = t.memoizedState;
      ((n.state = r),
        ue(t, u, n, e),
        ae(),
        (h = t.memoizedState),
        i || r !== h || oa
          ? (typeof z == "function" && (vi(t, a, z, u), (h = t.memoizedState)),
            (o = oa || Do(t, a, o, u, r, h, c))
              ? (T ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = u),
                (t.memoizedState = h)),
            (n.props = u),
            (n.state = h),
            (n.context = c),
            (u = o))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (u = !1)));
    } else {
      ((n = t.stateNode),
        Kc(l, t),
        (c = t.memoizedProps),
        (T = Va(a, c)),
        (n.props = T),
        (z = t.pendingProps),
        (r = n.context),
        (h = a.contextType),
        (o = su),
        typeof h == "object" && h !== null && (o = Gl(h)),
        (i = a.getDerivedStateFromProps),
        (h =
          typeof i == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== z || r !== o) && po(t, n, u, o)),
        (oa = !1),
        (r = t.memoizedState),
        (n.state = r),
        ue(t, u, n, e),
        ae());
      var S = t.memoizedState;
      c !== z ||
      r !== S ||
      oa ||
      (l !== null && l.dependencies !== null && Ie(l.dependencies))
        ? (typeof i == "function" && (vi(t, a, i, u), (S = t.memoizedState)),
          (T =
            oa ||
            Do(t, a, T, u, r, S, o) ||
            (l !== null && l.dependencies !== null && Ie(l.dependencies)))
            ? (h ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(u, S, o),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, S, o)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === l.memoizedProps && r === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && r === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = u),
              (t.memoizedState = S)),
          (n.props = u),
          (n.state = S),
          (n.context = o),
          (u = T))
        : (typeof n.componentDidUpdate != "function" ||
            (c === l.memoizedProps && r === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && r === l.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    return (
      (n = u),
      gn(l, t),
      (u = (t.flags & 128) !== 0),
      n || u
        ? ((n = t.stateNode),
          (a =
            u && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && u
            ? ((t.child = Qa(t, l.child, null, e)),
              (t.child = Qa(t, null, a, e)))
            : xl(l, t, a, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Vt(l, t, e)),
      l
    );
  }
  function Vo(l, t, a, u) {
    return (qa(), (t.flags |= 256), xl(l, t, a, u), t.child);
  }
  var bi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Ei(l) {
    return { baseLanes: l, cachePool: Cs() };
  }
  function Ti(l, t, a) {
    return ((l = l !== null ? l.childLanes & ~a : 0), t && (l |= ot), l);
  }
  function Ko(l, t, a) {
    var u = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (Tl.current & 2) !== 0),
      c && ((e = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (I) {
        if (
          (e ? ya(t) : va(),
          (l = yl)
            ? ((l = P0(l, Et)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ca !== null ? { id: Ut, overflow: Rt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = _s(l)),
                (a.return = t),
                (t.child = a),
                (jl = t),
                (yl = null)))
            : (l = null),
          l === null)
        )
          throw fa(t);
        return (uf(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var i = u.children;
      return (
        (u = u.fallback),
        e
          ? (va(),
            (e = t.mode),
            (i = bn({ mode: "hidden", children: i }, e)),
            (u = Ba(u, e, a, null)),
            (i.return = t),
            (u.return = t),
            (i.sibling = u),
            (t.child = i),
            (u = t.child),
            (u.memoizedState = Ei(a)),
            (u.childLanes = Ti(l, c, a)),
            (t.memoizedState = bi),
            fe(null, u))
          : (ya(t), Ai(t, i))
      );
    }
    var o = l.memoizedState;
    if (o !== null && ((i = o.dehydrated), i !== null)) {
      if (n)
        t.flags & 256
          ? (ya(t), (t.flags &= -257), (t = _i(l, t, a)))
          : t.memoizedState !== null
            ? (va(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (va(),
              (i = u.fallback),
              (e = t.mode),
              (u = bn({ mode: "visible", children: u.children }, e)),
              (i = Ba(i, e, a, null)),
              (i.flags |= 2),
              (u.return = t),
              (i.return = t),
              (u.sibling = i),
              (t.child = u),
              Qa(t, l.child, null, a),
              (u = t.child),
              (u.memoizedState = Ei(a)),
              (u.childLanes = Ti(l, c, a)),
              (t.memoizedState = bi),
              (t = fe(null, u)));
      else if ((ya(t), uf(i))) {
        if (((c = i.nextSibling && i.nextSibling.dataset), c)) var h = c.dgst;
        ((c = h),
          (u = Error(f(419))),
          (u.stack = ""),
          (u.digest = c),
          Fu({ value: u, source: null, stack: null }),
          (t = _i(l, t, a)));
      } else if (
        (Nl || yu(l, t, a, !1), (c = (a & l.childLanes) !== 0), Nl || c)
      ) {
        if (
          ((c = ml),
          c !== null && ((u = Uf(c, a)), u !== 0 && u !== o.retryLane))
        )
          throw ((o.retryLane = u), Ya(l, u), Il(c, l, u), Si);
        (af(i) || Dn(), (t = _i(l, t, a)));
      } else
        af(i)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = o.treeContext),
            (yl = At(i.nextSibling)),
            (jl = t),
            (I = !0),
            (ia = null),
            (Et = !1),
            l !== null && Ms(t, l),
            (t = Ai(t, u.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (va(),
        (i = u.fallback),
        (e = t.mode),
        (o = l.child),
        (h = o.sibling),
        (u = Gt(o, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = o.subtreeFlags & 65011712),
        h !== null ? (i = Gt(h, i)) : ((i = Ba(i, e, a, null)), (i.flags |= 2)),
        (i.return = t),
        (u.return = t),
        (u.sibling = i),
        (t.child = u),
        fe(null, u),
        (u = t.child),
        (i = l.child.memoizedState),
        i === null
          ? (i = Ei(a))
          : ((e = i.cachePool),
            e !== null
              ? ((o = Ol._currentValue),
                (e = e.parent !== o ? { parent: o, pool: o } : e))
              : (e = Cs()),
            (i = { baseLanes: i.baseLanes | a, cachePool: e })),
        (u.memoizedState = i),
        (u.childLanes = Ti(l, c, a)),
        (t.memoizedState = bi),
        fe(l.child, u))
      : (ya(t),
        (a = l.child),
        (l = a.sibling),
        (a = Gt(a, { mode: "visible", children: u.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [l]), (t.flags |= 16)) : c.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function Ai(l, t) {
    return (
      (t = bn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function bn(l, t) {
    return ((l = ct(22, l, null, t)), (l.lanes = 0), l);
  }
  function _i(l, t, a) {
    return (
      Qa(t, l.child, null, a),
      (l = Ai(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Jo(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    (u !== null && (u.lanes |= t), Gc(l.return, t, a));
  }
  function zi(l, t, a, u, e, n) {
    var c = l.memoizedState;
    c === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: e,
          treeForkCount: n,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = u),
        (c.tail = a),
        (c.tailMode = e),
        (c.treeForkCount = n));
  }
  function wo(l, t, a) {
    var u = t.pendingProps,
      e = u.revealOrder,
      n = u.tail;
    u = u.children;
    var c = Tl.current,
      i = (c & 2) !== 0;
    if (
      (i ? ((c = (c & 1) | 2), (t.flags |= 128)) : (c &= 1),
      H(Tl, c),
      xl(l, t, u, a),
      (u = I ? Wu : 0),
      !i && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null;) {
        if (l.tag === 13) l.memoizedState !== null && Jo(l, a, t);
        else if (l.tag === 19) Jo(l, a, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null;) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (e) {
      case "forwards":
        for (a = t.child, e = null; a !== null;)
          ((l = a.alternate),
            l !== null && cn(l) === null && (e = a),
            (a = a.sibling));
        ((a = e),
          a === null
            ? ((e = t.child), (t.child = null))
            : ((e = a.sibling), (a.sibling = null)),
          zi(t, !1, e, a, n, u));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, e = t.child, t.child = null; e !== null;) {
          if (((l = e.alternate), l !== null && cn(l) === null)) {
            t.child = e;
            break;
          }
          ((l = e.sibling), (e.sibling = a), (a = e), (e = l));
        }
        zi(t, !0, a, null, n, u);
        break;
      case "together":
        zi(t, !1, null, null, void 0, u);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Vt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (Sa |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((yu(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(f(153));
    if (t.child !== null) {
      for (
        l = t.child, a = Gt(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (a = a.sibling = Gt(l, l.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function Oi(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Ie(l)));
  }
  function fy(l, t, a) {
    switch (t.tag) {
      case 3:
        (Vl(t, t.stateNode.containerInfo),
          sa(t, Ol, l.memoizedState.cache),
          qa());
        break;
      case 27:
      case 5:
        Yu(t);
        break;
      case 4:
        Vl(t, t.stateNode.containerInfo);
        break;
      case 10:
        sa(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Fc(t), null);
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (ya(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? Ko(l, t, a)
              : (ya(t), (l = Vt(l, t, a)), l !== null ? l.sibling : null);
        ya(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((u = (a & t.childLanes) !== 0),
          u || (yu(l, t, a, !1), (u = (a & t.childLanes) !== 0)),
          e)
        ) {
          if (u) return wo(l, t, a);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          H(Tl, Tl.current),
          u)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), xo(l, t, a, t.pendingProps));
      case 24:
        sa(t, Ol, l.memoizedState.cache);
    }
    return Vt(l, t, a);
  }
  function $o(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Nl = !0;
      else {
        if (!Oi(l, a) && (t.flags & 128) === 0) return ((Nl = !1), fy(l, t, a));
        Nl = (l.flags & 131072) !== 0;
      }
    else ((Nl = !1), I && (t.flags & 1048576) !== 0 && Os(t, Wu, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (((l = Xa(t.elementType)), (t.type = l), typeof l == "function"))
            Uc(l)
              ? ((u = Va(l, u)), (t.tag = 1), (t = Zo(null, t, l, u, a)))
              : ((t.tag = 0), (t = gi(null, t, l, u, a)));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === Bl) {
                ((t.tag = 11), (t = qo(null, t, l, u, a)));
                break l;
              } else if (e === J) {
                ((t.tag = 14), (t = jo(null, t, l, u, a)));
                break l;
              }
            }
            throw ((t = lt(l) || l), Error(f(306, t, "")));
          }
        }
        return t;
      case 0:
        return gi(l, t, t.type, t.pendingProps, a);
      case 1:
        return ((u = t.type), (e = Va(u, t.pendingProps)), Zo(l, t, u, e, a));
      case 3:
        l: {
          if ((Vl(t, t.stateNode.containerInfo), l === null))
            throw Error(f(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          ((e = n.element), Kc(l, t), ue(t, u, null, a));
          var c = t.memoizedState;
          if (
            ((u = c.cache),
            sa(t, Ol, u),
            u !== n.cache && xc(t, [Ol], a, !0),
            ae(),
            (u = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: u, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = Vo(l, t, u, a);
              break l;
            } else if (u !== e) {
              ((e = St(Error(f(424)), t)), Fu(e), (t = Vo(l, t, u, a)));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                yl = At(l.firstChild),
                  jl = t,
                  I = !0,
                  ia = null,
                  Et = !0,
                  a = Gs(t, null, u, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((qa(), u === e)) {
              t = Vt(l, t, a);
              break l;
            }
            xl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          gn(l, t),
          l === null
            ? (a = nd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : I ||
                ((a = t.type),
                (l = t.pendingProps),
                (u = Bn(w.current).createElement(a)),
                (u[ql] = t),
                (u[Jl] = l),
                Xl(u, a, l),
                Hl(u),
                (t.stateNode = u))
            : (t.memoizedState = nd(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Yu(t),
          l === null &&
            I &&
            ((u = t.stateNode = ad(t.type, t.pendingProps, w.current)),
            (jl = t),
            (Et = !0),
            (e = yl),
            Aa(t.type) ? ((ef = e), (yl = At(u.firstChild))) : (yl = e)),
          xl(l, t, t.pendingProps.children, a),
          gn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            I &&
            ((e = u = yl) &&
              ((u = Gy(u, t.type, t.pendingProps, Et)),
              u !== null
                ? ((t.stateNode = u),
                  (jl = t),
                  (yl = At(u.firstChild)),
                  (Et = !1),
                  (e = !0))
                : (e = !1)),
            e || fa(t)),
          Yu(t),
          (e = t.type),
          (n = t.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (u = n.children),
          Pi(e, n) ? (u = null) : c !== null && Pi(e, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = Ic(l, t, Pm, null, null, a)), (_e._currentValue = e)),
          gn(l, t),
          xl(l, t, u, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            I &&
            ((l = a = yl) &&
              ((a = xy(a, t.pendingProps, Et)),
              a !== null
                ? ((t.stateNode = a), (jl = t), (yl = null), (l = !0))
                : (l = !1)),
            l || fa(t)),
          null
        );
      case 13:
        return Ko(l, t, a);
      case 4:
        return (
          Vl(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          l === null ? (t.child = Qa(t, null, u, a)) : xl(l, t, u, a),
          t.child
        );
      case 11:
        return qo(l, t, t.type, t.pendingProps, a);
      case 7:
        return (xl(l, t, t.pendingProps, a), t.child);
      case 8:
        return (xl(l, t, t.pendingProps.children, a), t.child);
      case 12:
        return (xl(l, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (u = t.pendingProps),
          sa(t, t.type, u.value),
          xl(l, t, u.children, a),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (u = t.pendingProps.children),
          Ga(t),
          (e = Gl(e)),
          (u = u(e)),
          (t.flags |= 1),
          xl(l, t, u, a),
          t.child
        );
      case 14:
        return jo(l, t, t.type, t.pendingProps, a);
      case 15:
        return Go(l, t, t.type, t.pendingProps, a);
      case 19:
        return wo(l, t, a);
      case 31:
        return iy(l, t, a);
      case 22:
        return xo(l, t, a, t.pendingProps);
      case 24:
        return (
          Ga(t),
          (u = Gl(Ol)),
          l === null
            ? ((e = Qc()),
              e === null &&
                ((e = ml),
                (n = Xc()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= a),
                (e = n)),
              (t.memoizedState = { parent: u, cache: e }),
              Vc(t),
              sa(t, Ol, e))
            : ((l.lanes & a) !== 0 && (Kc(l, t), ue(t, null, null, a), ae()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== u
                ? ((e = { parent: u, cache: u }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  sa(t, Ol, u))
                : ((u = n.cache),
                  sa(t, Ol, u),
                  u !== e.cache && xc(t, [Ol], a, !0))),
          xl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(f(156, t.tag));
  }
  function Kt(l) {
    l.flags |= 4;
  }
  function Mi(l, t, a, u, e) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (e & 335544128) === e))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (T0()) l.flags |= 8192;
        else throw ((La = an), Zc);
    } else l.flags &= -16777217;
  }
  function Wo(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !od(t)))
      if (T0()) l.flags |= 8192;
      else throw ((La = an), Zc);
  }
  function En(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? Nf() : 536870912), (l.lanes |= t), (Ou |= t)));
  }
  function se(l, t) {
    if (!I)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null;)
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null;)
            (a.alternate !== null && (u = a), (a = a.sibling));
          u === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function vl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      u = 0;
    if (t)
      for (var e = l.child; e !== null;)
        ((a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags & 65011712),
          (u |= e.flags & 65011712),
          (e.return = l),
          (e = e.sibling));
    else
      for (e = l.child; e !== null;)
        ((a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags),
          (u |= e.flags),
          (e.return = l),
          (e = e.sibling));
    return ((l.subtreeFlags |= u), (l.childLanes = a), t);
  }
  function sy(l, t, a) {
    var u = t.pendingProps;
    switch ((Yc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (vl(t), null);
      case 1:
        return (vl(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          Lt(Ol),
          El(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (mu(t)
              ? Kt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), qc())),
          vl(t),
          null
        );
      case 26:
        var e = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (Kt(t),
              n !== null ? (vl(t), Wo(t, n)) : (vl(t), Mi(t, e, null, u, a)))
            : n
              ? n !== l.memoizedState
                ? (Kt(t), vl(t), Wo(t, n))
                : (vl(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== u && Kt(t),
                vl(t),
                Mi(t, e, l, u, a)),
          null
        );
      case 27:
        if (
          (Ue(t),
          (a = w.current),
          (e = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== u && Kt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(f(166));
            return (vl(t), null);
          }
          ((l = B.current),
            mu(t) ? Ns(t) : ((l = ad(e, u, a)), (t.stateNode = l), Kt(t)));
        }
        return (vl(t), null);
      case 5:
        if ((Ue(t), (e = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== u && Kt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(f(166));
            return (vl(t), null);
          }
          if (((n = B.current), mu(t))) Ns(t);
          else {
            var c = Bn(w.current);
            switch (n) {
              case 1:
                n = c.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                n = c.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    n = c.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    n = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e,
                    );
                    break;
                  case "script":
                    ((n = c.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof u.is == "string"
                        ? c.createElement("select", { is: u.is })
                        : c.createElement("select")),
                      u.multiple
                        ? (n.multiple = !0)
                        : u.size && (n.size = u.size));
                    break;
                  default:
                    n =
                      typeof u.is == "string"
                        ? c.createElement(e, { is: u.is })
                        : c.createElement(e);
                }
            }
            ((n[ql] = t), (n[Jl] = u));
            l: for (c = t.child; c !== null;) {
              if (c.tag === 5 || c.tag === 6) n.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                ((c.child.return = c), (c = c.child));
                continue;
              }
              if (c === t) break l;
              for (; c.sibling === null;) {
                if (c.return === null || c.return === t) break l;
                c = c.return;
              }
              ((c.sibling.return = c.return), (c = c.sibling));
            }
            t.stateNode = n;
            l: switch ((Xl(n, e, u), e)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break l;
              case "img":
                u = !0;
                break l;
              default:
                u = !1;
            }
            u && Kt(t);
          }
        }
        return (
          vl(t),
          Mi(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Kt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(f(166));
          if (((l = w.current), mu(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (u = null),
              (e = jl),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            ((l[ql] = t),
              (l = !!(
                l.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                K0(l.nodeValue, a)
              )),
              l || fa(t, !0));
          } else
            ((l = Bn(l).createTextNode(u)), (l[ql] = t), (t.stateNode = l));
        }
        return (vl(t), null);
      case 31:
        if (((a = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((u = mu(t)), a !== null)) {
            if (l === null) {
              if (!u) throw Error(f(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(f(557));
              l[ql] = t;
            } else
              (qa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (vl(t), (l = !1));
          } else
            ((a = qc()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = a),
              (l = !0));
          if (!l) return t.flags & 256 ? (ft(t), t) : (ft(t), null);
          if ((t.flags & 128) !== 0) throw Error(f(558));
        }
        return (vl(t), null);
      case 13:
        if (
          ((u = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = mu(t)), u !== null && u.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(f(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(f(317));
              e[ql] = t;
            } else
              (qa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (vl(t), (e = !1));
          } else
            ((e = qc()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (e = !0));
          if (!e) return t.flags & 256 ? (ft(t), t) : (ft(t), null);
        }
        return (
          ft(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = u !== null),
              (l = l !== null && l.memoizedState !== null),
              a &&
                ((u = t.child),
                (e = null),
                u.alternate !== null &&
                  u.alternate.memoizedState !== null &&
                  u.alternate.memoizedState.cachePool !== null &&
                  (e = u.alternate.memoizedState.cachePool.pool),
                (n = null),
                u.memoizedState !== null &&
                  u.memoizedState.cachePool !== null &&
                  (n = u.memoizedState.cachePool.pool),
                n !== e && (u.flags |= 2048)),
              a !== l && a && (t.child.flags |= 8192),
              En(t, t.updateQueue),
              vl(t),
              null)
        );
      case 4:
        return (El(), l === null && $i(t.stateNode.containerInfo), vl(t), null);
      case 10:
        return (Lt(t.type), vl(t), null);
      case 19:
        if ((O(Tl), (u = t.memoizedState), u === null)) return (vl(t), null);
        if (((e = (t.flags & 128) !== 0), (n = u.rendering), n === null))
          if (e) se(u, !1);
          else {
            if (gl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null;) {
                if (((n = cn(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      se(u, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      En(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;
                  )
                    (As(a, l), (a = a.sibling));
                  return (
                    H(Tl, (Tl.current & 1) | 2),
                    I && xt(t, u.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            u.tail !== null &&
              at() > On &&
              ((t.flags |= 128), (e = !0), se(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!e)
            if (((l = cn(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (e = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                En(t, l),
                se(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !I)
              )
                return (vl(t), null);
            } else
              2 * at() - u.renderingStartTime > On &&
                a !== 536870912 &&
                ((t.flags |= 128), (e = !0), se(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = u.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((l = u.tail),
            (u.rendering = l),
            (u.tail = l.sibling),
            (u.renderingStartTime = at()),
            (l.sibling = null),
            (a = Tl.current),
            H(Tl, e ? (a & 1) | 2 : a & 1),
            I && xt(t, u.treeForkCount),
            l)
          : (vl(t), null);
      case 22:
      case 23:
        return (
          ft(t),
          Wc(),
          (u = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== u && (t.flags |= 8192)
            : u && (t.flags |= 8192),
          u
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (vl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : vl(t),
          (a = t.updateQueue),
          a !== null && En(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (u = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (u = t.memoizedState.cachePool.pool),
          u !== a && (t.flags |= 2048),
          l !== null && O(xa),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Lt(Ol),
          vl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function oy(l, t) {
    switch ((Yc(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Lt(Ol),
          El(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Ue(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((ft(t), t.alternate === null)) throw Error(f(340));
          qa();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (ft(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(f(340));
          qa();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (O(Tl), null);
      case 4:
        return (El(), null);
      case 10:
        return (Lt(t.type), null);
      case 22:
      case 23:
        return (
          ft(t),
          Wc(),
          l !== null && O(xa),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (Lt(Ol), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fo(l, t) {
    switch ((Yc(t), t.tag)) {
      case 3:
        (Lt(Ol), El());
        break;
      case 26:
      case 27:
      case 5:
        Ue(t);
        break;
      case 4:
        El();
        break;
      case 31:
        t.memoizedState !== null && ft(t);
        break;
      case 13:
        ft(t);
        break;
      case 19:
        O(Tl);
        break;
      case 10:
        Lt(t.type);
        break;
      case 22:
      case 23:
        (ft(t), Wc(), l !== null && O(xa));
        break;
      case 24:
        Lt(Ol);
    }
  }
  function oe(l, t) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create,
              c = a.inst;
            ((u = n()), (c.destroy = u));
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (i) {
      cl(t, t.return, i);
    }
  }
  function ha(l, t, a) {
    try {
      var u = t.updateQueue,
        e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var c = u.inst,
              i = c.destroy;
            if (i !== void 0) {
              ((c.destroy = void 0), (e = t));
              var o = a,
                h = i;
              try {
                h();
              } catch (T) {
                cl(e, o, T);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (T) {
      cl(t, t.return, T);
    }
  }
  function ko(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Xs(t, a);
      } catch (u) {
        cl(l, l.return, u);
      }
    }
  }
  function Io(l, t, a) {
    ((a.props = Va(l.type, l.memoizedProps)), (a.state = l.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (u) {
      cl(l, t, u);
    }
  }
  function de(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(u)) : (a.current = u);
      }
    } catch (e) {
      cl(l, t, e);
    }
  }
  function Ct(l, t) {
    var a = l.ref,
      u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          cl(l, t, e);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          cl(l, t, e);
        }
      else a.current = null;
  }
  function Po(l) {
    var t = l.type,
      a = l.memoizedProps,
      u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      cl(l, l.return, e);
    }
  }
  function Ni(l, t, a) {
    try {
      var u = l.stateNode;
      (Cy(u, l.type, a, t), (u[Jl] = t));
    } catch (e) {
      cl(l, l.return, e);
    }
  }
  function l0(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && Aa(l.type)) ||
      l.tag === 4
    );
  }
  function Di(l) {
    l: for (;;) {
      for (; l.sibling === null;) {
        if (l.return === null || l0(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && Aa(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function pi(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      ((l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = qt)));
    else if (
      u !== 4 &&
      (u === 27 && Aa(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (pi(l, t, a), l = l.sibling; l !== null;)
        (pi(l, t, a), (l = l.sibling));
  }
  function Tn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      ((l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l));
    else if (
      u !== 4 &&
      (u === 27 && Aa(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (Tn(l, t, a), l = l.sibling; l !== null;)
        (Tn(l, t, a), (l = l.sibling));
  }
  function t0(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length;)
        t.removeAttributeNode(e[0]);
      (Xl(t, u, a), (t[ql] = l), (t[Jl] = a));
    } catch (n) {
      cl(l, l.return, n);
    }
  }
  var Jt = !1,
    Dl = !1,
    Ui = !1,
    a0 = typeof WeakSet == "function" ? WeakSet : Set,
    Yl = null;
  function dy(l, t) {
    if (((l = l.containerInfo), (ki = Qn), (l = ys(l)), _c(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset,
              n = u.focusNode;
            u = u.focusOffset;
            try {
              (a.nodeType, n.nodeType);
            } catch {
              a = null;
              break l;
            }
            var c = 0,
              i = -1,
              o = -1,
              h = 0,
              T = 0,
              z = l,
              r = null;
            t: for (;;) {
              for (
                var S;
                z !== a || (e !== 0 && z.nodeType !== 3) || (i = c + e),
                  z !== n || (u !== 0 && z.nodeType !== 3) || (o = c + u),
                  z.nodeType === 3 && (c += z.nodeValue.length),
                  (S = z.firstChild) !== null;
              )
                ((r = z), (z = S));
              for (;;) {
                if (z === l) break t;
                if (
                  (r === a && ++h === e && (i = c),
                  r === n && ++T === u && (o = c),
                  (S = z.nextSibling) !== null)
                )
                  break;
                ((z = r), (r = z.parentNode));
              }
              z = S;
            }
            a = i === -1 || o === -1 ? null : { start: i, end: o };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Ii = { focusedElem: l, selectionRange: a }, Qn = !1, Yl = t;
      Yl !== null;
    )
      if (
        ((t = Yl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        ((l.return = t), (Yl = l));
      else
        for (; Yl !== null;) {
          switch (((t = Yl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (a = 0; a < l.length; a++)
                  ((e = l[a]), (e.ref.impl = e.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                ((l = void 0),
                  (a = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (u = a.stateNode));
                try {
                  var Y = Va(a.type, e);
                  ((l = u.getSnapshotBeforeUpdate(Y, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = l));
                } catch (x) {
                  cl(a, a.return, x);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  tf(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      tf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(f(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (Yl = l));
            break;
          }
          Yl = t.return;
        }
  }
  function u0(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ($t(l, a), u & 4 && oe(5, a));
        break;
      case 1:
        if (($t(l, a), u & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (c) {
              cl(a, a.return, c);
            }
          else {
            var e = Va(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              cl(a, a.return, c);
            }
          }
        (u & 64 && ko(a), u & 512 && de(a, a.return));
        break;
      case 3:
        if (($t(l, a), u & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Xs(l, t);
          } catch (c) {
            cl(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && u & 4 && t0(a);
      case 26:
      case 5:
        ($t(l, a), t === null && u & 4 && Po(a), u & 512 && de(a, a.return));
        break;
      case 12:
        $t(l, a);
        break;
      case 31:
        ($t(l, a), u & 4 && c0(l, a));
        break;
      case 13:
        ($t(l, a),
          u & 4 && i0(l, a),
          u & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = Ey.bind(null, a)), Xy(l, a)))));
        break;
      case 22:
        if (((u = a.memoizedState !== null || Jt), !u)) {
          ((t = (t !== null && t.memoizedState !== null) || Dl), (e = Jt));
          var n = Dl;
          ((Jt = u),
            (Dl = t) && !n ? Wt(l, a, (a.subtreeFlags & 8772) !== 0) : $t(l, a),
            (Jt = e),
            (Dl = n));
        }
        break;
      case 30:
        break;
      default:
        $t(l, a);
    }
  }
  function e0(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), e0(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && cc(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var hl = null,
    $l = !1;
  function wt(l, t, a) {
    for (a = a.child; a !== null;) (n0(l, t, a), (a = a.sibling));
  }
  function n0(l, t, a) {
    if (ut && typeof ut.onCommitFiberUnmount == "function")
      try {
        ut.onCommitFiberUnmount(Bu, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Dl || Ct(a, t),
          wt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Dl || Ct(a, t);
        var u = hl,
          e = $l;
        (Aa(a.type) && ((hl = a.stateNode), ($l = !1)),
          wt(l, t, a),
          Ee(a.stateNode),
          (hl = u),
          ($l = e));
        break;
      case 5:
        Dl || Ct(a, t);
      case 6:
        if (
          ((u = hl),
          (e = $l),
          (hl = null),
          wt(l, t, a),
          (hl = u),
          ($l = e),
          hl !== null)
        )
          if ($l)
            try {
              (hl.nodeType === 9
                ? hl.body
                : hl.nodeName === "HTML"
                  ? hl.ownerDocument.body
                  : hl
              ).removeChild(a.stateNode);
            } catch (n) {
              cl(a, t, n);
            }
          else
            try {
              hl.removeChild(a.stateNode);
            } catch (n) {
              cl(a, t, n);
            }
        break;
      case 18:
        hl !== null &&
          ($l
            ? ((l = hl),
              k0(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                a.stateNode,
              ),
              Hu(l))
            : k0(hl, a.stateNode));
        break;
      case 4:
        ((u = hl),
          (e = $l),
          (hl = a.stateNode.containerInfo),
          ($l = !0),
          wt(l, t, a),
          (hl = u),
          ($l = e));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (ha(2, a, t), Dl || ha(4, a, t), wt(l, t, a));
        break;
      case 1:
        (Dl ||
          (Ct(a, t),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function" && Io(a, t, u)),
          wt(l, t, a));
        break;
      case 21:
        wt(l, t, a);
        break;
      case 22:
        ((Dl = (u = Dl) || a.memoizedState !== null), wt(l, t, a), (Dl = u));
        break;
      default:
        wt(l, t, a);
    }
  }
  function c0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        Hu(l);
      } catch (a) {
        cl(t, t.return, a);
      }
    }
  }
  function i0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Hu(l);
      } catch (a) {
        cl(t, t.return, a);
      }
  }
  function my(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new a0()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new a0()),
          t
        );
      default:
        throw Error(f(435, l.tag));
    }
  }
  function An(l, t) {
    var a = my(l);
    t.forEach(function (u) {
      if (!a.has(u)) {
        a.add(u);
        var e = Ty.bind(null, l, u);
        u.then(e, e);
      }
    });
  }
  function Wl(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u],
          n = l,
          c = t,
          i = c;
        l: for (; i !== null;) {
          switch (i.tag) {
            case 27:
              if (Aa(i.type)) {
                ((hl = i.stateNode), ($l = !1));
                break l;
              }
              break;
            case 5:
              ((hl = i.stateNode), ($l = !1));
              break l;
            case 3:
            case 4:
              ((hl = i.stateNode.containerInfo), ($l = !0));
              break l;
          }
          i = i.return;
        }
        if (hl === null) throw Error(f(160));
        (n0(n, c, e),
          (hl = null),
          ($l = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null;) (f0(t, l), (t = t.sibling));
  }
  var Dt = null;
  function f0(l, t) {
    var a = l.alternate,
      u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Wl(t, l),
          Fl(l),
          u & 4 && (ha(3, l, l.return), oe(3, l), ha(5, l, l.return)));
        break;
      case 1:
        (Wl(t, l),
          Fl(l),
          u & 512 && (Dl || a === null || Ct(a, a.return)),
          u & 64 &&
            Jt &&
            ((l = l.updateQueue),
            l !== null &&
              ((u = l.callbacks),
              u !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? u : a.concat(u))))));
        break;
      case 26:
        var e = Dt;
        if (
          (Wl(t, l),
          Fl(l),
          u & 512 && (Dl || a === null || Ct(a, a.return)),
          u & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((u = l.memoizedState), a === null))
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  ((u = l.type),
                    (a = l.memoizedProps),
                    (e = e.ownerDocument || e));
                  t: switch (u) {
                    case "title":
                      ((n = e.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Gu] ||
                          n[ql] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(u)),
                          e.head.insertBefore(
                            n,
                            e.querySelector("head > title"),
                          )),
                        Xl(n, u, a),
                        (n[ql] = l),
                        Hl(n),
                        (u = n));
                      break l;
                    case "link":
                      var c = fd("link", "href", e).get(u + (a.href || ""));
                      if (c) {
                        for (var i = 0; i < c.length; i++)
                          if (
                            ((n = c[i]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      ((n = e.createElement(u)),
                        Xl(n, u, a),
                        e.head.appendChild(n));
                      break;
                    case "meta":
                      if (
                        (c = fd("meta", "content", e).get(
                          u + (a.content || ""),
                        ))
                      ) {
                        for (i = 0; i < c.length; i++)
                          if (
                            ((n = c[i]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      ((n = e.createElement(u)),
                        Xl(n, u, a),
                        e.head.appendChild(n));
                      break;
                    default:
                      throw Error(f(468, u));
                  }
                  ((n[ql] = l), Hl(n), (u = n));
                }
                l.stateNode = u;
              } else sd(e, l.type, l.stateNode);
            else l.stateNode = id(e, u, l.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                u === null
                  ? sd(e, l.type, l.stateNode)
                  : id(e, u, l.memoizedProps))
              : u === null &&
                l.stateNode !== null &&
                Ni(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Wl(t, l),
          Fl(l),
          u & 512 && (Dl || a === null || Ct(a, a.return)),
          a !== null && u & 4 && Ni(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (Wl(t, l),
          Fl(l),
          u & 512 && (Dl || a === null || Ct(a, a.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            au(e, "");
          } catch (Y) {
            cl(l, l.return, Y);
          }
        }
        (u & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), Ni(l, e, a !== null ? a.memoizedProps : e)),
          u & 1024 && (Ui = !0));
        break;
      case 6:
        if ((Wl(t, l), Fl(l), u & 4)) {
          if (l.stateNode === null) throw Error(f(162));
          ((u = l.memoizedProps), (a = l.stateNode));
          try {
            a.nodeValue = u;
          } catch (Y) {
            cl(l, l.return, Y);
          }
        }
        break;
      case 3:
        if (
          ((Gn = null),
          (e = Dt),
          (Dt = qn(t.containerInfo)),
          Wl(t, l),
          (Dt = e),
          Fl(l),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Hu(t.containerInfo);
          } catch (Y) {
            cl(l, l.return, Y);
          }
        Ui && ((Ui = !1), s0(l));
        break;
      case 4:
        ((u = Dt),
          (Dt = qn(l.stateNode.containerInfo)),
          Wl(t, l),
          Fl(l),
          (Dt = u));
        break;
      case 12:
        (Wl(t, l), Fl(l));
        break;
      case 31:
        (Wl(t, l),
          Fl(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), An(l, u))));
        break;
      case 13:
        (Wl(t, l),
          Fl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (zn = at()),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), An(l, u))));
        break;
      case 22:
        e = l.memoizedState !== null;
        var o = a !== null && a.memoizedState !== null,
          h = Jt,
          T = Dl;
        if (
          ((Jt = h || e),
          (Dl = T || o),
          Wl(t, l),
          (Dl = T),
          (Jt = h),
          Fl(l),
          u & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = e ? t._visibility & -2 : t._visibility | 1,
              e && (a === null || o || Jt || Dl || Ka(l)),
              a = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                o = a = t;
                try {
                  if (((n = o.stateNode), e))
                    ((c = n.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none"));
                  else {
                    i = o.stateNode;
                    var z = o.memoizedProps.style,
                      r =
                        z != null && z.hasOwnProperty("display")
                          ? z.display
                          : null;
                    i.style.display =
                      r == null || typeof r == "boolean" ? "" : ("" + r).trim();
                  }
                } catch (Y) {
                  cl(o, o.return, Y);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                o = t;
                try {
                  o.stateNode.nodeValue = e ? "" : o.memoizedProps;
                } catch (Y) {
                  cl(o, o.return, Y);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                o = t;
                try {
                  var S = o.stateNode;
                  e ? I0(S, !0) : I0(o.stateNode, !1);
                } catch (Y) {
                  cl(o, o.return, Y);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null;) {
              if (t.return === null || t.return === l) break l;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        u & 4 &&
          ((u = l.updateQueue),
          u !== null &&
            ((a = u.retryQueue),
            a !== null && ((u.retryQueue = null), An(l, a))));
        break;
      case 19:
        (Wl(t, l),
          Fl(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), An(l, u))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Wl(t, l), Fl(l));
    }
  }
  function Fl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null;) {
          if (l0(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(f(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode,
              n = Di(l);
            Tn(l, n, e);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (au(c, ""), (a.flags &= -33));
            var i = Di(l);
            Tn(l, i, c);
            break;
          case 3:
          case 4:
            var o = a.stateNode.containerInfo,
              h = Di(l);
            pi(l, h, o);
            break;
          default:
            throw Error(f(161));
        }
      } catch (T) {
        cl(l, l.return, T);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function s0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null;) {
        var t = l;
        (s0(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling));
      }
  }
  function $t(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null;) (u0(l, t.alternate, t), (t = t.sibling));
  }
  function Ka(l) {
    for (l = l.child; l !== null;) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ha(4, t, t.return), Ka(t));
          break;
        case 1:
          Ct(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && Io(t, t.return, a),
            Ka(t));
          break;
        case 27:
          Ee(t.stateNode);
        case 26:
        case 5:
          (Ct(t, t.return), Ka(t));
          break;
        case 22:
          t.memoizedState === null && Ka(t);
          break;
        case 30:
          Ka(t);
          break;
        default:
          Ka(t);
      }
      l = l.sibling;
    }
  }
  function Wt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
      var u = t.alternate,
        e = l,
        n = t,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Wt(e, n, a), oe(4, n));
          break;
        case 1:
          if (
            (Wt(e, n, a),
            (u = n),
            (e = u.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (h) {
              cl(u, u.return, h);
            }
          if (((u = n), (e = u.updateQueue), e !== null)) {
            var i = u.stateNode;
            try {
              var o = e.shared.hiddenCallbacks;
              if (o !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < o.length; e++)
                  xs(o[e], i);
            } catch (h) {
              cl(u, u.return, h);
            }
          }
          (a && c & 64 && ko(n), de(n, n.return));
          break;
        case 27:
          t0(n);
        case 26:
        case 5:
          (Wt(e, n, a), a && u === null && c & 4 && Po(n), de(n, n.return));
          break;
        case 12:
          Wt(e, n, a);
          break;
        case 31:
          (Wt(e, n, a), a && c & 4 && c0(e, n));
          break;
        case 13:
          (Wt(e, n, a), a && c & 4 && i0(e, n));
          break;
        case 22:
          (n.memoizedState === null && Wt(e, n, a), de(n, n.return));
          break;
        case 30:
          break;
        default:
          Wt(e, n, a);
      }
      t = t.sibling;
    }
  }
  function Ri(l, t) {
    var a = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && ku(a)));
  }
  function Ci(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && ku(l)));
  }
  function pt(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) (o0(l, t, a, u), (t = t.sibling));
  }
  function o0(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (pt(l, t, a, u), e & 2048 && oe(9, t));
        break;
      case 1:
        pt(l, t, a, u);
        break;
      case 3:
        (pt(l, t, a, u),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && ku(l))));
        break;
      case 12:
        if (e & 2048) {
          (pt(l, t, a, u), (l = t.stateNode));
          try {
            var n = t.memoizedProps,
              c = n.id,
              i = n.onPostCommit;
            typeof i == "function" &&
              i(
                c,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (o) {
            cl(t, t.return, o);
          }
        } else pt(l, t, a, u);
        break;
      case 31:
        pt(l, t, a, u);
        break;
      case 13:
        pt(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        ((n = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? pt(l, t, a, u)
              : me(l, t)
            : n._visibility & 2
              ? pt(l, t, a, u)
              : ((n._visibility |= 2),
                Au(l, t, a, u, (t.subtreeFlags & 10256) !== 0 || !1)),
          e & 2048 && Ri(c, t));
        break;
      case 24:
        (pt(l, t, a, u), e & 2048 && Ci(t.alternate, t));
        break;
      default:
        pt(l, t, a, u);
    }
  }
  function Au(l, t, a, u, e) {
    for (
      e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var n = l,
        c = t,
        i = a,
        o = u,
        h = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (Au(n, c, i, o, e), oe(8, c));
          break;
        case 23:
          break;
        case 22:
          var T = c.stateNode;
          (c.memoizedState !== null
            ? T._visibility & 2
              ? Au(n, c, i, o, e)
              : me(n, c)
            : ((T._visibility |= 2), Au(n, c, i, o, e)),
            e && h & 2048 && Ri(c.alternate, c));
          break;
        case 24:
          (Au(n, c, i, o, e), e && h & 2048 && Ci(c.alternate, c));
          break;
        default:
          Au(n, c, i, o, e);
      }
      t = t.sibling;
    }
  }
  function me(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var a = l,
          u = t,
          e = u.flags;
        switch (u.tag) {
          case 22:
            (me(a, u), e & 2048 && Ri(u.alternate, u));
            break;
          case 24:
            (me(a, u), e & 2048 && Ci(u.alternate, u));
            break;
          default:
            me(a, u);
        }
        t = t.sibling;
      }
  }
  var ye = 8192;
  function _u(l, t, a) {
    if (l.subtreeFlags & ye)
      for (l = l.child; l !== null;) (d0(l, t, a), (l = l.sibling));
  }
  function d0(l, t, a) {
    switch (l.tag) {
      case 26:
        (_u(l, t, a),
          l.flags & ye &&
            l.memoizedState !== null &&
            Iy(a, Dt, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        _u(l, t, a);
        break;
      case 3:
      case 4:
        var u = Dt;
        ((Dt = qn(l.stateNode.containerInfo)), _u(l, t, a), (Dt = u));
        break;
      case 22:
        l.memoizedState === null &&
          ((u = l.alternate),
          u !== null && u.memoizedState !== null
            ? ((u = ye), (ye = 16777216), _u(l, t, a), (ye = u))
            : _u(l, t, a));
        break;
      default:
        _u(l, t, a);
    }
  }
  function m0(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function ve(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          ((Yl = u), v0(u, l));
        }
      m0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null;) (y0(l), (l = l.sibling));
  }
  function y0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (ve(l), l.flags & 2048 && ha(9, l, l.return));
        break;
      case 3:
        ve(l);
        break;
      case 12:
        ve(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), _n(l))
          : ve(l);
        break;
      default:
        ve(l);
    }
  }
  function _n(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          ((Yl = u), v0(u, l));
        }
      m0(l);
    }
    for (l = l.child; l !== null;) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (ha(8, t, t.return), _n(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), _n(t)));
          break;
        default:
          _n(t);
      }
      l = l.sibling;
    }
  }
  function v0(l, t) {
    for (; Yl !== null;) {
      var a = Yl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ha(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          ku(a.memoizedState.cache);
      }
      if (((u = a.child), u !== null)) ((u.return = a), (Yl = u));
      else
        l: for (a = l; Yl !== null;) {
          u = Yl;
          var e = u.sibling,
            n = u.return;
          if ((e0(u), u === a)) {
            Yl = null;
            break l;
          }
          if (e !== null) {
            ((e.return = n), (Yl = e));
            break l;
          }
          Yl = n;
        }
    }
  }
  var yy = {
      getCacheForType: function (l) {
        var t = Gl(Ol),
          a = t.data.get(l);
        return (a === void 0 && ((a = l()), t.data.set(l, a)), a);
      },
      cacheSignal: function () {
        return Gl(Ol).controller.signal;
      },
    },
    vy = typeof WeakMap == "function" ? WeakMap : Map,
    al = 0,
    ml = null,
    $ = null,
    F = 0,
    nl = 0,
    st = null,
    ra = !1,
    zu = !1,
    Hi = !1,
    Ft = 0,
    gl = 0,
    Sa = 0,
    Ja = 0,
    Yi = 0,
    ot = 0,
    Ou = 0,
    he = null,
    kl = null,
    Bi = !1,
    zn = 0,
    h0 = 0,
    On = 1 / 0,
    Mn = null,
    ga = null,
    Rl = 0,
    ba = null,
    Mu = null,
    kt = 0,
    qi = 0,
    ji = null,
    r0 = null,
    re = 0,
    Gi = null;
  function dt() {
    return (al & 2) !== 0 && F !== 0 ? F & -F : A.T !== null ? Vi() : Rf();
  }
  function S0() {
    if (ot === 0)
      if ((F & 536870912) === 0 || I) {
        var l = He;
        ((He <<= 1), (He & 3932160) === 0 && (He = 262144), (ot = l));
      } else ot = 536870912;
    return ((l = it.current), l !== null && (l.flags |= 32), ot);
  }
  function Il(l, t, a) {
    (((l === ml && (nl === 2 || nl === 9)) || l.cancelPendingCommit !== null) &&
      (Nu(l, 0), Ea(l, F, ot, !1)),
      ju(l, a),
      ((al & 2) === 0 || l !== ml) &&
        (l === ml &&
          ((al & 2) === 0 && (Ja |= a), gl === 4 && Ea(l, F, ot, !1)),
        Ht(l)));
  }
  function g0(l, t, a) {
    if ((al & 6) !== 0) throw Error(f(327));
    var u = (!a && (t & 127) === 0 && (t & l.expiredLanes) === 0) || qu(l, t),
      e = u ? Sy(l, t) : Xi(l, t, !0),
      n = u;
    do {
      if (e === 0) {
        zu && !u && Ea(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !hy(a))) {
          ((e = Xi(l, t, !1)), (n = !1));
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            ((c = l.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0));
          if (c !== 0) {
            t = c;
            l: {
              var i = l;
              e = he;
              var o = i.current.memoizedState.isDehydrated;
              if ((o && (Nu(i, c).flags |= 256), (c = Xi(i, c, !1)), c !== 2)) {
                if (Hi && !o) {
                  ((i.errorRecoveryDisabledLanes |= n), (Ja |= n), (e = 4));
                  break l;
                }
                ((n = kl),
                  (kl = e),
                  n !== null &&
                    (kl === null ? (kl = n) : kl.push.apply(kl, n)));
              }
              e = c;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          (Nu(l, 0), Ea(l, t, 0, !0));
          break;
        }
        l: {
          switch (((u = l), (n = e), n)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ea(u, t, ot, !ra);
              break l;
            case 2:
              kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((t & 62914560) === t && ((e = zn + 300 - at()), 10 < e)) {
            if ((Ea(u, t, ot, !ra), Be(u, 0, !0) !== 0)) break l;
            ((kt = t),
              (u.timeoutHandle = W0(
                b0.bind(
                  null,
                  u,
                  a,
                  kl,
                  Mn,
                  Bi,
                  t,
                  ot,
                  Ja,
                  Ou,
                  ra,
                  n,
                  "Throttled",
                  -0,
                  0,
                ),
                e,
              )));
            break l;
          }
          b0(u, a, kl, Mn, Bi, t, ot, Ja, Ou, ra, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ht(l);
  }
  function b0(l, t, a, u, e, n, c, i, o, h, T, z, r, S) {
    if (
      ((l.timeoutHandle = -1),
      (z = t.subtreeFlags),
      z & 8192 || (z & 16785408) === 16785408)
    ) {
      ((z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: qt,
      }),
        d0(t, n, z));
      var Y =
        (n & 62914560) === n ? zn - at() : (n & 4194048) === n ? h0 - at() : 0;
      if (((Y = Py(z, Y)), Y !== null)) {
        ((kt = n),
          (l.cancelPendingCommit = Y(
            N0.bind(null, l, t, n, a, u, e, c, i, o, T, z, null, r, S),
          )),
          Ea(l, n, c, !h));
        return;
      }
    }
    N0(l, t, n, a, u, e, c, i, o);
  }
  function hy(l) {
    for (var t = l; ;) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var u = 0; u < a.length; u++) {
          var e = a[u],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!nt(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === l) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Ea(l, t, a, u) {
    ((t &= ~Yi),
      (t &= ~Ja),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      u && (l.warmLanes |= t),
      (u = l.expirationTimes));
    for (var e = t; 0 < e;) {
      var n = 31 - et(e),
        c = 1 << n;
      ((u[n] = -1), (e &= ~c));
    }
    a !== 0 && Df(l, a, t);
  }
  function Nn() {
    return (al & 6) === 0 ? (Se(0), !1) : !0;
  }
  function xi() {
    if ($ !== null) {
      if (nl === 0) var l = $.return;
      else ((l = $), (Xt = ja = null), ti(l), (Su = null), (Pu = 0), (l = $));
      for (; l !== null;) (Fo(l.alternate, l), (l = l.return));
      $ = null;
    }
  }
  function Nu(l, t) {
    var a = l.timeoutHandle;
    (a !== -1 && ((l.timeoutHandle = -1), By(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      (kt = 0),
      xi(),
      (ml = l),
      ($ = a = Gt(l.current, null)),
      (F = t),
      (nl = 0),
      (st = null),
      (ra = !1),
      (zu = qu(l, t)),
      (Hi = !1),
      (Ou = ot = Yi = Ja = Sa = gl = 0),
      (kl = he = null),
      (Bi = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u;) {
        var e = 31 - et(u),
          n = 1 << e;
        ((t |= l[e]), (u &= ~n));
      }
    return ((Ft = t), we(), a);
  }
  function E0(l, t) {
    ((V = null),
      (A.H = ie),
      t === ru || t === tn
        ? ((t = Bs()), (nl = 3))
        : t === Zc
          ? ((t = Bs()), (nl = 4))
          : (nl =
              t === Si
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (st = t),
      $ === null && ((gl = 1), rn(l, St(t, l.current))));
  }
  function T0() {
    var l = it.current;
    return l === null
      ? !0
      : (F & 4194048) === F
        ? Tt === null
        : (F & 62914560) === F || (F & 536870912) !== 0
          ? l === Tt
          : !1;
  }
  function A0() {
    var l = A.H;
    return ((A.H = ie), l === null ? ie : l);
  }
  function _0() {
    var l = A.A;
    return ((A.A = yy), l);
  }
  function Dn() {
    ((gl = 4),
      ra || ((F & 4194048) !== F && it.current !== null) || (zu = !0),
      ((Sa & 134217727) === 0 && (Ja & 134217727) === 0) ||
        ml === null ||
        Ea(ml, F, ot, !1));
  }
  function Xi(l, t, a) {
    var u = al;
    al |= 2;
    var e = A0(),
      n = _0();
    ((ml !== l || F !== t) && ((Mn = null), Nu(l, t)), (t = !1));
    var c = gl;
    l: do
      try {
        if (nl !== 0 && $ !== null) {
          var i = $,
            o = st;
          switch (nl) {
            case 8:
              (xi(), (c = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              it.current === null && (t = !0);
              var h = nl;
              if (((nl = 0), (st = null), Du(l, i, o, h), a && zu)) {
                c = 0;
                break l;
              }
              break;
            default:
              ((h = nl), (nl = 0), (st = null), Du(l, i, o, h));
          }
        }
        (ry(), (c = gl));
        break;
      } catch (T) {
        E0(l, T);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Xt = ja = null),
      (al = u),
      (A.H = e),
      (A.A = n),
      $ === null && ((ml = null), (F = 0), we()),
      c
    );
  }
  function ry() {
    for (; $ !== null;) z0($);
  }
  function Sy(l, t) {
    var a = al;
    al |= 2;
    var u = A0(),
      e = _0();
    ml !== l || F !== t
      ? ((Mn = null), (On = at() + 500), Nu(l, t))
      : (zu = qu(l, t));
    l: do
      try {
        if (nl !== 0 && $ !== null) {
          t = $;
          var n = st;
          t: switch (nl) {
            case 1:
              ((nl = 0), (st = null), Du(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (Hs(n)) {
                ((nl = 0), (st = null), O0(t));
                break;
              }
              ((t = function () {
                ((nl !== 2 && nl !== 9) || ml !== l || (nl = 7), Ht(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              nl = 7;
              break l;
            case 4:
              nl = 5;
              break l;
            case 7:
              Hs(n)
                ? ((nl = 0), (st = null), O0(t))
                : ((nl = 0), (st = null), Du(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch ($.tag) {
                case 26:
                  c = $.memoizedState;
                case 5:
                case 27:
                  var i = $;
                  if (c ? od(c) : i.stateNode.complete) {
                    ((nl = 0), (st = null));
                    var o = i.sibling;
                    if (o !== null) $ = o;
                    else {
                      var h = i.return;
                      h !== null ? (($ = h), pn(h)) : ($ = null);
                    }
                    break t;
                  }
              }
              ((nl = 0), (st = null), Du(l, t, n, 5));
              break;
            case 6:
              ((nl = 0), (st = null), Du(l, t, n, 6));
              break;
            case 8:
              (xi(), (gl = 6));
              break l;
            default:
              throw Error(f(462));
          }
        }
        gy();
        break;
      } catch (T) {
        E0(l, T);
      }
    while (!0);
    return (
      (Xt = ja = null),
      (A.H = u),
      (A.A = e),
      (al = a),
      $ !== null ? 0 : ((ml = null), (F = 0), we(), gl)
    );
  }
  function gy() {
    for (; $ !== null && !Ld();) z0($);
  }
  function z0(l) {
    var t = $o(l.alternate, l, Ft);
    ((l.memoizedProps = l.pendingProps), t === null ? pn(l) : ($ = t));
  }
  function O0(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Qo(a, t, t.pendingProps, t.type, void 0, F);
        break;
      case 11:
        t = Qo(a, t, t.pendingProps, t.type.render, t.ref, F);
        break;
      case 5:
        ti(t);
      default:
        (Fo(a, t), (t = $ = As(t, Ft)), (t = $o(a, t, Ft)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? pn(l) : ($ = t));
  }
  function Du(l, t, a, u) {
    ((Xt = ja = null), ti(t), (Su = null), (Pu = 0));
    var e = t.return;
    try {
      if (cy(l, e, t, a, F)) {
        ((gl = 1), rn(l, St(a, l.current)), ($ = null));
        return;
      }
    } catch (n) {
      if (e !== null) throw (($ = e), n);
      ((gl = 1), rn(l, St(a, l.current)), ($ = null));
      return;
    }
    t.flags & 32768
      ? (I || u === 1
          ? (l = !0)
          : zu || (F & 536870912) !== 0
            ? (l = !1)
            : ((ra = l = !0),
              (u === 2 || u === 9 || u === 3 || u === 6) &&
                ((u = it.current),
                u !== null && u.tag === 13 && (u.flags |= 16384))),
        M0(t, l))
      : pn(t);
  }
  function pn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        M0(t, ra);
        return;
      }
      l = t.return;
      var a = sy(t.alternate, t, Ft);
      if (a !== null) {
        $ = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        $ = t;
        return;
      }
      $ = t = l;
    } while (t !== null);
    gl === 0 && (gl = 5);
  }
  function M0(l, t) {
    do {
      var a = oy(l.alternate, l);
      if (a !== null) {
        ((a.flags &= 32767), ($ = a));
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        $ = l;
        return;
      }
      $ = l = a;
    } while (l !== null);
    ((gl = 6), ($ = null));
  }
  function N0(l, t, a, u, e, n, c, i, o) {
    l.cancelPendingCommit = null;
    do Un();
    while (Rl !== 0);
    if ((al & 6) !== 0) throw Error(f(327));
    if (t !== null) {
      if (t === l.current) throw Error(f(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= Dc),
        kd(l, a, n, c, i, o),
        l === ml && (($ = ml = null), (F = 0)),
        (Mu = t),
        (ba = l),
        (kt = a),
        (qi = n),
        (ji = e),
        (r0 = u),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            Ay(Re, function () {
              return (C0(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (u = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || u)
      ) {
        ((u = A.T), (A.T = null), (e = U.p), (U.p = 2), (c = al), (al |= 4));
        try {
          dy(l, t, a);
        } finally {
          ((al = c), (U.p = e), (A.T = u));
        }
      }
      ((Rl = 1), D0(), p0(), U0());
    }
  }
  function D0() {
    if (Rl === 1) {
      Rl = 0;
      var l = ba,
        t = Mu,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = A.T), (A.T = null));
        var u = U.p;
        U.p = 2;
        var e = al;
        al |= 4;
        try {
          f0(t, l);
          var n = Ii,
            c = ys(l.containerInfo),
            i = n.focusedElem,
            o = n.selectionRange;
          if (
            c !== i &&
            i &&
            i.ownerDocument &&
            ms(i.ownerDocument.documentElement, i)
          ) {
            if (o !== null && _c(i)) {
              var h = o.start,
                T = o.end;
              if ((T === void 0 && (T = h), "selectionStart" in i))
                ((i.selectionStart = h),
                  (i.selectionEnd = Math.min(T, i.value.length)));
              else {
                var z = i.ownerDocument || document,
                  r = (z && z.defaultView) || window;
                if (r.getSelection) {
                  var S = r.getSelection(),
                    Y = i.textContent.length,
                    x = Math.min(o.start, Y),
                    ol = o.end === void 0 ? x : Math.min(o.end, Y);
                  !S.extend && x > ol && ((c = ol), (ol = x), (x = c));
                  var y = ds(i, x),
                    d = ds(i, ol);
                  if (
                    y &&
                    d &&
                    (S.rangeCount !== 1 ||
                      S.anchorNode !== y.node ||
                      S.anchorOffset !== y.offset ||
                      S.focusNode !== d.node ||
                      S.focusOffset !== d.offset)
                  ) {
                    var v = z.createRange();
                    (v.setStart(y.node, y.offset),
                      S.removeAllRanges(),
                      x > ol
                        ? (S.addRange(v), S.extend(d.node, d.offset))
                        : (v.setEnd(d.node, d.offset), S.addRange(v)));
                  }
                }
              }
            }
            for (z = [], S = i; (S = S.parentNode);)
              S.nodeType === 1 &&
                z.push({ element: S, left: S.scrollLeft, top: S.scrollTop });
            for (
              typeof i.focus == "function" && i.focus(), i = 0;
              i < z.length;
              i++
            ) {
              var _ = z[i];
              ((_.element.scrollLeft = _.left), (_.element.scrollTop = _.top));
            }
          }
          ((Qn = !!ki), (Ii = ki = null));
        } finally {
          ((al = e), (U.p = u), (A.T = a));
        }
      }
      ((l.current = t), (Rl = 2));
    }
  }
  function p0() {
    if (Rl === 2) {
      Rl = 0;
      var l = ba,
        t = Mu,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = A.T), (A.T = null));
        var u = U.p;
        U.p = 2;
        var e = al;
        al |= 4;
        try {
          u0(l, t.alternate, t);
        } finally {
          ((al = e), (U.p = u), (A.T = a));
        }
      }
      Rl = 3;
    }
  }
  function U0() {
    if (Rl === 4 || Rl === 3) {
      ((Rl = 0), Qd());
      var l = ba,
        t = Mu,
        a = kt,
        u = r0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Rl = 5)
        : ((Rl = 0), (Mu = ba = null), R0(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (
        (e === 0 && (ga = null),
        ec(a),
        (t = t.stateNode),
        ut && typeof ut.onCommitFiberRoot == "function")
      )
        try {
          ut.onCommitFiberRoot(Bu, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        ((t = A.T), (e = U.p), (U.p = 2), (A.T = null));
        try {
          for (var n = l.onRecoverableError, c = 0; c < u.length; c++) {
            var i = u[c];
            n(i.value, { componentStack: i.stack });
          }
        } finally {
          ((A.T = t), (U.p = e));
        }
      }
      ((kt & 3) !== 0 && Un(),
        Ht(l),
        (e = l.pendingLanes),
        (a & 261930) !== 0 && (e & 42) !== 0
          ? l === Gi
            ? re++
            : ((re = 0), (Gi = l))
          : (re = 0),
        Se(0));
    }
  }
  function R0(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), ku(t)));
  }
  function Un() {
    return (D0(), p0(), U0(), C0());
  }
  function C0() {
    if (Rl !== 5) return !1;
    var l = ba,
      t = qi;
    qi = 0;
    var a = ec(kt),
      u = A.T,
      e = U.p;
    try {
      ((U.p = 32 > a ? 32 : a), (A.T = null), (a = ji), (ji = null));
      var n = ba,
        c = kt;
      if (((Rl = 0), (Mu = ba = null), (kt = 0), (al & 6) !== 0))
        throw Error(f(331));
      var i = al;
      if (
        ((al |= 4),
        y0(n.current),
        o0(n, n.current, c, a),
        (al = i),
        Se(0, !1),
        ut && typeof ut.onPostCommitFiberRoot == "function")
      )
        try {
          ut.onPostCommitFiberRoot(Bu, n);
        } catch {}
      return !0;
    } finally {
      ((U.p = e), (A.T = u), R0(l, t));
    }
  }
  function H0(l, t, a) {
    ((t = St(a, t)),
      (t = ri(l.stateNode, t, 2)),
      (l = ma(l, t, 2)),
      l !== null && (ju(l, 2), Ht(l)));
  }
  function cl(l, t, a) {
    if (l.tag === 3) H0(l, l, a);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          H0(t, l, a);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (ga === null || !ga.has(u)))
          ) {
            ((l = St(a, l)),
              (a = Yo(2)),
              (u = ma(t, a, 2)),
              u !== null && (Bo(a, u, t, l), ju(u, 2), Ht(u)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Li(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new vy();
      var e = new Set();
      u.set(t, e);
    } else ((e = u.get(t)), e === void 0 && ((e = new Set()), u.set(t, e)));
    e.has(a) ||
      ((Hi = !0), e.add(a), (l = by.bind(null, l, t, a)), t.then(l, l));
  }
  function by(l, t, a) {
    var u = l.pingCache;
    (u !== null && u.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      ml === l &&
        (F & a) === a &&
        (gl === 4 || (gl === 3 && (F & 62914560) === F && 300 > at() - zn)
          ? (al & 2) === 0 && Nu(l, 0)
          : (Yi |= a),
        Ou === F && (Ou = 0)),
      Ht(l));
  }
  function Y0(l, t) {
    (t === 0 && (t = Nf()), (l = Ya(l, t)), l !== null && (ju(l, t), Ht(l)));
  }
  function Ey(l) {
    var t = l.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), Y0(l, a));
  }
  function Ty(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode,
          e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    (u !== null && u.delete(t), Y0(l, a));
  }
  function Ay(l, t) {
    return lc(l, t);
  }
  var Rn = null,
    pu = null,
    Qi = !1,
    Cn = !1,
    Zi = !1,
    Ta = 0;
  function Ht(l) {
    (l !== pu &&
      l.next === null &&
      (pu === null ? (Rn = pu = l) : (pu = pu.next = l)),
      (Cn = !0),
      Qi || ((Qi = !0), zy()));
  }
  function Se(l, t) {
    if (!Zi && Cn) {
      Zi = !0;
      do
        for (var a = !1, u = Rn; u !== null;) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var c = u.suspendedLanes,
                i = u.pingedLanes;
              ((n = (1 << (31 - et(42 | l) + 1)) - 1),
                (n &= e & ~(c & ~i)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((a = !0), G0(u, n));
          } else
            ((n = F),
              (n = Be(
                u,
                u === ml ? n : 0,
                u.cancelPendingCommit !== null || u.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || qu(u, n) || ((a = !0), G0(u, n)));
          u = u.next;
        }
      while (a);
      Zi = !1;
    }
  }
  function _y() {
    B0();
  }
  function B0() {
    Cn = Qi = !1;
    var l = 0;
    Ta !== 0 && Yy() && (l = Ta);
    for (var t = at(), a = null, u = Rn; u !== null;) {
      var e = u.next,
        n = q0(u, t);
      (n === 0
        ? ((u.next = null),
          a === null ? (Rn = e) : (a.next = e),
          e === null && (pu = a))
        : ((a = u), (l !== 0 || (n & 3) !== 0) && (Cn = !0)),
        (u = e));
    }
    ((Rl !== 0 && Rl !== 5) || Se(l), Ta !== 0 && (Ta = 0));
  }
  function q0(l, t) {
    for (
      var a = l.suspendedLanes,
        u = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var c = 31 - et(n),
        i = 1 << c,
        o = e[c];
      (o === -1
        ? ((i & a) === 0 || (i & u) !== 0) && (e[c] = Fd(i, t))
        : o <= t && (l.expiredLanes |= i),
        (n &= ~i));
    }
    if (
      ((t = ml),
      (a = F),
      (a = Be(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (u = l.callbackNode),
      a === 0 ||
        (l === t && (nl === 2 || nl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && tc(u),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || qu(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((u !== null && tc(u), ec(a))) {
        case 2:
        case 8:
          a = Of;
          break;
        case 32:
          a = Re;
          break;
        case 268435456:
          a = Mf;
          break;
        default:
          a = Re;
      }
      return (
        (u = j0.bind(null, l)),
        (a = lc(a, u)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      u !== null && u !== null && tc(u),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function j0(l, t) {
    if (Rl !== 0 && Rl !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var a = l.callbackNode;
    if (Un() && l.callbackNode !== a) return null;
    var u = F;
    return (
      (u = Be(
        l,
        l === ml ? u : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      u === 0
        ? null
        : (g0(l, u, t),
          q0(l, at()),
          l.callbackNode != null && l.callbackNode === a
            ? j0.bind(null, l)
            : null)
    );
  }
  function G0(l, t) {
    if (Un()) return null;
    g0(l, t, !0);
  }
  function zy() {
    qy(function () {
      (al & 6) !== 0 ? lc(zf, _y) : B0();
    });
  }
  function Vi() {
    if (Ta === 0) {
      var l = vu;
      (l === 0 && ((l = Ce), (Ce <<= 1), (Ce & 261888) === 0 && (Ce = 256)),
        (Ta = l));
    }
    return Ta;
  }
  function x0(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : xe("" + l);
  }
  function X0(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function Oy(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = x0((e[Jl] || null).action),
        c = u.submitter;
      c &&
        ((t = (t = c[Jl] || null)
          ? x0(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((n = t), (c = null)));
      var i = new Ze("action", "action", null, u, e);
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (Ta !== 0) {
                  var o = c ? X0(e, c) : new FormData(e);
                  oi(
                    a,
                    { pending: !0, data: o, method: e.method, action: n },
                    null,
                    o,
                  );
                }
              } else
                typeof n == "function" &&
                  (i.preventDefault(),
                  (o = c ? X0(e, c) : new FormData(e)),
                  oi(
                    a,
                    { pending: !0, data: o, method: e.method, action: n },
                    n,
                    o,
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var Ki = 0; Ki < Nc.length; Ki++) {
    var Ji = Nc[Ki],
      My = Ji.toLowerCase(),
      Ny = Ji[0].toUpperCase() + Ji.slice(1);
    Nt(My, "on" + Ny);
  }
  (Nt(rs, "onAnimationEnd"),
    Nt(Ss, "onAnimationIteration"),
    Nt(gs, "onAnimationStart"),
    Nt("dblclick", "onDoubleClick"),
    Nt("focusin", "onFocus"),
    Nt("focusout", "onBlur"),
    Nt(Zm, "onTransitionRun"),
    Nt(Vm, "onTransitionStart"),
    Nt(Km, "onTransitionCancel"),
    Nt(bs, "onTransitionEnd"),
    lu("onMouseEnter", ["mouseout", "mouseover"]),
    lu("onMouseLeave", ["mouseout", "mouseover"]),
    lu("onPointerEnter", ["pointerout", "pointerover"]),
    lu("onPointerLeave", ["pointerout", "pointerover"]),
    Ua(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ua(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ua("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ua(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ua(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ua(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var ge =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Dy = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ge),
    );
  function L0(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a],
        e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = u.length - 1; 0 <= c; c--) {
            var i = u[c],
              o = i.instance,
              h = i.currentTarget;
            if (((i = i.listener), o !== n && e.isPropagationStopped()))
              break l;
            ((n = i), (e.currentTarget = h));
            try {
              n(e);
            } catch (T) {
              Je(T);
            }
            ((e.currentTarget = null), (n = o));
          }
        else
          for (c = 0; c < u.length; c++) {
            if (
              ((i = u[c]),
              (o = i.instance),
              (h = i.currentTarget),
              (i = i.listener),
              o !== n && e.isPropagationStopped())
            )
              break l;
            ((n = i), (e.currentTarget = h));
            try {
              n(e);
            } catch (T) {
              Je(T);
            }
            ((e.currentTarget = null), (n = o));
          }
      }
    }
  }
  function W(l, t) {
    var a = t[nc];
    a === void 0 && (a = t[nc] = new Set());
    var u = l + "__bubble";
    a.has(u) || (Q0(t, l, 2, !1), a.add(u));
  }
  function wi(l, t, a) {
    var u = 0;
    (t && (u |= 4), Q0(a, l, u, t));
  }
  var Hn = "_reactListening" + Math.random().toString(36).slice(2);
  function $i(l) {
    if (!l[Hn]) {
      ((l[Hn] = !0),
        Yf.forEach(function (a) {
          a !== "selectionchange" && (Dy.has(a) || wi(a, !1, l), wi(a, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Hn] || ((t[Hn] = !0), wi("selectionchange", !1, t));
    }
  }
  function Q0(l, t, a, u) {
    switch (Sd(t)) {
      case 2:
        var e = av;
        break;
      case 8:
        e = uv;
        break;
      default:
        e = of;
    }
    ((a = e.bind(null, t, a, l)),
      (e = void 0),
      !vc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (e = !0),
      u
        ? e !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: e })
          : l.addEventListener(t, a, !0)
        : e !== void 0
          ? l.addEventListener(t, a, { passive: e })
          : l.addEventListener(t, a, !1));
  }
  function Wi(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (;;) {
        if (u === null) return;
        var c = u.tag;
        if (c === 3 || c === 4) {
          var i = u.stateNode.containerInfo;
          if (i === e) break;
          if (c === 4)
            for (c = u.return; c !== null;) {
              var o = c.tag;
              if ((o === 3 || o === 4) && c.stateNode.containerInfo === e)
                return;
              c = c.return;
            }
          for (; i !== null;) {
            if (((c = ka(i)), c === null)) return;
            if (((o = c.tag), o === 5 || o === 6 || o === 26 || o === 27)) {
              u = n = c;
              continue l;
            }
            i = i.parentNode;
          }
        }
        u = u.return;
      }
    Jf(function () {
      var h = n,
        T = mc(a),
        z = [];
      l: {
        var r = Es.get(l);
        if (r !== void 0) {
          var S = Ze,
            Y = l;
          switch (l) {
            case "keypress":
              if (Le(a) === 0) break l;
            case "keydown":
            case "keyup":
              S = Tm;
              break;
            case "focusin":
              ((Y = "focus"), (S = gc));
              break;
            case "focusout":
              ((Y = "blur"), (S = gc));
              break;
            case "beforeblur":
            case "afterblur":
              S = gc;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = Wf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = sm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = zm;
              break;
            case rs:
            case Ss:
            case gs:
              S = mm;
              break;
            case bs:
              S = Mm;
              break;
            case "scroll":
            case "scrollend":
              S = im;
              break;
            case "wheel":
              S = Dm;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = vm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = kf;
              break;
            case "toggle":
            case "beforetoggle":
              S = Um;
          }
          var x = (t & 4) !== 0,
            ol = !x && (l === "scroll" || l === "scrollend"),
            y = x ? (r !== null ? r + "Capture" : null) : r;
          x = [];
          for (var d = h, v; d !== null;) {
            var _ = d;
            if (
              ((v = _.stateNode),
              (_ = _.tag),
              (_ !== 5 && _ !== 26 && _ !== 27) ||
                v === null ||
                y === null ||
                ((_ = Xu(d, y)), _ != null && x.push(be(d, _, v))),
              ol)
            )
              break;
            d = d.return;
          }
          0 < x.length &&
            ((r = new S(r, Y, null, a, T)), z.push({ event: r, listeners: x }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((r = l === "mouseover" || l === "pointerover"),
            (S = l === "mouseout" || l === "pointerout"),
            r &&
              a !== dc &&
              (Y = a.relatedTarget || a.fromElement) &&
              (ka(Y) || Y[Fa]))
          )
            break l;
          if (
            (S || r) &&
            ((r =
              T.window === T
                ? T
                : (r = T.ownerDocument)
                  ? r.defaultView || r.parentWindow
                  : window),
            S
              ? ((Y = a.relatedTarget || a.toElement),
                (S = h),
                (Y = Y ? ka(Y) : null),
                Y !== null &&
                  ((ol = N(Y)),
                  (x = Y.tag),
                  Y !== ol || (x !== 5 && x !== 27 && x !== 6)) &&
                  (Y = null))
              : ((S = null), (Y = h)),
            S !== Y)
          ) {
            if (
              ((x = Wf),
              (_ = "onMouseLeave"),
              (y = "onMouseEnter"),
              (d = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((x = kf),
                (_ = "onPointerLeave"),
                (y = "onPointerEnter"),
                (d = "pointer")),
              (ol = S == null ? r : xu(S)),
              (v = Y == null ? r : xu(Y)),
              (r = new x(_, d + "leave", S, a, T)),
              (r.target = ol),
              (r.relatedTarget = v),
              (_ = null),
              ka(T) === h &&
                ((x = new x(y, d + "enter", Y, a, T)),
                (x.target = v),
                (x.relatedTarget = ol),
                (_ = x)),
              (ol = _),
              S && Y)
            )
              t: {
                for (x = py, y = S, d = Y, v = 0, _ = y; _; _ = x(_)) v++;
                _ = 0;
                for (var G = d; G; G = x(G)) _++;
                for (; 0 < v - _;) ((y = x(y)), v--);
                for (; 0 < _ - v;) ((d = x(d)), _--);
                for (; v--;) {
                  if (y === d || (d !== null && y === d.alternate)) {
                    x = y;
                    break t;
                  }
                  ((y = x(y)), (d = x(d)));
                }
                x = null;
              }
            else x = null;
            (S !== null && Z0(z, r, S, x, !1),
              Y !== null && ol !== null && Z0(z, ol, Y, x, !0));
          }
        }
        l: {
          if (
            ((r = h ? xu(h) : window),
            (S = r.nodeName && r.nodeName.toLowerCase()),
            S === "select" || (S === "input" && r.type === "file"))
          )
            var ll = ns;
          else if (us(r))
            if (cs) ll = Xm;
            else {
              ll = Gm;
              var q = jm;
            }
          else
            ((S = r.nodeName),
              !S ||
              S.toLowerCase() !== "input" ||
              (r.type !== "checkbox" && r.type !== "radio")
                ? h && oc(h.elementType) && (ll = ns)
                : (ll = xm));
          if (ll && (ll = ll(l, h))) {
            es(z, ll, a, T);
            break l;
          }
          (q && q(l, r, h),
            l === "focusout" &&
              h &&
              r.type === "number" &&
              h.memoizedProps.value != null &&
              sc(r, "number", r.value));
        }
        switch (((q = h ? xu(h) : window), l)) {
          case "focusin":
            (us(q) || q.contentEditable === "true") &&
              ((cu = q), (zc = h), ($u = null));
            break;
          case "focusout":
            $u = zc = cu = null;
            break;
          case "mousedown":
            Oc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Oc = !1), vs(z, a, T));
            break;
          case "selectionchange":
            if (Qm) break;
          case "keydown":
          case "keyup":
            vs(z, a, T);
        }
        var K;
        if (Ec)
          l: {
            switch (l) {
              case "compositionstart":
                var k = "onCompositionStart";
                break l;
              case "compositionend":
                k = "onCompositionEnd";
                break l;
              case "compositionupdate":
                k = "onCompositionUpdate";
                break l;
            }
            k = void 0;
          }
        else
          nu
            ? ts(l, a) && (k = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (k = "onCompositionStart");
        (k &&
          (If &&
            a.locale !== "ko" &&
            (nu || k !== "onCompositionStart"
              ? k === "onCompositionEnd" && nu && (K = wf())
              : ((na = T),
                (hc = "value" in na ? na.value : na.textContent),
                (nu = !0))),
          (q = Yn(h, k)),
          0 < q.length &&
            ((k = new Ff(k, l, null, a, T)),
            z.push({ event: k, listeners: q }),
            K ? (k.data = K) : ((K = as(a)), K !== null && (k.data = K)))),
          (K = Cm ? Hm(l, a) : Ym(l, a)) &&
            ((k = Yn(h, "onBeforeInput")),
            0 < k.length &&
              ((q = new Ff("onBeforeInput", "beforeinput", null, a, T)),
              z.push({ event: q, listeners: k }),
              (q.data = K))),
          Oy(z, l, h, a, T));
      }
      L0(z, t);
    });
  }
  function be(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function Yn(l, t) {
    for (var a = t + "Capture", u = []; l !== null;) {
      var e = l,
        n = e.stateNode;
      if (
        ((e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = Xu(l, a)),
          e != null && u.unshift(be(l, e, n)),
          (e = Xu(l, t)),
          e != null && u.push(be(l, e, n))),
        l.tag === 3)
      )
        return u;
      l = l.return;
    }
    return [];
  }
  function py(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Z0(l, t, a, u, e) {
    for (var n = t._reactName, c = []; a !== null && a !== u;) {
      var i = a,
        o = i.alternate,
        h = i.stateNode;
      if (((i = i.tag), o !== null && o === u)) break;
      ((i !== 5 && i !== 26 && i !== 27) ||
        h === null ||
        ((o = h),
        e
          ? ((h = Xu(a, n)), h != null && c.unshift(be(a, h, o)))
          : e || ((h = Xu(a, n)), h != null && c.push(be(a, h, o)))),
        (a = a.return));
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var Uy = /\r\n?/g,
    Ry = /\u0000|\uFFFD/g;
  function V0(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        Uy,
        `
`,
      )
      .replace(Ry, "");
  }
  function K0(l, t) {
    return ((t = V0(t)), V0(l) === t);
  }
  function sl(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string"
          ? t === "body" || (t === "textarea" && u === "") || au(l, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            t !== "body" &&
            au(l, "" + u);
        break;
      case "className":
        je(l, "class", u);
        break;
      case "tabIndex":
        je(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        je(l, a, u);
        break;
      case "style":
        Vf(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          je(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        ((u = xe("" + u)), l.setAttribute(a, u));
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && sl(l, t, "name", e.name, e, null),
                sl(l, t, "formEncType", e.formEncType, e, null),
                sl(l, t, "formMethod", e.formMethod, e, null),
                sl(l, t, "formTarget", e.formTarget, e, null))
              : (sl(l, t, "encType", e.encType, e, null),
                sl(l, t, "method", e.method, e, null),
                sl(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        ((u = xe("" + u)), l.setAttribute(a, u));
        break;
      case "onClick":
        u != null && (l.onclick = qt);
        break;
      case "onScroll":
        u != null && W("scroll", l);
        break;
      case "onScrollEnd":
        u != null && W("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(f(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(f(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((a = xe("" + u)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "" + u)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0
          ? l.setAttribute(a, "")
          : u !== !1 &&
              u != null &&
              typeof u != "function" &&
              typeof u != "symbol"
            ? l.setAttribute(a, u)
            : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? l.removeAttribute(a)
          : l.setAttribute(a, u);
        break;
      case "popover":
        (W("beforetoggle", l), W("toggle", l), qe(l, "popover", u));
        break;
      case "xlinkActuate":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        qe(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = nm.get(a) || a), qe(l, a, u));
    }
  }
  function Fi(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Vf(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(f(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(f(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? au(l, u)
          : (typeof u == "number" || typeof u == "bigint") && au(l, "" + u);
        break;
      case "onScroll":
        u != null && W("scroll", l);
        break;
      case "onScrollEnd":
        u != null && W("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = qt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Bf.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((e = a.endsWith("Capture")),
              (t = a.slice(2, e ? a.length - 7 : void 0)),
              (n = l[Jl] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, e),
              typeof u == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, u, e));
              break l;
            }
            a in l
              ? (l[a] = u)
              : u === !0
                ? l.setAttribute(a, "")
                : qe(l, a, u);
          }
    }
  }
  function Xl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (W("error", l), W("load", l));
        var u = !1,
          e = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var c = a[n];
            if (c != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, t));
                default:
                  sl(l, t, n, c, a, null);
              }
          }
        (e && sl(l, t, "srcSet", a.srcSet, a, null),
          u && sl(l, t, "src", a.src, a, null));
        return;
      case "input":
        W("invalid", l);
        var i = (n = c = e = null),
          o = null,
          h = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var T = a[u];
            if (T != null)
              switch (u) {
                case "name":
                  e = T;
                  break;
                case "type":
                  c = T;
                  break;
                case "checked":
                  o = T;
                  break;
                case "defaultChecked":
                  h = T;
                  break;
                case "value":
                  n = T;
                  break;
                case "defaultValue":
                  i = T;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (T != null) throw Error(f(137, t));
                  break;
                default:
                  sl(l, t, u, T, a, null);
              }
          }
        Xf(l, n, i, o, h, c, e, !1);
        return;
      case "select":
        (W("invalid", l), (u = c = n = null));
        for (e in a)
          if (a.hasOwnProperty(e) && ((i = a[e]), i != null))
            switch (e) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                c = i;
                break;
              case "multiple":
                u = i;
              default:
                sl(l, t, e, i, a, null);
            }
        ((t = n),
          (a = c),
          (l.multiple = !!u),
          t != null ? tu(l, !!u, t, !1) : a != null && tu(l, !!u, a, !0));
        return;
      case "textarea":
        (W("invalid", l), (n = e = u = null));
        for (c in a)
          if (a.hasOwnProperty(c) && ((i = a[c]), i != null))
            switch (c) {
              case "value":
                u = i;
                break;
              case "defaultValue":
                e = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(f(91));
                break;
              default:
                sl(l, t, c, i, a, null);
            }
        Qf(l, u, e, n);
        return;
      case "option":
        for (o in a)
          if (a.hasOwnProperty(o) && ((u = a[o]), u != null))
            switch (o) {
              case "selected":
                l.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                sl(l, t, o, u, a, null);
            }
        return;
      case "dialog":
        (W("beforetoggle", l), W("toggle", l), W("cancel", l), W("close", l));
        break;
      case "iframe":
      case "object":
        W("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ge.length; u++) W(ge[u], l);
        break;
      case "image":
        (W("error", l), W("load", l));
        break;
      case "details":
        W("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (W("error", l), W("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (h in a)
          if (a.hasOwnProperty(h) && ((u = a[h]), u != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, t));
              default:
                sl(l, t, h, u, a, null);
            }
        return;
      default:
        if (oc(t)) {
          for (T in a)
            a.hasOwnProperty(T) &&
              ((u = a[T]), u !== void 0 && Fi(l, t, T, u, a, void 0));
          return;
        }
    }
    for (i in a)
      a.hasOwnProperty(i) && ((u = a[i]), u != null && sl(l, t, i, u, a, null));
  }
  function Cy(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null,
          n = null,
          c = null,
          i = null,
          o = null,
          h = null,
          T = null;
        for (S in a) {
          var z = a[S];
          if (a.hasOwnProperty(S) && z != null)
            switch (S) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                o = z;
              default:
                u.hasOwnProperty(S) || sl(l, t, S, null, u, z);
            }
        }
        for (var r in u) {
          var S = u[r];
          if (((z = a[r]), u.hasOwnProperty(r) && (S != null || z != null)))
            switch (r) {
              case "type":
                n = S;
                break;
              case "name":
                e = S;
                break;
              case "checked":
                h = S;
                break;
              case "defaultChecked":
                T = S;
                break;
              case "value":
                c = S;
                break;
              case "defaultValue":
                i = S;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(f(137, t));
                break;
              default:
                S !== z && sl(l, t, r, S, u, z);
            }
        }
        fc(l, c, i, o, h, T, n, e);
        return;
      case "select":
        S = c = i = r = null;
        for (n in a)
          if (((o = a[n]), a.hasOwnProperty(n) && o != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                S = o;
              default:
                u.hasOwnProperty(n) || sl(l, t, n, null, u, o);
            }
        for (e in u)
          if (
            ((n = u[e]),
            (o = a[e]),
            u.hasOwnProperty(e) && (n != null || o != null))
          )
            switch (e) {
              case "value":
                r = n;
                break;
              case "defaultValue":
                i = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== o && sl(l, t, e, n, u, o);
            }
        ((t = i),
          (a = c),
          (u = S),
          r != null
            ? tu(l, !!a, r, !1)
            : !!u != !!a &&
              (t != null ? tu(l, !!a, t, !0) : tu(l, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        S = r = null;
        for (i in a)
          if (
            ((e = a[i]),
            a.hasOwnProperty(i) && e != null && !u.hasOwnProperty(i))
          )
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                sl(l, t, i, null, u, e);
            }
        for (c in u)
          if (
            ((e = u[c]),
            (n = a[c]),
            u.hasOwnProperty(c) && (e != null || n != null))
          )
            switch (c) {
              case "value":
                r = e;
                break;
              case "defaultValue":
                S = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(f(91));
                break;
              default:
                e !== n && sl(l, t, c, e, u, n);
            }
        Lf(l, r, S);
        return;
      case "option":
        for (var Y in a)
          if (
            ((r = a[Y]),
            a.hasOwnProperty(Y) && r != null && !u.hasOwnProperty(Y))
          )
            switch (Y) {
              case "selected":
                l.selected = !1;
                break;
              default:
                sl(l, t, Y, null, u, r);
            }
        for (o in u)
          if (
            ((r = u[o]),
            (S = a[o]),
            u.hasOwnProperty(o) && r !== S && (r != null || S != null))
          )
            switch (o) {
              case "selected":
                l.selected =
                  r && typeof r != "function" && typeof r != "symbol";
                break;
              default:
                sl(l, t, o, r, u, S);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var x in a)
          ((r = a[x]),
            a.hasOwnProperty(x) &&
              r != null &&
              !u.hasOwnProperty(x) &&
              sl(l, t, x, null, u, r));
        for (h in u)
          if (
            ((r = u[h]),
            (S = a[h]),
            u.hasOwnProperty(h) && r !== S && (r != null || S != null))
          )
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(f(137, t));
                break;
              default:
                sl(l, t, h, r, u, S);
            }
        return;
      default:
        if (oc(t)) {
          for (var ol in a)
            ((r = a[ol]),
              a.hasOwnProperty(ol) &&
                r !== void 0 &&
                !u.hasOwnProperty(ol) &&
                Fi(l, t, ol, void 0, u, r));
          for (T in u)
            ((r = u[T]),
              (S = a[T]),
              !u.hasOwnProperty(T) ||
                r === S ||
                (r === void 0 && S === void 0) ||
                Fi(l, t, T, r, u, S));
          return;
        }
    }
    for (var y in a)
      ((r = a[y]),
        a.hasOwnProperty(y) &&
          r != null &&
          !u.hasOwnProperty(y) &&
          sl(l, t, y, null, u, r));
    for (z in u)
      ((r = u[z]),
        (S = a[z]),
        !u.hasOwnProperty(z) ||
          r === S ||
          (r == null && S == null) ||
          sl(l, t, z, r, u, S));
  }
  function J0(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Hy() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0;
        u < a.length;
        u++
      ) {
        var e = a[u],
          n = e.transferSize,
          c = e.initiatorType,
          i = e.duration;
        if (n && i && J0(c)) {
          for (c = 0, i = e.responseEnd, u += 1; u < a.length; u++) {
            var o = a[u],
              h = o.startTime;
            if (h > i) break;
            var T = o.transferSize,
              z = o.initiatorType;
            T &&
              J0(z) &&
              ((o = o.responseEnd), (c += T * (o < i ? 1 : (i - h) / (o - h))));
          }
          if ((--u, (t += (8 * (n + c)) / (e.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var ki = null,
    Ii = null;
  function Bn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function w0(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function $0(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Pi(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var lf = null;
  function Yy() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === lf
        ? !1
        : ((lf = l), !0)
      : ((lf = null), !1);
  }
  var W0 = typeof setTimeout == "function" ? setTimeout : void 0,
    By = typeof clearTimeout == "function" ? clearTimeout : void 0,
    F0 = typeof Promise == "function" ? Promise : void 0,
    qy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof F0 < "u"
          ? function (l) {
              return F0.resolve(null).then(l).catch(jy);
            }
          : W0;
  function jy(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function Aa(l) {
    return l === "head";
  }
  function k0(l, t) {
    var a = t,
      u = 0;
    do {
      var e = a.nextSibling;
      if ((l.removeChild(a), e && e.nodeType === 8))
        if (((a = e.data), a === "/$" || a === "/&")) {
          if (u === 0) {
            (l.removeChild(e), Hu(t));
            return;
          }
          u--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          u++;
        else if (a === "html") Ee(l.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = l.ownerDocument.head), Ee(a));
          for (var n = a.firstChild; n;) {
            var c = n.nextSibling,
              i = n.nodeName;
            (n[Gu] ||
              i === "SCRIPT" ||
              i === "STYLE" ||
              (i === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(n),
              (n = c));
          }
        } else a === "body" && Ee(l.ownerDocument.body);
      a = e;
    } while (a);
    Hu(t);
  }
  function I0(l, t) {
    var a = l;
    l = 0;
    do {
      var u = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        u && u.nodeType === 8)
      )
        if (((a = u.data), a === "/$")) {
          if (l === 0) break;
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || l++;
      a = u;
    } while (a);
  }
  function tf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (tf(a), cc(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Gy(l, t, a, u) {
    for (; l.nodeType === 1;) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[Gu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !==
                  (e.href == null || e.href === "" ? null : e.href) ||
                l.getAttribute("crossorigin") !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = At(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function xy(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3;)
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = At(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function P0(l, t) {
    for (; l.nodeType !== 8;)
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = At(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function af(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function uf(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function Xy(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var u = function () {
        (t(), a.removeEventListener("DOMContentLoaded", u));
      };
      (a.addEventListener("DOMContentLoaded", u), (l._reactRetry = u));
    }
  }
  function At(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var ef = null;
  function ld(l) {
    l = l.nextSibling;
    for (var t = 0; l;) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return At(l.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function td(l) {
    l = l.previousSibling;
    for (var t = 0; l;) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function ad(l, t, a) {
    switch (((t = Bn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(f(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(f(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(f(454));
        return l;
      default:
        throw Error(f(451));
    }
  }
  function Ee(l) {
    for (var t = l.attributes; t.length;) l.removeAttributeNode(t[0]);
    cc(l);
  }
  var _t = new Map(),
    ud = new Set();
  function qn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var It = U.d;
  U.d = { f: Ly, r: Qy, D: Zy, C: Vy, L: Ky, m: Jy, X: $y, S: wy, M: Wy };
  function Ly() {
    var l = It.f(),
      t = Nn();
    return l || t;
  }
  function Qy(l) {
    var t = Ia(l);
    t !== null && t.tag === 5 && t.type === "form" ? Eo(t) : It.r(l);
  }
  var Uu = typeof document > "u" ? null : document;
  function ed(l, t, a) {
    var u = Uu;
    if (u && typeof t == "string" && t) {
      var e = ht(t);
      ((e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
        ud.has(e) ||
          (ud.add(e),
          (l = { rel: l, crossOrigin: a, href: t }),
          u.querySelector(e) === null &&
            ((t = u.createElement("link")),
            Xl(t, "link", l),
            Hl(t),
            u.head.appendChild(t))));
    }
  }
  function Zy(l) {
    (It.D(l), ed("dns-prefetch", l, null));
  }
  function Vy(l, t) {
    (It.C(l, t), ed("preconnect", l, t));
  }
  function Ky(l, t, a) {
    It.L(l, t, a);
    var u = Uu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + ht(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((e += '[imagesrcset="' + ht(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (e += '[imagesizes="' + ht(a.imageSizes) + '"]'))
        : (e += '[href="' + ht(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = Ru(l);
          break;
        case "script":
          n = Cu(l);
      }
      _t.has(n) ||
        ((l = C(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a,
        )),
        _t.set(n, l),
        u.querySelector(e) !== null ||
          (t === "style" && u.querySelector(Te(n))) ||
          (t === "script" && u.querySelector(Ae(n))) ||
          ((t = u.createElement("link")),
          Xl(t, "link", l),
          Hl(t),
          u.head.appendChild(t)));
    }
  }
  function Jy(l, t) {
    It.m(l, t);
    var a = Uu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + ht(u) + '"][href="' + ht(l) + '"]',
        n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Cu(l);
      }
      if (
        !_t.has(n) &&
        ((l = C({ rel: "modulepreload", href: l }, t)),
        _t.set(n, l),
        a.querySelector(e) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ae(n))) return;
        }
        ((u = a.createElement("link")),
          Xl(u, "link", l),
          Hl(u),
          a.head.appendChild(u));
      }
    }
  }
  function wy(l, t, a) {
    It.S(l, t, a);
    var u = Uu;
    if (u && l) {
      var e = Pa(u).hoistableStyles,
        n = Ru(l);
      t = t || "default";
      var c = e.get(n);
      if (!c) {
        var i = { loading: 0, preload: null };
        if ((c = u.querySelector(Te(n)))) i.loading = 5;
        else {
          ((l = C({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = _t.get(n)) && nf(l, a));
          var o = (c = u.createElement("link"));
          (Hl(o),
            Xl(o, "link", l),
            (o._p = new Promise(function (h, T) {
              ((o.onload = h), (o.onerror = T));
            })),
            o.addEventListener("load", function () {
              i.loading |= 1;
            }),
            o.addEventListener("error", function () {
              i.loading |= 2;
            }),
            (i.loading |= 4),
            jn(c, t, u));
        }
        ((c = { type: "stylesheet", instance: c, count: 1, state: i }),
          e.set(n, c));
      }
    }
  }
  function $y(l, t) {
    It.X(l, t);
    var a = Uu;
    if (a && l) {
      var u = Pa(a).hoistableScripts,
        e = Cu(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(Ae(e))),
        n ||
          ((l = C({ src: l, async: !0 }, t)),
          (t = _t.get(e)) && cf(l, t),
          (n = a.createElement("script")),
          Hl(n),
          Xl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function Wy(l, t) {
    It.M(l, t);
    var a = Uu;
    if (a && l) {
      var u = Pa(a).hoistableScripts,
        e = Cu(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(Ae(e))),
        n ||
          ((l = C({ src: l, async: !0, type: "module" }, t)),
          (t = _t.get(e)) && cf(l, t),
          (n = a.createElement("script")),
          Hl(n),
          Xl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function nd(l, t, a, u) {
    var e = (e = w.current) ? qn(e) : null;
    if (!e) throw Error(f(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Ru(a.href)),
            (a = Pa(e).hoistableStyles),
            (u = a.get(t)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = Ru(a.href);
          var n = Pa(e).hoistableStyles,
            c = n.get(l);
          if (
            (c ||
              ((e = e.ownerDocument || e),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, c),
              (n = e.querySelector(Te(l))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              _t.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                _t.set(l, a),
                n || Fy(e, l, a, c.state))),
            t && u === null)
          )
            throw Error(f(528, ""));
          return c;
        }
        if (t && u !== null) throw Error(f(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Cu(a)),
              (a = Pa(e).hoistableScripts),
              (u = a.get(t)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, l));
    }
  }
  function Ru(l) {
    return 'href="' + ht(l) + '"';
  }
  function Te(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function cd(l) {
    return C({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Fy(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (u.loading = 1)
      : ((t = l.createElement("link")),
        (u.preload = t),
        t.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        Xl(t, "link", a),
        Hl(t),
        l.head.appendChild(t));
  }
  function Cu(l) {
    return '[src="' + ht(l) + '"]';
  }
  function Ae(l) {
    return "script[async]" + l;
  }
  function id(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + ht(a.href) + '"]');
          if (u) return ((t.instance = u), Hl(u), u);
          var e = C({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (l.ownerDocument || l).createElement("style")),
            Hl(u),
            Xl(u, "style", e),
            jn(u, a.precedence, l),
            (t.instance = u)
          );
        case "stylesheet":
          e = Ru(a.href);
          var n = l.querySelector(Te(e));
          if (n) return ((t.state.loading |= 4), (t.instance = n), Hl(n), n);
          ((u = cd(a)),
            (e = _t.get(e)) && nf(u, e),
            (n = (l.ownerDocument || l).createElement("link")),
            Hl(n));
          var c = n;
          return (
            (c._p = new Promise(function (i, o) {
              ((c.onload = i), (c.onerror = o));
            })),
            Xl(n, "link", u),
            (t.state.loading |= 4),
            jn(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Cu(a.src)),
            (e = l.querySelector(Ae(n)))
              ? ((t.instance = e), Hl(e), e)
              : ((u = a),
                (e = _t.get(n)) && ((u = C({}, a)), cf(u, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                Hl(e),
                Xl(e, "link", u),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(f(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((u = t.instance), (t.state.loading |= 4), jn(u, a.precedence, l));
    return t.instance;
  }
  function jn(l, t, a) {
    for (
      var u = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        e = u.length ? u[u.length - 1] : null,
        n = e,
        c = 0;
      c < u.length;
      c++
    ) {
      var i = u[c];
      if (i.dataset.precedence === t) n = i;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function nf(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function cf(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var Gn = null;
  function fd(l, t, a) {
    if (Gn === null) {
      var u = new Map(),
        e = (Gn = new Map());
      e.set(a, u);
    } else ((e = Gn), (u = e.get(a)), u || ((u = new Map()), e.set(a, u)));
    if (u.has(l)) return u;
    for (
      u.set(l, null), a = a.getElementsByTagName(l), e = 0;
      e < a.length;
      e++
    ) {
      var n = a[e];
      if (
        !(
          n[Gu] ||
          n[ql] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var i = u.get(c);
        i ? i.push(n) : u.set(c, [n]);
      }
    }
    return u;
  }
  function sd(l, t, a) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function ky(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled),
              typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function od(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Iy(l, t, a, u) {
    if (
      a.type === "stylesheet" &&
      (typeof u.media != "string" || matchMedia(u.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var e = Ru(u.href),
          n = t.querySelector(Te(e));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = xn.bind(l)), t.then(l, l)),
            (a.state.loading |= 4),
            (a.instance = n),
            Hl(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (u = cd(u)),
          (e = _t.get(e)) && nf(u, e),
          (n = n.createElement("link")),
          Hl(n));
        var c = n;
        ((c._p = new Promise(function (i, o) {
          ((c.onload = i), (c.onerror = o));
        })),
          Xl(n, "link", u),
          (a.instance = n));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (l.count++,
          (a = xn.bind(l)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var ff = 0;
  function Py(l, t) {
    return (
      l.stylesheets && l.count === 0 && Ln(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (a) {
            var u = setTimeout(function () {
              if ((l.stylesheets && Ln(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                ((l.unsuspend = null), n());
              }
            }, 6e4 + t);
            0 < l.imgBytes && ff === 0 && (ff = 62500 * Hy());
            var e = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && Ln(l, l.stylesheets), l.unsuspend))
                ) {
                  var n = l.unsuspend;
                  ((l.unsuspend = null), n());
                }
              },
              (l.imgBytes > ff ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = a),
              function () {
                ((l.unsuspend = null), clearTimeout(u), clearTimeout(e));
              }
            );
          }
        : null
    );
  }
  function xn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Ln(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Xn = null;
  function Ln(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Xn = new Map()),
        t.forEach(lv, l),
        (Xn = null),
        xn.call(l)));
  }
  function lv(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Xn.get(l);
      if (a) var u = a.get(null);
      else {
        ((a = new Map()), Xn.set(l, a));
        for (
          var e = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var c = e[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (a.set(c.dataset.precedence, c), (u = c));
        }
        u && a.set(null, u);
      }
      ((e = t.instance),
        (c = e.getAttribute("data-precedence")),
        (n = a.get(c) || u),
        n === u && a.set(null, e),
        a.set(c, e),
        this.count++,
        (u = xn.bind(this)),
        e.addEventListener("load", u),
        e.addEventListener("error", u),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var _e = {
    $$typeof: Cl,
    Provider: null,
    Consumer: null,
    _currentValue: L,
    _currentValue2: L,
    _threadCount: 0,
  };
  function tv(l, t, a, u, e, n, c, i, o) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ac(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ac(0)),
      (this.hiddenUpdates = ac(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = o),
      (this.incompleteTransitions = new Map()));
  }
  function dd(l, t, a, u, e, n, c, i, o, h, T, z) {
    return (
      (l = new tv(l, t, a, c, o, h, T, z, i)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = ct(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Xc()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: u, isDehydrated: a, cache: t }),
      Vc(n),
      l
    );
  }
  function md(l) {
    return l ? ((l = su), l) : su;
  }
  function yd(l, t, a, u, e, n) {
    ((e = md(e)),
      u.context === null ? (u.context = e) : (u.pendingContext = e),
      (u = da(t)),
      (u.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (a = ma(l, u, t)),
      a !== null && (Il(a, l, t), te(a, l, t)));
  }
  function vd(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function sf(l, t) {
    (vd(l, t), (l = l.alternate) && vd(l, t));
  }
  function hd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ya(l, 67108864);
      (t !== null && Il(t, l, 67108864), sf(l, 67108864));
    }
  }
  function rd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = dt();
      t = uc(t);
      var a = Ya(l, t);
      (a !== null && Il(a, l, t), sf(l, t));
    }
  }
  var Qn = !0;
  function av(l, t, a, u) {
    var e = A.T;
    A.T = null;
    var n = U.p;
    try {
      ((U.p = 2), of(l, t, a, u));
    } finally {
      ((U.p = n), (A.T = e));
    }
  }
  function uv(l, t, a, u) {
    var e = A.T;
    A.T = null;
    var n = U.p;
    try {
      ((U.p = 8), of(l, t, a, u));
    } finally {
      ((U.p = n), (A.T = e));
    }
  }
  function of(l, t, a, u) {
    if (Qn) {
      var e = df(u);
      if (e === null) (Wi(l, t, u, Zn, a), gd(l, u));
      else if (nv(e, l, t, a, u)) u.stopPropagation();
      else if ((gd(l, u), t & 4 && -1 < ev.indexOf(l))) {
        for (; e !== null;) {
          var n = Ia(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = pa(n.pendingLanes);
                  if (c !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c;) {
                      var o = 1 << (31 - et(c));
                      ((i.entanglements[1] |= o), (c &= ~o));
                    }
                    (Ht(n), (al & 6) === 0 && ((On = at() + 500), Se(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((i = Ya(n, 2)), i !== null && Il(i, n, 2), Nn(), sf(n, 2));
            }
          if (((n = df(u)), n === null && Wi(l, t, u, Zn, a), n === e)) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else Wi(l, t, u, null, a);
    }
  }
  function df(l) {
    return ((l = mc(l)), mf(l));
  }
  var Zn = null;
  function mf(l) {
    if (((Zn = null), (l = ka(l)), l !== null)) {
      var t = N(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = R(t)), l !== null)) return l;
          l = null;
        } else if (a === 31) {
          if (((l = p(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((Zn = l), null);
  }
  function Sd(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Zd()) {
          case zf:
            return 2;
          case Of:
            return 8;
          case Re:
          case Vd:
            return 32;
          case Mf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var yf = !1,
    _a = null,
    za = null,
    Oa = null,
    ze = new Map(),
    Oe = new Map(),
    Ma = [],
    ev =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function gd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        _a = null;
        break;
      case "dragenter":
      case "dragleave":
        za = null;
        break;
      case "mouseover":
      case "mouseout":
        Oa = null;
        break;
      case "pointerover":
      case "pointerout":
        ze.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Oe.delete(t.pointerId);
    }
  }
  function Me(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = Ia(t)), t !== null && hd(t)),
        l)
      : ((l.eventSystemFlags |= u),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function nv(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return ((_a = Me(_a, l, t, a, u, e)), !0);
      case "dragenter":
        return ((za = Me(za, l, t, a, u, e)), !0);
      case "mouseover":
        return ((Oa = Me(Oa, l, t, a, u, e)), !0);
      case "pointerover":
        var n = e.pointerId;
        return (ze.set(n, Me(ze.get(n) || null, l, t, a, u, e)), !0);
      case "gotpointercapture":
        return (
          (n = e.pointerId),
          Oe.set(n, Me(Oe.get(n) || null, l, t, a, u, e)),
          !0
        );
    }
    return !1;
  }
  function bd(l) {
    var t = ka(l.target);
    if (t !== null) {
      var a = N(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = R(a)), t !== null)) {
            ((l.blockedOn = t),
              Cf(l.priority, function () {
                rd(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = p(a)), t !== null)) {
            ((l.blockedOn = t),
              Cf(l.priority, function () {
                rd(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Vn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length;) {
      var a = df(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        ((dc = u), a.target.dispatchEvent(u), (dc = null));
      } else return ((t = Ia(a)), t !== null && hd(t), (l.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function Ed(l, t, a) {
    Vn(l) && a.delete(t);
  }
  function cv() {
    ((yf = !1),
      _a !== null && Vn(_a) && (_a = null),
      za !== null && Vn(za) && (za = null),
      Oa !== null && Vn(Oa) && (Oa = null),
      ze.forEach(Ed),
      Oe.forEach(Ed));
  }
  function Kn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      yf ||
        ((yf = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, cv)));
  }
  var Jn = null;
  function Td(l) {
    Jn !== l &&
      ((Jn = l),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        Jn === l && (Jn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            u = l[t + 1],
            e = l[t + 2];
          if (typeof u != "function") {
            if (mf(u || a) === null) continue;
            break;
          }
          var n = Ia(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            oi(n, { pending: !0, data: e, method: a.method, action: u }, u, e));
        }
      }));
  }
  function Hu(l) {
    function t(o) {
      return Kn(o, l);
    }
    (_a !== null && Kn(_a, l),
      za !== null && Kn(za, l),
      Oa !== null && Kn(Oa, l),
      ze.forEach(t),
      Oe.forEach(t));
    for (var a = 0; a < Ma.length; a++) {
      var u = Ma[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < Ma.length && ((a = Ma[0]), a.blockedOn === null);)
      (bd(a), a.blockedOn === null && Ma.shift());
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var e = a[u],
          n = a[u + 1],
          c = e[Jl] || null;
        if (typeof n == "function") c || Td(a);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (c = n[Jl] || null))) i = c.formAction;
            else if (mf(e) !== null) continue;
          } else i = c.action;
          (typeof i == "function" ? (a[u + 1] = i) : (a.splice(u, 3), (u -= 3)),
            Td(a));
        }
      }
  }
  function Ad() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (c) {
              return (e = c);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (e !== null && (e(), (e = null)), u || setTimeout(a, 20));
    }
    function a() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var u = !1,
        e = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((u = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            e !== null && (e(), (e = null)));
        }
      );
    }
  }
  function vf(l) {
    this._internalRoot = l;
  }
  ((wn.prototype.render = vf.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(f(409));
      var a = t.current,
        u = dt();
      yd(a, u, l, t, null, null);
    }),
    (wn.prototype.unmount = vf.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (yd(l.current, 2, null, l, null, null), Nn(), (t[Fa] = null));
        }
      }));
  function wn(l) {
    this._internalRoot = l;
  }
  wn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Rf();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < Ma.length && t !== 0 && t < Ma[a].priority; a++);
      (Ma.splice(a, 0, l), a === 0 && bd(l));
    }
  };
  var _d = b.version;
  if (_d !== "19.2.8") throw Error(f(527, _d, "19.2.8"));
  U.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(f(188))
        : ((l = Object.keys(l).join(",")), Error(f(268, l)));
    return (
      (l = E(t)),
      (l = l !== null ? j(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var iv = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.2.8",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$n.isDisabled && $n.supportsFiber)
      try {
        ((Bu = $n.inject(iv)), (ut = $n));
      } catch {}
  }
  return (
    (De.createRoot = function (l, t) {
      if (!M(l)) throw Error(f(299));
      var a = !1,
        u = "",
        e = Uo,
        n = Ro,
        c = Co;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = dd(l, 1, !1, null, null, a, u, null, e, n, c, Ad)),
        (l[Fa] = t.current),
        $i(l),
        new vf(t)
      );
    }),
    (De.hydrateRoot = function (l, t, a) {
      if (!M(l)) throw Error(f(299));
      var u = !1,
        e = "",
        n = Uo,
        c = Ro,
        i = Co,
        o = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (c = a.onCaughtError),
          a.onRecoverableError !== void 0 && (i = a.onRecoverableError),
          a.formState !== void 0 && (o = a.formState)),
        (t = dd(l, 1, !0, t, a ?? null, u, e, o, n, c, i, Ad)),
        (t.context = md(null)),
        (a = t.current),
        (u = dt()),
        (u = uc(u)),
        (e = da(u)),
        (e.callback = null),
        ma(a, e, u),
        (a = u),
        (t.current.lanes = a),
        ju(t, a),
        Ht(t),
        (l[Fa] = t.current),
        $i(l),
        new wn(t)
      );
    }),
    (De.version = "19.2.8"),
    De
  );
}
var Hd;
function gv() {
  if (Hd) return Sf.exports;
  Hd = 1;
  function s() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (b) {
        console.error(b);
      }
  }
  return (s(), (Sf.exports = Sv()), Sf.exports);
}
var bv = gv();
const Ev = Bd(bv),
  wa = {
    TEXT: "text",
    NUMERIC: "numeric",
    COMB: "comb",
    CHECKBOX: "checkbox",
    RADIO_GROUP: "radio_group",
    SPLIT_AMOUNT: "split_amount",
    REPEATING_GROUP: "repeating_group",
  },
  qd = { CROSS: "X" },
  Yt = {
    EQUALS: "equals",
    NOT_EQUALS: "not_equals",
    IN: "in",
    NOT_IN: "not_in",
    GREATER_THAN: "greater_than",
    LESS_THAN: "less_than",
    TRUTHY: "truthy",
    FALSY: "falsy",
    EXISTS: "exists",
  };
function Tv(s, b, g) {
  return b
    ? [
        {
          fieldId: s.id,
          pageNumber: s.page,
          type: "mark",
          symbol: s.markSymbol || qd.CROSS,
          bounds: s.bounds,
          checked: !0,
          styling: g,
          rawBounds: s.bounds,
        },
      ]
    : [];
}
function Av(s, b, g) {
  var M;
  if (!((M = s.radioOptions) != null && M.length)) return [];
  const f = s.radioOptions.find(
    (N) => N.value === b || String(N.value) === String(b),
  );
  return f
    ? [
        {
          fieldId: `${s.id}_${f.value}`,
          pageNumber: s.page,
          type: "mark",
          symbol: s.markSymbol || qd.CROSS,
          bounds: f.bounds,
          checked: !0,
          styling: g,
          rawBounds: f.bounds,
        },
      ]
    : [];
}
const _v = { COURIER: "Courier" },
  pe = {
    FONT_FAMILY: _v.COURIER,
    FONT_SIZE: 10,
    MIN_FONT_SIZE: 6,
    LINE_HEIGHT: 1.2,
    COLOR: "#000000",
    LETTER_SPACING: 0,
  },
  Pt = {
    CURRENCY: "currency",
    INTEGER: "integer",
    DECIMAL: "decimal",
    SSN: "ssn",
    EIN: "ein",
    DATE: "date",
    UPPERCASE: "uppercase",
    LOWERCASE: "lowercase",
  },
  $a = {
    ISO: "YYYY-MM-DD",
    US_SLASH: "MM/DD/YYYY",
    US_DASH: "MM-DD-YYYY",
    COMPACT: "MMDDYYYY",
    MONTH_DAY: "MM/DD",
    YEAR_ONLY: "YYYY",
  },
  Wa = {
    CURRENCY_SYMBOL: "$",
    THOUSANDS_SEPARATOR: ",",
    DECIMAL_SEPARATOR: ".",
    DECIMAL_PLACES: 2,
    NEGATIVE_STYLE: "parentheses",
    INCLUDE_SYMBOL: !1,
  };
function zv(s, b) {
  if (s == null || s === "") return "";
  const g =
    typeof s == "number" ? s : parseFloat(String(s).replace(/[^0-9.-]+/g, ""));
  if (isNaN(g)) return String(s);
  const f = (b == null ? void 0 : b.decimalPlaces) ?? Wa.DECIMAL_PLACES,
    M = (b == null ? void 0 : b.includeCurrencySymbol) ?? Wa.INCLUDE_SYMBOL,
    N = (b == null ? void 0 : b.negativeStyle) ?? Wa.NEGATIVE_STYLE,
    R = g < 0,
    D = Math.abs(g).toFixed(f).split("."),
    E = (D[0] ?? "0").replace(/\B(?=(\d{3})+(?!\d))/g, Wa.THOUSANDS_SEPARATOR),
    j = D.length > 1 && D[1] !== void 0 ? `${Wa.DECIMAL_SEPARATOR}${D[1]}` : "";
  let C = `${E}${j}`;
  return (
    M && (C = `${Wa.CURRENCY_SYMBOL}${C}`),
    R && (C = N === "parentheses" ? `(${C})` : `-${C}`),
    C
  );
}
function Ov(s) {
  if (s == null || s === "") return { dollars: "", cents: "" };
  const b =
    typeof s == "number" ? s : parseFloat(String(s).replace(/[^0-9.-]+/g, ""));
  if (isNaN(b)) return { dollars: String(s), cents: "" };
  const g = b < 0,
    M = Math.abs(b).toFixed(2).split(".");
  let N = (M[0] ?? "0").replace(
    /\B(?=(\d{3})+(?!\d))/g,
    Wa.THOUSANDS_SEPARATOR,
  );
  const R = M[1] ?? "00";
  return (g && (N = `(${N})`), { dollars: N, cents: R });
}
function Mv(s, b) {
  if (s == null || s === "") return "";
  const g = String(s).replace(/\D/g, ""),
    f = b == null ? void 0 : b.mask;
  if (f) {
    let M = 0,
      N = "";
    for (const R of f)
      R === "#" || R === "X" || R === "x"
        ? M < g.length && (N += g[M++])
        : (N += R);
    return N;
  }
  return (b == null ? void 0 : b.formatter) === Pt.EIN
    ? g.length === 9
      ? `${g.slice(0, 2)}-${g.slice(2, 9)}`
      : String(s)
    : g.length === 9
      ? `${g.slice(0, 3)}-${g.slice(3, 5)}-${g.slice(5, 9)}`
      : String(s);
}
function Nv(s) {
  if (!s) return { month: "", day: "", year: "" };
  const b = String(s).trim();
  if (b.includes("-")) {
    const [g = "", f = "", M = ""] = b.split("-");
    return { year: g, month: f.padStart(2, "0"), day: M.padStart(2, "0") };
  }
  if (b.includes("/")) {
    const [g = "", f = "", M = ""] = b.split("/");
    return { month: g.padStart(2, "0"), day: f.padStart(2, "0"), year: M };
  }
  return b.length === 8 && /^\d+$/.test(b)
    ? parseInt(b.slice(0, 4), 10) > 1900
      ? { year: b.slice(0, 4), month: b.slice(4, 6), day: b.slice(6, 8) }
      : { month: b.slice(0, 2), day: b.slice(2, 4), year: b.slice(4, 8) }
    : { month: "", day: "", year: "" };
}
function Dv(s, b) {
  if (s == null || s === "") return "";
  const { month: g, day: f, year: M } = Nv(s);
  if (!g || !f || !M) return String(s).trim();
  switch ((b == null ? void 0 : b.datePattern) ?? $a.US_SLASH) {
    case $a.US_SLASH:
      return `${g}/${f}/${M}`;
    case $a.US_DASH:
      return `${g}-${f}-${M}`;
    case $a.ISO:
      return `${M}-${g}-${f}`;
    case $a.COMPACT:
      return `${g}${f}${M}`;
    case $a.MONTH_DAY:
      return `${g}/${f}`;
    case $a.YEAR_ONLY:
      return M;
    default:
      return `${g}/${f}/${M}`;
  }
}
function pv(s, b, g = "left", f = !1) {
  if (s == null || s === "") return Array(b).fill("");
  let M = String(s);
  f && (M = M.replace(/\D/g, ""));
  const N = M.split(""),
    R = Array(b).fill("");
  if (g === "right") {
    const p = Math.max(0, b - N.length);
    for (let D = 0; D < N.length && p + D < b; D++) R[p + D] = N[D] ?? "";
  } else if (g === "center") {
    const p = Math.max(0, Math.floor((b - N.length) / 2));
    for (let D = 0; D < N.length && p + D < b; D++) R[p + D] = N[D] ?? "";
  } else for (let p = 0; p < Math.min(b, N.length); p++) R[p] = N[p] ?? "";
  return R;
}
function jd(s, b) {
  if (s == null) return "";
  if (!b) return String(s);
  let g = String(s);
  switch (b.formatter) {
    case Pt.CURRENCY:
      g = zv(s, b);
      break;
    case Pt.SSN:
    case Pt.EIN:
      g = Mv(s, b);
      break;
    case Pt.DATE:
      g = Dv(s, b);
      break;
    case Pt.UPPERCASE:
      g = String(s).toUpperCase();
      break;
    case Pt.LOWERCASE:
      g = String(s).toLowerCase();
      break;
    case Pt.INTEGER: {
      const f = parseInt(String(s), 10);
      g = isNaN(f) ? String(s) : String(f);
      break;
    }
    case Pt.DECIMAL: {
      const f = typeof s == "number" ? s : parseFloat(String(s));
      g = isNaN(f)
        ? String(s)
        : b.decimalPlaces !== void 0
          ? f.toFixed(b.decimalPlaces)
          : String(f);
      break;
    }
    default:
      g = String(s);
  }
  return (
    b.stripNonDigits && (g = g.replace(/\D/g, "")),
    b.padLength && (g = g.padStart(b.padLength, b.padChar || "0")),
    g
  );
}
function Uv(s, b, g) {
  const {
      cellCount: f,
      cellWidth: M = s.width / f,
      pitch: N = s.width / f,
      alignment: R = "left",
      segmentGaps: p = [],
    } = b,
    D = pv(g, f, R, !0),
    E = [];
  let j = s.x,
    C = 0,
    ul = 0;
  for (let bl = 0; bl < f; bl++) {
    const rl = { x: j, y: s.y, width: M, height: s.height };
    (E.push({ char: D[bl] ?? "", bounds: rl, cellIndex: bl }), (j += N), C++);
    const _l = p[ul];
    _l !== void 0 && C === _l && bl < f - 1 && ((j += 4), (C = 0), ul++);
  }
  return E;
}
function Gd(s, b, g) {
  const f = g.fontSize || pe.FONT_SIZE,
    M = g.minFontSize || pe.MIN_FONT_SIZE;
  if (!s || s.length === 0) return f;
  const N = 0.6;
  if (s.length * f * N <= b.width) return f;
  const p = (b.width / (s.length * N)) * 0.95;
  return Math.max(M, Math.min(f, Math.floor(p * 10) / 10));
}
function Rv(s, b, g) {
  if (!s.combConfig) return [];
  const f = Uv(s.bounds, s.combConfig, b);
  return [
    {
      fieldId: s.id,
      pageNumber: s.page,
      type: "comb_cells",
      cells: f,
      calculatedFontSize: g.fontSize || pe.FONT_SIZE,
      styling: g,
      rawBounds: s.bounds,
    },
  ];
}
function Cv(s, b, g) {
  if (!s.splitAmountConfig) return [];
  const { dollars: f, cents: M } = Ov(b);
  return [
    {
      fieldId: s.id,
      pageNumber: s.page,
      type: "split_amount",
      dollars: f,
      cents: M,
      dollarsBounds: s.splitAmountConfig.dollarsBounds,
      centsBounds: s.splitAmountConfig.centsBounds,
      calculatedFontSize: g.fontSize || pe.FONT_SIZE,
      styling: g,
      rawBounds: s.bounds,
    },
  ];
}
function Wn(s, b, g = null) {
  if (s == null || !b || typeof b != "string") return g ?? null;
  let f = b.trim();
  if (
    (f.startsWith("$.")
      ? (f = f.substring(2))
      : f.startsWith("$") && (f = f.substring(1)),
    !f)
  )
    return s ?? g ?? null;
  const M = f
    .replace(/\[(\w+|\*)\]/g, ".$1")
    .replace(/^\./, "")
    .split(".")
    .filter((R) => R.length > 0);
  let N = s;
  for (let R = 0; R < M.length; R++) {
    if (N == null) return g ?? null;
    const p = M[R];
    if (p) {
      if (p === "*" && Array.isArray(N)) {
        const D = M.slice(R + 1);
        return D.length === 0
          ? N
          : (N.map((j) => Wn(j, D.join("."), null)) ?? g ?? null);
      }
      if (typeof N == "object" && p in N) N = N[p];
      else if (Array.isArray(N) && !isNaN(Number(p))) N = N[Number(p)];
      else return g ?? null;
    }
  }
  return N ?? g ?? null;
}
function Hv(s, b) {
  if (!s || !s.path) return !0;
  const g = Wn(b, s.path),
    f = s.value;
  switch (s.operator || Yt.EQUALS) {
    case Yt.EQUALS:
      return g === f || String(g) === String(f);
    case Yt.NOT_EQUALS:
      return g !== f && String(g) !== String(f);
    case Yt.IN:
      return Array.isArray(f)
        ? f.some((N) => N === g || String(N) === String(g))
        : !1;
    case Yt.NOT_IN:
      return Array.isArray(f)
        ? !f.some((N) => N === g || String(N) === String(g))
        : !0;
    case Yt.GREATER_THAN:
      return Number(g) > Number(f);
    case Yt.LESS_THAN:
      return Number(g) < Number(f);
    case Yt.EXISTS:
      return g != null && g !== "";
    case Yt.TRUTHY:
      return !!g;
    case Yt.FALSY:
      return !g;
    default:
      return !0;
  }
}
function Yv(s, b, g) {
  if (b == null || b === "") return [];
  const f = jd(b, s.formatting),
    M = Gd(f, s.bounds, g);
  return [
    {
      fieldId: s.id,
      pageNumber: s.page,
      type: "text",
      text: f,
      bounds: s.bounds,
      calculatedFontSize: M,
      styling: g,
      rawBounds: s.bounds,
    },
  ];
}
function Bv(s, b, g) {
  const f = s.repeatingGroupConfig;
  return !f || !Array.isArray(b)
    ? []
    : b.slice(0, f.maxRows).flatMap((M, N) => {
        const R = s.bounds.y + N * f.rowStride;
        return f.columns.map((p) => {
          const D = Wn(M, p.key),
            E = jd(D, p.formatting),
            j = {
              x: s.bounds.x + p.xOffset,
              y: R,
              width: p.width,
              height: f.rowStride,
            },
            C = { ...g, ...p.styling };
          return {
            fieldId: `${s.id}_row${N}_${p.key}`,
            pageNumber: s.page,
            type: "text",
            text: E,
            bounds: j,
            calculatedFontSize: Gd(E, j, C),
            styling: C,
            rawBounds: j,
          };
        });
      });
}
function qv(s, b, g) {
  const f = s.binding ? Wn(b, s.binding.path, s.binding.defaultValue) : void 0,
    M = { ...pe, ...g, ...s.styling };
  switch (s.type) {
    case wa.CHECKBOX:
      return Tv(s, f, M);
    case wa.RADIO_GROUP:
      return Av(s, f, M);
    case wa.COMB:
      return Rv(s, f, M);
    case wa.SPLIT_AMOUNT:
      return Cv(s, f, M);
    case wa.REPEATING_GROUP:
      return Bv(s, f, M);
    case wa.NUMERIC:
    case wa.TEXT:
    default:
      return Yv(s, f, M);
  }
}
function jv(s, b) {
  const g = new Map();
  for (const R of s.pages)
    g.set(R.pageNumber, {
      pageNumber: R.pageNumber,
      width: R.width,
      height: R.height,
      units: R.units,
      instructions: [],
    });
  let f = 0,
    M = 0,
    N = 0;
  for (const R of s.fields) {
    if ((f++, R.condition && !Hv(R.condition, b))) {
      N++;
      continue;
    }
    const p = qv(R, b, s.defaultStyling);
    if (p.length > 0) {
      M++;
      for (const D of p) {
        const E = g.get(D.pageNumber);
        E && E.instructions.push(D);
      }
    } else N++;
  }
  return {
    formId: s.formId,
    taxYear: s.taxYear,
    pages: Array.from(g.values()),
    totalFieldsProcessed: f,
    renderedFieldsCount: M,
    skippedFieldsCount: N,
  };
}
const Gv = { THEME_TOGGLE: "🌓" },
  zt = {
    STUDIO_TITLE: "Tax Form Studio",
    SPEC_EDITOR_BUTTON: "☰ Spec Editor",
    TOGGLE_EDITOR_TOOLTIP: "Toggle Editor Drawer",
    BOXES_CHECKBOX: "Boxes",
    BOXES_TOOLTIP: "Toggle box outlines",
    THEME_TOGGLE_TOOLTIP: "Switch Light/Dark Mode",
    RECOMPILE_BUTTON: "Recompile",
    PRINT_PDF_BUTTON: "Print / PDF",
    PRINT_OVERLAY_BUTTON: "Print Form Overlay",
    SHOW_ANNOTATION_GUIDES: "Show Annotation Guides",
    PREVIOUS_PAGE: "Previous Page",
    NEXT_PAGE: "Next Page",
    APPLY_CHANGES: "Apply Changes",
    LOADING_FORM: "Loading form...",
    READY_STATUS: "Ready",
    COMPILED_SUCCESS: "Compiled successfully",
  },
  la = {
    TAX_DATA: { key: "data", label: "Tax Data (JSON)" },
    ANNOTATION_SPEC: { key: "annotation", label: "Annotation Spec (JSON)" },
  },
  ta = {
    PREVIEW: { key: "preview", label: "Form Preview" },
    EDITOR: { key: "editor", label: "JSON Spec / Data" },
  },
  xd = [
    { value: "auto", label: "Auto Fit" },
    { value: "0.5", label: "50%" },
    { value: "0.65", label: "65%" },
    { value: "0.75", label: "75%" },
    { value: "1.0", label: "100%" },
    { value: "1.25", label: "125%" },
  ],
  xv = ({
    formId: s,
    taxYear: b,
    showDebug: g,
    onToggleDebug: f,
    zoomScale: M,
    onZoomChange: N,
    onToggleTheme: R,
    onToggleSidebar: p,
    onRecompile: D,
    onPrint: E,
  }) =>
    X.jsxs("header", {
      className: "studio-header",
      children: [
        X.jsxs("div", {
          className: "brand-section",
          children: [
            X.jsx("button", {
              className: "secondary",
              id: "toggle-sidebar-btn",
              title: zt.TOGGLE_EDITOR_TOOLTIP,
              onClick: p,
              children: zt.SPEC_EDITOR_BUTTON,
            }),
            X.jsx("div", {
              className: "brand-title",
              children: zt.STUDIO_TITLE,
            }),
            X.jsxs("span", { className: "badge", children: [s, " (", b, ")"] }),
          ],
        }),
        X.jsxs("div", {
          className: "toolbar-section",
          children: [
            X.jsx("select", {
              className: "select-control",
              value: M,
              title: "Zoom Scale",
              onChange: (j) => N(j.target.value),
              children: xd.map(({ value: j, label: C }) =>
                X.jsx("option", { value: j, children: C }, j),
              ),
            }),
            X.jsxs("label", {
              className: "control-label",
              title: zt.BOXES_TOOLTIP,
              children: [
                X.jsx("input", {
                  type: "checkbox",
                  checked: g,
                  onChange: (j) => f(j.target.checked),
                }),
                X.jsx("span", { children: zt.BOXES_CHECKBOX }),
              ],
            }),
            X.jsx("button", {
              className: "secondary icon-btn",
              title: zt.THEME_TOGGLE_TOOLTIP,
              onClick: R,
              children: Gv.THEME_TOGGLE,
            }),
            X.jsx("button", {
              className: "secondary",
              onClick: D,
              children: zt.RECOMPILE_BUTTON,
            }),
            X.jsx("button", { onClick: E, children: zt.PRINT_PDF_BUTTON }),
          ],
        }),
      ],
    }),
  Xv = ({ activeView: s, onViewChange: b }) =>
    X.jsxs("div", {
      className: "mobile-view-tabs",
      children: [
        X.jsx("button", {
          className: `mobile-tab-btn ${s === ta.PREVIEW.key ? "active" : ""}`,
          onClick: () => b(ta.PREVIEW.key),
          children: ta.PREVIEW.label,
        }),
        X.jsx("button", {
          className: `mobile-tab-btn ${s === ta.EDITOR.key ? "active" : ""}`,
          onClick: () => b(ta.EDITOR.key),
          children: ta.EDITOR.label,
        }),
      ],
    }),
  Lv = ({
    activeTab: s,
    onTabChange: b,
    editorValue: g,
    onEditorChange: f,
    statusMessage: M,
    isError: N,
    isCollapsed: R,
    isMobileHidden: p,
    onApply: D,
  }) => {
    const E = ["studio-sidebar", R ? "collapsed" : "", p ? "mobile-hidden" : ""]
        .filter(Boolean)
        .join(" "),
      j = ["status-label", N ? "error" : "success"].join(" ");
    return X.jsxs("div", {
      className: E,
      children: [
        X.jsxs("div", {
          className: "tabs-header",
          children: [
            X.jsx("button", {
              className: `tab-btn ${s === la.TAX_DATA.key ? "active" : ""}`,
              onClick: () => b(la.TAX_DATA.key),
              children: la.TAX_DATA.label,
            }),
            X.jsx("button", {
              className: `tab-btn ${s === la.ANNOTATION_SPEC.key ? "active" : ""}`,
              onClick: () => b(la.ANNOTATION_SPEC.key),
              children: la.ANNOTATION_SPEC.label,
            }),
          ],
        }),
        X.jsx("div", {
          className: "editor-wrapper",
          children: X.jsx("textarea", {
            className: "studio-json-editor",
            spellCheck: !1,
            value: g,
            onChange: (C) => f(C.target.value),
          }),
        }),
        X.jsxs("div", {
          className: "sidebar-footer",
          children: [
            X.jsx("span", { className: j, children: M }),
            X.jsx("button", {
              className: "secondary apply-btn",
              onClick: D,
              children: zt.APPLY_CHANGES,
            }),
          ],
        }),
      ],
    });
  },
  Qv = ({ instruction: s, scale: b = 1, showDebug: g = !1, onClick: f }) => {
    const M = f ? () => f(s.fieldId) : void 0,
      N = (p, D = 12) => ({
        left: `${p.x * b}px`,
        top: `${p.y * b}px`,
        width: `${p.width * b}px`,
        height: `${p.height * b}px`,
        fontSize: `${D * b}px`,
      }),
      R = (p = "", D = !1) =>
        [
          "tax-field",
          p,
          g ? (D ? "debug-comb" : "debug-box") : "",
          f ? "clickable" : "",
        ]
          .filter(Boolean)
          .join(" ");
    switch (s.type) {
      case "text": {
        const { bounds: p, text: D, calculatedFontSize: E, styling: j } = s;
        return X.jsx("div", {
          id: s.fieldId,
          className: R(`align-${j.textAlign || "left"}`),
          onClick: M,
          title: `${s.fieldId}: ${D}`,
          style: N(p, E),
          children: D,
        });
      }
      case "comb_cells": {
        const { cells: p, calculatedFontSize: D } = s;
        return X.jsx("div", {
          id: s.fieldId,
          children: p.map((E) =>
            X.jsx(
              "div",
              {
                className: R("align-center", !0),
                onClick: M,
                style: N(E.bounds, D),
                children: E.char,
              },
              `${s.fieldId}_cell_${E.cellIndex}`,
            ),
          ),
        });
      }
      case "mark": {
        const { bounds: p, symbol: D, styling: E } = s;
        return X.jsx("div", {
          id: s.fieldId,
          className: R("mark"),
          onClick: M,
          style: N(p, E.fontSize || 12),
          children: D,
        });
      }
      case "split_amount": {
        const {
          dollars: p,
          cents: D,
          dollarsBounds: E,
          centsBounds: j,
          calculatedFontSize: C,
        } = s;
        return X.jsxs("div", {
          id: s.fieldId,
          onClick: M,
          children: [
            X.jsx("div", {
              className: R("align-right"),
              style: N(E, C),
              children: p,
            }),
            X.jsx("div", {
              className: R("align-center"),
              style: N(j, C),
              children: D,
            }),
          ],
        });
      }
    }
  },
  Zv = ({
    page: s,
    scale: b,
    showDebug: g,
    backgroundImageUrl: f,
    onFieldClick: M,
  }) =>
    X.jsx("div", {
      className: "page-viewport",
      style: {
        width: `${s.width * b}px`,
        height: `${s.height * b}px`,
        backgroundImage: f ? `url(${f})` : "none",
      },
      children: s.instructions.map((N) =>
        X.jsx(
          Qv,
          { instruction: N, scale: b, showDebug: g, onClick: M },
          N.fieldId,
        ),
      ),
    }),
  Vv = ({
    compiledResult: s,
    scale: b,
    showDebug: g,
    isMobileHidden: f,
    backgroundImages: M = {},
    onFieldClick: N,
  }) => {
    if (!s)
      return X.jsx("div", {
        className: "studio-preview-stage",
        children: zt.LOADING_FORM,
      });
    const R = ["studio-preview-stage", f ? "mobile-hidden" : ""]
      .filter(Boolean)
      .join(" ");
    return X.jsx("div", {
      className: R,
      id: "preview-stage-container",
      children: s.pages.map((p) =>
        X.jsx(
          "div",
          {
            className: "page-scale-wrapper",
            style: {
              transform: `scale(${b})`,
              marginBottom: `${p.height * (b - 1)}px`,
            },
            children: X.jsxs("div", {
              className: "page-sheet",
              style: { width: `${p.width}pt`, height: `${p.height}pt` },
              children: [
                X.jsxs("div", {
                  className: "page-watermark",
                  children: ["Page ", p.pageNumber, " (", s.formId, ")"],
                }),
                X.jsx(Zv, {
                  page: p,
                  scale: 1,
                  showDebug: g,
                  backgroundImageUrl: M[p.pageNumber],
                  onFieldClick: N,
                }),
              ],
            }),
          },
          `page_wrapper_${p.pageNumber}`,
        ),
      ),
    });
  },
  Kv = () => {
    const [s, b] = pl.useState(null),
      [g, f] = pl.useState(null),
      [M, N] = pl.useState(la.TAX_DATA.key),
      [R, p] = pl.useState(""),
      [D, E] = pl.useState(zt.READY_STATUS),
      [j, C] = pl.useState(!1),
      [ul, bl] = pl.useState(!0),
      [rl, _l] = pl.useState(xd[0].value),
      [Ot, Ll] = pl.useState(1),
      [Mt, Cl] = pl.useState(!1),
      [Bl, mt] = pl.useState(ta.PREVIEW.key);
    pl.useEffect(() => {
      const P = new AbortController();
      async function zl() {
        try {
          const [yt, lt] = await Promise.all([
              fetch("/examples/form-1040-2025.annotation.json", {
                signal: P.signal,
              }),
              fetch("/examples/taxpayer-data.sample.json", {
                signal: P.signal,
              }),
            ]),
            tt = await yt.json(),
            A = await lt.json();
          P.signal.aborted || (b(tt), f(A), p(JSON.stringify(A, null, 2)));
        } catch (yt) {
          P.signal.aborted || (E(`Load Error: ${yt.message}`), C(!0));
        }
      }
      return (
        zl(),
        () => {
          P.abort();
        }
      );
    }, []);
    const Ul = pl.useCallback(() => {
      const P = document.getElementById("preview-stage-container");
      if (!P) return;
      const zl = P.clientWidth - 32,
        lt = Math.min(1.2, Math.max(0.3, zl / 612));
      Ll(lt);
    }, []);
    (pl.useEffect(() => {
      rl === "auto" ? Ul() : Ll(parseFloat(rl));
    }, [rl, Ul, Mt, Bl]),
      pl.useEffect(() => {
        function P() {
          rl === "auto" && Ul();
        }
        return (
          window.addEventListener("resize", P),
          () => window.removeEventListener("resize", P)
        );
      }, [rl, Ul]));
    const J = pl.useCallback(
        (P) => {
          (N(P),
            P === la.TAX_DATA.key
              ? p(JSON.stringify(g, null, 2))
              : p(JSON.stringify(s, null, 2)));
        },
        [g, s],
      ),
      Ql = pl.useMemo(() => (!s || !g ? null : jv(s, g)), [s, g]),
      Pl = pl.useCallback(() => {
        try {
          const P = JSON.parse(R);
          (M === la.TAX_DATA.key ? f(P) : b(P), C(!1), E(zt.COMPILED_SUCCESS));
        } catch (P) {
          (C(!0), E(`JSON Error: ${P.message}`));
        }
      }, [R, M]),
      aa = pl.useCallback(() => {
        const zl =
          (document.documentElement.getAttribute("data-theme") || "light") ===
          "light"
            ? "dark"
            : "light";
        document.documentElement.setAttribute("data-theme", zl);
      }, []);
    return X.jsxs("div", {
      className: "app-root",
      children: [
        X.jsx(xv, {
          formId: (s == null ? void 0 : s.formId) || "IRS-1040-2025",
          taxYear: (s == null ? void 0 : s.taxYear) || 2025,
          showDebug: ul,
          onToggleDebug: bl,
          zoomScale: rl,
          onZoomChange: _l,
          onToggleTheme: aa,
          onToggleSidebar: () => Cl((P) => !P),
          onRecompile: Pl,
          onPrint: () => window.print(),
        }),
        X.jsx(Xv, { activeView: Bl, onViewChange: mt }),
        X.jsxs("div", {
          className: "studio-main-container",
          children: [
            X.jsx(Lv, {
              activeTab: M,
              onTabChange: J,
              editorValue: R,
              onEditorChange: p,
              statusMessage: D,
              isError: j,
              isCollapsed: Mt,
              isMobileHidden: Bl === ta.PREVIEW.key,
              onApply: Pl,
            }),
            X.jsx(Vv, {
              compiledResult: Ql,
              scale: Ot,
              showDebug: ul,
              isMobileHidden: Bl === ta.EDITOR.key,
            }),
          ],
        }),
      ],
    });
  },
  Yd = document.getElementById("root");
Yd &&
  Ev.createRoot(Yd).render(X.jsx(mv.StrictMode, { children: X.jsx(Kv, {}) }));
