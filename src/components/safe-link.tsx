"use client"

import Link, { LinkProps } from "next/link"
import { forwardRef, AnchorHTMLAttributes, ReactNode } from "react"
interface SafeLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">, LinkProps {
  children: ReactNode
}

export const SafeLink = forwardRef<HTMLAnchorElement, SafeLinkProps>(
  ({ children, ...props }, ref) => {
    return (
      <Link {...props} ref={ref}>
        {children}
      </Link>
    )
  }
)

SafeLink.displayName = "SafeLink"