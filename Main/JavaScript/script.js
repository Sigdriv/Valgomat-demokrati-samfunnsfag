let sporsmal = [
    'Bør abort være tillat?',
    'Synes du det er rettferdig at folk som tjener mer penger, betaler mer skatt?',
    'Bør staten investere mer i utdanning og skole?',
    'Bør det være gratis høyere utdanning?',
    'Bør det være mer satsing på kollektivtransport?',
    'Bør det være mer statlig støtte til småbedrifter og entreprenørskap?',
    'Bør det være mer satsing på fornybar energi?',
    'Bør det være økt satsing på skolemat for å sikre sunn ernæring for skolebarn?'

]

const antallSporsmal = sporsmal.length;
let randomSporsmal = 0;
let sporsmalNummer = 0;
let tempsvar = 0;
let svar = 0;
let prevButton = null;
let apSinScore = 0;

apSinScore = sporsmal.length * 4;

console.log(apSinScore);

function button(button) {
    if (prevButton != null) {
        prevButton.style.backgroundColor = "white";
    }
    button.style.backgroundColor = "green";
    prevButton = button;
    tempsvar = button.value;
    console.log(tempsvar);
}

document.getElementById('antallSporsmal').innerHTML = 'Spøsrmål ' + sporsmalNummer + '/' + antallSporsmal;

console.log(sporsmal);

function nesteSporsmal(button) {

    randomSporsmal = Math.floor(Math.random() * sporsmal.length);
    if (prevButton != null) {
        prevButton.style.backgroundColor = "white";
    }
    prevButton = button;

    if (sporsmal.length > 0) {
        sporsmalNummer++;
        document.getElementById("titleSporsmal").innerHTML = 'Spørsmål ' + sporsmalNummer + '/' + antallSporsmal;
        document.getElementById("sporsmal").innerHTML = sporsmal[randomSporsmal];
        document.getElementById('antallSporsmal').innerHTML = 'Spørsmål ' + sporsmalNummer + '/' + antallSporsmal;
    } else {
        document.getElementById("sporsmal").innerHTML = 'Du har svart på alle spørsmålene! Du blir videresent når vi har regnet sammen svarene dine.';
        document.getElementById('antallSporsmal').innerHTML = 'Spørsmål ' + sporsmalNummer + '/' + antallSporsmal;
        document.getElementsByClassName('buttonDiv')[0].remove();

        //wait 5 seconds before redirecting
        setTimeout(function () {

         window.location.href = ("svar.html");

        }, 5000);
    }

    svar += parseInt(tempsvar);
    console.log(svar);
    console.log('test')

    sporsmal.splice(randomSporsmal, 1);

    console.log(sporsmal);
}

window.onload = nesteSporsmal();