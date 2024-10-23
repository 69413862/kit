var Ws = Object.defineProperty;
var Fs = (e, t, r) => t in e ? Ws(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var qe = (e, t, r) => (Fs(e, typeof t != "symbol" ? t + "" : t, r), r);
import * as U from "react";
import zi, { useState as Kt, createContext as oo, useContext as so, useRef as fr, useCallback as St, useDebugValue as zs, useEffect as Ar, useLayoutEffect as $s, useMemo as sn } from "react";
import * as Vs from "react-dom";
import Hs from "react-dom";
var un = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function js(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function co(e) {
  var t = e.default;
  if (typeof t == "function") {
    var r = function() {
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var fo = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var a = "", s = 0; s < arguments.length; s++) {
        var l = arguments[s];
        l && (a = i(a, n(l)));
      }
      return a;
    }
    function n(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return r.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var s = "";
      for (var l in a)
        t.call(a, l) && a[l] && (s = i(s, l));
      return s;
    }
    function i(a, s) {
      return s ? a ? a + " " + s : a + s : a;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(fo);
const Ln = fo.exports;
function _r(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), r === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function Gs(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function uo(...e) {
  return (t) => e.forEach((r) => Gs(r, t));
}
function kr(...e) {
  return U.useCallback(uo(...e), e);
}
var $n = { exports: {} }, tn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var da;
function Ys() {
  if (da)
    return tn;
  da = 1;
  var e = zi, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, v, p) {
    var g, m = {}, _ = null, M = null;
    p !== void 0 && (_ = "" + p), v.key !== void 0 && (_ = "" + v.key), v.ref !== void 0 && (M = v.ref);
    for (g in v)
      n.call(v, g) && !a.hasOwnProperty(g) && (m[g] = v[g]);
    if (l && l.defaultProps)
      for (g in v = l.defaultProps, v)
        m[g] === void 0 && (m[g] = v[g]);
    return { $$typeof: t, type: l, key: _, ref: M, props: m, _owner: i.current };
  }
  return tn.Fragment = r, tn.jsx = s, tn.jsxs = s, tn;
}
var rn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ha;
function Zs() {
  return ha || (ha = 1, process.env.NODE_ENV !== "production" && function() {
    var e = zi, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), S = Symbol.iterator, C = "@@iterator";
    function R(u) {
      if (u === null || typeof u != "object")
        return null;
      var x = S && u[S] || u[C];
      return typeof x == "function" ? x : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function X(u) {
      {
        for (var x = arguments.length, b = new Array(x > 1 ? x - 1 : 0), I = 1; I < x; I++)
          b[I - 1] = arguments[I];
        B("error", u, b);
      }
    }
    function B(u, x, b) {
      {
        var I = P.ReactDebugCurrentFrame, j = I.getStackAddendum();
        j !== "" && (x += "%s", b = b.concat([j]));
        var V = b.map(function(re) {
          return String(re);
        });
        V.unshift("Warning: " + x), Function.prototype.apply.call(console[u], console, V);
      }
    }
    var G = !1, q = !1, Ce = !1, Pe = !1, se = !1, me;
    me = Symbol.for("react.module.reference");
    function tt(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === a || se || u === i || u === p || u === g || Pe || u === M || G || q || Ce || typeof u == "object" && u !== null && (u.$$typeof === _ || u.$$typeof === m || u.$$typeof === s || u.$$typeof === l || u.$$typeof === v || u.$$typeof === me || u.getModuleId !== void 0));
    }
    function Be(u, x, b) {
      var I = u.displayName;
      if (I)
        return I;
      var j = x.displayName || x.name || "";
      return j !== "" ? b + "(" + j + ")" : b;
    }
    function xe(u) {
      return u.displayName || "Context";
    }
    function Ae(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && X("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case l:
            var x = u;
            return xe(x) + ".Consumer";
          case s:
            var b = u;
            return xe(b._context) + ".Provider";
          case v:
            return Be(u, u.render, "ForwardRef");
          case m:
            var I = u.displayName || null;
            return I !== null ? I : Ae(u.type) || "Memo";
          case _: {
            var j = u, V = j._payload, re = j._init;
            try {
              return Ae(re(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, k = 0, J, Ne, Oe, _e, rt, nt, L;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function ee() {
      {
        if (k === 0) {
          J = console.log, Ne = console.info, Oe = console.warn, _e = console.error, rt = console.group, nt = console.groupCollapsed, L = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        k++;
      }
    }
    function f() {
      {
        if (k--, k === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, u, {
              value: J
            }),
            info: E({}, u, {
              value: Ne
            }),
            warn: E({}, u, {
              value: Oe
            }),
            error: E({}, u, {
              value: _e
            }),
            group: E({}, u, {
              value: rt
            }),
            groupCollapsed: E({}, u, {
              value: nt
            }),
            groupEnd: E({}, u, {
              value: L
            })
          });
        }
        k < 0 && X("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var A = P.ReactCurrentDispatcher, T;
    function D(u, x, b) {
      {
        if (T === void 0)
          try {
            throw Error();
          } catch (j) {
            var I = j.stack.trim().match(/\n( *(at )?)/);
            T = I && I[1] || "";
          }
        return `
` + T + u;
      }
    }
    var W = !1, Q;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new fe();
    }
    function te(u, x) {
      if (!u || W)
        return "";
      {
        var b = Q.get(u);
        if (b !== void 0)
          return b;
      }
      var I;
      W = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = A.current, A.current = null, ee();
      try {
        if (x) {
          var re = function() {
            throw Error();
          };
          if (Object.defineProperty(re.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(re, []);
            } catch (ve) {
              I = ve;
            }
            Reflect.construct(u, [], re);
          } else {
            try {
              re.call();
            } catch (ve) {
              I = ve;
            }
            u.call(re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ve) {
            I = ve;
          }
          u();
        }
      } catch (ve) {
        if (ve && I && typeof ve.stack == "string") {
          for (var $ = ve.stack.split(`
`), le = I.stack.split(`
`), ne = $.length - 1, de = le.length - 1; ne >= 1 && de >= 0 && $[ne] !== le[de]; )
            de--;
          for (; ne >= 1 && de >= 0; ne--, de--)
            if ($[ne] !== le[de]) {
              if (ne !== 1 || de !== 1)
                do
                  if (ne--, de--, de < 0 || $[ne] !== le[de]) {
                    var we = `
` + $[ne].replace(" at new ", " at ");
                    return u.displayName && we.includes("<anonymous>") && (we = we.replace("<anonymous>", u.displayName)), typeof u == "function" && Q.set(u, we), we;
                  }
                while (ne >= 1 && de >= 0);
              break;
            }
        }
      } finally {
        W = !1, A.current = V, f(), Error.prepareStackTrace = j;
      }
      var be = u ? u.displayName || u.name : "", Ee = be ? D(be) : "";
      return typeof u == "function" && Q.set(u, Ee), Ee;
    }
    function Te(u, x, b) {
      return te(u, !1);
    }
    function ae(u) {
      var x = u.prototype;
      return !!(x && x.isReactComponent);
    }
    function Ie(u, x, b) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return te(u, ae(u));
      if (typeof u == "string")
        return D(u);
      switch (u) {
        case p:
          return D("Suspense");
        case g:
          return D("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case v:
            return Te(u.render);
          case m:
            return Ie(u.type, x, b);
          case _: {
            var I = u, j = I._payload, V = I._init;
            try {
              return Ie(V(j), x, b);
            } catch {
            }
          }
        }
      return "";
    }
    var Ye = Object.prototype.hasOwnProperty, ut = {}, ht = P.ReactDebugCurrentFrame;
    function Ze(u) {
      if (u) {
        var x = u._owner, b = Ie(u.type, u._source, x ? x.type : null);
        ht.setExtraStackFrame(b);
      } else
        ht.setExtraStackFrame(null);
    }
    function bt(u, x, b, I, j) {
      {
        var V = Function.call.bind(Ye);
        for (var re in u)
          if (V(u, re)) {
            var $ = void 0;
            try {
              if (typeof u[re] != "function") {
                var le = Error((I || "React class") + ": " + b + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw le.name = "Invariant Violation", le;
              }
              $ = u[re](x, re, I, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ne) {
              $ = ne;
            }
            $ && !($ instanceof Error) && (Ze(j), X("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", b, re, typeof $), Ze(null)), $ instanceof Error && !($.message in ut) && (ut[$.message] = !0, Ze(j), X("Failed %s type: %s", b, $.message), Ze(null));
          }
      }
    }
    var Et = Array.isArray;
    function _t(u) {
      return Et(u);
    }
    function Jt(u) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, b = x && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return b;
      }
    }
    function Ht(u) {
      try {
        return jt(u), !1;
      } catch {
        return !0;
      }
    }
    function jt(u) {
      return "" + u;
    }
    function kt(u) {
      if (Ht(u))
        return X("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Jt(u)), jt(u);
    }
    var It = P.ReactCurrentOwner, Qt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, er, hr, Wt;
    Wt = {};
    function tr(u) {
      if (Ye.call(u, "ref")) {
        var x = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function Gt(u) {
      if (Ye.call(u, "key")) {
        var x = Object.getOwnPropertyDescriptor(u, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Ft(u, x) {
      if (typeof u.ref == "string" && It.current && x && It.current.stateNode !== x) {
        var b = Ae(It.current.type);
        Wt[b] || (X('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ae(It.current.type), u.ref), Wt[b] = !0);
      }
    }
    function Dt(u, x) {
      {
        var b = function() {
          er || (er = !0, X("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        b.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function zt(u, x) {
      {
        var b = function() {
          hr || (hr = !0, X("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        b.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var Yt = function(u, x, b, I, j, V, re) {
      var $ = {
        $$typeof: t,
        type: u,
        key: x,
        ref: b,
        props: re,
        _owner: V
      };
      return $._store = {}, Object.defineProperty($._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty($, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.defineProperty($, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
    };
    function $t(u, x, b, I, j) {
      {
        var V, re = {}, $ = null, le = null;
        b !== void 0 && (kt(b), $ = "" + b), Gt(x) && (kt(x.key), $ = "" + x.key), tr(x) && (le = x.ref, Ft(x, j));
        for (V in x)
          Ye.call(x, V) && !Qt.hasOwnProperty(V) && (re[V] = x[V]);
        if (u && u.defaultProps) {
          var ne = u.defaultProps;
          for (V in ne)
            re[V] === void 0 && (re[V] = ne[V]);
        }
        if ($ || le) {
          var de = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          $ && Dt(re, de), le && zt(re, de);
        }
        return Yt(u, $, le, j, I, It.current, re);
      }
    }
    var Ct = P.ReactCurrentOwner, Zt = P.ReactDebugCurrentFrame;
    function Nt(u) {
      if (u) {
        var x = u._owner, b = Ie(u.type, u._source, x ? x.type : null);
        Zt.setExtraStackFrame(b);
      } else
        Zt.setExtraStackFrame(null);
    }
    var rr;
    rr = !1;
    function nr(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function lt() {
      {
        if (Ct.current) {
          var u = Ae(Ct.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function Ot(u) {
      {
        if (u !== void 0) {
          var x = u.fileName.replace(/^.*[\\\/]/, ""), b = u.lineNumber;
          return `

Check your code at ` + x + ":" + b + ".";
        }
        return "";
      }
    }
    var Mt = {};
    function ir(u) {
      {
        var x = lt();
        if (!x) {
          var b = typeof u == "string" ? u : u.displayName || u.name;
          b && (x = `

Check the top-level render call using <` + b + ">.");
        }
        return x;
      }
    }
    function qt(u, x) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var b = ir(x);
        if (Mt[b])
          return;
        Mt[b] = !0;
        var I = "";
        u && u._owner && u._owner !== Ct.current && (I = " It was passed a child from " + Ae(u._owner.type) + "."), Nt(u), X('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, I), Nt(null);
      }
    }
    function ar(u, x) {
      {
        if (typeof u != "object")
          return;
        if (_t(u))
          for (var b = 0; b < u.length; b++) {
            var I = u[b];
            nr(I) && qt(I, x);
          }
        else if (nr(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var j = R(u);
          if (typeof j == "function" && j !== u.entries)
            for (var V = j.call(u), re; !(re = V.next()).done; )
              nr(re.value) && qt(re.value, x);
        }
      }
    }
    function yr(u) {
      {
        var x = u.type;
        if (x == null || typeof x == "string")
          return;
        var b;
        if (typeof x == "function")
          b = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === v || x.$$typeof === m))
          b = x.propTypes;
        else
          return;
        if (b) {
          var I = Ae(x);
          bt(b, u.props, "prop", I, u);
        } else if (x.PropTypes !== void 0 && !rr) {
          rr = !0;
          var j = Ae(x);
          X("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && X("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ot(u) {
      {
        for (var x = Object.keys(u.props), b = 0; b < x.length; b++) {
          var I = x[b];
          if (I !== "children" && I !== "key") {
            Nt(u), X("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), Nt(null);
            break;
          }
        }
        u.ref !== null && (Nt(u), X("Invalid attribute `ref` supplied to `React.Fragment`."), Nt(null));
      }
    }
    var or = {};
    function c(u, x, b, I, j, V) {
      {
        var re = tt(u);
        if (!re) {
          var $ = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && ($ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var le = Ot(j);
          le ? $ += le : $ += lt();
          var ne;
          u === null ? ne = "null" : _t(u) ? ne = "array" : u !== void 0 && u.$$typeof === t ? (ne = "<" + (Ae(u.type) || "Unknown") + " />", $ = " Did you accidentally export a JSX literal instead of a component?") : ne = typeof u, X("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ne, $);
        }
        var de = $t(u, x, b, j, V);
        if (de == null)
          return de;
        if (re) {
          var we = x.children;
          if (we !== void 0)
            if (I)
              if (_t(we)) {
                for (var be = 0; be < we.length; be++)
                  ar(we[be], u);
                Object.freeze && Object.freeze(we);
              } else
                X("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ar(we, u);
        }
        if (Ye.call(x, "key")) {
          var Ee = Ae(u), ve = Object.keys(x).filter(function(oe) {
            return oe !== "key";
          }), ue = ve.length > 0 ? "{key: someKey, " + ve.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!or[Ee + ue]) {
            var ge = ve.length > 0 ? "{" + ve.join(": ..., ") + ": ...}" : "{}";
            X(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ue, Ee, ge, Ee), or[Ee + ue] = !0;
          }
        }
        return u === n ? ot(de) : yr(de), de;
      }
    }
    function h(u, x, b) {
      return c(u, x, b, !0);
    }
    function d(u, x, b) {
      return c(u, x, b, !1);
    }
    var o = d, y = h;
    rn.Fragment = n, rn.jsx = o, rn.jsxs = y;
  }()), rn;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ys() : e.exports = Zs();
})($n);
const Pr = $n.exports.Fragment, Y = $n.exports.jsx, Xe = $n.exports.jsxs;
function qs(e, t) {
  const r = U.createContext(t), n = (a) => {
    const { children: s, ...l } = a, v = U.useMemo(() => l, Object.values(l));
    return /* @__PURE__ */ Y(r.Provider, { value: v, children: s });
  };
  n.displayName = e + "Provider";
  function i(a) {
    const s = U.useContext(r);
    if (s)
      return s;
    if (t !== void 0)
      return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [n, i];
}
function Ks(e, t = []) {
  let r = [];
  function n(a, s) {
    const l = U.createContext(s), v = r.length;
    r = [...r, s];
    const p = (m) => {
      var P;
      const { scope: _, children: M, ...S } = m, C = ((P = _ == null ? void 0 : _[e]) == null ? void 0 : P[v]) || l, R = U.useMemo(() => S, Object.values(S));
      return /* @__PURE__ */ Y(C.Provider, { value: R, children: M });
    };
    p.displayName = a + "Provider";
    function g(m, _) {
      var C;
      const M = ((C = _ == null ? void 0 : _[e]) == null ? void 0 : C[v]) || l, S = U.useContext(M);
      if (S)
        return S;
      if (s !== void 0)
        return s;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
    }
    return [p, g];
  }
  const i = () => {
    const a = r.map((s) => U.createContext(s));
    return function(l) {
      const v = (l == null ? void 0 : l[e]) || a;
      return U.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: v } }),
        [l, v]
      );
    };
  };
  return i.scopeName = e, [n, Xs(i, ...t)];
}
function Xs(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const r = () => {
    const n = e.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(a) {
      const s = n.reduce((l, { useScope: v, scopeName: p }) => {
        const m = v(a)[`__scope${p}`];
        return { ...l, ...m };
      }, {});
      return U.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var Bn = Boolean(globalThis == null ? void 0 : globalThis.document) ? U.useLayoutEffect : () => {
}, Js = U["useId".toString()] || (() => {
}), Qs = 0;
function ti(e) {
  const [t, r] = U.useState(Js());
  return Bn(() => {
    e || r((n) => n != null ? n : String(Qs++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
function Lr(e) {
  const t = U.useRef(e);
  return U.useEffect(() => {
    t.current = e;
  }), U.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function ec({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  }
}) {
  const [n, i] = tc({ defaultProp: t, onChange: r }), a = e !== void 0, s = a ? e : n, l = Lr(r), v = U.useCallback(
    (p) => {
      if (a) {
        const m = typeof p == "function" ? p(e) : p;
        m !== e && l(m);
      } else
        i(p);
    },
    [a, e, i, l]
  );
  return [s, v];
}
function tc({
  defaultProp: e,
  onChange: t
}) {
  const r = U.useState(e), [n] = r, i = U.useRef(n), a = Lr(t);
  return U.useEffect(() => {
    i.current !== n && (a(n), i.current = n);
  }, [n, i, a]), r;
}
var $i = U.forwardRef((e, t) => {
  const { children: r, ...n } = e, i = U.Children.toArray(r), a = i.find(nc);
  if (a) {
    const s = a.props.children, l = i.map((v) => v === a ? U.Children.count(s) > 1 ? U.Children.only(null) : U.isValidElement(s) ? s.props.children : null : v);
    return /* @__PURE__ */ Y(Si, { ...n, ref: t, children: U.isValidElement(s) ? U.cloneElement(s, void 0, l) : null });
  }
  return /* @__PURE__ */ Y(Si, { ...n, ref: t, children: r });
});
$i.displayName = "Slot";
var Si = U.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  if (U.isValidElement(r)) {
    const i = ac(r);
    return U.cloneElement(r, {
      ...ic(n, r.props),
      ref: t ? uo(t, i) : i
    });
  }
  return U.Children.count(r) > 1 ? U.Children.only(null) : null;
});
Si.displayName = "SlotClone";
var rc = ({ children: e }) => /* @__PURE__ */ Y(Pr, { children: e });
function nc(e) {
  return U.isValidElement(e) && e.type === rc;
}
function ic(e, t) {
  const r = { ...t };
  for (const n in t) {
    const i = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? i && a ? r[n] = (...l) => {
      a(...l), i(...l);
    } : i && (r[n] = i) : n === "style" ? r[n] = { ...i, ...a } : n === "className" && (r[n] = [i, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function ac(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var oc = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], pr = oc.reduce((e, t) => {
  const r = U.forwardRef((n, i) => {
    const { asChild: a, ...s } = n, l = a ? $i : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ Y(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function sc(e, t) {
  e && Vs.flushSync(() => e.dispatchEvent(t));
}
function cc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Lr(e);
  U.useEffect(() => {
    const n = (i) => {
      i.key === "Escape" && r(i);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var fc = "DismissableLayer", Ai = "dismissableLayer.update", uc = "dismissableLayer.pointerDownOutside", lc = "dismissableLayer.focusOutside", pa, lo = U.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ho = U.forwardRef(
  (e, t) => {
    var Pe;
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: l,
      ...v
    } = e, p = U.useContext(lo), [g, m] = U.useState(null), _ = (Pe = g == null ? void 0 : g.ownerDocument) != null ? Pe : globalThis == null ? void 0 : globalThis.document, [, M] = U.useState({}), S = kr(t, (se) => m(se)), C = Array.from(p.layers), [R] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), P = C.indexOf(R), X = g ? C.indexOf(g) : -1, B = p.layersWithOutsidePointerEventsDisabled.size > 0, G = X >= P, q = pc((se) => {
      const me = se.target, tt = [...p.branches].some((Be) => Be.contains(me));
      !G || tt || (i == null || i(se), s == null || s(se), se.defaultPrevented || l == null || l());
    }, _), Ce = yc((se) => {
      const me = se.target;
      [...p.branches].some((Be) => Be.contains(me)) || (a == null || a(se), s == null || s(se), se.defaultPrevented || l == null || l());
    }, _);
    return cc((se) => {
      X === p.layers.size - 1 && (n == null || n(se), !se.defaultPrevented && l && (se.preventDefault(), l()));
    }, _), U.useEffect(() => {
      if (!!g)
        return r && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (pa = _.body.style.pointerEvents, _.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(g)), p.layers.add(g), ya(), () => {
          r && p.layersWithOutsidePointerEventsDisabled.size === 1 && (_.body.style.pointerEvents = pa);
        };
    }, [g, _, r, p]), U.useEffect(() => () => {
      !g || (p.layers.delete(g), p.layersWithOutsidePointerEventsDisabled.delete(g), ya());
    }, [g, p]), U.useEffect(() => {
      const se = () => M({});
      return document.addEventListener(Ai, se), () => document.removeEventListener(Ai, se);
    }, []), /* @__PURE__ */ Y(
      pr.div,
      {
        ...v,
        ref: S,
        style: {
          pointerEvents: B ? G ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: _r(e.onFocusCapture, Ce.onFocusCapture),
        onBlurCapture: _r(e.onBlurCapture, Ce.onBlurCapture),
        onPointerDownCapture: _r(
          e.onPointerDownCapture,
          q.onPointerDownCapture
        )
      }
    );
  }
);
ho.displayName = fc;
var dc = "DismissableLayerBranch", hc = U.forwardRef((e, t) => {
  const r = U.useContext(lo), n = U.useRef(null), i = kr(t, n);
  return U.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ Y(pr.div, { ...e, ref: i });
});
hc.displayName = dc;
function pc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Lr(e), n = U.useRef(!1), i = U.useRef(() => {
  });
  return U.useEffect(() => {
    const a = (l) => {
      if (l.target && !n.current) {
        let v = function() {
          po(
            uc,
            r,
            p,
            { discrete: !0 }
          );
        };
        const p = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = v, t.addEventListener("click", i.current, { once: !0 })) : v();
      } else
        t.removeEventListener("click", i.current);
      n.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", i.current);
    };
  }, [t, r]), {
    onPointerDownCapture: () => n.current = !0
  };
}
function yc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Lr(e), n = U.useRef(!1);
  return U.useEffect(() => {
    const i = (a) => {
      a.target && !n.current && po(lc, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function ya() {
  const e = new CustomEvent(Ai);
  document.dispatchEvent(e);
}
function po(e, t, r, { discrete: n }) {
  const i = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && i.addEventListener(e, t, { once: !0 }), n ? sc(i, a) : i.dispatchEvent(a);
}
var ri = "focusScope.autoFocusOnMount", ni = "focusScope.autoFocusOnUnmount", va = { bubbles: !1, cancelable: !0 }, vc = "FocusScope", yo = U.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: i,
    onUnmountAutoFocus: a,
    ...s
  } = e, [l, v] = U.useState(null), p = Lr(i), g = Lr(a), m = U.useRef(null), _ = kr(t, (C) => v(C)), M = U.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  U.useEffect(() => {
    if (n) {
      let C = function(B) {
        if (M.paused || !l)
          return;
        const G = B.target;
        l.contains(G) ? m.current = G : wr(m.current, { select: !0 });
      }, R = function(B) {
        if (M.paused || !l)
          return;
        const G = B.relatedTarget;
        G !== null && (l.contains(G) || wr(m.current, { select: !0 }));
      }, P = function(B) {
        if (document.activeElement === document.body)
          for (const q of B)
            q.removedNodes.length > 0 && wr(l);
      };
      document.addEventListener("focusin", C), document.addEventListener("focusout", R);
      const X = new MutationObserver(P);
      return l && X.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", C), document.removeEventListener("focusout", R), X.disconnect();
      };
    }
  }, [n, l, M.paused]), U.useEffect(() => {
    if (l) {
      xa.add(M);
      const C = document.activeElement;
      if (!l.contains(C)) {
        const P = new CustomEvent(ri, va);
        l.addEventListener(ri, p), l.dispatchEvent(P), P.defaultPrevented || (gc(Ec(vo(l)), { select: !0 }), document.activeElement === C && wr(l));
      }
      return () => {
        l.removeEventListener(ri, p), setTimeout(() => {
          const P = new CustomEvent(ni, va);
          l.addEventListener(ni, g), l.dispatchEvent(P), P.defaultPrevented || wr(C != null ? C : document.body, { select: !0 }), l.removeEventListener(ni, g), xa.remove(M);
        }, 0);
      };
    }
  }, [l, p, g, M]);
  const S = U.useCallback(
    (C) => {
      if (!r && !n || M.paused)
        return;
      const R = C.key === "Tab" && !C.altKey && !C.ctrlKey && !C.metaKey, P = document.activeElement;
      if (R && P) {
        const X = C.currentTarget, [B, G] = xc(X);
        B && G ? !C.shiftKey && P === G ? (C.preventDefault(), r && wr(B, { select: !0 })) : C.shiftKey && P === B && (C.preventDefault(), r && wr(G, { select: !0 })) : P === X && C.preventDefault();
      }
    },
    [r, n, M.paused]
  );
  return /* @__PURE__ */ Y(pr.div, { tabIndex: -1, ...s, ref: _, onKeyDown: S });
});
yo.displayName = vc;
function gc(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (wr(n, { select: t }), document.activeElement !== r)
      return;
}
function xc(e) {
  const t = vo(e), r = ga(t, e), n = ga(t.reverse(), e);
  return [r, n];
}
function vo(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const i = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || i ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    t.push(r.currentNode);
  return t;
}
function ga(e, t) {
  for (const r of e)
    if (!wc(r, { upTo: t }))
      return r;
}
function wc(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function mc(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function wr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && mc(e) && t && e.select();
  }
}
var xa = bc();
function bc() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = wa(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = wa(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function wa(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function Ec(e) {
  return e.filter((t) => t.tagName !== "A");
}
var _c = "Portal", go = U.forwardRef((e, t) => {
  var l;
  const { container: r, ...n } = e, [i, a] = U.useState(!1);
  Bn(() => a(!0), []);
  const s = r || i && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return s ? Hs.createPortal(/* @__PURE__ */ Y(pr.div, { ...n, ref: t }), s) : null;
});
go.displayName = _c;
function Sc(e, t) {
  return U.useReducer((r, n) => {
    const i = t[r][n];
    return i != null ? i : r;
  }, e);
}
var Vn = (e) => {
  const { present: t, children: r } = e, n = Ac(t), i = typeof r == "function" ? r({ present: n.isPresent }) : U.Children.only(r), a = kr(n.ref, Tc(i));
  return typeof r == "function" || n.isPresent ? U.cloneElement(i, { ref: a }) : null;
};
Vn.displayName = "Presence";
function Ac(e) {
  const [t, r] = U.useState(), n = U.useRef({}), i = U.useRef(e), a = U.useRef("none"), s = e ? "mounted" : "unmounted", [l, v] = Sc(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return U.useEffect(() => {
    const p = vn(n.current);
    a.current = l === "mounted" ? p : "none";
  }, [l]), Bn(() => {
    const p = n.current, g = i.current;
    if (g !== e) {
      const _ = a.current, M = vn(p);
      e ? v("MOUNT") : M === "none" || (p == null ? void 0 : p.display) === "none" ? v("UNMOUNT") : v(g && _ !== M ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, v]), Bn(() => {
    var p;
    if (t) {
      let g;
      const m = (p = t.ownerDocument.defaultView) != null ? p : window, _ = (S) => {
        const R = vn(n.current).includes(S.animationName);
        if (S.target === t && R && (v("ANIMATION_END"), !i.current)) {
          const P = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", g = m.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = P);
          });
        }
      }, M = (S) => {
        S.target === t && (a.current = vn(n.current));
      };
      return t.addEventListener("animationstart", M), t.addEventListener("animationcancel", _), t.addEventListener("animationend", _), () => {
        m.clearTimeout(g), t.removeEventListener("animationstart", M), t.removeEventListener("animationcancel", _), t.removeEventListener("animationend", _);
      };
    } else
      v("ANIMATION_END");
  }, [t, v]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: U.useCallback((p) => {
      p && (n.current = getComputedStyle(p)), r(p);
    }, [])
  };
}
function vn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Tc(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var ii = 0;
function Ic() {
  U.useEffect(() => {
    var t, r;
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (t = e[0]) != null ? t : ma()), document.body.insertAdjacentElement("beforeend", (r = e[1]) != null ? r : ma()), ii++, () => {
      ii === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), ii--;
    };
  }, []);
}
function ma() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ur = function() {
  return ur = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, ur.apply(this, arguments);
};
function xo(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function Cc(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Nn = "right-scroll-bar-position", On = "width-before-scroll-bar", Nc = "with-scroll-bars-hidden", Oc = "--removed-body-scroll-bar-size";
function ai(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Mc(e, t) {
  var r = Kt(function() {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var i = r.value;
          i !== n && (r.value = n, r.callback(n, i));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var Rc = typeof window < "u" ? U.useLayoutEffect : U.useEffect, ba = /* @__PURE__ */ new WeakMap();
function Dc(e, t) {
  var r = Mc(t || null, function(n) {
    return e.forEach(function(i) {
      return ai(i, n);
    });
  });
  return Rc(function() {
    var n = ba.get(r);
    if (n) {
      var i = new Set(n), a = new Set(e), s = r.current;
      i.forEach(function(l) {
        a.has(l) || ai(l, null);
      }), a.forEach(function(l) {
        i.has(l) || ai(l, s);
      });
    }
    ba.set(r, e);
  }, [e]), r;
}
function Pc(e) {
  return e;
}
function Lc(e, t) {
  t === void 0 && (t = Pc);
  var r = [], n = !1, i = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, n);
      return r.push(s), function() {
        r = r.filter(function(l) {
          return l !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (n = !0; r.length; ) {
        var s = r;
        r = [], s.forEach(a);
      }
      r = {
        push: function(l) {
          return a(l);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(a) {
      n = !0;
      var s = [];
      if (r.length) {
        var l = r;
        r = [], l.forEach(a), s = r;
      }
      var v = function() {
        var g = s;
        s = [], g.forEach(a);
      }, p = function() {
        return Promise.resolve().then(v);
      };
      p(), r = {
        push: function(g) {
          s.push(g), p();
        },
        filter: function(g) {
          return s = s.filter(g), r;
        }
      };
    }
  };
  return i;
}
function Bc(e) {
  e === void 0 && (e = {});
  var t = Lc(null);
  return t.options = ur({ async: !0, ssr: !1 }, e), t;
}
var wo = function(e) {
  var t = e.sideCar, r = xo(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return /* @__PURE__ */ Y(n, {
    ...ur({}, r)
  });
};
wo.isSideCarExport = !0;
function Uc(e, t) {
  return e.useMedium(t), wo;
}
var mo = Bc(), oi = function() {
}, Hn = U.forwardRef(function(e, t) {
  var r = U.useRef(null), n = U.useState({
    onScrollCapture: oi,
    onWheelCapture: oi,
    onTouchMoveCapture: oi
  }), i = n[0], a = n[1], s = e.forwardProps, l = e.children, v = e.className, p = e.removeScrollBar, g = e.enabled, m = e.shards, _ = e.sideCar, M = e.noIsolation, S = e.inert, C = e.allowPinchZoom, R = e.as, P = R === void 0 ? "div" : R, X = e.gapMode, B = xo(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), G = _, q = Dc([r, t]), Ce = ur(ur({}, B), i);
  return /* @__PURE__ */ Xe(Pr, {
    children: [g && /* @__PURE__ */ Y(G, {
      sideCar: mo,
      removeScrollBar: p,
      shards: m,
      noIsolation: M,
      inert: S,
      setCallbacks: a,
      allowPinchZoom: !!C,
      lockRef: r,
      gapMode: X
    }), s ? U.cloneElement(U.Children.only(l), ur(ur({}, Ce), {
      ref: q
    })) : /* @__PURE__ */ Y(P, {
      ...ur({}, Ce, {
        className: v,
        ref: q
      }),
      children: l
    })]
  });
});
Hn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Hn.classNames = {
  fullWidth: On,
  zeroRight: Nn
};
var kc = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Wc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = kc();
  return t && e.setAttribute("nonce", t), e;
}
function Fc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function zc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var $c = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Wc()) && (Fc(t, r), zc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Vc = function() {
  var e = $c();
  return function(t, r) {
    U.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, bo = function() {
  var e = Vc(), t = function(r) {
    var n = r.styles, i = r.dynamic;
    return e(n, i), null;
  };
  return t;
}, Hc = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, si = function(e) {
  return parseInt(e || "", 10) || 0;
}, jc = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [si(r), si(n), si(i)];
}, Gc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Hc;
  var t = jc(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, Yc = bo(), Yr = "data-scroll-locked", Zc = function(e, t, r, n) {
  var i = e.left, a = e.top, s = e.right, l = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(Nc, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(l, "px ").concat(n, `;
  }
  body[`).concat(Yr, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(n, ";"), r === "margin" && `
    padding-left: `.concat(i, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(n, `;
    `), r === "padding" && "padding-right: ".concat(l, "px ").concat(n, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Nn, ` {
    right: `).concat(l, "px ").concat(n, `;
  }
  
  .`).concat(On, ` {
    margin-right: `).concat(l, "px ").concat(n, `;
  }
  
  .`).concat(Nn, " .").concat(Nn, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(On, " .").concat(On, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Yr, `] {
    `).concat(Oc, ": ").concat(l, `px;
  }
`);
}, Ea = function() {
  var e = parseInt(document.body.getAttribute(Yr) || "0", 10);
  return isFinite(e) ? e : 0;
}, qc = function() {
  U.useEffect(function() {
    return document.body.setAttribute(Yr, (Ea() + 1).toString()), function() {
      var e = Ea() - 1;
      e <= 0 ? document.body.removeAttribute(Yr) : document.body.setAttribute(Yr, e.toString());
    };
  }, []);
}, Kc = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, i = n === void 0 ? "margin" : n;
  qc();
  var a = U.useMemo(function() {
    return Gc(i);
  }, [i]);
  return /* @__PURE__ */ Y(Yc, {
    styles: Zc(a, !t, i, r ? "" : "!important")
  });
}, Ti = !1;
if (typeof window < "u")
  try {
    var gn = Object.defineProperty({}, "passive", {
      get: function() {
        return Ti = !0, !0;
      }
    });
    window.addEventListener("test", gn, gn), window.removeEventListener("test", gn, gn);
  } catch {
    Ti = !1;
  }
var Fr = Ti ? { passive: !1 } : !1, Xc = function(e) {
  return e.tagName === "TEXTAREA";
}, Eo = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return r[t] !== "hidden" && !(r.overflowY === r.overflowX && !Xc(e) && r[t] === "visible");
}, Jc = function(e) {
  return Eo(e, "overflowY");
}, Qc = function(e) {
  return Eo(e, "overflowX");
}, _a = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var i = _o(e, n);
    if (i) {
      var a = So(e, n), s = a[1], l = a[2];
      if (s > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, ef = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, tf = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, _o = function(e, t) {
  return e === "v" ? Jc(t) : Qc(t);
}, So = function(e, t) {
  return e === "v" ? ef(t) : tf(t);
}, rf = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, nf = function(e, t, r, n, i) {
  var a = rf(e, window.getComputedStyle(t).direction), s = a * n, l = r.target, v = t.contains(l), p = !1, g = s > 0, m = 0, _ = 0;
  do {
    var M = So(e, l), S = M[0], C = M[1], R = M[2], P = C - R - a * S;
    (S || P) && _o(e, l) && (m += P, _ += S), l instanceof ShadowRoot ? l = l.host : l = l.parentNode;
  } while (!v && l !== document.body || v && (t.contains(l) || t === l));
  return (g && (i && Math.abs(m) < 1 || !i && s > m) || !g && (i && Math.abs(_) < 1 || !i && -s > _)) && (p = !0), p;
}, xn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Sa = function(e) {
  return [e.deltaX, e.deltaY];
}, Aa = function(e) {
  return e && "current" in e ? e.current : e;
}, af = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, of = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, sf = 0, zr = [];
function cf(e) {
  var t = U.useRef([]), r = U.useRef([0, 0]), n = U.useRef(), i = U.useState(sf++)[0], a = U.useState(bo)[0], s = U.useRef(e);
  U.useEffect(function() {
    s.current = e;
  }, [e]), U.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var C = Cc([e.lockRef.current], (e.shards || []).map(Aa), !0).filter(Boolean);
      return C.forEach(function(R) {
        return R.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), C.forEach(function(R) {
          return R.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = U.useCallback(function(C, R) {
    if ("touches" in C && C.touches.length === 2 || C.type === "wheel" && C.ctrlKey)
      return !s.current.allowPinchZoom;
    var P = xn(C), X = r.current, B = "deltaX" in C ? C.deltaX : X[0] - P[0], G = "deltaY" in C ? C.deltaY : X[1] - P[1], q, Ce = C.target, Pe = Math.abs(B) > Math.abs(G) ? "h" : "v";
    if ("touches" in C && Pe === "h" && Ce.type === "range")
      return !1;
    var se = _a(Pe, Ce);
    if (!se)
      return !0;
    if (se ? q = Pe : (q = Pe === "v" ? "h" : "v", se = _a(Pe, Ce)), !se)
      return !1;
    if (!n.current && "changedTouches" in C && (B || G) && (n.current = q), !q)
      return !0;
    var me = n.current || q;
    return nf(me, R, C, me === "h" ? B : G, !0);
  }, []), v = U.useCallback(function(C) {
    var R = C;
    if (!(!zr.length || zr[zr.length - 1] !== a)) {
      var P = "deltaY" in R ? Sa(R) : xn(R), X = t.current.filter(function(q) {
        return q.name === R.type && (q.target === R.target || R.target === q.shadowParent) && af(q.delta, P);
      })[0];
      if (X && X.should) {
        R.cancelable && R.preventDefault();
        return;
      }
      if (!X) {
        var B = (s.current.shards || []).map(Aa).filter(Boolean).filter(function(q) {
          return q.contains(R.target);
        }), G = B.length > 0 ? l(R, B[0]) : !s.current.noIsolation;
        G && R.cancelable && R.preventDefault();
      }
    }
  }, []), p = U.useCallback(function(C, R, P, X) {
    var B = {
      name: C,
      delta: R,
      target: P,
      should: X,
      shadowParent: ff(P)
    };
    t.current.push(B), setTimeout(function() {
      t.current = t.current.filter(function(G) {
        return G !== B;
      });
    }, 1);
  }, []), g = U.useCallback(function(C) {
    r.current = xn(C), n.current = void 0;
  }, []), m = U.useCallback(function(C) {
    p(C.type, Sa(C), C.target, l(C, e.lockRef.current));
  }, []), _ = U.useCallback(function(C) {
    p(C.type, xn(C), C.target, l(C, e.lockRef.current));
  }, []);
  U.useEffect(function() {
    return zr.push(a), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: _
    }), document.addEventListener("wheel", v, Fr), document.addEventListener("touchmove", v, Fr), document.addEventListener("touchstart", g, Fr), function() {
      zr = zr.filter(function(C) {
        return C !== a;
      }), document.removeEventListener("wheel", v, Fr), document.removeEventListener("touchmove", v, Fr), document.removeEventListener("touchstart", g, Fr);
    };
  }, []);
  var M = e.removeScrollBar, S = e.inert;
  return /* @__PURE__ */ Xe(Pr, {
    children: [S ? /* @__PURE__ */ Y(a, {
      styles: of(i)
    }) : null, M ? /* @__PURE__ */ Y(Kc, {
      gapMode: e.gapMode
    }) : null]
  });
}
function ff(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const uf = Uc(mo, cf);
var Ao = U.forwardRef(function(e, t) {
  return /* @__PURE__ */ Y(Hn, {
    ...ur({}, e, {
      ref: t,
      sideCar: uf
    })
  });
});
Ao.classNames = Hn.classNames;
const lf = Ao;
var df = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, $r = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), mn = {}, ci = 0, To = function(e) {
  return e && (e.host || To(e.parentNode));
}, hf = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = To(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return Boolean(r);
  });
}, pf = function(e, t, r, n) {
  var i = hf(t, Array.isArray(e) ? e : [e]);
  mn[r] || (mn[r] = /* @__PURE__ */ new WeakMap());
  var a = mn[r], s = [], l = /* @__PURE__ */ new Set(), v = new Set(i), p = function(m) {
    !m || l.has(m) || (l.add(m), p(m.parentNode));
  };
  i.forEach(p);
  var g = function(m) {
    !m || v.has(m) || Array.prototype.forEach.call(m.children, function(_) {
      if (l.has(_))
        g(_);
      else
        try {
          var M = _.getAttribute(n), S = M !== null && M !== "false", C = ($r.get(_) || 0) + 1, R = (a.get(_) || 0) + 1;
          $r.set(_, C), a.set(_, R), s.push(_), C === 1 && S && wn.set(_, !0), R === 1 && _.setAttribute(r, "true"), S || _.setAttribute(n, "true");
        } catch (P) {
          console.error("aria-hidden: cannot operate on ", _, P);
        }
    });
  };
  return g(t), l.clear(), ci++, function() {
    s.forEach(function(m) {
      var _ = $r.get(m) - 1, M = a.get(m) - 1;
      $r.set(m, _), a.set(m, M), _ || (wn.has(m) || m.removeAttribute(n), wn.delete(m)), M || m.removeAttribute(r);
    }), ci--, ci || ($r = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), mn = {});
  };
}, yf = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), i = t || df(e);
  return i ? (n.push.apply(n, Array.from(i.querySelectorAll("[aria-live]"))), pf(n, i, r, "aria-hidden")) : function() {
    return null;
  };
}, Vi = "Dialog", [Io, up] = Ks(Vi), [vf, Xt] = Io(Vi), Co = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: i,
    onOpenChange: a,
    modal: s = !0
  } = e, l = U.useRef(null), v = U.useRef(null), [p = !1, g] = ec({
    prop: n,
    defaultProp: i,
    onChange: a
  });
  return /* @__PURE__ */ Y(
    vf,
    {
      scope: t,
      triggerRef: l,
      contentRef: v,
      contentId: ti(),
      titleId: ti(),
      descriptionId: ti(),
      open: p,
      onOpenChange: g,
      onOpenToggle: U.useCallback(() => g((m) => !m), [g]),
      modal: s,
      children: r
    }
  );
};
Co.displayName = Vi;
var No = "DialogTrigger", Oo = U.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, i = Xt(No, r), a = kr(t, i.triggerRef);
    return /* @__PURE__ */ Y(
      pr.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.contentId,
        "data-state": Gi(i.open),
        ...n,
        ref: a,
        onClick: _r(e.onClick, i.onOpenToggle)
      }
    );
  }
);
Oo.displayName = No;
var Hi = "DialogPortal", [gf, Mo] = Io(Hi, {
  forceMount: void 0
}), Ro = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: i } = e, a = Xt(Hi, t);
  return /* @__PURE__ */ Y(gf, { scope: t, forceMount: r, children: U.Children.map(n, (s) => /* @__PURE__ */ Y(Vn, { present: r || a.open, children: /* @__PURE__ */ Y(go, { asChild: !0, container: i, children: s }) })) });
};
Ro.displayName = Hi;
var Un = "DialogOverlay", Do = U.forwardRef(
  (e, t) => {
    const r = Mo(Un, e.__scopeDialog), { forceMount: n = r.forceMount, ...i } = e, a = Xt(Un, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ Y(Vn, { present: n || a.open, children: /* @__PURE__ */ Y(xf, { ...i, ref: t }) }) : null;
  }
);
Do.displayName = Un;
var xf = U.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, i = Xt(Un, r);
    return /* @__PURE__ */ Y(lf, { as: $i, allowPinchZoom: !0, shards: [i.contentRef], children: /* @__PURE__ */ Y(
      pr.div,
      {
        "data-state": Gi(i.open),
        ...n,
        ref: t,
        style: { pointerEvents: "auto", ...n.style }
      }
    ) });
  }
), Br = "DialogContent", Po = U.forwardRef(
  (e, t) => {
    const r = Mo(Br, e.__scopeDialog), { forceMount: n = r.forceMount, ...i } = e, a = Xt(Br, e.__scopeDialog);
    return /* @__PURE__ */ Y(Vn, { present: n || a.open, children: a.modal ? /* @__PURE__ */ Y(wf, { ...i, ref: t }) : /* @__PURE__ */ Y(mf, { ...i, ref: t }) });
  }
);
Po.displayName = Br;
var wf = U.forwardRef(
  (e, t) => {
    const r = Xt(Br, e.__scopeDialog), n = U.useRef(null), i = kr(t, r.contentRef, n);
    return U.useEffect(() => {
      const a = n.current;
      if (a)
        return yf(a);
    }, []), /* @__PURE__ */ Y(
      Lo,
      {
        ...e,
        ref: i,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: _r(e.onCloseAutoFocus, (a) => {
          var s;
          a.preventDefault(), (s = r.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: _r(e.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent, l = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || l) && a.preventDefault();
        }),
        onFocusOutside: _r(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), mf = U.forwardRef(
  (e, t) => {
    const r = Xt(Br, e.__scopeDialog), n = U.useRef(!1), i = U.useRef(!1);
    return /* @__PURE__ */ Y(
      Lo,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var s, l;
          (s = e.onCloseAutoFocus) == null || s.call(e, a), a.defaultPrevented || (n.current || (l = r.triggerRef.current) == null || l.focus(), a.preventDefault()), n.current = !1, i.current = !1;
        },
        onInteractOutside: (a) => {
          var v, p;
          (v = e.onInteractOutside) == null || v.call(e, a), a.defaultPrevented || (n.current = !0, a.detail.originalEvent.type === "pointerdown" && (i.current = !0));
          const s = a.target;
          ((p = r.triggerRef.current) == null ? void 0 : p.contains(s)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && i.current && a.preventDefault();
        }
      }
    );
  }
), Lo = U.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: i, onCloseAutoFocus: a, ...s } = e, l = Xt(Br, r), v = U.useRef(null), p = kr(t, v);
    return Ic(), /* @__PURE__ */ Xe(Pr, { children: [
      /* @__PURE__ */ Y(
        yo,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: i,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ Y(
            ho,
            {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": Gi(l.open),
              ...s,
              ref: p,
              onDismiss: () => l.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ Xe(Pr, { children: [
        /* @__PURE__ */ Y(Ef, { titleId: l.titleId }),
        /* @__PURE__ */ Y(Sf, { contentRef: v, descriptionId: l.descriptionId })
      ] })
    ] });
  }
), ji = "DialogTitle", Bo = U.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, i = Xt(ji, r);
    return /* @__PURE__ */ Y(pr.h2, { id: i.titleId, ...n, ref: t });
  }
);
Bo.displayName = ji;
var Uo = "DialogDescription", bf = U.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, i = Xt(Uo, r);
    return /* @__PURE__ */ Y(pr.p, { id: i.descriptionId, ...n, ref: t });
  }
);
bf.displayName = Uo;
var ko = "DialogClose", Wo = U.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, i = Xt(ko, r);
    return /* @__PURE__ */ Y(
      pr.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: _r(e.onClick, () => i.onOpenChange(!1))
      }
    );
  }
);
Wo.displayName = ko;
function Gi(e) {
  return e ? "open" : "closed";
}
var Fo = "DialogTitleWarning", [lp, zo] = qs(Fo, {
  contentName: Br,
  titleName: ji,
  docsSlug: "dialog"
}), Ef = ({ titleId: e }) => {
  const t = zo(Fo), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return U.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, _f = "DialogDescriptionWarning", Sf = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${zo(_f).contentName}}.`;
  return U.useEffect(() => {
    var a;
    const i = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && i && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, Af = Co, Tf = Oo, If = Ro, Cf = Do, Nf = Po, ln = Bo, Of = Wo;
const Mf = (e) => /* @__PURE__ */ Xe(Af, {
  open: e.open,
  onOpenChange: e.onOpenChange,
  children: [/* @__PURE__ */ Y(Tf, {
    asChild: !0,
    children: e.trigger
  }), /* @__PURE__ */ Y(If, {
    children: /* @__PURE__ */ Y(Cf, {
      className: "wkit-dialog__overlay",
      children: /* @__PURE__ */ Y(Nf, {
        ...e.contentProps,
        className: Ln("wkit-dialog__content", e.className),
        style: e.style,
        children: e.children
      })
    })
  })]
});
function $o() {
  return /* @__PURE__ */ Y("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ Y("path", {
      d: "M15.8332 10.0003H4.1665M4.1665 10.0003L9.99984 15.8337M4.1665 10.0003L9.99984 4.16699",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  });
}
function Rf() {
  return /* @__PURE__ */ Y("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ Y("path", {
      d: "M15 5L5 15M5 5L15 15",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  });
}
function Df() {
  return /* @__PURE__ */ Xe("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ Y("g", {
      clipPath: "url(#clip0_1790_28273)",
      children: /* @__PURE__ */ Y("path", {
        d: "M9.99989 10.9766L14.1249 6.85156L15.3032 8.0299L9.99989 13.3332L4.69656 8.0299L5.87489 6.85156L9.99989 10.9766Z",
        fill: "currentColor"
      })
    }), /* @__PURE__ */ Y("defs", {
      children: /* @__PURE__ */ Y("clipPath", {
        id: "clip0_1790_28273",
        children: /* @__PURE__ */ Y("rect", {
          width: "20",
          height: "20",
          fill: "white",
          transform: "translate(20) rotate(90)"
        })
      })
    })]
  });
}
var jn = /* @__PURE__ */ ((e) => (e.SUI_WALLET = "Sui Wallet", e.SUIET_WALLET = "Suiet", e.ETHOS_WALLET = "Ethos Wallet", e))(jn || {}), cr = /* @__PURE__ */ ((e) => (e.DISCONNECTED = "disconnected", e.CONNECTED = "connected", e.CONNECTING = "connecting", e))(cr || {});
class Vo extends Error {
  constructor(r, n, i = "UNKNOWN_ERROR") {
    super(r);
    qe(this, "code");
    qe(this, "details");
    this.details = n, this.code = i;
  }
}
class Lt extends Vo {
  constructor(t = "kit unknown error", r) {
    super("[KitError] " + t, r, "KIT.UNKNOWN_ERROR");
  }
}
class Vr extends Vo {
  constructor(t = "wallet unknown error", r) {
    super("[WalletError] " + t, r, "WALLET.UNKNOWN_ERROR");
  }
}
class Pf extends Vr {
  constructor(t) {
    super(`wallet does not implement function: ${t}`);
  }
}
function vr(e) {
  return `Failed to call ${e}, missing context provider to run within`;
}
const Lf = {
  configuredWallets: [],
  detectedWallets: [],
  allAvailableWallets: [],
  chains: [],
  chain: void 0,
  name: void 0,
  adapter: void 0,
  connecting: !1,
  connected: !1,
  account: void 0,
  status: cr.DISCONNECTED,
  wallet: void 0,
  address: void 0,
  supportedWallets: [],
  select() {
    throw new Lt(vr("select"));
  },
  on() {
    throw new Lt(vr("on"));
  },
  async disconnect() {
    throw new Lt(vr("disconnect"));
  },
  getAccounts() {
    throw new Lt(vr("getAccounts"));
  },
  async signAndExecuteTransaction() {
    throw new Lt(vr("signAndExecuteTransaction"));
  },
  async signMessage() {
    throw new Lt(vr("signMessage"));
  },
  async executeMoveCall() {
    throw new Lt(vr("executeMoveCall"));
  },
  async getPublicKey() {
    throw new Lt(vr("getPublicKey"));
  }
}, Ho = oo(Lf);
function Gn() {
  return so(Ho);
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function jo(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(s) {
      s(a);
    });
  }
  return new (r || (r = Promise))(function(a, s) {
    function l(g) {
      try {
        p(n.next(g));
      } catch (m) {
        s(m);
      }
    }
    function v(g) {
      try {
        p(n.throw(g));
      } catch (m) {
        s(m);
      }
    }
    function p(g) {
      g.done ? a(g.value) : i(g.value).then(l, v);
    }
    p((n = n.apply(e, t || [])).next());
  });
}
function Go(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(p) {
    return function(g) {
      return v([p, g]);
    };
  }
  function v(p) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (a = p[0] & 2 ? i.return : p[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, p[1])).done)
          return a;
        switch (i = 0, a && (p = [p[0] & 2, a.value]), p[0]) {
          case 0:
          case 1:
            a = p;
            break;
          case 4:
            return r.label++, { value: p[1], done: !1 };
          case 5:
            r.label++, i = p[1], p = [0];
            continue;
          case 7:
            p = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (p[0] === 6 || p[0] === 2)) {
              r = 0;
              continue;
            }
            if (p[0] === 3 && (!a || p[1] > a[0] && p[1] < a[3])) {
              r.label = p[1];
              break;
            }
            if (p[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = p;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(p);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        p = t.call(e, r);
      } catch (g) {
        p = [6, g], i = 0;
      } finally {
        n = a = 0;
      }
    if (p[0] & 5)
      throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}
var lr = function() {
}, Rt = lr(), Mn = Object, At = function(e) {
  return e === Rt;
}, mr = function(e) {
  return typeof e == "function";
}, Tr = function(e, t) {
  return Mn.assign({}, e, t);
}, Yi = "undefined", Zi = function() {
  return typeof window != Yi;
}, Bf = function() {
  return typeof document != Yi;
}, Uf = function() {
  return Zi() && typeof window.requestAnimationFrame != Yi;
}, bn = /* @__PURE__ */ new WeakMap(), kf = 0, dn = function(e) {
  var t = typeof e, r = e && e.constructor, n = r == Date, i, a;
  if (Mn(e) === e && !n && r != RegExp) {
    if (i = bn.get(e), i)
      return i;
    if (i = ++kf + "~", bn.set(e, i), r == Array) {
      for (i = "@", a = 0; a < e.length; a++)
        i += dn(e[a]) + ",";
      bn.set(e, i);
    }
    if (r == Mn) {
      i = "#";
      for (var s = Mn.keys(e).sort(); !At(a = s.pop()); )
        At(e[a]) || (i += a + ":" + dn(e[a]) + ",");
      bn.set(e, i);
    }
  } else
    i = n ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
  return i;
}, Ii = !0, Wf = function() {
  return Ii;
}, Yo = Zi(), qi = Bf(), Ci = Yo && window.addEventListener ? window.addEventListener.bind(window) : lr, Ff = qi ? document.addEventListener.bind(document) : lr, Ni = Yo && window.removeEventListener ? window.removeEventListener.bind(window) : lr, zf = qi ? document.removeEventListener.bind(document) : lr, $f = function() {
  var e = qi && document.visibilityState;
  return At(e) || e !== "hidden";
}, Vf = function(e) {
  return Ff("visibilitychange", e), Ci("focus", e), function() {
    zf("visibilitychange", e), Ni("focus", e);
  };
}, Hf = function(e) {
  var t = function() {
    Ii = !0, e();
  }, r = function() {
    Ii = !1;
  };
  return Ci("online", t), Ci("offline", r), function() {
    Ni("online", t), Ni("offline", r);
  };
}, jf = {
  isOnline: Wf,
  isVisible: $f
}, Gf = {
  initFocus: Vf,
  initReconnect: Hf
}, Yn = !Zi() || "Deno" in window, Yf = function(e) {
  return Uf() ? window.requestAnimationFrame(e) : setTimeout(e, 1);
}, Rn = Yn ? Ar : $s, fi = typeof navigator < "u" && navigator.connection, Ta = !Yn && fi && (["slow-2g", "2g"].includes(fi.effectiveType) || fi.saveData), Zo = function(e) {
  if (mr(e))
    try {
      e = e();
    } catch {
      e = "";
    }
  var t = [].concat(e);
  e = typeof e == "string" ? e : (Array.isArray(e) ? e.length : e) ? dn(e) : "";
  var r = e ? "$swr$" + e : "";
  return [e, t, r];
}, Ir = /* @__PURE__ */ new WeakMap(), qo = 0, Ko = 1, Xo = 2, cn = function(e, t, r, n, i, a, s) {
  s === void 0 && (s = !0);
  var l = Ir.get(e), v = l[0], p = l[1], g = l[3], m = v[t], _ = p[t];
  if (s && _)
    for (var M = 0; M < _.length; ++M)
      _[M](r, n, i);
  return a && (delete g[t], m && m[0]) ? m[0](Xo).then(function() {
    return e.get(t);
  }) : e.get(t);
}, Zf = 0, Oi = function() {
  return ++Zf;
}, Jo = function() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return jo(void 0, void 0, void 0, function() {
    var r, n, i, a, s, l, v, p, g, m, _, M, S, C, R, P, X, B, G, q, Ce;
    return Go(this, function(Pe) {
      switch (Pe.label) {
        case 0:
          if (r = e[0], n = e[1], i = e[2], a = e[3], s = typeof a == "boolean" ? { revalidate: a } : a || {}, l = At(s.populateCache) ? !0 : s.populateCache, v = s.revalidate !== !1, p = s.rollbackOnError !== !1, g = s.optimisticData, m = Zo(n), _ = m[0], M = m[2], !_)
            return [2];
          if (S = Ir.get(r), C = S[2], e.length < 3)
            return [2, cn(r, _, r.get(_), Rt, Rt, v, !0)];
          if (R = i, X = Oi(), C[_] = [X, 0], B = !At(g), G = r.get(_), B && (q = mr(g) ? g(G) : g, r.set(_, q), cn(r, _, q)), mr(R))
            try {
              R = R(r.get(_));
            } catch (se) {
              P = se;
            }
          return R && mr(R.then) ? [
            4,
            R.catch(function(se) {
              P = se;
            })
          ] : [3, 2];
        case 1:
          if (R = Pe.sent(), X !== C[_][0]) {
            if (P)
              throw P;
            return [2, R];
          } else
            P && B && p && (l = !0, R = G, r.set(_, G));
          Pe.label = 2;
        case 2:
          return l && (P || (mr(l) && (R = l(R, G)), r.set(_, R)), r.set(M, Tr(r.get(M), { error: P }))), C[_][1] = Oi(), [
            4,
            cn(r, _, R, P, Rt, v, !!l)
          ];
        case 3:
          if (Ce = Pe.sent(), P)
            throw P;
          return [2, l ? Ce : R];
      }
    });
  });
}, Ia = function(e, t) {
  for (var r in e)
    e[r][0] && e[r][0](t);
}, qf = function(e, t) {
  if (!Ir.has(e)) {
    var r = Tr(Gf, t), n = {}, i = Jo.bind(Rt, e), a = lr;
    if (Ir.set(e, [n, {}, {}, {}, i]), !Yn) {
      var s = r.initFocus(setTimeout.bind(Rt, Ia.bind(Rt, n, qo))), l = r.initReconnect(setTimeout.bind(Rt, Ia.bind(Rt, n, Ko)));
      a = function() {
        s && s(), l && l(), Ir.delete(e);
      };
    }
    return [e, i, a];
  }
  return [e, Ir.get(e)[4]];
}, Kf = function(e, t, r, n, i) {
  var a = r.errorRetryCount, s = i.retryCount, l = ~~((Math.random() + 0.5) * (1 << (s < 8 ? s : 8))) * r.errorRetryInterval;
  !At(a) && s > a || setTimeout(n, l, i);
}, Qo = qf(/* @__PURE__ */ new Map()), Xf = Qo[0], Jf = Qo[1], Qf = Tr(
  {
    onLoadingSlow: lr,
    onSuccess: lr,
    onError: lr,
    onErrorRetry: Kf,
    onDiscarded: lr,
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    errorRetryInterval: Ta ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: Ta ? 5e3 : 3e3,
    compare: function(e, t) {
      return dn(e) == dn(t);
    },
    isPaused: function() {
      return !1;
    },
    cache: Xf,
    mutate: Jf,
    fallback: {}
  },
  jf
), eu = function(e, t) {
  var r = Tr(e, t);
  if (t) {
    var n = e.use, i = e.fallback, a = t.use, s = t.fallback;
    n && a && (r.use = n.concat(a)), i && s && (r.fallback = Tr(i, s));
  }
  return r;
}, tu = oo({}), ru = function(e, t) {
  var r = Kt({})[1], n = fr(e), i = fr({
    data: !1,
    error: !1,
    isValidating: !1
  }), a = St(
    function(s) {
      var l = !1, v = n.current;
      for (var p in s) {
        var g = p;
        v[g] !== s[g] && (v[g] = s[g], i.current[g] && (l = !0));
      }
      l && !t.current && r({});
    },
    []
  );
  return Rn(function() {
    n.current = e;
  }), [n, i.current, a];
}, nu = function(e) {
  return mr(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (e[1] === null ? e[2] : e[1]) || {}];
}, iu = function() {
  return Tr(Qf, so(tu));
}, au = function(e) {
  return function() {
    for (var r = [], n = 0; n < arguments.length; n++)
      r[n] = arguments[n];
    var i = iu(), a = nu(r), s = a[0], l = a[1], v = a[2], p = eu(i, v), g = e, m = p.use;
    if (m)
      for (var _ = m.length; _-- > 0; )
        g = m[_](g);
    return g(s, l || p.fetcher, p);
  };
}, Ca = function(e, t, r) {
  var n = t[e] || (t[e] = []);
  return n.push(r), function() {
    var i = n.indexOf(r);
    i >= 0 && (n[i] = n[n.length - 1], n.pop());
  };
}, ui = { dedupe: !0 }, ou = function(e, t, r) {
  var n = r.cache, i = r.compare, a = r.fallbackData, s = r.suspense, l = r.revalidateOnMount, v = r.refreshInterval, p = r.refreshWhenHidden, g = r.refreshWhenOffline, m = Ir.get(n), _ = m[0], M = m[1], S = m[2], C = m[3], R = Zo(e), P = R[0], X = R[1], B = R[2], G = fr(!1), q = fr(!1), Ce = fr(P), Pe = fr(t), se = fr(r), me = function() {
    return se.current;
  }, tt = function() {
    return me().isVisible() && me().isOnline();
  }, Be = function(T) {
    return n.set(B, Tr(n.get(B), T));
  }, xe = n.get(P), Ae = At(a) ? r.fallback[P] : a, E = At(xe) ? Ae : xe, k = n.get(B) || {}, J = k.error, Ne = !G.current, Oe = function() {
    return Ne && !At(l) ? l : me().isPaused() ? !1 : s ? At(E) ? !1 : r.revalidateIfStale : At(E) || r.revalidateIfStale;
  }, _e = function() {
    return !P || !t ? !1 : k.isValidating ? !0 : Ne && Oe();
  }, rt = _e(), nt = ru({
    data: E,
    error: J,
    isValidating: rt
  }, q), L = nt[0], ce = nt[1], ee = nt[2], f = St(
    function(T) {
      return jo(void 0, void 0, void 0, function() {
        var D, W, Q, fe, te, Te, ae, Ie, Ye, ut, ht, Ze, bt;
        return Go(this, function(Et) {
          switch (Et.label) {
            case 0:
              if (D = Pe.current, !P || !D || q.current || me().isPaused())
                return [2, !1];
              fe = !0, te = T || {}, Te = !C[P] || !te.dedupe, ae = function() {
                return !q.current && P === Ce.current && G.current;
              }, Ie = function() {
                var _t = C[P];
                _t && _t[1] === Q && delete C[P];
              }, Ye = { isValidating: !1 }, ut = function() {
                Be({ isValidating: !1 }), ae() && ee(Ye);
              }, Be({
                isValidating: !0
              }), ee({ isValidating: !0 }), Et.label = 1;
            case 1:
              return Et.trys.push([1, 3, , 4]), Te && (cn(n, P, L.current.data, L.current.error, !0), r.loadingTimeout && !n.get(P) && setTimeout(function() {
                fe && ae() && me().onLoadingSlow(P, r);
              }, r.loadingTimeout), C[P] = [D.apply(void 0, X), Oi()]), bt = C[P], W = bt[0], Q = bt[1], [4, W];
            case 2:
              return W = Et.sent(), Te && setTimeout(Ie, r.dedupingInterval), !C[P] || C[P][1] !== Q ? (Te && ae() && me().onDiscarded(P), [2, !1]) : (Be({
                error: Rt
              }), Ye.error = Rt, ht = S[P], !At(ht) && (Q <= ht[0] || Q <= ht[1] || ht[1] === 0) ? (ut(), Te && ae() && me().onDiscarded(P), [2, !1]) : (i(L.current.data, W) ? Ye.data = L.current.data : Ye.data = W, i(n.get(P), W) || n.set(P, W), Te && ae() && me().onSuccess(W, P, r), [3, 4]));
            case 3:
              return Ze = Et.sent(), Ie(), me().isPaused() || (Be({ error: Ze }), Ye.error = Ze, Te && ae() && (me().onError(Ze, P, r), (typeof r.shouldRetryOnError == "boolean" && r.shouldRetryOnError || mr(r.shouldRetryOnError) && r.shouldRetryOnError(Ze)) && tt() && me().onErrorRetry(Ze, P, r, f, {
                retryCount: (te.retryCount || 0) + 1,
                dedupe: !0
              }))), [3, 4];
            case 4:
              return fe = !1, ut(), ae() && Te && cn(n, P, Ye.data, Ye.error, !1), [2, !0];
          }
        });
      });
    },
    [P]
  ), A = St(
    Jo.bind(Rt, n, function() {
      return Ce.current;
    }),
    []
  );
  if (Rn(function() {
    Pe.current = t, se.current = r;
  }), Rn(function() {
    if (!!P) {
      var T = P !== Ce.current, D = f.bind(Rt, ui), W = function(ae, Ie, Ye) {
        ee(Tr(
          {
            error: Ie,
            isValidating: Ye
          },
          i(L.current.data, ae) ? Rt : {
            data: ae
          }
        ));
      }, Q = 0, fe = function(ae) {
        if (ae == qo) {
          var Ie = Date.now();
          me().revalidateOnFocus && Ie > Q && tt() && (Q = Ie + me().focusThrottleInterval, D());
        } else if (ae == Ko)
          me().revalidateOnReconnect && tt() && D();
        else if (ae == Xo)
          return f();
      }, te = Ca(P, M, W), Te = Ca(P, _, fe);
      return q.current = !1, Ce.current = P, G.current = !0, T && ee({
        data: E,
        error: J,
        isValidating: rt
      }), Oe() && (At(E) || Yn ? D() : Yf(D)), function() {
        q.current = !0, te(), Te();
      };
    }
  }, [P, f]), Rn(function() {
    var T;
    function D() {
      var Q = mr(v) ? v(E) : v;
      Q && T !== -1 && (T = setTimeout(W, Q));
    }
    function W() {
      !L.current.error && (p || me().isVisible()) && (g || me().isOnline()) ? f(ui).then(D) : D();
    }
    return D(), function() {
      T && (clearTimeout(T), T = -1);
    };
  }, [v, p, g, f]), zs(E), s && At(E) && P)
    throw Pe.current = t, se.current = r, q.current = !1, At(J) ? f(ui) : J;
  return {
    mutate: A,
    get data() {
      return ce.data = !0, E;
    },
    get error() {
      return ce.error = !0, J;
    },
    get isValidating() {
      return ce.isValidating = !0, rt;
    }
  };
}, su = au(ou);
function cu(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var fu = { exports: {} };
const uu = {}, es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: uu
}, Symbol.toStringTag, { value: "Module" })), lu = /* @__PURE__ */ co(es);
(function(e) {
  (function(t) {
    var r = function(c) {
      var h, d = new Float64Array(16);
      if (c)
        for (h = 0; h < c.length; h++)
          d[h] = c[h];
      return d;
    }, n = function() {
      throw new Error("no PRNG");
    }, i = new Uint8Array(16), a = new Uint8Array(32);
    a[0] = 9;
    var s = r(), l = r([1]), v = r([56129, 1]), p = r([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), g = r([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]), m = r([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]), _ = r([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]), M = r([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
    function S(c, h, d, o) {
      c[h] = d >> 24 & 255, c[h + 1] = d >> 16 & 255, c[h + 2] = d >> 8 & 255, c[h + 3] = d & 255, c[h + 4] = o >> 24 & 255, c[h + 5] = o >> 16 & 255, c[h + 6] = o >> 8 & 255, c[h + 7] = o & 255;
    }
    function C(c, h, d, o, y) {
      var u, x = 0;
      for (u = 0; u < y; u++)
        x |= c[h + u] ^ d[o + u];
      return (1 & x - 1 >>> 8) - 1;
    }
    function R(c, h, d, o) {
      return C(c, h, d, o, 16);
    }
    function P(c, h, d, o) {
      return C(c, h, d, o, 32);
    }
    function X(c, h, d, o) {
      for (var y = o[0] & 255 | (o[1] & 255) << 8 | (o[2] & 255) << 16 | (o[3] & 255) << 24, u = d[0] & 255 | (d[1] & 255) << 8 | (d[2] & 255) << 16 | (d[3] & 255) << 24, x = d[4] & 255 | (d[5] & 255) << 8 | (d[6] & 255) << 16 | (d[7] & 255) << 24, b = d[8] & 255 | (d[9] & 255) << 8 | (d[10] & 255) << 16 | (d[11] & 255) << 24, I = d[12] & 255 | (d[13] & 255) << 8 | (d[14] & 255) << 16 | (d[15] & 255) << 24, j = o[4] & 255 | (o[5] & 255) << 8 | (o[6] & 255) << 16 | (o[7] & 255) << 24, V = h[0] & 255 | (h[1] & 255) << 8 | (h[2] & 255) << 16 | (h[3] & 255) << 24, re = h[4] & 255 | (h[5] & 255) << 8 | (h[6] & 255) << 16 | (h[7] & 255) << 24, $ = h[8] & 255 | (h[9] & 255) << 8 | (h[10] & 255) << 16 | (h[11] & 255) << 24, le = h[12] & 255 | (h[13] & 255) << 8 | (h[14] & 255) << 16 | (h[15] & 255) << 24, ne = o[8] & 255 | (o[9] & 255) << 8 | (o[10] & 255) << 16 | (o[11] & 255) << 24, de = d[16] & 255 | (d[17] & 255) << 8 | (d[18] & 255) << 16 | (d[19] & 255) << 24, we = d[20] & 255 | (d[21] & 255) << 8 | (d[22] & 255) << 16 | (d[23] & 255) << 24, be = d[24] & 255 | (d[25] & 255) << 8 | (d[26] & 255) << 16 | (d[27] & 255) << 24, Ee = d[28] & 255 | (d[29] & 255) << 8 | (d[30] & 255) << 16 | (d[31] & 255) << 24, ve = o[12] & 255 | (o[13] & 255) << 8 | (o[14] & 255) << 16 | (o[15] & 255) << 24, ue = y, ge = u, oe = x, he = b, pe = I, ie = j, N = V, O = re, H = $, F = le, z = ne, Z = de, Se = we, Me = be, De = Ee, Re = ve, w, Ue = 0; Ue < 20; Ue += 2)
        w = ue + Se | 0, pe ^= w << 7 | w >>> 32 - 7, w = pe + ue | 0, H ^= w << 9 | w >>> 32 - 9, w = H + pe | 0, Se ^= w << 13 | w >>> 32 - 13, w = Se + H | 0, ue ^= w << 18 | w >>> 32 - 18, w = ie + ge | 0, F ^= w << 7 | w >>> 32 - 7, w = F + ie | 0, Me ^= w << 9 | w >>> 32 - 9, w = Me + F | 0, ge ^= w << 13 | w >>> 32 - 13, w = ge + Me | 0, ie ^= w << 18 | w >>> 32 - 18, w = z + N | 0, De ^= w << 7 | w >>> 32 - 7, w = De + z | 0, oe ^= w << 9 | w >>> 32 - 9, w = oe + De | 0, N ^= w << 13 | w >>> 32 - 13, w = N + oe | 0, z ^= w << 18 | w >>> 32 - 18, w = Re + Z | 0, he ^= w << 7 | w >>> 32 - 7, w = he + Re | 0, O ^= w << 9 | w >>> 32 - 9, w = O + he | 0, Z ^= w << 13 | w >>> 32 - 13, w = Z + O | 0, Re ^= w << 18 | w >>> 32 - 18, w = ue + he | 0, ge ^= w << 7 | w >>> 32 - 7, w = ge + ue | 0, oe ^= w << 9 | w >>> 32 - 9, w = oe + ge | 0, he ^= w << 13 | w >>> 32 - 13, w = he + oe | 0, ue ^= w << 18 | w >>> 32 - 18, w = ie + pe | 0, N ^= w << 7 | w >>> 32 - 7, w = N + ie | 0, O ^= w << 9 | w >>> 32 - 9, w = O + N | 0, pe ^= w << 13 | w >>> 32 - 13, w = pe + O | 0, ie ^= w << 18 | w >>> 32 - 18, w = z + F | 0, Z ^= w << 7 | w >>> 32 - 7, w = Z + z | 0, H ^= w << 9 | w >>> 32 - 9, w = H + Z | 0, F ^= w << 13 | w >>> 32 - 13, w = F + H | 0, z ^= w << 18 | w >>> 32 - 18, w = Re + De | 0, Se ^= w << 7 | w >>> 32 - 7, w = Se + Re | 0, Me ^= w << 9 | w >>> 32 - 9, w = Me + Se | 0, De ^= w << 13 | w >>> 32 - 13, w = De + Me | 0, Re ^= w << 18 | w >>> 32 - 18;
      ue = ue + y | 0, ge = ge + u | 0, oe = oe + x | 0, he = he + b | 0, pe = pe + I | 0, ie = ie + j | 0, N = N + V | 0, O = O + re | 0, H = H + $ | 0, F = F + le | 0, z = z + ne | 0, Z = Z + de | 0, Se = Se + we | 0, Me = Me + be | 0, De = De + Ee | 0, Re = Re + ve | 0, c[0] = ue >>> 0 & 255, c[1] = ue >>> 8 & 255, c[2] = ue >>> 16 & 255, c[3] = ue >>> 24 & 255, c[4] = ge >>> 0 & 255, c[5] = ge >>> 8 & 255, c[6] = ge >>> 16 & 255, c[7] = ge >>> 24 & 255, c[8] = oe >>> 0 & 255, c[9] = oe >>> 8 & 255, c[10] = oe >>> 16 & 255, c[11] = oe >>> 24 & 255, c[12] = he >>> 0 & 255, c[13] = he >>> 8 & 255, c[14] = he >>> 16 & 255, c[15] = he >>> 24 & 255, c[16] = pe >>> 0 & 255, c[17] = pe >>> 8 & 255, c[18] = pe >>> 16 & 255, c[19] = pe >>> 24 & 255, c[20] = ie >>> 0 & 255, c[21] = ie >>> 8 & 255, c[22] = ie >>> 16 & 255, c[23] = ie >>> 24 & 255, c[24] = N >>> 0 & 255, c[25] = N >>> 8 & 255, c[26] = N >>> 16 & 255, c[27] = N >>> 24 & 255, c[28] = O >>> 0 & 255, c[29] = O >>> 8 & 255, c[30] = O >>> 16 & 255, c[31] = O >>> 24 & 255, c[32] = H >>> 0 & 255, c[33] = H >>> 8 & 255, c[34] = H >>> 16 & 255, c[35] = H >>> 24 & 255, c[36] = F >>> 0 & 255, c[37] = F >>> 8 & 255, c[38] = F >>> 16 & 255, c[39] = F >>> 24 & 255, c[40] = z >>> 0 & 255, c[41] = z >>> 8 & 255, c[42] = z >>> 16 & 255, c[43] = z >>> 24 & 255, c[44] = Z >>> 0 & 255, c[45] = Z >>> 8 & 255, c[46] = Z >>> 16 & 255, c[47] = Z >>> 24 & 255, c[48] = Se >>> 0 & 255, c[49] = Se >>> 8 & 255, c[50] = Se >>> 16 & 255, c[51] = Se >>> 24 & 255, c[52] = Me >>> 0 & 255, c[53] = Me >>> 8 & 255, c[54] = Me >>> 16 & 255, c[55] = Me >>> 24 & 255, c[56] = De >>> 0 & 255, c[57] = De >>> 8 & 255, c[58] = De >>> 16 & 255, c[59] = De >>> 24 & 255, c[60] = Re >>> 0 & 255, c[61] = Re >>> 8 & 255, c[62] = Re >>> 16 & 255, c[63] = Re >>> 24 & 255;
    }
    function B(c, h, d, o) {
      for (var y = o[0] & 255 | (o[1] & 255) << 8 | (o[2] & 255) << 16 | (o[3] & 255) << 24, u = d[0] & 255 | (d[1] & 255) << 8 | (d[2] & 255) << 16 | (d[3] & 255) << 24, x = d[4] & 255 | (d[5] & 255) << 8 | (d[6] & 255) << 16 | (d[7] & 255) << 24, b = d[8] & 255 | (d[9] & 255) << 8 | (d[10] & 255) << 16 | (d[11] & 255) << 24, I = d[12] & 255 | (d[13] & 255) << 8 | (d[14] & 255) << 16 | (d[15] & 255) << 24, j = o[4] & 255 | (o[5] & 255) << 8 | (o[6] & 255) << 16 | (o[7] & 255) << 24, V = h[0] & 255 | (h[1] & 255) << 8 | (h[2] & 255) << 16 | (h[3] & 255) << 24, re = h[4] & 255 | (h[5] & 255) << 8 | (h[6] & 255) << 16 | (h[7] & 255) << 24, $ = h[8] & 255 | (h[9] & 255) << 8 | (h[10] & 255) << 16 | (h[11] & 255) << 24, le = h[12] & 255 | (h[13] & 255) << 8 | (h[14] & 255) << 16 | (h[15] & 255) << 24, ne = o[8] & 255 | (o[9] & 255) << 8 | (o[10] & 255) << 16 | (o[11] & 255) << 24, de = d[16] & 255 | (d[17] & 255) << 8 | (d[18] & 255) << 16 | (d[19] & 255) << 24, we = d[20] & 255 | (d[21] & 255) << 8 | (d[22] & 255) << 16 | (d[23] & 255) << 24, be = d[24] & 255 | (d[25] & 255) << 8 | (d[26] & 255) << 16 | (d[27] & 255) << 24, Ee = d[28] & 255 | (d[29] & 255) << 8 | (d[30] & 255) << 16 | (d[31] & 255) << 24, ve = o[12] & 255 | (o[13] & 255) << 8 | (o[14] & 255) << 16 | (o[15] & 255) << 24, ue = y, ge = u, oe = x, he = b, pe = I, ie = j, N = V, O = re, H = $, F = le, z = ne, Z = de, Se = we, Me = be, De = Ee, Re = ve, w, Ue = 0; Ue < 20; Ue += 2)
        w = ue + Se | 0, pe ^= w << 7 | w >>> 32 - 7, w = pe + ue | 0, H ^= w << 9 | w >>> 32 - 9, w = H + pe | 0, Se ^= w << 13 | w >>> 32 - 13, w = Se + H | 0, ue ^= w << 18 | w >>> 32 - 18, w = ie + ge | 0, F ^= w << 7 | w >>> 32 - 7, w = F + ie | 0, Me ^= w << 9 | w >>> 32 - 9, w = Me + F | 0, ge ^= w << 13 | w >>> 32 - 13, w = ge + Me | 0, ie ^= w << 18 | w >>> 32 - 18, w = z + N | 0, De ^= w << 7 | w >>> 32 - 7, w = De + z | 0, oe ^= w << 9 | w >>> 32 - 9, w = oe + De | 0, N ^= w << 13 | w >>> 32 - 13, w = N + oe | 0, z ^= w << 18 | w >>> 32 - 18, w = Re + Z | 0, he ^= w << 7 | w >>> 32 - 7, w = he + Re | 0, O ^= w << 9 | w >>> 32 - 9, w = O + he | 0, Z ^= w << 13 | w >>> 32 - 13, w = Z + O | 0, Re ^= w << 18 | w >>> 32 - 18, w = ue + he | 0, ge ^= w << 7 | w >>> 32 - 7, w = ge + ue | 0, oe ^= w << 9 | w >>> 32 - 9, w = oe + ge | 0, he ^= w << 13 | w >>> 32 - 13, w = he + oe | 0, ue ^= w << 18 | w >>> 32 - 18, w = ie + pe | 0, N ^= w << 7 | w >>> 32 - 7, w = N + ie | 0, O ^= w << 9 | w >>> 32 - 9, w = O + N | 0, pe ^= w << 13 | w >>> 32 - 13, w = pe + O | 0, ie ^= w << 18 | w >>> 32 - 18, w = z + F | 0, Z ^= w << 7 | w >>> 32 - 7, w = Z + z | 0, H ^= w << 9 | w >>> 32 - 9, w = H + Z | 0, F ^= w << 13 | w >>> 32 - 13, w = F + H | 0, z ^= w << 18 | w >>> 32 - 18, w = Re + De | 0, Se ^= w << 7 | w >>> 32 - 7, w = Se + Re | 0, Me ^= w << 9 | w >>> 32 - 9, w = Me + Se | 0, De ^= w << 13 | w >>> 32 - 13, w = De + Me | 0, Re ^= w << 18 | w >>> 32 - 18;
      c[0] = ue >>> 0 & 255, c[1] = ue >>> 8 & 255, c[2] = ue >>> 16 & 255, c[3] = ue >>> 24 & 255, c[4] = ie >>> 0 & 255, c[5] = ie >>> 8 & 255, c[6] = ie >>> 16 & 255, c[7] = ie >>> 24 & 255, c[8] = z >>> 0 & 255, c[9] = z >>> 8 & 255, c[10] = z >>> 16 & 255, c[11] = z >>> 24 & 255, c[12] = Re >>> 0 & 255, c[13] = Re >>> 8 & 255, c[14] = Re >>> 16 & 255, c[15] = Re >>> 24 & 255, c[16] = N >>> 0 & 255, c[17] = N >>> 8 & 255, c[18] = N >>> 16 & 255, c[19] = N >>> 24 & 255, c[20] = O >>> 0 & 255, c[21] = O >>> 8 & 255, c[22] = O >>> 16 & 255, c[23] = O >>> 24 & 255, c[24] = H >>> 0 & 255, c[25] = H >>> 8 & 255, c[26] = H >>> 16 & 255, c[27] = H >>> 24 & 255, c[28] = F >>> 0 & 255, c[29] = F >>> 8 & 255, c[30] = F >>> 16 & 255, c[31] = F >>> 24 & 255;
    }
    function G(c, h, d, o) {
      X(c, h, d, o);
    }
    function q(c, h, d, o) {
      B(c, h, d, o);
    }
    var Ce = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
    function Pe(c, h, d, o, y, u, x) {
      var b = new Uint8Array(16), I = new Uint8Array(64), j, V;
      for (V = 0; V < 16; V++)
        b[V] = 0;
      for (V = 0; V < 8; V++)
        b[V] = u[V];
      for (; y >= 64; ) {
        for (G(I, b, x, Ce), V = 0; V < 64; V++)
          c[h + V] = d[o + V] ^ I[V];
        for (j = 1, V = 8; V < 16; V++)
          j = j + (b[V] & 255) | 0, b[V] = j & 255, j >>>= 8;
        y -= 64, h += 64, o += 64;
      }
      if (y > 0)
        for (G(I, b, x, Ce), V = 0; V < y; V++)
          c[h + V] = d[o + V] ^ I[V];
      return 0;
    }
    function se(c, h, d, o, y) {
      var u = new Uint8Array(16), x = new Uint8Array(64), b, I;
      for (I = 0; I < 16; I++)
        u[I] = 0;
      for (I = 0; I < 8; I++)
        u[I] = o[I];
      for (; d >= 64; ) {
        for (G(x, u, y, Ce), I = 0; I < 64; I++)
          c[h + I] = x[I];
        for (b = 1, I = 8; I < 16; I++)
          b = b + (u[I] & 255) | 0, u[I] = b & 255, b >>>= 8;
        d -= 64, h += 64;
      }
      if (d > 0)
        for (G(x, u, y, Ce), I = 0; I < d; I++)
          c[h + I] = x[I];
      return 0;
    }
    function me(c, h, d, o, y) {
      var u = new Uint8Array(32);
      q(u, o, y, Ce);
      for (var x = new Uint8Array(8), b = 0; b < 8; b++)
        x[b] = o[b + 16];
      return se(c, h, d, x, u);
    }
    function tt(c, h, d, o, y, u, x) {
      var b = new Uint8Array(32);
      q(b, u, x, Ce);
      for (var I = new Uint8Array(8), j = 0; j < 8; j++)
        I[j] = u[j + 16];
      return Pe(c, h, d, o, y, I, b);
    }
    var Be = function(c) {
      this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0;
      var h, d, o, y, u, x, b, I;
      h = c[0] & 255 | (c[1] & 255) << 8, this.r[0] = h & 8191, d = c[2] & 255 | (c[3] & 255) << 8, this.r[1] = (h >>> 13 | d << 3) & 8191, o = c[4] & 255 | (c[5] & 255) << 8, this.r[2] = (d >>> 10 | o << 6) & 7939, y = c[6] & 255 | (c[7] & 255) << 8, this.r[3] = (o >>> 7 | y << 9) & 8191, u = c[8] & 255 | (c[9] & 255) << 8, this.r[4] = (y >>> 4 | u << 12) & 255, this.r[5] = u >>> 1 & 8190, x = c[10] & 255 | (c[11] & 255) << 8, this.r[6] = (u >>> 14 | x << 2) & 8191, b = c[12] & 255 | (c[13] & 255) << 8, this.r[7] = (x >>> 11 | b << 5) & 8065, I = c[14] & 255 | (c[15] & 255) << 8, this.r[8] = (b >>> 8 | I << 8) & 8191, this.r[9] = I >>> 5 & 127, this.pad[0] = c[16] & 255 | (c[17] & 255) << 8, this.pad[1] = c[18] & 255 | (c[19] & 255) << 8, this.pad[2] = c[20] & 255 | (c[21] & 255) << 8, this.pad[3] = c[22] & 255 | (c[23] & 255) << 8, this.pad[4] = c[24] & 255 | (c[25] & 255) << 8, this.pad[5] = c[26] & 255 | (c[27] & 255) << 8, this.pad[6] = c[28] & 255 | (c[29] & 255) << 8, this.pad[7] = c[30] & 255 | (c[31] & 255) << 8;
    };
    Be.prototype.blocks = function(c, h, d) {
      for (var o = this.fin ? 0 : 2048, y, u, x, b, I, j, V, re, $, le, ne, de, we, be, Ee, ve, ue, ge, oe, he = this.h[0], pe = this.h[1], ie = this.h[2], N = this.h[3], O = this.h[4], H = this.h[5], F = this.h[6], z = this.h[7], Z = this.h[8], Se = this.h[9], Me = this.r[0], De = this.r[1], Re = this.r[2], w = this.r[3], Ue = this.r[4], ze = this.r[5], $e = this.r[6], Le = this.r[7], ke = this.r[8], We = this.r[9]; d >= 16; )
        y = c[h + 0] & 255 | (c[h + 1] & 255) << 8, he += y & 8191, u = c[h + 2] & 255 | (c[h + 3] & 255) << 8, pe += (y >>> 13 | u << 3) & 8191, x = c[h + 4] & 255 | (c[h + 5] & 255) << 8, ie += (u >>> 10 | x << 6) & 8191, b = c[h + 6] & 255 | (c[h + 7] & 255) << 8, N += (x >>> 7 | b << 9) & 8191, I = c[h + 8] & 255 | (c[h + 9] & 255) << 8, O += (b >>> 4 | I << 12) & 8191, H += I >>> 1 & 8191, j = c[h + 10] & 255 | (c[h + 11] & 255) << 8, F += (I >>> 14 | j << 2) & 8191, V = c[h + 12] & 255 | (c[h + 13] & 255) << 8, z += (j >>> 11 | V << 5) & 8191, re = c[h + 14] & 255 | (c[h + 15] & 255) << 8, Z += (V >>> 8 | re << 8) & 8191, Se += re >>> 5 | o, $ = 0, le = $, le += he * Me, le += pe * (5 * We), le += ie * (5 * ke), le += N * (5 * Le), le += O * (5 * $e), $ = le >>> 13, le &= 8191, le += H * (5 * ze), le += F * (5 * Ue), le += z * (5 * w), le += Z * (5 * Re), le += Se * (5 * De), $ += le >>> 13, le &= 8191, ne = $, ne += he * De, ne += pe * Me, ne += ie * (5 * We), ne += N * (5 * ke), ne += O * (5 * Le), $ = ne >>> 13, ne &= 8191, ne += H * (5 * $e), ne += F * (5 * ze), ne += z * (5 * Ue), ne += Z * (5 * w), ne += Se * (5 * Re), $ += ne >>> 13, ne &= 8191, de = $, de += he * Re, de += pe * De, de += ie * Me, de += N * (5 * We), de += O * (5 * ke), $ = de >>> 13, de &= 8191, de += H * (5 * Le), de += F * (5 * $e), de += z * (5 * ze), de += Z * (5 * Ue), de += Se * (5 * w), $ += de >>> 13, de &= 8191, we = $, we += he * w, we += pe * Re, we += ie * De, we += N * Me, we += O * (5 * We), $ = we >>> 13, we &= 8191, we += H * (5 * ke), we += F * (5 * Le), we += z * (5 * $e), we += Z * (5 * ze), we += Se * (5 * Ue), $ += we >>> 13, we &= 8191, be = $, be += he * Ue, be += pe * w, be += ie * Re, be += N * De, be += O * Me, $ = be >>> 13, be &= 8191, be += H * (5 * We), be += F * (5 * ke), be += z * (5 * Le), be += Z * (5 * $e), be += Se * (5 * ze), $ += be >>> 13, be &= 8191, Ee = $, Ee += he * ze, Ee += pe * Ue, Ee += ie * w, Ee += N * Re, Ee += O * De, $ = Ee >>> 13, Ee &= 8191, Ee += H * Me, Ee += F * (5 * We), Ee += z * (5 * ke), Ee += Z * (5 * Le), Ee += Se * (5 * $e), $ += Ee >>> 13, Ee &= 8191, ve = $, ve += he * $e, ve += pe * ze, ve += ie * Ue, ve += N * w, ve += O * Re, $ = ve >>> 13, ve &= 8191, ve += H * De, ve += F * Me, ve += z * (5 * We), ve += Z * (5 * ke), ve += Se * (5 * Le), $ += ve >>> 13, ve &= 8191, ue = $, ue += he * Le, ue += pe * $e, ue += ie * ze, ue += N * Ue, ue += O * w, $ = ue >>> 13, ue &= 8191, ue += H * Re, ue += F * De, ue += z * Me, ue += Z * (5 * We), ue += Se * (5 * ke), $ += ue >>> 13, ue &= 8191, ge = $, ge += he * ke, ge += pe * Le, ge += ie * $e, ge += N * ze, ge += O * Ue, $ = ge >>> 13, ge &= 8191, ge += H * w, ge += F * Re, ge += z * De, ge += Z * Me, ge += Se * (5 * We), $ += ge >>> 13, ge &= 8191, oe = $, oe += he * We, oe += pe * ke, oe += ie * Le, oe += N * $e, oe += O * ze, $ = oe >>> 13, oe &= 8191, oe += H * Ue, oe += F * w, oe += z * Re, oe += Z * De, oe += Se * Me, $ += oe >>> 13, oe &= 8191, $ = ($ << 2) + $ | 0, $ = $ + le | 0, le = $ & 8191, $ = $ >>> 13, ne += $, he = le, pe = ne, ie = de, N = we, O = be, H = Ee, F = ve, z = ue, Z = ge, Se = oe, h += 16, d -= 16;
      this.h[0] = he, this.h[1] = pe, this.h[2] = ie, this.h[3] = N, this.h[4] = O, this.h[5] = H, this.h[6] = F, this.h[7] = z, this.h[8] = Z, this.h[9] = Se;
    }, Be.prototype.finish = function(c, h) {
      var d = new Uint16Array(10), o, y, u, x;
      if (this.leftover) {
        for (x = this.leftover, this.buffer[x++] = 1; x < 16; x++)
          this.buffer[x] = 0;
        this.fin = 1, this.blocks(this.buffer, 0, 16);
      }
      for (o = this.h[1] >>> 13, this.h[1] &= 8191, x = 2; x < 10; x++)
        this.h[x] += o, o = this.h[x] >>> 13, this.h[x] &= 8191;
      for (this.h[0] += o * 5, o = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += o, o = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += o, d[0] = this.h[0] + 5, o = d[0] >>> 13, d[0] &= 8191, x = 1; x < 10; x++)
        d[x] = this.h[x] + o, o = d[x] >>> 13, d[x] &= 8191;
      for (d[9] -= 1 << 13, y = (o ^ 1) - 1, x = 0; x < 10; x++)
        d[x] &= y;
      for (y = ~y, x = 0; x < 10; x++)
        this.h[x] = this.h[x] & y | d[x];
      for (this.h[0] = (this.h[0] | this.h[1] << 13) & 65535, this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535, this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535, this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535, this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535, this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535, this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535, this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535, u = this.h[0] + this.pad[0], this.h[0] = u & 65535, x = 1; x < 8; x++)
        u = (this.h[x] + this.pad[x] | 0) + (u >>> 16) | 0, this.h[x] = u & 65535;
      c[h + 0] = this.h[0] >>> 0 & 255, c[h + 1] = this.h[0] >>> 8 & 255, c[h + 2] = this.h[1] >>> 0 & 255, c[h + 3] = this.h[1] >>> 8 & 255, c[h + 4] = this.h[2] >>> 0 & 255, c[h + 5] = this.h[2] >>> 8 & 255, c[h + 6] = this.h[3] >>> 0 & 255, c[h + 7] = this.h[3] >>> 8 & 255, c[h + 8] = this.h[4] >>> 0 & 255, c[h + 9] = this.h[4] >>> 8 & 255, c[h + 10] = this.h[5] >>> 0 & 255, c[h + 11] = this.h[5] >>> 8 & 255, c[h + 12] = this.h[6] >>> 0 & 255, c[h + 13] = this.h[6] >>> 8 & 255, c[h + 14] = this.h[7] >>> 0 & 255, c[h + 15] = this.h[7] >>> 8 & 255;
    }, Be.prototype.update = function(c, h, d) {
      var o, y;
      if (this.leftover) {
        for (y = 16 - this.leftover, y > d && (y = d), o = 0; o < y; o++)
          this.buffer[this.leftover + o] = c[h + o];
        if (d -= y, h += y, this.leftover += y, this.leftover < 16)
          return;
        this.blocks(this.buffer, 0, 16), this.leftover = 0;
      }
      if (d >= 16 && (y = d - d % 16, this.blocks(c, h, y), h += y, d -= y), d) {
        for (o = 0; o < d; o++)
          this.buffer[this.leftover + o] = c[h + o];
        this.leftover += d;
      }
    };
    function xe(c, h, d, o, y, u) {
      var x = new Be(u);
      return x.update(d, o, y), x.finish(c, h), 0;
    }
    function Ae(c, h, d, o, y, u) {
      var x = new Uint8Array(16);
      return xe(x, 0, d, o, y, u), R(c, h, x, 0);
    }
    function E(c, h, d, o, y) {
      var u;
      if (d < 32)
        return -1;
      for (tt(c, 0, h, 0, d, o, y), xe(c, 16, c, 32, d - 32, c), u = 0; u < 16; u++)
        c[u] = 0;
      return 0;
    }
    function k(c, h, d, o, y) {
      var u, x = new Uint8Array(32);
      if (d < 32 || (me(x, 0, 32, o, y), Ae(h, 16, h, 32, d - 32, x) !== 0))
        return -1;
      for (tt(c, 0, h, 0, d, o, y), u = 0; u < 32; u++)
        c[u] = 0;
      return 0;
    }
    function J(c, h) {
      var d;
      for (d = 0; d < 16; d++)
        c[d] = h[d] | 0;
    }
    function Ne(c) {
      var h, d, o = 1;
      for (h = 0; h < 16; h++)
        d = c[h] + o + 65535, o = Math.floor(d / 65536), c[h] = d - o * 65536;
      c[0] += o - 1 + 37 * (o - 1);
    }
    function Oe(c, h, d) {
      for (var o, y = ~(d - 1), u = 0; u < 16; u++)
        o = y & (c[u] ^ h[u]), c[u] ^= o, h[u] ^= o;
    }
    function _e(c, h) {
      var d, o, y, u = r(), x = r();
      for (d = 0; d < 16; d++)
        x[d] = h[d];
      for (Ne(x), Ne(x), Ne(x), o = 0; o < 2; o++) {
        for (u[0] = x[0] - 65517, d = 1; d < 15; d++)
          u[d] = x[d] - 65535 - (u[d - 1] >> 16 & 1), u[d - 1] &= 65535;
        u[15] = x[15] - 32767 - (u[14] >> 16 & 1), y = u[15] >> 16 & 1, u[14] &= 65535, Oe(x, u, 1 - y);
      }
      for (d = 0; d < 16; d++)
        c[2 * d] = x[d] & 255, c[2 * d + 1] = x[d] >> 8;
    }
    function rt(c, h) {
      var d = new Uint8Array(32), o = new Uint8Array(32);
      return _e(d, c), _e(o, h), P(d, 0, o, 0);
    }
    function nt(c) {
      var h = new Uint8Array(32);
      return _e(h, c), h[0] & 1;
    }
    function L(c, h) {
      var d;
      for (d = 0; d < 16; d++)
        c[d] = h[2 * d] + (h[2 * d + 1] << 8);
      c[15] &= 32767;
    }
    function ce(c, h, d) {
      for (var o = 0; o < 16; o++)
        c[o] = h[o] + d[o];
    }
    function ee(c, h, d) {
      for (var o = 0; o < 16; o++)
        c[o] = h[o] - d[o];
    }
    function f(c, h, d) {
      var o, y, u = 0, x = 0, b = 0, I = 0, j = 0, V = 0, re = 0, $ = 0, le = 0, ne = 0, de = 0, we = 0, be = 0, Ee = 0, ve = 0, ue = 0, ge = 0, oe = 0, he = 0, pe = 0, ie = 0, N = 0, O = 0, H = 0, F = 0, z = 0, Z = 0, Se = 0, Me = 0, De = 0, Re = 0, w = d[0], Ue = d[1], ze = d[2], $e = d[3], Le = d[4], ke = d[5], We = d[6], it = d[7], je = d[8], Je = d[9], Qe = d[10], et = d[11], st = d[12], pt = d[13], yt = d[14], vt = d[15];
      o = h[0], u += o * w, x += o * Ue, b += o * ze, I += o * $e, j += o * Le, V += o * ke, re += o * We, $ += o * it, le += o * je, ne += o * Je, de += o * Qe, we += o * et, be += o * st, Ee += o * pt, ve += o * yt, ue += o * vt, o = h[1], x += o * w, b += o * Ue, I += o * ze, j += o * $e, V += o * Le, re += o * ke, $ += o * We, le += o * it, ne += o * je, de += o * Je, we += o * Qe, be += o * et, Ee += o * st, ve += o * pt, ue += o * yt, ge += o * vt, o = h[2], b += o * w, I += o * Ue, j += o * ze, V += o * $e, re += o * Le, $ += o * ke, le += o * We, ne += o * it, de += o * je, we += o * Je, be += o * Qe, Ee += o * et, ve += o * st, ue += o * pt, ge += o * yt, oe += o * vt, o = h[3], I += o * w, j += o * Ue, V += o * ze, re += o * $e, $ += o * Le, le += o * ke, ne += o * We, de += o * it, we += o * je, be += o * Je, Ee += o * Qe, ve += o * et, ue += o * st, ge += o * pt, oe += o * yt, he += o * vt, o = h[4], j += o * w, V += o * Ue, re += o * ze, $ += o * $e, le += o * Le, ne += o * ke, de += o * We, we += o * it, be += o * je, Ee += o * Je, ve += o * Qe, ue += o * et, ge += o * st, oe += o * pt, he += o * yt, pe += o * vt, o = h[5], V += o * w, re += o * Ue, $ += o * ze, le += o * $e, ne += o * Le, de += o * ke, we += o * We, be += o * it, Ee += o * je, ve += o * Je, ue += o * Qe, ge += o * et, oe += o * st, he += o * pt, pe += o * yt, ie += o * vt, o = h[6], re += o * w, $ += o * Ue, le += o * ze, ne += o * $e, de += o * Le, we += o * ke, be += o * We, Ee += o * it, ve += o * je, ue += o * Je, ge += o * Qe, oe += o * et, he += o * st, pe += o * pt, ie += o * yt, N += o * vt, o = h[7], $ += o * w, le += o * Ue, ne += o * ze, de += o * $e, we += o * Le, be += o * ke, Ee += o * We, ve += o * it, ue += o * je, ge += o * Je, oe += o * Qe, he += o * et, pe += o * st, ie += o * pt, N += o * yt, O += o * vt, o = h[8], le += o * w, ne += o * Ue, de += o * ze, we += o * $e, be += o * Le, Ee += o * ke, ve += o * We, ue += o * it, ge += o * je, oe += o * Je, he += o * Qe, pe += o * et, ie += o * st, N += o * pt, O += o * yt, H += o * vt, o = h[9], ne += o * w, de += o * Ue, we += o * ze, be += o * $e, Ee += o * Le, ve += o * ke, ue += o * We, ge += o * it, oe += o * je, he += o * Je, pe += o * Qe, ie += o * et, N += o * st, O += o * pt, H += o * yt, F += o * vt, o = h[10], de += o * w, we += o * Ue, be += o * ze, Ee += o * $e, ve += o * Le, ue += o * ke, ge += o * We, oe += o * it, he += o * je, pe += o * Je, ie += o * Qe, N += o * et, O += o * st, H += o * pt, F += o * yt, z += o * vt, o = h[11], we += o * w, be += o * Ue, Ee += o * ze, ve += o * $e, ue += o * Le, ge += o * ke, oe += o * We, he += o * it, pe += o * je, ie += o * Je, N += o * Qe, O += o * et, H += o * st, F += o * pt, z += o * yt, Z += o * vt, o = h[12], be += o * w, Ee += o * Ue, ve += o * ze, ue += o * $e, ge += o * Le, oe += o * ke, he += o * We, pe += o * it, ie += o * je, N += o * Je, O += o * Qe, H += o * et, F += o * st, z += o * pt, Z += o * yt, Se += o * vt, o = h[13], Ee += o * w, ve += o * Ue, ue += o * ze, ge += o * $e, oe += o * Le, he += o * ke, pe += o * We, ie += o * it, N += o * je, O += o * Je, H += o * Qe, F += o * et, z += o * st, Z += o * pt, Se += o * yt, Me += o * vt, o = h[14], ve += o * w, ue += o * Ue, ge += o * ze, oe += o * $e, he += o * Le, pe += o * ke, ie += o * We, N += o * it, O += o * je, H += o * Je, F += o * Qe, z += o * et, Z += o * st, Se += o * pt, Me += o * yt, De += o * vt, o = h[15], ue += o * w, ge += o * Ue, oe += o * ze, he += o * $e, pe += o * Le, ie += o * ke, N += o * We, O += o * it, H += o * je, F += o * Je, z += o * Qe, Z += o * et, Se += o * st, Me += o * pt, De += o * yt, Re += o * vt, u += 38 * ge, x += 38 * oe, b += 38 * he, I += 38 * pe, j += 38 * ie, V += 38 * N, re += 38 * O, $ += 38 * H, le += 38 * F, ne += 38 * z, de += 38 * Z, we += 38 * Se, be += 38 * Me, Ee += 38 * De, ve += 38 * Re, y = 1, o = u + y + 65535, y = Math.floor(o / 65536), u = o - y * 65536, o = x + y + 65535, y = Math.floor(o / 65536), x = o - y * 65536, o = b + y + 65535, y = Math.floor(o / 65536), b = o - y * 65536, o = I + y + 65535, y = Math.floor(o / 65536), I = o - y * 65536, o = j + y + 65535, y = Math.floor(o / 65536), j = o - y * 65536, o = V + y + 65535, y = Math.floor(o / 65536), V = o - y * 65536, o = re + y + 65535, y = Math.floor(o / 65536), re = o - y * 65536, o = $ + y + 65535, y = Math.floor(o / 65536), $ = o - y * 65536, o = le + y + 65535, y = Math.floor(o / 65536), le = o - y * 65536, o = ne + y + 65535, y = Math.floor(o / 65536), ne = o - y * 65536, o = de + y + 65535, y = Math.floor(o / 65536), de = o - y * 65536, o = we + y + 65535, y = Math.floor(o / 65536), we = o - y * 65536, o = be + y + 65535, y = Math.floor(o / 65536), be = o - y * 65536, o = Ee + y + 65535, y = Math.floor(o / 65536), Ee = o - y * 65536, o = ve + y + 65535, y = Math.floor(o / 65536), ve = o - y * 65536, o = ue + y + 65535, y = Math.floor(o / 65536), ue = o - y * 65536, u += y - 1 + 37 * (y - 1), y = 1, o = u + y + 65535, y = Math.floor(o / 65536), u = o - y * 65536, o = x + y + 65535, y = Math.floor(o / 65536), x = o - y * 65536, o = b + y + 65535, y = Math.floor(o / 65536), b = o - y * 65536, o = I + y + 65535, y = Math.floor(o / 65536), I = o - y * 65536, o = j + y + 65535, y = Math.floor(o / 65536), j = o - y * 65536, o = V + y + 65535, y = Math.floor(o / 65536), V = o - y * 65536, o = re + y + 65535, y = Math.floor(o / 65536), re = o - y * 65536, o = $ + y + 65535, y = Math.floor(o / 65536), $ = o - y * 65536, o = le + y + 65535, y = Math.floor(o / 65536), le = o - y * 65536, o = ne + y + 65535, y = Math.floor(o / 65536), ne = o - y * 65536, o = de + y + 65535, y = Math.floor(o / 65536), de = o - y * 65536, o = we + y + 65535, y = Math.floor(o / 65536), we = o - y * 65536, o = be + y + 65535, y = Math.floor(o / 65536), be = o - y * 65536, o = Ee + y + 65535, y = Math.floor(o / 65536), Ee = o - y * 65536, o = ve + y + 65535, y = Math.floor(o / 65536), ve = o - y * 65536, o = ue + y + 65535, y = Math.floor(o / 65536), ue = o - y * 65536, u += y - 1 + 37 * (y - 1), c[0] = u, c[1] = x, c[2] = b, c[3] = I, c[4] = j, c[5] = V, c[6] = re, c[7] = $, c[8] = le, c[9] = ne, c[10] = de, c[11] = we, c[12] = be, c[13] = Ee, c[14] = ve, c[15] = ue;
    }
    function A(c, h) {
      f(c, h, h);
    }
    function T(c, h) {
      var d = r(), o;
      for (o = 0; o < 16; o++)
        d[o] = h[o];
      for (o = 253; o >= 0; o--)
        A(d, d), o !== 2 && o !== 4 && f(d, d, h);
      for (o = 0; o < 16; o++)
        c[o] = d[o];
    }
    function D(c, h) {
      var d = r(), o;
      for (o = 0; o < 16; o++)
        d[o] = h[o];
      for (o = 250; o >= 0; o--)
        A(d, d), o !== 1 && f(d, d, h);
      for (o = 0; o < 16; o++)
        c[o] = d[o];
    }
    function W(c, h, d) {
      var o = new Uint8Array(32), y = new Float64Array(80), u, x, b = r(), I = r(), j = r(), V = r(), re = r(), $ = r();
      for (x = 0; x < 31; x++)
        o[x] = h[x];
      for (o[31] = h[31] & 127 | 64, o[0] &= 248, L(y, d), x = 0; x < 16; x++)
        I[x] = y[x], V[x] = b[x] = j[x] = 0;
      for (b[0] = V[0] = 1, x = 254; x >= 0; --x)
        u = o[x >>> 3] >>> (x & 7) & 1, Oe(b, I, u), Oe(j, V, u), ce(re, b, j), ee(b, b, j), ce(j, I, V), ee(I, I, V), A(V, re), A($, b), f(b, j, b), f(j, I, re), ce(re, b, j), ee(b, b, j), A(I, b), ee(j, V, $), f(b, j, v), ce(b, b, V), f(j, j, b), f(b, V, $), f(V, I, y), A(I, re), Oe(b, I, u), Oe(j, V, u);
      for (x = 0; x < 16; x++)
        y[x + 16] = b[x], y[x + 32] = j[x], y[x + 48] = I[x], y[x + 64] = V[x];
      var le = y.subarray(32), ne = y.subarray(16);
      return T(le, le), f(ne, ne, le), _e(c, ne), 0;
    }
    function Q(c, h) {
      return W(c, h, a);
    }
    function fe(c, h) {
      return n(h, 32), Q(c, h);
    }
    function te(c, h, d) {
      var o = new Uint8Array(32);
      return W(o, d, h), q(c, i, o, Ce);
    }
    var Te = E, ae = k;
    function Ie(c, h, d, o, y, u) {
      var x = new Uint8Array(32);
      return te(x, y, u), Te(c, h, d, o, x);
    }
    function Ye(c, h, d, o, y, u) {
      var x = new Uint8Array(32);
      return te(x, y, u), ae(c, h, d, o, x);
    }
    var ut = [
      1116352408,
      3609767458,
      1899447441,
      602891725,
      3049323471,
      3964484399,
      3921009573,
      2173295548,
      961987163,
      4081628472,
      1508970993,
      3053834265,
      2453635748,
      2937671579,
      2870763221,
      3664609560,
      3624381080,
      2734883394,
      310598401,
      1164996542,
      607225278,
      1323610764,
      1426881987,
      3590304994,
      1925078388,
      4068182383,
      2162078206,
      991336113,
      2614888103,
      633803317,
      3248222580,
      3479774868,
      3835390401,
      2666613458,
      4022224774,
      944711139,
      264347078,
      2341262773,
      604807628,
      2007800933,
      770255983,
      1495990901,
      1249150122,
      1856431235,
      1555081692,
      3175218132,
      1996064986,
      2198950837,
      2554220882,
      3999719339,
      2821834349,
      766784016,
      2952996808,
      2566594879,
      3210313671,
      3203337956,
      3336571891,
      1034457026,
      3584528711,
      2466948901,
      113926993,
      3758326383,
      338241895,
      168717936,
      666307205,
      1188179964,
      773529912,
      1546045734,
      1294757372,
      1522805485,
      1396182291,
      2643833823,
      1695183700,
      2343527390,
      1986661051,
      1014477480,
      2177026350,
      1206759142,
      2456956037,
      344077627,
      2730485921,
      1290863460,
      2820302411,
      3158454273,
      3259730800,
      3505952657,
      3345764771,
      106217008,
      3516065817,
      3606008344,
      3600352804,
      1432725776,
      4094571909,
      1467031594,
      275423344,
      851169720,
      430227734,
      3100823752,
      506948616,
      1363258195,
      659060556,
      3750685593,
      883997877,
      3785050280,
      958139571,
      3318307427,
      1322822218,
      3812723403,
      1537002063,
      2003034995,
      1747873779,
      3602036899,
      1955562222,
      1575990012,
      2024104815,
      1125592928,
      2227730452,
      2716904306,
      2361852424,
      442776044,
      2428436474,
      593698344,
      2756734187,
      3733110249,
      3204031479,
      2999351573,
      3329325298,
      3815920427,
      3391569614,
      3928383900,
      3515267271,
      566280711,
      3940187606,
      3454069534,
      4118630271,
      4000239992,
      116418474,
      1914138554,
      174292421,
      2731055270,
      289380356,
      3203993006,
      460393269,
      320620315,
      685471733,
      587496836,
      852142971,
      1086792851,
      1017036298,
      365543100,
      1126000580,
      2618297676,
      1288033470,
      3409855158,
      1501505948,
      4234509866,
      1607167915,
      987167468,
      1816402316,
      1246189591
    ];
    function ht(c, h, d, o) {
      for (var y = new Int32Array(16), u = new Int32Array(16), x, b, I, j, V, re, $, le, ne, de, we, be, Ee, ve, ue, ge, oe, he, pe, ie, N, O, H, F, z, Z, Se = c[0], Me = c[1], De = c[2], Re = c[3], w = c[4], Ue = c[5], ze = c[6], $e = c[7], Le = h[0], ke = h[1], We = h[2], it = h[3], je = h[4], Je = h[5], Qe = h[6], et = h[7], st = 0; o >= 128; ) {
        for (pe = 0; pe < 16; pe++)
          ie = 8 * pe + st, y[pe] = d[ie + 0] << 24 | d[ie + 1] << 16 | d[ie + 2] << 8 | d[ie + 3], u[pe] = d[ie + 4] << 24 | d[ie + 5] << 16 | d[ie + 6] << 8 | d[ie + 7];
        for (pe = 0; pe < 80; pe++)
          if (x = Se, b = Me, I = De, j = Re, V = w, re = Ue, $ = ze, le = $e, ne = Le, de = ke, we = We, be = it, Ee = je, ve = Je, ue = Qe, ge = et, N = $e, O = et, H = O & 65535, F = O >>> 16, z = N & 65535, Z = N >>> 16, N = (w >>> 14 | je << 32 - 14) ^ (w >>> 18 | je << 32 - 18) ^ (je >>> 41 - 32 | w << 32 - (41 - 32)), O = (je >>> 14 | w << 32 - 14) ^ (je >>> 18 | w << 32 - 18) ^ (w >>> 41 - 32 | je << 32 - (41 - 32)), H += O & 65535, F += O >>> 16, z += N & 65535, Z += N >>> 16, N = w & Ue ^ ~w & ze, O = je & Je ^ ~je & Qe, H += O & 65535, F += O >>> 16, z += N & 65535, Z += N >>> 16, N = ut[pe * 2], O = ut[pe * 2 + 1], H += O & 65535, F += O >>> 16, z += N & 65535, Z += N >>> 16, N = y[pe % 16], O = u[pe % 16], H += O & 65535, F += O >>> 16, z += N & 65535, Z += N >>> 16, F += H >>> 16, z += F >>> 16, Z += z >>> 16, oe = z & 65535 | Z << 16, he = H & 65535 | F << 16, N = oe, O = he, H = O & 65535, F = O >>> 16, z = N & 65535, Z = N >>> 16, N = (Se >>> 28 | Le << 32 - 28) ^ (Le >>> 34 - 32 | Se << 32 - (34 - 32)) ^ (Le >>> 39 - 32 | Se << 32 - (39 - 32)), O = (Le >>> 28 | Se << 32 - 28) ^ (Se >>> 34 - 32 | Le << 32 - (34 - 32)) ^ (Se >>> 39 - 32 | Le << 32 - (39 - 32)), H += O & 65535, F += O >>> 16, z += N & 65535, Z += N >>> 16, N = Se & Me ^ Se & De ^ Me & De, O = Le & ke ^ Le & We ^ ke & We, H += O & 65535, F += O >>> 16, z += N & 65535, Z += N >>> 16, F += H >>> 16, z += F >>> 16, Z += z >>> 16, le = z & 65535 | Z << 16, ge = H & 65535 | F << 16, N = j, O = be, H = O & 65535, F = O >>> 16, z = N & 65535, Z = N >>> 16, N = oe, O = he, H += O & 65535, F += O >>> 16, z += N & 65535, Z += N >>> 16, F += H >>> 16, z += F >>> 16, Z += z >>> 16, j = z & 65535 | Z << 16, be = H & 65535 | F << 16, Me = x, De = b, Re = I, w = j, Ue = V, ze = re, $e = $, Se = le, ke = ne, We = de, it = we, je = be, Je = Ee, Qe = ve, et = ue, Le = ge, pe % 16 === 15)
            for (ie = 0; ie < 16; ie++)
              N = y[ie], O = u[ie], H = O & 65535, F = O >>> 16, z = N & 65535, Z = N >>> 16, N = y[(ie + 9) % 16], O = u[(ie + 9) % 16], H += O & 65535, F += O >>> 16, z += N & 65535, Z += N >>> 16, oe = y[(ie + 1) % 16], he = u[(ie + 1) % 16], N = (oe >>> 1 | he << 32 - 1) ^ (oe >>> 8 | he << 32 - 8) ^ oe >>> 7, O = (he >>> 1 | oe << 32 - 1) ^ (he >>> 8 | oe << 32 - 8) ^ (he >>> 7 | oe << 32 - 7), H += O & 65535, F += O >>> 16, z += N & 65535, Z += N >>> 16, oe = y[(ie + 14) % 16], he = u[(ie + 14) % 16], N = (oe >>> 19 | he << 32 - 19) ^ (he >>> 61 - 32 | oe << 32 - (61 - 32)) ^ oe >>> 6, O = (he >>> 19 | oe << 32 - 19) ^ (oe >>> 61 - 32 | he << 32 - (61 - 32)) ^ (he >>> 6 | oe << 32 - 6), H += O & 65535, F += O >>> 16, z += N & 65535, Z += N >>> 16, F += H >>> 16, z += F >>> 16, Z += z >>> 16, y[ie] = z & 65535 | Z << 16, u[ie] = H & 65535 | F << 16;
        N = Se, O = Le, H = O & 65535, F = O >>> 16, z = N & 65535, Z = N >>> 16, N = c[0], O = h[0], H += O & 65535, F += O >>> 16, z += N & 65535, Z += N >>> 16, F += H >>> 16, z += F >>> 16, Z += z >>> 16, c[0] = Se = z & 65535 | Z << 16, h[0] = Le = H & 65535 | F << 16, N = Me, O = ke, H = O & 65535, F = O >>> 16, z = N & 65535, Z = N >>> 16, N = c[1], O = h[1], H += O & 65535, F += O >>> 16, z += N & 65535, Z += N >>> 16, F += H >>> 16, z += F >>> 16, Z += z >>> 16, c[1] = Me = z & 65535 | Z << 16, h[1] = ke = H & 65535 | F << 16, N = De, O = We, H = O & 65535, F = O >>> 16, z = N & 65535, Z = N >>> 16, N = c[2], O = h[2], H += O & 65535, F += O >>> 16, z += N & 65535, Z += N >>> 16, F += H >>> 16, z += F >>> 16, Z += z >>> 16, c[2] = De = z & 65535 | Z << 16, h[2] = We = H & 65535 | F << 16, N = Re, O = it, H = O & 65535, F = O >>> 16, z = N & 65535, Z = N >>> 16, N = c[3], O = h[3], H += O & 65535, F += O >>> 16, z += N & 65535, Z += N >>> 16, F += H >>> 16, z += F >>> 16, Z += z >>> 16, c[3] = Re = z & 65535 | Z << 16, h[3] = it = H & 65535 | F << 16, N = w, O = je, H = O & 65535, F = O >>> 16, z = N & 65535, Z = N >>> 16, N = c[4], O = h[4], H += O & 65535, F += O >>> 16, z += N & 65535, Z += N >>> 16, F += H >>> 16, z += F >>> 16, Z += z >>> 16, c[4] = w = z & 65535 | Z << 16, h[4] = je = H & 65535 | F << 16, N = Ue, O = Je, H = O & 65535, F = O >>> 16, z = N & 65535, Z = N >>> 16, N = c[5], O = h[5], H += O & 65535, F += O >>> 16, z += N & 65535, Z += N >>> 16, F += H >>> 16, z += F >>> 16, Z += z >>> 16, c[5] = Ue = z & 65535 | Z << 16, h[5] = Je = H & 65535 | F << 16, N = ze, O = Qe, H = O & 65535, F = O >>> 16, z = N & 65535, Z = N >>> 16, N = c[6], O = h[6], H += O & 65535, F += O >>> 16, z += N & 65535, Z += N >>> 16, F += H >>> 16, z += F >>> 16, Z += z >>> 16, c[6] = ze = z & 65535 | Z << 16, h[6] = Qe = H & 65535 | F << 16, N = $e, O = et, H = O & 65535, F = O >>> 16, z = N & 65535, Z = N >>> 16, N = c[7], O = h[7], H += O & 65535, F += O >>> 16, z += N & 65535, Z += N >>> 16, F += H >>> 16, z += F >>> 16, Z += z >>> 16, c[7] = $e = z & 65535 | Z << 16, h[7] = et = H & 65535 | F << 16, st += 128, o -= 128;
      }
      return o;
    }
    function Ze(c, h, d) {
      var o = new Int32Array(8), y = new Int32Array(8), u = new Uint8Array(256), x, b = d;
      for (o[0] = 1779033703, o[1] = 3144134277, o[2] = 1013904242, o[3] = 2773480762, o[4] = 1359893119, o[5] = 2600822924, o[6] = 528734635, o[7] = 1541459225, y[0] = 4089235720, y[1] = 2227873595, y[2] = 4271175723, y[3] = 1595750129, y[4] = 2917565137, y[5] = 725511199, y[6] = 4215389547, y[7] = 327033209, ht(o, y, h, d), d %= 128, x = 0; x < d; x++)
        u[x] = h[b - d + x];
      for (u[d] = 128, d = 256 - 128 * (d < 112 ? 1 : 0), u[d - 9] = 0, S(u, d - 8, b / 536870912 | 0, b << 3), ht(o, y, u, d), x = 0; x < 8; x++)
        S(c, 8 * x, o[x], y[x]);
      return 0;
    }
    function bt(c, h) {
      var d = r(), o = r(), y = r(), u = r(), x = r(), b = r(), I = r(), j = r(), V = r();
      ee(d, c[1], c[0]), ee(V, h[1], h[0]), f(d, d, V), ce(o, c[0], c[1]), ce(V, h[0], h[1]), f(o, o, V), f(y, c[3], h[3]), f(y, y, g), f(u, c[2], h[2]), ce(u, u, u), ee(x, o, d), ee(b, u, y), ce(I, u, y), ce(j, o, d), f(c[0], x, b), f(c[1], j, I), f(c[2], I, b), f(c[3], x, j);
    }
    function Et(c, h, d) {
      var o;
      for (o = 0; o < 4; o++)
        Oe(c[o], h[o], d);
    }
    function _t(c, h) {
      var d = r(), o = r(), y = r();
      T(y, h[2]), f(d, h[0], y), f(o, h[1], y), _e(c, o), c[31] ^= nt(d) << 7;
    }
    function Jt(c, h, d) {
      var o, y;
      for (J(c[0], s), J(c[1], l), J(c[2], l), J(c[3], s), y = 255; y >= 0; --y)
        o = d[y / 8 | 0] >> (y & 7) & 1, Et(c, h, o), bt(h, c), bt(c, c), Et(c, h, o);
    }
    function Ht(c, h) {
      var d = [r(), r(), r(), r()];
      J(d[0], m), J(d[1], _), J(d[2], l), f(d[3], m, _), Jt(c, d, h);
    }
    function jt(c, h, d) {
      var o = new Uint8Array(64), y = [r(), r(), r(), r()], u;
      for (d || n(h, 32), Ze(o, h, 32), o[0] &= 248, o[31] &= 127, o[31] |= 64, Ht(y, o), _t(c, y), u = 0; u < 32; u++)
        h[u + 32] = c[u];
      return 0;
    }
    var kt = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
    function It(c, h) {
      var d, o, y, u;
      for (o = 63; o >= 32; --o) {
        for (d = 0, y = o - 32, u = o - 12; y < u; ++y)
          h[y] += d - 16 * h[o] * kt[y - (o - 32)], d = Math.floor((h[y] + 128) / 256), h[y] -= d * 256;
        h[y] += d, h[o] = 0;
      }
      for (d = 0, y = 0; y < 32; y++)
        h[y] += d - (h[31] >> 4) * kt[y], d = h[y] >> 8, h[y] &= 255;
      for (y = 0; y < 32; y++)
        h[y] -= d * kt[y];
      for (o = 0; o < 32; o++)
        h[o + 1] += h[o] >> 8, c[o] = h[o] & 255;
    }
    function Qt(c) {
      var h = new Float64Array(64), d;
      for (d = 0; d < 64; d++)
        h[d] = c[d];
      for (d = 0; d < 64; d++)
        c[d] = 0;
      It(c, h);
    }
    function er(c, h, d, o) {
      var y = new Uint8Array(64), u = new Uint8Array(64), x = new Uint8Array(64), b, I, j = new Float64Array(64), V = [r(), r(), r(), r()];
      Ze(y, o, 32), y[0] &= 248, y[31] &= 127, y[31] |= 64;
      var re = d + 64;
      for (b = 0; b < d; b++)
        c[64 + b] = h[b];
      for (b = 0; b < 32; b++)
        c[32 + b] = y[32 + b];
      for (Ze(x, c.subarray(32), d + 32), Qt(x), Ht(V, x), _t(c, V), b = 32; b < 64; b++)
        c[b] = o[b];
      for (Ze(u, c, d + 64), Qt(u), b = 0; b < 64; b++)
        j[b] = 0;
      for (b = 0; b < 32; b++)
        j[b] = x[b];
      for (b = 0; b < 32; b++)
        for (I = 0; I < 32; I++)
          j[b + I] += u[b] * y[I];
      return It(c.subarray(32), j), re;
    }
    function hr(c, h) {
      var d = r(), o = r(), y = r(), u = r(), x = r(), b = r(), I = r();
      return J(c[2], l), L(c[1], h), A(y, c[1]), f(u, y, p), ee(y, y, c[2]), ce(u, c[2], u), A(x, u), A(b, x), f(I, b, x), f(d, I, y), f(d, d, u), D(d, d), f(d, d, y), f(d, d, u), f(d, d, u), f(c[0], d, u), A(o, c[0]), f(o, o, u), rt(o, y) && f(c[0], c[0], M), A(o, c[0]), f(o, o, u), rt(o, y) ? -1 : (nt(c[0]) === h[31] >> 7 && ee(c[0], s, c[0]), f(c[3], c[0], c[1]), 0);
    }
    function Wt(c, h, d, o) {
      var y, u = new Uint8Array(32), x = new Uint8Array(64), b = [r(), r(), r(), r()], I = [r(), r(), r(), r()];
      if (d < 64 || hr(I, o))
        return -1;
      for (y = 0; y < d; y++)
        c[y] = h[y];
      for (y = 0; y < 32; y++)
        c[y + 32] = o[y];
      if (Ze(x, c, d), Qt(x), Jt(b, I, x), Ht(I, h.subarray(32)), bt(b, I), _t(u, b), d -= 64, P(h, 0, u, 0)) {
        for (y = 0; y < d; y++)
          c[y] = 0;
        return -1;
      }
      for (y = 0; y < d; y++)
        c[y] = h[y + 64];
      return d;
    }
    var tr = 32, Gt = 24, Ft = 32, Dt = 16, zt = 32, Yt = 32, $t = 32, Ct = 32, Zt = 32, Nt = Gt, rr = Ft, nr = Dt, lt = 64, Ot = 32, Mt = 64, ir = 32, qt = 64;
    t.lowlevel = {
      crypto_core_hsalsa20: q,
      crypto_stream_xor: tt,
      crypto_stream: me,
      crypto_stream_salsa20_xor: Pe,
      crypto_stream_salsa20: se,
      crypto_onetimeauth: xe,
      crypto_onetimeauth_verify: Ae,
      crypto_verify_16: R,
      crypto_verify_32: P,
      crypto_secretbox: E,
      crypto_secretbox_open: k,
      crypto_scalarmult: W,
      crypto_scalarmult_base: Q,
      crypto_box_beforenm: te,
      crypto_box_afternm: Te,
      crypto_box: Ie,
      crypto_box_open: Ye,
      crypto_box_keypair: fe,
      crypto_hash: Ze,
      crypto_sign: er,
      crypto_sign_keypair: jt,
      crypto_sign_open: Wt,
      crypto_secretbox_KEYBYTES: tr,
      crypto_secretbox_NONCEBYTES: Gt,
      crypto_secretbox_ZEROBYTES: Ft,
      crypto_secretbox_BOXZEROBYTES: Dt,
      crypto_scalarmult_BYTES: zt,
      crypto_scalarmult_SCALARBYTES: Yt,
      crypto_box_PUBLICKEYBYTES: $t,
      crypto_box_SECRETKEYBYTES: Ct,
      crypto_box_BEFORENMBYTES: Zt,
      crypto_box_NONCEBYTES: Nt,
      crypto_box_ZEROBYTES: rr,
      crypto_box_BOXZEROBYTES: nr,
      crypto_sign_BYTES: lt,
      crypto_sign_PUBLICKEYBYTES: Ot,
      crypto_sign_SECRETKEYBYTES: Mt,
      crypto_sign_SEEDBYTES: ir,
      crypto_hash_BYTES: qt,
      gf: r,
      D: p,
      L: kt,
      pack25519: _e,
      unpack25519: L,
      M: f,
      A: ce,
      S: A,
      Z: ee,
      pow2523: D,
      add: bt,
      set25519: J,
      modL: It,
      scalarmult: Jt,
      scalarbase: Ht
    };
    function ar(c, h) {
      if (c.length !== tr)
        throw new Error("bad key size");
      if (h.length !== Gt)
        throw new Error("bad nonce size");
    }
    function yr(c, h) {
      if (c.length !== $t)
        throw new Error("bad public key size");
      if (h.length !== Ct)
        throw new Error("bad secret key size");
    }
    function ot() {
      for (var c = 0; c < arguments.length; c++)
        if (!(arguments[c] instanceof Uint8Array))
          throw new TypeError("unexpected type, use Uint8Array");
    }
    function or(c) {
      for (var h = 0; h < c.length; h++)
        c[h] = 0;
    }
    t.randomBytes = function(c) {
      var h = new Uint8Array(c);
      return n(h, c), h;
    }, t.secretbox = function(c, h, d) {
      ot(c, h, d), ar(d, h);
      for (var o = new Uint8Array(Ft + c.length), y = new Uint8Array(o.length), u = 0; u < c.length; u++)
        o[u + Ft] = c[u];
      return E(y, o, o.length, h, d), y.subarray(Dt);
    }, t.secretbox.open = function(c, h, d) {
      ot(c, h, d), ar(d, h);
      for (var o = new Uint8Array(Dt + c.length), y = new Uint8Array(o.length), u = 0; u < c.length; u++)
        o[u + Dt] = c[u];
      return o.length < 32 || k(y, o, o.length, h, d) !== 0 ? null : y.subarray(Ft);
    }, t.secretbox.keyLength = tr, t.secretbox.nonceLength = Gt, t.secretbox.overheadLength = Dt, t.scalarMult = function(c, h) {
      if (ot(c, h), c.length !== Yt)
        throw new Error("bad n size");
      if (h.length !== zt)
        throw new Error("bad p size");
      var d = new Uint8Array(zt);
      return W(d, c, h), d;
    }, t.scalarMult.base = function(c) {
      if (ot(c), c.length !== Yt)
        throw new Error("bad n size");
      var h = new Uint8Array(zt);
      return Q(h, c), h;
    }, t.scalarMult.scalarLength = Yt, t.scalarMult.groupElementLength = zt, t.box = function(c, h, d, o) {
      var y = t.box.before(d, o);
      return t.secretbox(c, h, y);
    }, t.box.before = function(c, h) {
      ot(c, h), yr(c, h);
      var d = new Uint8Array(Zt);
      return te(d, c, h), d;
    }, t.box.after = t.secretbox, t.box.open = function(c, h, d, o) {
      var y = t.box.before(d, o);
      return t.secretbox.open(c, h, y);
    }, t.box.open.after = t.secretbox.open, t.box.keyPair = function() {
      var c = new Uint8Array($t), h = new Uint8Array(Ct);
      return fe(c, h), { publicKey: c, secretKey: h };
    }, t.box.keyPair.fromSecretKey = function(c) {
      if (ot(c), c.length !== Ct)
        throw new Error("bad secret key size");
      var h = new Uint8Array($t);
      return Q(h, c), { publicKey: h, secretKey: new Uint8Array(c) };
    }, t.box.publicKeyLength = $t, t.box.secretKeyLength = Ct, t.box.sharedKeyLength = Zt, t.box.nonceLength = Nt, t.box.overheadLength = t.secretbox.overheadLength, t.sign = function(c, h) {
      if (ot(c, h), h.length !== Mt)
        throw new Error("bad secret key size");
      var d = new Uint8Array(lt + c.length);
      return er(d, c, c.length, h), d;
    }, t.sign.open = function(c, h) {
      if (ot(c, h), h.length !== Ot)
        throw new Error("bad public key size");
      var d = new Uint8Array(c.length), o = Wt(d, c, c.length, h);
      if (o < 0)
        return null;
      for (var y = new Uint8Array(o), u = 0; u < y.length; u++)
        y[u] = d[u];
      return y;
    }, t.sign.detached = function(c, h) {
      for (var d = t.sign(c, h), o = new Uint8Array(lt), y = 0; y < o.length; y++)
        o[y] = d[y];
      return o;
    }, t.sign.detached.verify = function(c, h, d) {
      if (ot(c, h, d), h.length !== lt)
        throw new Error("bad signature size");
      if (d.length !== Ot)
        throw new Error("bad public key size");
      var o = new Uint8Array(lt + c.length), y = new Uint8Array(lt + c.length), u;
      for (u = 0; u < lt; u++)
        o[u] = h[u];
      for (u = 0; u < c.length; u++)
        o[u + lt] = c[u];
      return Wt(y, o, o.length, d) >= 0;
    }, t.sign.keyPair = function() {
      var c = new Uint8Array(Ot), h = new Uint8Array(Mt);
      return jt(c, h), { publicKey: c, secretKey: h };
    }, t.sign.keyPair.fromSecretKey = function(c) {
      if (ot(c), c.length !== Mt)
        throw new Error("bad secret key size");
      for (var h = new Uint8Array(Ot), d = 0; d < h.length; d++)
        h[d] = c[32 + d];
      return { publicKey: h, secretKey: new Uint8Array(c) };
    }, t.sign.keyPair.fromSeed = function(c) {
      if (ot(c), c.length !== ir)
        throw new Error("bad seed size");
      for (var h = new Uint8Array(Ot), d = new Uint8Array(Mt), o = 0; o < 32; o++)
        d[o] = c[o];
      return jt(h, d, !0), { publicKey: h, secretKey: d };
    }, t.sign.publicKeyLength = Ot, t.sign.secretKeyLength = Mt, t.sign.seedLength = ir, t.sign.signatureLength = lt, t.hash = function(c) {
      ot(c);
      var h = new Uint8Array(qt);
      return Ze(h, c, c.length), h;
    }, t.hash.hashLength = qt, t.verify = function(c, h) {
      return ot(c, h), c.length === 0 || h.length === 0 || c.length !== h.length ? !1 : C(c, 0, h, 0, c.length) === 0;
    }, t.setPRNG = function(c) {
      n = c;
    }, function() {
      var c = typeof self < "u" ? self.crypto || self.msCrypto : null;
      if (c && c.getRandomValues) {
        var h = 65536;
        t.setPRNG(function(d, o) {
          var y, u = new Uint8Array(o);
          for (y = 0; y < o; y += h)
            c.getRandomValues(u.subarray(y, y + Math.min(o - y, h)));
          for (y = 0; y < o; y++)
            d[y] = u[y];
          or(u);
        });
      } else
        typeof cu < "u" && (c = lu, c && c.randomBytes && t.setPRNG(function(d, o) {
          var y, u = c.randomBytes(o);
          for (y = 0; y < o; y++)
            d[y] = u[y];
          or(u);
        }));
    }();
  })(e.exports ? e.exports : self.nacl = self.nacl || {});
})(fu);
function du(e) {
  return e > 64 && e < 91 ? e - 65 : e > 96 && e < 123 ? e - 71 : e > 47 && e < 58 ? e + 4 : e === 43 ? 62 : e === 47 ? 63 : 0;
}
function ts(e, t) {
  for (var r = e.replace(/[^A-Za-z0-9+/]/g, ""), n = r.length, i = t ? Math.ceil((n * 3 + 1 >> 2) / t) * t : n * 3 + 1 >> 2, a = new Uint8Array(i), s, l, v = 0, p = 0, g = 0; g < n; g++)
    if (l = g & 3, v |= du(r.charCodeAt(g)) << 6 * (3 - l), l === 3 || n - g === 1) {
      for (s = 0; s < 3 && p < i; s++, p++)
        a[p] = v >>> (16 >>> s & 24) & 255;
      v = 0;
    }
  return a;
}
function En(e) {
  return e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e === 62 ? 43 : e === 63 ? 47 : 65;
}
function rs(e) {
  for (var t = 2, r = "", n = e.length, i = 0, a = 0; a < n; a++)
    t = a % 3, a > 0 && a * 4 / 3 % 76 === 0 && (r += ""), i |= e[a] << (16 >>> t & 24), (t === 2 || e.length - a === 1) && (r += String.fromCodePoint(
      En(i >>> 18 & 63),
      En(i >>> 12 & 63),
      En(i >>> 6 & 63),
      En(i & 63)
    ), i = 0);
  return r.slice(0, r.length - 2 + t) + (t === 2 ? "" : t === 1 ? "=" : "==");
}
function ns(e) {
  let t = e.replace("0x", "").match(/.{1,2}/g).map((r) => parseInt(r, 16));
  if (t === null)
    throw new Error(`Unable to parse HEX: ${e}`);
  return Uint8Array.from(t);
}
function is(e) {
  return e.reduce(
    (t, r) => t + r.toString(16).padStart(2, "0"),
    ""
  );
}
function li(e, t) {
  let r = new Uint8Array(t), n = 0;
  for (; e > 0; )
    r[n] = Number(e % BigInt(256)), e = e / BigInt(256), n += 1;
  return r;
}
var hu = class {
  constructor(e) {
    this.bytePosition = 0, this.dataView = new DataView(e.buffer);
  }
  shift(e) {
    return this.bytePosition += e, this;
  }
  read8() {
    let e = this.dataView.getUint8(this.bytePosition);
    return this.shift(1), e;
  }
  read16() {
    let e = this.dataView.getUint16(this.bytePosition, !0);
    return this.shift(2), e;
  }
  read32() {
    let e = this.dataView.getUint32(this.bytePosition, !0);
    return this.shift(4), e;
  }
  read64() {
    let e = this.read32(), r = this.read32().toString(16) + e.toString(16).padStart(8, "0");
    return BigInt("0x" + r);
  }
  read128() {
    let e = this.read64(), r = this.read64().toString(16) + e.toString(16).padStart(8, "0");
    return BigInt("0x" + r);
  }
  read256() {
    let e = this.read128(), r = this.read128().toString(16) + e.toString(16).padStart(16, "0");
    return BigInt("0x" + r);
  }
  readBytes(e) {
    let t = this.bytePosition + this.dataView.byteOffset, r = new Uint8Array(this.dataView.buffer, t, e);
    return this.shift(e), r;
  }
  readULEB() {
    let e = this.bytePosition + this.dataView.byteOffset, t = new Uint8Array(this.dataView.buffer, e), { value: r, length: n } = vu(t);
    return this.shift(n), r;
  }
  readVec(e) {
    let t = this.readULEB(), r = [];
    for (let n = 0; n < t; n++)
      r.push(e(this, n, t));
    return r;
  }
}, pu = class {
  constructor(e = 1024) {
    this.bytePosition = 0, this.dataView = new DataView(new ArrayBuffer(e));
  }
  shift(e) {
    return this.bytePosition += e, this;
  }
  write8(e) {
    return this.dataView.setUint8(this.bytePosition, Number(e)), this.shift(1);
  }
  write16(e) {
    return this.dataView.setUint16(this.bytePosition, Number(e), !0), this.shift(2);
  }
  write32(e) {
    return this.dataView.setUint32(this.bytePosition, Number(e), !0), this.shift(4);
  }
  write64(e) {
    return li(BigInt(e), 8).forEach((t) => this.write8(t)), this;
  }
  write128(e) {
    return li(BigInt(e), 16).forEach((t) => this.write8(t)), this;
  }
  write256(e) {
    return li(BigInt(e), 32).forEach((t) => this.write8(t)), this;
  }
  writeULEB(e) {
    return yu(e).forEach((t) => this.write8(t)), this;
  }
  writeVec(e, t) {
    return this.writeULEB(e.length), Array.from(e).forEach((r, n) => t(this, r, n, e.length)), this;
  }
  *[Symbol.iterator]() {
    for (let e = 0; e < this.bytePosition; e++)
      yield this.dataView.getUint8(e);
    return this.toBytes();
  }
  toBytes() {
    return new Uint8Array(this.dataView.buffer.slice(0, this.bytePosition));
  }
  toString(e) {
    return as(this.toBytes(), e);
  }
};
function yu(e) {
  let t = [], r = 0;
  if (e === 0)
    return [0];
  for (; e > 0; )
    t[r] = e & 127, (e >>= 7) && (t[r] |= 128), r += 1;
  return t;
}
function vu(e) {
  let t = 0, r = 0, n = 0;
  for (; ; ) {
    let i = e[n];
    if (n += 1, t |= (i & 127) << r, (i & 128) === 0)
      break;
    r += 7;
  }
  return {
    value: t,
    length: n
  };
}
var Mi = class {
  constructor(e) {
    if (this.types = /* @__PURE__ */ new Map(), e instanceof Mi) {
      this.schema = e.schema, this.types = new Map(e.types);
      return;
    }
    if (this.schema = e, this.registerAddressType(
      Mi.ADDRESS,
      e.addressLength,
      e.addressEncoding
    ), this.registerVectorType(e.vectorType), e.types && e.types.structs)
      for (let t of Object.keys(e.types.structs))
        this.registerStructType(t, e.types.structs[t]);
    if (e.types && e.types.enums)
      for (let t of Object.keys(e.types.enums))
        this.registerEnumType(t, e.types.enums[t]);
    e.withPrimitives !== !1 && gu(this);
  }
  ser(e, t, r = 1024) {
    let { typeName: n, typeParams: i } = this.parseTypeName(e);
    return this.getTypeInterface(n).encode(t, r, i);
  }
  de(e, t, r) {
    if (typeof t == "string")
      if (r)
        t = os(t, r);
      else
        throw new Error("To pass a string to `bcs.de`, specify encoding");
    let { typeName: n, typeParams: i } = this.parseTypeName(e);
    return this.getTypeInterface(n).decode(t, i);
  }
  hasType(e) {
    return this.types.has(e);
  }
  registerType(e, t, r, n = () => !0) {
    return this.types.set(e, {
      encode(i, a = 1024, s) {
        return this._encodeRaw(new pu(a), i, s);
      },
      decode(i, a) {
        return this._decodeRaw(new hu(i), a);
      },
      _encodeRaw(i, a, s) {
        if (n(a))
          return t(i, a, s);
        throw new Error(`Validation failed for type ${e}, data: ${a}`);
      },
      _decodeRaw(i, a) {
        return r(i, a);
      }
    }), this;
  }
  registerAddressType(e, t, r = "hex") {
    switch (r) {
      case "base64":
        return this.registerType(
          e,
          (n, i) => ts(i).reduce((a, s) => a.write8(s), n),
          (n) => rs(n.readBytes(t))
        );
      case "hex":
        return this.registerType(
          e,
          (n, i) => ns(i).reduce((a, s) => a.write8(s), n),
          (n) => is(n.readBytes(t))
        );
      default:
        throw new Error("Unsupported encoding! Use either hex or base64");
    }
  }
  registerVectorType(e, t) {
    let { typeName: r, typeParams: n } = this.parseTypeName(e);
    if (n.length > 1)
      throw new Error("Vector can have only one type parameter; got " + e);
    return this.registerType(
      r,
      (i, a, s) => i.writeVec(a, (l, v) => {
        let p = t || s[0];
        if (p) {
          let { typeName: g, typeParams: m } = this.parseTypeName(p);
          return this.getTypeInterface(t || g)._encodeRaw(
            l,
            v,
            m
          );
        } else
          throw new Error(
            `Incorrect number of type parameters passed to vector '${r}'`
          );
      }),
      (i, a) => i.readVec((s) => {
        let l = t || a[0];
        if (l) {
          let { typeName: v, typeParams: p } = this.parseTypeName(l);
          return this.getTypeInterface(t || v)._decodeRaw(
            s,
            p
          );
        } else
          throw new Error(
            `Incorrect number of type parameters passed to vector '${r}'`
          );
      })
    );
  }
  registerStructType(e, t) {
    let r = Object.freeze(t), n = Object.keys(r), { typeName: i, typeParams: a } = this.parseTypeName(e);
    return this.registerType(
      i,
      (s, l, v) => {
        if (!l || l.constructor !== Object)
          throw new Error(`Expected ${e} to be an Object, got: ${l}`);
        for (let p of n)
          if (p in l) {
            let g = a.indexOf(r[p]), m = g === -1 ? r[p] : v[g];
            {
              let { typeName: _, typeParams: M } = this.parseTypeName(m);
              this.getTypeInterface(_)._encodeRaw(
                s,
                l[p],
                M
              );
            }
          } else
            throw new Error(
              `Struct ${e} requires field ${p}:${r[p]}`
            );
        return s;
      },
      (s, l) => {
        let v = {};
        for (let p of n) {
          let g = a.indexOf(r[p]), m = g === -1 ? r[p] : l[g];
          {
            let { typeName: _, typeParams: M } = this.parseTypeName(m);
            v[p] = this.getTypeInterface(_)._decodeRaw(
              s,
              M
            );
          }
        }
        return v;
      }
    );
  }
  registerEnumType(e, t) {
    let r = Object.freeze(t), n = Object.keys(r), { typeName: i, typeParams: a } = this.parseTypeName(e);
    return this.registerType(
      i,
      (s, l, v) => {
        if (l === void 0)
          throw new Error(`Unable to write enum ${e}, missing data`);
        let p = Object.keys(l)[0];
        if (p === void 0)
          throw new Error(`Unknown invariant of the enum ${e}`);
        let g = n.indexOf(p);
        if (g === -1)
          throw new Error(
            `Unknown invariant of the enum ${e}, allowed values: ${n}`
          );
        let m = n[g], _ = r[m];
        if (s.write8(g), _ === null)
          return s;
        let M = a.indexOf(_), S = M === -1 ? _ : v[M];
        {
          let { typeName: C, typeParams: R } = this.parseTypeName(S);
          return this.getTypeInterface(C)._encodeRaw(
            s,
            l[p],
            R
          );
        }
      },
      (s, l) => {
        let v = s.readULEB(), p = n[v], g = r[p];
        if (v === -1)
          throw new Error(
            `Decoding type mismatch, expected enum ${e} invariant index, received ${v}`
          );
        if (g === null)
          return { [p]: !0 };
        let m = a.indexOf(g), _ = m === -1 ? g : l[m];
        {
          let { typeName: M, typeParams: S } = this.parseTypeName(_);
          return {
            [p]: this.getTypeInterface(M)._decodeRaw(
              s,
              S
            )
          };
        }
      }
    );
  }
  getTypeInterface(e) {
    let t = this.types.get(e);
    if (t === void 0)
      throw new Error(`Type ${e} is not registered`);
    return t;
  }
  parseTypeName(e) {
    let [t, r] = this.schema.genericSeparators || ["<", ">"], n = e.indexOf(t), i = Array.from(e).reverse().indexOf(r);
    if (n === -1 && i === -1)
      return { typeName: e, typeParams: [] };
    if (n === -1 || i === -1)
      throw new Error(`Unclosed generic in name '${e}'`);
    let a = e.slice(0, n), s = e.slice(n + 1, e.length - i - 1).split(",").map((l) => l.trim());
    return { typeName: a, typeParams: s };
  }
}, ct = Mi;
ct.U8 = "u8";
ct.U16 = "u16";
ct.U32 = "u32";
ct.U64 = "u64";
ct.U128 = "u128";
ct.U256 = "u256";
ct.BOOL = "bool";
ct.VECTOR = "vector";
ct.ADDRESS = "address";
ct.STRING = "string";
function as(e, t) {
  switch (t) {
    case "base64":
      return rs(e);
    case "hex":
      return is(e);
    default:
      throw new Error(
        "Unsupported encoding, supported values are: base64, hex"
      );
  }
}
function os(e, t) {
  switch (t) {
    case "base64":
      return ts(e);
    case "hex":
      return ns(e);
    default:
      throw new Error(
        "Unsupported encoding, supported values are: base64, hex"
      );
  }
}
function gu(e) {
  e.registerType(
    ct.U8,
    (t, r) => t.write8(r),
    (t) => t.read8(),
    (t) => t < 256
  ), e.registerType(
    ct.U16,
    (t, r) => t.write16(r),
    (t) => t.read16(),
    (t) => t < 65536
  ), e.registerType(
    ct.U32,
    (t, r) => t.write32(r),
    (t) => t.read32(),
    (t) => t <= 4294967296
  ), e.registerType(
    ct.U64,
    (t, r) => t.write64(r),
    (t) => t.read64(),
    (t) => !0
  ), e.registerType(
    ct.U128,
    (t, r) => t.write128(r),
    (t) => t.read128(),
    (t) => !0
  ), e.registerType(
    ct.U256,
    (t, r) => t.write256(r),
    (t) => t.read256(),
    (t) => !0
  ), e.registerType(
    ct.BOOL,
    (t, r) => t.write8(r),
    (t) => t.read8().toString(10) === "1",
    (t) => !0
  ), e.registerType(
    ct.STRING,
    (t, r) => t.writeVec(
      Array.from(r),
      (n, i) => n.write8(i.charCodeAt(0))
    ),
    (t) => t.readVec((r) => r.read8()).map((r) => String.fromCharCode(Number(r))).join(""),
    (t) => !0
  );
}
function xu() {
  return {
    genericSeparators: ["<", ">"],
    vectorType: "vector",
    addressLength: 20,
    addressEncoding: "hex"
  };
}
var wu = { exports: {} };
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */
(function(e) {
  (function() {
    var t = "input is invalid type", r = "finalize already called", n = typeof window == "object", i = n ? window : {};
    i.JS_SHA3_NO_WINDOW && (n = !1);
    var a = !n && typeof self == "object", s = !i.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    s ? i = un : a && (i = self);
    var l = !i.JS_SHA3_NO_COMMON_JS && !0 && e.exports, v = !i.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", p = "0123456789abcdef".split(""), g = [31, 7936, 2031616, 520093696], m = [4, 1024, 262144, 67108864], _ = [1, 256, 65536, 16777216], M = [6, 1536, 393216, 100663296], S = [0, 8, 16, 24], C = [
      1,
      0,
      32898,
      0,
      32906,
      2147483648,
      2147516416,
      2147483648,
      32907,
      0,
      2147483649,
      0,
      2147516545,
      2147483648,
      32777,
      2147483648,
      138,
      0,
      136,
      0,
      2147516425,
      0,
      2147483658,
      0,
      2147516555,
      0,
      139,
      2147483648,
      32905,
      2147483648,
      32771,
      2147483648,
      32770,
      2147483648,
      128,
      2147483648,
      32778,
      0,
      2147483658,
      2147483648,
      2147516545,
      2147483648,
      32896,
      2147483648,
      2147483649,
      0,
      2147516424,
      2147483648
    ], R = [224, 256, 384, 512], P = [128, 256], X = ["hex", "buffer", "arrayBuffer", "array", "digest"], B = {
      128: 168,
      256: 136
    };
    (i.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(f) {
      return Object.prototype.toString.call(f) === "[object Array]";
    }), v && (i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(f) {
      return typeof f == "object" && f.buffer && f.buffer.constructor === ArrayBuffer;
    });
    for (var G = function(f, A, T) {
      return function(D) {
        return new L(f, A, f).update(D)[T]();
      };
    }, q = function(f, A, T) {
      return function(D, W) {
        return new L(f, A, W).update(D)[T]();
      };
    }, Ce = function(f, A, T) {
      return function(D, W, Q, fe) {
        return E["cshake" + f].update(D, W, Q, fe)[T]();
      };
    }, Pe = function(f, A, T) {
      return function(D, W, Q, fe) {
        return E["kmac" + f].update(D, W, Q, fe)[T]();
      };
    }, se = function(f, A, T, D) {
      for (var W = 0; W < X.length; ++W) {
        var Q = X[W];
        f[Q] = A(T, D, Q);
      }
      return f;
    }, me = function(f, A) {
      var T = G(f, A, "hex");
      return T.create = function() {
        return new L(f, A, f);
      }, T.update = function(D) {
        return T.create().update(D);
      }, se(T, G, f, A);
    }, tt = function(f, A) {
      var T = q(f, A, "hex");
      return T.create = function(D) {
        return new L(f, A, D);
      }, T.update = function(D, W) {
        return T.create(W).update(D);
      }, se(T, q, f, A);
    }, Be = function(f, A) {
      var T = B[f], D = Ce(f, A, "hex");
      return D.create = function(W, Q, fe) {
        return !Q && !fe ? E["shake" + f].create(W) : new L(f, A, W).bytepad([Q, fe], T);
      }, D.update = function(W, Q, fe, te) {
        return D.create(Q, fe, te).update(W);
      }, se(D, Ce, f, A);
    }, xe = function(f, A) {
      var T = B[f], D = Pe(f, A, "hex");
      return D.create = function(W, Q, fe) {
        return new ce(f, A, Q).bytepad(["KMAC", fe], T).bytepad([W], T);
      }, D.update = function(W, Q, fe, te) {
        return D.create(W, fe, te).update(Q);
      }, se(D, Pe, f, A);
    }, Ae = [
      { name: "keccak", padding: _, bits: R, createMethod: me },
      { name: "sha3", padding: M, bits: R, createMethod: me },
      { name: "shake", padding: g, bits: P, createMethod: tt },
      { name: "cshake", padding: m, bits: P, createMethod: Be },
      { name: "kmac", padding: m, bits: P, createMethod: xe }
    ], E = {}, k = [], J = 0; J < Ae.length; ++J)
      for (var Ne = Ae[J], Oe = Ne.bits, _e = 0; _e < Oe.length; ++_e) {
        var rt = Ne.name + "_" + Oe[_e];
        if (k.push(rt), E[rt] = Ne.createMethod(Oe[_e], Ne.padding), Ne.name !== "sha3") {
          var nt = Ne.name + Oe[_e];
          k.push(nt), E[nt] = E[rt];
        }
      }
    function L(f, A, T) {
      this.blocks = [], this.s = [], this.padding = A, this.outputBits = T, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (f << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = T >> 5, this.extraBytes = (T & 31) >> 3;
      for (var D = 0; D < 50; ++D)
        this.s[D] = 0;
    }
    L.prototype.update = function(f) {
      if (this.finalized)
        throw new Error(r);
      var A, T = typeof f;
      if (T !== "string") {
        if (T === "object") {
          if (f === null)
            throw new Error(t);
          if (v && f.constructor === ArrayBuffer)
            f = new Uint8Array(f);
          else if (!Array.isArray(f) && (!v || !ArrayBuffer.isView(f)))
            throw new Error(t);
        } else
          throw new Error(t);
        A = !0;
      }
      for (var D = this.blocks, W = this.byteCount, Q = f.length, fe = this.blockCount, te = 0, Te = this.s, ae, Ie; te < Q; ) {
        if (this.reset)
          for (this.reset = !1, D[0] = this.block, ae = 1; ae < fe + 1; ++ae)
            D[ae] = 0;
        if (A)
          for (ae = this.start; te < Q && ae < W; ++te)
            D[ae >> 2] |= f[te] << S[ae++ & 3];
        else
          for (ae = this.start; te < Q && ae < W; ++te)
            Ie = f.charCodeAt(te), Ie < 128 ? D[ae >> 2] |= Ie << S[ae++ & 3] : Ie < 2048 ? (D[ae >> 2] |= (192 | Ie >> 6) << S[ae++ & 3], D[ae >> 2] |= (128 | Ie & 63) << S[ae++ & 3]) : Ie < 55296 || Ie >= 57344 ? (D[ae >> 2] |= (224 | Ie >> 12) << S[ae++ & 3], D[ae >> 2] |= (128 | Ie >> 6 & 63) << S[ae++ & 3], D[ae >> 2] |= (128 | Ie & 63) << S[ae++ & 3]) : (Ie = 65536 + ((Ie & 1023) << 10 | f.charCodeAt(++te) & 1023), D[ae >> 2] |= (240 | Ie >> 18) << S[ae++ & 3], D[ae >> 2] |= (128 | Ie >> 12 & 63) << S[ae++ & 3], D[ae >> 2] |= (128 | Ie >> 6 & 63) << S[ae++ & 3], D[ae >> 2] |= (128 | Ie & 63) << S[ae++ & 3]);
        if (this.lastByteIndex = ae, ae >= W) {
          for (this.start = ae - W, this.block = D[fe], ae = 0; ae < fe; ++ae)
            Te[ae] ^= D[ae];
          ee(Te), this.reset = !0;
        } else
          this.start = ae;
      }
      return this;
    }, L.prototype.encode = function(f, A) {
      var T = f & 255, D = 1, W = [T];
      for (f = f >> 8, T = f & 255; T > 0; )
        W.unshift(T), f = f >> 8, T = f & 255, ++D;
      return A ? W.push(D) : W.unshift(D), this.update(W), W.length;
    }, L.prototype.encodeString = function(f) {
      var A, T = typeof f;
      if (T !== "string") {
        if (T === "object") {
          if (f === null)
            throw new Error(t);
          if (v && f.constructor === ArrayBuffer)
            f = new Uint8Array(f);
          else if (!Array.isArray(f) && (!v || !ArrayBuffer.isView(f)))
            throw new Error(t);
        } else
          throw new Error(t);
        A = !0;
      }
      var D = 0, W = f.length;
      if (A)
        D = W;
      else
        for (var Q = 0; Q < f.length; ++Q) {
          var fe = f.charCodeAt(Q);
          fe < 128 ? D += 1 : fe < 2048 ? D += 2 : fe < 55296 || fe >= 57344 ? D += 3 : (fe = 65536 + ((fe & 1023) << 10 | f.charCodeAt(++Q) & 1023), D += 4);
        }
      return D += this.encode(D * 8), this.update(f), D;
    }, L.prototype.bytepad = function(f, A) {
      for (var T = this.encode(A), D = 0; D < f.length; ++D)
        T += this.encodeString(f[D]);
      var W = A - T % A, Q = [];
      return Q.length = W, this.update(Q), this;
    }, L.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var f = this.blocks, A = this.lastByteIndex, T = this.blockCount, D = this.s;
        if (f[A >> 2] |= this.padding[A & 3], this.lastByteIndex === this.byteCount)
          for (f[0] = f[T], A = 1; A < T + 1; ++A)
            f[A] = 0;
        for (f[T - 1] |= 2147483648, A = 0; A < T; ++A)
          D[A] ^= f[A];
        ee(D);
      }
    }, L.prototype.toString = L.prototype.hex = function() {
      this.finalize();
      for (var f = this.blockCount, A = this.s, T = this.outputBlocks, D = this.extraBytes, W = 0, Q = 0, fe = "", te; Q < T; ) {
        for (W = 0; W < f && Q < T; ++W, ++Q)
          te = A[W], fe += p[te >> 4 & 15] + p[te & 15] + p[te >> 12 & 15] + p[te >> 8 & 15] + p[te >> 20 & 15] + p[te >> 16 & 15] + p[te >> 28 & 15] + p[te >> 24 & 15];
        Q % f === 0 && (ee(A), W = 0);
      }
      return D && (te = A[W], fe += p[te >> 4 & 15] + p[te & 15], D > 1 && (fe += p[te >> 12 & 15] + p[te >> 8 & 15]), D > 2 && (fe += p[te >> 20 & 15] + p[te >> 16 & 15])), fe;
    }, L.prototype.arrayBuffer = function() {
      this.finalize();
      var f = this.blockCount, A = this.s, T = this.outputBlocks, D = this.extraBytes, W = 0, Q = 0, fe = this.outputBits >> 3, te;
      D ? te = new ArrayBuffer(T + 1 << 2) : te = new ArrayBuffer(fe);
      for (var Te = new Uint32Array(te); Q < T; ) {
        for (W = 0; W < f && Q < T; ++W, ++Q)
          Te[Q] = A[W];
        Q % f === 0 && ee(A);
      }
      return D && (Te[W] = A[W], te = te.slice(0, fe)), te;
    }, L.prototype.buffer = L.prototype.arrayBuffer, L.prototype.digest = L.prototype.array = function() {
      this.finalize();
      for (var f = this.blockCount, A = this.s, T = this.outputBlocks, D = this.extraBytes, W = 0, Q = 0, fe = [], te, Te; Q < T; ) {
        for (W = 0; W < f && Q < T; ++W, ++Q)
          te = Q << 2, Te = A[W], fe[te] = Te & 255, fe[te + 1] = Te >> 8 & 255, fe[te + 2] = Te >> 16 & 255, fe[te + 3] = Te >> 24 & 255;
        Q % f === 0 && ee(A);
      }
      return D && (te = Q << 2, Te = A[W], fe[te] = Te & 255, D > 1 && (fe[te + 1] = Te >> 8 & 255), D > 2 && (fe[te + 2] = Te >> 16 & 255)), fe;
    };
    function ce(f, A, T) {
      L.call(this, f, A, T);
    }
    ce.prototype = new L(), ce.prototype.finalize = function() {
      return this.encode(this.outputBits, !0), L.prototype.finalize.call(this);
    };
    var ee = function(f) {
      var A, T, D, W, Q, fe, te, Te, ae, Ie, Ye, ut, ht, Ze, bt, Et, _t, Jt, Ht, jt, kt, It, Qt, er, hr, Wt, tr, Gt, Ft, Dt, zt, Yt, $t, Ct, Zt, Nt, rr, nr, lt, Ot, Mt, ir, qt, ar, yr, ot, or, c, h, d, o, y, u, x, b, I, j, V, re, $, le, ne, de;
      for (D = 0; D < 48; D += 2)
        W = f[0] ^ f[10] ^ f[20] ^ f[30] ^ f[40], Q = f[1] ^ f[11] ^ f[21] ^ f[31] ^ f[41], fe = f[2] ^ f[12] ^ f[22] ^ f[32] ^ f[42], te = f[3] ^ f[13] ^ f[23] ^ f[33] ^ f[43], Te = f[4] ^ f[14] ^ f[24] ^ f[34] ^ f[44], ae = f[5] ^ f[15] ^ f[25] ^ f[35] ^ f[45], Ie = f[6] ^ f[16] ^ f[26] ^ f[36] ^ f[46], Ye = f[7] ^ f[17] ^ f[27] ^ f[37] ^ f[47], ut = f[8] ^ f[18] ^ f[28] ^ f[38] ^ f[48], ht = f[9] ^ f[19] ^ f[29] ^ f[39] ^ f[49], A = ut ^ (fe << 1 | te >>> 31), T = ht ^ (te << 1 | fe >>> 31), f[0] ^= A, f[1] ^= T, f[10] ^= A, f[11] ^= T, f[20] ^= A, f[21] ^= T, f[30] ^= A, f[31] ^= T, f[40] ^= A, f[41] ^= T, A = W ^ (Te << 1 | ae >>> 31), T = Q ^ (ae << 1 | Te >>> 31), f[2] ^= A, f[3] ^= T, f[12] ^= A, f[13] ^= T, f[22] ^= A, f[23] ^= T, f[32] ^= A, f[33] ^= T, f[42] ^= A, f[43] ^= T, A = fe ^ (Ie << 1 | Ye >>> 31), T = te ^ (Ye << 1 | Ie >>> 31), f[4] ^= A, f[5] ^= T, f[14] ^= A, f[15] ^= T, f[24] ^= A, f[25] ^= T, f[34] ^= A, f[35] ^= T, f[44] ^= A, f[45] ^= T, A = Te ^ (ut << 1 | ht >>> 31), T = ae ^ (ht << 1 | ut >>> 31), f[6] ^= A, f[7] ^= T, f[16] ^= A, f[17] ^= T, f[26] ^= A, f[27] ^= T, f[36] ^= A, f[37] ^= T, f[46] ^= A, f[47] ^= T, A = Ie ^ (W << 1 | Q >>> 31), T = Ye ^ (Q << 1 | W >>> 31), f[8] ^= A, f[9] ^= T, f[18] ^= A, f[19] ^= T, f[28] ^= A, f[29] ^= T, f[38] ^= A, f[39] ^= T, f[48] ^= A, f[49] ^= T, Ze = f[0], bt = f[1], ot = f[11] << 4 | f[10] >>> 28, or = f[10] << 4 | f[11] >>> 28, Gt = f[20] << 3 | f[21] >>> 29, Ft = f[21] << 3 | f[20] >>> 29, $ = f[31] << 9 | f[30] >>> 23, le = f[30] << 9 | f[31] >>> 23, ir = f[40] << 18 | f[41] >>> 14, qt = f[41] << 18 | f[40] >>> 14, Ct = f[2] << 1 | f[3] >>> 31, Zt = f[3] << 1 | f[2] >>> 31, Et = f[13] << 12 | f[12] >>> 20, _t = f[12] << 12 | f[13] >>> 20, c = f[22] << 10 | f[23] >>> 22, h = f[23] << 10 | f[22] >>> 22, Dt = f[33] << 13 | f[32] >>> 19, zt = f[32] << 13 | f[33] >>> 19, ne = f[42] << 2 | f[43] >>> 30, de = f[43] << 2 | f[42] >>> 30, x = f[5] << 30 | f[4] >>> 2, b = f[4] << 30 | f[5] >>> 2, Nt = f[14] << 6 | f[15] >>> 26, rr = f[15] << 6 | f[14] >>> 26, Jt = f[25] << 11 | f[24] >>> 21, Ht = f[24] << 11 | f[25] >>> 21, d = f[34] << 15 | f[35] >>> 17, o = f[35] << 15 | f[34] >>> 17, Yt = f[45] << 29 | f[44] >>> 3, $t = f[44] << 29 | f[45] >>> 3, er = f[6] << 28 | f[7] >>> 4, hr = f[7] << 28 | f[6] >>> 4, I = f[17] << 23 | f[16] >>> 9, j = f[16] << 23 | f[17] >>> 9, nr = f[26] << 25 | f[27] >>> 7, lt = f[27] << 25 | f[26] >>> 7, jt = f[36] << 21 | f[37] >>> 11, kt = f[37] << 21 | f[36] >>> 11, y = f[47] << 24 | f[46] >>> 8, u = f[46] << 24 | f[47] >>> 8, ar = f[8] << 27 | f[9] >>> 5, yr = f[9] << 27 | f[8] >>> 5, Wt = f[18] << 20 | f[19] >>> 12, tr = f[19] << 20 | f[18] >>> 12, V = f[29] << 7 | f[28] >>> 25, re = f[28] << 7 | f[29] >>> 25, Ot = f[38] << 8 | f[39] >>> 24, Mt = f[39] << 8 | f[38] >>> 24, It = f[48] << 14 | f[49] >>> 18, Qt = f[49] << 14 | f[48] >>> 18, f[0] = Ze ^ ~Et & Jt, f[1] = bt ^ ~_t & Ht, f[10] = er ^ ~Wt & Gt, f[11] = hr ^ ~tr & Ft, f[20] = Ct ^ ~Nt & nr, f[21] = Zt ^ ~rr & lt, f[30] = ar ^ ~ot & c, f[31] = yr ^ ~or & h, f[40] = x ^ ~I & V, f[41] = b ^ ~j & re, f[2] = Et ^ ~Jt & jt, f[3] = _t ^ ~Ht & kt, f[12] = Wt ^ ~Gt & Dt, f[13] = tr ^ ~Ft & zt, f[22] = Nt ^ ~nr & Ot, f[23] = rr ^ ~lt & Mt, f[32] = ot ^ ~c & d, f[33] = or ^ ~h & o, f[42] = I ^ ~V & $, f[43] = j ^ ~re & le, f[4] = Jt ^ ~jt & It, f[5] = Ht ^ ~kt & Qt, f[14] = Gt ^ ~Dt & Yt, f[15] = Ft ^ ~zt & $t, f[24] = nr ^ ~Ot & ir, f[25] = lt ^ ~Mt & qt, f[34] = c ^ ~d & y, f[35] = h ^ ~o & u, f[44] = V ^ ~$ & ne, f[45] = re ^ ~le & de, f[6] = jt ^ ~It & Ze, f[7] = kt ^ ~Qt & bt, f[16] = Dt ^ ~Yt & er, f[17] = zt ^ ~$t & hr, f[26] = Ot ^ ~ir & Ct, f[27] = Mt ^ ~qt & Zt, f[36] = d ^ ~y & ar, f[37] = o ^ ~u & yr, f[46] = $ ^ ~ne & x, f[47] = le ^ ~de & b, f[8] = It ^ ~Ze & Et, f[9] = Qt ^ ~bt & _t, f[18] = Yt ^ ~er & Wt, f[19] = $t ^ ~hr & tr, f[28] = ir ^ ~Ct & Nt, f[29] = qt ^ ~Zt & rr, f[38] = y ^ ~ar & ot, f[39] = u ^ ~yr & or, f[48] = ne ^ ~x & I, f[49] = de ^ ~b & j, f[0] ^= C[D], f[1] ^= C[D + 1];
    };
    if (l)
      e.exports = E;
    else
      for (J = 0; J < k.length; ++J)
        i[k[J]] = E[k[J]];
  })();
})(wu);
function Na(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`positive integer expected, not ${e}`);
}
function mu(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function Ki(e, ...t) {
  if (!mu(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}
function bu(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Na(e.outputLen), Na(e.blockLen);
}
function kn(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Eu(e, t) {
  Ki(e);
  const r = t.outputLen;
  if (e.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const di = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength), sr = (e, t) => e << 32 - t | e >>> t;
new Uint8Array(new Uint32Array([287454020]).buffer)[0];
function _u(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function Xi(e) {
  return typeof e == "string" && (e = _u(e)), Ki(e), e;
}
class ss {
  clone() {
    return this._cloneInto();
  }
}
function Su(e) {
  const t = (n) => e().update(Xi(n)).digest(), r = e();
  return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t;
}
class cs extends ss {
  constructor(t, r) {
    super(), this.finished = !1, this.destroyed = !1, bu(t);
    const n = Xi(r);
    if (this.iHash = t.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const i = this.blockLen, a = new Uint8Array(i);
    a.set(n.length > i ? t.create().update(n).digest() : n);
    for (let s = 0; s < a.length; s++)
      a[s] ^= 54;
    this.iHash.update(a), this.oHash = t.create();
    for (let s = 0; s < a.length; s++)
      a[s] ^= 106;
    this.oHash.update(a), a.fill(0);
  }
  update(t) {
    return kn(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    kn(this), Ki(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: r, iHash: n, finished: i, destroyed: a, blockLen: s, outputLen: l } = this;
    return t = t, t.finished = i, t.destroyed = a, t.blockLen = s, t.outputLen = l, t.oHash = r._cloneInto(t.oHash), t.iHash = n._cloneInto(t.iHash), t;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const fs = (e, t, r) => new cs(e, t).update(r).digest();
fs.create = (e, t) => new cs(e, t);
function Au(e, t, r, n) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, r, n);
  const i = BigInt(32), a = BigInt(4294967295), s = Number(r >> i & a), l = Number(r & a), v = n ? 4 : 0, p = n ? 0 : 4;
  e.setUint32(t + v, s, n), e.setUint32(t + p, l, n);
}
const Tu = (e, t, r) => e & t ^ ~e & r, Iu = (e, t, r) => e & t ^ e & r ^ t & r;
class Cu extends ss {
  constructor(t, r, n, i) {
    super(), this.blockLen = t, this.outputLen = r, this.padOffset = n, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = di(this.buffer);
  }
  update(t) {
    kn(this);
    const { view: r, buffer: n, blockLen: i } = this;
    t = Xi(t);
    const a = t.length;
    for (let s = 0; s < a; ) {
      const l = Math.min(i - this.pos, a - s);
      if (l === i) {
        const v = di(t);
        for (; i <= a - s; s += i)
          this.process(v, s);
        continue;
      }
      n.set(t.subarray(s, s + l), this.pos), this.pos += l, s += l, this.pos === i && (this.process(r, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    kn(this), Eu(t, this), this.finished = !0;
    const { buffer: r, view: n, blockLen: i, isLE: a } = this;
    let { pos: s } = this;
    r[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > i - s && (this.process(n, 0), s = 0);
    for (let m = s; m < i; m++)
      r[m] = 0;
    Au(n, i - 8, BigInt(this.length * 8), a), this.process(n, 0);
    const l = di(t), v = this.outputLen;
    if (v % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const p = v / 4, g = this.get();
    if (p > g.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let m = 0; m < p; m++)
      l.setUint32(4 * m, g[m], a);
  }
  digest() {
    const { buffer: t, outputLen: r } = this;
    this.digestInto(t);
    const n = t.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: r, buffer: n, length: i, finished: a, destroyed: s, pos: l } = this;
    return t.length = i, t.pos = l, t.finished = a, t.destroyed = s, i % r && t.buffer.set(n), t;
  }
}
const Nu = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), gr = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), xr = /* @__PURE__ */ new Uint32Array(64);
class Ou extends Cu {
  constructor() {
    super(64, 32, 8, !1), this.A = gr[0] | 0, this.B = gr[1] | 0, this.C = gr[2] | 0, this.D = gr[3] | 0, this.E = gr[4] | 0, this.F = gr[5] | 0, this.G = gr[6] | 0, this.H = gr[7] | 0;
  }
  get() {
    const { A: t, B: r, C: n, D: i, E: a, F: s, G: l, H: v } = this;
    return [t, r, n, i, a, s, l, v];
  }
  set(t, r, n, i, a, s, l, v) {
    this.A = t | 0, this.B = r | 0, this.C = n | 0, this.D = i | 0, this.E = a | 0, this.F = s | 0, this.G = l | 0, this.H = v | 0;
  }
  process(t, r) {
    for (let m = 0; m < 16; m++, r += 4)
      xr[m] = t.getUint32(r, !1);
    for (let m = 16; m < 64; m++) {
      const _ = xr[m - 15], M = xr[m - 2], S = sr(_, 7) ^ sr(_, 18) ^ _ >>> 3, C = sr(M, 17) ^ sr(M, 19) ^ M >>> 10;
      xr[m] = C + xr[m - 7] + S + xr[m - 16] | 0;
    }
    let { A: n, B: i, C: a, D: s, E: l, F: v, G: p, H: g } = this;
    for (let m = 0; m < 64; m++) {
      const _ = sr(l, 6) ^ sr(l, 11) ^ sr(l, 25), M = g + _ + Tu(l, v, p) + Nu[m] + xr[m] | 0, C = (sr(n, 2) ^ sr(n, 13) ^ sr(n, 22)) + Iu(n, i, a) | 0;
      g = p, p = v, v = l, l = s + M | 0, s = a, a = i, i = n, n = M + C | 0;
    }
    n = n + this.A | 0, i = i + this.B | 0, a = a + this.C | 0, s = s + this.D | 0, l = l + this.E | 0, v = v + this.F | 0, p = p + this.G | 0, g = g + this.H | 0, this.set(n, i, a, s, l, v, p, g);
  }
  roundClean() {
    xr.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Mu = /* @__PURE__ */ Su(() => new Ou());
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const He = BigInt(0), Ke = BigInt(1), br = BigInt(2), fn = BigInt(3), Oa = BigInt(8), ft = Object.freeze({
  a: He,
  b: BigInt(7),
  P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
  n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
  h: Ke,
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
}), Ma = (e, t) => (e + t / br) / t, _n = {
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
  splitScalar(e) {
    const { n: t } = ft, r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -Ke * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), a = r, s = BigInt("0x100000000000000000000000000000000"), l = Ma(a * e, t), v = Ma(-n * e, t);
    let p = ye(e - l * r - v * i, t), g = ye(-l * n - v * a, t);
    const m = p > s, _ = g > s;
    if (m && (p = t - p), _ && (g = t - g), p > s || g > s)
      throw new Error("splitScalarEndo: Endomorphism failed, k=" + e);
    return { k1neg: m, k1: p, k2neg: _, k2: g };
  }
}, Hr = 32, hn = 32, Ra = Hr + 1, Da = 2 * Hr + 1;
function Pa(e) {
  const { a: t, b: r } = ft, n = ye(e * e), i = ye(n * e);
  return ye(i + t * e + r);
}
const Sn = ft.a === He;
class Ru extends Error {
  constructor(t) {
    super(t);
  }
}
function La(e) {
  if (!(e instanceof Ve))
    throw new TypeError("JacobianPoint expected");
}
class Ve {
  constructor(t, r, n) {
    this.x = t, this.y = r, this.z = n;
  }
  static fromAffine(t) {
    if (!(t instanceof at))
      throw new TypeError("JacobianPoint#fromAffine: expected Point");
    return t.equals(at.ZERO) ? Ve.ZERO : new Ve(t.x, t.y, Ke);
  }
  static toAffineBatch(t) {
    const r = Uu(t.map((n) => n.z));
    return t.map((n, i) => n.toAffine(r[i]));
  }
  static normalizeZ(t) {
    return Ve.toAffineBatch(t).map(Ve.fromAffine);
  }
  equals(t) {
    La(t);
    const { x: r, y: n, z: i } = this, { x: a, y: s, z: l } = t, v = ye(i * i), p = ye(l * l), g = ye(r * p), m = ye(a * v), _ = ye(ye(n * l) * p), M = ye(ye(s * i) * v);
    return g === m && _ === M;
  }
  negate() {
    return new Ve(this.x, ye(-this.y), this.z);
  }
  double() {
    const { x: t, y: r, z: n } = this, i = ye(t * t), a = ye(r * r), s = ye(a * a), l = t + a, v = ye(br * (ye(l * l) - i - s)), p = ye(fn * i), g = ye(p * p), m = ye(g - br * v), _ = ye(p * (v - m) - Oa * s), M = ye(br * r * n);
    return new Ve(m, _, M);
  }
  add(t) {
    La(t);
    const { x: r, y: n, z: i } = this, { x: a, y: s, z: l } = t;
    if (a === He || s === He)
      return this;
    if (r === He || n === He)
      return t;
    const v = ye(i * i), p = ye(l * l), g = ye(r * p), m = ye(a * v), _ = ye(ye(n * l) * p), M = ye(ye(s * i) * v), S = ye(m - g), C = ye(M - _);
    if (S === He)
      return C === He ? this.double() : Ve.ZERO;
    const R = ye(S * S), P = ye(S * R), X = ye(g * R), B = ye(C * C - P - br * X), G = ye(C * (X - B) - _ * P), q = ye(i * l * S);
    return new Ve(B, G, q);
  }
  subtract(t) {
    return this.add(t.negate());
  }
  multiplyUnsafe(t) {
    const r = Ve.ZERO;
    if (typeof t == "bigint" && t === He)
      return r;
    let n = Wa(t);
    if (n === Ke)
      return this;
    if (!Sn) {
      let m = r, _ = this;
      for (; n > He; )
        n & Ke && (m = m.add(_)), _ = _.double(), n >>= Ke;
      return m;
    }
    let { k1neg: i, k1: a, k2neg: s, k2: l } = _n.splitScalar(n), v = r, p = r, g = this;
    for (; a > He || l > He; )
      a & Ke && (v = v.add(g)), l & Ke && (p = p.add(g)), g = g.double(), a >>= Ke, l >>= Ke;
    return i && (v = v.negate()), s && (p = p.negate()), p = new Ve(ye(p.x * _n.beta), p.y, p.z), v.add(p);
  }
  precomputeWindow(t) {
    const r = Sn ? 128 / t + 1 : 256 / t + 1, n = [];
    let i = this, a = i;
    for (let s = 0; s < r; s++) {
      a = i, n.push(a);
      for (let l = 1; l < 2 ** (t - 1); l++)
        a = a.add(i), n.push(a);
      i = a.double();
    }
    return n;
  }
  wNAF(t, r) {
    !r && this.equals(Ve.BASE) && (r = at.BASE);
    const n = r && r._WINDOW_SIZE || 1;
    if (256 % n)
      throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
    let i = r && Ri.get(r);
    i || (i = this.precomputeWindow(n), r && n !== 1 && (i = Ve.normalizeZ(i), Ri.set(r, i)));
    let a = Ve.ZERO, s = Ve.BASE;
    const l = 1 + (Sn ? 128 / n : 256 / n), v = 2 ** (n - 1), p = BigInt(2 ** n - 1), g = 2 ** n, m = BigInt(n);
    for (let _ = 0; _ < l; _++) {
      const M = _ * v;
      let S = Number(t & p);
      t >>= m, S > v && (S -= g, t += Ke);
      const C = M, R = M + Math.abs(S) - 1, P = _ % 2 !== 0, X = S < 0;
      S === 0 ? s = s.add(An(P, i[C])) : a = a.add(An(X, i[R]));
    }
    return { p: a, f: s };
  }
  multiply(t, r) {
    let n = Wa(t), i, a;
    if (Sn) {
      const { k1neg: s, k1: l, k2neg: v, k2: p } = _n.splitScalar(n);
      let { p: g, f: m } = this.wNAF(l, r), { p: _, f: M } = this.wNAF(p, r);
      g = An(s, g), _ = An(v, _), _ = new Ve(ye(_.x * _n.beta), _.y, _.z), i = g.add(_), a = m.add(M);
    } else {
      const { p: s, f: l } = this.wNAF(n, r);
      i = s, a = l;
    }
    return Ve.normalizeZ([i, a])[0];
  }
  toAffine(t) {
    const { x: r, y: n, z: i } = this, a = this.equals(Ve.ZERO);
    t == null && (t = a ? Oa : Zn(i));
    const s = t, l = ye(s * s), v = ye(l * s), p = ye(r * l), g = ye(n * v), m = ye(i * s);
    if (a)
      return at.ZERO;
    if (m !== Ke)
      throw new Error("invZ was invalid");
    return new at(p, g);
  }
}
Ve.BASE = new Ve(ft.Gx, ft.Gy, Ke);
Ve.ZERO = new Ve(He, Ke, He);
function An(e, t) {
  const r = t.negate();
  return e ? r : t;
}
const Ri = /* @__PURE__ */ new WeakMap();
class at {
  constructor(t, r) {
    this.x = t, this.y = r;
  }
  _setWindowSize(t) {
    this._WINDOW_SIZE = t, Ri.delete(this);
  }
  hasEvenY() {
    return this.y % br === He;
  }
  static fromCompressedHex(t) {
    const r = t.length === 32, n = Rr(r ? t : t.subarray(1));
    if (!pi(n))
      throw new Error("Point is not on curve");
    const i = Pa(n);
    let a = Bu(i);
    const s = (a & Ke) === Ke;
    r ? s && (a = ye(-a)) : (t[0] & 1) === 1 !== s && (a = ye(-a));
    const l = new at(n, a);
    return l.assertValidity(), l;
  }
  static fromUncompressedHex(t) {
    const r = Rr(t.subarray(1, Hr + 1)), n = Rr(t.subarray(Hr + 1, Hr * 2 + 1)), i = new at(r, n);
    return i.assertValidity(), i;
  }
  static fromHex(t) {
    const r = Di(t), n = r.length, i = r[0];
    if (n === Hr)
      return this.fromCompressedHex(r);
    if (n === Ra && (i === 2 || i === 3))
      return this.fromCompressedHex(r);
    if (n === Da && i === 4)
      return this.fromUncompressedHex(r);
    throw new Error(`Point.fromHex: received invalid point. Expected 32-${Ra} compressed bytes or ${Da} uncompressed bytes, not ${n}`);
  }
  static fromPrivateKey(t) {
    return at.BASE.multiply(Pi(t));
  }
  static fromSignature(t, r, n) {
    const { r: i, s: a } = Fu(r);
    if (![0, 1, 2, 3].includes(n))
      throw new Error("Cannot recover: invalid recovery bit");
    const s = Wu(Di(t)), { n: l } = ft, v = n === 2 || n === 3 ? i + l : i, p = Zn(v, l), g = ye(-s * p, l), m = ye(a * p, l), _ = n & 1 ? "03" : "02", M = at.fromHex(_ + Zr(v)), S = at.BASE.multiplyAndAddUnsafe(M, g, m);
    if (!S)
      throw new Error("Cannot recover signature: point at infinify");
    return S.assertValidity(), S;
  }
  toRawBytes(t = !1) {
    return Mr(this.toHex(t));
  }
  toHex(t = !1) {
    const r = Zr(this.x);
    return t ? `${this.hasEvenY() ? "02" : "03"}${r}` : `04${r}${Zr(this.y)}`;
  }
  toHexX() {
    return this.toHex(!0).slice(2);
  }
  toRawX() {
    return this.toRawBytes(!0).slice(1);
  }
  assertValidity() {
    const t = "Point is not on elliptic curve", { x: r, y: n } = this;
    if (!pi(r) || !pi(n))
      throw new Error(t);
    const i = ye(n * n), a = Pa(r);
    if (ye(i - a) !== He)
      throw new Error(t);
  }
  equals(t) {
    return this.x === t.x && this.y === t.y;
  }
  negate() {
    return new at(this.x, ye(-this.y));
  }
  double() {
    return Ve.fromAffine(this).double().toAffine();
  }
  add(t) {
    return Ve.fromAffine(this).add(Ve.fromAffine(t)).toAffine();
  }
  subtract(t) {
    return this.add(t.negate());
  }
  multiply(t) {
    return Ve.fromAffine(this).multiply(t, this).toAffine();
  }
  multiplyAndAddUnsafe(t, r, n) {
    const i = Ve.fromAffine(this), a = r === He || r === Ke || this !== at.BASE ? i.multiplyUnsafe(r) : i.multiply(r), s = Ve.fromAffine(t).multiplyUnsafe(n), l = a.add(s);
    return l.equals(Ve.ZERO) ? void 0 : l.toAffine();
  }
}
at.BASE = new at(ft.Gx, ft.Gy);
at.ZERO = new at(He, He);
function Ba(e) {
  return Number.parseInt(e[0], 16) >= 8 ? "00" + e : e;
}
function Ua(e) {
  if (e.length < 2 || e[0] !== 2)
    throw new Error(`Invalid signature integer tag: ${Kr(e)}`);
  const t = e[1], r = e.subarray(2, t + 2);
  if (!t || r.length !== t)
    throw new Error("Invalid signature integer: wrong length");
  if (r[0] === 0 && r[1] <= 127)
    throw new Error("Invalid signature integer: trailing length");
  return { data: Rr(r), left: e.subarray(t + 2) };
}
function Du(e) {
  if (e.length < 2 || e[0] != 48)
    throw new Error(`Invalid signature tag: ${Kr(e)}`);
  if (e[1] !== e.length - 2)
    throw new Error("Invalid signature: incorrect length");
  const { data: t, left: r } = Ua(e.subarray(2)), { data: n, left: i } = Ua(r);
  if (i.length)
    throw new Error(`Invalid signature: left bytes after parsing: ${Kr(i)}`);
  return { r: t, s: n };
}
class Or {
  constructor(t, r) {
    this.r = t, this.s = r, this.assertValidity();
  }
  static fromCompact(t) {
    const r = t instanceof Uint8Array, n = "Signature.fromCompact";
    if (typeof t != "string" && !r)
      throw new TypeError(`${n}: Expected string or Uint8Array`);
    const i = r ? Kr(t) : t;
    if (i.length !== 128)
      throw new Error(`${n}: Expected 64-byte hex`);
    return new Or(Wn(i.slice(0, 64)), Wn(i.slice(64, 128)));
  }
  static fromDER(t) {
    const r = t instanceof Uint8Array;
    if (typeof t != "string" && !r)
      throw new TypeError("Signature.fromDER: Expected string or Uint8Array");
    const { r: n, s: i } = Du(r ? t : Mr(t));
    return new Or(n, i);
  }
  static fromHex(t) {
    return this.fromDER(t);
  }
  assertValidity() {
    const { r: t, s: r } = this;
    if (!Fn(t))
      throw new Error("Invalid Signature: r must be 0 < r < n");
    if (!Fn(r))
      throw new Error("Invalid Signature: s must be 0 < s < n");
  }
  hasHighS() {
    const t = ft.n >> Ke;
    return this.s > t;
  }
  normalizeS() {
    return this.hasHighS() ? new Or(this.r, ye(-this.s, ft.n)) : this;
  }
  toDERRawBytes() {
    return Mr(this.toDERHex());
  }
  toDERHex() {
    const t = Ba(an(this.s)), r = Ba(an(this.r)), n = t.length / 2, i = r.length / 2, a = an(n), s = an(i);
    return `30${an(i + n + 4)}02${s}${r}02${a}${t}`;
  }
  toRawBytes() {
    return this.toDERRawBytes();
  }
  toHex() {
    return this.toDERHex();
  }
  toCompactRawBytes() {
    return Mr(this.toCompactHex());
  }
  toCompactHex() {
    return Zr(this.r) + Zr(this.s);
  }
}
function nn(...e) {
  if (!e.every((n) => n instanceof Uint8Array))
    throw new Error("Uint8Array list expected");
  if (e.length === 1)
    return e[0];
  const t = e.reduce((n, i) => n + i.length, 0), r = new Uint8Array(t);
  for (let n = 0, i = 0; n < e.length; n++) {
    const a = e[n];
    r.set(a, i), i += a.length;
  }
  return r;
}
const Pu = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function Kr(e) {
  if (!(e instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += Pu[e[r]];
  return t;
}
const Lu = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
function Zr(e) {
  if (typeof e != "bigint")
    throw new Error("Expected bigint");
  if (!(He <= e && e < Lu))
    throw new Error("Expected number 0 <= n < 2^256");
  return e.toString(16).padStart(64, "0");
}
function ka(e) {
  const t = Mr(Zr(e));
  if (t.length !== 32)
    throw new Error("Error: expected 32 bytes");
  return t;
}
function an(e) {
  const t = e.toString(16);
  return t.length & 1 ? `0${t}` : t;
}
function Wn(e) {
  if (typeof e != "string")
    throw new TypeError("hexToNumber: expected string, got " + typeof e);
  return BigInt(`0x${e}`);
}
function Mr(e) {
  if (typeof e != "string")
    throw new TypeError("hexToBytes: expected string, got " + typeof e);
  if (e.length % 2)
    throw new Error("hexToBytes: received invalid unpadded hex" + e.length);
  const t = new Uint8Array(e.length / 2);
  for (let r = 0; r < t.length; r++) {
    const n = r * 2, i = e.slice(n, n + 2), a = Number.parseInt(i, 16);
    if (Number.isNaN(a) || a < 0)
      throw new Error("Invalid byte sequence");
    t[r] = a;
  }
  return t;
}
function Rr(e) {
  return Wn(Kr(e));
}
function Di(e) {
  return e instanceof Uint8Array ? Uint8Array.from(e) : Mr(e);
}
function Wa(e) {
  if (typeof e == "number" && Number.isSafeInteger(e) && e > 0)
    return BigInt(e);
  if (typeof e == "bigint" && Fn(e))
    return e;
  throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n");
}
function ye(e, t = ft.P) {
  const r = e % t;
  return r >= He ? r : t + r;
}
function Vt(e, t) {
  const { P: r } = ft;
  let n = e;
  for (; t-- > He; )
    n *= n, n %= r;
  return n;
}
function Bu(e) {
  const { P: t } = ft, r = BigInt(6), n = BigInt(11), i = BigInt(22), a = BigInt(23), s = BigInt(44), l = BigInt(88), v = e * e * e % t, p = v * v * e % t, g = Vt(p, fn) * p % t, m = Vt(g, fn) * p % t, _ = Vt(m, br) * v % t, M = Vt(_, n) * _ % t, S = Vt(M, i) * M % t, C = Vt(S, s) * S % t, R = Vt(C, l) * C % t, P = Vt(R, s) * S % t, X = Vt(P, fn) * p % t, B = Vt(X, a) * M % t, G = Vt(B, r) * v % t, q = Vt(G, br);
  if (q * q % t !== e)
    throw new Error("Cannot find square root");
  return q;
}
function Zn(e, t = ft.P) {
  if (e === He || t <= He)
    throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);
  let r = ye(e, t), n = t, i = He, a = Ke;
  for (; r !== He; ) {
    const l = n / r, v = n % r, p = i - a * l;
    n = r, r = v, i = a, a = p;
  }
  if (n !== Ke)
    throw new Error("invert: does not exist");
  return ye(i, t);
}
function Uu(e, t = ft.P) {
  const r = new Array(e.length), n = e.reduce((a, s, l) => s === He ? a : (r[l] = a, ye(a * s, t)), Ke), i = Zn(n, t);
  return e.reduceRight((a, s, l) => s === He ? a : (r[l] = ye(a * r[l], t), ye(a * s, t)), i), r;
}
function ku(e) {
  const t = e.length * 8 - hn * 8, r = Rr(e);
  return t > 0 ? r >> BigInt(t) : r;
}
function Wu(e, t = !1) {
  const r = ku(e);
  if (t)
    return r;
  const { n } = ft;
  return r >= n ? r - n : r;
}
let qr, hi;
function Fn(e) {
  return He < e && e < ft.n;
}
function pi(e) {
  return He < e && e < ft.P;
}
function Pi(e) {
  let t;
  if (typeof e == "bigint")
    t = e;
  else if (typeof e == "number" && Number.isSafeInteger(e) && e > 0)
    t = BigInt(e);
  else if (typeof e == "string") {
    if (e.length !== 2 * hn)
      throw new Error("Expected 32 bytes of private key");
    t = Wn(e);
  } else if (e instanceof Uint8Array) {
    if (e.length !== hn)
      throw new Error("Expected 32 bytes of private key");
    t = Rr(e);
  } else
    throw new TypeError("Expected valid private key");
  if (!Fn(t))
    throw new Error("Expected private key: 0 < key < n");
  return t;
}
function Fu(e) {
  if (e instanceof Or)
    return e.assertValidity(), e;
  try {
    return Or.fromDER(e);
  } catch {
    return Or.fromCompact(e);
  }
}
at.BASE._setWindowSize(8);
const Pt = {
  node: es,
  web: typeof self == "object" && "crypto" in self ? self.crypto : void 0
}, Tn = {}, jr = {
  bytesToHex: Kr,
  hexToBytes: Mr,
  concatBytes: nn,
  mod: ye,
  invert: Zn,
  isValidPrivateKey(e) {
    try {
      return Pi(e), !0;
    } catch {
      return !1;
    }
  },
  _bigintTo32Bytes: ka,
  _normalizePrivateKey: Pi,
  hashToPrivateKey: (e) => {
    e = Di(e);
    const t = hn + 8;
    if (e.length < t || e.length > 1024)
      throw new Error("Expected valid bytes of private key as per FIPS 186");
    const r = ye(Rr(e), ft.n - Ke) + Ke;
    return ka(r);
  },
  randomBytes: (e = 32) => {
    if (Pt.web)
      return Pt.web.getRandomValues(new Uint8Array(e));
    if (Pt.node) {
      const { randomBytes: t } = Pt.node;
      return Uint8Array.from(t(e));
    } else
      throw new Error("The environment doesn't have randomBytes function");
  },
  randomPrivateKey: () => jr.hashToPrivateKey(jr.randomBytes(hn + 8)),
  precompute(e = 8, t = at.BASE) {
    const r = t === at.BASE ? t : new at(t.x, t.y);
    return r._setWindowSize(e), r.multiply(fn), r;
  },
  sha256: async (...e) => {
    if (Pt.web) {
      const t = await Pt.web.subtle.digest("SHA-256", nn(...e));
      return new Uint8Array(t);
    } else if (Pt.node) {
      const { createHash: t } = Pt.node, r = t("sha256");
      return e.forEach((n) => r.update(n)), Uint8Array.from(r.digest());
    } else
      throw new Error("The environment doesn't have sha256 function");
  },
  hmacSha256: async (e, ...t) => {
    if (Pt.web) {
      const r = await Pt.web.subtle.importKey("raw", e, { name: "HMAC", hash: { name: "SHA-256" } }, !1, ["sign"]), n = nn(...t), i = await Pt.web.subtle.sign("HMAC", r, n);
      return new Uint8Array(i);
    } else if (Pt.node) {
      const { createHmac: r } = Pt.node, n = r("sha256", e);
      return t.forEach((i) => n.update(i)), Uint8Array.from(n.digest());
    } else
      throw new Error("The environment doesn't have hmac-sha256 function");
  },
  sha256Sync: void 0,
  hmacSha256Sync: void 0,
  taggedHash: async (e, ...t) => {
    let r = Tn[e];
    if (r === void 0) {
      const n = await jr.sha256(Uint8Array.from(e, (i) => i.charCodeAt(0)));
      r = nn(n, n), Tn[e] = r;
    }
    return jr.sha256(r, ...t);
  },
  taggedHashSync: (e, ...t) => {
    if (typeof qr != "function")
      throw new Ru("sha256Sync is undefined, you need to set it");
    let r = Tn[e];
    if (r === void 0) {
      const n = qr(Uint8Array.from(e, (i) => i.charCodeAt(0)));
      r = nn(n, n), Tn[e] = r;
    }
    return qr(r, ...t);
  },
  _JacobianPoint: Ve
};
Object.defineProperties(jr, {
  sha256Sync: {
    configurable: !1,
    get() {
      return qr;
    },
    set(e) {
      qr || (qr = e);
    }
  },
  hmacSha256Sync: {
    configurable: !1,
    get() {
      return hi;
    },
    set(e) {
      hi || (hi = e);
    }
  }
});
var In, zu = new Uint8Array(16);
function us() {
  if (!In && (In = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !In))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return In(zu);
}
const $u = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function qn(e) {
  return typeof e == "string" && $u.test(e);
}
var dt = [];
for (var yi = 0; yi < 256; ++yi)
  dt.push((yi + 256).toString(16).substr(1));
function Kn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = (dt[e[t + 0]] + dt[e[t + 1]] + dt[e[t + 2]] + dt[e[t + 3]] + "-" + dt[e[t + 4]] + dt[e[t + 5]] + "-" + dt[e[t + 6]] + dt[e[t + 7]] + "-" + dt[e[t + 8]] + dt[e[t + 9]] + "-" + dt[e[t + 10]] + dt[e[t + 11]] + dt[e[t + 12]] + dt[e[t + 13]] + dt[e[t + 14]] + dt[e[t + 15]]).toLowerCase();
  if (!qn(r))
    throw TypeError("Stringified UUID is invalid");
  return r;
}
var Fa, vi, gi = 0, xi = 0;
function Vu(e, t, r) {
  var n = t && r || 0, i = t || new Array(16);
  e = e || {};
  var a = e.node || Fa, s = e.clockseq !== void 0 ? e.clockseq : vi;
  if (a == null || s == null) {
    var l = e.random || (e.rng || us)();
    a == null && (a = Fa = [l[0] | 1, l[1], l[2], l[3], l[4], l[5]]), s == null && (s = vi = (l[6] << 8 | l[7]) & 16383);
  }
  var v = e.msecs !== void 0 ? e.msecs : Date.now(), p = e.nsecs !== void 0 ? e.nsecs : xi + 1, g = v - gi + (p - xi) / 1e4;
  if (g < 0 && e.clockseq === void 0 && (s = s + 1 & 16383), (g < 0 || v > gi) && e.nsecs === void 0 && (p = 0), p >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  gi = v, xi = p, vi = s, v += 122192928e5;
  var m = ((v & 268435455) * 1e4 + p) % 4294967296;
  i[n++] = m >>> 24 & 255, i[n++] = m >>> 16 & 255, i[n++] = m >>> 8 & 255, i[n++] = m & 255;
  var _ = v / 4294967296 * 1e4 & 268435455;
  i[n++] = _ >>> 8 & 255, i[n++] = _ & 255, i[n++] = _ >>> 24 & 15 | 16, i[n++] = _ >>> 16 & 255, i[n++] = s >>> 8 | 128, i[n++] = s & 255;
  for (var M = 0; M < 6; ++M)
    i[n + M] = a[M];
  return t || Kn(i);
}
function ls(e) {
  if (!qn(e))
    throw TypeError("Invalid UUID");
  var t, r = new Uint8Array(16);
  return r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, r[1] = t >>> 16 & 255, r[2] = t >>> 8 & 255, r[3] = t & 255, r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, r[5] = t & 255, r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, r[7] = t & 255, r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, r[9] = t & 255, r[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, r[11] = t / 4294967296 & 255, r[12] = t >>> 24 & 255, r[13] = t >>> 16 & 255, r[14] = t >>> 8 & 255, r[15] = t & 255, r;
}
function Hu(e) {
  e = unescape(encodeURIComponent(e));
  for (var t = [], r = 0; r < e.length; ++r)
    t.push(e.charCodeAt(r));
  return t;
}
var ju = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Gu = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function ds(e, t, r) {
  function n(i, a, s, l) {
    if (typeof i == "string" && (i = Hu(i)), typeof a == "string" && (a = ls(a)), a.length !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    var v = new Uint8Array(16 + i.length);
    if (v.set(a), v.set(i, a.length), v = r(v), v[6] = v[6] & 15 | t, v[8] = v[8] & 63 | 128, s) {
      l = l || 0;
      for (var p = 0; p < 16; ++p)
        s[l + p] = v[p];
      return s;
    }
    return Kn(v);
  }
  try {
    n.name = e;
  } catch {
  }
  return n.DNS = ju, n.URL = Gu, n;
}
function Yu(e) {
  if (typeof e == "string") {
    var t = unescape(encodeURIComponent(e));
    e = new Uint8Array(t.length);
    for (var r = 0; r < t.length; ++r)
      e[r] = t.charCodeAt(r);
  }
  return Zu(qu(Ku(e), e.length * 8));
}
function Zu(e) {
  for (var t = [], r = e.length * 32, n = "0123456789abcdef", i = 0; i < r; i += 8) {
    var a = e[i >> 5] >>> i % 32 & 255, s = parseInt(n.charAt(a >>> 4 & 15) + n.charAt(a & 15), 16);
    t.push(s);
  }
  return t;
}
function hs(e) {
  return (e + 64 >>> 9 << 4) + 14 + 1;
}
function qu(e, t) {
  e[t >> 5] |= 128 << t % 32, e[hs(t) - 1] = t;
  for (var r = 1732584193, n = -271733879, i = -1732584194, a = 271733878, s = 0; s < e.length; s += 16) {
    var l = r, v = n, p = i, g = a;
    r = gt(r, n, i, a, e[s], 7, -680876936), a = gt(a, r, n, i, e[s + 1], 12, -389564586), i = gt(i, a, r, n, e[s + 2], 17, 606105819), n = gt(n, i, a, r, e[s + 3], 22, -1044525330), r = gt(r, n, i, a, e[s + 4], 7, -176418897), a = gt(a, r, n, i, e[s + 5], 12, 1200080426), i = gt(i, a, r, n, e[s + 6], 17, -1473231341), n = gt(n, i, a, r, e[s + 7], 22, -45705983), r = gt(r, n, i, a, e[s + 8], 7, 1770035416), a = gt(a, r, n, i, e[s + 9], 12, -1958414417), i = gt(i, a, r, n, e[s + 10], 17, -42063), n = gt(n, i, a, r, e[s + 11], 22, -1990404162), r = gt(r, n, i, a, e[s + 12], 7, 1804603682), a = gt(a, r, n, i, e[s + 13], 12, -40341101), i = gt(i, a, r, n, e[s + 14], 17, -1502002290), n = gt(n, i, a, r, e[s + 15], 22, 1236535329), r = xt(r, n, i, a, e[s + 1], 5, -165796510), a = xt(a, r, n, i, e[s + 6], 9, -1069501632), i = xt(i, a, r, n, e[s + 11], 14, 643717713), n = xt(n, i, a, r, e[s], 20, -373897302), r = xt(r, n, i, a, e[s + 5], 5, -701558691), a = xt(a, r, n, i, e[s + 10], 9, 38016083), i = xt(i, a, r, n, e[s + 15], 14, -660478335), n = xt(n, i, a, r, e[s + 4], 20, -405537848), r = xt(r, n, i, a, e[s + 9], 5, 568446438), a = xt(a, r, n, i, e[s + 14], 9, -1019803690), i = xt(i, a, r, n, e[s + 3], 14, -187363961), n = xt(n, i, a, r, e[s + 8], 20, 1163531501), r = xt(r, n, i, a, e[s + 13], 5, -1444681467), a = xt(a, r, n, i, e[s + 2], 9, -51403784), i = xt(i, a, r, n, e[s + 7], 14, 1735328473), n = xt(n, i, a, r, e[s + 12], 20, -1926607734), r = wt(r, n, i, a, e[s + 5], 4, -378558), a = wt(a, r, n, i, e[s + 8], 11, -2022574463), i = wt(i, a, r, n, e[s + 11], 16, 1839030562), n = wt(n, i, a, r, e[s + 14], 23, -35309556), r = wt(r, n, i, a, e[s + 1], 4, -1530992060), a = wt(a, r, n, i, e[s + 4], 11, 1272893353), i = wt(i, a, r, n, e[s + 7], 16, -155497632), n = wt(n, i, a, r, e[s + 10], 23, -1094730640), r = wt(r, n, i, a, e[s + 13], 4, 681279174), a = wt(a, r, n, i, e[s], 11, -358537222), i = wt(i, a, r, n, e[s + 3], 16, -722521979), n = wt(n, i, a, r, e[s + 6], 23, 76029189), r = wt(r, n, i, a, e[s + 9], 4, -640364487), a = wt(a, r, n, i, e[s + 12], 11, -421815835), i = wt(i, a, r, n, e[s + 15], 16, 530742520), n = wt(n, i, a, r, e[s + 2], 23, -995338651), r = mt(r, n, i, a, e[s], 6, -198630844), a = mt(a, r, n, i, e[s + 7], 10, 1126891415), i = mt(i, a, r, n, e[s + 14], 15, -1416354905), n = mt(n, i, a, r, e[s + 5], 21, -57434055), r = mt(r, n, i, a, e[s + 12], 6, 1700485571), a = mt(a, r, n, i, e[s + 3], 10, -1894986606), i = mt(i, a, r, n, e[s + 10], 15, -1051523), n = mt(n, i, a, r, e[s + 1], 21, -2054922799), r = mt(r, n, i, a, e[s + 8], 6, 1873313359), a = mt(a, r, n, i, e[s + 15], 10, -30611744), i = mt(i, a, r, n, e[s + 6], 15, -1560198380), n = mt(n, i, a, r, e[s + 13], 21, 1309151649), r = mt(r, n, i, a, e[s + 4], 6, -145523070), a = mt(a, r, n, i, e[s + 11], 10, -1120210379), i = mt(i, a, r, n, e[s + 2], 15, 718787259), n = mt(n, i, a, r, e[s + 9], 21, -343485551), r = Er(r, l), n = Er(n, v), i = Er(i, p), a = Er(a, g);
  }
  return [r, n, i, a];
}
function Ku(e) {
  if (e.length === 0)
    return [];
  for (var t = e.length * 8, r = new Uint32Array(hs(t)), n = 0; n < t; n += 8)
    r[n >> 5] |= (e[n / 8] & 255) << n % 32;
  return r;
}
function Er(e, t) {
  var r = (e & 65535) + (t & 65535), n = (e >> 16) + (t >> 16) + (r >> 16);
  return n << 16 | r & 65535;
}
function Xu(e, t) {
  return e << t | e >>> 32 - t;
}
function Xn(e, t, r, n, i, a) {
  return Er(Xu(Er(Er(t, e), Er(n, a)), i), r);
}
function gt(e, t, r, n, i, a, s) {
  return Xn(t & r | ~t & n, e, t, i, a, s);
}
function xt(e, t, r, n, i, a, s) {
  return Xn(t & n | r & ~n, e, t, i, a, s);
}
function wt(e, t, r, n, i, a, s) {
  return Xn(t ^ r ^ n, e, t, i, a, s);
}
function mt(e, t, r, n, i, a, s) {
  return Xn(r ^ (t | ~n), e, t, i, a, s);
}
var Ju = ds("v3", 48, Yu);
const Qu = Ju;
function el(e, t, r) {
  e = e || {};
  var n = e.random || (e.rng || us)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    r = r || 0;
    for (var i = 0; i < 16; ++i)
      t[r + i] = n[i];
    return t;
  }
  return Kn(n);
}
function tl(e, t, r, n) {
  switch (e) {
    case 0:
      return t & r ^ ~t & n;
    case 1:
      return t ^ r ^ n;
    case 2:
      return t & r ^ t & n ^ r & n;
    case 3:
      return t ^ r ^ n;
  }
}
function wi(e, t) {
  return e << t | e >>> 32 - t;
}
function rl(e) {
  var t = [1518500249, 1859775393, 2400959708, 3395469782], r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof e == "string") {
    var n = unescape(encodeURIComponent(e));
    e = [];
    for (var i = 0; i < n.length; ++i)
      e.push(n.charCodeAt(i));
  } else
    Array.isArray(e) || (e = Array.prototype.slice.call(e));
  e.push(128);
  for (var a = e.length / 4 + 2, s = Math.ceil(a / 16), l = new Array(s), v = 0; v < s; ++v) {
    for (var p = new Uint32Array(16), g = 0; g < 16; ++g)
      p[g] = e[v * 64 + g * 4] << 24 | e[v * 64 + g * 4 + 1] << 16 | e[v * 64 + g * 4 + 2] << 8 | e[v * 64 + g * 4 + 3];
    l[v] = p;
  }
  l[s - 1][14] = (e.length - 1) * 8 / Math.pow(2, 32), l[s - 1][14] = Math.floor(l[s - 1][14]), l[s - 1][15] = (e.length - 1) * 8 & 4294967295;
  for (var m = 0; m < s; ++m) {
    for (var _ = new Uint32Array(80), M = 0; M < 16; ++M)
      _[M] = l[m][M];
    for (var S = 16; S < 80; ++S)
      _[S] = wi(_[S - 3] ^ _[S - 8] ^ _[S - 14] ^ _[S - 16], 1);
    for (var C = r[0], R = r[1], P = r[2], X = r[3], B = r[4], G = 0; G < 80; ++G) {
      var q = Math.floor(G / 20), Ce = wi(C, 5) + tl(q, R, P, X) + B + t[q] + _[G] >>> 0;
      B = X, X = P, P = wi(R, 30) >>> 0, R = C, C = Ce;
    }
    r[0] = r[0] + C >>> 0, r[1] = r[1] + R >>> 0, r[2] = r[2] + P >>> 0, r[3] = r[3] + X >>> 0, r[4] = r[4] + B >>> 0;
  }
  return [r[0] >> 24 & 255, r[0] >> 16 & 255, r[0] >> 8 & 255, r[0] & 255, r[1] >> 24 & 255, r[1] >> 16 & 255, r[1] >> 8 & 255, r[1] & 255, r[2] >> 24 & 255, r[2] >> 16 & 255, r[2] >> 8 & 255, r[2] & 255, r[3] >> 24 & 255, r[3] >> 16 & 255, r[3] >> 8 & 255, r[3] & 255, r[4] >> 24 & 255, r[4] >> 16 & 255, r[4] >> 8 & 255, r[4] & 255];
}
var nl = ds("v5", 80, rl);
const il = nl, al = "00000000-0000-0000-0000-000000000000";
function ol(e) {
  if (!qn(e))
    throw TypeError("Invalid UUID");
  return parseInt(e.substr(14, 1), 16);
}
const sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  v1: Vu,
  v3: Qu,
  v4: el,
  v5: il,
  NIL: al,
  version: ol,
  validate: qn,
  stringify: Kn,
  parse: ls
}, Symbol.toStringTag, { value: "Module" })), ps = /* @__PURE__ */ co(sl), cl = ps.v4, fl = function(e, t, r, n) {
  if (typeof e != "string")
    throw new TypeError(e + " must be a string");
  n = n || {};
  const i = typeof n.version == "number" ? n.version : 2;
  if (i !== 1 && i !== 2)
    throw new TypeError(i + " must be 1 or 2");
  const a = {
    method: e
  };
  if (i === 2 && (a.jsonrpc = "2.0"), t) {
    if (typeof t != "object" && !Array.isArray(t))
      throw new TypeError(t + " must be an object, array or omitted");
    a.params = t;
  }
  if (typeof r > "u") {
    const s = typeof n.generator == "function" ? n.generator : function() {
      return cl();
    };
    a.id = s(a, n);
  } else
    i === 2 && r === null ? n.notificationIdNull && (a.id = null) : a.id = r;
  return a;
};
var ul = fl;
const ll = ps.v4, dl = ul, pn = function(e, t) {
  if (!(this instanceof pn))
    return new pn(e, t);
  t || (t = {}), this.options = {
    reviver: typeof t.reviver < "u" ? t.reviver : null,
    replacer: typeof t.replacer < "u" ? t.replacer : null,
    generator: typeof t.generator < "u" ? t.generator : function() {
      return ll();
    },
    version: typeof t.version < "u" ? t.version : 2,
    notificationIdNull: typeof t.notificationIdNull == "boolean" ? t.notificationIdNull : !1
  }, this.callServer = e;
};
var hl = pn;
pn.prototype.request = function(e, t, r, n) {
  const i = this;
  let a = null;
  const s = Array.isArray(e) && typeof t == "function";
  if (this.options.version === 1 && s)
    throw new TypeError("JSON-RPC 1.0 does not support batching");
  if (s || !s && e && typeof e == "object" && typeof t == "function")
    n = t, a = e;
  else {
    typeof r == "function" && (n = r, r = void 0);
    const p = typeof n == "function";
    try {
      a = dl(e, t, r, {
        generator: this.options.generator,
        version: this.options.version,
        notificationIdNull: this.options.notificationIdNull
      });
    } catch (g) {
      if (p)
        return n(g);
      throw g;
    }
    if (!p)
      return a;
  }
  let v;
  try {
    v = JSON.stringify(a, this.options.replacer);
  } catch (p) {
    return n(p);
  }
  return this.callServer(v, function(p, g) {
    i._parseResponse(p, g, n);
  }), a;
};
pn.prototype._parseResponse = function(e, t, r) {
  if (e) {
    r(e);
    return;
  }
  if (!t)
    return r();
  let n;
  try {
    n = JSON.parse(t, this.options.reviver);
  } catch (i) {
    return r(i);
  }
  if (r.length === 3)
    if (Array.isArray(n)) {
      const i = function(s) {
        return typeof s.error < "u";
      }, a = function(s) {
        return !i(s);
      };
      return r(null, n.filter(i), n.filter(a));
    } else
      return r(null, n.error, n.result);
  r(null, n);
};
var Li = { exports: {} };
(function(e, t) {
  var r = typeof self < "u" ? self : un, n = function() {
    function a() {
      this.fetch = !1, this.DOMException = r.DOMException;
    }
    return a.prototype = r, new a();
  }();
  (function(a) {
    (function(s) {
      var l = {
        searchParams: "URLSearchParams" in a,
        iterable: "Symbol" in a && "iterator" in Symbol,
        blob: "FileReader" in a && "Blob" in a && function() {
          try {
            return new Blob(), !0;
          } catch {
            return !1;
          }
        }(),
        formData: "FormData" in a,
        arrayBuffer: "ArrayBuffer" in a
      };
      function v(E) {
        return E && DataView.prototype.isPrototypeOf(E);
      }
      if (l.arrayBuffer)
        var p = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], g = ArrayBuffer.isView || function(E) {
          return E && p.indexOf(Object.prototype.toString.call(E)) > -1;
        };
      function m(E) {
        if (typeof E != "string" && (E = String(E)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(E))
          throw new TypeError("Invalid character in header field name");
        return E.toLowerCase();
      }
      function _(E) {
        return typeof E != "string" && (E = String(E)), E;
      }
      function M(E) {
        var k = {
          next: function() {
            var J = E.shift();
            return { done: J === void 0, value: J };
          }
        };
        return l.iterable && (k[Symbol.iterator] = function() {
          return k;
        }), k;
      }
      function S(E) {
        this.map = {}, E instanceof S ? E.forEach(function(k, J) {
          this.append(J, k);
        }, this) : Array.isArray(E) ? E.forEach(function(k) {
          this.append(k[0], k[1]);
        }, this) : E && Object.getOwnPropertyNames(E).forEach(function(k) {
          this.append(k, E[k]);
        }, this);
      }
      S.prototype.append = function(E, k) {
        E = m(E), k = _(k);
        var J = this.map[E];
        this.map[E] = J ? J + ", " + k : k;
      }, S.prototype.delete = function(E) {
        delete this.map[m(E)];
      }, S.prototype.get = function(E) {
        return E = m(E), this.has(E) ? this.map[E] : null;
      }, S.prototype.has = function(E) {
        return this.map.hasOwnProperty(m(E));
      }, S.prototype.set = function(E, k) {
        this.map[m(E)] = _(k);
      }, S.prototype.forEach = function(E, k) {
        for (var J in this.map)
          this.map.hasOwnProperty(J) && E.call(k, this.map[J], J, this);
      }, S.prototype.keys = function() {
        var E = [];
        return this.forEach(function(k, J) {
          E.push(J);
        }), M(E);
      }, S.prototype.values = function() {
        var E = [];
        return this.forEach(function(k) {
          E.push(k);
        }), M(E);
      }, S.prototype.entries = function() {
        var E = [];
        return this.forEach(function(k, J) {
          E.push([J, k]);
        }), M(E);
      }, l.iterable && (S.prototype[Symbol.iterator] = S.prototype.entries);
      function C(E) {
        if (E.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        E.bodyUsed = !0;
      }
      function R(E) {
        return new Promise(function(k, J) {
          E.onload = function() {
            k(E.result);
          }, E.onerror = function() {
            J(E.error);
          };
        });
      }
      function P(E) {
        var k = new FileReader(), J = R(k);
        return k.readAsArrayBuffer(E), J;
      }
      function X(E) {
        var k = new FileReader(), J = R(k);
        return k.readAsText(E), J;
      }
      function B(E) {
        for (var k = new Uint8Array(E), J = new Array(k.length), Ne = 0; Ne < k.length; Ne++)
          J[Ne] = String.fromCharCode(k[Ne]);
        return J.join("");
      }
      function G(E) {
        if (E.slice)
          return E.slice(0);
        var k = new Uint8Array(E.byteLength);
        return k.set(new Uint8Array(E)), k.buffer;
      }
      function q() {
        return this.bodyUsed = !1, this._initBody = function(E) {
          this._bodyInit = E, E ? typeof E == "string" ? this._bodyText = E : l.blob && Blob.prototype.isPrototypeOf(E) ? this._bodyBlob = E : l.formData && FormData.prototype.isPrototypeOf(E) ? this._bodyFormData = E : l.searchParams && URLSearchParams.prototype.isPrototypeOf(E) ? this._bodyText = E.toString() : l.arrayBuffer && l.blob && v(E) ? (this._bodyArrayBuffer = G(E.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : l.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(E) || g(E)) ? this._bodyArrayBuffer = G(E) : this._bodyText = E = Object.prototype.toString.call(E) : this._bodyText = "", this.headers.get("content-type") || (typeof E == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : l.searchParams && URLSearchParams.prototype.isPrototypeOf(E) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, l.blob && (this.blob = function() {
          var E = C(this);
          if (E)
            return E;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? C(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(P);
        }), this.text = function() {
          var E = C(this);
          if (E)
            return E;
          if (this._bodyBlob)
            return X(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(B(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, l.formData && (this.formData = function() {
          return this.text().then(me);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var Ce = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function Pe(E) {
        var k = E.toUpperCase();
        return Ce.indexOf(k) > -1 ? k : E;
      }
      function se(E, k) {
        k = k || {};
        var J = k.body;
        if (E instanceof se) {
          if (E.bodyUsed)
            throw new TypeError("Already read");
          this.url = E.url, this.credentials = E.credentials, k.headers || (this.headers = new S(E.headers)), this.method = E.method, this.mode = E.mode, this.signal = E.signal, !J && E._bodyInit != null && (J = E._bodyInit, E.bodyUsed = !0);
        } else
          this.url = String(E);
        if (this.credentials = k.credentials || this.credentials || "same-origin", (k.headers || !this.headers) && (this.headers = new S(k.headers)), this.method = Pe(k.method || this.method || "GET"), this.mode = k.mode || this.mode || null, this.signal = k.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && J)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(J);
      }
      se.prototype.clone = function() {
        return new se(this, { body: this._bodyInit });
      };
      function me(E) {
        var k = new FormData();
        return E.trim().split("&").forEach(function(J) {
          if (J) {
            var Ne = J.split("="), Oe = Ne.shift().replace(/\+/g, " "), _e = Ne.join("=").replace(/\+/g, " ");
            k.append(decodeURIComponent(Oe), decodeURIComponent(_e));
          }
        }), k;
      }
      function tt(E) {
        var k = new S(), J = E.replace(/\r?\n[\t ]+/g, " ");
        return J.split(/\r?\n/).forEach(function(Ne) {
          var Oe = Ne.split(":"), _e = Oe.shift().trim();
          if (_e) {
            var rt = Oe.join(":").trim();
            k.append(_e, rt);
          }
        }), k;
      }
      q.call(se.prototype);
      function Be(E, k) {
        k || (k = {}), this.type = "default", this.status = k.status === void 0 ? 200 : k.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in k ? k.statusText : "OK", this.headers = new S(k.headers), this.url = k.url || "", this._initBody(E);
      }
      q.call(Be.prototype), Be.prototype.clone = function() {
        return new Be(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new S(this.headers),
          url: this.url
        });
      }, Be.error = function() {
        var E = new Be(null, { status: 0, statusText: "" });
        return E.type = "error", E;
      };
      var xe = [301, 302, 303, 307, 308];
      Be.redirect = function(E, k) {
        if (xe.indexOf(k) === -1)
          throw new RangeError("Invalid status code");
        return new Be(null, { status: k, headers: { location: E } });
      }, s.DOMException = a.DOMException;
      try {
        new s.DOMException();
      } catch {
        s.DOMException = function(k, J) {
          this.message = k, this.name = J;
          var Ne = Error(k);
          this.stack = Ne.stack;
        }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException;
      }
      function Ae(E, k) {
        return new Promise(function(J, Ne) {
          var Oe = new se(E, k);
          if (Oe.signal && Oe.signal.aborted)
            return Ne(new s.DOMException("Aborted", "AbortError"));
          var _e = new XMLHttpRequest();
          function rt() {
            _e.abort();
          }
          _e.onload = function() {
            var nt = {
              status: _e.status,
              statusText: _e.statusText,
              headers: tt(_e.getAllResponseHeaders() || "")
            };
            nt.url = "responseURL" in _e ? _e.responseURL : nt.headers.get("X-Request-URL");
            var L = "response" in _e ? _e.response : _e.responseText;
            J(new Be(L, nt));
          }, _e.onerror = function() {
            Ne(new TypeError("Network request failed"));
          }, _e.ontimeout = function() {
            Ne(new TypeError("Network request failed"));
          }, _e.onabort = function() {
            Ne(new s.DOMException("Aborted", "AbortError"));
          }, _e.open(Oe.method, Oe.url, !0), Oe.credentials === "include" ? _e.withCredentials = !0 : Oe.credentials === "omit" && (_e.withCredentials = !1), "responseType" in _e && l.blob && (_e.responseType = "blob"), Oe.headers.forEach(function(nt, L) {
            _e.setRequestHeader(L, nt);
          }), Oe.signal && (Oe.signal.addEventListener("abort", rt), _e.onreadystatechange = function() {
            _e.readyState === 4 && Oe.signal.removeEventListener("abort", rt);
          }), _e.send(typeof Oe._bodyInit > "u" ? null : Oe._bodyInit);
        });
      }
      return Ae.polyfill = !0, a.fetch || (a.fetch = Ae, a.Headers = S, a.Request = se, a.Response = Be), s.Headers = S, s.Request = se, s.Response = Be, s.fetch = Ae, Object.defineProperty(s, "__esModule", { value: !0 }), s;
    })({});
  })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
  var i = n;
  t = i.fetch, t.default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t;
})(Li, Li.exports);
const ys = /* @__PURE__ */ js(Li.exports);
var Bi = { exports: {} };
(function(e, t) {
  (function(r, n) {
    n(t);
  })(un, function(r) {
    var n = !0;
    function i(L) {
      return L && L.circularRefs !== void 0 && L.circularRefs !== null && (n = L.circularRefs === !0), { circularRefs: n };
    }
    function a(L) {
      return (a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(ce) {
        return typeof ce;
      } : function(ce) {
        return ce && typeof Symbol == "function" && ce.constructor === Symbol && ce !== Symbol.prototype ? "symbol" : typeof ce;
      })(L);
    }
    function s(L, ce) {
      for (var ee = 0; ee < ce.length; ee++) {
        var f = ce[ee];
        f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(L, f.key, f);
      }
    }
    var l = function() {
      function L(f) {
        (function(A, T) {
          if (!(A instanceof T))
            throw new TypeError("Cannot call a class as a function");
        })(this, L), this.value = function A(T) {
          {
            if (typeof T == "string") {
              if (!p(T))
                throw new Error('Invalid number (value: "' + T + '")');
              return T;
            }
            if (typeof T != "number")
              return A(T && T.valueOf());
            if (15 < v(T + "").length)
              throw new Error("Invalid number: contains more than 15 digits (value: " + T + ")");
            if (isNaN(T))
              throw new Error("Invalid number: NaN");
            if (!isFinite(T))
              throw new Error("Invalid number: Infinity");
            return T + "";
          }
        }(f), this.type = "LosslessNumber", this.isLosslessNumber = !0;
      }
      var ce, ee;
      return ce = L, (ee = [{ key: "valueOf", value: function() {
        var f = parseFloat(this.value), A = v(this.value);
        if (15 < A.length)
          throw new Error("Cannot convert to number: number would be truncated (value: " + this.value + ")");
        if (!isFinite(f))
          throw new Error("Cannot convert to number: number would overflow (value: " + this.value + ")");
        if (Math.abs(f) < Number.MIN_VALUE && !/^0*$/.test(A))
          throw new Error("Cannot convert to number: number would underflow (value: " + this.value + ")");
        return f;
      } }, { key: "toString", value: function() {
        return this.value;
      } }]) && s(ce.prototype, ee), L;
    }();
    function v(L) {
      return (typeof L != "string" ? L + "" : L).replace(/^-/, "").replace(/e.*$/, "").replace(/^0\.?0*|\./, "");
    }
    function p(L) {
      return /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/.test(L);
    }
    function g(L, ce, ee, f) {
      return Array.isArray(ee) ? f.call(L, ce, function(A, T) {
        for (var D = [], W = 0; W < A.length; W++)
          D[W] = g(A, W + "", A[W], T);
        return D;
      }(ee, f)) : ee && a(ee) === "object" && !ee.isLosslessNumber ? f.call(L, ce, function(A, T) {
        var D, W = {};
        for (D in A)
          A.hasOwnProperty(D) && (W[D] = g(A, D, A[D], T));
        return W;
      }(ee, f)) : f.call(L, ce, ee);
    }
    function m(L) {
      return encodeURIComponent(L.replace(/\//g, "~1").replace(/~/g, "~0"));
    }
    function _(L) {
      return decodeURIComponent(L).replace(/~1/g, "/").replace(/~0/g, "~");
    }
    function M(L) {
      return "#/" + L.map(m).join("/");
    }
    var S = { NULL: 0, DELIMITER: 1, NUMBER: 2, STRING: 3, SYMBOL: 4, UNKNOWN: 5 }, C = { "": !0, "{": !0, "}": !0, "[": !0, "]": !0, ":": !0, ",": !0 }, R = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: `
`, r: "\r", t: "	" }, P = "", X = 0, B = "", G = "", q = S.NULL, Ce = [], Pe = [];
    function se() {
      X++, B = P.charAt(X);
    }
    function me() {
      for (q = S.NULL, G = ""; B === " " || B === "	" || B === `
` || B === "\r"; )
        se();
      if (C[B])
        return q = S.DELIMITER, G = B, void se();
      if (Be(B) || B === "-") {
        if (q = S.NUMBER, B === "-") {
          if (G += B, se(), !Be(B))
            throw xe("Invalid number, digit expected", X);
        } else
          B === "0" && (G += B, se());
        for (; Be(B); )
          G += B, se();
        if (B === ".") {
          if (G += B, se(), !Be(B))
            throw xe("Invalid number, digit expected", X);
          for (; Be(B); )
            G += B, se();
        }
        if (B === "e" || B === "E") {
          if (G += B, se(), B !== "+" && B !== "-" || (G += B, se()), !Be(B))
            throw xe("Invalid number, digit expected", X);
          for (; Be(B); )
            G += B, se();
        }
      } else if (B !== '"') {
        if (!tt(B)) {
          for (q = S.UNKNOWN; B !== ""; )
            G += B, se();
          throw xe('Syntax error in part "' + G + '"');
        }
        for (q = S.SYMBOL; tt(B); )
          G += B, se();
      } else {
        for (q = S.STRING, se(); B !== "" && B !== '"'; )
          if (B === "\\") {
            se();
            var L = R[B];
            if (L !== void 0)
              G += L, se();
            else {
              if (B !== "u")
                throw xe('Invalid escape character "\\' + B + '"', X);
              se();
              for (var ce = "", ee = 0; ee < 4; ee++) {
                if (!/^[0-9a-fA-F]/.test(B))
                  throw xe("Invalid unicode character");
                ce += B, se();
              }
              G += String.fromCharCode(parseInt(ce, 16));
            }
          } else
            G += B, se();
        if (B !== '"')
          throw xe("End of string expected");
        se();
      }
    }
    function tt(L) {
      return /^[a-zA-Z_]/.test(L);
    }
    function Be(L) {
      return "0" <= L && L <= "9";
    }
    function xe(L, ce) {
      return ce === void 0 && (ce = X - G.length), L = new SyntaxError(L + " (char " + ce + ")"), L.char = ce, L;
    }
    function Ae() {
      if (q !== S.DELIMITER || G !== "{")
        return function() {
          if (q !== S.DELIMITER || G !== "[")
            return function() {
              if (q !== S.STRING)
                return function() {
                  if (q !== S.NUMBER)
                    return function() {
                      if (q !== S.SYMBOL)
                        return function() {
                          throw xe(G === "" ? "Unexpected end of json string" : "Value expected");
                        }();
                      if (G === "true")
                        return me(), !0;
                      if (G === "false")
                        return me(), !1;
                      if (G !== "null")
                        throw xe('Unknown symbol "' + G + '"');
                      return me(), null;
                    }();
                  var W = new l(G);
                  return me(), W;
                }();
              var D = G;
              return me(), D;
            }();
          me();
          var A = [];
          if (q === S.DELIMITER && G === "]")
            return me(), A;
          var T = Pe.length;
          for (Pe[T] = A; Ce[T] = A.length + "", A.push(Ae()), q === S.DELIMITER && G === ","; )
            me();
          if (q === S.DELIMITER && G === "]")
            return me(), Pe.length = T, Ce.length = T, A;
          throw xe('Comma or end of array "]" expected');
        }();
      var L, ce;
      me();
      var ee = {};
      if (q === S.DELIMITER && G === "}")
        return me(), ee;
      var f = Pe.length;
      for (Pe[f] = ee; ; ) {
        if (q !== S.STRING)
          throw xe("Object key expected");
        if (ce = G, me(), q !== S.DELIMITER || G !== ":")
          throw xe("Colon expected");
        if (me(), ee[Ce[f] = ce] = Ae(), q !== S.DELIMITER || G !== ",")
          break;
        me();
      }
      if (q !== S.DELIMITER || G !== "}")
        throw xe('Comma or end of object "}" expected');
      return me(), typeof (L = ee).$ref == "string" && Object.keys(L).length === 1 ? function(A) {
        if (!i().circularRefs)
          return A;
        for (var T = function(W) {
          if ((W = W.split("/").map(_)).shift() !== "#")
            throw SyntaxError("Cannot parse JSON Pointer: no valid URI fragment");
          return W[W.length - 1] === "" && W.pop(), W;
        }(A.$ref), D = 0; D < T.length; D++)
          if (T[D] !== Ce[D])
            throw new Error('Invalid circular reference "' + A.$ref + '"');
        return Pe[T.length];
      }(ee) : (Pe.length = f, Ce.length = f, ee);
    }
    var E = [], k = [];
    function J(A, ce, ee) {
      k = [], E = [];
      var f, A = typeof ce == "function" ? ce.call({ "": A }, "", A) : A;
      return typeof ee == "number" ? 10 < ee ? f = nt(" ", 10) : 1 <= ee && (f = nt(" ", ee)) : typeof ee == "string" && ee !== "" && (f = ee), Ne(A, ce, f, "");
    }
    function Ne(L, ce, ee, f) {
      return typeof L == "boolean" || L instanceof Boolean || L === null || typeof L == "number" || L instanceof Number || typeof L == "string" || L instanceof String || L instanceof Date ? JSON.stringify(L) : L && L.isLosslessNumber ? L.value : Array.isArray(L) ? function(A, T, D, W) {
        var Q = D ? W + D : void 0, fe = D ? `[
` : "[";
        if (_e(A))
          return rt(A, T, D, W);
        var te = k.length;
        k[te] = A;
        for (var Te = 0; Te < A.length; Te++) {
          var ae = Te + "", Ie = typeof T == "function" ? T.call(A, ae, A[Te]) : A[Te];
          D && (fe += Q), Ie !== void 0 && typeof Ie != "function" ? (E[te] = ae, fe += Ne(Ie, T, D, Q)) : fe += "null", Te < A.length - 1 && (fe += D ? `,
` : ",");
        }
        return k.length = te, E.length = te, fe += D ? `
` + W + "]" : "]";
      }(L, ce, ee, f) : L && a(L) === "object" ? Oe(L, ce, ee, f) : void 0;
    }
    function Oe(L, ce, ee, f) {
      var A = ee ? f + ee : void 0, T = !0, D = ee ? `{
` : "{";
      if (typeof L.toJSON == "function")
        return J(L.toJSON(), ce, ee);
      if (_e(L))
        return rt(L, ce, ee, f);
      var W, Q, fe, te, Te, ae = k.length;
      for (W in k[ae] = L)
        L.hasOwnProperty(W) && (Q = typeof ce == "function" ? ce.call(L, W, L[W]) : L[W], fe = W, Te = ce, (te = Q) === void 0 || typeof te == "function" || Array.isArray(Te) && !function(Ie, Ye) {
          for (var ut = 0; ut < Ie.length; ut++)
            if (Ie[ut] == Ye)
              return !0;
          return !1;
        }(Te, fe) || (T ? T = !1 : D += ee ? `,
` : ",", fe = JSON.stringify(W), D += ee ? A + fe + ": " : fe + ":", E[ae] = W, D += Ne(Q, ce, ee, A)));
      return k.length = ae, E.length = ae, D += ee ? `
` + f + "}" : "}";
    }
    function _e(L) {
      return k.indexOf(L) !== -1;
    }
    function rt(L, ce, ee, f) {
      if (!i().circularRefs)
        throw new Error('Circular reference at "' + M(E) + '"');
      return L = k.indexOf(L), Oe({ $ref: M(E.slice(0, L)) }, ce, ee, f);
    }
    function nt(L, ce) {
      for (var ee = ""; 0 < ce--; )
        ee += L;
      return ee;
    }
    r.LosslessNumber = l, r.config = i, r.parse = function(L, ce) {
      X = 0, B = (P = L).charAt(0), G = "", q = S.NULL, Pe = [], Ce = [], me();
      var ee = Ae();
      if (G !== "")
        throw xe("Unexpected characters");
      return ce ? g({ "": L = ee }, "", L, ce) : ee;
    }, r.stringify = J, Object.defineProperty(r, "__esModule", { value: !0 });
  });
})(Bi, Bi.exports);
var Ji = {}, Qi = {}, ea = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function i(v, p, g) {
    this.fn = v, this.context = p, this.once = g || !1;
  }
  function a(v, p, g, m, _) {
    if (typeof g != "function")
      throw new TypeError("The listener must be a function");
    var M = new i(g, m || v, _), S = r ? r + p : p;
    return v._events[S] ? v._events[S].fn ? v._events[S] = [v._events[S], M] : v._events[S].push(M) : (v._events[S] = M, v._eventsCount++), v;
  }
  function s(v, p) {
    --v._eventsCount === 0 ? v._events = new n() : delete v._events[p];
  }
  function l() {
    this._events = new n(), this._eventsCount = 0;
  }
  l.prototype.eventNames = function() {
    var p = [], g, m;
    if (this._eventsCount === 0)
      return p;
    for (m in g = this._events)
      t.call(g, m) && p.push(r ? m.slice(1) : m);
    return Object.getOwnPropertySymbols ? p.concat(Object.getOwnPropertySymbols(g)) : p;
  }, l.prototype.listeners = function(p) {
    var g = r ? r + p : p, m = this._events[g];
    if (!m)
      return [];
    if (m.fn)
      return [m.fn];
    for (var _ = 0, M = m.length, S = new Array(M); _ < M; _++)
      S[_] = m[_].fn;
    return S;
  }, l.prototype.listenerCount = function(p) {
    var g = r ? r + p : p, m = this._events[g];
    return m ? m.fn ? 1 : m.length : 0;
  }, l.prototype.emit = function(p, g, m, _, M, S) {
    var C = r ? r + p : p;
    if (!this._events[C])
      return !1;
    var R = this._events[C], P = arguments.length, X, B;
    if (R.fn) {
      switch (R.once && this.removeListener(p, R.fn, void 0, !0), P) {
        case 1:
          return R.fn.call(R.context), !0;
        case 2:
          return R.fn.call(R.context, g), !0;
        case 3:
          return R.fn.call(R.context, g, m), !0;
        case 4:
          return R.fn.call(R.context, g, m, _), !0;
        case 5:
          return R.fn.call(R.context, g, m, _, M), !0;
        case 6:
          return R.fn.call(R.context, g, m, _, M, S), !0;
      }
      for (B = 1, X = new Array(P - 1); B < P; B++)
        X[B - 1] = arguments[B];
      R.fn.apply(R.context, X);
    } else {
      var G = R.length, q;
      for (B = 0; B < G; B++)
        switch (R[B].once && this.removeListener(p, R[B].fn, void 0, !0), P) {
          case 1:
            R[B].fn.call(R[B].context);
            break;
          case 2:
            R[B].fn.call(R[B].context, g);
            break;
          case 3:
            R[B].fn.call(R[B].context, g, m);
            break;
          case 4:
            R[B].fn.call(R[B].context, g, m, _);
            break;
          default:
            if (!X)
              for (q = 1, X = new Array(P - 1); q < P; q++)
                X[q - 1] = arguments[q];
            R[B].fn.apply(R[B].context, X);
        }
    }
    return !0;
  }, l.prototype.on = function(p, g, m) {
    return a(this, p, g, m, !1);
  }, l.prototype.once = function(p, g, m) {
    return a(this, p, g, m, !0);
  }, l.prototype.removeListener = function(p, g, m, _) {
    var M = r ? r + p : p;
    if (!this._events[M])
      return this;
    if (!g)
      return s(this, M), this;
    var S = this._events[M];
    if (S.fn)
      S.fn === g && (!_ || S.once) && (!m || S.context === m) && s(this, M);
    else {
      for (var C = 0, R = [], P = S.length; C < P; C++)
        (S[C].fn !== g || _ && !S[C].once || m && S[C].context !== m) && R.push(S[C]);
      R.length ? this._events[M] = R.length === 1 ? R[0] : R : s(this, M);
    }
    return this;
  }, l.prototype.removeAllListeners = function(p) {
    var g;
    return p ? (g = r ? r + p : p, this._events[g] && s(this, g)) : (this._events = new n(), this._eventsCount = 0), this;
  }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = r, l.EventEmitter = l, e.exports = l;
})(ea);
Object.defineProperty(Qi, "__esModule", { value: !0 });
const pl = ea.exports;
class yl extends pl.EventEmitter {
  constructor(r, n, i) {
    super();
    qe(this, "socket");
    this.socket = new window.WebSocket(r, i), this.socket.onopen = () => this.emit("open"), this.socket.onmessage = (a) => this.emit("message", a.data), this.socket.onerror = (a) => this.emit("error", a), this.socket.onclose = (a) => {
      this.emit("close", a.code, a.reason);
    };
  }
  send(r, n, i) {
    const a = i || n;
    try {
      this.socket.send(r), a();
    } catch (s) {
      a(s);
    }
  }
  close(r, n) {
    this.socket.close(r, n);
  }
  addEventListener(r, n, i) {
    this.socket.addEventListener(r, n, i);
  }
}
function vl(e, t) {
  return new yl(e, t);
}
Qi.default = vl;
var ta = {}, Xr = {};
Object.defineProperty(Xr, "__esModule", { value: !0 });
Xr.createError = Xr.DefaultDataPack = void 0;
const gl = /* @__PURE__ */ new Map([
  [-32e3, "Event not provided"],
  [-32600, "Invalid Request"],
  [-32601, "Method not found"],
  [-32602, "Invalid params"],
  [-32603, "Internal error"],
  [-32604, "Params not found"],
  [-32605, "Method forbidden"],
  [-32606, "Event forbidden"],
  [-32700, "Parse error"]
]);
class xl {
  encode(t) {
    return JSON.stringify(t);
  }
  decode(t) {
    return JSON.parse(t);
  }
}
Xr.DefaultDataPack = xl;
function wl(e, t) {
  const r = {
    code: e,
    message: gl.get(e) || "Internal Server Error"
  };
  return t && (r.data = t), r;
}
Xr.createError = wl;
Object.defineProperty(ta, "__esModule", { value: !0 });
const ml = ea.exports, bl = Xr;
class El extends ml.EventEmitter {
  constructor(r, n = "ws://localhost:8080", { autoconnect: i = !0, reconnect: a = !0, reconnect_interval: s = 1e3, max_reconnects: l = 5, ...v } = {}, p, g) {
    super();
    qe(this, "address");
    qe(this, "rpc_id");
    qe(this, "queue");
    qe(this, "options");
    qe(this, "autoconnect");
    qe(this, "ready");
    qe(this, "reconnect");
    qe(this, "reconnect_timer_id");
    qe(this, "reconnect_interval");
    qe(this, "max_reconnects");
    qe(this, "rest_options");
    qe(this, "current_reconnects");
    qe(this, "generate_request_id");
    qe(this, "socket");
    qe(this, "webSocketFactory");
    qe(this, "dataPack");
    this.webSocketFactory = r, this.queue = {}, this.rpc_id = 0, this.address = n, this.autoconnect = i, this.ready = !1, this.reconnect = a, this.reconnect_timer_id = void 0, this.reconnect_interval = s, this.max_reconnects = l, this.rest_options = v, this.current_reconnects = 0, this.generate_request_id = p || (() => ++this.rpc_id), g ? this.dataPack = g : this.dataPack = new bl.DefaultDataPack(), this.autoconnect && this._connect(this.address, {
      autoconnect: this.autoconnect,
      reconnect: this.reconnect,
      reconnect_interval: this.reconnect_interval,
      max_reconnects: this.max_reconnects,
      ...this.rest_options
    });
  }
  connect() {
    this.socket || this._connect(this.address, {
      autoconnect: this.autoconnect,
      reconnect: this.reconnect,
      reconnect_interval: this.reconnect_interval,
      max_reconnects: this.max_reconnects,
      ...this.rest_options
    });
  }
  call(r, n, i, a) {
    return !a && typeof i == "object" && (a = i, i = null), new Promise((s, l) => {
      if (!this.ready)
        return l(new Error("socket not ready"));
      const v = this.generate_request_id(r, n), p = {
        jsonrpc: "2.0",
        method: r,
        params: n || void 0,
        id: v
      };
      this.socket.send(this.dataPack.encode(p), a, (g) => {
        if (g)
          return l(g);
        this.queue[v] = { promise: [s, l] }, i && (this.queue[v].timeout = setTimeout(() => {
          delete this.queue[v], l(new Error("reply timeout"));
        }, i));
      });
    });
  }
  async login(r) {
    const n = await this.call("rpc.login", r);
    if (!n)
      throw new Error("authentication failed");
    return n;
  }
  async listMethods() {
    return await this.call("__listMethods");
  }
  notify(r, n) {
    return new Promise((i, a) => {
      if (!this.ready)
        return a(new Error("socket not ready"));
      const s = {
        jsonrpc: "2.0",
        method: r,
        params: n
      };
      this.socket.send(this.dataPack.encode(s), (l) => {
        if (l)
          return a(l);
        i();
      });
    });
  }
  async subscribe(r) {
    typeof r == "string" && (r = [r]);
    const n = await this.call("rpc.on", r);
    if (typeof r == "string" && n[r] !== "ok")
      throw new Error("Failed subscribing to an event '" + r + "' with: " + n[r]);
    return n;
  }
  async unsubscribe(r) {
    typeof r == "string" && (r = [r]);
    const n = await this.call("rpc.off", r);
    if (typeof r == "string" && n[r] !== "ok")
      throw new Error("Failed unsubscribing from an event with: " + n);
    return n;
  }
  close(r, n) {
    this.socket.close(r || 1e3, n);
  }
  setAutoReconnect(r) {
    this.reconnect = r;
  }
  setReconnectInterval(r) {
    this.reconnect_interval = r;
  }
  setMaxReconnects(r) {
    this.max_reconnects = r;
  }
  _connect(r, n) {
    clearTimeout(this.reconnect_timer_id), this.socket = this.webSocketFactory(r, n), this.socket.addEventListener("open", () => {
      this.ready = !0, this.emit("open"), this.current_reconnects = 0;
    }), this.socket.addEventListener("message", ({ data: i }) => {
      i instanceof ArrayBuffer && (i = Buffer.from(i).toString());
      try {
        i = this.dataPack.decode(i);
      } catch {
        return;
      }
      if (i.notification && this.listeners(i.notification).length) {
        if (!Object.keys(i.params).length)
          return this.emit(i.notification);
        const a = [i.notification];
        if (i.params.constructor === Object)
          a.push(i.params);
        else
          for (let s = 0; s < i.params.length; s++)
            a.push(i.params[s]);
        return Promise.resolve().then(() => {
          this.emit.apply(this, a);
        });
      }
      if (!this.queue[i.id])
        return i.method ? Promise.resolve().then(() => {
          this.emit(i.method, i == null ? void 0 : i.params);
        }) : void 0;
      "error" in i == "result" in i && this.queue[i.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')), this.queue[i.id].timeout && clearTimeout(this.queue[i.id].timeout), i.error ? this.queue[i.id].promise[1](i.error) : this.queue[i.id].promise[0](i.result), delete this.queue[i.id];
    }), this.socket.addEventListener("error", (i) => this.emit("error", i)), this.socket.addEventListener("close", ({ code: i, reason: a }) => {
      this.ready && setTimeout(() => this.emit("close", i, a), 0), this.ready = !1, this.socket = void 0, i !== 1e3 && (this.current_reconnects++, this.reconnect && (this.max_reconnects > this.current_reconnects || this.max_reconnects === 0) && (this.reconnect_timer_id = setTimeout(() => this._connect(r, n), this.reconnect_interval)));
    });
  }
}
ta.default = El;
var vs = un && un.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ji, "__esModule", { value: !0 });
var gs = Ji.Client = void 0;
const _l = vs(Qi), Sl = vs(ta);
class Al extends Sl.default {
  constructor(t = "ws://localhost:8080", { autoconnect: r = !0, reconnect: n = !0, reconnect_interval: i = 1e3, max_reconnects: a = 5 } = {}, s) {
    super(_l.default, t, {
      autoconnect: r,
      reconnect: n,
      reconnect_interval: i,
      max_reconnects: a
    }, s);
  }
}
gs = Ji.Client = Al;
jr.hmacSha256Sync = (e, ...t) => {
  const r = fs.create(Mu, e);
  return t.forEach((n) => r.update(n)), r.digest();
};
var Tl = class {
};
function mi(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && e.jsonrpc === "2.0" && typeof e.id == "string";
}
function Il(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && e.jsonrpc === "2.0" && typeof e.id == "string" && (e.error !== null && typeof e.error == "object" || typeof e.error == "function") && typeof e.error.message == "string";
}
var za = "The response returned from RPC server does not match the TypeScript definition. This is likely because the SDK version is not compatible with the RPC server. Please update your SDK version to the latest. ", Cl = class {
  constructor(e, t) {
    this.rpcClient = this.createRpcClient(e, t);
  }
  createRpcClient(e, t) {
    return new hl(
      async (n, i) => {
        const a = {
          method: "POST",
          body: n,
          headers: Object.assign(
            {
              "Content-Type": "application/json"
            },
            t || {}
          )
        };
        try {
          let s = await ys(e, a);
          const l = await s.text();
          let v;
          try {
            v = JSON.stringify(
              Bi.exports.parse(l, (p, g) => {
                if (g == null)
                  return g;
                if (p === "balance" && typeof g == "number")
                  return g.toString();
                try {
                  if (g.isLosslessNumber)
                    return g.valueOf();
                } catch {
                  return g.toString();
                }
                return g;
              })
            );
          } catch {
            v = l;
          }
          s.ok ? i(null, v) : i(new Error(`${s.status} ${s.statusText}: ${l}`));
        } catch (s) {
          s instanceof Error && i(s);
        }
      },
      {}
    );
  }
  async requestWithType(e, t, r, n = !1) {
    const i = await this.request(e, t);
    if (Il(i))
      throw new Error(`RPC Error: ${i.error.message}`);
    if (mi(i)) {
      const a = r(i.result), s = za + `Result received was: ${JSON.stringify(i.result)}`;
      if (n && !a)
        return console.warn(s), i.result;
      if (!a)
        throw new Error(`RPC Error: ${s}`);
      return i.result;
    }
    throw new Error(`Unexpected RPC Response: ${i}`);
  }
  async request(e, t) {
    return new Promise((r, n) => {
      this.rpcClient.request(e, t, (i, a) => {
        if (i) {
          n(i);
          return;
        }
        r(a);
      });
    });
  }
  async batchRequestWithType(e, t, r = !1) {
    const n = await this.batchRequest(e), i = n.filter(
      (a) => mi(a) && (r || t(a.result))
    );
    if (n.length > i.length) {
      console.warn(
        `Batch request contains invalid responses. ${n.length - i.length} of the ${n.length} requests has invalid schema.`
      );
      const a = n.find((l) => !t(l.result)), s = n.findIndex(
        (l) => !mi(l)
      );
      a && console.warn(
        za + `One example mismatch is: ${JSON.stringify(
          a.result
        )}`
      ), s !== -1 && console.warn(
        `The request ${JSON.stringify(
          e[s]
        )} within a batch request returns an invalid response ${JSON.stringify(
          n[s]
        )}`
      );
    }
    return i.map((a) => a.result);
  }
  async batchRequest(e) {
    return new Promise((t, r) => {
      e.length === 0 && t([]);
      const n = e.map((i) => this.rpcClient.request(i.method, i.args));
      this.rpcClient.request(n, (i, a) => {
        if (i) {
          r(i);
          return;
        }
        t(a);
      });
    });
  }
};
function K(e, t) {
  return typeof e == "string";
}
function Qr(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && K(e.AddressOwner) || (e !== null && typeof e == "object" || typeof e == "function") && K(e.ObjectOwner) || (e !== null && typeof e == "object" || typeof e == "function") && (e.Shared !== null && typeof e.Shared == "object" || typeof e.Shared == "function") && Ge(e.Shared.initial_shared_version) || e === "Immutable";
}
function Ut(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && K(e.digest) && K(e.objectId) && Ge(e.version);
}
function Nl(e, t) {
  return Ut(e) && (e !== null && typeof e == "object" || typeof e == "function") && K(e.type) && Qr(e.owner) && K(e.previousTransaction);
}
function Ol(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Object.entries(e).every(([r, n]) => K(r));
}
function Ml(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Object.entries(e).every(([r, n]) => K(n) && K(r));
}
function Rl(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && $a(e.dataType) && xs(e) || (e !== null && typeof e == "object" || typeof e == "function") && $a(e.dataType) && ws(e);
}
function xs(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && K(e.type) && Ol(e.fields) && (typeof e.has_public_transfer > "u" || e.has_public_transfer === !1 || e.has_public_transfer === !0);
}
function ws(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Ml(e.disassembled);
}
function Dl(e, t) {
  return K(e) || (e !== null && typeof e == "object" || typeof e == "function") && K(e.Object);
}
function Pl(e, t) {
  return Array.isArray(e) && e.every(
    (r) => Dl(r)
  );
}
function Ll(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Object.entries(e).every(([r, n]) => ms(n) && K(r));
}
function ms(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Ge(e.file_format_version) && K(e.address) && K(e.name) && Array.isArray(e.friends) && e.friends.every(
    (r) => Bl(r)
  ) && (e.structs !== null && typeof e.structs == "object" || typeof e.structs == "function") && Object.entries(e.structs).every(([r, n]) => bs(n) && K(r)) && (e.exposed_functions !== null && typeof e.exposed_functions == "object" || typeof e.exposed_functions == "function") && Object.entries(e.exposed_functions).every(([r, n]) => Es(n) && K(r));
}
function Bl(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && K(e.address) && K(e.name);
}
function bs(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && ra(e.abilities) && Array.isArray(e.type_parameters) && e.type_parameters.every(
    (r) => Ul(r)
  ) && Array.isArray(e.fields) && e.fields.every(
    (r) => kl(r)
  );
}
function Ul(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && ra(e.constraints) && typeof e.is_phantom == "boolean";
}
function kl(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && K(e.name) && Dr(e.type_);
}
function Es(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Wl(e.visibility) && typeof e.is_entry == "boolean" && Array.isArray(e.type_parameters) && e.type_parameters.every(
    (r) => ra(r)
  ) && Array.isArray(e.parameters) && e.parameters.every(
    (r) => Dr(r)
  ) && Array.isArray(e.return_) && e.return_.every(
    (r) => Dr(r)
  );
}
function Wl(e, t) {
  return e === "Private" || e === "Public" || e === "Friend";
}
function Ge(e, t) {
  return typeof e == "number";
}
function ra(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Array.isArray(e.abilities) && e.abilities.every(
    (r) => K(r)
  );
}
function Dr(e, t) {
  return K(e) || Fl(e) || (e !== null && typeof e == "object" || typeof e == "function") && Dr(e.Reference) || (e !== null && typeof e == "object" || typeof e == "function") && Dr(e.MutableReference) || (e !== null && typeof e == "object" || typeof e == "function") && Dr(e.Vector) || zl(e);
}
function Fl(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Ge(e.TypeParameter);
}
function zl(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && (e.Struct !== null && typeof e.Struct == "object" || typeof e.Struct == "function") && K(e.Struct.address) && K(e.Struct.module) && K(e.Struct.name) && Array.isArray(e.Struct.type_arguments) && e.Struct.type_arguments.every(
    (r) => Dr(r)
  );
}
function Sr(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Rl(e.data) && Qr(e.owner) && K(e.previousTransaction) && Ge(e.storageRebate) && Ut(e.reference);
}
function $l(e, t) {
  return e === "Exists" || e === "NotExists" || e === "Deleted";
}
function $a(e, t) {
  return e === "moveObject" || e === "package";
}
function Va(e, t) {
  return Array.isArray(e) && e.every(
    (r) => Nl(r)
  );
}
function Ha(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && $l(e.status) && (K(e.details) || Ut(e.details) || Sr(e.details));
}
function Vl(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && K(e.packageId) && K(e.transactionModule) && K(e.sender) && K(e.type) && (typeof e.fields > "u" || e.fields !== null && typeof e.fields == "object" || typeof e.fields == "function") && K(e.bcs);
}
function Hl(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && K(e.sender) && K(e.packageId);
}
function jl(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && K(e.packageId) && K(e.transactionModule) && K(e.sender) && Qr(e.owner) && Jl(e.changeType) && K(e.coinType) && K(e.coinObjectId) && Ge(e.version) && Ge(e.amount);
}
function Gl(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && K(e.packageId) && K(e.transactionModule) && K(e.sender) && Qr(e.recipient) && K(e.objectType) && K(e.objectId) && Ge(e.version);
}
function Yl(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && K(e.packageId) && K(e.transactionModule) && K(e.sender) && K(e.objectType) && K(e.objectId) && Ge(e.version);
}
function Zl(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && K(e.packageId) && K(e.transactionModule) && K(e.sender) && K(e.objectId) && Ge(e.version);
}
function ql(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && K(e.packageId) && K(e.transactionModule) && K(e.sender) && Qr(e.recipient) && K(e.objectType) && K(e.objectId) && Ge(e.version);
}
function Kl(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Vl(e.moveEvent) || (e !== null && typeof e == "object" || typeof e == "function") && Hl(e.publish) || (e !== null && typeof e == "object" || typeof e == "function") && jl(e.coinBalanceChange) || (e !== null && typeof e == "object" || typeof e == "function") && Gl(e.transferObject) || (e !== null && typeof e == "object" || typeof e == "function") && Yl(e.mutateObject) || (e !== null && typeof e == "object" || typeof e == "function") && Zl(e.deleteObject) || (e !== null && typeof e == "object" || typeof e == "function") && ql(e.newObject) || (e !== null && typeof e == "object" || typeof e == "function") && typeof e.epochChange == "bigint" || (e !== null && typeof e == "object" || typeof e == "function") && typeof e.checkpoint == "bigint";
}
function _s(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Ge(e.txSeq) && Ge(e.eventSeq);
}
function Xl(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Ql(e.data) && (e.nextCursor === null || _s(e.nextCursor));
}
function Jl(e, t) {
  return e === "Gas" || e === "Pay" || e === "Receive";
}
function Ss(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Ge(e.timestamp) && K(e.txDigest) && _s(e.id) && Kl(e.event);
}
function Ql(e, t) {
  return Array.isArray(e) && e.every(
    (r) => Ss(r)
  );
}
function ed(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Ge(e.subscription) && Ss(e.result);
}
function td(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && K(e.recipient) && Ut(e.objectRef);
}
function rd(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && K(e.recipient) && (e.amount === null || Ge(e.amount));
}
function nd(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Ge(e.epoch) && Ge(e.storage_charge) && Ge(e.computation_charge);
}
function id(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Array.isArray(e.coins) && e.coins.every(
    (r) => Ut(r)
  ) && Array.isArray(e.recipients) && e.recipients.every(
    (r) => K(r)
  ) && Array.isArray(e.amounts) && e.amounts.every(
    (r) => Ge(r)
  );
}
function ad(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Array.isArray(e.coins) && e.coins.every(
    (r) => Ut(r)
  ) && Array.isArray(e.recipients) && e.recipients.every(
    (r) => K(r)
  ) && Array.isArray(e.amounts) && e.amounts.every(
    (r) => Ge(r)
  );
}
function od(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Array.isArray(e.coins) && e.coins.every(
    (r) => Ut(r)
  ) && K(e.recipient);
}
function sd(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && td(e.TransferObject) || (e !== null && typeof e == "object" || typeof e == "function") && ws(e.Publish) || (e !== null && typeof e == "object" || typeof e == "function") && gd(e.Call) || (e !== null && typeof e == "object" || typeof e == "function") && rd(e.TransferSui) || (e !== null && typeof e == "object" || typeof e == "function") && nd(e.ChangeEpoch) || (e !== null && typeof e == "object" || typeof e == "function") && id(e.Pay) || (e !== null && typeof e == "object" || typeof e == "function") && ad(e.PaySui) || (e !== null && typeof e == "object" || typeof e == "function") && od(e.PayAllSui);
}
function cd(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Array.isArray(e.transactions) && e.transactions.every(
    (r) => sd(r)
  ) && K(e.sender) && Ut(e.gasPayment) && Ge(e.gasBudget);
}
function fd(e, t) {
  return K(e) || Array.isArray(e) && e.every(
    (r) => K(r)
  );
}
function ud(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Ge(e.epoch) && fd(e.signature);
}
function Ui(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && K(e.transactionDigest) && cd(e.data) && K(e.txSignature) && ud(e.authSignInfo);
}
function ld(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Ge(e.computationCost) && Ge(e.storageCost) && Ge(e.storageRebate);
}
function dd(e, t) {
  return e === "success" || e === "failure";
}
function hd(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && dd(e.status) && (typeof e.error > "u" || K(e.error));
}
function Cn(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Qr(e.owner) && Ut(e.reference);
}
function na(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && hd(e.status) && ld(e.gasUsed) && (typeof e.sharedObjects > "u" || Array.isArray(e.sharedObjects) && e.sharedObjects.every(
    (r) => Ut(r)
  )) && K(e.transactionDigest) && (typeof e.created > "u" || Array.isArray(e.created) && e.created.every(
    (r) => Cn(r)
  )) && (typeof e.mutated > "u" || Array.isArray(e.mutated) && e.mutated.every(
    (r) => Cn(r)
  )) && (typeof e.unwrapped > "u" || Array.isArray(e.unwrapped) && e.unwrapped.every(
    (r) => Cn(r)
  )) && (typeof e.deleted > "u" || Array.isArray(e.deleted) && e.deleted.every(
    (r) => Ut(r)
  )) && (typeof e.wrapped > "u" || Array.isArray(e.wrapped) && e.wrapped.every(
    (r) => Ut(r)
  )) && Cn(e.gasObject) && (typeof e.events > "u" || Array.isArray(e.events)) && (typeof e.dependencies > "u" || Array.isArray(e.dependencies) && e.dependencies.every(
    (r) => K(r)
  ));
}
function ja(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Ui(e.certificate) && na(e.effects) && (e.timestamp_ms === null || Ge(e.timestamp_ms)) && (e.parsed_data === null || (e.parsed_data !== null && typeof e.parsed_data == "object" || typeof e.parsed_data == "function") && wd(e.parsed_data.SplitCoin) || (e.parsed_data !== null && typeof e.parsed_data == "object" || typeof e.parsed_data == "function") && xd(e.parsed_data.MergeCoin) || (e.parsed_data !== null && typeof e.parsed_data == "object" || typeof e.parsed_data == "function") && md(e.parsed_data.Publish));
}
function pd(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && na(e.effects);
}
function yd(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && (e.ImmediateReturn !== null && typeof e.ImmediateReturn == "object" || typeof e.ImmediateReturn == "function") && K(e.ImmediateReturn.tx_digest) || (e !== null && typeof e == "object" || typeof e == "function") && (e.TxCert !== null && typeof e.TxCert == "object" || typeof e.TxCert == "function") && Ui(e.TxCert.certificate) || (e !== null && typeof e == "object" || typeof e == "function") && (e.EffectsCert !== null && typeof e.EffectsCert == "object" || typeof e.EffectsCert == "function") && Ui(e.EffectsCert.certificate) && pd(e.EffectsCert.effects);
}
function vd(e, t) {
  return Array.isArray(e) && e.every(
    (r) => K(r)
  );
}
function bi(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Array.isArray(e.data) && e.data.every(
    (r) => K(r)
  ) && (e.nextCursor === null || K(e.nextCursor));
}
function gd(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Ut(e.package) && K(e.module) && K(e.function) && (typeof e.typeArguments > "u" || Array.isArray(e.typeArguments) && e.typeArguments.every(
    (r) => K(r)
  )) && (typeof e.arguments > "u" || Array.isArray(e.arguments) && e.arguments.every(
    (r) => As(r)
  ));
}
function As(e, t) {
  return K(e) || Ge(e) || e === !1 || e === !0 || Array.isArray(e) && e.every(
    (r) => As(r)
  );
}
function xd(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Sr(e.updatedCoin) && Sr(e.updatedGas);
}
function wd(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Sr(e.updatedCoin) && Array.isArray(e.newCoins) && e.newCoins.every(
    (r) => Sr(r)
  ) && Sr(e.updatedGas);
}
function md(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && Array.isArray(e.createdObjects) && e.createdObjects.every(
    (r) => Sr(r)
  ) && bd(e.package) && Sr(e.updatedGas);
}
function bd(e, t) {
  return (e !== null && typeof e == "object" || typeof e == "function") && K(e.digest) && K(e.objectId) && Ge(e.version);
}
var Ed = 20;
function ki(e, t = !1) {
  let r = e.toLowerCase();
  return !t && r.startsWith("0x") && (r = r.slice(2)), `0x${r.padStart(Ed * 2, "0")}`;
}
function _d(e, t = !1) {
  return ki(e, t);
}
BigInt(1e9);
function ia(e) {
  return e.status !== "Exists" ? void 0 : e.details;
}
function Sd(e) {
  return e.status !== "Deleted" ? void 0 : e.details;
}
function Ad(e) {
  return e.status !== "NotExists" ? void 0 : e.details;
}
function Ts(e) {
  var t;
  return ((t = ia(e)) == null ? void 0 : t.reference) || Sd(e);
}
function Td(e) {
  var r;
  var t;
  return "objectId" in e ? e.objectId : (r = (t = Ts(e)) == null ? void 0 : t.objectId) != null ? r : Ad(e);
}
function Id(e) {
  var t;
  return (t = zn(e)) == null ? void 0 : t.type;
}
function Cd(e) {
  var t;
  return "fields" in e ? e.fields : (t = zn(e)) == null ? void 0 : t.fields;
}
function zn(e) {
  const t = "data" in e ? e : ia(e);
  if ((t == null ? void 0 : t.data.dataType) === "moveObject")
    return t.data;
}
var Is = "0x2", Wi = `${Is}::sui::SUI`, Nd = `${Is}::coin::Coin`, Od = /^0x2::coin::Coin<(.+)>$/, Fe = class {
  static isCoin(e) {
    var r;
    var t;
    return (r = (t = Fe.getType(e)) == null ? void 0 : t.startsWith(Nd)) != null ? r : !1;
  }
  static getCoinType(e) {
    var r;
    const [, t] = (r = e.match(Od)) != null ? r : [];
    return t || null;
  }
  static getCoinTypeArg(e) {
    const t = Fe.getType(e);
    return t ? Fe.getCoinType(t) : null;
  }
  static isSUI(e) {
    const t = Fe.getCoinTypeArg(e);
    return t ? Fe.getCoinSymbol(t) === "SUI" : !1;
  }
  static getCoinSymbol(e) {
    return e.substring(e.lastIndexOf(":") + 1);
  }
  static getCoinStructTag(e) {
    return {
      address: _d(e.split("::")[0]),
      module: e.split("::")[1],
      name: e.split("::")[2],
      typeParams: []
    };
  }
  static getID(e) {
    return xs(e) ? e.fields.id.id : Td(e);
  }
  static selectCoinsWithBalanceGreaterThanOrEqual(e, t, r = []) {
    return Fe.sortByBalance(
      e.filter(
        (n) => !r.includes(Fe.getID(n)) && Fe.getBalance(n) >= t
      )
    );
  }
  static selectCoinWithBalanceGreaterThanOrEqual(e, t, r = []) {
    return e.find(
      (n) => !r.includes(Fe.getID(n)) && Fe.getBalance(n) >= t
    );
  }
  static selectCoinSetWithCombinedBalanceGreaterThanOrEqual(e, t, r = []) {
    const n = Fe.sortByBalance(
      e.filter((l) => !r.includes(Fe.getID(l)))
    ), i = Fe.totalBalance(n);
    if (i < t)
      return [];
    if (i === t)
      return n;
    let a = BigInt(0), s = [];
    for (; a < i; ) {
      const l = t - a, v = n.find(
        (g) => Fe.getBalance(g) >= l
      );
      if (v) {
        s.push(v);
        break;
      }
      const p = n.pop();
      s.push(p), a += Fe.getBalance(p);
    }
    return Fe.sortByBalance(s);
  }
  static totalBalance(e) {
    return e.reduce(
      (t, r) => t + Fe.getBalance(r),
      BigInt(0)
    );
  }
  static sortByBalance(e) {
    return e.sort(
      (t, r) => Fe.getBalance(t) < Fe.getBalance(r) ? -1 : Fe.getBalance(t) > Fe.getBalance(r) ? 1 : 0
    );
  }
  static getBalance(e) {
    var t;
    if (!Fe.isCoin(e))
      return;
    const r = (t = Cd(e)) == null ? void 0 : t.balance;
    return BigInt(r);
  }
  static getZero() {
    return BigInt(0);
  }
  static getType(e) {
    return "status" in e ? Id(e) : e.type;
  }
  static async transfer(e, t, r, n, i, a) {
    const s = await Fe.newTransferTx(
      e,
      t,
      r,
      n,
      i,
      a
    );
    return e.signAndExecuteTransaction(s);
  }
  static async newTransferTx(e, t, r, n, i, a) {
    const s = r === Wi, l = t.filter(
      (M) => Fe.getCoinTypeArg(M) === r
    ), v = n + BigInt(s ? a : 0), p = await Fe.selectCoinSetWithCombinedBalanceGreaterThanOrEqual(
      l,
      v
    );
    if (!p.length) {
      const M = Fe.totalBalance(l), S = M - BigInt(s ? a : 0);
      throw new Error(
        `Coin balance ${M} is not sufficient to cover the transfer amount ${n}. Try reducing the transfer amount to ${S}.`
      );
    }
    if (!s) {
      const M = t.filter((C) => Fe.isSUI(C));
      if (!Fe.selectCoinWithBalanceGreaterThanOrEqual(
        M,
        BigInt(a)
      ))
        throw new Error(
          `Unable to find a coin to cover the gas budget ${a}`
        );
    }
    const g = await e.getAddress(), _ = {
      inputCoins: p.map(Fe.getID),
      recipients: [i],
      amounts: [Number(n)],
      gasBudget: Number(a)
    };
    return s ? e.serializer.newPaySui(g, {
      ..._
    }) : e.serializer.newPay(g, {
      ..._
    });
  }
}, Tt = new ct(xu());
Tt.registerType(
  "utf8string",
  (e, t) => {
    const r = Array.from(new TextEncoder().encode(t));
    return e.writeVec(r, (n, i) => n.write8(i));
  },
  (e) => {
    let t = e.readVec((r) => r.read8());
    return new TextDecoder().decode(new Uint8Array(t));
  }
).registerType(
  "ObjectDigest",
  (e, t) => {
    let r = Array.from(os(t, "base64"));
    return e.writeVec(r, (n, i) => n.write8(i));
  },
  (e) => {
    let t = e.readVec((r) => r.read8());
    return as(new Uint8Array(t), "base64");
  }
);
Tt.registerStructType("SuiObjectRef", {
  objectId: "address",
  version: "u64",
  digest: "ObjectDigest"
});
Tt.registerStructType("TransferObjectTx", {
  recipient: "address",
  object_ref: "SuiObjectRef"
});
Tt.registerStructType("PayTx", {
  coins: "vector<SuiObjectRef>",
  recipients: "vector<address>",
  amounts: "vector<u64>"
});
Tt.registerStructType("PaySuiTx", {
  coins: "vector<SuiObjectRef>",
  recipients: "vector<address>",
  amounts: "vector<u64>"
});
Tt.registerStructType("PayAllSuiTx", {
  coins: "vector<SuiObjectRef>",
  recipient: "address"
});
Tt.registerEnumType("Option<T>", {
  None: null,
  Some: "T"
});
Tt.registerStructType("TransferSuiTx", {
  recipient: "address",
  amount: "Option<u64>"
});
Tt.registerStructType("PublishTx", {
  modules: "vector<vector<u8>>"
});
Tt.registerStructType("SharedObjectRef", {
  objectId: "address",
  initialSharedVersion: "u64"
}).registerEnumType("ObjectArg", {
  ImmOrOwned: "SuiObjectRef",
  Shared: "SharedObjectRef"
}).registerEnumType("CallArg", {
  Pure: "vector<u8>",
  Object: "ObjectArg",
  ObjVec: "vector<ObjectArg>"
});
Tt.registerEnumType("TypeTag", {
  bool: null,
  u8: null,
  u64: null,
  u128: null,
  address: null,
  signer: null,
  vector: "TypeTag",
  struct: "StructTag",
  u16: null,
  u32: null,
  u256: null
}).registerStructType("StructTag", {
  address: "address",
  module: "string",
  name: "string",
  typeParams: "vector<TypeTag>"
});
Tt.registerStructType("MoveCallTx", {
  package: "SuiObjectRef",
  module: "string",
  function: "string",
  typeArguments: "vector<TypeTag>",
  arguments: "vector<CallArg>"
});
Tt.registerEnumType("Transaction", {
  TransferObject: "TransferObjectTx",
  Publish: "PublishTx",
  Call: "MoveCallTx",
  TransferSui: "TransferSuiTx",
  Pay: "PayTx",
  PaySui: "PaySuiTx",
  PayAllSui: "PayAllSuiTx"
});
Tt.registerEnumType("TransactionKind", {
  Single: "Transaction",
  Batch: "vector<Transaction>"
});
Tt.registerStructType("TransactionData", {
  kind: "TransactionKind",
  sender: "address",
  gasPayment: "SuiObjectRef",
  gasPrice: "u64",
  gasBudget: "u64"
});
function Md(e) {
  const t = e.split(".");
  return {
    major: parseInt(t[0], 10),
    minor: parseInt(t[1], 10),
    patch: parseInt(t[2], 10)
  };
}
var Rd = (e, t) => {
  const r = new URL(e);
  return r.protocol = r.protocol.replace("http", "ws"), r.port = (t != null ? t : 9001).toString(), r.toString();
}, Dd = (e) => e && "subscription" in e && typeof e.subscription == "number" && "result" in e && typeof e.result == "object", Cs = {
  connectTimeout: 15e3,
  callTimeout: 3e4,
  reconnectInterval: 3e3,
  maxReconnects: 5
}, Ga = "sui_subscribeEvent", Pd = "sui_unsubscribeEvent", Ld = class {
  constructor(e, t, r = Cs) {
    this.endpoint = e, this.skipValidation = t, this.options = r, this.connectionState = 0, this.connectionTimeout = null, this.isSetup = !1, this.connectionPromise = null, this.eventSubscriptions = /* @__PURE__ */ new Map(), this.endpoint.startsWith("http") && (this.endpoint = Rd(this.endpoint)), this.rpcClient = new gs(this.endpoint, {
      reconnect_interval: this.options.reconnectInterval,
      max_reconnects: this.options.maxReconnects,
      autoconnect: !1
    });
  }
  setupSocket() {
    this.isSetup || (this.rpcClient.on("open", () => {
      this.connectionTimeout && (clearTimeout(this.connectionTimeout), this.connectionTimeout = null), this.connectionState = 2, this.rpcClient.socket.on(
        "message",
        this.onSocketMessage.bind(this)
      );
    }), this.rpcClient.on("close", () => {
      this.connectionState = 0;
    }), this.rpcClient.on("error", console.error), this.isSetup = !0);
  }
  onSocketMessage(e) {
    const t = JSON.parse(e), r = t.params;
    if (t.method === Ga) {
      if (this.skipValidation && Dd(r)) {
        const n = this.eventSubscriptions.get(r.subscription);
        n && n.onMessage(r.result);
      } else if (ed(r)) {
        const n = this.eventSubscriptions.get(r.subscription);
        n && n.onMessage(r.result);
      }
    }
  }
  async connect() {
    return this.connectionPromise ? this.connectionPromise : this.connectionState === 2 ? Promise.resolve() : (this.setupSocket(), this.rpcClient.connect(), this.connectionState = 1, this.connectionPromise = new Promise((e, t) => {
      this.connectionTimeout = setTimeout(
        () => t(new Error("timeout")),
        this.options.connectTimeout
      ), this.rpcClient.once("open", () => {
        this.refreshSubscriptions(), this.connectionPromise = null, e();
      }), this.rpcClient.once("error", (r) => {
        this.connectionPromise = null, t(r);
      });
    }), this.connectionPromise);
  }
  async refreshSubscriptions() {
    if (this.eventSubscriptions.size !== 0)
      try {
        let e = /* @__PURE__ */ new Map();
        (await Promise.all(
          Array.from(this.eventSubscriptions.values()).map(async (r) => {
            const n = r.onMessage, i = r.filter;
            return !i || !n ? Promise.resolve(null) : { id: await this.subscribeEvent(i, n), onMessage: n, filter: i };
          })
        )).forEach((r) => {
          if (r === null)
            return;
          const n = r.filter, i = r.onMessage;
          e.set(r.id, { filter: n, onMessage: i });
        }), this.eventSubscriptions = e;
      } catch (e) {
        throw new Error(`error refreshing event subscriptions: ${e}`);
      }
  }
  async subscribeEvent(e, t) {
    try {
      this.connectionState != 2 && await this.connect();
      let r = await this.rpcClient.call(
        Ga,
        [e],
        this.options.callTimeout
      );
      return this.eventSubscriptions.set(r, { filter: e, onMessage: t }), r;
    } catch (r) {
      throw new Error(
        `Error subscribing to event: ${r}, filter: ${JSON.stringify(e)}`
      );
    }
  }
  async unsubscribeEvent(e) {
    try {
      this.connectionState != 2 && await this.connect();
      let t = await this.rpcClient.call(
        Pd,
        [e],
        this.options.callTimeout
      );
      return this.eventSubscriptions.delete(e) || t;
    } catch (t) {
      throw new Error(
        `Error unsubscribing from event: ${t}, subscription: ${e}}`
      );
    }
  }
}, Ns = /* @__PURE__ */ ((e) => (e.LOCAL = "LOCAL", e.DEVNET = "DEVNET", e))(Ns || {}), Bd = {
  LOCAL: {
    fullNode: "http://127.0.0.1:9000",
    faucet: "http://127.0.0.1:9123/gas"
  },
  DEVNET: {
    fullNode: "https://fullnode.devnet.sui.io/",
    faucet: "https://faucet.devnet.sui.io/gas"
  }
};
async function Ud(e, t, r) {
  const i = await (await ys(e, {
    method: "POST",
    body: JSON.stringify({
      FixedAmountRequest: {
        recipient: t
      }
    }),
    headers: {
      "Content-Type": "application/json",
      ...r || {}
    }
  })).json();
  if (i.error)
    throw new Error(`Faucet returns error: ${i.error}`);
  return i;
}
var kd = (e) => typeof e == "number", Wd = (e) => !0, Ya = {
  skipDataValidation: !0,
  socketOptions: Cs,
  versionCacheTimoutInSeconds: 600
}, Os = class extends Tl {
  constructor(e = "DEVNET", t = Ya) {
    super(), this.options = t, Object.values(Ns).includes(e) ? this.endpoints = Bd[e] : this.endpoints = {
      fullNode: e,
      faucet: t.faucetURL
    };
    const r = { ...Ya, ...t };
    this.client = new Cl(this.endpoints.fullNode), this.wsClient = new Ld(
      this.endpoints.fullNode,
      r.skipDataValidation,
      r.socketOptions
    );
  }
  async getRpcApiVersion() {
    var e;
    if (this.rpcApiVersion && this.cacheExpiry && this.cacheExpiry <= Date.now())
      return this.rpcApiVersion;
    try {
      const t = await this.client.requestWithType(
        "rpc.discover",
        [],
        Wd,
        this.options.skipDataValidation
      );
      return this.rpcApiVersion = Md(t.info.version), this.cacheExpiry = Date.now() + ((e = this.options.versionCacheTimoutInSeconds) != null ? e : 0), this.rpcApiVersion;
    } catch (t) {
      console.warn("Error fetching version number of the RPC API", t);
    }
  }
  async requestSuiFromFaucet(e, t) {
    if (!this.endpoints.faucet)
      throw new Error("Faucet URL is not specified");
    return Ud(this.endpoints.faucet, e, t);
  }
  async getMoveFunctionArgTypes(e, t, r) {
    try {
      return await this.client.requestWithType(
        "sui_getMoveFunctionArgTypes",
        [e, t, r],
        Pl,
        this.options.skipDataValidation
      );
    } catch {
      throw new Error(
        `Error fetching Move function arg types with package object ID: ${e}, module name: ${t}, function name: ${r}`
      );
    }
  }
  async getNormalizedMoveModulesByPackage(e) {
    try {
      return await this.client.requestWithType(
        "sui_getNormalizedMoveModulesByPackage",
        [e],
        Ll,
        this.options.skipDataValidation
      );
    } catch (t) {
      throw new Error(
        `Error fetching package: ${t} for package ${e}`
      );
    }
  }
  async getNormalizedMoveModule(e, t) {
    try {
      return await this.client.requestWithType(
        "sui_getNormalizedMoveModule",
        [e, t],
        ms,
        this.options.skipDataValidation
      );
    } catch (r) {
      throw new Error(
        `Error fetching module: ${r} for package ${e}, module ${t}}`
      );
    }
  }
  async getNormalizedMoveFunction(e, t, r) {
    try {
      return await this.client.requestWithType(
        "sui_getNormalizedMoveFunction",
        [e, t, r],
        Es,
        this.options.skipDataValidation
      );
    } catch (n) {
      throw new Error(
        `Error fetching function: ${n} for package ${e}, module ${t} and function ${r}}`
      );
    }
  }
  async getNormalizedMoveStruct(e, t, r) {
    try {
      return await this.client.requestWithType(
        "sui_getNormalizedMoveStruct",
        [e, t, r],
        bs,
        this.options.skipDataValidation
      );
    } catch (n) {
      throw new Error(
        `Error fetching struct: ${n} for package ${e}, module ${t} and struct ${r}}`
      );
    }
  }
  async getObjectsOwnedByAddress(e) {
    try {
      return await this.client.requestWithType(
        "sui_getObjectsOwnedByAddress",
        [e],
        Va,
        this.options.skipDataValidation
      );
    } catch (t) {
      throw new Error(
        `Error fetching owned object: ${t} for address ${e}`
      );
    }
  }
  async getGasObjectsOwnedByAddress(e) {
    return (await this.getObjectsOwnedByAddress(e)).filter((r) => Fe.isSUI(r));
  }
  getCoinDenominationInfo(e) {
    const [t, r, n] = e.split("::");
    if (ki(t) !== ki("0x2") || r != "sui" || n !== "SUI")
      throw new Error(
        "only SUI coin is supported in getCoinDenominationInfo for now."
      );
    return {
      coinType: e,
      basicUnit: "MIST",
      decimalNumber: 9
    };
  }
  async getCoinBalancesOwnedByAddress(e, t) {
    const n = (await this.getObjectsOwnedByAddress(e)).filter(
      (i) => Fe.isCoin(i) && (t === void 0 || t === Fe.getCoinTypeArg(i))
    ).map((i) => i.objectId);
    return await this.getObjectBatch(n);
  }
  async selectCoinsWithBalanceGreaterThanOrEqual(e, t, r = Wi, n = []) {
    const i = await this.getCoinBalancesOwnedByAddress(e, r);
    return await Fe.selectCoinsWithBalanceGreaterThanOrEqual(
      i,
      t,
      n
    );
  }
  async selectCoinSetWithCombinedBalanceGreaterThanOrEqual(e, t, r = Wi, n = []) {
    const i = await this.getCoinBalancesOwnedByAddress(e, r);
    return await Fe.selectCoinSetWithCombinedBalanceGreaterThanOrEqual(
      i,
      t,
      n
    );
  }
  async getObjectsOwnedByObject(e) {
    try {
      return await this.client.requestWithType(
        "sui_getObjectsOwnedByObject",
        [e],
        Va,
        this.options.skipDataValidation
      );
    } catch (t) {
      throw new Error(
        `Error fetching owned object: ${t} for objectId ${e}`
      );
    }
  }
  async getObject(e) {
    try {
      return await this.client.requestWithType(
        "sui_getObject",
        [e],
        Ha,
        this.options.skipDataValidation
      );
    } catch (t) {
      throw new Error(`Error fetching object info: ${t} for id ${e}`);
    }
  }
  async getObjectRef(e) {
    const t = await this.getObject(e);
    return Ts(t);
  }
  async getObjectBatch(e) {
    const t = e.map((r) => ({
      method: "sui_getObject",
      args: [r]
    }));
    try {
      return await this.client.batchRequestWithType(
        t,
        Ha,
        this.options.skipDataValidation
      );
    } catch (r) {
      throw new Error(`Error fetching object info: ${r} for id ${e}`);
    }
  }
  async getTransactions(e, t = null, r = null, n = "descending") {
    try {
      return await this.client.requestWithType(
        "sui_getTransactions",
        [e, t, r, n === "descending"],
        bi,
        this.options.skipDataValidation
      );
    } catch (i) {
      throw new Error(
        `Error getting transactions for query: ${i} for query ${e}`
      );
    }
  }
  async getTransactionsForObject(e, t = !0) {
    const r = [
      {
        method: "sui_getTransactions",
        args: [{ InputObject: e }, null, null, t]
      },
      {
        method: "sui_getTransactions",
        args: [{ MutatedObject: e }, null, null, t]
      }
    ];
    try {
      const n = await this.client.batchRequestWithType(
        r,
        bi,
        this.options.skipDataValidation
      );
      return [...n[0].data, ...n[1].data];
    } catch (n) {
      throw new Error(
        `Error getting transactions for object: ${n} for id ${e}`
      );
    }
  }
  async getTransactionsForAddress(e, t = !0) {
    const r = [
      {
        method: "sui_getTransactions",
        args: [{ ToAddress: e }, null, null, t]
      },
      {
        method: "sui_getTransactions",
        args: [{ FromAddress: e }, null, null, t]
      }
    ];
    try {
      const n = await this.client.batchRequestWithType(
        r,
        bi,
        this.options.skipDataValidation
      );
      return [...n[0].data, ...n[1].data];
    } catch (n) {
      throw new Error(
        `Error getting transactions for address: ${n} for id ${e}`
      );
    }
  }
  async getTransactionWithEffects(e) {
    try {
      return await this.client.requestWithType(
        "sui_getTransaction",
        [e],
        ja,
        this.options.skipDataValidation
      );
    } catch (t) {
      throw new Error(
        `Error getting transaction with effects: ${t} for digest ${e}`
      );
    }
  }
  async getTransactionWithEffectsBatch(e) {
    const t = e.map((r) => ({
      method: "sui_getTransaction",
      args: [r]
    }));
    try {
      return await this.client.batchRequestWithType(
        t,
        ja,
        this.options.skipDataValidation
      );
    } catch (r) {
      const n = e.join(", ").substring(0, -2);
      throw new Error(
        `Error getting transaction effects: ${r} for digests [${n}]`
      );
    }
  }
  async executeTransaction(e, t, r, n, i = "WaitForEffectsCert") {
    try {
      return await this.client.requestWithType(
        "sui_executeTransaction",
        [e, t, r, n, i],
        yd,
        this.options.skipDataValidation
      );
    } catch (a) {
      throw new Error(`Error executing transaction with request type: ${a}}`);
    }
  }
  async getTotalTransactionNumber() {
    try {
      return await this.client.requestWithType(
        "sui_getTotalTransactionNumber",
        [],
        kd,
        this.options.skipDataValidation
      );
    } catch (e) {
      throw new Error(`Error fetching total transaction number: ${e}`);
    }
  }
  async getTransactionDigestsInRange(e, t) {
    try {
      return await this.client.requestWithType(
        "sui_getTransactionsInRange",
        [e, t],
        vd,
        this.options.skipDataValidation
      );
    } catch (r) {
      throw new Error(
        `Error fetching transaction digests in range: ${r} for range ${e}-${t}`
      );
    }
  }
  async getEvents(e, t, r, n = "descending") {
    try {
      return await this.client.requestWithType(
        "sui_getEvents",
        [e, t, r, n === "descending"],
        Xl,
        this.options.skipDataValidation
      );
    } catch (i) {
      throw new Error(
        `Error getting events for query: ${i} for query ${e}`
      );
    }
  }
  async subscribeEvent(e, t) {
    return this.wsClient.subscribeEvent(e, t);
  }
  async unsubscribeEvent(e) {
    return this.wsClient.unsubscribeEvent(e);
  }
  async dryRunTransaction(e) {
    try {
      return await this.client.requestWithType(
        "sui_dryRunTransaction",
        [e],
        na,
        this.options.skipDataValidation
      );
    } catch (t) {
      throw new Error(`Error dry running transaction with request type: ${t}`);
    }
  }
};
Array.from("TransactionData::").map((e) => e.charCodeAt(0));
const Za = "0x2::coin::Coin", Fd = /^0x2::coin::Coin<(.+)>$/;
class Cr {
  static isCoin(t) {
    return t.type.startsWith(Za);
  }
  static isSUI(t) {
    const r = Cr.getCoinTypeArg(t);
    return r ? Cr.getCoinSymbol(r) === "SUI" : !1;
  }
  static getCoinObject(t) {
    const r = Cr.getCoinTypeArg(t);
    return {
      objectId: t.fields.id.id,
      symbol: r ? Cr.getCoinSymbol(r) : "",
      balance: BigInt(t.fields.balance)
    };
  }
  static getBalance(t) {
    return BigInt(t.fields.balance);
  }
  static getCoinTypeArg(t) {
    const r = t.type.match(Fd);
    return r ? r[1] : null;
  }
  static getCoinSymbol(t) {
    return t.substring(t.lastIndexOf(":") + 1);
  }
  static getCoinTypeFromArg(t) {
    return `${Za}<${t}>`;
  }
}
class qa {
  static isNft(t) {
    return !!(t.fields.name && t.fields.description && t.fields.url);
  }
  static getNftObject(t, r) {
    return {
      objectId: t.fields.id.id,
      name: t.fields.name,
      description: t.fields.description,
      url: t.fields.url,
      previousTransaction: r,
      objectType: t.type
    };
  }
}
const zd = "0x0000000000000000000000000000000000000005";
class $d {
  constructor(t) {
    qe(this, "query");
    this.query = new Vd(t);
  }
}
class Vd {
  constructor(t) {
    qe(this, "provider");
    this.provider = new Os(t);
  }
  async getActiveValidators() {
    return (await this.provider.getObject(zd)).details.data.fields.validators.fields.active_validators;
  }
  async getOwnedObjects(t) {
    const n = (await this.provider.getObjectsOwnedByAddress(t)).map((a) => a.objectId);
    return (await this.provider.getObjectBatch(n)).filter((a) => a.status === "Exists").map((a) => ia(a));
  }
  async getOwnedCoins(t) {
    return (await this.getOwnedObjects(t)).map((i) => ({
      id: i.reference.objectId,
      object: zn(i)
    })).filter((i) => i.object && Cr.isCoin(i.object)).map((i) => Cr.getCoinObject(i.object));
  }
  async getOwnedNfts(t) {
    return (await this.getOwnedObjects(t)).map((i) => ({
      id: i.reference.objectId,
      object: zn(i),
      previousTransaction: i.previousTransaction
    })).filter((i) => i.object && qa.isNft(i.object)).map((i) => {
      const a = i.object;
      return qa.getNftObject(a, i.previousTransaction);
    });
  }
  async getNormalizedMoveFunction(t, r, n) {
    return await this.provider.getNormalizedMoveFunction(
      t,
      r,
      n
    );
  }
}
function Hd(e, t) {
  return !t && !e;
}
const jd = {
  id: "sui:devnet",
  name: "Sui Devnet",
  rpcUrl: "https://sui-rpc-testnet.huione.org/"
}, Gd = {
  id: "sui:testnet",
  name: "Sui Testnet",
  rpcUrl: "https://fullnode.testnet.sui.io/"
}, Nr = {
  id: "unknown:unknown",
  name: "Unknown Network",
  rpcUrl: ""
}, Yd = [
  jd,
  Gd
];
async function Zd(e) {
  const { chain: t, address: r } = e, i = await new $d(t.rpcUrl).query.getOwnedCoins(r), a = /* @__PURE__ */ new Map();
  for (const s of i)
    a.has(s.symbol) ? a.set(s.symbol, a.get(s.symbol) + s.balance) : a.set(s.symbol, s.balance);
  return Array.from(a.entries()).map((s) => ({
    symbol: s[0],
    balance: String(s[1])
  }));
}
function qd({
  address: e,
  symbol: t,
  opts: r = {}
}) {
  const [n, i] = Kt("0"), { chain: a = Nr } = r, {
    data: s,
    error: l,
    isValidating: v
  } = su(
    [`a?chain=${a.id}`, e, a],
    p
  );
  async function p(m, _, M) {
    const S = /* @__PURE__ */ new Map();
    if (!_ || !M || M.id === Nr.id)
      return S;
    const C = await Zd({ address: _, chain: M });
    if (!C)
      throw new Error(`fetch coinsBalance failed: ${_}, ${M.id}`);
    return C.forEach((R) => {
      S.set(R.symbol, R.balance);
    }), S;
  }
  const g = St(
    (m) => {
      var _;
      return !m || !s ? "0" : (_ = s.get(m)) != null ? _ : "0";
    },
    [s]
  );
  return Ar(() => {
    if (!s || !t)
      return;
    const m = s.get(t);
    i(m != null ? m : "0");
  }, [s, t]), {
    balance: n,
    error: l,
    isValidating: v,
    loading: Hd(s, l),
    getBalance: g
  };
}
var Ms = /* @__PURE__ */ ((e) => (e.SUI = "SUI", e))(Ms || {});
function Kd() {
  var a;
  const { account: e, chain: t } = Gn(), { error: r, loading: n, balance: i } = qd({
    address: (a = e == null ? void 0 : e.address) != null ? a : "",
    symbol: Ms.SUI,
    opts: {
      chain: t
    }
  });
  return {
    balance: i,
    error: r,
    loading: n
  };
}
function dp(e) {
  return sn(() => new Os(e), [e]);
}
function dr(e) {
  return Array.isArray(e) && e.length > 0;
}
function Ka(e) {
  return "standard:connect" in e.features && "standard:events" in e.features && "sui:signAndExecuteTransaction" in e.features;
}
const Xd = (e) => {
  const {
    icon: t,
    alt: r = "icon"
  } = e;
  return /* @__PURE__ */ Y("div", {
    onClick: e.onClick,
    className: e.className,
    style: e.style,
    children: typeof t == "string" ? /* @__PURE__ */ Y("img", {
      src: t,
      alt: r,
      className: e.elClassName,
      style: e.elStyle
    }) : zi.cloneElement(t)
  });
};
const Jd = () => /* @__PURE__ */ Xe("div", {
  className: "wkit-dialog__header",
  children: [/* @__PURE__ */ Y(ln, {
    className: "wkit-dialog__title",
    children: "Connect Wallet"
  }), /* @__PURE__ */ Y(Of, {
    style: {
      position: "absolute",
      right: "16px",
      top: "16px"
    },
    className: "wkit-dialog__close",
    children: /* @__PURE__ */ Y(Rf, {})
  })]
}), Qd = () => /* @__PURE__ */ Xe("div", {
  className: "wkit-new-to-sui",
  children: [/* @__PURE__ */ Y("span", {
    className: "wkit-new-to-sui__text",
    children: "New to sui? "
  }), /* @__PURE__ */ Y("a", {
    className: "wkit-new-to-sui__link",
    href: "https://suiet.app/docs/getting-started",
    target: "_blank",
    children: "Learn More Here"
  })]
}), e0 = (e) => {
  const {
    wallet: t
  } = e, [r, n] = Kt("");
  return Ar(() => {
    !t.iconUrl || n(t.iconUrl);
  }, [t.iconUrl]), /* @__PURE__ */ Xe("div", {
    className: "wkit-select-item",
    onClick: () => {
      var i;
      (i = e.onSelect) == null || i.call(e, t);
    },
    children: [/* @__PURE__ */ Y(Xd, {
      icon: r,
      className: "wkit-select-item__icon",
      elClassName: "wkit-select-item__icon"
    }), t.name]
  }, t.name);
}, Xa = (e) => dr(e.wallets) ? /* @__PURE__ */ Xe("div", {
  className: "wkit-select__container",
  children: [/* @__PURE__ */ Y("div", {
    className: "wkit-select__title",
    children: e.title
  }), dr(e.wallets) && e.wallets.map((t) => /* @__PURE__ */ Y(e0, {
    wallet: t,
    onSelect: e.onSelect
  }, t.name))]
}) : null, t0 = (e) => {
  const {
    wallet: t
  } = e;
  return /* @__PURE__ */ Xe("section", {
    children: [/* @__PURE__ */ Xe("div", {
      className: "wkit-dialog__header",
      children: [/* @__PURE__ */ Y(ln, {
        className: "wkit-dialog__title",
        style: {
          margin: "-8px 12px -6px -8px"
        },
        children: /* @__PURE__ */ Y("span", {
          className: "wkit-dialog__close",
          onClick: e.onNavBack,
          children: /* @__PURE__ */ Y($o, {})
        })
      }), /* @__PURE__ */ Y(ln, {
        className: "wkit-dialog__title",
        children: "Install Wallet"
      })]
    }), /* @__PURE__ */ Xe("div", {
      className: "wkit-install",
      children: [/* @__PURE__ */ Y("img", {
        className: "wkit-install__logo",
        src: t.iconUrl,
        alt: `${t.name} logo`
      }), /* @__PURE__ */ Y("h1", {
        className: "wkit-install__title",
        children: "You haven\u2019t install this wallet"
      }), /* @__PURE__ */ Y("p", {
        className: "wkit-install__description",
        children: "Install wallet via Chrome Extension Store"
      }), /* @__PURE__ */ Y("button", {
        className: "wkit-button wkit-install__button",
        onClick: () => {
          var r;
          if (!((r = t.downloadUrl) != null && r.browserExtension))
            throw new Lt(`no downloadUrl config on this wallet: ${t.name}`);
          window.open(t.downloadUrl.browserExtension, "_blank");
        },
        children: "Get Wallet"
      })]
    })]
  });
}, r0 = (e) => {
  const {
    wallet: t
  } = e;
  return /* @__PURE__ */ Xe("section", {
    children: [/* @__PURE__ */ Xe("div", {
      className: "wkit-dialog__header",
      children: [/* @__PURE__ */ Y(ln, {
        className: "wkit-dialog__title",
        style: {
          margin: "-6px 12px -6px -8px"
        },
        children: /* @__PURE__ */ Y("span", {
          className: "wkit-dialog__close",
          onClick: e.onNavBack,
          children: /* @__PURE__ */ Y($o, {})
        })
      }), /* @__PURE__ */ Y(ln, {
        className: "wkit-dialog__title",
        children: "Connecting"
      })]
    }), /* @__PURE__ */ Xe("div", {
      className: "wkit-connecting",
      children: [/* @__PURE__ */ Y("img", {
        className: "wkit-connecting__logo",
        src: t.iconUrl,
        alt: `logo of ${t.name}`
      }), /* @__PURE__ */ Xe("h1", {
        className: "wkit-connecting__title",
        children: ["Opening ", t.name]
      }), /* @__PURE__ */ Y("p", {
        className: "wkit-connecting__description",
        children: "Confirm connection in the extension"
      })]
    })]
  });
}, n0 = (e) => {
  const {
    configuredWallets: t,
    detectedWallets: r,
    select: n,
    connecting: i
  } = Gn(), [a, s] = Kt(), l = St((p) => {
    s(p), p.installed && n(p.name);
  }, [n]);
  function v() {
    if (a) {
      if (!a.installed)
        return /* @__PURE__ */ Y(t0, {
          wallet: a,
          onNavBack: () => {
            s(void 0);
          }
        });
      if (i)
        return /* @__PURE__ */ Y(r0, {
          wallet: a,
          onNavBack: () => {
            s(void 0);
          }
        });
    }
    return /* @__PURE__ */ Xe("div", {
      children: [/* @__PURE__ */ Y(Jd, {}), /* @__PURE__ */ Xe("div", {
        className: "wkit-select__scroll",
        children: [/* @__PURE__ */ Y(Xa, {
          title: "Popular",
          wallets: t,
          onSelect: l
        }), /* @__PURE__ */ Y(Xa, {
          title: "Others",
          wallets: r,
          onSelect: l
        })]
      }), /* @__PURE__ */ Y("div", {
        style: {
          height: "41px",
          flexShrink: "0"
        }
      }), /* @__PURE__ */ Y(Qd, {})]
    });
  }
  return /* @__PURE__ */ Y(Mf, {
    open: e.open,
    onOpenChange: e.onOpenChange,
    trigger: e.children,
    contentProps: {
      onOpenAutoFocus: (p) => {
        p.preventDefault();
      }
    },
    children: v()
  });
};
function i0(e) {
  return !e || !e.startsWith("0x") || e.length !== 42 ? e : e.slice(0, 4) + "...." + e.slice(-4);
}
function a0(e) {
  const i = Number(e) / 1e9;
  if (i < 1)
    return o0(e);
  if (i >= 1e6 && i < 1e9)
    return a(i, 1e6, "M");
  if (i >= 1e9 && i < 1e12)
    return a(i, 1e9, "B");
  if (i >= 1e12)
    return a(i, 1e12, "T");
  function a(s, l, v) {
    const p = String(
      Math.floor(s / (l / 1e3))
    ).padEnd(4, "0");
    return Intl.NumberFormat("en-US").format(Number(p)).replace(",", ".") + v;
  }
  return Intl.NumberFormat("en-US").format(i);
}
function o0(e) {
  const t = Number(e) / 1e9;
  if (t === 0)
    return "0";
  const r = Math.ceil(-Math.log10(t));
  return Number(e) % Math.pow(10, 10 - (r + 2)) === 0 && Number(e) % Math.pow(10, 10 - (r + 1)) === 0 ? Ei(t, r) : Number(e) % Math.pow(10, 10 - (r + 2)) === 0 && Number(e) % Math.pow(10, 10 - (r + 1)) !== 0 ? Ei(t, r + 1) : Ei(t, r + 2);
}
function Ei(e, t) {
  return t = t || 0, t = Math.pow(10, t), s0(Math.floor(e * t) / t);
}
function s0(e) {
  if (isNaN(e))
    return e.toString();
  const t = "" + e;
  return /e/i.test(t) ? e.toFixed(18).replace(/\.?0+$/, "") : e.toString();
}
function c0(e) {
  const {
    disconnect: t,
    account: r,
    chain: n,
    connected: i
  } = Gn(), {
    balance: a
  } = Kd(), [s, l] = Kt(!1), v = St(() => !n || n.id === Nr.id ? /* @__PURE__ */ Y(Pr, {
    children: "Unknown Chain"
  }) : /* @__PURE__ */ Xe(Pr, {
    children: [a0(a), " SUI"]
  }), [a, n]);
  return i ? /* @__PURE__ */ Xe("div", {
    className: Ln("wkit-connected-container"),
    children: [/* @__PURE__ */ Xe("button", {
      className: Ln("wkit-connected-button"),
      onClick: () => {
        l(!s);
      },
      children: [/* @__PURE__ */ Y("span", {
        className: "wkit-connected-button__balance",
        children: v()
      }), /* @__PURE__ */ Y("div", {
        className: "wkit-connected-button__divider"
      }), /* @__PURE__ */ Xe("div", {
        className: "wkit-address-select",
        children: [/* @__PURE__ */ Y("span", {
          className: "wkit-address-select__address",
          children: i0(r.address)
        }), /* @__PURE__ */ Y("span", {
          className: "wkit-address-select__right-arrow",
          children: /* @__PURE__ */ Y(Df, {})
        })]
      })]
    }), s && /* @__PURE__ */ Y("div", {
      className: "wkit-disconnect-button__container",
      children: /* @__PURE__ */ Y("button", {
        className: "wkit-disconnect-button",
        onClick: () => {
          l(!1), t().then(() => {
            var p;
            (p = e.onDisconnect) == null || p.call(e);
          });
        },
        children: "Disconnect"
      })
    })]
  }) : null;
}
const hp = (e) => {
  const {
    label: t = "Connect Button"
  } = e, [r, n] = Kt(!1), {
    connected: i
  } = Gn();
  return Ar(() => {
    i && n(!1);
  }, [i]), /* @__PURE__ */ Y(n0, {
    open: r,
    onOpenChange: (a) => {
      i || n(a);
    },
    children: /* @__PURE__ */ Y("div", {
      children: i ? /* @__PURE__ */ Y(c0, {
        onDisconnect: () => {
          n(!1);
        }
      }) : /* @__PURE__ */ Y("button", {
        className: Ln("wkit-button", e.className),
        style: e.style,
        children: e.children || t
      })
    })
  });
}, f0 = Object.freeze({
  name: jn.SUI_WALLET,
  iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAIVBMVEUAAAD////////9/f39/f3+/v7x+Pz///95wfGj1PXI5fgEMJeQAAAAB3RSTlMAECNgmNr40ET05wAAAOBJREFUeNplUksOgjAQbYw38LdloQdw5VZJDGuNiWtXdGvUFjlAtT2AVC4AekrLvKKYvoTMm5fpfGGswWCdit2cfTFNZYO49YfSYwW/t2+FS0TCTH6x/Q/wISPZwcYJSVc4uxdg1wI2Yn0QbmCXbAKin7AHtiCbq6wicvI5syK/+azowlZSoxNGc4l7IWswhqKlagtD4Kl9CAWBAmspbGHwhJK+HDMlkiaIcJ9BWWqMu64yhcbGVMU5nKoc/XC2fGs/HMbPra78+MGCwhUGSw7OEB4qOKU7Nrki/p2/8zt8ABpiv63tyiOHAAAAAElFTkSuQmCC",
  downloadUrl: {
    browserExtension: "https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil"
  }
}), u0 = Object.freeze({
  name: jn.SUIET_WALLET,
  iconUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xNzA4XzI4Mjk3KSIvPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RfMTcwOF8yODI5NykiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0yMi44IDIwYy0xLjQgMC0yLjctMS40LTMuMy0yLjMtLjcuOS0yIDIuMy0zLjQgMi4zcy0yLjctMS40LTMuNC0yLjNjLS42LjktMS45IDIuMy0zLjMgMi4zLS4zIDAtLjUtLjItLjUtLjVzLjItLjUuNS0uNWMxLjEgMCAyLjYtMS45IDIuOS0yLjVsLjUtLjJjLjIgMCAuMyAwIC40LjIuNC42IDEuOCAyLjUgMi45IDIuNSAxLjEgMCAyLjUtMS45IDIuOS0yLjVsLjQtLjJjLjIgMCAuNCAwIC41LjIuNC42IDEuOCAyLjUgMi45IDIuNS4yIDAgLjUuMi41LjVzLS4yLjUtLjUuNXoiLz48cGF0aCBkPSJNMjIuOCAyMy4zYy0xLjQgMC0yLjctMS4zLTMuMy0yLjMtLjcgMS0yIDIuMy0zLjQgMi4zUzEzLjQgMjIgMTIuNyAyMWMtLjYgMS0xLjkgMi4zLTMuMyAyLjMtLjMgMC0uNS0uMy0uNS0uNSAwLS4zLjItLjYuNS0uNiAxLjEgMCAyLjYtMS44IDIuOS0yLjRsLjUtLjIuNC4yYy40LjYgMS44IDIuNCAyLjkgMi40IDEuMSAwIDIuNS0xLjggMi45LTIuNGwuNC0uMi41LjJjLjQuNiAxLjggMi40IDIuOSAyLjQuMiAwIC41LjMuNS42IDAgLjItLjIuNS0uNS41ek05LjggMTYuN2MtLjMgMC0uNS0uMi0uNS0uNEw5LjEgMTVjMC0zLjkgMy4yLTcgNy03IDMuOSAwIDcgMy4xIDcgN2wtLjEgMS4yYzAgLjMtLjMuNS0uNi41LS40LS4xLS41LS4zLS40LS43di0xYzAtMy4zLTIuNi02LTUuOS02LTMuMiAwLTUuOSAyLjctNS45IDZsLjEgMWMuMS40LS4xLjctLjQuN2gtLjF6Ii8+PC9nPjxkZWZzPjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZF8xNzA4XzI4Mjk3IiB4PSI0LjkiIHk9IjYiIHdpZHRoPSIyMi40MzciIGhlaWdodD0iMjMuMzE5IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+PGZlT2Zmc2V0IGR5PSIyIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIvPjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9Im91dCIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwLjE3NTY5NCAwIDAgMCAwIDAuNTc0MTQyIDAgMCAwIDAgMC45MTY2NjcgMCAwIDAgMSAwIi8+PGZlQmxlbmQgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzE3MDhfMjgyOTciLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMTcwOF8yODI5NyIgcmVzdWx0PSJzaGFwZSIvPjwvZmlsdGVyPjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xNzA4XzI4Mjk3IiB5MT0iNCIgeDI9IjI4Ljg4OSIgeTI9IjMyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzNFQTJGOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzY3QzhGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",
  downloadUrl: {
    browserExtension: "https://chrome.google.com/webstore/detail/suiet/khpkpbbcccdmmclmpigdgddabeilkdpd"
  }
}), l0 = Object.freeze({
  name: jn.ETHOS_WALLET,
  iconUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iOCIgZmlsbD0iIzZEMjhEOSIvPgo8cGF0aCBvcGFjaXR5PSIwLjgiIGQ9Ik05LjEyMTg3IDYuODU3MDZIMTkuOTU4M0MyMC40NTcxIDYuODU3MDYgMjAuODYxNCA3LjI2MTQxIDIwLjg2MTQgNy43NjAyVjE5Ljk4ODZDMjAuODYxNCAyMC40ODc0IDIwLjQ1NzEgMjAuODkxOCAxOS45NTgzIDIwLjg5MThIOS4xMjE4N0M4LjYyMzA4IDIwLjg5MTggOC4yMTg3MiAyMC40ODc0IDguMjE4NzIgMTkuOTg4NlY3Ljc2MDJDOC4yMTg3MiA3LjI2MTQxIDguNjIzMDggNi44NTcwNiA5LjEyMTg3IDYuODU3MDZaIiBzdHJva2U9InVybCgjcGFpbnQwX2xpbmVhcl82OTlfMjY5OCkiIHN0cm9rZS13aWR0aD0iMC40NTE1NzIiLz4KPHBhdGggZD0iTTguNzEyNzQgNy40NTQ1OUwxNi4wOTQ1IDEwLjg4OTRDMTYuNDEyOSAxMS4wMzc2IDE2LjYxNjYgMTEuMzU3IDE2LjYxNjYgMTEuNzA4M1YyMy44MUMxNi42MTY2IDI0LjQ2MzUgMTUuOTQ0IDI0LjkwMDcgMTUuMzQ2OCAyNC42MzUzTDcuOTY1MDIgMjEuMzU1NkM3LjYzODgyIDIxLjIxMDcgNy40Mjg1OCAyMC44ODcyIDcuNDI4NTggMjAuNTMwM1Y4LjI3MzQzQzcuNDI4NTggNy42MTMxMSA4LjExNDA2IDcuMTc2MDIgOC43MTI3NCA3LjQ1NDU5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIzLjM3ODIgMTUuMzc2N0MyMy40MzAzIDE1LjEzMjEgMjMuNTUzOCAxNC45MDg2IDIzLjczMzIgMTQuNzM0M0MyMy45MTI1IDE0LjU2IDI0LjEzOTYgMTQuNDQzIDI0LjM4NTYgMTQuMzk3OUwyNS4wNDA0IDE0LjI3ODRMMjQuMzg1NSAxNC4xNTg4SDI0LjM4NTZDMjQuMTM5NiAxNC4xMTM3IDIzLjkxMjUgMTMuOTk2NyAyMy43MzMyIDEzLjgyMjRDMjMuNTUzOCAxMy42NDgxIDIzLjQzMDMgMTMuNDI0NiAyMy4zNzgyIDEzLjE4TDIzLjIzNDEgMTIuNTAxM0wyMy4wOSAxMy4xOEMyMy4wMzc5IDEzLjQyNDYgMjIuOTE0NCAxMy42NDgxIDIyLjczNTEgMTMuODIyNEMyMi41NTU4IDEzLjk5NjcgMjIuMzI4NyAxNC4xMTM4IDIyLjA4MjcgMTQuMTU4OEwyMS40Mjc4IDE0LjI3ODRMMjIuMDgyNyAxNC4zOTc5SDIyLjA4MjdDMjIuMzI4NyAxNC40NDMgMjIuNTU1NyAxNC41NiAyMi43MzUgMTQuNzM0M0MyMi45MTQ0IDE0LjkwODYgMjMuMDM3OSAxNS4xMzIxIDIzLjA5IDE1LjM3NjdMMjMuMjM0MSAxNi4wNTU0TDIzLjM3ODIgMTUuMzc2N1oiIGZpbGw9IndoaXRlIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNjk5XzI2OTgiIHgxPSIyMC44NjE0IiB5MT0iMTAuNTkyNiIgeDI9IjE0LjUzOTgiIHkyPSIxMy43NTM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=",
  downloadUrl: {
    browserExtension: "https://chrome.google.com/webstore/detail/ethos-sui-wallet/mcbigmjiafegjnnogedioegffbooigli"
  }
}), d0 = [u0, f0, l0];
var h0 = typeof global == "object" && global && global.Object === Object && global;
const p0 = h0;
var y0 = typeof self == "object" && self && self.Object === Object && self, v0 = p0 || y0 || Function("return this")();
const aa = v0;
var g0 = aa.Symbol;
const Jr = g0;
var Rs = Object.prototype, x0 = Rs.hasOwnProperty, w0 = Rs.toString, on = Jr ? Jr.toStringTag : void 0;
function m0(e) {
  var t = x0.call(e, on), r = e[on];
  try {
    e[on] = void 0;
    var n = !0;
  } catch {
  }
  var i = w0.call(e);
  return n && (t ? e[on] = r : delete e[on]), i;
}
var b0 = Object.prototype, E0 = b0.toString;
function _0(e) {
  return E0.call(e);
}
var S0 = "[object Null]", A0 = "[object Undefined]", Ja = Jr ? Jr.toStringTag : void 0;
function oa(e) {
  return e == null ? e === void 0 ? A0 : S0 : Ja && Ja in Object(e) ? m0(e) : _0(e);
}
function sa(e) {
  return e != null && typeof e == "object";
}
var T0 = "[object Symbol]";
function ca(e) {
  return typeof e == "symbol" || sa(e) && oa(e) == T0;
}
function I0(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var C0 = Array.isArray;
const Jn = C0;
var N0 = 1 / 0, Qa = Jr ? Jr.prototype : void 0, eo = Qa ? Qa.toString : void 0;
function Ds(e) {
  if (typeof e == "string")
    return e;
  if (Jn(e))
    return I0(e, Ds) + "";
  if (ca(e))
    return eo ? eo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -N0 ? "-0" : t;
}
function Ps(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var O0 = "[object AsyncFunction]", M0 = "[object Function]", R0 = "[object GeneratorFunction]", D0 = "[object Proxy]";
function P0(e) {
  if (!Ps(e))
    return !1;
  var t = oa(e);
  return t == M0 || t == R0 || t == O0 || t == D0;
}
var L0 = aa["__core-js_shared__"];
const _i = L0;
var to = function() {
  var e = /[^.]+$/.exec(_i && _i.keys && _i.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function B0(e) {
  return !!to && to in e;
}
var U0 = Function.prototype, k0 = U0.toString;
function W0(e) {
  if (e != null) {
    try {
      return k0.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var F0 = /[\\^$.*+?()[\]{}|]/g, z0 = /^\[object .+?Constructor\]$/, $0 = Function.prototype, V0 = Object.prototype, H0 = $0.toString, j0 = V0.hasOwnProperty, G0 = RegExp(
  "^" + H0.call(j0).replace(F0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Y0(e) {
  if (!Ps(e) || B0(e))
    return !1;
  var t = P0(e) ? G0 : z0;
  return t.test(W0(e));
}
function Z0(e, t) {
  return e == null ? void 0 : e[t];
}
function Ls(e, t) {
  var r = Z0(e, t);
  return Y0(r) ? r : void 0;
}
var q0 = 9007199254740991, K0 = /^(?:0|[1-9]\d*)$/;
function X0(e, t) {
  var r = typeof e;
  return t = t == null ? q0 : t, !!t && (r == "number" || r != "symbol" && K0.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function J0(e, t) {
  return e === t || e !== e && t !== t;
}
var Q0 = 9007199254740991;
function eh(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Q0;
}
var th = "[object Arguments]";
function ro(e) {
  return sa(e) && oa(e) == th;
}
var Bs = Object.prototype, rh = Bs.hasOwnProperty, nh = Bs.propertyIsEnumerable, ih = ro(function() {
  return arguments;
}()) ? ro : function(e) {
  return sa(e) && rh.call(e, "callee") && !nh.call(e, "callee");
};
const ah = ih;
var oh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, sh = /^\w*$/;
function ch(e, t) {
  if (Jn(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || ca(e) ? !0 : sh.test(e) || !oh.test(e) || t != null && e in Object(t);
}
var fh = Ls(Object, "create");
const yn = fh;
function uh() {
  this.__data__ = yn ? yn(null) : {}, this.size = 0;
}
function lh(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var dh = "__lodash_hash_undefined__", hh = Object.prototype, ph = hh.hasOwnProperty;
function yh(e) {
  var t = this.__data__;
  if (yn) {
    var r = t[e];
    return r === dh ? void 0 : r;
  }
  return ph.call(t, e) ? t[e] : void 0;
}
var vh = Object.prototype, gh = vh.hasOwnProperty;
function xh(e) {
  var t = this.__data__;
  return yn ? t[e] !== void 0 : gh.call(t, e);
}
var wh = "__lodash_hash_undefined__";
function mh(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = yn && t === void 0 ? wh : t, this;
}
function Ur(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ur.prototype.clear = uh;
Ur.prototype.delete = lh;
Ur.prototype.get = yh;
Ur.prototype.has = xh;
Ur.prototype.set = mh;
function bh() {
  this.__data__ = [], this.size = 0;
}
function Qn(e, t) {
  for (var r = e.length; r--; )
    if (J0(e[r][0], t))
      return r;
  return -1;
}
var Eh = Array.prototype, _h = Eh.splice;
function Sh(e) {
  var t = this.__data__, r = Qn(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : _h.call(t, r, 1), --this.size, !0;
}
function Ah(e) {
  var t = this.__data__, r = Qn(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Th(e) {
  return Qn(this.__data__, e) > -1;
}
function Ih(e, t) {
  var r = this.__data__, n = Qn(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function en(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
en.prototype.clear = bh;
en.prototype.delete = Sh;
en.prototype.get = Ah;
en.prototype.has = Th;
en.prototype.set = Ih;
var Ch = Ls(aa, "Map");
const Nh = Ch;
function Oh() {
  this.size = 0, this.__data__ = {
    hash: new Ur(),
    map: new (Nh || en)(),
    string: new Ur()
  };
}
function Mh(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ei(e, t) {
  var r = e.__data__;
  return Mh(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Rh(e) {
  var t = ei(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Dh(e) {
  return ei(this, e).get(e);
}
function Ph(e) {
  return ei(this, e).has(e);
}
function Lh(e, t) {
  var r = ei(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Wr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Wr.prototype.clear = Oh;
Wr.prototype.delete = Rh;
Wr.prototype.get = Dh;
Wr.prototype.has = Ph;
Wr.prototype.set = Lh;
var Bh = "Expected a function";
function fa(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Bh);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var s = e.apply(this, n);
    return r.cache = a.set(i, s) || a, s;
  };
  return r.cache = new (fa.Cache || Wr)(), r;
}
fa.Cache = Wr;
var Uh = 500;
function kh(e) {
  var t = fa(e, function(n) {
    return r.size === Uh && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Wh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Fh = /\\(\\)?/g, zh = kh(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Wh, function(r, n, i, a) {
    t.push(i ? a.replace(Fh, "$1") : n || r);
  }), t;
});
const $h = zh;
function Vh(e) {
  return e == null ? "" : Ds(e);
}
function Hh(e, t) {
  return Jn(e) ? e : ch(e, t) ? [e] : $h(Vh(e));
}
var jh = 1 / 0;
function Gh(e) {
  if (typeof e == "string" || ca(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -jh ? "-0" : t;
}
function Yh(e, t, r) {
  t = Hh(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var s = Gh(t[n]);
    if (!(a = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && eh(i) && X0(s, i) && (Jn(e) || ah(e)));
}
var Zh = Object.prototype, qh = Zh.hasOwnProperty;
function Kh(e, t) {
  return e != null && qh.call(e, t);
}
function no(e, t) {
  return e != null && Yh(e, t, Kh);
}
var Us = /* @__PURE__ */ ((e) => (e.STANDARD__CONNECT = "standard:connect", e.STANDARD__DISCONNECT = "standard:disconnect", e.STANDARD__EVENTS = "standard:events", e.SUI__SIGN_AND_TRANSACTION = "sui:signAndExecuteTransaction", e.EXP__SIGN_MESSAGE = "exp:signMessage", e))(Us || {});
class io {
  constructor(t) {
    qe(this, "standardWalletAdapter");
    this.standardWalletAdapter = t;
  }
  get name() {
    return this.standardWalletAdapter.name;
  }
  get icon() {
    return this.standardWalletAdapter.icon;
  }
  get version() {
    return this.standardWalletAdapter.version;
  }
  get accounts() {
    return this.standardWalletAdapter.accounts;
  }
  get chains() {
    return this.standardWalletAdapter.chains;
  }
  get features() {
    return this.standardWalletAdapter.features;
  }
  async connect(t) {
    const r = this.getFeature(
      "standard:connect"
    );
    try {
      return await r.connect(t);
    } catch (n) {
      throw new Vr(n.message);
    }
  }
  async disconnect() {
    const t = this.getFeature(
      "standard:disconnect"
    );
    try {
      return await t.disconnect();
    } catch (r) {
      throw new Vr(r.message);
    }
  }
  on(t, r) {
    const n = this.getFeature(
      "standard:events"
    );
    try {
      return n.on(t, r);
    } catch (i) {
      throw new Vr(i.message);
    }
  }
  async signAndExecuteTransaction(t) {
    const r = this.getFeature("sui:signAndExecuteTransaction");
    try {
      return await r.signAndExecuteTransaction(t);
    } catch (n) {
      throw new Vr(n.message);
    }
  }
  async signMessage(t) {
    const r = this.getFeature(
      "exp:signMessage"
    );
    try {
      return await r.signMessage(t);
    } catch (n) {
      throw new Vr(n.message);
    }
  }
  hasFeature(t) {
    const { features: r } = this.standardWalletAdapter;
    return no(r, t);
  }
  getFeature(t) {
    const { features: r } = this.standardWalletAdapter;
    if (!no(r, t))
      throw new Pf(t);
    return r[t];
  }
}
function ua(e) {
  if (typeof e == "string") {
    console.warn(`[DEPRECATED] ${e}`);
    return;
  }
  const { name: t, message: r, migrationDoc: n } = e;
  console.warn(`[DEPRECATED] ${t} is no longer supported. ` + r + (n ? ` | Check migration doc: ${n}` : ""));
}
var Xh = globalThis && globalThis.__classPrivateFieldSet || function(e, t, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r;
}, Jh = globalThis && globalThis.__classPrivateFieldGet || function(e, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, Dn;
let Bt;
const Pn = /* @__PURE__ */ new Set(), Gr = {};
function Qh() {
  if (Bt || (Bt = Object.freeze({ register: ao, get: ep, on: tp }), typeof window > "u"))
    return Bt;
  const e = Object.freeze({ register: ao });
  try {
    window.addEventListener("wallet-standard:register-wallet", ({ detail: t }) => t(e));
  } catch (t) {
    console.error(`wallet-standard:register-wallet event listener could not be added
`, t);
  }
  try {
    window.dispatchEvent(new rp(e));
  } catch (t) {
    console.error(`wallet-standard:app-ready event could not be dispatched
`, t);
  }
  return Bt;
}
function ao(...e) {
  var t;
  return e = e.filter((r) => !Pn.has(r)), e.length ? (e.forEach((r) => Pn.add(r)), (t = Gr.register) == null || t.forEach((r) => Fi(() => r(...e))), function() {
    var n;
    e.forEach((i) => Pn.delete(i)), (n = Gr.unregister) == null || n.forEach((i) => Fi(() => i(...e)));
  }) : () => {
  };
}
function ep() {
  return [...Pn];
}
function tp(e, t) {
  var r;
  return (r = Gr[e]) != null && r.push(t) || (Gr[e] = [t]), function() {
    var i;
    Gr[e] = (i = Gr[e]) == null ? void 0 : i.filter((a) => t !== a);
  };
}
function Fi(e) {
  try {
    e();
  } catch (t) {
    console.error(t);
  }
}
class rp extends Event {
  constructor(t) {
    super("wallet-standard:app-ready", {
      bubbles: !1,
      cancelable: !1,
      composed: !1
    }), Dn.set(this, void 0), Xh(this, Dn, t, "f");
  }
  get detail() {
    return Jh(this, Dn, "f");
  }
  get type() {
    return "wallet-standard:app-ready";
  }
  preventDefault() {
    throw new Error("preventDefault cannot be called");
  }
  stopImmediatePropagation() {
    throw new Error("stopImmediatePropagation cannot be called");
  }
  stopPropagation() {
    throw new Error("stopPropagation cannot be called");
  }
}
Dn = /* @__PURE__ */ new WeakMap();
function np() {
  if (Bt || (Bt = Qh(), typeof window > "u"))
    return Bt;
  const e = window.navigator.wallets || [];
  if (!Array.isArray(e))
    return console.error("window.navigator.wallets is not an array"), Bt;
  const { register: t } = Bt, r = (...n) => n.forEach((i) => Fi(() => i({ register: t })));
  try {
    Object.defineProperty(window.navigator, "wallets", {
      value: Object.freeze({ push: r })
    });
  } catch {
    return console.error("window.navigator.wallets could not be set"), Bt;
  }
  return r(...e), Bt;
}
function ip() {
  const e = fr(), [t, r] = Kt([]);
  function n() {
    return e.current ? e.current.get().filter(Ka) : [];
  }
  return Ar(() => {
    e.current = np();
    const i = n();
    dr(i) && r(
      i.map((s) => new io(s))
    );
    const a = e.current.on("register", (...s) => {
      if (!e.current)
        return;
      const v = [...n()];
      s.filter(Ka).filter((p) => !v.find((g) => g.name === p.name)).forEach((p) => {
        v.push(p);
      }), r(v.map((p) => new io(p)));
    });
    return () => {
      a();
    };
  }, []), {
    data: t
  };
}
const ap = (e) => {
  const { data: t } = ip(), r = sn(() => dr(e) ? dr(t) ? e.map((a) => {
    const s = t.find((l) => a.name === l.name);
    return s ? {
      ...a,
      adapter: s,
      installed: !0
    } : {
      ...a,
      adapter: void 0,
      installed: !1
    };
  }) : e.map((a) => ({
    ...a,
    adapter: void 0,
    installed: !1
  })) : [], [e, t]), n = sn(() => dr(t) ? t.filter((a) => !e.find((s) => s.name === a.name)).map((a) => ({
    name: a.name,
    adapter: a,
    installed: !0,
    iconUrl: a.icon,
    downloadUrl: {
      browserExtension: ""
    }
  })) : [], [e, t]);
  return {
    allAvailableWallets: sn(() => [
      ...r,
      ...n
    ].filter((a) => a.installed), [r, n]),
    configuredWallets: r,
    detectedWallets: n
  };
};
class ks {
  constructor() {
    if (!window)
      throw new Error("window not found: storage should be used in browser env");
  }
  get length() {
    return window.localStorage.length;
  }
  setItem(t, r) {
    try {
      let n = JSON.stringify(r);
      return window.localStorage.setItem(t, n);
    } catch (n) {
      throw new Error("stringify data failed when setItem: " + n.message);
    }
  }
  getItem(t) {
    const r = window.localStorage.getItem(t);
    if (!r)
      return r;
    try {
      return JSON.parse(r);
    } catch (n) {
      throw new Error("parse data failed when getItem: " + n.message);
    }
  }
  removeItem(t) {
    return window.localStorage.removeItem(t);
  }
  clear() {
    return window.localStorage.clear();
  }
}
var la = /* @__PURE__ */ ((e) => (e.LAST_CONNECT_WALLET_NAME = "WK__LAST_CONNECT_WALLET_NAME", e))(la || {});
function op(e, t, r) {
  const n = fr(!1);
  Ar(() => {
    if (!r || n.current || !dr(t))
      return;
    const a = new ks().getItem(la.LAST_CONNECT_WALLET_NAME);
    !a || t.find((s) => s.name == a) && (e(a), n.current = !0);
  }, [t]);
}
const pp = (e) => {
  var Be;
  const {
    defaultWallets: t = d0,
    chains: r = Yd,
    autoConnect: n = !0,
    children: i
  } = e, {
    allAvailableWallets: a,
    configuredWallets: s,
    detectedWallets: l
  } = ap(t), [v, p] = Kt(), [g, m] = Kt(cr.DISCONNECTED), [_, M] = Kt(() => dr(r) ? r[0] : Nr), S = fr([]), C = (xe, Ae) => xe && Ae === cr.CONNECTED, R = sn(() => {
    if (!!C(v, g))
      return v.accounts[0];
  }, [v, g]), P = (xe, Ae) => {
    if (!C(xe, Ae))
      throw new Lt("Failed to call function, wallet not connected");
  }, X = St(async (xe, Ae) => {
    if (!xe)
      throw new Lt("param adapter is missing");
    m(cr.CONNECTING);
    try {
      const E = await xe.connect(Ae);
      if (dr(E == null ? void 0 : E.chains)) {
        const J = E == null ? void 0 : E.chains[0], Ne = r.find((Oe) => Oe.id === J);
        M(Ne != null ? Ne : Nr);
      }
      return p(xe), m(cr.CONNECTED), new ks().setItem(la.LAST_CONNECT_WALLET_NAME, xe.name), E;
    } catch (E) {
      throw p(void 0), m(cr.DISCONNECTED), E;
    }
  }, []), B = St(async () => {
    var Ae;
    P(v, g);
    const xe = v;
    dr(S.current) && (S.current.forEach((E) => {
      try {
        E();
      } catch (k) {
        console.error("error when clearing wallet listener", k.message);
      }
    }), S.current = []);
    try {
      xe.hasFeature(Us.STANDARD__DISCONNECT) && await xe.disconnect();
    } finally {
      p(void 0), m(cr.DISCONNECTED), M((Ae = r == null ? void 0 : r[0]) != null ? Ae : Nr);
    }
  }, [v, g]), G = St(async (xe) => {
    if (C(v, g)) {
      if (xe === v.name)
        return;
      await B();
    }
    const Ae = a.find((E) => E.name === xe);
    if (!Ae) {
      const E = a.map((k) => k.name);
      throw new Lt(`select failed: wallet ${xe} is not available, all wallets are listed here: [${E.join(", ")}]`);
    }
    await X(Ae.adapter);
  }, [v, g, a]), q = St((xe, Ae) => {
    P(v, g);
    const k = v.on("change", (J) => {
      var Ne, Oe;
      if (xe === "change") {
        Ae(J);
        return;
      }
      if (J.chains && xe === "chainChange") {
        Ae({
          chain: (Ne = J.chains) == null ? void 0 : Ne[0]
        });
        return;
      }
      if (J.accounts && xe === "accountChange") {
        Ae({
          account: (Oe = J.accounts) == null ? void 0 : Oe[0]
        });
        return;
      }
      if (J.features && xe === "featureChange") {
        Ae({
          features: J.features
        });
        return;
      }
    });
    return S.current.push(k), k;
  }, [v, g]), Ce = St(() => (P(v, g), v.accounts), [v, g]), Pe = St(async (xe) => (P(v, g), await v.signAndExecuteTransaction(xe)), [v, g]), se = St(async (xe) => {
    if (P(v, g), !R)
      throw new Lt("no active account");
    return await v.signMessage({
      account: R,
      message: xe.message
    });
  }, [v, R, g]), me = St((xe) => (P(v, g), Pe({
    transaction: {
      kind: "moveCall",
      data: xe
    }
  })), [Pe, v, g]), tt = St(() => (P(v, g), Promise.resolve(R.publicKey)), [v, R, g]);
  return op(G, a, n), Ar(() => {
    if (g !== "connected")
      return;
    const xe = q("chainChange", (Ae) => {
      if (Ae.chain === _.id)
        return;
      const E = r.find((k) => k.id === Ae.chain);
      if (!E) {
        M(Nr);
        return;
      }
      M(E);
    });
    return () => {
      xe();
    };
  }, [g, _, r, q]), Ar(() => {
    e.supportedWallets && ua({
      name: "supportedWallets",
      message: "use defaultWallets to customize wallet list",
      migrationDoc: "https://kit.suiet.app/docs/migration/upgradeTo0.1.0"
    });
  }, []), /* @__PURE__ */ Y(Ho.Provider, {
    value: {
      name: v == null ? void 0 : v.name,
      chains: r,
      chain: _,
      allAvailableWallets: a,
      configuredWallets: s,
      detectedWallets: l,
      adapter: v,
      wallet: v,
      status: g,
      connecting: g === cr.CONNECTING,
      connected: g === cr.CONNECTED,
      select: G,
      disconnect: B,
      on: q,
      getAccounts: Ce,
      account: R,
      signAndExecuteTransaction: Pe,
      signMessage: se,
      address: R == null ? void 0 : R.address,
      supportedWallets: (Be = e.supportedWallets) != null ? Be : [],
      executeMoveCall: me,
      getPublicKey: tt
    },
    children: i
  });
};
function yp() {
  return ua({
    name: "getDefaultWallets",
    message: "If you want to customize wallet list, use defaultWallets instead",
    migrationDoc: "https://kit.suiet.app/docs/migration/upgradeTo0.1.0"
  }), [];
}
function vp() {
  return ua({
    name: "getAllWallets",
    message: "If you want to customize wallet list, use defaultWallets instead",
    migrationDoc: "https://kit.suiet.app/docs/migration/upgradeTo0.1.0"
  }), [];
}
export {
  d0 as AllDefaultWallets,
  hp as ConnectButton,
  n0 as ConnectModal,
  cr as ConnectionStatus,
  Yd as DefaultChains,
  l0 as EthosWallet,
  jn as PresetWallet,
  jd as SuiDevnetChain,
  Gd as SuiTestnetChain,
  f0 as SuiWallet,
  u0 as SuietWallet,
  Nr as UnknownChain,
  Ho as WalletContext,
  pp as WalletProvider,
  vp as getAllWallets,
  yp as getDefaultWallets,
  Kd as useAccountBalance,
  dp as useSuiProvider,
  Gn as useWallet
};
