
function chosenSessionView() {
    const app = document.getElementById("app")
    let html = "";
    const session = model.data.users[0].sessions[model.data.chosenSessionIndex]
    html = /*HTML*/`
    ${createNavBar()}
    <h1 class="chosenSessionHeader">${session.name}</h1>
    <hr style="width: 20%"/>

    <div class="chosenSessionContainer">
     <div class="chosenSessionBox">
        <div class="chosenSessionSmallerBox">
        ${chosenSessionViewHtml()}
        </div>
     </div>
    </div>
`;

    app.innerHTML = html;
}

function chosenSessionViewHtml() {
    const session = model.data.users[0].sessions[model.data.chosenSessionIndex];
    return /*html*/ `
        <div>
        <div class="chosenSessionBtnBackBox">
        <button class ="chosenSessionBtnBack" onclick="goToPage('sessionView')">Tilbake</button>
        </div>
            <div class="chosenSessionBtnDeleteBox">
            <button class="chosenSessionBtn" onclick="remove(${i})">Slett</button>
            </div>
            <div class="chosenSessionBox">Nivå: ${session.level}</div>
            <div class="chosenSessionBox">${session.description}</div>
            <div class="chosenSessionBox">${session.name}</div>
            <div class="chosenSessionBox">${createSessionViewVideos()}</div>
        </div>
    `;
}

function createSessionViewVideos() {
    const currentSession = model.data.users[0].sessions[model.data.chosenSessionIndex]
    let html = "";
    for (let i = 0; i < currentSession.media.length; i++) {
        html += /*HTML*/`
        
        <video class="techBox" width="200rem" controls>
            <source src="${model.data.videos[currentSession.media[i]].mediaPath}">
        </video>
        `;
    }
    return html;
}