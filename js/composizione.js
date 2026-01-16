let prodottoInComposizione = null;

/* =========================
   AVVIO COMPOSIZIONE
   ========================= */
function gestisciAggiunta(id, nome, prezzo, composizione, menuPlus = null) {

  // 🔥 controllo reale: esiste in INGREDIENTI_COMPOSIZIONE?
  if (!composizione || !window.INGREDIENTI_COMPOSIZIONE || !INGREDIENTI_COMPOSIZIONE[id]) {
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
  if (!dati) return;

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
          ${extra.nome} (+€${extra.prezzo.toFixed(2)})
        </label><br>
      `;
    });
  }

  if (prodottoInComposizione.menuPlus?.attivo) {
    html += `
      <hr>
      <label>
        <input type="checkbox" id="menuPlusCheck">
        ${prodottoInComposizione.menuPlus.nome}
      </label>
    `;
  }

  html += `
        <br>
        <button class="btn primary" id="btnConferma">Aggiungi</button>
        <button class="btn secondary" id="btnAnnulla">Annulla</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", html);

  document.getElementById("btnConferma")
    .addEventListener("click", confermaComposizione);

  document.getElementById("btnAnnulla")
    .addEventListener("click", chiudiComposizione);
}

/* =========================
   CONFERMA
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

  if (document.getElementById("menuPlusCheck")?.checked) {
    extraPrezzo += prodottoInComposizione.menuPlus.prezzo;
    note.push("Menu: patatine + bibita");
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
   CHIUSURA
   ========================= */
function chiudiComposizione() {
  document.querySelector(".modal")?.remove();
  prodottoInComposizione = null;
}
