
function chosenSessionView(){
    const app = document.getElementById("app")
    let html = "";
    html = /*HTML*/`
    ${createNavBar()}
     <h1 class="chosenSessionHeader">Overskrift</h1>
    <button class="chosenSessionBtn" onclick="">Slett</button>
    <hr style="width: 20%"/>
    <div class="chosenSessionContainer">
    <button class ="chosenSessionBtnBack" onclick="">Tilbake</button>
    <div>${chosenSessionViewSessions()}</div>
    <button class="chosenSessionSlide"onclick=""><- 1 -></button>
</div>

    `;
app.innerHTML = html;
}

function chosenSessionViewSessions(){
    let html = '';
    const user = model.data.users[0];
    for (let i = 0; i < user.sessions.length; i++){
    const session = user.sessions[i];
    html =/*html*/ `
    <div class="chosenSessionBox">Nivå: ${session.level}</div>
    <div class="chosenSessionBox">${session.description}</div>
    <div class="chosenSessionBox">${session.name}</div>
    <div class="chosenSessionBox">VIDEO</div>
    `;
    }
    return html;
}
