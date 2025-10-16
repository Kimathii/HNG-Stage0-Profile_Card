// Toggle dropdown visibility
const dropdownBtn = document.querySelector('[data-testid="dropdownButton"]');
const dropdownContent = document.querySelector('[data-testid="dropdownContent"]');

dropdownBtn.addEventListener("click", () => {
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
});

// Close dropdown if clicked outside
window.addEventListener("click", (e) => {
  if (!e.target.matches('[data-testid="dropdownButton"]')) {
    dropdownContent.style.display = "none";
  }
});
