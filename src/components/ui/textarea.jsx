import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-[50px] w-full rounded-md bg-white px-3 pb-2 font-normal text-[1.2vw] mobile:text-[4vw] ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-none  disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
