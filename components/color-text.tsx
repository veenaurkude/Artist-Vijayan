"use client"

import type { ReactNode } from "react"

interface ColorTextProps {
  children: ReactNode
  className?: string
  animated?: boolean
}

export default function ColorText({ children, className = "", animated = false }: ColorTextProps) {
  return <span className={`text-gradient ${animated ? "animate-gradient" : ""} ${className}`}>{children}</span>
}
