import { createTheme, ThemeProvider } from "@suid/material/styles";

import { Clock } from "./pages/Clock";

export default function App() {
  const theme = createTheme();
  console.log("App.tsx");
  return (
    <ThemeProvider theme={theme}>
      <Clock />
    </ThemeProvider>
  );
}
