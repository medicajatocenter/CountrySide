let carrello = {};
let totale = 0;

/* =========================
   INIZIALIZZAZIONE
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  const salvato = localStorage.getItem("carrello");
  const tot = localStorage.getItem("totale");

  if (salvato) carrello = JSON.parse(salvato);
  if (tot) totale = parseFloat(tot);

  aggiornaTotaleUI();
  generaAnteprima();
});

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

  salva();
  aggiornaTotaleUI();

  if (typeof renderCarrello === "function") {
    renderCarrello();
  }

  generaAnteprima();
}

function removeItem(id) {

  if (!carrello[id]) return;

  totale -= carrello[id].prezzo;

  if (carrello[id].qty > 1) {
    carrello[id].qty -= 1;
  } else {
    delete carrello[id];
  }

  if (totale < 0) totale = 0;

  salva();
  aggiornaTotaleUI();

  if (typeof renderCarrello === "function") {
    renderCarrello();
  }

  generaAnteprima();
}

/* =========================
   SALVATAGGIO
   ========================= */
function salva() {
  localStorage.setItem("carrello", JSON.stringify(carrello));
  localStorage.setItem("totale", totale.toFixed(2));
}

/* =========================
   UI TOTALE
   ========================= */
function aggiornaTotaleUI() {
  const totaleEl = document.getElementById("totale");
  if (totaleEl) {
    totaleEl.textContent = totale.toFixed(2);
  }
}

/* =========================
   VAI AL CARRELLO
   ========================= */
function vaiCarrello() {
  if (totale === 0) {
    alert("Seleziona almeno un prodotto");
    return;
  }
  salva();
  window.location.href = "carrello.html";
}

/* =========================
   ANTEPRIMA ORDINE
   ========================= */
function generaAnteprima() {
  const box = document.getElementById("anteprima-messaggio");
  if (!box) return;

  if (Object.keys(carrello).length === 0) {
    box.textContent = "🛒 Carrello vuoto";
    return;
  }

  const mode = localStorage.getItem("ordine_mode");
  const tavolo = localStorage.getItem("tavolo");
  const commensali = parseInt(localStorage.getItem("commensali") || 0);

  let testo = "🍔 ORDINE COUNTRY SIDE\n\n";

  if (mode === "tavolo") {
    testo += `🍽️ Tavolo ${tavolo} – ${commensali} coperti\n\n`;
  } else {
    testo += "🏠 Ordine a domicilio / asporto\n\n";
  }

  Object.values(carrello).forEach(item => {
    testo += `• ${item.nome} x${item.qty}\n`;
    if (item.note?.length) {
      item.note.forEach(n => {
        testo += `   - ${n}\n`;
      });
    }
  });

  let coperto = 0;
  if (mode === "tavolo" && commensali > 0) {
    coperto = commensali * 2;
    testo += `\nCoperto (${commensali} x €2): €${coperto.toFixed(2)}\n`;
  }

  testo += `\nTotale: €${(totale + coperto).toFixed(2)}`;
  box.textContent = testo;
}

/* =========================
   INVIO WHATSAPP + RESET
   ========================= */
function inviaWhatsApp() {
  generaAnteprima();

  const box = document.getElementById("anteprima-messaggio");
  if (!box || !box.textContent) return;

  const numero = "393314794226";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(box.textContent)}`;
  window.open(url, "_blank");

  // RESET COMPLETO
  carrello = {};
  totale = 0;
  localStorage.clear();

  const conferma = document.getElementById("ordine-inviato");
  if (conferma) conferma.style.display = "block";
}

