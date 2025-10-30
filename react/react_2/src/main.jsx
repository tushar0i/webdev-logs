import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App_b from './App-b.jsx'
import App_c from './App-c.jsx'
import App_d from './App-d.jsx'
import { store } from '../Store/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App_b/> */}
    {/* <App_c/> */}
    <Provider store={store}>
        <App_d/>
    </Provider>
  </StrictMode>,
)
