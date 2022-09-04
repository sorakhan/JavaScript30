const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", toggle);
  // if we want the top and end texts to show after panel grows
  panel.addEventListener("transitionend", showAlltext);
});

// function toggle() {
//   clearOpened();
//   !this.classList.contains("open")
//     ? this.classList.add("open", "open-active")
//     : this.classList.remove("open", "open-active");
// }

function toggle() {
  // classList.toggle just adds/removes the class without having to do above
  // clearOpened();
  this.classList.toggle("open");
}

function showAlltext(e) {
  if (e.propertyName.includes("flex")) this.classList.toggle("open-active");
}

// // Closes other panels - optional
// function clearOpened() {
//   panels.forEach((panel) => {
//     if (panel.classList.contains("open")) {
//       panel.classList.remove("open", "open-active");
//     }
//   });
// }
