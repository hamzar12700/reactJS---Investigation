import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/Hamza.css'
import App from './App.jsx'
import StepSelector from './StepSelector.jsx'
import Hello from './Hello.jsx'
import Slider from './Slider.jsx'

createRoot(document.getElementById('root')).render(
    <App/>
)
