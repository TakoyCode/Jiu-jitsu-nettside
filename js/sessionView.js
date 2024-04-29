
function sessionView() {
    const app = document.getElementById("app")
    let html = "";
    html += /*HTML*/`
    ${createNavBar()}
    <h1 class="sessionViewHeader">Egne økter</h1>
    <div class="sessionViewContainer"><div class="sessionViewBtnBox">
    <button class="sessionViewBtn" onclick="goToPage('createSessionView')">+</button>
    </div>
    <hr style="width: 90%"/>
    

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
        const backgroundColor = session.level === "5 kyu" ? 'yellowBelt' :
                                session.level === "4 kyu" ? 'orangeBelt' :
                                session.level === "3 kyu" ? 'greenBelt' :
                                session.level === "2 kyu" ? 'blueBelt' :
                                session.level === "1 kyu" ? 'brownBelt' :
                                '';


        html += /*HTML*/ `
        
        <div class ="sessionViewBox ${backgroundColor}" onclick="goToChosenSession(${i})">${session.name}</div>
        
        `;
    }
    return html;
}

function goToChosenSession(index) {
    model.data.chosenSessionIndex = index;
    goToPage('chosenSessionView');
}