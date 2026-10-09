import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, n, r } from "./framework-D_rUT4EX.js";
var i = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  a = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  o = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase()
    ),
  s = (e) => {
    let t = o(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  c = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  l = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  u = e(t(), 1),
  d = (0, u.createContext)({}),
  f = () => (0, u.useContext)(d),
  p = (0, u.forwardRef)(
    (
      {
        color: e,
        size: t,
        strokeWidth: n,
        absoluteStrokeWidth: r,
        className: a = ``,
        children: o,
        iconNode: s,
        ...d
      },
      p
    ) => {
      let {
          size: m = 24,
          strokeWidth: h = 2,
          absoluteStrokeWidth: g = !1,
          color: _ = `currentColor`,
          className: v = ``,
        } = f() ?? {},
        y = r ?? g ? (Number(n ?? h) * 24) / Number(t ?? m) : n ?? h;
      return (0, u.createElement)(
        `svg`,
        {
          ref: p,
          ...c,
          width: t ?? m ?? c.width,
          height: t ?? m ?? c.height,
          stroke: e ?? _,
          strokeWidth: y,
          className: i(`lucide`, v, a),
          ...(!o && !l(d) && { "aria-hidden": `true` }),
          ...d,
        },
        [
          ...s.map(([e, t]) => (0, u.createElement)(e, t)),
          ...(Array.isArray(o) ? o : [o]),
        ]
      );
    }
  ),
  m = (e, t) => {
    let n = (0, u.forwardRef)(({ className: n, ...r }, o) =>
      (0, u.createElement)(p, {
        ref: o,
        iconNode: t,
        className: i(`lucide-${a(s(e))}`, `lucide-${e}`, n),
        ...r,
      })
    );
    return (n.displayName = s(e)), n;
  },
  h = m(`play`, [
    [
      `path`,
      {
        d: `M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,
        key: `10ikf1`,
      },
    ],
  ]),
  g = m(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  _ = e(n(), 1);
function v(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = v(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function y() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = v(e)) && (r && (r += ` `), (r += t));
  return r;
}
var b = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  ee = y,
  te = (e, t) => (n) => {
    if (t?.variants == null) return ee(e, n?.class, n?.className);
    let { variants: r, defaultVariants: i } = t,
      a = Object.keys(r).map((e) => {
        let t = n?.[e],
          a = i?.[e];
        if (t === null) return null;
        let o = b(t) || b(a);
        return r[e][o];
      }),
      o =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return r === void 0 || (e[n] = r), e;
        }, {});
    return ee(
      e,
      a,
      t?.compoundVariants?.reduce((e, t) => {
        let { class: n, className: r, ...a } = t;
        return Object.entries(a).every((e) => {
          let [t, n] = e;
          return Array.isArray(n)
            ? n.includes({ ...i, ...o }[t])
            : { ...i, ...o }[t] === n;
        })
          ? [...e, n, r]
          : e;
      }, []),
      n?.class,
      n?.className
    );
  },
  x = Object.defineProperty,
  S = (e, t) => x(e, `name`, { value: t, configurable: !0 });
function C(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
S(C, `setRef`);
function ne(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = C(e, t);
        return !n && typeof r == `function` && (n = !0), r;
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : C(e[t], null);
        }
      };
  };
}
S(ne, `composeRefs`);
function w(...e) {
  return u.useCallback(ne(...e), e);
}
S(w, `useComposedRefs`);
var T = Object.defineProperty,
  E = (e, t) => T(e, `name`, { value: t, configurable: !0 });
function re(e) {
  let t = u.forwardRef((t, n) => {
    let { children: r, ...i } = t,
      a = null,
      o = !1,
      s = [];
    le(r) && typeof M == `function` && (r = M(r._payload)),
      u.Children.forEach(r, (e) => {
        if (se(e)) {
          o = !0;
          let t = e,
            n = `child` in t.props ? t.props.child : t.props.children;
          le(n) && typeof M == `function` && (n = M(n._payload)),
            (a = ae(t, n)),
            s.push(a?.props?.children);
        } else s.push(e);
      }),
      a
        ? (a = u.cloneElement(a, void 0, s))
        : !o && u.Children.count(r) === 1 && u.isValidElement(r) && (a = r);
    let c = a ? k(a) : void 0,
      l = w(n, c);
    if (!a) {
      if (r || r === 0) throw Error(o ? j(e) : A(e));
      return r;
    }
    let d = oe(i, a.props ?? {});
    return a.type !== u.Fragment && (d.ref = n ? l : c), u.cloneElement(a, d);
  });
  return (t.displayName = `${e}.Slot`), t;
}
E(re, `createSlot`);
var ie = re(`Slot`),
  D = Symbol.for(`radix.slottable`);
function O(e) {
  let t = E(
    (e) => (`child` in e ? e.children(e.child) : e.children),
    `Slottable`
  );
  return (t.displayName = `${e}.Slottable`), (t.__radixId = D), t;
}
E(O, `createSlottable`);
var ae = E((e, t) => {
  if (`child` in e.props) {
    let t = e.props.child;
    return u.isValidElement(t)
      ? u.cloneElement(t, void 0, e.props.children(t.props.children))
      : null;
  }
  return u.isValidElement(t) ? t : null;
}, `getSlottableElementFromSlottable`);
function oe(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return i(...e), t;
          })
        : i && (n[r] = i)
      : r === `style`
      ? (n[r] = { ...i, ...a })
      : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
E(oe, `mergeProps`);
function k(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
E(k, `getElementRef`);
function se(e) {
  return (
    u.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === D
  );
}
E(se, `isSlottable`);
var ce = Symbol.for(`react.lazy`);
function le(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `$$typeof` in e &&
    e.$$typeof === ce &&
    `_payload` in e &&
    ue(e._payload)
  );
}
E(le, `isLazyComponent`);
function ue(e) {
  return typeof e == `object` && !!e && `then` in e;
}
E(ue, `isPromiseLike`);
var A = E(
    (e) =>
      `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    `createSlotError`
  ),
  j = E(
    (e) =>
      `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    `createSlottableError`
  ),
  M = u.use,
  N = r(),
  P = Object.defineProperty,
  de = (e, t) => P(e, `name`, { value: t, configurable: !0 }),
  F = [
    `a`,
    `button`,
    `div`,
    `form`,
    `h2`,
    `h3`,
    `img`,
    `input`,
    `label`,
    `li`,
    `nav`,
    `ol`,
    `p`,
    `select`,
    `span`,
    `svg`,
    `ul`,
  ].reduce((e, t) => {
    let n = re(`Primitive.${t}`),
      r = u.forwardRef((e, r) => {
        let { asChild: i, ...a } = e,
          o = i ? n : t;
        return (
          (window[Symbol.for(`radix-ui`)] = !0), (0, N.jsx)(o, { ...a, ref: r })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function fe(e, t) {
  e && _.flushSync(() => e.dispatchEvent(t));
}
de(fe, `dispatchDiscreteCustomEvent`);
var pe = Object.defineProperty,
  I = (e, t) => pe(e, `name`, { value: t, configurable: !0 });
function me(e, t) {
  let n = u.createContext(t);
  n.displayName = e + `Context`;
  let r = I((e) => {
    let { children: t, ...r } = e,
      i = u.useMemo(() => r, Object.values(r));
    return (0, N.jsx)(n.Provider, { value: i, children: t });
  }, `Provider`);
  r.displayName = e + `Provider`;
  function i(r, i = {}) {
    let { optional: a = !1 } = i,
      o = u.useContext(n);
    if (o) return o;
    if (t !== void 0) return t;
    if (!a) throw Error(`\`${r}\` must be used within \`${e}\``);
  }
  return I(i, `useContext`), [r, i];
}
I(me, `createContext`);
function he(e, t = []) {
  let n = [];
  function r(t, r) {
    let i = u.createContext(r);
    i.displayName = t + `Context`;
    let a = n.length;
    n = [...n, r];
    let o = I((t) => {
      let { scope: n, children: r, ...o } = t,
        s = n?.[e]?.[a] || i,
        c = u.useMemo(() => o, Object.values(o));
      return (0, N.jsx)(s.Provider, { value: c, children: r });
    }, `Provider`);
    o.displayName = t + `Provider`;
    function s(n, o, s = {}) {
      let { optional: c = !1 } = s,
        l = o?.[e]?.[a] || i,
        d = u.useContext(l);
      if (d) return d;
      if (r !== void 0) return r;
      if (!c) throw Error(`\`${n}\` must be used within \`${t}\``);
    }
    return I(s, `useContext`), [o, s];
  }
  I(r, `createContext`);
  let i = I(() => {
    let t = n.map((e) => u.createContext(e));
    return I(function (n) {
      let r = n?.[e] || t;
      return u.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
    }, `useScope`);
  }, `createScope`);
  return (i.scopeName = e), [r, ge(i, ...t)];
}
I(he, `createContextScope`);
function ge(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let n = I(() => {
    let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return I(function (e) {
      let r = n.reduce((t, { useScope: n, scopeName: r }) => {
        let i = n(e)[`__scope${r}`];
        return { ...t, ...i };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
    }, `useComposedScopes`);
  }, `createScope`);
  return (n.scopeName = t.scopeName), n;
}
I(ge, `composeContextScopes`);
var _e = Object.defineProperty,
  ve = (e, t) => _e(e, `name`, { value: t, configurable: !0 }),
  ye = !!(window.document && window.document.createElement);
function L(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return ve(function (r) {
    if ((e?.(r), n === !1 || !r || !r.defaultPrevented)) return t?.(r);
  }, `handleEvent`);
}
ve(L, `composeEventHandlers`);
function be(e) {
  if (!ye) throw Error(`Cannot access window outside of the DOM`);
  return e?.ownerDocument?.defaultView ?? window;
}
ve(be, `getOwnerWindow`);
function xe(e) {
  if (!ye) throw Error(`Cannot access document outside of the DOM`);
  return e?.ownerDocument ?? document;
}
ve(xe, `getOwnerDocument`);
function Se(e, t = !1) {
  let { activeElement: n } = xe(e);
  if (!n?.nodeName) return null;
  if (Ce(n) && n.contentDocument) return Se(n.contentDocument.body, t);
  if (t) {
    let e = n.getAttribute(`aria-activedescendant`);
    if (e) {
      let t = xe(n).getElementById(e);
      if (t) return t;
    }
  }
  return n;
}
ve(Se, `getActiveElement`);
function Ce(e) {
  return e.tagName === `IFRAME`;
}
ve(Ce, `isFrame`);
var R = globalThis?.document ? u.useLayoutEffect : () => {},
  we = Object.defineProperty,
  Te = (e, t) => we(e, `name`, { value: t, configurable: !0 }),
  Ee = u.useEffectEvent,
  De = u.useInsertionEffect;
function Oe(e) {
  if (typeof Ee == `function`) return Ee(e);
  let t = u.useRef(() => {
    throw Error(`Cannot call an event handler while rendering.`);
  });
  return (
    typeof De == `function`
      ? De(() => {
          t.current = e;
        })
      : R(() => {
          t.current = e;
        }),
    u.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      []
    )
  );
}
Te(Oe, `useEffectEvent`);
var ke = Object.defineProperty,
  Ae = (e, t) => ke(e, `name`, { value: t, configurable: !0 }),
  je = u.useInsertionEffect || R;
function Me({
  prop: e,
  defaultProp: t,
  onChange: n = Ae(() => {}, `onChange`),
  caller: r,
}) {
  let [i, a, o] = Ne({ defaultProp: t, onChange: n }),
    s = e !== void 0;
  return [
    s ? e : i,
    u.useCallback(
      (t) => {
        if (s) {
          let n = Pe(t) ? t(e) : t;
          n !== e && o.current?.(n);
        } else a(t);
      },
      [s, e, a, o]
    ),
  ];
}
Ae(Me, `useControllableState`);
function Ne({ defaultProp: e, onChange: t }) {
  let [n, r] = u.useState(e),
    i = u.useRef(n),
    a = u.useRef(t);
  return (
    je(() => {
      a.current = t;
    }, [t]),
    u.useEffect(() => {
      i.current !== n && (a.current?.(n), (i.current = n));
    }, [n, i]),
    [n, r, a]
  );
}
Ae(Ne, `useUncontrolledState`);
function Pe(e) {
  return typeof e == `function`;
}
Ae(Pe, `isFunction`);
var Fe = Symbol(`RADIX:SYNC_STATE`);
function Ie(e, t, n, r) {
  let { prop: i, defaultProp: a, onChange: o, caller: s } = t,
    c = i !== void 0,
    l = Oe(o),
    d = [{ ...n, state: a }];
  r && d.push(r);
  let [f, p] = u.useReducer((t, n) => {
      if (n.type === Fe) return { ...t, state: n.state };
      let r = e(t, n);
      return c && !Object.is(r.state, t.state) && l(r.state), r;
    }, ...d),
    m = f.state,
    h = u.useRef(m);
  u.useEffect(() => {
    h.current !== m && ((h.current = m), c || l(m));
  }, [m, h, c]);
  let g = u.useMemo(() => (i === void 0 ? f : { ...f, state: i }), [f, i]);
  return (
    u.useEffect(() => {
      c && !Object.is(i, f.state) && p({ type: Fe, state: i });
    }, [i, f.state, c]),
    [g, p]
  );
}
Ae(Ie, `useControllableStateReducer`);
var Le = Object.defineProperty,
  z = (e, t) => Le(e, `name`, { value: t, configurable: !0 });
function Re(e, t) {
  return u.useReducer((e, n) => t[e][n] ?? e, e);
}
z(Re, `useStateMachine`);
var ze = z((e) => {
  let { present: t, children: n } = e,
    r = Be(t),
    i =
      typeof n == `function` ? n({ present: r.isPresent }) : u.Children.only(n),
    a = He(r.ref, We(i));
  return typeof n == `function` || r.isPresent
    ? u.cloneElement(i, { ref: a })
    : null;
}, `Presence`);
function Be(e) {
  let [t, n] = u.useState(),
    r = u.useRef(null),
    i = u.useRef(e),
    a = u.useRef(`none`),
    o = u.useRef(void 0),
    [s, c] = Re(e ? `mounted` : `unmounted`, {
      mounted: { UNMOUNT: `unmounted`, ANIMATION_OUT: `unmountSuspended` },
      unmountSuspended: { MOUNT: `mounted`, ANIMATION_END: `unmounted` },
      unmounted: { MOUNT: `mounted` },
    });
  return (
    u.useEffect(() => {
      s === `mounted`
        ? ((a.current = o.current ?? Ue(r.current)), (o.current = void 0))
        : (a.current = `none`);
    }, [s]),
    R(() => {
      let t = r.current,
        n = i.current;
      if (n !== e) {
        let r = a.current,
          s = Ue(t);
        e
          ? ((o.current = s), c(`MOUNT`))
          : s === `none` || t?.display === `none`
          ? c(`UNMOUNT`)
          : c(n && r !== s ? `ANIMATION_OUT` : `UNMOUNT`),
          (i.current = e);
      }
    }, [e, c]),
    R(() => {
      if (t) {
        let e,
          n = t.ownerDocument.defaultView ?? window,
          o = z((a) => {
            let o = Ue(r.current).includes(CSS.escape(a.animationName));
            if (a.target === t && o && (c(`ANIMATION_END`), !i.current)) {
              let r = t.style.animationFillMode;
              (t.style.animationFillMode = `forwards`),
                (e = n.setTimeout(() => {
                  t.style.animationFillMode === `forwards` &&
                    (t.style.animationFillMode = r);
                }));
            }
          }, `handleAnimationEnd`),
          s = z((e) => {
            e.target === t && (a.current = Ue(r.current));
          }, `handleAnimationStart`);
        return (
          t.addEventListener(`animationstart`, s),
          t.addEventListener(`animationcancel`, o),
          t.addEventListener(`animationend`, o),
          () => {
            n.clearTimeout(e),
              t.removeEventListener(`animationstart`, s),
              t.removeEventListener(`animationcancel`, o),
              t.removeEventListener(`animationend`, o);
          }
        );
      } else c(`ANIMATION_END`);
    }, [t, c]),
    {
      isPresent: [`mounted`, `unmountSuspended`].includes(s),
      ref: u.useCallback((e) => {
        if (e) {
          let t = getComputedStyle(e);
          (r.current = t), (o.current = Ue(t));
        } else r.current = null;
        n(e);
      }, []),
    }
  );
}
z(Be, `usePresence`);
function Ve(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
z(Ve, `setRef`);
function He(...e) {
  let t = u.useRef(e);
  return (
    (t.current = e),
    u.useCallback((e) => {
      let n = t.current,
        r = !1,
        i = n.map((t) => {
          let n = Ve(t, e);
          return !r && typeof n == `function` && (r = !0), n;
        });
      if (r)
        return () => {
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            typeof t == `function` ? t() : Ve(n[e], null);
          }
        };
    }, [])
  );
}
z(He, `useStableComposedRefs`);
function Ue(e) {
  return e?.animationName || `none`;
}
z(Ue, `getAnimationName`);
function We(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
z(We, `getElementRef`);
var Ge = Object.defineProperty,
  Ke = (e, t) => Ge(e, `name`, { value: t, configurable: !0 }),
  qe = u.useId || (() => void 0),
  Je = 0;
function Ye(e) {
  let [t, n] = u.useState(qe());
  return (
    R(() => {
      e || n((e) => e ?? String(Je++));
    }, [e]),
    e || (t ? `radix-${t}` : ``)
  );
}
Ke(Ye, `useId`);
var Xe = Object.defineProperty,
  Ze = (e, t) => Xe(e, `name`, { value: t, configurable: !0 });
function Qe(e) {
  let t = u.useRef(e);
  return (
    u.useEffect(() => {
      t.current = e;
    }),
    u.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      []
    )
  );
}
Ze(Qe, `useCallbackRef`);
var $e = Object.defineProperty,
  B = (e, t) => $e(e, `name`, { value: t, configurable: !0 }),
  et = `dismissableLayer.update`,
  tt = `dismissableLayer.pointerDownOutside`,
  nt = `dismissableLayer.focusOutside`,
  rt,
  it = u.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
    dismissableSurfaces: new Set(),
  }),
  at = u.forwardRef(
    B(function (e, t) {
      let {
          disableOutsidePointerEvents: n = !1,
          deferPointerDownOutside: r = !1,
          onEscapeKeyDown: i,
          onPointerDownOutside: a,
          onFocusOutside: o,
          onInteractOutside: s,
          onDismiss: c,
          ...l
        } = e,
        d = u.useContext(it),
        [f, p] = u.useState(null),
        m = f?.ownerDocument ?? globalThis?.document,
        [, h] = u.useState({}),
        g = w(t, p),
        _ = Array.from(d.layers),
        [v] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1),
        y = v ? _.indexOf(v) : -1,
        b = f ? _.indexOf(f) : -1,
        ee = d.layersWithOutsidePointerEventsDisabled.size > 0,
        te = b >= y,
        x = u.useRef(!1),
        S = ct(
          (e) => {
            a?.(e), s?.(e), e.defaultPrevented || c?.();
          },
          {
            ownerDocument: m,
            deferPointerDownOutside: r,
            isDeferredPointerDownOutsideRef: x,
            dismissableSurfaces: d.dismissableSurfaces,
            shouldHandlePointerDownOutside: u.useCallback(
              (e) => {
                if (!(e instanceof Node)) return !1;
                let t = [...d.branches].some((t) => t.contains(e));
                return te && !t;
              },
              [d.branches, te]
            ),
          }
        ),
        C = lt((e) => {
          if (r && x.current) return;
          let t = e.target;
          [...d.branches].some((e) => e.contains(t)) ||
            (o?.(e), s?.(e), e.defaultPrevented || c?.());
        }, m),
        ne = f ? b === _.length - 1 : !1,
        T = Qe((e) => {
          e.key === `Escape` &&
            (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
        });
      return (
        u.useEffect(() => {
          if (ne)
            return (
              m.addEventListener(`keydown`, T, { capture: !0 }),
              () => m.removeEventListener(`keydown`, T, { capture: !0 })
            );
        }, [m, ne, T]),
        u.useEffect(() => {
          if (f)
            return (
              n &&
                (d.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((rt = m.body.style.pointerEvents),
                  (m.body.style.pointerEvents = `none`)),
                d.layersWithOutsidePointerEventsDisabled.add(f)),
              d.layers.add(f),
              ut(),
              () => {
                n &&
                  (d.layersWithOutsidePointerEventsDisabled.delete(f),
                  d.layersWithOutsidePointerEventsDisabled.size === 0 &&
                    (m.body.style.pointerEvents = rt));
              }
            );
        }, [f, m, n, d]),
        u.useEffect(
          () => () => {
            f &&
              (d.layers.delete(f),
              d.layersWithOutsidePointerEventsDisabled.delete(f),
              ut());
          },
          [f, d]
        ),
        u.useEffect(() => {
          let e = B(() => h({}), `handleUpdate`);
          return (
            document.addEventListener(et, e),
            () => document.removeEventListener(et, e)
          );
        }, []),
        (0, N.jsx)(F.div, {
          ...l,
          ref: g,
          style: {
            pointerEvents: ee ? (te ? `auto` : `none`) : void 0,
            ...e.style,
          },
          onFocusCapture: L(e.onFocusCapture, C.onFocusCapture),
          onBlurCapture: L(e.onBlurCapture, C.onBlurCapture),
          onPointerDownCapture: L(
            e.onPointerDownCapture,
            S.onPointerDownCapture
          ),
        })
      );
    }, `DismissableLayer`)
  );
function ot() {
  let e = u.useContext(it),
    [t, n] = u.useState(null);
  return (
    u.useEffect(() => {
      if (t)
        return (
          e.dismissableSurfaces.add(t),
          () => {
            e.dismissableSurfaces.delete(t);
          }
        );
    }, [t, e.dismissableSurfaces]),
    n
  );
}
B(ot, `useDismissableLayerSurface`);
var st = B(() => !0, `IS_TRUE`);
function ct(e, t) {
  let {
      ownerDocument: n = globalThis?.document,
      deferPointerDownOutside: r = !1,
      isDeferredPointerDownOutsideRef: i,
      dismissableSurfaces: a,
      shouldHandlePointerDownOutside: o = st,
    } = t,
    s = Qe(e),
    c = u.useRef(!1),
    l = u.useRef(!1),
    d = u.useRef(new Map()),
    f = u.useRef(() => {});
  return (
    u.useEffect(() => {
      function e() {
        (l.current = !1), (i.current = !1), d.current.clear();
      }
      B(e, `resetOutsideInteraction`);
      function t() {
        return Array.from(d.current.values()).some(Boolean);
      }
      B(t, `isOutsideInteractionIntercepted`);
      function u(e) {
        if (!l.current) return;
        let t = e.target;
        (t instanceof Node && [...a].some((e) => e.contains(t))) ||
          d.current.set(e.type, !0),
          e.type === `click` &&
            window.setTimeout(() => {
              l.current && f.current();
            }, 0);
      }
      B(u, `handleInteractionCapture`);
      function p(e) {
        l.current && d.current.set(e.type, !1);
      }
      B(p, `handleInteractionBubble`);
      let m = B((a) => {
          if (a.target && !c.current) {
            let u = function () {
              n.removeEventListener(`click`, f.current);
              let r = t();
              e(), r || dt(tt, s, p, { discrete: !0 });
            };
            if (
              (B(u, `handleAndDispatchPointerDownOutsideEvent`), !o(a.target))
            ) {
              n.removeEventListener(`click`, f.current), e(), (c.current = !1);
              return;
            }
            let p = { originalEvent: a };
            (l.current = !0),
              (i.current = r && a.button === 0),
              d.current.clear(),
              !r || a.button !== 0
                ? u()
                : (n.removeEventListener(`click`, f.current),
                  (f.current = u),
                  n.addEventListener(`click`, f.current, { once: !0 }));
          } else n.removeEventListener(`click`, f.current), e();
          c.current = !1;
        }, `handlePointerDown`),
        h = [
          `pointerup`,
          `mousedown`,
          `mouseup`,
          `touchstart`,
          `touchend`,
          `click`,
        ];
      for (let e of h) n.addEventListener(e, u, !0), n.addEventListener(e, p);
      let g = window.setTimeout(() => {
        n.addEventListener(`pointerdown`, m);
      }, 0);
      return () => {
        window.clearTimeout(g),
          n.removeEventListener(`pointerdown`, m),
          n.removeEventListener(`click`, f.current);
        for (let e of h)
          n.removeEventListener(e, u, !0), n.removeEventListener(e, p);
      };
    }, [n, s, r, i, a, o]),
    { onPointerDownCapture: B(() => (c.current = !0), `onPointerDownCapture`) }
  );
}
B(ct, `usePointerDownOutside`);
function lt(e, t = globalThis?.document) {
  let n = Qe(e),
    r = u.useRef(!1);
  return (
    u.useEffect(() => {
      let e = B((e) => {
        e.target &&
          !r.current &&
          dt(nt, n, { originalEvent: e }, { discrete: !1 });
      }, `handleFocus`);
      return (
        t.addEventListener(`focusin`, e),
        () => t.removeEventListener(`focusin`, e)
      );
    }, [t, n]),
    {
      onFocusCapture: B(() => (r.current = !0), `onFocusCapture`),
      onBlurCapture: B(() => (r.current = !1), `onBlurCapture`),
    }
  );
}
B(lt, `useFocusOutside`);
function ut() {
  let e = new CustomEvent(et);
  document.dispatchEvent(e);
}
B(ut, `dispatchUpdate`);
function dt(e, t, n, { discrete: r }) {
  let i = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }),
    r ? fe(i, a) : i.dispatchEvent(a);
}
B(dt, `handleAndDispatchCustomEvent`);
var ft = Object.defineProperty,
  V = (e, t) => ft(e, `name`, { value: t, configurable: !0 }),
  pt = `focusScope.autoFocusOnMount`,
  mt = `focusScope.autoFocusOnUnmount`,
  ht = { bubbles: !1, cancelable: !0 },
  gt = u.forwardRef(
    V(function (e, t) {
      let {
          loop: n = !1,
          trapped: r = !1,
          onMountAutoFocus: i,
          onUnmountAutoFocus: a,
          ...o
        } = e,
        [s, c] = u.useState(null),
        l = Qe(i),
        d = Qe(a),
        f = u.useRef(null),
        p = w(t, c),
        m = u.useRef({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          },
        }).current;
      u.useEffect(() => {
        if (r) {
          let e = function (e) {
              if (m.paused || !s) return;
              let t = e.target;
              s.contains(t) ? (f.current = t) : H(f.current, { select: !0 });
            },
            t = function (e) {
              if (m.paused || !s) return;
              let t = e.relatedTarget;
              t !== null && (s.contains(t) || H(f.current, { select: !0 }));
            },
            n = function (e) {
              if (document.activeElement === document.body)
                for (let t of e) t.removedNodes.length > 0 && H(s);
            };
          V(e, `handleFocusIn`),
            V(t, `handleFocusOut`),
            V(n, `handleMutations`),
            document.addEventListener(`focusin`, e),
            document.addEventListener(`focusout`, t);
          let r = new MutationObserver(n);
          return (
            s && r.observe(s, { childList: !0, subtree: !0 }),
            () => {
              document.removeEventListener(`focusin`, e),
                document.removeEventListener(`focusout`, t),
                r.disconnect();
            }
          );
        }
      }, [r, s, m.paused]),
        u.useEffect(() => {
          if (s) {
            Ct.add(m);
            let e = document.activeElement;
            if (!s.contains(e)) {
              let t = new CustomEvent(pt, ht);
              s.addEventListener(pt, l),
                s.dispatchEvent(t),
                t.defaultPrevented ||
                  (_t(Et(yt(s)), { select: !0 }),
                  document.activeElement === e && H(s));
            }
            return () => {
              s.removeEventListener(pt, l),
                setTimeout(() => {
                  let t = new CustomEvent(mt, ht);
                  s.addEventListener(mt, d),
                    s.dispatchEvent(t),
                    t.defaultPrevented || H(e ?? document.body, { select: !0 }),
                    s.removeEventListener(mt, d),
                    Ct.remove(m);
                }, 0);
            };
          }
        }, [s, l, d, m]);
      let h = u.useCallback(
        (e) => {
          if ((!n && !r) || m.paused) return;
          let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey,
            i = document.activeElement;
          if (t && i) {
            let t = e.currentTarget,
              [r, a] = vt(t);
            r && a
              ? !e.shiftKey && i === a
                ? (e.preventDefault(), n && H(r, { select: !0 }))
                : e.shiftKey &&
                  i === r &&
                  (e.preventDefault(), n && H(a, { select: !0 }))
              : i === t && e.preventDefault();
          }
        },
        [n, r, m.paused]
      );
      return (0, N.jsx)(F.div, { tabIndex: -1, ...o, ref: p, onKeyDown: h });
    }, `FocusScope`)
  );
