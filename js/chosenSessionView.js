
function chosenSessionView(){
    const app = document.getElementById("app")
    let html = "";
    const session = model.data.users[0].sessions[model.data.chosenSessionIndex]
    html = /*HTML*/`
    ${createNavBar()}
    <h1 class="chosenSessionHeader">${session.name}</h1>
    
    <hr style="width: 20%"/>
    <div class="chosenSessionContainer">
        <button class ="chosenSessionBtnBack" onclick="goToPage('sessionView')">Tilbake</button>
        ${chosenSessionViewHtml()}
    </div>
`;

app.innerHTML = html;
}

function chosenSessionViewHtml(){
    const session = model.data.users[0].sessions[model.data.chosenSessionIndex];
    return /*html*/ `
        <div>
            <button class="chosenSessionBtn" onclick="remove(${i})">Slett</button>
            <div class="chosenSessionBox">Nivå: ${session.level}</div>
            <div class="chosenSessionBox">${session.description}</div>
            <div class="chosenSessionBox">${session.name}</div>
            <div class="chosenSessionBox">VIDEO</div>
        </div>
    `;
}
