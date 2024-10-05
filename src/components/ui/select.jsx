/* eslint-disable no-unused-vars */
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "w-full flex justify-between select-input focus-visible:outline-none focus-visible:ring-none mobile:text-[3.5vw] tablet:text-[2.5vw] pb-[0.3vw]", // Removed -b
    )}
    {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-[1.5vw] w-[1.5vw] opacity-100 mobile:w-[5.5vw] mobile:h-[5.5vw] tablet:w-[2vw] tablet:h-[2vw]" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1 focus-visible:outline-none focus-visible:ring-none", className)}
    {...props}>
    <ChevronUp className="h-[1.5vw] w-[1.5vw] mobile:w-[5.5vw] mobile:h-[5.5vw] tablet:w-[2vw] tablet:h-[2vw]" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1 mobile:text-[3.5vw] focus-visible:outline-none focus-visible:ring-none", className)}
    {...props}>
    <ChevronDown className="h-[1.5vw] w-[1.5vw] mobile:w-[5.5vw] mobile:h-[5.5vw] tablet:w-[2vw] tablet:h-[2vw]" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-black/20 bg-white text-[1.5vw] mobile:text-[3.5vw] text-black shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 focus-visible:outline-none focus-visible:ring-none",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}>
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn("p-1 pb-[2vw] pt-[1vw] mobile:text-[3.5vw]", position === "popper" &&
          "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] focus-visible:outline-none focus-visible:ring-none")}>
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 font-semibold text-[1.2vw] mobile:text-[4vw] mobile:pl-2 tablet:text-[2vw] tablet:pl-4", className)}
    {...props} />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <div className="px-[2vw]">
    <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm text-[1.1vw] mobile:text-[3.5vw] tablet:text-[2vw] border-b border-black border-opacity-20 py-1.5 pr-2  outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus-visible:outline-none focus-visible:ring-none",
      className
    )}
    {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center mobile:right-2 mobile:left-auto tablet:left-auto tablet:right-2">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-[1.5vw] w-[1.5vw] mobile:w-[5.5vw] mobile:h-[5.5vw] tablet:w-[2vw] tablet:h-[2vw]" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>

  </div>
  
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", className)}
    {...props} />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
