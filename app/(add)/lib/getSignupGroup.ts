import { IGroup } from "../../(unsubscribe)/unsubscribe/models/groups";

export async function getSignupGroup(orgId: string, groupId: string): Promise<IGroup | null> {
  const endpoint = process.env.NEXT_PUBLIC_API_DOMAIN;

  if (!endpoint) {
    throw new Error("NEXT_PUBLIC_ENDPOINT is not configured");
  }

  const response = await fetch(`${endpoint}/api/v1/signup/group/${orgId}/${groupId}/`, {
    cache: "no-store",
  });
  console.log(`Fetching group with orgId: ${orgId}, groupId: ${groupId} from ${endpoint}/api/v1/signup/group/${orgId}/${groupId}/`); // Debugging log
  if (!response.ok) {
    return null;
  }

  const group = (await response.json()) as IGroup;

  return group?.id ? group : null;
}
