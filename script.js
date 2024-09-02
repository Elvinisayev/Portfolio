let github = document.getElementById('github')

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

github.addEventListener('click',()=>{
  location.href ='./projects.html'
})

