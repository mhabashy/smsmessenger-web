'use client';

import { useRef } from 'react';
import {
  IconBuilding,
  IconCalendar,
  IconClipboardList,
  IconGrowth,
  IconHelp,
  IconList,
  IconMessage2,
  IconMoneybag,
  IconPhoneCall,
  IconPlugConnected,
  IconServer,
  IconSettings,
  IconUserPlus,
  IconUsers,
} from '@tabler/icons-react';
import classes from './Features.module.css';
import { useScrollReveal } from './useScrollReveal';

const mockdata = [
  {
    title: 'Bulk SMS Campaigns',
    description:
      'Send scheduled or immediate SMS campaigns to your selected recipient groups with a simple team-friendly workflow.',
    icon: IconMessage2,
  },
  {
    title: 'Unlimited Users',
    description:
      'Add unlimited users to your organization for seamless team collaboration. No extra cost.',
    icon: IconUserPlus,
  },
  {
    title: 'Schedule Messages',
    description: 'Schedule your SMS campaigns to go out at the right time for your audience.',
    icon: IconCalendar,
  },
  {
    title: 'Simple Flat Pricing',
    description:
      'Run your SMS operations with one predictable platform fee while keeping delivery through your own Twilio account.',
    icon: IconMoneybag,
  },
  {
    title: 'Reliable Servers',
    description:
      'Our application keeps your campaigns, groups, and opt-in workflows available and easy to manage.',
    icon: IconServer,
  },
  {
    title: 'Growing Company',
    description: 'We’re a growing company eager to hear your input and improve our services.',
    icon: IconGrowth,
  },
  {
    title: 'Twilio First',
    description:
      'Connect your own Twilio account today with room to add more SMS providers as you grow.',
    icon: IconSettings,
  },
  {
    title: 'Groups',
    description:
      'Manage recipient lists with groups built for targeted SMS campaigns and operational messaging.',
    icon: IconList,
  },
  {
    title: 'Provider Accounts',
    description:
      'Store and manage your SMS sending providers in one place. No extra per-user charge.',
    icon: IconUsers,
  },
  {
    title: 'Public Sign-Up Forms',
    description:
      'Publish simple and advanced SMS opt-in forms that send subscribers straight into your groups.',
    icon: IconPhoneCall,
  },
  {
    title: 'Organizations',
    description: 'Manage organization settings and user permissions for team collaboration.',
    icon: IconBuilding,
  },
  {
    title: 'Message Logs',
    description:
      'Track campaign activity and review sent and rejected phone numbers from your SMS runs.',
    icon: IconClipboardList,
  },
  {
    title: 'API Integration',
    description:
      'Integrate your existing systems with signup and unsubscribe endpoints for SMS list management.',
    icon: IconPlugConnected,
  },
  {
    title: 'Support',
    description:
      'Access help resources and contact support for assistance with using SMS Messenger.',
    icon: IconHelp,
  },
];

/** Delay (ms) between items that enter the viewport together. */
const STAGGER_MS = 90;

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollReveal(sectionRef, STAGGER_MS);

  return (
    <section ref={sectionRef} className={classes.section} id="features">
      <div className={classes.inner}>
        <header className={classes.header}>
          <span className={`${classes.eyebrow} ${classes.reveal}`} data-reveal>
            Twilio-Powered Bulk SMS
          </span>

          <h2 className={`${classes.heading} ${classes.reveal}`} data-reveal>
            Built for teams that need <span className={classes.accent}>simple group texting</span>{' '}
            and public SMS opt-in flows
          </h2>

          <p className={`${classes.lead} ${classes.reveal}`} data-reveal>
            SMS Messenger gives you bulk SMS sending, recipient management, and public preference
            pages without the complexity of enterprise messaging suites.
          </p>
        </header>

        <ul className={classes.grid}>
          {mockdata.map((feature) => (
            <li key={feature.title} className={`${classes.card} ${classes.reveal}`} data-reveal>
              <span className={classes.iconWrap}>
                <feature.icon size={22} stroke={1.75} />
              </span>
              <h3 className={classes.cardTitle}>{feature.title}</h3>
              <p className={classes.cardText}>{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
