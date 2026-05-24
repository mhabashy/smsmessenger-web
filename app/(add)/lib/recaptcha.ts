export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA ?? "";

declare global {
  interface Window {
    grecaptcha?: {
      enterprise?: {
        ready: (callback: () => void) => void;
        execute: (
          siteKey: string,
          options: { action: string },
        ) => Promise<string>;
      };
    };
  }
}

export async function executeRecaptcha(action: string): Promise<string> {
  if (!RECAPTCHA_SITE_KEY) {
    throw new Error("NEXT_PUBLIC_RECAPTCHA is not configured");
  }

  const enterprise = window.grecaptcha?.enterprise;

  if (!enterprise) {
    throw new Error("reCAPTCHA Enterprise is not available");
  }

  await new Promise<void>((resolve) => {
    enterprise.ready(() => resolve());
  });

  return enterprise.execute(RECAPTCHA_SITE_KEY, { action });
}
