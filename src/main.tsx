import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initEmailJS } from './forms/emailjs-config'

// EmailJS'yi uygulama yüklendiğinde bir kez başlat
// CDN script yüklenmesini beklemek için window.onload kullanıyoruz
window.addEventListener('load', () => {
  initEmailJS()
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
