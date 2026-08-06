"use client";

interface NewsStreamProps {
  direction?: "left" | "right";
  speed?: number;
  label: string;
  headlines: string[];
}

export function NewsStream({
  direction = "left",
  speed = 35,
  label,
  headlines,
}: NewsStreamProps) {
  const items = [...headlines, ...headlines];

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Green Glow Line */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-linear-to-r from-transparent via-emerald-400/20 to-transparent" />

      <div
        className={`news-glow flex w-max items-center gap-10 ${
          direction === "left"
            ? "animate-news-left"
            : "animate-news-right"
        }`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {items.map((headline, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              gap-4
              whitespace-nowrap
              text-emerald-500/20
              transition-all
            "
          >
            {/* Category */}
            <span
              className="
                rounded-full
                border
                border-emerald-500/20
                bg-emerald-500/5
                px-4
                py-1
                text-xs
                font-bold
                uppercase
                tracking-[0.3em]
              "
            >
              {label}
            </span>

            {/* Headline */}
            <span
              className="
                text-2xl
                font-semibold
                tracking-wide
              "
            >
              {headline}
            </span>

            {/* Dot */}
            <div className="h-2 w-2 rounded-full bg-emerald-500/40" />
          </div>
        ))}
      </div>
    </div>
  );
}