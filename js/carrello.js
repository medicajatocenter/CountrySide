let carrello = {};
let totale = 0;

/* =========================
   GESTIONE CARRELLO
   ========================= */

function addItem(id, nome, prezzo) {
  if (!carrello[id]) {
    carrello[id] = { id, nome, prezzo, qty: 0, note: [] };
  }
  carrello[id].qty++;
  totale += prezzo;
  aggiornaUI(id);
}

function removeItem(id) {
  if (carrello[id]) {
    carrello[id].qty--;
    totale -= carrello[id].prezzo;
    if (carrello[id].qty <= 0) delete carrello[id];
    aggiornaUI(id);
  }
}

function aggiornaUI(id) {
  const q = document.getElementById(`qty-${id}`);
  if (q) q.innerText = carrello[id]?.qty || 0;

  const t = document.getElementById("totale");
  if (t) t.innerText = totale.toFixed(2);
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
   DATI DOMICILIO
   ========================= */

function chiediDatiDomicilio() {
  if (localStorage.getItem("ordine_mode") !== "domicilio") return true;

  const richieste = [
    ["cliente_nome", "Inserisci il tuo nome"],
    ["cliente_cognome", "Inserisci il tuo cognome"],
    ["indirizzo", "Inserisci indirizzo di consegna"],
    ["orario", "Orario desiderato (es. 20:30)"]
  ];

  for (let [key, msg] of richieste) {
    if (!localStorage.getItem(key)) {
      const val = prompt(msg);
      if (!val) {
        alert("Campo obbligatorio");
        return false;
      }
      localStorage.setItem(key, val);
    }
  }
  return true;
}

/* =========================
   NOTE DA TEXTAREA
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
   ANTEPRIMA ORDINE
   ========================= */

function generaAnteprima() {
  const box = document.getElementById("anteprima-messaggio");
  if (!box) return;

  const dati = JSON.parse(localStorage.getItem("carrello") || "{}");
  const tot = parseFloat(localStorage.getItem("totale") || 0);
  const mode = localStorage.getItem("ordine_mode");

  let msg = "🍔 ORDINE COUNTRY SIDE\n\n";

  if (mode === "tavolo") {
    msg += `🍽️ Tavolo ${localStorage.getItem("tavolo")} – `;
    msg += `${localStorage.getItem("commensali")} coperti\n\n`;
  } else {
    msg += "🏠 ORDINE A DOMICILIO / ASPORTO\n";
    msg += `Cliente: ${localStorage.getItem("cliente_nome")} ${localStorage.getItem("cliente_cognome")}\n`;
    msg += `Indirizzo: ${localStorage.getItem("indirizzo")}\n`;
    msg += `Orario: ${localStorage.getItem("orario")}\n\n`;
  }

  Object.values(dati).forEach(p => {
    msg += `• ${p.nome} x${p.qty}\n`;
    p.note?.forEach(n => msg += `   - ${n}\n`);
  });

  if (mode === "tavolo") {
    const c = parseInt(localStorage.getItem("commensali") || 0);
    if (c > 0) {
      const cop = c * 2;
      msg += `\nCoperto (${c} x €2): €${cop.toFixed(2)}\n`;
      msg += `Totale: €${(tot + cop).toFixed(2)}`;
      box.textContent = msg;
      return;
    }
  }

  msg += `\nTotale: €${tot.toFixed(2)}`;
  box.textContent = msg;
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
  const url = `https://wa.me/393314794226?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");

  // RESET COMPLETO
  localStorage.clear();
  carrello = {};
  totale = 0;
}

/* =========================
   AVVIO
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  carrello = JSON.parse(localStorage.getItem("carrello") || "{}");
  totale = parseFloat(localStorage.getItem("totale") || 0);
  generaAnteprima();
});
