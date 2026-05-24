import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem
  } from '@mantine/core';
import { IconUsers, IconBuilding, IconClipboardList, IconHelp, IconUserPlus, IconCalendar, IconMoneybag, IconList, IconServer, IconGrowth, IconMessage2, IconSettings, IconPhoneCall, IconPlugConnected } from '@tabler/icons-react';
  import classes from './Features.module.css';
  
  const mockdata = [
    {
        title: 'Bulk SMS Campaigns',
        description: 'Send scheduled or immediate SMS campaigns to your selected recipient groups with a simple team-friendly workflow.',
        icon: IconMessage2,
    },
    {
        title: 'Unlimited Users',
        description: 'Add unlimited users to your organization for seamless team collaboration. No extra cost.',
        icon: IconUserPlus,
    },
    {
        title: 'Schedule Messages',
        description: 'Schedule your SMS campaigns to go out at the right time for your audience.',
        icon: IconCalendar,
    },
    {
        title: 'Simple Flat Pricing',
        description: 'Run your SMS operations with one predictable platform fee while keeping delivery through your own Twilio account.',
        icon: IconMoneybag,
    },
    {
      title: 'Reliable Servers',
      description: 'Our application keeps your campaigns, groups, and opt-in workflows available and easy to manage.',
      icon: IconServer,
    },
    {
      title: 'Growing Company',
      description: 'We’re a growing company eager to hear your input and improve our services.',
      icon: IconGrowth,
    },
    {
      title: 'Twilio First',
      description: 'Connect your own Twilio account today with room to add more SMS providers as you grow.',
      icon: IconSettings,
    },
    {
    title: 'Groups',
    description: 'Manage recipient lists with groups built for targeted SMS campaigns and operational messaging.',
    icon: IconList,
    },
    {
    title: 'Provider Accounts',
    description: 'Store and manage your SMS sending providers in one place. No extra per-user charge.',
    icon: IconUsers,
    },
    {
    title: 'Public Sign-Up Forms',
    description: 'Publish simple and advanced SMS opt-in forms that send subscribers straight into your groups.',
    icon: IconPhoneCall,
    },
    {
    title: 'Organizations',
    description: 'Manage organization settings and user permissions for team collaboration.',
    icon: IconBuilding,
    },
    {
    title: 'Message Logs',
    description: 'Track campaign activity and review sent and rejected phone numbers from your SMS runs.',
    icon: IconClipboardList,
    },
    {
    title: 'API Integration',
    description: 'Integrate your existing systems with signup and unsubscribe endpoints for SMS list management.',
    icon: IconPlugConnected,
    },
    {
    title: 'Support',
    description: 'Access help resources and contact support for assistance with using SMS Messenger.',
    icon: IconHelp,
    },
  ];
  
  export default function Features() {
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon
          style={{ width: rem(50), height: rem(50) }}
          stroke={2}
        />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="lg" py="xl">
        <Group justify="center">
          <Badge variant="filled" size="lg">
            Twilio-Powered Bulk SMS
          </Badge>
        </Group>
  
        <Title order={2} className={classes.title} ta="center" mt="sm">
            Built for teams that need simple group texting and public SMS opt-in flows
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
            SMS Messenger gives you bulk SMS sending, recipient management, and public preference pages
            without the complexity of enterprise messaging suites.
        </Text>
  
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }