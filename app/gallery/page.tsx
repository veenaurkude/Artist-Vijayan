"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import ScrollReveal from "@/components/scroll-reveal"
import ArtisticBackground from "@/components/artistic-background"
import ParallaxEffect from "@/components/parallax-effect"
import AnimatedSketch from "@/components/animated-sketch"
import ColorText from "@/components/color-text"
import ElegantButton from "@/components/elegant-button"
import styles from "./gallery.module.css"

// import img
import img1 from "../../public/assets/images/img1.jpg";
import img2 from "../../public/assets/images/img2.jpg";
import img3 from "../../public/assets/images/img3.jpg";
import img4 from "../../public/assets/images/img4.jpg";
import img5 from "../../public/assets/images/img5.jpg";
import img6 from "../../public/assets/images/img6.jpg";
import img7 from "../../public/assets/images/img7.jpg";
import img8 from "../../public/assets/images/img8.jpg";
import img9 from "../../public/assets/images/img9.jpg";
import img10 from "../../public/assets/images/img10.jpg";
import img11 from "../../public/assets/images/img11.jpg";
import img12 from "../../public/assets/images/img12.jpg";
import img13 from "../../public/assets/images/img13.jpg";
import img14 from "../../public/assets/images/img14.jpg";

// Sample artwork data - all sketch art
const artworks = [
  { id: 1, title: "Pencil Sketch", medium: "Pencil", year: 2023, image: img1 },
  { id: 2, title: "Portrait Study", medium: "Pencil", year: 2022, image: img2  },
  { id: 3, title: "Sketch Lines", medium: "Pencil", year: 2023, image: img3 },
  { id: 4, title: "Architectural Detail", medium: "Pencil", year: 2021, image: img4 },
  { id: 5, title: "Figure Drawing", medium: "Pencil", year: 2022, image: img5 },
  { id: 6, title: "Portrait Study", medium: "Pencil", year: 2023, image: img6 },
  { id: 7, title: "Sketch Lines", medium: "Pencil", year: 2022, image: img7 },
  { id: 8, title: "Pencil Sketch", medium: "Pencil", year: 2021, image: img8 },
  { id: 9, title: "Emotional Expression", medium: "Pencil", year: 2023, image: img9 },
  { id: 10, title: "Gesture Drawing", medium: "Pencil", year: 2022, image: img10 },
  { id: 11, title: "Portrait Sketch", medium: "Pencil", year: 2023, image: img11 },
  { id: 12, title: "Sketch Study", medium: "Pencil", year: 2021, image: img12 },
  { id: 13, title: "Street Scene", medium: "Pencil", year: 2021, image: img13 },
  { id: 14, title: "Pencil Sketch", medium: "Pencil", year: 2021, image: img14 },
]

export default function GalleryPage() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <div className="pt-16"> 
    
      <ArtisticBackground variant="gallery" />

      {/* Gallery Header */}
      <section 
      className={`${styles.galleryHeader} bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: 'url(/assets/bg/paint-brush.jpg)' }}
      >
        <div className="container mx-auto px-4 py-4 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-elegant">
              Sketch <ColorText>Gallery</ColorText>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore a collection of original sketch artworks showcasing various techniques and subjects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 relative bg-pattern-2">
        <div className="absolute inset-0 opacity-10">
          <AnimatedSketch />
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {artworks.map((artwork, index) => (
              <ScrollReveal key={artwork.id} delay={(index % 3) * 150}>
                <ParallaxEffect speed={0.03} direction={index % 2 === 0 ? "up" : "down"}>
                  <div
                    className={`${styles.artworkCard} gallery-item hoverable elegant-card caption-container`}
                    onMouseEnter={() => setHoveredItem(artwork.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="relative aspect-square overflow-hidden zoom-effect bg-white border-none">
                      <Image
                        src={artwork.image ?? "/placeholder.jpg"}
                        alt={artwork.title}
                        fill
                        className="object-contain transition-transform duration-500 artistic-filter"
                      />
                      {/* <div className={`${styles.artworkOverlay} ${hoveredItem === artwork.id ? "opacity-100" : ""}`}>
                        <ElegantButton href={`/gallery/artwork-${artwork.id}`} variant="artistic" className="z-10">
                          View Details
                        </ElegantButton>
                      </div> */}
                      <div className="caption-elegant ">
                        <h3 className="text-lg font-bold text-center">{artwork.title}</h3>
                        <p className="text-sm opacity-80">
                          {artwork.medium}, {artwork.year}
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-1 artistic-underline">{artwork.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <span>{artwork.medium}</span>
                        <span className="mx-2">•</span>
                        <span>{artwork.year}</span>
                      </div>
                    </div>
                  </div>
                </ParallaxEffect>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Art Process Section */}
      <section className="py-16 relative overflow-hidden gradient-bg-3">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center text-shadow-elegant">
              The Sketching <ColorText>Process</ColorText>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Inspiration",
                description: "Every sketch begins with inspiration - from nature, people, architecture, or emotions.",
                color: "var(--primary)",
              },
              {
                step: "02",
                title: "Composition",
                description: "Carefully planning the layout and structure to create a balanced and engaging piece.",
                color: "var(--secondary)",
              },
              {
                step: "03",
                title: "Execution",
                description: "Bringing the vision to life through various sketching techniques and materials.",
                color: "var(--tertiary)",
              },
            ].map((process, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div
                  className={`${styles.processCard} floating-element elegant-card`}
                  style={{ animationDelay: `${index * -2}s` }}
                >
                  <div className={styles.processStep} style={{ color: process.color }}>
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
