function createSessionView() {
    const app = document.getElementById("app")
    let html = "";
    html += /*HTML*/`

        ${createNavBar()}
        <div class="centerElements">
            ${createSessionHtml()}
        </div>
    
`;
    app.innerHTML = html;
}

function createSessionHtml() {
    return /*Html*/ `
        <div class="centerElements">
            <h1 class="createSessionTittle">Opprett økt</h1>
            <hr style="width: 23rem;"/>   
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
                <div class="createSessionAddVideo" onclick="goToPage('selectVideosView')">+</div>
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
        
        <video class="vidPreviewSmall"src="${model.data.videos[model.inputs.session.media[i]].mediaPath}" onclick="removeVideo(${i})"></video>

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
    if (model.inputs.filter.category == -1) {
        for (let i = 0; i < model.data.videos.length; i++) {
            html += /*HTMl*/ `
                <div class="vidPreviewWrapper">
                    <video class="vidPreview" src="${model.data.videos[i].mediaPath}" onclick="addVideo(${i})"></video>
                    <div class="vidPreviewFooter">
                        <b>Name:</b> ${model.data.videos[i].name} 
                        <b>level:</b> ${model.data.videos[i].relBelt}.kyu 
                        <b>MasteryLevel:</b> ${getLevelEmoji(model.data.videos[i].masteryLevel)}
                        <b>Category:</b> ${model.data.categories[model.data.videos[i].categories[0]]}
                    </div>
                </div>
        `;
        }
    }
    else {
        for (let i = 0; i < model.data.videos.length; i++) {
            if (model.data.videos[i].categories[0] == model.inputs.filter.category)
                html += /*HTMl*/ `
                <div class="vidPreviewWrapper">
                    <video class="vidPreview" src="${model.data.videos[i].mediaPath}" onclick="addVideo(${i})"></video>
                    <div class="vidPreviewFooter">
                        <b>Name:</b> ${model.data.videos[i].name} 
                        <b>level:</b> ${model.data.videos[i].relBelt}.kyu 
                        <b>MasteryLevel:</b> ${getLevelEmoji(model.data.videos[i].masteryLevel)}
                        <b>Category:</b> ${model.data.categories[model.data.videos[i].categories[0]]}
                    </div>
                </div>
        `;
        }
    }
    return html;
}

function createVideoSelectFilterHtml() {
    const filterType = model.inputs.filter.category;
    return /*HTML*/ `
        <div class="selVideoFilter">
                <p style="margin-left: 1%">
                    <b>Filter</b>
                </p> 
                <p style="margin-left: 1rem;">
                    Nivå: <img class="sortIcon ${model.inputs.filter.masteryLevel == -1 ? "sortIconFlipped" : ""}"src="asc.png" onclick="filterByMasteryLevel()">
                </p>
                <p style="margin-left: 2rem;">
                    Belte: <img class="sortIcon ${model.inputs.filter.beltLevel == -1 ? "sortIconFlipped" : ""}"src="asc.png" onclick="filterByBeltLevel()">
                </p>
                <p style="margin-left: 2rem;">
                    Kategori: 
                </p> 
                <select name="Kategori" id="teknikKategori" onchange="changeFilterType(this.value)">
                    <option value="${-1}" ${filterType == -1 ? "selected" : ""}>None</option>
                    <option value="${0}" ${filterType == 0 ? "selected" : ""}>Front</option>
                    <option value="${1}" ${filterType == 1 ? "selected" : ""}>Bak</option>
                    <option value="${2}" ${filterType == 2 ? "selected" : ""}>Bakke</option>
                    <option value="${3}" ${filterType == 3 ? "selected" : ""}>Kata</option>
                </select>
        </div>
    `;
}