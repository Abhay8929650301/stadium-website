import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import LegalPage from '../legal/LegalPage.jsx'
import terms from '../legal/terms.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LegalPage doc={terms} />
  </StrictMode>,
)
