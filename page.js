const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.querySelector(".overlay");

if (burgerMenu && bgOverlay) {
    burgerMenu.addEventListener("click", () => {
        navbarMenu.classList.add("is-active");
        bgOverlay.classList.toggle("is-active");
    });

    bgOverlay.addEventListener("click", () => {
        navbarMenu.classList.remove("is-active");
        bgOverlay.classList.toggle("is-active");
    });
}
 
document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
        navbarMenu.classList.remove("is-active");
        bgOverlay.classList.remove("is-active");
    });
});

 
const searchBlock = document.querySelector(".search-block");
const searchToggle = document.querySelector(".search-toggle");
const searchCancel = document.querySelector(".search-cancel");

if (searchToggle && searchCancel) {
    searchToggle.addEventListener("click", () => {
        searchBlock.classList.add("is-active");
    });

    searchCancel.addEventListener("click", () => {
        searchBlock.classList.remove("is-active");
    });
}




 
function openModal() {
    document.getElementById('modalOverlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}
 


 
const stickyElement = document.querySelector('.sticky-element');

window.addEventListener('scroll', () => {
  if (window.scrollY > 580) {
    stickyElement.classList.add('scrolled');
  } else {
    stickyElement.classList.remove('scrolled');
  }
});
 