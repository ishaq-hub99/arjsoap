import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import { PageHero, SectionHeading } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ARJ Soap Detergent & Manufacturing | Sebeta, Ethiopia" },
      {
        name: "description",
        content:
          "Contact ARJ Soap Detergent & Manufacturing in Sebeta, Ethiopia. Call +251 911 314 758 or +251 911 235 104 for AMARD and ADWA laundry soap enquiries.",
      },
      { property: "og:title", content: "Contact ARJ Soap Detergent & Manufacturing" },
      {
        property: "og:description",
        content: "Sebeta, Ethiopia. +251 911 314 758 / +251 911 235 104.",
      },
    ],
  }),
  component: Contact,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30, "Phone is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Please write a short message")
    .max(1000, "Message is too long"),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

function Contact() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const result = contactSchema.safeParse({
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
    });

    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in touch with ARJ"
        description="For orders, distribution or product enquiries about AMARD and ADWA laundry soap, contact our team in Sebeta, Ethiopia."
      />

      <section className="py-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionHeading eyebrow="Company Details" title="ARJ Soap Detergent &amp; Manufacturing" />
            <ul className="mt-8 space-y-5">
              <li className="surface-card flex items-start gap-3 p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                    Location
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">Sebeta, Ethiopia</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Amard Soap Manufacture — see the map below for the exact factory location.
                  </p>

                </div>
              </li>
              <li className="surface-card flex items-start gap-3 p-5">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                    Phone
                  </h3>
                  <a
                    href="tel:+251911314758"
                    className="mt-1 block text-sm font-semibold text-foreground hover:text-primary"
                  >
                    +251 911 314 758
                  </a>
                  <a
                    href="tel:+251911235104"
                    className="block text-sm font-semibold text-foreground hover:text-primary"
                  >
                    +251 911 235 104
                  </a>
                </div>
              </li>
              <li className="surface-card flex items-start gap-3 p-5">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                    Email
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Email address — placeholder, to be added by ARJ.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="surface-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-foreground">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill in the form and our team will get back to you.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
              {(
                [
                  { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
                  { name: "phone", label: "Phone", type: "tel", placeholder: "+251 ..." },
                  { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
                ] as const
              ).map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-xs font-bold uppercase tracking-wider text-foreground"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    maxLength={255}
                    className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                  {errors[field.name] ? (
                    <p className="mt-1.5 text-xs font-semibold text-destructive">
                      {errors[field.name]}
                    </p>
                  ) : null}
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1000}
                  placeholder="How can we help you?"
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
                {errors.message ? (
                  <p className="mt-1.5 text-xs font-semibold text-destructive">{errors.message}</p>
                ) : null}
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                Send Message
              </button>
              {submitted ? (
                <p className="rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground">
                  Thank you — your message has been recorded. Please also call us on the numbers
                  listed if your enquiry is urgent.
                </p>
              ) : null}
              <p className="text-xs text-muted-foreground">
                Note: message delivery to an ARJ inbox can be connected later.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Find Us"
            title="Amard Soap Manufacture, Sebeta"
            description="Our factory is located in Sebeta, Ethiopia. Use the map below for directions to the plant."
          />
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="Map of Amard Soap Manufacture, Sebeta, Ethiopia"
              src="https://www.openstreetmap.org/export/embed.html?bbox=38.6405%2C8.9346%2C38.6605%2C8.9446&layer=mapnik&marker=8.9396372%2C38.6504701"
              loading="lazy"
              className="h-[380px] w-full border-0 sm:h-[460px]"
            />
          </div>
          <a
            href="https://maps.app.goo.gl/bLUKvSUnSMHZJKo29"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Get directions on Google Maps
          </a>
        </div>
      </section>

    </>
  );
}
