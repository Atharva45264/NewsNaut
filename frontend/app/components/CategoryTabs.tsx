/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export default function CategoryTabs({ setCategory }: any) {
  const tabs = ["politics", "sports", "ai", "youtube"];

  return (
    <div className="flex gap-4 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setCategory(tab)}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-500"
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  );
}