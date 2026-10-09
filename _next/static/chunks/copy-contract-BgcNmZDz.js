import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, r as n } from "./framework-D_rUT4EX.js";
var r = e(t(), 1),
  i = n();
function a({ address: e, label: t }) {
  let [n, a] = (0, r.useState)(``),
    [o, s] = (0, r.useState)(!1),
    c = (0, r.useRef)(!1);
  async function l() {
    if (!(c.current || e === null || !/^0x[0-9a-fA-F]{40}$/.test(e))) {
      (c.current = !0), s(!0), a(``);
      try {
        await navigator.clipboard.writeText(e), a(`Contract address copied.`);
      } catch {
        a(
          `Could not copy automatically. Select and copy the full address above.`
        );
      } finally {
        (c.current = !1), s(!1);
      }
    }
  }
  return (0, i.jsxs)(`div`, {
    className: `verify-copy-control`,
    children: [
      (0, i.jsx)(`button`, {
        type: `button`,
        className: `verify-control`,
        disabled: e === null || o,
        onClick: l,
        "aria-busy": o,
        "aria-describedby": `contract-copy-feedback`,
        children: n === `Contract address copied.` ? `COPIED` : t,
      }),
      (0, i.jsx)(`p`, {
        id: `contract-copy-feedback`,
        className: `verify-copy-feedback`,
        role: `status`,
        "aria-live": `polite`,
        children: n,
      }),
    ],
  });
}
export { a as default };
