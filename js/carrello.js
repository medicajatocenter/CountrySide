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
  if (!carrello[id]) return;

  carrello[id].qty--;
  totale -= carrello[id].prezzo;

  if (carrello[id].qty <= 0) {
    delete carrello[id];
  }

  aggiornaUI(id);
}

function aggiornaUI(id) {
  const qtyEl = document.getElementById(`qty-${id}`);
  if (qtyEl) qtyEl.innerText = carrello[id]?.qty || 0;

  const totaleEl = document.getElementById("totale");
  if (totaleEl) totaleEl.innerText = totale.toFixed(2);
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
   NOTE MANUALI PER PRODOTTO
   ========================= */

function salvaNoteDaTextarea() {
  document.querySelectorAll(".note-prodotto").forEach(ta => {
    const id = ta.dataset.id;
    const testo = ta.value.trim();

    if (id && testo && carrello[id]) {
      if (!carrello[id].note.includes(testo)) {
        carrello[id].note.push(testo);
      }
    }
  });
}

/* =========================
   DATI DOMICILIO (FORM)
   ========================= */

function chiediDatiDomicilio() {
  if (localStorage.getItem("ordine_mode") !== "domicilio") return true;

  const nome = document.getElementById("cliente_nome")?.value.trim();
  const cognome = document.getElementById("cliente_cognome")?.value.trim();
  const indirizzo = document.getElementById("indirizzo")?.value.trim();
  const orario = document.getElementById("orario")?.value;

  if (!nome || !cognome || !indirizzo || !orario) {
    alert("Compila tutti i dati per la consegna");
    return false;
  }

  localStorage.setItem("cliente_nome", nome);
  localStorage.setItem("cliente_cognome", cognome);
  localStorage.setItem("indirizzo", indirizzo);
  localStorage.setItem("orario", orario);

  return true;
}

/* =========================
   ANTEPRIMA ORDINE
   ========================= */

function generaAnteprima() {
  const box = document.getElementById("anteprima-messaggio");
  if (!box) return;

  const dati = JSON.parse(localStorage.getItem("carrello") || "{}");
  const tot = parseFloat(localStorage.getItem("totale") || 0);
  const mode = localStorage.getItem("ordine_mode");

  if (!Object.keys(dati).length) {
    box.textContent = "Nessun prodotto nel carrello.";
    return;
  }

  let testo = "🍔 ORDINE COUNTRY SIDE\n\n";

  if (mode === "tavolo") {
    testo += `🍽️ Tavolo ${localStorage.getItem("tavolo")} – `;
    testo += `${localStorage.getItem("commensali")} coperti\n\n`;
  } else {
    testo += "🏠 ORDINE A DOMICILIO / ASPORTO\n";
    testo += `Cliente: ${localStorage.getItem("cliente_nome") || ""} ${localStorage.getItem("cliente_cognome") || ""}\n`;
    testo += `Indirizzo: ${localStorage.getItem("indirizzo") || ""}\n`;
    testo += `Orario: ${localStorage.getItem("orario") || ""}\n\n`;
  }

  Object.values(dati).forEach(item => {
    testo += `• ${item.nome} x${item.qty}\n`;
    item.note?.forEach(n => {
      testo += `   - ${n}\n`;
    });
  });

  if (mode === "tavolo") {
    const comm = parseInt(localStorage.getItem("commensali") || 0);
    if (comm > 0) {
      const coperto = comm * 2;
      testo += `\nCoperto (${comm} x €2): €${coperto.toFixed(2)}\n`;
      testo += `Totale: €${(tot + coperto).toFixed(2)}`;
      box.textContent = testo;
      return;
    }
  }

  testo += `\nTotale: €${tot.toFixed(2)}`;
  box.textContent = testo;
}

/* =========================
   INVIO WHATSAPP + RESET
   ========================= */

function inviaWhatsApp() {
  if (!chiediDatiDomicilio()) return;

  salvaNoteDaTextarea();

  localStorage.setItem("carrello", JSON.stringify(carrello));
  localStorage.setItem("totale", totale.toFixed(2));

  generaAnteprima();

  const msg = document.getElementById("anteprima-messaggio").textContent;
  if (!msg) {
    alert("Errore nella generazione dell’ordine");
    return;
  }

  const url = `https://wa.me/393314794226?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");

  /* RESET COMPLETO */
  localStorage.removeItem("carrello");
  localStorage.removeItem("totale");
  localStorage.removeItem("tavolo");
  localStorage.removeItem("commensali");
  localStorage.removeItem("cliente_nome");
  localStorage.removeItem("cliente_cognome");
  localStorage.removeItem("indirizzo");
  localStorage.removeItem("orario");

  carrello = {};
  totale = 0;

  setTimeout(() => {
    window.location.href = "index.html";
  }, 500);
}

/* =========================
   AVVIO
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  carrello = JSON.parse(localStorage.getItem("carrello") || "{}");
  totale = parseFloat(localStorage.getItem("totale") || 0);
  generaAnteprima();

  /* mostra form domicilio solo se serve */
  if (localStorage.getItem("ordine_mode") === "domicilio") {
    const form = document.getElementById("form-domicilio");
    if (form) form.style.display = "block";
  }
});
