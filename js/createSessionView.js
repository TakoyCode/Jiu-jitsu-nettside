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
    
        <div>Opprett økt</div>
        <hr/>   
        <div class="createSessionInputContainer centerElements">
            <div>
                <label>Øktnavn: </label>
                <input>
            </div>
            <div>
                <label>Beltenivå</label>
                <input>
            </div>
            <div>
                <label>Beskrivelse</label>
                <input>
            </div>
            <div>
                <label>Teknikk-videoer:</label>
                <div>+</div>
            </div>
            <div>
                <button>Tilbake</button>
                <button>Legg til økt</button>
            </div>
        </div>
    
    `;
}