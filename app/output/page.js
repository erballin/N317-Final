"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Button, { SecondaryButton } from "@/components/Button";
import Card from "@/components/Card";

export default function OutputPage() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("docugen:result");
      if (!stored) {
        setError("No documentation found. Generate docs first.");
        setIsLoading(false);
        return;
      }
      const parsed = JSON.parse(stored);
      setResult(parsed);
    } catch (err) {
      setError("Unable to load documentation. Please generate again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const codePreview = useMemo(() => {
    if (!result?.code) return "";
    return result.code.length > 200
      ? `${result.code.slice(0, 200)}\n...`
      : result.code;
  }, [result]);

  const handleDownload = () => {
    if (!result?.markdown) return;
    const blob = new Blob([result.markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "documentation.md";
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    if (!result?.markdown) return;
    try {
      await navigator.clipboard.writeText(result.markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setError("Unable to copy to clipboard.");
    }
  };

  const renderSkeleton = () => (
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
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Documentation Result</h2>
          <p className="text-sm text-slate-500">
            {result ? "Generated with DocuGen AI" : "Awaiting generated output"}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/generate">
            <SecondaryButton>Start Over</SecondaryButton>
          </Link>
          <Button onClick={handleCopy} disabled={!result?.markdown}>
            {copied ? "Copied!" : "Copy markdown"}
          </Button>
          <Button onClick={handleDownload} disabled={!result?.markdown}>
            Download .md
          </Button>
        </div>
      </div>

      {error && !isLoading && (
        <Card>
          <div className="flex flex-col gap-3 text-sm text-slate-700 sm:flex-row sm:items-center sm:justify-between">
            <span>{error}</span>
            <Link href="/generate">
              <Button>Go to Generate</Button>
            </Link>
          </div>
        </Card>
      )}

      {!error && (
        <>
          {isLoading && renderSkeleton()}

          {!isLoading && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <Card title="Input Summary">
                  <div className="space-y-4">
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Language
                      </span>
                      <span className="text-sm font-medium text-slate-700">
                        {result?.metadata?.language || result?.language || "N/A"}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Lines
                      </span>
                      <span className="text-sm font-medium text-slate-700">
                        {result?.metadata?.lineCount ?? "N/A"}
                      </span>
                    </div>
                    <div className="pt-4">
                      <div className="rounded bg-slate-100 p-3">
                        <pre className="overflow-auto text-xs text-slate-600 whitespace-pre-wrap">
                          {codePreview || "No code provided."}
                        </pre>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="lg:col-span-2">
                <Card title="Markdown Output" className="min-h-[500px]">
                  {result?.markdown ? (
                    <div className="prose prose-slate max-w-none">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {result.markdown}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <p className="text-sm text-slate-500">
                      Waiting for generated documentation...
                    </p>
                  )}
                </Card>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
