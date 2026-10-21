'use client';

import { useId, useRef, useState } from 'react';
import Link from 'next/link';
import {
  IconArrowRight,
  IconArrowsExchange,
  IconCalendar,
  IconEye,
  IconMessageCircle,
  IconMoneybag,
  IconPlugConnected,
  IconPlus,
  IconShieldCheck,
  IconTarget,
  IconUserPlus,
} from '@tabler/icons-react';
import './../main.css';
import classes from './About.module.css';
import { useScrollReveal } from './useScrollReveal';

const pillars = [
  {
    title: 'Who We Are',
    icon: IconTarget,
    text: 'We are a startup focused on delivering practical bulk SMS software for businesses, schools, nonprofits, religious communities, and growing teams. SMS Messenger helps organizations run group texting without getting stuck in bloated enterprise tooling.',
  },
  {
    title: 'Our Vision',
    icon: IconEye,
    text: 'Our vision is to help organizations connect with their audiences through fast, reliable, and affordable SMS communication. We believe messaging tools should stay simple, useful, and easy to adopt.',
  },
];

const reasons = [
  {
    title: 'Twilio-Ready Setup',
    icon: IconPlugConnected,
    text: 'SMS Messenger is built to work with Twilio right away, so your team can start sending and organizing SMS campaigns without custom infrastructure.',
  },
  {
    title: 'Unlimited Users',
    icon: IconUserPlus,
    text: 'Invite as many users as you need to your organization. Collaboration stays simple while your team manages groups, providers, and campaigns together.',
  },
  {
    title: 'Scheduling Capabilities',
    icon: IconCalendar,
    text: 'Schedule your text campaigns to reach your audience at the right moment. Timed delivery makes reminders, updates, and announcements easier to coordinate.',
  },
  {
    title: 'Affordable Pricing',
    icon: IconMoneybag,
    text: 'Our platform pricing is designed to stay straightforward and budget-friendly, while you keep control of your actual SMS delivery provider and costs.',
  },
  {
    title: 'Reliable Workflow',
    icon: IconShieldCheck,
    text: 'Manage recipient groups, public opt-in forms, unsubscribe preferences, and message logs from one consistent workflow built around SMS operations.',
  },
  {
    title: 'Community Feedback',
    icon: IconMessageCircle,
    text: 'As a growing company, we value your input. We are always eager to hear from our users and use your feedback to continuously improve our services.',
  },
  {
    title: 'Provider Flexibility',
    icon: IconArrowsExchange,
    text: 'We are starting with Twilio and designing the sending layer so more SMS providers can be added as your needs expand.',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  useScrollReveal(sectionRef);

  const toggle = (index: number) => setOpenIndex((current) => (current === index ? null : index));

  return (
    <section ref={sectionRef} className={classes.section} id="aboutus">
      {/* ---------- Header (full width) ---------- */}
      <header className={classes.header}>
        <span className={`${classes.eyebrow} ${classes.reveal}`} data-reveal>
          About Us
        </span>

        <h2 className={`${classes.heading} ${classes.reveal}`} data-reveal>
          Practical SMS software for <span className={classes.accent}>growing teams</span>
        </h2>
      </header>

      <div className={classes.inner}>
        {/* ---------- Left: intro ---------- */}
        <div className={classes.intro}>
          <h3 className={`${classes.columnHeading} ${classes.reveal}`} data-reveal>
            Our Story
          </h3>

          <div className={classes.pillars}>
            {pillars.map((pillar) => (
              <div key={pillar.title} className={`${classes.pillar} ${classes.reveal}`} data-reveal>
                <span className={classes.pillarIcon}>
                  <pillar.icon size={20} stroke={1.75} />
                </span>
                <div>
                  <h3 className={classes.pillarTitle}>{pillar.title}</h3>
                  <p className={classes.pillarText}>{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Right: accordion ---------- */}
        <div className={classes.faq}>
          <h3 className={`${classes.columnHeading} ${classes.reveal}`} data-reveal>
            Why choose SMS Messenger?
          </h3>

          <div className={classes.accordion}>
            {reasons.map((reason, index) => {
              const isOpen = openIndex === index;
              const buttonId = `${baseId}-btn-${index}`;
              const panelId = `${baseId}-panel-${index}`;

              return (
                <div
                  key={reason.title}
                  className={`${classes.item} ${classes.reveal}`}
                  data-open={isOpen}
                  data-reveal
                >
                  <h4 className={classes.itemHeading}>
                    <button
                      type="button"
                      id={buttonId}
                      className={classes.trigger}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(index)}
                    >
                      <span className={classes.itemIcon}>
                        <reason.icon size={20} stroke={1.75} />
                      </span>
                      <span className={classes.itemTitle}>{reason.title}</span>
                      <span className={classes.chevron} aria-hidden>
                        <IconPlus size={18} stroke={2} />
                      </span>
                    </button>
                  </h4>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={classes.panel}
                    aria-hidden={!isOpen}
                  >
                    <div className={classes.panelInner}>
                      <p className={classes.panelText}>{reason.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ---------- CTA: Join / Contact ---------- */}
      <div className={`${classes.cta} ${classes.reveal}`} data-reveal>
        <div className={classes.ctaCol}>
          <h3 className={classes.ctaTitle}>Join Us</h3>
          <p className={classes.ctaText}>
            Join the organizations using SMS Messenger to run announcements, reminders, and campaign
            texting with cleaner workflows and less overhead.
          </p>
        </div>
        <div className={classes.ctaCol}>
          <h3 className={classes.ctaTitle}>Contact Us</h3>
          <p className={classes.ctaText}>
            We&apos;d love to hear from you. If you have any questions, feedback, or need support,
            please don&apos;t hesitate to get in touch with us.
          </p>
        </div>
        <Link href="/contact" className={classes.ctaButton}>
          Get Started
          <IconArrowRight size={18} className={classes.ctaArrow} />
        </Link>
      </div>
    </section>
  );
}
