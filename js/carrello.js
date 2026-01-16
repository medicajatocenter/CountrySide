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

  // 🔥 aggiorna totale nel menu
  const totaleSpan = document.getElementById("totale");
  if (totaleSpan) {
    totaleSpan.textContent = totale.toFixed(2);
  }

  // 🔥 persistenza
  localStorage.setItem("carrello", JSON.stringify(carrello));
  localStorage.setItem("totale", totale.toFixed(2));

  // 🔥 aggiorna anteprima (se presente)
  if (typeof generaAnteprima === "function") {
    generaAnteprima();
  }
}

/* =========================
   CARICAMENTO INIZIALE
   ========================= */
document.addEventListener("DOMContentLoaded", () => {

  const salvato = localStorage.getItem("carrello");
  const tot = localStorage.getItem("totale");

  if (salvato) carrello = JSON.parse(salvato);
  if (tot) totale = parseFloat(tot);

  generaAnteprima();
});

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

  let testo = "🍔 ORDINE COUNTRY SIDE\n\n";

  Object.values(carrello).forEach(item => {
    testo += `• ${item.nome} x${item.qty}\n`;

    if (item.note?.length) {
      item.note.forEach(n => {
        testo += `   - ${n}\n`;
      });
    }
  });

  testo += `\nTotale: €${totale.toFixed(2)}`;

  box.textContent = testo;
}

/* =========================
   INVIO WHATSAPP + RESET
   ========================= */
function inviaWhatsApp() {

  generaAnteprima();

  const box = document.getElementById("anteprima-messaggio");
  if (!box.textContent) return;

  const numero = "393314794226";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(box.textContent)}`;

  window.open(url, "_blank");

  carrello = {};
  totale = 0;

  localStorage.removeItem("carrello");
  localStorage.removeItem("totale");

  generaAnteprima();
}


