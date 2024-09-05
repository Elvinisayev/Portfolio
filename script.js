
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", function() {
  var homeButton = document.getElementById("ana sehife");
  if (homeButton) {
      homeButton.addEventListener("click", function() {
          window.location.href = "index.html"; // Ana səhifəyə keçid üçün uyğun linki dəyişdirin
      });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var homeButton = document.getElementById("live demo");
  if (homeButton) {
      homeButton.addEventListener("click", function() {
          window.location.href = "projects.html"; // Ana səhifəyə keçid üçün uyğun linki dəyişdirin
      });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var homeButton = document.getElementById("live demo 2");
  if (homeButton) {
      homeButton.addEventListener("click", function() {
          window.location.href = "projects_2.html"; // Ana səhifəyə keçid üçün uyğun linki dəyişdirin
      });
  }

});
document.addEventListener("DOMContentLoaded", function() {
  var homeButton = document.getElementById("live demo 3");
  if (homeButton) {
      homeButton.addEventListener("click", function() {
          window.location.href = "projects_3.html"; // Ana səhifəyə keçid üçün uyğun linki dəyişdirin
      });
  }
});




