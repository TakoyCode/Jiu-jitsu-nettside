function techniqueView() {
    const app = document.getElementById("app");
    let technique = model.data.techniques.find((t) => t.name == model.app.currentTechnique)
    let html = /*HTML*/ `
        ${createNavBar()}
        <h2 class="techHeader">${technique.name}</h2>
        <hr/>
        <div class="techniqueContainer">
        <div>${createTechniqueVideoshtml()}</div>
        </div>
    `;
    app.innerHTML = html;
}

function createTechniqueVideoshtml() {
    let html = ``;
    const technique = model.data.techniques.find((t) => t.name == model.app.currentTechnique);
    for (let i = 0; i < technique.videos.length; i++) {
        html += /*HTML*/ `
        <div class="techniqueBox">
            <div class="techBox">${model.data.videos[technique.videos[i]].name}</div>
            <div class="techBox">
                <div onclick="changeMasteryLevel(${technique.videos[i]})" class="selectable">Beherskelses nivå: ${getLevelEmoji(model.data.videos[technique.videos[i]].masteryLevel)}
                </div>
            </div>

                <video class="techBox" width="200rem" controls>
                    <source src="${model.data.videos[technique.videos[i]].mediaPath}">
                </video>
            </div>
        </div>
    `;
    }
    return html;
}

function changeMasteryLevel(index) {
    if (model.data.videos[index].masteryLevel < 2) {
        
        model.data.videos[index].masteryLevel++;
    } else {
        model.data.videos[index].masteryLevel = 0;
    }
    updateView();
}

function getLevelEmoji(level) {
    let html = ``;
    switch (level) {
        case 0:
            html = "🟥"
            break;
        case 1:
            html = "🟨"
            break;
        case 2:
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
