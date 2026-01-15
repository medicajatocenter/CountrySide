let carrello = {};
let totale = 0;

/* =========================
   CARICAMENTO INIZIALE
   ========================= */
document.addEventListener("DOMContentLoaded", () => {

  const salvato = localStorage.getItem("carrello");
  const tot = localStorage.getItem("totale");

  if (salvato) carrello = JSON.parse(salvato);
  if (tot) totale = parseFloat(tot);

  const mode = localStorage.getItem("ordine_mode");
  const boxDomicilio = document.getElementById("box-domicilio");

  if (mode === "domicilio" && boxDomicilio) {
    boxDomicilio.style.display = "block";
  }

  generaAnteprima();
});

/* =========================
   ANTEPRIMA ORDINE
   ========================= */
function generaAnteprima() {

  const box = document.getElementById("anteprima-messaggio");
  if (!box) return;

  if (!carrello || Object.keys(carrello).length === 0) {
    box.textContent = "Nessun prodotto nel carrello.";
    return;
  }

  const mode = localStorage.getItem("ordine_mode");
  const tavolo = localStorage.getItem("tavolo");
  const commensali = parseInt(localStorage.getItem("commensali") || 0);

  let testo = "🍔 ORDINE COUNTRY SIDE\n\n";

  /* ===== HEADER ===== */
  if (mode === "tavolo") {
    testo += `🍽️ Tavolo ${tavolo} – ${commensali} coperti\n\n`;
  } else {
    const nome = document.getElementById("nomeCliente")?.value || "";
    const indirizzo = document.getElementById("indirizzoCliente")?.value || "";
    const orario = document.getElementById("orarioCliente")?.value || "";

    testo += "🏠 Ordine a domicilio\n";
    if (nome) testo += `Nome: ${nome}\n`;
    if (indirizzo) testo += `Indirizzo: ${indirizzo}\n`;
    if (orario) testo += `Orario: ${orario}\n`;
    testo += "\n";
  }

  /* ===== PRODOTTI ===== */
  Object.values(carrello).forEach(item => {
    testo += `• ${item.nome} x${item.qty}\n`;

    if (item.note && item.note.length > 0) {
      item.note.forEach(n => {
        testo += `   - ${n}\n`;
      });
    }
  });

  /* ===== COPERTO ===== */
  let coperto = 0;
  if (mode === "tavolo" && commensali > 0) {
    coperto = commensali * 2;
    testo += `\nCoperto (${commensali} x €2): €${coperto.toFixed(2)}\n`;
  }

  const totaleFinale = (totale + coperto).toFixed(2);
  testo += `\nTotale: €${totaleFinale}`;

  box.textContent = testo;
}

/* =========================
   INVIO WHATSAPP + RESET
   ========================= */
function inviaWhatsApp() {

  generaAnteprima();

  const box = document.getElementById("anteprima-messaggio");
  if (!box || !box.textContent) {
    alert("Errore nella generazione dell’ordine");
    return;
  }

  const numero = "393314794226"; // tuo numero
  const messaggio = box.textContent;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(messaggio)}`;

  window.open(url, "_blank");

  /* ===== RESET TOTALE ===== */
  carrello = {};
  totale = 0;

  localStorage.removeItem("carrello");
  localStorage.removeItem("totale");
  localStorage.removeItem("tavolo");
  localStorage.removeItem("commensali");

  const conferma = document.getElementById("ordine-inviato");
  if (conferma) conferma.style.display = "block";

  document.getElementById("anteprima-messaggio").textContent =
    "✅ Ordine inviato correttamente";
}
