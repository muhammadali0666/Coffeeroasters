const elHamburgerbtn = document.querySelector(".site__header-button")

const elHeader = document.querySelector(".site-header")

elHamburgerbtn.addEventListener("click", () => {
  elHeader.classList.toggle("site-header--open")
})