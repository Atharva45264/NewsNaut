"use client";

import { NewsStream } from "./news-stream";

const breaking = [
  "OpenAI launches next-generation AI model",
  "Google unveils Gemini Ultra update",
  "Microsoft expands Copilot ecosystem",
  "Nvidia becomes world's most valuable company",
  "Tesla reveals Robotaxi improvements",
];

const technology = [
  "Apple Intelligence expands globally",
  "Anthropic releases Claude update",
  "Meta introduces AI-powered glasses",
  "Amazon invests billions into AI",
  "SpaceX completes successful Starship mission",
];

const world = [
  "Global markets react to AI boom",
  "Climate summit reaches new agreement",
  "India signs international technology partnership",
  "European Union announces new AI regulations",
  "World leaders discuss cybersecurity",
];

const sports = [
  "India wins thrilling T20 series",
  "Olympic preparations begin worldwide",
  "Football transfer window heats up",
  "Tennis championship enters finals",
  "New cricket season announced",
];

export function HeroBackground() {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
        select-none
        z-0
      "
    >
      {/* Top Fade */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background via-background/70 to-transparent z-20" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/70 to-transparent z-20" />

      {/* Left Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-background via-background/70 to-transparent z-20" />

      {/* Right Fade */}
      <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-background via-background/70 to-transparent z-20" />

      {/* Soft Green Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_70%)]
        "
      />

      <div
        className="
          flex
          h-full
          flex-col
          justify-evenly
        "
      >
        <NewsStream
          label="Breaking"
          headlines={breaking}
          direction="left"
          speed={36}
        />

        <NewsStream
          label="AI"
          headlines={technology}
          direction="right"
          speed={42}
        />

        <NewsStream
          label="World"
          headlines={world}
          direction="left"
          speed={48}
        />

        <NewsStream
          label="Sports"
          headlines={sports}
          direction="right"
          speed={40}
        />

        <NewsStream
          label="Technology"
          headlines={technology}
          direction="left"
          speed={52}
        />
      </div>
    </div>
  );
}