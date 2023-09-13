/* Alternar ENG/ESP => Usa en el HTML las clases .esp y .eng  */
/* Switch ENG/ESP => Use in the HTML the .esp and .eng classes */
let espanol = document.querySelectorAll(".esp");
let english = document.querySelectorAll('.eng');
let esBtn = document.getElementById('esBtn');
let enBtn = document.getElementById('enBtn');

/* Btn ESP */
function tradESP () {
    espanol.forEach(espanol => {
        espanol.classList.remove('d-none');
    });
    english.forEach(english => {
        english.classList.add('d-none');
    });
    esBtn.classList.add('d-none');
    enBtn.classList.remove('d-none');
}
/* Btn ENG */
function tradENG () {
    espanol.forEach(espanol => {
        espanol.classList.add('d-none');
    });
    english.forEach(english => {
        english.classList.remove('d-none');
    });
    enBtn.classList.add('d-none');
    esBtn.classList.remove('d-none');
}

/* Deshabilita ESP = Lenguaje por defecto ENG || Deshabilita ENG = Lenguaje por defecto ESP */
/* Disable ESP = Language by default ENG || Disable ENG = Language by default ESP */

function disableEng() {
    english.forEach(english => {
        english.classList.add('d-none');
    });
}
disableEng();
esBtn.classList.add('d-none');
/*
function disableEsp() {
    espanol.forEach(espanol => {
        espanol.classList.add('d-none');
    });
}
disableEsp();
enBtn.classList.add('d-none');
*/