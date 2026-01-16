let carrello = {};
let totale = 0;

/* =========================
   AGGIUNTA PRODOTTO
   ========================= */
function addItem(id, nome, prezzo) {

  if (!carrello[id]) {
    carrello[id] = {
      id,
      nome,
      prezzo,
      qty: 1,
      note: []
    };
  } else {
    carrello[id].qty += 1;
  }

  totale += prezzo;

  salvaCarrello();
  aggiornaTotaleUI();
  generaAnteprima();
}

/* =========================
   RIMOZIONE PRODOTTO
   ========================= */
function removeItem(id) {

  if (!carrello[id]) return;

  totale -= carrello[id].prezzo;

  if (carrello[id].qty > 1) {
    carrello[id].qty -= 1;
  } else {
    delete carrello[id];
  }

  if (totale < 0) totale = 0;

  salvaCarrello();
  aggiornaTotaleUI();
  generaAnteprima();
}

/* =========================
   SALVATAGGIO
   ========================= */
function salvaCarrello() {
  localStorage.setItem("carrello", JSON.stringify(carrello));
  localStorage.setItem("totale", totale.toFixed(2));
}

/* =========================
   CARICAMENTO INIZIALE
   ========================= */
document.addEventListener("DOMContentLoaded", () => {

  const salvato = localStorage.getItem("carrello");
  const tot = localStorage.getItem("totale");

  if (salvato) carrello = JSON.parse(salvato);
  if (tot) totale = parseFloat(tot);

  aggiornaTotaleUI();
  generaAnteprima();
});

/* =========================
   TOTALE UI
   ========================= */
function aggiornaTotaleUI() {
  const totaleSpan = document.getElementById("totale");
  if (totaleSpan) {
    totaleSpan.textContent = totale.toFixed(2);
  }
}

/* =========================
   ANTEPRIMA CARRELLO
   ========================= */
function generaAnteprima() {

  const box = document.getElementById("anteprima-messaggio");
  if (!box) return;

  if (Object.keys(carrello).length === 0) {
    box.innerHTML = "🛒 Carrello vuoto";
    return;
  }

  let html = `<strong>🍔 ORDINE COUNTRY SIDE</strong><br><br>`;

  Object.values(carrello).forEach(item => {
    html += `
      <div style="margin-bottom:8px">
        ${item.nome} × ${item.qty}
        <button onclick="removeItem('${item.id}')">➖</button>
        <button onclick="addItem('${item.id}', '${item.nome}', ${item.prezzo})">➕</button>
      </div>
    `;

    if (item.note?.length) {
      item.note.forEach(n => {
        html += `<div style="font-size:12px;color:#666">– ${n}</div>`;
      });
    }
  });

  html += `<br><strong>Totale: €${totale.toFixed(2)}</strong>`;

  box.innerHTML = html;
}

/* =========================
   CONTINUA → CARRELLO
   ========================= */
function vaiCarrello() {

  if (Object.keys(carrello).length === 0) {
    alert("Il carrello è vuoto");
    return;
  }

  window.location.href = "carrello.html";
}

/* =========================
   INVIO WHATSAPP + RESET
   ========================= */
function inviaWhatsApp() {

  const box = document.getElementById("anteprima-messaggio");
  if (!box || !box.textContent) return;

  const numero = "393314794226";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(box.textContent)}`;

  window.open(url, "_blank");

  carrello = {};
  totale = 0;

  localStorage.removeItem("carrello");
  localStorage.removeItem("totale");

  aggiornaTotaleUI();
  generaAnteprima();
}
