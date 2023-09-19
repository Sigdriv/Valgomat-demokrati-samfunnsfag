let sporsmal = [
  "Bør abort være tillat?",
  "Synes du det er rettferdig at folk som tjener mer penger, betaler mer skatt?",
  "Bør staten investere mer i utdanning og skole?",
  "Bør det være gratis høyere utdanning",
  "Bør det være mer satsing på kollektivtransport?",
  "Bør det være mer statlig støtte til småbedrifter og entreprenørskap?",
  "Bør det være mer satsing på fornybar energi?",
  "Bør det være økt satsing på skolemat for å sikre sunn ernæring for skolebarn?",
  "Bør det være økt satsing på reiselivsnæringen for å fremme turisme?",
  "Bør det være mer fokus på inkludering og tilrettelegging for personer med nedsatt funksjonsevne?",
  "Bør det være strengere regulering av internett og personvern på nettet?",
  "Bør det være mer satsing på rehabilitering og behandling av rusmisbrukere?",
  "Bør det være mer statlig støtte til idrett og fritidsaktiviteter for barn og unge?",
  "Bør det være økt satsing på landbruk og matsikkerhet?",
  "Bør det være mer fokus på psykisk helse i helsetjenesten?",
];

let forArgumenter = [
  "Kvinner bør ha rett til å bestemme over sin egen kropp og helse, inkludert retten til å avslutte en uønsket graviditet.",
  "Øker samfunnets rettferdighet ved å dele byrden av offentlige tjenester basert på evne til betaling.",
  "Bedre utdanning gir samfunnet kompetente borgere, styrker økonomien og fremmer kulturell utvikling og innovasjon.",
  "Gratis høyere utdanning gir lik tilgang, reduserer økonomisk byrde og fremmer kunnskap og innovasjon.",
  "Kollektivtransport reduserer trafikkbelastning, forbedrer luftkvalitet og gir tilgjengelig, kostnadseffektiv transport for alle.",
  "Støtte til småbedrifter skaper arbeidsplasser, øker økonomisk vekst og fremmer innovasjon og konkurranseevne.",
  "Fornybar energi reduserer klimaendringer, skaper grønne jobber og gir energisikkerhet gjennom bærekraftige kilder.",
  "Skolemat fremmer sunn vekst, konsentrasjon og utdanningsresultater, reduserer ulikhet og fremmer helsebevissthet tidlig i livet.",
  "Reiselivsnæringen genererer inntekter, skaper arbeidsplasser og fremmer kulturmangfold gjennom turisme, som styrker økonomien og kulturarven.",
  "Inkludering og tilrettelegging gir rettferdighet, like muligheter og beriker samfunnet ved å inkludere alle borgere.",
  "Strengere regulering beskytter personvern, hindrer misbruk av data og bekjemper cyberkriminalitet for en tryggere nettbruk.",
  "Behandling og rehabilitering reduserer helseskader, kriminalitet og belastningen på helsevesenet, og gir bedre livskvalitet.",
  "Støtte til idrett og fritidsaktiviteter fremmer sunn livsstil, sosial integrering og gir positive læringsopplevelser for unge.",
  "Økt landbruksinvestering styrker matsikkerhet, reduserer importavhengighet og støtter bærekraftig jordbruk som beskytter miljøet.",
  "Mer fokus på psykisk helse gir tidligere diagnose, bedre livskvalitet og reduserer byrden på helsevesenet.",
];

let motArgumenter = [
  "Fosteret har rett til liv og det er umoralsk å avslutte en graviditet fordi det innebærer å ta livet av et uskyldig menneske.",
  "Kan hemme økonomisk vekst og motivasjon for de som skaper arbeidsplasser og investerer.",
  "Økte statlige utgifter kan føre til høyere skatter og mer byråkrati, som noen motsetter seg.",
  "Gratis utdanning kan føre til overfylte universiteter, høyere skattekostnader og kvalitetsproblemer.",
  "Økte kostnader og skatter, behov for infrastrukturinvesteringer, og motstand mot endringer i transportvaner.",
  "Statlig inngrep kan skape ulik konkurranse, kostnad og byråkratiske hindringer for større bedrifter.",
  "Høyere oppstartskostnader, svingende energiproduksjon og påvirkning på eksisterende energisektorer kan være bekymringer.",
  "Økte kostnader, logistiske utfordringer og individuelle kostpreferanser kan komplisere implementeringen av skolematprogrammer.",
  "Overdreven turisme kan skade miljøet, føre til overbelastede destinasjoner og forvrenge lokal kultur og samfunn.",
  "Økte kostnader, logistiske utfordringer og endringer i eksisterende infrastruktur kan være praktiske bekymringer.",
  "Overregulering kan begrense ytringsfrihet, hemme innovasjon og skape unødig byråkrati og kostnader.",
  "Økte kostnader, knapphet på behandlingsressurser og bekymringer for tilbakefall kan være utfordringer.",
  "Begrensede budsjettressurser, risiko for overinvolvering og mangel på effektivitet i programmer kan være bekymringer.",
  "Overproduksjon, subsidiering og landbrukspraksis kan føre til økt ressursbruk og miljøproblemer.",
  "Økte kostnader, mangel på spesialiserte ressurser og prioriteringer av andre helseproblemer kan være bekymringer.",
];

