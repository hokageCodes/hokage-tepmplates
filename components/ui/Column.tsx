import React from "react";

interface ColumnProps {
  children: React.ReactNode;
  className?: string;
}

export default function Column({ children, className = "" }: ColumnProps) {
  return <div className={`flex flex-col gap-3 ${className}`}>{children}</div>;
}
