"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Palette, Brush, ImageIcon } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import ArtisticBackground from "@/components/artistic-background"
import ParallaxEffect from "@/components/parallax-effect"
import AnimatedSketch from "@/components/animated-sketch"
import ColorText from "@/components/color-text"
import ElegantButton from "@/components/elegant-button"
import styles from "./page.module.css"

// import img
import about from "../public/assets/images/artist.jpg";
import img15 from "../public/assets/images/img15.jpg";
import img16 from "../public/assets/images/img16.jpg";
import img17 from "../public/assets/images/img17.jpg";

export default function Home() {

  const images = [img15, img16, img17]; // Declare a constant array
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={`${styles.homePage} `}>
      <ArtisticBackground variant="home" />

      {/* Hero Section */}
      {/* <section className={styles.heroSection}>
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center relative">
          <div className="absolute inset-0 overflow-hidden">
            <AnimatedSketch />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-elegant">
              <span className="brush-stroke">Artistic</span> Vision <ColorText>Brought to Life</ColorText>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-muted-foreground">
              Exploring the boundaries of imagination through vibrant colors and expressive strokes
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <ElegantButton href="/gallery" variant="artistic" className="hoverable">
                Explore Gallery
                <ArrowRight className="ml-2 h-5 w-5" />
              </ElegantButton>
              <ElegantButton href="/contact" variant="outline" className="hoverable">
                Get in Touch
              </ElegantButton>
            </div>
          </motion.div>
        </div>

        <div className="wave-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section> */}

<section className={styles.heroSection}>
  <div className="container mx-auto px-4 py-28 md:py-40 text-center relative overflow-hidden gradient-bg-2">
    
    {/* Background */}
    <div className="absolute inset-0 z-0 bg-[url('/assets/bg/paint.jpg')] bg-cover bg-center mix-blend-soft-light opacity-60"></div>
    <AnimatedSketch />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="relative z-10"
    >
      <h1 className="font-cormorant text-6xl md:text-8xl font-bold leading-tight text-shadow-elegant">
        {/* <span className="text-primary brush-stroke">Artistic</span> Vision
        <br />
        <span className="gradient-text">Brought to Life</span> */}
        <span className="brush-stroke">Artistic</span> Vision
        <br /> <ColorText>Brought to Life</ColorText>
      </h1>
      <p className="text-xl md:text-2xl mt-6 mb-10 text-muted-foreground max-w-2xl mx-auto">
        Exploring the boundaries of imagination through vibrant colors and expressive strokes.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <ElegantButton href="/gallery" variant="artistic" className="hoverable">
          Explore Gallery <ArrowRight className="ml-2 h-5 w-5" />
        </ElegantButton>
        <ElegantButton href="/contact" variant="outline" className="hoverable">
          Get in Touch
        </ElegantButton>
      </div>
    </motion.div>

    {/* Optional SVG wave divider */}
    <div className="wave-divider">...</div>
  </div>
</section>


      {/* Featured Works */}
      <section className="py-20 relative overflow-hidden bg-pattern-1">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-shadow-elegant">
              Featured <ColorText>Artworks</ColorText>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <ScrollReveal key={item} delay={(item - 1) * 200}>
                <ParallaxEffect speed={0.05} direction={item % 2 === 0 ? "up" : "down"}>
                  <div className={`${styles.artworkCard} gallery-item hoverable elegant-card`}>
                    <div className="max-w-[350px] w-full mx-auto">
                    <div className="relative aspect-square overflow-hidden rounded-lg zoom-effect">
                      <Image
                        // src={`img15 ${item}`}
                        src={images[item - 1]}
                        alt={`Featured Artwork ${item}`}
                        fill
                        className="object-cover artistic-filter"
                      />
                      <div className="overlay-elegant absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2 artistic-underline center">Artwork {item}</h3>
                      <p className="text-muted-foreground mb-4">Pencil on paper, 2023</p>
                      {/* <Link href={`/gallery/artwork-${item}`} className={`${styles.artworkLink} color-shift`}>
                        View Details
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link> */}
                    </div>
                  </div>
                </ParallaxEffect>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <ElegantButton href="/gallery" variant="outline" className="hoverable">
              View All Artworks
            </ElegantButton>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 relative overflow-hidden gradient-bg-2">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <ParallaxEffect speed={0.1} direction="left">
                <div className="relative sketch-stroke artistic-frame  ">
                  <div className= {` ${styles.aboutImageWrapper} max-w-[550px] mx-auto rounded-xl overflow-hidden shadow-xl `}>
                    <Image
                      src={about}
                      alt="Artist at work"
                      width={500}
                      height={600}
                      className="rounded-lg object-cover artistic-filter"
                    />
                  </div>
                  <div className={` ${styles.aboutImageAccent} max-w-[635px] mx-auto rounded-xl overflow-hidden shadow-xl `}></div>
                </div>
              </ParallaxEffect>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <ParallaxEffect speed={0.05} direction="right">
                <div className="border-accent pl-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow-elegant">
                    About the <ColorText>Artist</ColorText>
                  </h2>
                  <p className="text-lg mb-6 text-muted-foreground">
                    With over 10 years of experience, I blend traditional techniques with contemporary vision to create
                    unique pieces that speak to the soul. My work explores themes of nature, emotion, and human
                    connection.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className={`${styles.statCard} floating-element elegant-card`}>
                      <Palette className="h-8 w-8 mb-2 text-primary" />
                      <h3 className="text-2xl font-bold">200+</h3>
                      <p className="text-muted-foreground">Artworks Created</p>
                    </div>
                    <div
                      className={`${styles.statCard} floating-element elegant-card`}
                      style={{ animationDelay: "-3s" }}
                    >
                      <Brush className="h-8 w-8 mb-2 text-secondary" />
                      <h3 className="text-2xl font-bold">15+</h3>
                      <p className="text-muted-foreground">Exhibitions</p>
                    </div>
                  </div>
                  <ElegantButton href="/about" variant="artistic" className="hoverable">
                    Learn More About Me
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </ElegantButton>
                </div>
              </ParallaxEffect>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden bg-pattern-3">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-shadow-elegant">
              Artistic <ColorText>Services</ColorText>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="h-10 w-10" />,
                title: "Custom Sketches",
                description: "Commission unique sketches tailored to your vision and preferences.",
                color: "var(--primary)",
              },
              {
                icon: <ImageIcon className="h-10 w-10" />,
                title: "Art Workshops",
                description: "Learn sketching techniques and develop your artistic skills in interactive sessions.",
                color: "var(--secondary)",
              },
              {
                icon: <Brush className="h-10 w-10" />,
                title: "Exhibition Curation",
                description: "Professional curation services for galleries and private collections.",
                color: "var(--tertiary)",
              },
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div
                  className={`${styles.serviceCard} pulse-element elegant-card color-card`}
                  style={{ animationDelay: `${index * -1.5}s` }}
                >
                  <div
                    className={styles.serviceIcon}
                    style={{ backgroundColor: service.color + "20", color: service.color }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link
                    href="/contact"
                    className={`${styles.serviceLink} color-shift`}
                    style={{ color: service.color }}
                  >
                    Inquire Now
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`${styles.ctaSection} gradient-bg-1`}>
        <div className="container mx-auto px-4 py-20">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow-elegant">
                Ready to Add Some <ColorText>Color</ColorText> to Your Life?
              </h2>
              <p className="text-xl mb-8">
                Whether you're looking for a statement piece or want to commission custom artwork, I'm here to bring
                your vision to life.
              </p>
              <ElegantButton href="/contact" variant="artistic" className="hoverable">
                Get in Touch Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </ElegantButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
