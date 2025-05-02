"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ParallaxEffectProps {
  children: ReactNode
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export default function ParallaxEffect({
  children,
  speed = 0.1,
  direction = "up",
  className = "",
}: ParallaxEffectProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const scrollY = window.scrollY
      const element = elementRef.current
      const elementPosition = element.getBoundingClientRect().top + scrollY
      const offset = (scrollY - elementPosition) * speed

      let transform = ""
      switch (direction) {
        case "up":
          transform = `translateY(-${offset}px)`
          break
        case "down":
          transform = `translateY(${offset}px)`
          break
        case "left":
          transform = `translateX(-${offset}px)`
          break
        case "right":
          transform = `translateX(${offset}px)`
          break
      }

      element.style.transform = transform
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, direction])

  return (
    <div ref={elementRef} className={`parallax-element ${className}`}>
      {children}
    </div>
  )
}
