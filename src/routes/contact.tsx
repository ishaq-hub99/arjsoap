import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { LocalizedHead, useCopy, type Lang } from "@/lib/i18n";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

type FieldErrors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

const FORMSPREE_ENDPOINT = "https://formspree.io/f/moealbog";

const phones = [
  { display: "+251 911 314 758", href: "tel:+251911314758" },
  { display: "+251 911 235 104", href: "tel:+251911235104" },
]; const whatsappHref = "https://wa.me/251911314758";

const copy = {
  en: {
    head: {
      title: "Contact ARJ Soap Detergent & Manufacturing | Sebeta, Ethiopia",
      description:
        "Contact ARJ Soap Detergent & Manufacturing in Sebeta, Ethiopia. Call +251 911 314 758 or +251 911 235 104 for AMARD and ADWA laundry soap enquiries.",
    },
    hero: {
      eyebrow: "Contact Us",
      title: "Get in touch with ARJ",
      description:
        "For orders, distribution or product enquiries about AMARD and ADWA laundry soap, contact our team in Sebeta, Ethiopia.",
    },
    details: {
      eyebrow: "Company Details",
      title: "ARJ Soap, Detergent & Manufacturing",
      location: { label: "Location", value: "Sebeta, Ethiopia", helper: "See the map below for the facility location." },
      phone: { label: "Phone" },
      email: { label: "Email", value: "Email address to be added by ARJ." },
    },
    form: {
      title: "Send us a message",
      subtitle: "Fill in the form and our team will get back to you.",
      fields: {
        name: { label: "Full Name", placeholder: "Your full name" },
        phone: { label: "Phone Number", placeholder: "+251 ..." },
        email: { label: "Email", placeholder: "you@example.com" },
        message: { label: "Message", placeholder: "How can we help you?" },
      },
      submit: "Send Message",
      submitting: "Sending...",
      success:
        "Thank you — your message has been sent. Please also call us on the numbers listed if your enquiry is urgent.",
      failure:
        "Sorry, your message could not be sent. Please try again or call us on the numbers listed.",
      errors: {
        nameMin: "Please enter your full name",
        nameMax: "Name is too long",
        phoneMin: "Please enter a valid phone number",
        phoneMax: "Phone is too long",
        emailInvalid: "Please enter a valid email address",
        emailMax: "Email is too long",
        messageMin: "Please write a longer message",
        messageMax: "Message is too long",
      },
    },
    map: {
      eyebrow: "Find Us",
      title: "ARJ Soap, Detergent & Manufacturing",
      description: "Sebeta, Ethiopia. Use the map below for directions to our facility.",
      iframeTitle: "Map of ARJ Soap Detergent & Manufacturing, Sebeta, Ethiopia",
      directions: "Get directions on Google Maps",
    },
  },
  am: {
    head: {
      title: "ኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻን ያግኙ | ሰበታ፣ ኢትዮጵያ",
      description:
        "ኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻን በሰበታ፣ ኢትዮጵያ ያግኙ። ስለ አማርድ እና አድዋ የልብስ ሳሙና ጥያቄዎች በ+251 911 314 758 ወይም +251 911 235 104 ይደውሉልን።",
    },
    hero: {
      eyebrow: "አግኙን",
      title: "ከኤ.አር.ጄ ጋር ይገናኙ",
      description:
        "ስለ ትዕዛዝ፣ ስርጭት ወይም ስለ አማርድ እና አድዋ የልብስ ሳሙና ማንኛውም ጥያቄ ካለዎት፣ በሰበታ፣ ኢትዮጵያ የሚገኘውን ቡድናችንን ያነጋግሩ።",
    },
    details: {
      eyebrow: "የድርጅት መረጃ",
      title: "ኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻ",
      location: { label: "አድራሻ", value: "ሰበታ፣ ኢትዮጵያ", helper: "የፋብሪካውን አድራሻ ከዚህ በታች ባለው ካርታ ላይ ይመልከቱ።" },
      phone: { label: "ስልክ" },
      email: { label: "ኢሜይል", value: "የኢሜይል አድራሻ በኤ.አር.ጄ በቅርቡ ይታከላል።" },
    },
    form: {
      title: "መልዕክት ይላኩልን",
      subtitle: "ቅጹን ይሙሉ፤ ቡድናችን በቅርቡ ምላሽ ይሰጥዎታል።",
      fields: {
        name: { label: "ሙሉ ስም", placeholder: "ሙሉ ስምዎን ያስገቡ" },
        phone: { label: "ስልክ ቁጥር", placeholder: "+251 ..." },
        email: { label: "ኢሜይል", placeholder: "you@example.com" },
        message: { label: "መልዕክት", placeholder: "እንዴት ልንረዳዎት እንችላለን?" },
      },
      submit: "መልዕክት ላክ",
      submitting: "በመላክ ላይ...",
      success:
        "እናመሰግናለን! መልዕክትዎ ደርሶናል። ጉዳዩ አስቸኳይ ከሆነ እባክዎ ከላይ በተጠቀሱት ስልክ ቁጥሮች ደውለው ያነጋግሩን።",
      failure:
        "ይቅርታ፣ መልዕክትዎ አልተላከም። እባክዎ እንደገና ይሞክሩ ወይም ከላይ በተጠቀሱት ስልክ ቁጥሮች ደውለው ያነጋግሩን።",
      errors: {
        nameMin: "እባክዎ ሙሉ ስምዎን ያስገቡ",
        nameMax: "ስሙ በጣም ረዥም ነው",
        phoneMin: "እባክዎ ትክክለኛ ስልክ ቁጥር ያስገቡ",
        phoneMax: "ስልክ ቁጥሩ በጣም ረዥም ነው",
        emailInvalid: "እባክዎ ትክክለኛ ኢሜይል አድራሻ ያስገቡ",
        emailMax: "ኢሜይል አድራሻው በጣም ረዥም ነው",
        messageMin: "እባክዎ አጭር መልዕክት ይጻፉ",
        messageMax: "መልዕክቱ በጣም ረዥም ነው",
      },
    },
    map: {
      eyebrow: "ያግኙን",
      title: "ኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻ",
      description: "ሰበታ፣ ኢትዮጵያ። ወደ ፋብሪካችን የሚያደርስዎትን አቅጣጫ ከዚህ በታች ባለው ካርታ ላይ ይመልከቱ።",
      iframeTitle: "የኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻ ካርታ፣ ሰበታ፣ ኢትዮጵያ",
      directions: "በGoogle Maps አቅጣጫ ያግኙ",
    },
  },
} satisfies Record<Lang, unknown>;

