
function sessionView(){
    const app = document.getElementById("app")
    let html = "";
    html += /*HTML*/`
    ${createNavBar()}
    <h1 class="sessionViewHeader">Egne økter</h1>
    <hr style="width: 20%"/>

    <button class="sessionViewBtn" onclick="goToPage('createSessionView')">+</button>
    
    <div class="sessionViewContainer">
    <div class ="sessionViewBox" onclick="">Økt 1</div>
    <div class ="sessionViewBox" onclick="">Økt 2</div>
    <div class ="sessionViewBox" onclick="">Økt 3</div>
</div>
    `;
app.innerHTML = html;
}
