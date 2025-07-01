"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Palette } from "lucide-react";
import styles from "./header.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ColorText from "./color-text";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      //  data-aos="fade-down"
      className={`${styles.header} ${
        scrolled ? styles.scrolled : ""
      } fixed w-full z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* <Link href="/" className={styles.logo}>
          <Palette className="mr-2 h-6 w-6" />
          <span className="font-bold text-xl">The Art Of Vijayan</span>
        </Link> */}

        <Link href="/" className={styles.logo}>
          <Palette className="mr-2 h-6 w-6 text-primary" />
          <span className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            <ColorText>The Art of Vijayan</ColorText>
          </span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                pathname === link.href ? styles.active : ""
              } hoverable relative `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="hoverable"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`${styles.mobileMenu} md:hidden`}>
          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileNavLink} ${
                  pathname === link.href ? styles.active : ""
                } hoverable text-lg py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
