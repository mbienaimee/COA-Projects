let containers = document.querySelectorAll(".image-wrapper");

containers.forEach((container) => {
  container.addEventListener("mouseover", function (event) {
    let overlay = container.querySelector(".overlay");
    let image = container.querySelector("img");
    let anchor = container.querySelector(".anchor");

    image.classList.add("img-zoomed-in");
    overlay.classList.add("visible");
    anchor.classList.remove("anchor");
  });

  container.addEventListener("mouseout", function () {
    let overlay = container.querySelector(".overlay");
    let image = container.querySelector("img");
    let anchor = container.querySelector(".anchor");

    image.classList.remove("img-zoomed-in");
    overlay.classList.remove("visible");
    anchor.classList.add("anchor");
  });
});
