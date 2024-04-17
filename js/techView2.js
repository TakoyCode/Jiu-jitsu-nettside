function techniqueView() {
    const app = document.getElementById("app");
    let technique = model.data.techniques.find((t) => t.name == model.app.currentTechnique)
    let html = /*HTML*/ `
        ${createNavBar()}
        <div>${technique.name}</div>
        <div>${technique}</div>
        ${createTechniqueVideoshtml()}
    `;
    app.innerHTML = html;
}

function createTechniqueVideoshtml() {
    let html = ``;
    const technique = model.data.techniques.find((t) => t.name == model.app.currentTechnique);
    for (let i = 0; i < technique.videos.length; i++) {
        html += /*HTML*/ `

        <div class="techniqueContainer">
            <div>VIDEO NAVN</div>
            </div>
                <div class="techniqueContainer">
                <div>Beherskelses nivå: ${getLevelEmoji(technique.level)}</div>
                <video width="200rem" controls>
                    <source src="${model.data.videos[technique.videos[i]]}">
                </video>
            </div>
    `;
        return html;
    }
}

function getLevelEmoji(level) {
    let html = ``;
    switch (level) {
        case 1:
            html = "🟥"
            break;
        case 2:
            html = "🟨"
            break;
        case 3:
            html = "🟩"
            break;

        default:
            html = "🟥"
            break;
    }
    return html;
}



/*      Anderledeses metode å skrive .find på
function findTechnique(name) {
    for (let i = 0; i < model.data.techniques.length; i++) {
        if (model.data.techniques[i].name == name) {
            return model.data.techniques[i]
        }
    }
} */
