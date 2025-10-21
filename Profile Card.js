
// console.log("✅ JS loaded!");


// const timeEl = document.querySelector('[data-testid="test-user-time"]');

// function updateTime() {
//   if (timeEl) timeEl.textContent = Date.now();
// }

// updateTime();
// setInterval(updateTime, 1000);

// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   let valid = true;
//   const name = document.getElementById("name");
//   const email = document.getElementById("email");
//   const subject = document.getElementById("subject");
//   const message = document.getElementById("message");

//   // Clear previous errors
//   document.querySelectorAll("span[id^='error-']").forEach(el => el.textContent = "");

//   // Name validation
//   if (!name.value.trim()) {
//     document.getElementById("error-name").textContent = "Name is required";
//     valid = false;
//   }

//   // Email validation
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email.value)) {
//     document.getElementById("error-email").textContent = "Enter a valid email";
//     valid = false;
//   }

//   // Subject
//   if (!subject.value.trim()) {
//     document.getElementById("error-subject").textContent = "Subject is required";
//     valid = false;
//   }

//   // Message length
//   if (message.value.trim().length < 10) {
//     document.getElementById("error-message").textContent = "Message must be at least 10 characters";
//     valid = false;
//   }

//   // If all good, show success
//   if (valid) {
//     document.getElementById("success").hidden = false;
//     this.reset();
//   }
// });

// // --- Toggle dropdown menu ---
// const menuBtn = document.querySelector(".dropbtn");
// const menuContent = document.querySelector(".dropdown-content");

// if (menuBtn && menuContent) {
//   menuBtn.addEventListener("click", (e) => {
//     e.stopPropagation();
//     menuContent.classList.toggle("show");
//   });

//   // Close when clicking outside
//   window.addEventListener("click", (e) => {
//     if (!menuBtn.contains(e.target) && !menuContent.contains(e.target)) {
//       menuContent.classList.remove("show");
//     }
//   });

//   // Close on Escape key
//   window.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//       menuContent.classList.remove("show");
//       menuBtn.focus();
//     }
//   });
// }



console.log("✅ JS loaded!");

// --- TIME DISPLAY ---
const timeEl = document.querySelector('[data-testid="test-user-time"]');
function updateTime() {
  if (timeEl) timeEl.textContent = new Date().toLocaleTimeString();
}
updateTime();
setInterval(updateTime, 1000);

// --- MENU TOGGLE ---
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.classList.toggle("show");
  }
}

// --- CLOSE MENU WHEN CLICKING OUTSIDE ---
window.addEventListener("click", (e) => {
  const menu = document.getElementById("menu");
  const menuIcon = document.querySelector(".menu-icon");

  // Only run if menu exists and is open
  if (menu && menu.classList.contains("show")) {
    // If click is NOT inside menu or on the ☰ icon, close it
    if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
      menu.classList.remove("show");
    }
  }
});


// --- CONTACT FORM VALIDATION ---
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // Clear previous errors
    document.querySelectorAll("span[id^='error-']").forEach(el => el.textContent = "");

    // Name validation
    if (!name.value.trim()) {
      document.getElementById("error-name").textContent = "Name is required";
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      document.getElementById("error-email").textContent = "Enter a valid email";
      valid = false;
    }

    // Subject
    if (!subject.value.trim()) {
      document.getElementById("error-subject").textContent = "Subject is required";
      valid = false;
    }

    // Message length
    if (message.value.trim().length < 10) {
      document.getElementById("error-message").textContent = "Message must be at least 10 characters";
      valid = false;
    }

    // If all good, show success
    if (valid) {
      document.getElementById("success").hidden = false;
      this.reset();
    }
  });
}
