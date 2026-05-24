import { Card, Center, Group, Text, Button } from "@mantine/core";
import { IconGauge, IconList, IconUsers } from "@tabler/icons-react";
import Image from "next/image";

import classes from "./Price.module.css";
import Link from "next/link";

const mockdata = [
    { label: 'Unlimited users', icon: IconUsers },
    { label: 'Unlimited provider accounts', icon: IconList },
    { label: 'Public sign-up and unsubscribe forms', icon: IconList },
    { label: 'Unlimited Groups', icon: IconList },
    { label: 'Bring your own Twilio sender', icon: IconGauge },
  ];
  
  
export default function Price() {
    const features = mockdata.map((feature) => (
        <Center key={feature.label}>
          <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
          <Text size="xs">{feature.label}</Text>
        </Center>
      ));
    
      return (
        <Card withBorder radius="lg" className={classes.card}>
          <div className={classes.imageSection}>
            <Image src="/favicon.svg" width="180" height="180" alt="SMS Messenger" />
          </div>
    
          <Group justify="space-between" mt="md">
            <div>
              <Text fw={500}>Standard Flat Fee</Text>
              <Text fz="xs" c="dimmed">
                Simple platform pricing with no surprise user fees while you keep delivery on your own SMS provider account.
              </Text>
            </div>
          </Group>
    
          <div className={classes.section}>
            <Text fz="sm" c="dimmed" className={classes.label}>
              Basic configuration
            </Text>
    
            <Group gap={8} mb={-8}>
              {features}
            </Group>
          </div>
    
          <div className={classes.section}>
            <Group gap={30}>
              <div>
                <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                  $9.99
                </Text>
                <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
                  per month
                </Text>
              </div>
              <Link href={`${process.env.NEXT_PUBLIC_LOGIN_DOMAIN}`}>
                <Button radius="xl" style={{ flex: 1 }}>
                  Open app
                </Button>
              </Link>
            </Group>
          </div>
        </Card>
      );
};
