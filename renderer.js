const urlInput = document.getElementById('url');
const backButton = document.getElementById('back');
const forwardButton = document.getElementById('forward');
const reloadButton = document.getElementById('reload');
const webview = document.getElementById('webview');

urlInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    webview.src = urlInput.value.startsWith('http') 
      ? urlInput.value 
      : `https://${urlInput.value}`;
  }
});

backButton.addEventListener('click', () => {
  webview.contentWindow.history.back();
});

forwardButton.addEventListener('click', () => {
  webview.contentWindow.history.forward();
});

reloadButton.addEventListener('click', () => {
  webview.contentWindow.location.reload();
});
