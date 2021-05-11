const { app, BrowserWindow, screen, ipcMain } = require("electron");
const chokidar = require("chokidar");
const { resolve, join } = require("path");
const { jsonReader } = require("./utils/files");
const config = require("./config");
const Db = require("./utils/db");

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const mainWindow = new BrowserWindow({
    width: width / 1.25,
    height: height / 1.25,
    icon: join(__dirname, 'public/favicon.png'),
    webPreferences: {
      preload: join(__dirname, "preload.js")
    }
  });
  mainWindow.loadFile(join(__dirname, "public/index.html"));

  chokidar.watch(join(__dirname, 'public/build/bundle.js')).on('change', () => {
    mainWindow.reload();
  });
}

app.on("ready", createWindow);

const usersPath = resolve(
  __dirname,
  config.connection,
  'users.json'
);

const dataPath = resolve(
  __dirname,
  config.connection,
  'data.json'
);

ipcMain.on('getData', async (ev, args) => {
  const users = new Db(usersPath);
  const data = new Db(dataPath);
  ev.sender.send("loadedData", { users: [...await users.list()], data: [...await data.list()] });
});