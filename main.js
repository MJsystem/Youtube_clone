const Btn = document.querySelector(".handleOverflowBtn");
const title = document.querySelector("p");

function handleClick() {
  title.classList.toggle("active");
}

Btn.addEventListener("click", handleClick);
