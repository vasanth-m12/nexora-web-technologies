
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after choosing a section
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Automatically update the copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Open WhatsApp with the visitor's enquiry

/* Nexora business contact settings */
const NEXORA_CONTACT = {
  whatsappNumber: "", // Later: country code + number, digits only
  businessEmail: ""   // Later: your official business email
};

/* Contact form */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  const name = document.getElementById("name").value.trim();
  const business = document.getElementById("business").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const enquiry = [
    "New website enquiry — Nexora Web Technologies",
    "",
    `Name: ${name}`,
    `Business: ${business || "Not provided"}`,
    `Email: ${email || "Not provided"}`,
    `Service: ${service}`,
    `Project details: ${message || "Not provided"}`
  ].join("\n");

  if (NEXORA_CONTACT.whatsappNumber) {
    const number = NEXORA_CONTACT.whatsappNumber.replace(/\D/g, "");

    if (!number) {
      formStatus.textContent =
        "Please configure a valid business WhatsApp number.";
      return;
    }

    const url =
      `https://wa.me/${number}?text=${encodeURIComponent(enquiry)}`;

    window.open(url, "_blank", "noopener,noreferrer");

    formStatus.textContent =
      "WhatsApp opened. Please review and send your enquiry there.";
    return;
  }

  // Demo mode: no details are sent or stored.
  formStatus.textContent =
    "Enquiry form is working in demo mode. Business WhatsApp setup is pending.";
});

/* Footer year */
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
