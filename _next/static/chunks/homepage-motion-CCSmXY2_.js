import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t } from "./framework-D_rUT4EX.js";
var n = e(t(), 1);
function r({ mode: e = `auto` }) {
  return (
    (0, n.useEffect)(() => {
      let t = document.documentElement,
        n = window.matchMedia(
          `(prefers-reduced-motion: no-preference) and (min-width: 1001px) and (pointer: fine)`
        ),
        r = () => {
          let r =
              /\b(?:Chrome|Chromium|Edg)\//.test(navigator.userAgent) &&
              !/(?:Android|Mobile)/.test(navigator.userAgent),
            i =
              `ScrollTimeline` in window &&
              `ViewTimeline` in window &&
              CSS.supports(`animation-timeline`, `scroll(root block)`) &&
              CSS.supports(`animation-timeline`, `view(block)`) &&
              CSS.supports(`animation-range`, `entry 25% contain 70%`) &&
              CSS.supports(`timeline-scope`, `--publication`);
          e === `auto` && n.matches && r && i
            ? (t.dataset.nativeMotion = `enabled`)
            : delete t.dataset.nativeMotion;
        };
      return (
        r(),
        n.addEventListener(`change`, r),
        () => {
          n.removeEventListener(`change`, r), delete t.dataset.nativeMotion;
        }
      );
    }, [e]),
    null
  );
}
export { r as default };
