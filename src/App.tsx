import { createTheme, ThemeProvider } from "@suid/material/styles";
import { Router } from "@solidjs/router";

import { Clock } from "./pages/Clock";

export default function App() {
  const theme = createTheme({
    palette: { mode: "light" },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Clock />
      </ThemeProvider>
    </Router>
  );
}
