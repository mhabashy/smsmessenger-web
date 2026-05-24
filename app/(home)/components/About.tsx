import { Box } from '@mantine/core';
import './../main.css';

export default function About() {
    return (
    <div className="about-page" id="aboutus">
        <div className="about">
            <Box p="lg" mt="lg">
                <h1>About Us</h1>
                <h2>Who We Are</h2>
                <p>We are a startup focused on delivering practical bulk SMS software for businesses, schools, nonprofits, religious communities, and growing teams. SMS Messenger helps organizations run group texting without getting stuck in bloated enterprise tooling.</p>
                
                <h2>Our Vision</h2>
                <p>Our vision is to help organizations connect with their audiences through fast, reliable, and affordable SMS communication. We believe messaging tools should stay simple, useful, and easy to adopt.</p>
                
                <h2>Why Choose SMS Messenger?</h2>
                
                <h3>Twilio-Ready Setup</h3>
                <p>SMS Messenger is built to work with Twilio right away, so your team can start sending and organizing SMS campaigns without custom infrastructure.</p>
                
                <h3>Unlimited Users</h3>
                <p>Invite as many users as you need to your organization. Collaboration stays simple while your team manages groups, providers, and campaigns together.</p>
                
                <h3>Scheduling Capabilities</h3>
                <p>Schedule your text campaigns to reach your audience at the right moment. Timed delivery makes reminders, updates, and announcements easier to coordinate.</p>
                
                <h3>Affordable Pricing</h3>
                <p>Our platform pricing is designed to stay straightforward and budget-friendly, while you keep control of your actual SMS delivery provider and costs.</p>
                
                <h3>Reliable Workflow</h3>
                <p>Manage recipient groups, public opt-in forms, unsubscribe preferences, and message logs from one consistent workflow built around SMS operations.</p>
                
                <h3>Community Feedback</h3>
                <p>As a growing company, we value your input. We are always eager to hear from our users and use your feedback to continuously improve our services.</p>
                
                <h3>Provider Flexibility</h3>
                <p>We are starting with Twilio and designing the sending layer so more SMS providers can be added as your needs expand.</p>
                
                <h2>Join Us</h2>
                <p>Join the organizations using SMS Messenger to run announcements, reminders, and campaign texting with cleaner workflows and less overhead.</p>
                
                <h2>Contact Us</h2>
                <p>We&apos;d love to hear from you. If you have any questions, feedback, or need support, please don&apos;t hesitate to get in touch with us.</p>
            </Box>
        </div>
    </div>
    )
}