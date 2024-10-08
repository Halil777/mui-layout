import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "../theme/ThemeContextProvider";

function App() {
  const { theme } = useThemeContext();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
