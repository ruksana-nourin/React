import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Count } from './Count'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Effect from './Effect'
import User from './User.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Count />
    <App/> */}
    <Effect/>
    <User/>
    
  </StrictMode>,
)
