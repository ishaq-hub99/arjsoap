export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="section-shell py-14 sm:py-20">
        <div className="max-w-3xl rise-in">
          <span className="eyebrow">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            {eyebrow}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <span className="eyebrow">
          <span className="h-px w-8 bg-primary" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-3 text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
