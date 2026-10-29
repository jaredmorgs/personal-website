function openSocialModal() {
  var modal = document.getElementById('socialModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeSocialModal(event) {
  if (event && event.target !== event.currentTarget) {
    return;
  }
  var modal = document.getElementById('socialModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeSocialModal();
  }
});
