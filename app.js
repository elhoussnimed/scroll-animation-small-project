const items = [...document.querySelectorAll(".hide")];

window.addEventListener("scroll", () => {
  items.forEach((item) => {
    if (window.scrollY > item.offsetTop - 300) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});
