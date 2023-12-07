const container = document.getElementById("container");

let characters = [];

// const getAllCharacters = async () => {
//     try {
//         const response = await fetch("https://your-character-api-endpoint.com/characters");
//         characters = await response.json();
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         characters = [];
//     }
// };

const criarCards = () => {
    characters.forEach((character) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img class="card-img" src="${character.img}" alt="${character.name}" />
            <h2 class="card-title">${character.name}</h2>
            <p class="card-profession">${character.professions.join("\n")}</p>
            <a class="card-botao"> CONTRATAR </a>
        `;
        card.addEventListener("click", () => {
            showModal(character);
        });
        container.appendChild(card);
    });
};

const showModal = (character) => {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close-btn");
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", () => {
        modal.remove();
    });

    modalContent.innerHTML = `
        <h2>${character.name}</h2>
        <p>${character.professions.join("\n")}</p>
        <!-- Add more details as needed -->
    `;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        deleteCharacterLocally(character._id);
        modal.remove();
        container.innerHTML = "";
        criarCards();
    });

    modalContent.appendChild(closeBtn);
    modalContent.appendChild(deleteBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
};

const deleteCharacterLocally = (characterId) => {
    characters = characters.filter((character) => character._id !== characterId);
};

const createCharacterLocally = () => {
    const newCharacter = {
        _id: Date.now(),
        name: "New Character",
        img: "url_da_imagem",
        professions: ["New Profession"],
    };

    characters.push(newCharacter);
    criarCards();
};

const criarCardExemplo = () => {
    const exemploCharacter = {
        id: 1,
        img: "../img/gif.gif",
        name: "Exemplo Personagem",
        professions: ["Profissão 1", "Profissão 2"],
    };

    let i = 0;
    while (i < 5) {
        const newCharacterCopy = { ...exemploCharacter, _id: Date.now() + i };
        characters.push(newCharacterCopy);
        i++;
    }
    criarCards();
};

window.addEventListener("load", async () => {
    //await getAllCharacters();
    //criarCards();

    criarCardExemplo();
});


//input do footer
function limparEMostrarMensagem() {
    var input = document.getElementById("mensagemInput");
    var mensagemUsuario = document.getElementById("mensagemParaUsuario");
    var balao = document.getElementById("balao");

    input.value = "";
    mensagemUsuario.textContent = "Seu email foi registrado!";

}
