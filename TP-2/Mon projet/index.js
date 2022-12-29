// Créer un événément au scroll
let scrollvalue = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (scrollvalue < window.scrollY) {
        navbar.style.display = "none";
        scrollvalue = window.scrollY;
    } else {
        navbar.style.display = "grid";
        scrollvalue = window.scrollY;
    }
});

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
