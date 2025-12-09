import Button, { SecondaryButton } from '@/components/Button';
import Card from '@/components/Card';
import Link from 'next/link';

export default function OutputPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      
      {/* Header with Actions */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Documentation Result</h2>
          <p className="text-sm text-slate-500">Generated in 1.2s</p>
        </div>
        <div className="flex gap-3">
          <Link href="/generate">
            <SecondaryButton>Start Over</SecondaryButton>
          </Link>
          <Button>Download .md</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        
        {/* Left Column: Input Summary */}
        <div className="lg:col-span-1">
          <Card title="Input Summary">
            <div className="space-y-4">
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Language</span>
                <span className="text-sm font-medium text-slate-700">TypeScript</span>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Lines</span>
                <span className="text-sm font-medium text-slate-700">45 Lines</span>
              </div>
              <div className="pt-4">
                <div className="rounded bg-slate-100 p-3">
                  {/* FIXED: Wrapped in curly braces and backticks */}
                  <pre className="overflow-hidden text-xs text-slate-500">
                    {`export default function...`}
                  </pre>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: The Markdown Output */}
        <div className="lg:col-span-2">
          <Card title="Markdown Output" className="min-h-[500px]">
            <div className="prose prose-slate max-w-none">
              <h1 className="text-2xl font-bold text-slate-900">HomePage Component</h1>
              <p className="text-slate-600">The <code>HomePage</code> component renders the main landing page of the application.</p>
              
              <h3 className="mt-4 text-lg font-semibold text-slate-800">Returns</h3>
              <ul className="list-disc pl-5 text-slate-600">
                <li>A responsive Hero section with a title.</li>
                <li>Action buttons linking to other pages.</li>
              </ul>

              <h3 className="mt-4 text-lg font-semibold text-slate-800">Example Usage</h3>
              <div className="mt-2 rounded-md bg-slate-900 p-4 font-mono text-sm text-slate-50">
                {/* FIXED: Wrapped in curly braces and backticks to allow quotes */}
                {`import HomePage from './HomePage';`}
              </div>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}