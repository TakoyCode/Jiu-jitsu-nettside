
function chosenSessionView(){
    const app = document.getElementById("app")
    let html = "";
    html += /*HTML*/`
    ${createNavBar()}
    <h1 class="chosenSessionHeader">Økt</h1>
    <button class="chosenSessionBtn" onclick="">Slett</button>
    <hr style="width: 20%"/>

    <div class="chosenSessionContainer">
    <button class ="chosenSessionBtnBack" onclick="">Tilbake</button>
    <div class="chosenSessionBox">Nivå:</div>
    <div class="chosenSessionBox">En liten beskrivelse</div>
    <div class="chosenSessionBox">Teknikknavn</div>
    <div class="chosenSessionBox">VIDEO</div>
    <button class="chosenSessionSlide"onclick=""><- 1 -></button>
</div>
    `;
app.innerHTML = html;
}
