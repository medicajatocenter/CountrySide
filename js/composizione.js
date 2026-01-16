let prodottoInComposizione = null;

/* =========================
   AVVIO COMPOSIZIONE
   ========================= */
function gestisciAggiunta(id, nome, prezzo, composizione, menuPlus = null) {
  if (!composizione) {
    addItem(id, nome, prezzo);
    return;
  }

  prodottoInComposizione = { id, nome, prezzo, menuPlus };
  apriComposizione();
}

/* =========================
   MODAL COMPOSIZIONE
   ========================= */
function apriComposizione() {
  const dati = INGREDIENTI_COMPOSIZIONE[prodottoInComposizione.id];

  if (!dati) {
    addItem(
      prodottoInComposizione.id,
      prodottoInComposizione.nome,
      prodottoInComposizione.prezzo
    );
    return;
  }

  let html = `
    <div class="modal">
      <div class="modal-content">
        <h3>${prodottoInComposizione.nome}</h3>

        ${dati.img ? `<img src="${dati.img}" class="modal-img">` : ""}

        <p><strong>Ingredienti</strong></p>
  `;

  dati.standard.forEach(ing => {
    html += `
      <label>
        <input type="checkbox" checked data-ing="${ing}">
        ${ing}
      </label><br>
    `;
  });

  if (dati.extra?.length) {
    html += `<p><strong>Aggiunte</strong></p>`;
    dati.extra.forEach(extra => {
      html += `
        <label>
          <input type="checkbox" data-extra="${extra.nome}" data-prezzo="${extra.prezzo}">
          ${extra.nome} (+€${extra.prezzo})
        </label><br>
      `;
    });
  }

  /* ===== MENU PLUS + BIBITA ===== */
  if (prodottoInComposizione.menuPlus?.attivo) {
    html += `
      <hr>
      <label>
        <input type="checkbox" id="menuPlusCheck">
        ${prodottoInComposizione.menuPlus.nome}
      </label>

      <div id="bibiteBox" style="display:none; margin-top:10px;">
        <p><strong>Scegli la bibita</strong></p>
        ${MENU_BIBITE.map(b => `
          <label>
            <input type="radio" name="bibita" value="${b}">
            ${b}
          </label><br>
        `).join("")}
      </div>
    `;
  }

  html += `
        <br>
        <button class="btn primary" id="btnConferma">Aggiungi</button>
        <button class="btn secondary" onclick="chiudiComposizione()">Annulla</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", html);

  /* attiva scelta bibita */
  const menuCheck = document.getElementById("menuPlusCheck");
  if (menuCheck) {
    menuCheck.addEventListener("change", () => {
      document.getElementById("bibiteBox").style.display =
        menuCheck.checked ? "block" : "none";
    });
  }

  document
    .getElementById("btnConferma")
    .addEventListener("click", confermaComposizione);
}

/* =========================
   CONFERMA COMPOSIZIONE
   ========================= */
function confermaComposizione() {
  const modal = document.querySelector(".modal");
  if (!modal || !prodottoInComposizione) return;

  let extraPrezzo = 0;
  let note = [];

  modal.querySelectorAll("input").forEach(c => {
    if (c.dataset.ing && !c.checked) {
      note.push(`senza ${c.dataset.ing}`);
    }
    if (c.dataset.extra && c.checked) {
      extraPrezzo += parseFloat(c.dataset.prezzo);
      note.push(`+ ${c.dataset.extra}`);
    }
  });

  /* MENU + BIBITA */
  if (document.getElementById("menuPlusCheck")?.checked) {
    const bibita = modal.querySelector("input[name='bibita']:checked")?.value;

    if (!bibita) {
      alert("Seleziona una bibita per il menu");
      return;
    }

    extraPrezzo += prodottoInComposizione.menuPlus.prezzo;
    note.push(`Menu con bibita: ${bibita}`);
  }

  const variantId = prodottoInComposizione.id + "_" + Date.now();

  addItem(
    variantId,
    prodottoInComposizione.nome,
    prodottoInComposizione.prezzo + extraPrezzo
  );

  carrello[variantId].note = note;

  chiudiComposizione();
}

/* =========================
   CHIUSURA MODAL
   ========================= */
function chiudiComposizione() {
  document.querySelector(".modal")?.remove();
  prodottoInComposizione = null;
}
