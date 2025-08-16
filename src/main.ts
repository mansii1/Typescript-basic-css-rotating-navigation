import "./style.css";

const open = document.getElementById("open") as HTMLButtonElement;
const close = document.getElementById("close") as HTMLButtonElement;
const container = document.querySelector(".container") as HTMLDivElement;

open.addEventListener("click", () => {
  console.log("open clicked");
  container.classList.add("show-nav");
});

close.addEventListener("click", () => {
  console.log("close clicked");
  container.classList.remove("show-nav");
});
