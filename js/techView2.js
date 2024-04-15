let techArrays = [
front = [
    {
        name: "Front1",
        videos: [model.data.vidoes[1], model.data.vidoes[2]]
    }
],
bak = [
    {
        name: "Bak1",
        videos: [model.data.vidoes[1], model.data.vidoes[2]]
    }
],
bakke = [
    {
        name: "Bakke1",
        videos: [model.data.vidoes[1], model.data.vidoes[2]]
    }
],
kata = [
    {
        name: "Kata1",
        videos: [model.data.vidoes[1], model.data.vidoes[2]]
    }
]

];

let chosenTechIndex = 0;

techniqueView()
function techniqueView() {
    const app = document.getElementById("app");
    let html = '';
    html += /*HTML*/ `
    <div class="centerElements">
    ${createNavBar()}
    ${techLoopHtml()}
    </div>
              
    `;
    return html;
}

function seeFront(){
    let html = "";
    html += /*HTML*/ `
    <div class="centerElements">
    <div>Navn: ${techArrays.name}</div>
    <div>Video: ${techArrays.videos}</div>

    </div>
    `;

}

function seeBak(){
    let html = "";
    html += /*HTML*/ `
    <div class="centerElements">
    <div>Navn: ${techArrays.name}</div>
    <div>Video: ${techArrays.videos}</div>

    </div>
    `;
}

function seeBakke(){
    let html = "";
    html += /*HTML*/ `
    <div class="centerElements">
    <div>Navn: ${techArrays.name}</div>
    <div>Video: ${techArrays.videos}</div>

    </div>
    `;
}

function seeKata(){
    let html = "";
    html += /*HTML*/ `
    <div class="centerElements">
    <div>Navn: ${techArrays.name}</div>
    <div>Video: ${techArrays.videos}</div>

    </div>
    `;
}

function techLoopHtml(){
let html = "";

for (let i = 0; i < techArrays.length; i++){
    html += `
    <div onclick="seeFront"(${i})>${techArrays[0]}</div>
    <div onclick="seeBak(${i})">${techArrays[1]}</div>
    <div onclick="seeBakke(${i})">${techArrays[2]}</div>
    <div onclick="seeKata(${i})">${techArrays[3]}</div>
    `;

}
return html;
}

   