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

function calculateAverageMastery() { // Brukes til å kalkulere prosent fullført av nåværende nivå. (Gjennomsnitt målt mot maxMastery relevant til belte)
    const video = model.data.videos;
    let average = 0;
    for (i = 0; i < video.length; i++) {
        average += video[i].masteryLevel;
    }
    average = average / video.length;
    console.log(average);
}

function calculateMaxMastery() {
    const videos = model.data.videos;

    for (i = 0; i < videos.length; i++) {
        if (videos[i].relBelt == 1) {
            if (videos[i].masteryLevel == 1) model.data.belt.oneMaxExp += videos[i].masteryLevel * 3; // Om mastery er 1, gange opp til 3.
            else if (videos[i].masteryLevel == 2) model.data.belt.oneMaxExp += videos[i].masteryLevel * 1.5; // Om mastery er 2, gange opp til 3.
            else if (videos[i].masteryLevel == 3) model.data.belt.oneMaxExp += videos[i].masteryLevel; // Om mastery er 3, tildel 3.
        };
        if (videos[i].relBelt == 2) {
            if (videos[i].masteryLevel == 1) model.data.belt.twoMaxExp += videos[i].masteryLevel * 3; // Om mastery er 1, gange opp til 3.
            else if (videos[i].masteryLevel == 2) model.data.belt.twoMaxExp += videos[i].masteryLevel * 1.5; // Om mastery er 2, gange opp til 3.
            else if (videos[i].masteryLevel == 3) model.data.belt.twoMaxExp += videos[i].masteryLevel; // Om mastery er 3, tildel 3.
        };
        if (videos[i].relBelt == 3) {
            if (videos[i].masteryLevel == 1) model.data.belt.threeMaxExp += videos[i].masteryLevel * 3; // Om mastery er 1, gange opp til 3.
            else if (videos[i].masteryLevel == 2) model.data.belt.threeMaxExp += videos[i].masteryLevel * 1.5; // Om mastery er 2, gange opp til 3.
            else if (videos[i].masteryLevel == 3) model.data.belt.threeMaxExp += videos[i].masteryLevel; // Om mastery er 3, tildel 3.

        };
        if (videos[i].relBelt == 4) {
            if (videos[i].masteryLevel == 1) model.data.belt.fourMaxExp += videos[i].masteryLevel * 3; // Om mastery er 1, gange opp til 3.
            else if (videos[i].masteryLevel == 2) model.data.belt.fourMaxExp += videos[i].masteryLevel * 1.5; // Om mastery er 2, gange opp til 3.
            else if (videos[i].masteryLevel == 3) model.data.belt.fourMaxExp += videos[i].masteryLevel; // Om mastery er 3, tildel 3.
        };
        if (videos[i].relBelt == 5) {
            if (videos[i].masteryLevel == 1) model.data.belt.fiveMaxExp += videos[i].masteryLevel * 3; // Om mastery er 1, gange opp til 3.
            else if (videos[i].masteryLevel == 2) model.data.belt.fiveMaxExp += videos[i].masteryLevel * 1.5; // Om mastery er 2, gange opp til 3.
            else if (videos[i].masteryLevel == 3) model.data.belt.fiveMaxExp += videos[i].masteryLevel; // Om mastery er 3, tildel 3.
        };
    };

    console.log("One: " + model.data.belt.oneMaxExp)
    console.log("Two: " + model.data.belt.twoMaxExp)
    console.log("Three: " + model.data.belt.threeMaxExp)
    console.log("Four: " + model.data.belt.fourMaxExp)
    console.log("Five: " + model.data.belt.fiveMaxExp)
}
