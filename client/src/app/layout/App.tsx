import Catalogue from "../../features/catalogue/catalogue";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import NavBar from "./NavigationBar";
import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const paletteMode = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteMode,
      background: {
        default: paletteMode === 'light' ? '#eaeaeaea' : '#121212'
      }
    }
  });

  function handleThemeChange() {
    setDarkMode(!darkMode)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Catalogue />
      </Container>
    </ThemeProvider>
  );
}

export default App;


