function addSession() {
    const user = model.data.users[0];
    user.sessions.push(JSON.parse(JSON.stringify(model.inputs.session)));
    emptyCreateSessionInputs();
    goToPage('sessionView');
}

function emptyCreateSessionInputs() {
    const input = model.inputs.session;
    input.name = null;
    input.level = null;
    input.description = null;
    input.media = [];
}

function addVideo(index) {
    model.inputs.session.media.push(index);
    goToPage('createSessionView');
}

function removeVideo(index) {
    model.inputs.session.media.splice(index, 1)
    goToPage('createSessionView');
}



function changeFilterType(filterIndex) {
    console.log(filterIndex)
    model.inputs.filter.category = filterIndex;
    updateView();
}

function filterByMasteryLevel() {
    if (model.inputs.filter.masteryLevel == 1) model.inputs.filter.masteryLevel = -1
    else model.inputs.filter.masteryLevel = 1

    if (model.inputs.filter.masteryLevel == 1) {
        model.data.videos.sort((a, b) => {
            return a.masteryLevel - b.masteryLevel;
        })
    }
    else if (model.inputs.filter.masteryLevel == -1) {
        model.data.videos.sort((a, b) => {
            return b.masteryLevel - a.masteryLevel;
        })
    }
    console.log(model.data.videos)
    updateView();
}

function filterByBeltLevel() {
    if (model.inputs.filter.beltLevel == 1) model.inputs.filter.beltLevel = -1
    else model.inputs.filter.beltLevel = 1

    if (model.inputs.filter.beltLevel == 1) {
        model.data.videos.sort((a, b) => {
            return a.relBelt - b.relBelt;
        })
    }
    else if (model.inputs.filter.beltLevel == -1) {
        model.data.videos.sort((a, b) => {
            return b.relBelt - a.relBelt;
        })
    }
    console.log(model.data.videos)
    updateView();
}