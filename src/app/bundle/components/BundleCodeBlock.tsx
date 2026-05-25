"use client";

import { useState } from "react";

export function BundleCodeBlock({ code, filePath }: { code: string; filePath: string }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }

  return (
    <div className="min-w-0 max-w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-950">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 px-4 py-2">
        <div className="min-w-0">
          <span className="block text-xs font-medium uppercase tracking-wide text-slate-400">Next.js / TSX</span>
          <span className="block truncate text-xs text-slate-500">{filePath}</span>
        </div>
        <button
          className="rounded-md border border-slate-700 px-2.5 py-1 text-xs font-medium text-slate-200 hover:bg-slate-800"
          onClick={copyCode}
          type="button"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="max-h-[calc(100vh-220px)] min-h-[320px] overflow-auto whitespace-pre-wrap break-words p-4 text-xs leading-5 text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}
