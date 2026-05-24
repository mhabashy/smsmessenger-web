'use client';

import { useEffect, useState, useCallback } from "react";
import { IGroup, IGroupMembers } from "../../models/groups";
import { Box, Card, Checkbox, Container, Flex } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { normalizePhoneNumber } from "../../../../lib/phone";

export default function PossibleGroups(
    { groups, orgId, phoneNumber, groupName }: 
    { groups: IGroup[], orgId: string, phoneNumber: string, groupName?: string }
) {
    const [selectedGroups, setSelectedGroups] = useState<IGroupMembers[]>([]);
    const [removedGroups, setRemovedGroups] = useState<IGroupMembers[]>([]);
    const normalizedPhoneNumber = normalizePhoneNumber(phoneNumber);
    
    const getSelectedGroups = useCallback(async () => {
        if (!normalizedPhoneNumber) {
            setSelectedGroups([]);
            return;
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_UNSUBSCRIBE_ENDPOINT}/${orgId}/members/?phoneNumber=${encodeURIComponent(normalizedPhoneNumber)}`, {cache: "no-store"});
        const data = await res.json();
        setSelectedGroups(Array.isArray(data) ? data : []);
    }, [orgId, normalizedPhoneNumber]);

    const updateSelectedGroups = async (group: IGroup, action = 'unsubscribe') => {
        const removedGroup = removedGroups.find(
            (rGroup) => rGroup.groupId === group.id && rGroup.memberInfo,
        );
        const memberInfo = removedGroup?.memberInfo ?? null;
        const res = await fetch(`${process.env.NEXT_PUBLIC_UNSUBSCRIBE_ENDPOINT}/${orgId}/members/${group.id}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(memberInfo ? {
                action: action,
                phoneNumber: normalizedPhoneNumber,
                memberInfo: memberInfo
            }: {
                action: action,
                phoneNumber: normalizedPhoneNumber
            })
        });
        const data = await res.json();
        if (data.message && !data.error) {
            const isUnsubscribe = action === 'unsubscribe';
            notifications.show({
                title: isUnsubscribe ? 'Removed from group' : 'Subscribed to group',
                message: `You have been ${isUnsubscribe ? 'removed from' : 'subscribed to'} ${group.name}`,
                security: 'success',
                autoClose: 3000
              });
        }
    };

    useEffect(() => {
        getSelectedGroups();
    }, [groups, normalizedPhoneNumber, getSelectedGroups]);

    return (
        <> 
        <Flex direction="column" justify="center" align="center">
                <h1>Manage your SMS preferences</h1>
                {groupName ? <Box p="lg">{normalizedPhoneNumber} subscription to {groupName.toLowerCase()}</Box> : <Box p="lg">{normalizedPhoneNumber} subscription to the following groups:</Box>}
                {groups.length === 0 && <Box p="lg">No groups found</Box>}
                {groups.map((group) => (
                    <Container key={group.id} fluid >
                        <Card key={group.id} padding="sm" m="sm" shadow="lg">
                            <Flex direction="column">
                                <h4>{group.name}</h4>
                                <Checkbox 
                                    label="Would you like to receive SMS messages from this group?"
                                    checked={selectedGroups.map((selectedGroup) => selectedGroup.groupId).includes(group.id)}
                                    onChange={(value) => {
                                        if (value.target.checked) {
                                            const removedGroup = removedGroups.find((removedGroup) => removedGroup.groupId === group.id);
                                            setSelectedGroups([...selectedGroups, {groupId: group.id, groupName: group.name, memberInfo: removedGroup?.memberInfo}]);
                                            setRemovedGroups(removedGroups.filter((removedGroup) => removedGroup.groupId !== group.id));
                                            updateSelectedGroups(group, 'subscribe');
                                        } else {
                                            const selectedGroup = selectedGroups.find((selectedGroup) => selectedGroup.groupId === group.id);
                                            setSelectedGroups(selectedGroups.filter((selectedGroup) => selectedGroup.groupId !== group.id));
                                            setRemovedGroups([...removedGroups, {groupId: group.id, groupName: group.name, memberInfo: selectedGroup?.memberInfo}]);
                                            updateSelectedGroups(group, 'unsubscribe');
                                        }
                                    }}
                                />
                            </Flex>
                        </Card>
                    </Container>
                ))}
            </Flex>
        </>
    );
}