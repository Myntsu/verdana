document.querySelectorAll(".card img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});

document.querySelector(".popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};

window.addEventListener("keydown", (e) => {
  if (e.code === "Escape")
    document.querySelector(".popup-image").style.display = "none";
});

const modalCommissions = document.querySelector(".modal-commission");
const modalTos = document.querySelector(".modal-tos");
const modalAbout = document.querySelector(".modal-about");
const openCommissions = document.querySelector(".commission");
const openTos = document.querySelector(".tos");
const openAbout = document.querySelector(".about");
const closeCommissions = document.querySelector(".close-commission");
const closeTos = document.querySelector(".close-tos");
const closeAbout = document.querySelector(".close-about");
const modal = document.querySelectorAll(".modal");

openCommissions.addEventListener("click", () => {
  modalCommissions.showModal();
});

openTos.addEventListener("click", () => {
  modalTos.showModal();
});

openAbout.addEventListener("click", () => {
  modalAbout.showModal();
});

closeCommissions.addEventListener("click", () => {
  modalCommissions.close();
});

closeTos.addEventListener("click", () => {
  modalTos.close();
});

closeAbout.addEventListener("click", () => {
  modalAbout.close();
});


