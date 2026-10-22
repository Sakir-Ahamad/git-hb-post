
document.addEventListener("DOMContentLoaded", () => {
  // Current year in footer
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile navigation menu
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  function closeMenu() {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Animated role text
  const typingElement = document.getElementById("typingText");

  if (typingElement) {
    const roles = [
      "Web Developer",
      "Frontend Developer",
      "Creative Designer"
    ];

    let roleIndex = 0;
    let charIndex = roles[0].length;
    let deleting = true;

    function typeRole() {
      const currentRole = roles[roleIndex];

      if (deleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      typingElement.textContent = currentRole.substring(0, charIndex);

      let delay = deleting ? 55 : 100;

      if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        delay = 1300;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 350;
      }

      window.setTimeout(typeRole, delay);
    }

    window.setTimeout(typeRole, 1500);
  }

  // Contact form: open the user's email application
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      formStatus.textContent = "Please complete all fields.";
      return;
    }

    const recipient = "nshakeerahamad26@gmail.com";

    const body = [
      `Name: ${name}`,
      `Sender email: ${email}`,
      "",
      "Message:",
      message
    ].join("\n");

    const mailto =
      `mailto:${recipient}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    formStatus.textContent =
      "Opening your email application. Please send the prepared email there.";

    window.location.href = mailto;
  });

  // Back-to-top button
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 350);
  }, { passive: true });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Highlight the active navigation section
  const sections = document.querySelectorAll("main section[id]");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    }, {
      rootMargin: "-30% 0px -55% 0px"
    });

    sections.forEach((section) => observer.observe(section));
  }
});
