import NotFoundPage from "../../../components/BulkMailerProLogo/NotFoundPage";
import { IGroup } from "../models/groups";
import PossibleGroups from "./components/PossibleGroups";
import { getUnsubscribeGroups } from "../lib/getUnsubscribeGroups";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface UnsubscribePageProps {
  params: Promise<{
    orgId: string;
  }>;
  searchParams: Promise<{
    phoneNumber?: string;
  }>;
}

export default async function UnsubscribePage(
  { params, searchParams }: UnsubscribePageProps,
) {
  const { orgId } = await params;

  if (!orgId) {
    return <NotFoundPage />;
  }

  const groups: IGroup[] = await getUnsubscribeGroups(orgId);
  const { phoneNumber = "" } = await searchParams;
  const groupName = groups[0]?.groupName ?? "";

  return (
    <PossibleGroups
      groups={groups}
      orgId={orgId}
      phoneNumber={phoneNumber}
      groupName={groupName}
    />
  );
}