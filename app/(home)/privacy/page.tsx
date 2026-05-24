import { Box, Button, Flex } from "@mantine/core";
import Footer from "../components/Footer";
import { IconHome } from "@tabler/icons-react";
import Link from "next/link";
import clasess from './Privacy.module.css';

export default function Privacy() {
    return (
        <div className="about">
            <Box p="lg">
                <br/>
                <br/>
                <br/>
                <h1>Privacy Page</h1>
                <Flex direction="column" justify="center" align="center" >
                    <Box p="md">
                        <Link href="/"> 
                            <Button leftSection={<IconHome />} color="blue" variant="light">Visit Main Page</Button>
                        </Link>
                    </Box>
                    <div className={clasess.container}>
                        <h1>Privacy Policy</h1>
                        <p>At SMS Messenger, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. By accessing or using our services, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.</p>

                        <h2>Information We Collect</h2>
                        <p>We may collect information about you in a variety of ways. The information we may collect on our website includes:</p>
                        <ul>
                        <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and other contact details that you voluntarily provide to us when you register for an account or use our services.</li>
                        <li><strong>Messaging List Data:</strong> Information regarding your SMS recipients, including their phone numbers, names, and any other details you choose to upload to our platform.</li>
                        <li><strong>Usage Data:</strong> Information automatically collected when you access our website or services, such as your IP address, browser type, operating system, and pages you visited.</li>
                        <li><strong>Unactive accounts:</strong> All accounts that aren&apos;t subscribed and not active for more than 2 month they we will terminate your account at anytime.</li>
                        <li><strong>Malicious use of the product</strong> someone use the product for malicious even if they are paid subscribers will have there account terminated with no refund. We don&apos;t want our product to help scammers, spammers, or bring harm to anyone.</li>
                        </ul>

                        <h2>Use of Your Information</h2>
                        <p>We use the information we collect in the following ways:</p>
                        <ul>
                        <li>To provide, operate, and maintain our services.</li>
                        <li>To manage your account and provide customer support.</li>
                        <li>To improve our services and develop new features.</li>
                        <li>To send you technical notices, updates, security alerts, and support messages.</li>
                        <li>To monitor and analyze usage and trends to improve your experience.</li>
                        </ul>

                        <h2>Disclosure of Your Information</h2>
                        <p>We do not sell, trade, or otherwise transfer your personal information or messaging list data to outside parties. We may share your information with third-party service providers who perform services for us or on our behalf, such as payment processing, data analysis, SMS delivery, hosting services, customer service, and marketing assistance. These third parties are prohibited from using your personal information for any purpose other than to provide these services to us.</p>

                        <h2>Data Security</h2>
                        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

                        <h2>Your Rights and Choices</h2>
                        <p>You may review, change, or terminate your account at any time. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use, and comply with legal requirements.</p>

                        <h2>Changes to This Privacy Policy</h2>
                        <p>We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. When we make changes, we will update the &apos;Effective Date&apos; at the top of this Privacy Policy. We encourage you to review this Privacy Policy periodically to stay informed about our practices.</p>

                        <h2>Contact Us</h2>
                        <p>If you have any questions or concerns about this Privacy Policy or our practices, please contact us on our contact page. <Link href="/contact" >Contact US</Link></p>
                    </div>
                </Flex>
                <Footer />
            </Box>
        </div>
    );
};