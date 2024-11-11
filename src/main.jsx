import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createTheme, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

let theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FFC8DD',
    },
    secondary: {
      main: '#946262',
    },
    background: {
      body: '#cdb4db',
      paper: '#BDE0FE',
    },
  },
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