function Contact() {
  const c = useCopy(copy);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const contactSchema = z.object({
    name: z.string().trim().min(2, c.form.errors.nameMin).max(100, c.form.errors.nameMax),
    phone: z.string().trim().min(7, c.form.errors.phoneMin).max(30, c.form.errors.phoneMax),
    email: z.string().trim().email(c.form.errors.emailInvalid).max(255, c.form.errors.emailMax),
    message: z.string().trim().min(10, c.form.errors.messageMin).max(1000, c.form.errors.messageMax),
    enquiryType: z.string(),
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const form = new FormData(formEl);
    const result = contactSchema.safeParse({
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
      enquiryType: String(form.get("enquiryType") ?? "General enquiry"),
    });

    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new URLSearchParams({
          name: result.data.name,
          phone: result.data.phone,
          email: result.data.email,
          subject: `Website enquiry from ${result.data.name}`,
          message: result.data.message,
          enquiryType: result.data.enquiryType,
        }),
      });

      if (!response.ok) throw new Error("Formspree submission failed");

      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
    }
  }

  const fields = [
    { name: "name" as const, type: "text", ...c.form.fields.name },
    { name: "phone" as const, type: "tel", ...c.form.fields.phone },
    { name: "email" as const, type: "email", ...c.form.fields.email },
  ];

  return (
    <>
      <LocalizedHead title={{ en: copy.en.head.title, am: copy.am.head.title }} description={{ en: copy.en.head.description, am: copy.am.head.description }} />
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} description={c.hero.description} />

      <section className="py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionHeading eyebrow={c.details.eyebrow} title={c.details.title} />
            <ul className="mt-10 space-y-5">
              <li className="surface-card flex items-start gap-3.5 p-6">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-foreground">
                    {c.details.location.label}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.details.location.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.details.location.helper}</p>
                </div>
              </li>
              <li className="surface-card flex items-start gap-3.5 p-6">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-foreground">
                    {c.details.phone.label}
                  </h3>
                  <div className="mt-2 flex flex-col gap-1.5">
                    {phones.map((p) => (
                      <a
                        key={p.href}
                        href={p.href}
                        className="text-sm font-bold text-foreground transition-colors hover:text-primary"
                      >
                        {p.display}
                      </a>
                    ))}  
                    <div className="mt-4 flex flex-wrap gap-3">
  <a
    href={whatsappHref}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contact ARJ on WhatsApp"
    className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
  >
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.07 0C5.55 0 .24 5.31.24 11.83c0 2.08.54 4.11 1.57 5.9L.15 24l6.43-1.69a11.8 11.8 0 0 0 5.49 1.35h.01c6.52 0 11.83-5.31 11.83-11.83 0-3.16-1.23-6.13-3.39-8.35ZM12.08 21.65h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.82 1 1.02-3.72-.23-.38a9.8 9.8 0 1 1 8.4 4.68Zm5.38-7.35c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.21-.45-2.31-1.43-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.02c.15.2 2.06 3.14 4.99 4.4.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.11.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34Z" />
    </svg>
    WhatsApp
  </a>

  <a
    href="https://t.me/ARJ2014"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contact ARJ on Telegram"
    className="inline-flex items-center gap-2 rounded-md bg-[#229ED9] px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
  >
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.5 3.5 2.7 10.75c-.95.38-.94.91-.17 1.15l4.82 1.5 1.85 5.75c.22.61.11.86.74.86.49 0 .7-.22.97-.48l2.34-2.27 4.87 3.6c.89.49 1.53.23 1.75-.83l3.13-14.76c.32-1.3-.5-1.89-1.5-1.27ZM8.1 13.07l10.82-6.82c.54-.33 1.03-.15.63.21l-8.92 8.05-.35 3.76-1.75-5.2-.43-.13Z" />
    </svg>
    Telegram
  </a>
