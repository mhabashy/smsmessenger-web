import "@mantine/core/styles.css";
import React from "react";
import {
  Button,
  ColorSchemeScript,
  Flex,
  MantineProvider,
} from "@mantine/core";
import { theme } from "../../theme";

import BulkMailerProLogo from "../components/BulkMailerProLogo/BulkMailerProLogo";
import { IconLogin } from '@tabler/icons-react';


import './main.css';
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || "https://smsmesengerio.web.app"),
  title: "SMS Messenger - Bulk SMS Campaigns for Teams and Organizations",
  keywords: [
    "bulk sms platform",
    "twilio bulk sms",
    "sms marketing software",
    "group text messaging",
    "mass text messaging app",
    "sms campaign software",
    "sms opt in forms",
    "sms unsubscribe management",
    "team sms platform",
    "sms messaging for organizations",
  ],
  description: "SMS Messenger helps teams send bulk SMS campaigns with Twilio, manage recipient groups, publish opt-in forms, and handle unsubscribe preferences from one simple dashboard.",
  openGraph: {
    title: "SMS Messenger - Bulk SMS Campaigns for Teams and Organizations",
    description: "Send bulk SMS campaigns, manage groups, and publish public opt-in and unsubscribe forms with SMS Messenger.",
    url: process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || "https://smsmesengerio.web.app",
    siteName: "SMS Messenger",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CL4LDEJR4F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-HVXPQF0BRK');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16644293802"
          strategy="afterInteractive"
        />
        {/* <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'AW-16644293802');
          `}
        </Script> */}
      </head>
      <body>
        <MantineProvider theme={theme}>
          <div className="main-header">
            <Flex direction="row" className="p-2 main-header" justify="space-between" align="center" >
              <BulkMailerProLogo />
              <Flex direction="row" p="xs">
                <Link href={`${process.env.NEXT_PUBLIC_LOGIN_DOMAIN}`}>
                  <Button size="xs" 
                    leftSection={<IconLogin />}  variant="default" color="gray" > 
                    Open App
                  </Button>
                  </Link>
              </Flex>
            </Flex>
          </div>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
