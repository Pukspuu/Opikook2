let retseptid = [
    {
        nimi: 'Benedicti muna',
        kirjeldus: '100g soolalõhe, värsket salatit, 1 keskmise suurusega redis, paar viilu apelsini, granaatõuna seemneid, röstitud saia. <br> <br>Valmista ette salat. Selleks viiluta redis, lõigu apelsiniviilud tükikesteks, sega läbi salatiga ja lisa granaatõuna seemned. Röst sai ja aseta salatile, saiale omakorda aseta soolalõhe viilud. Edasi valmista muna ja kaste. Pošeeritud muna: 1 muna, väike sorts äädikat. Pošeeritud muna jaoks aja vesi potis keema, lisa pisut äädikat, keeruta lusikaga vbesi keerlema ning libista muna ettevaatlikult vette. Keeda 2-3 minutit ning aseta seejärel majapidamispaberile nõrguma. Hollandi kaste: 50 g võid, 1 munakollane, sorts sidrunimahla, soola. Sulata madalal kuumusel või, lisa pidevalt vispeldades munakollane. Vispeldamist lõpetamata oota kuni segu hakkab tihedamaks muutuma. Maitsesta sidrunimahla ja soolaga ning peale valmistamist kalla koheselt pošeeritud munale.',
        pildiAadress: './pildid/Benedictimunasuur.jpg'
    },

    {
        nimi: 'Mesise mandlikattega punane kala',
        kirjeldus: 'Mustad läätsed 100g, 1-2 küüslauguküünt, 400g punase kala fileed, 30g röstitud mandlilaaste, 40g võid, 1spl mett, praadimiseks võid ja õli, sool. <br> Eemalda fileelt luud ning lõika ta seejärel pooleks. Prae nahapool krõbedaks, lihapool maitsesta soolaga. Aseta ahjupannile küpsetuspaber ja pane kalatükid lihaosa allpool pannile. Sega omavahel mesi ja sulatatud või. Kanna segu kala nahale ning puista üle mandlilaastudega. Aseta kala 180C juures ca 15 minutiks ahju. Keeda läätsed. Haki küüslauk ning prae või ja õliga. Lisa keedetud läätsed ja maitsesta soolaga. Lisa serveerimisel oma soovi järgi veel rohelist kraami. Näiteks spargel, tomat, suhkruhernes.',
        pildiAadress: './pildid/Benedictimunasuur.jpg'
    },

]

function koostaRetseptiHTML(retsept){
    return `
<div class="card" style="height: 450px;">
<img src=${retsept.pildiAadress} class="card-img-top" alt="...">
<div class="card-body">
  <h5>${retsept.nimi}</h5>
  <p>${retsept.kirjeldus} 
    </p>
</div>
</div>
`
}

let retseptideHtml = ''

for (let retsept of retseptid) {
    retseptideHtml += koostaRetseptiHTML(retsept)
}

document.querySelector('.retseptid').innerHTML = retseptideHtml