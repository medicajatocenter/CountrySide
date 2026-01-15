function vaiAlMenu() {
  const tavolo = document.getElementById("tavolo").value;
  const commensali = document.getElementById("commensali").value;

  if (!tavolo) {
    alert("Inserisci il numero del tavolo");
    return;
  }

  if (!commensali || commensali < 1) {
    alert("Inserisci il numero di commensali");
    return;
  }

  localStorage.setItem("tavolo", tavolo);
  localStorage.setItem("commensali", commensali);

  window.location.href = `menu.html?tavolo=${tavolo}`;
}
