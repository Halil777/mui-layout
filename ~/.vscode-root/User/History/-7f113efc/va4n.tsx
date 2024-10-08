import {
  ThemeContextProvider,
  useThemeContext,
} from "../theme/ThemeContextProvider";

function App() {
  const { theme } = useThemeContext();
  return (
    <div>
      <ThemeContextProvider theme={theme}></ThemeContextProvider>
    </div>
  );
}

export default App;