let sporsmalNummerArray = [];

let svarArray = [];

const antallSporsmal = sporsmal.length;
let randomSporsmalNummer = 0;
let sporsmalNummer = 0;
let svar = 0;
let prevButton = null;
let apSinScore = sporsmal.length * 4;
let nøytralButton = -1;
let antallNøytralGanger = 5;

const titleSporsmal = document.getElementById("titleSporsmal");
const sporsmalText = document.getElementById("sporsmal");
const antallSporsmalText = document.getElementById("antallSporsmal");
const forArgumenterText = document.getElementById("forArgumenter");
const motArgumenterText = document.getElementById("motArgumenter");

function randomSporsmal() {
  nummer = Math.floor(Math.random() * sporsmal.length);
  return nummer;
}

while (sporsmalNummerArray.length < sporsmal.length) {
  randomSporsmal();
  sjekkRandom();
  function sjekkRandom() {
    if (sporsmalNummerArray.includes(nummer)) {
      randomSporsmal();
      sjekkRandom();
    } else {
      sporsmalNummerArray.push(nummer);
    }
  }
}

function button(button) {
  if (prevButton != null) {
    prevButton.style.backgroundColor = "#FFC4C4";
  }
  button.style.backgroundColor = "#ADD8E6";
  prevButton = button;

  svarArray[sporsmalNummer - 1] = parseInt(button.value);

  let numberToCount = 2;
  nøytralButton = svarArray.filter((num) => num === numberToCount).length;

  if (button.value == 2) {
    if (nøytralButton == antallNøytralGanger) {
      alert(
        `Husk at du kan ikke svare nøytralt på mer enn ${antallNøytralGanger} av spørsmålene`
      );
      document.getElementsByClassName("noytralButton")[0].disabled = true;
    }
  }
}

function nesteSporsmal(button) {
  if (prevButton != null) {
    prevButton.style.backgroundColor = "#FFC4C4";
  }
  prevButton = button;

  if (sporsmalNummer < sporsmal.length) {
    sporsmalNummer++;
    titleSporsmal.innerHTML = "Spørsmål " + sporsmalNummer;
    sporsmalText.innerHTML = sporsmal[sporsmalNummerArray[sporsmalNummer - 1]];
    antallSporsmalText.innerHTML =
      "Spørsmål " + sporsmalNummer + "/" + antallSporsmal;
    forArgumenterText.innerHTML =
      forArgumenter[sporsmalNummerArray[sporsmalNummer - 1]];
    motArgumenterText.innerHTML =
      motArgumenter[sporsmalNummerArray[sporsmalNummer - 1]];

    if (nøytralButton < antallNøytralGanger) {
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

    localStorage.setItem("lagretSvar", svar);
    //wait 3 seconds before redirecting
    setTimeout(function () {
      window.location.href = "./svar.html";
    }, 3000);
  }
}

function tilbakeSporsmal() {
  if (sporsmalNummer > 1) {
    sporsmalNummer--;
    titleSporsmal.innerHTML = "Spørsmål " + sporsmalNummer;
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
  let enighet = svar / apSinScore * 100;

  document.getElementById("prosentEnighet").innerHTML =
    "Du er " + Math.floor(enighet) + "% enig med Arbeiderpartiet";

    console.log(enighet);
}
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname == "/Valgomat-demokrati-samfunnsfag/Main/HTML/valgomat.html") {
    nesteSporsmal();
      alert(
        `Husk at du kan ikke svare nøytralt på mer enn ${antallNøytralGanger} av spørsmålene`)
  } else if (window.location.pathname == "/Valgomat-demokrati-samfunnsfag/Main/HTML/svar.html") {
    svarSide();
  }
});