/** Accumulate visible time using a monotonic clock. */
export function createVisibleTimer(now: () => number, initiallyVisible: boolean) {
  let total = 0;
  let since: number | null = initiallyVisible ? now() : null;

  return {
    setVisible(visible: boolean) {
      if (visible && since === null) since = now();
      if (!visible && since !== null) {
        total += Math.max(0, now() - since);
        since = null;
      }
    },
    durationMs() {
      return Math.round(total + (since === null ? 0 : Math.max(0, now() - since)));
    },
  };
}
