var textarea = document.getElementById('text-area');
window.onload = function() {
  textarea.designMode = 'on';
  textarea.focus();
};

function toggleCommand($command) {
  document.execCommand($command, false, null);
  textarea.focus();
}

const bold = document.getElementById('bold');
const italic = document.getElementById('italic');
const underline = document.getElementById('underline');
const list = document.getElementById('list');

bold.addEventListener('onclick', toggleCommand('bold'));
italic.addEventListener('onclick', toggleCommand('italic'));
underline.addEventListener('onclick', toggleCommand('underline'));
list.addEventListener('onclick', toggleCommand('list'));
