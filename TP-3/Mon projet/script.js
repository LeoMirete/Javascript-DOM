// Créer un événement au scroll
// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        navbar.style.height = "90px";
    } else {
        navbar.style.height = "50px";
    }
});

// Faire apparaitre l'image de la partie improvise

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 150) {
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = "translateX(0)";
    } else {
    }
});

// Faire apparaitre la popup quand on est en bas du site
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 1250) {
        popup.style.opacity = 1;
        popup.style.transform = "translateX(0)";
    } else {
    }
});

// Bonus : quand on clicke sur la popup elle disparait pour toujours

closeBtn.addEventListener("click", () => {
    popup.remove();
});
