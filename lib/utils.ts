import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ThemeValue, ThemeVariant } from "./types";

/** Merge Tailwind classes safely — deduplicate conflicting utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format an ISO date string to a human-readable month/year. */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function isThemeVariant<T>(value: ThemeValue<T>): value is ThemeVariant<T> {
  return typeof value === "object" && value !== null && "light" in value && "dark" in value;
}

export function toThemeVariant<T>(value: ThemeValue<T>): ThemeVariant<T> {
  return isThemeVariant(value) ? value : { light: value, dark: value };
}
