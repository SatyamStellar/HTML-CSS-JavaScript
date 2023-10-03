const carousel = document.querySelector(".carousel");
const arrowBtn = document.querySelectorAll(".wrapper i");
const firstCard = carousel.querySelector(".card").offsetWidth;

let isDragging = false,
  startX,
  StatScrollLeft;

  arrowBtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
        carousel.scrollLeft += btn.id === "left"? - firstCard : firstCard; 
    })
  })
const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  StatScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = StatScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragStop);
