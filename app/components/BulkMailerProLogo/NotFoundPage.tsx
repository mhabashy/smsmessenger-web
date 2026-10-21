import Image from 'next/image';
import Link from 'next/link';
import { IconAlertTriangle, IconArrowRight, IconMessageCircle } from '@tabler/icons-react';
import classes from './NotFoundImage.module.css';

export default function NotFoundDummy() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        {/* ---------- Left: Message & Actions ---------- */}
        <div className={classes.content}>
          <span className={`${classes.eyebrow} ${classes.reveal} ${classes.d1}`}>
            <IconAlertTriangle size={15} stroke={2} />
            404 Error &middot; Page Not Found
          </span>

          <h1 className={`${classes.title} ${classes.reveal} ${classes.d2}`}>
            Something is <span className={classes.accent}>not right...</span>
          </h1>

          <p className={`${classes.description} ${classes.reveal} ${classes.d3}`}>
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
          </p>

          <div className={`${classes.actions} ${classes.reveal} ${classes.d4}`}>
            <Link href="/" className={classes.primaryBtn}>
              Get back to home page
              <IconArrowRight size={18} className={classes.arrow} />
            </Link>

            <Link href="/contact" className={classes.secondaryBtn}>
              <IconMessageCircle size={18} stroke={1.75} />
              Contact Support
            </Link>
          </div>
        </div>

        {/* ---------- Right: Visual Card ---------- */}
        <div className={`${classes.visualWrap} ${classes.revealVisual}`}>
          <div className={classes.visualCard}>
            <Image
              src="/404.svg"
              width={220}
              height={220}
              className={classes.illustration}
              alt="SMS Messenger 404"
              priority
            />
            <span className={classes.codeTag}>Status 404</span>
          </div>
        </div>
      </div>
    </section>
  );
}
