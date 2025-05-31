import { app, BrowserWindow } from 'electron';
import path from 'path';
import { isDev } from './utils.js';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 750
  })

  if (isDev()) {
    win.loadURL("http://localhost:5123")
  } else {
    win.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'))
  }
}

app.whenReady().then(() => {
  createWindow()
})
