"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "flex flex-wrap shrink-0 gap-1 p-1 xl:gap-2 xl:p-2 xl:flex-col w-full xl:w-[25%] items-center justify-center rounded-xl bg-slate-dark shadow-2xl",
      className
    )}
    {...props} />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-[8px] py-2 xl:py-4 text-md md:text-lg lg:text-xl hover:bg-white/[0.1] font-medium xl:font-semibold xl:text-2xl ring-offset-white transition-all focus-visible:outline-none w-[calc(50%-2px)] md:w-[calc(25%-4px)] xl:w-full focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-accent hover:data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:shadow-sm",
      className
    )}
    {...props} />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 xl:mt-0 ring-offset-white rounded-xl focus-visible:outline-none py-5 md:py-6 md:px-4 lg:py-7 lg:px-5 px-3 focus-visible:ring-2 focus-visible:ring-slate focus-visible:ring-offset-2 bg-slate-dark text-xs md:text-sm lg:text-md grow h-[85vh] xl:h-[35rem] overflow-scroll overflow-x-auto overflow-y-auto scrollbar-thumb-accent/[0.5] shadow-2xl scrollbar-track-transparent scrollbar-thin",
      className
    )}
    {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
