// NAV scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ==========================
// VIDEO MODAL CONFIG
// ==========================

const embedUrls = {
  showreel: "https://drive.google.com/file/d/1ZkmHptXfzGZCX4mbribAIZ4Uzj9l1tn4/preview",
  noli: "https://drive.google.com/file/d/1_Yf08e4GpX66J8kHz3nLHGlV3kryxAkI/preview",
  lordplanet: "https://drive.google.com/file/d/1Qekkwf9v5zMGshmAZn3sU8XnkGIi1OQP/preview",
  anonimo: "https://drive.google.com/file/d/1ZkmHptXfzGZCX4mbribAIZ4Uzj9l1tn4/preview"
};

const titles = {
  showreel: "Showreel",
  noli: "Noli Me Tangere – Short Film",
  lordplanet: "The Lord of the Planet Destroyer – Animatic",
  anonimo: "ANONIMO – Cinemalaya Animation"
};


// ==========================
// OPEN MODAL
// ==========================

function openModal(key) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-content");
  const titleElement = document.getElementById("modal-title");

  const url = embedUrls[key];

  if (url) {
    content.innerHTML = `
      <iframe
        src="${url}"
        width="100%"
        height="500"
        style="border-radius:12px;"
        allow="autoplay"
        allowfullscreen>
      </iframe>
    `;
  }

  if (titleElement) {
    titleElement.textContent = titles[key] || "";
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}


// ==========================
// CLOSE MODAL
// ==========================

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("active");

  document.getElementById("modal-content").innerHTML = "";
  document.body.style.overflow = "";
}


// ==========================
// CLOSE WHEN CLICK OUTSIDE
// ==========================

function closeModalOutside(e) {
  if (e.target.id === "modal") {
    closeModal();
  }
}

// EMAILJS LOGIC
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const btn = this.querySelector('.submit-btn');
    btn.textContent = 'Sending...';

    // 1. Changed ID to 'z8njebb' (from her screenshot)
    // 2. Ensure HTML inputs have name="name" and name="email"
    emailjs.sendForm('service_lcfcug3', 'template_roodxz7', this)
        .then(function() {
            btn.textContent = 'Message Sent ✓';
            alert('Success! Biancha will receive your message.');
            document.getElementById('contact-form').reset();
        }, function(error) {
            btn.textContent = 'Send Message';
            alert('Error: ' + error.text);
            console.log("Check Template Settings:", error);
        });
});