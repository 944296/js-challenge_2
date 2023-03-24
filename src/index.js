const body = document.querySelector("body");

function handleWidth() {
  const Width = window.innerWidth;

  if (Width > 700) {
    body.className = "yellow";
  } else if (Width < 700 && Width >= 500) {
    body.className = "purple";
  } else {
    body.className = "blue";
  }
}

window.addEventListener("resize", handleWidth);
