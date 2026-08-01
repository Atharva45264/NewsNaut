import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  priority?: boolean;
}

export function Logo({
  className,
  iconOnly = false,
  priority = false,
}: LogoProps) {
  return (
    <div
      className={cn(
        "flex items-center transition-all duration-300",
        className
      )}
    >
      <Image
        src={iconOnly ? "/icon2.png" : "/logo5.png"}
        alt="NewsNaut"
        width={iconOnly ? 42 : 220}
        height={iconOnly ? 42 : 58}
        priority={priority}
        className="h-20 w-auto object-contain transition-all duration-300 hover:scale-105"
      />
    </div>
  );
}