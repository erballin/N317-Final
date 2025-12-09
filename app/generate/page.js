"use client";

import { useState } from "react";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Link from "next/link";

export default function GeneratePage() {
  const [language, setLanguage] = useState("html"); // Defaults to HTML
  const [code, setCode] = useState(""); // State for code, the user will input
  const [documentation, setDocumentation] = useState(""); // Hold the generated documentation from the AI
  const [isLoading, setIsLoading] = useState(false); // Loading state for generation process
  const [error, setError] = useState(); // Stores any error messages

  // console.log(language);
  // console.log(code);

  const documentCodePrompt = async () => {
    setDocumentation("");
    setError("");

    try {
      // console.log(language);
      // console.log(code);

      const response = await fetch("/api/chat", {
        // sends "500 internal server error" response
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: language,
          code: code,
        }),
      });

      // console.log(response);

      const data = await response.json().catch(() => {
        console.log(data);
        throw new Error("Failed to read response data");
      });

      if (data.documentation) {
        console.log(data.documentation);
      } else {
        throw new Error("No Documentation Found.");
      }
    } catch (error) {
      setError(error.message);
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
            {/* UPDATED DROPDOWN: HTML & JavaScript */}
            <select
              className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-emerald-500 focus:outline-none"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>HTML</option>
              <option>JavaScript</option>
            </select>
          </div>

          <textarea
            className="min-h-[300px] w-full rounded-lg border border-slate-300 bg-slate-50 p-4 font-mono text-sm focus:border-emerald-500 focus:outline-none"
            placeholder="// Paste your code here..."
            onChange={(e) => setCode(e.target.value)}
          ></textarea>

          <div className="flex justify-end border-t border-slate-100 pt-4">
            <Link href="/output">
              <Button onClick={documentCodePrompt}>Generate Docs →</Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
