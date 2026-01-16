/* =========================
   STATO CARRELLO
   ========================= */
let carrello = {};
let totale = 0;

/* =========================
   AGGIUNTA PRODOTTO (🔥 MANCAVA)
   ========================= */
function addItem(id, nome, prezzo) {
  if (!carrello[id]) {
    carrello[id] = {
      id,
      nome,
      prezzo,
      qty: 0,
      note: []
    };
  }

  carrello[id].qty++;
  totale += prezzo;

  salvaCarrello();
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

  Object.values(carrello).forEach(item => {
    testo += `• ${item.nome} x${item.qty}\n`;
    if (item.note?.length) {
      item.note.forEach(n => testo += `   - ${n}\n`);
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
  if (!box?.textContent) {
    alert("Errore nella generazione dell’ordine");
    return;
  }

  const numero = "393314794226";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(box.textContent)}`;
  window.open(url, "_blank");

  carrello = {};
  totale = 0;
  localStorage.clear();

  box.textContent = "✅ Ordine inviato correttamente";
}
