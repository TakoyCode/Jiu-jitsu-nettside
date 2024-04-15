


function techniqueView() {
    const app = document.getElementById("app");
    let html = "";
    html += /*HTML*/ `
    <div class="centerElements">
        ${createNavBar()}

        
          <div class="centerElements">
            <div><strong>Front</strong></div>
            <div class="centerElements">onclick="${seeTechHtml()}"</div> 
                <hr style="width: 20%"/>
                    <div>*teknikknavn*</div>
                    <div onclick="changeLevel()">Beherskelsesnivå : 🟥</div>
                    <video width="30%" controls style="border-radius: 1.5rem">
                        <source src="placeholder.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
            <div class="centerElements">
                    <div>*teknikknavn*</div>
                    <div onclick="changeLevel()">Beherskelsesnivå : 🟥</div>
                    <video width="30%" controls style="border-radius: 1.5rem">
                        <source src="placeholder.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
    `
    app.innerHTML = html;
}














/* 
function teknikk2() {
    const app = document.getElementById("app");
    let html = "";
    html += `
    <div class="techniques">
    <div>Teknikk 2</div>
    <div>teknikknavn</div>
    <div>Beherskelsesnivå</div>
     </div>
    
    <button onclick="teknikk3()">Gå til neste teknikk</button>
    `;
    app.innerHTML = html;
}

function teknikk3() {
    const app = document.getElementById("app");
    let html = "";
    html +=  `
<div class="techniques">
<div>Teknikk 3</div>
<div>teknikknavn</div>
<div>Beherskelsesnivå</div>
 </div>

<button onclick="teknikk4()">Gå til neste teknikk</button>
`;
    app.innerHTML = html;
}

function teknikk4() {
    const app = document.getElementById("app");
    let html = "";
    html += `
<div class="techniques">
<div>Teknikk 4</div>
<div>teknikknavn</div>
<div>Beherskelsesnivå</div>
 </div>
`;
    app.innerHTML = html;
} */
