let test = [];

function addSession() {
    const user = model.data.users[0]
    user.sessions.push(JSON.parse(JSON.stringify(model.inputs.session)));
}