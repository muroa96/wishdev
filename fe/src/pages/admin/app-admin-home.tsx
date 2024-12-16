import { DataCard, VisitorChart } from "@/src/entities/stats";

export function AppAdminHome() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 w-full">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DataCard className="rounded-xl bg-muted/50"></DataCard>
        <div className="rounded-xl bg-muted/50" />
        <div className="rounded-xl bg-muted/50" />
        <div className="rounded-xl bg-muted/50" />
      </div>
      <VisitorChart />
      {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
    </div>
  );
}
