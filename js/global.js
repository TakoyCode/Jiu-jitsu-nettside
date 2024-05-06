function updateView() {
    if (model.app.currentPage == null || model.app.currentPage == "mainPage") mainView();
    else if (model.app.currentPage == "sessionView") sessionView();
    else if (model.app.currentPage == "createSessionView") createSessionView();
    else if (model.app.currentPage == "chosenSessionView") chosenSessionView();
    else if (model.app.currentPage == "selectVideosView") createSelVideosView();
    else if (model.app.currentPage == "techniqueView") techniqueView();

    window.addEventListener('popstate', onBackButtonEvent);
    history.pushState('', '', '');


}
function onBackButtonEvent() {

    goToPage(model.app.previousPage);


}

function goToPage(page) {
    model.app.previousPage = model.app.currentPage;
    model.app.currentPage = page;
    updateView();
}

function createNavBar() {
    calculateAverageMastery();
    return /*HTML*/ `
    <div class="navBar-wrap">
    <div class="navBar" style="background-color:${model.app.darkMode ? "rgb(65, 65, 65)" : "darkslategray"}"> <!-- Endret -->
        <div class="navButtonHolder">
            <button onclick="goToPage(null)" class="nav-buttons">Main</button>
            <button onclick="goToPage('sessionView') "class="nav-buttons">Økter</button>
        </div>
        <div class="progressBarContainer">
            <div class="beltLevel ${giveBeltColor()}">${model.data.users[0].level}</div>
            <div class="progressBarText" style="color:${model.app.darkMode ? "lightslategray" : "white"};">Prosent til neste nivå</div> <!-- Endret -->
            <div class="progressBarBackground">
                <div class="progressBar" style="width:${model.data.belt.percentageToNext}%"></div>
            </div>
            <div>${Math.floor(model.data.belt.percentageToNext)}%</div>
            <div class="dark-mode-button" onclick="toggleDarkMode()" style="${model.app.darkMode ? "background: linear-gradient(45deg, black 50%, white 50%)" : "background: linear-gradient(45deg, white 50%, black 50%);"}"></div>
        </div>
        <div style=""><img style="${model.app.darkMode ? "" : "filter:invert(100%)"}" class="logo-svg" src="${model.app.currentPage == "chosenSessionView" ? "" : "mysvg.svg"}"/></div> <!-- Endret -->
    </div>
    </div>
    
    `;
}

// ${model.app.darkMode ? "" : "display:none"}
calculateMaxMastery();
calculateAverageMastery();

function calculateAverageMastery() {
    const video = model.data.videos;
    const userLevel = model.data.users[0].level
    let sum = 0;

    for (let i = 0; i < video.length; i++) {
        if (video[i].relBelt == userLevel) {
            sum += video[i].masteryLevel;
        }
    }

    const average = sum / model.data.belt.oneMaxExp;
    model.data.belt.percentageToNext = average * 100;

    const user = model.data.users[0];

    if (model.data.belt.percentageToNext >= 97) {
        user.level = user.level - 1;
        updateView();

    }
}

function giveBeltColor() {

    switch (model.data.users[0].level) {
        case 1:
            return 'brownBelt'

        case 2:
            return 'blueBelt'

        case 3:
            return 'greenBelt'

        case 4:
            return 'orangeBelt'

        case 5:
            return 'yellowBelt'
    }

}


function calculateMaxMastery() {
    const videos = model.data.videos;
    model.data.belt.oneMaxExp = 0;
    model.data.belt.twoMaxExp = 0;
    model.data.belt.threeMaxExp = 0;
    model.data.belt.fourMaxExp = 0;
    model.data.belt.fiveMaxExp = 0;

    for (i = 0; i < videos.length; i++) {
        if (videos[i].relBelt == 1) {
            if (videos[i].masteryLevel == 0) model.data.belt.oneMaxExp += videos[i].masteryLevel + 1 * 2; // Om mastery er 0, gange opp til 2.
            else if (videos[i].masteryLevel == 1) model.data.belt.oneMaxExp += videos[i].masteryLevel * 2; // Om mastery er 1, gange opp til 2.
            else if (videos[i].masteryLevel == 2) model.data.belt.oneMaxExp += videos[i].masteryLevel;// Om mastery er 2, tildel 2.
        };
        if (videos[i].relBelt == 2) {
            if (videos[i].masteryLevel == 0) model.data.belt.twoMaxExp += videos[i].masteryLevel + 1 * 2; 
            else if (videos[i].masteryLevel == 1) model.data.belt.twoMaxExp += videos[i].masteryLevel * 2; 
            else if (videos[i].masteryLevel == 2) model.data.belt.twoMaxExp += videos[i].masteryLevel; 
        };
        if (videos[i].relBelt == 3) {
            if (videos[i].masteryLevel == 0) model.data.belt.threeMaxExp += videos[i].masteryLevel + 1 * 2; 
            else if (videos[i].masteryLevel == 1) model.data.belt.threeMaxExp += videos[i].masteryLevel * 2; 
            else if (videos[i].masteryLevel == 2) model.data.belt.threeMaxExp += videos[i].masteryLevel;

        };
        if (videos[i].relBelt == 4) {
            if (videos[i].masteryLevel == 0) model.data.belt.fourMaxExp += videos[i].masteryLevel + 1 * 2; 
            else if (videos[i].masteryLevel == 1) model.data.belt.fourMaxExp += videos[i].masteryLevel * 2; 
            else if (videos[i].masteryLevel == 2) model.data.belt.fourMaxExp += videos[i].masteryLevel;
        };
        if (videos[i].relBelt == 5) {
            if (videos[i].masteryLevel == 0) model.data.belt.fiveMaxExp += videos[i].masteryLevel + 1 * 2; 
            else if (videos[i].masteryLevel == 1) model.data.belt.fiveMaxExp += videos[i].masteryLevel * 2; 
            else if (videos[i].masteryLevel == 2) model.data.belt.fiveMaxExp += videos[i].masteryLevel; 
        };
    };
}


updateBodyBackground()
function updateBodyBackground() {
    document.body.style.backgroundColor = model.app.darkMode ? "rgb(27, 27, 27)" : "gray";
}

function toggleDarkMode() {
    model.app.darkMode = !model.app.darkMode;
    updateBodyBackground();
    updateView();
}