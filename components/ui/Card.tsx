import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`card rounded-lg p-5 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
