function mainView() {
    const app = document.getElementById("app")
    let html = "";
    html += /*HTML*/`

    ${createNavBar()}
    ${createBeltHtml()}
    
`;
    app.innerHTML = html;
}

function createBeltHtml() {
    return /*html*/`
        <div class ="beltContainerMain">

            <div class="beltBoxes">
              <div class="beltBoxHeader yellowBelt">5.kyu - Gult belte</div>
              <div class="beltBoxMain yellowBelt selectedBelt">${createDropdownBeltHtml("belt5")}</div>
            </div>
            <div class="beltBoxes">
              <div class="beltBoxHeader orangeBelt">4.kyu - Oransje belte</div>
              <div class="beltBoxMain orangeBelt selectedBelt">${createDropdownBeltHtml("belt4")}</div>
            </div>
            <div class="beltBoxes">
              <div class="beltBoxHeader greenBelt">3.kyu - Grønt belte</div>
              <div class="beltBoxMain greenBelt selectedBelt">${createDropdownBeltHtml("belt3")}</div>
            </div>
            <div class="beltBoxes">
              <div class="beltBoxHeader blueBelt">2.kyu - Blått belte</div>
              <div class="beltBoxMain blueBelt selectedBelt">${createDropdownBeltHtml("belt2")}</div>
            </div>
            <div class="beltBoxes">
              <div class="beltBoxHeader brownBelt">1.kyu - Brunt belte</div>
              <div class="beltBoxMain brownBelt selectedBelt">${createDropdownBeltHtml("belt1")}</div>
            </div>
            
        </div>
`;
}


function createDropdownBeltHtml(belt) {

    return /*HTML*/`
    <div class="tech-redirect-wrap">
        <p class="technique-redirect" onclick="changeCurrentTechnique('${belt}front')"> Front</p>
        <p class="technique-redirect" onclick="changeCurrentTechnique('${belt}behind')">Bak</p>
        <p class="technique-redirect" onclick="changeCurrentTechnique('${belt}ground')"> Bakke</p>
        <p class="technique-redirect" onclick="changeCurrentTechnique('${belt}kata')"> Kata</p>
    </div>
    `;
}

function changeCurrentTechnique(technique) {
    model.app.currentTechnique = technique;
    goToPage('techniqueView');
}