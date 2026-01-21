/* =========================================
   INGREDIENTI COMPOSIZIONE – COUNTRY SIDE
   Solo prodotti con composizione: true
   ========================================= */

const INGREDIENTI_COMPOSIZIONE = {

  /* =====================
     PANINI CLASSICI
     ===================== */
  cartoccio: {
    standard: ["Mozzarella", "Prosciutto", "Salsa rosa", "Insalata"],
    extra: [
      { nome: "Doppia mozzarella", prezzo: 1.00 },
      { nome: "Patatine", prezzo: 1.50 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  pollo_arrosto: {
    standard: ["Pollo arrosto", "Insalata", "Maionese"],
    extra: [
      { nome: "Bacon", prezzo: 1.00 },
      { nome: "Cheddar", prezzo: 0.50 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  diavolino: {
    standard: ["Salame piccante", "Mozzarella", "Salsiccia", "Salsa rosa"],
    extra: [
      { nome: "Extra salsiccia", prezzo: 1.50 },
      { nome: "Extra piccante", prezzo: 0.00 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  /* =====================
     BURGER
     ===================== */
  burger_classico: {
    nome: "Burger classico",
  img: "assets/prodotti/Burger_classico.jpg",
    standard: ["Hamburger", "Cetrioli", "Cheddar", "Ketchup", "Maionese", "Senape"],
    extra: [
      { nome: "Bacon", prezzo: 1.00 },
      { nome: "Uovo", prezzo: 1.00 },
      { nome: "Ketchup", prezzo: 0.00, tipo: "salsa" },
{ nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }

    ]
  },

  burger_bacon: {
    standard: ["Hamburger", "Bacon", "Pomodoro", "Lattuga", "Cheddar", "Cetrioli", "Ketchup", "Maionese", "Senape"],
    extra: [
      { nome: "Doppio bacon", prezzo: 1.50 },
      { nome: "Extra cheddar", prezzo: 0.50 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  burger_chicken: {
    standard: ["Pollo panato", "Insalata", "Cheddar", "Pomodoro", "Salsa a scelta"],
    extra: [
      { nome: "Doppio pollo", prezzo: 2.00 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  pulled_chicken_sosa: {
    standard: ["Pulled chicken", "Bacon", "Sosa", "Insalata", "Cheddar"],
    extra: [
      { nome: "Extra pulled chicken", prezzo: 2.00 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  pulled_chicken_curry: {
    standard: ["Pollo sfilacciato", "Insalata", "Mozzarella", "Bacon", "Cipolla croccante", "Salsa mango curry"],
    extra: [
      { nome: "Extra mozzarella", prezzo: 0.50 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  pulled_chicken_bbq: {
    standard: ["Pulled chicken BBQ", "Mozzarella", "Emmental", "Scamorza", "Cipolla caramellata", "Bacon", "Lattuga", "Maionese"],
    extra: [
      { nome: "Extra formaggi", prezzo: 1.00 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  maxi_burger: {
    standard: ["Doppio hamburger", "Bacon", "Uovo", "Cheddar", "Pomodoro", "Insalata", "Cipolla", "Ketchup", "Maionese", "Senape"],
    extra: [
      { nome: "Terzo hamburger", prezzo: 3.00 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  maxi_double: {
    standard: ["Smash burger", "Pollo panato", "Cheddar", "Insalata", "Bacon", "Pomodoro", "Cipolla", "Uovo", "Ketchup", "Maionese", "Senape"],
    extra: [
      { nome: "Extra pollo", prezzo: 2.00 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  maxi_chicken: {
    standard: ["Doppio pollo panato", "Insalata", "Pomodoro", "Bacon", "Cipolla croccante", "Salsa burger"],
    extra: [
      { nome: "Triplo pollo", prezzo: 3.00 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  triplo_maxi_burger: {
    standard: ["Hamburger 3x100g", "Triplo cheddar", "Triplo bacon", "Pomodoro", "Insalata", "Ketchup", "Maionese", "Senape", "Patatine"],
    extra: [
      { nome: "Extra bacon", prezzo: 2.00 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  /* =====================
     HOT DOG
     ===================== */
  hotdog_classico: {
    nome: "Hot Dog Clasico",
    img: "assets/prodotti/HotDogClassico.png",
    standard: ["Wurstel", "Ketchup", "Senape"],
    extra: [
      { nome: "Cheddar", prezzo: 0.50 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  hotdog_dippers: {
    standard: ["Wurstel", "Patatine dippers", "Cheddar"],
    extra: [
      { nome: "Bacon", prezzo: 1.00 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  hotdog_bacon: {
    standard: ["Wurstel", "Provola affumicata", "Bacon", "Cheddar"],
    extra: [
      { nome: "Extra provola", prezzo: 0.50 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  hotdog_concy: {
    standard: ["Wurstel", "Patatine", "Doppio cheddar", "Bacon", "Cipolla caramellata", "Salsa smokey"],
    extra: [
      { nome: "Extra bacon", prezzo: 1.50 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  /* =====================
     WRAP / PIADINE
     ===================== */
  wrap_american: {
    standard: ["Macinato BBQ", "Cetrioli", "Cheddar", "Ketchup", "Maionese", "Semi di sesamo"],
    extra: [
      { nome: "Extra macinato", prezzo: 2.00 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  wrap_pulled_chicken: {
    standard: ["Pulled chicken BBQ", "Insalata aromatizzata", "Salsa yogurt"],
    extra: [
      { nome: "Extra pulled chicken", prezzo: 2.00 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  wrap_peppers: {
    standard: ["Salsiccia", "Cipolla agrodolce", "Peperoni grigliati", "Paprika dolce", "Scamorza affumicata"],
    extra: [
      { nome: "Extra scamorza", prezzo: 0.50 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  wrap_bacon: {
    standard: ["Piadina", "Bacon croccante", "Patatine", "Cheddar", "Nuggets", "Salsa a scelta"],
    extra: [
      { nome: "Extra nuggets", prezzo: 1.50 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  wrap_giovi: {
    standard: ["Hamburger", "Cheddar", "Insalata", "Patatine", "Bacon", "Smokey bacon"],
    extra: [
      { nome: "Extra hamburger", prezzo: 3.00 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  rolls_chicken_curry: {
    standard: ["Petto di pollo", "Bacon", "Curry", "Cipolla", "Vino"],
    extra: [
      { nome: "Extra pollo", prezzo: 2.00 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  /* =====================
     TOAST
     ===================== */
  avocado_toast: {
    standard: ["Toast al burro", "Philadelphia", "Uovo strapazzato", "Avocado", "Lime", "Pepe"],
    extra: [
      { nome: "Bacon", prezzo: 1.00 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  bacon_toast: {
    standard: ["Bacon", "Uovo strapazzato", "Cheddar", "Salsa a scelta"],
    extra: [
      { nome: "Extra cheddar", prezzo: 0.50 },
      { nome: "Maionese", prezzo: 0.00, tipo: "salsa" },
{ nome: "Senape", prezzo: 0.00, tipo: "salsa" },

{ nome: "BBQ", prezzo: 0.00, tipo: "salsa" },
{ nome: "BBQ Smokey", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Cheddar", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Cheddar Piccante", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Piccante", prezzo: 0.00, tipo: "salsa" },
{ nome: "Salsa Habanero", prezzo: 0.00, tipo: "salsa" },

{ nome: "Salsa Mango Curry", prezzo: 0.50, tipo: "salsa" },
{ nome: "Salsa Honey Mustard", prezzo: 0.00, tipo: "salsa" }
    ]
  },

  /* =====================
     INSALATE
     ===================== */
  crispy_salad: {
    standard: ["Pollo", "Lattuga", "Radicchio", "Rucola", "Pomodoro", "Mais", "Crostini", "Ranch", "Avocado"],
    extra: [
      { nome: "Extra pollo", prezzo: 2.00 }
    ]
  },
  /*======================
  MENU BABY
  ========================*/
  Panino_Baby:{
    standard: ["Patatine"],
    extra:[
      {nome: "Pollo", prezzo: 0.00},
      {nome: "Hamburger", prezzo: 0.00}
    ]
  },
  Piatto_Baby: {
    standard: ["Patatine"],
    extra: [
    {nome: "Pollo", prezzo: 0.00},
    {nome: "Hamburger", prezzo: 0.00}
  ]
}
};
