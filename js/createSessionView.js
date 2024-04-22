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
                    <input oninput="model.inputs.session.name = this.value"
                    value = "${model.inputs.session.name ?? ""}">
                </div>
                <div class="createSessionInputDiv">
                    <label>Beltenivå:</label>
                    <input oninput="model.inputs.session.level = this.value"
                    value = "${model.inputs.session.level ?? ""}">
                </div>
                <div class="createSessionInputDiv">
                    <label>Beskrivelse:</label>
                    <input oninput="model.inputs.session.description = this.value"
                        value = "${model.inputs.session.description ?? ""}">
                </div>
            </div>
            <div class="createSessionAddVideoContainer">
                <label>Teknikk-videoer: </label>
                <div class="createSessionAddVideo" onclick="createSelVideosView();">+</div>
            </div>
            <div class="chosenVideoPreviewContainer">
                ${showSelectedVideosHtml()}
            </div>
            <div class="createSessionInputDiv">
                <button onclick="goToPage('sessionView')">Tilbake</button>
                <button onclick="addSession()">Legg til økt</button>
            </div>
        </div>
    `;
}

function showSelectedVideosHtml() {
    let html = '';
    for (let i = 0; i < model.inputs.session.media.length; i++) {
        html += /*HTML*/ `
        
        <video class="" src="${model.data.videos[i].mediaPath}"></video>

        `;
    }
    return html;
}

function createSelVideosView() {
    const app = document.getElementById("app")
    let html = "";
    html += /*HTML*/`

        <div class="centerElements">
            ${createNavBar()}
            ${createSessionHtml()}
            ${createSelectVideosHTML()}
        </div>
        `;

    app.innerHTML = html;
}

function createSelectVideosHTML() {
    return /*html*/`
        <div class="addVideoBlur">
            <button onclick="goToPage('createSessionView')">BACK - Placeholder</button>
            <div class="videoSelContainer">
                ${createVideoSelectFilterHtml()}
                ${createVideoPreviewHtml()}
                ${createSelectVideoPage()}
            </div>
        </div>
    `;
}

function createSelectVideoPage() {
    return /*HTML*/ `
        <div class="selectVidPageContainer">
            <img class="vidPageGoLeft"src="nextPage.png">
            <span class="currentVidSelPage">1</span>
            <img class="vidPageGoRight"src="nextPage.png">        
        </div>
    `;
}


function createVideoPreviewHtml() {
    return /*HTML*/ `
        <div class="vidPreviewContainer">
            ${createSelectebleVideosHtml()}
        </div>
    `;
}

function createSelectebleVideosHtml() {
    let html = '';
    for (let i = 0; i < model.data.videos.length; i++) {
        html += /*HTMl*/ `
        <video class="vidPreview" src="${model.data.videos[i].mediaPath}" onclick="addVideo(${i})"></video>
        `;
    }
    return html;
}

function createVideoSelectFilterHtml() {
    return /*HTML*/ `
        <div class="selVideoFilter">
                <p style="margin-left: 1%">
                    <b>Filter</b>
                </p> 
                <p style="margin-left: 1rem;">
                    Nivå: <img class="sortIcon"src="asc.png" onclick="">
                </p>
                <p style="margin-left: 2rem;">
                    Belte: <img class="sortIcon"src="asc.png" onclick="">
                </p>
                <p style="margin-left: 2rem;">
                    Kategori: 
                </p> 
                <select name="Kategori" id="teknikKategori">
                    <option value="None">None</option>
                    <option value="Front">Front</option>
                    <option value="Bak">Bak</option>
                    <option value="Bakke">Bakke</option>
                    <option value="Kata">Kata</option>
                </select>
        </div>
    `;
}