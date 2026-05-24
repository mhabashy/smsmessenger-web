// @ts-ignore
import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../../../theme";
import { Notifications } from "@mantine/notifications";
// @ts-ignore
import "./unsubscribe.css";

export const metadata = {
  title: "SMS Messenger - Manage SMS Preferences",
  description: "Manage your SMS Messenger opt-in and unsubscribe preferences.",
};

export default function UnsubscribeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          {children}
          <Notifications className="notification-container" position="bottom-center" zIndex={1000} />
        </MantineProvider>
      </body>
    </html>
  );
}
