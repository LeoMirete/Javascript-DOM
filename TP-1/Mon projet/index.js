const rond1 = document.createElement("div");
const rond2 = document.createElement("div");
const rond3 = document.createElement("div");
document.body.appendChild(rond1);
document.body.appendChild(rond2);
document.body.appendChild(rond3);
rond1.classList.add("rond1");
rond2.classList.add("rond2");
rond3.classList.add("rond3");

rond1.style.height = "100px";
rond1.style.width = "100px";
rond2.style.height = "50px";
rond2.style.width = "50px";
rond3.style.height = "10px";
rond3.style.width = "10px";

window.addEventListener("mousemove", (e) => {
    rond1.style.left = e.pageX + "px";
    rond1.style.top = e.pageY + "px";
});

window.addEventListener("mousemove", (e) => {
    rond2.style.left = e.pageX + "px";
    rond2.style.top = e.pageY + "px";
});

window.addEventListener("mousemove", (e) => {
    rond3.style.left = e.pageX + "px";
    rond3.style.top = e.pageY + "px";
});
