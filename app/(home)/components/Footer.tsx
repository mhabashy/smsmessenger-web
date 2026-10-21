'use client';

import Link from 'next/link';
import classes from './Footer.module.css';
import BulkMailerProLogo from '../../components/BulkMailerProLogo/BulkMailerProLogo';

const navigation = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Web App', href: process.env.NEXT_PUBLIC_LOGIN_DOMAIN || '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/#aboutus' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        {/* Brand column */}
        <div className={classes.brandCol}>
          <BulkMailerProLogo />
          <p className={classes.brandDesc}>
            Bulk SMS messaging for teams, groups, and growing organizations. Simple, flat pricing
            powered directly by your Twilio account.
          </p>
        </div>

        {/* Link columns */}
        <div className={classes.navCols}>
          {navigation.map((section) => (
            <div key={section.title}>
              <h4 className={classes.colTitle}>{section.title}</h4>
              <ul className={classes.linkList}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={classes.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom copyright */}
      <div className={classes.bottom}>
        <p className={classes.bottomText}>
          Copyright &copy; {currentYear} Angel Michael Dev Inc. All rights reserved.
        </p>
        <span className={classes.badgeLive}>
          <span className={classes.dot} />
          Systems operational
        </span>
      </div>
    </footer>
  );
}
