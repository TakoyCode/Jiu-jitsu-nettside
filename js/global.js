function updateView() {
    if (model.app.currentPage == null || model.app.currentPage == "mainPage") mainView();
    else if (model.app.currentPage == "sessionView") sessionView();
    else if (model.app.currentPage == "createSessionView") createSessionView();
    else if (model.app.currentPage == "chosenSessionView") chosenSessionView();
    else if (model.app.currentPage == "selectVideosView") createSelVideosView();
    else if (model.app.currentPage == "techniqueView") techniqueView();

    window.addEventListener('popstate', onBackButtonEvent);
    history.pushState('','','');


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
    
    <div class="navBar">
        <div class="navButtonHolder">
            <button onclick="goToPage(null)">Main</button>
            <button onclick="goToPage('sessionView')">Økter</button>
        </div>
        <div class="progressBarContainer">
            <div class="beltLevel ${giveBeltColor()}">${model.data.users[0].level}</div>
            <div class="progressBarText">Prosent til neste nivå</div>
            <div class="progressBarBackground">
                <div class="progressBar" style="width:${model.data.belt.percentageToNext}%"></div>
            </div>
            <div>${Math.floor(model.data.belt.percentageToNext)}%</div>
        </div>
    </div>
    `;
}
calculateMaxMastery();
calculateAverageMastery();

function calculateAverageMastery() { // Brukes til å kalkulere prosent fullført av nåværende nivå. (Gjennomsnitt målt mot maxMastery relevant til belte)
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
            return 'brownBelt';

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

/*         for(i = 0; i < video.length; i++) {
           if(video[i].masteryLevel == 1) average += 0; // Vil ikke denne gjøre at vi aldri treffer max xp?
           else average += video[i].masteryLevel;
       } 
    let average = 0;
    for (i = 0; i < video.length; i++) {
        average += video[i].masteryLevel;
    }
    average = average / video.length;
    console.log(average); */


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
            if (videos[i].masteryLevel == 0) model.data.belt.twoMaxExp += videos[i].masteryLevel + 1 * 2; // Om mastery er 0, gange opp til 2.
            else if (videos[i].masteryLevel == 1) model.data.belt.twoMaxExp += videos[i].masteryLevel * 2; // Om mastery er 1, gange opp til 2.
            else if (videos[i].masteryLevel == 2) model.data.belt.twoMaxExp += videos[i].masteryLevel; // Om mastery er 2, tildel 2.
        };
        if (videos[i].relBelt == 3) {
            if (videos[i].masteryLevel == 0) model.data.belt.threeMaxExp += videos[i].masteryLevel + 1 * 2; // Om mastery er 0, gange opp til 2
            else if (videos[i].masteryLevel == 1) model.data.belt.threeMaxExp += videos[i].masteryLevel * 2; // Om mastery er 1, gange opp til 2
            else if (videos[i].masteryLevel == 2) model.data.belt.threeMaxExp += videos[i].masteryLevel;// Om mastery er 2, tildel 2.

        };
        if (videos[i].relBelt == 4) {
            if (videos[i].masteryLevel == 0) model.data.belt.fourMaxExp += videos[i].masteryLevel + 1 * 2; // Om mastery er 0, gange opp til 2
            else if (videos[i].masteryLevel == 1) model.data.belt.fourMaxExp += videos[i].masteryLevel * 2; // Om mastery er 1, gange opp til 2
            else if (videos[i].masteryLevel == 2) model.data.belt.fourMaxExp += videos[i].masteryLevel;// Om mastery er 2, tildel 2.
        };
        if (videos[i].relBelt == 5) {
            if (videos[i].masteryLevel == 0) model.data.belt.fiveMaxExp += videos[i].masteryLevel + 1 * 2; // Om mastery er 0, gange opp til 2.
            else if (videos[i].masteryLevel == 1) model.data.belt.fiveMaxExp += videos[i].masteryLevel * 2; // Om mastery er 1, gange opp til 2.
            else if (videos[i].masteryLevel == 2) model.data.belt.fiveMaxExp += videos[i].masteryLevel; // Om mastery er 2, tildel 2.
        };
    };
}


