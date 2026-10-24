'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconArrowRight, IconCheck, IconSparkles } from '@tabler/icons-react';

import classes from './Price.module.css';
import { useScrollReveal } from './useScrollReveal';

const mockdata = [
  'Unlimited users',
  'Unlimited provider accounts',
  'Public sign-up and unsubscribe forms',
  'Unlimited Groups',
  'Bring your own Twilio sender',
];

export default function Price() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useScrollReveal(wrapRef, 70);

  return (
    <div ref={wrapRef} className={classes.wrap} id="pricing">
      <article className={`${classes.card} ${classes.reveal}`} data-reveal>
        {/* ---------- Header ---------- */}
        <div className={classes.header}>
          <div className={classes.brand}>
            <span className={classes.logo}>
              <Image src="/sms-messenger-pulse-dispatch.svg" width={52} height={52} alt="SMS" />
            </span>
            <div>
              <h3 className={classes.plan}>Standard Flat Fee</h3>
              <span className={classes.planSub}>One plan. Everything included.</span>
            </div>
          </div>

          <span className={classes.badge}>
            <IconSparkles size={14} stroke={2} />
            Flat pricing
          </span>
        </div>

        <p className={classes.description}>
          Simple platform pricing with no surprise user fees while you keep delivery on your own SMS
          provider account.
        </p>

        <div className={classes.priceRow}>
          <span className={classes.currency}>$</span>
          <span className={classes.amount}>9.99</span>
          <span className={classes.period}>/ month</span>
        </div>

        <Link href={`${process.env.NEXT_PUBLIC_LOGIN_DOMAIN}`} className={classes.cta}>
          Open app
          <IconArrowRight size={18} className={classes.ctaArrow} />
        </Link>

        {/* ---------- Features ---------- */}
        <div className={classes.divider}>
          <span>What&apos;s included</span>
        </div>

        <ul className={classes.features}>
          {mockdata.map((label) => (
            <li key={label} className={`${classes.feature} ${classes.reveal}`} data-reveal>
              <span className={classes.check}>
                <IconCheck size={14} stroke={2.5} />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
