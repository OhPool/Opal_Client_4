"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const a=require("electron");require("v8-compile-cache");const n=e(require("path"));a.app.on("window-all-closed",(function(){"darwin"!==process.platform&&a.app.quit()})),a.app.on("ready",(()=>{console.log("App is ready to run"),function(){const{width:e,height:p}=a.screen.getPrimaryDisplay().workAreaSize,i=new a.BrowserWindow({width:e,height:p,webPreferences:{nodeIntegration:!1,nodeIntegrationInWorker:!1,enableRemoteModule:!0,webSecurity:!1,contextIsolation:!1,devTools:!0,sandbox:!1,preload:n.default.join(__dirname,"preload.js"),partition:"persist:evio"},icon:"./icon.ico"});a.session.defaultSession.loadExtension(n.default.join(__dirname,"community-patch")),a.app.commandLine.appendSwitch("disable-gpu-vsync"),a.app.commandLine.appendSwitch("disable-frame-rate-limit"),a.app.commandLine.appendSwitch("enable-accelerated-2d-canvas"),a.app.commandLine.appendSwitch("double-buffer-compositing"),a.app.commandLine.appendSwitch("force_high_performance_gpu"),a.app.commandLine.appendSwitch("max-gum-fps=9999"),a.app.commandLine.appendSwitch("enable-gpu-rasterization"),a.app.commandLine.appendSwitch("enable-zero-copy"),a.app.commandLine.appendSwitch("ignore-gpu-blacklist"),a.app.commandLine.appendSwitch("alsa-enable-upsampling"),a.app.commandLine.appendSwitch("audio-process-high-priority"),a.app.commandLine.appendSwitch("enable-exclusive-audio"),a.app.commandLine.appendSwitch("disable-background-networking"),a.app.commandLine.appendSwitch("enable-quic"),a.app.commandLine.appendSwitch("no-sandbox"),a.app.commandLine.appendSwitch("allow-pre-commit-input"),a.app.commandLine.appendSwitch("disable-third-party-keyboard-workaround"),a.app.commandLine.appendSwitch("disable-breakpad"),a.app.commandLine.appendSwitch("disable-component-update"),a.app.commandLine.appendSwitch("disable-print-preview"),a.app.commandLine.appendSwitch("disable-metrics"),a.app.commandLine.appendSwitch("disable-metrics-repo"),a.app.commandLine.appendSwitch("disable-speech-api"),a.app.commandLine.appendSwitch("disable-web-security"),a.app.commandLine.appendSwitch("disable-hang-monitor"),a.app.commandLine.appendSwitch("disable-2d-canvas-clip-aa"),a.app.commandLine.appendSwitch("disable-bundled-ppapi-flash"),a.app.commandLine.appendSwitch("disable-logging"),a.app.commandLine.appendSwitch("disable-renderer-backgrounding"),a.app.commandLine.appendSwitch("disable-background-timer-throttling"),a.app.commandLine.appendSwitch("disable-backing-store-limit"),a.app.commandLine.appendSwitch("disable-web-security","true"),i.webContents.on("before-input-event",((e,n)=>{"F5"===n.key&&(i.reload(),e.preventDefault()),"F6"===n.key&&(i.loadURL("https://ev.io/"),e.preventDefault()),"F7"===n.key&&(i.loadURL(a.clipboard.readText()),e.preventDefault()),"F8"===n.key&&(i.loadURL("https://ev.io/user/login/"),e.preventDefault()),"F9"===n.key&&a.app.quit(),"F11"===n.key&&(i.setFullScreen(!i.isFullScreen()),e.preventDefault())})),i.removeMenu(),i.loadURL("https://ev.io/"),"https://ev.io/user/login"!=i.webContents.getURL()&&i.loadURL("https://ev.io/"),i.once("ready-to-show",(()=>{i.show()})),i.on("close",(function(e){e.preventDefault(),i.destroy()}))}()})),a.ipcMain.on("close",((e,n)=>{a.app.quit()}));