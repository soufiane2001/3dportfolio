/** Mount decorative WebGL only while it can be seen and motion is allowed. */
export function watchDecorativeScene(element: HTMLElement, onChange: (enabled: boolean) => void) {
  const media = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
  let visible = false;
  let disposed = false;
  let idleId: number | undefined;
  let timerId: number | undefined;

  const cancel = () => {
    if (idleId !== undefined) window.cancelIdleCallback(idleId);
    if (timerId !== undefined) window.clearTimeout(timerId);
    idleId = timerId = undefined;
  };
  const eligible = () => !disposed && visible && media.matches && document.visibilityState === "visible";
  const update = () => {
    if (disposed) return;
    cancel();
    if (!eligible()) {
      onChange(false);
      return;
    }
    const enable = () => {
      idleId = timerId = undefined;
      if (eligible()) onChange(true);
    };
    if (typeof window.requestIdleCallback === "function" && typeof window.cancelIdleCallback === "function") {
      idleId = window.requestIdleCallback(enable, { timeout: 2000 });
    } else {
      timerId = window.setTimeout(enable, 1200);
    }
  };

  // The static gradient remains available if IntersectionObserver is absent.
  if (typeof IntersectionObserver !== "function") return () => { disposed = true; };
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    update();
  });
  observer.observe(element);
  media.addEventListener("change", update);
  document.addEventListener("visibilitychange", update);
  return () => {
    disposed = true;
    cancel();
    observer.disconnect();
    media.removeEventListener("change", update);
    document.removeEventListener("visibilitychange", update);
  };
}
