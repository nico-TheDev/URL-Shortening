class UI {
    constructor() {
        this.linkList = document.querySelector(".app__list");
        this.inputField = document.querySelector(".app__input");
        this.form = document.querySelector(".app__form");
        this.mainApp = document.querySelector(".app__main");
        this.message = document.querySelector('.message');
    }

    addToList(url, id) {
        const markup = `
        <li class="app__item">
            <p class="app__link">
                ${url}
            </p>
            <input type="text" class="value-holder">
            <a href="https://rel.ink/${id}" class="app__shorten">https://rel.ink/${id}</a>
            <button class="app__copy btn btn--box">Copy</button>
        </li>
        `;

        this.linkList.insertAdjacentHTML("beforeend", markup);
    }

    clearInput() {
        this.inputField.value = "";
    }

    showAlert(message) {
        const msg = document.createElement("div");
        msg.className = "error";
        msg.appendChild(document.createTextNode(message));

        this.message.insertAdjacentElement("beforeend", msg);
        this.inputField.classList.add("borderRed");
        setTimeout(() => {
            this.inputField.classList.remove('borderRed');
            msg.remove();
        }, 2000);
    }
}
