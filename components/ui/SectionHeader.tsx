type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "split";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  if (align === "split") {
    return (
      <header
        className={`border-t border-[#24221f]/20 pt-7 ${className}`}
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#625c53]">
              {eyebrow}
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <h2 className="font-serif text-5xl leading-[0.98] tracking-[-0.035em] md:text-7xl">
              {title}
            </h2>

            {description && (
              <p className="mt-8 max-w-2xl text-base leading-8 text-[#686158] md:text-lg">
                {description}
              </p>
            )}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`max-w-4xl border-t border-[#24221f]/20 pt-7 ${className}`}
    >
      <p className="text-[10px] uppercase tracking-[0.35em] text-[#625c53]">
        {eyebrow}
      </p>

      <h2 className="mt-10 font-serif text-5xl leading-[0.98] tracking-[-0.035em] md:text-7xl">
        {title}
      </h2>

      {description && (
        <p className="mt-8 max-w-2xl text-base leading-8 text-[#686158] md:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}