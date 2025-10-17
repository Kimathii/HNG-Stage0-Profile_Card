const timeEl = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  if (timeEl) timeEl.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);

const dropdownBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

if (dropdownBtn && dropdownContent) {
  dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle('show');
  });

  window.addEventListener('click', (e) => {
    if (!dropdownBtn.contains(e.target)) {
      dropdownContent.classList.remove('show');
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdownContent.classList.remove('show');
      dropdownBtn.focus();
    }
  });
}