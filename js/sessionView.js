
function sessionView() {
    const app = document.getElementById("app")
    let html = "";
    html += /*HTML*/`
    ${createNavBar()}
    <h1 class="sessionViewHeader">Egne økter</h1>
    <hr style="width: 20%"/>

    <button class="sessionViewBtn" onclick="goToPage('createSessionView')">+</button>
    
    <div class="sessionViewContainer">
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
        
        <div class ="sessionViewBox" onclick="chosenSessionView()">${session.name}</div>
        
        `;
    }
    return html;
}