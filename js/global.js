function updateView() {
    if (model.app.currentPage == null || model.app.currentPage == "mainPage") mainView();
    else if (model.app.currentPage == "sessionView") sessionView();
    else if (model.app.currentPage == "createSessionView") createSessionView();
    else if (model.app.currentPage == "chosenSessionView") chosenSessionView();
    else if (model.app.currentPage == "popUp") createSelVideosView();
    else if (model.app.currentPage == "techniqueView") techniqueView();
}

function goToPage(page) {
    model.app.currentPage = page;
    updateView();
}

function createNavBar() {
    return /*HTML*/ `
    
    <div class="navBar">
        <div class="navButtonHolder">
            <button onclick="goToPage(null)">Main</button>
            <button onclick="goToPage('sessionView')">Økter</button>
        </div>
        <div class="progressBarContainer">
            <div class="beltLevel">2</div>
            <div class="progressBarText">Prosent til neste nivå</div>
            <div class="progressBarBackground">
                <div class="progressBar"></div>
            </div>
            <div>50 %</div>
        </div>
    </div>
    `;
}
