import React from "react";
import { SnackbarProvider } from "notistack";
import Clock from "./pages/Clock.js";

function App(props) {
	return (
		<SnackbarProvider>
			<Clock />
		</SnackbarProvider>
	);
}

export default App;
