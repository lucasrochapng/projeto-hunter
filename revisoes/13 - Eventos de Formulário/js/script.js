let listaAnimais = [
    {
        idAnimal: 1,
        nome: "Toji",
        descricao: "um animal mto doido...",
        img: "./img/img1.webp"
    },

    {
        idAnimal: 2,
        nome: "Gojo",
        descricao: "um animal mto doido...",
        img: "./img/img2.jpg"
    },

    {
        idAnimal: 3,
        nome: "Yuta",
        descricao: "um animal mto doido...",
        img: "./img/img3.webp"
    },

    {
        idAnimal: 4,
        nome: "Sukuna",
        descricao: "um animal mto doido...",
        img: "./img/img4.jpg"
    },

    {
        idAnimal: 5,
        nome: "Nanami",
        descricao: "um animal mto doido...",
        img: "./img/img5.webp"
    }
];



const criarCards = () => {
    let container = document.querySelector(".container");

    listaAnimais.forEach((elemento) => {
        let card =
        `
        <div class="card">
        <img class="card-img" src="${elemento.img}" />
        <h2 class="card-titulo">${elemento.nome}</h2>
        <p class="card-descricao">${elemento.descricao}</p>
        <a class="card-botao" idAnimal="${elemento.idAnimal}"> ADOTAR </a>
      </div>
    `;
    container.innerHTML += card;
    });
};

window.addEventListener("load", () => {
    criarCards();

    let cards = document.querySelectorAll(".card");
    cards.forEach((elemento) => {
        elemento.addEventListener("mouseover", () => {
            elemento.classList.add("change-scale");
        });

        elemento.addEventListener("mouseout", () => {
            elemento.classList.remove("change-scale");
        });

        elemento.lastElementChild.addEventListener("click", (event) => {
            event.preventDefault();
            alert(elemento.lastElementChild.getAttribute("idAnimal"));
            window.location.href = "./adotar.html";
        });

    });
});




// let container = document.querySelector(".container");
// //container.style.backgroundColor = "pink";
// container.classList.add("change-background");