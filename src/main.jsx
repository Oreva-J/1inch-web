import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import theme from "../src/utils/theme"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App /> 
    </ThemeProvider>   
  </StrictMode>,
)
