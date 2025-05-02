"use client"

import { useEffect, useState } from "react"

interface ArtisticBackgroundProps {
  variant?: "home" | "gallery" | "about" | "contact"
}

export default function ArtisticBackground({ variant = "home" }: ArtisticBackgroundProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Different color schemes based on page variant
  const getColors = () => {
    switch (variant) {
      case "gallery":
        return ["#ff6347", "#5f9ea0", "#ffd700", "#9370db", "#20b2aa"]
      case "about":
        return ["#9370db", "#20b2aa", "#ff6347", "#ffd700", "#5f9ea0"]
      case "contact":
        return ["#5f9ea0", "#ff6347", "#20b2aa", "#9370db", "#ffd700"]
      default:
        return ["#ff6347", "#5f9ea0", "#ffd700", "#9370db", "#20b2aa"]
    }
  }

  const colors = getColors()

  return (
    <div className="artistic-bg">
      {/* Color blobs */}
      <div
        className="color-blob"
        style={{
          width: "600px",
          height: "600px",
          top: "-150px",
          right: "-100px",
          backgroundColor: colors[0],
          animationDelay: "0s",
        }}
      ></div>
      <div
        className="color-blob"
        style={{
          width: "700px",
          height: "700px",
          bottom: "-200px",
          left: "-200px",
          backgroundColor: colors[1],
          animationDelay: "-5s",
        }}
      ></div>
      <div
        className="color-blob"
        style={{
          width: "500px",
          height: "500px",
          top: "40%",
          left: "60%",
          backgroundColor: colors[2],
          animationDelay: "-10s",
        }}
      ></div>
      <div
        className="color-blob"
        style={{
          width: "400px",
          height: "400px",
          top: "20%",
          left: "20%",
          backgroundColor: colors[3],
          animationDelay: "-15s",
        }}
      ></div>
      <div
        className="color-blob"
        style={{
          width: "350px",
          height: "350px",
          bottom: "30%",
          right: "25%",
          backgroundColor: colors[4],
          animationDelay: "-8s",
        }}
      ></div>

      {/* Paint strokes */}
      <div
        className="paint-stroke"
        style={{
          width: "300px",
          top: "30%",
          right: "10%",
          backgroundColor: colors[0],
          transform: "rotate(45deg)",
          animationDelay: "-3s",
        }}
      ></div>
      <div
        className="paint-stroke"
        style={{
          width: "400px",
          bottom: "20%",
          left: "5%",
          backgroundColor: colors[2],
          transform: "rotate(-30deg)",
          animationDelay: "-8s",
        }}
      ></div>
      <div
        className="paint-stroke"
        style={{
          width: "250px",
          top: "15%",
          left: "40%",
          backgroundColor: colors[3],
          transform: "rotate(15deg)",
          animationDelay: "-12s",
        }}
      ></div>
      <div
        className="paint-stroke"
        style={{
          width: "200px",
          bottom: "40%",
          right: "30%",
          backgroundColor: colors[1],
          transform: "rotate(-15deg)",
          animationDelay: "-6s",
        }}
      ></div>
      <div
        className="paint-stroke"
        style={{
          width: "350px",
          top: "60%",
          left: "25%",
          backgroundColor: colors[4],
          transform: "rotate(60deg)",
          animationDelay: "-9s",
        }}
      ></div>

      {/* Add art texture overlay */}
      <div className="absolute inset-0 art-texture opacity-30"></div>
    </div>
  )
}
