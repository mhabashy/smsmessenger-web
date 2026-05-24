
// @ts-ignore
import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../../theme";
import { Notifications } from "@mantine/notifications";
// @ts-ignore
import "./add.css";
import { RECAPTCHA_SITE_KEY } from "./lib/recaptcha";
import Script from "next/script";

export const metadata = {
  title: "SMS Messenger - SMS Sign Up",
  description: "Join an SMS Messenger list with a public opt-in form.",
};

export default function AddSubscribeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {RECAPTCHA_SITE_KEY ? (
          <Script
            src={`https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`}
            strategy="afterInteractive"
          />
        ) : null}
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
          <Notifications className="notification-container" position="top-center" zIndex={1000} />
        </MantineProvider>
      </body>
    </html>
  );
}
