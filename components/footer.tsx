import Link from "next/link";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";
import styles from "./footer.module.css";
import ColorText from "./color-text";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto px-8 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              
              <ColorText>The Art Of Vijayan</ColorText>
            </h3>
            <p className="text-muted-foreground mb-4">
              Creating vibrant and expressive art that captures the essence of
              life and imagination.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className={`${styles.footerLink} hoverable`}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className={`${styles.footerLink} hoverable`}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`${styles.footerLink} hoverable`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`${styles.footerLink} hoverable`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/artist.vijayan.raman"
                className={`${styles.socialIcon} hoverable`}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className={`${styles.socialIcon} hoverable`}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              {/* <Link href="https://twitter.com" className={`${styles.socialIcon} hoverable`} aria-label="Twitter">
                <Twitter size={20} />
              </Link> */}

              <Link
                href="mailto:vijayan.yoga@gmail.com"
                className={`${styles.socialIcon} hoverable`}
                aria-label="Email"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-6 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a href="/">
              <ColorText>The Art Of Vijayan</ColorText>
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
