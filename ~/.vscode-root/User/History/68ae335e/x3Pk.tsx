import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/globalStyles.css";
import { ThemeContextProvider } from "./theme/ThemeContextProvider";

createRoot(document.getElementById("root")!).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
