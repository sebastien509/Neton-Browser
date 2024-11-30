const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'renderer.js'),
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('index.html');
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
