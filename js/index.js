"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const electron_1=require("electron");require("v8-compile-cache");const path_1=__importDefault(require("path"));function primaryWindow(){const{width:e,height:n}=electron_1.screen.getPrimaryDisplay().workAreaSize,a=new electron_1.BrowserWindow({width:e,height:n,webPreferences:{nodeIntegration:!1,nodeIntegrationInWorker:!1,enableRemoteModule:!0,webSecurity:!1,contextIsolation:!1,devTools:!0,sandbox:!1,preload:path_1.default.join(__dirname,"preload.js"),partition:"persist:evio"},icon:"./Opal.ico"});electron_1.session.defaultSession.loadExtension(path_1.default.join(__dirname,"community-patch")),electron_1.app.commandLine.appendSwitch("disable-gpu-vsync"),electron_1.app.commandLine.appendSwitch("disable-frame-rate-limit"),electron_1.app.commandLine.appendSwitch("enable-accelerated-2d-canvas"),electron_1.app.commandLine.appendSwitch("double-buffer-compositing"),electron_1.app.commandLine.appendSwitch("force_high_performance_gpu"),electron_1.app.commandLine.appendSwitch("max-gum-fps=9999"),electron_1.app.commandLine.appendSwitch("enable-gpu-rasterization"),electron_1.app.commandLine.appendSwitch("enable-zero-copy"),electron_1.app.commandLine.appendSwitch("alsa-enable-upsampling"),electron_1.app.commandLine.appendSwitch("audio-process-high-priority"),electron_1.app.commandLine.appendSwitch("enable-exclusive-audio"),electron_1.app.commandLine.appendSwitch("disable-background-networking"),electron_1.app.commandLine.appendSwitch("enable-quic"),electron_1.app.commandLine.appendSwitch("no-sandbox"),electron_1.app.commandLine.appendSwitch("disable-low-end-device-mode"),electron_1.app.commandLine.appendSwitch("ignore-gpu-blacklist"),electron_1.app.commandLine.appendSwitch("allow-pre-commit-input"),electron_1.app.commandLine.appendSwitch("disable-third-party-keyboard-workaround"),electron_1.app.commandLine.appendSwitch("disable-breakpad"),electron_1.app.commandLine.appendSwitch("disable-component-update"),electron_1.app.commandLine.appendSwitch("disable-print-preview"),electron_1.app.commandLine.appendSwitch("disable-metrics"),electron_1.app.commandLine.appendSwitch("disable-metrics-repo"),electron_1.app.commandLine.appendSwitch("disable-speech-api"),electron_1.app.commandLine.appendSwitch("disable-web-security"),electron_1.app.commandLine.appendSwitch("disable-hang-monitor"),electron_1.app.commandLine.appendSwitch("ignore-gpu-blacklist"),electron_1.app.commandLine.appendSwitch("disable-2d-canvas-clip-aa"),electron_1.app.commandLine.appendSwitch("disable-bundled-ppapi-flash"),electron_1.app.commandLine.appendSwitch("disable-logging"),electron_1.app.commandLine.appendSwitch("disable-renderer-backgrounding"),electron_1.app.commandLine.appendSwitch("disable-background-timer-throttling"),electron_1.app.commandLine.appendSwitch("disable-backing-store-limit"),electron_1.app.commandLine.appendSwitch("disable-web-security","true"),a.webContents.on("before-input-event",((e,n)=>{"F5"===n.key&&(a.reload(),e.preventDefault()),"F6"===n.key&&(a.loadURL("https://ev.io/"),e.preventDefault()),"F7"===n.key&&(a.loadURL(electron_1.clipboard.readText()),e.preventDefault()),"F8"===n.key&&(a.loadURL("https://ev.io/user/login/"),e.preventDefault()),"F9"===n.key&&electron_1.app.quit(),"F11"===n.key&&(a.setFullScreen(!a.isFullScreen()),e.preventDefault())})),a.removeMenu(),a.loadURL("https://ev.io/"),"https://ev.io/user/login"!=a.webContents.getURL()&&a.loadURL("https://ev.io/"),a.once("ready-to-show",(()=>{a.show()})),a.on("close",(function(e){e.preventDefault(),a.destroy()}))}electron_1.app.on("window-all-closed",(function(){"darwin"!==process.platform&&electron_1.app.quit()})),electron_1.app.on("ready",(()=>{console.log("App is ready to run"),primaryWindow()})),electron_1.ipcMain.on("close",((e,n)=>{electron_1.app.quit()}));