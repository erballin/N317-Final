import Button from '@/components/Button';
import Card from '@/components/Card';
import Link from 'next/link';

export default function GeneratePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Input Source Code</h2>
        <p className="text-slate-500">Paste your code below to get started.</p>
      </div>

      <Card title="Code Editor" className="shadow-lg">
        <div className="space-y-6">
          
          <div className="flex gap-4">
            {/* UPDATED DROPDOWN: HTML & JavaScript */}
            <select className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-emerald-500 focus:outline-none">
              <option>HTML</option>
              <option>JavaScript</option>
            </select>
          </div>

          <textarea 
            className="min-h-[300px] w-full rounded-lg border border-slate-300 bg-slate-50 p-4 font-mono text-sm focus:border-emerald-500 focus:outline-none"
            placeholder="// Paste your code here..."
          ></textarea>

          <div className="flex justify-end border-t border-slate-100 pt-4">
            <Link href="/output">
              <Button>Generate Docs →</Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}