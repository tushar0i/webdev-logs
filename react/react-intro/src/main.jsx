import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App_a from './App-a.jsx'
import App_b from './App-b.jsx'
import App_c from './App-c.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App_a /> */}
    {/* <App_b /> */}
    <App_c/>
  </StrictMode>,
)
