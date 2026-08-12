import { useT } from "@/lib/i18n";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  const t = useT();
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary">
      <div className="grid-tint absolute inset-0" aria-hidden="true" />
      <div className="section-shell relative py-16 sm:py-24">
        <div className="max-w-3xl rise-in">
          <span className="hairline-label">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            {eyebrow}
          </span>
          <h1 className="display-title mt-5 text-3xl text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
          <p className="mt-6 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
            {t(
              "ARJ Soap Detergent & Manufacturing — Sebeta, Ethiopia",
              "ARJ Soap Detergent & Manufacturing — ሰበታ, ኢትዮጵያ",
            )}
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
        <span className={centered ? "hairline-label justify-center" : "hairline-label"}>
          <span className="h-px w-10 bg-primary" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="display-title mt-4 text-2xl text-foreground sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
