import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "../theme/ThemeContextProvider";
import NightModeToggle from "../components/mode/NightModeToggle";

function App() {
  const { theme } = useThemeContext();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NightModeToggle />
      </ThemeProvider>
    </div>
  );
}

export default App;
