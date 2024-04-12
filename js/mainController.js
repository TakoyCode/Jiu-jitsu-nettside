
function checkBeltDropdown(id) {

    if (model.data.clickedBelt == id) {
        model.data.clickedBelt = null;

    } else {
        model.data.clickedBelt = id;
    }
    updateView();
}




