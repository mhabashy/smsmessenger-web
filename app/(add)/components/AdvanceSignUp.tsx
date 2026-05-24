'use client';

import { useForm } from "@mantine/form";
import { IGroup, IMembers } from "../../(unsubscribe)/unsubscribe/models/groups";
import { Box, Button, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { executeRecaptcha } from "../lib/recaptcha";
import { isValidPhoneNumber, normalizePhoneNumber } from "../../lib/phone";

export default function AdvanceSignUp(
    { orgId, groupId, group  }: {  orgId: string, groupId: string, group: IGroup  }
) {
    interface SignUpResponse {
        message?: string;
    }

    const [addStatus, setAddStatus] = useState<string>('initial');
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            firstName: '',
            middleName: '',
            lastName: '',
            phoneNumber: '',
        },
        validate: {
            phoneNumber: (value) => (isValidPhoneNumber(value) ? null : 'Use an E.164 phone number like +15551234567'),
            firstName: (value) => (value ? null : 'First Name is required'),
            lastName: (value) => (value ? null : 'Last Name is required'),
        },
    });

    const submitData = async (data: IMembers) => {
        try {
            setAddStatus('loading');
            const recaptchaToken = await executeRecaptcha('signup');
            const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/v1/signup/group/${orgId}/${groupId}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    phoneNumber: normalizePhoneNumber(data.phoneNumber),
                    recaptchaToken,
                })
            });
            const resData = (await res.json()) as SignUpResponse;
            if (res.ok && !resData.message) {
                notifications.show({
                    title: 'Subscribed to group',
                    message: `You have been added to ${group.name} SMS updates`,
                    security: 'success',
                    autoClose: 3000
                });
                form.reset();
            } else {
                notifications.show({
                    title: 'Error',
                    message: resData.message,
                    security: 'error',
                    autoClose: 3000
                });
            }
            setAddStatus('initial');
        } catch {
            setAddStatus('initial');
            notifications.show({
                title: 'Error',
                message: 'Unable to subscribe right now. Please try again.',
                security: 'error',
                autoClose: 3000
            });
        }
    }
    
    return (
        <Box m="md" p="md">
            <h4>{group.name} SMS Sign Up</h4>
            <form onSubmit={form.onSubmit((values) => {
                submitData(values);
            })}>
                <TextInput
                    withAsterisk
                    label="First Name"
                    placeholder="First Name"
                    key={form.key('firstName')}
                    {...form.getInputProps('firstName')}
                />
                <TextInput
                    label="Middle Name"
                    placeholder="Middle Name"
                    key={form.key('middleName')}
                    {...form.getInputProps('middleName')}
                />
                <TextInput
                    withAsterisk
                    label="Last Name"
                    placeholder="Last Name"
                    key={form.key('lastName')}
                    {...form.getInputProps('lastName')}
                />
                <TextInput
                    withAsterisk
                    label="Phone Number"
                    placeholder="+15551234567"
                    key={form.key('phoneNumber')}
                    {...form.getInputProps('phoneNumber')}
                />
                <br/>
                <Button disabled={addStatus === 'loading'} type="submit" fullWidth mt="lg" mb="lg">Join SMS List</Button>
            </form>
        </Box>
    );
}