export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 12L15.5 8.5L14 13.5L8.5 15.5L10 10.5L12 12Z"
        fill="currentColor"
      />
    </svg>
  )
}
