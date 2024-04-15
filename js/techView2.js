let techArrays = [
    front = [
        {
            name: "Front1",
            videos: [model.data.videos[1], model.data.videos[2]]
        }
    ],
    bak = [
        {
            name: "Bak1",
            videos: [model.data.videos[1], model.data.videos[2]]
        }
    ],
    bakke = [
        {
            name: "Bakke1",
            videos: [model.data.videos[1], model.data.videos[2]]
        }
    ],
    kata = [
        {
            name: "Kata1",
            videos: [model.data.videos[1], model.data.videos[2]]
        }
    ]
];

let chosenTechIndex = 0;

function techniqueView() {
    const app = document.getElementById("app");
    let html = '';
    html += /*HTML*/ `
    <div class="centerElements">
        ${createNavBar()}
        ${seeFront()}
    </div>
              
    `;
    app.innerHTML = html;
}

function seeFront() {
    let html = "";
    let front = techArrays[0];
    html += /*HTML*/ `
    <div class="centerElements">
        <div>Navn: ${front[0].name}</div>
        <div>Video: ${front[0].name}</div>
    </div>
    `;
    return html;
}

function seeBak() {
    let html = "";
    html += /*HTML*/ `
    <div class="centerElements">
    <div>Navn: ${techArrays.name}</div>
    <div>Video: ${techArrays.videos}</div>

    </div>
    `;
    return html;
}

function seeBakke() {
    let html = "";
    html += /*HTML*/ `
    <div class="centerElements">
    <div>Navn: ${techArrays.name}</div>
    <div>Video: ${techArrays.videos}</div>

    </div>
    `;
    return html;
}

function seeKata() {
    let html = "";
    html += /*HTML*/ `
    <div class="centerElements">
    <div>Navn: ${techArrays.name}</div>
    <div>Video: ${techArrays.videos}</div>

    </div>
    `;
    return html;
}

function techLoopHtml() {
    let html = "";

    for (let i = 0; i < techArrays.length; i++) {
        html += `
        <div onclick="seeFront"(${i})>${techArrays[0]}</div>
        <div onclick="seeBak(${i})">${techArrays[1]}</div>
        <div onclick="seeBakke(${i})">${techArrays[2]}</div>
        <div onclick="seeKata(${i})">${techArrays[3]}</div>
    `;

    }
    return html;
}

