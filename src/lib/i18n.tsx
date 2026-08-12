import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "am";

const STORAGE_KEY = "arj-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore the stored choice after hydration (English stays the default).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "am" || stored === "en") setLangState(stored);
    } catch {
      /* storage unavailable — keep default */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

/** Pick the copy object for the active language. */
export function useCopy<T>(copy: Record<Lang, T>): T {
  const { lang } = useLang();
  return copy[lang];
}

/** Inline two-language string helper: t("English", "አማርኛ"). */
export function useT() {
  const { lang } = useLang();
  return useCallback((en: string, am: string) => (lang === "am" ? am : en), [lang]);
}

/** Client-side localized <title> / description, layered over the route head(). */
export function LocalizedHead({
  title,
  description,
}: {
  title: Record<Lang, string>;
  description?: Record<Lang, string>;
}) {
  const { lang } = useLang();

  useEffect(() => {
    if (lang === "en") return;
    const previousTitle = document.title;
    document.title = title[lang];
    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = metaDescription?.content;
    if (metaDescription && description) metaDescription.content = description[lang];

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription !== undefined) {
        metaDescription.content = previousDescription;
      }
    };
  }, [lang, title, description]);

  return null;
}
