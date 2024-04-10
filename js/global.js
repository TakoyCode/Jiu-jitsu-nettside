function updateView() {
    if (model.app.currentPage == null || model.app.currentPage == "mainPage") mainView();
    else if (model.app.currentPage == "sessionView") SessionView();
}

function goToPage(page) {
    model.app.currentPage = page;
    updateView();
}

