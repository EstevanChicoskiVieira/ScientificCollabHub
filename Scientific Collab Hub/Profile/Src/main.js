var card = document.getElementById("card");

card.addEventListener("click", () => {
    const pasta = "../../Profile/Repo/";
    const url = `${window.location.href}${pasta}`;
    window.location.href = url;
});