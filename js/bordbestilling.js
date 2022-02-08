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

// BORDBESTILLING FORM
let name;
btn1.addEventListener('click', function() {

  if (document.getElementById("Name").value == "" 
  	|| document.getElementById("Name").value == null) {
    alert('Husk at udfylde dit navn');
    //return false;
  } else {
    // display the next formfield
    f2.style.display = 'block'
    // hide formfield F1
    f1.style.display = 'none'
  }
})

btn2.addEventListener('click', function() {

    if (document.getElementById("Email").value == "" 
        || document.getElementById("Email").value == null
        || ( document.getElementById("Email").value.indexOf('@') === -1 )
        || ( document.getElementById("Email").value.indexOf('.') === -1 ))
        {
      alert('Indtast en gyldig email, der indeholder @.');
      //return false;
    } else {
      // display the next formfield
      f3.style.display = 'block'
      // hide formfield F1
      f2.style.display = 'none'
    }
})

btn3.addEventListener('click', function() {

    if (document.getElementById("Nummer").value == "" 
        || document.getElementById("Nummer").value == null
        || document.getElementById("Nummer").value > 50
        || document.getElementById("Nummer").value <= 0)
        {
      alert('Indtast mindst 1 gæst eller max. 50 gæster');
      //return false;
    } else {
      // display the next formfield
      f4.style.display = 'block'
      // hide formfield F1
      f3.style.display = 'none'
    }
})

btn4.addEventListener('click', function() {

    if (document.getElementById("dato").value == "" 
        || document.getElementById("dato").value == null) {
      alert('Husk at udfylde en dato');
      //return false;
    } else {
      // display the next formfield
      f5.style.display = 'block'
      // hide formfield F1
      f4.style.display = 'none'
    }
})


// TILBAGE BUTTONS
tilbagebtn1.addEventListener('click', function() {
    f2.style.display = 'none'
    f1.style.display = 'block'
})

tilbagebtn2.addEventListener('click', function() {
    f3.style.display = 'none'
    f2.style.display = 'block'
})

tilbagebtn3.addEventListener('click', function() {
    f4.style.display = 'none'
    f3.style.display = 'block'
})

