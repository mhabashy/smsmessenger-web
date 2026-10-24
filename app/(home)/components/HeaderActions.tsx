'use client';

import { useEffect, useState } from 'react';
import { Tooltip, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconLogin, IconMoon, IconSun } from '@tabler/icons-react';
import BulkMailerProLogo from '../../components/BulkMailerProLogo/BulkMailerProLogo';
import classes from './HeaderActions.module.css';

export default function HeaderActions() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  };

  const loginUrl = process.env.NEXT_PUBLIC_LOGIN_DOMAIN || 'https://app.smsmessenger.pro/login';
  const isDark = mounted && computedColorScheme === 'dark';

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        {/* Left: Main Brand Logo */}
        <BulkMailerProLogo />

        {/* Right: Dark/Light Mode Toggle & Login Icon */}
        <div className={classes.actions}>
          <Tooltip
            label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            withArrow
            position="bottom"
            offset={12}
            zIndex={10001}
            styles={{ tooltip: { padding: '6px 12px', fontSize: '0.8125rem', lineHeight: 1.4 } }}
          >
            <button
              type="button"
              onClick={toggleColorScheme}
              className={classes.iconBtn}
              aria-label="Toggle color scheme"
            >
              {isDark ? <IconSun size={19} stroke={1.85} /> : <IconMoon size={19} stroke={1.85} />}
            </button>
          </Tooltip>

          <Tooltip
            label="Login to SMS Messenger"
            withArrow
            position="bottom"
            offset={12}
            zIndex={10001}
            styles={{ tooltip: { padding: '6px 12px', fontSize: '0.8125rem', lineHeight: 1.4 } }}
          >
            <a
              href={loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.loginBtn}
              aria-label="Login to SMS Messenger"
            >
              <IconLogin size={19} stroke={2} />
            </a>
          </Tooltip>
        </div>
      </div>
    </header>
  );
}
