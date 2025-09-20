import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme.tsx';
import Home from './pages/Home.tsx';
import HeaderBar from './components/HeaderBar.tsx';
import Footer from './components/Footer.tsx';
import { Box } from '@mui/material';
import About from './pages/About.tsx';
import FAQ from './pages/FAQs.tsx';
import Terms from './pages/Terms.tsx';
import Privacy from './pages/Privacy.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <HeaderBar/>
            <Box component="main" sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
              </Routes>
            </Box>
            <Footer/>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;

