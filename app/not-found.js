import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-2xl font-bold text-emerald-600">
        404
      </div>
      <h1 className="text-3xl font-semibold text-slate-900">Page not found</h1>
      <p className="mt-3 max-w-md text-sm text-slate-600">
        The page you are looking for doesn’t exist. Check the URL or go back to the home page.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
        <Link href="/generate">
          <Button className="bg-slate-800 hover:bg-slate-700">Generate Docs</Button>
        </Link>
      </div>
    </div>
  );
}
