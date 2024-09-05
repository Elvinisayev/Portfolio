let live_demo = document.getElementById('live demo')
let ana_sehife = document.getElementById('ana sehife')

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// document.addEventListener("DOMContentLoaded", function() {
//   var homeButton = document.getElementById("ana sehife");
//   if (homeButton) {
//       homeButton.addEventListener("click", function() {
//           window.location.href = "index.html"; // Ana səhifəyə keçid üçün uyğun linki dəyişdirin
//       });
//   }
// });




live_demo.addEventListener('click',()=>{
  location.href ='./projects.html'
})

ana_sehife.addEventListener('click',()=>{
  location.href ='./index.html'
})

