"use client";

import Link from "next/link";
import Button, { SecondaryButton } from "@/components/Button";

export default function GlobalError({ error, reset }) {
  const message =
    error?.message || "Something went wrong. Please try again or return home.";

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6 py-12">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600 font-semibold">
            !
          </div>
          <div>
            <h1 className="text-xl font-semibold text-slate-900">Unexpected error</h1>
            <p className="text-sm text-slate-600">{message}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button onClick={() => reset?.()}>Try again</Button>
          <Link href="/generate">
            <Button>Go to Generate</Button>
          </Link>
          <Link href="/">
            <SecondaryButton>Return Home</SecondaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
