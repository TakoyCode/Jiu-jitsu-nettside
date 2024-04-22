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