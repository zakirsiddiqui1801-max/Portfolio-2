
// PORTFOLIO JAVASCRIPT




// 1. CONSTANTS


const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");

const resumeBtn = document.querySelector(".resume-btn");

const navItems = document.querySelectorAll(".nav-links a");

const currentPage = window.location.pathname.split("/").pop();


// 2. VARIABLES / STATE


let menuOpen = false;


// 3. FUNCTIONS


function toggleMenu() {

    menuOpen = !menuOpen;

    if (menuOpen) {

        navLinks.classList.add("show");

    } else {

        navLinks.classList.remove("show");

    }

}

 function setActiveNav(){

    navItems.forEach(function (item) {

        const linkPage = item.getAttribute("href");

        if (linkPage === currentPage) {
            
            item.classList.add("Active");
        }
    });
 }


// 4. EVENT LISTENERS


if (menuBtn) {

    menuBtn.addEventListener("click", toggleMenu);

}

if (resumeBtn) {

    resumeBtn.addEventListener("click", function(){
        window.open("assets/CV.pdf","_blank");
    });
}

navItems.forEach(function (item){
    item.addEventListener("click",function(){
        navLinks.classList.remove("show");
        menuBtn = false;
    });
});

setActiveNav();