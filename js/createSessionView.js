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
            <div class="createSessionInputDiv">
                <button onclick="goToPage('sessionView')">Tilbake</button>
                <button onclick="addSession()">Legg til økt</button>
            </div>
        </div>
    
    `;
}

function createSelVideosView() {
    const app = document.getElementById("app")
    let html = "";
    html += /*HTML*/`

        <div class="centerElements">
        ${createNavBar()}
        ${createSessionHtml()}
        ${createSelVideosHTML()}
        </div>
        `;

    app.innerHTML = html;
}

function createSelVideosHTML() {

    return /*html*/`
    <div class="addVideoBlur">
    <button onclick="goToPage('createSessionView')">BACK - Placeholder</button>
        <div class="videoSelContainer">
            <div class="selVideoFilter">
                <p style="margin-left: 1%"><b>Filter</b></p> 
                <p style="margin-left: 1rem;">Nivå: <img class="sortIcon"src="asc.png" onclick=""></p>
                <p style="margin-left: 2rem;">Belte: <img class="sortIcon"src="asc.png" onclick=""></p>
                <p style="margin-left: 2rem;">Kategori: </p> 
                <select name="Kategori" id="teknikKategori">
                <option value="None">None</option>
                <option value="Front">Front</option>
                <option value="Bak">Bak</option>
                <option value="Bakke">Bakke</option>
                <option value="Kata">Kata</option>
              </select>
            </div>

        <div class="vidPreviewContainer">
            <video class="vidPreview"src="${model.data.videos[0].mediaPath}"></video>
            <video class="vidPreview"src="${model.data.videos[0].mediaPath}"></video>
            <video class="vidPreview"src="${model.data.videos[0].mediaPath}"></video>
            <video class="vidPreview"src="${model.data.videos[0].mediaPath}"></video>
            <video class="vidPreview"src="${model.data.videos[0].mediaPath}"></video>
            <video class="vidPreview"src="${model.data.videos[0].mediaPath}"></video>
        </div>

        <div class="selectVidPageContainer">
        <img class="vidPageGoLeft"src="nextPage.png"><span class="currentVidSelPage">1</span><img class="vidPageGoRight"src="nextPage.png">
        </div>

        </div>
        </div>
    
    </div>


`;
}

