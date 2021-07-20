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
 * Define Global Variables
 * 
*/
let getSections =document.querySelectorAll('section');
let navList =document.getElementById("navbar__list");
let sectionLink= document.getElementsByTagName('a');

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

/* build the nav by creating li element and an anchor 
in the li element and adding them to the ul*/
//creating a li elements
for(let i =0; i<getSections.length; i++){
  const listItem = document.createElement('li');
    navList.appendChild(listItem);
}
/*addin a class to li elements and creating of <a> element 
and adding it to li elements end linking it to the sections
*/
let linkItems = document.querySelectorAll('li');
linkItems.forEach((elm,index)=> {
elm.classList.add('menu__link');
let elmID = getSections[index].getAttribute('id');
let link ='<a href ="#"></a>';
elm.innerHTML=link;
sectionLink[index].setAttribute('href', '#'+elmID);
sectionLink[index].innerHTML='section '+(index+1);
});





// Add class 'active' to section when clicking a nav button 


for(let i=0; i<getSections.length;i++){
sectionLink[i].addEventListener('click', function(){
  document.querySelector(".your-active-class").classList.remove("your-active-class");
  getSections[i].classList.add("your-active-class");

})
}









/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


