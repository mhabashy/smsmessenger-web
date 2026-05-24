'use client';

import { Badge, Card, Flex, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconCheck, IconMessage2, IconPhonePlus, IconSettings } from "@tabler/icons-react";

const previewCards = [
  {
    title: "Send campaigns",
    description: "Write a text message once and send it to the right groups.",
    icon: IconMessage2,
  },
  {
    title: "Collect opt-ins",
    description: "Use public sign-up forms to add subscribers by phone number.",
    icon: IconPhonePlus,
  },
  {
    title: "Manage providers",
    description: "Start with Twilio today and keep room for more providers later.",
    icon: IconSettings,
  },
];

export default function SideImage() {
  return (
    <Stack gap="md" maw={420} w="100%">
      {previewCards.map(({ title, description, icon: Icon }) => (
        <Card key={title} shadow="md" radius="md" padding="lg" withBorder>
          <Flex align="flex-start" gap="md">
            <ThemeIcon size={44} radius="md" variant="light">
              <Icon size={24} />
            </ThemeIcon>
            <Stack gap={6}>
              <Flex align="center" gap="xs">
                <Text fw={700}>{title}</Text>
                <Badge color="green" variant="light" leftSection={<IconCheck size={12} />}>
                  SMS
                </Badge>
              </Flex>
              <Text c="dimmed" size="sm">
                {description}
              </Text>
            </Stack>
          </Flex>
        </Card>
      ))}
    </Stack>
  );
}
