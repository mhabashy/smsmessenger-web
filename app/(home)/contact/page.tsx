'use client';

import { useRef, useState } from 'react';
import { useForm } from '@mantine/form';
import {
  IconCircleCheck,
  IconForms,
  IconPlugConnected,
  IconSend,
  IconUsersGroup,
} from '@tabler/icons-react';

import './../main.css';
import Footer from '../components/Footer';
import { useScrollReveal } from '../components/useScrollReveal';
import classes from './Contact.module.css';

const topics = [
  {
    title: 'Twilio & Provider Setup',
    description:
      'Questions about connecting your Twilio sender, managing provider credentials, or API endpoints.',
    icon: IconPlugConnected,
  },
  {
    title: 'Public Sign-Up & Unsubscribe Forms',
    description:
      'Help configuring public opt-in pages, subscriber routing into groups, or preference management.',
    icon: IconForms,
  },
  {
    title: 'Organizations & Flat Pricing',
    description:
      'Support for team collaboration, unlimited user seats, and straightforward monthly billing.',
    icon: IconUsersGroup,
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useScrollReveal(sectionRef, 80);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? 'Please enter at least 2 characters' : null),
      email: (value) => (!/^\S+@\S+$/.test(value) ? 'Please enter a valid email address' : null),
      subject: (value) => (value.trim().length === 0 ? 'Please enter a subject' : null),
    },
  });

  const nameProps = form.getInputProps('name');
  const emailProps = form.getInputProps('email');
  const subjectProps = form.getInputProps('subject');
  const messageProps = form.getInputProps('message');

  return (
    <main>
      <section ref={sectionRef} className={classes.section}>
        <div className={classes.container}>
          <div className={classes.inner}>
            {/* ---------- Left: Intro & Topics ---------- */}
            <div>
              <span className={`${classes.eyebrow} ${classes.reveal}`} data-reveal>
                Contact Us
              </span>

              <h1 className={`${classes.heading} ${classes.reveal}`} data-reveal>
                Get in touch with <span className={classes.accent}>our team</span>
              </h1>

              <p className={`${classes.lead} ${classes.reveal}`} data-reveal>
                We&apos;d love to hear from you. If you have questions about SMS Messenger, Twilio
                setup, public sign-up forms, or unsubscribe flows, get in touch.
              </p>

              <ul className={classes.topics}>
                {topics.map((topic) => (
                  <li
                    key={topic.title}
                    className={`${classes.topic} ${classes.reveal}`}
                    data-reveal
                  >
                    <span className={classes.topicIcon}>
                      <topic.icon size={20} stroke={1.75} />
                    </span>
                    <div>
                      <h2 className={classes.topicTitle}>{topic.title}</h2>
                      <p className={classes.topicText}>{topic.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* ---------- Right: Contact Form Card ---------- */}
            <div className={`${classes.card} ${classes.reveal}`} data-reveal>
              <div className={classes.cardHeader}>
                <h2 className={classes.cardTitle}>Get in touch</h2>
                <p className={classes.cardSubtitle}>
                  Fill out the form below and we&apos;ll get back to you shortly.
                </p>
              </div>

              <form
                className={classes.form}
                noValidate
                onSubmit={form.onSubmit(() => {
                  // handle form submission here - TODO WHEN LAUNCHED
                  setSubmitted(true);
                })}
              >
                <div className={classes.row}>
                  <div className={classes.field}>
                    <label htmlFor="contact-name" className={classes.label}>
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className={classes.input}
                      value={nameProps.value}
                      onChange={nameProps.onChange}
                      onFocus={nameProps.onFocus}
                      onBlur={nameProps.onBlur}
                      aria-invalid={Boolean(nameProps.error)}
                    />
                    {nameProps.error && <span className={classes.error}>{nameProps.error}</span>}
                  </div>

                  <div className={classes.field}>
                    <label htmlFor="contact-email" className={classes.label}>
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className={classes.input}
                      value={emailProps.value}
                      onChange={emailProps.onChange}
                      onFocus={emailProps.onFocus}
                      onBlur={emailProps.onBlur}
                      aria-invalid={Boolean(emailProps.error)}
                    />
                    {emailProps.error && <span className={classes.error}>{emailProps.error}</span>}
                  </div>
                </div>

                <div className={classes.field}>
                  <label htmlFor="contact-subject" className={classes.label}>
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className={classes.input}
                    value={subjectProps.value}
                    onChange={subjectProps.onChange}
                    onFocus={subjectProps.onFocus}
                    onBlur={subjectProps.onBlur}
                    aria-invalid={Boolean(subjectProps.error)}
                  />
                  {subjectProps.error && (
                    <span className={classes.error}>{subjectProps.error}</span>
                  )}
                </div>

                <div className={classes.field}>
                  <label htmlFor="contact-message" className={classes.label}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Your message"
                    className={classes.textarea}
                    value={messageProps.value}
                    onChange={messageProps.onChange}
                    onFocus={messageProps.onFocus}
                    onBlur={messageProps.onBlur}
                  />
                </div>

                {submitted && (
                  <div className={classes.successBanner} role="status">
                    <IconCircleCheck size={18} stroke={2} />
                    Thanks for reaching out! Your message has been prepared.
                  </div>
                )}

                <button type="submit" className={classes.submitBtn}>
                  Send message
                  <IconSend size={17} className={classes.submitIcon} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
