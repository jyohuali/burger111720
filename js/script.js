var navToggle = document.querySelector("#main-nav-toggle");
var navList = document.querySelector("#main-nav-list");

//always check to see if elements exist before writing js involving those elemts //
if (navToggle && navList) {
  navToggle.addEventListener("click", function() {

    if(navToggle.classList.contains("close")) {
       navToggle.classList.remove("close");
       navList.classList.remove("open");

     } else {
        navToggle.classList.add("close");
        navList.classList.add("open");
     }
  });
}
