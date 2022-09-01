// Select all <input>'s so that you can deal with all of them
const inputs = document.querySelectorAll(".controls input");
inputs.forEach((input) => {
  input.addEventListener("change", update);
});

function update(e) {
  // `this` refers to the `<input>` we are interacting with
  //   `value` and `name` refers to the attributes of the <input>
  console.log(this.value, this.name);
  // this.dataset means we access all `data-` attributes (data- prefix is what user defines in html)
  const suffix = this.dataset.sizing || "";
  // Update CSS variables
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
