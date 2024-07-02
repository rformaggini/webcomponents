class DinamicTitle extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const compRoot = document.createElement("h1");
    compRoot.textContent = this.getAttribute("title");
    

    const style = document.createElement("style");
    style.textContent = `
        h1 {
            color: red
        }
        `;

    shadow.appendChild(compRoot);
    shadow.appendChild(style);
  }
}
customElements.define("dinamic-title", DinamicTitle);
