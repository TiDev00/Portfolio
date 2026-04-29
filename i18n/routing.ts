import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  /** English gets no prefix (/), French gets /fr prefix */
  localePrefix: "as-needed",
});
