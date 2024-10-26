export type Locale = "th" | "en" | "ja" | "zh";
export const defaultLocale: Locale = (process.env.DEFAULT_LANGUAGE as Locale) ?? "en";
