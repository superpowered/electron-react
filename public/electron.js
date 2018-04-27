const electron = require('electron');
const app = electron.app;
const ipcMain = electron.ipcMain;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;
let dev = false;
if(process.env.ELECTRON_START_URL)
    dev = true;

function createWindow()
{
    mainWindow = new BrowserWindow(
    {
        frame: true,
        fullscreen: false,
        height: 600,
        width: 800
    });
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true
    });
    mainWindow.loadURL(startUrl);

    if(dev)
        mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () =>
    {
        mainWindow = null;
        app.quit();
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () =>
{
    if (process.platform !== 'darwin')
    {
        app.quit();
    }
});

app.on('activate', () =>
{
    if (mainWindow === null)
    {
        createWindow();
    }
});