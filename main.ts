const { app, BrowserWindow, dialog, shell, remote } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
let mainWindow;

app.on("ready", () => {
  // console.log("before message box");

  mainWindow = new BrowserWindow({
    width: 1024,
    height: 660,
    webPreferences: {
      nodeIntegration: false,
    },
  });
  if (!isDev) {
    const { Menu } = require("electron");
    Menu.setApplicationMenu(null);
  }

  const urlLocation = isDev
    ? "http://localhost:3000/"
    : `file://${path.join(__dirname, "./build/index.html")}`;
  mainWindow.loadURL(urlLocation);
});
