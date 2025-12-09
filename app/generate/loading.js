export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-3 h-8 w-48 rounded bg-slate-200 animate-pulse" />
        <div className="mx-auto h-4 w-64 rounded bg-slate-200 animate-pulse" />
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 bg-slate-50/50 px-6 py-4">
          <div className="h-5 w-28 rounded bg-slate-200 animate-pulse" />
        </div>
        <div className="p-6 space-y-6">
          <div className="h-10 w-28 rounded bg-slate-200 animate-pulse" />
          <div className="h-64 rounded-lg bg-slate-200 animate-pulse" />
          <div className="h-12 rounded bg-slate-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
