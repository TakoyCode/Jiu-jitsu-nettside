function mainView() {
    const app = document.getElementById("app")
    let html = "";
    html += /*HTML*/`

    ${createNavBar()}
        <div>Test</div>
    
    `;
    app.innerHTML = html;
}