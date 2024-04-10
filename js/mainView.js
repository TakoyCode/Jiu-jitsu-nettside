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
    <div class="beltBoxMain yellowBelt" onclick="">5.kyu - Gult belte</div>
    <div class="beltBoxMain orangeBelt" onclick="">4.kyu - Oransje belte</div>
    <div class="beltBoxMain greenBelt" onclick="">3.kyu - Grønt belte</div>
    <div class="beltBoxMain blueBelt" onclick="">2.kyu - Blått belte</div>
    <div class="beltBoxMain brownBelt" onclick="">1.kyu - Brunt belte</div>
    </div>
`;
}
