document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("menu-container");
  const infoBox = document.getElementById("info-ordine");

  if (!container || typeof MENU === "undefined") {
    console.error("Menu container o MENU non trovato");
    return;
  }

  /* =========================
     INFO ORDINE
     ========================= */
  const mode = localStorage.getItem("ordine_mode");

  if (infoBox) {
    if (mode === "tavolo") {
      infoBox.textContent =
        `🍽️ Tavolo ${localStorage.getItem("tavolo")} – ` +
        `${localStorage.getItem("commensali")} coperti`;
    } else {
      infoBox.textContent = "🏠 Ordine a domicilio / asporto";
    }
  }

  /* =========================
     RENDER MENU
     ========================= */
  Object.values(MENU).forEach(categoria => {
    const wrapper = document.createElement("div");
    wrapper.className = "menu-category";

    /* HEADER CATEGORIA */
    const header = document.createElement("div");
    header.className = "category-header";
    header.innerHTML = `
      <span>${categoria.nome}</span>
      <span class="arrow">▸</span>
    `;

    const content = document.createElement("div");
    content.className = "category-content";
    content.style.display = "none";

    header.addEventListener("click", () => {
      const open = content.style.display === "block";
      content.style.display = open ? "none" : "block";
      header.querySelector(".arrow").textContent = open ? "▸" : "▾";
    });

    /* =========================
       PRODOTTI
       ========================= */
    if (!categoria.items || categoria.items.length === 0) {
      content.innerHTML = `
        <div class="menu-item">
          <span class="nome">In aggiornamento</span>
        </div>
      `;
    } else {
      categoria.items.forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-item";

        /* INGREDIENTI PREVIEW */
        let ingredientiHtml = "";
        if (window.INGREDIENTI && INGREDIENTI[item.id]) {
          ingredientiHtml = `
            <div class="ingredienti">
              ${INGREDIENTI[item.id].join(", ")}
            </div>
          `;
        }

        card.innerHTML = `
          <div class="menu-row">
            <div class="menu-info">
              <span class="nome">${item.nome}</span>
              ${ingredientiHtml}
            </div>
            <div class="menu-action">
              <span class="prezzo">€${item.prezzo.toFixed(2)}</span>
            </div>
          </div>
        `;

        /* =========================
           BOTTONE AGGIUNGI (FIX)
           ========================= */
        const btn = document.createElement("button");
        btn.className = "add-btn";
        btn.textContent = "Aggiungi";

        btn.addEventListener("click", () => {
          const haComposizione =
            typeof INGREDIENTI_COMPOSIZIONE !== "undefined" &&
            INGREDIENTI_COMPOSIZIONE[item.id];

          gestisciAggiunta(
            item.id,
            item.nome,
            item.prezzo,
            !!haComposizione,
            haComposizione
              ? {
                  attivo: true,
                  nome: "Menu + patatine e bibita (+2,50€)",
                  prezzo: 2.50
                }
              : null
          );
        });

        card.querySelector(".menu-action").appendChild(btn);
        content.appendChild(card);
      });
    }

    wrapper.appendChild(header);
    wrapper.appendChild(content);
    container.appendChild(wrapper);
  });
});
