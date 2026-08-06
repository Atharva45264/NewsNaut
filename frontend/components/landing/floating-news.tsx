"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NewsPill } from "./news-pill";

const headlines: string | any[] = [
  // your headlines...
];

interface FloatingItem {
  id: number;
  title: string;
  top: number;
  left: number;
  duration: number;
  delay: number;
  rotate: number;
  reverse: boolean;
  scale: number;
}

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function FloatingNews() {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      title: headlines[i % headlines.length],
      top: random(0, 100),
      left: random(-20, 80),
      duration: random(35, 70),
      delay: random(0, 20),
      rotate: random(-8, 8),
      reverse: Math.random() > 0.5,
      scale: random(0.9, 1.2),
    }));

    setItems(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {items.map((pill) => (
        <motion.div
          key={pill.id}
          className="absolute"
          style={{
            top: `${pill.top}%`,
            left: `${pill.left}%`,
            rotate: `${pill.rotate}deg`,
            scale: pill.scale,
            opacity: 0.08,
          }}
          animate={{
            x: pill.reverse
              ? [-1200, 1400]
              : [1400, -1200],
          }}
          transition={{
            duration: pill.duration,
            repeat: Infinity,
            ease: "linear",
            delay: pill.delay,
          }}
        >
          <NewsPill title={pill.title} />
        </motion.div>
      ))}
    </div>
  );
}