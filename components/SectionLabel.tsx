type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "accent" | "muted";
};

export function SectionLabel({
  children,
  className = "",
  tone = "accent",
}: SectionLabelProps) {
  const color = tone === "accent" ? "text-accent" : "text-ink-200";
  return (
    <p
      className={`inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] ${color} ${className}`}
    >
      <span
        aria-hidden="true"
        className="inline-block w-8 h-px bg-current opacity-60"
      />
      <span>{children}</span>
    </p>
  );
}
