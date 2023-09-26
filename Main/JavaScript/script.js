
// arrays with questions, for arguments and against arguments
let sporsmalNorsk = [
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

let forArgumenterNorsk = [
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

let motArgumenterNorsk = [
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

let sporsmalDE = [
  "Soll Abtreibung erlaubt sein?",
  "Findest du es gerecht, dass Menschen, die mehr verdienen, mehr Steuern zahlen?",
  "Sollte der Staat mehr in Bildung und Schulen investieren?",
  "Sollte die höhere Bildung kostenlos sein?",
  "Sollte mehr in den öffentlichen Nahverkehr investiert werden?",
  "Sollte es mehr staatliche Unterstützung für kleine Unternehmen und Unternehmertum geben?",
  "Sollte mehr in erneuerbare Energien investiert werden?",
  "Sollte mehr in Schulmahlzeiten investiert werden, um eine gesunde Ernährung für Schulkinder zu gewährleisten?",
  "Sollte mehr in die Tourismusbranche investiert werden, um den Tourismus zu fördern?",
  "Sollte mehr Fokus auf Inklusion und Unterstützung von Menschen mit Behinderungen gelegt werden?",
  "Sollte das Internet und der Datenschutz im Internet strenger reguliert werden?",
  "Sollte mehr in die Rehabilitation und Behandlung von Drogenabhängigen investiert werden?",
  "Sollte der Staat mehr Unterstützung für Sport und Freizeitaktivitäten für Kinder und Jugendliche bieten?",
  "Sollte mehr in die Landwirtschaft und Ernährungssicherheit investiert werden?",
  "Sollte mehr Fokus auf psychische Gesundheit im Gesundheitswesen gelegt werden?"
];

let forArgumenterDE = [
  "Frauen sollten das Recht haben, über ihren eigenen Körper und ihre Gesundheit zu entscheiden, einschließlich des Rechts auf Beendigung einer unerwünschten Schwangerschaft.",
  "Erhöht die gesellschaftliche Gerechtigkeit, indem die Belastung öffentlicher Dienstleistungen aufgrund der Zahlungsfähigkeit geteilt wird.",
  "Eine bessere Bildung macht Bürger kompetenter, stärkt die Wirtschaft und fördert kulturelle Entwicklung und Innovation.",
  "Kostenlose höhere Bildung ermöglicht gleichen Zugang, verringert die finanzielle Belastung und fördert Wissen und Innovation.",
  "Der öffentliche Nahverkehr reduziert den Verkehr, verbessert die Luftqualität und bietet allen eine zugängliche, kostengünstige Transportmöglichkeit.",
  "Unterstützung für kleine Unternehmen schafft Arbeitsplätze, fördert das Wirtschaftswachstum und unterstützt Innovation und Wettbewerbsfähigkeit.",
  "Erneuerbare Energien reduzieren den Klimawandel, schaffen grüne Arbeitsplätze und sorgen für Energiesicherheit durch nachhaltige Quellen.",
  "Schulmahlzeiten fördern gesundes Wachstum, Konzentration und Bildungsergebnisse, verringern Ungleichheiten und fördern frühzeitig das Gesundheitsbewusstsein.",
  "Die Tourismusbranche generiert Einnahmen, schafft Arbeitsplätze und fördert kulturelle Vielfalt durch Tourismus, der die Wirtschaft und das Kulturerbe stärkt.",
  "Inklusion und Unterstützung fördern Gerechtigkeit, gleiche Chancen und bereichern die Gesellschaft durch die Einbeziehung aller Bürger.",
  "Strengere Regulierung schützt die Privatsphäre, verhindert den Missbrauch von Daten und bekämpft Cyberkriminalität für eine sicherere Internetnutzung.",
  "Behandlung und Rehabilitation reduzieren Gesundheitsschäden, Kriminalität und die Belastung des Gesundheitssystems und verbessern die Lebensqualität.",
  "Unterstützung für Sport und Freizeitaktivitäten fördert einen gesunden Lebensstil, soziale Integration und bietet jungen Menschen positive Lernerfahrungen.",
  "Mehr Investitionen in die Landwirtschaft stärken die Ernährungssicherheit, verringern die Abhängigkeit von Importen und unterstützen nachhaltige Landwirtschaft zum Schutz der Umwelt.",
  "Mehr Fokus auf psychische Gesundheit ermöglicht eine frühere Diagnose, verbesserte Lebensqualität und verringert die Belastung des Gesundheitssystems."
];

let motArgumenterDE = [
  "Der Fötus hat ein Recht auf Leben, und es ist unmoralisch, eine Schwangerschaft zu beenden, weil dies das Leben eines unschuldigen Menschen bedeutet.",
  "Kann das Wirtschaftswachstum hemmen und die Motivation derjenigen beeinträchtigen, die Arbeitsplätze schaffen und investieren.",
  "Erhöhte staatliche Ausgaben können zu höheren Steuern und mehr Bürokratie führen, was von einigen abgelehnt wird.",
  "Kostenlose Bildung kann zu überfüllten Universitäten, höheren Steuerkosten und Qualitätsproblemen führen.",
  "Steigende Kosten und Steuern, Bedarf an Investitionen in die Infrastruktur und Widerstand gegen Änderungen im Verkehrsverhalten.",
  "Staatliche Interventionen können ungleichen Wettbewerb, Kosten und bürokratische Hindernisse für größere Unternehmen schaffen.",
  "Höhere Anlaufkosten, schwankende Energieerzeugung und Auswirkungen auf bestehende Energiesektoren können Bedenken sein.",
  "Steigende Kosten, logistische Herausforderungen und individuelle Kostenpräferenzen können die Umsetzung von Schulmahlzeitprogrammen komplizieren.",
  "Übermäßiger Tourismus kann die Umwelt schädigen, überfüllte Reiseziele verursachen und die lokale Kultur und Gemeinschaft verzerren.",
  "Steigende Kosten, logistische Herausforderungen und Änderungen in der bestehenden Infrastruktur können praktische Bedenken sein.",
  "Überregulierung kann die Meinungsfreiheit einschränken, Innovationen hemmen und unnötige Bürokratie und Kosten verursachen.",
  "Steigende Kosten, Mangel an Behandlungsressourcen und Sorgen vor Rückfällen können Herausforderungen darstellen.",
  "Begrenzte Budgetressourcen, Risiko einer Überbeteiligung und mangelnde Effizienz von Programmen können Bedenken sein.",
  "Überproduktion, Subventionierung und landwirtschaftliche Praktiken können zu einem erhöhten Ressourcenverbrauch und Umweltproblemen führen.",
  "Steigende Kosten, Mangel an spezialisierten Ressourcen und Priorisierung anderer Gesundheitsprobleme können Bedenken darstellen."
];


let sporsmal = [];

if (window.location.pathname == "/Valgomat-demokrati-samfunnsfag/Main/HTML/valgomat.html" || window.location.pathname == "/Main/HTML/valgomat.html") {
  sporsmal = sporsmalNorsk;
  motArgumenter = motArgumenterNorsk;
  forArgumenter = forArgumenterNorsk;
  localStorage.setItem("sporsmal", sporsmal.length);
}
else if (window.location.pathname == "/Valgomat-demokrati-samfunnsfag/Main/HTML/DE/valgomat.html" || window.location.pathname == "/Main/HTML/DE/valgomat.html"){
  sporsmal = sporsmalDE;
  motArgumenter = motArgumenterDE;
  forArgumenter = forArgumenterDE;
  localStorage.setItem("sporsmal", sporsmal.length);
}

let sporsmalNummerArray = [];

let svarArray = [];

//calculate how many questions there are
const antallSporsmal = sporsmal.length;
let randomSporsmalNummer = 0;
let sporsmalNummer = 0;
let svar = 0;
let prevButton = null;
let nøytralButton = -1;


// sets how many times you can answer neutral
let antallNøytralGanger = 5;

// get elements from HTML
const titleSporsmal = document.getElementById("titleSporsmal");
const sporsmalText = document.getElementById("sporsmal");
const antallSporsmalText = document.getElementById("antallSporsmal");
const forArgumenterText = document.getElementById("forArgumenter");
const motArgumenterText = document.getElementById("motArgumenter");


// randomize questions and check if the question has already been randomized
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

// Handle the buttons, and save the answer in an array
function button(button) {
  if (prevButton != null) {
    prevButton.style.backgroundColor = "#FFC4C4";
  }
  button.style.backgroundColor = "#ADD8E6";
  prevButton = button;

  svarArray[sporsmalNummer - 1] = parseInt(button.value);

  // check if the user has answered neutral too many times, and disable the neutral button if they have
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

// Get called when the user clicks the next button
function nesteSporsmal(button) {

    // Change the color of the button that was clicked
  if (prevButton != null) {
    prevButton.style.backgroundColor = "#FFC4C4";
  }
  prevButton = button;

  // Updates the question and the arguments
  if (sporsmalNummer < sporsmal.length) {
    sporsmalNummer++;
    if (window.location.pathname == "/Valgomat-demokrati-samfunnsfag/Main/HTML/valgomat.html" || window.location.pathname == "/Main/HTML/valgomat.html") {
      titleSporsmal.innerHTML = "Spørsmål " + sporsmalNummer;
      antallSporsmalText.innerHTML =
      "Spørsmål " + sporsmalNummer + "/" + antallSporsmal;
    } else if (window.location.pathname == "/Valgomat-demokrati-samfunnsfag/Main/HTML/DE/valgomat.html" || window.location.pathname == "/Main/HTML/DE/valgomat.html") {
      titleSporsmal.innerHTML = "Frage " + sporsmalNummer;
      antallSporsmalText.innerHTML =
        "Frage " + sporsmalNummer + "/" + antallSporsmal;
    }
    sporsmalText.innerHTML = sporsmal[sporsmalNummerArray[sporsmalNummer - 1]];
    forArgumenterText.innerHTML =
      forArgumenter[sporsmalNummerArray[sporsmalNummer - 1]];
    motArgumenterText.innerHTML =
      motArgumenter[sporsmalNummerArray[sporsmalNummer - 1]];
    
      // Checkes if the user has changed their answer, and enables the neutral button if they have
    if (nøytralButton < antallNøytralGanger) {
      document.getElementsByClassName("noytralButton")[0].disabled = false;
    }

    if (!svarArray[sporsmalNummer - 1]) {
      svarArray[sporsmalNummer - 1] = 0;
    }
    console.log(svarArray)

  }

  // If the user has answered all the questions, they get redirected to the svar.html page
  else {
    if (window.location.pathname == "/Valgomat-demokrati-samfunnsfag/Main/HTML/valgomat.html" || window.location.pathname == "/Main/HTML/valgomat.html") {
      sporsmalText.innerHTML =
        "Du har svart på alle spørsmålene! Du blir videresendt når vi har regnet sammen svarene dine.";
    } else if (window.location.pathname == "/Valgomat-demokrati-samfunnsfag/Main/HTML/DE/valgomat.html" || window.location.pathname == "/Main/HTML/DE/valgomat.html") {
      sporsmalText.innerHTML =
        "Du hast alle Fragen beantwortet! Du wirst weitergeleitet, sobald wir deine Antworten ausgewertet haben.";
    }
    document.getElementsByClassName("buttonDiv")[0].remove();
    document.getElementsByClassName("nextDiv")[0].remove();
    document.getElementById("forOgMotArgumenterLink").remove();
    document.getElementsByClassName("forOgMotArgumenterDiv")[0].remove();
    antallSporsmalText.remove();


    for (let i = 0; i < svarArray.length; i++) {
      svar += svarArray[i];
      localStorage.setItem("lagretSvar", svar);
    }

    //wait 3 seconds before redirecting
    setTimeout(function () {
      window.location.href = "./svar.html";
    }, 3000);
  }
}

// Get called when the user clicks the back button
function tilbakeSporsmal() {

  // Updates the question and the arguments to the previous question
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

// Counting together the answers and calculating the percentage of agreement
function svarSide() {
  apSinScore = parseInt(localStorage.getItem("sporsmal")) * 4;
  svar = localStorage.getItem("lagretSvar");
  let enighet = svar / apSinScore * 100;

  // Displaying the percentage of agreement
  if (window.location.pathname == "/Valgomat-demokrati-samfunnsfag/Main/HTML/svar.html" || window.location.pathname == "/Main/HTML/svar.html") {
    document.getElementById("prosentEnighet").innerHTML =
      "Du er " + Math.floor(enighet) + "% enig med Arbeiderpartiet";  
  }
  else if (window.location.pathname == "/Valgomat-demokrati-samfunnsfag/Main/HTML/DE/svar.html" || window.location.pathname == "/Main/HTML/DE/svar.html") {
    document.getElementById("prosentEnighet").innerHTML =
    "Du stimmst der Arbeiterpartei zu zu " + Math.floor(enighet) + "%";
  }
}

// Checks if the page is fully loaded, and calls the functions
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname == "/Valgomat-demokrati-samfunnsfag/Main/HTML/valgomat.html" || window.location.pathname == "/Main/HTML/valgomat.html"
  || window.location.pathname == "/Valgomat-demokrati-samfunnsfag/Main/HTML/DE/valgomat.html" || window.location.pathname == "/Main/HTML/DE/valgomat.html") {
    nesteSporsmal();
    if (window.location.pathname == "/Valgomat-demokrati-samfunnsfag/Main/HTML/valgomat.html" || window.location.pathname == "/Main/HTML/valgomat.html") {
      alert(
        `Husk at du kan ikke svare nøytralt på mer enn ${antallNøytralGanger} av spørsmålene`)
    } else {
      alert(`Denk daran, dass du auf nicht mehr als ${antallNøytralGanger} der Fragen neutral antworten kannst`)
    }

  } else if (window.location.pathname == "/Valgomat-demokrati-samfunnsfag/Main/HTML/svar.html" || window.location.pathname == "/Main/HTML/svar.html"
  || window.location.pathname == "/Valgomat-demokrati-samfunnsfag/Main/HTML/DE/svar.html" || window.location.pathname == "/Main/HTML/DE/svar.html") {
    svarSide();
  }
});