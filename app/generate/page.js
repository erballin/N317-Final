"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Link from "next/link";

export default function GeneratePage() {
  const router = useRouter();
  const [language, setLanguage] = useState("JavaScript");
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    setError("");

    if (!code.trim()) {
      setError("Please paste some code to generate documentation.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, code }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Unable to generate documentation.");
      }

      const payload = {
        markdown: data.markdown,
        metadata: data.metadata,
        code,
        language,
      };
      localStorage.setItem("docugen:result", JSON.stringify(payload));

      router.push("/output");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Input Source Code</h2>
        <p className="text-slate-500">Paste your code below to get started.</p>
      </div>

      <Card title="Code Editor" className="shadow-lg">
        <div className="space-y-6">
          <div className="flex gap-4">
            <select
              className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-emerald-500 focus:outline-none"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="JavaScript">JavaScript</option>
              <option value="TypeScript">TypeScript</option>
              <option value="HTML">HTML</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
            </select>
          </div>

          <textarea
            className="min-h-[300px] w-full rounded-lg border border-slate-300 bg-slate-50 p-4 font-mono text-sm focus:border-emerald-500 focus:outline-none"
            placeholder="// Paste your code here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          ></textarea>

          {error && (
            <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/output" className="text-sm text-slate-500 hover:text-slate-700">
              View last generated output
            </Link>
            <Button
              className="flex items-center justify-center gap-2 disabled:opacity-60"
              onClick={handleGenerate}
              disabled={isLoading}
            >
              {isLoading ? "Generating..." : "Generate Docs →"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
