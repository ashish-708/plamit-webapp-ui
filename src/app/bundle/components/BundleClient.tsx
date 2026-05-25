"use client";

import { useMemo, useState } from "react";

import { uiBundleItems } from "../data/ui-bundle-items";
import { BundleCodeBlock } from "./BundleCodeBlock";

export function BundleClient() {
  const [selectedId, setSelectedId] = useState(uiBundleItems[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const [isUiBundleOpen, setIsUiBundleOpen] = useState(true);

  const selectedItem = uiBundleItems.find((item) => item.id === selectedId) ?? uiBundleItems[0];

  const filteredItems = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) {
      return uiBundleItems;
    }

    return uiBundleItems.filter((item) =>
      [item.label, item.group, item.description, item.filePath].join(" ").toLowerCase().includes(search),
    );
  }, [query]);

  const groups = Array.from(new Set(filteredItems.map((item) => item.group)));

  return (
    <main className="min-h-screen bg-slate-50 pt-14 text-slate-950">
      <div className="mx-auto max-w-[1600px] px-4 pb-5 md:px-5">
        <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">Bundle</p>
              <h1 className="mt-1 text-xl font-semibold">Reusable UI Bundle</h1>
              <p className="mt-1 text-sm text-slate-600">Select an item from the menu. Only the selected item preview and code will be shown.</p>
            </div>
            <div className="rounded-md bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
              {uiBundleItems.length} UI files
            </div>
          </div>
        </div>

        <div className="mt-4 grid min-h-[calc(100vh-150px)] grid-cols-1 gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="min-w-0 rounded-lg border border-slate-200 bg-white p-3 shadow-sm lg:sticky lg:top-16 lg:max-h-[calc(100vh-5rem)] lg:overflow-y-auto">
          <input
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search UI components"
            value={query}
          />

          <nav className="mt-4">
            <button
              className="flex w-full items-center justify-between rounded-md bg-slate-900 px-3 py-2.5 text-left text-sm font-semibold text-white"
              onClick={() => setIsUiBundleOpen((current) => !current)}
              type="button"
            >
              <span>UI Bundle</span>
              <span className="text-xs text-slate-300">{isUiBundleOpen ? "Close" : "Open"}</span>
            </button>

            {isUiBundleOpen ? (
              <div className="mt-3 space-y-5">
                {groups.length > 0 ? (
                  groups.map((group) => (
                    <section key={group}>
                      <p className="px-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{group}</p>
                      <div className="mt-2 space-y-1">
                        {filteredItems
                          .filter((item) => item.group === group)
                          .map((item) => (
                            <button
                              className={[
                                "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium",
                                selectedItem.id === item.id ? "bg-sky-700 text-white" : "text-slate-700 hover:bg-slate-100",
                              ].join(" ")}
                              key={item.id}
                              onClick={() => setSelectedId(item.id)}
                              type="button"
                            >
                              <span className="truncate">{item.label}</span>
                            </button>
                          ))}
                      </div>
                    </section>
                  ))
                ) : (
                  <div className="rounded-lg border border-dashed border-slate-300 p-4 text-sm text-slate-500">No UI item found.</div>
                )}
              </div>
            ) : null}
          </nav>
          </aside>

          <section className="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="min-w-0 space-y-4">
            <div className="min-w-0 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{selectedItem.group}</p>
              <h2 className="mt-1 text-xl font-semibold">{selectedItem.label}</h2>
              <p className="mt-1 text-sm text-slate-600">{selectedItem.description}</p>
              <p className="mt-3 break-words rounded-md bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">{selectedItem.filePath}</p>
            </div>
            {selectedItem.preview}
          </div>

          <div className="min-w-0 xl:sticky xl:top-16 xl:self-start">
            <BundleCodeBlock code={selectedItem.code} filePath={selectedItem.filePath} />
          </div>
          </section>
        </div>
      </div>
    </main>
  );
}
