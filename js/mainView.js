function mainView() {
    const app = document.getElementById("app")
    let html = "";
    html += /*HTML*/`

    ${createNavBar()}
    ${createBeltHtml()}
    
`;
app.innerHTML = html;
}

function createBeltHtml(){
    return /*html*/`
    <div class ="beltContainerMain">
        <div class="beltBoxMain yellowBelt ${model.data.clickedBelt == 1 ? "selectedBelt" : ""}" onclick="checkBeltDropdown(1)">5.kyu - Gult belte
        ${model.data.clickedBelt == 1 ? createDropdownBeltHtml("belt1") : ""}
        </div>

    <div class="beltBoxMain orangeBelt ${model.data.clickedBelt == 2 ? "selectedBelt" : ""}" onclick="checkBeltDropdown(2)">4.kyu - Oransje belte
    ${model.data.clickedBelt == 2 ? createDropdownBeltHtml("belt2") : ""}
    </div>
    <div class="beltBoxMain greenBelt ${model.data.clickedBelt == 3 ? "selectedBelt" : ""}" onclick="checkBeltDropdown(3)">3.kyu - Grønt belte
    ${model.data.clickedBelt == 3 ? createDropdownBeltHtml("belt3") : ""}
    </div>
    <div class="beltBoxMain blueBelt ${model.data.clickedBelt == 4 ? "selectedBelt" : ""}" onclick="checkBeltDropdown(4)">2.kyu - Blått belte
    ${model.data.clickedBelt == 4 ? createDropdownBeltHtml("belt4") : ""}
    </div>
    <div class="beltBoxMain brownBelt ${model.data.clickedBelt == 5 ? "selectedBelt" : ""}" onclick="checkBeltDropdown(5)">1.kyu - Brunt belte
    ${model.data.clickedBelt == 5 ? createDropdownBeltHtml("belt5") : ""}
    </div>
    </div>
`;
}
