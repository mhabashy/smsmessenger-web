'use client';

import { useRef } from 'react';
import Link from 'next/link';
import {
  IconArrowRight,
  IconBellRinging,
  IconCircleCheck,
  IconDatabase,
  IconLock,
  IconMessageCircle,
  IconShare,
  IconShieldLock,
  IconSparkles,
  IconUserCheck,
} from '@tabler/icons-react';

import Footer from '../components/Footer';
import { useScrollReveal } from '../components/useScrollReveal';
import classes from './Privacy.module.css';

const collectedData = [
  {
    label: 'Personal Data',
    text: 'Personally identifiable information, such as your name, email address, and other contact details that you voluntarily provide to us when you register for an account or use our services.',
  },
  {
    label: 'Messaging List Data',
    text: 'Information regarding your SMS recipients, including their phone numbers, names, and any other details you choose to upload to our platform.',
  },
  {
    label: 'Usage Data',
    text: 'Information automatically collected when you access our website or services, such as your IP address, browser type, operating system, and pages you visited.',
  },
  {
    label: 'Unactive accounts',
    text: "All accounts that aren't subscribed and not active for more than 2 month they we will terminate your account at anytime.",
  },
  {
    label: 'Malicious use of the product',
    text: "Someone use the product for malicious even if they are paid subscribers will have there account terminated with no refund. We don't want our product to help scammers, spammers, or bring harm to anyone.",
  },
];

const usageWays = [
  'To provide, operate, and maintain our services.',
  'To manage your account and provide customer support.',
  'To improve our services and develop new features.',
  'To send you technical notices, updates, security alerts, and support messages.',
  'To monitor and analyze usage and trends to improve your experience.',
];

const tocItems = [
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'use-of-your-information', label: 'Use of Your Information' },
  { id: 'disclosure-of-your-information', label: 'Disclosure of Your Information' },
  { id: 'data-security', label: 'Data Security' },
  { id: 'your-rights-and-choices', label: 'Your Rights and Choices' },
  { id: 'changes-to-this-policy', label: 'Changes to This Policy' },
  { id: 'contact-us', label: 'Contact Us' },
];

