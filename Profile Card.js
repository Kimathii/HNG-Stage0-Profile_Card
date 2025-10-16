// File: Profile Card.js

// --- Time display (ms) ---
const timeEl = document.querySelector('[data-testid="test-user-time"]');
function updateTime() {
  if (timeEl) timeEl.textContent = Date.now();
}
// Initial render and update every second
updateTime();
const timeInterval = setInterval(updateTime, 1000);

// --- Dropdown logic (accessible) ---
const dropdown = document.querySelector('.dropdown');
const toggleBtn = document.getElementById('socialToggle');
const menu = document.getElementById('socialMenu');

if (toggleBtn && dropdown && menu) {
  // Toggle open/close
  function openMenu() {
    dropdown.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    menu.focus();
  }
  function closeMenu() {
    dropdown.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (dropdown.classList.contains('open')) closeMenu();
    else openMenu();
  });

  // Close on outside click
  window.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) closeMenu();
  });

  // Keyboard interactions: Escape closes, ArrowDown focuses first link
  window.addEventListener('keydown', (e) => {
    if (!dropdown.classList.contains('open')) return;
    if (e.key === 'Escape') {
      closeMenu();
      toggleBtn.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const first = menu.querySelector('a');
      if (first) first.focus();
    }
  });

  // Ensure links are focusable and pressing Enter on a link closes menu (natural)
  menu.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && e.shiftKey === false) {
      // allow natural tabbing; close if focus leaves
      setTimeout(() => {
        if (!menu.contains(document.activeElement)) closeMenu();
      }, 0);
    }
  });
}

const dropdownBtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});

window.addEventListener("click", (e) => {
  if (!e.target.matches(".dropbtn")) {
    dropdownContent.classList.remove("show");
  }
});



