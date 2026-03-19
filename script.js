// Display utilities
const displayMap = {
  "chai-d-block": "block",
  "chai-d-inline": "inline",
  "chai-d-inline-block": "inline-block",
  "chai-d-flex": "flex",
  "chai-d-grid": "grid",
  "chai-d-none": "none",
}

Object.entries(displayMap).forEach(([className, value]) => {
  document.querySelectorAll(`.${className}`).forEach(el => {
    el.style.display = value;
  });
});
