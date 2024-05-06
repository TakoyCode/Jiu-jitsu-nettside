function createSessionView() {
    const app = document.getElementById("app")
    let html = "";
    html += /*HTML*/`

        ${createNavBar()}
        ${createSessionHtml()}
    
`;
    app.innerHTML = html;
}

function createSessionHtml() {
    return /*Html*/ `
            <div class="centerElements">
                <div class="centerElements">
                    <h1 class="createSessionTitle" style="color:${model.app.darkMode ? "" : "white"};">Opprett økt</h1>
                    <hr style="width: 23rem;"/>   
                </div>
                <div class="createSessionWrapper" style="background-color: ${model.app.darkMode ? "rgb(65, 65, 65)" : "rgb(194, 194, 194)"}; color: ${model.app.darkMode ? "rgb(204, 204, 204)" : "black"}">
                    <div class="createSessionInputContainer">
                        <div class="createSessionInputDiv">
                            <label>Øktnavn:</label>
                            <input oninput="model.inputs.session.name = this.value"
                            value = "${model.inputs.session.name ?? ""}">
                        </div>
                        <div class="createSessionInputDiv">
                            <label>Beltenivå:</label>
                            <select name="Kategori" id="beltLevelDrop" onchange="model.inputs.session.level = this.value";>
                                <option disabled selected>Please select a beltlevel</option>
                                <option value ="5 kyu">5 Kyu</option>
                                <option value = "4 kyu">4 Kyu</option>
                                <option value = "3 kyu">3 Kyu</option>
                                <option value = "2 kyu">2 Kyu</option>
                                <option value = "1 kyu">1 Kyu</option>
                            </select>
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
                    <div class="${model.inputs.session.media.length == 0 ? "" : "chosenVideoPreviewContainer"}">
                        ${showSelectedVideosHtml()}
                    </div>
                    <div class="createSessionInputDiv">
                        <button onclick="goToPage('sessionView')">Tilbake</button>
                        <button onclick="addSession()">Legg til økt</button>
                    </div>
                </div>
            </div>
    `;
}

function showSelectedVideosHtml() {
    let html = '';
    for (let i = 0; i < model.inputs.session.media.length; i++) {
        html += /*HTML*/ `
            <div class="selectedVidWrapper">
                <video class="selectedVideo"src="${model.data.videos[model.inputs.session.media[i]].mediaPath}" onclick="removeVideo(${i})"></video>
                <div class="vidPreviewFooter">
                    <b>Name:</b> ${model.data.videos[model.inputs.session.media[i]].name} 
                    <b>level:</b> ${model.data.videos[model.inputs.session.media[i]].relBelt}.kyu 
                    <b>MasteryLevel:</b> ${getLevelEmoji(model.data.videos[model.inputs.session.media[i]].masteryLevel)}
                    <b>Category:</b> ${model.data.categories[model.data.videos[model.inputs.session.media[i]].categories[0]]}
                </div>
            </div>
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
            <div class="videoSelContainer ${model.app.darkMode ? "selectVidPage-darkmode" : "selectVidPage-lightmode"}">
                ${createVideoSelectFilterHtml()}
                ${createVideoPreviewHtml()}
                <div class="selectVidPageContainer"></div>
                </div>
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
    <div class="selVideoFilter ${model.app.darkMode ? "selectVidPageFilter-darkmode" : "selectVidPageFilter-lightmode"}">
        <button class="createVideoPreviewBtn"onclick="goToPage('createSessionView')">Tilbake</button>
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