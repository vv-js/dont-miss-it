const { app, BrowserWindow, screen, ipcMain } = require("electron");
const chokidar = require("chokidar");
const path = require("path");


function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const mainWindow = new BrowserWindow({
    width: width / 1.25,
    height: height / 1.25,
    icon: path.join(__dirname, 'public/favicon.png'),
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });
  mainWindow.loadFile(path.join(__dirname, "public/index.html"));

  chokidar.watch(path.join(__dirname, 'public/build/bundle.js')).on('change', () => {
    mainWindow.reload();
  });
}

app.on("ready", createWindow);

ipcMain.on('toMain', (ev, args) => {
  ev.sender.send("fromMain", args);
});