import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

/**
 * <Component attribute="value"/>
 * Component({
 *  attribute: value
 * })
 */