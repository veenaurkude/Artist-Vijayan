"use client"

import type { ReactNode } from "react"
import Link from "next/link"

interface ElegantButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline" | "artistic"
  className?: string
}

export default function ElegantButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ElegantButtonProps) {
  const getButtonClass = () => {
    switch (variant) {
      case "primary":
        return "btn-artistic"
      case "secondary":
        return "btn-elegant"
      case "outline":
        return "btn-elegant border-2 border-primary bg-transparent text-primary hover:text-white"
      case "artistic":
        return "btn-artistic bg-gradient-to-r from-primary to-secondary"
      default:
        return "btn-artistic"
    }
  }

  const buttonClass = `${getButtonClass()} ${className}`

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  )
}
