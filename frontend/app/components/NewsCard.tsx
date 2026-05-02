/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";

export default function NewsCard({ article }: any) {
  const isYoutube = article.category === "youtube";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900/80 border border-gray-800 p-5 rounded-2xl shadow-lg"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs px-2 py-1 rounded bg-gray-800 border border-gray-700">
          {article.category.toUpperCase()}
        </span>
        <span className="text-xs text-gray-400">
          {new Date(article.created_at).toLocaleDateString()}
        </span>
      </div>

      <h2 className="text-lg font-semibold mb-2">
        {article.title}
      </h2>

      <p className="text-gray-300 text-sm mb-4 line-clamp-4">
        {article.summary_ai}
      </p>

      {article.link && (
        <a
          href={
            isYoutube
              ? `https://www.youtube.com/watch?v=${article.link}`
              : article.link
          }
          target="_blank"
          className="text-blue-400 text-sm hover:underline"
        >
          Read more →
        </a>
      )}
    </motion.div>
  );
}