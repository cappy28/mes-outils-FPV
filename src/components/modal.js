import { animate } from "animejs";
import { escapeHTML, prefersReducedMotion, qs } from "../utils.js";

export function initResourceModal() {
  const dialog = qs("#resource-dialog");
  const content = qs("#resource-dialog-content");
  const surface = qs(".resource-dialog__surface", dialog);
  const closeButton = qs("[data-modal-close]", dialog);

  let lastFocusedElement = null;
  let closing = false;

  function open(resource) {
    lastFocusedElement = document.activeElement;

    content.innerHTML = `
      <div class="resource-detail">
        <div class="resource-detail__meta">
          <span>${escapeHTML(resource.category)}</span>
          <span>${escapeHTML(resource.subcategory)}</span>
          <span>${escapeHTML(resource.authority)}</span>
        </div>

        <h2>${escapeHTML(resource.name)}</h2>

        <p class="resource-detail__description">
          ${escapeHTML(resource.description)}
        </p>

        <div class="resource-detail__why">
          <span>POURQUOI L’OUVRIR</span>
          <p>${escapeHTML(resource.why)}</p>
        </div>

        <dl class="resource-detail__facts">
          <div>
            <dt>Type</dt>
            <dd>${escapeHTML(resource.type)}</dd>
          </div>
          <div>
            <dt>Niveaux</dt>
            <dd>${resource.levels.map(escapeHTML).join(" · ")}</dd>
          </div>
          <div>
            <dt>Technologies</dt>
            <dd>${resource.technologies.map(escapeHTML).join(" · ")}</dd>
          </div>
          <div>
            <dt>Revue</dt>
            <dd>${escapeHTML(resource.reviewed)}</dd>
          </div>
        </dl>

        <div class="resource-detail__tags">
          ${resource.tags
            .map((tag) => `<span>${escapeHTML(tag)}</span>`)
            .join("")}
        </div>

        ${
          ["TUNING", "DIGITAL", "BUILD"].includes(resource.category)
            ? `
              <p class="resource-detail__warning">
                Retirez les hélices avant toute configuration moteur ou firmware.
                Sauvegardez votre configuration et vérifiez la documentation
                correspondant exactement à votre matériel.
              </p>
            `
            : ""
        }

        <a
          class="resource-detail__link"
          href="${escapeHTML(resource.url)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Ouvrir la ressource</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    `;

    if (!dialog.open) dialog.showModal();

    document.body.classList.add("modal-open");

    if (!prefersReducedMotion()) {
      animate(surface, {
        opacity: { from: 0 },
        y: { from: 28 },
        scale: { from: 0.985 },
        duration: 430,
        ease: "out(4)"
      });
    }

    closeButton.focus({ preventScroll: true });
  }

  function close() {
    if (!dialog.open || closing) return;

    closing = true;

    const finish = () => {
      dialog.close();
      document.body.classList.remove("modal-open");
      closing = false;
      lastFocusedElement?.focus?.();
    };

    if (prefersReducedMotion()) {
      finish();
      return;
    }

    animate(surface, {
      opacity: 0,
      y: 18,
      duration: 180,
      ease: "in(2)",
      onComplete: finish
    });
  }

  window.addEventListener("resource:open", (event) => {
    open(event.detail);
  });

  closeButton.addEventListener("click", close);

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });

  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    close();
  });
}
