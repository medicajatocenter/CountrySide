/* =========================
   MENU – COUNTRY SIDE
   STRUTTURA DEFINITIVA
   ========================= */

const MENU = {

  antipasti: {
    id: "antipasti",
    nome: "Antipasti",
    items: [
      { id: "nuggets_4", nome: "Nuggets di pollo (4 pz)", prezzo: 3.00, composizione: false },
      { id: "nuggets_8", nome: "Nuggets di pollo (8 pz)", prezzo: 5.00, composizione: false },
      { id: "mozzarelline_panate", nome: "Mozzarelline panate", prezzo: 2.50, composizione: false },
      { id: "alette_speziate_4", nome: "Alette di pollo speziate (4 pz)", prezzo: 3.00, composizione: false },
      { id: "alette_speziate_8", nome: "Alette di pollo speziate (8 pz)", prezzo: 5.00, composizione: false },
      { id: "alette_piccanti_4", nome: "Alette di pollo piccanti (4 pz)", prezzo: 3.00, composizione: false },
      { id: "alette_piccanti_8", nome: "Alette di pollo piccanti (8 pz)", prezzo: 5.00, composizione: false },
      { id: "anelli_cipolla_6", nome: "Anelli di cipolla (6 pz)", prezzo: 3.50, composizione: false },
      { id: "patatine_piccole", nome: "Patatine fritte (piccole)", prezzo: 1.50, composizione: false },
      { id: "patatine_grandi", nome: "Patatine fritte (grandi)", prezzo: 3.00, composizione: false },
      { id: "patatine_cheddar_bacon_piccole", nome: "Patatine cheddar e bacon (piccole)", prezzo: 3.50, composizione: false },
      { id: "patatine_cheddar_bacon_grandi", nome: "Patatine cheddar e bacon (grandi)", prezzo: 7.00, composizione: false },
      { id: "patatine_wurstel_piccole", nome: "Patatine e wurstel (piccole)", prezzo: 2.50, composizione: false },
      { id: "patatine_wurstel_grandi", nome: "Patatine e wurstel (grandi)", prezzo: 5.00, composizione: false },
      { id: "antipasto_caldo_piccolo", nome: "Antipasto caldo (piccolo)", prezzo: 3.50, composizione: false },
      { id: "antipasto_caldo_grande", nome: "Antipasto caldo (grande)", prezzo: 7.00, composizione: false }
    ]
  },

  panini_classici: {
    id: "panini_classici",
    nome: "Panini Classici",
    items: [
      { id: "cartoccio", nome: "Cartoccio", prezzo: 3.50, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "panino_patatine", nome: "Panino Patatine", prezzo: 2.50, composizione: false, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "topolino", nome: "Topolino", prezzo: 2.50, composizione: false, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "pollo_arrosto", nome: "Panino Pollo Arrosto", prezzo: 4.50, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "diavolino", nome: "Diavolino", prezzo: 4.00, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } }
    ]
  },

  panini_burger: {
    id: "panini_burger",
    nome: "Panini Burger",
    items: [
      { id: "burger_classico", nome: "Burger Classico", prezzo: 5.00, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "burger_bacon", nome: "Burger Bacon", prezzo: 6.50, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "burger_chicken", nome: "Burger Chicken", prezzo: 6.50, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "pulled_chicken_sosa", nome: "Pulled Chicken Sosa", prezzo: 7.00, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "pulled_chicken_curry", nome: "Pulled Chicken Curry", prezzo: 7.00, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "pulled_chicken_bbq", nome: "Pulled Chicken BBQ", prezzo: 7.50, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "maxi_burger", nome: "Maxi Burger’s", prezzo: 8.50, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "maxi_double", nome: "Maxi Double", prezzo: 10.00, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "maxi_chicken", nome: "Maxi Chicken", prezzo: 9.00, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "triplo_maxi_burger", nome: "Triplo Maxi Burger", prezzo: 15.00, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } }
    ]
  },

  hot_dog: {
    id: "hot_dog",
    nome: "Hot Dog",
    items: [
      { id: "hotdog_classico", nome: "Hot Dog Classico", prezzo: 2.50, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "hotdog_dippers", nome: "Hot Dog Dippers", prezzo: 5.00, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "hotdog_bacon", nome: "Hot Dog Bacon", prezzo: 5.50, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "hotdog_concy", nome: "Hot Dog Concy", prezzo: 6.00, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } }
    ]
  },

  piadine: {
    id: "piadine",
    nome: "Piadine / Wrap",
    items: [
      { id: "wrap_american", nome: "American Wrap", prezzo: 6.00, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "wrap_pulled_chicken", nome: "Wrap Pulled Chicken", prezzo: 6.00, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "wrap_peppers", nome: "Wrap Peppers", prezzo: 6.50, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "wrap_bacon", nome: "Wrap Bacon", prezzo: 7.00, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "wrap_giovi", nome: "Wrap Giovi", prezzo: 7.00, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "rolls_chicken_curry", nome: "Rolls Chicken Curry", prezzo: 6.00, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } }
    ]
  },

  toast: {
    id: "toast",
    nome: "Toast",
    items: [
      { id: "avocado_toast", nome: "Avocado Toast", prezzo: 4.00, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } },
      { id: "bacon_toast", nome: "Bacon Toast", prezzo: 4.50, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } }
    ]
  },

  piatti: {
    id: "piatti",
    nome: "Piatti",
    items: [
      { id: "piatto_di_carne", nome: "Piatto di Carne", prezzo: 10.00, composizione: false, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } }
    ]
  },

  piatti_baby: {
    id: "piatti_baby",
    nome: "Piatti Baby",
    items: [
      { id: "Piatto_Baby", nome: "Piatto baby (pollo panato o hamburger + patatine)", prezzo: 6.00, composizione: true },
      { id: "Panino_Baby", nome: "Panino baby (pollo panato o hamburger)", prezzo: 3.50, composizione: true },
      { id: "baby_toast_prosciutto_mozzarella", nome: "Toast baby prosciutto e mozzarella", prezzo: 3.00, composizione: false },
      { id: "baby_panino_patatine", nome: "Panino baby con patatine", prezzo: 2.50, composizione: false }
    ]
  },

  insalate: {
    id: "insalate",
    nome: "Insalate (cesto di piada fritta)",
    items: [
      { id: "crispy_salad", nome: "Crispy Salad", prezzo: 6.00, composizione: true, menuPlus: { attivo: true, prezzo: 2.50, nome: "Menu + patatine e bibita (+€2,50)" } }
    ]
  },

  taglieri: {
    id: "taglieri",
    nome: "Taglieri",
    items: [
      { id: "tagliere_country_side", nome: "Tagliere Country Side", prezzo: 20.00, composizione: false },
      { id: "tagliere_mix_fritto", nome: "Tagliere Mix Fritto", prezzo: 18.00, composizione: false }
    ]
  },

  bevande: {
    id: "bevande",
    nome: "Bevande",
    items: [
      { id: "acqua_naturale", nome: "Acqua naturale 0,5L", prezzo: 1.00, composizione: false },
      { id: "acqua_frizzante", nome: "Acqua frizzante 0,5L", prezzo: 1.00, composizione: false },
      { id: "coca_cola", nome: "Coca-Cola 33cl", prezzo: 2.00, composizione: false },
      { id: "coca_zero", nome: "Coca-Cola Zero 33cl", prezzo: 2.00, composizione: false },
      { id: "fanta", nome: "Fanta 33cl", prezzo: 2.00, composizione: false },
      { id: "birra_piccola", nome: "Birra alla spina piccola", prezzo: 2.50, composizione: false },
      { id: "birra_media", nome: "Birra alla spina media", prezzo: 4.00, composizione: false }
    ]
  }

};
