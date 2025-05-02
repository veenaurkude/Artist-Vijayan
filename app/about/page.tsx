"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Calendar, Users } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import ArtisticBackground from "@/components/artistic-background"
import ParallaxEffect from "@/components/parallax-effect"
import AnimatedSketch from "@/components/animated-sketch"
import styles from "./about.module.css"

import about from "../../public/assets/images/artist.jpg";
import ColorText from "@/components/color-text"


export default function AboutPage() {
  const milestones = [
    { year: 2015, title: "First Solo Exhibition", description: "Debut exhibition at Gallery XYZ" },
    { year: 2017, title: "International Recognition", description: "Featured in Art Monthly magazine" },
    { year: 2019, title: "Artist Residency", description: "Three-month residency in Paris" },
    { year: 2021, title: "Museum Acquisition", description: "Work acquired by Contemporary Art Museum" },
    { year: 2023, title: "Published Art Book", description: "Released first collection of works in print" },
  ]

  return (
    <div className="pt-16">
      <ArtisticBackground variant="about" />

      {/* About Header */}
      <section 
      className={`${styles.aboutHeader} bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: 'url(/assets/bg/about.jpg)' }}
      >
        <div className="container mx-auto px-4 py-8 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About the <ColorText>Artist</ColorText>
            </h1>
            <p className="text-lg text-muted-foreground">
              Passionate creator exploring the boundaries of line and form
            </p>
          </motion.div>
        </div>
      </section>

      {/* Artist Bio */}
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-10">
          <AnimatedSketch />
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <ParallaxEffect speed={0.1} direction="left">
                <div className={`${styles.bioImageContainer} `} >
                  <Image
                    src={about}
                    alt="Artist Portrait"
                    width={600}
                    height={800}
                    className="rounded-lg object-cover"
                  />
                  <div className={`${styles.bioImageAccent} max-w-[650px] mx-auto rounded-xl overflow-hidden shadow-xl `}></div>
                </div>
              </ParallaxEffect>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <ParallaxEffect speed={0.05} direction="right">
                <div>
                  <h2 className="text-3xl font-bold mb-6">My Story</h2>
                  <div className="space-y-4 text-lg">
                    <p>
                      Hi, I'm Vijayan Raman, I am an Artist, Yogacharya, Yogaratna, Motivational Guru, Face Reader, and recipient of the prestigious <span className={styles.highlight}>Lokmat Professional Icons Award</span>. My journey is a fusion of
                vibrant creativity and ancient yogic wisdom — a celebration of expression, healing, and inner
                transformation.
                    </p>
                    <p>
                    Through the years, I've had the honor to inspire thousands through my art and teachings. Whether it's on
                    canvas or in a meditative space, my goal is to create moments that spark awareness, beauty, and peace.
                    </p>
                    <p>
                    Each artwork I create is not just a visual — it's a vibration. I blend color, form, and energy to
                reflect the silent stories of the soul. My art is deeply rooted in the philosophy of yoga — balance,
                breath, and being.
                    </p>
                    <p>
                    Thank you for visiting this space. May it awaken something beautiful in you.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className={`${styles.statCard} floating-element`}>
                      <Award className="h-8 w-8 mb-2 text-primary" />
                      <h3 className="text-2xl font-bold">15+</h3>
                      <p className="text-muted-foreground">Awards & Recognitions</p>
                    </div>
                    <div className={`${styles.statCard} floating-element`} style={{ animationDelay: "-3s" }}>
                      <Users className="h-8 w-8 mb-2 text-secondary" />
                      <h3 className="text-2xl font-bold">500+</h3>
                      <p className="text-muted-foreground">Workshop Students</p>
                    </div>
                  </div>
                </div>
              </ParallaxEffect>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Artist Statement</h2>
              <div className={styles.statementText}>
                <p>
                  "My work is an exploration of line, texture, and emotion. I seek to create pieces that invite viewers
                  to pause, reflect, and connect with their own experiences and feelings. Each stroke is intentional,
                  each composition deliberate, as I build layers of meaning into my sketches.
                </p>
                <p>
                  I believe art should be accessible yet thought-provoking, beautiful yet meaningful. My creative
                  process involves both careful planning and spontaneous expression, allowing for the magic that happens
                  when intuition takes over.
                </p>
                <p>
                  Through my art, I hope to create moments of contemplation and joy, inviting viewers to see the world
                  through a different lens, if only for a moment."
                </p>
              </div>
              <div className={styles.signature}>
                <span>Vijayan Raman</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Artistic <span className="brush-stroke">Journey</span>
            </h2>
          </ScrollReveal>

          <div className={styles.timeline}>
            {milestones.map((milestone, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineYear}>
                      <Calendar className="h-5 w-5 mr-2" />
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Skills & <span className="brush-stroke">Expertise</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { skill: "Pencil Drawing", level: 95 },
              { skill: "Charcoal", level: 85 },
              { skill: "Ink Drawing", level: 90 },
              { skill: "Digital Sketching", level: 75 },
              { skill: "Figure Drawing", level: 88 },
              { skill: "Mixed Media", level: 80 },
            ].map((skill, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className={styles.skillCard}>
                  <div className="flex justify-between mb-2">
                    <h3 className="font-bold">{skill.skill}</h3>
                    <span>{skill.level}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div
                      className={styles.skillProgress}
                      style={{ width: `${skill.level}%` }}
                      data-width={skill.level}
                    ></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className="container mx-auto px-4 py-16">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Interested in <span className="brush-stroke">Working Together</span>?
              </h2>
              <p className="text-xl mb-8">
                Whether you're looking to commission a piece, book a workshop, or discuss collaboration opportunities,
                I'd love to hear from you.
              </p>
              <Link href="/contact" className={`${styles.primaryButton} hoverable`}>
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
