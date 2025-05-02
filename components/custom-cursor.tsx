// "use client"

// import { useEffect, useState } from "react"

// export default function CustomCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 })
//   const [isHovering, setIsHovering] = useState(false)
//   const [splashes, setSplashes] = useState<{ id: number; x: number; y: number; color: string }[]>([])
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const updatePosition = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY })
//       setIsVisible(true)
//     }

//     const handleMouseEnter = () => {
//       setIsVisible(true)
//     }

//     const handleMouseLeave = () => {
//       setIsVisible(false)
//     }

//     const handleMouseDown = (e: MouseEvent) => {
//       // Create a paint splash effect on click
//       const colors = ["#ff6b6b", "#4ecdc4", "#ffe66d", "#ff9a8b", "#6cd4c5"]
//       const randomColor = colors[Math.floor(Math.random() * colors.length)]

//       setSplashes((prev) => [
//         ...prev,
//         {
//           id: Date.now(),
//           x: e.clientX,
//           y: e.clientY,
//           color: randomColor,
//         },
//       ])

//       // Remove splash after animation completes
//       setTimeout(() => {
//         setSplashes((prev) => prev.filter((splash) => splash.id !== Date.now()))
//       }, 1000)
//     }

//     const handleHoverChange = () => {
//       const hoveredElements = document.querySelectorAll("a, button, .hoverable")

//       hoveredElements.forEach((element) => {
//         element.addEventListener("mouseenter", () => setIsHovering(true))
//         element.addEventListener("mouseleave", () => setIsHovering(false))
//       })
//     }

//     window.addEventListener("mousemove", updatePosition)
//     window.addEventListener("mouseenter", handleMouseEnter)
//     window.addEventListener("mouseleave", handleMouseLeave)
//     window.addEventListener("mousedown", handleMouseDown)

//     // Set up hover detection after DOM is fully loaded
//     setTimeout(handleHoverChange, 1000)

//     return () => {
//       window.removeEventListener("mousemove", updatePosition)
//       window.removeEventListener("mouseenter", handleMouseEnter)
//       window.removeEventListener("mouseleave", handleMouseLeave)
//       window.removeEventListener("mousedown", handleMouseDown)
//     }
//   }, [])

//   if (!isVisible) return null

//   return (
//     <>
//       <div
//         className={`custom-cursor ${isHovering ? "hover" : ""}`}
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//         }}
//       />

//       {splashes.map((splash) => (
//         <div
//           key={splash.id}
//           className="paint-splash"
//           style={{
//             left: `${splash.x}px`,
//             top: `${splash.y}px`,
//             backgroundColor: splash.color,
//             width: "20px",
//             height: "20px",
//           }}
//         />
//       ))}
//     </>
//   )
// }


"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [hoverScale, setHoverScale] = useState(1)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleHoverChange = () => {
      const hoverables = document.querySelectorAll("a, button, .hoverable")

      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setIsHovering(true)

          // Custom scale for elements like nav links
          const hoverType = (el as HTMLElement).getAttribute("data-hover")
          if (hoverType === "small") {
            setHoverScale(1.5)
          } else {
            setHoverScale(2.5)
          }
        })

        el.addEventListener("mouseleave", () => {
          setIsHovering(false)
          setHoverScale(1)
        })
      })
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)

    setTimeout(handleHoverChange, 1000)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isHovering ? `${10 * hoverScale}px` : "16px",
        height: isHovering ? `${10 * hoverScale}px` : "16px",
        backgroundColor: isHovering ? "var(--accent)" : "var(--primary)",
      }}
    />
  )
}
