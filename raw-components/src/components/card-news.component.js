class CardNews extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const root = document.createElement("div");
    const cardLeft = document.createElement("div");
    const cardRight = document.createElement("div");
    const autor = document.createElement("span");
    const linkTitle = document.createElement("a");
    const content = document.createElement("p");
    const image = document.createElement("img");

    root.setAttribute("class", "card");
    cardLeft.setAttribute("class", "card__left");
    cardRight.setAttribute("class", "card__right");

    autor.textContent = "By " + (this.getAttribute("autor") || "By Anonymous");
    linkTitle.textContent = this.getAttribute("title");
    content.textContent = this.getAttribute("content");
    linkTitle.href = this.getAttribute("url");
    image.src = this.getAttribute("source");

    root.appendChild(cardLeft);
    root.appendChild(cardRight);
    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(content);
    cardRight.appendChild(image);

    return root;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
        .card {
            width: 80%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            }

        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }

        .card__left > span {
            font-weight: 400;
        }

        .card__left > a {
            margin-top: 15px;
            font-size: 25px;
            text-decoration: none;
            color: black;
        }

        .card__left > p {
            color: gray;
        }
        `;
    return style;
  }
}
customElements.define("card-news", CardNews);
