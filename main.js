//hamburger menu toggle
const openBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');


openBtn.addEventListener("click", () => {
    sidebar.classList.add("change");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("change");
});

//sticky navbar
window.onscroll = function() {
    stickyFunction()
};
const navbar = document.querySelector("nav");
const sticky = navbar.offsetTop;

function stickyFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
}




