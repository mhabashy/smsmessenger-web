'use client';

import { Box, Button, Card, Flex, Group, SimpleGrid, TextInput, Textarea, Title } from '@mantine/core';
import './../main.css';
import { IconHome } from '@tabler/icons-react';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useForm } from '@mantine/form';

export default function Contact() {
    const form = useForm({
      initialValues: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      validate: {
        name: (value) => value.trim().length < 2,
        email: (value) => !/^\S+@\S+$/.test(value),
        subject: (value) => value.trim().length === 0,
      },
    });
    return (
    <div className="about">
        <Box p="lg">
            <br/>
            <br/>
            <br/>
            <h1>Contact Us</h1>
            <Flex direction="column" justify="center" align="center" >
                <Box p="md">
                        <Link href="/"> 
                            <Button leftSection={<IconHome />} color="blue" variant="light">Visit Main Page</Button>
                        </Link>
                </Box>
                <p>We&apos;d love to hear from you. If you have questions about SMS Messenger, Twilio setup, public sign-up forms, or unsubscribe flows, get in touch.</p>
                <Box m="lg" p="lg" w="600">
                    <Card shadow="xs" padding="lg" radius="lg" mt="lg">
                            <form onSubmit={form.onSubmit(() => {
                                // handle form submission here - TODO WHEN LANUCHED
                            })}>
                                <Title
                                    order={2}
                                    size="h1"
                                    style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                                    fw={900}
                                    ta="center"
                                >
                                    Get in touch
                                </Title>

                                <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                                    <TextInput
                                    label="Name"
                                    placeholder="Your name"
                                    name="name"
                                    variant="filled"
                                    {...form.getInputProps('name')}
                                    />
                                    <TextInput
                                    label="Email"
                                    placeholder="Your email"
                                    name="email"
                                    variant="filled"
                                    {...form.getInputProps('email')}
                                    />
                                </SimpleGrid>

                                <TextInput
                                    label="Subject"
                                    placeholder="Subject"
                                    mt="md"
                                    name="subject"
                                    variant="filled"
                                    {...form.getInputProps('subject')}
                                />
                                <Textarea
                                    mt="md"
                                    label="Message"
                                    placeholder="Your message"
                                    maxRows={10}
                                    minRows={5}
                                    autosize
                                    name="message"
                                    variant="filled"
                                    {...form.getInputProps('message')}
                                />

                                <Group justify="center" mt="xl">
                                    <Button type="submit" size="md">
                                    Send message
                                    </Button>
                                </Group>
                            </form>
                    </Card>
                </Box>
            </Flex>
            <Footer />
        </Box>
    </div>
    );
}