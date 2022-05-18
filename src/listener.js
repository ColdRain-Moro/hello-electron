const { ipcRenderer } = require("electron")

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.navigation-btn')
    .forEach(btn => {
        switch(btn.id) {
            case "min": {
                btn.addEventListener('click', () => {
                    ipcRenderer.send('minimize')
                })
                break
            }
            case "max": {
                btn.addEventListener('click', () => {
                    ipcRenderer.send('maxmize')
                })
                break
            }
            case "close": {
                btn.addEventListener('click', () => {
                    ipcRenderer.send('close')
                })
                break
            }
        }
    })
})