</div>
                  </div>
                </div>
              </li>
              <li className="surface-card flex items-start gap-3.5 p-6">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-foreground">
                    {c.details.email.label}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.details.email.value}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="surface-card p-7 sm:p-9">
            <h2 className="display-title text-xl text-foreground">{c.form.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{c.form.subtitle}</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
              {fields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-foreground"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    maxLength={255}
                    className="mt-2.5 w-full rounded-md border border-input bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                  {errors[field.name] ? (
                    <p className="mt-1.5 text-xs font-semibold text-destructive">{errors[field.name]}</p>
                  ) : null}
                </div>
              ))}

              <div>
  <label
    htmlFor="enquiryType"
    className="block text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-foreground"
  >
    Enquiry Type
  </label>

  <select
    id="enquiryType"
    name="enquiryType"
    defaultValue="General enquiry"
    className="mt-2.5 w-full rounded-md border border-input bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
  >
    <option value="General enquiry">General enquiry</option>
    <option value="Product / Order enquiry">Product / Order enquiry</option>
    <option value="Become a distributor">Become a distributor</option>
    <option value="Other">Other</option>
  </select>
</div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-foreground"
                >
                  {c.form.fields.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1000}
                  placeholder={c.form.fields.message.placeholder}
                  className="mt-2.5 w-full rounded-md border border-input bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
                {errors.message ? (
                  <p className="mt-1.5 text-xs font-semibold text-destructive">{errors.message}</p>
                ) : null}
              </div>
              <button
                type="submit"
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                disabled={status === "sending"}
              >
                {status === "sending" ? c.form.submitting : c.form.submit}
              </button>
              {status === "success" ? (
                <p
                  role="status"
                  className="rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
                >
                  {c.form.success}
                </p>
              ) : null}
              {status === "error" ? (
                <p
                  role="alert"
                  className="rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm font-semibold text-destructive"
                >
                  {c.form.failure}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow={c.map.eyebrow} title={c.map.title} description={c.map.description} />
          <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title={c.map.iframeTitle}
              src="https://www.openstreetmap.org/export/embed.html?bbox=38.6405%2C8.9346%2C38.6605%2C8.9446&layer=mapnik&marker=8.9396372%2C38.6504701"
              loading="lazy"
              className="h-[380px] w-full border-0 sm:h-[460px]"
            />
          </div>
          <a
            href="https://maps.app.goo.gl/bLUKvSUnSMHZJKo29"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8"
          >
            {c.map.directions}
          </a>
        </div>
      </section>
    </>
  );
}
