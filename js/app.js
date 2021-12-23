/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section");
const navBar = document.getElementById("navbar__list");


let lastScroll = window.scrollY;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navListFrag = document.createDocumentFragment();
sections.forEach((section, index) =>{
    const item = document.createElement("li");
    item.innerHTML = `<a href=#${section.id} bar-nav=${section.id} class="menu__link">section ${index+1}</a>`;
    item.style.cursor= "pointer";
    navListFrag.appendChild(item);
})
navBar.appendChild(navListFrag);


// Add class 'active' to section when near top of viewport
const addActiveClass = () => {
    sections.forEach(section =>{
        if(Math.abs(section.getBoundingClientRect().top) < section.getBoundingClientRect().height/2){
            section.classList.add("your-active-class");
        }
        else{
            section.classList.remove("your-active-class");
        }
    })
};

// hide navbar on scroll down and show on scroll up
const hideNavbar = () => {
    const header = document.querySelector(".page__header");
    if(lastScroll < window.scrollY){
        header.style.transform=`translateY(-${header.offsetHeight}px)`;
    }
    else{
        header.style.transform=null;
    }
};

// show scroll to top button when user scroll down
const showScrollTopBtn = () => {
    if(lastScroll < document.body.offsetHeight/8){
        document.getElementById("buttonScrollTop").style.visibility="hidden";
    }
    else{
        document.getElementById("buttonScrollTop").style.visibility="visible";
    }
}


// Scroll to anchor ID using scrollTO event
const sectionLinks = document.querySelectorAll(".menu__link");
sectionLinks.forEach(link =>{
    const elem = document.getElementById(link.getAttribute("bar-nav"));
    link.addEventListener("click", e =>{
        e.preventDefault();
        elem.scrollIntoView({behavior: "smooth"});
    })
})

const scrollTopBtn = document.getElementById("buttonScrollTop");
scrollTopBtn.addEventListener("click", ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
})



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
onscroll = () => {
    addActiveClass();
    hideNavbar();
    showScrollTopBtn();
    lastScroll = window.scrollY;
};

