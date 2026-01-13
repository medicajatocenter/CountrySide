function inviaPrenotazione() {
  const nome = document.getElementById("nome").value;
  const persone = document.getElementById("persone").value;
  const orario = document.getElementById("orario").value;
  const note = document.getElementById("note").value;

  if (!nome || !persone || !orario) {
    alert("Compila nome, numero persone e orario");
    return;
  }

  let messaggio = `🪑 RICHIESTA PRENOTAZIONE TAVOLO - Country Side\n`;
  messaggio += `Nome: ${nome}\n`;
  messaggio += `Persone: ${persone}\n`;
  messaggio += `Orario: ${orario}\n`;

  if (note) {
    messaggio += `Note: ${note}\n`;
  }

  messaggio += `\n(In attesa di conferma)`;

  const numero = "+393314794226"; // 👈 NUMERO WHATSAPP PANINERIA
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(messaggio)}`;

  window.open(url, "_blank");
}
