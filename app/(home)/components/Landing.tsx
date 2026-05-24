import { Box, Button, Flex } from "@mantine/core";

import './../main.css';
import { IconBook, IconStack } from "@tabler/icons-react";
import Link from "next/link";
import SideImage from "./SideImage";


export default function Landing() {
    return (
        <div className="main-section">
            <div className="container">
            <Flex
                direction={{ base: 'column', sm: 'row', xs: 'row', }}
                gap={{ base: 'sm', sm: 'lg' }}
                justify={{ sm: 'center' }}
                align="center"
            >

                <SideImage />
                <Box p="md">
                <div className="left-side">
                    <h1>Bulk SMS Messaging for Teams, Groups, and Growing Organizations</h1>
                    <p>
                    SMS Messenger helps you send bulk text campaigns with Twilio, organize recipients into groups, and publish public opt-in and unsubscribe forms without the overhead of a complex messaging platform.
                    </p>
                    <Flex direction="row" justify="center">
                    <Box p="md">
                        <Link href={`${process.env.NEXT_PUBLIC_LOGIN_DOMAIN}`}>
                            <Button size="lg" leftSection={<IconStack />}  variant="default" color="gray" > 
                            Open SMS App
                            </Button>
                        </Link>
                    </Box>
                    <Box p="md">
                        <Link href={`#aboutus`}>
                            <Button size="lg" leftSection={<IconBook />}  variant="default" color="gray" > 
                                Learn More
                            </Button>
                        </Link>
                    </Box>
                    </Flex>
                </div>
                </Box>
            </Flex>
            </div>
        </div>
    );
}