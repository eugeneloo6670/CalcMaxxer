const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 520,
    height: 900,
    icon: path.join(__dirname, 'App', 'favicon.ico'),
    webPreferences: {
      nodeIntegration: false
    },
    title: 'CalcMax™ Enterprise Scientific Calculator'
  })
  win.loadFile(path.join(__dirname, 'calc_github.html'))
  win.setMenuBarVisibility(false)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
