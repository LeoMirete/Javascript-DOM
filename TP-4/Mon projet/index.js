// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus
const sidebar = document.getElementById("side-bar");
const togglebtn = document.querySelector(".toggle-btn");
const sectionCollection = document.getElementsByClassName("content");
const section = sectionCollection.item(0);
const firstSpan = document.querySelector(".firstSpan");
const secondSpan = document.querySelector(".secondSpan");
const thirdSpan = document.querySelector(".thirdSpan");

togglebtn.addEventListener("click", () => {
    sidebar.classList.toggle("side-bar-alternative");
});
// Ranger la sidebar si on click sur le contenu principal
section.addEventListener("click", () => {
    sidebar.classList.remove("side-bar-alternative");
});
// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

togglebtn.addEventListener("click", () => {
    firstSpan.classList.toggle("span1");
    secondSpan.classList.toggle("span2");
    thirdSpan.classList.toggle("span3");
});
// Aide
// Priorités en CSS : id > classe > baliseHtml
