const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

//Listen for the app to be ready
app.on('ready', function() {
    mainWindow = new BrowserWindow({});
    //Load HTML file
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    //Builds template
    //const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Inserts menu
    //Menu.setApplicationMenu(mainMenu);
});

/*
// Creates a menu template
const mainMenuTemplate = [{
    label: 'File',
    submenu: [{
        label: 'SUBSECTION OF FILE'
    }]
}];
*/