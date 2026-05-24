import {  Title, Text, Button, Flex } from '@mantine/core';
import classes from './NotFoundImage.module.css';
import Image from 'next/image';

export default function NotFoundDummy() {
  return (
    <div className={classes.root}>
        <Flex direction="column" justify="center" align="center" content="center">
            <Image src={'/404.svg'} width="200" height="200" className={classes.mobileImage} alt='SMS Messenger 404' />
            <div>
            <Title p="md" className={classes.title}>Something is not right...</Title>
            <Text p="md" c="dimmed" size="lg">
                Page you are trying to open does not exist. You may have mistyped the address, or the
                page has been moved to another URL. If you think this is an error contact support.
            </Text>
            <Button m="md" variant="outline" size="md" mt="xl" className={classes.control}>
                Get back to home page
            </Button>
            </div>
            <Image 
              src={'/404.svg'} 
              width="200" height="200" className={classes.desktopImage} alt='SMS Messenger 404' />
        </Flex>
    </div>
  );
}