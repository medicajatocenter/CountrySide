let carrello = {};
let totale = 0;

/* =========================
   GESTIONE CARRELLO
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
  aggiornaUI(id);
}

function removeItem(id) {
  if (carrello[id] && carrello[id].qty > 0) {
    carrello[id].qty--;
    totale -= carrello[id].prezzo;

    if (carrello[id].qty === 0) {
      delete carrello[id];
    }

    aggiornaUI(id);
  }
}

function aggiornaUI(id) {
  const qtyEl = document.getElementById(`qty-${id}`);
  if (qtyEl) {
    qtyEl.innerText = carrello[id] ? carrello[id].qty : 0;
  }

  const totaleEl = document.getElementById("totale");
  if (totaleEl) {
    totaleEl.innerText = totale.toFixed(2);
  }
}

function vaiCarrello() {
  if (totale === 0) {
    alert("Seleziona almeno un prodotto");
    return;
  }

  localStorage.setItem("carrello", JSON.stringify(carrello));
  localStorage.setItem("totale", totale.toFixed(2));

  window.location.href = "carrello.html";
}

/* =========================
   ANTEPRIMA ORDINE
   ========================= */

function generaAnteprima() {
  const box = document.getElementById("anteprima-messaggio");
  if (!box) return;

  const carrelloSalvato = JSON.parse(localStorage.getItem("carrello"));
  const totaleSalvato = parseFloat(localStorage.getItem("totale") || 0);

  const mode = localStorage.getItem("ordine_mode"); // domicilio | tavolo
  const tavolo = localStorage.getItem("tavolo");
  const commensali = parseInt(localStorage.getItem("commensali") || 0);

  if (!carrelloSalvato || Object.keys(carrelloSalvato).length === 0) {
    box.textContent = "Nessun prodotto nel carrello.";
    return;
  }

  let testo = "🍔 ORDINE COUNTRY SIDE\n";

  /* HEADER DINAMICO */
  if (mode === "tavolo") {
    testo += `🍽️ Tavolo ${tavolo} – ${commensali} coperti\n\n`;
  } else {
    testo += "🏠 Ordine a domicilio / asporto\n\n";
  }

  /* PRODOTTI */
  Object.values(carrelloSalvato).forEach(item => {
    testo += `• ${item.nome} x${item.qty}\n`;

    if (item.note && item.note.length > 0) {
      item.note.forEach(n => {
        testo += `   - ${n}\n`;
      });
    }
  });

  /* COPERTO SOLO SE TAVOLO */
  let coperto = 0;
  if (mode === "tavolo" && commensali > 0) {
    coperto = commensali * 2;
    testo += `\nCoperto (${commensali} x €2): €${coperto.toFixed(2)}\n`;
  }

  const totaleFinale = (totaleSalvato + coperto).toFixed(2);
  testo += `\nTotale: €${totaleFinale}`;

  box.textContent = testo;
}

/* =========================
   INVIO WHATSAPP
   ========================= */

function inviaWhatsApp() {
  const box = document.getElementById("anteprima-messaggio");
  if (!box || !box.textContent) {
    alert("Errore nella generazione dell’ordine");
    return;
  }

  const numero = "393314794226"; // senza +
  const messaggio = box.textContent;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(messaggio)}`;

  window.open(url, "_blank");

  const conferma = document.getElementById("ordine-inviato");
  if (conferma) {
    conferma.style.display = "flex";
  }
}

/* =========================
   AVVIO
   ========================= */

document.addEventListener("DOMContentLoaded", generaAnteprima);