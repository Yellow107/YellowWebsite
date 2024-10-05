import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils"; // Assuming you have a utility function for classNames

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
  ref={ref}
  className={cn(
    "hidden",
    className
  )}
  {...props}
>
  {/* <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
    <Check className="h-full w-full" />
  </CheckboxPrimitive.Indicator> */}
</CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };


