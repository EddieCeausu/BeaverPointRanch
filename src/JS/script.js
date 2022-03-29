 // mobile menu
 const btnClose = document.querySelector("#mobile-menu-button-close");
 const mobileMenu = document.querySelector("#mobile-menu");

 // mobile butotn open
 const btnOpen = document.querySelector("button.mobile-menu-button-open");
 

 // event listener

 btnOpen.addEventListener("click", () => {
    mobileMenu.style.opacity = 1;
     mobileMenu.classList.toggle("hidden");
     
 });

 btnClose.addEventListener("click", () => {
    mobileMenu.style.opacity = 0;
     mobileMenu.classList.toggle("hidden");
 });


 const btndrop = document.querySelector("button.dropdown");

 

