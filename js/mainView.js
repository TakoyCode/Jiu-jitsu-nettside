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
            <div class="beltBoxMain yellowBelt selectedBelt">5.kyu - Gult belte
            ${createDropdownBeltHtml("belt1")}
            </div>
            <div class="beltBoxMain orangeBelt selectedBelt">4.kyu - Oransje belte
            ${createDropdownBeltHtml("belt2")}
            </div>
            <div class="beltBoxMain greenBelt selectedBelt">3.kyu - Grønt belte
            ${createDropdownBeltHtml("belt3")}
            </div>
            <div class="beltBoxMain blueBelt selectedBelt">2.kyu - Blått belte
            ${createDropdownBeltHtml("belt4")}
            </div>
            <div class="beltBoxMain brownBelt selectedBelt">1.kyu - Brunt belte
            ${createDropdownBeltHtml("belt5")}
            </div>
        </div>
`;
}


function createDropdownBeltHtml(belt) {

    return /*HTML*/`
    <div class="tech-redirect-wrap">
        <p class="technique-redirect" onclick="techniqueView('${belt}front')"> Front</p>
        <p class="technique-redirect" onclick="techniqueView('${belt}behind')">Bak</p>
        <p class="technique-redirect" onclick="techniqueView('${belt}ground')"> Bakke</p>
        <p class="technique-redirect" onclick="techniqueView('${belt}kata')"> Kata</p>
    </div>
    `;
}
