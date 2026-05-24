import { IGroup } from "../models/groups";

export async function getUnsubscribeGroups(orgId: string): Promise<IGroup[]> {
  const endpoint = process.env.NEXT_PUBLIC_UNSUBSCRIBE_ENDPOINT;

  if (!endpoint) {
    throw new Error("NEXT_PUBLIC_UNSUBSCRIBE_ENDPOINT is not configured");
  }

  const response = await fetch(`${endpoint}/${orgId}/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return [];
  }

  const groups = (await response.json()) as IGroup[];

  return Array.isArray(groups) ? groups : [];
}
