const navigation = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navigation.style.backgroundColor = "#ff5733";
  } else {
    navigation.style.backgroundColor = "transparent";
  }
});
