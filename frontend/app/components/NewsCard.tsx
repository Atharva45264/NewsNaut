/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";

export default function NewsCard({ article }: any) {
  return (
    <motion.div
      className="bg-gray-900 p-4 rounded-xl shadow-md hover:scale-105 transition"
      whileHover={{ scale: 1.03 }}
    >
      <h2 className="text-lg font-semibold text-white mb-2">
        {article.title}
      </h2>

      <p className="text-gray-300 text-sm">
        {article.summary_ai}
      </p>
    </motion.div>
  );
}