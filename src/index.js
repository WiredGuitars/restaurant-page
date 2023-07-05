import './style.css'

const mainContainer = document.getElementById("mainContainer")

function addHTMLToMainContainer() {
const htmlStructure = `
    <div id="navBar">
      <div id="buttonDiv">
        <button id="buttons" class="str">STR</button>
        <button id="buttons" class="agi">AGI</button>
        <button id="buttons" class="int">INT</button>
        <button id="buttons" class="uni">UNI</button>
      </div>
    </div>
    <div id="homeMessage">These are the top 6 heroes sorted by attribute for Dota 2</div>
    <div id="mainImages">
    </div>
    <div id="footer">Contact Me</div>
  `;

    mainContainer.innerHTML = htmlStructure
}

addHTMLToMainContainer()