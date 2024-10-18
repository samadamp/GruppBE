import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Testing } from './test'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Testing />
  </StrictMode>,
)
