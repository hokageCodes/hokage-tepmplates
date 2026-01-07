import React from "react";

interface GridProps {
  children: React.ReactNode;
  cols?: number;
  className?: string;
}

export default function Grid({ children, cols = 3, className = "" }: GridProps) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 md:grid-cols-${cols} ${className}`}>
      {children}
    </div>
  );
}
