/* SELVSTUDIEDAG 1 - SPØRGSMÅL 1
Lad der være et copyright-tegn efterfulgt af dit navn samt dag, måned, år og klokkeslet i <footer>. 
Ugedag og måned skal naturligvis skrives på dansk, shire-kalender, (Links til en ekstern webside.) tysk eller et andet sprog. 
Du vælger selv websidens sprog. */

let logoAlice = `
    <a href="index.html"><img src="images/logo.svg" alt="Alices Logo"></a>
`
let navn = 'Alices Restaurant';

const d = new Date();

const uge = [
    'Søndag',
    'Mandag',
    'Tirsdag',
    'Onsdag',
    'Torsdag',
    'Fredag',
    'Lørdag'
]

const month = [
    'Januar',
    'Februar',
    'Marts',
    'April',
    'Maj',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'December'
]

let tid = 'Klokken er nu ' + d.getHours() + ":" + d.getMinutes();

footerlogo.innerHTML =  logoAlice + '<p>&copy;' + navn + '</p>' + uge[ d.getDay() ] + ' ' + 'd. ' + d.getDate() + ' ' + month[ d.getMonth() + 1 ] + ' ' + d.getFullYear() + '<p>' + tid + '</p>';

// FOOTER INFO
(function addFooterContact() {

    let kontaktFooter = `
    <div class="footer-kontakt">
    <h4>Kontakt</h4>
    <p>Alices Restaurant</p>
    <p>Klostergade 2, 8000 Aarhus C</p>
    <p>Tel. 44 55 66 77</p>
    </div>
    `;

    kontakt.innerHTML += kontaktFooter;
}) ();

/* SELVSTUDIEDAG 2 - NAVIGATIONSBAR
Øvelse: Navigationsmenuen - responsiv med HTML, CSS og JavaScript */
function toggleNav() {
    var x = document.getElementById('responsive-nav');

    if(x.className === 'responsive-nav')
    {
        x.className += ' responsive';
    }
    else
    {
        x.className = 'responsive-nav';
    }
}

// NAVBAR SCROLL EFFECT
const body = document.body;
let lastScroll = 0;

window.addEventListener('resize', () => {
    document.getElementById('responsive-nav').className = 'responsive-nav';
});

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset
    document.getElementById('responsive-nav').className = 'responsive-nav';

    if (currentScroll <= 0) {
        body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }

    lastScroll = currentScroll;
})


// SELVSTUDIEDAG 5 - MENUKORT SOM JSON - ses også eksternt i json/menukort.json
menu = `{
    "menu": [
        {
          "id": 1,
          "titel": "Tatar af kalv",
          "beskrivelse": "Lækker australsk wagyu, årstidens urter",
          "pris": 110,
          "ret": "forret",
          "foto": "tatar.png"
        },
        {
          "id": 2,
          "titel": "Kammusling Ceviche",
          "beskrivelse": "Kammusling vendt med chili, agurk, æble, frisk lime, ørredrogn",
          "pris": 120,
          "ret": "forret",
          "foto": "ceviche.png"
        },
        {
          "id": 3,
          "titel": "Pandestegt Helleflynder",
          "beskrivelse": "Norsk helleflynder, asiatisk inspireret sauce, syltede bøgehatte",
          "pris": 150,
          "ret": "hovedret",
          "foto": "helleflynder.png"
        },
        {
          "id": 4,
          "titel": "Bøf Wellington",
          "beskrivelse": "Oksemørbrad, dijonsennep, duxelles af svampe, parmaskinke, butterdej",
          "pris": 200,
          "ret": "hovedret",
          "foto": "wellington.png"
        },
        {
          "id": 5,
          "titel": "Saltkaramel Creme Brulée",
          "beskrivelse": "Klassisk creme brulée, saltkaramel, friske bær",
          "pris": 80,
          "ret": "dessert",
          "foto": "brulée.png"
        },
        {
          "id": 6,
          "titel": "Havtorn Is",
          "beskrivelse": "Havtorn Is, hjemmelavet havtorn marmelade, vaffel",
          "pris": 80,
          "ret": "dessert",
          "foto": "is.png"
        },
        {
          "id": 7,
          "titel": "Kroketter",
          "beskrivelse": "Svinebryst, brunet smørmayo, Gammel Knas",
          "pris": 50,
          "ret": "tilbehør",
          "foto": "kroketter.png"
        },
        {
          "id": 8,
          "titel": "Trøffel Fries",
          "beskrivelse": "Frisk estragon, havsalt, friskrevel trøffel, bernaisemayo",
          "pris": 50,
          "ret": "tilbehør",
          "foto": "fries.png"
        }
      ]
    }`;

const aliceMenu = JSON.parse(menu);
console.log( aliceMenu.menu[1].titel )

// for loop der henter hele arrayet
for (let i=0; i<aliceMenu.menu.length; i++){

  if ( aliceMenu.menu[i].ret == 'forret') {
    forretmenukortAlice.innerHTML += `
    <div class="menucontainer">
        <h3> ${aliceMenu.menu[i].titel} </h3>
        <p> ${aliceMenu.menu[i].beskrivelse} </p>
        <p> Pris ${aliceMenu.menu[i].pris} DKK </p>
        <img src="images/${aliceMenu.menu[i].foto}" alt="${aliceMenu.menu[i].titel}">
    </div>
    `
  }

  if ( aliceMenu.menu[i].ret == 'hovedret') {
    hovedretmenukortAlice.innerHTML += `
    <div class="menucontainer">
        <h3> ${aliceMenu.menu[i].titel} </h3>
        <p> ${aliceMenu.menu[i].beskrivelse} </p>
        <p> Pris ${aliceMenu.menu[i].pris} DKK </p>
        <img src="images/${aliceMenu.menu[i].foto}" alt="${aliceMenu.menu[i].titel}">
    </div>
    `
  }

  if ( aliceMenu.menu[i].ret == 'dessert') {
    dessertmenukortAlice.innerHTML += `
    <div class="menucontainer">
        <h3> ${aliceMenu.menu[i].titel} </h3>
        <p> ${aliceMenu.menu[i].beskrivelse} </p>
        <p> Pris ${aliceMenu.menu[i].pris} DKK </p>
        <img src="images/${aliceMenu.menu[i].foto}" alt="${aliceMenu.menu[i].titel}">
    </div>
    `
  }

  if ( aliceMenu.menu[i].ret == 'tilbehør') {
    tilbehørmenukortAlice.innerHTML += `
    <div class="menucontainer">
        <h3> ${aliceMenu.menu[i].titel} </h3>
        <p> ${aliceMenu.menu[i].beskrivelse} </p>
        <p> Pris ${aliceMenu.menu[i].pris} DKK </p>
        <img src="images/${aliceMenu.menu[i].foto}" alt="${aliceMenu.menu[i].titel}">
    </div>
    `
  }
  
}