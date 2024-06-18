import { reactive as x, toRefs as ee, defineComponent as K, openBlock as o, createElementBlock as a, normalizeClass as L, unref as e, normalizeStyle as te, createVNode as m, withCtx as c, createTextVNode as z, toDisplayString as $, createBlock as d, createCommentVNode as _, resolveComponent as O, resolveDirective as q, Fragment as w, mergeProps as P, withModifiers as T, renderList as A, withDirectives as f, inject as re, onMounted as oe, computed as j, createElementVNode as l, renderSlot as se, resolveDynamicComponent as ae, pushScopeId as F, popScopeId as G, provide as U } from "vue";
import { useBreakpoints as ne, useNavbar as ie } from "@aeria-ui/core";
import { useStore as N, getGlobalStateManager as H } from "@aeria-ui/state-management";
import { t as D } from "@aeria-ui/i18n";
import { AeriaIcon as b, AeriaBadge as J, AeriaAsync as le, AeriaContextMenu as ue, AeriaPicture as de } from "@aeria-ui/ui";
const k = ne(), B = {}, V = x({
  routes: [],
  router: {},
  isCurrent: (...t) => !1
}), ce = (t, r) => r in B ? B[r] : B[r] = t(), C = (t, ...r) => {
  if (!k.value.md) {
    const s = N("meta", t);
    s.menu.visible = !1;
  }
  return window.scrollTo(0, 0), V.router.push(...r);
}, { routes: W, isCurrent: Q } = ee(V), X = (t) => {
  if ("children" in t)
    return t.children.some((r) => {
      if (typeof r != "string") {
        if ("path" in r)
          return Q.value(r);
        if ("children" in r)
          return X(r);
      }
    });
}, Y = (t) => "collapsed" in t ? t.collapsed !== "user" && X(t) ? (t.collapsed = !1, !0) : !t.collapsed : "children" in t, M = (t, r) => {
  if ("collapsed" in t) {
    t.collapsed = t.collapsed ? !1 : "user";
    return;
  }
  C(r, {
    path: t.path
  });
}, me = { key: 1 }, _e = /* @__PURE__ */ K({
  __name: "navbar-entry",
  props: {
    item: {},
    memoKey: {},
    level: { default: 0 }
  },
  setup(t) {
    return (r, s) => (o(), a("div", {
      class: L(`
      navbar__route
      ${e(Q)(r.item) && "navbar__route--current"}
      ${r.level > 0 && "navbar__route--sub"}
    `),
      style: te(`--level-padding: ${r.level};`)
    }, [
      m(e(b), {
        icon: r.item.meta.icon,
        style: { "--icon-size": "1.2rem", "--icon-color": "var(--theme-brand-color-shade-2)" }
      }, {
        default: c(() => [
          z($(e(D)(r.item.meta.title, { plural: !0, capitalize: !0 })), 1)
        ]),
        _: 1
      }, 8, ["icon"]),
      r.item.badge ? (o(), d(e(J), {
        key: 0,
        alt: ""
      }, {
        default: c(() => [
          m(e(le), {
            promise: e(ce)(r.item.badge, r.memoKey)
          }, null, 8, ["promise"])
        ]),
        _: 1
      })) : _("", !0),
      "collapsed" in r.item ? (o(), a("div", me, [
        e(Y)(r.item) ? (o(), d(e(b), {
          key: 0,
          icon: "caret-up"
        })) : (o(), d(e(b), {
          key: 1,
          icon: "caret-down"
        }))
      ])) : _("", !0)
    ], 6));
  }
}), E = (t, r) => {
  const s = t.__vccOpts || t;
  for (const [v, p] of r)
    s[v] = p;
  return s;
}, Z = /* @__PURE__ */ E(_e, [["__scopeId", "data-v-ca2d76f4"]]), pe = { key: 1 }, ve = ["onClick"], be = /* @__PURE__ */ K({
  __name: "navbar-entries",
  props: {
    item: {},
    memoKey: {},
    level: { default: 0 }
  },
  setup(t) {
    const r = H();
    return (s, v) => {
      const p = O("navbar-entries", !0), S = q("clickable");
      return o(), a(w, null, [
        "meta" in s.item ? (o(), d(Z, P({ key: 0 }, {
          item: s.item,
          level: s.level,
          memoKey: s.memoKey
        }, {
          onClick: v[0] || (v[0] = T((h) => e(M)(s.item, e(r)), ["stop"]))
        }), null, 16)) : _("", !0),
        e(Y)(s.item) ? (o(), a("div", pe, [
          (o(!0), a(w, null, A(s.item.children, (h, I) => f((o(), a("div", {
            key: `child-${I}`,
            onClick: T((n) => e(M)(h, e(r)), ["stop"])
          }, [
            m(p, P({ ref_for: !0 }, {
              item: h,
              level: "meta" in s.item ? s.level + 1 : s.level,
              memoKey: `${s.memoKey}-${I}`
            }), null, 16)
          ], 8, ve)), [
            [S]
          ])), 128))
        ])) : _("", !0)
      ], 64);
    };
  }
}), he = (t) => (F("data-v-0f79053e"), t = t(), G(), t), fe = { class: "dashboard aeria-body" }, ke = { class: "dashboard__navbar-top" }, ye = ["src"], ge = { class: "dashboard__navbar" }, $e = {
  key: 0,
  class: "dashboard__route-group"
}, Ce = { class: "dashboard__content" }, we = { class: "dashboard__topbar" }, Se = ["src"], Ie = {
  key: 2,
  class: "dashboard__view-title"
}, ze = /* @__PURE__ */ he(() => /* @__PURE__ */ l("div", { class: "dashboard__topbar-separator" }, null, -1)), Ae = { class: "dashboard__user" }, Ke = { class: "dashboard__user-context-header" }, Re = { class: "tx-text-[12pt]" }, Ue = { class: "dashboard__user-context-roles" }, Be = /* @__PURE__ */ K({
  __name: "dashboard-layout",
  setup(t) {
    const r = re("menuSchema", []), s = N("meta"), v = N("user"), p = H();
    oe(async () => {
      const n = await ie({ schema: r });
      Object.assign(V, n);
    });
    const S = new URL("/logo.png", import.meta.url).href, h = j(() => W.value.filter((n) => n.children.length === 0)), I = j(() => W.value.filter((n) => n.children.length > 0));
    return (n, u) => {
      const R = O("router-view"), y = q("clickable");
      return o(), a("div", fe, [
        l("div", {
          class: L(`
      no-print
      dashboard__sidebar
      ${e(s).menu.visible && "dashboard__sidebar--visible"}
    `)
        }, [
          l("div", ke, [
            e(k).md ? _("", !0) : f((o(), d(e(b), {
              key: 0,
              icon: "x",
              onClick: u[0] || (u[0] = (i) => e(s).menu.visible = !1)
            }, null, 512)), [
              [y]
            ]),
            f(l("img", {
              src: e(S),
              class: "dashboard__navbar-logo",
              onClick: u[1] || (u[1] = (i) => e(C)(e(p), "/dashboard"))
            }, null, 8, ye), [
              [y]
            ])
          ]),
          l("nav", ge, [
            h.value.length > 0 ? (o(), a("div", $e, [
              (o(!0), a(w, null, A(h.value, (i, g) => (o(), d(Z, {
                key: `item-${g}`,
                item: i,
                "memo-key": `entry-${g}`,
                onClick: (Ee) => e(M)(i, e(p))
              }, null, 8, ["item", "memo-key", "onClick"]))), 128))
            ])) : _("", !0),
            (o(!0), a(w, null, A(I.value, (i, g) => (o(), a("div", {
              key: `item-${g}`,
              class: "dashboard__route-group"
            }, [
              m(be, {
                item: i,
                "memo-key": `parent-${g}`
              }, null, 8, ["item", "memo-key"])
            ]))), 128))
          ])
        ], 2),
        l("div", Ce, [
          l("div", we, [
            e(k).md ? _("", !0) : f((o(), d(e(b), {
              key: 0,
              icon: "list",
              onClick: u[2] || (u[2] = (i) => e(s).menu.visible = !0)
            }, null, 512)), [
              [y]
            ]),
            e(k).md ? (o(), a("div", Ie, $(e(D)(n.viewTitle, { capitalize: !0 })), 1)) : f((o(), a("img", {
              key: 1,
              src: e(S),
              class: "dashboard__topbar-logo",
              onClick: u[3] || (u[3] = (i) => e(C)(e(p), "/dashboard"))
            }, null, 8, Se)), [
              [y]
            ]),
            e(k).md ? (o(), d(R, {
              key: 3,
              name: "topbar"
            })) : _("", !0),
            ze,
            n.$slots.super ? se(n.$slots, "super", { key: 4 }, void 0, !0) : _("", !0),
            m(e(ue), null, {
              header: c(() => [
                l("div", Ke, [
                  l("div", Re, $(n.currentUser.name), 1),
                  l("div", Ue, [
                    (o(!0), a(w, null, A(n.currentUser.roles, (i) => (o(), d(e(J), {
                      key: `role-${i}`,
                      large: ""
                    }, {
                      default: c(() => [
                        z($(e(D)(i)), 1)
                      ]),
                      _: 2
                    }, 1024))), 128))
                  ])
                ])
              ]),
              profile: c(() => [
                m(e(b), {
                  icon: "user-square",
                  onClick: u[4] || (u[4] = (i) => e(C)(e(p), "/dashboard/user/profile"))
                }, {
                  default: c(() => [
                    z(" Perfil ")
                  ]),
                  _: 1
                })
              ]),
              logout: c(() => [
                m(e(b), {
                  icon: "sign-out",
                  onClick: u[5] || (u[5] = (i) => e(C)(e(p), "/user/signin").then(() => e(v).$actions.signout()))
                }, {
                  default: c(() => [
                    z(" Sair ")
                  ]),
                  _: 1
                })
              ]),
              default: c(() => [
                f((o(), a("div", Ae, [
                  m(e(de), {
                    alt: "User picture",
                    link: n.currentUser.picture,
                    class: "dashboard__user-picture"
                  }, null, 8, ["link"]),
                  l("div", null, "Olá, " + $(n.currentUser.name.split(" ")[0]), 1)
                ])), [
                  [y]
                ])
              ]),
              _: 1
            })
          ]),
          l("div", {
            class: L({
              dashboard__view: !0,
              "dashboard__view--padded": !n.$route.meta.fill
            })
          }, [
            e(k).md ? _("", !0) : (o(), d(R, {
              key: 0,
              name: "topbar"
            })),
            m(R, null, {
              default: c(({ Component: i }) => [
                (o(), d(ae(i)))
              ]),
              _: 1
            })
          ], 2)
        ])
      ]);
    };
  }
}), Fe = /* @__PURE__ */ E(Be, [["__scopeId", "data-v-0f79053e"]]), Le = (t) => (F("data-v-5ca741fb"), t = t(), G(), t), Ne = { class: "auth" }, De = { class: "auth__content aeria-surface" }, Me = { class: "auth__view" }, Oe = /* @__PURE__ */ Le(() => /* @__PURE__ */ l("div", { class: "auth__background" }, null, -1)), Ve = /* @__PURE__ */ K({
  __name: "auth-wall",
  setup(t) {
    return U("buttonSize", "large"), U("inputVariant", "bold"), U("innerInputLabel", !0), (r, s) => {
      const v = O("router-view");
      return o(), a("div", Ne, [
        l("div", De, [
          l("div", Me, [
            m(v)
          ])
        ]),
        Oe
      ]);
    };
  }
}), Ge = /* @__PURE__ */ E(Ve, [["__scopeId", "data-v-5ca741fb"]]);
export {
  Ge as AuthWall,
  Fe as DashboardLayout
};
