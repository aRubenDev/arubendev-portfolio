import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactModal from 'react-modal'
import App from './App.jsx'
import './index.css'

import './i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
ReactModal.setAppElement('#root');
ReactModal.defaultStyles.overlay.backgroundColor = 'transparent';
