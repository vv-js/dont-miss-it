const { app, BrowserWindow } = require("electron");
const chokidar = require("chokidar");
const path = require("path");


function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'public/favicon.png')
  });
  mainWindow.loadFile(path.join(__dirname, "public/index.html"));
  mainWindow.webContents.openDevTools();

  chokidar.watch(path.join(__dirname, 'public/build/bundle.js')).on('change', () => {
    mainWindow.reload();
  });
}

app.on("ready", createWindow);