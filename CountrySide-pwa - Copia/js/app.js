const params = new URLSearchParams(window.location.search);
const MODE = params.get("mode");

/*
  Imposta la modalità SOLO se arriva dall'URL
  Altrimenti mantiene quella già salvata
*/
if (MODE === "tavolo") {
  localStorage.setItem("ordine_mode", "tavolo");
} else if (MODE === "domicilio") {
  localStorage.setItem("ordine_mode", "domicilio");
}
// else: NON TOCCARE ordine_mode
