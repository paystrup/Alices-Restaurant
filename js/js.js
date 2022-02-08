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

/* SELVSTUDIEDAG 1 - SPØRGSMÅL 2 
Fremstil en funktion, der kan tilføje restaurantens navn, adresse og telefonnummer i en <div id="adresse"></div>, der placeres <footer>. 
Genbrug denne funktion på alle websider. 

Lavet som selvkørende js funktion - (function x(){ ... }) ();
*/

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


/* SELVSTUDIEDAG 1 - SPØRGSMÅL 3
Skab et array, hvor man kan se medsarbejdernes navne. Skriv i første omgang navnene i en helt tilfældig rækkeføle. 
Brug derefter metoden sort(), således at man kan læse navnene i alfabetisk orden.

MEDARBEJDERE NAVNE LISTE - lav mellemrum først i stringen for at få en bestemt variabel til at sortere først. */

let vis, medarbejderliste = [
    ' Ejer: Alice Hansen',
    'Kok: Agent Castiron',
    'Tjener: Pelikan Trunk-Black Håndboldsen',
    'Tjener: Peter Frandsen d. 2',
    'Opvasker: Kevin Kvisten',
    'Opvasker: Hugo Dynesen',
    'Altmuligmand: Jens Hansen Grill Jensen'
]

medarbejderliste.sort();

for (vis in medarbejderliste){
    medarbejdernavne.innerHTML += '<li>' + medarbejderliste[ vis ] + '</li>';
}


/*** SPØRGSMÅL 4

Hvis tiden tillader det: kod en funktion,
som kan skrive et passende inspirerende citat.
Dette citat vælges tilfældigt fra en liste (=array)
med mindst 5 citater.

Tip: brug Math.random().



let citater = [
    '"All you need is Love." <br> The Beatles',
    '"You don\'t learn from experience. You learn by reflecting on experience" <br> John Dewey',
    '"Jeg lytter efter en hvisken<br>som bærer tavsheden<br>gennem natten." <br> Ulrikka Gernes',
    '"We\'re gonna have a real good time togeter" <br> Lou Reed',
    '"Life is like a mayonaise soda" <br> Lou Reed',
    '"All I ever wanted was to cook the perfect meal."<br>Alice',
    '"You can get anything you want at Alice\'s restaurant" <br> Arlo Guthrie'
  ];
  
// selvkørende funktion - (function() {} ) ();
(function dagensCitat() {
rndNo = Math.floor(Math.random() * citater.length );
citat.innerHTML = '<em>' +  citater[ rndNo ] + '</em>';
})();

//dagensCitat();
***/


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

/** SELVSTUDIEDAG 4 - video m. autoplay
 *  
 * 
 * fil: audio.js
 * purpose: play audio when the containing div is visible
 **/
 window.addEventListener("scroll", function() { // detect scroll event

    let mySound = document.getElementById("myaudio"); // select audio id
    let lyd = document.getElementById("lyd");
      
    console.log("Is the #lyd visible or not? " + elFllVsbl(lyd)); // test
  
  // Below: start and stop audio 
    if (elFllVsbl(lyd)) { // if the #lyd div is visible then
      if (!(mySound.curentTime > 0)) {
        mySound.play(); // play audio
      }
    } else {
      mySound.pause();
      mySound.currentTime = 0; // rewind the sound
    }
  })
  
  // this function will check whether a tag is visible
  function elFllVsbl( el ) {
    return (
        el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
  }
  
  /*
  NB: the audio / video tags will allways return true,
  solution: place the tag in a div and test for the div in stead
  */





