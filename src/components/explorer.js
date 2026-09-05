import { animate, stagger } from "animejs";
import {
  escapeHTML,
  normalizeSearch,
  prefersReducedMotion,
  qs,
  qsa,
  scrollToElement
} from "../utils.js";

const STORAGE_KEY = "fpv-index:favorites";

export function initExplorer(resources, categories, levels) {
  const grid = qs("#resource-grid");
  const categoryRoot = qs("#category-filters");
  const levelRoot = qs("#level-filters");
  const searchInput = qs("#resource-search");
  const clearSearch = qs("#clear-search");
  const countOutput = qs("#result-count");
  const favoritesButton = qs("#favorites-filter");
  const emptyState = qs("#empty-state");
  const resetButton = qs("#reset-filters");

  const state = {
    query: "",
    category: "ALL",
    level: "ALL",
    favoritesOnly: false,
    favorites: loadFavorites()
  };

  function loadFavorites() {
    try {
      return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
    } catch {
      return new Set();
    }
  }

  function saveFavorites() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...state.favorites])
    );
  }

  function resourceMatches(resource) {
    if (state.category !== "ALL" && resource.category !== state.category) {
      return false;
    }

    if (state.level !== "ALL" && !resource.levels.includes(state.level)) {
      return false;
    }

    if (state.favoritesOnly && !state.favorites.has(resource.id)) {
      return false;
    }

    if (!state.query) return true;

    const haystack = normalizeSearch(
      [
        resource.name,
        resource.category,
        resource.subcategory,
        resource.type,
        resource.description,
        resource.why,
        ...resource.tags,
        ...resource.technologies,
        ...resource.levels
      ].join(" ")
    );

    return haystack.includes(normalizeSearch(state.query));
  }

  function renderCategoryFilters() {
    categoryRoot.innerHTML = categories
      .map((category) => {
        const count =
          category.id === "ALL"
            ? resources.length
            : resources.filter(
                (resource) => resource.category === category.id
              ).length;

        const active = state.category === category.id;

        return `
          <button
            type="button"
            class="filter-chip ${active ? "is-active" : ""}"
            data-category="${category.id}"
            aria-pressed="${active}"
          >
            <span>${escapeHTML(category.label)}</span>
            <small>${String(count).padStart(2, "0")}</small>
          </button>
        `;
      })
      .join("");
  }

  function renderLevelFilters() {
    levelRoot.innerHTML = `
      <legend>Niveau</legend>
      ${levels
        .map((level) => {
          const active = state.level === level;
          const label = level === "ALL" ? "Tous" : level;

          return `
            <button
              type="button"
              class="${active ? "is-active" : ""}"
              data-level="${escapeHTML(level)}"
              aria-pressed="${active}"
            >
              ${escapeHTML(label)}
            </button>
          `;
        })
        .join("")}
    `;
  }

  function renderCards() {
    const filtered = resources.filter(resourceMatches);

    countOutput.textContent = `${filtered.length} résultat${
      filtered.length > 1 ? "s" : ""
    }`;

    emptyState.hidden = filtered.length !== 0;
    grid.hidden = filtered.length === 0;

    grid.innerHTML = filtered
      .map((resource, index) => resourceCard(resource, index))
      .join("");

    favoritesButton.setAttribute(
      "aria-pressed",
      String(state.favoritesOnly)
    );
    favoritesButton.classList.toggle("is-active", state.favoritesOnly);

    bindCardEvents();

    if (!prefersReducedMotion()) {
      const cardContents = qsa(".resource-card__inner", grid);

      animate(cardContents, {
        opacity: { from: 0 },
        y: { from: 18 },
        duration: 460,
        delay: stagger(34),
        ease: "out(3)"
      });
    }
  }

  function resourceCard(resource, index) {
    const favorite = state.favorites.has(resource.id);
    const number = String(index + 1).padStart(2, "0");

    return `
      <article
        class="resource-card ${
          resource.featured ? "resource-card--featured" : ""
        }"
        data-resource-id="${resource.id}"
        data-tilt
      >
        <div class="resource-card__inner">
          <div class="resource-card__topline">
            <span>${number} / ${escapeHTML(resource.category)}</span>
            <button
              class="favorite-button ${favorite ? "is-active" : ""}"
              type="button"
              data-favorite="${resource.id}"
              aria-label="${
                favorite ? "Retirer des favoris" : "Ajouter aux favoris"
              }"
              aria-pressed="${favorite}"
            >
              ${favorite ? "★" : "☆"}
            </button>
          </div>

          <div class="resource-card__body">
            <div class="resource-card__classification">
              <span>${escapeHTML(resource.subcategory)}</span>
              <span>${escapeHTML(resource.authority)}</span>
            </div>

            <h3>${escapeHTML(resource.name)}</h3>
            <p>${escapeHTML(resource.description)}</p>
          </div>

          <div class="resource-card__tags">
            ${resource.tags
              .slice(0, resource.featured ? 5 : 3)
              .map((tag) => `<span>${escapeHTML(tag)}</span>`)
              .join("")}
          </div>

          <div class="resource-card__footer">
            <div
              class="utility-meter"
              aria-label="Utilité ${resource.rating} sur 5"
            >
              ${Array.from({ length: 5 }, (_, position) => {
                return `<i class="${
                  position < resource.rating ? "is-filled" : ""
                }"></i>`;
              }).join("")}
            </div>

            <button
              class="resource-open"
              type="button"
              data-open-resource="${resource.id}"
            >
              Inspecter
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function bindCardEvents() {
    qsa("[data-favorite]", grid).forEach((button) => {
      button.addEventListener("click", () => {
        toggleFavorite(button.dataset.favorite);
      });
    });

    qsa("[data-open-resource]", grid).forEach((button) => {
      button.addEventListener("click", () => {
        const resource = resources.find(
          (item) => item.id === button.dataset.openResource
        );

        if (resource) {
          window.dispatchEvent(
            new CustomEvent("resource:open", { detail: resource })
          );
        }
      });
    });

    if (window.matchMedia("(pointer: fine)").matches) {
      qsa("[data-tilt]", grid).forEach(bindTilt);
    }
  }

  function bindTilt(card) {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      card.style.setProperty("--tilt-x", `${-y * 3.5}deg`);
      card.style.setProperty("--tilt-y", `${x * 4.5}deg`);
      card.style.setProperty("--pointer-x", `${(x + 0.5) * 100}%`);
      card.style.setProperty("--pointer-y", `${(y + 0.5) * 100}%`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  }

  function toggleFavorite(id) {
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
    } else {
      state.favorites.add(id);
    }

    saveFavorites();
    renderCards();
  }

  function setCategory(category) {
    state.category = category;
    state.favoritesOnly = false;
    renderCategoryFilters();
    renderCards();
  }

  function setFavoritesOnly(enabled = true) {
    state.favoritesOnly = enabled;
    renderCards();
  }

  function reset() {
    state.query = "";
    state.category = "ALL";
    state.level = "ALL";
    state.favoritesOnly = false;
    searchInput.value = "";

    renderCategoryFilters();
    renderLevelFilters();
    renderCards();
  }

  categoryRoot.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    setCategory(button.dataset.category);
  });

  levelRoot.addEventListener("click", (event) => {
    const button = event.target.closest("[data-level]");
    if (!button) return;

    state.level = button.dataset.level;
    renderLevelFilters();
    renderCards();
  });

  searchInput.addEventListener("input", () => {
    state.query = searchInput.value;
    clearSearch.classList.toggle("is-visible", Boolean(state.query));
    renderCards();
  });

  clearSearch.addEventListener("click", () => {
    state.query = "";
    searchInput.value = "";
    clearSearch.classList.remove("is-visible");
    searchInput.focus();
    renderCards();
  });

  favoritesButton.addEventListener("click", () => {
    setFavoritesOnly(!state.favoritesOnly);
  });

  resetButton.addEventListener("click", reset);

  renderCategoryFilters();
  renderLevelFilters();
  renderCards();

  return {
    setCategory(category) {
      setCategory(category);
      scrollToElement("#explorer");
    },

    showFavorites() {
      setFavoritesOnly(true);
      scrollToElement("#explorer");
    },

    focusSearch() {
      scrollToElement("#explorer", searchInput);
    },

    reset
  };
}
