document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("menu-container");
  const infoBox = document.getElementById("info-ordine");

  if (!container || typeof MENU === "undefined") {
    console.error("Menu container o MENU non trovato");
    return;
  }

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

    /* HEADER */
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
      const aperto = content.style.display === "block";
      content.style.display = aperto ? "none" : "block";
      header.querySelector(".arrow").textContent = aperto ? "▸" : "▾";
    });

    /* PRODOTTI */
    if (!categoria.items || categoria.items.length === 0) {
      content.innerHTML = `
        <div class="menu-item">
          <div class="menu-info">
            <span class="nome">In aggiornamento</span>
          </div>
        </div>
      `;
    } else {
      categoria.items.forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-item";

        let ingredientiHtml = "";
        if (typeof INGREDIENTI !== "undefined" && INGREDIENTI[item.id]) {
          ingredientiHtml = `
            <div class="ingredienti">
              ${INGREDIENTI[item.id].join(", ")}
            </div>
          `;
        }

        div.innerHTML = `
          <div class="menu-info">
            <div class="menu-row">
              <div class="menu-text">
                <span class="nome">${item.nome}</span>
                ${ingredientiHtml}
              </div>
              <div class="menu-action">
                <span class="prezzo">€${item.prezzo.toFixed(2)}</span>
              </div>
            </div>
          </div>
        `;

        /* BOTTONE AGGIUNGI (JS PURO, NO INLINE) */
        const btn = document.createElement("button");
        btn.className = "add-btn";
        btn.textContent = "Aggiungi";

        btn.addEventListener("click", () => {
          gestisciAggiunta(
            item.id,
            item.nome,
            item.prezzo,
            item.composizione,
            item.menuPlus || null
          );
        });

        div.querySelector(".menu-action").appendChild(btn);
        content.appendChild(div);
      });
    }

    wrapper.appendChild(header);
    wrapper.appendChild(content);
    container.appendChild(wrapper);
  });
});
