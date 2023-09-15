let sporsmal = [
  "Bør abort være tillat?",
  "Synes du det er rettferdig at folk som tjener mer penger, betaler mer skatt?",
  "Bør staten investere mer i utdanning og skole?",
  "Bør det være gratis høyere utdanning?",
  "Bør det være mer satsing på kollektivtransport?",
  "Bør det være mer statlig støtte til småbedrifter og entreprenørskap?",
  "Bør det være mer satsing på fornybar energi?",
  "Bør det være økt satsing på skolemat for å sikre sunn ernæring for skolebarn?",
];

let forArgumenter = [
  "Kvinner bør ha rett til å bestemme over sin egen kropp og helse, inkludert retten til å avslutte en uønsket graviditet.",
  2,
  3,
  4,
];

let motArgumenter = [
  "Fosteret har rett til liv og det er umoralsk å avslutte en graviditet fordi det innebærer å ta livet av et uskyldig menneske.",
  2,
  3,
  4,
];

let sporsmalNummerArray = [];

let svarArray = [];

const antallSporsmal = sporsmal.length;
let randomSporsmal = 0;
let sporsmalNummer = 0;
let svar = 0;
let prevButton = null;
let apSinScore = sporsmal.length * 4;
let nøytralButton = -1;

const titleSporsmal = document.getElementById("titleSporsmal");
const sporsmalText = document.getElementById("sporsmal");
const antallSporsmalText = document.getElementById("antallSporsmal");
const forArgumenterText = document.getElementById("forArgumenter");
const motArgumenterText = document.getElementById("motArgumenter");

for (let j = 0; j < sporsmal.length; j++) {
  randomSporsmal = Math.floor(Math.random() * sporsmal.length);
  sporsmalNummerArray.push(randomSporsmal);
}

function button(button) {
  if (prevButton != null) {
    prevButton.style.backgroundColor = "white";
  }
  button.style.backgroundColor = "#A8DF8E";
  prevButton = button;

  svarArray[sporsmalNummer - 1] = parseInt(button.value);

  let numberToCount = 2;
  nøytralButton = svarArray.filter((num) => num === numberToCount).length;

  if (button.value == 2) {
    if (nøytralButton == 3) {
      alert("Du kan ikke svare nøytralt på mer enn 3 av spørsmålene");
      document.getElementsByClassName("noytralButton")[0].disabled = true;
    }
  }
}

function nesteSporsmal(button) {
  if (prevButton != null) {
    prevButton.style.backgroundColor = "white";
  }
  prevButton = button;

  if (sporsmalNummer < sporsmal.length) {
    sporsmalNummer++;
    titleSporsmal.innerHTML =
      "Spørsmål " + sporsmalNummer + "/" + antallSporsmal;
    sporsmalText.innerHTML = sporsmal[sporsmalNummerArray[sporsmalNummer - 1]];
    antallSporsmalText.innerHTML =
      "Spørsmål " + sporsmalNummer + "/" + antallSporsmal;
    forArgumenterText.innerHTML =
      forArgumenter[sporsmalNummerArray[sporsmalNummer - 1]];
    motArgumenterText.innerHTML =
      motArgumenter[sporsmalNummerArray[sporsmalNummer - 1]];

      if (nøytralButton < 3) {
        document.getElementsByClassName("noytralButton")[0].disabled = false;
      }
  } else {
    sporsmalText.innerHTML =
      "Du har svart på alle spørsmålene! Du blir videresent når vi har regnet sammen svarene dine.";
    document.getElementsByClassName("buttonDiv")[0].remove();
    document.getElementsByClassName("nextDiv")[0].remove();
    document.getElementById("forOgMotArgumenterLink").remove();
    document.getElementsByClassName("forOgMotArgumenterDiv")[0].remove();
    antallSporsmalText.remove();

    for (let i = 0; i < svarArray.length; i++) {
      svar += svarArray[i];
    }

    //wait 3 seconds before redirecting
    setTimeout(function () {
      window.location.href = "./svar.html";
    }, 5000);
  }
  localStorage.setItem("lagretSvar", svar);
}

function tilbakeSporsmal() {
  if (sporsmalNummer > 1) {
    sporsmalNummer--;
    titleSporsmal.innerHTML =
      "Spørsmål " + sporsmalNummer + "/" + antallSporsmal;
    sporsmalText.innerHTML = sporsmal[sporsmalNummerArray[sporsmalNummer - 1]];
    antallSporsmalText.innerHTML =
      "Spørsmål " + sporsmalNummer + "/" + antallSporsmal;
    forArgumenterText.innerHTML =
      forArgumenter[sporsmalNummerArray[sporsmalNummer - 1]];
    motArgumenterText.innerHTML =
      motArgumenter[sporsmalNummerArray[sporsmalNummer - 1]];
  }
}

function svarSide() {
  svar = localStorage.getItem("lagretSvar");
  let enighet = (svar / apSinScore) * 100;

  document.getElementById("prosentEnighet").innerHTML =
    "Du er " + Math.floor(enighet) + "% enig med Arbeiderpartiet";
}
document.addEventListener("DOMContentLoaded", function () {
  // Call your functions here once the DOM is fully loaded
  if (window.location.pathname == "/Main/HTML/valgomat.html") {
    nesteSporsmal();
    alert("Husk at du kan ikke svare nøytralt på mer enn 3 av spørsmålene");
  } else if (window.location.pathname == "/Main/HTML/svar.html") {
    svarSide();
  }
});
