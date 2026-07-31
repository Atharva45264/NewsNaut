import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/newsnaut-logo.svg"
      alt="NewsNaut"
      width={180}
      height={48}
      priority
      className={className}
    />
  );
}