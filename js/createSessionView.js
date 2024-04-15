function createSessionView() {
    const app = document.getElementById("app")
    let html = "";
    html += /*HTML*/`

        <div class="centerElements">
        ${createNavBar()}
        ${createSessionHtml()}
        </div>
    
`;
    app.innerHTML = html;
}

function createSessionHtml() {
    return /*Html*/ `

        <div class="createSessionTittle centerElements">
            <div>Opprett økt</div>
            <hr style="width: 30rem;"/>   
        </div>
        <div class="createSessionWrapper">
            <div class="createSessionInputContainer">
                <div class="createSessionInputDiv">
                    <label>Øktnavn:</label>
                    <input>
                </div>
                <div class="createSessionInputDiv">
                    <label>Beltenivå:</label>
                    <input>
                </div>
                <div class="createSessionInputDiv">
                    <label>Beskrivelse:</label>
                    <input>
                </div>
            </div>
            <div class="createSessionAddVideoContainer">
                <label>Teknikk-videoer: </label>
                <div class="createSessionAddVideo">+</div>
            </div>
            <div class="createSessionInputDiv">
                <button>Tilbake</button>
                <button>Legg til økt</button>
            </div>
        </div>
    
    `;
}