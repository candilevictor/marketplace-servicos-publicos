import { Workbox } from 'workbox-sw';const wb = new Workbox({
    strategy: 'StaleWhileRevalidate',
    precache:[
      // Adicione os arquivos que você deseja pré-cachear    '/index.html',
      '/manifest.json',
      '/src/main.css',
      '/src/App.js',
          ],
  });
  wb.precacheAndRoute();