function _t(e, { select: t = !1 } = {}) {
  let n = document.activeElement;
  for (let r of e)
    if ((H(r, { select: t }), document.activeElement !== n)) return;
}
V(_t, `focusFirst`);
function vt(e) {
  let t = yt(e);
  return [bt(t, e), bt(t.reverse(), e)];
}
V(vt, `getTabbableEdges`);
function yt(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: V((e) => {
        let t = e.tagName === `INPUT` && e.type === `hidden`;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      }, `acceptNode`),
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
V(yt, `getTabbableCandidates`);
function bt(e, t) {
  let n =
    typeof t.checkVisibility == `function` &&
    t.checkVisibility({ checkVisibilityCSS: !0 });
  for (let r of e)
    if (
      !(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : xt(r, { upTo: t }))
    )
      return r;
}
V(bt, `findVisible`);
function xt(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === `hidden`) return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === `none`) return !0;
    e = e.parentElement;
  }
  return !1;
}
V(xt, `isHidden`);
function St(e) {
  return e instanceof HTMLInputElement && `select` in e;
}
V(St, `isSelectableInput`);
function H(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    let n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && St(e) && t && e.select();
  }
}
V(H, `focus`);
var Ct = wt();
function wt() {
  let e = [];
  return {
    add(t) {
      let n = e[0];
      t !== n && n?.pause(), (e = Tt(e, t)), e.unshift(t);
    },
    remove(t) {
      (e = Tt(e, t)), e[0]?.resume();
    },
  };
}
V(wt, `createFocusScopesStack`);
function Tt(e, t) {
  let n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
V(Tt, `arrayRemove`);
function Et(e) {
  return e.filter((e) => e.tagName !== `A`);
}
V(Et, `removeLinks`);
var Dt = Object.defineProperty,
  Ot = u.forwardRef(
    ((e, t) => Dt(e, `name`, { value: t, configurable: !0 }))(function (e, t) {
      let { container: n, ...r } = e,
        [i, a] = u.useState(!1);
      R(() => a(!0), []);
      let o = n || (i && globalThis?.document?.body);
      return o ? _.createPortal((0, N.jsx)(F.div, { ...r, ref: t }), o) : null;
    }, `Portal`)
  ),
  kt = Object.defineProperty,
  At = (e, t) => kt(e, `name`, { value: t, configurable: !0 }),
  jt = 0,
  Mt = null;
function Nt(e) {
  return Pt(), e.children;
}
At(Nt, `FocusGuards`);
function Pt() {
  u.useEffect(() => {
    Mt ||= { start: Ft(), end: Ft() };
    let { start: e, end: t } = Mt;
    return (
      document.body.firstElementChild !== e &&
        document.body.insertAdjacentElement(`afterbegin`, e),
      document.body.lastElementChild !== t &&
        document.body.insertAdjacentElement(`beforeend`, t),
      jt++,
      () => {
        jt === 1 && (Mt?.start.remove(), Mt?.end.remove(), (Mt = null)),
          (jt = Math.max(0, jt - 1));
      }
    );
  }, []);
}
At(Pt, `useFocusGuards`);
function Ft() {
  let e = document.createElement(`span`);
  return (
    e.setAttribute(`data-radix-focus-guard`, ``),
    (e.tabIndex = 0),
    (e.style.outline = `none`),
    (e.style.opacity = `0`),
    (e.style.position = `fixed`),
    (e.style.pointerEvents = `none`),
    e
  );
}
At(Ft, `createFocusGuard`);
var U = function () {
  return (
    (U =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in ((t = arguments[n]), t))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }),
    U.apply(this, arguments)
  );
};
function It(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function Lt(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) &&
        ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var Rt = `right-scroll-bar-position`,
  zt = `width-before-scroll-bar`,
  Bt = `with-scroll-bars-hidden`,
  Vt = `--removed-body-scroll-bar-size`;
function Ht(e, t) {
  return typeof e == `function` ? e(t) : e && (e.current = t), e;
}
function Ut(e, t) {
  var n = (0, u.useState)(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(e) {
          var t = n.value;
          t !== e && ((n.value = e), n.callback(e, t));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var Wt = u.useLayoutEffect,
  Gt = new WeakMap();
function Kt(e, t) {
  var n = Ut(t || null, function (t) {
    return e.forEach(function (e) {
      return Ht(e, t);
    });
  });
  return (
    Wt(
      function () {
        var t = Gt.get(n);
        if (t) {
          var r = new Set(t),
            i = new Set(e),
            a = n.current;
          r.forEach(function (e) {
            i.has(e) || Ht(e, null);
          }),
            i.forEach(function (e) {
              r.has(e) || Ht(e, a);
            });
        }
        Gt.set(n, e);
      },
      [e]
    ),
    n
  );
}
function qt(e) {
  return e;
}
function Jt(e, t) {
  t === void 0 && (t = qt);
  var n = [],
    r = !1;
  return {
    read: function () {
      if (r)
        throw Error(
          "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
        );
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function (e) {
      var i = t(e, r);
      return (
        n.push(i),
        function () {
          n = n.filter(function (e) {
            return e !== i;
          });
        }
      );
    },
    assignSyncMedium: function (e) {
      for (r = !0; n.length; ) {
        var t = n;
        (n = []), t.forEach(e);
      }
      n = {
        push: function (t) {
          return e(t);
        },
        filter: function () {
          return n;
        },
      };
    },
    assignMedium: function (e) {
      r = !0;
      var t = [];
      if (n.length) {
        var i = n;
        (n = []), i.forEach(e), (t = n);
      }
      var a = function () {
          var n = t;
          (t = []), n.forEach(e);
        },
        o = function () {
          return Promise.resolve().then(a);
        };
      o(),
        (n = {
          push: function (e) {
            t.push(e), o();
          },
          filter: function (e) {
            return (t = t.filter(e)), n;
          },
        });
    },
  };
}
function Yt(e) {
  e === void 0 && (e = {});
  var t = Jt(null);
  return (t.options = U({ async: !0, ssr: !1 }, e)), t;
}
var Xt = function (e) {
  var t = e.sideCar,
    n = It(e, [`sideCar`]);
  if (!t)
    throw Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw Error(`Sidecar medium not found`);
  return u.createElement(r, U({}, n));
};
Xt.isSideCarExport = !0;
function Zt(e, t) {
  return e.useMedium(t), Xt;
}
var Qt = Yt(),
  $t = function () {},
  en = u.forwardRef(function (e, t) {
    var n = u.useRef(null),
      r = u.useState({
        onScrollCapture: $t,
        onWheelCapture: $t,
        onTouchMoveCapture: $t,
      }),
      i = r[0],
      a = r[1],
      o = e.forwardProps,
      s = e.children,
      c = e.className,
      l = e.removeScrollBar,
      d = e.enabled,
      f = e.shards,
      p = e.sideCar,
      m = e.noRelative,
      h = e.noIsolation,
      g = e.inert,
      _ = e.allowPinchZoom,
      v = e.as,
      y = v === void 0 ? `div` : v,
      b = e.gapMode,
      ee = It(e, [
        `forwardProps`,
        `children`,
        `className`,
        `removeScrollBar`,
        `enabled`,
        `shards`,
        `sideCar`,
        `noRelative`,
        `noIsolation`,
        `inert`,
        `allowPinchZoom`,
        `as`,
        `gapMode`,
      ]),
      te = p,
      x = Kt([n, t]),
      S = U(U({}, ee), i);
    return u.createElement(
      u.Fragment,
      null,
      d &&
        u.createElement(te, {
          sideCar: Qt,
          removeScrollBar: l,
          shards: f,
          noRelative: m,
          noIsolation: h,
          inert: g,
          setCallbacks: a,
          allowPinchZoom: !!_,
          lockRef: n,
          gapMode: b,
        }),
      o
        ? u.cloneElement(u.Children.only(s), U(U({}, S), { ref: x }))
        : u.createElement(y, U({}, S, { className: c, ref: x }), s)
    );
  });
(en.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
  (en.classNames = { fullWidth: zt, zeroRight: Rt });
var tn,
  nn = function () {
    if (tn) return tn;
    if (typeof __webpack_nonce__ < `u`) return __webpack_nonce__;
  };
function rn() {
  if (!document) return null;
  var e = document.createElement(`style`);
  e.type = `text/css`;
  var t = nn();
  return t && e.setAttribute(`nonce`, t), e;
}
function an(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function on(e) {
  (document.head || document.getElementsByTagName(`head`)[0]).appendChild(e);
}
var sn = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = rn()) && (an(t, n), on(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  cn = function () {
    var e = sn();
    return function (t, n) {
      u.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  ln = function () {
    var e = cn();
    return function (t) {
      var n = t.styles,
        r = t.dynamic;
      return e(n, r), null;
    };
  },
  un = function (e) {
    return parseInt(e || ``, 10) || 0;
  },
  dn = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === `padding` ? `paddingLeft` : `marginLeft`],
      r = t[e === `padding` ? `paddingTop` : `marginTop`],
      i = t[e === `padding` ? `paddingRight` : `marginRight`];
    return [un(n), un(r), un(i)];
  },
  fn = function (e) {
    e === void 0 && (e = `margin`);
    var t = dn(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  pn = ln(),
  mn = `data-scroll-locked`,
  hn = function (e, t, n, r) {
    var i = e.left,
      a = e.top,
      o = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = `margin`),
      `
  .${Bt} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${mn}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
      t && `position: relative ${r};`,
      n === `margin` &&
        `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
      n === `padding` && `padding-right: ${s}px ${r};`,
    ]
      .filter(Boolean)
      .join(``)}
  }
  
  .${Rt} {
    right: ${s}px ${r};
  }
  
  .${zt} {
    margin-right: ${s}px ${r};
  }
  
  .${Rt} .${Rt} {
    right: 0 ${r};
  }
  
  .${zt} .${zt} {
    margin-right: 0 ${r};
  }
  
  body[${mn}] {
    ${Vt}: ${s}px;
  }
`
    );
  },
  gn = function () {
    var e = parseInt(
      document.body.getAttribute(`data-scroll-locked`) || `0`,
      10
    );
    return isFinite(e) ? e : 0;
  },
  _n = function () {
    u.useEffect(function () {
      return (
        document.body.setAttribute(mn, (gn() + 1).toString()),
        function () {
          var e = gn() - 1;
          e <= 0
            ? document.body.removeAttribute(mn)
            : document.body.setAttribute(mn, e.toString());
        }
      );
    }, []);
  },
  vn = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      i = r === void 0 ? `margin` : r;
    _n();
    var a = u.useMemo(
      function () {
        return fn(i);
      },
      [i]
    );
    return u.createElement(pn, { styles: hn(a, !t, i, n ? `` : `!important`) });
  },
  yn = !1;
try {
  var bn = Object.defineProperty({}, `passive`, {
    get: function () {
      return (yn = !0), !0;
    },
  });
  window.addEventListener(`test`, bn, bn),
    window.removeEventListener(`test`, bn, bn);
} catch {
  yn = !1;
}
var xn = yn ? { passive: !1 } : !1,
  Sn = function (e) {
    return e.tagName === `TEXTAREA`;
  },
  Cn = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== `hidden` &&
      !(n.overflowY === n.overflowX && !Sn(e) && n[t] === `visible`)
    );
  },
  wn = function (e) {
    return Cn(e, `overflowY`);
  },
  Tn = function (e) {
    return Cn(e, `overflowX`);
  },
  En = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      if (
        (typeof ShadowRoot < `u` && r instanceof ShadowRoot && (r = r.host),
        kn(e, r))
      ) {
        var i = An(e, r);
        if (i[1] > i[2]) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Dn = function (e) {
    return [e.scrollTop, e.scrollHeight, e.clientHeight];
  },
  On = function (e) {
    return [e.scrollLeft, e.scrollWidth, e.clientWidth];
  },
  kn = function (e, t) {
    return e === `v` ? wn(t) : Tn(t);
  },
  An = function (e, t) {
    return e === `v` ? Dn(t) : On(t);
  },
  jn = function (e, t) {
    return e === `h` && t === `rtl` ? -1 : 1;
  },
  Mn = function (e, t, n, r, i) {
    var a = jn(e, window.getComputedStyle(t).direction),
      o = a * r,
      s = n.target,
      c = t.contains(s),
      l = !1,
      u = o > 0,
      d = 0,
      f = 0;
    do {
      if (!s) break;
      var p = An(e, s),
        m = p[0],
        h = p[1] - p[2] - a * m;
      (m || h) && kn(e, s) && ((d += h), (f += m));
      var g = s.parentNode;
      s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
    } while ((!c && s !== document.body) || (c && (t.contains(s) || t === s)));
    return (
      ((u && ((i && Math.abs(d) < 1) || (!i && o > d))) ||
        (!u && ((i && Math.abs(f) < 1) || (!i && -o > f)))) &&
        (l = !0),
      l
    );
  },
  Nn = function (e) {
    return `changedTouches` in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Pn = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Fn = function (e) {
    return e && `current` in e ? e.current : e;
  },
  In = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Ln = function (e) {
    return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
  },
  Rn = 0,
  zn = [];
function Bn(e) {
  var t = u.useRef([]),
    n = u.useRef([0, 0]),
    r = u.useRef(),
    i = u.useState(Rn++)[0],
    a = u.useState(ln)[0],
    o = u.useRef(e);
  u.useEffect(
    function () {
      o.current = e;
    },
    [e]
  ),
    u.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add(`block-interactivity-${i}`);
          var t = Lt([e.lockRef.current], (e.shards || []).map(Fn), !0).filter(
            Boolean
          );
          return (
            t.forEach(function (e) {
              return e.classList.add(`allow-interactivity-${i}`);
            }),
            function () {
              document.body.classList.remove(`block-interactivity-${i}`),
                t.forEach(function (e) {
                  return e.classList.remove(`allow-interactivity-${i}`);
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var s = u.useCallback(function (e, t) {
      if (
        (`touches` in e && e.touches.length === 2) ||
        (e.type === `wheel` && e.ctrlKey)
      )
        return !o.current.allowPinchZoom;
      var i = Nn(e),
        a = n.current,
        s = `deltaX` in e ? e.deltaX : a[0] - i[0],
        c = `deltaY` in e ? e.deltaY : a[1] - i[1],
        l,
        u = e.target,
        d = Math.abs(s) > Math.abs(c) ? `h` : `v`;
      if (`touches` in e && d === `h` && u.type === `range`) return !1;
      var f = window.getSelection(),
        p = f && f.anchorNode;
      if (p && (p === u || p.contains(u))) return !1;
      var m = En(d, u);
      if (!m) return !0;
      if ((m ? (l = d) : ((l = d === `v` ? `h` : `v`), (m = En(d, u))), !m))
        return !1;
      if (
        (!r.current && `changedTouches` in e && (s || c) && (r.current = l), !l)
      )
        return !0;
      var h = r.current || l;
      return Mn(h, t, e, h === `h` ? s : c, !0);
    }, []),
    c = u.useCallback(function (e) {
      var n = e;
      if (!(!zn.length || zn[zn.length - 1] !== a)) {
        var r = `deltaY` in n ? Pn(n) : Nn(n),
          i = t.current.filter(function (e) {
            return (
              e.name === n.type &&
              (e.target === n.target || n.target === e.shadowParent) &&
              In(e.delta, r)
            );
          })[0];
        if (i && i.should) {
          n.cancelable && n.preventDefault();
          return;
        }
        if (!i) {
          var c = (o.current.shards || [])
            .map(Fn)
            .filter(Boolean)
            .filter(function (e) {
              return e.contains(n.target);
            });
          (c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) &&
            n.cancelable &&
            n.preventDefault();
        }
      }
    }, []),
    l = u.useCallback(function (e, n, r, i) {
      var a = { name: e, delta: n, target: r, should: i, shadowParent: Vn(r) };
      t.current.push(a),
        setTimeout(function () {
          t.current = t.current.filter(function (e) {
            return e !== a;
          });
        }, 1);
    }, []),
    d = u.useCallback(function (e) {
      (n.current = Nn(e)), (r.current = void 0);
    }, []),
    f = u.useCallback(function (t) {
      l(t.type, Pn(t), t.target, s(t, e.lockRef.current));
    }, []),
    p = u.useCallback(function (t) {
      l(t.type, Nn(t), t.target, s(t, e.lockRef.current));
    }, []);
  u.useEffect(function () {
    return (
      zn.push(a),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: p,
      }),
      document.addEventListener(`wheel`, c, xn),
      document.addEventListener(`touchmove`, c, xn),
      document.addEventListener(`touchstart`, d, xn),
      function () {
        (zn = zn.filter(function (e) {
          return e !== a;
        })),
          document.removeEventListener(`wheel`, c, xn),
          document.removeEventListener(`touchmove`, c, xn),
          document.removeEventListener(`touchstart`, d, xn);
      }
    );
  }, []);
  var m = e.removeScrollBar,
    h = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    h ? u.createElement(a, { styles: Ln(i) }) : null,
    m
      ? u.createElement(vn, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null
  );
}
function Vn(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
var Hn = Zt(Qt, Bn),
  Un = u.forwardRef(function (e, t) {
    return u.createElement(en, U({}, e, { ref: t, sideCar: Hn }));
  });
Un.classNames = en.classNames;
var Wn = function (e) {
    return typeof document > `u`
      ? null
      : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
  },
  Gn = new WeakMap(),
  Kn = new WeakMap(),
  qn = {},
  Jn = 0,
  Yn = function (e) {
    return e && (e.host || Yn(e.parentNode));
  },
  Xn = function (e, t) {
    return t
      .map(function (t) {
        if (e.contains(t)) return t;
        var n = Yn(t);
        return n && e.contains(n)
          ? n
          : (console.error(
              `aria-hidden`,
              t,
              `in not contained inside`,
              e,
              `. Doing nothing`
            ),
            null);
      })
      .filter(function (e) {
        return !!e;
      });
  },
  Zn = function (e, t, n, r) {
    var i = Xn(t, Array.isArray(e) ? e : [e]);
    qn[n] || (qn[n] = new WeakMap());
    var a = qn[n],
      o = [],
      s = new Set(),
      c = new Set(i),
      l = function (e) {
        !e || s.has(e) || (s.add(e), l(e.parentNode));
      };
    i.forEach(l);
    var u = function (e) {
      !e ||
        c.has(e) ||
        Array.prototype.forEach.call(e.children, function (e) {
          if (s.has(e)) u(e);
          else
            try {
              var t = e.getAttribute(r),
                i = t !== null && t !== `false`,
                c = (Gn.get(e) || 0) + 1,
                l = (a.get(e) || 0) + 1;
              Gn.set(e, c),
                a.set(e, l),
                o.push(e),
                c === 1 && i && Kn.set(e, !0),
                l === 1 && e.setAttribute(n, `true`),
                i || e.setAttribute(r, `true`);
            } catch (t) {
              console.error(`aria-hidden: cannot operate on `, e, t);
            }
        });
    };
    return (
      u(t),
      s.clear(),
      Jn++,
      function () {
        o.forEach(function (e) {
          var t = Gn.get(e) - 1,
            i = a.get(e) - 1;
          Gn.set(e, t),
            a.set(e, i),
            t || (Kn.has(e) || e.removeAttribute(r), Kn.delete(e)),
            i || e.removeAttribute(n);
        }),
          Jn--,
          Jn ||
            ((Gn = new WeakMap()),
            (Gn = new WeakMap()),
            (Kn = new WeakMap()),
            (qn = {}));
      }
    );
  },
  Qn = function (e, t, n) {
    n === void 0 && (n = `data-aria-hidden`);
    var r = Array.from(Array.isArray(e) ? e : [e]),
      i = t || Wn(e);
    return i
      ? (r.push.apply(r, Array.from(i.querySelectorAll(`[aria-live], script`))),
        Zn(r, i, n, `aria-hidden`))
      : function () {
          return null;
        };
  },
  $n = Object.defineProperty,
  W = (e, t) => $n(e, `name`, { value: t, configurable: !0 }),
  er = `Dialog`,
  [tr, nr] = he(er),
  [rr, G] = tr(er),
  ir = W((e) => {
    let {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        modal: o = !0,
      } = e,
      s = u.useRef(null),
      c = u.useRef(null),
      [l, d] = Me({ prop: r, defaultProp: i ?? !1, onChange: a, caller: er }),
      [f, p] = u.useState(0),
      [m, h] = u.useState(0);
    return (0, N.jsx)(rr, {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: Ye(),
      titleId: Ye(),
      descriptionId: Ye(),
      titlePresent: f > 0,
      descriptionPresent: m > 0,
      setTitleCount: p,
      setDescriptionCount: h,
      open: l,
      onOpenChange: d,
      onOpenToggle: u.useCallback(() => d((e) => !e), [d]),
      modal: o,
      children: n,
    });
  }, `Dialog`),
  ar = `DialogTrigger`,
  or = u.forwardRef(
    W(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = G(ar, n),
        a = w(t, i.triggerRef);
      return (0,
      N.jsx)(F.button, { type: `button`, "aria-haspopup": `dialog`, "aria-expanded": i.open, "aria-controls": i.open ? i.contentId : void 0, "data-state": Er(i.open), ...r, ref: a, onClick: L(e.onClick, i.onOpenToggle) });
    }, `DialogTrigger`)
  ),
  sr = `DialogPortal`,
  [cr, lr] = tr(sr, { forceMount: void 0 }),
  ur = W((e) => {
    let { __scopeDialog: t, forceMount: n, children: r, container: i } = e,
      a = G(sr, t);
    return (0, N.jsx)(cr, {
      scope: t,
      forceMount: n,
      children: u.Children.map(r, (e) =>
        (0, N.jsx)(ze, {
          present: n || a.open,
          children: (0, N.jsx)(Ot, { asChild: !0, container: i, children: e }),
        })
      ),
    });
  }, `DialogPortal`),
  dr = `DialogOverlay`,
  fr = u.forwardRef(
    W(function (e, t) {
      let n = lr(dr, e.__scopeDialog),
        { forceMount: r = n.forceMount, ...i } = e,
        a = G(dr, e.__scopeDialog);
      return a.modal
        ? (0, N.jsx)(ze, {
            present: r || a.open,
            children: (0, N.jsx)(mr, { ...i, ref: t }),
          })
        : null;
    }, `DialogOverlay`)
  ),
  pr = re(`DialogOverlay.RemoveScroll`),
  mr = u.forwardRef(
    W(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = G(dr, n),
        a = w(t, ot());
      return (0,
      N.jsx)(Un, { as: pr, allowPinchZoom: !0, shards: [i.contentRef], children: (0, N.jsx)(F.div, { "data-state": Er(i.open), ...r, ref: a, style: { pointerEvents: `auto`, ...r.style } }) });
    }, `DialogOverlayImpl`)
  ),
  hr = `DialogContent`,
  gr = u.forwardRef(
    W(function (e, t) {
      let n = lr(hr, e.__scopeDialog),
        { forceMount: r = n.forceMount, ...i } = e,
        a = G(hr, e.__scopeDialog);
      return (0,
      N.jsx)(ze, { present: r || a.open, children: a.modal ? (0, N.jsx)(_r, { ...i, ref: t }) : (0, N.jsx)(vr, { ...i, ref: t }) });
    }, `DialogContent`)
  ),
  _r = u.forwardRef(
    W(function (e, t) {
      let n = G(hr, e.__scopeDialog),
        r = u.useRef(null),
        i = w(t, n.contentRef, r);
      return (
        u.useEffect(() => {
          let e = r.current;
          if (e) return Qn(e);
        }, []),
        (0, N.jsx)(yr, {
          ...e,
          ref: i,
          trapFocus: n.open,
          disableOutsidePointerEvents: n.open,
          onCloseAutoFocus: L(e.onCloseAutoFocus, (e) => {
            e.preventDefault(), n.triggerRef.current?.focus();
          }),
          onPointerDownOutside: L(e.onPointerDownOutside, (e) => {
            let t = e.detail.originalEvent,
              n = t.button === 0 && t.ctrlKey === !0;
            (t.button === 2 || n) && e.preventDefault();
          }),
          onFocusOutside: L(e.onFocusOutside, (e) => e.preventDefault()),
        })
      );
    }, `DialogContentModal`)
  ),
  vr = u.forwardRef(
    W(function (e, t) {
      let n = G(hr, e.__scopeDialog),
        r = u.useRef(!1),
        i = u.useRef(!1);
      return (0, N.jsx)(yr, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (t) => {
          e.onCloseAutoFocus?.(t),
            t.defaultPrevented ||
              (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
            (r.current = !1),
            (i.current = !1);
        },
        onInteractOutside: (t) => {
          e.onInteractOutside?.(t),
            t.defaultPrevented ||
              ((r.current = !0),
              t.detail.originalEvent.type === `pointerdown` &&
                (i.current = !0));
          let a = t.target;
          n.triggerRef.current?.contains(a) && t.preventDefault(),
            t.detail.originalEvent.type === `focusin` &&
              i.current &&
              t.preventDefault();
        },
      });
    }, `DialogContentNonModal`)
  ),
  yr = u.forwardRef(
    W(function (e, t) {
      let {
          __scopeDialog: n,
          trapFocus: r,
          onOpenAutoFocus: i,
          onCloseAutoFocus: a,
          ...o
        } = e,
        s = G(hr, n);
      return (
        Pt(),
        (0, N.jsx)(N.Fragment, {
          children: (0, N.jsx)(gt, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: i,
            onUnmountAutoFocus: a,
            children: (0, N.jsx)(at, {
              role: `dialog`,
              id: s.contentId,
              "aria-describedby": s.descriptionPresent
                ? s.descriptionId
                : void 0,
              "aria-labelledby": s.titlePresent ? s.titleId : void 0,
              "data-state": Er(s.open),
              ...o,
              ref: t,
              deferPointerDownOutside: !0,
              onDismiss: () => s.onOpenChange(!1),
            }),
          }),
        })
      );
    }, `DialogContentImpl`)
  ),
  br = `DialogTitle`,
  xr = u.forwardRef(
    W(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = G(br, n),
        { setTitleCount: a } = i;
      return (
        R(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]),
        (0, N.jsx)(F.h2, { id: i.titleId, ...r, ref: t })
      );
    }, `DialogTitle`)
  ),
  Sr = `DialogDescription`,
  Cr = u.forwardRef(
    W(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = G(Sr, n),
        { setDescriptionCount: a } = i;
      return (
        R(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]),
        (0, N.jsx)(F.p, { id: i.descriptionId, ...r, ref: t })
      );
    }, `DialogDescription`)
  ),
  wr = `DialogClose`,
  Tr = u.forwardRef(
    W(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = G(wr, n);
      return (0,
      N.jsx)(F.button, { type: `button`, ...r, ref: t, onClick: L(e.onClick, () => i.onOpenChange(!1)) });
    }, `DialogClose`)
  );
function Er(e) {
  return e ? `open` : `closed`;
}
W(Er, `getState`);
var Dr = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  Or = (e, t) => ({ classGroupId: e, validator: t }),
  kr = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  Ar = `-`,
  jr = [],
  Mr = `arbitrary..`,
  Nr = (e) => {
    let t = Ir(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return Fr(e);
        let n = e.split(Ar);
        return Pr(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? Dr(i, t) : t) : i || jr;
        }
        return n[e] || jr;
      },
    };
  },
  Pr = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = Pr(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(Ar) : e.slice(t).join(Ar),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  Fr = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? Mr + r : void 0;
        })(),
  Ir = (e) => {
    let { theme: t, classGroups: n } = e;
    return Lr(n, t);
  },
  Lr = (e, t) => {
    let n = kr();
    for (let r in e) {
      let i = e[r];
      Rr(i, n, r, t);
    }
    return n;
  },
  Rr = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      zr(i, t, n, r);
    }
  },
  zr = (e, t, n, r) => {
    if (typeof e == `string`) {
      Br(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      Vr(e, t, n, r);
      return;
    }
    Hr(e, t, n, r);
  },
  Br = (e, t, n) => {
    let r = e === `` ? t : Ur(t, e);
    r.classGroupId = n;
  },
  Vr = (e, t, n, r) => {
    if (Wr(e)) {
      Rr(e(r), t, n, r);
      return;
    }
    t.validators === null && (t.validators = []), t.validators.push(Or(n, e));
  },
  Hr = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      Rr(o, Ur(t, a), n, r);
    }
  },
  Ur = (e, t) => {
    let n = e,
      r = t.split(Ar),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      i || ((i = kr()), n.nextPart.set(t, i)), (n = i);
    }
    return n;
  },
  Wr = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  Gr = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        (n[i] = a), t++, t > e && ((t = 0), (r = n), (n = Object.create(null)));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return i(e, t), t;
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  Kr = `!`,
  qr = `:`,
  Jr = [],
  Yr = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  Xr = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === qr) {
              t.push(e.slice(i, s)), (i = s + 1);
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[`
            ? n++
            : o === `]`
            ? n--
            : o === `(`
            ? r++
            : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(Kr)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(Kr) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return Yr(t, l, c, u);
      };
    if (t) {
      let e = t + qr,
        n = r;
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : Yr(Jr, !1, t, void 0, !0);
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  Zr = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
            : r.push(a);
        }
        return r.length > 0 && (r.sort(), n.push(...r)), n;
      }
    );
  },
  Qr = (e) => ({
    cache: Gr(e.cacheSize),
    parseClassName: Xr(e),
    sortModifiers: Zr(e),
    postfixLookupClassGroupIds: $r(e),
    ...Nr(e),
  }),
  $r = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  ei = /\s+/,
  ti = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(ei),
      l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: p,
          maybePostfixModifierPosition: m,
        } = n(t);
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      let h = !!m,
        g;
      if (h) {
        g = r(p.substring(0, m));
        let e = g && o[g] ? r(p) : void 0;
        e && e !== g && ((g = e), (h = !1));
      } else g = r(p);
      if (!g) {
        if (!h) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        if (((g = r(p)), !g)) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        h = !1;
      }
      let _ = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        v = f ? _ + Kr : _,
        y = v + g;
      if (s.indexOf(y) > -1) continue;
      s.push(y);
      let b = i(g, h);
      for (let e = 0; e < b.length; ++e) {
        let t = b[e];
        s.push(v + t);
      }
      l = t + (l.length > 0 ? ` ` + l : l);
    }
    return l;
  },
  ni = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length; )
      (n = e[t++]) && (r = ri(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  ri = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++)
      e[r] && (t = ri(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  ii = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = Qr(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = ti(e, n);
        return i(e, a), a;
      };
    return (a = o), (...e) => a(ni(...e));
  },
  ai = [],
  K = (e) => {
    let t = (t) => t[e] || ai;
    return (t.isThemeGetter = !0), t;
  },
  oi = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  si = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  ci = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  li = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  ui =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  di = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  fi = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  pi =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  q = (e) => ci.test(e),
  J = (e) => !!e && !Number.isNaN(Number(e)),
  Y = (e) => !!e && Number.isInteger(Number(e)),
  mi = (e) => e.endsWith(`%`) && J(e.slice(0, -1)),
  X = (e) => li.test(e),
  hi = () => !0,
  gi = (e) => ui.test(e) && !di.test(e),
  _i = () => !1,
  vi = (e) => fi.test(e),
  yi = (e) => pi.test(e),
  bi = (e) => !Z(e) && !Q(e),
  xi = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  Si = (e) => Li(e, Vi, _i),
  Z = (e) => oi.test(e),
  Ci = (e) => Li(e, Hi, gi),
  wi = (e) => Li(e, Ui, J),
  Ti = (e) => Li(e, Gi, hi),
  Ei = (e) => Li(e, Wi, _i),
  Di = (e) => Li(e, zi, _i),
  Oi = (e) => Li(e, Bi, yi),
  ki = (e) => Li(e, Ki, vi),
  Q = (e) => si.test(e),
  Ai = (e) => Ri(e, Hi),
  ji = (e) => Ri(e, Wi),
  Mi = (e) => Ri(e, zi),
  Ni = (e) => Ri(e, Vi),
  Pi = (e) => Ri(e, Bi),
  Fi = (e) => Ri(e, Ki, !0),
  Ii = (e) => Ri(e, Gi, !0),
  Li = (e, t, n) => {
    let r = oi.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  Ri = (e, t, n = !1) => {
    let r = si.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  zi = (e) => e === `position` || e === `percentage`,
  Bi = (e) => e === `image` || e === `url`,
  Vi = (e) => e === `length` || e === `size` || e === `bg-size`,
  Hi = (e) => e === `length`,
  Ui = (e) => e === `number`,
  Wi = (e) => e === `family-name`,
  Gi = (e) => e === `number` || e === `weight`,
  Ki = (e) => e === `shadow`,
  qi = ii(() => {
    let e = K(`color`),
      t = K(`font`),
      n = K(`text`),
      r = K(`font-weight`),
      i = K(`tracking`),
      a = K(`leading`),
      o = K(`breakpoint`),
      s = K(`container`),
      c = K(`spacing`),
      l = K(`radius`),
      u = K(`shadow`),
      d = K(`inset-shadow`),
      f = K(`text-shadow`),
      p = K(`drop-shadow`),
      m = K(`blur`),
      h = K(`perspective`),
      g = K(`aspect`),
      _ = K(`ease`),
      v = K(`animate`),
      y = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      b = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      ee = () => [...b(), Q, Z],
      te = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      x = () => [`auto`, `contain`, `none`],
      S = () => [Q, Z, c],
      C = () => [q, `full`, `auto`, ...S()],
      ne = () => [Y, `none`, `subgrid`, Q, Z],
      w = () => [`auto`, { span: [`full`, Y, Q, Z] }, Y, Q, Z],
      T = () => [Y, `auto`, Q, Z],
      E = () => [`auto`, `min`, `max`, `fr`, Q, Z],
      re = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      ie = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      D = () => [`auto`, ...S()],
      O = () => [
        q,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...S(),
      ],
      ae = () => [
        q,
        `screen`,
        `full`,
        `dvw`,
        `lvw`,
        `svw`,
        `min`,
        `max`,
        `fit`,
        ...S(),
      ],
      oe = () => [
        q,
        `screen`,
        `full`,
        `lh`,
        `dvh`,
        `lvh`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...S(),
      ],
      k = () => [e, Q, Z],
      se = () => [...b(), Mi, Di, { position: [Q, Z] }],
      ce = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      le = () => [`auto`, `cover`, `contain`, Ni, Si, { size: [Q, Z] }],
      ue = () => [mi, Ai, Ci],
      A = () => [``, `none`, `full`, l, Q, Z],
      j = () => [``, J, Ai, Ci],
      M = () => [`solid`, `dashed`, `dotted`, `double`],
      N = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      P = () => [J, mi, Mi, Di],
      de = () => [``, `none`, m, Q, Z],
      F = () => [`none`, J, Q, Z],
      fe = () => [`none`, J, Q, Z],
      pe = () => [J, Q, Z],
      I = () => [q, `full`, ...S()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [X],
        breakpoint: [X],
        color: [hi],
        container: [X],
        "drop-shadow": [X],
        ease: [`in`, `out`, `in-out`],
        font: [bi],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [X],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [X],
        shadow: [X],
        spacing: [`px`, J],
        text: [X],
        "text-shadow": [X],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, q, Z, Q, g] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, Q, Z] }],
        "container-named": [xi],
        columns: [{ columns: [J, Z, Q, s] }],
        "break-after": [{ "break-after": y() }],
        "break-before": [{ "break-before": y() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: ee() }],
        overflow: [{ overflow: te() }],
        "overflow-x": [{ "overflow-x": te() }],
        "overflow-y": [{ "overflow-y": te() }],
        overscroll: [{ overscroll: x() }],
        "overscroll-x": [{ "overscroll-x": x() }],
        "overscroll-y": [{ "overscroll-y": x() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: C() }],
        "inset-x": [{ "inset-x": C() }],
        "inset-y": [{ "inset-y": C() }],
        start: [{ "inset-s": C(), start: C() }],
        end: [{ "inset-e": C(), end: C() }],
        "inset-bs": [{ "inset-bs": C() }],
        "inset-be": [{ "inset-be": C() }],
        top: [{ top: C() }],
        right: [{ right: C() }],
        bottom: [{ bottom: C() }],
        left: [{ left: C() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [Y, `auto`, Q, Z] }],
        basis: [{ basis: [q, `full`, `auto`, s, ...S()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [J, q, `auto`, `initial`, `none`, Z] }],
        grow: [{ grow: [``, J, Q, Z] }],
        shrink: [{ shrink: [``, J, Q, Z] }],
        order: [{ order: [Y, `first`, `last`, `none`, Q, Z] }],
        "grid-cols": [{ "grid-cols": ne() }],
        "col-start-end": [{ col: w() }],
        "col-start": [{ "col-start": T() }],
        "col-end": [{ "col-end": T() }],
        "grid-rows": [{ "grid-rows": ne() }],
        "row-start-end": [{ row: w() }],
        "row-start": [{ "row-start": T() }],
        "row-end": [{ "row-end": T() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": E() }],
        "auto-rows": [{ "auto-rows": E() }],
        gap: [{ gap: S() }],
        "gap-x": [{ "gap-x": S() }],
        "gap-y": [{ "gap-y": S() }],
        "justify-content": [{ justify: [...re(), `normal`] }],
        "justify-items": [{ "justify-items": [...ie(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...ie()] }],
        "align-content": [{ content: [`normal`, ...re()] }],
        "align-items": [{ items: [...ie(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...ie(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": re() }],
        "place-items": [{ "place-items": [...ie(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...ie()] }],
        p: [{ p: S() }],
        px: [{ px: S() }],
        py: [{ py: S() }],
        ps: [{ ps: S() }],
        pe: [{ pe: S() }],
        pbs: [{ pbs: S() }],
        pbe: [{ pbe: S() }],
        pt: [{ pt: S() }],
        pr: [{ pr: S() }],
        pb: [{ pb: S() }],
        pl: [{ pl: S() }],
        m: [{ m: D() }],
        mx: [{ mx: D() }],
        my: [{ my: D() }],
        ms: [{ ms: D() }],
        me: [{ me: D() }],
        mbs: [{ mbs: D() }],
        mbe: [{ mbe: D() }],
        mt: [{ mt: D() }],
        mr: [{ mr: D() }],
        mb: [{ mb: D() }],
        ml: [{ ml: D() }],
        "space-x": [{ "space-x": S() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": S() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: O() }],
        "inline-size": [{ inline: [`auto`, ...ae()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...ae()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...ae()] }],
        "block-size": [{ block: [`auto`, ...oe()] }],
        "min-block-size": [{ "min-block": [`auto`, ...oe()] }],
        "max-block-size": [{ "max-block": [`none`, ...oe()] }],
        w: [{ w: [s, `screen`, ...O()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...O()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...O()] },
        ],
        h: [{ h: [`screen`, `lh`, ...O()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...O()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...O()] }],
        "font-size": [{ text: [`base`, n, Ai, Ci] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, Ii, Ti] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              mi,
              Z,
            ],
          },
        ],
        "font-family": [{ font: [ji, Ei, t] }],
        "font-features": [{ "font-features": [Z] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, Q, Z] }],
        "line-clamp": [{ "line-clamp": [J, `none`, Q, wi] }],
        leading: [{ leading: [a, ...S()] }],
        "list-image": [{ "list-image": [`none`, Q, Z] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, Q, Z] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: k() }],
        "text-color": [{ text: k() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...M(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [J, `from-font`, `auto`, Q, Ci] },
        ],
        "text-decoration-color": [{ decoration: k() }],
        "underline-offset": [{ "underline-offset": [J, `auto`, Q, Z] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: S() }],
        "tab-size": [{ tab: [Y, Q, Z] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              Q,
              Z,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, Q, Z] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: se() }],
        "bg-repeat": [{ bg: ce() }],
        "bg-size": [{ bg: le() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  Y,
                  Q,
                  Z,
                ],
                radial: [``, Q, Z],
                conic: [Y, Q, Z],
              },
              Pi,
              Oi,
            ],
          },
        ],
        "bg-color": [{ bg: k() }],
        "gradient-from-pos": [{ from: ue() }],
        "gradient-via-pos": [{ via: ue() }],
        "gradient-to-pos": [{ to: ue() }],
        "gradient-from": [{ from: k() }],
        "gradient-via": [{ via: k() }],
        "gradient-to": [{ to: k() }],
        rounded: [{ rounded: A() }],
        "rounded-s": [{ "rounded-s": A() }],
        "rounded-e": [{ "rounded-e": A() }],
        "rounded-t": [{ "rounded-t": A() }],
        "rounded-r": [{ "rounded-r": A() }],
        "rounded-b": [{ "rounded-b": A() }],
        "rounded-l": [{ "rounded-l": A() }],
        "rounded-ss": [{ "rounded-ss": A() }],
        "rounded-se": [{ "rounded-se": A() }],
        "rounded-ee": [{ "rounded-ee": A() }],
        "rounded-es": [{ "rounded-es": A() }],
        "rounded-tl": [{ "rounded-tl": A() }],
        "rounded-tr": [{ "rounded-tr": A() }],
        "rounded-br": [{ "rounded-br": A() }],
        "rounded-bl": [{ "rounded-bl": A() }],
        "border-w": [{ border: j() }],
        "border-w-x": [{ "border-x": j() }],
        "border-w-y": [{ "border-y": j() }],
        "border-w-s": [{ "border-s": j() }],
        "border-w-e": [{ "border-e": j() }],
        "border-w-bs": [{ "border-bs": j() }],
        "border-w-be": [{ "border-be": j() }],
        "border-w-t": [{ "border-t": j() }],
        "border-w-r": [{ "border-r": j() }],
        "border-w-b": [{ "border-b": j() }],
        "border-w-l": [{ "border-l": j() }],
        "divide-x": [{ "divide-x": j() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": j() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...M(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...M(), `hidden`, `none`] }],
        "border-color": [{ border: k() }],
        "border-color-x": [{ "border-x": k() }],
        "border-color-y": [{ "border-y": k() }],
        "border-color-s": [{ "border-s": k() }],
        "border-color-e": [{ "border-e": k() }],
        "border-color-bs": [{ "border-bs": k() }],
        "border-color-be": [{ "border-be": k() }],
        "border-color-t": [{ "border-t": k() }],
        "border-color-r": [{ "border-r": k() }],
        "border-color-b": [{ "border-b": k() }],
        "border-color-l": [{ "border-l": k() }],
        "divide-color": [{ divide: k() }],
        "outline-style": [{ outline: [...M(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [J, Q, Z] }],
        "outline-w": [{ outline: [``, J, Ai, Ci] }],
        "outline-color": [{ outline: k() }],
        shadow: [{ shadow: [``, `none`, u, Fi, ki] }],
        "shadow-color": [{ shadow: k() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, Fi, ki] }],
        "inset-shadow-color": [{ "inset-shadow": k() }],
        "ring-w": [{ ring: j() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: k() }],
        "ring-offset-w": [{ "ring-offset": [J, Ci] }],
        "ring-offset-color": [{ "ring-offset": k() }],
        "inset-ring-w": [{ "inset-ring": j() }],
        "inset-ring-color": [{ "inset-ring": k() }],
        "text-shadow": [{ "text-shadow": [`none`, f, Fi, ki] }],
        "text-shadow-color": [{ "text-shadow": k() }],
        opacity: [{ opacity: [J, Q, Z] }],
        "mix-blend": [{ "mix-blend": [...N(), `plus-darker`, `plus-lighter`] }],
        "bg-blend": [{ "bg-blend": N() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [J] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": P() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": P() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": k() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": k() }],
        "mask-image-t-from-pos": [{ "mask-t-from": P() }],
        "mask-image-t-to-pos": [{ "mask-t-to": P() }],
        "mask-image-t-from-color": [{ "mask-t-from": k() }],
        "mask-image-t-to-color": [{ "mask-t-to": k() }],
        "mask-image-r-from-pos": [{ "mask-r-from": P() }],
        "mask-image-r-to-pos": [{ "mask-r-to": P() }],
        "mask-image-r-from-color": [{ "mask-r-from": k() }],
        "mask-image-r-to-color": [{ "mask-r-to": k() }],
        "mask-image-b-from-pos": [{ "mask-b-from": P() }],
        "mask-image-b-to-pos": [{ "mask-b-to": P() }],
        "mask-image-b-from-color": [{ "mask-b-from": k() }],
        "mask-image-b-to-color": [{ "mask-b-to": k() }],
        "mask-image-l-from-pos": [{ "mask-l-from": P() }],
        "mask-image-l-to-pos": [{ "mask-l-to": P() }],
        "mask-image-l-from-color": [{ "mask-l-from": k() }],
        "mask-image-l-to-color": [{ "mask-l-to": k() }],
        "mask-image-x-from-pos": [{ "mask-x-from": P() }],
        "mask-image-x-to-pos": [{ "mask-x-to": P() }],
        "mask-image-x-from-color": [{ "mask-x-from": k() }],
        "mask-image-x-to-color": [{ "mask-x-to": k() }],
        "mask-image-y-from-pos": [{ "mask-y-from": P() }],
        "mask-image-y-to-pos": [{ "mask-y-to": P() }],
        "mask-image-y-from-color": [{ "mask-y-from": k() }],
        "mask-image-y-to-color": [{ "mask-y-to": k() }],
        "mask-image-radial": [{ "mask-radial": [Q, Z] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": P() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": P() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": k() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": k() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": b() }],
        "mask-image-conic-pos": [{ "mask-conic": [J] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": P() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": P() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": k() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": k() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: se() }],
        "mask-repeat": [{ mask: ce() }],
        "mask-size": [{ mask: le() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, Q, Z] }],
        filter: [{ filter: [``, `none`, Q, Z] }],
        blur: [{ blur: de() }],
        brightness: [{ brightness: [J, Q, Z] }],
        contrast: [{ contrast: [J, Q, Z] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, Fi, ki] }],
        "drop-shadow-color": [{ "drop-shadow": k() }],
        grayscale: [{ grayscale: [``, J, Q, Z] }],
        "hue-rotate": [{ "hue-rotate": [J, Q, Z] }],
        invert: [{ invert: [``, J, Q, Z] }],
        saturate: [{ saturate: [J, Q, Z] }],
        sepia: [{ sepia: [``, J, Q, Z] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, Q, Z] }],
        "backdrop-blur": [{ "backdrop-blur": de() }],
        "backdrop-brightness": [{ "backdrop-brightness": [J, Q, Z] }],
        "backdrop-contrast": [{ "backdrop-contrast": [J, Q, Z] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, J, Q, Z] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [J, Q, Z] }],
        "backdrop-invert": [{ "backdrop-invert": [``, J, Q, Z] }],
        "backdrop-opacity": [{ "backdrop-opacity": [J, Q, Z] }],
        "backdrop-saturate": [{ "backdrop-saturate": [J, Q, Z] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, J, Q, Z] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": S() }],
        "border-spacing-x": [{ "border-spacing-x": S() }],
        "border-spacing-y": [{ "border-spacing-y": S() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              Q,
              Z,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [J, `initial`, Q, Z] }],
        ease: [{ ease: [`linear`, `initial`, _, Q, Z] }],
        delay: [{ delay: [J, Q, Z] }],
        animate: [{ animate: [`none`, v, Q, Z] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [h, Q, Z] }],
        "perspective-origin": [{ "perspective-origin": ee() }],
        rotate: [{ rotate: F() }],
        "rotate-x": [{ "rotate-x": F() }],
        "rotate-y": [{ "rotate-y": F() }],
        "rotate-z": [{ "rotate-z": F() }],
        scale: [{ scale: fe() }],
        "scale-x": [{ "scale-x": fe() }],
        "scale-y": [{ "scale-y": fe() }],
        "scale-z": [{ "scale-z": fe() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: pe() }],
        "skew-x": [{ "skew-x": pe() }],
        "skew-y": [{ "skew-y": pe() }],
        transform: [{ transform: [Q, Z, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: ee() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: I() }],
        "translate-x": [{ "translate-x": I() }],
        "translate-y": [{ "translate-y": I() }],
        "translate-z": [{ "translate-z": I() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [Y, Q, Z] }],
        accent: [{ accent: k() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: k() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              Q,
              Z,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": k() }],
        "scrollbar-track-color": [{ "scrollbar-track": k() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": [`auto`, `stable`, `both`] },
        ],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": S() }],
        "scroll-mx": [{ "scroll-mx": S() }],
        "scroll-my": [{ "scroll-my": S() }],
        "scroll-ms": [{ "scroll-ms": S() }],
        "scroll-me": [{ "scroll-me": S() }],
        "scroll-mbs": [{ "scroll-mbs": S() }],
        "scroll-mbe": [{ "scroll-mbe": S() }],
        "scroll-mt": [{ "scroll-mt": S() }],
        "scroll-mr": [{ "scroll-mr": S() }],
        "scroll-mb": [{ "scroll-mb": S() }],
        "scroll-ml": [{ "scroll-ml": S() }],
        "scroll-p": [{ "scroll-p": S() }],
        "scroll-px": [{ "scroll-px": S() }],
        "scroll-py": [{ "scroll-py": S() }],
        "scroll-ps": [{ "scroll-ps": S() }],
        "scroll-pe": [{ "scroll-pe": S() }],
        "scroll-pbs": [{ "scroll-pbs": S() }],
        "scroll-pbe": [{ "scroll-pbe": S() }],
        "scroll-pt": [{ "scroll-pt": S() }],
        "scroll-pr": [{ "scroll-pr": S() }],
        "scroll-pb": [{ "scroll-pb": S() }],
        "scroll-pl": [{ "scroll-pl": S() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, Q, Z] },
        ],
        fill: [{ fill: [`none`, ...k()] }],
        "stroke-w": [{ stroke: [J, Ai, Ci, wi] }],
        stroke: [{ stroke: [`none`, ...k()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function Ji(...e) {
  return qi(y(e));
}
var Yi = te(
  `inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
  {
    variants: {
      variant: {
        default: `bg-primary text-primary-foreground hover:bg-primary/90`,
        destructive: `bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40`,
        outline: `border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50`,
        secondary: `bg-secondary text-secondary-foreground hover:bg-secondary/80`,
        ghost: `hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50`,
        link: `text-primary underline-offset-4 hover:underline`,
      },
      size: {
        default: `h-9 px-4 py-2 has-[>svg]:px-3`,
        xs: `h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3`,
        sm: `h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5`,
        lg: `h-10 rounded-md px-6 has-[>svg]:px-4`,
        icon: `size-9`,
        "icon-xs": `size-6 rounded-md [&_svg:not([class*='size-'])]:size-3`,
        "icon-sm": `size-8`,
        "icon-lg": `size-10`,
      },
    },
    defaultVariants: { variant: `default`, size: `default` },
  }
);
function Xi({
  className: e,
  variant: t = `default`,
  size: n = `default`,
  asChild: r = !1,
  ...i
}) {
  return (0, N.jsx)(r ? ie : `button`, {
    "data-slot": `button`,
    "data-variant": t,
    "data-size": n,
    className: Ji(Yi({ variant: t, size: n, className: e })),
    ...i,
  });
}
function Zi({ ...e }) {
  return (0, N.jsx)(ir, { "data-slot": `dialog`, ...e });
}
function Qi({ ...e }) {
  return (0, N.jsx)(or, { "data-slot": `dialog-trigger`, ...e });
}
function $i({ ...e }) {
  return (0, N.jsx)(ur, { "data-slot": `dialog-portal`, ...e });
}
function ea({ ...e }) {
  return (0, N.jsx)(Tr, { "data-slot": `dialog-close`, ...e });
}
function ta({ className: e, ...t }) {
  return (0, N.jsx)(fr, {
    "data-slot": `dialog-overlay`,
    className: Ji(
      `fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0`,
      e
    ),
    ...t,
  });
}
function na({ className: e, children: t, showCloseButton: n = !0, ...r }) {
  return (0, N.jsxs)($i, {
    "data-slot": `dialog-portal`,
    children: [
      (0, N.jsx)(ta, {}),
      (0, N.jsxs)(gr, {
        "data-slot": `dialog-content`,
        className: Ji(
          `fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg`,
          e
        ),
        ...r,
        children: [
          t,
          n &&
            (0, N.jsxs)(Tr, {
              "data-slot": `dialog-close`,
              className: `absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
              children: [
                (0, N.jsx)(g, {}),
                (0, N.jsx)(`span`, { className: `sr-only`, children: `Close` }),
              ],
            }),
        ],
      }),
    ],
  });
}
function ra({ className: e, ...t }) {
  return (0, N.jsx)(xr, {
    "data-slot": `dialog-title`,
    className: Ji(`text-lg leading-none font-semibold`, e),
    ...t,
  });
}
function ia({ className: e, ...t }) {
  return (0, N.jsx)(Cr, {
    "data-slot": `dialog-description`,
    className: Ji(`text-sm text-muted-foreground`, e),
    ...t,
  });
}
var aa = {
    d1: null,
    r2: null,
    project_id: `appgprj_6ac5fa71c2448191ba080364a5da5925`,
  },
  oa = [
    `contractAddress`,
    `primaryBuyUrl`,
    `ponsUrl`,
    `explorerUrl`,
    `founderPositionPct`,
    `uniswapUrl`,
    `dexScreenerUrl`,
    `coinGeckoUrl`,
    `coinMarketCapUrl`,
  ],
  sa = Object.freeze({
    notice: `STAGING REHEARSAL`,
    description: `LIVE_PONS preview. Trading and contract copying are off.`,
    contract: `CONTRACT PROVIDED AT GO`,
    disabled: `Available after verified launch values and GO.`,
  });
function ca(e) {
  return (
    e.launchStatus === `LIVE_PONS` &&
    e.launchAuthorization === `STAGING_REHEARSAL`
  );
}
function la(e) {
  return e.launchStatus === `PRELAUNCH` ? null : e.primaryBuyUrl;
}
function ua(e, t) {
  let n;
  try {
    n = new URL(e);
  } catch {
    throw Error(`Missing or invalid ${t}.`);
  }
  if (n.protocol !== `https:` || n.username || n.password)
    throw Error(`An approved HTTPS ${t} is required.`);
}
function da(e, t = aa.project_id) {
  if (e.businessEmail !== `partnerships@clowntoken.co`)
    throw Error(`Only the approved public contact email may be published.`);
  if (
    e.approvedLegalPages.length !== 2 ||
    !e.approvedLegalPages.some(
      (e) => e.href === `/privacy` && e.label === `Privacy`
    ) ||
    !e.approvedLegalPages.some(
      (e) => e.href === `/terms` && e.label === `Terms`
    )
  )
    throw Error(`Privacy and Terms must remain active in every launch state.`);
  let n = e.economics;
  if (
    n.totalFeeBps !== 200 ||
    n.treasuryFeeBps !== 100 ||
    n.creatorFeeBps !== 70 ||
    n.ponsFeeBps !== 30 ||
    n.treasuryFeeBps + n.creatorFeeBps + n.ponsFeeBps !== n.totalFeeBps
  )
    throw Error(
      `The approved fee arithmetic must remain 2.00% = 1.00% + 0.70% + 0.30%.`
    );
  let r = e.teaser;
  for (let e of [r.videoSrc, r.posterSrc, ...r.captions.map((e) => e.src)])
    if (
      e !== null &&
      (!e.startsWith(`/media/`) || e.includes(`..`) || e.includes(`?`))
    )
      throw Error(
        `Teaser media must use an approved self-hosted /media/ asset.`
      );
  if (
    r.captionStatus === `APPROVED` &&
    (!r.captions.length ||
      r.captions.some(
        (e) => !e.language || !e.label || !e.src.endsWith(`.vtt`)
      ))
  )
    throw Error(`Approved teaser captions require labelled WebVTT assets.`);
  if (
    (e.publicAuditUrl && ua(e.publicAuditUrl, `publicAuditUrl`),
    e.latestFinanceFridayUrl &&
      ua(e.latestFinanceFridayUrl, `latestFinanceFridayUrl`),
    e.launchStatus === `PRELAUNCH`)
  ) {
    for (let t of oa)
      if (Object.hasOwn(e, t))
        throw Error(`PRELAUNCH must omit ${t}, not hide it.`);
    return e;
  }
  if (e.launchStatus !== `LIVE_PONS` && e.launchStatus !== `GRADUATED`)
    throw Error(`Unknown launch state.`);
  if (ca(e)) {
    if (t !== `appgprj_6ac7cdde850c8191a1c299cee7b8a767`)
      throw Error(
        `STAGING_REHEARSAL cannot be built or published outside the dedicated staging Site.`
      );
    for (let t of [
      `contractAddress`,
      `primaryBuyUrl`,
      `ponsUrl`,
      `explorerUrl`,
      `founderPositionPct`,
    ])
      if (e[t] !== null) throw Error(`Rehearsal must keep ${t} null.`);
    if (
      e.publicAuditUrl !== null ||
      e.latestFinanceFridayUrl !== null ||
      [`uniswapUrl`, `dexScreenerUrl`, `coinGeckoUrl`, `coinMarketCapUrl`].some(
        (t) => Object.hasOwn(e, t)
      )
    )
      throw Error(`Rehearsal cannot activate later links.`);
    return e;
  }
  if (!/^0x[0-9a-fA-F]{40}$/.test(e.contractAddress))
    throw Error(`The full verified contract address is required.`);
  if (
    e.founderPositionPct != null &&
    !/^(?:100\.00|(?:[0-9]|[1-9][0-9])\.\d{2})$/.test(e.founderPositionPct)
  )
    throw Error(
      `Founder position requires the exact verified percentage with two decimal places.`
    );
  if ((ua(e.primaryBuyUrl, `primaryBuyUrl`), e.explorerUrl === null)) {
    if (e.launchStatus !== `LIVE_PONS`)
      throw Error(`A verified explorerUrl is required after graduation.`);
  } else ua(e.explorerUrl, `explorerUrl`);
  if (e.launchStatus === `LIVE_PONS`) {
    if (e.launchAuthorization !== `GO`)
      throw Error(`Explicit launch authorization is required.`);
    if ((ua(e.ponsUrl, `ponsUrl`), e.primaryBuyUrl !== e.ponsUrl))
      throw Error(`LIVE_PONS destinations must match.`);
  } else {
    if (e.graduationAuthorization !== `GO`)
      throw Error(`Explicit graduation authorization is required.`);
    if (!e.howToBuySteps?.length || e.howToBuySteps.some((e) => !e.trim()))
      throw Error(
        `Approved instructions are required for the graduated destination.`
      );
  }
  return e;
}
var fa = Object.freeze(
    da({
      launchStatus: `PRELAUNCH`,
      launchDatePublic: `10.9.26`,
      xUrl: `https://x.com/clowncircus21`,
      telegramUrl: `https://t.me/clowncircus21`,
      teaser: Object.freeze({
        videoSrc: `/media/clown-full-teaser.mp4`,
        posterSrc: `/media/clown-teaser-poster.webp`,
        captions: [
          {
            src: `/media/clown-full-teaser.en.vtt`,
            language: `en`,
            label: `English`,
            default: !0,
          },
        ],
        captionStatus: `APPROVED`,
      }),
      chainName: `ROBINHOOD CHAIN`,
      chainId: 4663,
      businessEmail: `partnerships@clowntoken.co`,
      economics: Object.freeze({
        totalFeeBps: 200,
        treasuryFeeBps: 100,
        creatorFeeBps: 70,
        ponsFeeBps: 30,
        treasuryOpeningBalanceUsd: 0,
      }),
      publicAuditUrl: null,
      latestFinanceFridayUrl: null,
      approvedLegalPages: [
        { href: `/privacy`, label: `Privacy` },
        { href: `/terms`, label: `Terms` },
      ],
    })
  ),
  pa = `https://app.uniswap.org/swap?chain=robinhood&outputCurrency=TBA`,
  ma = Object.freeze(
    da({
      ...fa,
      launchStatus: `LIVE_PONS`,
      launchAuthorization: `GO`,
      contractAddress: `TBA`,
      primaryBuyUrl: pa,
      ponsUrl: pa,
      explorerUrl: null,
      founderPositionPct: null,
    })
  );
function ha({ variant: e = `hero` }) {
  let [t, n] = (0, u.useState)(!1),
    [r, i] = (0, u.useState)(!1),
    [a, o] = (0, u.useState)(!1),
    s = (0, u.useRef)(null),
    c = (0, u.useRef)(null),
    l = () => {
      let e = s.current;
      e &&
        ((e.muted = !1),
        o(!1),
        e.play().catch(() => {
          s.current === e && o(!0);
        }));
    },
    d = (e) => {
      if (!e) {
        s.current?.pause(), n(!1), i(!1), o(!1);
        return;
      }
      (0, _.flushSync)(() => {
        i(!1), o(!1), n(!0);
      }),
        l();
    },
    f = ma.teaser;
  return (0, N.jsxs)(Zi, {
    open: t,
    onOpenChange: d,
    children: [
      (0, N.jsx)(Qi, {
        asChild: !0,
        children: (0, N.jsxs)(Xi, {
          type: `button`,
          className: e === `hero` ? `teaser-trigger` : `lore-teaser-trigger`,
          variant: `ghost`,
          children: [
            e === `hero` &&
              (0, N.jsx)(`span`, {
                className: `play-mark`,
                children: (0, N.jsx)(h, {
                  fill: `currentColor`,
                  strokeWidth: 0,
                  "aria-hidden": `true`,
                }),
              }),
            (0, N.jsx)(`span`, {
              className: `teaser-label`,
              children: `WATCH TEASER`,
            }),
          ],
        }),
      }),
      (0, N.jsxs)(na, {
        className: `teaser-modal`,
        showCloseButton: !1,
        onOpenAutoFocus: (e) => {
          e.preventDefault(), c.current?.focus();
        },
        children: [
          (0, N.jsxs)(`div`, {
            className: `teaser-modal-heading`,
            children: [
              (0, N.jsx)(ra, { children: `$CLOWN TEASER` }),
              (0, N.jsx)(ea, {
                asChild: !0,
                children: (0, N.jsxs)(Xi, {
                  ref: c,
                  className: `teaser-modal-close`,
                  variant: `ghost`,
                  "aria-label": `Close teaser`,
                  children: [
                    (0, N.jsx)(g, { "aria-hidden": `true` }),
                    (0, N.jsx)(`span`, { children: `Close` }),
                  ],
                }),
              }),
            ],
          }),
          (0, N.jsx)(ia, {
            className: `publication-sr-only`,
            children: `The full $CLOWN teaser. Playback starts when opened. Native controls and English captions are available. Press Escape or Close to return to the page.`,
          }),
          t &&
            (0, N.jsx)(`div`, {
              className: `teaser-player`,
              children: f.videoSrc
                ? (0, N.jsxs)(`video`, {
                    ref: s,
                    controls: !0,
                    playsInline: !0,
                    onPlay: () => o(!1),
                    preload: `none`,
                    poster: f.posterSrc ?? void 0,
                    width: 1920,
                    height: 1080,
                    onError: () => i(!0),
                    "aria-label": `Official $CLOWN full teaser`,
                    children: [
                      (0, N.jsx)(`source`, {
                        src: f.videoSrc,
                        type: `video/mp4`,
                      }),
                      f.captions.map((e) =>
                        (0, N.jsx)(
                          `track`,
                          {
                            kind: `captions`,
                            src: e.src,
                            srcLang: e.language,
                            label: e.label,
                            default: e.default,
                          },
                          e.src
                        )
                      ),
                      `Your browser does not support this video player.`,
                    ],
                  })
                : (0, N.jsx)(`p`, {
                    role: `status`,
                    children: `The teaser is not available yet.`,
                  }),
            }),
          a &&
            !r &&
            (0, N.jsxs)(`div`, {
              className: `teaser-play-fallback`,
              role: `status`,
              children: [
                (0, N.jsx)(`p`, {
                  children: `Press Play to watch the teaser.`,
                }),
                (0, N.jsxs)(Xi, {
                  onClick: l,
                  children: [
                    (0, N.jsx)(h, { "aria-hidden": `true` }),
                    `Play teaser`,
                  ],
                }),
              ],
            }),
          r &&
            (0, N.jsxs)(`div`, {
              className: `teaser-error`,
              role: `alert`,
              children: [
                (0, N.jsx)(`p`, {
                  children: `The teaser could not load. Please try again.`,
                }),
                (0, N.jsx)(Xi, {
                  variant: `outline`,
                  onClick: () => {
                    i(!1), s.current?.load(), l();
                  },
                  children: `Retry video`,
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
function ga() {
  return (0, N.jsxs)(`section`, {
    id: `what-is`,
    className: `cream-transition what-is`,
    "aria-labelledby": `what-is-title`,
    "data-plane": `editorial-sheet`,
    children: [
      (0, N.jsxs)(`picture`, {
        children: [
          (0, N.jsx)(`source`, {
            media: `(max-width:430px)`,
            srcSet: `/assets/editorial/cream-portrait.webp`,
            width: `860`,
            height: `2400`,
          }),
          (0, N.jsx)(`img`, {
            className: `transition-paper`,
            src: `/assets/r4/transition-paper.webp`,
            width: `3840`,
            height: `2160`,
            alt: ``,
            "aria-hidden": `true`,
            loading: `lazy`,
            decoding: `async`,
          }),
        ],
      }),
      (0, N.jsxs)(`div`, {
        className: `tabloid-spread`,
        children: [
          (0, N.jsx)(`p`, {
            className: `tabloid-kicker`,
            children: `What Is $CLOWN?`,
          }),
          (0, N.jsx)(`div`, {
            className: `tabloid-undersheet`,
            "aria-hidden": `true`,
          }),
          (0, N.jsxs)(`div`, {
            className: `tabloid-title-plane`,
            "data-plane": `editorial-headline`,
            children: [
              (0, N.jsx)(`img`, {
                className: `tabloid-title-paper`,
                src: `/assets/r4/cream-sheet.webp`,
                width: `1632`,
                height: `919`,
                alt: ``,
                "aria-hidden": `true`,
                loading: `lazy`,
                decoding: `async`,
              }),
              (0, N.jsxs)(`h2`, {
                id: `what-is-title`,
                className: `tabloid-title`,
                children: [
                  (0, N.jsx)(`span`, { children: `2021 WAS ` }),
                  (0, N.jsx)(`span`, { children: `A CIRCUS.` }),
                ],
              }),
              (0, N.jsx)(`img`, {
                className: `tabloid-red-underline`,
                src: `/assets/r4/red-paper.webp`,
                width: `2151`,
                height: `484`,
                alt: ``,
                "aria-hidden": `true`,
                loading: `lazy`,
                decoding: `async`,
              }),
            ],
          }),
          (0, N.jsxs)(`div`, {
            className: `tabloid-reading`,
            children: [
              (0, N.jsx)(`p`, {
                className: `tabloid-rollcall`,
                children: `Coins. Promises. Influencers. Screenshots. Receipts. Hopium. FUD. Absolute insanity.`,
              }),
              (0, N.jsx)(`p`, {
                className: `tabloid-body`,
                children: `$CLOWN is a lore-driven meme token on Robinhood Chain built around the culture, personalities and chaos of the 2021 crypto bull run.`,
              }),
              (0, N.jsxs)(`div`, {
                className: `tabloid-closing`,
                children: [
                  (0, N.jsx)(`p`, { children: `It is not a victory lap.` }),
                  (0, N.jsx)(`p`, { children: `We were in the circus too.` }),
                ],
              }),
            ],
          }),
          (0, N.jsxs)(`div`, {
            className: `tabloid-sticker-cluster`,
            "data-plane": `editorial-evidence`,
            children: [
              (0, N.jsx)(`img`, {
                className: `tabloid-tent-edge`,
                src: `/assets/r4/tent.webp`,
                width: `1254`,
                height: `943`,
                alt: ``,
                "aria-hidden": `true`,
                loading: `lazy`,
                decoding: `async`,
              }),
              (0, N.jsx)(`img`, {
                className: `tabloid-sticker`,
                src: `/assets/editorial/s01-dont-be-a-clown.webp`,
                width: `512`,
                height: `512`,
                alt: `Approved $CLOWN sticker: Don't be a $CLOWN.`,
                loading: `lazy`,
                decoding: `async`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function _a({ href: e, className: t, children: n, external: r = !1 }) {
  return e === null
    ? (0, N.jsx)(`button`, {
        type: `button`,
        className: t,
        disabled: !0,
        title: sa.disabled,
        "data-routing": `unarmed`,
        children: n,
      })
    : (0, N.jsx)(`a`, {
        className: t,
        href: e,
        target: r ? `_blank` : void 0,
        rel: r ? `noopener noreferrer` : void 0,
        children: n,
      });
}
function va() {
  return (0, N.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    "aria-hidden": `true`,
    children: (0, N.jsx)(`path`, {
      fill: `currentColor`,
      d: `M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932 6.064-6.933ZM17.61 20.644h2.039L6.486 3.24H4.3L17.61 20.644Z`,
    }),
  });
}
function ya() {
  return (0, N.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    "aria-hidden": `true`,
    children: (0, N.jsx)(`path`, {
      fill: `currentColor`,
      d: `M22.1 2.3 18.5 21c-.2 1-1 1.2-1.8.7l-5.5-4.1-2.7 2.6c-.3.3-.5.5-1 .5l.4-5.7L18.2 5.7c.4-.4-.1-.6-.6-.2L5 13.4l-5-1.6c-1-.3-1-1 .2-1.5L20.2 2c.9-.3 1.7.2 1.9.3Z`,
      transform: `translate(1 0) scale(.94)`,
    }),
  });
}
function $({ src: e, alt: t = ``, ...n }) {
  return (0, N.jsxs)(`picture`, {
    children: [
      (0, N.jsx)(`source`, {
        media: `(max-width:430px)`,
        srcSet: String(e).replace(`/r4/`, `/r4/mobile/`),
      }),
      (0, N.jsx)(`img`, { src: e, alt: t, ...n }),
    ],
  });
}
function ba({ motion: e = `auto`, children: t, config: n = ma }) {
  let r = n.launchStatus !== `PRELAUNCH`;
  return (0, N.jsxs)(N.Fragment, {
    children: [
      ca(n) &&
        (0, N.jsxs)(`aside`, {
          className: `rehearsal-notice`,
          id: `rehearsal-notice`,
          children: [
            (0, N.jsx)(`strong`, { children: sa.notice }),
            (0, N.jsx)(`span`, { children: sa.description }),
          ],
        }),
      (0, N.jsx)(`div`, {
        className: `homepage-masthead`,
        children: (0, N.jsxs)(`header`, {
          className: `masthead`,
          children: [
            (0, N.jsx)(`a`, {
              className: `brand-patch`,
              href: `/`,
              "aria-label": `$CLOWN home`,
              children: (0, N.jsx)(`img`, {
                src: `/assets/logo.webp`,
                width: `787`,
                height: `500`,
                alt: `$CLOWN`,
              }),
            }),
            r &&
              (0, N.jsx)(`nav`, {
                className: `live-desktop-nav`,
                "aria-label": `Trading`,
                children: (0, N.jsx)(_a, {
                  href: la(n),
                  className: `launch-buy nav-buy`,
                  children: `BUY $CLOWN`,
                }),
              }),
            (0, N.jsxs)(`div`, {
              className: `official-socials`,
              "aria-label": `Official $CLOWN channels`,
              children: [
                (0, N.jsx)(`a`, {
                  href: n.xUrl,
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  "aria-label": `$CLOWN on X`,
                  children: (0, N.jsx)(va, {}),
                }),
                (0, N.jsx)(`a`, {
                  href: n.telegramUrl,
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  "aria-label": `$CLOWN on Telegram`,
                  children: (0, N.jsx)(ya, {}),
                }),
              ],
            }),
          ],
        }),
      }),
      (0, N.jsxs)(`main`, {
        className: `clown-page`,
        "data-motion": e,
        "data-launch-state": n.launchStatus,
        children: [
          (0, N.jsx)(`section`, {
            className: `hero`,
            "aria-labelledby": `hero-title`,
            children: (0, N.jsxs)(`div`, {
              className: `stage`,
              children: [
                (0, N.jsxs)(`div`, {
                  className: `art-field`,
                  "aria-hidden": `true`,
                  children: [
                    (0, N.jsx)($, {
                      className: `layer top-sheet`,
                      "data-plane": `substrate`,
                      src: `/assets/r4/fibrous-bottom-edge.webp`,
                      width: `3840`,
                      height: `450`,
                      alt: ``,
                    }),
                    (0, N.jsx)(`div`, {
                      className: `dark-stock dark-stock-top`,
                      "data-plane": `substrate`,
                    }),
                    (0, N.jsx)(`div`, {
                      className: `dark-stock dark-stock-left`,
                      "data-plane": `substrate`,
                    }),
                    (0, N.jsx)($, {
                      className: `layer ink-tonal`,
                      "data-plane": `ink`,
                      src: `/assets/r4/tonal.webp`,
                      width: `1616`,
                      height: `930`,
                      alt: ``,
                    }),
                    (0, N.jsx)($, {
                      className: `layer ink-abrasion`,
                      "data-plane": `ink`,
                      src: `/assets/r4/abrasion.webp`,
                      width: `1624`,
                      height: `893`,
                      alt: ``,
                    }),
                    (0, N.jsx)($, {
                      className: `layer ink-print`,
                      "data-plane": `ink`,
                      src: `/assets/r4/print-wear.webp`,
                      width: `1646`,
                      height: `937`,
                      alt: ``,
                    }),
                    (0, N.jsx)($, {
                      className: `layer top-red`,
                      "data-plane": `accent-strip`,
                      src: `/assets/r4/red-paper.webp`,
                      width: `2151`,
                      height: `484`,
                      alt: ``,
                    }),
                    (0, N.jsx)($, {
                      className: `layer burst`,
                      "data-plane": `burst`,
                      src: `/assets/r4/burst.webp`,
                      width: `1243`,
                      height: `1218`,
                      alt: ``,
                    }),
                    (0, N.jsx)($, {
                      className: `layer archive-sheet`,
                      "data-plane": `paper-planes`,
                      src: `/assets/r4/cream-sheet.webp`,
                      width: `1632`,
                      height: `919`,
                      alt: ``,
                    }),
                    (0, N.jsx)($, {
                      className: `layer archive-xerox`,
                      "data-plane": `ink`,
                      src: `/assets/r4/xerox.webp`,
                      width: `1626`,
                      height: `924`,
                      alt: ``,
                    }),
                    (0, N.jsx)($, {
                      className: `layer archive-registration`,
                      "data-plane": `ink`,
                      src: `/assets/r4/registration.webp`,
                      width: `1672`,
                      height: `938`,
                      alt: ``,
                    }),
                    (0, N.jsx)($, {
                      className: `layer blue-corner`,
                      "data-plane": `accent-strip`,
                      src: `/assets/r4/blue-corner.webp`,
                      width: `1187`,
                      height: `1180`,
                      alt: ``,
                    }),
                    (0, N.jsx)($, {
                      className: `layer blue-strip`,
                      "data-plane": `accent-strip`,
                      src: `/assets/r4/blue-strip.webp`,
                      width: `1199`,
                      height: `361`,
                      alt: ``,
                    }),
                    (0, N.jsx)($, {
                      className: `layer tent`,
                      "data-plane": `tent`,
                      src: `/assets/r4/tent.webp`,
                      width: `1254`,
                      height: `943`,
                      alt: ``,
                    }),
                    (0, N.jsx)($, {
                      className: `layer pink-strip`,
                      "data-plane": `accent-strip`,
                      src: `/assets/r4/pink-strip.webp`,
                      width: `1192`,
                      height: `369`,
                      alt: ``,
                    }),
                    (0, N.jsx)($, {
                      className: `layer clown-cutout`,
                      "data-plane": `clown`,
                      src: `/assets/r4/clown.webp`,
                      width: `1156`,
                      height: `1233`,
                      alt: ``,
                      fetchPriority: `high`,
                    }),
                    (0, N.jsx)($, {
                      className: `layer printed-seam`,
                      "data-plane": `accent-strip`,
                      src: `/assets/r4/printed-strip.webp`,
                      width: `1196`,
                      height: `327`,
                      alt: ``,
                    }),
                    (0, N.jsx)($, {
                      className: `layer star-black`,
                      "data-plane": `stars`,
                      src: `/assets/r4/star-black.webp`,
                      width: `1225`,
                      height: `1179`,
                      alt: ``,
                    }),
                    (0, N.jsx)($, {
                      className: `layer star-pink`,
                      "data-plane": `stars`,
                      src: `/assets/r4/star-pink.webp`,
                      width: `1196`,
                      height: `1204`,
                      alt: ``,
                    }),
                    (0, N.jsx)($, {
                      className: `layer ticket`,
                      "data-plane": `ticket`,
                      src: `/assets/r4/ticket.webp`,
                      width: `1887`,
                      height: `771`,
                      alt: ``,
                    }),
                    (0, N.jsx)($, {
                      className: `layer ticket-tape`,
                      "data-plane": `accent-strip`,
                      src: `/assets/r4/tape.webp`,
                      width: `2120`,
                      height: `189`,
                      alt: ``,
                    }),
                    (0, N.jsx)($, {
                      className: `layer foot-sheet`,
                      "data-plane": `substrate`,
                      src: `/assets/r4/fibrous-top-edge.webp`,
                      width: `3840`,
                      height: `350`,
                      alt: ``,
                    }),
                    (0, N.jsx)($, {
                      className: `layer perimeter`,
                      "data-plane": `perimeter`,
                      src: `/assets/r4/perimeter.webp`,
                      width: `3840`,
                      height: `237`,
                      alt: ``,
                    }),
                  ],
                }),
                (0, N.jsxs)(`div`, {
                  className: `hero-copy`,
                  children: [
                    (0, N.jsxs)(`h1`, {
                      id: `hero-title`,
                      className: `hero-title`,
                      children: [
                        (0, N.jsxs)(`span`, {
                          className: `headline-paper first-paper`,
                          "data-plane": `headline-paper`,
                          children: [
                            (0, N.jsx)($, {
                              className: `paper-substrate`,
                              "data-plane": `headline-paper`,
                              src: `/assets/r4/headline-paper.webp`,
                              width: `2094`,
                              height: `619`,
                              alt: ``,
                              "aria-hidden": `true`,
                            }),
                            (0, N.jsx)(`span`, {
                              className: `headline-ink`,
                              children: `Every circus `,
                            }),
                          ],
                        }),
                        (0, N.jsxs)(`span`, {
                          className: `headline-paper second-paper`,
                          "data-plane": `headline-paper`,
                          children: [
                            (0, N.jsx)($, {
                              className: `paper-substrate`,
                              "data-plane": `headline-paper`,
                              src: `/assets/r4/headline-paper.webp`,
                              width: `2094`,
                              height: `619`,
                              alt: ``,
                              "aria-hidden": `true`,
                            }),
                            (0, N.jsx)(`span`, {
                              className: `headline-ink`,
                              children: `needs a clown.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, N.jsxs)(`p`, {
                      className: `red-paper`,
                      "data-plane": `red-strip`,
                      children: [
                        (0, N.jsx)($, {
                          src: `/assets/r4/red-paper.webp`,
                          width: `2151`,
                          height: `484`,
                          alt: ``,
                          "aria-hidden": `true`,
                        }),
                        (0, N.jsx)(`span`, {
                          children: `Don't be the last to know.`,
                        }),
                      ],
                    }),
                    (0, N.jsxs)(`div`, {
                      className: `hero-actions${r ? ` hero-actions-live` : ``}`,
                      "data-plane": `functional-ui`,
                      children: [
                        r
                          ? (0, N.jsx)(_a, {
                              href: la(n),
                              className: `launch-buy hero-buy`,
                              children: `BUY $CLOWN`,
                            })
                          : (0, N.jsx)(`p`, {
                              className: `launch-date`,
                              "aria-label": `Coming ${n.launchDatePublic}`,
                              children: n.launchDatePublic,
                            }),
                        (0, N.jsx)(ha, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, N.jsx)(ga, {}),
          t,
        ],
      }),
    ],
  });
}
export { ba as default };
