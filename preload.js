const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ipc", {
    send: (channel, data) => ipcRenderer.send(channel, data),
    receive: (channel, cb) => ipcRenderer.on(channel, (ev, ...args) => cb(...args))
});