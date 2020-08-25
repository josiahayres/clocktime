import React from "react";
import { SnackbarProvider } from "notistack";

function NotificationWrapper(props) {
	const { children } = props;
	return <SnackbarProvider>{children}</SnackbarProvider>;
}
