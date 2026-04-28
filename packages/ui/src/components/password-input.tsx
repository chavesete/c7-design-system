import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

import { cn } from "../lib/cn";

export type PasswordInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
>;

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(({ className, ...props }, ref) => {
  const [show, setShow] = React.useState(false);

  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        className={cn(
          "flex h-9 w-full rounded-c7-md border border-c7-input bg-transparent px-3 py-1 pr-9 text-sm shadow-sm transition-colors placeholder:text-c7-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-c7-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
      <button
        type="button"
        tabIndex={-1}
        aria-label={show ? "Ocultar senha" : "Mostrar senha"}
        onClick={() => setShow((v) => !v)}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-c7-muted-foreground transition-colors hover:text-c7-foreground disabled:pointer-events-none"
        disabled={props.disabled}
      >
        {show ? <EyeOff size={15} /> : <Eye size={15} />}
      </button>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";
