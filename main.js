const navigation = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navigation.style.backgroundColor = "#ff5733";
  } else {
    navigation.style.backgroundColor = "transparent";
  }
});

const hamburger = document.querySelector('.hamburger');

// Add a click event listener to toggle the side panel
hamburger.addEventListener('click', () => {
    navigation.classList.toggle('show');
});

// Close the side panel when a menu item is clicked
const menuItems = document.querySelectorAll('.navigation ul li a');
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        navigation.classList.remove('show');
    });
});
