import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils"; // Assuming you have a utility function for classNames

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef(({ className }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "hidden", // Hide default radio input
        className
      )}
      
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        {/* Add a visual indicator for selected radio option */}
        {/* <Circle className="h-2.5 w-2.5 fill-current text-current" /> */}
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
