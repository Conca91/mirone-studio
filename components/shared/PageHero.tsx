export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-[var(--color-background)] pt-36 sm:pt-44">
      <div className="site-container pb-20 sm:pb-28">
        <p className="eyebrow">{eyebrow}</p>

        <h1 className="mt-8 max-w-6xl font-serif text-[clamp(4rem,9vw,9rem)] leading-[.82] tracking-[-.065em]">
          {title}
        </h1>

        <p className="body-large mt-10 max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
}