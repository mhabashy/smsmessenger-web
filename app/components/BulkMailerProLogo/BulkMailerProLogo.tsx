import { Flex } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import './bulk-mailer-pro-logo.css';

export default function BulkMailerProLogo() {
  return (
    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Flex direction="row" align="center" gap={10} p="xs">
        <Image
          src="/sms-messenger-pulse-dispatch.svg"
          width={38}
          height={38}
          alt="SMS Messenger"
          priority
        />
        <span className="logo-text">
          SMS <span className="logo-text-accent">Messenger</span>
        </span>
      </Flex>
    </Link>
  );
}
