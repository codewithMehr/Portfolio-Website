// For small screen header
let menu = document.getElementById("menu");
menu.addEventListener('click', () => {
    document.querySelector(".small").classList.toggle("blue");
})
let pic = document.getElementById("profilePicture");


let darkMode = document.getElementById("darkMode");
darkMode.addEventListener('click', () => {
    document.getElementById("background").classList.toggle("background2");
    document.getElementById("darkMode").innerHTML = "&#9728;"
    pic.src = "img/testing7.png";
    audio.play();
    if (document.getElementById("background").classList.contains("background2")) {
        document.getElementById("darkMode").title = "light Mode";
    } else {
        document.getElementById("darkMode").title = "Dark Mode";
        document.getElementById("darkMode").innerHTML = "&#9790;"
        pic.src = "img/testing6.png";
    }
})

let darkMode2 = document.getElementById("darkMode-2");
darkMode2.addEventListener('click', () => {
    document.getElementById("background").classList.toggle("background2");
    pic.src = "img/testing7.png";
    document.getElementById("darkMode-2").innerHTML = "&#9728;"
    document.getElementById("darkMode-2").title = "light Mode";
    audio.play();
    if (document.getElementById("background").classList.contains("background2")) {
        document.getElementById("darkMode-2").title = "light Mode";
    } else {
        document.getElementById("darkMode-2").title = "Dark Mode";
        document.getElementById("darkMode-2").innerHTML = "&#9790;"
        pic.src = "img/testing6.png";
    }
})

// toggle audio
let audio = new Audio("img/switch.mp3");
audio.src = "img/switch.mp3";