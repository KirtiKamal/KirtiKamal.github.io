/*!
 * Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector("#sideNav");
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#sideNav",
            offset: 74,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function(responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });
});

function lightsOut() {
    document.body.style.backgroundColor = "#343a40";
    document.body.style.color = "white";
    var switcher = document.getElementById("switch");
    switcher.classList.remove("fa-moon");
    switcher.classList.add("fa-sun");

    document.querySelectorAll(".card").forEach((card) => {
        card.style.backgroundColor = "#343a40";
        card.style.borderColor = "white";
    });

    document
        .querySelectorAll("h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6")
        .forEach((h) => {
            h.style.color = "white";
        });

    document.querySelectorAll(".img-border").forEach((image) => {
        image.style.borderColor = "white";
    });
}

function lightsOn() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "var(--bs-body-color)";
    var switcher = document.getElementById("switch");
    switcher.classList.remove("fa-sun");
    switcher.classList.add("fa-moon");

    document.querySelectorAll(".card").forEach((card) => {
        card.style.backgroundColor = "white";
        card.style.borderColor = "rgba(0, 0, 0, 0.125)";
    });

    document
        .querySelectorAll("h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6")
        .forEach((h) => {
            h.style.color = "var(--bs-body-color)";
        });

    document.querySelectorAll(".img-border").forEach((image) => {
        image.style.borderColor = "#343a40";
    });
}

if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    // dark mode
    lightsOut();
}

async function userTheme() {
    if (document.body.style.backgroundColor != "white") {
        lightsOn();
    } else {
        lightsOut();
    }
}