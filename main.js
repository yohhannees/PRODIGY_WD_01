
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("show");
});

const menuItems = document.querySelectorAll(".navigation ul li a");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    navigation.classList.remove("show");
  });
});
