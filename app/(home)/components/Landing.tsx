import { Button } from '@mantine/core';

import './../main.css';
import { IconArrowRight, IconBook, IconCircleCheck } from '@tabler/icons-react';
import Link from 'next/link';
import SideImage from './SideImage';
import classes from './Landing.module.css';

const points = ['Powered by Twilio', 'Recipient groups', 'Opt-in & unsubscribe forms'];

export default function Landing() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <div className={`${classes.eyebrow} ${classes.reveal} ${classes.d1}`}>
            <span className={classes.eyebrowTag}>New</span>
            Bulk SMS campaigns, simplified
          </div>

          <h1 className={`${classes.title} ${classes.reveal} ${classes.d2}`}>
            Bulk SMS Messaging for <span className={classes.accent}>Teams, Groups</span>, and
            Growing Organizations
          </h1>

          <p className={`${classes.description} ${classes.reveal} ${classes.d3}`}>
            SMS Messenger helps you send bulk text campaigns with Twilio, organize recipients into
            groups, and publish public opt-in and unsubscribe forms without the overhead of a
            complex messaging platform.
          </p>

          <div className={`${classes.actions} ${classes.reveal} ${classes.d4}`}>
            <Link href={`${process.env.NEXT_PUBLIC_LOGIN_DOMAIN}`}>
              <Button
                radius="md"
                className={classes.primaryBtn}
                rightSection={<IconArrowRight size={18} className={classes.arrow} />}
              >
                Open SMS App
              </Button>
            </Link>
            <Link href="#aboutus">
              <Button
                radius="md"
                variant="default"
                className={classes.secondaryBtn}
                leftSection={<IconBook size={18} />}
              >
                Learn More
              </Button>
            </Link>
          </div>

          <ul className={`${classes.points} ${classes.reveal} ${classes.d5}`}>
            {points.map((point) => (
              <li key={point}>
                <IconCircleCheck size={18} stroke={1.75} className={classes.pointIcon} />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className={`${classes.media} ${classes.revealMedia}`}>
          <div className={classes.mediaFrame}>
            <SideImage />
          </div>
        </div>
      </div>
    </section>
  );
}
