import PendingRequests from "@/components/agent/pending-requests";
import DashboardMainBody from "@/components/shared/dashboard-main-body";

export default function AgentPending() {
  return (
    <DashboardMainBody>
      <PendingRequests />
    </DashboardMainBody>
  );
}
