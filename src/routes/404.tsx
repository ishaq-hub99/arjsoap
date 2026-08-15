import { Link, createFileRoute } from "@tanstack/react-router";

import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [
      { title: "Page not found | ARJ Soap Detergent & Manufacturing" },
      {
        name: "description",
        content:
          "The page you requested does not exist on the ARJ Soap Detergent & Manufacturing website.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Page not found | ARJ Soap Detergent & Manufacturing" },
      {
        property: "og:description",
        content: "The page you requested does not exist. Return to the ARJ home page.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://arj.et/404" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  const t = useT();

  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-20">
      <div className="max-w-md text-center">
        <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
          {t("Error 404", "ስህተት 404")}
        </p>
        <h1 className="display-title mt-4 text-4xl text-foreground sm:text-5xl">
          {t("Page not found", "ገጹ አልተገኘም")}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          {t(
            "The page you are looking for does not exist or has been moved.",
            "የሚፈልጉት ገጽ አይገኝም ወይም ተቀይሯል።",
          )}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            {t("Go to Home", "ወደ መጀመሪያ ገጽ")}
          </Link>
          <Link to="/contact" className="btn-outline">
            {t("Contact ARJ", "ኤ.አር.ጄን ያግኙ")}
          </Link>
        </div>
      </div>
    </section>
  );
}
