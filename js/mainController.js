
function checkBeltDropdown(id) {
    if(model.data.beltCategoryOpen && model.data.clickedBelt !== null) {
        model.data.clickedBelt = null;
        model.data.beltCategoryOpen = false;
        } else {
            model.data.clickedBelt = id;
            model.data.beltCategoryOpen = true;
        }
        updateView();
}

function createDropdownBeltHtml(belt) {

            return /*HTML*/`
            <p class="technique-redirect" onclick="goToPage('${belt}front')"> Front</p>
            <p class="technique-redirect" onclick="goToPage('${belt}behind')">Bak</p>
            <p class="technique-redirect" onclick="goToPage('${belt}ground')"> Bakke</p>
            <p class="technique-redirect" onclick="goToPage('${belt}kata')"> Kata</p>
        `;
}


