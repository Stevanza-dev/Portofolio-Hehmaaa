import React from "react";

export function SectionLabel({ children }) {
  return (
    <p className="text-[11px] tracking-[0.12em] text-accent">{children}</p>
  );
}

export function Divider() {
  return <div className="h-px w-full bg-accent/20" />;
}
