# Electron + React + Electron Builder

This is a starting point for a basic react app that can be run and built in electron.

To setup:

    git clone https://github.com/superpowered/electron-react
    cd electron-react
    npm install
    npm run dev
    
Run app in dev mode:
    
    npm run dev
    
Make production build:

    npm run build
    
Sometimes when closing the app foreman may leave electron or react running in the background.    
Use this command to kill all tasks:

    kill $(ps aux | grep -E 'react|electron' | grep -v grep | awk '{print $2}')
    
    
    
    
    
### Helpful Links:    
    
[Electron React Setup Tutorial](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c)

[Electron Builder Setup Tutorial](https://medium.com/how-to-electron/a-complete-guide-to-packaging-your-electron-app-1bdc717d739f)
