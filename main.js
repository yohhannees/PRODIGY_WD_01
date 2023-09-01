const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const logo = document.querySelector(".logo");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("show");
});

// Add a click event listener to the logo to open the side panel
logo.addEventListener("click", () => {
  navigation.classList.add("show");
});


/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}