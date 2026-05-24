'use client';

import { Box, Button, TextInput } from "@mantine/core";
import { IGroup, IMembers } from "../../(unsubscribe)/unsubscribe/models/groups";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { executeRecaptcha } from "../lib/recaptcha";
import { isValidPhoneNumber, normalizePhoneNumber } from "../../lib/phone";

export default function SimpleSignUp(
    { orgId, groupId, group  }: {  orgId: string, groupId: string, group: IGroup  }
) {
    interface SignUpResponse {
        message?: string;
    }

    const [addStatus, setAddStatus] = useState<string>('initial');
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
        phoneNumber: '',
        },

        validate: {
    phoneNumber: (value) => (isValidPhoneNumber(value) ? null : 'Use an E.164 phone number like +15551234567'),
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
            <form onSubmit={form.onSubmit(async (values) => {
                await submitData(values);
            })}>
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