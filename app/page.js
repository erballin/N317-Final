import Link from 'next/link';
import Button, { SecondaryButton } from '@/components/Button';

export default function HomePage() {
  return (
    <div className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      
      {/* Green Background Glow */}
      <div className="absolute -top-10 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-100 blur-[100px] opacity-50"></div>

      <div className="max-w-3xl space-y-8">
        {/* Green Badge */}
        <div className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
          ✨ AI-Enhanced Documentation
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
          Turn Code into <br/>
          {/* Green Text Span */}
          <span className="text-emerald-600">Documentation</span> Instantly.
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-slate-600 leading-relaxed">
          DocuGen AI converts raw source code into readable, structured markdown. 
          Reduce manual effort and improve code clarity.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/generate">
            <Button className="h-12 px-8 text-base">Generate Documentation</Button>
          </Link>
          <Link href="/about">
            <SecondaryButton className="h-12 px-8 text-base">How it Works</SecondaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
}


