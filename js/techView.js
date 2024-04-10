

function techniqueView(){
    const app = document.getElementById("app");
    let html = "";
    html += /*HTML*/ `
    <div class="techniques">
    <div>Teknikk 1</div>
    <div>teknikknavn</div>
    <div>Beherskelsesnivå</div>
     </div>
    
    <button onclick="teknikk2()">Gå til neste teknikk</button>
    `;
    app.innerHTML = html;
}

function teknikk2(){
    const app = document.getElementById("app");
    let html = "";
    html += /*HTML*/ `
    <div class="techniques">
    <div>Teknikk 2</div>
    <div>teknikknavn</div>
    <div>Beherskelsesnivå</div>
     </div>
    
    <button onclick="teknikk3()">Gå til neste teknikk</button>
    `;
    app.innerHTML = html;
}
function teknikk3(){
const app = document.getElementById("app");
let html = "";
html += /*HTML*/ `
<div class="techniques">
<div>Teknikk 3</div>
<div>teknikknavn</div>
<div>Beherskelsesnivå</div>
 </div>

<button onclick="teknikk4()">Gå til neste teknikk</button>
`;
app.innerHTML = html;
}

function teknikk4(){
const app = document.getElementById("app");
let html = "";
html += /*HTML*/ `
<div class="techniques">
<div>Teknikk 4</div>
<div>teknikknavn</div>
<div>Beherskelsesnivå</div>
 </div>
`;
app.innerHTML = html;
}
