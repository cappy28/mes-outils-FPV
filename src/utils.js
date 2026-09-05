export const qs = (selector, scope = document) =>
  scope.querySelector(selector);

export const qsa = (selector, scope = document) =>
  [...scope.querySelectorAll(selector)];

export const clamp = (value, min, max) =>
  Math.min(Math.max(value, min), max);

export function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function normalizeSearch(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

export function formatDate(value) {
  if (!value) return "Date inconnue";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Date inconnue";

  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(date);
}

export function formatNumber(value, digits = 1) {
  return new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits
  }).format(Number.isFinite(value) ? value : 0);
}

export function getNumericInput(form, name, fallback = 0) {
  const value = Number(form.elements[name]?.value);
  return Number.isFinite(value) ? value : fallback;
}

export function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToElement(target, focusTarget) {
  const element =
    typeof target === "string" ? document.querySelector(target) : target;

  if (!element) return;

  element.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start"
  });

  if (focusTarget) {
    window.setTimeout(
      () => focusTarget.focus({ preventScroll: true }),
      prefersReducedMotion() ? 0 : 550
    );
  }
}
