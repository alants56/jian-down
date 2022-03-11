'use strict'

import { app, BrowserWindow } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'

var win;
var baseURL;

async function createWindow() {
    win = new BrowserWindow({
        width: 1400,
        height: 900,
        title: "简",
        webPreferences: {

            // Required for Spectron testing
            enableRemoteModule: true,
            webSecurity: false,
            // Use pluginOptions.nodeIntegration, leave this alone
            // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
            nodeIntegration: true,
            contextIsolation: false,
            webviewTag:true,
        }
    })

    if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode
        await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
        //win.webContents.openDevTools() //打开调试窗口
        baseURL = process.env.WEBPACK_DEV_SERVER_URL;
    } else {
        createProtocol('app')
        // Load the index.html when not in development
        await win.loadURL('app://./index.html')
        baseURL = 'app://./index.html';
    }
    console.log("baseURL",baseURL);
}


app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
})
