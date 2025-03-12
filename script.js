document.addEventListener("DOMContentLoaded", function () {
  const welcomeOverlay = document.querySelector(".welcome-overlay");
  const enterButton = document.querySelector(".welcome-enter-btn");
  const body = document.body;
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.querySelector(".overlay");

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

  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.querySelector(".overlay");

  function toggleMenu() {
    hamburgerMenu.classList.toggle("active");
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  hamburgerMenu.addEventListener("click", toggleMenu);

  overlay.addEventListener("click", toggleMenu);

  const navItems = document.querySelectorAll(".nav-links li a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      if (navLinks.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 510 && navLinks.classList.contains("active")) {
      hamburgerMenu.classList.remove("active");
      navLinks.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
});
