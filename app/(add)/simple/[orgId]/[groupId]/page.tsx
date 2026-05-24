import NotFoundDummy from "../../../../components/BulkMailerProLogo/NotFoundPage";
import SimpleSignUp from "../../../components/SimpleSignUp";
import { getSignupGroup } from "../../../lib/getSignupGroup";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface AddSimpleSubscriberPageProps {
  params: Promise<{
    orgId: string;
    groupId: string;
  }>;
}

export default async function AddSimpleSubscriberPage({
  params,
}: AddSimpleSubscriberPageProps) {
  const { orgId, groupId } = await params;
  const group = await getSignupGroup(orgId, groupId);

  if (!group) {
    return <NotFoundDummy />;
  }

  return <SimpleSignUp group={group} orgId={orgId} groupId={groupId} />;
}
