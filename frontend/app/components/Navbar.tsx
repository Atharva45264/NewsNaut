"use client";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-black/60 backdrop-blur border-b border-gray-800">
      <div className="container flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold">📰 NewsNaut</h1>
        <span className="text-sm text-gray-400">AI-powered daily digest</span>
      </div>
    </div>
  );
}