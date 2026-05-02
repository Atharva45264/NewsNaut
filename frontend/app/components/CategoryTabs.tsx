/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

const tabs = [
  { key: "politics", label: "🏛️ Politics" },
  { key: "sports", label: "⚽ Sports" },
  { key: "ai", label: "🤖 AI" },
  { key: "youtube", label: "🎥 YouTube" },
];

export default function CategoryTabs({ category, setCategory }: any) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => setCategory(t.key)}
          className={`px-4 py-2 rounded-xl border transition ${
            category === t.key
              ? "bg-blue-600 border-blue-600 text-white"
              : "bg-gray-900 border-gray-800 hover:border-gray-600"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}