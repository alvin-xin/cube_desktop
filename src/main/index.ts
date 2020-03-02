/**
 * @format
 * @Author: Alvin
 * @Date 2020-02-28
 * @Last modified by: Alvin
 * @Last modified time: 2020-02-28
 */
import path from "path";
import { app, BrowserWindow } from "electron";
import * as isDevEnv from "electron-is-dev";

app.allowRendererProcessReuse = true;

function createWindow () {

    // 创建浏览器窗口
    let mainWindow = new BrowserWindow({
        "width": 1010,
        "height":716,
        "minWidth":800,
        "minHeight":600,
        frame: false,
        autoHideMenuBar: false,
        titleBarStyle: 'hidden',
        fullscreen: false,
        webPreferences: {
            nodeIntegration: true,
            devTools: isDevEnv
        }
    });

    // 加载index.html文件
    const startDevelopmentUrl = 'http://localhost:3000';
    const startProductionUrl = `file://${path.join(__dirname, './index.html')}`;
    const urlLocation = isDevEnv ? startDevelopmentUrl : startProductionUrl;
    mainWindow.loadURL(urlLocation);

    // 打开开发者工具
    // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
});