export default function Privacy() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollReveal(sectionRef, 75);

  return (
    <main>
      <section ref={sectionRef} className={classes.section}>
        <div className={classes.inner}>
          {/* ---------- Header ---------- */}
          <header className={classes.header}>
            <span className={`${classes.eyebrow} ${classes.reveal}`} data-reveal>
              <IconShieldLock size={15} stroke={2} />
              Legal &amp; Privacy
            </span>

            <h1 className={`${classes.heading} ${classes.reveal}`} data-reveal>
              Privacy <span className={classes.accent}>Policy</span>
            </h1>

            <p className={`${classes.lead} ${classes.reveal}`} data-reveal>
              At SMS Messenger, we are committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you use
              our website and services. By accessing or using our services, you signify that you
              have read, understood, and agree to our collection, storage, use, and disclosure of
              your personal information as described in this Privacy Policy.
            </p>
          </header>

          <div className={classes.layout}>
            {/* ---------- Sticky Table of Contents ---------- */}
            <aside
              className={`${classes.toc} ${classes.reveal}`}
              aria-label="Table of contents"
              data-reveal
            >
              <h2 className={classes.tocTitle}>On this page</h2>
              <ol className={classes.tocList}>
                {tocItems.map((item, idx) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className={classes.tocLink}>
                      <span className={classes.tocIndex}>0{idx + 1}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            {/* ---------- Policy Sections ---------- */}
            <div className={classes.content}>
              {/* 1. Information We Collect */}
              <article
                id="information-we-collect"
                className={`${classes.card} ${classes.reveal}`}
                data-reveal
              >
                <div className={classes.cardHeader}>
                  <span className={classes.cardIcon}>
                    <IconDatabase size={21} stroke={1.75} />
                  </span>
                  <h2 className={classes.cardTitle}>Information We Collect</h2>
                </div>
                <p className={classes.paragraph}>
                  We may collect information about you in a variety of ways. The information we may
                  collect on our website includes:
                </p>
                <ul className={classes.collectList}>
                  {collectedData.map((item) => (
                    <li key={item.label} className={classes.collectItem}>
                      <span className={classes.collectLabel}>{item.label}</span>
                      <p className={classes.collectDesc}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </article>

              {/* 2. Use of Your Information */}
              <article
                id="use-of-your-information"
                className={`${classes.card} ${classes.reveal}`}
                data-reveal
              >
                <div className={classes.cardHeader}>
                  <span className={classes.cardIcon}>
                    <IconSparkles size={21} stroke={1.75} />
                  </span>
                  <h2 className={classes.cardTitle}>Use of Your Information</h2>
                </div>
                <p className={classes.paragraph}>
                  We use the information we collect in the following ways:
                </p>
                <ul className={classes.checkList}>
                  {usageWays.map((way) => (
                    <li key={way} className={classes.checkItem}>
                      <IconCircleCheck size={18} stroke={2} className={classes.checkIcon} />
                      <span>{way}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* 3. Disclosure of Your Information */}
              <article
                id="disclosure-of-your-information"
                className={`${classes.card} ${classes.reveal}`}
                data-reveal
              >
                <div className={classes.cardHeader}>
                  <span className={classes.cardIcon}>
                    <IconShare size={21} stroke={1.75} />
                  </span>
                  <h2 className={classes.cardTitle}>Disclosure of Your Information</h2>
                </div>
                <p className={classes.paragraph}>
                  We do not sell, trade, or otherwise transfer your personal information or
                  messaging list data to outside parties. We may share your information with
                  third-party service providers who perform services for us or on our behalf, such
                  as payment processing, data analysis, SMS delivery, hosting services, customer
                  service, and marketing assistance. These third parties are prohibited from using
                  your personal information for any purpose other than to provide these services to
                  us.
                </p>
              </article>

              {/* 4. Data Security */}
              <article
                id="data-security"
                className={`${classes.card} ${classes.reveal}`}
                data-reveal
              >
                <div className={classes.cardHeader}>
                  <span className={classes.cardIcon}>
                    <IconLock size={21} stroke={1.75} />
                  </span>
                  <h2 className={classes.cardTitle}>Data Security</h2>
                </div>
                <p className={classes.paragraph}>
                  We use administrative, technical, and physical security measures to help protect
                  your personal information. While we have taken reasonable steps to secure the
                  personal information you provide to us, please be aware that despite our efforts,
                  no security measures are perfect or impenetrable, and no method of data
                  transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </article>

              {/* 5. Your Rights and Choices */}
              <article
                id="your-rights-and-choices"
                className={`${classes.card} ${classes.reveal}`}
                data-reveal
              >
                <div className={classes.cardHeader}>
                  <span className={classes.cardIcon}>
                    <IconUserCheck size={21} stroke={1.75} />
                  </span>
                  <h2 className={classes.cardTitle}>Your Rights and Choices</h2>
                </div>
                <p className={classes.paragraph}>
                  You may review, change, or terminate your account at any time. Upon your request
                  to terminate your account, we will deactivate or delete your account and
                  information from our active databases. However, some information may be retained
                  in our files to prevent fraud, troubleshoot problems, assist with any
                  investigations, enforce our Terms of Use, and comply with legal requirements.
                </p>
              </article>

              {/* 6. Changes to This Privacy Policy */}
              <article
                id="changes-to-this-policy"
                className={`${classes.card} ${classes.reveal}`}
                data-reveal
              >
                <div className={classes.cardHeader}>
                  <span className={classes.cardIcon}>
                    <IconBellRinging size={21} stroke={1.75} />
                  </span>
                  <h2 className={classes.cardTitle}>Changes to This Privacy Policy</h2>
                </div>
                <p className={classes.paragraph}>
                  We may update this Privacy Policy from time to time in order to reflect changes to
                  our practices or for other operational, legal, or regulatory reasons. When we make
                  changes, we will update the &apos;Effective Date&apos; at the top of this Privacy
                  Policy. We encourage you to review this Privacy Policy periodically to stay
                  informed about our practices.
                </p>
              </article>

              {/* 7. Contact Us */}
              <article
                id="contact-us"
                className={`${classes.ctaCard} ${classes.reveal}`}
                data-reveal
              >
                <div className={classes.ctaBody}>
                  <div className={classes.cardHeader}>
                    <span className={classes.cardIcon}>
                      <IconMessageCircle size={21} stroke={1.75} />
                    </span>
                    <h2 className={classes.cardTitle}>Contact Us</h2>
                  </div>
                  <p className={classes.paragraph}>
                    If you have any questions or concerns about this Privacy Policy or our
                    practices, please contact us on our contact page.
                  </p>
                </div>

                <Link href="/contact" className={classes.ctaButton}>
                  Contact Us
                  <IconArrowRight size={17} className={classes.ctaArrow} />
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
