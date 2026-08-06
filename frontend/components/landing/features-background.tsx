"use client";

export function FeaturesBackground() {
  return (
    <div
      className="
      absolute
      inset-0
      overflow-hidden
      pointer-events-none
      -z-10
      "
    >
      {/* ================= GRID ================= */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)]
        bg-[size:80px_80px]
        animate-grid-float
        "
      />

      {/* ================= BIG GLOW ================= */}

      <div
        className="
        absolute
        left-[-180px]
        top-24
        h-[420px]
        w-[420px]
        rounded-full
        bg-emerald-400/20
        blur-[120px]
        animate-blob animate-breathe
        "
      />

      <div
        className="
        absolute
        right-[-120px]
        bottom-16
        h-[380px]
        w-[380px]
        rounded-full
        bg-green-500/20
        blur-[120px]
        animate-blob animate-breathe
        [animation-delay:4s]
        "
      />

      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-[320px]
        w-[320px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-emerald-300/10
        blur-[100px]
        animate-blob animate-breathe
        [animation-delay:8s]
        "
      />

      {/* ================= PARTICLES ================= */}

      {[
  { x: 8, y: 12 },
  { x: 18, y: 38 },
  { x: 28, y: 70 },
  { x: 36, y: 22 },
  { x: 48, y: 55 },
  { x: 58, y: 18 },
  { x: 68, y: 44 },
  { x: 78, y: 78 },
  { x: 88, y: 30 },

  { x: 15, y: 82 },
  { x: 26, y: 52 },
  { x: 38, y: 88 },
  { x: 52, y: 8 },
  { x: 64, y: 66 },
  { x: 74, y: 14 },
  { x: 82, y: 58 },
  { x: 91, y: 46 },
  { x: 95, y: 90 },
].map((particle, i) => (
  <div
    key={i}
    className="absolute animate-particle"
    style={{
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      animationDelay: `${i * 0.4}s`,
      animationDuration: `${8 + (i % 5)}s`,
    }}
  >
    <div
      className="
      h-2
      w-2
      rounded-full
      bg-emerald-500/20
      shadow-[0_0_20px_rgba(16,185,129,.35)]
      "
    />
  </div>
))}

      {/* ================= CONNECTION LINES ================= */}

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.05]"
      >
        <line
          x1="20%"
          y1="25%"
          x2="45%"
          y2="40%"
          stroke="#10b981"
          strokeWidth="1"
        />

        <line
          x1="45%"
          y1="40%"
          x2="70%"
          y2="28%"
          stroke="#10b981"
          strokeWidth="1"
        />

        <line
          x1="30%"
          y1="75%"
          x2="58%"
          y2="62%"
          stroke="#10b981"
          strokeWidth="1"
        />

        <line
          x1="58%"
          y1="62%"
          x2="82%"
          y2="78%"
          stroke="#10b981"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}