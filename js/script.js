const nextBtn = document.querySelector(".btn-group .next-card");
const prevBtn = document.querySelector(".btn-group .prev-card");
const johnCard = document.querySelector(".john");
const tanyaCard = document.querySelector(".tanya");

//mouse
nextBtn.addEventListener("click", () => {
  johnCard.style.display = "flex";
  tanyaCard.style.display = "none";
});

prevBtn.addEventListener("click", () => {
  johnCard.style.display = "none";
  tanyaCard.style.display = "flex";
});

//keyboard
window.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight") {
    johnCard.style.display = "flex";
    tanyaCard.style.display = "none";
  } else if (e.code === "ArrowLeft") {
    johnCard.style.display = "none";
    tanyaCard.style.display = "flex";
  }
});
