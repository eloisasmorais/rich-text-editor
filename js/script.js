var textarea = document.getElementById('text-area');
window.onload = function() {
  textarea.designMode = 'on';
  textarea.focus();
};

function toggleCommand($command) {
  document.execCommand($command, false, null);
  textarea.focus();
}
