"use client"

import Link from "next/link"
import { forwardRef } from "react"

interface SafeLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  [key: string]: any
}

export const SafeLink = forwardRef<HTMLAnchorElement, SafeLinkProps>(
  ({ href, children, className, onClick, ...props }, ref) => {
    return (
      <Link href={href} {...props}>
        <span 
          className={className}
          onClick={onClick}
          suppressHydrationWarning
        >
          {children}
        </span>
      </Link>
    )
  }
)

SafeLink.displayName = "SafeLink"
