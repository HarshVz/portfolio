import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<div className='w-full text-neutral-300 flex justify-center min-h-screen items-center font-normal text-2xl'>Page Not Found!</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
