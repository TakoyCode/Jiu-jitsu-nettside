    function remove(){
        model.data.users[0].sessions.splice(model.data.chosenSessionIndex,1)
        goToPage('sessionView');
    }