'use client';
import { Box, Container, Flex, Group } from '@mantine/core';
import './../main.css';
import classes from './FooterSimple.module.css';
import BulkMailerProLogo from '../../components/BulkMailerProLogo/BulkMailerProLogo';
import Link from 'next/link';

const links = [
  { link: '/contact', label: 'Contact' },
  { link: '/privacy', label: 'Privacy' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const items = links.map((link) => (
      <Link
        className="dimmed"
        key={link.label}
        href={link.link}
      >
        {link.label}
      </Link>
    ));
  
    return (

        <div className={classes.footer}>
        <Container className={classes.inner}>
          <BulkMailerProLogo  />
          <Group className={classes.links}>{items}</Group>
        </Container>
        <Flex justify="center" align="center" >
            <Box p="md">
                Copyright © {currentYear} Angel Michael Dev Inc - SMS Messenger
            </Box>
        </Flex>
      </div>
    ); 
}