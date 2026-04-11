import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type PublicImageShape = "rounded" | "circle" | "none";

type PublicImageProps = ImageProps & {
  shape?: PublicImageShape;
};

// Images stored in public/images/ should render rounded by default unless a caller opts into a circle.
const LOCAL_IMAGE_PREFIX = "/images/";

function getImagePath(src: ImageProps["src"]): string | null {
  if (typeof src === "string") {
    return src;
  }

  if (typeof src === "object" && src !== null && "src" in src && typeof src.src === "string") {
    return src.src;
  }

  return null;
}

/**
 * Wrap Next.js Image with consistent shape styling for locally hosted portfolio assets.
 */
export function PublicImage({ src, alt, className, shape, ...props }: PublicImageProps) {
  const resolvedShape =
    shape ?? (getImagePath(src)?.startsWith(LOCAL_IMAGE_PREFIX) ? "rounded" : "none");

  return (
    <Image
      src={src}
      alt={alt}
      className={cn(
        className,
        resolvedShape === "rounded" && "rounded-lg",
        resolvedShape === "circle" && "rounded-full",
      )}
      {...props}
    />
  );
}
