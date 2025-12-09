import Card from "@/components/Card";

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <div className="h-6 w-48 rounded bg-slate-200 animate-pulse" />
          <div className="h-4 w-32 rounded bg-slate-200 animate-pulse" />
        </div>
        <div className="flex gap-3">
          <div className="h-10 w-24 rounded bg-slate-200 animate-pulse" />
          <div className="h-10 w-28 rounded bg-slate-200 animate-pulse" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card title="Input Summary">
            <div className="space-y-4 animate-pulse">
              <div className="h-4 w-24 rounded bg-slate-200" />
              <div className="h-4 w-16 rounded bg-slate-200" />
              <div className="h-32 rounded bg-slate-200" />
            </div>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card title="Markdown Output" className="min-h-[500px]">
            <div className="space-y-4 animate-pulse">
              <div className="h-4 w-2/3 rounded bg-slate-200" />
              <div className="h-4 w-1/2 rounded bg-slate-200" />
              <div className="h-96 rounded bg-slate-200" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
