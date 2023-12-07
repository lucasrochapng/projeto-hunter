document.getElementById("characterForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const professions = document.getElementById("professions").value.split(",");

    const newCharacter = {
        name,
        professions,
    };

    sessionStorage.setItem("newCharacter", JSON.stringify(newCharacter));

    window.location.href = "index.html";
});
