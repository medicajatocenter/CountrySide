let prodottoInComposizione = null;

/* =========================
   AVVIO COMPOSIZIONE
   ========================= */
function gestisciAggiunta(id, nome, prezzo, composizione, menuPlus) {
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
        <h3>${dati.nome}</h3>
        ${dati.img ? `<img src="${dati.img}" class="modal-img">` : ""}
        <p><strong>Ingredienti</strong></p>
  `;

  /* INGREDIENTI STANDARD */
  dati.standard.forEach(ing => {
    html += `
      <label>
        <input type="checkbox" checked data-ing="${ing}">
        ${ing}
      </label><br>
    `;
  });

  if (dati.salse && dati.salse.length) {
  html += `<p><strong>Salse</strong></p>`;

  dati.salse.forEach(idSalsa => {
    const salsa = MENU_SALSE.find(s => s.id === idSalsa);
    if (!salsa) return;

    html += `
      <label>
        <input type="checkbox" data-salsa="${salsa.nome}">
        ${salsa.nome}
      </label><br>
    `;
  });
}


  /* EXTRA */
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

  /* MENU PLUS */
  if (prodottoInComposizione.menuPlus?.attivo) {
    html += `
      <hr>
      <label class="menu-plus">
        <input type="checkbox" id="menuPlusCheck">
        ${prodottoInComposizione.menuPlus.nome}
      </label>

      <div id="menuPlusBibitaBox" style="display:none; margin-top:10px;">
        <p><strong>Scegli la bibita:</strong></p>
        ${MENU_PLUS_BIBITE.map(b => `
          <label>
            <input type="radio" name="menuPlusBibita" value="${b.nome}">
            ${b.nome}
          </label><br>
        `).join("")}
      </div>
    `;
  }

  html += `
        <br>
        <button onclick="confermaComposizione()">Aggiungi</button>
        <button onclick="chiudiComposizione()">Annulla</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", html);

  /* MOSTRA BIBITE SE MENU SPUNTATO */
  const check = document.getElementById("menuPlusCheck");
  const box = document.getElementById("menuPlusBibitaBox");

  if (check && box) {
    check.addEventListener("change", () => {
      box.style.display = check.checked ? "block" : "none";
    });
  }
}

/* =========================
   CONFERMA
   ========================= */
function confermaComposizione() {
  const modal = document.querySelector(".modal");
  if (!modal) return;

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
    if (dati.salse && dati.salse.length) {
  html += `<p><strong>Salse</strong></p>`;

  dati.salse.forEach(idSalsa => {
    const salsa = MENU_SALSE.find(s => s.id === idSalsa);
    if (!salsa) return;

    html += `
      <label>
        <input type="checkbox" data-salsa="${salsa.nome}">
        ${salsa.nome}
      </label><br>
    `;
  });
}

  });

  /* MENU PLUS */
  const menuCheck = document.getElementById("menuPlusCheck");
  if (menuCheck && menuCheck.checked) {
    const bibita = modal.querySelector('input[name="menuPlusBibita"]:checked');
    if (!bibita) {
      alert("Seleziona una bibita per il Menu");
      return;
    }

    extraPrezzo += prodottoInComposizione.menuPlus.prezzo;
    note.push("Menu + patatine");
    note.push("Bibita: " + bibita.value);
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
}
