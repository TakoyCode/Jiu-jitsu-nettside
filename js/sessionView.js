
function sessionView() {
    const app = document.getElementById("app")
    let html = "";
    html += /*HTML*/`
    ${createNavBar()}
    <h1 class="sessionViewHeader">Egne økter</h1>
    <hr style="width: 20%"/>
    
    <div class="sessionViewContainer"><div class="sessionViewBtnBox">
    <button class="sessionViewBtn" onclick="goToPage('createSessionView')">+</button>
    </div>
        ${createSessionViewSessions()}
    </div>
    `;
    app.innerHTML = html;
}

function createSessionViewSessions() {
    let html = '';
    const user = model.data.users[0];
    for (i = 0; i < user.sessions.length; i++) {
        const session = user.sessions[i];
        html += /*HTML*/ `
        
        <div class ="sessionViewBox" onclick="goToChosenSession(${i})">${session.name}</div>
        
        `;
    }
    return html;
}

function goToChosenSession(index) {
    model.data.chosenSessionIndex = index;
    goToPage('chosenSessionView');
}