import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {year}{" "}
            <Link
              href="/"
              className="font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              TiDev00
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
