import { ComponentPropsWithoutRef, ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-3xl",
      "bg-slate-900 border border-slate-800",
      "transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:border-slate-700 hover:-translate-y-1",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="p-6 flex flex-col h-full">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-3 transition-all duration-300 group-hover:-translate-y-4">
        <div className="w-14 h-14 rounded-2xl bg-slate-800 group-hover:bg-primary-500 transition-colors duration-500 flex items-center justify-center">
          <Icon className="h-7 w-7 text-white transition-all duration-300 ease-in-out" />
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-slate-400 leading-relaxed">{description}</p>
      </div>

      <div className="mt-auto pt-6 transition-all duration-300 group-hover:-translate-y-4">
        <Button
          variant="link"
          asChild
          size="sm"
          className="p-0 text-primary-500 hover:text-primary-400 font-semibold"
        >
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </div>

    <div className="pointer-events-none absolute inset-0 rounded-3xl transform-gpu transition-all duration-300 group-hover:bg-primary-500/5" />
  </div>
)

export { BentoCard, BentoGrid }
