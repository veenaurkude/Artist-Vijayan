"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import ArtisticBackground from "@/components/artistic-background"
import ParallaxEffect from "@/components/parallax-effect"
import AnimatedSketch from "@/components/animated-sketch"
import styles from "./contact.module.css"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }, 1500)
    }
  }

  return (
    <div className="pt-16">
      <ArtisticBackground variant="contact" />

      {/* Contact Header */}
      <section 
      className={`${styles.contactHeader} bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: 'url(/assets/bg/contact.jpg)' }}
      >
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="brush-stroke">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question, commission request, or just want to say hello? I'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 relative">
        <div className="absolute inset-0 opacity-10">
          <AnimatedSketch />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal>
              <ParallaxEffect speed={0.05} direction="up">
                <div className={`${styles.contactCard} floating-element`}>
                  <div className={styles.contactIcon}>
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Studio Location</h3>
                  <p className="text-muted-foreground">
                    Art Studio, Nagpur
                    
                  </p>
                </div>
              </ParallaxEffect>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <ParallaxEffect speed={0.05} direction="up">
                <div className={`${styles.contactCard} floating-element`} style={{ animationDelay: "-2s" }}>
                  <div className={styles.contactIcon}>
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                     <a href="tel:+919823189804">+91-9823189804</a> | <a href="tel:+919422439804">+91-9422439804</a>
                  </p>
                </div>
              </ParallaxEffect>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <ParallaxEffect speed={0.05} direction="up">
                <div className={`${styles.contactCard} floating-element`} style={{ animationDelay: "-4s" }}>
                  <div className={styles.contactIcon}>
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:vijayan.yoga@gmail.com">vijayan.yoga@gmail.com</a>
                  </p>
                </div>
              </ParallaxEffect>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      
      {/* <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Send a <span className="brush-stroke">Message</span>
              </h2>

              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className={`${styles.primaryButton} hoverable`}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`${styles.formInput} ${errors.name ? styles.inputError : ""}`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`${styles.formInput} ${errors.email ? styles.inputError : ""}`}
                        placeholder="Your email"
                      />
                      {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="subject" className="block mb-2 font-medium">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className={styles.formSelect}
                    >
                      <option value="">Select a subject</option>
                      <option value="Commission">Commission Inquiry</option>
                      <option value="Exhibition">Exhibition Opportunity</option>
                      <option value="Workshop">Workshop Information</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={6}
                      className={`${styles.formTextarea} ${errors.message ? styles.inputError : ""}`}
                      placeholder="Your message"
                    ></textarea>
                    {errors.message && <p className={styles.errorText}>{errors.message}</p>}
                  </div>

                  <div className="mt-8">
                    <button type="submit" className={`${styles.submitButton} hoverable`} disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section> */}

      {/* Studio Hours */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Studio <span className="brush-stroke">Hours</span>
              </h2>
              <div className={styles.hoursContainer}>
                <div className={styles.hoursRow}>
                  <span className="font-bold">Mon - Fri</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className={styles.hoursRow}>
                  <span className="font-bold">Saturday</span>
                  <span>11:00 AM - 4:00 PM</span>
                </div>
                <div className={styles.hoursRow}>
                  <span className="font-bold">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="mt-6 text-muted-foreground">
                Studio visits are by appointment only. Please contact me to schedule a visit.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
