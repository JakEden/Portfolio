document.addEventListener("DOMContentLoaded", function () {
  const welcomeOverlay = document.querySelector(".welcome-overlay");
  const enterButton = document.querySelector(".welcome-enter-btn");
  const body = document.body;

  body.style.overflow = "hidden";

  enterButton.addEventListener("click", function () {
    welcomeOverlay.classList.add("hide");

    setTimeout(function () {
      body.style.overflow = "auto";
      welcomeOverlay.style.display = "none";
    }, 500);
  });

  setTimeout(function () {
    if (!welcomeOverlay.classList.contains("hide")) {
      welcomeOverlay.classList.add("hide");

      setTimeout(function () {
        body.style.overflow = "auto";
        welcomeOverlay.style.display = "none";
      }, 500);
    }
  }, 8000);
});
