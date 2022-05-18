const { app, BrowserWindow, ipcMain } = require('electron');
const path = require("path")

const createWindow = () => {
    // 隐藏工具栏
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      maximizable: true,
      minimizable: true,
      // 隐藏导航栏
      frame: false,
      webPreferences: {
        nodeIntegration: true, //允许渲染进程使用nodejs
        contextIsolation: false //允许渲染进程使用nodejs
      }
    })

    // 隐藏菜单栏
    win.setMenu(null)
  
    win.loadFile('src/index.html')

    ipcMain.on("minimize", () => {
      win.minimize()
    })
    ipcMain.on("maxmize", () => {
      if (!win.isMaximized()) {
        win.maximize()
      } else {
        win.unmaximize()
      }
    })
    ipcMain.on("close", () => {
      win.close()
    })
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})