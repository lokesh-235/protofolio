    function toggleMenu() {
      const navLinks = document.querySelector(".nav-links");
      navLinks.classList.toggle("show");
    }

    const texts = ["Web Developer", "Designer", "Coder"];
    let count = 0, index = 0, currentText = "", letter = "";
    (function type() {
      if (count === texts.length) count = 0;
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      document.querySelector(".typing").textContent = letter;
      if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000);
      } else {
        setTimeout(type, 100);
      }
    })();

    const links = document.querySelectorAll(".nav-links a");
    const indicator = document.querySelector(".indicator");

    function updateIndicator(el) {
      indicator.style.left = el.offsetLeft + "px";
      indicator.style.width = el.offsetWidth + "px";
    }

    links.forEach(link => {
      link.addEventListener("click", e => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        updateIndicator(link);
      });
    });

    window.addEventListener("load", () => {
      const activeLink = document.querySelector(".nav-links a.active");
      if (activeLink) updateIndicator(activeLink);
    });
