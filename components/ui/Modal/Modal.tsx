"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  /** If provided, renders a trigger element that opens the modal. */
  trigger?: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export function Modal({
  trigger,
  title,
  description,
  children,
  open,
  onOpenChange,
  className,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}

      <Dialog.Portal>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <Dialog.Overlay className="absolute inset-0 bg-black/50 backdrop-blur-sm data-[state=open]:animate-fade-in" />
          <Dialog.Content
            className={cn(
              "relative z-50 w-full max-w-lg",
              "rounded-xl bg-card border border-border p-6 shadow-xl",
              "data-[state=open]:animate-fade-up focus-visible:outline-none",
              className,
            )}
            aria-describedby={description ? "modal-description" : undefined}
          >
            <div className="flex items-start justify-between gap-4">
              <Dialog.Title className="text-xl font-semibold text-card-foreground">
                {title}
              </Dialog.Title>
              <Dialog.Close
                className="rounded p-1 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Close dialog"
              >
                <X className="size-5" aria-hidden="true" />
              </Dialog.Close>
            </div>

            {description && (
              <Dialog.Description
                id="modal-description"
                className="mt-1 text-sm text-muted-foreground"
              >
                {description}
              </Dialog.Description>
            )}

            <div className="mt-4">{children}</div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
