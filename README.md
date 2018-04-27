# Electron + React + Electron Builder

To setup:
    
    npm install
    
Run app in dev mode:
    
    npm run dev
    
Make production build:

    npm run build
    
Kill all tasks

    kill $(ps aux | grep -E 'react|electron|express' | grep -v grep | awk '{print $2}')