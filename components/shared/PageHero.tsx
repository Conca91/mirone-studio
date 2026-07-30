type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="site-container">
        <div className="page-hero-content">
          <p className="eyebrow">{eyebrow}</p>

          <h1 className="page-hero-title">{title}</h1>

          <p className="page-hero-description">{description}</p>
        </div>
      </div>
    </section>
  );
}