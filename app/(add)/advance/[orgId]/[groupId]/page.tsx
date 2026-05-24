import NotFoundDummy from "../../../../components/BulkMailerProLogo/NotFoundPage";
import AdvanceSignUp from "../../../components/AdvanceSignUp";
import { getSignupGroup } from "../../../lib/getSignupGroup";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface AddAdvanceSubscriberPageProps {
  params: Promise<{
    orgId: string;
    groupId: string;
  }>;
}

export default async function AddAdvanceSubscriberPage({
  params,
}: AddAdvanceSubscriberPageProps) {
  const { orgId, groupId } = await params;
  const group = await getSignupGroup(orgId, groupId);

  if (!group) {
    return <NotFoundDummy />;
  }

  return <AdvanceSignUp group={group} orgId={orgId} groupId={groupId} />;
}