"use client";

const filters = [
  "All",
  "AI",
  "Politics",
  "Sports",
];

type Props = {
  selected: string;
  onSelect: (category: string) => void;
};

export default function NewsFilters({
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => {
        const active = selected === filter;

        return (
          <button
            key={filter}
            onClick={() => onSelect(filter)}
            className={`rounded-full px-5 py-2 text-sm transition
              ${
                active
                  ? "bg-blue-600 text-white"
                  : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-blue-500"
              }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}