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

const sections = [...document.querySelectorAll("section")];
const navBar = document.getElementById("navbar__list");
const header = document.getElementsByTagName("header")[0];

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
sections.forEach((section, index) =>{
    navBar.innerHTML += `<li><a bar-nav=${section.id} class="menu__link">section ${index+1}</a></li>`;
})


// Add class 'active' to section when near top of viewport
onscroll = () => {
    sections.forEach(section =>{
        if(Math.abs(section.getBoundingClientRect().top) < section.getBoundingClientRect().height/2){
            section.classList.add("your-active-class");
        }
        else{
            section.classList.remove("your-active-class");
        }
    });
    if(lastScroll < window.scrollY){
        header.style.transform=`translateY(-${header.offsetHeight}px)`;
    }
    else{
        header.style.transform=null;
        console.log(header.offsetHeight);
    }
    lastScroll = window.scrollY;
};

// Scroll to anchor ID using scrollTO event
const sectionLinks = document.querySelectorAll(".menu__link");
sectionLinks.forEach(link =>{
    const elem = document.getElementById(link.getAttribute("bar-nav"));
    link.addEventListener("click", ()=>{
        elem.scrollIntoView({behavior: "smooth"});
    })
})



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


