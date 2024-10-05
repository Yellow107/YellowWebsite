import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center relative z-[4] mobile:items-start justify-between py-4 font-medium transition-all [&[data-state=open]>.icon-container>.icon]:rotate-[90deg] [&[data-state=open]>.icon-container>.icon>.minus]:rotate-90 [&[data-state=open]>.icon-container>.icon]:bg-body [&[data-state=open]>.icon-container>.icon]:text-white mobile:[&[data-state=open]>.icon-container>.icon]:rotate-[90deg] mobile:[&[data-state=open]>.icon-container>.icon>.minus]:rotate-90 mobile:[&[data-state=open]>.icon-container>.icon]:bg-body mobile:[&[data-state=open]>.icon-container>.icon]:text-white ",
        className
      )}
      {...props}>
      {children}
      <div className=" flex justify-end icon-container items-end relative z-[2]">
      <span className="icon h-[4vw] w-[4vw] border border-body rounded-full relative flex items-center justify-center text-body duration-500 ease-out mobile:w-[15vw] mobile:h-[15vw] tablet:w-[8vw] tablet:h-[8vw]">
        <span className="minus w-[1.5vw] bg-current h-[2px] absolute duration-500 ease-out mobile:w-[5vw] tablet:w-[3.5vw]"/>
        <span className="w-[1.5vw] bg-current h-[2px] absolute rotate-90 mobile:w-[5vw] tablet:w-[3.5vw]"/>
      </span>

      </div>
      
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-4 pt-[0]", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
