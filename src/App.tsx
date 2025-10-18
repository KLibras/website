import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme.tsx';
import Home from './pages/Home.tsx';
import HeaderBar from './components/HeaderBar.tsx';
import Footer from './components/Footer.tsx';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';


  if (isHomePage) {
    return (
      <Box sx={{ height: '100vh', overflow: 'hidden' }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    );
  }

  
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <HeaderBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;