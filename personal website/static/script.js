const toggleButton = document.getElementById('toggleButton');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const footer = document.querySelector('footer');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  content.classList.toggle('expanded');
  toggleButton.classList.toggle('collapsed');
  footer.classList.toggle('expanded');
});

document.getElementById("openPopupBtn").addEventListener("click", function () {
  document.getElementById("pdfPopup").style.display = "block";
});


document.getElementById("closePopupBtn").addEventListener("click", function () {
  document.getElementById("pdfPopup").style.display = "none";
});
